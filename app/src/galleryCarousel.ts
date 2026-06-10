export const GALLERY_PAGE_SIZE = 3;

export function galleryPageCount(itemCount: number): number {
  if (itemCount <= 0) return 0;
  return Math.ceil(itemCount / GALLERY_PAGE_SIZE);
}

export function galleryPageItems<T>(items: T[], page: number): T[] {
  const start = page * GALLERY_PAGE_SIZE;
  return items.slice(start, start + GALLERY_PAGE_SIZE);
}

export function clampGalleryPage(page: number, itemCount: number): number {
  const pages = galleryPageCount(itemCount);
  if (pages === 0) return 0;
  return Math.max(0, Math.min(page, pages - 1));
}
