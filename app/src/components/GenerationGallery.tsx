import { useCallback, useEffect, useRef, useState } from "react";

import {
  clampGalleryPage,
  galleryPageCount,
  galleryPageItems,
  GALLERY_PAGE_SIZE,
} from "../galleryCarousel";
import { useLocale } from "../i18n/LocaleContext";
import type { GenerationItem } from "../types";

import { GalleryLightbox } from "./GalleryLightbox";
import { ImageCard } from "./ImageCard";

type GenerationGalleryProps = {
  items: GenerationItem[];
  onRegenerate: (prompt: string) => void;
  onDelete: (id: string) => void;
};

type GallerySlide = {
  from: number;
  to: number;
  dir: "next" | "prev";
};

const GALLERY_SLIDE_MS = 620;

function GalleryTrack({
  items,
  className,
  onOpen,
  onRegenerate,
  onDelete,
  ariaHidden,
}: {
  items: GenerationItem[];
  className: string;
  onOpen: (item: GenerationItem) => void;
  onRegenerate: (prompt: string) => void;
  onDelete: (id: string) => void;
  ariaHidden?: boolean;
}) {
  const padCount = Math.max(0, GALLERY_PAGE_SIZE - items.length);

  return (
    <div className={className} aria-hidden={ariaHidden}>
      {items.map((item) => (
        <ImageCard
          key={item.id}
          item={item}
          variant="carousel"
          onOpen={() => onOpen(item)}
          onRegenerate={onRegenerate}
          onDelete={onDelete}
        />
      ))}
      {padCount > 0
        ? Array.from({ length: padCount }, (_, i) => (
            <div key={`pad-${i}`} className="hal-gallery__pad" aria-hidden="true" />
          ))
        : null}
    </div>
  );
}

export function GenerationGallery({ items, onRegenerate, onDelete }: GenerationGalleryProps) {
  const { t, dir } = useLocale();
  const [page, setPage] = useState(0);
  const [slide, setSlide] = useState<GallerySlide | null>(null);
  const [lightboxItem, setLightboxItem] = useState<GenerationItem | null>(null);
  const slideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pages = galleryPageCount(items.length);
  const safePage = clampGalleryPage(page, items.length);
  const visible = galleryPageItems(items, safePage);
  const exiting = slide ? galleryPageItems(items, slide.from) : [];
  const entering = slide ? galleryPageItems(items, slide.to) : visible;
  const displayPage = slide?.to ?? safePage;
  const canPrev = safePage > 0 && !slide;
  const canNext = safePage < pages - 1 && !slide;

  const clearSlideTimer = useCallback(() => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
      slideTimerRef.current = null;
    }
  }, []);

  const goToPage = useCallback(
    (target: number) => {
      if (slide || target === safePage || target < 0 || target >= pages) return;
      clearSlideTimer();
      const dir: GallerySlide["dir"] = target > safePage ? "next" : "prev";
      setSlide({ from: safePage, to: target, dir });
      slideTimerRef.current = setTimeout(() => {
        setPage(target);
        setSlide(null);
        slideTimerRef.current = null;
      }, GALLERY_SLIDE_MS);
    },
    [clearSlideTimer, pages, safePage, slide],
  );

  useEffect(() => {
    setPage((p) => clampGalleryPage(p, items.length));
  }, [items.length]);

  useEffect(() => () => clearSlideTimer(), [clearSlideTimer]);

  useEffect(() => {
    if (!lightboxItem) return;
    const still = items.find((i) => i.id === lightboxItem.id);
    if (!still) setLightboxItem(null);
  }, [items, lightboxItem]);

  if (!items.length) return null;

  return (
    <>
      <section className="hal-gallery" aria-label={t.gallery.ariaLabel} dir={dir}>
        <div className="hal-gallery__head">
          <h2 className="hal-gallery__title">{t.gallery.title}</h2>
          {pages > 1 ? (
            <span className="hal-gallery__page" dir="ltr">
              {displayPage + 1}/{pages}
            </span>
          ) : null}
        </div>

        <div className={`hal-gallery__carousel${slide ? " is-sliding" : ""}`}>
          {canPrev ? (
            <button
              type="button"
              className="hal-gallery__nav hal-gallery__nav--prev"
              aria-label={t.gallery.prev}
              onClick={() => goToPage(safePage - 1)}
            >
              ‹
            </button>
          ) : null}

          <div className="hal-gallery__viewport" dir={dir}>
            {slide ? (
              <GalleryTrack
                items={exiting}
                className={`hal-gallery__track hal-gallery__track--exit hal-gallery__track--${slide.dir}`}
                onOpen={setLightboxItem}
                onRegenerate={onRegenerate}
                onDelete={onDelete}
                ariaHidden
              />
            ) : null}

            <GalleryTrack
              items={entering}
              className={`hal-gallery__track${slide ? ` hal-gallery__track--enter hal-gallery__track--${slide.dir}` : ""}`}
              onOpen={setLightboxItem}
              onRegenerate={onRegenerate}
              onDelete={onDelete}
            />

            {slide ? <div className="hal-gallery__sweep" aria-hidden="true" /> : null}
          </div>

          {canNext ? (
            <button
              type="button"
              className="hal-gallery__nav hal-gallery__nav--next"
              aria-label={t.gallery.next}
              onClick={() => goToPage(safePage + 1)}
            >
              ›
            </button>
          ) : null}
        </div>
      </section>

      {lightboxItem ? (
        <GalleryLightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      ) : null}
    </>
  );
}
