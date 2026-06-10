/**
 * Browser Stable Diffusion 1.5 via ONNX Runtime Web (WebGPU / WASM).
 * ONNX weights from microsoft/stable-diffusion-v1.5-webnn (SD 1.5 architecture).
 */

import { AutoTokenizer, env } from "@huggingface/transformers";
import * as ort from "onnxruntime-web/webgpu";

const HF_REPO = "microsoft/stable-diffusion-v1.5-webnn";
const TOKENIZER_ID = "Xenova/clip-vit-large-patch14";

const MODEL_FILES = [
  { name: "text_encoder", file: "text-encoder.onnx", bytes: 246_417_740 },
  {
    name: "unet",
    file: "sd-unet-v1.5-model-b2c4h64w64s77-float16-compute-and-inputs-layernorm.onnx",
    bytes: 1_719_405_068,
  },
  {
    name: "vae_decoder",
    file: "Stable-Diffusion-v1.5-vae-decoder-float16-fp32-instancenorm.onnx",
    bytes: 99_124_333,
  },
] as const;

export const SD15_ONNX_TOTAL_BYTES = MODEL_FILES.reduce((s, m) => s + m.bytes, 0);

const MODEL_OPTIONS: Record<string, ort.InferenceSession.SessionOptions> = {
  text_encoder: { freeDimensionOverrides: { batch: 2, sequence: 77 } },
  unet: {
    freeDimensionOverrides: {
      batch: 2,
      channels: 4,
      height: 64,
      width: 64,
      sequence: 77,
      unet_sample_batch: 2,
      unet_sample_channels: 4,
      unet_sample_height: 64,
      unet_sample_width: 64,
      unet_time_batch: 2,
      unet_hidden_batch: 2,
      unet_hidden_sequence: 77,
    },
  },
  vae_decoder: { freeDimensionOverrides: { batch: 1, channels: 4, height: 64, width: 64 } },
};

type Schedule = { sigmas: number[]; timesteps: number[] };

const SD15_SCHEDULES: Record<number, Schedule> = {
  20: {
    sigmas: [
      14.614641, 10.746721, 8.081491, 6.2049076, 4.8556332, 3.8653735, 3.1237518, 2.5571647,
      2.1156539, 1.7648208, 1.4805796, 1.2458125, 1.048142, 0.87842847, 0.72971897, 0.59643457,
      0.47358605, 0.35554688, 0.23217032, 0.029167158, 0,
    ],
    timesteps: [
      999, 946.421, 893.842, 841.263, 788.684, 736.105, 683.526, 630.947, 578.368, 525.789, 473.211,
      420.632, 368.053, 315.474, 262.895, 210.316, 157.737, 105.158, 52.579, 0,
    ],
  },
  25: {
    sigmas: [
      14.614647, 11.435942, 9.076809, 7.3019943, 5.9489183, 4.903778, 4.0860896, 3.4381795,
      2.9183085, 2.495972, 2.1485956, 1.8593576, 1.6155834, 1.407623, 1.2280698, 1.0711612,
      0.9323583, 0.80802417, 0.695151, 0.5911423, 0.49355352, 0.3997028, 0.30577788, 0.20348993,
      0.02916753, 0,
    ],
    timesteps: [
      999, 957.375, 915.75, 874.125, 832.5, 790.875, 749.25, 707.625, 666, 624.375, 582.75,
      541.125, 499.5, 457.875, 416.25, 374.625, 333, 291.375, 249.75, 208.125, 166.5, 124.875,
      83.25, 41.625, 0,
    ],
  },
  50: {
    sigmas: [
      14.614641, 12.936614, 11.491548, 10.242847, 9.160254, 8.2187178, 7.3971129, 6.6779678,
      6.0465082, 5.4902753, 4.9988414, 4.5632815, 4.1760835, 3.8308389, 3.5220445, 3.2450491,
      2.9958193, 2.770905, 2.5673388, 2.3825343, 2.2142801, 2.0606394, 1.9199299, 1.7906919,
      1.6716395, 1.5616553, 1.4597541, 1.3650671, 1.2768319, 1.1943695, 1.1170794, 1.0444258,
      0.97592826, 0.91115626, 0.84971899, 0.79126039, 0.73545198, 0.68198767, 0.63057536,
      0.58093118, 0.53277015, 0.48579205, 0.43966735, 0.3940045, 0.34830263, 0.30185606,
      0.25353113, 0.20118204, 0.13934672, 0.029167158, 0,
    ],
    timesteps: [
      999, 978.612, 958.224, 937.837, 917.449, 897.061, 876.673, 856.286, 835.898, 815.51, 795.122,
      774.735, 754.347, 733.959, 713.571, 693.184, 672.796, 652.408, 632.02, 611.633, 591.245,
      570.857, 550.469, 530.082, 509.694, 489.306, 468.918, 448.531, 428.143, 407.755, 387.367,
      366.98, 346.592, 326.204, 305.816, 285.429, 265.041, 244.653, 224.265, 203.878, 183.49,
      163.102, 142.714, 122.327, 101.939, 81.551, 61.163, 40.776, 20.388, 0,
    ],
  },
};

