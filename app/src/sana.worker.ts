/// <reference lib="webworker" />

import { SANA_DEFAULT_GENERATION } from "./generationConfig";
import { MODELS, SANA_BROWSER_AVAILABLE, SANA_UNAVAILABLE_MESSAGE } from "./modelRegistry";
import { SANA_ONNX_TOTAL_BYTES, SanaPipeline, type SanaLoadProgress } from "./sanaPipeline";
import { imageDataToBlob } from "./sdPipeline";
import type { SanaGenerationParams, SanaMainToWorker, WorkerToMain } from "./types";

const ESTIMATED_MODEL_BYTES = MODELS.sana.estimatedBytes || SANA_ONNX_TOTAL_BYTES;

let fp16Supported = false;
let webgpuAvailable = false;
let pipeline: SanaPipeline | null = null;
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
    modelId: "sana",
    loaded,
    total,
    progress: total > 0 ? (loaded / total) * 100 : 0,
    file: currentFileName,
    status: "progress",
  });
}

function handleLoadProgress(p: SanaLoadProgress) {
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
    modelId: "sana",
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
    if (!SANA_BROWSER_AVAILABLE) throw new Error(SANA_UNAVAILABLE_MESSAGE);
    resetDownloadProgress();
    post({ type: "status", text: "Loading SANA 0.6B ONNX pipeline…" });
    pipeline = new SanaPipeline(webgpuAvailable);
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

async function generateImage(prompt: string, generation: SanaGenerationParams) {
  abortRequested = false;
  if (!pipeline) throw new Error("SANA model not loaded");

  const gen = { ...SANA_DEFAULT_GENERATION, ...generation };
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

self.addEventListener("message", (ev: MessageEvent<SanaMainToWorker>) => {
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
