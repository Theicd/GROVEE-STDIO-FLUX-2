import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { JervCanvas } from "./JervCanvas";
import { createSdWorker, postToSdWorker } from "./sdClient";
import { pickLandingContent } from "./landingContent";
import { shouldEnterStudio, shouldShowIntro } from "./loadOrchestration";
import { buildSdPromptFromSettings } from "./promptBuilder";
import { resolvePromptsForModel } from "./promptTranslate";
import {
  loadGlobalNegativePrompt,
  loadModelSettings,
  saveGlobalNegativePrompt,
  saveModelSettings,
  sdSettingsToGeneration,
  type SdModelSettings,
} from "./modelSettings";
import {
  DEFAULT_MODEL_ID,
  MODELS,
  SD15_BROWSER_AVAILABLE,
  SD15_UNAVAILABLE_MESSAGE,
  totalBytesForSelection,
  type ModelId,
} from "./modelRegistry";
import type { AppPhase, GenerationItem, ModelLoadState, WorkerToMain } from "./types";
import { IntroScreen } from "./components/IntroScreen";
import { PromptStudio } from "./components/PromptStudio";
import { SettingsPanel } from "./components/SettingsPanel";
import { StudioLanding } from "./components/StudioLanding";
import { GenerationGallery } from "./components/GenerationGallery";
import { GeneratingSplash } from "./components/GeneratingSplash";
import { publishJanusQa, QA_AUTOGEN, QA_JANUS_MODE, QA_PROMPT } from "./janusQaProbe";

