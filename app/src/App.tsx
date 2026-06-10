import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { JervCanvas } from "./JervCanvas";
import { createFluxWorker, postToFluxWorker } from "./fluxClient";
import { formatGenProgressStatus } from "./genProgressLabel";
import { pickLandingContent } from "./landingContent";
import { shouldEnterStudio, shouldShowIntro } from "./loadOrchestration";
import { buildFluxPrompt } from "./promptBuilder";
import { resolvePromptsForModel } from "./promptTranslate";
import {
  loadModelSettings,
  saveModelSettings,
  fluxSettingsToGeneration,
  type FluxModelSettings,
} from "./modelSettings";
import {
  DEFAULT_MODEL_ID,
  FLUX_BROWSER_AVAILABLE,
  MODELS,
  totalBytesForSelection,
  type ModelId,
} from "./modelRegistry";
import type { AppPhase, GenerationItem, ModelLoadState, WorkerToMain } from "./types";
import { IntroScreen } from "./components/IntroScreen";
import { PromptStudio } from "./components/PromptStudio";
import { SettingsPanel } from "./components/SettingsPanel";
import { StudioEmptyHero } from "./components/StudioEmptyHero";
import { StudioFooter } from "./components/StudioFooter";
import { GenerationGallery } from "./components/GenerationGallery";
import {
  deleteGalleryItem,
  loadGalleryFromStore,
  saveGalleryItem,
  trimGalleryIfNeeded,
} from "./galleryStore";
import { useLocale } from "./i18n/LocaleContext";
import { publishJanusQa, QA_AUTOGEN, QA_JANUS_MODE, QA_PROMPT } from "./janusQaProbe";

function emptyModelLoadState(): ModelLoadState {
  return {
    progress: 0,
    loaded: 0,
    total: MODELS.flux.estimatedBytes,
    downloadSpeed: 0,
    currentFile: "",
    status: "Waiting…",
    done: false,
    compiling: false,
  };
}

function markModelLoaded(
  setModelProgress: React.Dispatch<React.SetStateAction<Partial<Record<ModelId, ModelLoadState>>>>,
  recompute: (next: Partial<Record<ModelId, ModelLoadState>>) => void,
) {
  setModelProgress((prev) => {
    const next = {
      ...prev,
      flux: {
        ...(prev.flux ?? emptyModelLoadState()),
        progress: 100,
        done: true,
        compiling: false,
        status: "Ready",
      },
    };
    recompute(next);
    return next;
  });
}

