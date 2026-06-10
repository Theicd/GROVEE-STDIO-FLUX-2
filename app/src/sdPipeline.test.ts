import { describe, expect, it } from "vitest";

import { buildInferenceSchedule, resolveInferenceSteps, SD15_ONNX_TOTAL_BYTES } from "./sdPipeline";

const TEXT_ENCODER_BYTES = 246_417_740;
const UNET_BYTES = 1_719_405_068;
const VAE_BYTES = 99_124_333;

describe("sdPipeline", () => {
  it("estimates ONNX download size for three core models", () => {
    expect(SD15_ONNX_TOTAL_BYTES).toBeGreaterThan(2_000_000_000);
    expect(SD15_ONNX_TOTAL_BYTES).toBeLessThan(2_100_000_000);
    expect(SD15_ONNX_TOTAL_BYTES).toBe(TEXT_ENCODER_BYTES + UNET_BYTES + VAE_BYTES);
  });

  it("keeps 8 inference steps instead of snapping to 20", () => {
    expect(resolveInferenceSteps(8)).toBe(8);
    const { steps, schedule } = buildInferenceSchedule(8);
    expect(steps).toBe(8);
    expect(schedule.sigmas).toHaveLength(9);
    expect(schedule.timesteps).toHaveLength(9);
    expect(schedule.sigmas[8]).toBe(0);
  });

  it("uses preset schedule for 20 steps", () => {
    const { steps, schedule } = buildInferenceSchedule(20);
    expect(steps).toBe(20);
    expect(schedule.sigmas).toHaveLength(21);
  });

  it("marks ~85% progress during UNet download (not a hang — compile follows at ~95%)", () => {
    const at85 = SD15_ONNX_TOTAL_BYTES * 0.85;
    const unetLoaded = at85 - TEXT_ENCODER_BYTES;
    expect(unetLoaded).toBeGreaterThan(UNET_BYTES * 0.7);
    expect(unetLoaded).toBeLessThan(UNET_BYTES);
    const afterUnetDownload = TEXT_ENCODER_BYTES + UNET_BYTES;
    expect((afterUnetDownload / SD15_ONNX_TOTAL_BYTES) * 100).toBeCloseTo(95.2, 0);
  });
});