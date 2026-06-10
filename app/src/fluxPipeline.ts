/**
 * FLUX.2 Klein browser pipeline — wraps ryanhlewis/flux2-webgpu engine + custom low-bit WebGPU runtime.
 * Vendored scripts live in /public/flux2/.
 */

import { AutoTokenizer, env } from "@huggingface/transformers";

import { FLUX_DEFAULT_GENERATION } from "./generationConfig";
import type { FluxGenerationParams } from "./types";

export const FLUX_MODEL_BASE =
  "https://huggingface.co/ryanhlewis/flux2-klein-4b-webgpu-lowbit/resolve/main";

export const FLUX_CUSTOM_KERNEL_BASE = `${FLUX_MODEL_BASE}/custom_lowbit`;

export const FLUX_OPFS_CACHE_DIR = "grovee-flux2-cache";

/**
 * Staged HF bundle size (~12.6 GiB per model card).
 * Low-bit transformer path is a subset; full first-time browser load can approach this total.
 */
export const FLUX_ONNX_TOTAL_BYTES = 13_100_000_000;

export type FluxLoadProgress = {
  loaded: number;
  total: number;
  file: string;
  status: "download" | "progress" | "compile" | "done";
  filesCompleted?: number;
  fileCount?: number;
};

export type FluxFetchProgressState = {
  loaded: number;
  totalBytes: number;
  file: string;
  filesCompleted: number;
  fileCount: number;
};

export type FluxGenPhase = "tokenize" | "gpu_prep" | "encode" | "denoise" | "vae" | "done";

export type FluxGenerateProgressDetail = {
  fraction: number;
  phase: FluxGenPhase;
  denoiseStep?: number;
  denoiseTotal?: number;
  elapsedSec?: number;
};

export type FluxGenerateOptions = {
  prompt: string;
  numInferenceSteps: number;
  guidanceScale: number;
  width?: number;
  height?: number;
  seed?: number;
  onProgress?: (detail: FluxGenerateProgressDetail) => void;
};

/** Maps pipeline progress to worker/UI wire format. */
export function fluxGenProgressToWire(detail: FluxGenerateProgressDetail): {
  count: number;
  total: number;
  progress: number;
  phase: FluxGenPhase;
  elapsedSec?: number;
} {
  const progress = Math.min(1, Math.max(0, detail.fraction));
  const denoiseTotal = detail.denoiseTotal;
  const denoiseStep = detail.denoiseStep;
  if (denoiseTotal && denoiseTotal > 0 && denoiseStep) {
    return {
      count: denoiseStep,
      total: denoiseTotal,
      progress,
      phase: detail.phase,
      elapsedSec: detail.elapsedSec,
    };
  }
  return {
    count: Math.round(progress * 100),
    total: 100,
    progress,
    phase: detail.phase,
    elapsedSec: detail.elapsedSec,
  };
}

let lastFluxGenerateDurationMs = 90_000;

type FluxEngine = {
  init: (baseUrl: string, options: Record<string, unknown>) => Promise<{ config: FluxConfig }>;
  generateImage: (params: Record<string, unknown>) => Promise<FluxGenerateResult>;
  prepareCustomTransformerAssets: (params: Record<string, unknown>) => Promise<unknown>;
  prepareCustomTransformerStageSetup: (params: Record<string, unknown>) => Promise<unknown>;
  prepareVaeSessions: (params: Record<string, unknown>) => Promise<unknown>;
  abortGeneration: () => void;
};

type FluxConfig = {
  text_seq_len?: number;
  num_steps?: number;
  default_width?: number;
  default_height?: number;
  latent_downsample?: number;
  model_name?: string;
  model_variant?: string;
};

type FluxGenerateResult = {
  width: number;
  height: number;
  imageData?: ImageData;
  imageBlob?: Blob;
  seed?: number;
  numSteps?: number;
};

type TokenizedPrompt = {
  inputIds: BigInt64Array;
  attentionMask: BigInt64Array;
  tokenCount: number;
  promptCacheKey: string;
};

declare global {
  // eslint-disable-next-line no-var
  var flux2Engine: FluxEngine | undefined;
  // eslint-disable-next-line no-var
  var createCustomFluxTransformerRuntime: ((options: Record<string, unknown>) => Promise<unknown>) | undefined;
}

type WorkerScriptElement = {
  src: string;
  async: boolean;
  onload: (() => void) | null;
  onerror: (() => void) | null;
};

