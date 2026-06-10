import { describe, expect, it } from "vitest";
import { loadableModelsForSelection } from "./modelRegistry";
import {
  listPendingModels,
  pickFirstReadyModel,
  shouldEnterStudio,
  shouldShowIntro,
} from "./loadOrchestration";

describe("shouldShowIntro", () => {
  it("shows intro on start", () => {
    expect(shouldShowIntro("start", 0)).toBe(true);
  });

  it("shows intro while loading with zero loaded models", () => {
    expect(shouldShowIntro("loading", 0)).toBe(true);
  });

  it("hides intro once SD is ready during loading", () => {
    expect(shouldShowIntro("loading", 1)).toBe(false);
  });
});

describe("shouldEnterStudio", () => {
  it("enters studio when loading and SD ready", () => {
    expect(shouldEnterStudio("loading", ["sd15"])).toBe(true);
  });

  it("does not enter studio before load", () => {
    expect(shouldEnterStudio("loading", [])).toBe(false);
  });
});

describe("pickFirstReadyModel", () => {
  it("returns sd15 when loaded", () => {
    expect(pickFirstReadyModel(["sd15"])).toBe("sd15");
  });

  it("returns null for empty list", () => {
    expect(pickFirstReadyModel([])).toBeNull();
  });
});

describe("sd-only load flow", () => {
  it("load queue is always sd15", () => {
    expect(loadableModelsForSelection(["sd15"])).toEqual(["sd15"]);
  });

  it("has no pending models after SD ready", () => {
    const progress = { sd15: { done: true, status: "Ready" } };
    expect(listPendingModels(progress, ["sd15"])).toEqual([]);
  });
});
