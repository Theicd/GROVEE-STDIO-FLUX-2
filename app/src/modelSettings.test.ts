import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";



import {

  FLUX_SETTINGS_DEFAULTS,

  GLOBAL_NEGATIVE_STORAGE_KEY,

  loadGlobalNegativePrompt,

  loadModelSettings,

  saveGlobalNegativePrompt,

  saveModelSettings,

  SD_SETTINGS_DEFAULTS,

  sdSettingsToGeneration,

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

    const custom = { ...SD_SETTINGS_DEFAULTS, guidanceScale: 7, numInferenceSteps: 30 };

    saveModelSettings("sd15", custom);

    const loaded = loadModelSettings("sd15");

    expect(loaded.guidanceScale).toBe(7);

    expect(loaded.numInferenceSteps).toBe(30);

  });



  it("maps SD settings to worker generation params", () => {

    const params = sdSettingsToGeneration({

      ...SD_SETTINGS_DEFAULTS,

      guidanceScale: 6,

      numInferenceSteps: 25,

    });

    expect(params.guidanceScale).toBe(6);

    expect(params.numInferenceSteps).toBe(25);
  });

  it("persists 8 inference steps without snapping to 20", () => {
    const custom = { ...SD_SETTINGS_DEFAULTS, numInferenceSteps: 8 };
    saveModelSettings("sd15", custom);
    const loaded = loadModelSettings("sd15");
    expect(loaded.numInferenceSteps).toBe(8);
    expect(sdSettingsToGeneration(loaded).numInferenceSteps).toBe(8);

  });



  it("stores one shared negative prompt for all models", () => {

    saveGlobalNegativePrompt("watermark only");

    expect(loadGlobalNegativePrompt()).toBe("watermark only");

    saveGlobalNegativePrompt("");

    expect(loadGlobalNegativePrompt()).toBe("");

    expect(localStorage.getItem(GLOBAL_NEGATIVE_STORAGE_KEY)).toBe("");

  });



  it("migrates legacy per-model negative into global storage", () => {

    localStorage.setItem(

      "janusgrove-settings-sd15",

      JSON.stringify({ ...SD_SETTINGS_DEFAULTS, negativePrompt: "legacy sd negative" }),

    );

    localStorage.setItem(

      "janusgrove-settings-flux",

      JSON.stringify({ ...FLUX_SETTINGS_DEFAULTS, negativePrompt: "flux negative" }),

    );

    expect(loadGlobalNegativePrompt()).toBe("legacy sd negative");

  });

});

