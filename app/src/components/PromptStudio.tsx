import { SD15_BROWSER_AVAILABLE, MODELS } from "../modelRegistry";
import { formatSdSettingsHint, type SdModelSettings } from "../modelSettings";
import { APP_NAME, APP_TAGLINE } from "../appBranding";

type PromptStudioProps = {
  prompt: string;
  sdSettings: SdModelSettings;
  deviceLabel: string;
  status: string;
  isGenerating: boolean;
  isModelLoaded: boolean;
  settingsOpen: boolean;
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
  onPromptChange,
  onOpenSettings,
  onGenerate,
  onStop,
}: PromptStudioProps) {
  const canGenerate =
    prompt.trim().length > 0 && !isGenerating && isModelLoaded && SD15_BROWSER_AVAILABLE;
  const model = MODELS.sd15;
  const settingsHint = formatSdSettingsHint(sdSettings);
  const scaleLabel = `${sdSettings.width}×${sdSettings.height}`;

  return (
    <div className="workspace-header" data-testid="composer-bar" dir="rtl">
      <header className="hal-studio-bar">
        <div className="hal-studio-bar__status" dir="ltr">
          <span className="hal-pulse-dot" aria-hidden="true" />
          <span className="hal-studio-bar__label">{APP_NAME}</span>
        </div>
        <div className="hal-studio-bar__meta" dir="ltr">
          <span className="hal-meta-chip">
            MEMORY <strong>OK</strong>
          </span>
          <span className="hal-meta-chip">
            MODEL <strong>{model.shortLabel}</strong>
          </span>
          <span className="hal-meta-chip hal-meta-chip--dim">{deviceLabel || "READY"}</span>
        </div>
        <p className="hal-studio-bar__tagline" dir="ltr">
          {APP_TAGLINE}
        </p>
      </header>

      <section className="input-terminal">
        <label className="input-terminal__label" htmlFor="prompt-input" dir="ltr">
          ENTER PROMPT
        </label>
        <div className="input-terminal__row">
          <input
            id="prompt-input"
            className="input-terminal__field"
            type="text"
            dir="auto"
            placeholder="תיאור תמונה…"
            aria-label="Image prompt"
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
              aria-label={`${model.label} settings`}
              title="Settings"
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
                STOP
              </button>
            ) : (
              <button
                type="button"
                className="btn-hal btn-hal--small btn-hal--play"
                data-testid="generate-btn"
                disabled={!canGenerate}
                onClick={onGenerate}
                aria-label="Generate image"
              >
                <span className="btn-hal__shine" aria-hidden="true" />
                ▶
              </button>
            )}
          </div>
        </div>
        <div className="input-terminal__meta" dir="ltr">
          <span>{settingsHint}</span>
          <span>SCALE {scaleLabel}</span>
          <span className="input-terminal__status">{isGenerating ? "GENERATING…" : status}</span>
          {!SD15_BROWSER_AVAILABLE ? <span>SD UNAVAILABLE</span> : null}
        </div>
      </section>
    </div>
  );
}
