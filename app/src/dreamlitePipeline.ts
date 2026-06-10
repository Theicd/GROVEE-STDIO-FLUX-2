/**
 * DreamLite-Mobile browser pipeline scaffold.
 *
 * Official weights: carlofkl/DreamLite-mobile (~5.0 GB safetensors, diffusers + Qwen3VL).
 * No public ONNX / WebGPU bundle exists yet — enable DREAMLITE_BROWSER_AVAILABLE once
 * an ORT-Web export is published (text_encoder + unet + vae @ 1024×1024, 4–8 steps, no CFG).
 */

import {
  DREAMLITE_BROWSER_AVAILABLE,
  DREAMLITE_UNAVAILABLE_MESSAGE,
} from "./modelRegistry";

export const DREAMLITE_HF_ID = "carlofkl/DreamLite-mobile";

export const DREAMLITE_MODEL_BASE = `https://huggingface.co/${DREAMLITE_HF_ID}/resolve/main`;

/** Total repo size from Hugging Face API (Jun 2026). */
export const DREAMLITE_ONNX_TOTAL_BYTES = 5_051_540_924;

export type DreamLiteLoadProgress = {
  loaded: number;
  total: number;
  file: string;
  status: "download" | "progress" | "compile" | "done";
};

export type DreamLiteGenerateOptions = {
  prompt: string;
  numInferenceSteps: number;
  height?: number;
  width?: number;
  seed?: number;
  onProgress?: (step: number, totalSteps: number) => void;
};

export class DreamLitePipeline {
  constructor(private readonly webgpuAvailable: boolean) {}

  async load(_onProgress?: (p: DreamLiteLoadProgress) => void): Promise<void> {
    if (!DREAMLITE_BROWSER_AVAILABLE) {
      throw new Error(DREAMLITE_UNAVAILABLE_MESSAGE);
    }
    if (!this.webgpuAvailable) {
      throw new Error("DreamLite requires WebGPU. Use Chrome/Edge 113+.");
    }
    throw new Error(
      "DreamLite browser ONNX bundle is not wired yet. Publish ORT-Web exports for text_encoder, unet, and vae.",
    );
  }

  async generate(_options: DreamLiteGenerateOptions): Promise<ImageData> {
    throw new Error(DREAMLITE_UNAVAILABLE_MESSAGE);
  }
}