function clampSteps(steps: number): number {
  return Math.min(50, Math.max(5, Math.round(steps)));
}

/** Clamp UI steps to supported range (5–50). */
export function resolveInferenceSteps(steps: number): number {
  return clampSteps(steps);
}

/** Build a denoising schedule for any step count by subsampling the 50-step preset. */
export function buildInferenceSchedule(requestedSteps: number): { steps: number; schedule: Schedule } {
  const steps = clampSteps(requestedSteps);
  const preset = SD15_SCHEDULES[steps];
  if (preset) return { steps, schedule: preset };

  const base = SD15_SCHEDULES[50];
  const sigmaCount = steps + 1;
  const sigmas: number[] = [];
  const timesteps: number[] = [];
  for (let i = 0; i < sigmaCount; i++) {
    const idx = Math.round((i / steps) * (base.sigmas.length - 1));
    sigmas.push(base.sigmas[idx]);
    timesteps.push(base.timesteps[idx]);
  }
  sigmas[sigmaCount - 1] = 0;
  timesteps[sigmaCount - 1] = 0;
  return { steps, schedule: { sigmas, timesteps } };
}

export type SdLoadProgress = {
  loaded: number;
  total: number;
  file: string;
  status: "download" | "progress" | "compile" | "done";
};

export type SdGenerateOptions = {
  prompt: string;
  negativePrompt?: string;
  numInferenceSteps: number;
  guidanceScale: number;
  width?: number;
  height?: number;
  seed?: number;
  onProgress?: (step: number, totalSteps: number) => void;
};

const _hasFloat16 = typeof Float16Array !== "undefined";

function toHalf(val: number): number {
  const f32 = new Float32Array(1);
  const i32 = new Int32Array(f32.buffer);
  f32[0] = val;
  const x = i32[0];
  let bits = (x >> 16) & 0x8000;
  let m = (x >> 12) & 0x07ff;
  const e = (x >> 23) & 0xff;
  if (e < 103) return bits;
  if (e > 142) {
    bits |= 0x7c00;
    bits |= (e === 255 ? 0 : 1) && x & 0x007fffff;
    return bits;
  }
  if (e < 113) {
    m |= 0x0800;
    bits |= (m >> (114 - e)) + ((m >> (113 - e)) & 1);
    return bits;
  }
  bits |= ((e - 112) << 10) | (m >> 1);
  bits += m & 1;
  return bits;
}

function f16Array(arr: number[] | Float32Array): Float16Array | Uint16Array {
  if (_hasFloat16) return Float16Array.from(arr);
  const out = new Uint16Array(arr.length);
  for (let i = 0; i < arr.length; i++) out[i] = toHalf(arr[i]);
  return out;
}

