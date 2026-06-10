/**
 * Sana 0.6B browser pipeline — ONNX Runtime Web + WebGPU.
 * Ported from bradAGI/web-stable-diffusion/web/sana_pipeline.js
 */

import * as ort from "onnxruntime-web/webgpu";

const MODEL_BASE = "https://huggingface.co/brad-agi/sana-0.6b-onnx-webgpu/resolve/main";
const CLIP_BASE = "https://huggingface.co/onnx-community/clip-vit-large-patch14-ONNX/resolve/main";

const VARIANT = {
  resolution: 1024,
  latentSize: 32,
  latentChannels: 32,
  ditFile: "1024/sana_dit_1024.onnx",
  vaeFile: "1024/sana_vae_1024.onnx",
} as const;

/** CLIP 432MB + DiT 4.74GB + VAE 637MB + small ONNX stubs */
export const SANA_ONNX_TOTAL_BYTES =
  432_000_000 +
  1_573_265 +
  4_735_200_256 +
  1_450_245 +
  636_944_384;

type ClipTokenizerJson = {
  model?: { vocab?: Record<string, number> };
};

export type SanaLoadProgress = {
  loaded: number;
  total: number;
  file: string;
  status: "download" | "progress" | "compile" | "done";
};

export type SanaGenerateOptions = {
  prompt: string;
  numInferenceSteps: number;
  guidanceScale: number;
  width?: number;
  height?: number;
  seed?: number;
  onProgress?: (step: number, totalSteps: number) => void;
};

async function cacheGet(key: string): Promise<ArrayBuffer | null> {
  try {
    const root = await navigator.storage.getDirectory();
    const dir = await root.getDirectoryHandle("janusgrove-sana-cache", { create: true });
    const fh = await dir.getFileHandle(key);
    return await (await fh.getFile()).arrayBuffer();
  } catch {
    return null;
  }
}

async function cacheSet(key: string, buffer: ArrayBuffer): Promise<void> {
  try {
    const root = await navigator.storage.getDirectory();
    const dir = await root.getDirectoryHandle("janusgrove-sana-cache", { create: true });
    const fh = await dir.getFileHandle(key, { create: true });
    const writable = await fh.createWritable();
    await writable.write(buffer);
    await writable.close();
  } catch {
    /* ignore */
  }
}

async function fetchWithCache(
  url: string,
  key: string,
  onProgress?: (loaded: number, total: number, file: string) => void,
): Promise<ArrayBuffer> {
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

function f16ToF32(u16arr: Uint16Array): Float32Array {
  const f32 = new Float32Array(u16arr.length);
  for (let i = 0; i < u16arr.length; i++) {
    const h = u16arr[i];
    const sign = (h & 0x8000) >> 15;
    const exp = (h & 0x7c00) >> 10;
    const mantissa = h & 0x03ff;
    if (exp === 0) {
      f32[i] =
        sign ? -0 : mantissa === 0 ? 0 : 2 ** -14 * (mantissa / 1024);
    } else if (exp === 31) {
      f32[i] = mantissa === 0 ? (sign ? -Infinity : Infinity) : NaN;
    } else {
      f32[i] = (sign ? -1 : 1) * 2 ** (exp - 15) * (1 + mantissa / 1024);
    }
  }
  return f32;
}

async function tensorData(tensor: ort.Tensor): Promise<Float32Array | Uint16Array> {
  const t = tensor as ort.Tensor & { getData?: () => Promise<ArrayBuffer> };
  if (typeof t.getData === "function") {
    const buf = await t.getData();
    const ab = buf as unknown as ArrayBuffer;
    return tensor.type === "float16"
      ? new Uint16Array(ab)
      : new Float32Array(ab);
  }
  const raw = (tensor as ort.Tensor & { cpuData?: ArrayLike<number> }).cpuData ?? tensor.data;
  if (raw instanceof Float32Array || raw instanceof Uint16Array) return raw;
  return new Float32Array(raw as ArrayLike<number>);
}

function tensorToImageData(data: Float32Array | Uint16Array, width: number, height: number): ImageData {
  const imageData = new ImageData(width, height);
  const pixels = imageData.data;
  const f32 =
    data instanceof Uint16Array ? f16ToF32(data) : data instanceof Float32Array ? data : new Float32Array(data);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const pi = (y * width + x) * 4;
      const idx = y * width + x;
      const r = f32[idx];
      const g = f32[height * width + idx];
      const b = f32[2 * height * width + idx];
      pixels[pi] = Math.max(0, Math.min(255, Math.round((r * 0.5 + 0.5) * 255)));
      pixels[pi + 1] = Math.max(0, Math.min(255, Math.round((g * 0.5 + 0.5) * 255)));
      pixels[pi + 2] = Math.max(0, Math.min(255, Math.round((b * 0.5 + 0.5) * 255)));
      pixels[pi + 3] = 255;
    }
  }
  return imageData;
}

