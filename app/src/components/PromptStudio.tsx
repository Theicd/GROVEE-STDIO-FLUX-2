import { APP_NAME } from "../appBranding";
import { useLocale } from "../i18n/LocaleContext";
import { SD15_BROWSER_AVAILABLE, MODELS } from "../modelRegistry";
import { formatSdSettingsHint, type SdModelSettings } from "../modelSettings";

import { LangToggle } from "./LangToggle";

type PromptStudioProps = {
  prompt: string;
  sdSettings: SdModelSettings;
  deviceLabel: string;
  status: string;
  isGenerating: boolean;
  isModelLoaded: boolean;
  settingsOpen: boolean;
  genProgress?: number;
  genTokenCount?: number;
  genTokenTotal?: number;
  onPromptChange: (v: string) => void;
  onOpenSettings: () => void;
  onGenerate: () => void;
  onStop: () => void;
};

export function PromptStudio({
  prompt,
  sdSettings,
  deviceLabel,
  status,
  isGenerating,
  isModelLoaded,
  settingsOpen,
  genProgress = 0,
  genTokenCount = 0,
  genTokenTotal = 0,
  onPromptChange,
  onOpenSettings,
  onGenerate,
  onStop,
}: PromptStudioProps) {
  const { t, dir } = useLocale();
  const canGenerate =
    prompt.trim().length > 0 && !isGenerating && isModelLoaded && SD15_BROWSER_AVAILABLE;
  const model = MODELS.sd15;
  const settingsHint = formatSdSettingsHint(sdSettings);
  const scaleLabel = `${sdSettings.width}×${sdSettings.height}`;
  const pct = Math.round(genProgress * 100);

  return (
    <div className="workspace-header" data-testid="composer-bar" dir={dir}>
      <header className="hal-studio-bar">
        <div className="hal-studio-bar__status" dir="ltr">
          <span className="hal-pulse-dot" aria-hidden="true" />
          <span className="hal-studio-bar__label">{APP_NAME}</span>
        </div>
        <div className="hal-studio-bar__meta" dir="ltr">
          <span className="hal-meta-chip">
            {t.studio.memoryOk} <strong>OK</strong>
          </span>
          <span className="hal-meta-chip">
            {t.studio.model} <strong>{model.shortLabel}</strong>
          </span>
          <span className="hal-meta-chip hal-meta-chip--dim">{deviceLabel || "READY"}</span>
          <LangToggle />
        </div>
        <p className="hal-studio-bar__tagline" dir="ltr">
          {t.app.tagline}
        </p>
      </header>

      <section className="input-terminal">
        <label className="input-terminal__label" htmlFor="prompt-input">
          {t.studio.enterPrompt}
        </label>
        <div className="input-terminal__row">
          <input
            id="prompt-input"
            className="input-terminal__field"
            type="text"
            dir="auto"
            placeholder={t.studio.promptPlaceholder}
            aria-label={t.studio.enterPrompt}
            value={prompt}
            onChange={(e) => onPromptChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                if (canGenerate) onGenerate();
              }
            }}
            disabled={isGenerating}
          />
          <div className="input-terminal__actions">
            <button
              type="button"
              className={`input-terminal__gear ${settingsOpen ? "active" : ""}`}
              data-testid="settings-btn"
              aria-label={t.studio.settings}
              title={t.studio.settings}
              onClick={onOpenSettings}
              disabled={isGenerating}
            >
              ⚙
            </button>
            {isGenerating ? (
              <button
                type="button"
                className="btn-hal btn-hal--small btn-hal--stop"
                onClick={onStop}
              >
                {t.studio.stop}
              </button>
            ) : (
              <button
                type="button"
                className="btn-hal btn-hal--small btn-hal--play"
                data-testid="generate-btn"
                disabled={!canGenerate}
                onClick={onGenerate}
                aria-label={t.studio.generate}
              >
                <span className="btn-hal__shine" aria-hidden="true" />
                ▶
              </button>
            )}
          </div>
        </div>
        <div className="input-terminal__meta" dir="ltr" aria-live="polite">
          <span>{settingsHint}</span>
          <span>
            {t.studio.scale} {scaleLabel}
          </span>
          {isGenerating ? (
            <span className="input-terminal__progress" data-testid="inline-gen-progress">
              <span className="input-terminal__status">{t.generating.title}</span>
              <span className="input-terminal__progress-bar" aria-hidden="true">
                <span className="input-terminal__progress-fill" style={{ width: `${pct}%` }} />
              </span>
              <span className="input-terminal__progress-pct">{pct}%</span>
              {genTokenTotal > 0 ? (
                <span className="input-terminal__progress-steps">
                  {genTokenCount}/{genTokenTotal} {t.generating.steps}
                </span>
              ) : null}
            </span>
          ) : (
            <span className="input-terminal__status">{status}</span>
          )}
          {!SD15_BROWSER_AVAILABLE ? <span>{t.studio.sdUnavailable}</span> : null}
        </div>
      </section>
    </div>
  );
}
