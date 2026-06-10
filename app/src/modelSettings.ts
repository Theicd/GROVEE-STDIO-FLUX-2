import { FLUX_DEFAULT_GENERATION, SANA_DEFAULT_GENERATION, SD_DEFAULT_GENERATION } from "./generationConfig";
import { DEFAULT_NEGATIVE, type StylePreset } from "./promptBuilder";
import type { ModelId } from "./modelRegistry";
import type { SdGenerationParams } from "./types";

export type SdModelSettings = {
  guidanceScale: number;
  numInferenceSteps: number;
  height: number;
  width: number;
  style: StylePreset;
};

export type ModelSettingsMap = {
  sd15: SdModelSettings;
};

export const SD_SETTINGS_DEFAULTS: SdModelSettings = {
  guidanceScale: SD_DEFAULT_GENERATION.guidanceScale,
  numInferenceSteps: SD_DEFAULT_GENERATION.numInferenceSteps,
  height: SD_DEFAULT_GENERATION.height,
  width: SD_DEFAULT_GENERATION.width,
  style: "photoreal",
};

const STORAGE_PREFIX = "janusgrove-settings-";
export const GLOBAL_NEGATIVE_STORAGE_KEY = "janusgrove-negative-prompt";

const LEGACY_NEGATIVE_MODEL_KEYS = [
  `${STORAGE_PREFIX}sd15`,
  `${STORAGE_PREFIX}sana`,
  `${STORAGE_PREFIX}flux`,
  `${STORAGE_PREFIX}janus`,
] as const;

function storageKey(modelId: ModelId): string {
  return `${STORAGE_PREFIX}${modelId}`;
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

function migrateLegacyNegativePrompt(): string {
  if (typeof localStorage === "undefined") return DEFAULT_NEGATIVE;
  for (const key of LEGACY_NEGATIVE_MODEL_KEYS) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) continue;
      const parsed = JSON.parse(raw) as { negativePrompt?: unknown };
      if (typeof parsed.negativePrompt === "string") return parsed.negativePrompt;
    } catch {
      /* ignore */
    }
  }
  return DEFAULT_NEGATIVE;
}

export function loadGlobalNegativePrompt(): string {
  if (typeof localStorage === "undefined") return DEFAULT_NEGATIVE;
  try {
    const stored = localStorage.getItem(GLOBAL_NEGATIVE_STORAGE_KEY);
    if (stored !== null) return stored;
    const migrated = migrateLegacyNegativePrompt();
    localStorage.setItem(GLOBAL_NEGATIVE_STORAGE_KEY, migrated);
    return migrated;
  } catch {
    return DEFAULT_NEGATIVE;
  }
}

export function saveGlobalNegativePrompt(value: string): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(GLOBAL_NEGATIVE_STORAGE_KEY, value);
}

function sanitizeSd(raw: Partial<SdModelSettings> | null | undefined): SdModelSettings {
  const base = SD_SETTINGS_DEFAULTS;
  if (!raw) return { ...base };
  const height = clamp(Math.round(Number(raw.height ?? base.height)), 256, 768);
  const width = clamp(Math.round(Number(raw.width ?? base.width)), 256, 768);
  return {
    guidanceScale: clamp(Number(raw.guidanceScale ?? base.guidanceScale), 1, 20),
    numInferenceSteps: clamp(Math.round(Number(raw.numInferenceSteps ?? base.numInferenceSteps)), 5, 50),
    height: height - (height % 64),
    width: width - (width % 64),
    style: (raw.style as StylePreset) ?? base.style,
  };
}

export function loadModelSettings(modelId: ModelId): SdModelSettings {
  if (typeof localStorage === "undefined") return { ...SD_SETTINGS_DEFAULTS };
  try {
    const raw = localStorage.getItem(storageKey(modelId));
    if (!raw) return { ...SD_SETTINGS_DEFAULTS };
    return sanitizeSd(JSON.parse(raw));
  } catch {
    return { ...SD_SETTINGS_DEFAULTS };
  }
}

export function saveModelSettings(modelId: ModelId, settings: SdModelSettings): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(storageKey(modelId), JSON.stringify(sanitizeSd(settings)));
}

export function sdSettingsToGeneration(settings: SdModelSettings): SdGenerationParams {
  return {
    numInferenceSteps: settings.numInferenceSteps,
    guidanceScale: settings.guidanceScale,
    height: settings.height,
    width: settings.width,
  };
}

export function formatSdSettingsHint(settings: SdModelSettings): string {
  return `CFG ${settings.guidanceScale.toFixed(1)} · ${settings.numInferenceSteps} steps`;
}

export function formatSettingsHint(_modelId: ModelId, settings: SdModelSettings): string {
  return formatSdSettingsHint(settings);
}

/** @deprecated Legacy flux defaults kept for archived worker files. */
export const FLUX_SETTINGS_DEFAULTS = {
  guidanceScale: FLUX_DEFAULT_GENERATION.guidanceScale,
  numInferenceSteps: FLUX_DEFAULT_GENERATION.numInferenceSteps,
  height: FLUX_DEFAULT_GENERATION.height,
  width: FLUX_DEFAULT_GENERATION.width,
  style: "photoreal" as StylePreset,
};

/** @deprecated Legacy sana defaults kept for archived worker files. */
export const SANA_SETTINGS_DEFAULTS = {
  guidanceScale: SANA_DEFAULT_GENERATION.guidanceScale,
  numInferenceSteps: SANA_DEFAULT_GENERATION.numInferenceSteps,
  height: SANA_DEFAULT_GENERATION.height,
  width: SANA_DEFAULT_GENERATION.width,
  style: "photoreal" as StylePreset,
};
