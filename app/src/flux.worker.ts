/// <reference lib="webworker" />

import { FLUX_DEFAULT_GENERATION } from "./generationConfig";
import { FLUX_ONNX_TOTAL_BYTES, FluxPipeline } from "./fluxPipeline";
import { FLUX_BROWSER_AVAILABLE, FLUX_UNAVAILABLE_MESSAGE, MODELS } from "./modelRegistry";
import { imageDataToBlob } from "./sdPipeline";
import type { FluxGenerationParams, FluxMainToWorker, WorkerToMain } from "./types";

const ESTIMATED_MODEL_BYTES = MODELS.flux.estimatedBytes || FLUX_ONNX_TOTAL_BYTES;

let fp16Supported = false;
let webgpuAvailable = false;
let pipeline: FluxPipeline | null = null;
let loadPromise: Promise<void> | null = null;
let abortRequested = false;

const post = (msg: WorkerToMain) => self.postMessage(msg);

let completedBytes = 0;
let currentFileLoaded = 0;
let currentFileTotal = 0;
let currentFileName = "";

function resetDownloadProgress() {
  completedBytes = 0;
  currentFileLoaded = 0;
  currentFileTotal = 0;
  currentFileName = "";
}

function postDownloadProgress() {
  const loaded = completedBytes + currentFileLoaded;
  const total = Math.max(ESTIMATED_MODEL_BYTES, completedBytes + currentFileTotal);
  post({
    type: "download_progress",
    modelId: "flux",
    loaded,
    total,
    progress: total > 0 ? (loaded / total) * 100 : 0,
    file: currentFileName,
    status: "progress",
  });
}

function handleLoadProgress(p: {
  loaded: number;
  total: number;
  file: string;
  status: "download" | "progress" | "compile" | "done";
}) {
  if (p.status === "download") {
    currentFileName = p.file;
    currentFileLoaded = 0;
    currentFileTotal = 0;
    post({ type: "status", text: `Downloading ${p.file}…` });
    postDownloadProgress();
    return;
  }
  if (p.status === "progress") {
    currentFileLoaded = Math.max(0, p.loaded - completedBytes);
    currentFileTotal = Math.max(currentFileTotal, p.total);
    if (p.file) currentFileName = p.file;
    postDownloadProgress();
    return;
  }
  if (p.status === "compile") {
    post({ type: "status", text: `Preparing ${p.file}…` });
    return;
  }
  if (p.status === "done") {
    completedBytes = p.loaded;
    currentFileLoaded = 0;
    currentFileTotal = 0;
    postDownloadProgress();
  }
}

async function detectWebGpu(): Promise<{ fp16: boolean; webgpu: boolean }> {
  try {
    if (!navigator.gpu?.requestAdapter) return { fp16: false, webgpu: false };
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) return { fp16: false, webgpu: false };
    return { fp16: adapter.features.has("shader-f16"), webgpu: true };
  } catch {
    return { fp16: false, webgpu: false };
  }
}

function postLoaded(): void {
  post({
    type: "loaded",
    modelId: "flux",
    device: webgpuAvailable ? (fp16Supported ? "webgpu (fp16)" : "webgpu") : "wasm",
  });
}

async function ensureLoaded(): Promise<void> {
  if (pipeline) {
    postLoaded();
    return;
  }
  if (loadPromise) return loadPromise;

  loadPromise = (async () => {
    if (!FLUX_BROWSER_AVAILABLE) throw new Error(FLUX_UNAVAILABLE_MESSAGE);
    if (!webgpuAvailable) throw new Error(FLUX_UNAVAILABLE_MESSAGE);
    resetDownloadProgress();
    post({ type: "status", text: "Loading FLUX.2 Klein pipeline…" });
    pipeline = new FluxPipeline();
    await pipeline.load(handleLoadProgress);
    postLoaded();
  })();

  try {
    await loadPromise;
  } catch (e) {
    loadPromise = null;
    pipeline = null;
    throw e;
  }
}

async function generateImage(prompt: string, generation: FluxGenerationParams) {
  abortRequested = false;
  if (!pipeline) throw new Error("FLUX model not loaded");

  const gen = { ...FLUX_DEFAULT_GENERATION, ...generation };
  post({ type: "status", text: "Generating image…" });

  const imageData = await pipeline.generate({
    prompt,
    numInferenceSteps: gen.numInferenceSteps,
    guidanceScale: gen.guidanceScale,
    width: gen.width,
    height: gen.height,
    seed: gen.seed,
    onProgress: (step, total) => {
      if (abortRequested) return;
      post({ type: "gen_progress", count: step, total, progress: step / total });
    },
  });

  if (abortRequested) {
    post({ type: "aborted" });
    return;
  }

  const blob = await imageDataToBlob(imageData);
  post({ type: "image_ready", blob, width: imageData.width, height: imageData.height });
}

self.addEventListener("message", (ev: MessageEvent<FluxMainToWorker>) => {
  const msg = ev.data;
  void (async () => {
    try {
      switch (msg.type) {
        case "check_webgpu": {
          const caps = await detectWebGpu();
          fp16Supported = caps.fp16;
          webgpuAvailable = caps.webgpu;
          post({ type: "webgpu_check", ...caps });
          break;
        }
        case "load":
          await ensureLoaded();
          break;
        case "generate_image":
          await ensureLoaded();
          await generateImage(msg.prompt, msg.generation);
          break;
        case "abort":
          abortRequested = true;
          pipeline?.abort();
          post({ type: "aborted" });
          break;
        default:
          break;
      }
    } catch (e) {
      post({ type: "error", error: e instanceof Error ? e.message : String(e) });
    }
  })();
});