export default function App() {
  const { t, dir, locale } = useLocale();
  const tRef = useRef(t);
  tRef.current = t;

  const fluxWorkerRef = useRef<Worker | null>(null);
  const genStartRef = useRef(0);
  const lastUserPromptRef = useRef("");
  const phaseRef = useRef<AppPhase>("start");
  const generatingModelRef = useRef(false);
  const fluxSettingsRef = useRef<FluxModelSettings>(loadModelSettings("flux"));
  const speedRef = useRef({ lastLoaded: 0, lastTime: 0, samples: [] as number[] });
  const loadedRef = useRef(false);

  const [phase, setPhase] = useState<AppPhase>("start");
  phaseRef.current = phase;

  const [isLoaded, setIsLoaded] = useState(false);
  loadedRef.current = isLoaded;

  const [webgpu, setWebgpu] = useState(true);
  const [deviceLabel, setDeviceLabel] = useState("");
  const [aggregateProgress, setAggregateProgress] = useState(0);
  const [aggregateLoaded, setAggregateLoaded] = useState(0);
  const [aggregateTotal, setAggregateTotal] = useState(0);
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [modelProgress, setModelProgress] = useState<Partial<Record<ModelId, ModelLoadState>>>({});
  const [status, setStatus] = useState("");
  const [error, setError] = useState<string | null>(null);

  const [prompt, setPrompt] = useState("");
  const [fluxSettings, setFluxSettings] = useState<FluxModelSettings>(() => loadModelSettings("flux"));
  const [settingsOpen, setSettingsOpen] = useState(false);
  fluxSettingsRef.current = fluxSettings;

  const [isGenerating, setIsGenerating] = useState(false);
  const [genProgress, setGenProgress] = useState(0);
  const [genTokens, setGenTokens] = useState({ count: 0, total: 0 });
  const [genHint, setGenHint] = useState("");
  const [gallery, setGallery] = useState<GenerationItem[]>([]);
  const galleryHydratedRef = useRef(false);
  const [workspaceVisible, setWorkspaceVisible] = useState(false);

  const landing = useMemo(
    () => pickLandingContent(t.studio.headlines, locale),
    [t.studio.headlines, locale],
  );
  const showEmptyHero = phase === "ready" && gallery.length === 0 && !isGenerating;
  const showIntro = shouldShowIntro(phase, isLoaded ? 1 : 0);

  const recomputeAggregate = useCallback((next: Partial<Record<ModelId, ModelLoadState>>) => {
    const row = next.flux;
    if (!row) return;
    const total = row.total || MODELS.flux.estimatedBytes;
    const loaded = Math.max(0, row.loaded);
    const progress = total > 0 ? (loaded / total) * 100 : row.progress;
    setAggregateLoaded((prev) => Math.max(prev, loaded));
    setAggregateTotal(total);
    setAggregateProgress((prev) => Math.max(prev, Math.min(100, progress)));
  }, []);

  const enterStudio = useCallback(() => {
    if (phaseRef.current === "ready") return;
    setPhase("ready");
    setStatus(tRef.current.status.modelReady);
  }, []);

  const onModelLoaded = useCallback(
    (device: string) => {
      markModelLoaded(setModelProgress, recomputeAggregate);
      setIsLoaded(true);
      loadedRef.current = true;
      setDeviceLabel(device);
      enterStudio();
    },
    [enterStudio, recomputeAggregate],
  );

  const onModelLoadFailed = useCallback(
    (message: string) => {
      setModelProgress((prev) => {
        const next = {
          ...prev,
          flux: {
            ...(prev.flux ?? emptyModelLoadState()),
            status: `Unavailable — ${message}`,
            done: false,
            compiling: false,
          },
        };
        recomputeAggregate(next);
        return next;
      });
      setError(message);
    },
    [recomputeAggregate],
  );

  const handleFluxMessage = useCallback(
    (msg: WorkerToMain) => {
      switch (msg.type) {
        case "webgpu_check":
          setWebgpu(msg.webgpu);
          break;
        case "download_progress": {
          const isCompile = msg.status === "compile";
          setModelProgress((prev) => {
            const row = prev.flux ?? emptyModelLoadState();
            const total = msg.total || row.total || MODELS.flux.estimatedBytes;
            const loaded = Math.min(total, Math.max(row.loaded, msg.loaded));
            const progress =
              total > 0
                ? (loaded / total) * 100
                : msg.progress <= 1
                  ? msg.progress * 100
                  : msg.progress;
            const next = {
              ...prev,
              flux: {
                ...row,
                loaded,
                total,
                progress: Math.max(row.progress, Math.min(100, progress)),
                filesCompleted: msg.filesCompleted ?? row.filesCompleted,
                fileCount: msg.fileCount ?? row.fileCount,
                currentFile: msg.file || row.currentFile,
                compiling: isCompile,
                status: isCompile
                  ? `Compiling ${msg.file || "transformer"}…`
                  : msg.file
                    ? `Downloading ${msg.file}…`
                    : row.status,
              },
            };
            recomputeAggregate(next);
            return next;
          });
          if (msg.file || isCompile) {
            setStatus(
              isCompile
                ? tRef.current.status.compiling
                : `${tRef.current.status.downloading} ${msg.file}…`,
            );
          }
          break;
        }
        case "status":
          setStatus(msg.text);
          break;
        case "loaded":
          onModelLoaded(msg.device);
          break;
        case "gen_progress": {
          if (!generatingModelRef.current) break;
          setGenProgress(msg.progress);
          setGenTokens({ count: msg.count, total: msg.total });
          const { label, hint } = formatGenProgressStatus(tRef.current.status.genPhases, msg);
          if (label) setStatus(label);
          setGenHint(hint);
          break;
        }
        case "image_ready": {
          if (!generatingModelRef.current) break;
          const url = URL.createObjectURL(msg.blob);
          const item: GenerationItem = {
            id: crypto.randomUUID(),
            prompt: lastUserPromptRef.current,
            negativePrompt: "",
            imageUrl: url,
            width: msg.width,
            height: msg.height,
            durationMs: performance.now() - genStartRef.current,
            createdAt: Date.now(),
            modelId: "flux",
          };
          setGallery((prev) => [item, ...prev]);
          void saveGalleryItem(item, msg.blob).then(() => trimGalleryIfNeeded());
          generatingModelRef.current = false;
          setIsGenerating(false);
          setGenProgress(0);
          setGenHint("");
          setStatus(tRef.current.status.imageReady);
          break;
        }
        case "aborted":
          if (generatingModelRef.current) {
            generatingModelRef.current = false;
            setIsGenerating(false);
            setGenProgress(0);
            setGenHint("");
            setStatus(tRef.current.status.stopped);
          }
          break;
        case "error":
          if (generatingModelRef.current) {
            generatingModelRef.current = false;
            setIsGenerating(false);
          }
          if (phaseRef.current === "loading" && !loadedRef.current) {
            onModelLoadFailed(msg.error);
          } else {
            setError(`FLUX.2: ${msg.error}`);
          }
          break;
        default:
          break;
      }
    },
    [onModelLoadFailed, onModelLoaded, recomputeAggregate],
  );

  const handleFluxMessageRef = useRef(handleFluxMessage);
  handleFluxMessageRef.current = handleFluxMessage;

  const ensureFluxWorker = useCallback(() => {
    if (fluxWorkerRef.current) return fluxWorkerRef.current;
    const worker = createFluxWorker({ onMessage: (m) => handleFluxMessageRef.current(m) });
    fluxWorkerRef.current = worker;
    postToFluxWorker(worker, { type: "check_webgpu" });
    return worker;
  }, []);

  useEffect(() => {
    const worker = ensureFluxWorker();
    postToFluxWorker(worker, { type: "check_webgpu" });
    return () => {
      fluxWorkerRef.current?.terminate();
      fluxWorkerRef.current = null;
    };
  }, [ensureFluxWorker]);

  useEffect(() => {
    if (phase === "start" && !isLoaded && !isGenerating) {
      setStatus(t.status.readyToLoad);
    }
  }, [t.status.readyToLoad, phase, isLoaded, isGenerating]);

  useEffect(() => {
    if (galleryHydratedRef.current) return;
    galleryHydratedRef.current = true;
    void loadGalleryFromStore()
      .then((items) => {
        if (items.length) setGallery(items);
      })
      .catch(() => {
        galleryHydratedRef.current = false;
      });
  }, []);

  useEffect(() => {
    return () => {
      setGallery((prev) => {
        for (const item of prev) URL.revokeObjectURL(item.imageUrl);
        return prev;
      });
    };
  }, []);

  const loadModels = useCallback(() => {
    if (!FLUX_BROWSER_AVAILABLE) {
      setError(tRef.current.errors.sdUnavailable);
      return;
    }
    setError(null);
    setPhase("loading");
    setIsLoaded(false);
    loadedRef.current = false;
    setAggregateProgress(0);
    setAggregateLoaded(0);
    setAggregateTotal(totalBytesForSelection(["flux"]));
    setDownloadSpeed(0);
    speedRef.current = { lastLoaded: 0, lastTime: 0, samples: [] };
    const initial = { flux: emptyModelLoadState() };
    setModelProgress(initial);
    recomputeAggregate(initial);
    setStatus(tRef.current.status.preparingDownload);
    ensureFluxWorker();
    postToFluxWorker(fluxWorkerRef.current!, { type: "load" });
  }, [ensureFluxWorker, recomputeAggregate]);

  useEffect(() => {
    if (phase !== "loading" && phase !== "ready") return;
    if (aggregateLoaded <= 0) return;
    const now = performance.now();
    const prev = speedRef.current;
    if (prev.lastTime > 0 && aggregateLoaded > prev.lastLoaded) {
      const dt = (now - prev.lastTime) / 1000;
      if (dt >= 0.4) {
        const instant = (aggregateLoaded - prev.lastLoaded) / dt;
        const samples = [...prev.samples, instant].slice(-6);
        setDownloadSpeed(samples.reduce((a, b) => a + b, 0) / samples.length);
        speedRef.current = { lastLoaded: aggregateLoaded, lastTime: now, samples };
        return;
      }
    }
    if (prev.lastTime === 0) {
      speedRef.current = { ...prev, lastLoaded: aggregateLoaded, lastTime: now };
    }
  }, [aggregateLoaded, phase]);

  const runGenerate = useCallback(
    (rawPrompt: string) => {
      if (!rawPrompt.trim() || !loadedRef.current) {
        if (!loadedRef.current) setError(tRef.current.status.notLoaded);
        return;
      }
      if (!FLUX_BROWSER_AVAILABLE) {
        setError(tRef.current.errors.sdUnavailable);
        return;
      }
      lastUserPromptRef.current = rawPrompt;
      setPrompt("");
      setError(null);
      generatingModelRef.current = true;
      setIsGenerating(true);
      setGenProgress(0);
      setGenTokens({ count: 0, total: 0 });
      setGenHint("");
      genStartRef.current = performance.now();
      setStatus(tRef.current.status.generating);
      const settings = fluxSettingsRef.current;

      void (async () => {
        const { positive } = await resolvePromptsForModel(rawPrompt, "");
        if (!generatingModelRef.current) return;
        const fluxPrompt = buildFluxPrompt(positive, settings.style);
        postToFluxWorker(ensureFluxWorker(), {
          type: "generate_image",
          prompt: fluxPrompt,
          generation: fluxSettingsToGeneration(settings),
        });
      })();
    },
    [ensureFluxWorker],
  );

  const updateFluxSettings = useCallback(
    (next: FluxModelSettings | ((prev: FluxModelSettings) => FluxModelSettings)) => {
      setFluxSettings((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next;
        saveModelSettings("flux", resolved);
        const persisted = loadModelSettings("flux");
        fluxSettingsRef.current = persisted;
        return persisted;
      });
    },
    [],
  );

  useEffect(() => {
    publishJanusQa({
      phase,
      webgpu,
      deviceLabel,
      loadedBytes: aggregateLoaded,
      totalBytes: aggregateTotal,
      progress: aggregateProgress,
      status,
      isGenerating,
      galleryCount: gallery.length,
      lastImageWidth: gallery[0]?.width ?? 0,
      lastImageHeight: gallery[0]?.height ?? 0,
      error,
    });
  }, [
    phase,
    webgpu,
    deviceLabel,
    aggregateLoaded,
    aggregateTotal,
    aggregateProgress,
    status,
    isGenerating,
    gallery,
    error,
  ]);

  useEffect(() => {
    if (!shouldEnterStudio(phase, isLoaded ? [DEFAULT_MODEL_ID] : [])) return;
    enterStudio();
  }, [phase, isLoaded, enterStudio]);

  useEffect(() => {
    if (showIntro) {
      setWorkspaceVisible(false);
      return;
    }
    const frame = requestAnimationFrame(() => setWorkspaceVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [showIntro]);

  useEffect(() => {
    if (!QA_JANUS_MODE || phase !== "start") return;
    const t = window.setTimeout(() => loadModels(), 400);
    return () => window.clearTimeout(t);
  }, [phase, loadModels]);

  useEffect(() => {
    if (!QA_JANUS_MODE || !QA_AUTOGEN || phase !== "ready" || isGenerating || gallery.length > 0) return;
    setPrompt(QA_PROMPT);
    const t = window.setTimeout(() => runGenerate(QA_PROMPT), 300);
    return () => window.clearTimeout(t);
  }, [phase, isGenerating, gallery.length, runGenerate]);

  const stopGenerate = () => {
    postToFluxWorker(ensureFluxWorker(), { type: "abort" });
  };

  const deleteItem = (id: string) => {
    void deleteGalleryItem(id);
    setGallery((prev) => {
      const item = prev.find((x) => x.id === id);
      if (item) URL.revokeObjectURL(item.imageUrl);
      return prev.filter((x) => x.id !== id);
    });
  };

  if (showIntro) {
    return (
      <main className="app hal-app" data-testid="app-root" data-phase={phase} dir={dir}>
        <IntroScreen
          phase={phase === "loading" ? "loading" : "start"}
          modelProgress={modelProgress}
          aggregateLoaded={aggregateLoaded}
          aggregateTotal={aggregateTotal}
          downloadSpeed={downloadSpeed}
          status={status}
          webgpu={webgpu}
          onLoad={loadModels}
        />
        {error ? (
          <div className="error-banner" role="alert">
            {error}
          </div>
        ) : null}
      </main>
    );
  }

  return (
    <main
      className={`app app--studio workspace hal-app${workspaceVisible ? " workspace--visible" : ""}`}
      data-testid="app-studio"
      data-phase="ready"
      dir={dir}
    >
      <JervCanvas />
      <div className="scanlines" aria-hidden="true" />

      <PromptStudio
        prompt={prompt}
        fluxSettings={fluxSettings}
        deviceLabel={deviceLabel}
        status={status}
        isGenerating={isGenerating}
        isModelLoaded={isLoaded}
        settingsOpen={settingsOpen}
        genProgress={genProgress}
        genTokenCount={genTokens.count}
        genTokenTotal={genTokens.total}
        genHint={genHint}
        onPromptChange={setPrompt}
        onOpenSettings={() => setSettingsOpen((v) => !v)}
        onGenerate={() => runGenerate(prompt)}
        onStop={stopGenerate}
      />

      <div className="studio-body">
        {showEmptyHero ? <StudioEmptyHero headline={landing.headline} /> : null}

        <GenerationGallery
          items={gallery}
          onRegenerate={(p) => {
            setPrompt(p);
            runGenerate(p);
          }}
          onDelete={deleteItem}
        />
      </div>

      <StudioFooter
        initialSuggestions={landing.suggestions}
        onPick={(p) => setPrompt(p)}
        disabled={isGenerating}
      />

      <SettingsPanel
        open={settingsOpen}
        deviceLabel={deviceLabel}
        fluxSettings={fluxSettings}
        onClose={() => setSettingsOpen(false)}
        onFluxChange={updateFluxSettings}
      />

      {error ? (
        <div className="error-banner error-banner--studio" role="alert">
          {error}
          <button type="button" onClick={() => setError(null)}>
            ×
          </button>
        </div>
      ) : null}
    </main>
  );
}
