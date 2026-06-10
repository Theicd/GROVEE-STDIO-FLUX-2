import type { GenerationItem } from "../types";
import { ImageCard } from "./ImageCard";

type GenerationGalleryProps = {
  items: GenerationItem[];
  onRegenerate: (prompt: string) => void;
  onDelete: (id: string) => void;
};

export function GenerationGallery({ items, onRegenerate, onDelete }: GenerationGalleryProps) {
  if (!items.length) return null;

  return (
    <section className="hal-gallery" aria-label="Generated images" dir="rtl">
      <h2 className="hal-gallery__title" dir="ltr">
        OUTPUT BUFFER
      </h2>
      <div className="hal-gallery__grid">
        {items.map((item) => (
          <ImageCard key={item.id} item={item} onRegenerate={onRegenerate} onDelete={onDelete} />
        ))}
      </div>
    </section>
  );
}