function emptyModelLoadState(): ModelLoadState {
  return {
    progress: 0,
    loaded: 0,
    total: MODELS.sd15.estimatedBytes,
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
      sd15: {
        ...(prev.sd15 ?? emptyModelLoadState()),
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
  const sdWorkerRef = useRef<Worker | null>(null);
  const genStartRef = useRef(0);
  const lastUserPromptRef = useRef("");
  const phaseRef = useRef<AppPhase>("start");
  const generatingModelRef = useRef(false);
  const sdSettingsRef = useRef<SdModelSettings>(loadModelSettings("sd15"));
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
  const [status, setStatus] = useState("Ready to load SD 1.5");
  const [error, setError] = useState<string | null>(null);

  const [prompt, setPrompt] = useState("");
  const [globalNegativePrompt, setGlobalNegativePrompt] = useState(() => loadGlobalNegativePrompt());
  const globalNegativePromptRef = useRef(globalNegativePrompt);
  const [sdSettings, setSdSettings] = useState<SdModelSettings>(() => loadModelSettings("sd15"));
  const [settingsOpen, setSettingsOpen] = useState(false);
  globalNegativePromptRef.current = globalNegativePrompt;
  sdSettingsRef.current = sdSettings;

  const [isGenerating, setIsGenerating] = useState(false);
  const [genProgress, setGenProgress] = useState(0);
  const [genTokens, setGenTokens] = useState({ count: 0, total: 0 });
  const [gallery, setGallery] = useState<GenerationItem[]>([]);
  const [workspaceVisible, setWorkspaceVisible] = useState(false);

  const landing = useMemo(() => pickLandingContent(), []);
  const showLanding = phase === "ready" && gallery.length === 0 && !isGenerating;
  const showIntro = shouldShowIntro(phase, isLoaded ? 1 : 0);
  const model = MODELS.sd15;

  const recomputeAggregate = useCallback((next: Partial<Record<ModelId, ModelLoadState>>) => {
    const row = next.sd15;
    if (!row) return;
    setAggregateLoaded(row.loaded);
    setAggregateTotal(row.total || MODELS.sd15.estimatedBytes);
    setAggregateProgress(Math.min(100, Math.max(0, row.progress)));
  }, []);

  const enterStudio = useCallback(() => {
    if (phaseRef.current === "ready") return;
    setPhase("ready");
    setStatus(`${model.shortLabel} ready — studio open`);
  }, [model.shortLabel]);

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
          sd15: {
            ...(prev.sd15 ?? emptyModelLoadState()),
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

  const handleSdMessage = useCallback(
    (msg: WorkerToMain) => {
      switch (msg.type) {
        case "webgpu_check":
          setWebgpu(msg.webgpu);
          break;
        case "download_progress": {
          const isCompile = msg.status === "compile";
          setModelProgress((prev) => {
            const row = prev.sd15 ?? emptyModelLoadState();
            const next = {
              ...prev,
              sd15: {
                ...row,
                loaded: msg.loaded,
                total: msg.total,
                progress:
                  msg.total > 0
                    ? (msg.loaded / msg.total) * 100
                    : msg.progress <= 1
                      ? msg.progress * 100
                      : msg.progress,
                currentFile: msg.file,
                compiling: isCompile,
                status: isCompile
                  ? `Compiling ${msg.file || "UNet"}…`
                  : msg.file
                    ? `Downloading ${msg.file}…`
                    : row.status,
              },
            };
            recomputeAggregate(next);
            return next;
          });
          if (msg.file || isCompile) {
            setStatus(isCompile ? "SD 1.5: compiling on WebGPU (2–5 min)…" : `SD 1.5: downloading ${msg.file}…`);
          }
          break;
        }
        case "status":
          setStatus(msg.text);
          break;
        case "loaded":
          onModelLoaded(msg.device);
          break;
        case "gen_progress":
          if (!generatingModelRef.current) break;
          setGenProgress(msg.progress);
          setGenTokens({ count: msg.count, total: msg.total });
          break;
        case "image_ready": {
          if (!generatingModelRef.current) break;
          const url = URL.createObjectURL(msg.blob);
          const item: GenerationItem = {
            id: crypto.randomUUID(),
            prompt: lastUserPromptRef.current,
            negativePrompt: globalNegativePromptRef.current,
            imageUrl: url,
            width: msg.width,
            height: msg.height,
            durationMs: performance.now() - genStartRef.current,
            createdAt: Date.now(),
            modelId: "sd15",
          };
          setGallery((prev) => [item, ...prev]);
          generatingModelRef.current = false;
          setIsGenerating(false);
          setGenProgress(0);
          setStatus("Image ready");
          break;
        }
        case "aborted":
          if (generatingModelRef.current) {
            generatingModelRef.current = false;
            setIsGenerating(false);
            setGenProgress(0);
            setStatus("Generation stopped");
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
            setError(`SD 1.5: ${msg.error}`);
          }
          break;
        default:
          break;
      }
    },
    [onModelLoadFailed, onModelLoaded, recomputeAggregate],
  );

  const handleSdMessageRef = useRef(handleSdMessage);
  handleSdMessageRef.current = handleSdMessage;

  const ensureSdWorker = useCallback(() => {
    if (sdWorkerRef.current) return sdWorkerRef.current;
    const worker = createSdWorker({ onMessage: (m) => handleSdMessageRef.current(m) });
    sdWorkerRef.current = worker;
    postToSdWorker(worker, { type: "check_webgpu" });
    return worker;
  }, []);

  useEffect(() => {
    const worker = ensureSdWorker();
    postToSdWorker(worker, { type: "check_webgpu" });
    return () => {
      sdWorkerRef.current?.terminate();
      sdWorkerRef.current = null;
    };
  }, [ensureSdWorker]);

  const loadModels = useCallback(() => {
    if (!SD15_BROWSER_AVAILABLE) {
      setError(SD15_UNAVAILABLE_MESSAGE);
      return;
    }
    setError(null);
    setPhase("loading");
    setIsLoaded(false);
    loadedRef.current = false;
    setAggregateProgress(0);
    setAggregateLoaded(0);
    setAggregateTotal(totalBytesForSelection(["sd15"]));
    setDownloadSpeed(0);
    speedRef.current = { lastLoaded: 0, lastTime: 0, samples: [] };
    const initial = { sd15: emptyModelLoadState() };
    setModelProgress(initial);
    recomputeAggregate(initial);
    setStatus("Preparing download…");
    ensureSdWorker();
    postToSdWorker(sdWorkerRef.current!, { type: "load" });
  }, [ensureSdWorker, recomputeAggregate]);

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
        if (!loadedRef.current) setError("SD 1.5 is not loaded yet");
        return;
      }
      if (!SD15_BROWSER_AVAILABLE) {
        setError(SD15_UNAVAILABLE_MESSAGE);
        return;
      }
      lastUserPromptRef.current = rawPrompt;
      setError(null);
      generatingModelRef.current = true;
      setIsGenerating(true);
      setGenProgress(0);
      setGenTokens({ count: 0, total: 0 });
      genStartRef.current = performance.now();
      setStatus("Generating…");
      const settings = sdSettingsRef.current;
      const negative = globalNegativePromptRef.current;

      void (async () => {
        const { positive, negative: modelNegative } = await resolvePromptsForModel(
          rawPrompt,
          negative,
        );
        if (!generatingModelRef.current) return;
        const { prompt: sdPrompt, negativePrompt } = buildSdPromptFromSettings(
          positive,
          settings,
          modelNegative,
        );
        postToSdWorker(ensureSdWorker(), {
          type: "generate_image",
          prompt: sdPrompt,
          negativePrompt,
          generation: sdSettingsToGeneration(settings),
        });
      })();
    },
    [ensureSdWorker],
  );

  const updateGlobalNegativePrompt = useCallback((value: string) => {
    globalNegativePromptRef.current = value;
    setGlobalNegativePrompt(value);
    saveGlobalNegativePrompt(value);
  }, []);

  const updateSdSettings = useCallback((next: SdModelSettings | ((prev: SdModelSettings) => SdModelSettings)) => {
    setSdSettings((prev) => {
      const resolved = typeof next === "function" ? next(prev) : next;
      saveModelSettings("sd15", resolved);
      const persisted = loadModelSettings("sd15");
      sdSettingsRef.current = persisted;
      return persisted;
    });
  }, []);

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
    postToSdWorker(ensureSdWorker(), { type: "abort" });
  };

  const deleteItem = (id: string) => {
    setGallery((prev) => {
      const item = prev.find((x) => x.id === id);
      if (item) URL.revokeObjectURL(item.imageUrl);
      return prev.filter((x) => x.id !== id);
    });
  };

  if (showIntro) {
    return (
      <main className="app hal-app" data-testid="app-root" data-phase={phase} dir="rtl">
        <IntroScreen
          phase={phase === "loading" ? "loading" : "start"}
          modelProgress={modelProgress}
          aggregateProgress={aggregateProgress}
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
      dir="rtl"
    >
      <JervCanvas />
      <div className="scanlines" aria-hidden="true" />

      <PromptStudio
        prompt={prompt}
        sdSettings={sdSettings}
        deviceLabel={deviceLabel}
        status={status}
        isGenerating={isGenerating}
        isModelLoaded={isLoaded}
        settingsOpen={settingsOpen}
        onPromptChange={setPrompt}
        onOpenSettings={() => setSettingsOpen((v) => !v)}
        onGenerate={() => runGenerate(prompt)}
        onStop={stopGenerate}
      />

      <div className="studio-body">
        {isGenerating ? (
          <GeneratingSplash
            progress={genProgress}
            tokenCount={genTokens.count}
            tokenTotal={genTokens.total}
            label="steps"
          />
        ) : null}

        {showLanding ? (
          <StudioLanding
            headline={landing.headline}
            initialSuggestions={landing.suggestions}
            onPick={(p) => setPrompt(p)}
          />
        ) : null}

        <GenerationGallery
          items={gallery}
          onRegenerate={(p) => {
            setPrompt(p);
            runGenerate(p);
          }}
          onDelete={deleteItem}
        />
      </div>

      <SettingsPanel
        open={settingsOpen}
        deviceLabel={deviceLabel}
        globalNegativePrompt={globalNegativePrompt}
        sdSettings={sdSettings}
        onClose={() => setSettingsOpen(false)}
        onGlobalNegativeChange={updateGlobalNegativePrompt}
        onSdChange={updateSdSettings}
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
