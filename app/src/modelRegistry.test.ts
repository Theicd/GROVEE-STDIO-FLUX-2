import { describe, expect, it } from "vitest";
import {
  ALL_MODEL_IDS,
  DEFAULT_MODEL_ID,
  UI_MODEL_IDS,
  isModelLoadable,
  loadableModelsForSelection,
  MODELS,
  normalizeSelection,
  selectionSummary,
  totalBytesForSelection,
} from "./modelRegistry";
import { FLUX_ONNX_TOTAL_BYTES } from "./fluxPipeline";

describe("modelRegistry", () => {
  it("exposes FLUX.2 only in UI", () => {
    expect(UI_MODEL_IDS).toEqual(["flux"]);
    expect(ALL_MODEL_IDS).toEqual(["flux"]);
    expect(DEFAULT_MODEL_ID).toBe("flux");
    expect(Object.keys(MODELS)).toEqual(["flux"]);
  });

  it("always loads flux when available", () => {
    expect(loadableModelsForSelection([])).toEqual(["flux"]);
    expect(loadableModelsForSelection(["flux"])).toEqual(["flux"]);
    expect(normalizeSelection(["flux"])).toEqual(["flux"]);
  });

  it("reports FLUX size and label", () => {
    expect(totalBytesForSelection(["flux"])).toBe(MODELS.flux.estimatedBytes);
    expect(totalBytesForSelection(["flux"])).toBe(FLUX_ONNX_TOTAL_BYTES);
    expect(selectionSummary(["flux"])).toContain("FLUX.2");
  });

  it("marks FLUX as not native-negative capable", () => {
    expect(MODELS.flux.supportsNativeNegative).toBe(false);
  });

  it("flags flux as loadable", () => {
    expect(isModelLoadable("flux")).toBe(true);
  });
});
