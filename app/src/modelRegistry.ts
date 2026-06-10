import { FLUX_ONNX_TOTAL_BYTES } from "./fluxPipeline";

/** UI and runtime model id — ships FLUX.2 Klein 4B low-bit WebGPU. */
export type ModelId = "flux";

export type ModelDefinition = {
  id: ModelId;
  hfId: string;
  estimatedBytes: number;
  label: string;
  shortLabel: string;
  resolution: string;
  pipelineType: "text-to-image";
  supportsNativeNegative: boolean;
  introBlurb: string;
};

export const FLUX_BROWSER_AVAILABLE = true;

export const FLUX_UNAVAILABLE_MESSAGE =
  "FLUX.2 Klein requires WebGPU. Use Chrome/Edge 113+ with WebGPU enabled.";

/** @deprecated Use FLUX_BROWSER_AVAILABLE */
export const SD15_BROWSER_AVAILABLE = FLUX_BROWSER_AVAILABLE;

/** @deprecated Use FLUX_UNAVAILABLE_MESSAGE */
export const SD15_UNAVAILABLE_MESSAGE = FLUX_UNAVAILABLE_MESSAGE;

export const DEFAULT_MODEL_ID: ModelId = "flux";

/** Models shown on intro and available for load/generate. */
export const UI_MODEL_IDS: ModelId[] = ["flux"];

export const ALL_MODEL_IDS: ModelId[] = UI_MODEL_IDS;

export const MODELS: Record<ModelId, ModelDefinition> = {
  flux: {
    id: "flux",
    hfId: "ryanhlewis/flux2-klein-4b-webgpu-lowbit",
    estimatedBytes: FLUX_ONNX_TOTAL_BYTES,
    label: "FLUX.2 Klein 4B",
    shortLabel: "FLUX.2",
    resolution: "512×512",
    pipelineType: "text-to-image",
    supportsNativeNegative: false,
    introBlurb: "~12 GB · WebGPU · low-bit",
  },
};

export function isModelLoadable(id: ModelId): boolean {
  return id === "flux" && FLUX_BROWSER_AVAILABLE;
}

export function normalizeSelection(selected: ModelId[]): ModelId[] {
  return selected.includes("flux") ? ["flux"] : [];
}

export function loadableModelsForSelection(_selected: ModelId[]): ModelId[] {
  return FLUX_BROWSER_AVAILABLE ? ["flux"] : [];
}

export function totalBytesForSelection(_selected: ModelId[]): number {
  return FLUX_BROWSER_AVAILABLE ? MODELS.flux.estimatedBytes : 0;
}

export function isLoadSelectionValid(_selected: ModelId[]): boolean {
  return FLUX_BROWSER_AVAILABLE;
}

export function getModel(id?: string): ModelDefinition {
  if (id === "flux") return MODELS.flux;
  return MODELS.flux;
}

export function selectionSummary(_selected: ModelId[]): string {
  if (!FLUX_BROWSER_AVAILABLE) return "FLUX.2 unavailable in this browser";
  return `${MODELS.flux.shortLabel} · ~3.5 GB · WebGPU`;
}
