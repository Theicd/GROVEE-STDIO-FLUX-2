import { afterEach, describe, expect, it, vi } from "vitest";
import { containsHebrew, resolvePromptsForModel, translateToEnglish } from "./promptTranslate";

describe("containsHebrew", () => {
  it("detects Hebrew script", () => {
    expect(containsHebrew("חתול על עץ")).toBe(true);
    expect(containsHebrew("red apple")).toBe(false);
    expect(containsHebrew("cat ו dog")).toBe(true);
  });
});

describe("translateToEnglish", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns English text unchanged without fetch", async () => {
    const fetch = vi.fn();
    vi.stubGlobal("fetch", fetch);
    await expect(translateToEnglish("A giant moon above the ocean")).resolves.toBe(
      "A giant moon above the ocean",
    );
    expect(fetch).not.toHaveBeenCalled();
  });

  it("translates Hebrew via Google translate response shape", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [[["cat on a tree", null, null, null]], null, "iw"],
      }),
    );
    await expect(translateToEnglish("חתול על עץ")).resolves.toBe("cat on a tree");
  });

  it("falls back to original on fetch failure", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network")));
    await expect(translateToEnglish("נוף יפה")).resolves.toBe("נוף יפה");
  });
});

describe("resolvePromptsForModel", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("translates only fields that contain Hebrew", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [[["beautiful landscape", null, null, null]], null, "iw"],
      }),
    );
    const out = await resolvePromptsForModel("נוף יפה", "blurry, watermark");
    expect(out.positive).toBe("beautiful landscape");
    expect(out.negative).toBe("blurry, watermark");
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
