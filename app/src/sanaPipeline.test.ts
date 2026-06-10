import { describe, expect, it } from "vitest";

import { MODELS } from "./modelRegistry";
import { SANA_ONNX_TOTAL_BYTES } from "./sanaPipeline";

describe("sanaPipeline", () => {
  it("estimates ONNX download size for CLIP + DiT + VAE bundle", () => {
    expect(SANA_ONNX_TOTAL_BYTES).toBeGreaterThan(5_700_000_000);
    expect(SANA_ONNX_TOTAL_BYTES).toBeLessThan(5_900_000_000);
  });

  it("is close to model registry estimate", () => {
    expect(Math.abs(MODELS.sana.estimatedBytes - SANA_ONNX_TOTAL_BYTES)).toBeLessThan(2_000_000);
  });
});
