import { useEffect, useMemo, useRef, useState } from "react";

import { APP_NAME } from "../appBranding";
import { useLocaleTypewriter } from "../hooks/useLocaleTypewriter";
import { useLocale } from "../i18n/LocaleContext";
import { JervCanvas } from "../JervCanvas";
import { formatBytes, formatSpeed } from "../formatBytes";
import { DEFAULT_MODEL_ID, MODELS } from "../modelRegistry";
import type { ModelLoadState } from "../types";
import { CircularProgress } from "./CircularProgress";
import { IntroTopBar } from "./IntroTopBar";
import { LoadingHoloGallery } from "./LoadingHoloGallery";

type IntroScreenProps = {
  phase: "start" | "loading";
  modelProgress: Partial<Record<typeof DEFAULT_MODEL_ID, ModelLoadState>>;
  aggregateProgress: number;
  aggregateLoaded: number;
  aggregateTotal: number;
  downloadSpeed: number;
  status: string;
  webgpu: boolean;
  onLoad: () => void;
};

export function IntroScreen({
  phase,
  modelProgress,
  aggregateProgress,
  aggregateLoaded,
  aggregateTotal,
  downloadSpeed,
  status,
  webgpu,
  onLoad,
}: IntroScreenProps) {
  const { t, dir } = useLocale();
  const model = MODELS.sd15;
  const sdProgress = modelProgress.sd15;
  const displayTotal = aggregateTotal > 0 ? aggregateTotal : model.estimatedBytes;
  const pct = Math.min(100, Math.max(0, Math.round(aggregateProgress)));
  const hasByteProgress = aggregateLoaded > 0;
  const indeterminate = phase === "loading" && !hasByteProgress;
  const compilePulse = sdProgress?.compiling === true;
  const typewriterText = useLocaleTypewriter();
  const [consoleLines, setConsoleLines] = useState<string[]>([t.intro.standby]);
  const lastLogRef = useRef("");

  useEffect(() => {
    setConsoleLines([t.intro.standby]);
    lastLogRef.current = "";
  }, [t.intro.standby]);

  const logLine = useMemo(() => {
    if (compilePulse) return `> COMPILE: ${sdProgress?.currentFile || "UNet"}…`;
    if (sdProgress?.currentFile) return `> FETCH: ${sdProgress.currentFile}`;
    if (status) return `> ${status.toUpperCase()}`;
    return t.intro.standby;
  }, [compilePulse, sdProgress?.currentFile, status, t.intro.standby]);

  useEffect(() => {
    if (phase !== "loading" || logLine === lastLogRef.current) return;
    lastLogRef.current = logLine;
    setConsoleLines((prev) => [...prev, logLine].slice(-3));
  }, [phase, logLine]);

  return (
    <div
      className="intro-screen hal-landing"
      data-testid="intro-screen"
      data-phase={phase}
      aria-busy={phase === "loading"}
      dir={dir}
    >
      <JervCanvas />
      <LoadingHoloGallery />
      <div className="scanlines" aria-hidden="true" />
      <IntroTopBar webgpu={webgpu} />

      <div className="hal-landing__content">
        <header className="hal-landing__header">
          <p className="hal-landing__eyebrow" dir="ltr">
            {t.app.tagline}
          </p>
          <h1 className="hal-landing__title" dir="ltr">
            {APP_NAME}
          </h1>
          <p className="hal-landing__typewriter" aria-live="polite">
            {typewriterText}
            <span className="hal-cursor" aria-hidden="true">
              ▌
            </span>
          </p>
        </header>

        <p className="hal-landing__note">{t.intro.firstLoadNote}</p>

        {!webgpu ? (
          <p className="hal-warn" role="alert">
            {t.intro.webgpuWarn}
          </p>
        ) : null}

        {phase === "start" ? (
          <div className="hal-landing__start">
            <div className="hal-model-chip" data-testid="model-sd15" dir="ltr">
              <span className="hal-model-chip__name">{model.label}</span>
              <span className="hal-model-chip__meta">{t.intro.modelMeta}</span>
            </div>

            <button
              type="button"
              className="btn-hal"
              data-testid="load-model"
              onClick={onLoad}
            >
              <span className="btn-hal__shine" aria-hidden="true" />
              {t.intro.initialize}
            </button>
          </div>
        ) : (
          <div className="hal-download" data-testid="download-progress">
            <CircularProgress
              percent={sdProgress?.done ? 100 : pct}
              size={112}
              indeterminate={indeterminate || compilePulse}
              label={compilePulse ? "COMPILE" : model.shortLabel}
            />

            <div className="hal-console" dir="ltr" data-testid="download-bytes">
              {consoleLines.map((line, i) => (
                <div key={`${line}-${i}`} className="hal-console__line">
                  {line}
                </div>
              ))}
              <div className="hal-console__line hal-console__line--meta">
                {formatBytes(aggregateLoaded)} / {formatBytes(displayTotal)} · {formatSpeed(downloadSpeed)}
              </div>
            </div>

            <div className="compact-progress-row hal-download__bar" data-testid="download-progress-sd15">
              <span className="compact-progress-label">{model.shortLabel}</span>
              <div className="compact-progress-track">
                <div
                  className={`compact-progress-fill${compilePulse ? " compact-progress-fill--compile" : ""}`}
                  style={{ width: sdProgress?.done ? "100%" : `${pct}%` }}
                />
              </div>
              <span className="compact-progress-pct">
                {sdProgress?.done ? "✓" : compilePulse ? "…" : `${pct}%`}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
