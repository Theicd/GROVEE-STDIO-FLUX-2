import { DEFAULT_NEGATIVE, type StylePreset } from "../promptBuilder";

type NegativePromptPanelProps = {
  open: boolean;
  negative: string;
  style: StylePreset;
  nativeNegative?: boolean;
  onToggle: () => void;
  onNegativeChange: (v: string) => void;
  onStyleChange: (s: StylePreset) => void;
};

const STYLES: { id: StylePreset; label: string }[] = [
  { id: "photoreal", label: "Photoreal" },
  { id: "none", label: "None" },
  { id: "portrait", label: "Portrait" },
  { id: "landscape", label: "Landscape" },
  { id: "product", label: "Product" },
  { id: "anime", label: "Anime" },
];

export function NegativePromptPanel({
  open,
  negative,
  style,
  nativeNegative = false,
  onToggle,
  onNegativeChange,
  onStyleChange,
}: NegativePromptPanelProps) {
  return (
    <div className="negative-panel">
      <button type="button" className="negative-panel-toggle" onClick={onToggle}>
        {open ? "▾" : "▸"} Negative & style
        {nativeNegative ? <span className="negative-native-badge">native</span> : null}
      </button>
      {open ? (
        <div className="negative-panel-body">
          {nativeNegative ? (
            <p className="negative-native-hint" dir="ltr">
              Sent as <code>negative_prompt</code> to the SD 1.5 pipeline (not merged into your prompt).
            </p>
          ) : (
            <p className="negative-native-hint" dir="ltr">
              Merged into the prompt as &quot;Avoid: …&quot; (Janus has no native negative channel).
            </p>
          )}
          <div className="style-chips" role="group" aria-label="Style preset">
            {STYLES.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`style-chip ${style === s.id ? "active" : ""}`}
                onClick={() => onStyleChange(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
          <textarea
            className="negative-textarea"
            dir="ltr"
            rows={3}
            value={negative}
            placeholder={DEFAULT_NEGATIVE}
            onChange={(e) => onNegativeChange(e.target.value)}
          />
          <button
            type="button"
            className="text-btn"
            onClick={() => onNegativeChange(DEFAULT_NEGATIVE)}
          >
            Reset to defaults
          </button>
        </div>
      ) : null}
    </div>
  );
}
