import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  FLUX_SETTINGS_DEFAULTS,
  GLOBAL_NEGATIVE_STORAGE_KEY,
  fluxSettingsToGeneration,
  loadGlobalNegativePrompt,
  loadModelSettings,
  saveGlobalNegativePrompt,
  saveModelSettings,
} from "./modelSettings";

function mockLocalStorage() {
  const store = new Map<string, string>();
  const ls = {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => {
      store.set(key, value);
    },
    removeItem: (key: string) => {
      store.delete(key);
    },
    clear: () => store.clear(),
    key: () => null,
    length: 0,
  };
  vi.stubGlobal("localStorage", ls);
  return ls;
}

describe("modelSettings", () => {
  beforeEach(() => {
    mockLocalStorage();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("persists per-model settings in localStorage", () => {
    const custom = { ...FLUX_SETTINGS_DEFAULTS, numInferenceSteps: 6 };
    saveModelSettings("flux", custom);
    const loaded = loadModelSettings("flux");
    expect(loaded.numInferenceSteps).toBe(6);
  });

  it("maps FLUX settings to worker generation params", () => {
    const params = fluxSettingsToGeneration({
      ...FLUX_SETTINGS_DEFAULTS,
      numInferenceSteps: 6,
      width: 768,
      height: 768,
    });
    expect(params.numInferenceSteps).toBe(6);
    expect(params.width).toBe(768);
    expect(params.height).toBe(768);
  });

  it("persists 8 inference steps without snapping to 4", () => {
    const custom = { ...FLUX_SETTINGS_DEFAULTS, numInferenceSteps: 8 };
    saveModelSettings("flux", custom);
    const loaded = loadModelSettings("flux");
    expect(loaded.numInferenceSteps).toBe(8);
    expect(fluxSettingsToGeneration(loaded).numInferenceSteps).toBe(8);
  });

  it("snaps resolution to supported FLUX sizes", () => {
    saveModelSettings("flux", { ...FLUX_SETTINGS_DEFAULTS, width: 600, height: 600 });
    const loaded = loadModelSettings("flux");
    expect(loaded.width).toBe(512);
    expect(loaded.height).toBe(512);
  });

  it("stores one shared negative prompt for legacy migration", () => {
    saveGlobalNegativePrompt("watermark only");
    expect(loadGlobalNegativePrompt()).toBe("watermark only");
    saveGlobalNegativePrompt("");
    expect(loadGlobalNegativePrompt()).toBe("");
    expect(localStorage.getItem(GLOBAL_NEGATIVE_STORAGE_KEY)).toBe("");
  });

  it("migrates legacy per-model negative into global storage", () => {
    localStorage.setItem(
      "janusgrove-settings-flux",
      JSON.stringify({ ...FLUX_SETTINGS_DEFAULTS, negativePrompt: "flux negative" }),
    );
    expect(loadGlobalNegativePrompt()).toBe("flux negative");
  });
});
