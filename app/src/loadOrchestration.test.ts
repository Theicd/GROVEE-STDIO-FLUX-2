import { describe, expect, it } from "vitest";
import { loadableModelsForSelection } from "./modelRegistry";
import {
  hasBackgroundDownloads,
  listPendingModels,
  pickFirstReadyModel,
  resolveQueueModelAt,
  shouldEnterStudio,
  shouldShowIntro,
} from "./loadOrchestration";
import type { ModelId } from "./modelRegistry";

describe("loadOrchestration", () => {
  it("shows intro on start and during loading before any model is ready", () => {
    expect(shouldShowIntro("start", 0)).toBe(true);
    expect(shouldShowIntro("loading", 0)).toBe(true);
    expect(shouldShowIntro("loading", 1)).toBe(false);
    expect(shouldShowIntro("ready", 1)).toBe(false);
  });

  it("enters studio when loading completes with a loaded model", () => {
    expect(shouldEnterStudio("loading", [])).toBe(false);
    expect(shouldEnterStudio("loading", ["flux"])).toBe(true);
    expect(shouldEnterStudio("start", ["flux"])).toBe(false);
  });

  it("returns flux when loaded", () => {
    expect(pickFirstReadyModel(["flux"])).toBe("flux");
    expect(pickFirstReadyModel([])).toBe(null);
  });

  it("load queue is always flux", () => {
    expect(loadableModelsForSelection(["flux"])).toEqual(["flux"]);
  });

  it("lists no pending models when flux is done", () => {
    const progress = { flux: { done: true, status: "Ready" } };
    expect(listPendingModels(progress, ["flux"])).toEqual([]);
  });

  it("resolveQueueModelAt skips loaded and failed", () => {
    const queue: ModelId[] = ["flux"];
    const failed = new Set<ModelId>();
    expect(resolveQueueModelAt(queue, 0, ["flux"], failed)).toBe(null);
    expect(resolveQueueModelAt(queue, 0, [], failed)).toBe("flux");
    failed.add("flux");
    expect(resolveQueueModelAt(queue, 0, [], failed)).toBe(null);
  });

  it("hasBackgroundDownloads when queue has pending", () => {
    expect(hasBackgroundDownloads(["flux"], [], new Set())).toBe(true);
    expect(hasBackgroundDownloads(["flux"], ["flux"], new Set())).toBe(false);
  });
});
