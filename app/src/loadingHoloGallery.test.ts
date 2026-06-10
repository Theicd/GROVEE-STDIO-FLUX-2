import { describe, expect, it } from "vitest";

import {
  LOADING_HOLO_IMAGES,
  LOADING_HOLO_SLOT_SEC,
  holoSideCycleSec,
  splitLoadingHoloSides,
} from "./loadingHoloGallery";

describe("loadingHoloGallery", () => {
  it("defines eight blossom image URLs", () => {
    expect(LOADING_HOLO_IMAGES).toHaveLength(8);
    for (const url of LOADING_HOLO_IMAGES) {
      expect(url).toMatch(/^https:\/\/npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks\.blossom\.band\/.+\.png$/);
    }
  });

  it("splits images evenly across left and right sides", () => {
    const { left, right } = splitLoadingHoloSides();
    expect(left).toHaveLength(4);
    expect(right).toHaveLength(4);
    expect(left).toEqual(LOADING_HOLO_IMAGES.filter((_, i) => i % 2 === 0));
    expect(right).toEqual(LOADING_HOLO_IMAGES.filter((_, i) => i % 2 === 1));
  });

  it("uses ~10s slot timing with quick fade exit", () => {
    expect(LOADING_HOLO_SLOT_SEC).toBe(10);
    expect(holoSideCycleSec(4)).toBe(40);
  });
});
