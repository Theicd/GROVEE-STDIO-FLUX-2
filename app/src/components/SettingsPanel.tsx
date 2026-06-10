import { useLocale } from "../i18n/LocaleContext";
import { FLUX_BROWSER_AVAILABLE, MODELS } from "../modelRegistry";
import {
  FLUX_RESOLUTIONS,
  FLUX_SETTINGS_DEFAULTS,
  type FluxModelSettings,
} from "../modelSettings";
import type { StylePreset } from "../promptBuilder";

type SettingsPanelProps = {
  open: boolean;
  deviceLabel: string;
  fluxSettings: FluxModelSettings;
  onClose: () => void;
  onFluxChange: (next: FluxModelSettings | ((prev: FluxModelSettings) => FluxModelSettings)) => void;
};

const STYLE_IDS: StylePreset[] = ["photoreal", "none", "portrait", "landscape", "product", "anime"];

function SliderField({
  label,
  value,
  min,
  max,
  step,
  onChange,
  hint,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  hint?: string;
}) {
  return (
    <label className="settings-field">
      <div className="settings-field-head">
        <span>{label}</span>
        <span className="settings-field-value" dir="ltr">
          {step < 1 ? value.toFixed(2) : value}
        </span>
      </div>
      <input
        type="range"
        dir="ltr"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      {hint ? <span className="settings-field-hint">{hint}</span> : null}
    </label>
  );
}

export function SettingsPanel({
  open,
  deviceLabel,
  fluxSettings,
  onClose,
  onFluxChange,
}: SettingsPanelProps) {
  const { t, dir } = useLocale();

  if (!open) return null;

  const model = MODELS.flux;

  return (
    <div className="settings-overlay" role="presentation" onClick={onClose}>
      <aside
        className="settings-panel"
        dir={dir}
        role="dialog"
        aria-labelledby="settings-title"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        data-testid="settings-panel"
      >
        <header className="settings-header">
          <div>
            <h2 id="settings-title">{t.settings.title}</h2>
            <p className="settings-subtitle">{t.settings.subtitle}</p>
          </div>
          <button type="button" className="settings-close" onClick={onClose} aria-label={t.settings.close}>
            ×
          </button>
        </header>

        <div className="settings-readonly" dir="ltr">
          <div>
            <span className="settings-readonly-label">{t.settings.modelId}</span>
            <span>{model.hfId}</span>
          </div>
          <div>
            <span className="settings-readonly-label">{t.settings.device}</span>
            <span>{deviceLabel || "—"}</span>
          </div>
          <div>
            <span className="settings-readonly-label">{t.settings.resolution}</span>
            <span>{fluxSettings.width}×{fluxSettings.height}</span>
          </div>
        </div>

        {!FLUX_BROWSER_AVAILABLE ? (
          <div className="settings-unavailable-banner" role="alert">
            {t.errors.sdUnavailable}
          </div>
        ) : (
          <>
            <div className="settings-body">
              <SliderField
                label={t.settings.steps}
                value={fluxSettings.numInferenceSteps}
                min={1}
                max={8}
                step={1}
                onChange={(numInferenceSteps) =>
                  onFluxChange((prev) => ({
                    ...prev,
                    numInferenceSteps: Math.round(numInferenceSteps),
                  }))
                }
                hint={t.settings.stepsHint}
              />
              <p className="settings-note">{t.settings.negativeNote}</p>
            </div>

            <div className="settings-shared">
              <div className="style-chips" role="group" aria-label={t.settings.resolution}>
                {FLUX_RESOLUTIONS.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`style-chip ${fluxSettings.width === size && fluxSettings.height === size ? "active" : ""}`}
                    onClick={() =>
                      onFluxChange((prev) => ({ ...prev, width: size, height: size }))
                    }
                  >
                    {size}×{size}
                  </button>
                ))}
              </div>

              <div className="style-chips" role="group" aria-label={t.settings.stylePreset}>
                {STYLE_IDS.map((id) => (
                  <button
                    key={id}
                    type="button"
                    className={`style-chip ${fluxSettings.style === id ? "active" : ""}`}
                    onClick={() => onFluxChange((prev) => ({ ...prev, style: id }))}
                  >
                    {t.settings.styles[id]}
                  </button>
                ))}
              </div>
            </div>

            <footer className="settings-footer">
              <button type="button" className="text-btn" onClick={() => onFluxChange({ ...FLUX_SETTINGS_DEFAULTS })}>
                {t.settings.resetAll}
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
