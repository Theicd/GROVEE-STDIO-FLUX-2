import { APP_DOWNLOAD_PREFIX } from "../appBranding";
import { useLocale } from "../i18n/LocaleContext";
import { DEFAULT_MODEL_ID, getModel } from "../modelRegistry";
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
  const model = getModel(item.modelId ?? DEFAULT_MODEL_ID);

  const download = () => {
    const a = document.createElement("a");
    a.href = item.imageUrl;
    a.download = `${APP_DOWNLOAD_PREFIX}-${item.id}.png`;
    a.click();
  };

  const copyPrompt = async () => {
    await navigator.clipboard.writeText(item.prompt);
  };

  const isCarousel = variant === "carousel";

  const actionButtons = (
    <>
      <button
        type="button"
        className={isCarousel ? "img-card__toolbar-btn" : "hal-card-btn"}
        onClick={download}
      >
        {t.gallery.save}
      </button>
      {!isCarousel ? (
        <>
          <button type="button" className="hal-card-btn" onClick={() => void copyPrompt()}>
            {t.gallery.copy}
          </button>
          <button type="button" className="hal-card-btn" onClick={() => onRegenerate(item.prompt)}>
            {t.gallery.rerun}
          </button>
        </>
      ) : null}
      <button
        type="button"
        className={
          isCarousel
            ? "img-card__toolbar-btn img-card__toolbar-btn--danger"
            : "hal-card-btn hal-card-btn--danger"
        }
        onClick={() => onDelete(item.id)}
      >
        {t.gallery.del}
      </button>
    </>
  );

  return (
    <article className={`img-card${isCarousel ? " img-card--carousel" : ""}`}>
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
            {isCarousel ? (
              <p
                className="img-card__prompt img-card__prompt--overlay"
                dir="auto"
                title={item.prompt}
              >
                {item.prompt}
              </p>
            ) : null}
            <span className="img-card__badge" dir="ltr">
              {model.shortLabel}
            </span>
            <span className="img-card__stats" dir="ltr">
              {item.width}×{item.height} · {(item.durationMs / 1000).toFixed(1)}s
            </span>
          </div>
        </button>
        {isCarousel ? (
          <div className="img-card__toolbar" onClick={(e) => e.stopPropagation()}>
            {actionButtons}
          </div>
        ) : null}
      </div>
      {!isCarousel ? (
        <div className="img-card__meta">
          <p className="img-card__prompt" dir="auto" title={item.prompt}>
            {item.prompt}
          </p>
          <div className="img-card__actions">{actionButtons}</div>
        </div>
      ) : null}
    </article>
  );
}