function f16toF32(bits: number): number {
  const fraction = bits & 0x03ff;
  const exponent = (bits & 0x7c00) >> 10;
  const sign = bits >> 15 ? -1 : 1;
  if (exponent === 0x1f) return sign * (fraction ? NaN : Infinity);
  if (exponent === 0) return sign * 6.103515625e-5 * (fraction / 0x400);
  return sign * 2 ** (exponent - 15) * (1 + fraction / 0x400);
}

function asUint16(data: ArrayLike<number>): Uint16Array {
  if (data instanceof Uint16Array) return data;
  return new Uint16Array(
    (data as Float16Array).buffer,
    (data as Float16Array).byteOffset,
    (data as Float16Array).length,
  );
}

function readF16(data: ArrayLike<number>, i: number): number {
  if (data instanceof Float32Array) return data[i];
  if (_hasFloat16 && data instanceof Float16Array) return data[i];
  return f16toF32(data[i]);
}

function makePrng(seed: number): () => number {
  let a = seed >>> 0;
  let b = 0x9e3779b9;
  let c = 0x6c62272e;
  let d = 0xca367e8d;
  let spare: number | null = null;

  function next(): number {
    const t = b << 9;
    let r = a * 5;
    r = (((r << 7) | (r >>> 25)) * 9) >>> 0;
    c ^= a;
    d ^= b;
    b ^= c;
    a ^= d;
    c ^= t;
    d = ((d << 11) | (d >>> 21)) >>> 0;
    return (r >>> 0) / 0x100000000;
  }

  return () => {
    if (spare !== null) {
      const v = spare;
      spare = null;
      return v;
    }
    let u: number;
    let v2: number;
    let s: number;
    do {
      u = next() * 2 - 1;
      v2 = next() * 2 - 1;
      s = u * u + v2 * v2;
    } while (s >= 1 || s === 0);
    const mul = Math.sqrt((-2 * Math.log(s)) / s);
    spare = v2 * mul;
    return u * mul;
  };
}

async function cacheGet(key: string): Promise<ArrayBuffer | null> {
  try {
    const root = await navigator.storage.getDirectory();
    const dir = await root.getDirectoryHandle("janusgrove-sd-cache", { create: true });
    const fh = await dir.getFileHandle(key);
    return await (await fh.getFile()).arrayBuffer();
  } catch {
    return null;
  }
}

async function cacheSet(key: string, buffer: ArrayBuffer): Promise<void> {
  try {
    const root = await navigator.storage.getDirectory();
    const dir = await root.getDirectoryHandle("janusgrove-sd-cache", { create: true });
    const fh = await dir.getFileHandle(key, { create: true });
    const writable = await fh.createWritable();
    await writable.write(buffer);
    await writable.close();
  } catch {
    /* ignore cache write failures */
  }
}

type FetchProgress = (loaded: number, total: number, file: string) => void;