function createNoise(batch: number, channels: number, h: number, w: number, seed?: number): Float32Array {
  const size = batch * channels * h * w;
  const data = new Float32Array(size);
  let s = seed ?? (Date.now() & 0xffffffff);
  if (s === 0) s = 1;
  const scale = Math.sqrt(12) / 2;
  for (let i = 0; i < size; i++) {
    s ^= s << 13;
    s ^= s >> 17;
    s ^= s << 5;
    data[i] = ((s >>> 0) / 0xffffffff - 0.5) * 2 * scale;
  }
  return data;
}

export class SanaPipeline {
  private clipSession: ort.InferenceSession | null = null;
  private ditSession: ort.InferenceSession | null = null;
  private vaeSession: ort.InferenceSession | null = null;
  private tokenizer: ClipTokenizerJson | null = null;
  private useWebgpu: boolean;

  constructor(useWebgpu = true) {
    this.useWebgpu = useWebgpu;
    ort.env.wasm.wasmPaths =
      "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.26.0-dev.20260416-b7804b056c/dist/";
  }

  private sessionOpts(): ort.InferenceSession.SessionOptions {
    return {
      executionProviders: [this.useWebgpu ? "webgpu" : "wasm"],
      graphOptimizationLevel: "all",
      logSeverityLevel: 3,
    };
  }

  async load(onProgress?: (p: SanaLoadProgress) => void): Promise<void> {
    let completedBytes = 0;
    const report = (file: string, status: SanaLoadProgress["status"], loaded = completedBytes) => {
      onProgress?.({ loaded, total: SANA_ONNX_TOTAL_BYTES, file, status });
    };

    const fetchFile = async (url: string, key: string, bytes: number) => {
      report(key, "download", completedBytes);
      const buffer = await fetchWithCache(url, key, (loaded) => {
        onProgress?.({
          loaded: completedBytes + loaded,
          total: SANA_ONNX_TOTAL_BYTES,
          file: key,
          status: "progress",
        });
      });
      completedBytes += bytes;
      report(key, "compile", completedBytes);
      return buffer;
    };

    if (!this.tokenizer) {
      const tokBuf = await fetchFile(`${CLIP_BASE}/tokenizer.json`, "clip_tokenizer.json", 500_000);
      this.tokenizer = JSON.parse(new TextDecoder().decode(tokBuf)) as ClipTokenizerJson;
      report("clip_tokenizer.json", "done", completedBytes);
    }

    if (!this.clipSession) {
      const clipBuf = await fetchFile(`${CLIP_BASE}/onnx/model_uint8.onnx`, "clip_model_uint8.onnx", 432_000_000);
      this.clipSession = await ort.InferenceSession.create(clipBuf, this.sessionOpts());
      report("clip_model_uint8.onnx", "done", completedBytes);
    }

    const ditOnnxBuf = await fetchFile(
      `${MODEL_BASE}/${VARIANT.ditFile}`,
      "sana_dit_1024.onnx",
      1_573_265,
    );
    const ditDataBuf = await fetchFile(
      `${MODEL_BASE}/${VARIANT.ditFile}.data`,
      "sana_dit_1024.onnx.data",
      4_735_200_256,
    );
    if (this.ditSession) await this.ditSession.release();
    this.ditSession = await ort.InferenceSession.create(ditOnnxBuf, {
      ...this.sessionOpts(),
      externalData: [{ path: "sana_dit_1024.onnx.data", data: ditDataBuf }],
    });
    report("sana_dit_1024", "done", completedBytes);

    const vaeOnnxBuf = await fetchFile(
      `${MODEL_BASE}/${VARIANT.vaeFile}`,
      "sana_vae_1024.onnx",
      1_450_245,
    );
    const vaeDataBuf = await fetchFile(
      `${MODEL_BASE}/${VARIANT.vaeFile}.data`,
      "sana_vae_1024.onnx.data",
      636_944_384,
    );
    if (this.vaeSession) await this.vaeSession.release();
    this.vaeSession = await ort.InferenceSession.create(vaeOnnxBuf, {
      ...this.sessionOpts(),
      externalData: [{ path: "sana_vae_1024.onnx.data", data: vaeDataBuf }],
    });
    report("sana_vae_1024", "done", completedBytes);
  }

