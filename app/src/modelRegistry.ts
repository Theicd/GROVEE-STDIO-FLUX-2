/** UI and runtime model id — GROVEE STDIO ships SD 1.5 only. */
export type ModelId = "sd15";

export type ModelDefinition = {
  id: ModelId;
  hfId: string;
  onnxRepo?: string;
  estimatedBytes: number;
  label: string;
  shortLabel: string;
  resolution: string;
  pipelineType: "text-to-image";
  supportsNativeNegative: boolean;
  introBlurb: string;
};

export const SD15_BROWSER_AVAILABLE = true;

export const SD15_UNAVAILABLE_MESSAGE =
  "SD 1.5 requires WebGPU or WASM. Use Chrome/Edge 113+ with WebGPU enabled.";

export const DEFAULT_MODEL_ID: ModelId = "sd15";

/** Models shown on intro and available for load/generate. */
export const UI_MODEL_IDS: ModelId[] = ["sd15"];

export const ALL_MODEL_IDS: ModelId[] = UI_MODEL_IDS;

export const MODELS: Record<ModelId, ModelDefinition> = {
  sd15: {
    id: "sd15",
    hfId: "ehristoforu/stable-diffusion-v1-5-tiny",
    onnxRepo: "microsoft/stable-diffusion-v1.5-webnn",
    estimatedBytes: 2_064_947_141,
    label: "Stable Diffusion 1.5",
    shortLabel: "SD 1.5",
    resolution: "512×512",
    pipelineType: "text-to-image",
    supportsNativeNegative: true,
    introBlurb: "~2.0 GB · 512×512 · WebGPU or WASM",
  },
};

export function isModelLoadable(id: ModelId): boolean {
  return id === "sd15" && SD15_BROWSER_AVAILABLE;
}

export function normalizeSelection(selected: ModelId[]): ModelId[] {
  return selected.includes("sd15") ? ["sd15"] : [];
}

export function loadableModelsForSelection(_selected: ModelId[]): ModelId[] {
  return SD15_BROWSER_AVAILABLE ? ["sd15"] : [];
}

export function totalBytesForSelection(_selected: ModelId[]): number {
  return SD15_BROWSER_AVAILABLE ? MODELS.sd15.estimatedBytes : 0;
}

export function isLoadSelectionValid(_selected: ModelId[]): boolean {
  return SD15_BROWSER_AVAILABLE;
}

export function getModel(id: ModelId): ModelDefinition {
  return MODELS[id];
}

export function selectionSummary(_selected: ModelId[]): string {
  if (!SD15_BROWSER_AVAILABLE) return "SD 1.5 unavailable in this browser";
  return `${MODELS.sd15.shortLabel} · ~2.0 GB · 512×512`;
}
