/// <reference lib="webworker" />

import { DREAMLITE_DEFAULT_GENERATION } from "./generationConfig";
import { DREAMLITE_BROWSER_AVAILABLE, DREAMLITE_UNAVAILABLE_MESSAGE, MODELS } from "./modelRegistry";
import { DREAMLITE_ONNX_TOTAL_BYTES, DreamLitePipeline, type DreamLiteLoadProgress } from "./dreamlitePipeline";
import { imageDataToBlob } from "./sdPipeline";
import type { DreamLiteGenerationParams, DreamLiteMainToWorker, WorkerToMain } from "./types";

const ESTIMATED_MODEL_BYTES = MODELS.dreamlite.estimatedBytes || DREAMLITE_ONNX_TOTAL_BYTES;

let webgpuAvailable = false;
let pipeline: DreamLitePipeline | null = null;
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
    modelId: "dreamlite",
    loaded,
    total,
    progress: total > 0 ? (loaded / total) * 100 : 0,
    file: currentFileName,
    status: "progress",
  });
}

function handleLoadProgress(p: DreamLiteLoadProgress) {
  if (p.status === "download") {
    currentFileName = p.file;
    currentFileLoaded = 0;
    currentFileTotal = 0;
    post({ type: "status", text: `Downloading ${p.file}…` });
    postDownloadProgress();
    return;
  }
  if (p.status === "progress") {
    currentFileLoaded = p.loaded - completedBytes;
    currentFileTotal = Math.max(currentFileTotal, p.total);
    if (p.file) currentFileName = p.file;
    postDownloadProgress();
    return;
  }
  if (p.status === "compile") {
    post({ type: "status", text: `Compiling ${p.file}…` });
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
    modelId: "dreamlite",
    device: webgpuAvailable ? "webgpu" : "wasm",
  });
}

async function ensureLoaded(): Promise<void> {
  if (pipeline) {
    postLoaded();
    return;
  }
  if (loadPromise) return loadPromise;

  loadPromise = (async () => {
    if (!DREAMLITE_BROWSER_AVAILABLE) throw new Error(DREAMLITE_UNAVAILABLE_MESSAGE);
    resetDownloadProgress();
    post({ type: "status", text: "Loading DreamLite-Mobile…" });
    pipeline = new DreamLitePipeline(webgpuAvailable);
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

async function generateImage(prompt: string, generation: DreamLiteGenerationParams) {
  abortRequested = false;
  if (!pipeline) throw new Error("DreamLite model not loaded");

  const gen = { ...DREAMLITE_DEFAULT_GENERATION, ...generation };
  post({ type: "status", text: "Generating image…" });

  const imageData = await pipeline.generate({
    prompt,
    numInferenceSteps: gen.numInferenceSteps,
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

self.addEventListener("message", (ev: MessageEvent<DreamLiteMainToWorker>) => {
  const msg = ev.data;
  void (async () => {
    try {
      switch (msg.type) {
        case "check_webgpu": {
          const caps = await detectWebGpu();
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