  private tokenizeClip(text: string): number[] {
    if (!this.tokenizer?.model?.vocab) {
      const tokens: number[] = [];
      for (let i = 0; i < Math.min(text.length, 75); i++) {
        tokens.push((text.charCodeAt(i) % 49000) + 256);
      }
      return tokens;
    }
    const vocab = this.tokenizer.model.vocab;
    const tokens: number[] = [];
    const words = text.toLowerCase().replace(/[^\w\s]/g, " ").split(/\s+/);
    for (const word of words) {
      if (tokens.length >= 75) break;
      const token = vocab[`${word} `] ?? vocab[word];
      if (token !== undefined) {
        tokens.push(token);
      } else {
        for (const ch of word) {
          if (tokens.length >= 75) break;
          const charToken = vocab[`${ch} `] ?? vocab[ch];
          if (charToken !== undefined) tokens.push(charToken);
        }
      }
    }
    return tokens;
  }

  private async encodeTextClip(prompt: string): Promise<Float32Array> {
    if (!this.clipSession) throw new Error("CLIP not loaded");
    const tokens = this.tokenizeClip(prompt);
    const maxLen = 77;
    const inputIds = new BigInt64Array(maxLen);
    const attentionMask = new BigInt64Array(maxLen);

    inputIds[0] = 49406n;
    attentionMask[0] = 1n;
    for (let i = 0; i < Math.min(tokens.length, maxLen - 2); i++) {
      inputIds[i + 1] = BigInt(tokens[i]);
      attentionMask[i + 1] = 1n;
    }
    const eosPos = Math.min(tokens.length + 1, maxLen - 1);
    inputIds[eosPos] = 49407n;
    attentionMask[eosPos] = 1n;

    const feeds: Record<string, ort.Tensor> = {};
    for (const name of this.clipSession.inputNames) {
      if (name === "input_ids" || name.includes("input_id")) {
        feeds[name] = new ort.Tensor("int64", inputIds, [1, maxLen]);
      } else if (name === "attention_mask" || name.includes("mask")) {
        feeds[name] = new ort.Tensor("int64", attentionMask, [1, maxLen]);
      } else if (name === "pixel_values" || name.includes("pixel")) {
        feeds[name] = new ort.Tensor("float32", new Float32Array(3 * 224 * 224), [1, 3, 224, 224]);
      }
    }

    const output = await this.clipSession.run(feeds);
    const textEmbeds = output.text_embeds;
    if (!textEmbeds) throw new Error("CLIP missing text_embeds output");

    const embedData = await tensorData(textEmbeds);
    const f32Embed =
      embedData instanceof Float32Array ? embedData : f16ToF32(embedData as Uint16Array);
    const expanded = new Float32Array(maxLen * 768);
    for (let s = 0; s < maxLen; s++) {
      expanded.set(f32Embed.subarray(0, 768), s * 768);
    }
    return expanded;
  }

