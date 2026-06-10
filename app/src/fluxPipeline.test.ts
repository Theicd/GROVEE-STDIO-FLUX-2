import { describe, expect, it } from "vitest";

import { MODELS } from "./modelRegistry";
import { FLUX_MODEL_BASE, FLUX_ONNX_TOTAL_BYTES } from "./fluxPipeline";

describe("fluxPipeline", () => {
  it("points at the ryanhlewis HF bundle", () => {
    expect(FLUX_MODEL_BASE).toContain("ryanhlewis/flux2-klein-4b-webgpu-lowbit");
  });

  it("estimates custom low-bit download size", () => {
    expect(FLUX_ONNX_TOTAL_BYTES).toBeGreaterThan(3_500_000_000);
    expect(FLUX_ONNX_TOTAL_BYTES).toBeLessThan(4_000_000_000);
  });

  it("matches model registry estimate", () => {
    expect(MODELS.flux.estimatedBytes).toBe(FLUX_ONNX_TOTAL_BYTES);
  });
});