type WorkerDocument = {
  __fluxPolyfill: true;
  currentScript: { src: string } | null;
  head: { appendChild: (el: WorkerScriptElement) => void };
  createElement: (tag: string) => WorkerScriptElement | OffscreenCanvas;
};

const nativeFetch = globalThis.fetch.bind(globalThis);

type FetchProgressReporter = (loaded: number, contentLength: number, label: string, url: string) => void;

let progressCallback: FetchProgressReporter | null = null;
let fetchPatched = false;
let engineReadyPromise: Promise<{ engine: FluxEngine; config: FluxConfig }> | null = null;
let tokenizerPromise: Promise<Awaited<ReturnType<typeof AutoTokenizer.from_pretrained>>> | null = null;

/**
 * Resolve vendored files from app/public/ (served as /flux2/...).
 * Uses origin + Vite BASE_URL only — never worker script href (that yields @fs app/src paths).
 */
export function resolvePublicAsset(pathFromPublicRoot: string): string {
  const rel = pathFromPublicRoot.replace(/^\//, "");
  const rawBase = import.meta.env.BASE_URL || "./";

  if (rawBase.startsWith("http://") || rawBase.startsWith("https://")) {
    const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
    return new URL(rel, base).href;
  }

  let basePath = rawBase;
  if (basePath === "./") basePath = "/";
  else if (!basePath.startsWith("/")) basePath = `/${basePath}`;
  if (!basePath.endsWith("/")) basePath = `${basePath}/`;

  const origin =
    typeof globalThis.location === "object" && globalThis.location?.origin
      ? globalThis.location.origin
      : "";
  return `${origin}${basePath}${rel}`;
}

const ENGINE_URL = resolvePublicAsset("flux2/flux2-engine.js");
const LINEAR_URL = resolvePublicAsset("flux2/tools/custom_lowbit_webgpu/custom_lowbit_linear.js");
const RUNTIME_URL = resolvePublicAsset("flux2/tools/custom_lowbit_webgpu/custom_transformer_runtime.js");

function ensureWorkerDomPolyfill(currentScriptUrl?: string | null): void {
  const g = globalThis as Record<string, unknown>;
  const pageHref =
    typeof globalThis.location === "object" && globalThis.location?.href
      ? globalThis.location.href
      : "http://localhost/";
  const pageOrigin = new URL(pageHref).origin;

  const win = (g.window as Record<string, unknown> | undefined) ?? {};
  if (!win.location) win.location = { href: pageHref, origin: pageOrigin };
  g.window = win;

  const existing = g.document as WorkerDocument | undefined;
  if (!existing?.__fluxPolyfill) {
    const document: WorkerDocument = {
      __fluxPolyfill: true,
      currentScript: currentScriptUrl ? { src: currentScriptUrl } : null,
      head: {
        appendChild(el: WorkerScriptElement) {
          if (!el?.src) return;
          void execClassicScript(el.src)
            .then(() => el.onload?.())
            .catch(() => el.onerror?.());
        },
      },
      createElement(tag: string): WorkerScriptElement | OffscreenCanvas {
        if (tag === "script") {
          return { src: "", async: true, onload: null, onerror: null };
        }
        return new OffscreenCanvas(1, 1);
      },
    };
    g.document = document;
    return;
  }

  if (currentScriptUrl) existing.currentScript = { src: currentScriptUrl };
}

async function execClassicScript(url: string): Promise<void> {
  ensureWorkerDomPolyfill(url);
  const response = await nativeFetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status} loading ${url}`);
  const contentType = response.headers.get("content-type") ?? "";
  let code = await response.text();
  if (contentType.includes("text/html") || code.trimStart().startsWith("<!")) {
    throw new Error(`Expected JavaScript from ${url}, got HTML (check BASE_URL / public assets)`);
  }

  const document = globalThis.document as unknown as WorkerDocument;
  const prevScript = document.currentScript;
  document.currentScript = { src: url };
  try {
    code = code.replace(/\bwindow\./g, "globalThis.");
    (0, eval)(`${code}\n//# sourceURL=${url}`);
  } finally {
    document.currentScript = prevScript;
  }
}

/** Stable OPFS key per URL (same basename in different folders stays unique). */
export async function cacheKeyFromUrl(url: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(url));
  const hex = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  return `flux_${hex}`;
}

async function fluxCacheGet(key: string): Promise<ArrayBuffer | null> {
  try {
    const root = await navigator.storage.getDirectory();
    const dir = await root.getDirectoryHandle(FLUX_OPFS_CACHE_DIR, { create: true });
    const fh = await dir.getFileHandle(key);
    return await (await fh.getFile()).arrayBuffer();
  } catch {
    return null;
  }
}

