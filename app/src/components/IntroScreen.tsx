import { useEffect, useMemo, useRef, useState } from "react";

import { APP_NAME } from "../appBranding";
import { useLocaleTypewriter } from "../hooks/useLocaleTypewriter";
import { useLocale } from "../i18n/LocaleContext";
import { JervCanvas } from "../JervCanvas";
import { downloadProgressPercent, formatBytes, formatDownloadPercent, formatSpeed } from "../formatBytes";
import { DEFAULT_MODEL_ID, MODELS } from "../modelRegistry";
import type { ModelLoadState } from "../types";
import { CircularProgress } from "./CircularProgress";
import { IntroMarqueeFooter } from "./IntroMarqueeFooter";
import { IntroTopBar } from "./IntroTopBar";
import { LoadingHoloGallery } from "./LoadingHoloGallery";

type IntroScreenProps = {
  phase: "start" | "loading";
  modelProgress: Partial<Record<typeof DEFAULT_MODEL_ID, ModelLoadState>>;
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
  aggregateLoaded,
  aggregateTotal,
  downloadSpeed,
  status,
  webgpu,
  onLoad,
}: IntroScreenProps) {
  const { t, dir } = useLocale();
  const model = MODELS.flux;
  const fluxProgress = modelProgress.flux;
  const displayTotal = aggregateTotal > 0 ? aggregateTotal : model.estimatedBytes;
  const displayLoaded = Math.min(aggregateLoaded, displayTotal);
  const pctValue = downloadProgressPercent(displayLoaded, displayTotal);
  const filesCompleted = fluxProgress?.filesCompleted ?? 0;
  const fileCount = fluxProgress?.fileCount ?? 0;
  const pctLabel = formatDownloadPercent(pctValue);
  const hasByteProgress = aggregateLoaded > 0;
  const indeterminate = phase === "loading" && !hasByteProgress;
  const compilePulse = fluxProgress?.compiling === true;
  const typewriterText = useLocaleTypewriter();
  const [consoleLines, setConsoleLines] = useState<string[]>([t.intro.standby]);
  const [showAltInitLabel, setShowAltInitLabel] = useState(false);
  const lastLogRef = useRef("");

  useEffect(() => {
    setConsoleLines([t.intro.standby]);
    lastLogRef.current = "";
  }, [t.intro.standby]);

  useEffect(() => {
    setShowAltInitLabel(false);
  }, [t.intro.initialize, t.intro.initializeAlt]);

  useEffect(() => {
    if (phase !== "start") return;
    const id = window.setInterval(() => {
      setShowAltInitLabel((prev) => !prev);
    }, 2800);
    return () => window.clearInterval(id);
  }, [phase]);

  const logLine = useMemo(() => {
    if (compilePulse) return `> COMPILE: ${fluxProgress?.currentFile || "transformer"}…`;
    if (fluxProgress?.currentFile) return `> FETCH: ${fluxProgress.currentFile}`;
    if (status) return `> ${status.toUpperCase()}`;
    return t.intro.standby;
  }, [compilePulse, fluxProgress?.currentFile, status, t.intro.standby]);

  useEffect(() => {
    if (phase !== "loading" || logLine === lastLogRef.current) return;
    lastLogRef.current = logLine;
    setConsoleLines((prev) => {
      const last = prev[prev.length - 1];
      if (last?.startsWith("> FETCH:") && logLine.startsWith("> FETCH:")) {
        return [...prev.slice(0, -1), logLine].slice(-3);
      }
      return [...prev, logLine].slice(-3);
    });
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

        {!webgpu ? (
          <p className="hal-warn" role="alert">
            {t.intro.webgpuWarn}
          </p>
        ) : null}

        {phase === "start" ? (
          <div className="hal-landing__start">
            <button
              type="button"
              className="btn-hal btn-hal--hero"
              data-testid="load-model"
              onClick={onLoad}
              aria-label={`${t.intro.initialize} / ${t.intro.initializeAlt}`}
            >
              <span className="btn-hal__shine" aria-hidden="true" />
              <span className="btn-hal__label" aria-live="polite">
                <span
                  className={`btn-hal__label-text${showAltInitLabel ? "" : " is-visible"}`}
                >
                  {t.intro.initialize}
                </span>
                <span
                  className={`btn-hal__label-text btn-hal__label-text--alt${showAltInitLabel ? " is-visible" : ""}`}
                >
                  {t.intro.initializeAlt}
                </span>
              </span>
            </button>
          </div>
        ) : (
          <div className="hal-download" data-testid="download-progress">
            <CircularProgress
              percent={fluxProgress?.done ? 100 : pctValue}
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
                {fileCount > 0 ? `${filesCompleted}/${fileCount} files · ` : null}
                {formatBytes(displayLoaded)} / {formatBytes(displayTotal)} · {formatSpeed(downloadSpeed)}
              </div>
            </div>

            <div className="compact-progress-row hal-download__bar" data-testid="download-progress-flux">
              <span className="compact-progress-label">{model.shortLabel}</span>
              <div className="compact-progress-track">
                <div
                  className={`compact-progress-fill${compilePulse ? " compact-progress-fill--compile" : ""}`}
                  style={{ width: fluxProgress?.done ? "100%" : `${pctValue}%` }}
                />
              </div>
              <span className="compact-progress-pct">
                {fluxProgress?.done ? "✓" : compilePulse ? "…" : `${pctLabel}%`}
              </span>
            </div>
          </div>
        )}
      </div>

      <IntroMarqueeFooter />
    </div>
  );
}