  private projectClipToSana(clipEmbedding: Float32Array, targetSeqLen: number, targetDim: number): Float32Array {
    const clipDim = 768;
    const clipSeqLen = 77;
    const result = new Float32Array(targetSeqLen * targetDim);
    for (let s = 0; s < targetSeqLen; s++) {
      const srcIdx = Math.min(s, clipSeqLen - 1);
      for (let d = 0; d < targetDim; d++) {
        const clipIdx = d % clipDim;
        const srcVal = clipEmbedding[srcIdx * clipDim + clipIdx] || 0;
        const scale = 1.0 - Math.floor(d / clipDim) * 0.1;
        result[s * targetDim + d] = srcVal * scale;
      }
    }
    return result;
  }

  async generate(options: SanaGenerateOptions): Promise<ImageData> {
    const {
      prompt,
      numInferenceSteps,
      width = 1024,
      height = 1024,
      seed,
      onProgress,
    } = options;

    if (width !== 1024 || height !== 1024) {
      throw new Error("SANA 0.6B ONNX pipeline currently supports 1024×1024 only");
    }

    if (!this.ditSession || !this.vaeSession || !this.clipSession) {
      throw new Error("SANA models not loaded");
    }

    const { resolution, latentSize, latentChannels } = VARIANT;
    const steps = numInferenceSteps;
    const totalSteps = steps + 2;

    onProgress?.(0, totalSteps);
    const clipEmbedding = await this.encodeTextClip(prompt);
    const sanaEmbedding = this.projectClipToSana(clipEmbedding, 300, 2304);

    const latent = createNoise(1, latentChannels, latentSize, latentSize, seed);
    const currentLatent = new Float32Array(latent);

    for (let step = 0; step < steps; step++) {
      const timestep = 1.0 - step / steps;
      const feeds: Record<string, ort.Tensor> = {
        hidden_states: new ort.Tensor("float32", new Float32Array(currentLatent), [
          1,
          latentChannels,
          latentSize,
          latentSize,
        ]),
        encoder_hidden_states: new ort.Tensor("float32", new Float32Array(sanaEmbedding), [
          1,
          300,
          2304,
        ]),
        timestep: new ort.Tensor("float32", new Float32Array([timestep]), [1]),
      };

      const output = await this.ditSession.run(feeds);
      const noisePred = Object.values(output)[0];
      const rawData = await tensorData(noisePred);
      const dt = 1.0 / steps;

      if (rawData instanceof Uint16Array) {
        const f32 = f16ToF32(rawData);
        for (let i = 0; i < currentLatent.length; i++) currentLatent[i] -= f32[i] * dt;
      } else {
        const f32 = rawData instanceof Float32Array ? rawData : new Float32Array(rawData);
        for (let i = 0; i < f32.length && i < currentLatent.length; i++) {
          currentLatent[i] -= f32[i] * dt;
        }
      }
      onProgress?.(step + 1, totalSteps);
    }

    const vaeInputName = this.vaeSession.inputNames[0];
    const vaeOut = await this.vaeSession.run({
      [vaeInputName]: new ort.Tensor("float32", currentLatent, [
        1,
        latentChannels,
        latentSize,
        latentSize,
      ]),
    });
    const imgTensor = Object.values(vaeOut)[0];
    const rawData = await tensorData(imgTensor);
    onProgress?.(totalSteps, totalSteps);
    return tensorToImageData(rawData, resolution, resolution);
  }

  async release(): Promise<void> {
    if (this.clipSession) {
      await this.clipSession.release();
      this.clipSession = null;
    }
    if (this.ditSession) {
      await this.ditSession.release();
      this.ditSession = null;
    }
    if (this.vaeSession) {
      await this.vaeSession.release();
      this.vaeSession = null;
    }
  }
}