async function fluxCacheSet(key: string, buffer: ArrayBuffer): Promise<void> {
  try {
    const root = await navigator.storage.getDirectory();
    const dir = await root.getDirectoryHandle(FLUX_OPFS_CACHE_DIR, { create: true });
    const fh = await dir.getFileHandle(key, { create: true });
    const writable = await fh.createWritable();
    await writable.write(buffer);
    await writable.close();
  } catch {
    /* ignore cache write failures */
  }
}

async function requestPersistentStorage(): Promise<void> {
  try {
    if (navigator.storage?.persist) await navigator.storage.persist();
  } catch {
    /* ignore */
  }
}

function shortFetchLabel(url: string): string {
  try {
    const path = new URL(url).pathname;
    const parts = path.split("/").filter(Boolean);
    if (parts.length >= 2) return parts.slice(-2).join("/");
    return parts[parts.length - 1] ?? url;
  } catch {
    return url.split("/").pop() ?? url;
  }
}

/** Track HF fetches by full URL (basename alone double-counts shards). */
export function trackFluxFetchProgress(
  onProgress: (state: FluxFetchProgressState) => void,
  modelTotalBytes: number,
) {
  const completedByUrl = new Map<string, number>();
  const seenUrls = new Set<string>();
  let activeUrl = "";
  let activeLabel = "";
  let activeLoaded = 0;
  let activeKnownTotal = 0;

  const finishActive = () => {
    if (!activeUrl) return;
    const size = activeKnownTotal > 0 ? activeKnownTotal : activeLoaded;
    if (size > 0) completedByUrl.set(activeUrl, size);
    activeUrl = "";
    activeLabel = "";
    activeLoaded = 0;
    activeKnownTotal = 0;
  };

  const emit = () => {
    let sum = 0;
    for (const bytes of completedByUrl.values()) sum += bytes;
    const sessionLoaded = sum + activeLoaded;
    onProgress({
      loaded: Math.min(modelTotalBytes, sessionLoaded),
      totalBytes: modelTotalBytes,
      file: activeLabel,
      filesCompleted: completedByUrl.size,
      fileCount: seenUrls.size,
    });
  };

  return (loaded: number, contentLength: number, label: string, url: string) => {
    const key = url || label;
    seenUrls.add(key);

    if (key !== activeUrl) {
      finishActive();
      activeUrl = key;
      activeLabel = label;
      activeLoaded = 0;
      activeKnownTotal = 0;
    }

    activeLoaded = loaded;
    if (contentLength > 0) activeKnownTotal = Math.max(activeKnownTotal, contentLength);
    else if (loaded > activeKnownTotal) activeKnownTotal = loaded;

    if (activeKnownTotal > 0 && loaded >= activeKnownTotal) {
      completedByUrl.set(activeUrl, activeKnownTotal);
      activeUrl = "";
      activeLabel = "";
      activeLoaded = 0;
      activeKnownTotal = 0;
    }

    emit();
  };
}

function installProgressFetch(onProgress: FetchProgressReporter) {
  progressCallback = onProgress;
  if (fetchPatched) return;
  fetchPatched = true;
  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
    const isTracked = /huggingface\.co|hf\.co|\/flux2\//i.test(url);

    if (!isTracked) {
      return nativeFetch(input, init);
    }

    const label = shortFetchLabel(url);
    const cacheKey = await cacheKeyFromUrl(url);
    const cached = await fluxCacheGet(cacheKey);
    if (cached) {
      const size = cached.byteLength;
      progressCallback?.(0, size, label, url);
      progressCallback?.(size, size, label, url);
      return new Response(cached, {
        status: 200,
        statusText: "OK",
        headers: { "content-length": String(size) },
      });
    }

    const response = await nativeFetch(input, init);
    if (!response.ok || !response.body) return response;

    const contentLength = parseInt(response.headers.get("content-length") ?? "0", 10);
    progressCallback?.(0, contentLength, label, url);

    const reader = response.body.getReader();
    const chunks: Uint8Array[] = [];
    let loaded = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      loaded += value.byteLength;
      progressCallback?.(loaded, contentLength, label, url);
    }

    const buffer = await new Blob(chunks as BlobPart[]).arrayBuffer();
    void fluxCacheSet(cacheKey, buffer);
    return new Response(buffer, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  };
}

