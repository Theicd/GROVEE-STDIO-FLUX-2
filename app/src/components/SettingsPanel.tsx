import { useLocale } from "../i18n/LocaleContext";
import { MODELS, SD15_BROWSER_AVAILABLE } from "../modelRegistry";
import { SD_SETTINGS_DEFAULTS, type SdModelSettings } from "../modelSettings";
import { DEFAULT_NEGATIVE, type StylePreset } from "../promptBuilder";

type SettingsPanelProps = {
  open: boolean;
  deviceLabel: string;
  globalNegativePrompt: string;
  sdSettings: SdModelSettings;
  onClose: () => void;
  onGlobalNegativeChange: (value: string) => void;
  onSdChange: (next: SdModelSettings | ((prev: SdModelSettings) => SdModelSettings)) => void;
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
  globalNegativePrompt,
  sdSettings,
  onClose,
  onGlobalNegativeChange,
  onSdChange,
}: SettingsPanelProps) {
  const { t, dir } = useLocale();

  if (!open) return null;

  const model = MODELS.sd15;

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
            <span>{model.resolution}</span>
          </div>
        </div>

        {!SD15_BROWSER_AVAILABLE ? (
          <div className="settings-unavailable-banner" role="alert">
            {t.errors.sdUnavailable}
          </div>
        ) : (
          <>
            <div className="settings-body">
              <SliderField
                label={t.settings.cfg}
                value={sdSettings.guidanceScale}
                min={1}
                max={20}
                step={0.5}
                onChange={(guidanceScale) => onSdChange((prev) => ({ ...prev, guidanceScale }))}
              />
              <SliderField
                label={t.settings.steps}
                value={sdSettings.numInferenceSteps}
                min={5}
                max={50}
                step={1}
                onChange={(numInferenceSteps) =>
                  onSdChange((prev) => ({ ...prev, numInferenceSteps: Math.round(numInferenceSteps) }))
                }
                hint={t.settings.stepsHint}
              />
              <p className="settings-note">{t.settings.negativeNote}</p>
            </div>

            <div className="settings-shared">
              <div className="style-chips" role="group" aria-label={t.settings.stylePreset}>
                {STYLE_IDS.map((id) => (
                  <button
                    key={id}
                    type="button"
                    className={`style-chip ${sdSettings.style === id ? "active" : ""}`}
                    onClick={() => onSdChange((prev) => ({ ...prev, style: id }))}
                  >
                    {t.settings.styles[id]}
                  </button>
                ))}
              </div>

              <label className="settings-field">
                <span>{t.settings.negativePrompt}</span>
                <p className="settings-field-hint">{t.settings.negativeHint}</p>
                <textarea
                  className="negative-textarea"
                  dir="auto"
                  rows={4}
                  placeholder={t.settings.negativePlaceholder}
                  value={globalNegativePrompt}
                  onChange={(e) => onGlobalNegativeChange(e.target.value)}
                />
              </label>

              <div className="settings-negative-actions">
                <button type="button" className="text-btn" onClick={() => onGlobalNegativeChange("")}>
                  {t.settings.clearNegative}
                </button>
                <button type="button" className="text-btn" onClick={() => onGlobalNegativeChange(DEFAULT_NEGATIVE)}>
                  {t.settings.resetNegative}
                </button>
              </div>
            </div>

            <footer className="settings-footer">
              <button type="button" className="text-btn" onClick={() => onSdChange({ ...SD_SETTINGS_DEFAULTS })}>
                {t.settings.resetAll}
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
