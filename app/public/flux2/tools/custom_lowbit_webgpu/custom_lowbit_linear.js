"use strict";

const dynamicI8BundleCache = new Map();
const arrayBufferFetchCache = new Map();
const immutableGpuBufferCache = new WeakMap();
const scratchGpuBufferCache = new WeakMap();
const computePipelineCache = new WeakMap();
const stageObjectCache = new WeakMap();
const textProjectionGpuCache = new WeakMap();
let browserCacheDbPromise = null;
let customWebGpuDevicePromise = null;
let customWebGpuDevice = null;
let customWebGpuDeviceDescriptorKey = "";

function resetCustomLowbitWebGpuDevice() {
  const device = customWebGpuDevice;
  customWebGpuDevicePromise = null;
  customWebGpuDevice = null;
  customWebGpuDeviceDescriptorKey = "";
  if (device && typeof device.destroy === "function") {
    try {
      device.destroy();
    } catch (_) {
      // Best-effort cleanup after large benchmark sweeps.
    }
  }
}

function median(values) {
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function roundToNearest(value) {
  return value < 0 ? Math.ceil(value - 0.5) : Math.floor(value + 0.5);
}

function float32ToFloat16Bits(value) {
  const floatView = new Float32Array(1);
  const intView = new Uint32Array(floatView.buffer);
  floatView[0] = value;
  const x = intView[0];
  const sign = (x >>> 16) & 0x8000;
  let mantissa = x & 0x7fffff;
  let exponent = (x >>> 23) & 0xff;

  if (exponent === 0xff) {
    if (mantissa !== 0) return sign | 0x7e00;
    return sign | 0x7c00;
  }
  exponent = exponent - 127 + 15;
  if (exponent >= 0x1f) return sign | 0x7c00;
  if (exponent <= 0) {
    if (exponent < -10) return sign;
    mantissa = (mantissa | 0x800000) >>> (1 - exponent);
    return sign | ((mantissa + 0x1000) >>> 13);
  }
  return sign | (exponent << 10) | ((mantissa + 0x1000) >>> 13);
}

function float16BitsToFloat32(bits) {
  const sign = (bits & 0x8000) ? -1 : 1;
  const exponent = (bits >>> 10) & 0x1f;
  const mantissa = bits & 0x03ff;
  if (exponent === 0) {
    return sign * Math.pow(2, -14) * (mantissa / 1024);
  }
  if (exponent === 31) {
    return mantissa ? NaN : sign * Infinity;
  }
  return sign * Math.pow(2, exponent - 15) * (1 + mantissa / 1024);
}

function deterministicInput(row, kIndex) {
  const base = ((row * 37 + kIndex * 13 + 17) % 251) - 125;
  const fraction = (((row * 17 + kIndex * 29 + 5) % 17) - 8) / 32;
  return Math.fround((base + fraction) / 16);
}

function buildInputF16(n, k) {
  const values = new Uint16Array(n * k);
  for (let row = 0; row < n; ++row) {
    for (let kIndex = 0; kIndex < k; ++kIndex) {
      values[row * k + kIndex] = float32ToFloat16Bits(deterministicInput(row, kIndex));
    }
  }
  return values;
}

function buildInputF32(n, k) {
  const values = new Float32Array(n * k);
  for (let row = 0; row < n; ++row) {
    for (let kIndex = 0; kIndex < k; ++kIndex) {
      values[row * k + kIndex] = deterministicInput(row, kIndex);
    }
  }
  return values;
}

function buildFluxRopeFrequencies(axisDim = 32, theta = 2000) {
  const count = axisDim / 2;
  const values = new Float32Array(count);
  for (let i = 0; i < count; ++i) {
    values[i] = 1 / Math.pow(theta, (i * 2) / axisDim);
  }
  return values;
}

function buildFluxRopeSinCos(n, textTokens, imageWidth, axisDim = 32, theta = 2000) {
  const freqs = buildFluxRopeFrequencies(axisDim, theta);
  const pairs = 64;
  const values = new Float32Array(n * pairs * 2);
  const safeWidth = Math.max(1, Number(imageWidth || 1));
  for (let row = 0; row < n; ++row) {
    for (let pair = 0; pair < pairs; ++pair) {
      const axis = Math.floor(pair / 16);
      const freqIndex = pair - axis * 16;
      let position = 0;
      if (row < textTokens) {
        position = axis === 3 ? row : 0;
      } else {
        const imageRow = row - textTokens;
        const y = Math.floor(imageRow / safeWidth);
        const x = imageRow - y * safeWidth;
        if (axis === 1) position = y;
        else if (axis === 2) position = x;
      }
      const angle = position * freqs[freqIndex];
      const base = (row * pairs + pair) * 2;
      values[base] = Math.cos(angle);
      values[base + 1] = Math.sin(angle);
    }
  }
  return values;
}

function sleepMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchArrayBuffer(url) {
  const key = new URL(url, window.location.href).toString();
  if (!arrayBufferFetchCache.has(key)) {
    arrayBufferFetchCache.set(key, (async () => {
      let lastError = null;
      for (let attempt = 0; attempt < 4; attempt += 1) {
        try {
          const response = await fetch(key);
          if (!response.ok) {
            throw new Error(`fetch failed ${response.status}: ${key}`);
          }
          return await response.arrayBuffer();
        } catch (err) {
          lastError = err;
          if (attempt < 3) await sleepMs(100 * (attempt + 1));
        }
      }
      throw lastError || new Error(`fetch failed: ${key}`);
    })());
  }
  try {
    return await arrayBufferFetchCache.get(key);
  } catch (err) {
    arrayBufferFetchCache.delete(key);
    throw err;
  }
}

function openBrowserCacheDb() {
  if (typeof indexedDB === "undefined") return Promise.resolve(null);
  if (browserCacheDbPromise) return browserCacheDbPromise;
  browserCacheDbPromise = new Promise((resolve) => {
    const request = indexedDB.open("flux2-browser-cache", 2);
    request.onupgradeneeded = () => {
      const db = request.result;
      const store = db.objectStoreNames.contains("text-contexts")
        ? request.transaction.objectStore("text-contexts")
        : db.createObjectStore("text-contexts", {keyPath: "key"});
      if (!store.indexNames.contains("savedAt")) {
        store.createIndex("savedAt", "savedAt");
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => {
      console.warn("[custom-lowbit] IndexedDB open failed", request.error);
      resolve(null);
    };
    request.onblocked = () => {
      console.warn("[custom-lowbit] IndexedDB open blocked");
      resolve(null);
    };
  });
  return browserCacheDbPromise;
}

async function loadPersistentFloat32(key, expectedValues) {
  if (!key) return null;
  const db = await openBrowserCacheDb();
  if (!db) return null;
  return await new Promise((resolve) => {
    const tx = db.transaction("text-contexts", "readonly");
    const request = tx.objectStore("text-contexts").get(key);
    request.onsuccess = () => {
      const entry = request.result;
      if (!entry || !entry.data) {
        resolve(null);
        return;
      }
      const values = entry.data instanceof Float32Array
        ? entry.data
        : (entry.data instanceof ArrayBuffer ? new Float32Array(entry.data) : null);
      resolve(values && values.length === expectedValues ? values : null);
    };
    request.onerror = () => resolve(null);
  });
}

async function loadStaticFloat32(url, expectedValues) {
  if (!url) return null;
  try {
    const buffer = await fetchArrayBuffer(url);
    if (buffer.byteLength !== expectedValues * 4) return null;
    return new Float32Array(buffer);
  } catch (err) {
    console.warn("[custom-lowbit] static f32 load failed", url, err);
    return null;
  }
}

async function savePersistentFloat32(key, values) {
  if (!key || !(values instanceof Float32Array)) return false;
  const db = await openBrowserCacheDb();
  if (!db) return false;
  return await new Promise((resolve) => {
    const tx = db.transaction("text-contexts", "readwrite");
    const store = tx.objectStore("text-contexts");
    const buffer = values.buffer.slice(values.byteOffset, values.byteOffset + values.byteLength);
    const request = store.put({
      key,
      data: buffer,
      bytes: values.byteLength,
      savedAt: Date.now(),
    });
    request.onsuccess = () => resolve(true);
    request.onerror = () => resolve(false);
  });
}

function createBuffer(device, data, usage) {
  const size = Math.max(4, Math.ceil(data.byteLength / 4) * 4);
  const buffer = device.createBuffer({size, usage, mappedAtCreation: true});
  new Uint8Array(buffer.getMappedRange()).set(new Uint8Array(data.buffer, data.byteOffset, data.byteLength));
  buffer.unmap();
  return buffer;
}

function createImmutableBuffer(device, data, usage, cacheKey = null) {
  if (!cacheKey) return createBuffer(device, data, usage);
  let deviceCache = immutableGpuBufferCache.get(device);
  if (!deviceCache) {
    deviceCache = new Map();
    immutableGpuBufferCache.set(device, deviceCache);
  }
  const key = `${usage}:${cacheKey}`;
  if (!deviceCache.has(key)) {
    deviceCache.set(key, createBuffer(device, data, usage));
  }
  return deviceCache.get(key);
}

function createEmptyBuffer(device, size, usage) {
  return device.createBuffer({size: Math.max(4, Math.ceil(size / 4) * 4), usage});
}

function createReusableBuffer(device, cacheKey, size, usage) {
  if (!cacheKey) return createEmptyBuffer(device, size, usage);
  let deviceCache = scratchGpuBufferCache.get(device);
  if (!deviceCache) {
    deviceCache = new Map();
    scratchGpuBufferCache.set(device, deviceCache);
  }
  const alignedSize = Math.max(4, Math.ceil(size / 4) * 4);
  const key = `${usage}:${alignedSize}:${cacheKey}`;
  if (!deviceCache.has(key)) {
    deviceCache.set(key, device.createBuffer({size: alignedSize, usage}));
  }
  return deviceCache.get(key);
}

async function getCachedComputePipeline(device, cacheKey, code) {
  let deviceCache = computePipelineCache.get(device);
  if (!deviceCache) {
    deviceCache = new Map();
    computePipelineCache.set(device, deviceCache);
  }
  if (!deviceCache.has(cacheKey)) {
    const module = device.createShaderModule({code});
    deviceCache.set(cacheKey, device.createComputePipelineAsync({
      layout: "auto",
      compute: {module, entryPoint: "main"},
    }));
  }
  return await deviceCache.get(cacheKey);
}

async function getCachedStageObject(device, cacheKey, factory) {
  if (!cacheKey) return await factory();
  let deviceCache = stageObjectCache.get(device);
  if (!deviceCache) {
    deviceCache = new Map();
    stageObjectCache.set(device, deviceCache);
  }
  if (!deviceCache.has(cacheKey)) {
    deviceCache.set(cacheKey, (async () => factory())());
  }
  try {
    return await deviceCache.get(cacheKey);
  } catch (err) {
    deviceCache.delete(cacheKey);
    throw err;
  }
}

async function requestCustomWebGpuDevice(requiredFeatures = ["shader-f16"], requiredLimitHints = {}) {
  if (!navigator.gpu) {
    throw new Error("navigator.gpu is not available");
  }
  const adapter = await navigator.gpu.requestAdapter({powerPreference: "high-performance"});
  if (!adapter) {
    throw new Error("WebGPU adapter is not available");
  }
  for (const feature of requiredFeatures) {
    if (feature !== "packed_4x8_integer_dot_product" && !adapter.features.has(feature)) {
      throw new Error(`WebGPU adapter does not expose ${feature}`);
    }
  }
  if (requiredFeatures.includes("packed_4x8_integer_dot_product")) {
    const wgslLanguageFeatures = navigator.gpu.wgslLanguageFeatures || new Set();
    if (!wgslLanguageFeatures.has("packed_4x8_integer_dot_product")) {
      throw new Error("WGSL packed_4x8_integer_dot_product is not available");
    }
  }
  const requiredDeviceFeatures = requiredFeatures.filter((feature) => feature !== "packed_4x8_integer_dot_product");
  const descriptor = {requiredFeatures: requiredDeviceFeatures};
  const requiredLimits = {};
  if (adapter.limits && adapter.limits.maxComputeWorkgroupStorageSize >= 32768) {
    requiredLimits.maxComputeWorkgroupStorageSize = 32768;
  }
  if (
    requiredLimitHints.maxComputeInvocationsPerWorkgroup &&
    adapter.limits &&
    adapter.limits.maxComputeInvocationsPerWorkgroup >= requiredLimitHints.maxComputeInvocationsPerWorkgroup
  ) {
    requiredLimits.maxComputeInvocationsPerWorkgroup = requiredLimitHints.maxComputeInvocationsPerWorkgroup;
  }
  if (adapter.limits && adapter.limits.maxStorageBufferBindingSize > 128 * 1024 * 1024) {
    requiredLimits.maxStorageBufferBindingSize = Math.min(adapter.limits.maxStorageBufferBindingSize, 1024 * 1024 * 1024);
  }
  if (adapter.limits && adapter.limits.maxBufferSize > 256 * 1024 * 1024) {
    requiredLimits.maxBufferSize = Math.min(adapter.limits.maxBufferSize, 1024 * 1024 * 1024);
  }
  if (Object.keys(requiredLimits).length) {
    descriptor.requiredLimits = requiredLimits;
  }
  const descriptorKey = JSON.stringify({
    features: [...requiredDeviceFeatures].sort(),
    limits: Object.fromEntries(Object.entries(requiredLimits).sort(([a], [b]) => a.localeCompare(b))),
  });
  if (customWebGpuDevicePromise && customWebGpuDeviceDescriptorKey !== descriptorKey) {
    resetCustomLowbitWebGpuDevice();
  }
  if (!customWebGpuDevicePromise) {
    customWebGpuDeviceDescriptorKey = descriptorKey;
    const promise = adapter.requestDevice(descriptor).then((device) => {
      customWebGpuDevice = device;
      device.lost.then(() => {
        if (customWebGpuDevice === device) {
          customWebGpuDevice = null;
          customWebGpuDevicePromise = null;
        }
      });
      return device;
    }).catch((err) => {
      if (customWebGpuDevicePromise === promise) {
        customWebGpuDevicePromise = null;
        customWebGpuDeviceDescriptorKey = "";
      }
      throw err;
    });
    customWebGpuDevicePromise = promise;
  }
  return {adapter, device: await customWebGpuDevicePromise};
}

async function readFloat32Buffer(device, source, count, sourceOffsetBytes = 0) {
  const size = count * 4;
  const readback = device.createBuffer({
    size,
    usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
  });
  const encoder = device.createCommandEncoder();
  encoder.copyBufferToBuffer(source, sourceOffsetBytes, readback, 0, size);
  device.queue.submit([encoder.finish()]);
  await readback.mapAsync(GPUMapMode.READ);
  const values = new Float32Array(readback.getMappedRange()).slice();
  readback.unmap();
  readback.destroy();
  return values;
}

function floatArrayStats(values) {
  let finite = 0;
  let nonFinite = 0;
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let sumSq = 0;
  for (const value of values) {
    if (!Number.isFinite(value)) {
      nonFinite += 1;
      continue;
    }
    finite += 1;
    min = Math.min(min, value);
    max = Math.max(max, value);
    sum += value;
    sumSq += value * value;
  }
  if (!finite) {
    return {count: values.length, finite, nonFinite, min: NaN, max: NaN, mean: NaN, std: NaN};
  }
  const mean = sum / finite;
  const variance = Math.max(0, sumSq / finite - mean * mean);
  return {count: values.length, finite, nonFinite, min, max, mean, std: Math.sqrt(variance)};
}

function makeQ4ZpShader32xWide(tileCols, outputF16 = false, kChunk = 64, unrollK = false) {
  if (tileCols % 16 !== 0 || kChunk % 8 !== 0) {
    throw new Error(`invalid q4 tiling: tileCols=${tileCols}, kChunk=${kChunk}`);
  }
  const workgroupStorageBytes = (32 * kChunk + tileCols * kChunk) * 2;
  if (workgroupStorageBytes > 32768) {
    throw new Error(`q4 tiling exceeds WebGPU workgroup storage: tileCols=${tileCols}, kChunk=${kChunk}, bytes=${workgroupStorageBytes}`);
  }
  const colsPerThread = tileCols / 16;
  const xItems = kChunk * 32;
  const wItems = kChunk * tileCols;
  const outputType = outputF16 ? "f16" : "f32";
  const storeValue = (value) => outputF16
    ? `f16(clamp(${value}, -65504.0, 65504.0))`
    : `f32(${value})`;
  const colDecls = [];
  const accDecls = [];
  const wLoads = [];
  const accUpdates = [];
  const stores = [];
  for (let c = 0; c < colsPerThread; ++c) {
    const colOffset = c * 16;
    colDecls.push(`  let col${c} = wid.x * ${tileCols}u + lid.x + ${colOffset}u;`);
    accDecls.push(`  var acc0${c} = f16(0.0);`);
    accDecls.push(`  var acc1${c} = f16(0.0);`);
    wLoads.push(`        let w${c} = w_tile[tile_k * ${tileCols}u + lid.x + ${colOffset}u];`);
    accUpdates.push(`        acc0${c} = acc0${c} + x0 * w${c};`);
    accUpdates.push(`        acc1${c} = acc1${c} + x1 * w${c};`);
    stores.push(`  if (row0 < params.n && col${c} < params.m) { y[row0 * params.m + col${c}] = ${storeValue(`acc0${c}`)}; }`);
    stores.push(`  if (row1 < params.n && col${c} < params.m) { y[row1 * params.m + col${c}] = ${storeValue(`acc1${c}`)}; }`);
  }
  const computeBody = unrollK
    ? Array.from({length: kChunk}, (_, kk) => {
        const unrolledLoads = [];
        const unrolledAccUpdates = [];
        for (let c = 0; c < colsPerThread; ++c) {
          const colOffset = c * 16;
          unrolledLoads.push(`        let w${c}_${kk} = w_tile[${kk}u * ${tileCols}u + lid.x + ${colOffset}u];`);
          unrolledAccUpdates.push(`        acc0${c} = acc0${c} + x0_${kk} * w${c}_${kk};`);
          unrolledAccUpdates.push(`        acc1${c} = acc1${c} + x1_${kk} * w${c}_${kk};`);
        }
        return `
      let x0_${kk} = x_tile[${kk}u * 32u + lid.y];
      let x1_${kk} = x_tile[${kk}u * 32u + lid.y + 16u];
${unrolledLoads.join("\n")}
${unrolledAccUpdates.join("\n")}`;
      }).join("\n")
    : `      for (var tile_k = 0u; tile_k < ${kChunk}u; tile_k = tile_k + 1u) {
        let x0 = x_tile[tile_k * 32u + lid.y];
        let x1 = x_tile[tile_k * 32u + lid.y + 16u];
${wLoads.join("\n")}
${accUpdates.join("\n")}
      }`;
  return `
enable f16;

struct Params {
  n: u32,
  k: u32,
  m: u32,
  group_size: u32,
  groups_per_col: u32,
  packed_group_words: u32,
  row_offset: u32,
  col_offset: u32,
  weight_m: u32,
  output_stride: u32,
  _pad0: u32,
  _pad1: u32,
};

@group(0) @binding(0) var<storage, read> x: array<f16>;
@group(0) @binding(1) var<storage, read> packed_w: array<u32>;
@group(0) @binding(2) var<storage, read> scales: array<f16>;
@group(0) @binding(3) var<storage, read> zero_points: array<u32>;
@group(0) @binding(4) var<storage, read_write> y: array<${outputType}>;
@group(0) @binding(5) var<uniform> params: Params;

var<workgroup> x_tile: array<f16, ${xItems}>;
var<workgroup> w_tile: array<f16, ${wItems}>;

fn load_q_scaled(col: u32, k_index: u32) -> f16 {
  let group = k_index / params.group_size;
  let inner = k_index - group * params.group_size;
  let word = inner / 8u;
  let weight_col = params.col_offset + col;
  let word_index = (group * params.packed_group_words + word) * params.weight_m + weight_col;
  let shift = (inner & 7u) * 4u;
  let nibble = (packed_w[word_index] >> shift) & 15u;
  let zp = zero_points[group * params.weight_m + weight_col] & 15u;
  let q = f16(f32(i32(nibble) - i32(zp)));
  return q * scales[group * params.weight_m + weight_col];
}

@compute @workgroup_size(16, 16, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let row0 = wid.y * 32u + lid.y;
  let row1 = row0 + 16u;
${colDecls.join("\n")}
  let local_linear = lid.y * 16u + lid.x;
${accDecls.join("\n")}

  for (var base_k = 0u; base_k < params.k; base_k = base_k + ${kChunk}u) {
    for (var offset = 0u; offset < ${xItems}u; offset = offset + 256u) {
      let tile_index = local_linear + offset;
      let tile_k = tile_index / 32u;
      let tile_lane = tile_index - tile_k * 32u;
      let src_k = base_k + tile_k;
      let src_row = wid.y * 32u + tile_lane;
      if (src_row < params.n && src_k < params.k) {
        x_tile[tile_index] = x[(params.row_offset + src_row) * params.k + src_k];
      } else {
        x_tile[tile_index] = f16(0.0);
      }
    }

    for (var offset = 0u; offset < ${wItems}u; offset = offset + 256u) {
      let tile_index = local_linear + offset;
      let tile_k = tile_index / ${tileCols}u;
      let tile_lane = tile_index - tile_k * ${tileCols}u;
      let src_k = base_k + tile_k;
      let src_col = wid.x * ${tileCols}u + tile_lane;
      if (src_col < params.m && src_k < params.k) {
        w_tile[tile_index] = load_q_scaled(src_col, src_k);
      } else {
        w_tile[tile_index] = f16(0.0);
      }
    }
    workgroupBarrier();

    if (row0 < params.n || row1 < params.n) {
${computeBody}
    }
    workgroupBarrier();
  }

${stores.join("\n").replaceAll("row0 * params.m + col", "row0 * params.output_stride + params.col_offset + col").replaceAll("row1 * params.m + col", "row1 * params.output_stride + params.col_offset + col")}
}
`;
}

function makeQ4ZpDp4aShader32xWide(tileCols, wChunkCols = 64, outputF16 = true) {
  if (tileCols % wChunkCols !== 0 || wChunkCols % 16 !== 0) {
    throw new Error(`invalid q4 dp4a tiling: tileCols=${tileCols}, wChunkCols=${wChunkCols}`);
  }
  const colsPerThread = tileCols / 16;
  const colsPerChunk = wChunkCols / 16;
  const xItems = 32 * 64;
  const wItems = 64 * wChunkCols;
  const outputType = outputF16 ? "f16" : "f32";
  const storeValue = (value) => outputF16
    ? `f16(clamp(${value}, -65504.0, 65504.0))`
    : `f32(${value})`;
  const colDecls = [];
  const accDecls = [];
  const stores = [];
  for (let c = 0; c < colsPerThread; ++c) {
    const colOffset = c * 16;
    colDecls.push(`  let col${c} = wid.x * ${tileCols}u + lid.x + ${colOffset}u;`);
    accDecls.push(`  var acc0${c} = 0.0;`);
    accDecls.push(`  var acc1${c} = 0.0;`);
    stores.push(`  if (row0 < params.n && col${c} < params.m) { y[row0 * params.output_stride + params.col_offset + col${c}] = ${storeValue(`acc0${c}`)}; }`);
    stores.push(`  if (row1 < params.n && col${c} < params.m) { y[row1 * params.output_stride + params.col_offset + col${c}] = ${storeValue(`acc1${c}`)}; }`);
  }
  const wChunkBlocks = [];
  for (let chunk = 0; chunk < tileCols / wChunkCols; ++chunk) {
    const chunkColOffset = chunk * wChunkCols;
    const wLoads = [];
    const accUpdates = [];
    for (let c = 0; c < colsPerChunk; ++c) {
      const accIndex = chunk * colsPerChunk + c;
      const localColOffset = c * 16;
      wLoads.push(`          let w${accIndex} = w_tile[tile_kw * ${wChunkCols}u + lid.x + ${localColOffset}u];`);
      wLoads.push(`          let s${accIndex} = f32(scale_tile[tile_kw * ${wChunkCols}u + lid.x + ${localColOffset}u]);`);
      accUpdates.push(`          acc0${accIndex} = acc0${accIndex} + f32(dot4I8Packed(x0, w${accIndex})) * x_scale0 * s${accIndex};`);
      accUpdates.push(`          acc1${accIndex} = acc1${accIndex} + f32(dot4I8Packed(x1, w${accIndex})) * x_scale1 * s${accIndex};`);
    }
    wChunkBlocks.push(`
    for (var offset = 0u; offset < ${wItems}u; offset = offset + 256u) {
      let tile_index = local_linear + offset;
      let tile_kw = tile_index / ${wChunkCols}u;
      let tile_col = tile_index - tile_kw * ${wChunkCols}u;
      let src_kw = base_kw + tile_kw;
      let src_col = wid.x * ${tileCols}u + ${chunkColOffset}u + tile_col;
      if (src_col < params.m && src_kw < params.k_words) {
        w_tile[tile_index] = load_q4_i8_packed(src_col, src_kw);
        let group = (src_kw * 4u) / params.group_size;
        scale_tile[tile_index] = scales[group * params.weight_m + params.col_offset + src_col];
      } else {
        w_tile[tile_index] = 0u;
        scale_tile[tile_index] = f16(0.0);
      }
    }
    workgroupBarrier();

    if (row0 < params.n || row1 < params.n) {
      for (var tile_kw = 0u; tile_kw < 64u; tile_kw = tile_kw + 1u) {
        let x0 = x_tile[lid.y * 64u + tile_kw];
        let x1 = x_tile[(lid.y + 16u) * 64u + tile_kw];
${wLoads.join("\n")}
        let x_group_size = max(1u, params.k / max(1u, params.x_scale_groups_per_row));
        let x_group = ((base_kw + tile_kw) * 4u) / x_group_size;
        let x_scale0 = load_x_scale(row0, x_group);
        let x_scale1 = load_x_scale(row1, x_group);
${accUpdates.join("\n")}
      }
    }
    workgroupBarrier();`);
  }
  return `
requires packed_4x8_integer_dot_product;
enable f16;

struct Params {
  n: u32,
  k: u32,
  m: u32,
  group_size: u32,
  groups_per_col: u32,
  packed_group_words: u32,
  row_offset: u32,
  col_offset: u32,
  weight_m: u32,
  output_stride: u32,
  k_words: u32,
  x_scale_groups_per_row: u32,
};

@group(0) @binding(0) var<storage, read> x_packed: array<u32>;
@group(0) @binding(1) var<storage, read> packed_w: array<u32>;
@group(0) @binding(2) var<storage, read> x_scales: array<f32>;
@group(0) @binding(3) var<storage, read> scales: array<f16>;
@group(0) @binding(4) var<storage, read> zero_points: array<u32>;
@group(0) @binding(5) var<storage, read_write> y: array<${outputType}>;
@group(0) @binding(6) var<uniform> params: Params;

var<workgroup> x_tile: array<u32, ${xItems}>;
var<workgroup> w_tile: array<u32, ${wItems}>;
var<workgroup> scale_tile: array<f16, ${wItems}>;

fn pack_i8_lane(value: i32, lane: u32) -> u32 {
  return (u32(value) & 0xffu) << (lane * 8u);
}

fn load_q4_i8_packed(col: u32, kw: u32) -> u32 {
  let k_index = kw * 4u;
  let group = k_index / params.group_size;
  let inner = k_index - group * params.group_size;
  let q_word = inner / 8u;
  let shift_base = (inner & 7u) * 4u;
  let weight_col = params.col_offset + col;
  let packed = packed_w[(group * params.packed_group_words + q_word) * params.weight_m + weight_col];
  let zp = i32(zero_points[group * params.weight_m + weight_col] & 15u);
  var out = 0u;
  for (var lane = 0u; lane < 4u; lane = lane + 1u) {
    let nibble = i32((packed >> (shift_base + lane * 4u)) & 15u);
    out = out | pack_i8_lane(nibble - zp, lane);
  }
  return out;
}

fn load_x_scale(row: u32, group: u32) -> f32 {
  if (row >= params.n) {
    return 0.0;
  }
  let source_row = params.row_offset + row;
  if (params.x_scale_groups_per_row > 1u) {
    return x_scales[source_row * params.x_scale_groups_per_row + group];
  }
  return x_scales[source_row];
}

@compute @workgroup_size(16, 16, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let row0 = wid.y * 32u + lid.y;
  let row1 = row0 + 16u;
${colDecls.join("\n")}
  let local_linear = lid.y * 16u + lid.x;
${accDecls.join("\n")}

  for (var base_kw = 0u; base_kw < params.k_words; base_kw = base_kw + 64u) {
    for (var offset = 0u; offset < ${xItems}u; offset = offset + 256u) {
      let tile_index = local_linear + offset;
      let tile_row = tile_index / 64u;
      let tile_kw = tile_index - tile_row * 64u;
      let src_row = wid.y * ${rowBlock}u + tile_row;
      let src_kw = base_kw + tile_kw;
      if (src_row < params.n && src_kw < params.k_words) {
        x_tile[tile_index] = x_packed[(params.row_offset + src_row) * params.k_words + src_kw];
      } else {
        x_tile[tile_index] = 0u;
      }
    }
    workgroupBarrier();
${wChunkBlocks.join("\n")}
  }

${stores.join("\n")}
}
`;
}

const QUANTIZE_X_F32_SHADER = `
struct Params {
  n: u32,
  k: u32,
  m: u32,
  k_words: u32,
};

@group(0) @binding(0) var<storage, read> x_f32: array<f32>;
@group(0) @binding(1) var<storage, read_write> x_packed: array<u32>;
@group(0) @binding(2) var<storage, read_write> x_scales: array<f32>;
@group(0) @binding(3) var<uniform> params: Params;

var<workgroup> row_absmax: array<f32, 256>;

fn pack_i8_lane(value: i32, lane: u32) -> u32 {
  return (u32(value) & 0xffu) << (lane * 8u);
}

@compute @workgroup_size(256, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let row = wid.x;
  let local_id = lid.x;
  var absmax = 0.0;

  for (var k_index = local_id; k_index < params.k; k_index = k_index + 256u) {
    absmax = max(absmax, abs(x_f32[row * params.k + k_index]));
  }
  row_absmax[local_id] = absmax;
  workgroupBarrier();

  for (var stride = 128u; stride > 0u; stride = stride / 2u) {
    if (local_id < stride) {
      row_absmax[local_id] = max(row_absmax[local_id], row_absmax[local_id + stride]);
    }
    workgroupBarrier();
  }

  let row_scale = row_absmax[0];
  let quant_scale = select(0.0, 127.0 / row_scale, row_scale > 0.0);
  if (local_id == 0u) {
    x_scales[row] = select(1.0, row_scale / 127.0, row_scale > 0.0);
  }

  for (var word = local_id; word < params.k_words; word = word + 256u) {
    var packed_word = 0u;
    for (var lane = 0u; lane < 4u; lane = lane + 1u) {
      let k_index = word * 4u + lane;
      var q = 0i;
      if (k_index < params.k) {
        let scaled = round(clamp(x_f32[row * params.k + k_index] * quant_scale, -127.0, 127.0));
        q = i32(scaled);
      }
      packed_word = packed_word | pack_i8_lane(q, lane);
    }
    x_packed[row * params.k_words + word] = packed_word;
  }
}
`;

const QUANTIZE_X_F32_OFFSET_SHADER = `
struct Params {
  n: u32,
  k: u32,
  k_words: u32,
  source_row_offset: u32,
  source_stride: u32,
};

@group(0) @binding(0) var<storage, read> x_f32: array<f32>;
@group(0) @binding(1) var<storage, read_write> x_packed: array<u32>;
@group(0) @binding(2) var<storage, read_write> x_scales: array<f32>;
@group(0) @binding(3) var<uniform> params: Params;

var<workgroup> row_absmax: array<f32, 256>;

fn pack_i8_lane(value: i32, lane: u32) -> u32 {
  return (u32(value) & 0xffu) << (lane * 8u);
}

fn source_value(row: u32, col: u32) -> f32 {
  return x_f32[(row + params.source_row_offset) * params.source_stride + col];
}

@compute @workgroup_size(256, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let row = wid.x;
  let local_id = lid.x;
  if (row >= params.n) {
    return;
  }
  var absmax = 0.0;

  for (var k_index = local_id; k_index < params.k; k_index = k_index + 256u) {
    absmax = max(absmax, abs(source_value(row, k_index)));
  }
  row_absmax[local_id] = absmax;
  workgroupBarrier();

  for (var stride = 128u; stride > 0u; stride = stride / 2u) {
    if (local_id < stride) {
      row_absmax[local_id] = max(row_absmax[local_id], row_absmax[local_id + stride]);
    }
    workgroupBarrier();
  }

  let row_scale = row_absmax[0];
  let quant_scale = select(0.0, 127.0 / row_scale, row_scale > 0.0);
  if (local_id == 0u) {
    x_scales[row] = select(1.0, row_scale / 127.0, row_scale > 0.0);
  }

  for (var word = local_id; word < params.k_words; word = word + 256u) {
    var packed_word = 0u;
    for (var lane = 0u; lane < 4u; lane = lane + 1u) {
      let k_index = word * 4u + lane;
      var q = 0i;
      if (k_index < params.k) {
        let scaled = round(clamp(source_value(row, k_index) * quant_scale, -127.0, 127.0));
        q = i32(scaled);
      }
      packed_word = packed_word | pack_i8_lane(q, lane);
    }
    x_packed[row * params.k_words + word] = packed_word;
  }
}
`;

const SINGLE_PRENORM_MOD_QUANT_SHADER = `
enable f16;

struct Params {
  n: u32,
  k: u32,
  m: u32,
  k_words: u32,
};

@group(0) @binding(0) var<storage, read> x_f32: array<f32>;
@group(0) @binding(1) var<storage, read> shift: array<f32>;
@group(0) @binding(2) var<storage, read> scale: array<f32>;
@group(0) @binding(3) var<storage, read_write> x_packed: array<u32>;
@group(0) @binding(4) var<storage, read_write> x_scales: array<f32>;
@group(0) @binding(5) var<uniform> params: Params;

var<workgroup> scratch: array<f32, 256>;
var<workgroup> row_values: array<f32, 3072>;

fn pack_i8_lane(value: i32, lane: u32) -> u32 {
  return (u32(value) & 0xffu) << (lane * 8u);
}

@compute @workgroup_size(256, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let row = wid.x;
  let local_id = lid.x;
  if (row >= params.n || params.k > 3072u) {
    return;
  }

  var local_sum = 0.0;
  for (var col = local_id; col < params.k; col = col + 256u) {
    local_sum = local_sum + x_f32[row * params.k + col];
  }
  scratch[local_id] = local_sum;
  workgroupBarrier();
  for (var stride = 128u; stride > 0u; stride = stride / 2u) {
    if (local_id < stride) {
      scratch[local_id] = scratch[local_id] + scratch[local_id + stride];
    }
    workgroupBarrier();
  }
  let mean = scratch[0] / f32(params.k);

  var local_var = 0.0;
  for (var col = local_id; col < params.k; col = col + 256u) {
    let centered = x_f32[row * params.k + col] - mean;
    local_var = local_var + centered * centered;
  }
  scratch[local_id] = local_var;
  workgroupBarrier();
  for (var stride = 128u; stride > 0u; stride = stride / 2u) {
    if (local_id < stride) {
      scratch[local_id] = scratch[local_id] + scratch[local_id + stride];
    }
    workgroupBarrier();
  }
  let inv_std = inverseSqrt(scratch[0] / f32(params.k) + 0.000001);

  var local_absmax = 0.0;
  for (var col = local_id; col < params.k; col = col + 256u) {
    let normed = f32(f16((x_f32[row * params.k + col] - mean) * inv_std));
    let value = f32(f16(clamp(normed * (1.0 + f32(f16(scale[col]))) + f32(f16(shift[col])), -65504.0, 65504.0)));
    row_values[col] = value;
    local_absmax = max(local_absmax, abs(value));
  }
  scratch[local_id] = local_absmax;
  workgroupBarrier();
  for (var stride = 128u; stride > 0u; stride = stride / 2u) {
    if (local_id < stride) {
      scratch[local_id] = max(scratch[local_id], scratch[local_id + stride]);
    }
    workgroupBarrier();
  }

  let row_scale = scratch[0];
  let quant_scale = select(0.0, 127.0 / row_scale, row_scale > 0.0);
  if (local_id == 0u) {
    x_scales[row] = select(1.0, row_scale / 127.0, row_scale > 0.0);
  }

  for (var word = local_id; word < params.k_words; word = word + 256u) {
    var packed_word = 0u;
    for (var lane = 0u; lane < 4u; lane = lane + 1u) {
      let col = word * 4u + lane;
      var q = 0i;
      if (col < params.k) {
        let scaled = round(clamp(row_values[col] * quant_scale, -127.0, 127.0));
        q = i32(scaled);
      }
      packed_word = packed_word | pack_i8_lane(q, lane);
    }
    x_packed[row * params.k_words + word] = packed_word;
  }
}
`;

const SINGLE_PRENORM_MOD_GROUP_QUANT_SHADER = `
enable f16;

struct Params {
  n: u32,
  k: u32,
  k_words: u32,
  group_size: u32,
  groups_per_row: u32,
};

@group(0) @binding(0) var<storage, read> x_f32: array<f32>;
@group(0) @binding(1) var<storage, read> shift: array<f32>;
@group(0) @binding(2) var<storage, read> scale: array<f32>;
@group(0) @binding(3) var<storage, read_write> x_packed: array<u32>;
@group(0) @binding(4) var<storage, read_write> x_scales: array<f32>;
@group(0) @binding(5) var<uniform> params: Params;

var<workgroup> scratch: array<f32, 256>;
var<workgroup> row_values: array<f32, 3072>;

fn pack_i8_lane(value: i32, lane: u32) -> u32 {
  return (u32(value) & 0xffu) << (lane * 8u);
}

@compute @workgroup_size(256, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let row = wid.x;
  let local_id = lid.x;
  if (row >= params.n || params.k > 3072u) {
    return;
  }

  var local_sum = 0.0;
  for (var col = local_id; col < params.k; col = col + 256u) {
    local_sum = local_sum + x_f32[row * params.k + col];
  }
  scratch[local_id] = local_sum;
  workgroupBarrier();
  for (var stride = 128u; stride > 0u; stride = stride / 2u) {
    if (local_id < stride) {
      scratch[local_id] = scratch[local_id] + scratch[local_id + stride];
    }
    workgroupBarrier();
  }
  let mean = scratch[0] / f32(params.k);

  var local_var = 0.0;
  for (var col = local_id; col < params.k; col = col + 256u) {
    let centered = x_f32[row * params.k + col] - mean;
    local_var = local_var + centered * centered;
  }
  scratch[local_id] = local_var;
  workgroupBarrier();
  for (var stride = 128u; stride > 0u; stride = stride / 2u) {
    if (local_id < stride) {
      scratch[local_id] = scratch[local_id] + scratch[local_id + stride];
    }
    workgroupBarrier();
  }
  let inv_std = inverseSqrt(scratch[0] / f32(params.k) + 0.000001);

  for (var col = local_id; col < params.k; col = col + 256u) {
    let normed = f32(f16((x_f32[row * params.k + col] - mean) * inv_std));
    row_values[col] = f32(f16(clamp(normed * (1.0 + f32(f16(scale[col]))) + f32(f16(shift[col])), -65504.0, 65504.0)));
  }
  workgroupBarrier();

  if (local_id < params.groups_per_row) {
    let group_start = local_id * params.group_size;
    var group_absmax = 0.0;
    for (var offset = 0u; offset < params.group_size; offset = offset + 1u) {
      let col = group_start + offset;
      if (col < params.k) {
        group_absmax = max(group_absmax, abs(row_values[col]));
      }
    }
    x_scales[row * params.groups_per_row + local_id] = select(1.0, group_absmax / 127.0, group_absmax > 0.0);
  }
  workgroupBarrier();

  for (var word = local_id; word < params.k_words; word = word + 256u) {
    let group = (word * 4u) / params.group_size;
    let dequant_scale = x_scales[row * params.groups_per_row + group];
    let quant_scale = select(0.0, 1.0 / dequant_scale, dequant_scale > 0.0);
    var packed_word = 0u;
    for (var lane = 0u; lane < 4u; lane = lane + 1u) {
      let col = word * 4u + lane;
      var q = 0i;
      if (col < params.k) {
        let scaled = round(clamp(row_values[col] * quant_scale, -127.0, 127.0));
        q = i32(scaled);
      }
      packed_word = packed_word | pack_i8_lane(q, lane);
    }
    x_packed[row * params.k_words + word] = packed_word;
  }
}
`;

const SINGLE_PRENORM_MOD_F16_SHADER = `
enable f16;

struct Params {
  n: u32,
  k: u32,
  _pad0: u32,
  _pad1: u32,
};

@group(0) @binding(0) var<storage, read> x_f32: array<f32>;
@group(0) @binding(1) var<storage, read> shift: array<f32>;
@group(0) @binding(2) var<storage, read> scale: array<f32>;
@group(0) @binding(3) var<storage, read_write> y_f16: array<f16>;
@group(0) @binding(4) var<uniform> params: Params;

var<workgroup> scratch: array<f32, 256>;

@compute @workgroup_size(256, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let row = wid.x;
  let local_id = lid.x;
  if (row >= params.n) {
    return;
  }

  var local_sum = 0.0;
  for (var col = local_id; col < params.k; col = col + 256u) {
    local_sum = local_sum + x_f32[row * params.k + col];
  }
  scratch[local_id] = local_sum;
  workgroupBarrier();
  for (var stride = 128u; stride > 0u; stride = stride / 2u) {
    if (local_id < stride) {
      scratch[local_id] = scratch[local_id] + scratch[local_id + stride];
    }
    workgroupBarrier();
  }
  let mean = scratch[0] / f32(params.k);

  var local_var = 0.0;
  for (var col = local_id; col < params.k; col = col + 256u) {
    let centered = x_f32[row * params.k + col] - mean;
    local_var = local_var + centered * centered;
  }
  scratch[local_id] = local_var;
  workgroupBarrier();
  for (var stride = 128u; stride > 0u; stride = stride / 2u) {
    if (local_id < stride) {
      scratch[local_id] = scratch[local_id] + scratch[local_id + stride];
    }
    workgroupBarrier();
  }
  let inv_std = inverseSqrt(scratch[0] / f32(params.k) + 0.000001);

  for (var col = local_id; col < params.k; col = col + 256u) {
    let normed = (x_f32[row * params.k + col] - mean) * inv_std;
    let value = normed * (1.0 + scale[col]) + shift[col];
    y_f16[row * params.k + col] = f16(clamp(value, -65504.0, 65504.0));
  }
}
`;

const SINGLE_RESIDUAL_GATE_SHADER = `
enable f16;

struct Params {
  n: u32,
  k: u32,
  _pad0: u32,
  _pad1: u32,
};

@group(0) @binding(0) var<storage, read> x_f32: array<f32>;
@group(0) @binding(1) var<storage, read> delta_f32: array<f32>;
@group(0) @binding(2) var<storage, read> gate: array<f32>;
@group(0) @binding(3) var<storage, read_write> y_f32: array<f32>;
@group(0) @binding(4) var<uniform> params: Params;

@compute @workgroup_size(256, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let col = wid.x * 256u + lid.x;
  let row = wid.y;
  if (row >= params.n || col >= params.k) {
    return;
  }
  let index = row * params.k + col;
  let gated = f32(f16(clamp(gate[col] * delta_f32[index], -65504.0, 65504.0)));
  y_f32[index] = f32(f16(clamp(x_f32[index] + gated, -65504.0, 65504.0)));
}
`;

const F32_TO_F16_SHADER = `
enable f16;

struct Params {
  count: u32,
  apply_silu: u32,
  _pad0: u32,
  _pad1: u32,
};

@group(0) @binding(0) var<storage, read> x_f32: array<f32>;
@group(0) @binding(1) var<storage, read_write> y_f16: array<f16>;
@group(0) @binding(2) var<uniform> params: Params;

fn silu(value: f32) -> f32 {
  return value / (1.0 + exp(-value));
}

@compute @workgroup_size(256, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let index = wid.x * 256u + lid.x;
  if (index >= params.count) {
    return;
  }
  var value = x_f32[index];
  if (params.apply_silu != 0u) {
    value = silu(value);
  }
  y_f16[index] = f16(clamp(value, -65504.0, 65504.0));
}
`;

const LATENT_UPDATE_F32_SHADER = `
enable f16;

@group(0) @binding(0) var<storage, read_write> latent: array<f32>;
@group(0) @binding(1) var<storage, read> pred: array<f32>;
@group(0) @binding(2) var<storage, read> params: array<f32>;

@compute @workgroup_size(256, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let index = wid.x * 256u + lid.x;
  let count = u32(params[0]);
  if (index >= count) {
    return;
  }
  let pred_value = f32(f16(clamp(pred[index], -65504.0, 65504.0)));
  latent[index] = clamp(latent[index] + params[1] * pred_value, -65504.0, 65504.0);
}
`;

const LATENT_UPDATE_AB2_F32_SHADER = `
enable f16;

@group(0) @binding(0) var<storage, read_write> latent: array<f32>;
@group(0) @binding(1) var<storage, read> pred: array<f32>;
@group(0) @binding(2) var<storage, read> previous_pred: array<f32>;
@group(0) @binding(3) var<storage, read> params: array<f32>;

@compute @workgroup_size(256, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let index = wid.x * 256u + lid.x;
  let count = u32(params[0]);
  if (index >= count) {
    return;
  }
  let current = f32(f16(clamp(pred[index], -65504.0, 65504.0)));
  let previous = f32(f16(clamp(previous_pred[index], -65504.0, 65504.0)));
  let extrapolated = f32(f16(clamp(current + params[3] * (current - previous), -65504.0, 65504.0)));
  latent[index] = clamp(latent[index] + params[1] * current + params[2] * extrapolated, -65504.0, 65504.0);
}
`;

const SINGLE_TAIL_DELTA_CACHE_SHADER = `
struct Params {
  count: u32,
  _pad0: u32,
  _pad1: u32,
  _pad2: u32,
};

@group(0) @binding(0) var<storage, read> base_state: array<f32>;
@group(0) @binding(1) var<storage, read> final_state: array<f32>;
@group(0) @binding(2) var<storage, read_write> delta_state: array<f32>;
@group(0) @binding(3) var<uniform> params: Params;

@compute @workgroup_size(256, 1, 1)
fn main(@builtin(local_invocation_id) lid: vec3<u32>, @builtin(workgroup_id) wid: vec3<u32>) {
  let index = wid.x * 256u + lid.x;
  if (index >= params.count) {
    return;
  }
  delta_state[index] = final_state[index] - base_state[index];
}
`;

const SINGLE_TAIL_DELTA_APPLY_SHADER = `
struct Params {
  count: u32,
  _pad0: u32,
  _pad1: u32,
  _pad2: u32,
};

@group(0) @binding(0) var<storage, read_write> state: array<f32>;
@group(0) @binding(1) var<storage, read> delta_state: array<f32>;
@group(0) @binding(2) var<uniform> params: Params;

@compute @workgroup_size(256, 1, 1)
fn main(@builtin(local_invocation_id) lid: vec3<u32>, @builtin(workgroup_id) wid: vec3<u32>) {
  let index = wid.x * 256u + lid.x;
  if (index >= params.count) {
    return;
  }
  state[index] = state[index] + delta_state[index];
}
`;

function makeI8ScaledDotShader32xWide(tileCols, wChunkCols = 32, outputF16 = false, rowBlock = 32) {
  if (tileCols % wChunkCols !== 0 || wChunkCols % 16 !== 0) {
    throw new Error(`invalid i8 dot tiling: tileCols=${tileCols}, wChunkCols=${wChunkCols}`);
  }
  if (rowBlock !== 32 && rowBlock !== 64) {
    throw new Error(`invalid i8 dot row block: ${rowBlock}`);
  }
  const rowsPerHalf = rowBlock / 2;
  const invocationCount = 16 * rowsPerHalf;
  const colsPerThread = tileCols / 16;
  const colsPerChunk = wChunkCols / 16;
  const xItems = rowBlock * 64;
  const wItems = wChunkCols * 64;
  const colDecls = [];
  const accDecls = [];
  const stores = [];
  const outputType = outputF16 ? "f16" : "f32";
  for (let c = 0; c < colsPerThread; ++c) {
    const colOffset = c * 16;
    colDecls.push(`  let col${c} = wid.x * ${tileCols}u + lid.x + ${colOffset}u;`);
    accDecls.push(`  var acc0${c} = 0i;`);
    accDecls.push(`  var acc1${c} = 0i;`);
    const value0 = `f32(acc0${c}) * x_scales[params.row_offset + row0] * w_scales[col${c}]`;
    const value1 = `f32(acc1${c}) * x_scales[params.row_offset + row1] * w_scales[col${c}]`;
    stores.push(`  if (row0 < params.n && col${c} < params.m) { y[row0 * params.m + col${c}] = ${outputF16 ? `f16(clamp(${value0}, -65504.0, 65504.0))` : value0}; }`);
    stores.push(`  if (row1 < params.n && col${c} < params.m) { y[row1 * params.m + col${c}] = ${outputF16 ? `f16(clamp(${value1}, -65504.0, 65504.0))` : value1}; }`);
  }
  const wChunkBlocks = [];
  for (let chunk = 0; chunk < tileCols / wChunkCols; ++chunk) {
    const chunkColOffset = chunk * wChunkCols;
    const wLoads = [];
    const accUpdates = [];
    for (let c = 0; c < colsPerChunk; ++c) {
      const accIndex = chunk * colsPerChunk + c;
      const localColOffset = c * 16;
      wLoads.push(`          let w${accIndex} = w_tile[tile_kw * ${wChunkCols}u + lid.x + ${localColOffset}u];`);
      accUpdates.push(`          acc0${accIndex} = acc0${accIndex} + dot4I8Packed(x0, w${accIndex});`);
      accUpdates.push(`          acc1${accIndex} = acc1${accIndex} + dot4I8Packed(x1, w${accIndex});`);
    }
    wChunkBlocks.push(`
    for (var offset = 0u; offset < ${wItems}u; offset = offset + ${invocationCount}u) {
      let tile_index = local_linear + offset;
      let tile_kw = tile_index / ${wChunkCols}u;
      let tile_col = tile_index - tile_kw * ${wChunkCols}u;
      let src_kw = base_kw + tile_kw;
      let src_col = wid.x * ${tileCols}u + ${chunkColOffset}u + tile_col;
      if (src_col < params.m && src_kw < params.k_words) {
        w_tile[tile_index] = w_packed[src_kw * params.m + src_col];
      } else {
        w_tile[tile_index] = 0u;
      }
    }
    workgroupBarrier();

    if (row0 < params.n || row1 < params.n) {
      for (var tile_kw = 0u; tile_kw < 64u; tile_kw = tile_kw + 1u) {
        let x0 = x_tile[lid.y * 64u + tile_kw];
        let x1 = x_tile[(lid.y + ${rowsPerHalf}u) * 64u + tile_kw];
${wLoads.join("\n")}
${accUpdates.join("\n")}
      }
    }
    workgroupBarrier();`);
  }
  return `
requires packed_4x8_integer_dot_product;
${outputF16 ? "enable f16;" : ""}

struct Params {
  n: u32,
  k: u32,
  m: u32,
  k_words: u32,
  row_offset: u32,
};

@group(0) @binding(0) var<storage, read> x_packed: array<u32>;
@group(0) @binding(1) var<storage, read> w_packed: array<u32>;
@group(0) @binding(2) var<storage, read> x_scales: array<f32>;
@group(0) @binding(3) var<storage, read> w_scales: array<f32>;
@group(0) @binding(4) var<storage, read_write> y: array<${outputType}>;
@group(0) @binding(5) var<uniform> params: Params;

var<workgroup> x_tile: array<u32, ${xItems}>;
var<workgroup> w_tile: array<u32, ${wItems}>;

@compute @workgroup_size(16, ${rowsPerHalf}, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let row0 = wid.y * ${rowBlock}u + lid.y;
  let row1 = row0 + ${rowsPerHalf}u;
${colDecls.join("\n")}
  let local_linear = lid.y * 16u + lid.x;
${accDecls.join("\n")}

  for (var base_kw = 0u; base_kw < params.k_words; base_kw = base_kw + 64u) {
    for (var offset = 0u; offset < ${xItems}u; offset = offset + ${invocationCount}u) {
      let tile_index = local_linear + offset;
      let tile_row = tile_index / 64u;
      let tile_kw = tile_index - tile_row * 64u;
      let src_row = wid.y * ${rowBlock}u + tile_row;
      let src_kw = base_kw + tile_kw;
      if (src_row < params.n && src_kw < params.k_words) {
        x_tile[tile_index] = x_packed[(params.row_offset + src_row) * params.k_words + src_kw];
      } else {
        x_tile[tile_index] = 0u;
      }
    }
    workgroupBarrier();
${wChunkBlocks.join("\n")}
  }

${stores.join("\n")}
}
`;
}

function makeI8ScaledDotResidualShader32xWide(tileCols, wChunkCols = 32, rowBlock = 32) {
  if (tileCols % wChunkCols !== 0 || wChunkCols % 16 !== 0) {
    throw new Error(`invalid residual i8 dot tiling: tileCols=${tileCols}, wChunkCols=${wChunkCols}`);
  }
  if (rowBlock !== 32 && rowBlock !== 64) {
    throw new Error(`invalid residual i8 dot row block: ${rowBlock}`);
  }
  const rowsPerHalf = rowBlock / 2;
  const invocationCount = 16 * rowsPerHalf;
  const colsPerThread = tileCols / 16;
  const colsPerChunk = wChunkCols / 16;
  const xItems = rowBlock * 64;
  const wItems = wChunkCols * 64;
  const colDecls = [];
  const accDecls = [];
  const stores = [];
  for (let c = 0; c < colsPerThread; ++c) {
    const colOffset = c * 16;
    colDecls.push(`  let col${c} = wid.x * ${tileCols}u + lid.x + ${colOffset}u;`);
    accDecls.push(`  var acc0${c} = 0i;`);
    accDecls.push(`  var acc1${c} = 0i;`);
    stores.push(`  if (row0 < params.n && col${c} < params.m) {
    let dot = f32(acc0${c}) * x_scales[params.row_offset + row0] * w_scales[col${c}];
    y[row0 * params.m + col${c}] = f32(f16(clamp(residual_x[row0 * params.m + col${c}] + mod_gate[col${c}] * dot, -65504.0, 65504.0)));
  }`);
    stores.push(`  if (row1 < params.n && col${c} < params.m) {
    let dot = f32(acc1${c}) * x_scales[params.row_offset + row1] * w_scales[col${c}];
    y[row1 * params.m + col${c}] = f32(f16(clamp(residual_x[row1 * params.m + col${c}] + mod_gate[col${c}] * dot, -65504.0, 65504.0)));
  }`);
  }
  const wChunkBlocks = [];
  for (let chunk = 0; chunk < tileCols / wChunkCols; ++chunk) {
    const chunkColOffset = chunk * wChunkCols;
    const wLoads = [];
    const accUpdates = [];
    for (let c = 0; c < colsPerChunk; ++c) {
      const accIndex = chunk * colsPerChunk + c;
      const localColOffset = c * 16;
      wLoads.push(`          let w${accIndex} = w_tile[tile_kw * ${wChunkCols}u + lid.x + ${localColOffset}u];`);
      accUpdates.push(`          acc0${accIndex} = acc0${accIndex} + dot4I8Packed(x0, w${accIndex});`);
      accUpdates.push(`          acc1${accIndex} = acc1${accIndex} + dot4I8Packed(x1, w${accIndex});`);
    }
    wChunkBlocks.push(`
    for (var offset = 0u; offset < ${wItems}u; offset = offset + ${invocationCount}u) {
      let tile_index = local_linear + offset;
      let tile_kw = tile_index / ${wChunkCols}u;
      let tile_col = tile_index - tile_kw * ${wChunkCols}u;
      let src_kw = base_kw + tile_kw;
      let src_col = wid.x * ${tileCols}u + ${chunkColOffset}u + tile_col;
      if (src_col < params.m && src_kw < params.k_words) {
        w_tile[tile_index] = w_packed[src_kw * params.m + src_col];
      } else {
        w_tile[tile_index] = 0u;
      }
    }
    workgroupBarrier();

    if (row0 < params.n || row1 < params.n) {
      for (var tile_kw = 0u; tile_kw < 64u; tile_kw = tile_kw + 1u) {
        let x0 = x_tile[lid.y * 64u + tile_kw];
        let x1 = x_tile[(lid.y + ${rowsPerHalf}u) * 64u + tile_kw];
${wLoads.join("\n")}
${accUpdates.join("\n")}
      }
    }
    workgroupBarrier();`);
  }
  return `
requires packed_4x8_integer_dot_product;
enable f16;

struct Params {
  n: u32,
  k: u32,
  m: u32,
  k_words: u32,
  row_offset: u32,
};

@group(0) @binding(0) var<storage, read> x_packed: array<u32>;
@group(0) @binding(1) var<storage, read> w_packed: array<u32>;
@group(0) @binding(2) var<storage, read> x_scales: array<f32>;
@group(0) @binding(3) var<storage, read> w_scales: array<f32>;
@group(0) @binding(4) var<storage, read_write> y: array<f32>;
@group(0) @binding(5) var<uniform> params: Params;
@group(0) @binding(6) var<storage, read> residual_x: array<f32>;
@group(0) @binding(7) var<storage, read> mod_gate: array<f32>;

var<workgroup> x_tile: array<u32, ${xItems}>;
var<workgroup> w_tile: array<u32, ${wItems}>;

@compute @workgroup_size(16, ${rowsPerHalf}, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let row0 = wid.y * ${rowBlock}u + lid.y;
  let row1 = row0 + ${rowsPerHalf}u;
${colDecls.join("\n")}
  let local_linear = lid.y * 16u + lid.x;
${accDecls.join("\n")}

  for (var base_kw = 0u; base_kw < params.k_words; base_kw = base_kw + 64u) {
    for (var offset = 0u; offset < ${xItems}u; offset = offset + ${invocationCount}u) {
      let tile_index = local_linear + offset;
      let tile_row = tile_index / 64u;
      let tile_kw = tile_index - tile_row * 64u;
      let src_row = wid.y * 32u + tile_row;
      let src_kw = base_kw + tile_kw;
      if (src_row < params.n && src_kw < params.k_words) {
        x_tile[tile_index] = x_packed[(params.row_offset + src_row) * params.k_words + src_kw];
      } else {
        x_tile[tile_index] = 0u;
      }
    }
    workgroupBarrier();
${wChunkBlocks.join("\n")}
  }

${stores.join("\n")}
}
`;
}

function makeI8ScaledDotShader16xWide(tileCols) {
  const colsPerThread = tileCols / 16;
  const xItems = 16 * 64;
  const wItems = tileCols * 64;
  const colDecls = [];
  const accDecls = [];
  const wLoads = [];
  const accUpdates = [];
  const stores = [];
  for (let c = 0; c < colsPerThread; ++c) {
    const colOffset = c * 16;
    colDecls.push(`  let col${c} = wid.x * ${tileCols}u + lid.x + ${colOffset}u;`);
    accDecls.push(`  var acc${c} = 0i;`);
    wLoads.push(`        let w${c} = w_tile[tile_kw * ${tileCols}u + lid.x + ${colOffset}u];`);
    accUpdates.push(`        acc${c} = acc${c} + dot4I8Packed(x, w${c});`);
    stores.push(`  if (row < params.n && col${c} < params.m) { y[row * params.m + col${c}] = f32(acc${c}) * x_scales[params.row_offset + row] * w_scales[col${c}]; }`);
  }
  return `
requires packed_4x8_integer_dot_product;

struct Params {
  n: u32,
  k: u32,
  m: u32,
  k_words: u32,
  row_offset: u32,
};

@group(0) @binding(0) var<storage, read> x_packed: array<u32>;
@group(0) @binding(1) var<storage, read> w_packed: array<u32>;
@group(0) @binding(2) var<storage, read> x_scales: array<f32>;
@group(0) @binding(3) var<storage, read> w_scales: array<f32>;
@group(0) @binding(4) var<storage, read_write> y: array<f32>;
@group(0) @binding(5) var<uniform> params: Params;

var<workgroup> x_tile: array<u32, ${xItems}>;
var<workgroup> w_tile: array<u32, ${wItems}>;

@compute @workgroup_size(16, 16, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let row = wid.y * 16u + lid.y;
${colDecls.join("\n")}
  let local_linear = lid.y * 16u + lid.x;
${accDecls.join("\n")}

  for (var base_kw = 0u; base_kw < params.k_words; base_kw = base_kw + 64u) {
    for (var offset = 0u; offset < ${xItems}u; offset = offset + 256u) {
      let tile_index = local_linear + offset;
      let tile_row = tile_index / 64u;
      let tile_kw = tile_index - tile_row * 64u;
      let src_row = wid.y * 16u + tile_row;
      let src_kw = base_kw + tile_kw;
      if (src_row < params.n && src_kw < params.k_words) {
        x_tile[tile_index] = x_packed[(params.row_offset + src_row) * params.k_words + src_kw];
      } else {
        x_tile[tile_index] = 0u;
      }
    }

    for (var offset = 0u; offset < ${wItems}u; offset = offset + 256u) {
      let tile_index = local_linear + offset;
      let tile_kw = tile_index / ${tileCols}u;
      let tile_col = tile_index - tile_kw * ${tileCols}u;
      let src_kw = base_kw + tile_kw;
      let src_col = wid.x * ${tileCols}u + tile_col;
      if (src_col < params.m && src_kw < params.k_words) {
        w_tile[tile_index] = w_packed[src_kw * params.m + src_col];
      } else {
        w_tile[tile_index] = 0u;
      }
    }
    workgroupBarrier();

    if (row < params.n) {
      for (var tile_kw = 0u; tile_kw < 64u; tile_kw = tile_kw + 1u) {
        let x = x_tile[lid.y * 64u + tile_kw];
${wLoads.join("\n")}
${accUpdates.join("\n")}
      }
    }
    workgroupBarrier();
  }

${stores.join("\n")}
}
`;
}

function q4CpuOutput(row, col, k, m, groupSize, packedWords, xF16, q4, scales, zeroPoints) {
  let acc = 0;
  for (let kIndex = 0; kIndex < k; ++kIndex) {
    const group = Math.floor(kIndex / groupSize);
    const inner = kIndex - group * groupSize;
    const word = Math.floor(inner / 8);
    const shift = (inner & 7) * 4;
    const packed = q4[(group * packedWords + word) * m + col];
    const nibble = (packed >>> shift) & 15;
    const zp = zeroPoints[group * m + col] & 15;
    const scale = float16BitsToFloat32(scales[group * m + col]);
    acc += float16BitsToFloat32(xF16[row * k + kIndex]) * (nibble - zp) * scale;
  }
  return acc;
}

function signedI8Lane(packed, lane) {
  const value = (packed >>> (lane * 8)) & 0xff;
  return value >= 128 ? value - 256 : value;
}

function quantizedInputRow(row, k, xF32) {
  let absmax = 0;
  for (let kIndex = 0; kIndex < k; ++kIndex) {
    absmax = Math.max(absmax, Math.abs(xF32[row * k + kIndex]));
  }
  const scale = absmax > 0 ? absmax / 127 : 1;
  const q = new Int8Array(k);
  for (let kIndex = 0; kIndex < k; ++kIndex) {
    const scaled = absmax > 0 ? xF32[row * k + kIndex] * 127 / absmax : 0;
    q[kIndex] = Math.max(-127, Math.min(127, roundToNearest(scaled)));
  }
  return {q, scale};
}

function i8CpuOutput(row, col, k, m, kWords, xF32, wPacked, wScales) {
  const qx = quantizedInputRow(row, k, xF32);
  let acc = 0;
  for (let kIndex = 0; kIndex < k; ++kIndex) {
    const word = Math.floor(kIndex / 4);
    const lane = kIndex & 3;
    const w = signedI8Lane(wPacked[word * m + col], lane);
    acc += qx.q[kIndex] * w;
  }
  return acc * qx.scale * wScales[col];
}

async function loadI8Bundle(baseUrl) {
  const manifest = await (await fetch(`${baseUrl}manifest.json`)).json();
  if (!manifest.i8_dp4a) {
    throw new Error(`${baseUrl} does not contain an i8_dp4a bundle`);
  }
  const [weightBuf, scaleBuf] = await Promise.all([
    fetchArrayBuffer(`${baseUrl}${manifest.i8_dp4a.packed_u32}`),
    fetchArrayBuffer(`${baseUrl}${manifest.i8_dp4a.scales_f32}`),
  ]);
  return {
    manifest,
    weight: new Uint32Array(weightBuf),
    scales: new Float32Array(scaleBuf),
  };
}

async function loadSingleBlockBundle(baseUrl) {
  const manifest = await (await fetch(`${baseUrl}manifest.json`)).json();
  const [queryBuf, keyBuf] = await Promise.all([
    fetchArrayBuffer(`${baseUrl}${manifest.query_norm_scale_f16}`),
    fetchArrayBuffer(`${baseUrl}${manifest.key_norm_scale_f16}`),
  ]);
  return {
    manifest,
    queryScale: new Uint16Array(queryBuf),
    keyScale: new Uint16Array(keyBuf),
  };
}

const SINGLE_MLP_ACTIVATION_SHADER = `
struct Params {
  n: u32,
  linear1_m: u32,
  linear2_k: u32,
  attn_dim: u32,
  qkv_dim: u32,
  mlp_half_dim: u32,
};

@group(0) @binding(0) var<storage, read> linear1_out: array<f32>;
@group(0) @binding(1) var<storage, read_write> linear2_in: array<f32>;
@group(0) @binding(2) var<uniform> params: Params;

fn sigmoid(value: f32) -> f32 {
  return 1.0 / (1.0 + exp(-value));
}

fn synthetic_attention(row: u32, col: u32) -> f32 {
  let code = (row * 37u + col * 13u + 17u) % 251u;
  return (f32(code) - 125.0) / 64.0;
}

@compute @workgroup_size(256, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let col = wid.x * 256u + lid.x;
  let row = wid.y;
  if (row >= params.n || col >= params.linear2_k) {
    return;
  }

  var value = 0.0;
  if (col < params.attn_dim) {
    value = synthetic_attention(row, col);
  } else {
    let mlp_col = col - params.attn_dim;
    let gate = linear1_out[row * params.linear1_m + params.qkv_dim + mlp_col];
    let up = linear1_out[row * params.linear1_m + params.qkv_dim + params.mlp_half_dim + mlp_col];
    value = gate * sigmoid(gate) * up;
  }
  linear2_in[row * params.linear2_k + col] = value;
}
`;

const SINGLE_ATTENTION_SHADER = `
enable f16;

struct Params {
  n: u32,
  linear1_m: u32,
  heads: u32,
  head_dim: u32,
  qkv_dim: u32,
  attention_dim: u32,
};

@group(0) @binding(0) var<storage, read> linear1_out: array<f32>;
@group(0) @binding(1) var<storage, read> query_scale: array<f16>;
@group(0) @binding(2) var<storage, read> key_scale: array<f16>;
@group(0) @binding(3) var<storage, read_write> attention_out: array<f32>;
@group(0) @binding(4) var<uniform> params: Params;

var<workgroup> q_norm: array<f32, 128>;
var<workgroup> scores: array<f32, 4608>;
var<workgroup> scratch: array<f32, 128>;

fn q_value(row: u32, head: u32, dim: u32) -> f32 {
  return linear1_out[row * params.linear1_m + head * params.head_dim + dim];
}

fn k_value(row: u32, head: u32, dim: u32) -> f32 {
  return linear1_out[row * params.linear1_m + params.attention_dim + head * params.head_dim + dim];
}

fn v_value(row: u32, head: u32, dim: u32) -> f32 {
  return linear1_out[row * params.linear1_m + params.attention_dim * 2u + head * params.head_dim + dim];
}

@compute @workgroup_size(128, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let dim = lid.x;
  let row = wid.x;
  let head = wid.y;
  if (row >= params.n || head >= params.heads || params.n > 4608u) {
    return;
  }

  let q = q_value(row, head, dim);
  scratch[dim] = q * q;
  workgroupBarrier();
  for (var stride = 64u; stride > 0u; stride = stride / 2u) {
    if (dim < stride) {
      scratch[dim] = scratch[dim] + scratch[dim + stride];
    }
    workgroupBarrier();
  }
  let q_inv = inverseSqrt(scratch[0] / f32(params.head_dim) + 0.000001);
  q_norm[dim] = q * q_inv * f32(query_scale[dim]);
  workgroupBarrier();

  for (var key_row = 0u; key_row < params.n; key_row = key_row + 1u) {
    let k = k_value(key_row, head, dim);
    scratch[dim] = k * k;
    workgroupBarrier();
    for (var stride = 64u; stride > 0u; stride = stride / 2u) {
      if (dim < stride) {
        scratch[dim] = scratch[dim] + scratch[dim + stride];
      }
      workgroupBarrier();
    }
    let k_inv = inverseSqrt(scratch[0] / f32(params.head_dim) + 0.000001);
    let k_norm = k * k_inv * f32(key_scale[dim]);
    scratch[dim] = q_norm[dim] * k_norm;
    workgroupBarrier();
    for (var stride = 64u; stride > 0u; stride = stride / 2u) {
      if (dim < stride) {
        scratch[dim] = scratch[dim] + scratch[dim + stride];
      }
      workgroupBarrier();
    }
    if (dim == 0u) {
      scores[key_row] = scratch[0] * 0.08838835;
    }
    workgroupBarrier();
  }

  var local_max = -3.402823e38;
  for (var key_row = dim; key_row < params.n; key_row = key_row + params.head_dim) {
    local_max = max(local_max, scores[key_row]);
  }
  scratch[dim] = local_max;
  workgroupBarrier();
  for (var stride = 64u; stride > 0u; stride = stride / 2u) {
    if (dim < stride) {
      scratch[dim] = max(scratch[dim], scratch[dim + stride]);
    }
    workgroupBarrier();
  }
  let max_score = scratch[0];

  var local_sum = 0.0;
  for (var key_row = dim; key_row < params.n; key_row = key_row + params.head_dim) {
    local_sum = local_sum + exp(scores[key_row] - max_score);
  }
  scratch[dim] = local_sum;
  workgroupBarrier();
  for (var stride = 64u; stride > 0u; stride = stride / 2u) {
    if (dim < stride) {
      scratch[dim] = scratch[dim] + scratch[dim + stride];
    }
    workgroupBarrier();
  }
  let inv_sum = 1.0 / scratch[0];

  var out = 0.0;
  for (var key_row = 0u; key_row < params.n; key_row = key_row + 1u) {
    let weight = f32(f16(exp(scores[key_row] - max_score) * inv_sum));
    out = out + weight * f32(f16(v_value(key_row, head, dim)));
  }
  attention_out[row * params.attention_dim + head * params.head_dim + dim] = f32(f16(clamp(out, -65504.0, 65504.0)));
}
`;

const SINGLE_QK_NORM_SHADER = `
enable f16;

struct Params {
  n: u32,
  linear1_m: u32,
  heads: u32,
  head_dim: u32,
  qkv_dim: u32,
  attention_dim: u32,
};

@group(0) @binding(0) var<storage, read> linear1_out: array<f32>;
@group(0) @binding(1) var<storage, read> query_scale: array<f16>;
@group(0) @binding(2) var<storage, read> key_scale: array<f16>;
@group(0) @binding(3) var<storage, read_write> q_norm_out: array<f32>;
@group(0) @binding(4) var<storage, read_write> k_norm_out: array<f32>;
@group(0) @binding(5) var<uniform> params: Params;

var<workgroup> scratch: array<f32, 128>;

fn q_value(row: u32, head: u32, dim: u32) -> f32 {
  return linear1_out[row * params.linear1_m + head * params.head_dim + dim];
}

fn k_value(row: u32, head: u32, dim: u32) -> f32 {
  return linear1_out[row * params.linear1_m + params.attention_dim + head * params.head_dim + dim];
}

@compute @workgroup_size(128, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let dim = lid.x;
  let row = wid.x;
  let head = wid.y;
  if (row >= params.n || head >= params.heads) {
    return;
  }

  let q = q_value(row, head, dim);
  scratch[dim] = q * q;
  workgroupBarrier();
  for (var stride = 64u; stride > 0u; stride = stride / 2u) {
    if (dim < stride) {
      scratch[dim] = scratch[dim] + scratch[dim + stride];
    }
    workgroupBarrier();
  }
  let q_inv = inverseSqrt(scratch[0] / f32(params.head_dim) + 0.000001);
  q_norm_out[row * params.attention_dim + head * params.head_dim + dim] =
      q * q_inv * f32(query_scale[dim]);
  workgroupBarrier();

  let k = k_value(row, head, dim);
  scratch[dim] = k * k;
  workgroupBarrier();
  for (var stride = 64u; stride > 0u; stride = stride / 2u) {
    if (dim < stride) {
      scratch[dim] = scratch[dim] + scratch[dim + stride];
    }
    workgroupBarrier();
  }
  let k_inv = inverseSqrt(scratch[0] / f32(params.head_dim) + 0.000001);
  k_norm_out[row * params.attention_dim + head * params.head_dim + dim] =
      k * k_inv * f32(key_scale[dim]);
}
`;

const SINGLE_QK_NORM_ROPE_SHADER = `
enable f16;

struct Params {
  n: u32,
  linear1_m: u32,
  heads: u32,
  head_dim: u32,
  qkv_dim: u32,
  attention_dim: u32,
  text_tokens: u32,
  image_width: u32,
};

@group(0) @binding(0) var<storage, read> linear1_out: array<f32>;
@group(0) @binding(1) var<storage, read> query_scale: array<f16>;
@group(0) @binding(2) var<storage, read> key_scale: array<f16>;
@group(0) @binding(3) var<storage, read_write> q_norm_out: array<f32>;
@group(0) @binding(4) var<storage, read_write> k_norm_out: array<f32>;
@group(0) @binding(5) var<uniform> params: Params;
@group(0) @binding(6) var<storage, read> rope_sincos: array<f32>;

var<workgroup> scratch: array<f32, 128>;
var<workgroup> scratch2: array<f32, 128>;
var<workgroup> q_temp: array<f32, 128>;
var<workgroup> k_temp: array<f32, 128>;

fn q_value(row: u32, head: u32, dim: u32) -> f32 {
  return linear1_out[row * params.linear1_m + head * params.head_dim + dim];
}

fn k_value(row: u32, head: u32, dim: u32) -> f32 {
  return linear1_out[row * params.linear1_m + params.attention_dim + head * params.head_dim + dim];
}

fn apply_rope(value: f32, mate: f32, dim: u32, row: u32) -> f32 {
  let pair = dim / 2u;
  let lane = dim & 1u;
  let table_index = (row * 64u + pair) * 2u;
  let c = rope_sincos[table_index];
  let s = rope_sincos[table_index + 1u];
  if (lane == 0u) {
    return c * value - s * mate;
  }
  return s * mate + c * value;
}

@compute @workgroup_size(128, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let dim = lid.x;
  let row = wid.x;
  let head = wid.y;
  if (row >= params.n || head >= params.heads) {
    return;
  }

  let q = q_value(row, head, dim);
  let k = k_value(row, head, dim);
  scratch[dim] = q * q;
  scratch2[dim] = k * k;
  workgroupBarrier();
  for (var stride = 64u; stride > 0u; stride = stride / 2u) {
    if (dim < stride) {
      scratch[dim] = scratch[dim] + scratch[dim + stride];
      scratch2[dim] = scratch2[dim] + scratch2[dim + stride];
    }
    workgroupBarrier();
  }
  let q_inv = inverseSqrt(scratch[0] / f32(params.head_dim) + 0.000001);
  let k_inv = inverseSqrt(scratch2[0] / f32(params.head_dim) + 0.000001);
  q_temp[dim] = f32(f16(f32(f16(q * q_inv)) * f32(query_scale[dim])));
  k_temp[dim] = f32(f16(f32(f16(k * k_inv)) * f32(key_scale[dim])));
  workgroupBarrier();
  q_norm_out[row * params.attention_dim + head * params.head_dim + dim] =
      apply_rope(q_temp[dim], q_temp[dim ^ 1u], dim, row);
  k_norm_out[row * params.attention_dim + head * params.head_dim + dim] =
      apply_rope(k_temp[dim], k_temp[dim ^ 1u], dim, row);
}
`;

const SINGLE_ATTENTION_PRENORM_SHADER = `
enable f16;

struct Params {
  n: u32,
  linear1_m: u32,
  heads: u32,
  head_dim: u32,
  qkv_dim: u32,
  attention_dim: u32,
};

@group(0) @binding(0) var<storage, read> linear1_out: array<f32>;
@group(0) @binding(1) var<storage, read> q_norm: array<f32>;
@group(0) @binding(2) var<storage, read> k_norm: array<f32>;
@group(0) @binding(3) var<storage, read_write> attention_out: array<f32>;
@group(0) @binding(4) var<uniform> params: Params;

var<workgroup> scores: array<f32, 4608>;
var<workgroup> scratch: array<f32, 128>;

fn qn(row: u32, head: u32, dim: u32) -> f32 {
  return q_norm[row * params.attention_dim + head * params.head_dim + dim];
}

fn kn(row: u32, head: u32, dim: u32) -> f32 {
  return k_norm[row * params.attention_dim + head * params.head_dim + dim];
}

fn v_value(row: u32, head: u32, dim: u32) -> f32 {
  return linear1_out[row * params.linear1_m + params.attention_dim * 2u + head * params.head_dim + dim];
}

@compute @workgroup_size(128, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let dim = lid.x;
  let row = wid.x;
  let head = wid.y;
  if (row >= params.n || head >= params.heads || params.n > 4608u) {
    return;
  }

  let q = qn(row, head, dim);
  for (var key_row = 0u; key_row < params.n; key_row = key_row + 1u) {
    scratch[dim] = q * kn(key_row, head, dim);
    workgroupBarrier();
    for (var stride = 64u; stride > 0u; stride = stride / 2u) {
      if (dim < stride) {
        scratch[dim] = scratch[dim] + scratch[dim + stride];
      }
      workgroupBarrier();
    }
    if (dim == 0u) {
      scores[key_row] = scratch[0] * 0.08838835;
    }
    workgroupBarrier();
  }

  var local_max = -3.402823e38;
  for (var key_row = dim; key_row < params.n; key_row = key_row + params.head_dim) {
    local_max = max(local_max, scores[key_row]);
  }
  scratch[dim] = local_max;
  workgroupBarrier();
  for (var stride = 64u; stride > 0u; stride = stride / 2u) {
    if (dim < stride) {
      scratch[dim] = max(scratch[dim], scratch[dim + stride]);
    }
    workgroupBarrier();
  }
  let max_score = scratch[0];

  var local_sum = 0.0;
  for (var key_row = dim; key_row < params.n; key_row = key_row + params.head_dim) {
    local_sum = local_sum + exp(scores[key_row] - max_score);
  }
  scratch[dim] = local_sum;
  workgroupBarrier();
  for (var stride = 64u; stride > 0u; stride = stride / 2u) {
    if (dim < stride) {
      scratch[dim] = scratch[dim] + scratch[dim + stride];
    }
    workgroupBarrier();
  }
  let inv_sum = 1.0 / scratch[0];

  var out = 0.0;
  for (var key_row = 0u; key_row < params.n; key_row = key_row + 1u) {
    let weight = f32(f16(exp(scores[key_row] - max_score) * inv_sum));
    out = out + weight * f32(f16(v_value(key_row, head, dim)));
  }
  attention_out[row * params.attention_dim + head * params.head_dim + dim] = f32(f16(clamp(out, -65504.0, 65504.0)));
}
`;

const SINGLE_ATTENTION_TILED_SHADER = `
enable f16;

struct Params {
  n: u32,
  linear1_m: u32,
  heads: u32,
  head_dim: u32,
  qkv_dim: u32,
  attention_dim: u32,
};

@group(0) @binding(0) var<storage, read> linear1_out: array<f32>;
@group(0) @binding(1) var<storage, read> q_norm: array<f32>;
@group(0) @binding(2) var<storage, read> k_norm: array<f32>;
@group(0) @binding(3) var<storage, read_write> attention_out: array<f32>;
@group(0) @binding(4) var<uniform> params: Params;

var<workgroup> k_tile: array<f32, 1024>;
var<workgroup> v_tile: array<f32, 1024>;
var<workgroup> scores: array<f32, 32>;
var<workgroup> reduce: array<f32, 64>;

fn qn(row: u32, head: u32, dim: u32) -> f32 {
  return q_norm[row * params.attention_dim + head * params.head_dim + dim];
}

fn kn(row: u32, head: u32, dim: u32) -> f32 {
  return k_norm[row * params.attention_dim + head * params.head_dim + dim];
}

fn v_value(row: u32, head: u32, dim: u32) -> f32 {
  return linear1_out[row * params.linear1_m + params.attention_dim * 2u + head * params.head_dim + dim];
}

@compute @workgroup_size(16, 4, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let dim_lane = lid.x;
  let q_lane = lid.y;
  let local_linear = q_lane * 16u + dim_lane;
  let row = wid.x * 4u + q_lane;
  let head = wid.y;
  if (head >= params.heads || params.n > 4608u) {
    return;
  }

  let row_valid = row < params.n;
  let dim0 = dim_lane * 8u;
  var qv: array<f32, 8>;
  var acc: array<f32, 8>;
  for (var i = 0u; i < 8u; i = i + 1u) {
    let dim = dim0 + i;
    if (row_valid) {
      qv[i] = qn(row, head, dim);
    } else {
      qv[i] = 0.0;
    }
    acc[i] = 0.0;
  }
  var m_state = -3.402823e38;
  var l_state = 0.0;

  for (var key_base = 0u; key_base < params.n; key_base = key_base + 8u) {
    for (var tile_index = local_linear; tile_index < 1024u; tile_index = tile_index + 64u) {
      let key_offset = tile_index / 128u;
      let dim = tile_index - key_offset * 128u;
      let key_row = key_base + key_offset;
      if (key_row < params.n) {
        k_tile[tile_index] = kn(key_row, head, dim);
        v_tile[tile_index] = v_value(key_row, head, dim);
      } else {
        k_tile[tile_index] = 0.0;
        v_tile[tile_index] = 0.0;
      }
    }
    workgroupBarrier();

    for (var key_offset = 0u; key_offset < 8u; key_offset = key_offset + 1u) {
      var partial = 0.0;
      for (var i = 0u; i < 8u; i = i + 1u) {
        partial = partial + qv[i] * k_tile[key_offset * 128u + dim0 + i];
      }
      reduce[q_lane * 16u + dim_lane] = partial;
      workgroupBarrier();
      for (var stride = 8u; stride > 0u; stride = stride / 2u) {
        if (dim_lane < stride) {
          reduce[q_lane * 16u + dim_lane] =
              reduce[q_lane * 16u + dim_lane] + reduce[q_lane * 16u + dim_lane + stride];
        }
        workgroupBarrier();
      }
      if (dim_lane == 0u) {
        let key_row = key_base + key_offset;
        scores[q_lane * 8u + key_offset] =
            select(-3.402823e38, reduce[q_lane * 16u] * 0.08838835, row_valid && key_row < params.n);
      }
      workgroupBarrier();
    }

    var local_max = -3.402823e38;
    if (dim_lane < 8u) {
      local_max = scores[q_lane * 8u + dim_lane];
    }
    reduce[q_lane * 16u + dim_lane] = local_max;
    workgroupBarrier();
    for (var stride = 8u; stride > 0u; stride = stride / 2u) {
      if (dim_lane < stride) {
        reduce[q_lane * 16u + dim_lane] =
            max(reduce[q_lane * 16u + dim_lane], reduce[q_lane * 16u + dim_lane + stride]);
      }
      workgroupBarrier();
    }
    let tile_max = reduce[q_lane * 16u];
    let m_new = max(m_state, tile_max);
    let alpha = exp(m_state - m_new);

    var local_sum = 0.0;
    if (dim_lane < 8u) {
      local_sum = exp(scores[q_lane * 8u + dim_lane] - m_new);
    }
    reduce[q_lane * 16u + dim_lane] = local_sum;
    workgroupBarrier();
    for (var stride = 8u; stride > 0u; stride = stride / 2u) {
      if (dim_lane < stride) {
        reduce[q_lane * 16u + dim_lane] =
            reduce[q_lane * 16u + dim_lane] + reduce[q_lane * 16u + dim_lane + stride];
      }
      workgroupBarrier();
    }
    let l_new = l_state * alpha + reduce[q_lane * 16u];

    for (var i = 0u; i < 8u; i = i + 1u) {
      let dim = dim0 + i;
      var weighted_v = 0.0;
      for (var key_offset = 0u; key_offset < 8u; key_offset = key_offset + 1u) {
        let weight = f32(f16(exp(scores[q_lane * 8u + key_offset] - m_new)));
        weighted_v = weighted_v + weight * f32(f16(v_tile[key_offset * 128u + dim]));
      }
      acc[i] = acc[i] * alpha + weighted_v;
    }
    m_state = m_new;
    l_state = l_new;
    workgroupBarrier();
  }

  if (row_valid) {
    let inv_l = 1.0 / l_state;
    for (var i = 0u; i < 8u; i = i + 1u) {
      let dim = dim0 + i;
      attention_out[row * params.attention_dim + head * params.head_dim + dim] = f32(f16(clamp(acc[i] * inv_l, -65504.0, 65504.0)));
    }
  }
}
`;

function makeSingleAttentionTiledShader(tileKeys, queryRows = 4) {
  const keys = Number(tileKeys || 8);
  const rows = Number(queryRows || 4);
  if (![8, 16].includes(keys)) {
    throw new Error(`unsupported single attention tile key count: ${tileKeys}`);
  }
  if (![4, 8, 16].includes(rows)) {
    throw new Error(`unsupported single attention query row count: ${queryRows}`);
  }
  if (keys === 8 && rows === 4) return SINGLE_ATTENTION_TILED_SHADER;
  return `
enable f16;

struct Params {
  n: u32,
  linear1_m: u32,
  heads: u32,
  head_dim: u32,
  qkv_dim: u32,
  attention_dim: u32,
};

@group(0) @binding(0) var<storage, read> linear1_out: array<f32>;
@group(0) @binding(1) var<storage, read> q_norm: array<f32>;
@group(0) @binding(2) var<storage, read> k_norm: array<f32>;
@group(0) @binding(3) var<storage, read_write> attention_out: array<f32>;
@group(0) @binding(4) var<uniform> params: Params;

var<workgroup> k_tile: array<f32, ${keys * 128}>;
var<workgroup> v_tile: array<f32, ${keys * 128}>;
var<workgroup> scores: array<f32, ${rows * keys}>;
var<workgroup> reduce: array<f32, ${rows * 16}>;

fn qn(row: u32, head: u32, dim: u32) -> f32 {
  return q_norm[row * params.attention_dim + head * params.head_dim + dim];
}

fn kn(row: u32, head: u32, dim: u32) -> f32 {
  return k_norm[row * params.attention_dim + head * params.head_dim + dim];
}

fn v_value(row: u32, head: u32, dim: u32) -> f32 {
  return linear1_out[row * params.linear1_m + params.attention_dim * 2u + head * params.head_dim + dim];
}

@compute @workgroup_size(16, ${rows}, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let dim_lane = lid.x;
  let q_lane = lid.y;
  let local_linear = q_lane * 16u + dim_lane;
  let row = wid.x * ${rows}u + q_lane;
  let head = wid.y;
  if (head >= params.heads || params.n > 4608u) {
    return;
  }

  let row_valid = row < params.n;
  let dim0 = dim_lane * 8u;
  var qv: array<f32, 8>;
  var acc: array<f32, 8>;
  for (var i = 0u; i < 8u; i = i + 1u) {
    let dim = dim0 + i;
    if (row_valid) {
      qv[i] = qn(row, head, dim);
    } else {
      qv[i] = 0.0;
    }
    acc[i] = 0.0;
  }
  var m_state = -3.402823e38;
  var l_state = 0.0;

  for (var key_base = 0u; key_base < params.n; key_base = key_base + ${keys}u) {
    for (var tile_index = local_linear; tile_index < ${keys * 128}u; tile_index = tile_index + ${rows * 16}u) {
      let key_offset = tile_index / 128u;
      let dim = tile_index - key_offset * 128u;
      let key_row = key_base + key_offset;
      if (key_row < params.n) {
        k_tile[tile_index] = kn(key_row, head, dim);
        v_tile[tile_index] = v_value(key_row, head, dim);
      } else {
        k_tile[tile_index] = 0.0;
        v_tile[tile_index] = 0.0;
      }
    }
    workgroupBarrier();

    for (var key_offset = 0u; key_offset < ${keys}u; key_offset = key_offset + 1u) {
      var partial = 0.0;
      for (var i = 0u; i < 8u; i = i + 1u) {
        partial = partial + qv[i] * k_tile[key_offset * 128u + dim0 + i];
      }
      reduce[q_lane * 16u + dim_lane] = partial;
      workgroupBarrier();
      for (var stride = 8u; stride > 0u; stride = stride / 2u) {
        if (dim_lane < stride) {
          reduce[q_lane * 16u + dim_lane] =
              reduce[q_lane * 16u + dim_lane] + reduce[q_lane * 16u + dim_lane + stride];
        }
        workgroupBarrier();
      }
      if (dim_lane == 0u) {
        let key_row = key_base + key_offset;
        scores[q_lane * ${keys}u + key_offset] =
            select(-3.402823e38, reduce[q_lane * 16u] * 0.08838835, row_valid && key_row < params.n);
      }
      workgroupBarrier();
    }

    var local_max = -3.402823e38;
    if (dim_lane < ${keys}u) {
      local_max = scores[q_lane * ${keys}u + dim_lane];
    }
    reduce[q_lane * 16u + dim_lane] = local_max;
    workgroupBarrier();
    for (var stride = 8u; stride > 0u; stride = stride / 2u) {
      if (dim_lane < stride) {
        reduce[q_lane * 16u + dim_lane] =
            max(reduce[q_lane * 16u + dim_lane], reduce[q_lane * 16u + dim_lane + stride]);
      }
      workgroupBarrier();
    }
    let tile_max = reduce[q_lane * 16u];
    let m_new = max(m_state, tile_max);
    let alpha = exp(m_state - m_new);

    var local_sum = 0.0;
    if (dim_lane < ${keys}u) {
      local_sum = exp(scores[q_lane * ${keys}u + dim_lane] - m_new);
    }
    reduce[q_lane * 16u + dim_lane] = local_sum;
    workgroupBarrier();
    for (var stride = 8u; stride > 0u; stride = stride / 2u) {
      if (dim_lane < stride) {
        reduce[q_lane * 16u + dim_lane] =
            reduce[q_lane * 16u + dim_lane] + reduce[q_lane * 16u + dim_lane + stride];
      }
      workgroupBarrier();
    }
    let l_new = l_state * alpha + reduce[q_lane * 16u];

    for (var i = 0u; i < 8u; i = i + 1u) {
      let dim = dim0 + i;
      var weighted_v = 0.0;
      for (var key_offset = 0u; key_offset < ${keys}u; key_offset = key_offset + 1u) {
        let weight = f32(f16(exp(scores[q_lane * ${keys}u + key_offset] - m_new)));
        weighted_v = weighted_v + weight * f32(f16(v_tile[key_offset * 128u + dim]));
      }
      acc[i] = acc[i] * alpha + weighted_v;
    }
    m_state = m_new;
    l_state = l_new;
    workgroupBarrier();
  }

  if (row_valid) {
    let inv_l = 1.0 / l_state;
    for (var i = 0u; i < 8u; i = i + 1u) {
      let dim = dim0 + i;
      attention_out[row * params.attention_dim + head * params.head_dim + dim] = f32(f16(clamp(acc[i] * inv_l, -65504.0, 65504.0)));
    }
  }
}
`;
}

function makeSingleAttentionSubgroupShader(tileKeys) {
  const keys = Number(tileKeys || 8);
  if (![8, 16].includes(keys)) {
    throw new Error(`unsupported subgroup single attention tile key count: ${tileKeys}`);
  }
  return `
enable f16;
enable subgroups;

struct Params {
  n: u32,
  linear1_m: u32,
  heads: u32,
  head_dim: u32,
  qkv_dim: u32,
  attention_dim: u32,
};

@group(0) @binding(0) var<storage, read> linear1_out: array<f32>;
@group(0) @binding(1) var<storage, read> q_norm: array<f32>;
@group(0) @binding(2) var<storage, read> k_norm: array<f32>;
@group(0) @binding(3) var<storage, read_write> attention_out: array<f32>;
@group(0) @binding(4) var<uniform> params: Params;

var<workgroup> k_tile: array<f32, ${keys * 128}>;
var<workgroup> v_tile: array<f32, ${keys * 128}>;
var<workgroup> scores: array<f32, ${keys}>;

fn qn(row: u32, head: u32, dim: u32) -> f32 {
  return q_norm[row * params.attention_dim + head * params.head_dim + dim];
}

fn kn(row: u32, head: u32, dim: u32) -> f32 {
  return k_norm[row * params.attention_dim + head * params.head_dim + dim];
}

fn v_value(row: u32, head: u32, dim: u32) -> f32 {
  return linear1_out[row * params.linear1_m + params.attention_dim * 2u + head * params.head_dim + dim];
}

@compute @workgroup_size(32, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let lane = lid.x;
  let row = wid.x;
  let head = wid.y;
  if (head >= params.heads || params.n > 4608u) {
    return;
  }

  let row_valid = row < params.n;
  let dim0 = lane * 4u;
  var qv: array<f32, 4>;
  var acc: array<f32, 4>;
  for (var i = 0u; i < 4u; i = i + 1u) {
    let dim = dim0 + i;
    qv[i] = select(0.0, qn(row, head, dim), row_valid);
    acc[i] = 0.0;
  }
  var m_state = -3.402823e38;
  var l_state = 0.0;

  for (var key_base = 0u; key_base < params.n; key_base = key_base + ${keys}u) {
    for (var tile_index = lane; tile_index < ${keys * 128}u; tile_index = tile_index + 32u) {
      let key_offset = tile_index / 128u;
      let dim = tile_index - key_offset * 128u;
      let key_row = key_base + key_offset;
      if (key_row < params.n) {
        k_tile[tile_index] = kn(key_row, head, dim);
        v_tile[tile_index] = v_value(key_row, head, dim);
      } else {
        k_tile[tile_index] = 0.0;
        v_tile[tile_index] = 0.0;
      }
    }
    workgroupBarrier();

    for (var key_offset = 0u; key_offset < ${keys}u; key_offset = key_offset + 1u) {
      var partial = 0.0;
      for (var i = 0u; i < 4u; i = i + 1u) {
        partial = partial + qv[i] * k_tile[key_offset * 128u + dim0 + i];
      }
      let dot = subgroupAdd(partial);
      if (lane == 0u) {
        let key_row = key_base + key_offset;
        scores[key_offset] = select(-3.402823e38, dot * 0.08838835, row_valid && key_row < params.n);
      }
    }
    workgroupBarrier();

    var local_max = -3.402823e38;
    if (lane < ${keys}u) {
      local_max = scores[lane];
    }
    let tile_max = subgroupMax(local_max);
    let m_new = max(m_state, tile_max);
    let alpha = exp(m_state - m_new);

    var local_sum = 0.0;
    if (lane < ${keys}u) {
      local_sum = exp(scores[lane] - m_new);
    }
    let l_new = l_state * alpha + subgroupAdd(local_sum);

    for (var i = 0u; i < 4u; i = i + 1u) {
      let dim = dim0 + i;
      var weighted_v = 0.0;
      for (var key_offset = 0u; key_offset < ${keys}u; key_offset = key_offset + 1u) {
        let weight = f32(f16(exp(scores[key_offset] - m_new)));
        weighted_v = weighted_v + weight * f32(f16(v_tile[key_offset * 128u + dim]));
      }
      acc[i] = acc[i] * alpha + weighted_v;
    }
    m_state = m_new;
    l_state = l_new;
    workgroupBarrier();
  }

  if (row_valid) {
    let inv_l = 1.0 / l_state;
    for (var i = 0u; i < 4u; i = i + 1u) {
      let dim = dim0 + i;
      attention_out[row * params.attention_dim + head * params.head_dim + dim] = f32(f16(clamp(acc[i] * inv_l, -65504.0, 65504.0)));
    }
  }
}
`;
}

function makeLinear1F16ConsumerShader(shader) {
  let code = shader;
  if (!/^\s*enable f16;/.test(code)) {
    code = `enable f16;\n${code}`;
  }
  code = code.replace(
    "@group(0) @binding(0) var<storage, read> linear1_out: array<f32>;",
    "@group(0) @binding(0) var<storage, read> linear1_out: array<f16>;",
  );
  code = code.replace(/return linear1_out\[([^\]]+)\];/g, "return f32(linear1_out[$1]);");
  code = code.replace(/let gate = linear1_out\[([^\]]+)\];/g, "let gate = f32(linear1_out[$1]);");
  code = code.replace(/let up = linear1_out\[([^\]]+)\];/g, "let up = f32(linear1_out[$1]);");
  return code;
}

function makeSingleQkNormF16StorageShader(shader) {
  let code = shader;
  if (!/^\s*enable f16;/.test(code)) {
    code = `enable f16;\n${code}`;
  }
  code = code.replace(
    "@group(0) @binding(3) var<storage, read_write> q_norm_out: array<f32>;",
    "@group(0) @binding(3) var<storage, read_write> q_norm_out: array<f16>;",
  );
  code = code.replace(
    "@group(0) @binding(4) var<storage, read_write> k_norm_out: array<f32>;",
    "@group(0) @binding(4) var<storage, read_write> k_norm_out: array<f16>;",
  );
  code = code.replace(
    "q_norm_out[row * params.attention_dim + head * params.head_dim + dim] =\n      apply_rope(q_temp[dim], q_temp[dim ^ 1u], dim, row);",
    "q_norm_out[row * params.attention_dim + head * params.head_dim + dim] =\n      f16(apply_rope(q_temp[dim], q_temp[dim ^ 1u], dim, row));",
  );
  code = code.replace(
    "k_norm_out[row * params.attention_dim + head * params.head_dim + dim] =\n      apply_rope(k_temp[dim], k_temp[dim ^ 1u], dim, row);",
    "k_norm_out[row * params.attention_dim + head * params.head_dim + dim] =\n      f16(apply_rope(k_temp[dim], k_temp[dim ^ 1u], dim, row));",
  );
  return code;
}

function makeAttentionQkF16ConsumerShader(shader) {
  let code = shader;
  if (!/^\s*enable f16;/.test(code)) {
    code = `enable f16;\n${code}`;
  }
  code = code.replace(
    "@group(0) @binding(1) var<storage, read> q_norm: array<f32>;",
    "@group(0) @binding(1) var<storage, read> q_norm: array<f16>;",
  );
  code = code.replace(
    "@group(0) @binding(2) var<storage, read> k_norm: array<f32>;",
    "@group(0) @binding(2) var<storage, read> k_norm: array<f16>;",
  );
  code = code.replace(/return q_norm\[([^\]]+)\];/g, "return f32(q_norm[$1]);");
  code = code.replace(/return k_norm\[([^\]]+)\];/g, "return f32(k_norm[$1]);");
  return code;
}

const DOUBLE_QKV_NORM_ROPE_SHADER = `
enable f16;

struct Params {
  rows: u32,
  qkv_m: u32,
  heads: u32,
  head_dim: u32,
  attention_dim: u32,
  output_row_offset: u32,
  text_tokens: u32,
  image_width: u32,
};

@group(0) @binding(0) var<storage, read> qkv: array<f16>;
@group(0) @binding(1) var<storage, read> query_scale: array<f16>;
@group(0) @binding(2) var<storage, read> key_scale: array<f16>;
@group(0) @binding(3) var<storage, read_write> q_norm_out: array<f32>;
@group(0) @binding(4) var<storage, read_write> k_norm_out: array<f32>;
@group(0) @binding(5) var<storage, read_write> v_out: array<f32>;
@group(0) @binding(6) var<uniform> params: Params;
@group(0) @binding(7) var<storage, read> rope_freq: array<f32>;

var<workgroup> scratch: array<f32, 128>;
var<workgroup> q_temp: array<f32, 128>;
var<workgroup> k_temp: array<f32, 128>;

fn q_value(row: u32, head: u32, dim: u32) -> f32 {
  return f32(qkv[row * params.qkv_m + head * params.head_dim + dim]);
}

fn k_value(row: u32, head: u32, dim: u32) -> f32 {
  return f32(qkv[row * params.qkv_m + params.attention_dim + head * params.head_dim + dim]);
}

fn v_value(row: u32, head: u32, dim: u32) -> f32 {
  return f32(qkv[row * params.qkv_m + params.attention_dim * 2u + head * params.head_dim + dim]);
}

fn rope_position(joint_row: u32, axis: u32) -> f32 {
  if (joint_row < params.text_tokens) {
    if (axis == 3u) {
      return f32(joint_row);
    }
    return 0.0;
  }
  let image_row = joint_row - params.text_tokens;
  let safe_width = max(params.image_width, 1u);
  let y = image_row / safe_width;
  let x = image_row - y * safe_width;
  if (axis == 1u) {
    return f32(y);
  }
  if (axis == 2u) {
    return f32(x);
  }
  return 0.0;
}

fn apply_rope(value: f32, mate: f32, dim: u32, joint_row: u32) -> f32 {
  let pair = dim / 2u;
  let lane = dim & 1u;
  let axis = pair / 16u;
  let freq_index = pair - axis * 16u;
  let angle = rope_position(joint_row, axis) * rope_freq[freq_index];
  let c = cos(angle);
  let s = sin(angle);
  if (lane == 0u) {
    return c * value - s * mate;
  }
  return s * mate + c * value;
}

@compute @workgroup_size(128, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let dim = lid.x;
  let row = wid.x;
  let head = wid.y;
  if (row >= params.rows || head >= params.heads) {
    return;
  }
  let joint_row = params.output_row_offset + row;

  let q = q_value(row, head, dim);
  scratch[dim] = q * q;
  workgroupBarrier();
  for (var stride = 64u; stride > 0u; stride = stride / 2u) {
    if (dim < stride) {
      scratch[dim] = scratch[dim] + scratch[dim + stride];
    }
    workgroupBarrier();
  }
  let q_inv = inverseSqrt(scratch[0] / f32(params.head_dim) + 0.000001);
  q_temp[dim] = f32(f16(f32(f16(q * q_inv)) * f32(query_scale[dim])));
  workgroupBarrier();
  q_norm_out[joint_row * params.attention_dim + head * params.head_dim + dim] =
      apply_rope(q_temp[dim], q_temp[dim ^ 1u], dim, joint_row);
  workgroupBarrier();

  let k = k_value(row, head, dim);
  scratch[dim] = k * k;
  workgroupBarrier();
  for (var stride = 64u; stride > 0u; stride = stride / 2u) {
    if (dim < stride) {
      scratch[dim] = scratch[dim] + scratch[dim + stride];
    }
    workgroupBarrier();
  }
  let k_inv = inverseSqrt(scratch[0] / f32(params.head_dim) + 0.000001);
  k_temp[dim] = f32(f16(f32(f16(k * k_inv)) * f32(key_scale[dim])));
  workgroupBarrier();
  k_norm_out[joint_row * params.attention_dim + head * params.head_dim + dim] =
      apply_rope(k_temp[dim], k_temp[dim ^ 1u], dim, joint_row);
  v_out[joint_row * params.attention_dim + head * params.head_dim + dim] = v_value(row, head, dim);
}
`;

function makeJointAttentionTiledShader(tileKeys, queryRows = 8) {
  const keys = Number(tileKeys || 8);
  const rows = Number(queryRows || 8);
  if (![8, 16].includes(keys)) {
    throw new Error(`unsupported joint attention tile key count: ${tileKeys}`);
  }
  if (![4, 8, 16].includes(rows)) {
    throw new Error(`unsupported joint attention query row count: ${queryRows}`);
  }
  return `
enable f16;

struct Params {
  n: u32,
  heads: u32,
  head_dim: u32,
  attention_dim: u32,
};

@group(0) @binding(0) var<storage, read> v_in: array<f32>;
@group(0) @binding(1) var<storage, read> q_norm: array<f32>;
@group(0) @binding(2) var<storage, read> k_norm: array<f32>;
@group(0) @binding(3) var<storage, read_write> attention_out: array<f32>;
@group(0) @binding(4) var<uniform> params: Params;

var<workgroup> k_tile: array<f32, ${keys * 128}>;
var<workgroup> v_tile: array<f32, ${keys * 128}>;
var<workgroup> scores: array<f32, ${rows * keys}>;
var<workgroup> reduce: array<f32, ${rows * 16}>;

fn qn(row: u32, head: u32, dim: u32) -> f32 {
  return q_norm[row * params.attention_dim + head * params.head_dim + dim];
}

fn kn(row: u32, head: u32, dim: u32) -> f32 {
  return k_norm[row * params.attention_dim + head * params.head_dim + dim];
}

fn v_value(row: u32, head: u32, dim: u32) -> f32 {
  return v_in[row * params.attention_dim + head * params.head_dim + dim];
}

@compute @workgroup_size(16, ${rows}, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let dim_lane = lid.x;
  let q_lane = lid.y;
  let local_linear = q_lane * 16u + dim_lane;
  let row = wid.x * ${rows}u + q_lane;
  let head = wid.y;
  if (head >= params.heads || params.n > 4608u) {
    return;
  }

  let row_valid = row < params.n;
  let dim0 = dim_lane * 8u;
  var qv: array<f32, 8>;
  var acc: array<f32, 8>;
  for (var i = 0u; i < 8u; i = i + 1u) {
    let dim = dim0 + i;
    qv[i] = select(0.0, qn(row, head, dim), row_valid);
    acc[i] = 0.0;
  }
  var m_state = -3.402823e38;
  var l_state = 0.0;

  for (var key_base = 0u; key_base < params.n; key_base = key_base + ${keys}u) {
    for (var tile_index = local_linear; tile_index < ${keys * 128}u; tile_index = tile_index + ${rows * 16}u) {
      let key_offset = tile_index / 128u;
      let dim = tile_index - key_offset * 128u;
      let key_row = key_base + key_offset;
      if (key_row < params.n) {
        k_tile[tile_index] = kn(key_row, head, dim);
        v_tile[tile_index] = v_value(key_row, head, dim);
      } else {
        k_tile[tile_index] = 0.0;
        v_tile[tile_index] = 0.0;
      }
    }
    workgroupBarrier();

    for (var key_offset = 0u; key_offset < ${keys}u; key_offset = key_offset + 1u) {
      var partial = 0.0;
      for (var i = 0u; i < 8u; i = i + 1u) {
        partial = partial + qv[i] * k_tile[key_offset * 128u + dim0 + i];
      }
      reduce[q_lane * 16u + dim_lane] = partial;
      workgroupBarrier();
      for (var stride = 8u; stride > 0u; stride = stride / 2u) {
        if (dim_lane < stride) {
          reduce[q_lane * 16u + dim_lane] =
              reduce[q_lane * 16u + dim_lane] + reduce[q_lane * 16u + dim_lane + stride];
        }
        workgroupBarrier();
      }
      if (dim_lane == 0u) {
        let key_row = key_base + key_offset;
        scores[q_lane * ${keys}u + key_offset] =
            select(-3.402823e38, reduce[q_lane * 16u] * 0.08838835, row_valid && key_row < params.n);
      }
      workgroupBarrier();
    }

    var local_max = -3.402823e38;
    if (dim_lane < ${keys}u) {
      local_max = scores[q_lane * ${keys}u + dim_lane];
    }
    reduce[q_lane * 16u + dim_lane] = local_max;
    workgroupBarrier();
    for (var stride = 8u; stride > 0u; stride = stride / 2u) {
      if (dim_lane < stride) {
        reduce[q_lane * 16u + dim_lane] =
            max(reduce[q_lane * 16u + dim_lane], reduce[q_lane * 16u + dim_lane + stride]);
      }
      workgroupBarrier();
    }
    let tile_max = reduce[q_lane * 16u];
    let m_new = max(m_state, tile_max);
    let alpha = exp(m_state - m_new);

    var local_sum = 0.0;
    if (dim_lane < ${keys}u) {
      local_sum = exp(scores[q_lane * ${keys}u + dim_lane] - m_new);
    }
    reduce[q_lane * 16u + dim_lane] = local_sum;
    workgroupBarrier();
    for (var stride = 8u; stride > 0u; stride = stride / 2u) {
      if (dim_lane < stride) {
        reduce[q_lane * 16u + dim_lane] =
            reduce[q_lane * 16u + dim_lane] + reduce[q_lane * 16u + dim_lane + stride];
      }
      workgroupBarrier();
    }
    let l_new = l_state * alpha + reduce[q_lane * 16u];

    for (var i = 0u; i < 8u; i = i + 1u) {
      let dim = dim0 + i;
      var weighted_v = 0.0;
      for (var key_offset = 0u; key_offset < ${keys}u; key_offset = key_offset + 1u) {
        let weight = f32(f16(exp(scores[q_lane * ${keys}u + key_offset] - m_new)));
        weighted_v = weighted_v + weight * f32(f16(v_tile[key_offset * 128u + dim]));
      }
      acc[i] = acc[i] * alpha + weighted_v;
    }
    m_state = m_new;
    l_state = l_new;
    workgroupBarrier();
  }

  if (row_valid) {
    let inv_l = 1.0 / l_state;
    for (var i = 0u; i < 8u; i = i + 1u) {
      let dim = dim0 + i;
      attention_out[row * params.attention_dim + head * params.head_dim + dim] = f32(f16(clamp(acc[i] * inv_l, -65504.0, 65504.0)));
    }
  }
}
`;
}

const SINGLE_MLP_ACTIVATION_ATTENTION_SHADER = `
struct Params {
  n: u32,
  linear1_m: u32,
  linear2_k: u32,
  attn_dim: u32,
  qkv_dim: u32,
  mlp_half_dim: u32,
};

@group(0) @binding(0) var<storage, read> linear1_out: array<f32>;
@group(0) @binding(1) var<storage, read> attention_out: array<f32>;
@group(0) @binding(2) var<storage, read_write> linear2_in: array<f32>;
@group(0) @binding(3) var<uniform> params: Params;

fn sigmoid(value: f32) -> f32 {
  return 1.0 / (1.0 + exp(-value));
}

@compute @workgroup_size(256, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let col = wid.x * 256u + lid.x;
  let row = wid.y;
  if (row >= params.n || col >= params.linear2_k) {
    return;
  }

  var value = 0.0;
  if (col < params.attn_dim) {
    value = attention_out[row * params.attn_dim + col];
  } else {
    let mlp_col = col - params.attn_dim;
    let gate = linear1_out[row * params.linear1_m + params.qkv_dim + mlp_col];
    let up = linear1_out[row * params.linear1_m + params.qkv_dim + params.mlp_half_dim + mlp_col];
    value = gate * sigmoid(gate) * up;
  }
  linear2_in[row * params.linear2_k + col] = value;
}
`;

const SINGLE_MLP_ACTIVATE_QUANT_SHADER = `
struct Params {
  n: u32,
  linear1_m: u32,
  linear2_k: u32,
  attn_dim: u32,
  qkv_dim: u32,
  mlp_half_dim: u32,
  k_words: u32,
};

@group(0) @binding(0) var<storage, read> linear1_out: array<f32>;
@group(0) @binding(1) var<storage, read_write> packed_out: array<u32>;
@group(0) @binding(2) var<storage, read_write> scales_out: array<f32>;
@group(0) @binding(3) var<uniform> params: Params;

var<workgroup> row_absmax: array<f32, 256>;

fn sigmoid(value: f32) -> f32 {
  return 1.0 / (1.0 + exp(-value));
}

fn synthetic_attention(row: u32, col: u32) -> f32 {
  let code = (row * 37u + col * 13u + 17u) % 251u;
  return (f32(code) - 125.0) / 64.0;
}

fn activation_value(row: u32, col: u32) -> f32 {
  if (col < params.attn_dim) {
    return synthetic_attention(row, col);
  }
  let mlp_col = col - params.attn_dim;
  let gate = linear1_out[row * params.linear1_m + params.qkv_dim + mlp_col];
  let up = linear1_out[row * params.linear1_m + params.qkv_dim + params.mlp_half_dim + mlp_col];
  return gate * sigmoid(gate) * up;
}

fn pack_i8_lane(value: i32, lane: u32) -> u32 {
  return (u32(value) & 0xffu) << (lane * 8u);
}

@compute @workgroup_size(256, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let row = wid.x;
  let local_id = lid.x;
  var absmax = 0.0;

  for (var col = local_id; col < params.linear2_k; col = col + 256u) {
    absmax = max(absmax, abs(activation_value(row, col)));
  }
  row_absmax[local_id] = absmax;
  workgroupBarrier();

  for (var stride = 128u; stride > 0u; stride = stride / 2u) {
    if (local_id < stride) {
      row_absmax[local_id] = max(row_absmax[local_id], row_absmax[local_id + stride]);
    }
    workgroupBarrier();
  }

  let row_scale = row_absmax[0];
  let quant_scale = select(0.0, 127.0 / row_scale, row_scale > 0.0);
  if (local_id == 0u) {
    scales_out[row] = select(1.0, row_scale / 127.0, row_scale > 0.0);
  }

  for (var word = local_id; word < params.k_words; word = word + 256u) {
    var packed_word = 0u;
    for (var lane = 0u; lane < 4u; lane = lane + 1u) {
      let col = word * 4u + lane;
      var q = 0i;
      if (col < params.linear2_k) {
        let scaled = round(clamp(activation_value(row, col) * quant_scale, -127.0, 127.0));
        q = i32(scaled);
      }
      packed_word = packed_word | pack_i8_lane(q, lane);
    }
    packed_out[row * params.k_words + word] = packed_word;
  }
}
`;

const SINGLE_MLP_ACTIVATE_ATTENTION_QUANT_SHADER = `
struct Params {
  n: u32,
  linear1_m: u32,
  linear2_k: u32,
  attn_dim: u32,
  qkv_dim: u32,
  mlp_half_dim: u32,
  k_words: u32,
};

@group(0) @binding(0) var<storage, read> linear1_out: array<f32>;
@group(0) @binding(1) var<storage, read> attention_out: array<f32>;
@group(0) @binding(2) var<storage, read_write> packed_out: array<u32>;
@group(0) @binding(3) var<storage, read_write> scales_out: array<f32>;
@group(0) @binding(4) var<uniform> params: Params;

var<workgroup> row_absmax: array<f32, 256>;

fn sigmoid(value: f32) -> f32 {
  return 1.0 / (1.0 + exp(-value));
}

fn activation_value(row: u32, col: u32) -> f32 {
  if (col < params.attn_dim) {
    return attention_out[row * params.attn_dim + col];
  }
  let mlp_col = col - params.attn_dim;
  let gate = linear1_out[row * params.linear1_m + params.qkv_dim + mlp_col];
  let up = linear1_out[row * params.linear1_m + params.qkv_dim + params.mlp_half_dim + mlp_col];
  return gate * sigmoid(gate) * up;
}

fn pack_i8_lane(value: i32, lane: u32) -> u32 {
  return (u32(value) & 0xffu) << (lane * 8u);
}

@compute @workgroup_size(256, 1, 1)
fn main(
    @builtin(local_invocation_id) lid: vec3<u32>,
    @builtin(workgroup_id) wid: vec3<u32>) {
  let row = wid.x;
  let local_id = lid.x;
  var absmax = 0.0;

  for (var col = local_id; col < params.linear2_k; col = col + 256u) {
    absmax = max(absmax, abs(activation_value(row, col)));
  }
  row_absmax[local_id] = absmax;
  workgroupBarrier();

  for (var stride = 128u; stride > 0u; stride = stride / 2u) {
    if (local_id < stride) {
      row_absmax[local_id] = max(row_absmax[local_id], row_absmax[local_id + stride]);
    }
    workgroupBarrier();
  }

  let row_scale = row_absmax[0];
  let quant_scale = select(0.0, 127.0 / row_scale, row_scale > 0.0);
  if (local_id == 0u) {
    scales_out[row] = select(1.0, row_scale / 127.0, row_scale > 0.0);
  }

  for (var word = local_id; word < params.k_words; word = word + 256u) {
    var packed_word = 0u;
    for (var lane = 0u; lane < 4u; lane = lane + 1u) {
      let col = word * 4u + lane;
      var q = 0i;
      if (col < params.linear2_k) {
        let scaled = round(clamp(activation_value(row, col) * quant_scale, -127.0, 127.0));
        q = i32(scaled);
      }
      packed_word = packed_word | pack_i8_lane(q, lane);
    }
    packed_out[row * params.k_words + word] = packed_word;
  }
}
`;

function verificationSummary(actual, expectedItems) {
  let maxAbs = 0;
  let maxRel = 0;
  const samples = [];
  for (const item of expectedItems) {
    const got = actual[item.row * item.m + item.col];
    const abs = Math.abs(got - item.expected);
    const rel = abs / Math.max(1e-6, Math.abs(item.expected));
    maxAbs = Math.max(maxAbs, abs);
    maxRel = Math.max(maxRel, rel);
    if (samples.length < 8) {
      samples.push({row: item.row, col: item.col, expected: item.expected, actual: got, abs});
    }
  }
  return {checked: expectedItems.length, max_abs_error: maxAbs, max_rel_error: maxRel, samples};
}

async function runQ4Bench(device, manifest, bundleBaseUrl, config, inputF16) {
  const k = manifest.shape.K;
  const m = manifest.shape.N;
  const n = Number(config.n || 256);
  const groupSize = manifest.matmul_nbits.block_size;
  const groups = manifest.matmul_nbits.groups_per_col;
  const packedWords = manifest.matmul_nbits.packed_group_words;
  const tileCols = Number(config.q4TileCols || 96);
  const maxOutputRows = Math.max(
    1,
    Math.floor((device.limits.maxStorageBufferBindingSize || 134217728) / (m * 4))
  );
  const rowBlock = Math.max(1, Math.min(n, Number(config.rowBlockSize || maxOutputRows)));

  const [q4Buf, scalesBuf, zpBuf] = await Promise.all([
    fetchArrayBuffer(`${bundleBaseUrl}${manifest.q4.packed_u32}`),
    fetchArrayBuffer(`${bundleBaseUrl}${manifest.q4.scales_f16}`),
    fetchArrayBuffer(`${bundleBaseUrl}${manifest.q4.zero_points_u32}`),
  ]);
  const q4 = new Uint32Array(q4Buf);
  const scales = new Uint16Array(scalesBuf);
  const zeroPoints = new Uint32Array(zpBuf);

  const xBuffer = createBuffer(device, inputF16, GPUBufferUsage.STORAGE);
  const q4Buffer = createBuffer(device, q4, GPUBufferUsage.STORAGE);
  const scaleBuffer = createBuffer(device, scales, GPUBufferUsage.STORAGE);
  const zpBuffer = createBuffer(device, zeroPoints, GPUBufferUsage.STORAGE);
  const yBuffer = createEmptyBuffer(device, rowBlock * m * 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);

  const module = device.createShaderModule({code: makeQ4ZpShader32xWide(tileCols)});
  const pipeline = await device.createComputePipelineAsync({
    layout: "auto",
    compute: {module, entryPoint: "main"},
  });
  const chunks = [];
  for (let rowOffset = 0; rowOffset < n; rowOffset += rowBlock) {
    const chunkRows = Math.min(rowBlock, n - rowOffset);
    const params = new Uint32Array([chunkRows, k, m, groupSize, groups, packedWords, rowOffset, 0]);
    const paramsBuffer = createBuffer(device, params, GPUBufferUsage.UNIFORM);
    const bindGroup = device.createBindGroup({
      layout: pipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: xBuffer}},
        {binding: 1, resource: {buffer: q4Buffer}},
        {binding: 2, resource: {buffer: scaleBuffer}},
        {binding: 3, resource: {buffer: zpBuffer}},
        {binding: 4, resource: {buffer: yBuffer}},
        {binding: 5, resource: {buffer: paramsBuffer}},
      ],
    });
    chunks.push({rowOffset, chunkRows, bindGroup});
  }

  async function dispatch() {
    const encoder = device.createCommandEncoder();
    for (const chunk of chunks) {
      const pass = encoder.beginComputePass();
      pass.setPipeline(pipeline);
      pass.setBindGroup(0, chunk.bindGroup);
      pass.dispatchWorkgroups(Math.ceil(m / tileCols), Math.ceil(chunk.chunkRows / 32));
      pass.end();
    }
    device.queue.submit([encoder.finish()]);
    await device.queue.onSubmittedWorkDone();
  }

  for (let i = 0; i < Number(config.warmupRuns ?? 1); ++i) {
    await dispatch();
  }
  const times = [];
  for (let i = 0; i < Number(config.timedRuns ?? 3); ++i) {
    const start = performance.now();
    await dispatch();
    times.push(performance.now() - start);
  }

  let verification = null;
  if (config.verify) {
    if (chunks.length > 1) {
      throw new Error("verification for row-blocked q4 runs is not implemented");
    }
    const output = await readFloat32Buffer(device, yBuffer, rowBlock * m);
    const expected = [];
    const rows = Math.min(n, Number(config.verifyRows || 2));
    const cols = Math.min(m, Number(config.prefixCount || 8));
    for (let row = 0; row < rows; ++row) {
      for (let col = 0; col < cols; ++col) {
        expected.push({
          row,
          col,
          m,
          expected: q4CpuOutput(row, col, k, m, groupSize, packedWords, inputF16, q4, scales, zeroPoints),
        });
      }
    }
    verification = verificationSummary(output, expected);
  }

  const medianMs = median(times);
  const macs = n * k * m;
  return {
    mode: "q4_zp",
    shape: {n, k, m},
    tile_cols: tileCols,
    row_block: rowBlock,
    chunks: chunks.length,
    timed_ms: times,
    summary: {
      median_dispatch_ms: medianMs,
      effective_tmacs: macs / (medianMs / 1000) / 1e12,
    },
    verification,
  };
}

async function runI8Bench(device, manifest, bundleBaseUrl, config, inputF32) {
  if (!manifest.i8_dp4a) {
    return {mode: "i8_dp4a", skipped: "bundle has no i8_dp4a section"};
  }
  const k = manifest.shape.K;
  const m = manifest.shape.N;
  const n = Number(config.n || 256);
  const kWords = manifest.i8_dp4a.k_words;
  const tileCols = Number(config.i8TileCols || 96);
  const i8Kernel = config.i8Kernel || "32xwide";
  const i8RowsPerWorkgroup = i8Kernel === "16xwide" ? 16 : 32;
  const maxOutputRows = Math.max(
    1,
    Math.floor((device.limits.maxStorageBufferBindingSize || 134217728) / (m * 4))
  );
  const rowBlock = Math.max(1, Math.min(n, Number(config.rowBlockSize || maxOutputRows)));

  const [wBuf, scaleBuf] = await Promise.all([
    fetchArrayBuffer(`${bundleBaseUrl}${manifest.i8_dp4a.packed_u32}`),
    fetchArrayBuffer(`${bundleBaseUrl}${manifest.i8_dp4a.scales_f32}`),
  ]);
  const wPacked = new Uint32Array(wBuf);
  const wScales = new Float32Array(scaleBuf);

  const xF32Buffer = createBuffer(device, inputF32, GPUBufferUsage.STORAGE);
  const xPackedBuffer = createEmptyBuffer(device, n * kWords * 4, GPUBufferUsage.STORAGE);
  const xScalesBuffer = createEmptyBuffer(device, n * 4, GPUBufferUsage.STORAGE);
  const wBuffer = createBuffer(device, wPacked, GPUBufferUsage.STORAGE);
  const wScaleBuffer = createBuffer(device, wScales, GPUBufferUsage.STORAGE);
  const yBuffer = createEmptyBuffer(device, rowBlock * m * 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const quantParams = new Uint32Array([n, k, m, kWords]);
  const quantParamsBuffer = createBuffer(device, quantParams, GPUBufferUsage.UNIFORM);

  const quantModule = device.createShaderModule({code: QUANTIZE_X_F32_SHADER});
  const dotModule = device.createShaderModule({
    code: i8Kernel === "16xwide"
      ? makeI8ScaledDotShader16xWide(tileCols)
      : makeI8ScaledDotShader32xWide(tileCols),
  });
  const quantPipeline = await device.createComputePipelineAsync({
    layout: "auto",
    compute: {module: quantModule, entryPoint: "main"},
  });
  const dotPipeline = await device.createComputePipelineAsync({
    layout: "auto",
    compute: {module: dotModule, entryPoint: "main"},
  });
  const quantBindGroup = device.createBindGroup({
    layout: quantPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: xF32Buffer}},
      {binding: 1, resource: {buffer: xPackedBuffer}},
      {binding: 2, resource: {buffer: xScalesBuffer}},
      {binding: 3, resource: {buffer: quantParamsBuffer}},
    ],
  });
  const chunks = [];
  for (let rowOffset = 0; rowOffset < n; rowOffset += rowBlock) {
    const chunkRows = Math.min(rowBlock, n - rowOffset);
    const params = new Uint32Array([chunkRows, k, m, kWords, rowOffset, 0, 0, 0]);
    const paramsBuffer = createBuffer(device, params, GPUBufferUsage.UNIFORM);
    const dotBindGroup = device.createBindGroup({
      layout: dotPipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: xPackedBuffer}},
        {binding: 1, resource: {buffer: wBuffer}},
        {binding: 2, resource: {buffer: xScalesBuffer}},
        {binding: 3, resource: {buffer: wScaleBuffer}},
        {binding: 4, resource: {buffer: yBuffer}},
        {binding: 5, resource: {buffer: paramsBuffer}},
      ],
    });
    chunks.push({rowOffset, chunkRows, dotBindGroup});
  }

  async function dispatch() {
    const encoder = device.createCommandEncoder();
    let pass = encoder.beginComputePass();
    pass.setPipeline(quantPipeline);
    pass.setBindGroup(0, quantBindGroup);
    pass.dispatchWorkgroups(n);
    pass.end();
    for (const chunk of chunks) {
      pass = encoder.beginComputePass();
      pass.setPipeline(dotPipeline);
      pass.setBindGroup(0, chunk.dotBindGroup);
      pass.dispatchWorkgroups(Math.ceil(m / tileCols), Math.ceil(chunk.chunkRows / i8RowsPerWorkgroup));
      pass.end();
    }
    device.queue.submit([encoder.finish()]);
    await device.queue.onSubmittedWorkDone();
  }

  for (let i = 0; i < Number(config.warmupRuns ?? 1); ++i) {
    await dispatch();
  }
  const times = [];
  for (let i = 0; i < Number(config.timedRuns ?? 3); ++i) {
    const start = performance.now();
    await dispatch();
    times.push(performance.now() - start);
  }

  let verification = null;
  if (config.verify) {
    if (chunks.length > 1) {
      throw new Error("verification for row-blocked i8 runs is not implemented");
    }
    const output = await readFloat32Buffer(device, yBuffer, rowBlock * m);
    const expected = [];
    const rows = Math.min(n, Number(config.verifyRows || 2));
    const cols = Math.min(m, Number(config.prefixCount || 8));
    for (let row = 0; row < rows; ++row) {
      for (let col = 0; col < cols; ++col) {
        expected.push({
          row,
          col,
          m,
          expected: i8CpuOutput(row, col, k, m, kWords, inputF32, wPacked, wScales),
        });
      }
    }
    verification = verificationSummary(output, expected);
  }

  const medianMs = median(times);
  const macs = n * k * m;
  return {
    mode: "i8_dp4a",
    shape: {n, k, m},
    kernel: i8Kernel,
    tile_cols: tileCols,
    row_block: rowBlock,
    chunks: chunks.length,
    timed_ms: times,
    summary: {
      median_dispatch_ms: medianMs,
      effective_tmacs: macs / (medianMs / 1000) / 1e12,
    },
    verification,
  };
}

async function runCustomLowbitLinearBench(config = {}) {
  if (!navigator.gpu) {
    throw new Error("navigator.gpu is not available");
  }
  const bundleBaseUrl = config.bundleBaseUrl || "/bundle/";
  const manifest = await (await fetch(`${bundleBaseUrl}manifest.json`)).json();
  const adapter = await navigator.gpu.requestAdapter({powerPreference: "high-performance"});
  if (!adapter) {
    throw new Error("WebGPU adapter is not available");
  }

  const requiredFeatures = [];
  if (!adapter.features.has("shader-f16")) {
    throw new Error("WebGPU adapter does not expose shader-f16");
  }
  requiredFeatures.push("shader-f16");
  const wantI8 = (config.mode || "both") !== "q4";
  const wgslLanguageFeatures = navigator.gpu.wgslLanguageFeatures || new Set();
  const hasDp4a = wgslLanguageFeatures.has("packed_4x8_integer_dot_product");
  const device = await adapter.requestDevice({requiredFeatures});
  const n = Number(config.n || 256);
  const k = manifest.shape.K;
  const mode = config.mode || "both";
  const inputF16 = buildInputF16(n, k);
  const inputF32 = buildInputF32(n, k);

  const results = [];
  if (mode === "q4" || mode === "both") {
    results.push(await runQ4Bench(device, manifest, bundleBaseUrl, config, inputF16));
  }
  if (mode === "i8" || mode === "both") {
    if (!hasDp4a) {
      results.push({mode: "i8_dp4a", skipped: "adapter lacks packed-4x8-integer-dot-product"});
    } else {
      results.push(await runI8Bench(device, manifest, bundleBaseUrl, config, inputF32));
    }
  }

  return {
    verdict: "custom-lowbit-linear-bench-completed",
    manifest: {
      name: manifest.name,
      source_node: manifest.source_node,
      shape: manifest.shape,
      matmul_nbits: manifest.matmul_nbits,
    },
    adapter_features: Array.from(adapter.features).sort(),
    wgsl_language_features: Array.from(wgslLanguageFeatures).sort(),
    config: {
      n,
      mode,
      warmupRuns: Number(config.warmupRuns ?? 1),
      timedRuns: Number(config.timedRuns ?? 3),
      verify: Boolean(config.verify),
    },
    results,
  };
}

window.runCustomLowbitLinearBench = runCustomLowbitLinearBench;

async function runCustomLowbitLinearManifestBench(config = {}) {
  if (!navigator.gpu) {
    throw new Error("navigator.gpu is not available");
  }
  const manifest = config.manifest;
  if (!manifest || !manifest.shape || !manifest.q4 || !manifest.matmul_nbits) {
    throw new Error("runCustomLowbitLinearManifestBench requires a manifest entry with shape, q4, and matmul_nbits");
  }
  const linearManifest = {
    ...manifest,
    q4: {
      ...manifest.q4,
      packed_u32: manifest.q4.packed_u32 || manifest.q4.qweight_u32,
      scales_f16: manifest.q4.scales_f16,
      zero_points_u32: manifest.q4.zero_points_u32,
      packed_u32_count: manifest.q4.packed_u32_count || manifest.q4.qweight_u32_count,
    },
  };
  const bundleBaseUrl = config.bundleBaseUrl || "/runtime/custom_lowbit/full_transformer/";
  const adapter = await navigator.gpu.requestAdapter({powerPreference: "high-performance"});
  if (!adapter) {
    throw new Error("WebGPU adapter is not available");
  }
  if (!adapter.features.has("shader-f16")) {
    throw new Error("WebGPU adapter does not expose shader-f16");
  }
  const wgslLanguageFeatures = navigator.gpu.wgslLanguageFeatures || new Set();
  const deviceDescriptor = {requiredFeatures: ["shader-f16"]};
  if (adapter.limits && adapter.limits.maxComputeWorkgroupStorageSize >= 32768) {
    deviceDescriptor.requiredLimits = {maxComputeWorkgroupStorageSize: 32768};
  }
  const device = await adapter.requestDevice(deviceDescriptor);
  const n = Number(config.n || 16);
  const k = manifest.shape.K;
  const mode = config.mode || "q4";
  const inputF16 = buildInputF16(n, k);
  const inputF32 = mode === "i8" || mode === "both" ? buildInputF32(n, k) : null;
  const results = [];

  if (mode === "q4" || mode === "both") {
    results.push(await runQ4Bench(device, linearManifest, bundleBaseUrl, config, inputF16));
  }
  if (mode === "i8" || mode === "both") {
    if (!linearManifest.i8_dp4a) {
      results.push({mode: "i8_dp4a", skipped: "manifest entry does not contain i8_dp4a weights"});
    } else if (!wgslLanguageFeatures.has("packed_4x8_integer_dot_product")) {
      results.push({mode: "i8_dp4a", skipped: "adapter lacks packed-4x8-integer-dot-product"});
    } else {
      results.push(await runI8Bench(device, linearManifest, bundleBaseUrl, config, inputF32));
    }
  }

  return {
    verdict: "custom-lowbit-linear-manifest-bench-completed",
    manifest: {
      id: manifest.id || "",
      name: manifest.name || "",
      source_node: manifest.source_node,
      shape: manifest.shape,
      matmul_nbits: manifest.matmul_nbits,
    },
    adapter_features: Array.from(adapter.features).sort(),
    wgsl_language_features: Array.from(wgslLanguageFeatures).sort(),
    config: {
      n,
      mode,
      warmupRuns: Number(config.warmupRuns ?? 1),
      timedRuns: Number(config.timedRuns ?? 3),
      verify: Boolean(config.verify),
    },
    results,
  };
}

window.runCustomLowbitLinearManifestBench = runCustomLowbitLinearManifestBench;

function normalizeFullLinearEntry(entry) {
  if (!entry || !entry.shape || !entry.q4 || !entry.matmul_nbits) {
    throw new Error("full transformer linear entry requires shape, q4, and matmul_nbits");
  }
  return {
    ...entry,
    q4: {
      ...entry.q4,
      packed_u32: entry.q4.packed_u32 || entry.q4.qweight_u32,
      scales_f16: entry.q4.scales_f16,
      zero_points_u32: entry.q4.zero_points_u32,
      packed_u32_count: entry.q4.packed_u32_count || entry.q4.qweight_u32_count,
    },
  };
}

function findFullManifestLinear(fullManifest, id) {
  const linears = fullManifest && Array.isArray(fullManifest.linears) ? fullManifest.linears : [];
  const entry = linears.find((item) => item.id === id || item.name === id || item.source_node === id);
  if (!entry) {
    throw new Error(`full transformer manifest does not contain linear: ${id}`);
  }
  return normalizeFullLinearEntry(entry);
}

function makeTimestepEmbeddingF16(timestep, dim = 256, maxPeriod = 10000, timeFactor = 1000) {
  const half = Math.floor(dim / 2);
  const values = new Uint16Array(dim);
  const scaledTimestep = timestep * timeFactor;
  for (let i = 0; i < half; ++i) {
    const freq = Math.exp(-Math.log(maxPeriod) * i / half);
    const arg = scaledTimestep * freq;
    values[i] = float32ToFloat16Bits(Math.cos(arg));
    values[half + i] = float32ToFloat16Bits(Math.sin(arg));
  }
  if (dim % 2) values[dim - 1] = 0;
  return values;
}

async function createQ4LinearStage(device, entry, bundleBaseUrl, inputBuffer, outputBuffer, rows, tileCols, outputF16 = false, options = {}) {
  const manifest = normalizeFullLinearEntry(entry);
  const k = manifest.shape.K;
  const weightM = manifest.shape.N;
  const colOffset = Number(options.colOffset ?? 0);
  const m = Number(options.outputCols ?? (weightM - colOffset));
  const outputStride = Number(options.outputStride ?? weightM);
  const groupSize = manifest.matmul_nbits.block_size;
  const groups = manifest.matmul_nbits.groups_per_col;
  const packedWords = manifest.matmul_nbits.packed_group_words;
  const kChunk = Number(options.kChunk ?? (tileCols >= 256 ? 32 : 64));
  const unrollK = options.unrollK ?? false;
  const stageCacheKey = options.cacheKey
    ? `q4-stage:${options.cacheKey}:${manifest.id || manifest.name || manifest.source_node}:${rows}:${k}:${m}:${tileCols}:${kChunk}:${unrollK ? 1 : 0}:${outputF16 ? "f16" : "f32"}:${colOffset}:${weightM}:${outputStride}`
    : "";
  return await getCachedStageObject(device, stageCacheKey, async () => {
  const q4Url = new URL(manifest.q4.packed_u32, new URL(bundleBaseUrl, window.location.href)).toString();
  const scalesUrl = new URL(manifest.q4.scales_f16, new URL(bundleBaseUrl, window.location.href)).toString();
  const zpUrl = new URL(manifest.q4.zero_points_u32, new URL(bundleBaseUrl, window.location.href)).toString();
  const [q4Buf, scalesBuf, zpBuf] = await Promise.all([
    fetchArrayBuffer(q4Url),
    fetchArrayBuffer(scalesUrl),
    fetchArrayBuffer(zpUrl),
  ]);
  const q4Buffer = createImmutableBuffer(device, new Uint32Array(q4Buf), GPUBufferUsage.STORAGE, q4Url);
  const scaleBuffer = createImmutableBuffer(device, new Uint16Array(scalesBuf), GPUBufferUsage.STORAGE, scalesUrl);
  const zpBuffer = createImmutableBuffer(device, new Uint32Array(zpBuf), GPUBufferUsage.STORAGE, zpUrl);
  const paramsBuffer = createBuffer(
    device,
    new Uint32Array([rows, k, m, groupSize, groups, packedWords, 0, colOffset, weightM, outputStride, 0, 0]),
    GPUBufferUsage.UNIFORM,
  );
  const pipeline = await getCachedComputePipeline(
    device,
    `q4-zp-32xwide:${tileCols}:${kChunk}:${unrollK ? 1 : 0}:${outputF16 ? "f16" : "f32"}`,
    makeQ4ZpShader32xWide(tileCols, outputF16, kChunk, unrollK),
  );
  const bindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: inputBuffer}},
      {binding: 1, resource: {buffer: q4Buffer}},
      {binding: 2, resource: {buffer: scaleBuffer}},
      {binding: 3, resource: {buffer: zpBuffer}},
      {binding: 4, resource: {buffer: outputBuffer}},
      {binding: 5, resource: {buffer: paramsBuffer}},
    ],
  });
  return {
    id: manifest.id || manifest.name || manifest.source_node,
    shape: manifest.shape,
    pipeline,
    bindGroup,
    buffers: [q4Buffer, scaleBuffer, zpBuffer, paramsBuffer],
    workgroupsX: Math.ceil(m / tileCols),
    workgroupsY: Math.ceil(rows / 32),
    kChunk,
    unrollK,
  };
  });
}

async function createQ4Dp4aLinearStage(
  device,
  entry,
  bundleBaseUrl,
  inputPackedBuffer,
  inputScalesBuffer,
  outputBuffer,
  rows,
  tileCols,
  wChunkCols,
  outputF16 = true,
  options = {},
) {
  const manifest = normalizeFullLinearEntry(entry);
  const k = manifest.shape.K;
  const weightM = manifest.shape.N;
  const colOffset = Number(options.colOffset ?? 0);
  const m = Number(options.outputCols ?? (weightM - colOffset));
  const outputStride = Number(options.outputStride ?? weightM);
  const xScaleGroupsPerRow = Number(options.xScaleGroupsPerRow ?? 1);
  const groupSize = manifest.matmul_nbits.block_size;
  const groups = manifest.matmul_nbits.groups_per_col;
  const packedWords = manifest.matmul_nbits.packed_group_words;
  const kWords = k / 4;
  if (k % 4 !== 0) {
    throw new Error(`q4 dp4a stage requires K divisible by 4; got K=${k} for ${manifest.id || manifest.name || manifest.source_node}`);
  }
  const stageCacheKey = options.cacheKey
    ? `q4-dp4a-stage:${options.cacheKey}:${manifest.id || manifest.name || manifest.source_node}:${rows}:${k}:${m}:${tileCols}:${wChunkCols}:${outputF16 ? "f16" : "f32"}:${colOffset}:${weightM}:${outputStride}:${xScaleGroupsPerRow}`
    : "";
  return await getCachedStageObject(device, stageCacheKey, async () => {
  const q4Url = new URL(manifest.q4.packed_u32, new URL(bundleBaseUrl, window.location.href)).toString();
  const scalesUrl = new URL(manifest.q4.scales_f16, new URL(bundleBaseUrl, window.location.href)).toString();
  const zpUrl = new URL(manifest.q4.zero_points_u32, new URL(bundleBaseUrl, window.location.href)).toString();
  const [q4Buf, scalesBuf, zpBuf] = await Promise.all([
    fetchArrayBuffer(q4Url),
    fetchArrayBuffer(scalesUrl),
    fetchArrayBuffer(zpUrl),
  ]);
  const q4Buffer = createImmutableBuffer(device, new Uint32Array(q4Buf), GPUBufferUsage.STORAGE, q4Url);
  const scaleBuffer = createImmutableBuffer(device, new Uint16Array(scalesBuf), GPUBufferUsage.STORAGE, scalesUrl);
  const zpBuffer = createImmutableBuffer(device, new Uint32Array(zpBuf), GPUBufferUsage.STORAGE, zpUrl);
  const paramsBuffer = createBuffer(
    device,
    new Uint32Array([rows, k, m, groupSize, groups, packedWords, 0, colOffset, weightM, outputStride, kWords, xScaleGroupsPerRow]),
    GPUBufferUsage.UNIFORM,
  );
  const pipeline = await getCachedComputePipeline(
    device,
    `q4-zp-dp4a-32xwide:${tileCols}:${wChunkCols}:${outputF16 ? "f16" : "f32"}`,
    makeQ4ZpDp4aShader32xWide(tileCols, wChunkCols, outputF16),
  );
  const bindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: inputPackedBuffer}},
      {binding: 1, resource: {buffer: q4Buffer}},
      {binding: 2, resource: {buffer: inputScalesBuffer}},
      {binding: 3, resource: {buffer: scaleBuffer}},
      {binding: 4, resource: {buffer: zpBuffer}},
      {binding: 5, resource: {buffer: outputBuffer}},
      {binding: 6, resource: {buffer: paramsBuffer}},
    ],
  });
  return {
    id: manifest.id || manifest.name || manifest.source_node,
    shape: manifest.shape,
    pipeline,
    bindGroup,
    buffers: [q4Buffer, scaleBuffer, zpBuffer, paramsBuffer],
    workgroupsX: Math.ceil(m / tileCols),
    workgroupsY: Math.ceil(rows / 32),
    q4Dp4a: true,
  };
  });
}

async function createF32ToF16Stage(device, inputBuffer, outputBuffer, count, applySilu, cacheKey = "") {
  return await getCachedStageObject(device, cacheKey ? `f32-to-f16-stage:${cacheKey}:${count}:${applySilu ? 1 : 0}` : "", async () => {
  const pipeline = await getCachedComputePipeline(device, "f32-to-f16", F32_TO_F16_SHADER);
  const paramsBuffer = createBuffer(
    device,
    new Uint32Array([count, applySilu ? 1 : 0, 0, 0]),
    GPUBufferUsage.UNIFORM,
  );
  const bindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: inputBuffer}},
      {binding: 1, resource: {buffer: outputBuffer}},
      {binding: 2, resource: {buffer: paramsBuffer}},
    ],
  });
  return {pipeline, bindGroup, buffers: [paramsBuffer], workgroupsX: Math.ceil(count / 256), applySilu};
  });
}

function modulationOutputId(kind) {
  const normalized = String(kind || "single").toLowerCase();
  if (normalized === "single" || normalized === "single_stream") return "single_stream_modulation.lin";
  if (normalized === "double_img" || normalized === "img") return "double_stream_modulation_img.lin";
  if (normalized === "double_txt" || normalized === "txt") return "double_stream_modulation_txt.lin";
  return normalized;
}

function findQkNormEntry(fullManifest, id) {
  const entries = fullManifest && fullManifest.constants && Array.isArray(fullManifest.constants.qk_norms)
    ? fullManifest.constants.qk_norms
    : [];
  const entry = entries.find((item) => item.id === id || item.name === id);
  if (!entry || !entry.files) {
    throw new Error(`full transformer manifest does not contain q/k norm constants: ${id}`);
  }
  return entry;
}

async function loadQkNormScales(fullManifest, bundleBaseUrl, id) {
  const entry = findQkNormEntry(fullManifest, id);
  const queryScaleUrl = new URL(entry.files.query_norm_scale_f16, new URL(bundleBaseUrl, window.location.href)).toString();
  const keyScaleUrl = new URL(entry.files.key_norm_scale_f16, new URL(bundleBaseUrl, window.location.href)).toString();
  const [queryBuf, keyBuf] = await Promise.all([
    fetchArrayBuffer(queryScaleUrl),
    fetchArrayBuffer(keyScaleUrl),
  ]);
  return {
    entry,
    queryScale: new Uint16Array(queryBuf),
    keyScale: new Uint16Array(keyBuf),
    queryScaleUrl,
    keyScaleUrl,
  };
}

async function loadDynamicI8BundleFromQ4(entry, bundleBaseUrl) {
  const manifest = normalizeFullLinearEntry(entry);
  const cacheKey = `${bundleBaseUrl}|${manifest.id || manifest.name || manifest.source_node}`;
  if (dynamicI8BundleCache.has(cacheKey)) {
    const cached = await dynamicI8BundleCache.get(cacheKey);
    return {
      ...cached,
      cacheHit: true,
      loadMs: 0,
      convertMs: 0,
    };
  }
  const k = manifest.shape.K;
  const m = manifest.shape.N;
  const groupSize = manifest.matmul_nbits.block_size;
  const groups = manifest.matmul_nbits.groups_per_col;
  const packedWords = manifest.matmul_nbits.packed_group_words;
  const kWords = Math.ceil(k / 4);
  const promise = (async () => {
    const start = performance.now();
    const [q4Buf, scalesBuf, zpBuf] = await Promise.all([
      fetchArrayBuffer(`${bundleBaseUrl}${manifest.q4.packed_u32}`),
      fetchArrayBuffer(`${bundleBaseUrl}${manifest.q4.scales_f16}`),
      fetchArrayBuffer(`${bundleBaseUrl}${manifest.q4.zero_points_u32}`),
    ]);
    const fetchMs = performance.now() - start;
    const q4 = new Uint32Array(q4Buf);
    const scales = new Uint16Array(scalesBuf);
    const zeroPoints = new Uint32Array(zpBuf);
    const wPacked = new Uint32Array(kWords * m);
    const wScales = new Float32Array(m);

    function dequant(col, kIndex) {
      const group = Math.floor(kIndex / groupSize);
      const inner = kIndex - group * groupSize;
      const word = Math.floor(inner / 8);
      const shift = (inner & 7) * 4;
      const packed = q4[(group * packedWords + word) * m + col];
      const nibble = (packed >>> shift) & 15;
      const zp = zeroPoints[group * m + col] & 15;
      return (nibble - zp) * float16BitsToFloat32(scales[group * m + col]);
    }

    const convertStart = performance.now();
    for (let col = 0; col < m; ++col) {
      let absmax = 0;
      for (let kIndex = 0; kIndex < k; ++kIndex) {
        absmax = Math.max(absmax, Math.abs(dequant(col, kIndex)));
      }
      const scale = absmax > 0 ? absmax / 127 : 1;
      wScales[col] = scale;
      for (let word = 0; word < kWords; ++word) {
        let packed = 0;
        for (let lane = 0; lane < 4; ++lane) {
          const kIndex = word * 4 + lane;
          let q = 0;
          if (kIndex < k) {
            q = roundToNearest(dequant(col, kIndex) / scale);
            q = Math.max(-127, Math.min(127, q));
          }
          packed = (packed | ((q & 0xff) << (lane * 8))) >>> 0;
        }
        wPacked[word * m + col] = packed;
      }
    }
    const convertMs = performance.now() - convertStart;
    return {
      manifest: {
        ...manifest,
        i8_dp4a: {
          k_words: kWords,
          packed_u32_count: wPacked.length,
          scale_count: wScales.length,
          generated_from_q4: true,
        },
      },
      weight: wPacked,
      scales: wScales,
      weightCacheKey: `${cacheKey}:dynamic-weight`,
      scalesCacheKey: `${cacheKey}:dynamic-scales`,
      loadMs: fetchMs,
      convertMs,
      cacheHit: false,
    };
  })();
  dynamicI8BundleCache.set(cacheKey, promise);
  try {
    const result = await promise;
    dynamicI8BundleCache.set(cacheKey, result);
    return result;
  } catch (err) {
    dynamicI8BundleCache.delete(cacheKey);
    throw err;
  }
}

async function loadI8BundleFromFullEntry(entry, bundleBaseUrl) {
  const manifest = normalizeFullLinearEntry(entry);
  if (!manifest.i8_dp4a) {
    return loadDynamicI8BundleFromQ4(manifest, bundleBaseUrl);
  }
  const cacheKey = `${bundleBaseUrl}|${manifest.id || manifest.name || manifest.source_node}|prepacked-i8`;
  if (dynamicI8BundleCache.has(cacheKey)) {
    const cached = await dynamicI8BundleCache.get(cacheKey);
    return {
      ...cached,
      cacheHit: true,
      loadMs: 0,
      convertMs: 0,
    };
  }
  const promise = (async () => {
    const start = performance.now();
    const weightUrl = new URL(manifest.i8_dp4a.packed_u32, new URL(bundleBaseUrl, window.location.href)).toString();
    const scalesUrl = new URL(manifest.i8_dp4a.scales_f32, new URL(bundleBaseUrl, window.location.href)).toString();
    const [wBuf, scaleBuf] = await Promise.all([
      fetchArrayBuffer(weightUrl),
      fetchArrayBuffer(scalesUrl),
    ]);
    return {
      manifest: {
        id: manifest.id,
        name: manifest.name,
        source_node: manifest.source_node,
        shape: manifest.shape,
        i8_dp4a: manifest.i8_dp4a,
      },
      weight: new Uint32Array(wBuf),
      scales: new Float32Array(scaleBuf),
      weightCacheKey: weightUrl,
      scalesCacheKey: scalesUrl,
      loadMs: performance.now() - start,
      convertMs: 0,
      cacheHit: false,
      prepackedI8: true,
    };
  })();
  dynamicI8BundleCache.set(cacheKey, promise);
  try {
    const result = await promise;
    dynamicI8BundleCache.set(cacheKey, result);
    return result;
  } catch (err) {
    dynamicI8BundleCache.delete(cacheKey);
    throw err;
  }
}

async function loadFullTransformerAssetSet(fullManifest, baseUrl, doubleBlockCount = 5, singleBlockCount = 20) {
  const [imgIn, txtIn, finalLinear, doubleBlocks, singleBlocks, singleNorms] = await Promise.all([
    loadI8BundleFromFullEntry(findFullManifestLinear(fullManifest, "img_in"), baseUrl),
    loadI8BundleFromFullEntry(findFullManifestLinear(fullManifest, "txt_in"), baseUrl),
    loadI8BundleFromFullEntry(findFullManifestLinear(fullManifest, "final_layer.linear"), baseUrl),
    Promise.all(Array.from({length: doubleBlockCount}, async (_, blockIndex) => {
      const [
        imgQkv, txtQkv, imgProj, txtProj, imgMlp0, imgMlp2, txtMlp0, txtMlp2,
        imgNorm, txtNorm,
      ] = await Promise.all([
        loadI8BundleFromFullEntry(findFullManifestLinear(fullManifest, `double_blocks.${blockIndex}.img_attn.qkv`), baseUrl),
        loadI8BundleFromFullEntry(findFullManifestLinear(fullManifest, `double_blocks.${blockIndex}.txt_attn.qkv`), baseUrl),
        loadI8BundleFromFullEntry(findFullManifestLinear(fullManifest, `double_blocks.${blockIndex}.img_attn.proj`), baseUrl),
        loadI8BundleFromFullEntry(findFullManifestLinear(fullManifest, `double_blocks.${blockIndex}.txt_attn.proj`), baseUrl),
        loadI8BundleFromFullEntry(findFullManifestLinear(fullManifest, `double_blocks.${blockIndex}.img_mlp.0`), baseUrl),
        loadI8BundleFromFullEntry(findFullManifestLinear(fullManifest, `double_blocks.${blockIndex}.img_mlp.2`), baseUrl),
        loadI8BundleFromFullEntry(findFullManifestLinear(fullManifest, `double_blocks.${blockIndex}.txt_mlp.0`), baseUrl),
        loadI8BundleFromFullEntry(findFullManifestLinear(fullManifest, `double_blocks.${blockIndex}.txt_mlp.2`), baseUrl),
        loadQkNormScales(fullManifest, baseUrl, `double_blocks.${blockIndex}.img_attn.norm`),
        loadQkNormScales(fullManifest, baseUrl, `double_blocks.${blockIndex}.txt_attn.norm`),
      ]);
      return {blockIndex, imgQkv, txtQkv, imgProj, txtProj, imgMlp0, imgMlp2, txtMlp0, txtMlp2, imgNorm, txtNorm};
    })),
    Promise.all(Array.from({length: singleBlockCount}, async (_, blockIndex) => ({
      blockIndex,
      linear1: await loadI8BundleFromFullEntry(findFullManifestLinear(fullManifest, `single_blocks.${blockIndex}.linear1`), baseUrl),
      linear2: await loadI8BundleFromFullEntry(findFullManifestLinear(fullManifest, `single_blocks.${blockIndex}.linear2`), baseUrl),
    }))),
    Promise.all(Array.from({length: singleBlockCount}, (_, blockIndex) => loadQkNormScales(fullManifest, baseUrl, `single_blocks.${blockIndex}.norm`))),
  ]);
  return {imgIn, txtIn, finalLinear, doubleBlocks, singleBlocks, singleNorms};
}

function summarizeFullTransformerAssetSet(assetSet) {
  let linears = 0;
  let cacheHits = 0;
  let bytes = 0;
  let qkNorms = 0;
  const visit = (value) => {
    if (!value || typeof value !== "object") return;
    if (Array.isArray(value)) {
      for (const item of value) visit(item);
      return;
    }
    if (value.weight && value.scales && value.manifest) {
      linears += 1;
      if (value.cacheHit) cacheHits += 1;
      bytes += (value.weight.byteLength || 0) + (value.scales.byteLength || 0);
      return;
    }
    if (value.queryScale && value.keyScale) {
      qkNorms += 1;
      bytes += (value.queryScale.byteLength || 0) + (value.keyScale.byteLength || 0);
      return;
    }
    for (const child of Object.values(value)) visit(child);
  };
  visit(assetSet);
  return {
    linears,
    cacheHits,
    cacheMisses: Math.max(0, linears - cacheHits),
    qkNorms,
    bytes,
  };
}

async function prepareCustomFluxTransformerAssets(config = {}) {
  if (!config.fullManifest) {
    throw new Error("custom full transformer asset prepare requires fullManifest");
  }
  const baseUrl = config.bundleBaseUrl || "/runtime/custom_lowbit/full_transformer/";
  const doubleBlockCount = Math.max(1, Math.min(5, Math.trunc(Number(config.maxDoubleBlocks || config.doubleBlockCount || 5))));
  const singleBlockCount = Math.max(0, Math.min(20, Math.trunc(Number(config.maxSingleBlocks || config.singleBlockCount || 20))));
  const start = performance.now();
  const assets = await loadFullTransformerAssetSet(config.fullManifest, baseUrl, doubleBlockCount, singleBlockCount);
  const loadMs = performance.now() - start;
  return {
    verdict: "custom-flux-transformer-assets-prepared",
    load: {total_ms: loadMs},
    summary: {
      ...summarizeFullTransformerAssetSet(assets),
      doubleBlockCount,
      singleBlockCount,
    },
  };
}

async function runCustomTimestepModulationBench(config = {}) {
  if (!navigator.gpu) {
    throw new Error("navigator.gpu is not available");
  }
  const adapter = await navigator.gpu.requestAdapter({powerPreference: "high-performance"});
  if (!adapter) {
    throw new Error("WebGPU adapter is not available");
  }
  if (!adapter.features.has("shader-f16")) {
    throw new Error("WebGPU adapter does not expose shader-f16");
  }
  const deviceDescriptor = {requiredFeatures: ["shader-f16"]};
  if (adapter.limits && adapter.limits.maxComputeWorkgroupStorageSize >= 32768) {
    deviceDescriptor.requiredLimits = {maxComputeWorkgroupStorageSize: 32768};
  }
  const device = await adapter.requestDevice(deviceDescriptor);
  const fullManifest = config.manifest;
  const bundleBaseUrl = config.bundleBaseUrl || "/runtime/custom_lowbit/full_transformer/";
  const tileCols = Number(config.q4TileCols || 96);
  const timestep = Number(config.timestep ?? 1.0);
  const modId = modulationOutputId(config.modulation || config.modulationKind || "single");

  const timeInIn = findFullManifestLinear(fullManifest, "time_in.in_layer");
  const timeInOut = findFullManifestLinear(fullManifest, "time_in.out_layer");
  const modulation = findFullManifestLinear(fullManifest, modId);
  if (timeInIn.shape.K !== 256 || timeInIn.shape.N !== 3072 ||
      timeInOut.shape.K !== 3072 || timeInOut.shape.N !== 3072 ||
      modulation.shape.K !== 3072) {
    throw new Error(`unexpected modulation chain shapes: ${timeInIn.shape.K}x${timeInIn.shape.N}, ${timeInOut.shape.K}x${timeInOut.shape.N}, ${modulation.shape.K}x${modulation.shape.N}`);
  }

  const timestepBuffer = createBuffer(device, makeTimestepEmbeddingF16(timestep), GPUBufferUsage.STORAGE);
  const hiddenF32Buffer = createEmptyBuffer(device, 3072 * 4, GPUBufferUsage.STORAGE);
  const hiddenF16Buffer = createEmptyBuffer(device, 3072 * 2, GPUBufferUsage.STORAGE);
  const vecF32Buffer = createEmptyBuffer(device, 3072 * 4, GPUBufferUsage.STORAGE);
  const vecF16Buffer = createEmptyBuffer(device, 3072 * 2, GPUBufferUsage.STORAGE);
  const modF32Buffer = createEmptyBuffer(device, modulation.shape.N * 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);

  const stage0 = await createQ4LinearStage(device, timeInIn, bundleBaseUrl, timestepBuffer, hiddenF32Buffer, 1, tileCols);
  const siluStage = await createF32ToF16Stage(device, hiddenF32Buffer, hiddenF16Buffer, 3072, true);
  const stage1 = await createQ4LinearStage(device, timeInOut, bundleBaseUrl, hiddenF16Buffer, vecF32Buffer, 1, tileCols);
  const vecCastStage = await createF32ToF16Stage(device, vecF32Buffer, vecF16Buffer, 3072, true);
  const stage2 = await createQ4LinearStage(device, modulation, bundleBaseUrl, vecF16Buffer, modF32Buffer, 1, tileCols);

  async function dispatch() {
    const encoder = device.createCommandEncoder();
    let pass = encoder.beginComputePass();
    pass.setPipeline(stage0.pipeline);
    pass.setBindGroup(0, stage0.bindGroup);
    pass.dispatchWorkgroups(stage0.workgroupsX, stage0.workgroupsY);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(siluStage.pipeline);
    pass.setBindGroup(0, siluStage.bindGroup);
    pass.dispatchWorkgroups(siluStage.workgroupsX);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(stage1.pipeline);
    pass.setBindGroup(0, stage1.bindGroup);
    pass.dispatchWorkgroups(stage1.workgroupsX, stage1.workgroupsY);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(vecCastStage.pipeline);
    pass.setBindGroup(0, vecCastStage.bindGroup);
    pass.dispatchWorkgroups(vecCastStage.workgroupsX);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(stage2.pipeline);
    pass.setBindGroup(0, stage2.bindGroup);
    pass.dispatchWorkgroups(stage2.workgroupsX, stage2.workgroupsY);
    pass.end();

    device.queue.submit([encoder.finish()]);
    await device.queue.onSubmittedWorkDone();
  }

  for (let i = 0; i < Number(config.warmupRuns ?? 1); ++i) {
    await dispatch();
  }
  const times = [];
  for (let i = 0; i < Number(config.timedRuns ?? 3); ++i) {
    const start = performance.now();
    await dispatch();
    times.push(performance.now() - start);
  }

  let sample = null;
  const readbackSample = Number(config.readbackSample ?? 24);
  if (readbackSample > 0) {
    const values = await readFloat32Buffer(device, modF32Buffer, Math.min(readbackSample, modulation.shape.N));
    let finite = 0;
    let maxAbs = 0;
    for (const value of values) {
      if (Number.isFinite(value)) finite += 1;
      maxAbs = Math.max(maxAbs, Math.abs(value));
    }
    sample = {count: values.length, finite, max_abs: maxAbs, values: Array.from(values.slice(0, Math.min(12, values.length)))};
  }

  const medianMs = median(times);
  return {
    verdict: "custom-timestep-modulation-bench-completed",
    config: {
      timestep,
      modulation: modId,
      warmupRuns: Number(config.warmupRuns ?? 1),
      timedRuns: Number(config.timedRuns ?? 3),
      q4TileCols: tileCols,
    },
    stages: [
      {id: stage0.id, shape: stage0.shape},
      {id: "silu"},
      {id: stage1.id, shape: stage1.shape},
      {id: "cast_vec_f32_to_f16"},
      {id: stage2.id, shape: stage2.shape},
    ],
    timed_ms: times,
    summary: {
      median_dispatch_ms: medianMs,
    },
    sample,
  };
}

window.runCustomTimestepModulationBench = runCustomTimestepModulationBench;

async function runCustomSingleBlockQ4Bench(config = {}) {
  if (!navigator.gpu) {
    throw new Error("navigator.gpu is not available");
  }
  const adapter = await navigator.gpu.requestAdapter({powerPreference: "high-performance"});
  if (!adapter) {
    throw new Error("WebGPU adapter is not available");
  }
  if (!adapter.features.has("shader-f16")) {
    throw new Error("WebGPU adapter does not expose shader-f16");
  }
  const deviceDescriptor = {requiredFeatures: ["shader-f16"]};
  if (adapter.limits && adapter.limits.maxComputeWorkgroupStorageSize >= 32768) {
    deviceDescriptor.requiredLimits = {maxComputeWorkgroupStorageSize: 32768};
  }
  const device = await adapter.requestDevice(deviceDescriptor);
  const fullManifest = config.manifest;
  const bundleBaseUrl = config.bundleBaseUrl || "/runtime/custom_lowbit/full_transformer/";
  const blockIndex = Number(config.blockIndex ?? 0);
  const n = Number(config.n ?? 768);
  const inputK = 3072;
  const linear1M = 27648;
  const linear2K = 12288;
  const linear2M = 3072;
  const tileCols = Number(config.q4TileCols || 96);
  const textTokens = Math.max(0, Math.min(n, Number(config.textTokens ?? 512)));
  const imageTokens = Math.max(0, n - textTokens);
  const imageWidth = Math.max(1, Number(config.imageWidth ?? Math.round(Math.sqrt(Math.max(1, imageTokens)))));
  const useRope = config.rope !== false;

  const linear1 = findFullManifestLinear(fullManifest, `single_blocks.${blockIndex}.linear1`);
  const linear2 = findFullManifestLinear(fullManifest, `single_blocks.${blockIndex}.linear2`);
  const modulation = findFullManifestLinear(fullManifest, "single_stream_modulation.lin");
  if (linear1.shape.K !== inputK || linear1.shape.N !== linear1M || linear2.shape.K !== linear2K || linear2.shape.N !== linear2M) {
    throw new Error(`unexpected single block ${blockIndex} q4 shapes: linear1 ${linear1.shape.K}x${linear1.shape.N}, linear2 ${linear2.shape.K}x${linear2.shape.N}`);
  }
  const qk = await loadQkNormScales(fullManifest, bundleBaseUrl, `single_blocks.${blockIndex}.norm`);

  const timestepBuffer = createBuffer(device, makeTimestepEmbeddingF16(Number(config.timestep ?? 1.0)), GPUBufferUsage.STORAGE);
  const timeHiddenF32Buffer = createEmptyBuffer(device, 3072 * 4, GPUBufferUsage.STORAGE);
  const timeHiddenF16Buffer = createEmptyBuffer(device, 3072 * 2, GPUBufferUsage.STORAGE);
  const vecF32Buffer = createEmptyBuffer(device, 3072 * 4, GPUBufferUsage.STORAGE);
  const vecF16Buffer = createEmptyBuffer(device, 3072 * 2, GPUBufferUsage.STORAGE);
  const modF32Buffer = createEmptyBuffer(device, 9216 * 4, GPUBufferUsage.STORAGE);

  const xF32Buffer = createBuffer(device, buildInputF32(n, inputK), GPUBufferUsage.STORAGE);
  const xNormF16Buffer = createEmptyBuffer(device, n * inputK * 2, GPUBufferUsage.STORAGE);
  const linear1OutBuffer = createEmptyBuffer(device, n * linear1M * 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const qNormBuffer = createEmptyBuffer(device, n * 3072 * 4, GPUBufferUsage.STORAGE);
  const kNormBuffer = createEmptyBuffer(device, n * 3072 * 4, GPUBufferUsage.STORAGE);
  const attentionOutBuffer = createEmptyBuffer(device, n * 3072 * 4, GPUBufferUsage.STORAGE);
  const linear2InF32Buffer = createEmptyBuffer(device, n * linear2K * 4, GPUBufferUsage.STORAGE);
  const linear2InF16Buffer = createEmptyBuffer(device, n * linear2K * 2, GPUBufferUsage.STORAGE);
  const linear2OutBuffer = createEmptyBuffer(device, n * linear2M * 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const residualOutputBuffer = createEmptyBuffer(device, n * linear2M * 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const queryScaleBuffer = createBuffer(device, qk.queryScale, GPUBufferUsage.STORAGE);
  const keyScaleBuffer = createBuffer(device, qk.keyScale, GPUBufferUsage.STORAGE);
  const ropeFreqBuffer = useRope ? createBuffer(device, buildFluxRopeSinCos(n, textTokens, imageWidth), GPUBufferUsage.STORAGE) : null;

  const timeIn0 = findFullManifestLinear(fullManifest, "time_in.in_layer");
  const timeIn1 = findFullManifestLinear(fullManifest, "time_in.out_layer");
  const timeStage0 = await createQ4LinearStage(device, timeIn0, bundleBaseUrl, timestepBuffer, timeHiddenF32Buffer, 1, tileCols);
  const timeSiluStage = await createF32ToF16Stage(device, timeHiddenF32Buffer, timeHiddenF16Buffer, 3072, true);
  const timeStage1 = await createQ4LinearStage(device, timeIn1, bundleBaseUrl, timeHiddenF16Buffer, vecF32Buffer, 1, tileCols);
  const vecCastStage = await createF32ToF16Stage(device, vecF32Buffer, vecF16Buffer, 3072, true);
  const modStage = await createQ4LinearStage(device, modulation, bundleBaseUrl, vecF16Buffer, modF32Buffer, 1, tileCols);

  const preNormModule = device.createShaderModule({code: SINGLE_PRENORM_MOD_F16_SHADER});
  const qkNormModule = device.createShaderModule({code: useRope ? SINGLE_QK_NORM_ROPE_SHADER : SINGLE_QK_NORM_SHADER});
  const attentionModule = device.createShaderModule({code: SINGLE_ATTENTION_PRENORM_SHADER});
  const activationAttentionModule = device.createShaderModule({code: SINGLE_MLP_ACTIVATION_ATTENTION_SHADER});
  const residualModule = device.createShaderModule({code: SINGLE_RESIDUAL_GATE_SHADER});
  const preNormPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: preNormModule, entryPoint: "main"}});
  const qkNormPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: qkNormModule, entryPoint: "main"}});
  const attentionPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: attentionModule, entryPoint: "main"}});
  const activationPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: activationAttentionModule, entryPoint: "main"}});
  const linear2CastStage = await createF32ToF16Stage(device, linear2InF32Buffer, linear2InF16Buffer, n * linear2K, false);
  const linear1Stage = await createQ4LinearStage(device, linear1, bundleBaseUrl, xNormF16Buffer, linear1OutBuffer, n, tileCols);
  const linear2Stage = await createQ4LinearStage(device, linear2, bundleBaseUrl, linear2InF16Buffer, linear2OutBuffer, n, tileCols);
  const residualPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: residualModule, entryPoint: "main"}});

  const preNormParamsBuffer = createBuffer(device, new Uint32Array([n, inputK, 0, 0]), GPUBufferUsage.UNIFORM);
  const attentionParamsBuffer = createBuffer(device, new Uint32Array([n, linear1M, 24, 128, 9216, 3072, textTokens, imageWidth]), GPUBufferUsage.UNIFORM);
  const activationParamsBuffer = createBuffer(device, new Uint32Array([n, linear1M, linear2K, 3072, 9216, 9216, 0, 0]), GPUBufferUsage.UNIFORM);
  const residualParamsBuffer = createBuffer(device, new Uint32Array([n, linear2M, 0, 0]), GPUBufferUsage.UNIFORM);
  const modStride = 3072 * 4;

  const preNormBindGroup = device.createBindGroup({
    layout: preNormPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: xF32Buffer}},
      {binding: 1, resource: {buffer: modF32Buffer, offset: 0}},
      {binding: 2, resource: {buffer: modF32Buffer, offset: modStride}},
      {binding: 3, resource: {buffer: xNormF16Buffer}},
      {binding: 4, resource: {buffer: preNormParamsBuffer}},
    ],
  });
  const qkNormBindGroup = device.createBindGroup({
    layout: qkNormPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: linear1OutBuffer}},
      {binding: 1, resource: {buffer: queryScaleBuffer}},
      {binding: 2, resource: {buffer: keyScaleBuffer}},
      {binding: 3, resource: {buffer: qNormBuffer}},
      {binding: 4, resource: {buffer: kNormBuffer}},
      {binding: 5, resource: {buffer: attentionParamsBuffer}},
      ...(useRope ? [{binding: 6, resource: {buffer: ropeFreqBuffer}}] : []),
    ],
  });
  const attentionBindGroup = device.createBindGroup({
    layout: attentionPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: linear1OutBuffer}},
      {binding: 1, resource: {buffer: qNormBuffer}},
      {binding: 2, resource: {buffer: kNormBuffer}},
      {binding: 3, resource: {buffer: attentionOutBuffer}},
      {binding: 4, resource: {buffer: attentionParamsBuffer}},
    ],
  });
  const activationBindGroup = device.createBindGroup({
    layout: activationPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: linear1OutBuffer}},
      {binding: 1, resource: {buffer: attentionOutBuffer}},
      {binding: 2, resource: {buffer: linear2InF32Buffer}},
      {binding: 3, resource: {buffer: activationParamsBuffer}},
    ],
  });
  const residualBindGroup = device.createBindGroup({
    layout: residualPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: xF32Buffer}},
      {binding: 1, resource: {buffer: linear2OutBuffer}},
      {binding: 2, resource: {buffer: modF32Buffer, offset: modStride * 2}},
      {binding: 3, resource: {buffer: residualOutputBuffer}},
      {binding: 4, resource: {buffer: residualParamsBuffer}},
    ],
  });

  async function dispatch() {
    const encoder = device.createCommandEncoder();
    let pass = encoder.beginComputePass();
    pass.setPipeline(timeStage0.pipeline);
    pass.setBindGroup(0, timeStage0.bindGroup);
    pass.dispatchWorkgroups(timeStage0.workgroupsX, timeStage0.workgroupsY);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(timeSiluStage.pipeline);
    pass.setBindGroup(0, timeSiluStage.bindGroup);
    pass.dispatchWorkgroups(timeSiluStage.workgroupsX);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(timeStage1.pipeline);
    pass.setBindGroup(0, timeStage1.bindGroup);
    pass.dispatchWorkgroups(timeStage1.workgroupsX, timeStage1.workgroupsY);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(vecCastStage.pipeline);
    pass.setBindGroup(0, vecCastStage.bindGroup);
    pass.dispatchWorkgroups(vecCastStage.workgroupsX);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(modStage.pipeline);
    pass.setBindGroup(0, modStage.bindGroup);
    pass.dispatchWorkgroups(modStage.workgroupsX, modStage.workgroupsY);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(preNormPipeline);
    pass.setBindGroup(0, preNormBindGroup);
    pass.dispatchWorkgroups(n);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(linear1Stage.pipeline);
    pass.setBindGroup(0, linear1Stage.bindGroup);
    pass.dispatchWorkgroups(linear1Stage.workgroupsX, linear1Stage.workgroupsY);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(qkNormPipeline);
    pass.setBindGroup(0, qkNormBindGroup);
    pass.dispatchWorkgroups(n, 24);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(attentionPipeline);
    pass.setBindGroup(0, attentionBindGroup);
    pass.dispatchWorkgroups(n, 24);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(activationPipeline);
    pass.setBindGroup(0, activationBindGroup);
    pass.dispatchWorkgroups(Math.ceil(linear2K / 256), n);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(linear2CastStage.pipeline);
    pass.setBindGroup(0, linear2CastStage.bindGroup);
    pass.dispatchWorkgroups(linear2CastStage.workgroupsX);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(linear2Stage.pipeline);
    pass.setBindGroup(0, linear2Stage.bindGroup);
    pass.dispatchWorkgroups(linear2Stage.workgroupsX, linear2Stage.workgroupsY);
    pass.end();

    pass = encoder.beginComputePass();
    pass.setPipeline(residualPipeline);
    pass.setBindGroup(0, residualBindGroup);
    pass.dispatchWorkgroups(Math.ceil(linear2M / 256), n);
    pass.end();

    device.queue.submit([encoder.finish()]);
    await device.queue.onSubmittedWorkDone();
  }

  for (let i = 0; i < Number(config.warmupRuns ?? 1); ++i) {
    await dispatch();
  }
  const times = [];
  for (let i = 0; i < Number(config.timedRuns ?? 3); ++i) {
    const start = performance.now();
    await dispatch();
    times.push(performance.now() - start);
  }

  let sample = null;
  if (config.readbackSample) {
    const count = Math.min(Number(config.readbackSample), n * linear2M);
    const values = await readFloat32Buffer(device, residualOutputBuffer, count);
    let finite = 0;
    let maxAbs = 0;
    for (const value of values) {
      if (Number.isFinite(value)) finite += 1;
      maxAbs = Math.max(maxAbs, Math.abs(value));
    }
    sample = {count, finite, max_abs: maxAbs, values: Array.from(values.slice(0, Math.min(8, values.length)))};
  }

  const medianMs = median(times);
  const macs = n * inputK * linear1M + n * linear2K * linear2M;
  return {
    verdict: "custom-single-block-q4-bench-completed",
    config: {
      blockIndex,
      n,
      timestep: Number(config.timestep ?? 1.0),
      warmupRuns: Number(config.warmupRuns ?? 1),
      timedRuns: Number(config.timedRuns ?? 3),
      q4TileCols: tileCols,
      rope: useRope,
      textTokens,
      imageWidth,
    },
    layers: {
      modulation: {source_node: modulation.source_node, shape: modulation.shape},
      qkNorm: {id: qk.entry.id, shape: qk.entry.shape},
      linear1: {source_node: linear1.source_node, shape: linear1.shape},
      linear2: {source_node: linear2.source_node, shape: linear2.shape},
    },
    timed_ms: times,
    summary: {
      median_dispatch_ms: medianMs,
      effective_tmacs: macs / (medianMs / 1000) / 1e12,
    },
    sample,
  };
}

window.runCustomSingleBlockQ4Bench = runCustomSingleBlockQ4Bench;

async function runCustomSingleStreamMlpBench(config = {}) {
  if (!navigator.gpu) {
    throw new Error("navigator.gpu is not available");
  }
  const adapter = await navigator.gpu.requestAdapter({powerPreference: "high-performance"});
  if (!adapter) {
    throw new Error("WebGPU adapter is not available");
  }
  if (!adapter.features.has("shader-f16")) {
    throw new Error("WebGPU adapter does not expose shader-f16");
  }
  const wgslLanguageFeatures = navigator.gpu.wgslLanguageFeatures || new Set();
  if (!wgslLanguageFeatures.has("packed_4x8_integer_dot_product")) {
    throw new Error("WGSL packed_4x8_integer_dot_product is not available");
  }

  const deviceDescriptor = {requiredFeatures: ["shader-f16"]};
  if (adapter.limits && adapter.limits.maxComputeWorkgroupStorageSize >= 32768) {
    deviceDescriptor.requiredLimits = {maxComputeWorkgroupStorageSize: 32768};
  }
  const device = await adapter.requestDevice(deviceDescriptor);
  const linear1BaseUrl = config.linear1BaseUrl || "/linear1/";
  const linear2BaseUrl = config.linear2BaseUrl || "/linear2/";
  const blockBaseUrl = config.blockBaseUrl || "/block/";
  const useRealAttention = Boolean(config.realAttention);
  const useDynamicI8FromQ4 = Boolean(config.fullManifest && config.dynamicI8FromQ4);
  const blockIndex = Number(config.blockIndex ?? 0);
  const loadStart = performance.now();
  let linear1;
  let linear2;
  let block;
  if (useDynamicI8FromQ4) {
    [linear1, linear2, block] = await Promise.all([
      loadI8BundleFromFullEntry(
        findFullManifestLinear(config.fullManifest, `single_blocks.${blockIndex}.linear1`),
        config.bundleBaseUrl || "/runtime/custom_lowbit/full_transformer/",
      ),
      loadI8BundleFromFullEntry(
        findFullManifestLinear(config.fullManifest, `single_blocks.${blockIndex}.linear2`),
        config.bundleBaseUrl || "/runtime/custom_lowbit/full_transformer/",
      ),
      useRealAttention
        ? loadQkNormScales(
            config.fullManifest,
            config.bundleBaseUrl || "/runtime/custom_lowbit/full_transformer/",
            `single_blocks.${blockIndex}.norm`,
          )
        : Promise.resolve(null),
    ]);
  } else {
    [linear1, linear2, block] = await Promise.all([
      loadI8Bundle(linear1BaseUrl),
      loadI8Bundle(linear2BaseUrl),
      useRealAttention ? loadSingleBlockBundle(blockBaseUrl) : Promise.resolve(null),
    ]);
  }
  const loadMs = performance.now() - loadStart;

  const n = Number(config.n ?? 768);
  const inputK = linear1.manifest.shape.K;
  const linear1M = linear1.manifest.shape.N;
  const linear2K = linear2.manifest.shape.K;
  const linear2M = linear2.manifest.shape.N;
  const linear1KWords = linear1.manifest.i8_dp4a.k_words;
  const linear2KWords = linear2.manifest.i8_dp4a.k_words;
  const linear1TileCols = Number(config.linear1TileCols ?? 256);
  const linear2TileCols = Number(config.linear2TileCols ?? 256);
  const linear1WChunkCols = Number(config.linear1WChunkCols ?? 64);
  const linear2WChunkCols = Number(config.linear2WChunkCols ?? 64);
  const fuseActivationQuant = Boolean(config.fuseActivationQuant);
  const linear1OutputF16 = config.linear1OutputF16 !== false;
  const useRealModulation = Boolean(config.fullManifest && config.realModulation);
  const correctSingleBlock = Boolean(config.correctSingleBlock || useRealModulation);
  const fuseResidualDot = correctSingleBlock && config.fuseResidualDot !== false;
  const singleComputePass = config.singleComputePass !== false;
  const useRope = Boolean(config.rope);
  const useTiledAttention = useRealAttention && config.tiledAttention !== false;
  const attentionTileKeys = Number(config.attentionTileKeys ?? 8);
  const attentionQueryRows = Number(config.attentionQueryRows ?? 16);
  const textTokens = Math.max(0, Math.min(n, Number(config.textTokens ?? 512)));
  const imageTokens = Math.max(0, n - textTokens);
  const imageWidth = Math.max(1, Number(config.imageWidth ?? Math.round(Math.sqrt(Math.max(1, imageTokens)))));
  const rowsPerWorkgroup = 32;
  if (useRealAttention && n > 4608) {
    throw new Error("single-stream real-attention benchmark currently supports n <= 4608");
  }

  if (inputK !== 3072 || linear1M !== 27648 || linear2K !== 12288 || linear2M !== 3072) {
    throw new Error(`unexpected single-stream MLP shapes: linear1 K=${inputK} M=${linear1M}, linear2 K=${linear2K} M=${linear2M}`);
  }

  const inputF32 = buildInputF32(n, inputK);
  const modShift = new Float32Array(inputK);
  const modScale = new Float32Array(inputK);
  const modGate = new Float32Array(inputK);
  modGate.fill(1);
  const xF32Buffer = createBuffer(device, inputF32, GPUBufferUsage.STORAGE);
  const modF32Buffer = useRealModulation
    ? createEmptyBuffer(device, 9216 * 4, GPUBufferUsage.STORAGE)
    : null;
  const modShiftBuffer = correctSingleBlock && !useRealModulation ? createBuffer(device, modShift, GPUBufferUsage.STORAGE) : null;
  const modScaleBuffer = correctSingleBlock && !useRealModulation ? createBuffer(device, modScale, GPUBufferUsage.STORAGE) : null;
  const modGateBuffer = correctSingleBlock && !useRealModulation ? createBuffer(device, modGate, GPUBufferUsage.STORAGE) : null;
  const xPackedBuffer = createEmptyBuffer(device, n * linear1KWords * 4, GPUBufferUsage.STORAGE);
  const xScalesBuffer = createEmptyBuffer(device, n * 4, GPUBufferUsage.STORAGE);
  const linear1WBuffer = createBuffer(device, linear1.weight, GPUBufferUsage.STORAGE);
  const linear1ScaleBuffer = createBuffer(device, linear1.scales, GPUBufferUsage.STORAGE);
  const linear1OutBuffer = createEmptyBuffer(
    device,
    n * linear1M * (linear1OutputF16 ? 2 : 4),
    GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
  );
  const attentionOutBuffer = useRealAttention
    ? createEmptyBuffer(device, n * 3072 * 4, GPUBufferUsage.STORAGE)
    : null;
  const qNormBuffer = useRealAttention
    ? createEmptyBuffer(device, n * 3072 * 4, GPUBufferUsage.STORAGE)
    : null;
  const kNormBuffer = useRealAttention
    ? createEmptyBuffer(device, n * 3072 * 4, GPUBufferUsage.STORAGE)
    : null;
  const queryScaleBuffer = useRealAttention
    ? createBuffer(device, block.queryScale, GPUBufferUsage.STORAGE)
    : null;
  const keyScaleBuffer = useRealAttention
    ? createBuffer(device, block.keyScale, GPUBufferUsage.STORAGE)
    : null;
  const ropeFreqBuffer = useRealAttention && useRope
    ? createBuffer(device, buildFluxRopeSinCos(n, textTokens, imageWidth), GPUBufferUsage.STORAGE)
    : null;
  const linear2InBuffer = fuseActivationQuant
    ? null
    : createEmptyBuffer(device, n * linear2K * 4, GPUBufferUsage.STORAGE);
  const linear2InPackedBuffer = createEmptyBuffer(device, n * linear2KWords * 4, GPUBufferUsage.STORAGE);
  const linear2InScalesBuffer = createEmptyBuffer(device, n * 4, GPUBufferUsage.STORAGE);
  const linear2WBuffer = createBuffer(device, linear2.weight, GPUBufferUsage.STORAGE);
  const linear2ScaleBuffer = createBuffer(device, linear2.scales, GPUBufferUsage.STORAGE);
  const outputBuffer = fuseResidualDot
    ? null
    : createEmptyBuffer(device, n * linear2M * 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const residualOutputBuffer = correctSingleBlock
    ? createEmptyBuffer(device, n * linear2M * 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC)
    : null;

  const quantModule = device.createShaderModule({code: QUANTIZE_X_F32_SHADER});
  const preNormQuantModule = device.createShaderModule({code: SINGLE_PRENORM_MOD_QUANT_SHADER});
  const dot1Module = device.createShaderModule({
    code: makeI8ScaledDotShader32xWide(linear1TileCols, linear1WChunkCols, linear1OutputF16),
  });
  const activationModule = device.createShaderModule({code: SINGLE_MLP_ACTIVATION_SHADER});
  const activationAttentionModule = device.createShaderModule({code: SINGLE_MLP_ACTIVATION_ATTENTION_SHADER});
  const qkNormCode = useRope ? SINGLE_QK_NORM_ROPE_SHADER : SINGLE_QK_NORM_SHADER;
  const attentionCode = useTiledAttention
    ? makeSingleAttentionTiledShader(attentionTileKeys, attentionQueryRows)
    : SINGLE_ATTENTION_PRENORM_SHADER;
  const qkNormModule = device.createShaderModule({code: linear1OutputF16 ? makeLinear1F16ConsumerShader(qkNormCode) : qkNormCode});
  const attentionModule = device.createShaderModule({code: linear1OutputF16 ? makeLinear1F16ConsumerShader(attentionCode) : attentionCode});
  const activateQuantModule = device.createShaderModule({code: SINGLE_MLP_ACTIVATE_QUANT_SHADER});
  const activateAttentionQuantModule = device.createShaderModule({
    code: linear1OutputF16
      ? makeLinear1F16ConsumerShader(SINGLE_MLP_ACTIVATE_ATTENTION_QUANT_SHADER)
      : SINGLE_MLP_ACTIVATE_ATTENTION_QUANT_SHADER,
  });
  const dot2Module = device.createShaderModule({
    code: fuseResidualDot
      ? makeI8ScaledDotResidualShader32xWide(linear2TileCols, linear2WChunkCols)
      : makeI8ScaledDotShader32xWide(linear2TileCols, linear2WChunkCols),
  });
  const residualModule = device.createShaderModule({code: SINGLE_RESIDUAL_GATE_SHADER});
  const quantPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: quantModule, entryPoint: "main"}});
  const preNormQuantPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: preNormQuantModule, entryPoint: "main"}});
  const dot1Pipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: dot1Module, entryPoint: "main"}});
  const activationPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: activationModule, entryPoint: "main"}});
  const activationAttentionPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: activationAttentionModule, entryPoint: "main"}});
  const qkNormPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: qkNormModule, entryPoint: "main"}});
  const attentionPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: attentionModule, entryPoint: "main"}});
  const activateQuantPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: activateQuantModule, entryPoint: "main"}});
  const activateAttentionQuantPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: activateAttentionQuantModule, entryPoint: "main"}});
  const dot2Pipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: dot2Module, entryPoint: "main"}});
  const residualPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: residualModule, entryPoint: "main"}});

  let timeStage0 = null;
  let timeSiluStage = null;
  let timeStage1 = null;
  let vecCastStage = null;
  let modStage = null;
  if (useRealModulation) {
    const baseUrl = config.bundleBaseUrl || "/runtime/custom_lowbit/full_transformer/";
    const timestepBuffer = createBuffer(device, makeTimestepEmbeddingF16(Number(config.timestep ?? 1.0)), GPUBufferUsage.STORAGE);
    const timeHiddenF32Buffer = createEmptyBuffer(device, 3072 * 4, GPUBufferUsage.STORAGE);
    const timeHiddenF16Buffer = createEmptyBuffer(device, 3072 * 2, GPUBufferUsage.STORAGE);
    const vecF32Buffer = createEmptyBuffer(device, 3072 * 4, GPUBufferUsage.STORAGE);
    const vecF16Buffer = createEmptyBuffer(device, 3072 * 2, GPUBufferUsage.STORAGE);
    timeStage0 = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "time_in.in_layer"), baseUrl, timestepBuffer, timeHiddenF32Buffer, 1, 96);
    timeSiluStage = await createF32ToF16Stage(device, timeHiddenF32Buffer, timeHiddenF16Buffer, 3072, true);
    timeStage1 = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "time_in.out_layer"), baseUrl, timeHiddenF16Buffer, vecF32Buffer, 1, 96);
    vecCastStage = await createF32ToF16Stage(device, vecF32Buffer, vecF16Buffer, 3072, true);
    modStage = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "single_stream_modulation.lin"), baseUrl, vecF16Buffer, modF32Buffer, 1, 96);
  }

  const quantXParamsBuffer = createBuffer(device, new Uint32Array([n, inputK, linear1M, linear1KWords]), GPUBufferUsage.UNIFORM);
  const dot1ParamsBuffer = createBuffer(device, new Uint32Array([n, inputK, linear1M, linear1KWords, 0, 0, 0, 0]), GPUBufferUsage.UNIFORM);
  const activationParamsBuffer = createBuffer(
    device,
    new Uint32Array([n, linear1M, linear2K, 3072, 9216, 9216, 0, 0]),
    GPUBufferUsage.UNIFORM,
  );
  const attentionParamsBuffer = useRealAttention
    ? createBuffer(device, new Uint32Array([n, linear1M, 24, 128, 9216, 3072, textTokens, imageWidth]), GPUBufferUsage.UNIFORM)
    : null;
  const activateQuantParamsBuffer = createBuffer(
    device,
    new Uint32Array([n, linear1M, linear2K, 3072, 9216, 9216, linear2KWords, 0]),
    GPUBufferUsage.UNIFORM,
  );
  const quantHiddenParamsBuffer = createBuffer(device, new Uint32Array([n, linear2K, linear2M, linear2KWords]), GPUBufferUsage.UNIFORM);
  const dot2ParamsBuffer = createBuffer(device, new Uint32Array([n, linear2K, linear2M, linear2KWords, 0, 0, 0, 0]), GPUBufferUsage.UNIFORM);
  const modStride = inputK * 4;
  const modShiftResource = useRealModulation ? {buffer: modF32Buffer, offset: 0} : {buffer: modShiftBuffer};
  const modScaleResource = useRealModulation ? {buffer: modF32Buffer, offset: modStride} : {buffer: modScaleBuffer};
  const modGateResource = useRealModulation ? {buffer: modF32Buffer, offset: modStride * 2} : {buffer: modGateBuffer};

  const quantXBindGroup = device.createBindGroup({
    layout: quantPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: xF32Buffer}},
      {binding: 1, resource: {buffer: xPackedBuffer}},
      {binding: 2, resource: {buffer: xScalesBuffer}},
      {binding: 3, resource: {buffer: quantXParamsBuffer}},
    ],
  });
  const preNormQuantBindGroup = correctSingleBlock
    ? device.createBindGroup({
        layout: preNormQuantPipeline.getBindGroupLayout(0),
        entries: [
          {binding: 0, resource: {buffer: xF32Buffer}},
          {binding: 1, resource: modShiftResource},
          {binding: 2, resource: modScaleResource},
          {binding: 3, resource: {buffer: xPackedBuffer}},
          {binding: 4, resource: {buffer: xScalesBuffer}},
          {binding: 5, resource: {buffer: quantXParamsBuffer}},
        ],
      })
    : null;
  const dot1BindGroup = device.createBindGroup({
    layout: dot1Pipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: xPackedBuffer}},
      {binding: 1, resource: {buffer: linear1WBuffer}},
      {binding: 2, resource: {buffer: xScalesBuffer}},
      {binding: 3, resource: {buffer: linear1ScaleBuffer}},
      {binding: 4, resource: {buffer: linear1OutBuffer}},
      {binding: 5, resource: {buffer: dot1ParamsBuffer}},
    ],
  });
  const attentionBindGroup = useRealAttention
    ? device.createBindGroup({
        layout: attentionPipeline.getBindGroupLayout(0),
        entries: [
          {binding: 0, resource: {buffer: linear1OutBuffer}},
          {binding: 1, resource: {buffer: qNormBuffer}},
          {binding: 2, resource: {buffer: kNormBuffer}},
          {binding: 3, resource: {buffer: attentionOutBuffer}},
          {binding: 4, resource: {buffer: attentionParamsBuffer}},
        ],
      })
    : null;
  const qkNormBindGroup = useRealAttention
    ? device.createBindGroup({
        layout: qkNormPipeline.getBindGroupLayout(0),
        entries: [
          {binding: 0, resource: {buffer: linear1OutBuffer}},
          {binding: 1, resource: {buffer: queryScaleBuffer}},
          {binding: 2, resource: {buffer: keyScaleBuffer}},
          {binding: 3, resource: {buffer: qNormBuffer}},
          {binding: 4, resource: {buffer: kNormBuffer}},
          {binding: 5, resource: {buffer: attentionParamsBuffer}},
          ...(useRope ? [{binding: 6, resource: {buffer: ropeFreqBuffer}}] : []),
        ],
      })
    : null;
  const activationBindGroup = fuseActivationQuant
    ? null
    : device.createBindGroup({
        layout: useRealAttention
          ? activationAttentionPipeline.getBindGroupLayout(0)
          : activationPipeline.getBindGroupLayout(0),
        entries: useRealAttention
          ? [
              {binding: 0, resource: {buffer: linear1OutBuffer}},
              {binding: 1, resource: {buffer: attentionOutBuffer}},
              {binding: 2, resource: {buffer: linear2InBuffer}},
              {binding: 3, resource: {buffer: activationParamsBuffer}},
            ]
          : [
              {binding: 0, resource: {buffer: linear1OutBuffer}},
              {binding: 1, resource: {buffer: linear2InBuffer}},
              {binding: 2, resource: {buffer: activationParamsBuffer}},
            ],
      });
  const activateQuantBindGroup = fuseActivationQuant
    ? (useRealAttention ? null : device.createBindGroup({
        layout: activateQuantPipeline.getBindGroupLayout(0),
        entries: [
          {binding: 0, resource: {buffer: linear1OutBuffer}},
          {binding: 1, resource: {buffer: linear2InPackedBuffer}},
          {binding: 2, resource: {buffer: linear2InScalesBuffer}},
          {binding: 3, resource: {buffer: activateQuantParamsBuffer}},
        ],
      }))
    : null;
  const activateAttentionQuantBindGroup = fuseActivationQuant && useRealAttention
    ? device.createBindGroup({
        layout: activateAttentionQuantPipeline.getBindGroupLayout(0),
        entries: [
          {binding: 0, resource: {buffer: linear1OutBuffer}},
          {binding: 1, resource: {buffer: attentionOutBuffer}},
          {binding: 2, resource: {buffer: linear2InPackedBuffer}},
          {binding: 3, resource: {buffer: linear2InScalesBuffer}},
          {binding: 4, resource: {buffer: activateQuantParamsBuffer}},
        ],
      })
    : null;
  const quantHiddenBindGroup = fuseActivationQuant
    ? null
    : device.createBindGroup({
        layout: quantPipeline.getBindGroupLayout(0),
        entries: [
          {binding: 0, resource: {buffer: linear2InBuffer}},
          {binding: 1, resource: {buffer: linear2InPackedBuffer}},
          {binding: 2, resource: {buffer: linear2InScalesBuffer}},
          {binding: 3, resource: {buffer: quantHiddenParamsBuffer}},
        ],
      });
  const dot2BindGroup = device.createBindGroup({
    layout: dot2Pipeline.getBindGroupLayout(0),
    entries: fuseResidualDot ? [
      {binding: 0, resource: {buffer: linear2InPackedBuffer}},
      {binding: 1, resource: {buffer: linear2WBuffer}},
      {binding: 2, resource: {buffer: linear2InScalesBuffer}},
      {binding: 3, resource: {buffer: linear2ScaleBuffer}},
      {binding: 4, resource: {buffer: residualOutputBuffer}},
      {binding: 5, resource: {buffer: dot2ParamsBuffer}},
      {binding: 6, resource: {buffer: xF32Buffer}},
      {binding: 7, resource: modGateResource},
    ] : [
      {binding: 0, resource: {buffer: linear2InPackedBuffer}},
      {binding: 1, resource: {buffer: linear2WBuffer}},
      {binding: 2, resource: {buffer: linear2InScalesBuffer}},
      {binding: 3, resource: {buffer: linear2ScaleBuffer}},
      {binding: 4, resource: {buffer: outputBuffer}},
      {binding: 5, resource: {buffer: dot2ParamsBuffer}},
    ],
  });
  const residualParamsBuffer = correctSingleBlock && !fuseResidualDot
    ? createBuffer(device, new Uint32Array([n, linear2M, 0, 0]), GPUBufferUsage.UNIFORM)
    : null;
  const residualBindGroup = correctSingleBlock && !fuseResidualDot
    ? device.createBindGroup({
        layout: residualPipeline.getBindGroupLayout(0),
        entries: [
          {binding: 0, resource: {buffer: xF32Buffer}},
          {binding: 1, resource: {buffer: outputBuffer}},
          {binding: 2, resource: modGateResource},
          {binding: 3, resource: {buffer: residualOutputBuffer}},
          {binding: 4, resource: {buffer: residualParamsBuffer}},
        ],
      })
    : null;

  async function dispatch() {
    const encoder = device.createCommandEncoder();
    let pass = encoder.beginComputePass();
    const finishPass = () => {
      if (pass) {
        pass.end();
        pass = null;
      }
    };
    const beginPass = () => {
      if (!pass) pass = encoder.beginComputePass();
      return pass;
    };
    const runStage = (pipeline, bindGroup, x, y = undefined) => {
      const stagePass = beginPass();
      stagePass.setPipeline(pipeline);
      stagePass.setBindGroup(0, bindGroup);
      if (y === undefined) stagePass.dispatchWorkgroups(x);
      else stagePass.dispatchWorkgroups(x, y);
      if (!singleComputePass) finishPass();
    };
    if (useRealModulation) {
      runStage(timeStage0.pipeline, timeStage0.bindGroup, timeStage0.workgroupsX, timeStage0.workgroupsY);
      runStage(timeSiluStage.pipeline, timeSiluStage.bindGroup, timeSiluStage.workgroupsX);
      runStage(timeStage1.pipeline, timeStage1.bindGroup, timeStage1.workgroupsX, timeStage1.workgroupsY);
      runStage(vecCastStage.pipeline, vecCastStage.bindGroup, vecCastStage.workgroupsX);
      runStage(modStage.pipeline, modStage.bindGroup, modStage.workgroupsX, modStage.workgroupsY);
    }

    runStage(correctSingleBlock ? preNormQuantPipeline : quantPipeline, correctSingleBlock ? preNormQuantBindGroup : quantXBindGroup, n);
    runStage(dot1Pipeline, dot1BindGroup, Math.ceil(linear1M / linear1TileCols), Math.ceil(n / rowsPerWorkgroup));

    if (useRealAttention) {
      runStage(qkNormPipeline, qkNormBindGroup, n, 24);
      runStage(attentionPipeline, attentionBindGroup, useTiledAttention ? Math.ceil(n / attentionQueryRows) : n, 24);
    }

    if (fuseActivationQuant) {
      runStage(useRealAttention ? activateAttentionQuantPipeline : activateQuantPipeline, useRealAttention ? activateAttentionQuantBindGroup : activateQuantBindGroup, n);
    } else {
      runStage(useRealAttention ? activationAttentionPipeline : activationPipeline, activationBindGroup, Math.ceil(linear2K / 256), n);
      runStage(quantPipeline, quantHiddenBindGroup, n);
    }

    runStage(dot2Pipeline, dot2BindGroup, Math.ceil(linear2M / linear2TileCols), Math.ceil(n / rowsPerWorkgroup));

    if (correctSingleBlock && !fuseResidualDot) {
      runStage(residualPipeline, residualBindGroup, Math.ceil(linear2M / 256), n);
    }

    finishPass();
    device.queue.submit([encoder.finish()]);
    await device.queue.onSubmittedWorkDone();
  }

  for (let i = 0; i < Number(config.warmupRuns ?? 1); ++i) {
    await dispatch();
  }
  const times = [];
  for (let i = 0; i < Number(config.timedRuns ?? 3); ++i) {
    const start = performance.now();
    await dispatch();
    times.push(performance.now() - start);
  }

  let sample = null;
  if (config.readbackSample) {
    const count = Math.min(Number(config.readbackSample), n * linear2M);
    const values = await readFloat32Buffer(device, correctSingleBlock ? residualOutputBuffer : outputBuffer, count);
    let finite = 0;
    let maxAbs = 0;
    for (const value of values) {
      if (Number.isFinite(value)) finite += 1;
      maxAbs = Math.max(maxAbs, Math.abs(value));
    }
    sample = {count, finite, max_abs: maxAbs, values: Array.from(values.slice(0, Math.min(8, values.length)))};
  }

  const medianMs = median(times);
  const macs = n * inputK * linear1M + n * linear2K * linear2M;
  return {
    verdict: "custom-single-stream-mlp-bench-completed",
    config: {
      n,
      warmupRuns: Number(config.warmupRuns ?? 1),
      timedRuns: Number(config.timedRuns ?? 3),
      linear1TileCols,
      linear2TileCols,
      linear1WChunkCols,
      linear2WChunkCols,
      linear1OutputF16,
      singleComputePass,
      fuseActivationQuant,
      fuseResidualDot,
      correctSingleBlock,
      dynamicI8FromQ4: useDynamicI8FromQ4,
      realModulation: useRealModulation,
      blockIndex,
      realAttention: useRealAttention,
      rope: useRope,
      tiledAttention: useTiledAttention,
      attentionTileKeys,
      attentionQueryRows,
      textTokens,
      imageWidth,
    },
    layers: {
      linear1: {source_node: linear1.manifest.source_node, shape: linear1.manifest.shape},
      linear2: {source_node: linear2.manifest.source_node, shape: linear2.manifest.shape},
    },
    load: {
      total_ms: loadMs,
      linear1_convert_ms: linear1.convertMs ?? null,
      linear2_convert_ms: linear2.convertMs ?? null,
      linear1_fetch_ms: linear1.loadMs ?? null,
      linear2_fetch_ms: linear2.loadMs ?? null,
      linear1_cache_hit: linear1.cacheHit ?? null,
      linear2_cache_hit: linear2.cacheHit ?? null,
      linear1_prepacked_i8: linear1.prepackedI8 ?? false,
      linear2_prepacked_i8: linear2.prepackedI8 ?? false,
    },
    adapter_features: Array.from(adapter.features).sort(),
    wgsl_language_features: Array.from(wgslLanguageFeatures).sort(),
    timed_ms: times,
    summary: {
      median_dispatch_ms: medianMs,
      effective_tmacs: macs / (medianMs / 1000) / 1e12,
    },
    sample,
  };
}

window.runCustomSingleStreamMlpBench = runCustomSingleStreamMlpBench;

async function runCustomSingleStreamBlocksLoopBench(config = {}) {
  if (!config.fullManifest) {
    throw new Error("single blocks loop benchmark requires fullManifest");
  }
  const baseUrl = config.bundleBaseUrl || "/runtime/custom_lowbit/full_transformer/";
  const startBlockIndex = Math.max(0, Number(config.blockIndex ?? 0));
  const blockCount = Math.max(1, Math.min(20 - startBlockIndex, Number(config.blockCount ?? 4)));
  const blockIndices = Array.from({length: blockCount}, (_, offset) => startBlockIndex + offset);
  const loadStart = performance.now();
  const [linears, norms] = await Promise.all([
    Promise.all(blockIndices.map(async (blockIndex) => ({
      blockIndex,
      linear1: await loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `single_blocks.${blockIndex}.linear1`), baseUrl),
      linear2: await loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `single_blocks.${blockIndex}.linear2`), baseUrl),
    }))),
    Promise.all(blockIndices.map((blockIndex) => loadQkNormScales(config.fullManifest, baseUrl, `single_blocks.${blockIndex}.norm`))),
  ]);
  const loadMs = performance.now() - loadStart;

  const n = Number(config.n ?? 768);
  const inputK = 3072;
  const linear1M = 27648;
  const linear2K = 12288;
  const linear2M = 3072;
  const linear1KWords = linears[0].linear1.manifest.i8_dp4a.k_words;
  const linear2KWords = linears[0].linear2.manifest.i8_dp4a.k_words;
  const linear1TileCols = Number(config.linear1TileCols ?? 256);
  const linear2TileCols = Number(config.linear2TileCols ?? 256);
  const linear1WChunkCols = Number(config.linear1WChunkCols ?? 64);
  const linear2WChunkCols = Number(config.linear2WChunkCols ?? 64);
  const linear1OutputF16 = config.linear1OutputF16 !== false;
  const attentionTileKeys = Number(config.attentionTileKeys ?? 8);
  const attentionQueryRows = Number(config.attentionQueryRows ?? 16);
  const textTokens = Math.max(0, Math.min(n, Number(config.textTokens ?? 512)));
  const imageTokens = Math.max(0, n - textTokens);
  const imageWidth = Math.max(1, Number(config.imageWidth ?? Math.round(Math.sqrt(Math.max(1, imageTokens)))));
  const rowsPerWorkgroup = 32;
  if (n > 4608) {
    throw new Error("single blocks loop benchmark currently supports n <= 4608");
  }

  const inputF32 = buildInputF32(n, inputK);
  const stateBytes = n * inputK * 4;
  const stateA = createBuffer(device, inputF32, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST);
  const stateB = createEmptyBuffer(device, stateBytes, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST);
  const modF32Buffer = createEmptyBuffer(device, 9216 * 4, GPUBufferUsage.STORAGE);
  const xPackedBuffer = createEmptyBuffer(device, n * linear1KWords * 4, GPUBufferUsage.STORAGE);
  const xScalesBuffer = createEmptyBuffer(device, n * 4, GPUBufferUsage.STORAGE);
  const linear1OutBuffer = createEmptyBuffer(
    device,
    n * linear1M * (linear1OutputF16 ? 2 : 4),
    GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
  );
  const attentionOutBuffer = createEmptyBuffer(device, n * inputK * 4, GPUBufferUsage.STORAGE);
  const qNormBuffer = createEmptyBuffer(device, n * inputK * 4, GPUBufferUsage.STORAGE);
  const kNormBuffer = createEmptyBuffer(device, n * inputK * 4, GPUBufferUsage.STORAGE);
  const ropeFreqBuffer = createBuffer(device, buildFluxRopeSinCos(n, textTokens, imageWidth), GPUBufferUsage.STORAGE);
  const linear2InPackedBuffer = createEmptyBuffer(device, n * linear2KWords * 4, GPUBufferUsage.STORAGE);
  const linear2InScalesBuffer = createEmptyBuffer(device, n * 4, GPUBufferUsage.STORAGE);

  const preNormQuantModule = device.createShaderModule({code: SINGLE_PRENORM_MOD_QUANT_SHADER});
  const dot1Module = device.createShaderModule({
    code: makeI8ScaledDotShader32xWide(linear1TileCols, linear1WChunkCols, linear1OutputF16),
  });
  const qkNormCode = SINGLE_QK_NORM_ROPE_SHADER;
  const attentionCode = makeSingleAttentionTiledShader(attentionTileKeys, attentionQueryRows);
  const qkNormModule = device.createShaderModule({code: linear1OutputF16 ? makeLinear1F16ConsumerShader(qkNormCode) : qkNormCode});
  const attentionModule = device.createShaderModule({code: linear1OutputF16 ? makeLinear1F16ConsumerShader(attentionCode) : attentionCode});
  const activateAttentionQuantModule = device.createShaderModule({
    code: linear1OutputF16
      ? makeLinear1F16ConsumerShader(SINGLE_MLP_ACTIVATE_ATTENTION_QUANT_SHADER)
      : SINGLE_MLP_ACTIVATE_ATTENTION_QUANT_SHADER,
  });
  const dot2Module = device.createShaderModule({
    code: makeI8ScaledDotResidualShader32xWide(linear2TileCols, linear2WChunkCols),
  });
  const preNormQuantPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: preNormQuantModule, entryPoint: "main"}});
  const dot1Pipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: dot1Module, entryPoint: "main"}});
  const qkNormPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: qkNormModule, entryPoint: "main"}});
  const attentionPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: attentionModule, entryPoint: "main"}});
  const activateAttentionQuantPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: activateAttentionQuantModule, entryPoint: "main"}});
  const dot2Pipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: dot2Module, entryPoint: "main"}});

  const timestepBuffer = createBuffer(device, makeTimestepEmbeddingF16(Number(config.timestep ?? 1.0)), GPUBufferUsage.STORAGE);
  const timeHiddenF32Buffer = createEmptyBuffer(device, 3072 * 4, GPUBufferUsage.STORAGE);
  const timeHiddenF16Buffer = createEmptyBuffer(device, 3072 * 2, GPUBufferUsage.STORAGE);
  const vecF32Buffer = createEmptyBuffer(device, 3072 * 4, GPUBufferUsage.STORAGE);
  const vecF16Buffer = createEmptyBuffer(device, 3072 * 2, GPUBufferUsage.STORAGE);
  const timeStage0 = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "time_in.in_layer"), baseUrl, timestepBuffer, timeHiddenF32Buffer, 1, 96);
  const timeSiluStage = await createF32ToF16Stage(device, timeHiddenF32Buffer, timeHiddenF16Buffer, 3072, true);
  const timeStage1 = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "time_in.out_layer"), baseUrl, timeHiddenF16Buffer, vecF32Buffer, 1, 96);
  const vecCastStage = await createF32ToF16Stage(device, vecF32Buffer, vecF16Buffer, 3072, true);
  const modStage = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "single_stream_modulation.lin"), baseUrl, vecF16Buffer, modF32Buffer, 1, 96);

  const quantXParamsBuffer = createBuffer(device, new Uint32Array([n, inputK, linear1M, linear1KWords]), GPUBufferUsage.UNIFORM);
  const dot1ParamsBuffer = createBuffer(device, new Uint32Array([n, inputK, linear1M, linear1KWords, 0, 0, 0, 0]), GPUBufferUsage.UNIFORM);
  const attentionParamsBuffer = createBuffer(device, new Uint32Array([n, linear1M, 24, 128, 9216, inputK, textTokens, imageWidth]), GPUBufferUsage.UNIFORM);
  const activateQuantParamsBuffer = createBuffer(device, new Uint32Array([n, linear1M, linear2K, inputK, 9216, 9216, linear2KWords, 0]), GPUBufferUsage.UNIFORM);
  const dot2ParamsBuffer = createBuffer(device, new Uint32Array([n, linear2K, linear2M, linear2KWords, 0, 0, 0, 0]), GPUBufferUsage.UNIFORM);
  const modStride = inputK * 4;
  const modShiftResource = {buffer: modF32Buffer, offset: 0};
  const modScaleResource = {buffer: modF32Buffer, offset: modStride};
  const modGateResource = {buffer: modF32Buffer, offset: modStride * 2};

  const makePreNormBindGroup = (stateBuffer) => device.createBindGroup({
    layout: preNormQuantPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: stateBuffer}},
      {binding: 1, resource: modShiftResource},
      {binding: 2, resource: modScaleResource},
      {binding: 3, resource: {buffer: xPackedBuffer}},
      {binding: 4, resource: {buffer: xScalesBuffer}},
      {binding: 5, resource: {buffer: quantXParamsBuffer}},
    ],
  });
  const preNormBindGroups = [makePreNormBindGroup(stateA), makePreNormBindGroup(stateB)];
  const attentionBindGroup = device.createBindGroup({
    layout: attentionPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: linear1OutBuffer}},
      {binding: 1, resource: {buffer: qNormBuffer}},
      {binding: 2, resource: {buffer: kNormBuffer}},
      {binding: 3, resource: {buffer: attentionOutBuffer}},
      {binding: 4, resource: {buffer: attentionParamsBuffer}},
    ],
  });
  const activateAttentionQuantBindGroup = device.createBindGroup({
    layout: activateAttentionQuantPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: linear1OutBuffer}},
      {binding: 1, resource: {buffer: attentionOutBuffer}},
      {binding: 2, resource: {buffer: linear2InPackedBuffer}},
      {binding: 3, resource: {buffer: linear2InScalesBuffer}},
      {binding: 4, resource: {buffer: activateQuantParamsBuffer}},
    ],
  });

  const blockStages = [];
  for (let i = 0; i < blockCount; ++i) {
    const {blockIndex, linear1, linear2} = linears[i];
    const norm = norms[i];
    const linear1WBuffer = createBuffer(device, linear1.weight, GPUBufferUsage.STORAGE);
    const linear1ScaleBuffer = createBuffer(device, linear1.scales, GPUBufferUsage.STORAGE);
    const linear2WBuffer = createBuffer(device, linear2.weight, GPUBufferUsage.STORAGE);
    const linear2ScaleBuffer = createBuffer(device, linear2.scales, GPUBufferUsage.STORAGE);
    const queryScaleBuffer = createBuffer(device, norm.queryScale, GPUBufferUsage.STORAGE);
    const keyScaleBuffer = createBuffer(device, norm.keyScale, GPUBufferUsage.STORAGE);
    const dot1BindGroup = device.createBindGroup({
      layout: dot1Pipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: xPackedBuffer}},
        {binding: 1, resource: {buffer: linear1WBuffer}},
        {binding: 2, resource: {buffer: xScalesBuffer}},
        {binding: 3, resource: {buffer: linear1ScaleBuffer}},
        {binding: 4, resource: {buffer: linear1OutBuffer}},
        {binding: 5, resource: {buffer: dot1ParamsBuffer}},
      ],
    });
    const qkNormBindGroup = device.createBindGroup({
      layout: qkNormPipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: linear1OutBuffer}},
        {binding: 1, resource: {buffer: queryScaleBuffer}},
        {binding: 2, resource: {buffer: keyScaleBuffer}},
        {binding: 3, resource: {buffer: qNormBuffer}},
        {binding: 4, resource: {buffer: kNormBuffer}},
        {binding: 5, resource: {buffer: attentionParamsBuffer}},
        {binding: 6, resource: {buffer: ropeFreqBuffer}},
      ],
    });
    const makeDot2BindGroup = (inputBuffer, outputBuffer) => device.createBindGroup({
      layout: dot2Pipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: linear2InPackedBuffer}},
        {binding: 1, resource: {buffer: linear2WBuffer}},
        {binding: 2, resource: {buffer: linear2InScalesBuffer}},
        {binding: 3, resource: {buffer: linear2ScaleBuffer}},
        {binding: 4, resource: {buffer: outputBuffer}},
        {binding: 5, resource: {buffer: dot2ParamsBuffer}},
        {binding: 6, resource: {buffer: inputBuffer}},
        {binding: 7, resource: modGateResource},
      ],
    });
    blockStages.push({
      blockIndex,
      dot1BindGroup,
      qkNormBindGroup,
      dot2BindGroups: [makeDot2BindGroup(stateA, stateB), makeDot2BindGroup(stateB, stateA)],
    });
  }

  const runStage = (pass, pipeline, bindGroup, x, y = undefined) => {
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    if (y === undefined) pass.dispatchWorkgroups(x);
    else pass.dispatchWorkgroups(x, y);
  };

  async function dispatch() {
    const encoder = device.createCommandEncoder();
    const pass = encoder.beginComputePass();
    runStage(pass, timeStage0.pipeline, timeStage0.bindGroup, timeStage0.workgroupsX, timeStage0.workgroupsY);
    runStage(pass, timeSiluStage.pipeline, timeSiluStage.bindGroup, timeSiluStage.workgroupsX);
    runStage(pass, timeStage1.pipeline, timeStage1.bindGroup, timeStage1.workgroupsX, timeStage1.workgroupsY);
    runStage(pass, vecCastStage.pipeline, vecCastStage.bindGroup, vecCastStage.workgroupsX);
    runStage(pass, modStage.pipeline, modStage.bindGroup, modStage.workgroupsX, modStage.workgroupsY);
    for (let i = 0; i < blockStages.length; ++i) {
      const stage = blockStages[i];
      const ping = i & 1;
      runStage(pass, preNormQuantPipeline, preNormBindGroups[ping], n);
      runStage(pass, dot1Pipeline, stage.dot1BindGroup, Math.ceil(linear1M / linear1TileCols), Math.ceil(n / rowsPerWorkgroup));
      runStage(pass, qkNormPipeline, stage.qkNormBindGroup, n, 24);
      runStage(pass, attentionPipeline, attentionBindGroup, Math.ceil(n / attentionQueryRows), 24);
      runStage(pass, activateAttentionQuantPipeline, activateAttentionQuantBindGroup, n);
      runStage(pass, dot2Pipeline, stage.dot2BindGroups[ping], Math.ceil(linear2M / linear2TileCols), Math.ceil(n / rowsPerWorkgroup));
    }
    pass.end();
    device.queue.submit([encoder.finish()]);
    await device.queue.onSubmittedWorkDone();
  }

  for (let i = 0; i < Number(config.warmupRuns ?? 1); ++i) {
    await dispatch();
  }
  const times = [];
  for (let i = 0; i < Number(config.timedRuns ?? 3); ++i) {
    const start = performance.now();
    await dispatch();
    times.push(performance.now() - start);
  }

  let sample = null;
  if (config.readbackSample) {
    const finalBuffer = blockCount % 2 === 0 ? stateA : stateB;
    const count = Math.min(Number(config.readbackSample), n * inputK);
    const values = await readFloat32Buffer(device, finalBuffer, count);
    let finite = 0;
    let maxAbs = 0;
    for (const value of values) {
      if (Number.isFinite(value)) finite += 1;
      maxAbs = Math.max(maxAbs, Math.abs(value));
    }
    sample = {count, finite, max_abs: maxAbs, values: Array.from(values.slice(0, Math.min(8, values.length)))};
  }

  const medianMs = median(times);
  const macsPerBlock = n * inputK * linear1M + n * linear2K * linear2M;
  return {
    verdict: "custom-single-stream-blocks-loop-completed",
    config: {
      startBlockIndex,
      blockCount,
      blockIndices,
      n,
      warmupRuns: Number(config.warmupRuns ?? 1),
      timedRuns: Number(config.timedRuns ?? 3),
      linear1TileCols,
      linear2TileCols,
      linear1WChunkCols,
      linear2WChunkCols,
      linear1OutputF16,
      attentionTileKeys,
      attentionQueryRows,
      textTokens,
      imageWidth,
    },
    load: {total_ms: loadMs},
    summary: {
      median_dispatch_ms: medianMs,
      per_block_median_ms: medianMs / blockCount,
      effective_tmacs: (macsPerBlock * blockCount) / (medianMs / 1000) / 1e12,
    },
    timed_ms: times,
    sample,
  };
}

window.runCustomSingleStreamBlocksLoopBench = runCustomSingleStreamBlocksLoopBench;

async function runCustomDoubleStreamBlockBench(config = {}) {
  if (!config.fullManifest) {
    throw new Error("double-stream block benchmark requires fullManifest");
  }
  const baseUrl = config.bundleBaseUrl || "/runtime/custom_lowbit/full_transformer/";
  const blockIndex = Math.max(0, Math.min(4, Number(config.blockIndex ?? 0)));
  const imgRows = Number(config.imageTokens ?? 256);
  const txtRows = Number(config.textTokens ?? 512);
  const jointRows = imgRows + txtRows;
  const hidden = 3072;
  const qkvM = 9216;
  const mlp1M = 18432;
  const mlpK = 9216;
  const kWordsHidden = hidden / 4;
  const kWordsMlp = mlpK / 4;
  const maxRows = Math.max(imgRows, txtRows);
  const imageWidth = Math.max(1, Number(config.imageWidth ?? Math.round(Math.sqrt(Math.max(1, imgRows)))));
  const linearTileCols = Number(config.linearTileCols ?? 128);
  const projTileCols = Number(config.projTileCols ?? 128);
  const wChunkCols = Number(config.wChunkCols ?? 64);
  const attentionTileKeys = Number(config.attentionTileKeys ?? 8);
  const attentionQueryRows = Number(config.attentionQueryRows ?? 16);

  const loadStart = performance.now();
  const [
    imgQkv, txtQkv, imgProj, txtProj, imgMlp0, imgMlp2, txtMlp0, txtMlp2,
    imgNorm, txtNorm,
  ] = await Promise.all([
    loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.img_attn.qkv`), baseUrl),
    loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.txt_attn.qkv`), baseUrl),
    loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.img_attn.proj`), baseUrl),
    loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.txt_attn.proj`), baseUrl),
    loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.img_mlp.0`), baseUrl),
    loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.img_mlp.2`), baseUrl),
    loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.txt_mlp.0`), baseUrl),
    loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.txt_mlp.2`), baseUrl),
    loadQkNormScales(config.fullManifest, baseUrl, `double_blocks.${blockIndex}.img_attn.norm`),
    loadQkNormScales(config.fullManifest, baseUrl, `double_blocks.${blockIndex}.txt_attn.norm`),
  ]);
  const loadMs = performance.now() - loadStart;

  const imgInput = buildInputF32(imgRows, hidden);
  const txtInput = buildInputF32(txtRows, hidden);
  const imgState0 = createBuffer(device, imgInput, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const txtState0 = createBuffer(device, txtInput, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const imgState1 = createEmptyBuffer(device, imgRows * hidden * 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const txtState1 = createEmptyBuffer(device, txtRows * hidden * 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const imgState2 = createEmptyBuffer(device, imgRows * hidden * 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const txtState2 = createEmptyBuffer(device, txtRows * hidden * 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const modImgBuffer = createEmptyBuffer(device, 18432 * 4, GPUBufferUsage.STORAGE);
  const modTxtBuffer = createEmptyBuffer(device, 18432 * 4, GPUBufferUsage.STORAGE);
  const packedHiddenBuffer = createEmptyBuffer(device, maxRows * kWordsHidden * 4, GPUBufferUsage.STORAGE);
  const scalesBuffer = createEmptyBuffer(device, maxRows * 4, GPUBufferUsage.STORAGE);
  const packedMlpBuffer = createEmptyBuffer(device, maxRows * kWordsMlp * 4, GPUBufferUsage.STORAGE);
  const mlpScalesBuffer = createEmptyBuffer(device, maxRows * 4, GPUBufferUsage.STORAGE);
  const imgQkvBuffer = createEmptyBuffer(device, imgRows * qkvM * 2, GPUBufferUsage.STORAGE);
  const txtQkvBuffer = createEmptyBuffer(device, txtRows * qkvM * 2, GPUBufferUsage.STORAGE);
  const qNormBuffer = createEmptyBuffer(device, jointRows * hidden * 4, GPUBufferUsage.STORAGE);
  const kNormBuffer = createEmptyBuffer(device, jointRows * hidden * 4, GPUBufferUsage.STORAGE);
  const vBuffer = createEmptyBuffer(device, jointRows * hidden * 4, GPUBufferUsage.STORAGE);
  const attentionOutBuffer = createEmptyBuffer(device, jointRows * hidden * 4, GPUBufferUsage.STORAGE);
  const mlp0Buffer = createEmptyBuffer(device, maxRows * mlp1M * 2, GPUBufferUsage.STORAGE);
  const ropeFreqBuffer = createBuffer(device, buildFluxRopeFrequencies(), GPUBufferUsage.STORAGE);

  const preNormQuantModule = device.createShaderModule({code: SINGLE_PRENORM_MOD_QUANT_SHADER});
  const quantOffsetModule = device.createShaderModule({code: QUANTIZE_X_F32_OFFSET_SHADER});
  const dotHiddenToQkvModule = device.createShaderModule({code: makeI8ScaledDotShader32xWide(linearTileCols, wChunkCols, true)});
  const qkvNormModule = device.createShaderModule({code: DOUBLE_QKV_NORM_ROPE_SHADER});
  const attentionModule = device.createShaderModule({code: makeJointAttentionTiledShader(attentionTileKeys, attentionQueryRows)});
  const dotProjModule = device.createShaderModule({code: makeI8ScaledDotResidualShader32xWide(projTileCols, wChunkCols)});
  const dotMlp0Module = device.createShaderModule({code: makeI8ScaledDotShader32xWide(linearTileCols, wChunkCols, true)});
  const activateMlpModule = device.createShaderModule({code: makeLinear1F16ConsumerShader(SINGLE_MLP_ACTIVATE_QUANT_SHADER)});
  const dotMlp2Module = device.createShaderModule({code: makeI8ScaledDotResidualShader32xWide(projTileCols, wChunkCols)});
  const preNormQuantPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: preNormQuantModule, entryPoint: "main"}});
  const quantOffsetPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: quantOffsetModule, entryPoint: "main"}});
  const dotHiddenToQkvPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: dotHiddenToQkvModule, entryPoint: "main"}});
  const qkvNormPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: qkvNormModule, entryPoint: "main"}});
  const attentionPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: attentionModule, entryPoint: "main"}});
  const dotProjPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: dotProjModule, entryPoint: "main"}});
  const dotMlp0Pipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: dotMlp0Module, entryPoint: "main"}});
  const activateMlpPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: activateMlpModule, entryPoint: "main"}});
  const dotMlp2Pipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: dotMlp2Module, entryPoint: "main"}});

  const timestepBuffer = createBuffer(device, makeTimestepEmbeddingF16(Number(config.timestep ?? 1.0)), GPUBufferUsage.STORAGE);
  const timeHiddenF32Buffer = createEmptyBuffer(device, hidden * 4, GPUBufferUsage.STORAGE);
  const timeHiddenF16Buffer = createEmptyBuffer(device, hidden * 2, GPUBufferUsage.STORAGE);
  const vecF32Buffer = createEmptyBuffer(device, hidden * 4, GPUBufferUsage.STORAGE);
  const vecF16Buffer = createEmptyBuffer(device, hidden * 2, GPUBufferUsage.STORAGE);
  const timeStage0 = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "time_in.in_layer"), baseUrl, timestepBuffer, timeHiddenF32Buffer, 1, 96);
  const timeSiluStage = await createF32ToF16Stage(device, timeHiddenF32Buffer, timeHiddenF16Buffer, hidden, true);
  const timeStage1 = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "time_in.out_layer"), baseUrl, timeHiddenF16Buffer, vecF32Buffer, 1, 96);
  const vecCastStage = await createF32ToF16Stage(device, vecF32Buffer, vecF16Buffer, hidden, true);
  const modImgStage = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "double_stream_modulation_img.lin"), baseUrl, vecF16Buffer, modImgBuffer, 1, 96);
  const modTxtStage = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "double_stream_modulation_txt.lin"), baseUrl, vecF16Buffer, modTxtBuffer, 1, 96);

  const makeLinearBuffers = (bundle) => ({
    w: createImmutableBuffer(device, bundle.weight, GPUBufferUsage.STORAGE, bundle.weightCacheKey),
    s: createImmutableBuffer(device, bundle.scales, GPUBufferUsage.STORAGE, bundle.scalesCacheKey),
  });
  const weights = {
    imgQkv: makeLinearBuffers(imgQkv),
    txtQkv: makeLinearBuffers(txtQkv),
    imgProj: makeLinearBuffers(imgProj),
    txtProj: makeLinearBuffers(txtProj),
    imgMlp0: makeLinearBuffers(imgMlp0),
    imgMlp2: makeLinearBuffers(imgMlp2),
    txtMlp0: makeLinearBuffers(txtMlp0),
    txtMlp2: makeLinearBuffers(txtMlp2),
  };
  const imgQueryScaleBuffer = createBuffer(device, imgNorm.queryScale, GPUBufferUsage.STORAGE);
  const imgKeyScaleBuffer = createBuffer(device, imgNorm.keyScale, GPUBufferUsage.STORAGE);
  const txtQueryScaleBuffer = createBuffer(device, txtNorm.queryScale, GPUBufferUsage.STORAGE);
  const txtKeyScaleBuffer = createBuffer(device, txtNorm.keyScale, GPUBufferUsage.STORAGE);

  const makeParams = (values) => {
    const typed = new Uint32Array(values);
    return createImmutableBuffer(device, typed, GPUBufferUsage.UNIFORM, `${scratchKey}|params|${Array.from(typed).join(",")}`);
  };
  const params = {
    imgPre: makeParams([imgRows, hidden, qkvM, kWordsHidden]),
    txtPre: makeParams([txtRows, hidden, qkvM, kWordsHidden]),
    imgDotQkv: makeParams([imgRows, hidden, qkvM, kWordsHidden, 0, 0, 0, 0]),
    txtDotQkv: makeParams([txtRows, hidden, qkvM, kWordsHidden, 0, 0, 0, 0]),
    imgQkvNorm: makeParams([imgRows, qkvM, 24, 128, hidden, txtRows, txtRows, imageWidth]),
    txtQkvNorm: makeParams([txtRows, qkvM, 24, 128, hidden, 0, txtRows, imageWidth]),
    attention: makeParams([jointRows, 24, 128, hidden]),
    imgQuantAttn: makeParams([imgRows, hidden, kWordsHidden, txtRows, hidden]),
    txtQuantAttn: makeParams([txtRows, hidden, kWordsHidden, 0, hidden]),
    imgProj: makeParams([imgRows, hidden, hidden, kWordsHidden, 0, 0, 0, 0]),
    txtProj: makeParams([txtRows, hidden, hidden, kWordsHidden, 0, 0, 0, 0]),
    imgMlpPre: makeParams([imgRows, hidden, mlp1M, kWordsHidden]),
    txtMlpPre: makeParams([txtRows, hidden, mlp1M, kWordsHidden]),
    imgMlp0: makeParams([imgRows, hidden, mlp1M, kWordsHidden, 0, 0, 0, 0]),
    txtMlp0: makeParams([txtRows, hidden, mlp1M, kWordsHidden, 0, 0, 0, 0]),
    imgAct: makeParams([imgRows, mlp1M, mlpK, 0, 0, mlpK, kWordsMlp, 0]),
    txtAct: makeParams([txtRows, mlp1M, mlpK, 0, 0, mlpK, kWordsMlp, 0]),
    imgMlp2: makeParams([imgRows, mlpK, hidden, kWordsMlp, 0, 0, 0, 0]),
    txtMlp2: makeParams([txtRows, mlpK, hidden, kWordsMlp, 0, 0, 0, 0]),
  };

  const hiddenModOffsets = {
    mod1Shift: 0,
    mod1Scale: hidden * 4,
    mod1Gate: hidden * 8,
    mod2Shift: hidden * 12,
    mod2Scale: hidden * 16,
    mod2Gate: hidden * 20,
  };
  const res = (buffer, offset = 0) => offset ? {buffer, offset} : {buffer};

  const makePreNormBind = (state, modBuffer, shiftOffset, scaleOffset, paramsBuffer) => device.createBindGroup({
    layout: preNormQuantPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: state}},
      {binding: 1, resource: res(modBuffer, shiftOffset)},
      {binding: 2, resource: res(modBuffer, scaleOffset)},
      {binding: 3, resource: {buffer: packedHiddenBuffer}},
      {binding: 4, resource: {buffer: scalesBuffer}},
      {binding: 5, resource: {buffer: paramsBuffer}},
    ],
  });
  const makeDotBind = (pipeline, packed, packedScales, w, wScales, out, paramsBuffer) => device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: packed}},
      {binding: 1, resource: {buffer: w}},
      {binding: 2, resource: {buffer: packedScales}},
      {binding: 3, resource: {buffer: wScales}},
      {binding: 4, resource: {buffer: out}},
      {binding: 5, resource: {buffer: paramsBuffer}},
    ],
  });
  const makeResidualDotBind = (pipeline, packed, packedScales, w, wScales, out, paramsBuffer, residual, gate) => device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: packed}},
      {binding: 1, resource: {buffer: w}},
      {binding: 2, resource: {buffer: packedScales}},
      {binding: 3, resource: {buffer: wScales}},
      {binding: 4, resource: {buffer: out}},
      {binding: 5, resource: {buffer: paramsBuffer}},
      {binding: 6, resource: {buffer: residual}},
      {binding: 7, resource: gate},
    ],
  });

  const bind = {
    imgQkvPre: makePreNormBind(imgState0, modImgBuffer, hiddenModOffsets.mod1Shift, hiddenModOffsets.mod1Scale, params.imgPre),
    txtQkvPre: makePreNormBind(txtState0, modTxtBuffer, hiddenModOffsets.mod1Shift, hiddenModOffsets.mod1Scale, params.txtPre),
    imgQkvDot: makeDotBind(dotHiddenToQkvPipeline, packedHiddenBuffer, scalesBuffer, weights.imgQkv.w, weights.imgQkv.s, imgQkvBuffer, params.imgDotQkv),
    txtQkvDot: makeDotBind(dotHiddenToQkvPipeline, packedHiddenBuffer, scalesBuffer, weights.txtQkv.w, weights.txtQkv.s, txtQkvBuffer, params.txtDotQkv),
    imgQkvNorm: device.createBindGroup({
      layout: qkvNormPipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: imgQkvBuffer}},
        {binding: 1, resource: {buffer: imgQueryScaleBuffer}},
        {binding: 2, resource: {buffer: imgKeyScaleBuffer}},
        {binding: 3, resource: {buffer: qNormBuffer}},
        {binding: 4, resource: {buffer: kNormBuffer}},
        {binding: 5, resource: {buffer: vBuffer}},
        {binding: 6, resource: {buffer: params.imgQkvNorm}},
        {binding: 7, resource: {buffer: ropeFreqBuffer}},
      ],
    }),
    txtQkvNorm: device.createBindGroup({
      layout: qkvNormPipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: txtQkvBuffer}},
        {binding: 1, resource: {buffer: txtQueryScaleBuffer}},
        {binding: 2, resource: {buffer: txtKeyScaleBuffer}},
        {binding: 3, resource: {buffer: qNormBuffer}},
        {binding: 4, resource: {buffer: kNormBuffer}},
        {binding: 5, resource: {buffer: vBuffer}},
        {binding: 6, resource: {buffer: params.txtQkvNorm}},
        {binding: 7, resource: {buffer: ropeFreqBuffer}},
      ],
    }),
    attention: device.createBindGroup({
      layout: attentionPipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: vBuffer}},
        {binding: 1, resource: {buffer: qNormBuffer}},
        {binding: 2, resource: {buffer: kNormBuffer}},
        {binding: 3, resource: {buffer: attentionOutBuffer}},
        {binding: 4, resource: {buffer: params.attention}},
      ],
    }),
  };
  bind.imgQuantAttn = device.createBindGroup({
    layout: quantOffsetPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: attentionOutBuffer}},
      {binding: 1, resource: {buffer: packedHiddenBuffer}},
      {binding: 2, resource: {buffer: scalesBuffer}},
      {binding: 3, resource: {buffer: params.imgQuantAttn}},
    ],
  });
  bind.txtQuantAttn = device.createBindGroup({
    layout: quantOffsetPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: attentionOutBuffer}},
      {binding: 1, resource: {buffer: packedHiddenBuffer}},
      {binding: 2, resource: {buffer: scalesBuffer}},
      {binding: 3, resource: {buffer: params.txtQuantAttn}},
    ],
  });
  bind.imgProj = makeResidualDotBind(dotProjPipeline, packedHiddenBuffer, scalesBuffer, weights.imgProj.w, weights.imgProj.s, imgState1, params.imgProj, imgState0, res(modImgBuffer, hiddenModOffsets.mod1Gate));
  bind.txtProj = makeResidualDotBind(dotProjPipeline, packedHiddenBuffer, scalesBuffer, weights.txtProj.w, weights.txtProj.s, txtState1, params.txtProj, txtState0, res(modTxtBuffer, hiddenModOffsets.mod1Gate));
  bind.imgMlpPre = makePreNormBind(imgState1, modImgBuffer, hiddenModOffsets.mod2Shift, hiddenModOffsets.mod2Scale, params.imgMlpPre);
  bind.txtMlpPre = makePreNormBind(txtState1, modTxtBuffer, hiddenModOffsets.mod2Shift, hiddenModOffsets.mod2Scale, params.txtMlpPre);
  bind.imgMlp0 = makeDotBind(dotMlp0Pipeline, packedHiddenBuffer, scalesBuffer, weights.imgMlp0.w, weights.imgMlp0.s, mlp0Buffer, params.imgMlp0);
  bind.txtMlp0 = makeDotBind(dotMlp0Pipeline, packedHiddenBuffer, scalesBuffer, weights.txtMlp0.w, weights.txtMlp0.s, mlp0Buffer, params.txtMlp0);
  bind.imgAct = device.createBindGroup({
    layout: activateMlpPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: mlp0Buffer}},
      {binding: 1, resource: {buffer: packedMlpBuffer}},
      {binding: 2, resource: {buffer: mlpScalesBuffer}},
      {binding: 3, resource: {buffer: params.imgAct}},
    ],
  });
  bind.txtAct = device.createBindGroup({
    layout: activateMlpPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: mlp0Buffer}},
      {binding: 1, resource: {buffer: packedMlpBuffer}},
      {binding: 2, resource: {buffer: mlpScalesBuffer}},
      {binding: 3, resource: {buffer: params.txtAct}},
    ],
  });
  bind.imgMlp2 = makeResidualDotBind(dotMlp2Pipeline, packedMlpBuffer, mlpScalesBuffer, weights.imgMlp2.w, weights.imgMlp2.s, imgState2, params.imgMlp2, imgState1, res(modImgBuffer, hiddenModOffsets.mod2Gate));
  bind.txtMlp2 = makeResidualDotBind(dotMlp2Pipeline, packedMlpBuffer, mlpScalesBuffer, weights.txtMlp2.w, weights.txtMlp2.s, txtState2, params.txtMlp2, txtState1, res(modTxtBuffer, hiddenModOffsets.mod2Gate));

  const runStage = (pass, pipeline, bindGroup, x, y = undefined) => {
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    if (y === undefined) pass.dispatchWorkgroups(x);
    else pass.dispatchWorkgroups(x, y);
  };

  async function dispatch() {
    const encoder = device.createCommandEncoder();
    const pass = encoder.beginComputePass();
    runStage(pass, timeStage0.pipeline, timeStage0.bindGroup, timeStage0.workgroupsX, timeStage0.workgroupsY);
    runStage(pass, timeSiluStage.pipeline, timeSiluStage.bindGroup, timeSiluStage.workgroupsX);
    runStage(pass, timeStage1.pipeline, timeStage1.bindGroup, timeStage1.workgroupsX, timeStage1.workgroupsY);
    runStage(pass, vecCastStage.pipeline, vecCastStage.bindGroup, vecCastStage.workgroupsX);
    runStage(pass, modImgStage.pipeline, modImgStage.bindGroup, modImgStage.workgroupsX, modImgStage.workgroupsY);
    runStage(pass, modTxtStage.pipeline, modTxtStage.bindGroup, modTxtStage.workgroupsX, modTxtStage.workgroupsY);

    runStage(pass, preNormQuantPipeline, bind.imgQkvPre, imgRows);
    runStage(pass, dotHiddenToQkvPipeline, bind.imgQkvDot, Math.ceil(qkvM / linearTileCols), Math.ceil(imgRows / 32));
    runStage(pass, preNormQuantPipeline, bind.txtQkvPre, txtRows);
    runStage(pass, dotHiddenToQkvPipeline, bind.txtQkvDot, Math.ceil(qkvM / linearTileCols), Math.ceil(txtRows / 32));
    runStage(pass, qkvNormPipeline, bind.txtQkvNorm, txtRows, 24);
    runStage(pass, qkvNormPipeline, bind.imgQkvNorm, imgRows, 24);
    runStage(pass, attentionPipeline, bind.attention, Math.ceil(jointRows / attentionQueryRows), 24);

    runStage(pass, quantOffsetPipeline, bind.imgQuantAttn, imgRows);
    runStage(pass, dotProjPipeline, bind.imgProj, Math.ceil(hidden / projTileCols), Math.ceil(imgRows / 32));
    runStage(pass, quantOffsetPipeline, bind.txtQuantAttn, txtRows);
    runStage(pass, dotProjPipeline, bind.txtProj, Math.ceil(hidden / projTileCols), Math.ceil(txtRows / 32));

    runStage(pass, preNormQuantPipeline, bind.imgMlpPre, imgRows);
    runStage(pass, dotMlp0Pipeline, bind.imgMlp0, Math.ceil(mlp1M / linearTileCols), Math.ceil(imgRows / 32));
    runStage(pass, activateMlpPipeline, bind.imgAct, imgRows);
    runStage(pass, dotMlp2Pipeline, bind.imgMlp2, Math.ceil(hidden / projTileCols), Math.ceil(imgRows / 32));

    runStage(pass, preNormQuantPipeline, bind.txtMlpPre, txtRows);
    runStage(pass, dotMlp0Pipeline, bind.txtMlp0, Math.ceil(mlp1M / linearTileCols), Math.ceil(txtRows / 32));
    runStage(pass, activateMlpPipeline, bind.txtAct, txtRows);
    runStage(pass, dotMlp2Pipeline, bind.txtMlp2, Math.ceil(hidden / projTileCols), Math.ceil(txtRows / 32));

    pass.end();
    device.queue.submit([encoder.finish()]);
    await device.queue.onSubmittedWorkDone();
  }

  for (let i = 0; i < Number(config.warmupRuns ?? 1); ++i) {
    await dispatch();
  }
  const times = [];
  for (let i = 0; i < Number(config.timedRuns ?? 3); ++i) {
    const start = performance.now();
    await dispatch();
    times.push(performance.now() - start);
  }

  let sample = null;
  if (config.readbackSample) {
    const count = Math.min(Number(config.readbackSample), imgRows * hidden);
    const values = await readFloat32Buffer(device, imgState2, count);
    let finite = 0;
    let maxAbs = 0;
    for (const value of values) {
      if (Number.isFinite(value)) finite += 1;
      maxAbs = Math.max(maxAbs, Math.abs(value));
    }
    sample = {count, finite, max_abs: maxAbs, values: Array.from(values.slice(0, Math.min(8, values.length)))};
  }

  const medianMs = median(times);
  const macs =
    imgRows * hidden * qkvM + txtRows * hidden * qkvM +
    imgRows * hidden * hidden + txtRows * hidden * hidden +
    imgRows * hidden * mlp1M + txtRows * hidden * mlp1M +
    imgRows * mlpK * hidden + txtRows * mlpK * hidden;
  return {
    verdict: "custom-double-stream-block-completed",
    config: {
      blockIndex,
      imgRows,
      txtRows,
      jointRows,
      imageWidth,
      linearTileCols,
      projTileCols,
      wChunkCols,
      attentionTileKeys,
      attentionQueryRows,
      warmupRuns: Number(config.warmupRuns ?? 1),
      timedRuns: Number(config.timedRuns ?? 3),
    },
    load: {total_ms: loadMs},
    summary: {
      median_dispatch_ms: medianMs,
      effective_tmacs: macs / (medianMs / 1000) / 1e12,
    },
    timed_ms: times,
    sample,
  };
}

window.runCustomDoubleStreamBlockBench = runCustomDoubleStreamBlockBench;

async function runCustomDoubleStreamBlocksLoopBench(config = {}) {
  if (!config.fullManifest) {
    throw new Error("double-stream blocks loop benchmark requires fullManifest");
  }
  const {device} = await requestCustomWebGpuDevice(["shader-f16", "packed_4x8_integer_dot_product"]);
  const baseUrl = config.bundleBaseUrl || "/runtime/custom_lowbit/full_transformer/";
  const startBlockIndex = Math.max(0, Math.min(4, Number(config.blockIndex ?? 0)));
  const blockCount = Math.max(1, Math.min(5 - startBlockIndex, Number(config.blockCount ?? 5)));
  const blockIndices = Array.from({length: blockCount}, (_, offset) => startBlockIndex + offset);
  const imgRows = Number(config.imageTokens ?? 256);
  const txtRows = Number(config.textTokens ?? 512);
  const jointRows = imgRows + txtRows;
  const hidden = 3072;
  const qkvM = 9216;
  const mlp1M = 18432;
  const mlpK = 9216;
  const kWordsHidden = hidden / 4;
  const kWordsMlp = mlpK / 4;
  const maxRows = Math.max(imgRows, txtRows);
  const imageWidth = Math.max(1, Number(config.imageWidth ?? Math.round(Math.sqrt(Math.max(1, imgRows)))));
  const linearTileCols = Number(config.linearTileCols ?? 128);
  const projTileCols = Number(config.projTileCols ?? 128);
  const wChunkCols = Number(config.wChunkCols ?? 64);
  const attentionTileKeys = Number(config.attentionTileKeys ?? 8);
  const attentionQueryRows = Number(config.attentionQueryRows ?? 16);

  const loadStart = performance.now();
  const blocks = await Promise.all(blockIndices.map(async (blockIndex) => {
    const [
      imgQkv, txtQkv, imgProj, txtProj, imgMlp0, imgMlp2, txtMlp0, txtMlp2,
      imgNorm, txtNorm,
    ] = await Promise.all([
      loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.img_attn.qkv`), baseUrl),
      loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.txt_attn.qkv`), baseUrl),
      loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.img_attn.proj`), baseUrl),
      loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.txt_attn.proj`), baseUrl),
      loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.img_mlp.0`), baseUrl),
      loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.img_mlp.2`), baseUrl),
      loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.txt_mlp.0`), baseUrl),
      loadI8BundleFromFullEntry(findFullManifestLinear(config.fullManifest, `double_blocks.${blockIndex}.txt_mlp.2`), baseUrl),
      loadQkNormScales(config.fullManifest, baseUrl, `double_blocks.${blockIndex}.img_attn.norm`),
      loadQkNormScales(config.fullManifest, baseUrl, `double_blocks.${blockIndex}.txt_attn.norm`),
    ]);
    return {blockIndex, imgQkv, txtQkv, imgProj, txtProj, imgMlp0, imgMlp2, txtMlp0, txtMlp2, imgNorm, txtNorm};
  }));
  const loadMs = performance.now() - loadStart;

  const imgInput = buildInputF32(imgRows, hidden);
  const txtInput = buildInputF32(txtRows, hidden);
  const imgStateA = createBuffer(device, imgInput, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST);
  const txtStateA = createBuffer(device, txtInput, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST);
  const imgStateB = createEmptyBuffer(device, imgRows * hidden * 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST);
  const txtStateB = createEmptyBuffer(device, txtRows * hidden * 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST);
  const imgMidState = createEmptyBuffer(device, imgRows * hidden * 4, GPUBufferUsage.STORAGE);
  const txtMidState = createEmptyBuffer(device, txtRows * hidden * 4, GPUBufferUsage.STORAGE);
  const modImgBuffer = createEmptyBuffer(device, 18432 * 4, GPUBufferUsage.STORAGE);
  const modTxtBuffer = createEmptyBuffer(device, 18432 * 4, GPUBufferUsage.STORAGE);
  const packedHiddenBuffer = createEmptyBuffer(device, maxRows * kWordsHidden * 4, GPUBufferUsage.STORAGE);
  const scalesBuffer = createEmptyBuffer(device, maxRows * 4, GPUBufferUsage.STORAGE);
  const packedMlpBuffer = createEmptyBuffer(device, maxRows * kWordsMlp * 4, GPUBufferUsage.STORAGE);
  const mlpScalesBuffer = createEmptyBuffer(device, maxRows * 4, GPUBufferUsage.STORAGE);
  const imgQkvBuffer = createEmptyBuffer(device, imgRows * qkvM * 2, GPUBufferUsage.STORAGE);
  const txtQkvBuffer = createEmptyBuffer(device, txtRows * qkvM * 2, GPUBufferUsage.STORAGE);
  const qNormBuffer = createEmptyBuffer(device, jointRows * hidden * 4, GPUBufferUsage.STORAGE);
  const kNormBuffer = createEmptyBuffer(device, jointRows * hidden * 4, GPUBufferUsage.STORAGE);
  const vBuffer = createEmptyBuffer(device, jointRows * hidden * 4, GPUBufferUsage.STORAGE);
  const attentionOutBuffer = createEmptyBuffer(device, jointRows * hidden * 4, GPUBufferUsage.STORAGE);
  const mlp0Buffer = createEmptyBuffer(device, maxRows * mlp1M * 2, GPUBufferUsage.STORAGE);
  const ropeFreqBuffer = createBuffer(device, buildFluxRopeFrequencies(), GPUBufferUsage.STORAGE);

  const preNormQuantModule = device.createShaderModule({code: SINGLE_PRENORM_MOD_QUANT_SHADER});
  const quantOffsetModule = device.createShaderModule({code: QUANTIZE_X_F32_OFFSET_SHADER});
  const dotHiddenToQkvModule = device.createShaderModule({code: makeI8ScaledDotShader32xWide(linearTileCols, wChunkCols, true)});
  const qkvNormModule = device.createShaderModule({code: DOUBLE_QKV_NORM_ROPE_SHADER});
  const attentionModule = device.createShaderModule({code: makeJointAttentionTiledShader(attentionTileKeys, attentionQueryRows)});
  const dotProjModule = device.createShaderModule({code: makeI8ScaledDotResidualShader32xWide(projTileCols, wChunkCols)});
  const dotMlp0Module = device.createShaderModule({code: makeI8ScaledDotShader32xWide(linearTileCols, wChunkCols, true)});
  const activateMlpModule = device.createShaderModule({code: makeLinear1F16ConsumerShader(SINGLE_MLP_ACTIVATE_QUANT_SHADER)});
  const dotMlp2Module = device.createShaderModule({code: makeI8ScaledDotResidualShader32xWide(projTileCols, wChunkCols)});
  const preNormQuantPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: preNormQuantModule, entryPoint: "main"}});
  const quantOffsetPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: quantOffsetModule, entryPoint: "main"}});
  const dotHiddenToQkvPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: dotHiddenToQkvModule, entryPoint: "main"}});
  const qkvNormPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: qkvNormModule, entryPoint: "main"}});
  const attentionPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: attentionModule, entryPoint: "main"}});
  const dotProjPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: dotProjModule, entryPoint: "main"}});
  const dotMlp0Pipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: dotMlp0Module, entryPoint: "main"}});
  const activateMlpPipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: activateMlpModule, entryPoint: "main"}});
  const dotMlp2Pipeline = await device.createComputePipelineAsync({layout: "auto", compute: {module: dotMlp2Module, entryPoint: "main"}});

  const timestepBuffer = createBuffer(device, makeTimestepEmbeddingF16(Number(config.timestep ?? 1.0)), GPUBufferUsage.STORAGE);
  const timeHiddenF32Buffer = createEmptyBuffer(device, hidden * 4, GPUBufferUsage.STORAGE);
  const timeHiddenF16Buffer = createEmptyBuffer(device, hidden * 2, GPUBufferUsage.STORAGE);
  const vecF32Buffer = createEmptyBuffer(device, hidden * 4, GPUBufferUsage.STORAGE);
  const vecF16Buffer = createEmptyBuffer(device, hidden * 2, GPUBufferUsage.STORAGE);
  const timeStage0 = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "time_in.in_layer"), baseUrl, timestepBuffer, timeHiddenF32Buffer, 1, 96);
  const timeSiluStage = await createF32ToF16Stage(device, timeHiddenF32Buffer, timeHiddenF16Buffer, hidden, true);
  const timeStage1 = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "time_in.out_layer"), baseUrl, timeHiddenF16Buffer, vecF32Buffer, 1, 96);
  const vecCastStage = await createF32ToF16Stage(device, vecF32Buffer, vecF16Buffer, hidden, true);
  const modImgStage = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "double_stream_modulation_img.lin"), baseUrl, vecF16Buffer, modImgBuffer, 1, 96);
  const modTxtStage = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "double_stream_modulation_txt.lin"), baseUrl, vecF16Buffer, modTxtBuffer, 1, 96);

  const makeLinearBuffers = (bundle) => ({
    w: createImmutableBuffer(device, bundle.weight, GPUBufferUsage.STORAGE, bundle.weightCacheKey),
    s: createImmutableBuffer(device, bundle.scales, GPUBufferUsage.STORAGE, bundle.scalesCacheKey),
  });
  const makeParams = (values) => createBuffer(device, new Uint32Array(values), GPUBufferUsage.UNIFORM);
  const params = {
    imgPre: makeParams([imgRows, hidden, qkvM, kWordsHidden]),
    txtPre: makeParams([txtRows, hidden, qkvM, kWordsHidden]),
    imgDotQkv: makeParams([imgRows, hidden, qkvM, kWordsHidden, 0, 0, 0, 0]),
    txtDotQkv: makeParams([txtRows, hidden, qkvM, kWordsHidden, 0, 0, 0, 0]),
    imgQkvNorm: makeParams([imgRows, qkvM, 24, 128, hidden, txtRows, txtRows, imageWidth]),
    txtQkvNorm: makeParams([txtRows, qkvM, 24, 128, hidden, 0, txtRows, imageWidth]),
    attention: makeParams([jointRows, 24, 128, hidden]),
    imgQuantAttn: makeParams([imgRows, hidden, kWordsHidden, txtRows, hidden]),
    txtQuantAttn: makeParams([txtRows, hidden, kWordsHidden, 0, hidden]),
    imgProj: makeParams([imgRows, hidden, hidden, kWordsHidden, 0, 0, 0, 0]),
    txtProj: makeParams([txtRows, hidden, hidden, kWordsHidden, 0, 0, 0, 0]),
    imgMlpPre: makeParams([imgRows, hidden, mlp1M, kWordsHidden]),
    txtMlpPre: makeParams([txtRows, hidden, mlp1M, kWordsHidden]),
    imgMlp0: makeParams([imgRows, hidden, mlp1M, kWordsHidden, 0, 0, 0, 0]),
    txtMlp0: makeParams([txtRows, hidden, mlp1M, kWordsHidden, 0, 0, 0, 0]),
    imgAct: makeParams([imgRows, mlp1M, mlpK, 0, 0, mlpK, kWordsMlp, 0]),
    txtAct: makeParams([txtRows, mlp1M, mlpK, 0, 0, mlpK, kWordsMlp, 0]),
    imgMlp2: makeParams([imgRows, mlpK, hidden, kWordsMlp, 0, 0, 0, 0]),
    txtMlp2: makeParams([txtRows, mlpK, hidden, kWordsMlp, 0, 0, 0, 0]),
  };

  const hiddenModOffsets = {
    mod1Shift: 0,
    mod1Scale: hidden * 4,
    mod1Gate: hidden * 8,
    mod2Shift: hidden * 12,
    mod2Scale: hidden * 16,
    mod2Gate: hidden * 20,
  };
  const res = (buffer, offset = 0) => offset ? {buffer, offset} : {buffer};
  const makePreNormBind = (state, modBuffer, shiftOffset, scaleOffset, paramsBuffer) => device.createBindGroup({
    layout: preNormQuantPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: state}},
      {binding: 1, resource: res(modBuffer, shiftOffset)},
      {binding: 2, resource: res(modBuffer, scaleOffset)},
      {binding: 3, resource: {buffer: packedHiddenBuffer}},
      {binding: 4, resource: {buffer: scalesBuffer}},
      {binding: 5, resource: {buffer: paramsBuffer}},
    ],
  });
  const makeDotBind = (pipeline, packed, packedScales, w, wScales, out, paramsBuffer) => device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: packed}},
      {binding: 1, resource: {buffer: w}},
      {binding: 2, resource: {buffer: packedScales}},
      {binding: 3, resource: {buffer: wScales}},
      {binding: 4, resource: {buffer: out}},
      {binding: 5, resource: {buffer: paramsBuffer}},
    ],
  });
  const makeResidualDotBind = (pipeline, packed, packedScales, w, wScales, out, paramsBuffer, residual, gate) => device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: packed}},
      {binding: 1, resource: {buffer: w}},
      {binding: 2, resource: {buffer: packedScales}},
      {binding: 3, resource: {buffer: wScales}},
      {binding: 4, resource: {buffer: out}},
      {binding: 5, resource: {buffer: paramsBuffer}},
      {binding: 6, resource: {buffer: residual}},
      {binding: 7, resource: gate},
    ],
  });

  const commonBind = {
    attention: device.createBindGroup({
      layout: attentionPipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: vBuffer}},
        {binding: 1, resource: {buffer: qNormBuffer}},
        {binding: 2, resource: {buffer: kNormBuffer}},
        {binding: 3, resource: {buffer: attentionOutBuffer}},
        {binding: 4, resource: {buffer: params.attention}},
      ],
    }),
    imgQuantAttn: device.createBindGroup({
      layout: quantOffsetPipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: attentionOutBuffer}},
        {binding: 1, resource: {buffer: packedHiddenBuffer}},
        {binding: 2, resource: {buffer: scalesBuffer}},
        {binding: 3, resource: {buffer: params.imgQuantAttn}},
      ],
    }),
    txtQuantAttn: device.createBindGroup({
      layout: quantOffsetPipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: attentionOutBuffer}},
        {binding: 1, resource: {buffer: packedHiddenBuffer}},
        {binding: 2, resource: {buffer: scalesBuffer}},
        {binding: 3, resource: {buffer: params.txtQuantAttn}},
      ],
    }),
    imgAct: device.createBindGroup({
      layout: activateMlpPipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: mlp0Buffer}},
        {binding: 1, resource: {buffer: packedMlpBuffer}},
        {binding: 2, resource: {buffer: mlpScalesBuffer}},
        {binding: 3, resource: {buffer: params.imgAct}},
      ],
    }),
    txtAct: device.createBindGroup({
      layout: activateMlpPipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: mlp0Buffer}},
        {binding: 1, resource: {buffer: packedMlpBuffer}},
        {binding: 2, resource: {buffer: mlpScalesBuffer}},
        {binding: 3, resource: {buffer: params.txtAct}},
      ],
    }),
  };

  const blockStages = blocks.map((block, offset) => {
    const ping = offset & 1;
    const imgInputState = ping ? imgStateB : imgStateA;
    const txtInputState = ping ? txtStateB : txtStateA;
    const imgOutputState = ping ? imgStateA : imgStateB;
    const txtOutputState = ping ? txtStateA : txtStateB;
    const weights = {
      imgQkv: makeLinearBuffers(block.imgQkv),
      txtQkv: makeLinearBuffers(block.txtQkv),
      imgProj: makeLinearBuffers(block.imgProj),
      txtProj: makeLinearBuffers(block.txtProj),
      imgMlp0: makeLinearBuffers(block.imgMlp0),
      imgMlp2: makeLinearBuffers(block.imgMlp2),
      txtMlp0: makeLinearBuffers(block.txtMlp0),
      txtMlp2: makeLinearBuffers(block.txtMlp2),
    };
    const imgQueryScaleBuffer = createImmutableBuffer(device, block.imgNorm.queryScale, GPUBufferUsage.STORAGE, block.imgNorm.queryScaleUrl);
    const imgKeyScaleBuffer = createImmutableBuffer(device, block.imgNorm.keyScale, GPUBufferUsage.STORAGE, block.imgNorm.keyScaleUrl);
    const txtQueryScaleBuffer = createImmutableBuffer(device, block.txtNorm.queryScale, GPUBufferUsage.STORAGE, block.txtNorm.queryScaleUrl);
    const txtKeyScaleBuffer = createImmutableBuffer(device, block.txtNorm.keyScale, GPUBufferUsage.STORAGE, block.txtNorm.keyScaleUrl);
    return {
      blockIndex: block.blockIndex,
      imgQkvPre: makePreNormBind(imgInputState, modImgBuffer, hiddenModOffsets.mod1Shift, hiddenModOffsets.mod1Scale, params.imgPre),
      txtQkvPre: makePreNormBind(txtInputState, modTxtBuffer, hiddenModOffsets.mod1Shift, hiddenModOffsets.mod1Scale, params.txtPre),
      imgQkvDot: makeDotBind(dotHiddenToQkvPipeline, packedHiddenBuffer, scalesBuffer, weights.imgQkv.w, weights.imgQkv.s, imgQkvBuffer, params.imgDotQkv),
      txtQkvDot: makeDotBind(dotHiddenToQkvPipeline, packedHiddenBuffer, scalesBuffer, weights.txtQkv.w, weights.txtQkv.s, txtQkvBuffer, params.txtDotQkv),
      imgQkvNorm: device.createBindGroup({
        layout: qkvNormPipeline.getBindGroupLayout(0),
        entries: [
          {binding: 0, resource: {buffer: imgQkvBuffer}},
          {binding: 1, resource: {buffer: imgQueryScaleBuffer}},
          {binding: 2, resource: {buffer: imgKeyScaleBuffer}},
          {binding: 3, resource: {buffer: qNormBuffer}},
          {binding: 4, resource: {buffer: kNormBuffer}},
          {binding: 5, resource: {buffer: vBuffer}},
          {binding: 6, resource: {buffer: params.imgQkvNorm}},
          {binding: 7, resource: {buffer: ropeFreqBuffer}},
        ],
      }),
      txtQkvNorm: device.createBindGroup({
        layout: qkvNormPipeline.getBindGroupLayout(0),
        entries: [
          {binding: 0, resource: {buffer: txtQkvBuffer}},
          {binding: 1, resource: {buffer: txtQueryScaleBuffer}},
          {binding: 2, resource: {buffer: txtKeyScaleBuffer}},
          {binding: 3, resource: {buffer: qNormBuffer}},
          {binding: 4, resource: {buffer: kNormBuffer}},
          {binding: 5, resource: {buffer: vBuffer}},
          {binding: 6, resource: {buffer: params.txtQkvNorm}},
          {binding: 7, resource: {buffer: ropeFreqBuffer}},
        ],
      }),
      imgProj: makeResidualDotBind(dotProjPipeline, packedHiddenBuffer, scalesBuffer, weights.imgProj.w, weights.imgProj.s, imgMidState, params.imgProj, imgInputState, res(modImgBuffer, hiddenModOffsets.mod1Gate)),
      txtProj: makeResidualDotBind(dotProjPipeline, packedHiddenBuffer, scalesBuffer, weights.txtProj.w, weights.txtProj.s, txtMidState, params.txtProj, txtInputState, res(modTxtBuffer, hiddenModOffsets.mod1Gate)),
      imgMlpPre: makePreNormBind(imgMidState, modImgBuffer, hiddenModOffsets.mod2Shift, hiddenModOffsets.mod2Scale, params.imgMlpPre),
      txtMlpPre: makePreNormBind(txtMidState, modTxtBuffer, hiddenModOffsets.mod2Shift, hiddenModOffsets.mod2Scale, params.txtMlpPre),
      imgMlp0: makeDotBind(dotMlp0Pipeline, packedHiddenBuffer, scalesBuffer, weights.imgMlp0.w, weights.imgMlp0.s, mlp0Buffer, params.imgMlp0),
      txtMlp0: makeDotBind(dotMlp0Pipeline, packedHiddenBuffer, scalesBuffer, weights.txtMlp0.w, weights.txtMlp0.s, mlp0Buffer, params.txtMlp0),
      imgMlp2: makeResidualDotBind(dotMlp2Pipeline, packedMlpBuffer, mlpScalesBuffer, weights.imgMlp2.w, weights.imgMlp2.s, imgOutputState, params.imgMlp2, imgMidState, res(modImgBuffer, hiddenModOffsets.mod2Gate)),
      txtMlp2: makeResidualDotBind(dotMlp2Pipeline, packedMlpBuffer, mlpScalesBuffer, weights.txtMlp2.w, weights.txtMlp2.s, txtOutputState, params.txtMlp2, txtMidState, res(modTxtBuffer, hiddenModOffsets.mod2Gate)),
    };
  });

  const runStage = (pass, pipeline, bindGroup, x, y = undefined) => {
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    if (y === undefined) pass.dispatchWorkgroups(x);
    else pass.dispatchWorkgroups(x, y);
  };

  async function dispatch() {
    const encoder = device.createCommandEncoder();
    const pass = encoder.beginComputePass();
    runStage(pass, timeStage0.pipeline, timeStage0.bindGroup, timeStage0.workgroupsX, timeStage0.workgroupsY);
    runStage(pass, timeSiluStage.pipeline, timeSiluStage.bindGroup, timeSiluStage.workgroupsX);
    runStage(pass, timeStage1.pipeline, timeStage1.bindGroup, timeStage1.workgroupsX, timeStage1.workgroupsY);
    runStage(pass, vecCastStage.pipeline, vecCastStage.bindGroup, vecCastStage.workgroupsX);
    runStage(pass, modImgStage.pipeline, modImgStage.bindGroup, modImgStage.workgroupsX, modImgStage.workgroupsY);
    runStage(pass, modTxtStage.pipeline, modTxtStage.bindGroup, modTxtStage.workgroupsX, modTxtStage.workgroupsY);

    for (const stage of blockStages) {
      runStage(pass, preNormQuantPipeline, stage.imgQkvPre, imgRows);
      runStage(pass, dotHiddenToQkvPipeline, stage.imgQkvDot, Math.ceil(qkvM / linearTileCols), Math.ceil(imgRows / 32));
      runStage(pass, preNormQuantPipeline, stage.txtQkvPre, txtRows);
      runStage(pass, dotHiddenToQkvPipeline, stage.txtQkvDot, Math.ceil(qkvM / linearTileCols), Math.ceil(txtRows / 32));
      runStage(pass, qkvNormPipeline, stage.txtQkvNorm, txtRows, 24);
      runStage(pass, qkvNormPipeline, stage.imgQkvNorm, imgRows, 24);
      runStage(pass, attentionPipeline, commonBind.attention, Math.ceil(jointRows / attentionQueryRows), 24);

      runStage(pass, quantOffsetPipeline, commonBind.imgQuantAttn, imgRows);
      runStage(pass, dotProjPipeline, stage.imgProj, Math.ceil(hidden / projTileCols), Math.ceil(imgRows / 32));
      runStage(pass, quantOffsetPipeline, commonBind.txtQuantAttn, txtRows);
      runStage(pass, dotProjPipeline, stage.txtProj, Math.ceil(hidden / projTileCols), Math.ceil(txtRows / 32));

      runStage(pass, preNormQuantPipeline, stage.imgMlpPre, imgRows);
      runStage(pass, dotMlp0Pipeline, stage.imgMlp0, Math.ceil(mlp1M / linearTileCols), Math.ceil(imgRows / 32));
      runStage(pass, activateMlpPipeline, commonBind.imgAct, imgRows);
      runStage(pass, dotMlp2Pipeline, stage.imgMlp2, Math.ceil(hidden / projTileCols), Math.ceil(imgRows / 32));

      runStage(pass, preNormQuantPipeline, stage.txtMlpPre, txtRows);
      runStage(pass, dotMlp0Pipeline, stage.txtMlp0, Math.ceil(mlp1M / linearTileCols), Math.ceil(txtRows / 32));
      runStage(pass, activateMlpPipeline, commonBind.txtAct, txtRows);
      runStage(pass, dotMlp2Pipeline, stage.txtMlp2, Math.ceil(hidden / projTileCols), Math.ceil(txtRows / 32));
    }

    pass.end();
    device.queue.submit([encoder.finish()]);
    await device.queue.onSubmittedWorkDone();
  }

  for (let i = 0; i < Number(config.warmupRuns ?? 1); ++i) {
    await dispatch();
  }
  const times = [];
  for (let i = 0; i < Number(config.timedRuns ?? 3); ++i) {
    const start = performance.now();
    await dispatch();
    times.push(performance.now() - start);
  }

  let sample = null;
  if (config.readbackSample) {
    const finalImgBuffer = blockCount % 2 === 0 ? imgStateA : imgStateB;
    const count = Math.min(Number(config.readbackSample), imgRows * hidden);
    const values = await readFloat32Buffer(device, finalImgBuffer, count);
    let finite = 0;
    let maxAbs = 0;
    for (const value of values) {
      if (Number.isFinite(value)) finite += 1;
      maxAbs = Math.max(maxAbs, Math.abs(value));
    }
    sample = {count, finite, max_abs: maxAbs, values: Array.from(values.slice(0, Math.min(8, values.length)))};
  }

  const medianMs = median(times);
  const macsPerBlock =
    imgRows * hidden * qkvM + txtRows * hidden * qkvM +
    imgRows * hidden * hidden + txtRows * hidden * hidden +
    imgRows * hidden * mlp1M + txtRows * hidden * mlp1M +
    imgRows * mlpK * hidden + txtRows * mlpK * hidden;
  return {
    verdict: "custom-double-stream-blocks-loop-completed",
    config: {
      startBlockIndex,
      blockCount,
      blockIndices,
      imgRows,
      txtRows,
      jointRows,
      imageWidth,
      linearTileCols,
      projTileCols,
      wChunkCols,
      attentionTileKeys,
      attentionQueryRows,
      warmupRuns: Number(config.warmupRuns ?? 1),
      timedRuns: Number(config.timedRuns ?? 3),
    },
    load: {total_ms: loadMs},
    summary: {
      median_dispatch_ms: medianMs,
      per_block_median_ms: medianMs / blockCount,
      effective_tmacs: (macsPerBlock * blockCount) / (medianMs / 1000) / 1e12,
    },
    timed_ms: times,
    sample,
  };
}

async function runCustomFluxTransformerDenoise(config = {}) {
  if (!config.fullManifest) {
    throw new Error("custom full denoise requires fullManifest");
  }
  const baseUrl = config.bundleBaseUrl || "/runtime/custom_lowbit/full_transformer/";
  const imgRows = Number(config.imageTokens ?? 256);
  const txtRows = Number(config.textTokens ?? 512);
  const jointRows = imgRows + txtRows;
  const hidden = 3072;
  const contextDim = 7680;
  const latentChannels = Number(config.latentChannels ?? 128);
  const imageWidth = Math.max(1, Number(config.imageWidth ?? Math.round(Math.sqrt(Math.max(1, imgRows)))));
  const qkvM = 9216;
  const doubleMlp1M = 18432;
  const doubleMlpK = 9216;
  const singleLinear1M = 27648;
  const singleLinear2K = 12288;
  const kWordsLatent = latentChannels / 4;
  const kWordsContext = contextDim / 4;
  const kWordsHidden = hidden / 4;
  const hiddenQ4Groups = hidden / 16;
  const kWordsDoubleMlp = doubleMlpK / 4;
  const kWordsSingleMlp = singleLinear2K / 4;
  const maxRows = Math.max(imgRows, txtRows);
  const linearTileCols = Number(config.linearTileCols ?? 256);
  const projTileCols = Number(config.projTileCols ?? 128);
  const finalTileCols = Number(config.finalTileCols ?? 256);
  const wChunkCols = Number(config.wChunkCols ?? 64);
  const linearRowBlock = Number(config.linearRowBlock ?? 32);
  const singleAttentionKernel = String(config.singleAttentionKernel || config.attentionKernel || "tiled").toLowerCase();
  const useSubgroupSingleAttention = singleAttentionKernel === "subgroup" || singleAttentionKernel === "subgroups";
  const {device} = await requestCustomWebGpuDevice(
    ["shader-f16", "packed_4x8_integer_dot_product", ...(useSubgroupSingleAttention ? ["subgroups"] : [])],
    linearRowBlock > 32 ? {maxComputeInvocationsPerWorkgroup: 512} : {},
  );
  const attentionTileKeys = Number(config.attentionTileKeys ?? 8);
  const attentionQueryRows = Number(config.attentionQueryRows ?? 16);
  const singleQkNormStorage = String(config.singleQkNormStorage || "f32").toLowerCase();
  const useSingleQkNormStorageF16 = singleQkNormStorage === "f16" || singleQkNormStorage === "fp16" || singleQkNormStorage === "half";
  const singleLinear2Backend = String(config.singleLinear2Backend || "dp4a").toLowerCase();
  const useSingleLinear2Dp4a = singleLinear2Backend === "dp4a" || singleLinear2Backend === "i8" || singleLinear2Backend === "int8";
  const useSingleLinear2Q4 = !useSingleLinear2Dp4a;
  const singleLinear1Output = String(config.singleLinear1Output || "f16").toLowerCase();
  const useSingleLinear1OutputF16 = singleLinear1Output === "f16" || singleLinear1Output === "fp16" || singleLinear1Output === "half";
  const singleLinear1QkvBackend = String(config.singleLinear1QkvBackend || "q4").toLowerCase();
  const useSingleLinear1QkvDp4a = useSingleLinear1OutputF16 && (
    singleLinear1QkvBackend === "dp4a" || singleLinear1QkvBackend === "i8" || singleLinear1QkvBackend === "int8"
  );
  const singleLinear1MlpBackend = String(config.singleLinear1MlpBackend || "q4").toLowerCase();
  const useSingleLinear1MlpDp4a = useSingleLinear1OutputF16 && (
    singleLinear1MlpBackend === "dp4a" || singleLinear1MlpBackend === "i8" || singleLinear1MlpBackend === "int8"
  );
  const useSingleLinear1Dp4a = useSingleLinear1QkvDp4a || useSingleLinear1MlpDp4a;
  const useSingleLinear1Q4 = !(useSingleLinear1QkvDp4a && useSingleLinear1MlpDp4a);
  const singleLinear1Q4Kernel = String(config.singleLinear1Q4Kernel || "f16").toLowerCase();
  const useSingleLinear1Q4Dp4aQkvOnly = (
    singleLinear1Q4Kernel === "dp4a-qkv" ||
    singleLinear1Q4Kernel === "qkv-dp4a" ||
    singleLinear1Q4Kernel === "q4-dp4a-qkv"
  );
  const useSingleLinear1Q4Dp4a = useSingleLinear1OutputF16 && (
    singleLinear1Q4Kernel === "dp4a" ||
    singleLinear1Q4Kernel === "q4-dp4a" ||
    singleLinear1Q4Kernel === "int8" ||
    useSingleLinear1Q4Dp4aQkvOnly
  );
  const singleLinear1Q4ActivationScale = String(
    config.singleLinear1Q4ActivationScale ?? (useSingleLinear1Q4Dp4a ? "group16" : "row")
  ).toLowerCase();
  const useSingleLinear1Q4GroupedActivation = useSingleLinear1Q4Dp4a && (
    singleLinear1Q4ActivationScale === "group" ||
    singleLinear1Q4ActivationScale === "group16" ||
    singleLinear1Q4ActivationScale === "per-group"
  );
  const needsSingleLinear1F16PreNorm = useSingleLinear1Q4 && (!useSingleLinear1Q4Dp4a || useSingleLinear1Q4Dp4aQkvOnly);
  const needsSingleLinear1GroupedPreNorm = useSingleLinear1Q4GroupedActivation;
  const approxReusePredEvery = Math.max(0, Math.trunc(Number(config.approxReusePredEvery || 0)));
  const approxPredictionMode = String(config.approxPredictionMode || config.approxMode || "raw").toLowerCase();
  const approxAbScale = Number.isFinite(Number(config.approxAbScale))
    ? Number(config.approxAbScale)
    : 0.5;
  const useApproxAb2 = approxReusePredEvery > 1 && (approxPredictionMode === "ab2" || approxPredictionMode === "adams-bashforth");
  const skipSingleBlocksFromStep = Math.max(0, Math.trunc(Number(config.skipSingleBlocksFromStep || 0)));
  const skipSingleBlocksFromBlock = Math.max(0, Math.trunc(Number(config.skipSingleBlocksFromBlock || 0)));
  const reuseSingleTailFromStep = Math.max(0, Math.trunc(Number(config.reuseSingleTailFromStep || 0)));
  const reuseSingleTailFromBlock = Math.max(0, Math.trunc(Number(config.reuseSingleTailFromBlock || 0)));
  const profilePhases = config.profilePhases === true && !config.debugStopAfter;
  const profileSingleParts = profilePhases && config.profileSingleParts === true;
  const stepSubmitFusion = config.stepSubmitFusion === true && approxReusePredEvery <= 1 && !config.debugStopAfter && !profilePhases;
  const timesteps = Array.isArray(config.timesteps) && config.timesteps.length > 1
    ? config.timesteps.map(Number)
    : [1.0, 0.75, 0.5, 0.25, 0.0];
  const denoiseStepCount = timesteps.length - 1;
  const doubleBlockCount = Math.max(1, Math.min(5, Math.trunc(Number(config.maxDoubleBlocks || config.doubleBlockCount || 5))));
  const singleBlockCount = Math.max(0, Math.min(20, Math.trunc(Number(config.maxSingleBlocks || config.singleBlockCount || 20))));
  if (jointRows > 4608) {
    throw new Error(`custom WebGPU transformer currently supports joint tokens <= 4608; got ${jointRows}`);
  }
  if (latentChannels !== 128) {
    throw new Error(`custom WebGPU transformer currently expects 128 latent channels; got ${latentChannels}`);
  }

  const initialLatent = config.initialLatentF32 instanceof Float32Array
    ? config.initialLatentF32
    : new Float32Array(config.initialLatentF32 || []);
  if (initialLatent.length !== imgRows * latentChannels) {
    throw new Error(`initialLatentF32 length ${initialLatent.length} does not match ${imgRows * latentChannels}`);
  }
  const contextF16 = config.contextF16 instanceof Uint16Array
    ? config.contextF16
    : new Uint16Array(config.contextF16 || []);
  if (contextF16.length !== txtRows * contextDim) {
    throw new Error(`contextF16 length ${contextF16.length} does not match ${txtRows * contextDim}`);
  }
  const textProjectionCacheKey = config.textContextCacheKey
    ? `${baseUrl}|txt-in|${txtRows}|${contextDim}|${hidden}|${config.textContextCacheKey}`
    : "";
  const persistentTextProjectionKey = textProjectionCacheKey && config.persistentTextProjectionCache !== false
    ? `txtproj-v1|${textProjectionCacheKey}`
    : "";
  let textProjectionDeviceCache = null;
  let cachedTxtBaseState = null;
  let persistentTxtProjectionHit = false;
  let staticTxtProjectionHit = false;
  let persistentTxtProjectionMs = 0;
  if (textProjectionCacheKey) {
    textProjectionDeviceCache = textProjectionGpuCache.get(device);
    if (!textProjectionDeviceCache) {
      textProjectionDeviceCache = new Map();
      textProjectionGpuCache.set(device, textProjectionDeviceCache);
    }
    cachedTxtBaseState = textProjectionDeviceCache.get(textProjectionCacheKey) || null;
  }
  let contextF32 = null;
  if (!cachedTxtBaseState) {
    contextF32 = new Float32Array(contextF16.length);
    for (let i = 0; i < contextF16.length; ++i) {
      contextF32[i] = float16BitsToFloat32(contextF16[i]);
    }
  }

  const loadStart = performance.now();
  const {
    imgIn,
    txtIn,
    finalLinear,
    doubleBlocks,
    singleBlocks,
    singleNorms,
  } = await loadFullTransformerAssetSet(config.fullManifest, baseUrl, doubleBlockCount, singleBlockCount);
  const loadMs = performance.now() - loadStart;
  const stageSetupStart = performance.now();

  const latentBytes = imgRows * latentChannels * 4;
  const imgBytes = imgRows * hidden * 4;
  const txtBytes = txtRows * hidden * 4;
  const jointBytes = jointRows * hidden * 4;
  const scratchKey = [
    baseUrl,
    `img=${imgRows}`,
    `txt=${txtRows}`,
    `latent=${latentChannels}`,
    `l1=${singleLinear1Output}`,
    `qkv=${singleLinear1QkvBackend}`,
    `mlp=${singleLinear1MlpBackend}`,
    `q4=${singleLinear1Q4Kernel}`,
    `q4act=${singleLinear1Q4ActivationScale}`,
    `l2=${singleLinear2Backend}`,
  ].join("|");
  const scratchBuffer = (name, size, usage) => createReusableBuffer(device, `${scratchKey}|${name}`, size, usage);
  const uploadScratchBuffer = (name, data, usage) => {
    const buffer = scratchBuffer(name, data.byteLength, usage | GPUBufferUsage.COPY_DST);
    device.queue.writeBuffer(buffer, 0, data);
    return buffer;
  };
  const latentF32Buffer = uploadScratchBuffer("latent-f32", initialLatent, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const contextF32Buffer = contextF32
    ? uploadScratchBuffer("context-f32", contextF32, GPUBufferUsage.STORAGE)
    : scratchBuffer("context-empty", 4, GPUBufferUsage.STORAGE);
  let txtBaseState = cachedTxtBaseState;
  if (!txtBaseState && persistentTextProjectionKey) {
    const persistentStart = performance.now();
    const persistedTxtBase = await loadPersistentFloat32(persistentTextProjectionKey, txtRows * hidden);
    persistentTxtProjectionMs = performance.now() - persistentStart;
    if (persistedTxtBase) {
      txtBaseState = uploadScratchBuffer("txt-base-persistent", persistedTxtBase, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
      persistentTxtProjectionHit = true;
      if (textProjectionDeviceCache && textProjectionCacheKey) {
        textProjectionDeviceCache.set(textProjectionCacheKey, txtBaseState);
      }
    }
  }
  if (!txtBaseState && config.textProjectionUrl) {
    const staticStart = performance.now();
    const staticTxtBase = await loadStaticFloat32(config.textProjectionUrl, txtRows * hidden);
    persistentTxtProjectionMs += performance.now() - staticStart;
    if (staticTxtBase) {
      txtBaseState = uploadScratchBuffer("txt-base-static", staticTxtBase, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
      staticTxtProjectionHit = true;
      if (textProjectionDeviceCache && textProjectionCacheKey) {
        textProjectionDeviceCache.set(textProjectionCacheKey, txtBaseState);
      }
      if (persistentTextProjectionKey) {
        savePersistentFloat32(persistentTextProjectionKey, staticTxtBase).catch((err) => {
          console.warn("[custom-lowbit] could not persist static text projection", err);
        });
      }
    }
  }
  if (!txtBaseState) {
    txtBaseState = createEmptyBuffer(device, txtBytes, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  }
  const imgStateA = scratchBuffer("img-state-a", imgBytes, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST);
  const txtStateA = scratchBuffer("txt-state-a", txtBytes, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST);
  const imgStateB = scratchBuffer("img-state-b", imgBytes, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST);
  const txtStateB = scratchBuffer("txt-state-b", txtBytes, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST);
  const imgMidState = scratchBuffer("img-mid-state", imgBytes, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const txtMidState = scratchBuffer("txt-mid-state", txtBytes, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const jointStateA = scratchBuffer("joint-state-a", jointBytes, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST);
  const jointStateB = scratchBuffer("joint-state-b", jointBytes, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST);
  const predBuffer = scratchBuffer("pred", latentBytes, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const previousPredBuffer = useApproxAb2
    ? scratchBuffer("previous-pred", latentBytes, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST)
    : scratchBuffer("previous-pred-empty", 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST);
  const stepResourceCount = stepSubmitFusion ? denoiseStepCount : 1;
  const updateParamsBuffers = Array.from({length: stepResourceCount}, (_, index) => (
    uploadScratchBuffer(
      `update-params-${index}`,
      new Float32Array([
        imgRows * latentChannels,
        index < denoiseStepCount ? timesteps[index + 1] - timesteps[index] : 0,
        0,
        0,
      ]),
      GPUBufferUsage.STORAGE,
    )
  ));

  const inputPackedWords = Math.max(imgRows * kWordsLatent, txtRows * kWordsContext);
  const inputPackedBuffer = scratchBuffer("input-packed", inputPackedWords * 4, GPUBufferUsage.STORAGE);
  const inputScalesBuffer = scratchBuffer("input-scales", Math.max(imgRows, txtRows) * 4, GPUBufferUsage.STORAGE);
  const packedHiddenBuffer = scratchBuffer("packed-hidden", maxRows * kWordsHidden * 4, GPUBufferUsage.STORAGE);
  const scalesBuffer = scratchBuffer("hidden-scales", maxRows * 4, GPUBufferUsage.STORAGE);
  const groupedHiddenScalesBuffer = scratchBuffer("grouped-hidden-scales", maxRows * hiddenQ4Groups * 4, GPUBufferUsage.STORAGE);
  const packedDoubleMlpBuffer = scratchBuffer("packed-double-mlp", maxRows * kWordsDoubleMlp * 4, GPUBufferUsage.STORAGE);
  const doubleMlpScalesBuffer = scratchBuffer("double-mlp-scales", maxRows * 4, GPUBufferUsage.STORAGE);
  const packedSingleMlpBuffer = scratchBuffer("packed-single-mlp", jointRows * kWordsSingleMlp * 4, GPUBufferUsage.STORAGE);
  const singleMlpScalesBuffer = scratchBuffer("single-mlp-scales", jointRows * 4, GPUBufferUsage.STORAGE);
  const singlePreF16Buffer = needsSingleLinear1F16PreNorm
    ? scratchBuffer("single-pre-f16", jointRows * hidden * 2, GPUBufferUsage.STORAGE)
    : scratchBuffer("single-pre-f16-empty", 4, GPUBufferUsage.STORAGE);
  const singleLinear2InF32Buffer = useSingleLinear2Q4
    ? scratchBuffer("single-linear2-in-f32", jointRows * singleLinear2K * 4, GPUBufferUsage.STORAGE)
    : scratchBuffer("single-linear2-in-f32-empty", 4, GPUBufferUsage.STORAGE);
  const singleLinear2InF16Buffer = useSingleLinear2Q4
    ? scratchBuffer("single-linear2-in-f16", jointRows * singleLinear2K * 2, GPUBufferUsage.STORAGE)
    : scratchBuffer("single-linear2-in-f16-empty", 4, GPUBufferUsage.STORAGE);
  const singleLinear2OutBuffer = scratchBuffer("single-linear2-out", jointRows * hidden * 4, GPUBufferUsage.STORAGE);

  const maxStorageBindingBytes = Math.max(
    jointRows * singleLinear1M * (useSingleLinear1OutputF16 ? 2 : 4),
    jointRows * singleLinear2K * 4,
    jointRows * singleLinear2K * 2,
    jointRows * hidden * 4,
    maxRows * doubleMlp1M * 2,
  );
  const storageBindingLimit = Number(device.limits?.maxStorageBufferBindingSize || 128 * 1024 * 1024);
  if (maxStorageBindingBytes > storageBindingLimit) {
    throw new Error(
      `CUSTOM_TRANSFORMER_WEBGPU_LIMIT: required storage buffer binding ${maxStorageBindingBytes} bytes exceeds device limit ${storageBindingLimit} bytes`,
    );
  }

  const imgQkvBuffer = scratchBuffer("img-qkv", imgRows * qkvM * 2, GPUBufferUsage.STORAGE);
  const txtQkvBuffer = scratchBuffer("txt-qkv", txtRows * qkvM * 2, GPUBufferUsage.STORAGE);
  const doubleQNormBuffer = scratchBuffer("double-q-norm", jointRows * hidden * 4, GPUBufferUsage.STORAGE);
  const doubleKNormBuffer = scratchBuffer("double-k-norm", jointRows * hidden * 4, GPUBufferUsage.STORAGE);
  const doubleVBuffer = scratchBuffer("double-v", jointRows * hidden * 4, GPUBufferUsage.STORAGE);
  const doubleAttentionOutBuffer = scratchBuffer("double-attention-out", jointRows * hidden * 4, GPUBufferUsage.STORAGE);
  const doubleMlp0Buffer = scratchBuffer("double-mlp0", maxRows * doubleMlp1M * 2, GPUBufferUsage.STORAGE);
  const doubleRopeFreqBuffer = createImmutableBuffer(device, buildFluxRopeFrequencies(), GPUBufferUsage.STORAGE, `${scratchKey}|double-rope-freq`);

  const singleLinear1OutBuffer = scratchBuffer("single-linear1-out", jointRows * singleLinear1M * (useSingleLinear1OutputF16 ? 2 : 4), GPUBufferUsage.STORAGE);
  const singleAttentionOutBuffer = scratchBuffer("single-attention-out", jointRows * hidden * 4, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC);
  const singleTailDeltaEnabled = reuseSingleTailFromStep > 0 && reuseSingleTailFromBlock > 0 && reuseSingleTailFromBlock < singleBlockCount;
  const skippedOptionalSetupBytes =
    (needsSingleLinear1F16PreNorm ? 0 : jointRows * hidden * 2) +
    (useSingleLinear2Q4 ? 0 : jointRows * singleLinear2K * 6);
  const skippedOptionalPipelines = [
    !needsSingleLinear1GroupedPreNorm,
    !needsSingleLinear1F16PreNorm,
    !useSingleLinear2Q4,
    !useSingleLinear2Q4,
    !useApproxAb2,
    !singleTailDeltaEnabled,
    !singleTailDeltaEnabled,
  ].filter(Boolean).length;
  const singleTailBaseCacheBuffer = singleTailDeltaEnabled
    ? scratchBuffer("single-tail-base-cache", jointBytes, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC)
    : null;
  const singleTailDeltaCacheBuffer = singleTailDeltaEnabled
    ? scratchBuffer("single-tail-delta-cache", jointBytes, GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC)
    : null;
  const singleQkNormBytes = jointRows * hidden * (useSingleQkNormStorageF16 ? 2 : 4);
  const singleQNormBuffer = scratchBuffer("single-q-norm", singleQkNormBytes, GPUBufferUsage.STORAGE);
  const singleKNormBuffer = scratchBuffer("single-k-norm", singleQkNormBytes, GPUBufferUsage.STORAGE);
  const singleRopeSinCosBuffer = createImmutableBuffer(device, buildFluxRopeSinCos(jointRows, txtRows, imageWidth), GPUBufferUsage.STORAGE, `${scratchKey}|single-rope-sincos|w=${imageWidth}`);

  const modImgBuffer = scratchBuffer("mod-img", 18432 * 4, GPUBufferUsage.STORAGE);
  const modTxtBuffer = scratchBuffer("mod-txt", 18432 * 4, GPUBufferUsage.STORAGE);
  const modSingleBuffer = scratchBuffer("mod-single", 9216 * 4, GPUBufferUsage.STORAGE);
  const finalModBuffer = scratchBuffer("final-mod", 6144 * 4, GPUBufferUsage.STORAGE);
  const timestepBuffers = Array.from({length: stepResourceCount}, (_, index) => (
    uploadScratchBuffer(
      `timestep-${index}`,
      makeTimestepEmbeddingF16(timesteps[Math.min(index, Math.max(0, denoiseStepCount - 1))]),
      GPUBufferUsage.STORAGE,
    )
  ));
  const timeHiddenF32Buffer = scratchBuffer("time-hidden-f32", hidden * 4, GPUBufferUsage.STORAGE);
  const timeHiddenF16Buffer = scratchBuffer("time-hidden-f16", hidden * 2, GPUBufferUsage.STORAGE);
  const vecF32Buffer = scratchBuffer("vec-f32", hidden * 4, GPUBufferUsage.STORAGE);
  const vecF16Buffer = scratchBuffer("vec-f16", hidden * 2, GPUBufferUsage.STORAGE);

  const dotF32Code = makeI8ScaledDotShader32xWide(linearTileCols, wChunkCols, false, linearRowBlock);
  const dotF16Code = makeI8ScaledDotShader32xWide(linearTileCols, wChunkCols, true, linearRowBlock);
  const finalDotCode = makeI8ScaledDotShader32xWide(finalTileCols, wChunkCols, false, linearRowBlock);
  const dotResidualCode = makeI8ScaledDotResidualShader32xWide(projTileCols, wChunkCols, linearRowBlock);
  const jointAttentionCode = makeJointAttentionTiledShader(attentionTileKeys, attentionQueryRows);
  let singleQkNormCode = useSingleLinear1OutputF16 ? makeLinear1F16ConsumerShader(SINGLE_QK_NORM_ROPE_SHADER) : SINGLE_QK_NORM_ROPE_SHADER;
  if (useSingleQkNormStorageF16) {
    singleQkNormCode = makeSingleQkNormF16StorageShader(singleQkNormCode);
  }
  let singleAttentionCode = useSubgroupSingleAttention
    ? makeSingleAttentionSubgroupShader(attentionTileKeys)
    : makeSingleAttentionTiledShader(attentionTileKeys, attentionQueryRows);
  if (useSingleQkNormStorageF16) {
    singleAttentionCode = makeAttentionQkF16ConsumerShader(singleAttentionCode);
  }
  if (useSingleLinear1OutputF16) {
    singleAttentionCode = makeLinear1F16ConsumerShader(singleAttentionCode);
  }
  const singleActivateCode = useSingleLinear1OutputF16
    ? makeLinear1F16ConsumerShader(SINGLE_MLP_ACTIVATE_ATTENTION_QUANT_SHADER)
    : SINGLE_MLP_ACTIVATE_ATTENTION_QUANT_SHADER;
  const singleActivateF32Code = useSingleLinear1OutputF16
    ? makeLinear1F16ConsumerShader(SINGLE_MLP_ACTIVATION_ATTENTION_SHADER)
    : SINGLE_MLP_ACTIVATION_ATTENTION_SHADER;

  const [
    quantF32Pipeline,
    preNormQuantPipeline,
    preNormGroupQuantPipeline,
    preNormF16Pipeline,
    quantOffsetPipeline,
    dotF32Pipeline,
    dotF16Pipeline,
    finalDotPipeline,
    dotResidualPipeline,
    doubleQkvNormPipeline,
    jointAttentionPipeline,
    doubleActivateMlpPipeline,
    singleQkNormPipeline,
    singleAttentionPipeline,
    singleActivatePipeline,
    singleActivateF32Pipeline,
    singleResidualPipeline,
    latentUpdatePipeline,
    latentUpdateAb2Pipeline,
    singleTailDeltaCachePipeline,
    singleTailDeltaApplyPipeline,
  ] = await Promise.all([
    getCachedComputePipeline(device, "quant-f32", QUANTIZE_X_F32_SHADER),
    getCachedComputePipeline(device, "single-prenorm-mod-quant", SINGLE_PRENORM_MOD_QUANT_SHADER),
    needsSingleLinear1GroupedPreNorm
      ? getCachedComputePipeline(device, "single-prenorm-mod-group-quant", SINGLE_PRENORM_MOD_GROUP_QUANT_SHADER)
      : Promise.resolve(null),
    needsSingleLinear1F16PreNorm
      ? getCachedComputePipeline(device, "single-prenorm-mod-f16", SINGLE_PRENORM_MOD_F16_SHADER)
      : Promise.resolve(null),
    getCachedComputePipeline(device, "quant-f32-offset", QUANTIZE_X_F32_OFFSET_SHADER),
    getCachedComputePipeline(device, `i8-dot:${linearTileCols}:${wChunkCols}:rows${linearRowBlock}:f32`, dotF32Code),
    getCachedComputePipeline(device, `i8-dot:${linearTileCols}:${wChunkCols}:rows${linearRowBlock}:f16`, dotF16Code),
    getCachedComputePipeline(device, `i8-dot:${finalTileCols}:${wChunkCols}:rows${linearRowBlock}:final-f32`, finalDotCode),
    getCachedComputePipeline(device, `i8-residual-dot:${projTileCols}:${wChunkCols}:rows${linearRowBlock}`, dotResidualCode),
    getCachedComputePipeline(device, "double-qkv-norm-rope", DOUBLE_QKV_NORM_ROPE_SHADER),
    getCachedComputePipeline(device, `joint-attention:${attentionTileKeys}:${attentionQueryRows}`, jointAttentionCode),
    getCachedComputePipeline(device, "double-activate-mlp-f16", makeLinear1F16ConsumerShader(SINGLE_MLP_ACTIVATE_QUANT_SHADER)),
    getCachedComputePipeline(device, `single-qk-norm-rope:${useSingleLinear1OutputF16 ? "f16" : "f32"}:qk-${useSingleQkNormStorageF16 ? "f16" : "f32"}`, singleQkNormCode),
    getCachedComputePipeline(device, `single-attention:${useSubgroupSingleAttention ? "subgroup" : "tiled"}:${attentionTileKeys}:${attentionQueryRows}:${useSingleLinear1OutputF16 ? "f16" : "f32"}:qk-${useSingleQkNormStorageF16 ? "f16" : "f32"}`, singleAttentionCode),
    getCachedComputePipeline(device, `single-activate-quant:${useSingleLinear1OutputF16 ? "f16" : "f32"}`, singleActivateCode),
    useSingleLinear2Q4
      ? getCachedComputePipeline(device, `single-activate-f32:${useSingleLinear1OutputF16 ? "f16" : "f32"}`, singleActivateF32Code)
      : Promise.resolve(null),
    useSingleLinear2Q4
      ? getCachedComputePipeline(device, "single-residual-gate", SINGLE_RESIDUAL_GATE_SHADER)
      : Promise.resolve(null),
    getCachedComputePipeline(device, "latent-update-f32", LATENT_UPDATE_F32_SHADER),
    useApproxAb2
      ? getCachedComputePipeline(device, "latent-update-ab2-f32", LATENT_UPDATE_AB2_F32_SHADER)
      : Promise.resolve(null),
    singleTailDeltaEnabled
      ? getCachedComputePipeline(device, "single-tail-delta-cache", SINGLE_TAIL_DELTA_CACHE_SHADER)
      : Promise.resolve(null),
    singleTailDeltaEnabled
      ? getCachedComputePipeline(device, "single-tail-delta-apply", SINGLE_TAIL_DELTA_APPLY_SHADER)
      : Promise.resolve(null),
  ]);
  const singleLinear2CastStage = useSingleLinear2Q4
    ? await createF32ToF16Stage(device, singleLinear2InF32Buffer, singleLinear2InF16Buffer, jointRows * singleLinear2K, false)
    : null;
  const singleLinear1Q4Options = useSingleLinear1QkvDp4a
    ? {colOffset: qkvM, outputCols: singleLinear1M - qkvM, outputStride: singleLinear1M}
    : useSingleLinear1MlpDp4a
      ? {colOffset: 0, outputCols: qkvM, outputStride: singleLinear1M}
      : {};
  const singleQ4TileCols = Number(config.singleQ4TileCols ?? 256);
  const singleQ4KChunk = Number(config.singleQ4KChunk ?? (singleQ4TileCols >= 256 ? 32 : 64));
  const singleQ4Dp4aTileCols = Number(config.singleQ4Dp4aTileCols ?? 128);
  const makeSingleLinear1Q4StagesForBlock = async (blockIndex) => {
    const linear = findFullManifestLinear(config.fullManifest, `single_blocks.${blockIndex}.linear1`);
    if (useSingleLinear1Q4Dp4aQkvOnly) {
      return Promise.all([
        createQ4Dp4aLinearStage(
          device,
          linear,
          baseUrl,
          packedHiddenBuffer,
          useSingleLinear1Q4GroupedActivation ? groupedHiddenScalesBuffer : scalesBuffer,
          singleLinear1OutBuffer,
          jointRows,
          singleQ4Dp4aTileCols,
          wChunkCols,
          useSingleLinear1OutputF16,
          {
            colOffset: 0,
            outputCols: qkvM,
            outputStride: singleLinear1M,
            xScaleGroupsPerRow: useSingleLinear1Q4GroupedActivation ? hiddenQ4Groups : 1,
            kChunk: singleQ4KChunk,
            cacheKey: `${scratchKey}|single-linear1-q4-dp4a-qkv|${blockIndex}`,
          },
        ),
        createQ4LinearStage(
          device,
          linear,
          baseUrl,
          singlePreF16Buffer,
          singleLinear1OutBuffer,
          jointRows,
          singleQ4TileCols,
          useSingleLinear1OutputF16,
          {
            colOffset: qkvM,
            outputCols: singleLinear1M - qkvM,
            outputStride: singleLinear1M,
            kChunk: singleQ4KChunk,
            cacheKey: `${scratchKey}|single-linear1-q4-tail|${blockIndex}`,
          },
        ),
      ]);
    }
    const stage = useSingleLinear1Q4Dp4a
      ? await createQ4Dp4aLinearStage(
          device,
          linear,
          baseUrl,
          packedHiddenBuffer,
          useSingleLinear1Q4GroupedActivation ? groupedHiddenScalesBuffer : scalesBuffer,
          singleLinear1OutBuffer,
          jointRows,
          singleQ4Dp4aTileCols,
          wChunkCols,
          useSingleLinear1OutputF16,
          {
            ...singleLinear1Q4Options,
            xScaleGroupsPerRow: useSingleLinear1Q4GroupedActivation ? hiddenQ4Groups : 1,
            kChunk: singleQ4KChunk,
            cacheKey: `${scratchKey}|single-linear1-q4|${blockIndex}`,
          },
        )
      : await createQ4LinearStage(
          device,
          linear,
          baseUrl,
          singlePreF16Buffer,
          singleLinear1OutBuffer,
          jointRows,
          singleQ4TileCols,
          useSingleLinear1OutputF16,
          {
            ...singleLinear1Q4Options,
            kChunk: singleQ4KChunk,
            cacheKey: `${scratchKey}|single-linear1-q4|${blockIndex}`,
          },
        );
    return [stage];
  };
  const singleLinear1Q4Stages = useSingleLinear1Q4
    ? await Promise.all(Array.from({length: singleBlockCount}, (_, blockIndex) => makeSingleLinear1Q4StagesForBlock(blockIndex)))
    : [];
  const singleLinear2Q4Stages = useSingleLinear2Dp4a ? [] : await Promise.all(Array.from({length: singleBlockCount}, (_, blockIndex) => (
    createQ4LinearStage(
      device,
      findFullManifestLinear(config.fullManifest, `single_blocks.${blockIndex}.linear2`),
      baseUrl,
      singleLinear2InF16Buffer,
      singleLinear2OutBuffer,
      jointRows,
      singleQ4TileCols,
      false,
      {kChunk: singleQ4KChunk, cacheKey: `${scratchKey}|single-linear2-q4|${blockIndex}`},
    )
  )));

  const timeStage0Stages = await Promise.all(timestepBuffers.map((buffer, index) => (
    createQ4LinearStage(
      device,
      findFullManifestLinear(config.fullManifest, "time_in.in_layer"),
      baseUrl,
      buffer,
      timeHiddenF32Buffer,
      1,
      96,
      false,
      {cacheKey: `${scratchKey}|time-in-0|step-${index}`},
    )
  )));
  const timeSiluStage = await createF32ToF16Stage(device, timeHiddenF32Buffer, timeHiddenF16Buffer, hidden, true, `${scratchKey}|time-silu`);
  const timeStage1 = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "time_in.out_layer"), baseUrl, timeHiddenF16Buffer, vecF32Buffer, 1, 96, false, {cacheKey: `${scratchKey}|time-in-1`});
  const vecCastStage = await createF32ToF16Stage(device, vecF32Buffer, vecF16Buffer, hidden, true, `${scratchKey}|vec-cast`);
  const modImgStage = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "double_stream_modulation_img.lin"), baseUrl, vecF16Buffer, modImgBuffer, 1, 96, false, {cacheKey: `${scratchKey}|mod-img`});
  const modTxtStage = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "double_stream_modulation_txt.lin"), baseUrl, vecF16Buffer, modTxtBuffer, 1, 96, false, {cacheKey: `${scratchKey}|mod-txt`});
  const modSingleStage = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "single_stream_modulation.lin"), baseUrl, vecF16Buffer, modSingleBuffer, 1, 96, false, {cacheKey: `${scratchKey}|mod-single`});
  const finalModStage = await createQ4LinearStage(device, findFullManifestLinear(config.fullManifest, "final_layer.adaLN_modulation.1"), baseUrl, vecF16Buffer, finalModBuffer, 1, 96, false, {cacheKey: `${scratchKey}|final-mod`});

  const makeLinearBuffers = (bundle) => ({
    w: createImmutableBuffer(device, bundle.weight, GPUBufferUsage.STORAGE, bundle.weightCacheKey),
    s: createImmutableBuffer(device, bundle.scales, GPUBufferUsage.STORAGE, bundle.scalesCacheKey),
  });
  const makeParams = (values) => createBuffer(device, new Uint32Array(values), GPUBufferUsage.UNIFORM);
  const res = (buffer, offset = 0) => offset ? {buffer, offset} : {buffer};
  const runStage = (pass, pipeline, bindGroup, x, y = undefined) => {
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    if (y === undefined) pass.dispatchWorkgroups(x);
    else pass.dispatchWorkgroups(x, y);
  };
  const dotWorkgroupsY = (rows) => Math.ceil(rows / linearRowBlock);

  const imgInWeights = makeLinearBuffers(imgIn);
  const txtInWeights = makeLinearBuffers(txtIn);
  const finalWeights = makeLinearBuffers(finalLinear);
  const params = {
    quantLatent: makeParams([imgRows, latentChannels, hidden, kWordsLatent]),
    quantContext: makeParams([txtRows, contextDim, hidden, kWordsContext]),
    imgIn: makeParams([imgRows, latentChannels, hidden, kWordsLatent, 0, 0, 0, 0]),
    txtIn: makeParams([txtRows, contextDim, hidden, kWordsContext, 0, 0, 0, 0]),
    imgPre: makeParams([imgRows, hidden, qkvM, kWordsHidden]),
    txtPre: makeParams([txtRows, hidden, qkvM, kWordsHidden]),
    imgDotQkv: makeParams([imgRows, hidden, qkvM, kWordsHidden, 0, 0, 0, 0]),
    txtDotQkv: makeParams([txtRows, hidden, qkvM, kWordsHidden, 0, 0, 0, 0]),
    imgQkvNorm: makeParams([imgRows, qkvM, 24, 128, hidden, txtRows, txtRows, imageWidth]),
    txtQkvNorm: makeParams([txtRows, qkvM, 24, 128, hidden, 0, txtRows, imageWidth]),
    doubleAttention: makeParams([jointRows, 24, 128, hidden]),
    imgQuantAttn: makeParams([imgRows, hidden, kWordsHidden, txtRows, hidden]),
    txtQuantAttn: makeParams([txtRows, hidden, kWordsHidden, 0, hidden]),
    imgProj: makeParams([imgRows, hidden, hidden, kWordsHidden, 0, 0, 0, 0]),
    txtProj: makeParams([txtRows, hidden, hidden, kWordsHidden, 0, 0, 0, 0]),
    imgMlpPre: makeParams([imgRows, hidden, doubleMlp1M, kWordsHidden]),
    txtMlpPre: makeParams([txtRows, hidden, doubleMlp1M, kWordsHidden]),
    imgMlp0: makeParams([imgRows, hidden, doubleMlp1M, kWordsHidden, 0, 0, 0, 0]),
    txtMlp0: makeParams([txtRows, hidden, doubleMlp1M, kWordsHidden, 0, 0, 0, 0]),
    imgAct: makeParams([imgRows, doubleMlp1M, doubleMlpK, 0, 0, doubleMlpK, kWordsDoubleMlp, 0]),
    txtAct: makeParams([txtRows, doubleMlp1M, doubleMlpK, 0, 0, doubleMlpK, kWordsDoubleMlp, 0]),
    imgMlp2: makeParams([imgRows, doubleMlpK, hidden, kWordsDoubleMlp, 0, 0, 0, 0]),
    txtMlp2: makeParams([txtRows, doubleMlpK, hidden, kWordsDoubleMlp, 0, 0, 0, 0]),
    singlePre: makeParams([jointRows, hidden, singleLinear1M, kWordsHidden]),
    singlePreGroup: makeParams([jointRows, hidden, kWordsHidden, 16, hiddenQ4Groups, 0, 0, 0]),
    singleDot1: makeParams([jointRows, hidden, singleLinear1M, kWordsHidden, 0, 0, 0, 0]),
    singleAttention: makeParams([jointRows, singleLinear1M, 24, 128, 9216, hidden, txtRows, imageWidth]),
    singleAct: makeParams([jointRows, singleLinear1M, singleLinear2K, hidden, 9216, 9216, kWordsSingleMlp, 0]),
    singleDot2: makeParams([jointRows, singleLinear2K, hidden, kWordsSingleMlp, 0, 0, 0, 0]),
    singleResidual: makeParams([jointRows, hidden, 0, 0]),
    singleTailDelta: makeParams([jointRows * hidden, 0, 0, 0]),
    finalPre: makeParams([imgRows, hidden, latentChannels, kWordsHidden]),
    finalDot: makeParams([imgRows, hidden, latentChannels, kWordsHidden, 0, 0, 0, 0]),
  };

  const makeQuantF32Bind = (input, packed, scales, paramsBuffer) => device.createBindGroup({
    layout: quantF32Pipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: input}},
      {binding: 1, resource: {buffer: packed}},
      {binding: 2, resource: {buffer: scales}},
      {binding: 3, resource: {buffer: paramsBuffer}},
    ],
  });
  const makeDotBind = (pipeline, packed, packedScales, w, wScales, out, paramsBuffer) => device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: packed}},
      {binding: 1, resource: {buffer: w}},
      {binding: 2, resource: {buffer: packedScales}},
      {binding: 3, resource: {buffer: wScales}},
      {binding: 4, resource: {buffer: out}},
      {binding: 5, resource: {buffer: paramsBuffer}},
    ],
  });
  const makePreNormBind = (state, modBuffer, shiftOffset, scaleOffset, paramsBuffer, packed = packedHiddenBuffer, scales = scalesBuffer, stateOffset = 0) => device.createBindGroup({
    layout: preNormQuantPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: res(state, stateOffset)},
      {binding: 1, resource: res(modBuffer, shiftOffset)},
      {binding: 2, resource: res(modBuffer, scaleOffset)},
      {binding: 3, resource: {buffer: packed}},
      {binding: 4, resource: {buffer: scales}},
      {binding: 5, resource: {buffer: paramsBuffer}},
    ],
  });
  const makePreNormF16Bind = (state, modBuffer, shiftOffset, scaleOffset, paramsBuffer, output = singlePreF16Buffer) => device.createBindGroup({
    layout: preNormF16Pipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: state}},
      {binding: 1, resource: res(modBuffer, shiftOffset)},
      {binding: 2, resource: res(modBuffer, scaleOffset)},
      {binding: 3, resource: {buffer: output}},
      {binding: 4, resource: {buffer: paramsBuffer}},
    ],
  });
  const makePreNormGroupBind = (state, modBuffer, shiftOffset, scaleOffset, paramsBuffer) => device.createBindGroup({
    layout: preNormGroupQuantPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: state}},
      {binding: 1, resource: res(modBuffer, shiftOffset)},
      {binding: 2, resource: res(modBuffer, scaleOffset)},
      {binding: 3, resource: {buffer: packedHiddenBuffer}},
      {binding: 4, resource: {buffer: groupedHiddenScalesBuffer}},
      {binding: 5, resource: {buffer: paramsBuffer}},
    ],
  });
  const makeResidualDotBind = (
    packed,
    packedScales,
    w,
    wScales,
    out,
    paramsBuffer,
    residual,
    gate,
    outOffset = 0,
    residualOffset = 0,
  ) => device.createBindGroup({
    layout: dotResidualPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: packed}},
      {binding: 1, resource: {buffer: w}},
      {binding: 2, resource: {buffer: packedScales}},
      {binding: 3, resource: {buffer: wScales}},
      {binding: 4, resource: res(out, outOffset)},
      {binding: 5, resource: {buffer: paramsBuffer}},
      {binding: 6, resource: res(residual, residualOffset)},
      {binding: 7, resource: gate},
    ],
  });

  const inputProjectionBinds = {
    quantLatent: makeQuantF32Bind(latentF32Buffer, inputPackedBuffer, inputScalesBuffer, params.quantLatent),
    imgIn: makeDotBind(dotF32Pipeline, inputPackedBuffer, inputScalesBuffer, imgInWeights.w, imgInWeights.s, imgStateA, params.imgIn),
    quantContext: makeQuantF32Bind(contextF32Buffer, inputPackedBuffer, inputScalesBuffer, params.quantContext),
    txtIn: makeDotBind(dotF32Pipeline, inputPackedBuffer, inputScalesBuffer, txtInWeights.w, txtInWeights.s, txtBaseState, params.txtIn),
  };
  const hiddenModOffsets = {
    mod1Shift: 0,
    mod1Scale: hidden * 4,
    mod1Gate: hidden * 8,
    mod2Shift: hidden * 12,
    mod2Scale: hidden * 16,
    mod2Gate: hidden * 20,
  };
  const singleMod = {
    shift: 0,
    scale: hidden * 4,
    gate: hidden * 8,
  };

  const doubleCommonBind = {
    attention: device.createBindGroup({
      layout: jointAttentionPipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: doubleVBuffer}},
        {binding: 1, resource: {buffer: doubleQNormBuffer}},
        {binding: 2, resource: {buffer: doubleKNormBuffer}},
        {binding: 3, resource: {buffer: doubleAttentionOutBuffer}},
        {binding: 4, resource: {buffer: params.doubleAttention}},
      ],
    }),
    imgQuantAttn: device.createBindGroup({
      layout: quantOffsetPipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: doubleAttentionOutBuffer}},
        {binding: 1, resource: {buffer: packedHiddenBuffer}},
        {binding: 2, resource: {buffer: scalesBuffer}},
        {binding: 3, resource: {buffer: params.imgQuantAttn}},
      ],
    }),
    txtQuantAttn: device.createBindGroup({
      layout: quantOffsetPipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: doubleAttentionOutBuffer}},
        {binding: 1, resource: {buffer: packedHiddenBuffer}},
        {binding: 2, resource: {buffer: scalesBuffer}},
        {binding: 3, resource: {buffer: params.txtQuantAttn}},
      ],
    }),
    imgAct: device.createBindGroup({
      layout: doubleActivateMlpPipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: doubleMlp0Buffer}},
        {binding: 1, resource: {buffer: packedDoubleMlpBuffer}},
        {binding: 2, resource: {buffer: doubleMlpScalesBuffer}},
        {binding: 3, resource: {buffer: params.imgAct}},
      ],
    }),
    txtAct: device.createBindGroup({
      layout: doubleActivateMlpPipeline.getBindGroupLayout(0),
      entries: [
        {binding: 0, resource: {buffer: doubleMlp0Buffer}},
        {binding: 1, resource: {buffer: packedDoubleMlpBuffer}},
        {binding: 2, resource: {buffer: doubleMlpScalesBuffer}},
        {binding: 3, resource: {buffer: params.txtAct}},
      ],
    }),
  };

  const doubleStages = doubleBlocks.map((block, offset) => {
    const ping = offset & 1;
    const isLastDoubleBlock = offset === doubleBlocks.length - 1;
    const imgInputState = ping ? imgStateB : imgStateA;
    const txtInputState = offset === 0 ? txtBaseState : (ping ? txtStateB : txtStateA);
    const imgOutputState = isLastDoubleBlock ? jointStateA : (ping ? imgStateA : imgStateB);
    const txtOutputState = isLastDoubleBlock ? jointStateA : (ping ? txtStateA : txtStateB);
    const imgOutputOffset = isLastDoubleBlock ? txtBytes : 0;
    const txtOutputOffset = 0;
    const weights = {
      imgQkv: makeLinearBuffers(block.imgQkv),
      txtQkv: makeLinearBuffers(block.txtQkv),
      imgProj: makeLinearBuffers(block.imgProj),
      txtProj: makeLinearBuffers(block.txtProj),
      imgMlp0: makeLinearBuffers(block.imgMlp0),
      imgMlp2: makeLinearBuffers(block.imgMlp2),
      txtMlp0: makeLinearBuffers(block.txtMlp0),
      txtMlp2: makeLinearBuffers(block.txtMlp2),
    };
    const imgQueryScaleBuffer = createBuffer(device, block.imgNorm.queryScale, GPUBufferUsage.STORAGE);
    const imgKeyScaleBuffer = createBuffer(device, block.imgNorm.keyScale, GPUBufferUsage.STORAGE);
    const txtQueryScaleBuffer = createBuffer(device, block.txtNorm.queryScale, GPUBufferUsage.STORAGE);
    const txtKeyScaleBuffer = createBuffer(device, block.txtNorm.keyScale, GPUBufferUsage.STORAGE);
    return {
      imgQkvPre: makePreNormBind(imgInputState, modImgBuffer, hiddenModOffsets.mod1Shift, hiddenModOffsets.mod1Scale, params.imgPre),
      txtQkvPre: makePreNormBind(txtInputState, modTxtBuffer, hiddenModOffsets.mod1Shift, hiddenModOffsets.mod1Scale, params.txtPre),
      imgQkvDot: makeDotBind(dotF16Pipeline, packedHiddenBuffer, scalesBuffer, weights.imgQkv.w, weights.imgQkv.s, imgQkvBuffer, params.imgDotQkv),
      txtQkvDot: makeDotBind(dotF16Pipeline, packedHiddenBuffer, scalesBuffer, weights.txtQkv.w, weights.txtQkv.s, txtQkvBuffer, params.txtDotQkv),
      imgQkvNorm: device.createBindGroup({
        layout: doubleQkvNormPipeline.getBindGroupLayout(0),
        entries: [
          {binding: 0, resource: {buffer: imgQkvBuffer}},
          {binding: 1, resource: {buffer: imgQueryScaleBuffer}},
          {binding: 2, resource: {buffer: imgKeyScaleBuffer}},
          {binding: 3, resource: {buffer: doubleQNormBuffer}},
          {binding: 4, resource: {buffer: doubleKNormBuffer}},
          {binding: 5, resource: {buffer: doubleVBuffer}},
          {binding: 6, resource: {buffer: params.imgQkvNorm}},
          {binding: 7, resource: {buffer: doubleRopeFreqBuffer}},
        ],
      }),
      txtQkvNorm: device.createBindGroup({
        layout: doubleQkvNormPipeline.getBindGroupLayout(0),
        entries: [
          {binding: 0, resource: {buffer: txtQkvBuffer}},
          {binding: 1, resource: {buffer: txtQueryScaleBuffer}},
          {binding: 2, resource: {buffer: txtKeyScaleBuffer}},
          {binding: 3, resource: {buffer: doubleQNormBuffer}},
          {binding: 4, resource: {buffer: doubleKNormBuffer}},
          {binding: 5, resource: {buffer: doubleVBuffer}},
          {binding: 6, resource: {buffer: params.txtQkvNorm}},
          {binding: 7, resource: {buffer: doubleRopeFreqBuffer}},
        ],
      }),
      imgProj: makeResidualDotBind(packedHiddenBuffer, scalesBuffer, weights.imgProj.w, weights.imgProj.s, imgMidState, params.imgProj, imgInputState, res(modImgBuffer, hiddenModOffsets.mod1Gate)),
      txtProj: makeResidualDotBind(packedHiddenBuffer, scalesBuffer, weights.txtProj.w, weights.txtProj.s, txtMidState, params.txtProj, txtInputState, res(modTxtBuffer, hiddenModOffsets.mod1Gate)),
      imgMlpPre: makePreNormBind(imgMidState, modImgBuffer, hiddenModOffsets.mod2Shift, hiddenModOffsets.mod2Scale, params.imgMlpPre),
      txtMlpPre: makePreNormBind(txtMidState, modTxtBuffer, hiddenModOffsets.mod2Shift, hiddenModOffsets.mod2Scale, params.txtMlpPre),
      imgMlp0: makeDotBind(dotF16Pipeline, packedHiddenBuffer, scalesBuffer, weights.imgMlp0.w, weights.imgMlp0.s, doubleMlp0Buffer, params.imgMlp0),
      txtMlp0: makeDotBind(dotF16Pipeline, packedHiddenBuffer, scalesBuffer, weights.txtMlp0.w, weights.txtMlp0.s, doubleMlp0Buffer, params.txtMlp0),
      imgMlp2: makeResidualDotBind(packedDoubleMlpBuffer, doubleMlpScalesBuffer, weights.imgMlp2.w, weights.imgMlp2.s, imgOutputState, params.imgMlp2, imgMidState, res(modImgBuffer, hiddenModOffsets.mod2Gate), imgOutputOffset),
      txtMlp2: makeResidualDotBind(packedDoubleMlpBuffer, doubleMlpScalesBuffer, weights.txtMlp2.w, weights.txtMlp2.s, txtOutputState, params.txtMlp2, txtMidState, res(modTxtBuffer, hiddenModOffsets.mod2Gate), txtOutputOffset),
      imgOutputState,
      txtOutputState,
      imgOutputOffset,
      txtOutputOffset,
    };
  });

  const singleAttentionBind = device.createBindGroup({
    layout: singleAttentionPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: singleLinear1OutBuffer}},
      {binding: 1, resource: {buffer: singleQNormBuffer}},
      {binding: 2, resource: {buffer: singleKNormBuffer}},
      {binding: 3, resource: {buffer: singleAttentionOutBuffer}},
      {binding: 4, resource: {buffer: params.singleAttention}},
    ],
  });
  const singleActivateBind = device.createBindGroup({
    layout: singleActivatePipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: singleLinear1OutBuffer}},
      {binding: 1, resource: {buffer: singleAttentionOutBuffer}},
      {binding: 2, resource: {buffer: packedSingleMlpBuffer}},
      {binding: 3, resource: {buffer: singleMlpScalesBuffer}},
      {binding: 4, resource: {buffer: params.singleAct}},
    ],
  });
  const singleActivateF32Bind = useSingleLinear2Q4 ? device.createBindGroup({
    layout: singleActivateF32Pipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: singleLinear1OutBuffer}},
      {binding: 1, resource: {buffer: singleAttentionOutBuffer}},
      {binding: 2, resource: {buffer: singleLinear2InF32Buffer}},
      {binding: 3, resource: {buffer: params.singleAct}},
    ],
  }) : null;

  const singleStages = singleBlocks.map((block, offset) => {
    const ping = offset & 1;
    const inputState = ping ? jointStateB : jointStateA;
    const outputState = ping ? jointStateA : jointStateB;
    const weights = {
      linear1: makeLinearBuffers(block.linear1),
      linear2: makeLinearBuffers(block.linear2),
    };
    const norm = singleNorms[offset];
    const queryScaleBuffer = createImmutableBuffer(device, norm.queryScale, GPUBufferUsage.STORAGE, norm.queryScaleUrl);
    const keyScaleBuffer = createImmutableBuffer(device, norm.keyScale, GPUBufferUsage.STORAGE, norm.keyScaleUrl);
    return {
      preNorm: makePreNormBind(inputState, modSingleBuffer, singleMod.shift, singleMod.scale, params.singlePre),
      preNormF16: needsSingleLinear1F16PreNorm
        ? makePreNormF16Bind(inputState, modSingleBuffer, singleMod.shift, singleMod.scale, params.singlePre)
        : null,
      preNormGroup: needsSingleLinear1GroupedPreNorm
        ? makePreNormGroupBind(inputState, modSingleBuffer, singleMod.shift, singleMod.scale, params.singlePreGroup)
        : null,
      dot1Q4Stages: singleLinear1Q4Stages[offset] || [],
      dot1: makeDotBind(dotF16Pipeline, packedHiddenBuffer, scalesBuffer, weights.linear1.w, weights.linear1.s, singleLinear1OutBuffer, params.singleDot1),
      qkNorm: device.createBindGroup({
        layout: singleQkNormPipeline.getBindGroupLayout(0),
        entries: [
          {binding: 0, resource: {buffer: singleLinear1OutBuffer}},
          {binding: 1, resource: {buffer: queryScaleBuffer}},
          {binding: 2, resource: {buffer: keyScaleBuffer}},
          {binding: 3, resource: {buffer: singleQNormBuffer}},
          {binding: 4, resource: {buffer: singleKNormBuffer}},
          {binding: 5, resource: {buffer: params.singleAttention}},
          {binding: 6, resource: {buffer: singleRopeSinCosBuffer}},
        ],
      }),
      dot2Q4: useSingleLinear2Dp4a ? null : singleLinear2Q4Stages[offset],
      residualQ4: useSingleLinear2Q4 ? device.createBindGroup({
        layout: singleResidualPipeline.getBindGroupLayout(0),
        entries: [
          {binding: 0, resource: {buffer: inputState}},
          {binding: 1, resource: {buffer: singleLinear2OutBuffer}},
          {binding: 2, resource: res(modSingleBuffer, singleMod.gate)},
          {binding: 3, resource: {buffer: outputState}},
          {binding: 4, resource: {buffer: params.singleResidual}},
        ],
      }) : null,
      dot2: makeResidualDotBind(packedSingleMlpBuffer, singleMlpScalesBuffer, weights.linear2.w, weights.linear2.s, outputState, params.singleDot2, inputState, res(modSingleBuffer, singleMod.gate)),
    };
  });

  const finalInputState = (singleStages.length & 1) ? jointStateB : jointStateA;
  const singleAttentionWorkgroupsX = useSubgroupSingleAttention
    ? jointRows
    : Math.ceil(jointRows / attentionQueryRows);
  const singleTailDeltaCacheBind = singleTailDeltaEnabled ? device.createBindGroup({
    layout: singleTailDeltaCachePipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: singleTailBaseCacheBuffer}},
      {binding: 1, resource: {buffer: finalInputState}},
      {binding: 2, resource: {buffer: singleTailDeltaCacheBuffer}},
      {binding: 3, resource: {buffer: params.singleTailDelta}},
    ],
  }) : null;
  const singleTailDeltaApplyBind = singleTailDeltaEnabled ? device.createBindGroup({
    layout: singleTailDeltaApplyPipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: finalInputState}},
      {binding: 1, resource: {buffer: singleTailDeltaCacheBuffer}},
      {binding: 2, resource: {buffer: params.singleTailDelta}},
    ],
  }) : null;
  const finalNormBind = makePreNormBind(finalInputState, finalModBuffer, 0, hidden * 4, params.finalPre, packedHiddenBuffer, scalesBuffer, txtBytes);
  const finalDotBind = makeDotBind(finalDotPipeline, packedHiddenBuffer, scalesBuffer, finalWeights.w, finalWeights.s, predBuffer, params.finalDot);
  const latentUpdateBinds = updateParamsBuffers.map((buffer) => device.createBindGroup({
    layout: latentUpdatePipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: latentF32Buffer}},
      {binding: 1, resource: {buffer: predBuffer}},
      {binding: 2, resource: {buffer}},
    ],
  }));
  const latentUpdateAb2Binds = useApproxAb2 ? updateParamsBuffers.map((buffer) => device.createBindGroup({
    layout: latentUpdateAb2Pipeline.getBindGroupLayout(0),
    entries: [
      {binding: 0, resource: {buffer: latentF32Buffer}},
      {binding: 1, resource: {buffer: predBuffer}},
      {binding: 2, resource: {buffer: previousPredBuffer}},
      {binding: 3, resource: {buffer}},
    ],
  })) : [];
  const stageSetupMs = performance.now() - stageSetupStart;

  if (config.prepareOnly === true) {
    return {
      verdict: "custom-flux-transformer-stage-prepared",
      latentF16: new Uint16Array(0),
      config: {
        imageTokens: imgRows,
        textTokens: txtRows,
        jointRows,
        latentChannels,
        imageWidth,
        doubleBlockCount,
        singleBlockCount,
        steps: timesteps.length - 1,
        linearTileCols,
        projTileCols,
        finalTileCols,
        wChunkCols,
        linearRowBlock,
        singleQ4KChunk,
        attentionTileKeys,
        attentionQueryRows,
        singleQkNormStorage: useSingleQkNormStorageF16 ? "f16" : "f32",
        singleLinear1Output: useSingleLinear1OutputF16 ? "f16" : "f32",
        singleLinear1Q4Kernel: useSingleLinear1Q4Dp4aQkvOnly ? "dp4a-qkv" : (useSingleLinear1Q4Dp4a ? "dp4a" : "f16"),
        singleLinear1Q4ActivationScale: useSingleLinear1Q4GroupedActivation ? "group16" : "row",
        singleLinear1QkvBackend: useSingleLinear1QkvDp4a ? "dp4a" : "q4",
        singleLinear1MlpBackend: useSingleLinear1MlpDp4a ? "dp4a" : "q4",
        singleLinear2Backend: useSingleLinear2Dp4a ? "dp4a" : "q4",
        singleAttentionKernel: useSubgroupSingleAttention ? "subgroup" : "tiled",
        stepSubmitFusion,
        singleComputePass: false,
        skippedOptionalSetupBytes,
        skippedOptionalPipelines,
        approxReusePredEvery,
        approxPredictionMode: useApproxAb2 ? "ab2" : "raw",
        approxAbScale: useApproxAb2 ? approxAbScale : 0,
        skipSingleBlocksFromStep,
        skipSingleBlocksFromBlock,
        reuseSingleTailFromStep,
        reuseSingleTailFromBlock,
      },
      load: {
        total_ms: loadMs,
        stage_setup_ms: stageSetupMs,
        text_projection_init_ms: 0,
        text_projection_cache_hit: Boolean(cachedTxtBaseState || persistentTxtProjectionHit || staticTxtProjectionHit),
        text_projection_cache_source: cachedTxtBaseState ? "gpu" : (persistentTxtProjectionHit ? "indexeddb" : (staticTxtProjectionHit ? "static-file" : "not-initialized")),
        text_projection_persistent_ms: persistentTxtProjectionMs,
        readback_ms: 0,
      },
      summary: {
        total_step_ms: 0,
        median_step_ms: 0,
        finite: 0,
        max_abs: 0,
      },
      step_ms: [],
      sample: [],
    };
  }

  const initStart = performance.now();
  if (!cachedTxtBaseState && !persistentTxtProjectionHit && !staticTxtProjectionHit) {
    const encoder = device.createCommandEncoder();
    const pass = encoder.beginComputePass();
    runStage(pass, quantF32Pipeline, inputProjectionBinds.quantContext, txtRows);
    runStage(pass, dotF32Pipeline, inputProjectionBinds.txtIn, Math.ceil(hidden / linearTileCols), dotWorkgroupsY(txtRows));
    pass.end();
    device.queue.submit([encoder.finish()]);
    await device.queue.onSubmittedWorkDone();
    if (persistentTextProjectionKey) {
      const saveStart = performance.now();
      const txtProjection = await readFloat32Buffer(device, txtBaseState, txtRows * hidden);
      const saved = await savePersistentFloat32(persistentTextProjectionKey, txtProjection);
      persistentTxtProjectionMs += performance.now() - saveStart;
      if (!saved) persistentTxtProjectionMs = -Math.abs(persistentTxtProjectionMs || 1);
    }
    if (textProjectionDeviceCache && textProjectionCacheKey) {
      textProjectionDeviceCache.set(textProjectionCacheKey, txtBaseState);
    }
  }
  const initMs = performance.now() - initStart;

  if (config.textProjectionOnly === true) {
    return {
      verdict: "custom-flux-transformer-text-projection-prepared",
      latentF16: new Uint16Array(0),
      config: {
        imageTokens: imgRows,
        textTokens: txtRows,
        jointRows,
        latentChannels,
        imageWidth,
        linearTileCols,
      },
      load: {
        total_ms: loadMs,
        stage_setup_ms: stageSetupMs,
        text_projection_init_ms: initMs,
        text_projection_cache_hit: Boolean(cachedTxtBaseState || persistentTxtProjectionHit || staticTxtProjectionHit),
        text_projection_cache_source: cachedTxtBaseState ? "gpu" : (persistentTxtProjectionHit ? "indexeddb" : (staticTxtProjectionHit ? "static-file" : "computed")),
        text_projection_persistent_ms: persistentTxtProjectionMs,
        readback_ms: 0,
      },
      summary: {
        total_step_ms: 0,
        median_step_ms: 0,
        finite: 0,
        max_abs: 0,
      },
      step_ms: [],
      sample: [],
    };
  }

  if (String(config.debugStopAfter || "").toLowerCase() === "input_projection") {
    const encoder = device.createCommandEncoder();
    const pass = encoder.beginComputePass();
    runStage(pass, quantF32Pipeline, inputProjectionBinds.quantLatent, imgRows);
    runStage(pass, dotF32Pipeline, inputProjectionBinds.imgIn, Math.ceil(hidden / linearTileCols), dotWorkgroupsY(imgRows));
    pass.end();
    device.queue.submit([encoder.finish()]);
    await device.queue.onSubmittedWorkDone();

    const imgCount = Math.min(
      imgRows * hidden,
      Number(config.debugImgReadbackCount ?? config.debugReadbackCount ?? imgRows * hidden),
    );
    const txtCount = Math.min(
      txtRows * hidden,
      Number(config.debugTxtReadbackCount ?? Math.min(4096, txtRows * hidden)),
    );
    const [imgProjection, txtProjection] = await Promise.all([
      readFloat32Buffer(device, imgStateA, imgCount),
      readFloat32Buffer(device, txtBaseState, txtCount),
    ]);
    return {
      verdict: "custom-flux-transformer-debug-input-projection",
      latentF16: new Uint16Array(0),
      config: {
        imageTokens: imgRows,
        textTokens: txtRows,
        jointRows,
        latentChannels,
        imageWidth,
        debugStopAfter: "input_projection",
        linearTileCols,
        wChunkCols,
      },
      load: {total_ms: loadMs, text_projection_init_ms: initMs},
      debug: {
        input_projection: {
          img: {
            shape: [imgRows, hidden],
            count: imgProjection.length,
            stats: floatArrayStats(imgProjection),
            values: Array.from(imgProjection),
          },
          txt: {
            shape: [txtRows, hidden],
            count: txtProjection.length,
            stats: floatArrayStats(txtProjection),
            values: Array.from(txtProjection),
          },
        },
      },
      summary: {
        finite: imgProjection.length + txtProjection.length,
        max_abs: Math.max(
          ...Array.from(imgProjection, (value) => Math.abs(value)),
          ...Array.from(txtProjection, (value) => Math.abs(value)),
          0,
        ),
      },
    };
  }

  const stepTimes = [];
  let approxReusedSteps = 0;
  let approxCollapsedUpdateDispatches = 0;
  let skippedSingleBlocks = 0;
  let reusedSingleTailBlocks = 0;
  const phaseProfile = {
    time_input_ms: 0,
    double_blocks_ms: 0,
    single_blocks_ms: 0,
    single_linear1_ms: 0,
    single_attention_ms: 0,
    single_mlp_ms: 0,
    final_update_ms: 0,
  };
  const deferStepWait = !profilePhases && config.deferStepWait !== false && !config.debugStopAfter;
  const singleComputePass = config.singleComputePass === true && !config.debugStopAfter && !profilePhases;
  const allStepsStart = performance.now();
  const fusedEncoder = stepSubmitFusion ? device.createCommandEncoder() : null;
  let encodedStepCount = 0;
  let previousPredAvailable = false;
  for (let step = 0; step < denoiseStepCount; ++step) {
    const tCurr = timesteps[step];
    const tPrev = timesteps[step + 1];
    const start = performance.now();
    const reusePreviousPrediction = approxReusePredEvery > 1 && step > 0 && (step % approxReusePredEvery) !== 0;
    if (reusePreviousPrediction) {
      approxReusedSteps += 1;
      stepTimes.push(0);
      continue;
    }
    const currentDt = tPrev - tCurr;
    let combinedDt = currentDt;
    let combinedReuseSteps = 0;
    if (approxReusePredEvery > 1) {
      for (let lookahead = step + 1; lookahead < timesteps.length - 1; lookahead += 1) {
        const lookaheadReusesPrediction = lookahead > 0 && (lookahead % approxReusePredEvery) !== 0;
        if (!lookaheadReusesPrediction) {
          break;
        }
        combinedDt += timesteps[lookahead + 1] - timesteps[lookahead];
        combinedReuseSteps += 1;
      }
    }
    approxCollapsedUpdateDispatches += combinedReuseSteps;
    const reuseDt = combinedDt - currentDt;
    const useAb2LatentUpdate = useApproxAb2 && previousPredAvailable && combinedReuseSteps > 0 && Math.abs(reuseDt) > 0;
    const stepResourceIndex = stepSubmitFusion ? step : 0;
    if (!stepSubmitFusion) {
      device.queue.writeBuffer(updateParamsBuffers[0], 0, new Float32Array([
        imgRows * latentChannels,
        useAb2LatentUpdate ? currentDt : combinedDt,
        useAb2LatentUpdate ? reuseDt : 0,
        useAb2LatentUpdate ? approxAbScale : 0,
      ]));
      device.queue.writeBuffer(timestepBuffers[0], 0, makeTimestepEmbeddingF16(tCurr));
    }
    let encoder = stepSubmitFusion ? fusedEncoder : device.createCommandEncoder();
    encodedStepCount += 1;

    let pass = encoder.beginComputePass();
    let phaseStart = performance.now();
    const submitProfilePhase = async (phaseName) => {
      if (!profilePhases) return;
      pass.end();
      device.queue.submit([encoder.finish()]);
      await device.queue.onSubmittedWorkDone();
      phaseProfile[phaseName] += performance.now() - phaseStart;
      encoder = device.createCommandEncoder();
      pass = encoder.beginComputePass();
      phaseStart = performance.now();
    };
    const timeStage0 = timeStage0Stages[stepResourceIndex];
    runStage(pass, timeStage0.pipeline, timeStage0.bindGroup, timeStage0.workgroupsX, timeStage0.workgroupsY);
    runStage(pass, timeSiluStage.pipeline, timeSiluStage.bindGroup, timeSiluStage.workgroupsX);
    runStage(pass, timeStage1.pipeline, timeStage1.bindGroup, timeStage1.workgroupsX, timeStage1.workgroupsY);
    runStage(pass, vecCastStage.pipeline, vecCastStage.bindGroup, vecCastStage.workgroupsX);
    runStage(pass, modImgStage.pipeline, modImgStage.bindGroup, modImgStage.workgroupsX, modImgStage.workgroupsY);
    runStage(pass, modTxtStage.pipeline, modTxtStage.bindGroup, modTxtStage.workgroupsX, modTxtStage.workgroupsY);
    runStage(pass, modSingleStage.pipeline, modSingleStage.bindGroup, modSingleStage.workgroupsX, modSingleStage.workgroupsY);
    runStage(pass, finalModStage.pipeline, finalModStage.bindGroup, finalModStage.workgroupsX, finalModStage.workgroupsY);
    runStage(pass, quantF32Pipeline, inputProjectionBinds.quantLatent, imgRows);
    runStage(pass, dotF32Pipeline, inputProjectionBinds.imgIn, Math.ceil(hidden / linearTileCols), dotWorkgroupsY(imgRows));
    await submitProfilePhase("time_input_ms");

    for (let doubleIndex = 0; doubleIndex < doubleStages.length; ++doubleIndex) {
      const stage = doubleStages[doubleIndex];
      runStage(pass, preNormQuantPipeline, stage.imgQkvPre, imgRows);
      runStage(pass, dotF16Pipeline, stage.imgQkvDot, Math.ceil(qkvM / linearTileCols), dotWorkgroupsY(imgRows));
      runStage(pass, preNormQuantPipeline, stage.txtQkvPre, txtRows);
      runStage(pass, dotF16Pipeline, stage.txtQkvDot, Math.ceil(qkvM / linearTileCols), dotWorkgroupsY(txtRows));
      runStage(pass, doubleQkvNormPipeline, stage.txtQkvNorm, txtRows, 24);
      runStage(pass, doubleQkvNormPipeline, stage.imgQkvNorm, imgRows, 24);
      runStage(pass, jointAttentionPipeline, doubleCommonBind.attention, Math.ceil(jointRows / attentionQueryRows), 24);
      runStage(pass, quantOffsetPipeline, doubleCommonBind.imgQuantAttn, imgRows);
      runStage(pass, dotResidualPipeline, stage.imgProj, Math.ceil(hidden / projTileCols), dotWorkgroupsY(imgRows));
      runStage(pass, quantOffsetPipeline, doubleCommonBind.txtQuantAttn, txtRows);
      runStage(pass, dotResidualPipeline, stage.txtProj, Math.ceil(hidden / projTileCols), dotWorkgroupsY(txtRows));
      if (String(config.debugStopAfter || "").toLowerCase() === `double_block_${doubleIndex}_attn`) {
        pass.end();
        device.queue.submit([encoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        const imgCount = Math.min(
          imgRows * hidden,
          Number(config.debugImgReadbackCount ?? config.debugReadbackCount ?? imgRows * hidden),
        );
        const txtCount = Math.min(
          txtRows * hidden,
          Number(config.debugTxtReadbackCount ?? Math.min(4096, txtRows * hidden)),
        );
        const [imgValues, txtValues] = await Promise.all([
          readFloat32Buffer(device, imgMidState, imgCount),
          readFloat32Buffer(device, txtMidState, txtCount),
        ]);
        return {
          verdict: "custom-flux-transformer-debug-double-block-attention",
          latentF16: new Uint16Array(0),
          config: {
            imageTokens: imgRows,
            textTokens: txtRows,
            jointRows,
            latentChannels,
            imageWidth,
            debugStopAfter: `double_block_${doubleIndex}_attn`,
            linearTileCols,
            projTileCols,
            wChunkCols,
            attentionTileKeys,
            attentionQueryRows,
            singleLinear1Output: useSingleLinear1OutputF16 ? "f16" : "f32",
            singleLinear1Q4Kernel: useSingleLinear1Q4Dp4aQkvOnly ? "dp4a-qkv" : (useSingleLinear1Q4Dp4a ? "dp4a" : "f16"),
            singleLinear1Q4ActivationScale: useSingleLinear1Q4GroupedActivation ? "group16" : "row",
            singleLinear1QkvBackend: useSingleLinear1QkvDp4a ? "dp4a" : "q4",
            singleLinear1MlpBackend: useSingleLinear1MlpDp4a ? "dp4a" : "q4",
            singleLinear2Backend: useSingleLinear2Dp4a ? "dp4a" : "q4",
          },
          load: {total_ms: loadMs, text_projection_init_ms: initMs},
          debug: {
            [`double_block_${doubleIndex}_attn`]: {
              img: {
                shape: [imgRows, hidden],
                count: imgValues.length,
                stats: floatArrayStats(imgValues),
                values: Array.from(imgValues),
              },
              txt: {
                shape: [txtRows, hidden],
                count: txtValues.length,
                stats: floatArrayStats(txtValues),
                values: Array.from(txtValues),
              },
            },
          },
          summary: {
            finite: imgValues.length + txtValues.length,
            max_abs: Math.max(
              ...Array.from(imgValues, (value) => Math.abs(value)),
              ...Array.from(txtValues, (value) => Math.abs(value)),
              0,
            ),
          },
        };
      }
      runStage(pass, preNormQuantPipeline, stage.imgMlpPre, imgRows);
      runStage(pass, dotF16Pipeline, stage.imgMlp0, Math.ceil(doubleMlp1M / linearTileCols), dotWorkgroupsY(imgRows));
      runStage(pass, doubleActivateMlpPipeline, doubleCommonBind.imgAct, imgRows);
      runStage(pass, dotResidualPipeline, stage.imgMlp2, Math.ceil(hidden / projTileCols), dotWorkgroupsY(imgRows));
      runStage(pass, preNormQuantPipeline, stage.txtMlpPre, txtRows);
      runStage(pass, dotF16Pipeline, stage.txtMlp0, Math.ceil(doubleMlp1M / linearTileCols), dotWorkgroupsY(txtRows));
      runStage(pass, doubleActivateMlpPipeline, doubleCommonBind.txtAct, txtRows);
      runStage(pass, dotResidualPipeline, stage.txtMlp2, Math.ceil(hidden / projTileCols), dotWorkgroupsY(txtRows));
      if (String(config.debugStopAfter || "").toLowerCase() === `double_block_${doubleIndex}`) {
        pass.end();
        device.queue.submit([encoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        const imgCount = Math.min(
          imgRows * hidden,
          Number(config.debugImgReadbackCount ?? config.debugReadbackCount ?? imgRows * hidden),
        );
        const txtCount = Math.min(
          txtRows * hidden,
          Number(config.debugTxtReadbackCount ?? Math.min(4096, txtRows * hidden)),
        );
        const [imgValues, txtValues] = await Promise.all([
          readFloat32Buffer(device, stage.imgOutputState, imgCount, stage.imgOutputOffset),
          readFloat32Buffer(device, stage.txtOutputState, txtCount, stage.txtOutputOffset),
        ]);
        return {
          verdict: "custom-flux-transformer-debug-double-block",
          latentF16: new Uint16Array(0),
          config: {
            imageTokens: imgRows,
            textTokens: txtRows,
            jointRows,
            latentChannels,
            imageWidth,
            debugStopAfter: `double_block_${doubleIndex}`,
            linearTileCols,
            projTileCols,
            wChunkCols,
            attentionTileKeys,
            attentionQueryRows,
          },
          load: {total_ms: loadMs, text_projection_init_ms: initMs},
          debug: {
            [`double_block_${doubleIndex}`]: {
              img: {
                shape: [imgRows, hidden],
                count: imgValues.length,
                stats: floatArrayStats(imgValues),
                values: Array.from(imgValues),
              },
              txt: {
                shape: [txtRows, hidden],
                count: txtValues.length,
                stats: floatArrayStats(txtValues),
                values: Array.from(txtValues),
              },
            },
          },
          summary: {
            finite: imgValues.length + txtValues.length,
            max_abs: Math.max(
              ...Array.from(imgValues, (value) => Math.abs(value)),
              ...Array.from(txtValues, (value) => Math.abs(value)),
              0,
            ),
          },
        };
      }
    }
    if (profilePhases) {
      await submitProfilePhase("double_blocks_ms");
    } else if (!singleComputePass) {
      pass.end();
    }
    if (String(config.debugStopAfter || "").toLowerCase() === "double_blocks") {
      if (singleComputePass) pass.end();
      device.queue.submit([encoder.finish()]);
      await device.queue.onSubmittedWorkDone();
      const txtCount = Math.min(
        txtRows * hidden,
        Number(config.debugTxtReadbackCount ?? Math.min(4096, txtRows * hidden)),
      );
      const imgCount = Math.min(
        imgRows * hidden,
        Number(config.debugImgReadbackCount ?? config.debugReadbackCount ?? imgRows * hidden),
      );
      const [txtValues, imgValues] = await Promise.all([
        readFloat32Buffer(device, jointStateA, txtCount),
        readFloat32Buffer(device, jointStateA, imgCount, txtBytes),
      ]);
      return {
        verdict: "custom-flux-transformer-debug-double-blocks",
        latentF16: new Uint16Array(0),
        config: {
          imageTokens: imgRows,
          textTokens: txtRows,
          jointRows,
          latentChannels,
          imageWidth,
          debugStopAfter: "double_blocks",
          linearTileCols,
          projTileCols,
          wChunkCols,
          attentionTileKeys,
          attentionQueryRows,
        },
        load: {total_ms: loadMs, text_projection_init_ms: initMs},
        debug: {
          double_blocks: {
            txt: {
              shape: [txtRows, hidden],
              count: txtValues.length,
              stats: floatArrayStats(txtValues),
              values: Array.from(txtValues),
            },
            img: {
              shape: [imgRows, hidden],
              count: imgValues.length,
              stats: floatArrayStats(imgValues),
              values: Array.from(imgValues),
            },
          },
        },
        summary: {
          finite: imgValues.length + txtValues.length,
          max_abs: Math.max(
            ...Array.from(imgValues, (value) => Math.abs(value)),
            ...Array.from(txtValues, (value) => Math.abs(value)),
            0,
          ),
        },
      };
    }

    if (!profilePhases && !singleComputePass) {
      pass = encoder.beginComputePass();
    }
    const reuseCachedSingleTail = singleTailDeltaEnabled && step >= reuseSingleTailFromStep;
    const skipLateSingleBlocks = !reuseCachedSingleTail && skipSingleBlocksFromStep > 0 &&
      step >= skipSingleBlocksFromStep &&
      skipSingleBlocksFromBlock < singleStages.length;
    const singleStopIndex = reuseCachedSingleTail
      ? Math.max(0, Math.min(singleStages.length, reuseSingleTailFromBlock))
      : skipLateSingleBlocks
      ? Math.max(0, Math.min(singleStages.length, skipSingleBlocksFromBlock))
      : singleStages.length;
    for (let singleIndex = 0; singleIndex < singleStopIndex; ++singleIndex) {
      const stage = singleStages[singleIndex];
      const q4Stages = stage.dot1Q4Stages || [];
      const hasQ4Dp4aStage = q4Stages.some((item) => item && item.q4Dp4a);
      const hasQ4F16Stage = q4Stages.some((item) => item && !item.q4Dp4a);
      if (hasQ4F16Stage) {
        runStage(pass, preNormF16Pipeline, stage.preNormF16, jointRows);
      }
      if (hasQ4Dp4aStage && useSingleLinear1Q4GroupedActivation) {
        runStage(pass, preNormGroupQuantPipeline, stage.preNormGroup, jointRows);
      } else if (useSingleLinear1Dp4a || hasQ4Dp4aStage) {
        runStage(pass, preNormQuantPipeline, stage.preNorm, jointRows);
      }
      if (useSingleLinear1Dp4a) {
        runStage(pass, dotF16Pipeline, stage.dot1, Math.ceil(singleLinear1M / linearTileCols), dotWorkgroupsY(jointRows));
      }
      for (const q4Stage of q4Stages) {
        runStage(pass, q4Stage.pipeline, q4Stage.bindGroup, q4Stage.workgroupsX, q4Stage.workgroupsY);
      }
      if (profileSingleParts) {
        await submitProfilePhase("single_linear1_ms");
      }
      runStage(pass, singleQkNormPipeline, stage.qkNorm, jointRows, 24);
      runStage(pass, singleAttentionPipeline, singleAttentionBind, singleAttentionWorkgroupsX, 24);
      if (profileSingleParts) {
        await submitProfilePhase("single_attention_ms");
      }
      if (String(config.debugStopAfter || "").toLowerCase() === `single_block_${singleIndex}_attn`) {
        pass.end();
        device.queue.submit([encoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        const txtCount = Math.min(
          txtRows * hidden,
          Number(config.debugTxtReadbackCount ?? Math.min(4096, txtRows * hidden)),
        );
        const imgCount = Math.min(
          imgRows * hidden,
          Number(config.debugImgReadbackCount ?? config.debugReadbackCount ?? imgRows * hidden),
        );
        const [txtValues, imgValues] = await Promise.all([
          readFloat32Buffer(device, singleAttentionOutBuffer, txtCount),
          readFloat32Buffer(device, singleAttentionOutBuffer, imgCount, txtBytes),
        ]);
        return {
          verdict: "custom-flux-transformer-debug-single-block-attention",
          latentF16: new Uint16Array(0),
          config: {
            imageTokens: imgRows,
            textTokens: txtRows,
            jointRows,
            latentChannels,
            imageWidth,
            debugStopAfter: `single_block_${singleIndex}_attn`,
            linearTileCols,
            projTileCols,
            wChunkCols,
            attentionTileKeys,
            attentionQueryRows,
          },
          load: {total_ms: loadMs, text_projection_init_ms: initMs},
          debug: {
            [`single_block_${singleIndex}_attn`]: {
              txt: {
                shape: [txtRows, hidden],
                count: txtValues.length,
                stats: floatArrayStats(txtValues),
                values: Array.from(txtValues),
              },
              img: {
                shape: [imgRows, hidden],
                count: imgValues.length,
                stats: floatArrayStats(imgValues),
                values: Array.from(imgValues),
              },
            },
          },
          summary: {
            finite: imgValues.length + txtValues.length,
            max_abs: Math.max(
              ...Array.from(imgValues, (value) => Math.abs(value)),
              ...Array.from(txtValues, (value) => Math.abs(value)),
              0,
            ),
          },
        };
      }
      if (useSingleLinear2Dp4a) {
        runStage(pass, singleActivatePipeline, singleActivateBind, jointRows);
        runStage(pass, dotResidualPipeline, stage.dot2, Math.ceil(hidden / projTileCols), dotWorkgroupsY(jointRows));
      } else {
        runStage(pass, singleActivateF32Pipeline, singleActivateF32Bind, Math.ceil(singleLinear2K / 256), jointRows);
        runStage(pass, singleLinear2CastStage.pipeline, singleLinear2CastStage.bindGroup, singleLinear2CastStage.workgroupsX);
        runStage(pass, stage.dot2Q4.pipeline, stage.dot2Q4.bindGroup, stage.dot2Q4.workgroupsX, stage.dot2Q4.workgroupsY);
        runStage(pass, singleResidualPipeline, stage.residualQ4, Math.ceil(hidden / 256), jointRows);
      }
      if (profileSingleParts) {
        await submitProfilePhase("single_mlp_ms");
      }
      if (String(config.debugStopAfter || "").toLowerCase() === `single_block_${singleIndex}`) {
        pass.end();
        device.queue.submit([encoder.finish()]);
        await device.queue.onSubmittedWorkDone();
        const out = (singleIndex & 1) ? jointStateA : jointStateB;
        const txtCount = Math.min(
          txtRows * hidden,
          Number(config.debugTxtReadbackCount ?? Math.min(4096, txtRows * hidden)),
        );
        const imgCount = Math.min(
          imgRows * hidden,
          Number(config.debugImgReadbackCount ?? config.debugReadbackCount ?? imgRows * hidden),
        );
        const [txtValues, imgValues] = await Promise.all([
          readFloat32Buffer(device, out, txtCount),
          readFloat32Buffer(device, out, imgCount, txtBytes),
        ]);
        return {
          verdict: "custom-flux-transformer-debug-single-block",
          latentF16: new Uint16Array(0),
          config: {
            imageTokens: imgRows,
            textTokens: txtRows,
            jointRows,
            latentChannels,
            imageWidth,
            debugStopAfter: `single_block_${singleIndex}`,
            linearTileCols,
            projTileCols,
            wChunkCols,
            attentionTileKeys,
            attentionQueryRows,
            singleLinear1Output: useSingleLinear1OutputF16 ? "f16" : "f32",
            singleLinear1Q4Kernel: useSingleLinear1Q4Dp4aQkvOnly ? "dp4a-qkv" : (useSingleLinear1Q4Dp4a ? "dp4a" : "f16"),
            singleLinear1Q4ActivationScale: useSingleLinear1Q4GroupedActivation ? "group16" : "row",
            singleLinear1QkvBackend: useSingleLinear1QkvDp4a ? "dp4a" : "q4",
            singleLinear1MlpBackend: useSingleLinear1MlpDp4a ? "dp4a" : "q4",
            singleLinear2Backend: useSingleLinear2Dp4a ? "dp4a" : "q4",
          },
          load: {total_ms: loadMs, text_projection_init_ms: initMs},
          debug: {
            [`single_block_${singleIndex}`]: {
              txt: {
                shape: [txtRows, hidden],
                count: txtValues.length,
                stats: floatArrayStats(txtValues),
                values: Array.from(txtValues),
              },
              img: {
                shape: [imgRows, hidden],
                count: imgValues.length,
                stats: floatArrayStats(imgValues),
                values: Array.from(imgValues),
              },
            },
          },
          summary: {
            finite: imgValues.length + txtValues.length,
            max_abs: Math.max(
              ...Array.from(imgValues, (value) => Math.abs(value)),
              ...Array.from(txtValues, (value) => Math.abs(value)),
              0,
            ),
          },
        };
      }
      if (
        singleTailDeltaEnabled &&
        step < reuseSingleTailFromStep &&
        singleIndex + 1 === reuseSingleTailFromBlock
      ) {
        const currentBlockOutputState = (singleIndex & 1) ? jointStateA : jointStateB;
        pass.end();
        encoder.copyBufferToBuffer(currentBlockOutputState, 0, singleTailBaseCacheBuffer, 0, jointBytes);
        pass = encoder.beginComputePass();
      }
    }
    if (reuseCachedSingleTail) {
      reusedSingleTailBlocks += singleStages.length - singleStopIndex;
      const currentSingleState = (singleStopIndex & 1) ? jointStateB : jointStateA;
      if (currentSingleState !== finalInputState) {
        pass.end();
        encoder.copyBufferToBuffer(currentSingleState, 0, finalInputState, 0, jointBytes);
        pass = encoder.beginComputePass();
      }
      runStage(pass, singleTailDeltaApplyPipeline, singleTailDeltaApplyBind, Math.ceil((jointRows * hidden) / 256));
    } else if (skipLateSingleBlocks) {
      skippedSingleBlocks += singleStages.length - singleStopIndex;
      const currentSingleState = (singleStopIndex & 1) ? jointStateB : jointStateA;
      if (currentSingleState !== finalInputState) {
        pass.end();
        encoder.copyBufferToBuffer(currentSingleState, 0, finalInputState, 0, jointBytes);
        pass = encoder.beginComputePass();
      }
    } else if (singleTailDeltaEnabled && step < reuseSingleTailFromStep) {
      pass.end();
      pass = encoder.beginComputePass();
      runStage(pass, singleTailDeltaCachePipeline, singleTailDeltaCacheBind, Math.ceil((jointRows * hidden) / 256));
    }
    if (profilePhases && !profileSingleParts) {
      await submitProfilePhase("single_blocks_ms");
    } else if (!singleComputePass) {
      pass.end();
      pass = encoder.beginComputePass();
    }
    runStage(pass, preNormQuantPipeline, finalNormBind, imgRows);
    runStage(pass, finalDotPipeline, finalDotBind, Math.ceil(latentChannels / finalTileCols), dotWorkgroupsY(imgRows));
    runStage(
      pass,
      useAb2LatentUpdate ? latentUpdateAb2Pipeline : latentUpdatePipeline,
      useAb2LatentUpdate ? latentUpdateAb2Binds[stepResourceIndex] : latentUpdateBinds[stepResourceIndex],
      Math.ceil((imgRows * latentChannels) / 256),
    );
    pass.end();
    if (useApproxAb2) {
      encoder.copyBufferToBuffer(predBuffer, 0, previousPredBuffer, 0, latentBytes);
      previousPredAvailable = true;
    }

    if (profilePhases) {
      device.queue.submit([encoder.finish()]);
      await device.queue.onSubmittedWorkDone();
      phaseProfile.final_update_ms += performance.now() - phaseStart;
      stepTimes.push(performance.now() - start);
    } else if (stepSubmitFusion) {
      stepTimes.push(0);
    } else {
      device.queue.submit([encoder.finish()]);
      if (deferStepWait) {
        stepTimes.push(0);
      } else {
        await device.queue.onSubmittedWorkDone();
        stepTimes.push(performance.now() - start);
      }
    }
  }
  if (stepSubmitFusion && encodedStepCount) {
    device.queue.submit([fusedEncoder.finish()]);
    await device.queue.onSubmittedWorkDone();
    const avgStepMs = (performance.now() - allStepsStart) / encodedStepCount;
    for (let i = 0; i < stepTimes.length; ++i) {
      if (stepTimes[i] === 0) stepTimes[i] = avgStepMs;
    }
  } else if (deferStepWait && stepTimes.length) {
    await device.queue.onSubmittedWorkDone();
    const avgStepMs = (performance.now() - allStepsStart) / stepTimes.length;
    for (let i = 0; i < stepTimes.length; ++i) {
      if (stepTimes[i] === 0) stepTimes[i] = avgStepMs;
    }
  }

  if (config.warmDispatchOnly === true) {
    return {
      verdict: "custom-flux-transformer-dispatch-warmed",
      latentF16: new Uint16Array(0),
      config: {
        imageTokens: imgRows,
        textTokens: txtRows,
        jointRows,
        latentChannels,
        imageWidth,
        doubleBlockCount,
        singleBlockCount,
        steps: timesteps.length - 1,
        linearTileCols,
        projTileCols,
        finalTileCols,
        wChunkCols,
        linearRowBlock,
        singleQ4KChunk,
        attentionTileKeys,
        attentionQueryRows,
        singleQkNormStorage: useSingleQkNormStorageF16 ? "f16" : "f32",
        singleLinear1Output: useSingleLinear1OutputF16 ? "f16" : "f32",
        singleLinear1Q4Kernel: useSingleLinear1Q4Dp4aQkvOnly ? "dp4a-qkv" : (useSingleLinear1Q4Dp4a ? "dp4a" : "f16"),
        singleLinear1Q4ActivationScale: useSingleLinear1Q4GroupedActivation ? "group16" : "row",
        singleLinear1QkvBackend: useSingleLinear1QkvDp4a ? "dp4a" : "q4",
        singleLinear1MlpBackend: useSingleLinear1MlpDp4a ? "dp4a" : "q4",
        singleLinear2Backend: useSingleLinear2Dp4a ? "dp4a" : "q4",
        singleAttentionKernel: useSubgroupSingleAttention ? "subgroup" : "tiled",
        profilePhases,
        profileSingleParts,
        stepSubmitFusion,
        singleComputePass,
        skippedOptionalSetupBytes,
        skippedOptionalPipelines,
        approxReusePredEvery,
        approxPredictionMode: useApproxAb2 ? "ab2" : "raw",
        approxAbScale: useApproxAb2 ? approxAbScale : 0,
        approxReusedSteps,
        approxCollapsedUpdateDispatches,
        skipSingleBlocksFromStep,
        skipSingleBlocksFromBlock,
        skippedSingleBlocks,
        reuseSingleTailFromStep,
        reuseSingleTailFromBlock,
        reusedSingleTailBlocks,
      },
      load: {
        total_ms: loadMs,
        stage_setup_ms: stageSetupMs,
        text_projection_init_ms: initMs,
        text_projection_cache_hit: Boolean(cachedTxtBaseState || persistentTxtProjectionHit || staticTxtProjectionHit),
        text_projection_cache_source: cachedTxtBaseState ? "gpu" : (persistentTxtProjectionHit ? "indexeddb" : (staticTxtProjectionHit ? "static-file" : "computed")),
        text_projection_persistent_ms: persistentTxtProjectionMs,
        readback_ms: 0,
      },
      summary: {
        total_step_ms: stepTimes.reduce((sum, value) => sum + value, 0),
        median_step_ms: median(stepTimes),
        phase_profile_ms: profilePhases ? {...phaseProfile} : undefined,
        finite: 0,
        max_abs: 0,
      },
      step_ms: stepTimes,
      sample: [],
    };
  }

  const readStart = performance.now();
  const latentF32 = await readFloat32Buffer(device, latentF32Buffer, imgRows * latentChannels);
  const readMs = performance.now() - readStart;
  const latentF16 = new Uint16Array(latentF32.length);
  let finite = 0;
  let maxAbs = 0;
  for (let i = 0; i < latentF32.length; ++i) {
    const value = latentF32[i];
    if (Number.isFinite(value)) {
      finite += 1;
      maxAbs = Math.max(maxAbs, Math.abs(value));
      latentF16[i] = float32ToFloat16Bits(Math.max(-65504, Math.min(65504, value)));
    } else {
      latentF16[i] = 0;
    }
  }
  return {
    verdict: "custom-flux-transformer-denoise-completed",
    latentF16,
    config: {
      imageTokens: imgRows,
      textTokens: txtRows,
      jointRows,
      latentChannels,
      imageWidth,
      doubleBlockCount,
      singleBlockCount,
      steps: timesteps.length - 1,
      linearTileCols,
      projTileCols,
      finalTileCols,
      wChunkCols,
      linearRowBlock,
      singleQ4KChunk,
      attentionTileKeys,
      attentionQueryRows,
      singleQkNormStorage: useSingleQkNormStorageF16 ? "f16" : "f32",
      singleLinear1Output: useSingleLinear1OutputF16 ? "f16" : "f32",
      singleLinear1Q4Kernel: useSingleLinear1Q4Dp4aQkvOnly ? "dp4a-qkv" : (useSingleLinear1Q4Dp4a ? "dp4a" : "f16"),
      singleLinear1Q4ActivationScale: useSingleLinear1Q4GroupedActivation ? "group16" : "row",
      singleLinear1QkvBackend: useSingleLinear1QkvDp4a ? "dp4a" : "q4",
      singleLinear1MlpBackend: useSingleLinear1MlpDp4a ? "dp4a" : "q4",
      singleLinear2Backend: useSingleLinear2Dp4a ? "dp4a" : "q4",
      singleAttentionKernel: useSubgroupSingleAttention ? "subgroup" : "tiled",
      profilePhases,
      profileSingleParts,
      stepSubmitFusion,
      singleComputePass,
      skippedOptionalSetupBytes,
      skippedOptionalPipelines,
      approxReusePredEvery,
      approxPredictionMode: useApproxAb2 ? "ab2" : "raw",
      approxAbScale: useApproxAb2 ? approxAbScale : 0,
      approxReusedSteps,
      approxCollapsedUpdateDispatches,
      skipSingleBlocksFromStep,
      skipSingleBlocksFromBlock,
      skippedSingleBlocks,
      reuseSingleTailFromStep,
      reuseSingleTailFromBlock,
      reusedSingleTailBlocks,
    },
      load: {
        total_ms: loadMs,
        stage_setup_ms: stageSetupMs,
        text_projection_init_ms: initMs,
        text_projection_cache_hit: Boolean(cachedTxtBaseState || persistentTxtProjectionHit || staticTxtProjectionHit),
        text_projection_cache_source: cachedTxtBaseState ? "gpu" : (persistentTxtProjectionHit ? "indexeddb" : (staticTxtProjectionHit ? "static-file" : "computed")),
        text_projection_persistent_ms: persistentTxtProjectionMs,
        readback_ms: readMs,
      },
    summary: {
      total_step_ms: stepTimes.reduce((sum, value) => sum + value, 0),
      median_step_ms: median(stepTimes),
      phase_profile_ms: profilePhases ? {...phaseProfile} : undefined,
      finite,
      max_abs: maxAbs,
    },
    step_ms: stepTimes,
    sample: Array.from(latentF32.slice(0, Math.min(8, latentF32.length))),
  };
}

window.runCustomFluxTransformerDenoise = runCustomFluxTransformerDenoise;
window.prepareCustomFluxTransformerAssets = prepareCustomFluxTransformerAssets;

window.runCustomDoubleStreamBlocksLoopBench = runCustomDoubleStreamBlocksLoopBench;
window.resetCustomLowbitWebGpuDevice = resetCustomLowbitWebGpuDevice;
