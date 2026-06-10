import { APP_DOWNLOAD_PREFIX } from "../appBranding";
import { useLocale } from "../i18n/LocaleContext";
import { MODELS } from "../modelRegistry";
import type { GenerationItem } from "../types";

type ImageCardProps = {
  item: GenerationItem;
  variant?: "grid" | "carousel";
  onOpen?: () => void;
  onRegenerate: (prompt: string) => void;
  onDelete: (id: string) => void;
};

export function ImageCard({
  item,
  variant = "grid",
  onOpen,
  onRegenerate,
  onDelete,
}: ImageCardProps) {
  const { t } = useLocale();
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
    <article className={`img-card${variant === "carousel" ? " img-card--carousel" : ""}`}>
      <div className="img-card__visual">
        <button
          type="button"
          className="img-card__open"
          onClick={onOpen}
          aria-label={t.gallery.openImage}
          disabled={!onOpen}
        >
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
            <span className="img-card__stats" dir="ltr">
              {item.width}×{item.height} · {(item.durationMs / 1000).toFixed(1)}s
            </span>
          </div>
          {variant === "carousel" ? (
            <div className="img-card__reflect" aria-hidden="true">
              <img src={item.imageUrl} alt="" />
            </div>
          ) : null}
        </button>
      </div>
      <div className="img-card__meta">
        <p className="img-card__prompt" dir="auto" title={item.prompt}>
          {item.prompt}
        </p>
        <div className="img-card__actions">
          <button type="button" className="hal-card-btn" onClick={download}>
            {t.gallery.save}
          </button>
          <button type="button" className="hal-card-btn" onClick={() => void copyPrompt()}>
            {t.gallery.copy}
          </button>
          <button type="button" className="hal-card-btn" onClick={() => onRegenerate(item.prompt)}>
            {t.gallery.rerun}
          </button>
          <button
            type="button"
            className="hal-card-btn hal-card-btn--danger"
            onClick={() => onDelete(item.id)}
          >
            {t.gallery.del}
          </button>
        </div>
      </div>
    </article>
  );
}
