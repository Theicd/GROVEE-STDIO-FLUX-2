/// <reference lib="webworker" />

import {
  AutoProcessor,
  BaseStreamer,
  MultiModalityCausalLM,
  env,
} from "@huggingface/transformers";
import { DEFAULT_GENERATION } from "./generationConfig";
import { ESTIMATED_MODEL_BYTES } from "./formatBytes";
import { JANUS_MODEL_ID, type GenerationParams, type JanusMainToWorker, type WorkerToMain } from "./types";

type JanusProcessor = Awaited<ReturnType<typeof AutoProcessor.from_pretrained>> & {
  num_image_tokens: number;
  batch_decode: (...args: unknown[]) => string[];
};
type JanusModel = InstanceType<typeof MultiModalityCausalLM>;

env.allowLocalModels = false;
env.allowRemoteModels = true;
env.useBrowserCache = true;

let fp16Supported = false;
let processor: JanusProcessor | null = null;
let model: JanusModel | null = null;
let loadPromise: Promise<void> | null = null;
let abortRequested = false;

const post = (msg: WorkerToMain) => self.postMessage(msg);

class ProgressStreamer extends BaseStreamer {
  total: number;
  count: number | null = null;

  constructor(total: number) {
    super();
    this.total = total;
    this.count = null;
  }

  put() {
    if (this.count === null) {
      this.count = 0;
      return;
    }
    const count = ++this.count;
    post({
      type: "gen_progress",
      count,
      total: this.total,
      progress: count / this.total,
    });
  }

  end() {
    /* noop */
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
    modelId: "janus",
    loaded,
    total,
    progress: pct,
    file: currentFileName,
    status: "progress",
  });
}

function progressCallback(progress: {
  status?: string;
  file?: string;
  progress?: number;
  loaded?: number;
  total?: number;
}) {
  const file = progress.file ?? "";
  const status = progress.status ?? "";

  if (status === "download" && file) {
    currentFileName = file;
    currentFileLoaded = 0;
    currentFileTotal = 0;
    post({ type: "status", text: `Downloading ${file}…` });
    postDownloadProgress();
    return;
  }

  if (status === "progress") {
    currentFileLoaded = progress.loaded ?? currentFileLoaded;
    currentFileTotal = Math.max(currentFileTotal, progress.total ?? 0);
    if (file) currentFileName = file;
    postDownloadProgress();
    return;
  }

  if (status === "done") {
    completedBytes += currentFileTotal || currentFileLoaded;
    currentFileLoaded = 0;
    currentFileTotal = 0;
    postDownloadProgress();
  }
}

async function ensureLoaded(): Promise<void> {
  if (processor && model) return;
  if (loadPromise) return loadPromise;

  loadPromise = (async () => {
    resetDownloadProgress();
    post({ type: "status", text: "Connecting to Hugging Face…" });

    const dtype = fp16Supported
      ? {
          prepare_inputs_embeds: "q4" as const,
          language_model: "q4f16" as const,
          lm_head: "fp16" as const,
          gen_head: "fp16" as const,
          gen_img_embeds: "fp16" as const,
          image_decode: "fp32" as const,
        }
      : {
          prepare_inputs_embeds: "fp32" as const,
          language_model: "q4" as const,
          lm_head: "fp32" as const,
          gen_head: "fp32" as const,
          gen_img_embeds: "fp32" as const,
          image_decode: "fp32" as const,
        };

    const device = {
      prepare_inputs_embeds: "wasm" as const,
      language_model: "webgpu" as const,
      lm_head: "webgpu" as const,
      gen_head: "webgpu" as const,
      gen_img_embeds: "webgpu" as const,
      image_decode: "webgpu" as const,
    };

    // Processor must NOT receive dtype/device — that triggers a long ONNX metadata
    // scan with zero byte progress (official janus-pro-webgpu example).
    const heartbeat = self.setInterval(() => {
      if (completedBytes + currentFileLoaded > 0) return;
      post({ type: "status", text: "Resolving model files… (first run may take a minute)" });
    }, 8000);

    try {
      post({ type: "status", text: "Loading processor…" });
      processor = (await AutoProcessor.from_pretrained(JANUS_MODEL_ID, {
        progress_callback: progressCallback,
      })) as JanusProcessor;

      post({ type: "status", text: "Loading model weights…" });
      model = (await MultiModalityCausalLM.from_pretrained(JANUS_MODEL_ID, {
        dtype,
        device,
        progress_callback: progressCallback,
      })) as JanusModel;
    } finally {
      self.clearInterval(heartbeat);
    }

    post({
      type: "loaded",
      modelId: "janus",
      device: fp16Supported ? "webgpu (fp16)" : "webgpu",
    });
  })();

  try {
    await loadPromise;
  } catch (e) {
    loadPromise = null;
    throw e;
  }
}

async function generateImage(prompt: string, generation: GenerationParams) {
  abortRequested = false;
  if (!processor || !model) throw new Error("Model not loaded");

  const conversation = [{ role: "<|User|>", content: prompt }];
  const inputs = await processor(conversation, { chat_template: "text_to_image" });

  const numImageTokens = processor.num_image_tokens;
  const streamer = new ProgressStreamer(numImageTokens);
  const gen = { ...DEFAULT_GENERATION, ...generation };

  post({
    type: "status",
    text: `Generating image… CFG ${gen.guidanceScale} · sample ${gen.doSample ? "on" : "off"}`,
  });

  const outputs = await model.generate_images({
    ...inputs,
    min_new_tokens: numImageTokens,
    max_new_tokens: numImageTokens,
    do_sample: gen.doSample,
    temperature: gen.temperature,
    top_p: gen.topP,
    top_k: gen.topK,
    guidance_scale: gen.guidanceScale,
    streamer,
  });

  if (abortRequested) {
    post({ type: "aborted" });
    return;
  }

  const raw = outputs[0];
  const blob = await raw.toBlob();
  post({
    type: "image_ready",
    blob,
    width: raw.width ?? 384,
    height: raw.height ?? 384,
  });
}

self.addEventListener("message", (ev: MessageEvent<JanusMainToWorker>) => {
  const msg = ev.data;
  void (async () => {
    try {
      switch (msg.type) {
        case "check_webgpu": {
          const caps = await detectWebGpu();
          fp16Supported = caps.fp16;
          post({ type: "webgpu_check", ...caps });
          break;
        }
        case "load":
          await ensureLoaded();
          break;
        case "generate_image":
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
      post({
        type: "error",
        error: e instanceof Error ? e.message : String(e),
      });
    }
  })();
});
