import type { GenerationItem } from "../types";
import { APP_DOWNLOAD_PREFIX } from "../appBranding";
import { MODELS } from "../modelRegistry";

type ImageCardProps = {
  item: GenerationItem;
  onRegenerate: (prompt: string) => void;
  onDelete: (id: string) => void;
};

export function ImageCard({ item, onRegenerate, onDelete }: ImageCardProps) {
  const model = MODELS.sd15;

  const download = () => {
    const a = document.createElement("a");
    a.href = item.imageUrl;
    a.download = `${APP_DOWNLOAD_PREFIX}-${item.id}.png`;
    a.click();
  };

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(item.prompt);
  };

  return (
    <article className="img-card">
      <div className="img-card__media">
        <img
          src={item.imageUrl}
          alt={item.prompt}
          loading="lazy"
          data-testid="gallery-image"
        />
        <span className="img-card__badge" dir="ltr">
          {model.shortLabel}
        </span>
      </div>
      <div className="img-card__meta">
        <p className="img-card__prompt" dir="auto" title={item.prompt}>
          {item.prompt}
        </p>
        <p className="img-card__stats" dir="ltr">
          {item.width}×{item.height} · {(item.durationMs / 1000).toFixed(1)}s
        </p>
        <div className="img-card__actions">
          <button type="button" className="hal-card-btn" onClick={download}>
            SAVE
          </button>
          <button type="button" className="hal-card-btn" onClick={() => void copyPrompt()}>
            COPY
          </button>
          <button type="button" className="hal-card-btn" onClick={() => onRegenerate(item.prompt)}>
            RE-RUN
          </button>
          <button type="button" className="hal-card-btn hal-card-btn--danger" onClick={() => onDelete(item.id)}>
            DEL
          </button>
        </div>
      </div>
    </article>
  );
}
