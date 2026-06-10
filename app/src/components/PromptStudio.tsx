import { useLocale } from "../i18n/LocaleContext";
import { FLUX_BROWSER_AVAILABLE } from "../modelRegistry";
import { formatFluxSettingsHint, type FluxModelSettings } from "../modelSettings";

import { StudioTopBar } from "./StudioTopBar";

type PromptStudioProps = {
  prompt: string;
  fluxSettings: FluxModelSettings;
  deviceLabel: string;
  status: string;
  isGenerating: boolean;
  isModelLoaded: boolean;
  settingsOpen: boolean;
  genProgress?: number;
  genTokenCount?: number;
  genTokenTotal?: number;
  genHint?: string;
  onPromptChange: (v: string) => void;
  onOpenSettings: () => void;
  onGenerate: () => void;
  onStop: () => void;
};

export function PromptStudio({
  prompt,
  fluxSettings,
  deviceLabel,
  status,
  isGenerating,
  isModelLoaded,
  settingsOpen,
  genProgress = 0,
  genTokenCount = 0,
  genTokenTotal = 0,
  genHint = "",
  onPromptChange,
  onOpenSettings,
  onGenerate,
  onStop,
}: PromptStudioProps) {
  const { t, dir } = useLocale();
  const canGenerate =
    prompt.trim().length > 0 && !isGenerating && isModelLoaded && FLUX_BROWSER_AVAILABLE;
  const settingsHint = formatFluxSettingsHint(fluxSettings);
  const scaleLabel = `${fluxSettings.width}×${fluxSettings.height}`;
  const pct = Math.min(100, Math.max(0, Math.round(genProgress * 100)));
  const showStepCounter = isGenerating && genTokenTotal > 0 && genTokenTotal <= 16;

  return (
    <div className="workspace-header" data-testid="composer-bar" dir={dir}>
      <StudioTopBar deviceLabel={deviceLabel} />

      <section className="input-terminal">
        <div className="input-terminal__row">
          <div
            className={`input-terminal__field-wrap${prompt.length === 0 ? " is-empty" : ""}`}
          >
            {prompt.length === 0 ? (
              <span className="input-terminal__hint" aria-hidden="true">
                {t.studio.promptPlaceholder}
                <span className="input-terminal__hint-caret" />
              </span>
            ) : null}
            <input
              id="prompt-input"
              className="input-terminal__field"
              type="text"
              dir="auto"
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
          </div>
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
        <div className="input-terminal__rail" dir="ltr" aria-live="polite">
          <div className="input-terminal__rail-group input-terminal__rail-group--params">
            <span>{settingsHint}</span>
            <span className="input-terminal__rail-dot" aria-hidden="true">
              ·
            </span>
            <span>{scaleLabel}</span>
          </div>
          <div
            className={`input-terminal__rail-group input-terminal__rail-group--runtime${isGenerating ? " input-terminal__rail-group--active" : ""}`}
            data-testid={isGenerating ? "inline-gen-progress" : undefined}
          >
            {isGenerating ? (
              <>
                <span className="input-terminal__status">
                  {status || t.generating.title}
                </span>
                <span className="input-terminal__progress-bar" aria-hidden="true">
                  <span className="input-terminal__progress-fill" style={{ width: `${pct}%` }} />
                </span>
                <span className="input-terminal__progress-pct">{pct}%</span>
                {showStepCounter ? (
                  <span className="input-terminal__progress-steps">
                    {genTokenCount}/{genTokenTotal}
                  </span>
                ) : null}
                {genHint ? (
                  <span className="input-terminal__status-hint" dir={dir}>
                    {genHint}
                  </span>
                ) : null}
              </>
            ) : (
              <span className="input-terminal__status">{status}</span>
            )}
          </div>
          {!FLUX_BROWSER_AVAILABLE ? (
            <span className="input-terminal__rail-warn">{t.studio.sdUnavailable}</span>
          ) : null}
        </div>
      </section>
    </div>
  );
}
