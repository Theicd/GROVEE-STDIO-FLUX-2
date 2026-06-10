import { FLUX_DEFAULT_GENERATION, SANA_DEFAULT_GENERATION, SD_DEFAULT_GENERATION } from "./generationConfig";
import { DEFAULT_NEGATIVE, type StylePreset } from "./promptBuilder";
import type { ModelId } from "./modelRegistry";
import type { FluxGenerationParams, SdGenerationParams } from "./types";

export type FluxModelSettings = {
  numInferenceSteps: number;
  height: number;
  width: number;
  style: StylePreset;
  /** Reserved — FLUX.2 Klein browser path does not apply CFG like SD. */
  guidanceScale: number;
};

export type ModelSettingsMap = {
  flux: FluxModelSettings;
};

export const FLUX_RESOLUTIONS = [256, 512, 768, 1024] as const;

export const FLUX_SETTINGS_DEFAULTS: FluxModelSettings = {
  guidanceScale: FLUX_DEFAULT_GENERATION.guidanceScale,
  numInferenceSteps: FLUX_DEFAULT_GENERATION.numInferenceSteps,
  height: FLUX_DEFAULT_GENERATION.height,
  width: FLUX_DEFAULT_GENERATION.width,
  style: "photoreal",
};

const STORAGE_PREFIX = "grovee-flux2-settings-";
const LEGACY_STORAGE_PREFIX = "janusgrove-settings-";
export const GLOBAL_NEGATIVE_STORAGE_KEY = "grovee-flux2-negative-prompt";

const LEGACY_NEGATIVE_MODEL_KEYS = [
  `${STORAGE_PREFIX}flux`,
  `${STORAGE_PREFIX}sd15`,
  `${STORAGE_PREFIX}sana`,
  `${STORAGE_PREFIX}janus`,
  `${LEGACY_STORAGE_PREFIX}flux`,
  `${LEGACY_STORAGE_PREFIX}sd15`,
  `${LEGACY_STORAGE_PREFIX}sana`,
  `${LEGACY_STORAGE_PREFIX}janus`,
  "janusgrove-negative-prompt",
] as const;

function storageKey(modelId: ModelId): string {
  return `${STORAGE_PREFIX}${modelId}`;
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

function snapFluxResolution(value: number): number {
  const rounded = clamp(Math.round(value), 256, 1024);
  let best: (typeof FLUX_RESOLUTIONS)[number] = 512;
  for (const candidate of FLUX_RESOLUTIONS) {
    if (Math.abs(candidate - rounded) < Math.abs(best - rounded)) best = candidate;
  }
  return best;
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

function sanitizeFlux(raw: Partial<FluxModelSettings> | null | undefined): FluxModelSettings {
  const base = FLUX_SETTINGS_DEFAULTS;
  if (!raw) return { ...base };
  const width = snapFluxResolution(Number(raw.width ?? base.width));
  const height = snapFluxResolution(Number(raw.height ?? base.height));
  return {
    guidanceScale: clamp(Number(raw.guidanceScale ?? base.guidanceScale), 1, 20),
    numInferenceSteps: clamp(Math.round(Number(raw.numInferenceSteps ?? base.numInferenceSteps)), 1, 8),
    height,
    width,
    style: (raw.style as StylePreset) ?? base.style,
  };
}

export function loadModelSettings(modelId: ModelId): FluxModelSettings {
  if (typeof localStorage === "undefined") return { ...FLUX_SETTINGS_DEFAULTS };
  try {
    const raw =
      localStorage.getItem(storageKey(modelId)) ??
      localStorage.getItem(`${LEGACY_STORAGE_PREFIX}${modelId}`);
    if (!raw) return { ...FLUX_SETTINGS_DEFAULTS };
    return sanitizeFlux(JSON.parse(raw));
  } catch {
    return { ...FLUX_SETTINGS_DEFAULTS };
  }
}

export function saveModelSettings(modelId: ModelId, settings: FluxModelSettings): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(storageKey(modelId), JSON.stringify(sanitizeFlux(settings)));
}

export function fluxSettingsToGeneration(settings: FluxModelSettings): FluxGenerationParams {
  return {
    numInferenceSteps: settings.numInferenceSteps,
    guidanceScale: settings.guidanceScale,
    height: settings.height,
    width: settings.width,
  };
}

export function formatFluxSettingsHint(settings: FluxModelSettings): string {
  return `${settings.numInferenceSteps} steps · ${settings.width}×${settings.height}`;
}

export function formatSettingsHint(_modelId: ModelId, settings: FluxModelSettings): string {
  return formatFluxSettingsHint(settings);
}

/** @deprecated Legacy SD settings kept for archived sd.worker.ts */
export type SdModelSettings = FluxModelSettings;

/** @deprecated Legacy SD defaults kept for archived sd.worker.ts */
export const SD_SETTINGS_DEFAULTS: SdModelSettings = {
  guidanceScale: SD_DEFAULT_GENERATION.guidanceScale,
  numInferenceSteps: SD_DEFAULT_GENERATION.numInferenceSteps,
  height: SD_DEFAULT_GENERATION.height,
  width: SD_DEFAULT_GENERATION.width,
  style: "photoreal",
};

/** @deprecated Legacy SD mapping kept for archived sd.worker.ts */
export function sdSettingsToGeneration(settings: SdModelSettings): SdGenerationParams {
  return {
    numInferenceSteps: settings.numInferenceSteps,
    guidanceScale: settings.guidanceScale,
    height: settings.height,
    width: settings.width,
  };
}

/** @deprecated Legacy SD hint kept for archived components */
export function formatSdSettingsHint(settings: SdModelSettings): string {
  return formatFluxSettingsHint(settings);
}

/** @deprecated Legacy sana defaults kept for archived worker files. */
export const SANA_SETTINGS_DEFAULTS = {
  guidanceScale: SANA_DEFAULT_GENERATION.guidanceScale,
  numInferenceSteps: SANA_DEFAULT_GENERATION.numInferenceSteps,
  height: SANA_DEFAULT_GENERATION.height,
  width: SANA_DEFAULT_GENERATION.width,
  style: "photoreal" as StylePreset,
};
