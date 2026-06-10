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

describe("modelRegistry", () => {
  it("exposes SD 1.5 only in UI", () => {
    expect(UI_MODEL_IDS).toEqual(["sd15"]);
    expect(ALL_MODEL_IDS).toEqual(["sd15"]);
    expect(DEFAULT_MODEL_ID).toBe("sd15");
    expect(Object.keys(MODELS)).toEqual(["sd15"]);
  });

  it("always loads sd15 when available", () => {
    expect(loadableModelsForSelection([])).toEqual(["sd15"]);
    expect(loadableModelsForSelection(["sd15"])).toEqual(["sd15"]);
    expect(normalizeSelection(["sd15"])).toEqual(["sd15"]);
  });

  it("reports SD size and label", () => {
    expect(totalBytesForSelection(["sd15"])).toBe(MODELS.sd15.estimatedBytes);
    expect(selectionSummary(["sd15"])).toContain("SD 1.5");
  });

  it("marks SD as native-negative capable", () => {
    expect(MODELS.sd15.supportsNativeNegative).toBe(true);
  });

  it("flags sd15 as loadable", () => {
    expect(isModelLoadable("sd15")).toBe(true);
  });
});
