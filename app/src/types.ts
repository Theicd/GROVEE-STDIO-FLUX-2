import type { ModelId } from "./modelRegistry";

export const JANUS_MODEL_ID = "onnx-community/Janus-Pro-1B-ONNX";

export type AppPhase = "start" | "loading" | "ready";

export type GenerationItem = {
  id: string;
  prompt: string;
  negativePrompt: string;
  imageUrl: string;
  width: number;
  height: number;
  durationMs: number;
  createdAt: number;
  modelId?: ModelId;
};

export type WorkerToMain =
  | { type: "webgpu_check"; fp16: boolean; webgpu: boolean }
  | {
      type: "download_progress";
      modelId?: ModelId;
      loaded: number;
      total: number;
      progress: number;
      file: string;
      status: string;
    }
  | { type: "status"; text: string }
  | { type: "loaded"; modelId?: ModelId; device: string }
  | { type: "gen_progress"; count: number; total: number; progress: number }
  | { type: "image_ready"; blob: Blob; width: number; height: number }
  | { type: "aborted" }
  | { type: "error"; error: string };

export type GenerationParams = {
  doSample: boolean;
  temperature: number;
  topP: number;
  topK: number;
  guidanceScale: number;
};

export type SdGenerationParams = {
  numInferenceSteps: number;
  guidanceScale: number;
  height: number;
  width: number;
};

export type FluxGenerationParams = {
  numInferenceSteps: number;
  guidanceScale: number;
  height: number;
  width: number;
  seed?: number;
};

export type JanusMainToWorker =
  | { type: "check_webgpu" }
  | { type: "load" }
  | { type: "generate_image"; prompt: string; generation: GenerationParams }
  | { type: "abort" };

export type SdMainToWorker =
  | { type: "check_webgpu" }
  | { type: "load" }
  | {
      type: "generate_image";
      prompt: string;
      negativePrompt?: string;
      generation: SdGenerationParams;
    }
  | { type: "abort" };

export type FluxMainToWorker =
  | { type: "check_webgpu" }
  | { type: "load" }
  | {
      type: "generate_image";
      prompt: string;
      negativePrompt?: string;
      generation: FluxGenerationParams;
    }
  | { type: "abort" };

export type SanaGenerationParams = {
  numInferenceSteps: number;
  guidanceScale: number;
  height: number;
  width: number;
  seed?: number;
};

export type SanaMainToWorker =
  | { type: "check_webgpu" }
  | { type: "load" }
  | { type: "generate_image"; prompt: string; generation: SanaGenerationParams }
  | { type: "abort" };

export type MainToWorker = JanusMainToWorker | SdMainToWorker | FluxMainToWorker | SanaMainToWorker;

export type ModelLoadState = {
  progress: number;
  loaded: number;
  total: number;
  downloadSpeed: number;
  currentFile: string;
  status: string;
  done: boolean;
  compiling?: boolean;
};
