/// <reference lib="webworker" />



import { SD_DEFAULT_GENERATION } from "./generationConfig";
import {
  imageDataToBlob,
  SD15_ONNX_TOTAL_BYTES,
  Sd15Pipeline,
  type SdLoadProgress,
} from "./sdPipeline";
import type { SdGenerationParams, SdMainToWorker, WorkerToMain } from "./types";

/** @deprecated Archived SD 1.5 worker — not wired in App.tsx */
const SD15_ARCHIVED_AVAILABLE = false;
const SD15_ARCHIVED_MESSAGE = "SD 1.5 worker archived";

const ESTIMATED_MODEL_BYTES = SD15_ONNX_TOTAL_BYTES;



let fp16Supported = false;

let webgpuAvailable = false;

let pipeline: Sd15Pipeline | null = null;

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

  const pct = total > 0 ? (loaded / total) * 100 : 0;

  post({

    type: "download_progress",

    modelId: "flux",

    loaded,

    total,

    progress: pct,

    file: currentFileName,

    status: "progress",

  });

}



function handleLoadProgress(p: SdLoadProgress) {

  if (p.status === "download") {

    currentFileName = p.file;

    currentFileLoaded = 0;

    currentFileTotal = 0;

    post({ type: "status", text: `Loading engine: ${p.file}…` });

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

    post({ type: "status", text: `Preparing GPU: ${p.file}…` });

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



async function ensureLoaded(): Promise<void> {

  if (pipeline) {
    post({
      type: "loaded",
      modelId: "flux",
      device: webgpuAvailable
        ? fp16Supported
          ? "webgpu (fp16)"
          : "webgpu"
        : "wasm",
    });
    return;
  }

  if (loadPromise) return loadPromise;



  loadPromise = (async () => {

    if (!SD15_ARCHIVED_AVAILABLE) {

      throw new Error(SD15_ARCHIVED_MESSAGE);

    }



    resetDownloadProgress();

    post({ type: "status", text: "Connecting inference engine…" });

    post({ type: "status", text: "Loading SD 1.5 engine…" });



    pipeline = new Sd15Pipeline(webgpuAvailable);

    await pipeline.load(handleLoadProgress);



    post({

      type: "loaded",

      modelId: "flux",

      device: webgpuAvailable

        ? fp16Supported

          ? "webgpu (fp16)"

          : "webgpu"

        : "wasm",

    });

  })();



  try {

    await loadPromise;

  } catch (e) {

    loadPromise = null;

    pipeline = null;

    throw e;

  }

}



async function generateImage(

  prompt: string,

  negativePrompt: string,

  generation: SdGenerationParams,

) {

  abortRequested = false;

  if (!pipeline) throw new Error("SD model not loaded");



  const gen = { ...SD_DEFAULT_GENERATION, ...generation };



  post({ type: "status", text: "Generating image…" });



  const imageData = await pipeline.generate({

    prompt,

    negativePrompt,

    numInferenceSteps: gen.numInferenceSteps,

    guidanceScale: gen.guidanceScale,

    width: gen.width,

    height: gen.height,

    onProgress: (step, total) => {

      if (abortRequested) return;

      post({

        type: "gen_progress",

        count: step,

        total,

        progress: step / total,

      });

    },

  });



  if (abortRequested) {

    post({ type: "aborted" });

    return;

  }



  const blob = await imageDataToBlob(imageData);

  post({

    type: "image_ready",

    blob,

    width: imageData.width,

    height: imageData.height,

  });

}



self.addEventListener("message", (ev: MessageEvent<SdMainToWorker>) => {

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

          await generateImage(msg.prompt, msg.negativePrompt ?? "", msg.generation);

          break;

        case "abort":

          abortRequested = true;

          post({ type: "aborted" });

          break;

        default:

          break;

      }

    } catch (e) {

      post({

        type: "error",

        error: e instanceof Error ? e.message : String(e),

      });

    }

  })();

});


