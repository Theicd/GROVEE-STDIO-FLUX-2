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

/** Custom low-bit WebGPU path (~3.5 GB first download per flux2-webgpu README). */
export const FLUX_ONNX_TOTAL_BYTES = 3_758_096_384;

export type FluxLoadProgress = {
  loaded: number;
  total: number;
  file: string;
  status: "download" | "progress" | "compile" | "done";
};

export type FluxGenerateOptions = {
  prompt: string;
  numInferenceSteps: number;
  guidanceScale: number;
  width?: number;
  height?: number;
  seed?: number;
  onProgress?: (step: number, totalSteps: number) => void;
};

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

const ENGINE_URL = "/flux2/flux2-engine.js";
const LINEAR_URL = "/flux2/tools/custom_lowbit_webgpu/custom_lowbit_linear.js";
const RUNTIME_URL = "/flux2/tools/custom_lowbit_webgpu/custom_transformer_runtime.js";

const nativeFetch = globalThis.fetch.bind(globalThis);

let progressCallback: ((loaded: number, total: number, file: string) => void) | null = null;
let fetchPatched = false;
let engineReadyPromise: Promise<{ engine: FluxEngine; config: FluxConfig }> | null = null;
let tokenizerPromise: Promise<Awaited<ReturnType<typeof AutoTokenizer.from_pretrained>>> | null = null;

function polyfillWindowForScripts() {
  const g = globalThis as Record<string, unknown>;
  const win = (g.window as Record<string, unknown> | undefined) ?? {};
  if (!win.location) win.location = { href: FLUX_MODEL_BASE };
  g.window = win;
}

async function execClassicScript(url: string): Promise<void> {
  polyfillWindowForScripts();
  const response = await nativeFetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status} loading ${url}`);
  let code = await response.text();
  code = code.replace(/\bwindow\./g, "globalThis.");
  (0, eval)(`${code}\n//# sourceURL=${url}`);
}

function installProgressFetch(onProgress: (loaded: number, total: number, file: string) => void) {
  progressCallback = onProgress;
  if (fetchPatched) return;
  fetchPatched = true;
  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const response = await nativeFetch(input, init);
    const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
    if (!response.ok || !response.body || !progressCallback) return response;
    if (!/huggingface\.co|hf\.co|\/flux2\//i.test(url)) return response;

    const total = parseInt(response.headers.get("content-length") ?? "0", 10);
    const file = url.split("/").pop() ?? url;
    progressCallback?.(0, total, file);

    const reader = response.body.getReader();
    const chunks: Uint8Array[] = [];
    let loaded = 0;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      loaded += value.byteLength;
      progressCallback?.(loaded, total || loaded, file);
    }

    const buffer = await new Blob(chunks as BlobPart[]).arrayBuffer();
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

export class FluxPipeline {
  private engine: FluxEngine | null = null;
  private config: FluxConfig | null = null;
  private abortRequested = false;

  async load(onProgress?: (p: FluxLoadProgress) => void): Promise<void> {
    let completedBytes = 0;
    installProgressFetch((loaded, total, file) => {
      onProgress?.({
        loaded: completedBytes + loaded,
        total: Math.max(FLUX_ONNX_TOTAL_BYTES, completedBytes + (total || loaded)),
        file,
        status: "progress",
      });
    });

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
    completedBytes = FLUX_ONNX_TOTAL_BYTES;
    onProgress?.({ loaded: completedBytes, total: completedBytes, file: "", status: "done" });
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
    const totalSteps = gen.numInferenceSteps;
    options.onProgress?.(0, totalSteps);

    const tokenized = await tokenizePrompt(options.prompt, seqLen);
    if (this.abortRequested) throw new Error("Generation aborted");

    const params = buildGenerateParams(tokenized, gen, this.config);
    options.onProgress?.(1, totalSteps);

    const result = await this.engine.generateImage(params);
    if (this.abortRequested) throw new Error("Generation aborted");
    if (!result.imageData) throw new Error("FLUX returned no image data");

    options.onProgress?.(totalSteps, totalSteps);
    return result.imageData;
  }

  abort(): void {
    this.abortRequested = true;
    this.engine?.abortGeneration();
  }
}
