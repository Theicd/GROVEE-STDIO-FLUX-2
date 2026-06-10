import { useLocale } from "../i18n/LocaleContext";
import type { GenerationItem } from "../types";
import { ImageCard } from "./ImageCard";

type GenerationGalleryProps = {
  items: GenerationItem[];
  onRegenerate: (prompt: string) => void;
  onDelete: (id: string) => void;
};

export function GenerationGallery({ items, onRegenerate, onDelete }: GenerationGalleryProps) {
  const { t, dir } = useLocale();

  if (!items.length) return null;

  return (
    <section className="hal-gallery" aria-label={t.gallery.ariaLabel} dir={dir}>
      <h2 className="hal-gallery__title">{t.gallery.title}</h2>
      <div className="hal-gallery__grid">
        {items.map((item) => (
          <ImageCard key={item.id} item={item} onRegenerate={onRegenerate} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
}