async function fetchWithCache(url: string, key: string, onProgress?: FetchProgress): Promise<ArrayBuffer> {
  const cached = await cacheGet(key);
  if (cached) {
    onProgress?.(cached.byteLength, cached.byteLength, key);
    return cached;
  }

  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status} fetching ${url}`);

  const total = parseInt(response.headers.get("content-length") ?? "0", 10);
  const reader = response.body!.getReader();
  const chunks: Uint8Array[] = [];
  let loaded = 0;

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    loaded += value.byteLength;
    onProgress?.(loaded, total || loaded, key);
  }

  const buffer = await new Blob(chunks as BlobPart[]).arrayBuffer();
  void cacheSet(key, buffer);
  return buffer;
}

function vaeOutputToImageData(pixels: ArrayLike<number>, width: number, height: number): ImageData {
  const imageData = new ImageData(width, height);
  const H = height;
  const W = width;
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const idx = y * W + x;
      const r = readF16(pixels, idx);
      const g = readF16(pixels, H * W + idx);
      const b = readF16(pixels, 2 * H * W + idx);
      const base = (y * W + x) * 4;
      imageData.data[base] = Math.min(255, Math.max(0, Math.round((r / 2 + 0.5) * 255)));
      imageData.data[base + 1] = Math.min(255, Math.max(0, Math.round((g / 2 + 0.5) * 255)));
      imageData.data[base + 2] = Math.min(255, Math.max(0, Math.round((b / 2 + 0.5) * 255)));
      imageData.data[base + 3] = 255;
    }
  }
  return imageData;
}

export async function imageDataToBlob(imageData: ImageData): Promise<Blob> {
  const canvas = new OffscreenCanvas(imageData.width, imageData.height);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("OffscreenCanvas 2d unavailable");
  ctx.putImageData(imageData, 0, 0);
  return canvas.convertToBlob({ type: "image/png" });
}

export class Sd15Pipeline {
  private sessions: Partial<Record<(typeof MODEL_FILES)[number]["name"], ort.InferenceSession>> = {};
  private tokenizer: Awaited<ReturnType<typeof AutoTokenizer.from_pretrained>> | null = null;
  private useWebgpu = true;

  constructor(useWebgpu = true) {
    this.useWebgpu = useWebgpu;
    ort.env.wasm.wasmPaths =
      "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.26.0-dev.20260416-b7804b056c/dist/";
  }

  async load(onProgress?: (p: SdLoadProgress) => void): Promise<void> {
    env.allowLocalModels = false;
    env.allowRemoteModels = true;
    env.useBrowserCache = true;

    if (!this.tokenizer) {
      onProgress?.({ loaded: 0, total: SD15_ONNX_TOTAL_BYTES, file: "tokenizer", status: "download" });
      this.tokenizer = await AutoTokenizer.from_pretrained(TOKENIZER_ID, {
        progress_callback: (data) => {
          if (data.status === "progress" && data.file) {
            onProgress?.({
              loaded: data.loaded ?? 0,
              total: data.total ?? 0,
              file: data.file,
              status: "progress",
            });
          }
        },
      });
    }

    const baseUrl = `https://huggingface.co/${HF_REPO}/resolve/main/`;
    let completedBytes = 0;

    for (const { name, file, bytes } of MODEL_FILES) {
      const url = baseUrl + file;
      const cacheKey = `sd15_${name}`;

      onProgress?.({
        loaded: completedBytes,
        total: SD15_ONNX_TOTAL_BYTES,
        file,
        status: "download",
      });

      const buffer = await fetchWithCache(url, cacheKey, (loaded, _total, f) => {
        onProgress?.({
          loaded: completedBytes + loaded,
          total: SD15_ONNX_TOTAL_BYTES,
          file: f,
          status: "progress",
        });
      });

      completedBytes += bytes;
      onProgress?.({
        loaded: completedBytes,
        total: SD15_ONNX_TOTAL_BYTES,
        file,
        status: "compile",
      });

      const modelOpt = MODEL_OPTIONS[name] ?? {};
      const ep = this.useWebgpu ? "webgpu" : "wasm";
      this.sessions[name] = await ort.InferenceSession.create(buffer, {
        executionProviders: [ep],
        logSeverityLevel: 3,
        ...modelOpt,
      });

      onProgress?.({
        loaded: completedBytes,
        total: SD15_ONNX_TOTAL_BYTES,
        file,
        status: "done",
      });
    }
  }

  private async tokenize(text: string): Promise<number[]> {
    if (!this.tokenizer) throw new Error("Tokenizer not loaded");
    const { input_ids } = await this.tokenizer(text, {
      padding: "max_length",
      max_length: 77,
      truncation: true,
    });
    return Array.from(input_ids.data as ArrayLike<number>, Number);
  }

  async generate(options: SdGenerateOptions): Promise<ImageData> {
    const {
      prompt,
      negativePrompt = "",
      numInferenceSteps,
      guidanceScale,
      width = 512,
      height = 512,
      seed,
      onProgress,
    } = options;

    if (width !== 512 || height !== 512) {
      throw new Error("SD 1.5 ONNX pipeline currently supports 512×512 only");
    }

    const textEncoder = this.sessions.text_encoder;
    const unet = this.sessions.unet;
    const vaeDecoder = this.sessions.vae_decoder;
    if (!textEncoder || !unet || !vaeDecoder) throw new Error("SD models not loaded");

    const { steps, schedule } = buildInferenceSchedule(numInferenceSteps);

    const latentW = width / 8;
    const latentH = height / 8;
    const latentC = 4;
    const latentSize = latentC * latentH * latentW;

    const posTokens = await this.tokenize(prompt);
    const negTokens = await this.tokenize(negativePrompt || "");
    const batchTokens = new Int32Array([...posTokens, ...negTokens]);
    const inputTensor = new ort.Tensor("int32", batchTokens, [2, 77]);
    const teResult = await textEncoder.run({ input_ids: inputTensor });
    const teOutput = teResult[Object.keys(teResult)[0]];
    const hiddenStates = new ort.Tensor(
      "float16",
      asUint16(teOutput.data as ArrayLike<number>).slice(),
      teOutput.dims as number[],
    );

    const rng = makePrng(seed ?? Math.floor(Math.random() * 2 ** 32));
    const latents = new Float32Array(latentSize);
    for (let i = 0; i < latentSize; i++) latents[i] = rng() * schedule.sigmas[0];

    for (let step = 0; step < steps; step++) {
      const sigma = schedule.sigmas[step];
      const sigmaNext = schedule.sigmas[step + 1];
      const timestep = schedule.timesteps[step];

      const scale = Math.sqrt(sigma * sigma + 1);
      const scaledData = f16Array(Array.from(latents, (v) => v / scale));
      const scaledBits = asUint16(scaledData);
      const batchData = new Uint16Array(scaledBits.length * 2);
      batchData.set(scaledBits, 0);
      batchData.set(scaledBits, scaledBits.length);
      const sampleTensor = new ort.Tensor("float16", batchData, [2, latentC, latentH, latentW]);

      const timestepValue = BigInt(Math.round(timestep));
      const timestepTensor = new ort.Tensor(
        "int64",
        new BigInt64Array([timestepValue, timestepValue]),
        [2],
      );

      const unetOut = await unet.run({
        sample: sampleTensor,
        timestep: timestepTensor,
        encoder_hidden_states: hiddenStates,
      });

      const outTensor = unetOut.out_sample ?? unetOut[Object.keys(unetOut)[0]];
      const noise = outTensor.data as ArrayLike<number>;
      const half = noise.length / 2;
      const dt = sigmaNext - sigma;

      for (let i = 0; i < latentSize; i++) {
        const posN = readF16(noise, i);
        const negN = readF16(noise, half + i);
        const noisePred = posN * guidanceScale + negN * (1 - guidanceScale);
        latents[i] += noisePred * dt;
      }

      onProgress?.(step + 1, steps);
    }

    const vaeScaled: number[] = new Array(latentSize);
    for (let i = 0; i < latentSize; i++) vaeScaled[i] = latents[i] / 0.18215;
    const vaeInput = asUint16(f16Array(vaeScaled));
    const vaeInputTensor = new ort.Tensor("float16", vaeInput, [1, latentC, latentH, latentW]);
    const { sample } = await vaeDecoder.run({ latent_sample: vaeInputTensor });

    return vaeOutputToImageData(sample.data as ArrayLike<number>, width, height);
  }

  async release(): Promise<void> {
    for (const session of Object.values(this.sessions)) {
      try {
        await session?.release();
      } catch {
        /* ignore */
      }
    }
    this.sessions = {};
  }
}