async function waitForEngine(): Promise<FluxEngine> {
  const deadline = performance.now() + 60_000;
  while (performance.now() < deadline) {
    if (globalThis.flux2Engine?.init) return globalThis.flux2Engine;
    await new Promise((r) => setTimeout(r, 50));
  }
  throw new Error("FLUX.2 browser engine did not load");
}

async function ensureEngine(): Promise<{ engine: FluxEngine; config: FluxConfig }> {
  if (engineReadyPromise) return engineReadyPromise;
  engineReadyPromise = (async () => {
    ensureWorkerDomPolyfill();
    await execClassicScript(LINEAR_URL);
    await execClassicScript(RUNTIME_URL);
    await import(/* @vite-ignore */ ENGINE_URL);
    const engine = await waitForEngine();
    const init = await engine.init(FLUX_MODEL_BASE, {
      executionProvider: "webgpu",
      customKernelBaseUrl: FLUX_CUSTOM_KERNEL_BASE,
      customTransformerMode: "custom-lowbit-webgpu",
      enableGraphCapture: false,
      enableFusedTransformer: false,
      persistentTextContextCache: true,
      persistentVaeEncoderCache: true,
    });
    return { engine, config: init.config };
  })();
  return engineReadyPromise;
}

async function loadTokenizer(): Promise<Awaited<ReturnType<typeof AutoTokenizer.from_pretrained>>> {
  if (tokenizerPromise) return tokenizerPromise;
  env.allowRemoteModels = true;
  env.allowLocalModels = false;
  env.useBrowserCache = true;
  tokenizerPromise = AutoTokenizer.from_pretrained("ryanhlewis/flux2-klein-4b-webgpu-lowbit", {
    revision: "main",
  });
  return tokenizerPromise;
}

function buildPromptText(prompt: string): string {
  return `<|im_start|>user\n${prompt}<|im_end|>\n<|im_start|>assistant\n<think>\n\n</think>\n\n`;
}

