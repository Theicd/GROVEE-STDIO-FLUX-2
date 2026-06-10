import { describe, expect, it } from "vitest";

import {
  buildFullPrompt,
  buildSdPrompt,
  DEFAULT_NEGATIVE,
  isPromptTooShort,
} from "./promptBuilder";

describe("buildFullPrompt", () => {
  it("returns empty for blank positive", () => {
    expect(buildFullPrompt("  ", "")).toBe("");
  });

  it("merges positive with photoreal style only when negative empty", () => {
    const out = buildFullPrompt("red apple on table", "", "photoreal");
    expect(out).toContain("red apple on table");
    expect(out).toContain("photorealistic");
    expect(out).not.toContain(DEFAULT_NEGATIVE);
    expect(out).toContain("Avoid:");
  });

  it("uses custom negative and portrait style", () => {
    const out = buildFullPrompt("portrait of a knight", "watermark", "portrait");
    expect(out).toContain("Avoid: watermark");
    expect(out).toContain("bad face");
    expect(out).toContain("cinematic portrait");
  });

  it("boosts short prompts when style is none", () => {
    const out = buildFullPrompt("dragon", "", "none");
    expect(out).toContain("photorealistic");
  });
});

describe("buildSdPrompt", () => {
  it("returns separate positive and negative channels", () => {
    const out = buildSdPrompt("red apple on table", "", "photoreal");
    expect(out.prompt).toContain("red apple on table");
    expect(out.prompt).toContain("photorealistic");
    expect(out.negativePrompt).not.toContain(DEFAULT_NEGATIVE);
    expect(out.negativePrompt).toContain("cartoon");
    expect(out.prompt).not.toContain("Avoid:");
  });

  it("allows fully empty negative when style is none", () => {
    const out = buildSdPrompt("red apple on table", "", "none");
    expect(out.negativePrompt).toBe("");
  });

  it("uses custom negative without merging into positive", () => {
    const out = buildSdPrompt("portrait of a knight", "watermark", "portrait");
    expect(out.negativePrompt).toContain("watermark");
    expect(out.negativePrompt).toContain("bad face");
    expect(out.prompt).not.toContain("watermark");
  });
});

describe("isPromptTooShort", () => {
  it("flags very short prompts", () => {
    expect(isPromptTooShort("red apple")).toBe(true);
    expect(isPromptTooShort("A detailed cinematic portrait of a woman with blue eyes")).toBe(false);
  });
});
