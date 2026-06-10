import { MODELS, SD15_BROWSER_AVAILABLE, SD15_UNAVAILABLE_MESSAGE } from "../modelRegistry";
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

const STYLES: { id: StylePreset; label: string }[] = [
  { id: "photoreal", label: "Photoreal" },
  { id: "none", label: "None" },
  { id: "portrait", label: "Portrait" },
  { id: "landscape", label: "Landscape" },
  { id: "product", label: "Product" },
  { id: "anime", label: "Anime" },
];

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
  if (!open) return null;

  const model = MODELS.sd15;

  return (
    <div className="settings-overlay" role="presentation" onClick={onClose}>
      <aside
        className="settings-panel"
        dir="ltr"
        role="dialog"
        aria-labelledby="settings-title"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        data-testid="settings-panel"
      >
        <header className="settings-header">
          <div>
            <h2 id="settings-title">{model.label}</h2>
            <p className="settings-subtitle">Generation settings</p>
          </div>
          <button type="button" className="settings-close" onClick={onClose} aria-label="Close settings">
            ×
          </button>
        </header>

        <div className="settings-readonly" dir="ltr">
          <div>
            <span className="settings-readonly-label">Model ID</span>
            <span>{model.hfId}</span>
          </div>
          <div>
            <span className="settings-readonly-label">Device</span>
            <span>{deviceLabel || "—"}</span>
          </div>
          <div>
            <span className="settings-readonly-label">Resolution</span>
            <span>{model.resolution}</span>
          </div>
        </div>

        {!SD15_BROWSER_AVAILABLE ? (
          <div className="settings-unavailable-banner" role="alert">
            {SD15_UNAVAILABLE_MESSAGE}
          </div>
        ) : (
          <>
            <div className="settings-body">
              <SliderField
                label="Guidance scale (CFG)"
                value={sdSettings.guidanceScale}
                min={1}
                max={20}
                step={0.5}
                onChange={(guidanceScale) => onSdChange((prev) => ({ ...prev, guidanceScale }))}
              />
              <SliderField
                label="Inference steps"
                value={sdSettings.numInferenceSteps}
                min={5}
                max={50}
                step={1}
                onChange={(numInferenceSteps) =>
                  onSdChange((prev) => ({ ...prev, numInferenceSteps: Math.round(numInferenceSteps) }))
                }
                hint="5–50 steps (subsampled from SD 1.5 schedule)"
              />
              <p className="settings-note">SD 1.5 uses native negative_prompt (separate channel).</p>
            </div>

            <div className="settings-shared">
              <div className="style-chips" role="group" aria-label="Style preset">
                {STYLES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`style-chip ${sdSettings.style === s.id ? "active" : ""}`}
                    onClick={() => onSdChange((prev) => ({ ...prev, style: s.id }))}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <label className="settings-field">
                <span>Negative prompt</span>
                <p className="settings-field-hint">
                  Shared preset for all generations. Clear to disable custom terms. Style may still add terms unless
                  set to None.
                </p>
                <textarea
                  className="negative-textarea"
                  dir="ltr"
                  rows={4}
                  placeholder="Optional custom negative terms…"
                  value={globalNegativePrompt}
                  onChange={(e) => onGlobalNegativeChange(e.target.value)}
                />
              </label>

              <div className="settings-negative-actions">
                <button type="button" className="text-btn" onClick={() => onGlobalNegativeChange("")}>
                  Clear negative
                </button>
                <button type="button" className="text-btn" onClick={() => onGlobalNegativeChange(DEFAULT_NEGATIVE)}>
                  Reset to recommended defaults
                </button>
              </div>
            </div>

            <footer className="settings-footer">
              <button type="button" className="text-btn" onClick={() => onSdChange({ ...SD_SETTINGS_DEFAULTS })}>
                Reset all to recommended defaults
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