async function sha256Hex(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

function flattenTokenValues(value: unknown): number[] {
  if (value == null) return [];
  if (Array.isArray(value)) return value.flat(Infinity).map(Number);
  if (ArrayBuffer.isView(value)) return Array.from(value as unknown as ArrayLike<number>, Number);
  if (typeof value === "object" && value !== null && "data" in value) {
    return flattenTokenValues((value as { data: unknown }).data);
  }
  return Array.from(value as ArrayLike<number>, Number);
}

function toInt64Padded(values: number[], seqLen: number, padValue: number): BigInt64Array {
  const out = new BigInt64Array(seqLen);
  const count = Math.min(values.length, seqLen);
  for (let i = 0; i < count; i++) out[i] = BigInt(Math.trunc(Number(values[i])));
  for (let i = count; i < seqLen; i++) out[i] = BigInt(padValue);
  return out;
}

function maskFromLength(length: number, seqLen: number): BigInt64Array {
  const out = new BigInt64Array(seqLen);
  const count = Math.min(length, seqLen);
  for (let i = 0; i < count; i++) out[i] = 1n;
  return out;
}

async function tokenizePrompt(prompt: string, seqLen: number): Promise<TokenizedPrompt> {
  const tokenizer = await loadTokenizer();
  const promptCacheKey = await sha256Hex(
    JSON.stringify({ model: "flux.2-klein-4b", text_seq_len: seqLen, prompt }),
  );
  const text = buildPromptText(prompt);
  const encoded = await tokenizer(text, {
    truncation: true,
    max_length: seqLen,
    add_special_tokens: false,
  });
  const ids = flattenTokenValues(encoded.input_ids);
  const mask = encoded.attention_mask
    ? flattenTokenValues(encoded.attention_mask)
    : new Array(ids.length).fill(1);
  const padTokenId = Number(tokenizer.pad_token_id ?? 151643);
  return {
    inputIds: toInt64Padded(ids, seqLen, padTokenId),
    attentionMask: mask.length
      ? toInt64Padded(mask.slice(0, ids.length), seqLen, 0)
      : maskFromLength(ids.length, seqLen),
    tokenCount: Math.min(ids.length, seqLen),
    promptCacheKey,
  };
}

function plannedCustomTextTokens(tokenCount: number, seqLen: number): number {
  const blocks = Math.ceil(tokenCount / 64);
  return Math.min(seqLen, Math.max(64, blocks * 64));
}

function defaultVaeChunkSize(width: number, height: number): number {
  const maxDim = Math.max(width, height);
  if (maxDim >= 768) return 4096;
  if (maxDim >= 512) return 2048;
  return 0;
}

function buildGenerateParams(
  tokenized: TokenizedPrompt,
  generation: FluxGenerationParams,
  config: FluxConfig,
): Record<string, unknown> {
  const width = generation.width || config.default_width || FLUX_DEFAULT_GENERATION.width;
  const height = generation.height || config.default_height || FLUX_DEFAULT_GENERATION.height;
  const seqLen = Number(config.text_seq_len || 512);
  const plannedTextTokens = plannedCustomTextTokens(tokenized.tokenCount, seqLen);
  return {
    inputIds: tokenized.inputIds,
    attentionMask: tokenized.attentionMask,
    width,
    height,
    seed: generation.seed ?? 42,
    numSteps: generation.numInferenceSteps || config.num_steps || FLUX_DEFAULT_GENERATION.numInferenceSteps,
    cacheSessions: true,
    gpuDenoise: true,
    cacheTextContext: true,
    persistentTextContextCache: true,
    promptCacheKey: tokenized.promptCacheKey,
    transformerBackend: "custom-lowbit-webgpu",
    requireCustomTransformer: true,
    returnImageData: true,
    returnImageBlob: false,
    vaeAttentionChunkSize: defaultVaeChunkSize(width, height),
    customMaxDoubleBlocks: 5,
    customMaxSingleBlocks: 20,
    customMinTextTokens: plannedTextTokens,
    customTextTokenLimit: plannedTextTokens,
  };
}

function resolutionKey(width: number, height: number): string {
  return `${width}x${height}`;
}

export class FluxPipeline {
  private engine: FluxEngine | null = null;
  private config: FluxConfig | null = null;
  private abortRequested = false;
  private warmedResolutions = new Set<string>();

  async load(onProgress?: (p: FluxLoadProgress) => void): Promise<void> {
    await requestPersistentStorage();
    const reportFetch = trackFluxFetchProgress((state) => {
      onProgress?.({
        loaded: state.loaded,
        total: state.totalBytes,
        file: state.file,
        status: "progress",
        filesCompleted: state.filesCompleted,
        fileCount: state.fileCount,
      });
    }, FLUX_ONNX_TOTAL_BYTES);
    installProgressFetch(reportFetch);

    onProgress?.({ loaded: 0, total: FLUX_ONNX_TOTAL_BYTES, file: "flux2-config.json", status: "download" });

    const { engine, config } = await ensureEngine();
    this.engine = engine;
    this.config = config;

    const width = config.default_width || FLUX_DEFAULT_GENERATION.width;
    const height = config.default_height || FLUX_DEFAULT_GENERATION.height;
    const numSteps = config.num_steps || FLUX_DEFAULT_GENERATION.numInferenceSteps;
    const seqLen = Number(config.text_seq_len || 512);

    onProgress?.({ loaded: 0, total: FLUX_ONNX_TOTAL_BYTES, file: "transformer assets", status: "compile" });
    await engine.prepareCustomTransformerAssets({ maxDoubleBlocks: 5, maxSingleBlocks: 20 });

    const tokenized = await tokenizePrompt("a robot", seqLen);
    const plannedTextTokens = plannedCustomTextTokens(tokenized.tokenCount, seqLen);

    onProgress?.({ loaded: 0, total: FLUX_ONNX_TOTAL_BYTES, file: "transformer setup", status: "compile" });
    await engine.prepareCustomTransformerStageSetup({
      width,
      height,
      hasInitImage: false,
      dispatchWarmup: true,
      numSteps,
      textTokens: plannedTextTokens,
    });

    onProgress?.({ loaded: 0, total: FLUX_ONNX_TOTAL_BYTES, file: "VAE sessions", status: "compile" });
    await engine.prepareVaeSessions({
      width,
      height,
      hasInitImage: false,
      dispatchWarmup: true,
      vaeAttentionChunkSize: defaultVaeChunkSize(width, height),
    });

    await loadTokenizer();
    this.warmedResolutions.add(resolutionKey(width, height));
    onProgress?.({ loaded: FLUX_ONNX_TOTAL_BYTES, total: FLUX_ONNX_TOTAL_BYTES, file: "", status: "done" });
  }

  private reportProgress(
    onProgress: FluxGenerateOptions["onProgress"],
    detail: FluxGenerateProgressDetail,
  ): void {
    onProgress?.(detail);
  }

  private async warmResolutionForGenerate(
    gen: FluxGenerationParams,
    plannedTextTokens: number,
    onProgress: FluxGenerateOptions["onProgress"],
  ): Promise<boolean> {
    if (!this.engine) throw new Error("FLUX model not loaded");
    const key = resolutionKey(gen.width, gen.height);
    if (this.warmedResolutions.has(key)) return false;

    const prepStart = performance.now();
    const prepPulse = setInterval(() => {
      if (this.abortRequested) return;
      const elapsedSec = Math.round((performance.now() - prepStart) / 1000);
      const frac = 0.02 + Math.min(0.28, (elapsedSec / 180) * 0.28);
      this.reportProgress(onProgress, {
        fraction: frac,
        phase: "gpu_prep",
        elapsedSec,
      });
    }, 1000);

    this.reportProgress(onProgress, { fraction: 0.02, phase: "gpu_prep", elapsedSec: 0 });

    try {
      await this.engine.prepareCustomTransformerStageSetup({
        width: gen.width,
        height: gen.height,
        hasInitImage: false,
        dispatchWarmup: true,
        numSteps: gen.numInferenceSteps,
        textTokens: plannedTextTokens,
      });
      if (this.abortRequested) throw new Error("Generation aborted");

      await this.engine.prepareVaeSessions({
        width: gen.width,
        height: gen.height,
        hasInitImage: false,
        dispatchWarmup: true,
        vaeAttentionChunkSize: defaultVaeChunkSize(gen.width, gen.height),
      });
      if (this.abortRequested) throw new Error("Generation aborted");

      this.warmedResolutions.add(key);
      return true;
    } finally {
      clearInterval(prepPulse);
    }
  }

  async generate(options: FluxGenerateOptions): Promise<ImageData> {
    if (!this.engine || !this.config) throw new Error("FLUX model not loaded");
    this.abortRequested = false;

    const gen: FluxGenerationParams = {
      numInferenceSteps: options.numInferenceSteps || FLUX_DEFAULT_GENERATION.numInferenceSteps,
      guidanceScale: options.guidanceScale || FLUX_DEFAULT_GENERATION.guidanceScale,
      width: options.width || this.config.default_width || FLUX_DEFAULT_GENERATION.width,
      height: options.height || this.config.default_height || FLUX_DEFAULT_GENERATION.height,
      seed: options.seed,
    };

    const seqLen = Number(this.config.text_seq_len || 512);
    const numSteps = gen.numInferenceSteps;
    const onProgress = options.onProgress;

    this.reportProgress(onProgress, { fraction: 0, phase: "tokenize" });

    const tokenized = await tokenizePrompt(options.prompt, seqLen);
    if (this.abortRequested) throw new Error("Generation aborted");

    const plannedTextTokens = plannedCustomTextTokens(tokenized.tokenCount, seqLen);
    const params = buildGenerateParams(tokenized, gen, this.config);

    const firstResolutionWarmup = await this.warmResolutionForGenerate(gen, plannedTextTokens, onProgress);

    this.reportProgress(onProgress, { fraction: 0.32, phase: "encode" });

    const estimateMs = firstResolutionWarmup
      ? Math.max(lastFluxGenerateDurationMs, 120_000)
      : lastFluxGenerateDurationMs;
    const renderStart = performance.now();
    const heartbeat = setInterval(() => {
      if (this.abortRequested) return;
      const elapsedMs = performance.now() - renderStart;
      const elapsedSec = Math.round(elapsedMs / 1000);
      const t = Math.min(0.95, elapsedMs / estimateMs);
      const denoiseStep = Math.min(numSteps, Math.max(1, Math.ceil(t * numSteps)));
      this.reportProgress(onProgress, {
        fraction: 0.32 + t * 0.58,
        phase: "denoise",
        denoiseStep,
        denoiseTotal: numSteps,
        elapsedSec,
      });
    }, 800);

    let result: FluxGenerateResult;
    try {
      result = await this.engine.generateImage(params);
      lastFluxGenerateDurationMs = performance.now() - renderStart;
    } finally {
      clearInterval(heartbeat);
    }

    if (this.abortRequested) throw new Error("Generation aborted");
    if (!result.imageData) throw new Error("FLUX returned no image data");

    this.reportProgress(onProgress, {
      fraction: 0.95,
      phase: "vae",
      denoiseStep: numSteps,
      denoiseTotal: numSteps,
    });
    this.reportProgress(onProgress, {
      fraction: 1,
      phase: "done",
      denoiseStep: numSteps,
      denoiseTotal: numSteps,
    });
    return result.imageData;
  }

  abort(): void {
    this.abortRequested = true;
    this.engine?.abortGeneration();
  }
}
