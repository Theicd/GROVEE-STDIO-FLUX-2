/** Holographic preview images on the intro screen (start + loading). */
export const LOADING_HOLO_IMAGES = [
  "https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/a3a3965e4fabd0cf744c37df37f79ccddc4e825648d42e2b737fe627a5e97c68.png",
  "https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/47c3c15382e94ea71f08c76fe4ead909a7c399df8ab9b93a3560114454c6e1de.png",
  "https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/7807b28d6bb324e27095c8ee7ed3e51157f4201dcd31709839c84011430cc078.png",
  "https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/5e33ff4597345c34fa96b63f4871e73b146a880943608ca1757158f3d1a5c71a.png",
  "https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/0ba4f4f5f0351bbc11e69d627b47471b37844c0e0b50debdae67b9d8c7ebc640.png",
  "https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/f36919370a6e4ffb31c5a9e184f360f912fba8d7e6ed03daade9e40cb566223b.png",
  "https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/bb2ab3a3410ce91a5425ab2c8b4cbd56335894c07537ee5258e61db0b354fd9d.png",
  "https://npub1hgne62teaw8nqtnu8d0rln6f5l7xr5fk63tya2wysyl8v6d3y7ks5h9kks.blossom.band/58c9db2329620a7045503ededebbd3aca6552d68992516af93be48147cd26bf6.png",
] as const;

/** Seconds per image on one side (10–14s range). */
export const LOADING_HOLO_SLOT_SEC = 13;

/** Right side starts mid-cycle so sides do not pulse in sync. */
export const LOADING_HOLO_RIGHT_OFFSET_SEC = 6.5;

/** Keyframe phases within each image slot (approach → hold → fade). */
export const LOADING_HOLO_PHASE = {
  approachEnd: 0.4,
  holdEnd: 0.55,
  peakOpacity: 0.85,
  peakScale: 1.15,
  startScale: 0.08,
} as const;

export function splitLoadingHoloSides(): { left: string[]; right: string[] } {
  const left: string[] = [];
  const right: string[] = [];
  LOADING_HOLO_IMAGES.forEach((url, i) => {
    if (i % 2 === 0) left.push(url);
    else right.push(url);
  });
  return { left, right };
}

export function holoSideCycleSec(imageCount: number): number {
  return imageCount * LOADING_HOLO_SLOT_SEC;
}
