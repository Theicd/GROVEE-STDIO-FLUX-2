import { describe, expect, it } from "vitest";

import {
  clampGalleryPage,
  galleryPageCount,
  galleryPageItems,
  GALLERY_PAGE_SIZE,
} from "./galleryCarousel";

describe("galleryCarousel", () => {
  it("pages items in groups of four", () => {
    const items = [1, 2, 3, 4, 5, 6, 7];
    expect(galleryPageCount(items.length)).toBe(2);
    expect(galleryPageItems(items, 0)).toEqual([1, 2, 3, 4]);
    expect(galleryPageItems(items, 1)).toEqual([5, 6, 7]);
    expect(GALLERY_PAGE_SIZE).toBe(4);
  });

  it("clamps page when items shrink", () => {
    expect(clampGalleryPage(3, 5)).toBe(1);
    expect(clampGalleryPage(0, 0)).toBe(0);
  });
});
