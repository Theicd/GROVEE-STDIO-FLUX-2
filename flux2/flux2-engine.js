const urlParams = new URLSearchParams(globalThis.location?.search || '');
const ortVersion = urlParams.get('ort') || '1.26.0';
const ortBaseUrl = `https://cdn.jsdelivr.net/npm/onnxruntime-web@${ortVersion}/dist/`;
const ort = await import(`${ortBaseUrl}ort.all.mjs`);

ort.env.wasm.wasmPaths = ortBaseUrl;
ort.env.wasm.numThreads = globalThis.crossOriginIsolated ? (navigator.hardwareConcurrency || 4) : 1;
ort.env.wasm.simd = true;
ort.env.webgpu.powerPreference = 'high-performance';

let config = null;
let modelBaseUrl = null;
let runtimeOptions = {};
let abortRequested = false;
const customKernelState = {
  available: false,
  checked: false,
  lastStatus: null,
};
const sessionCache = new Map();
const textContextCache = new Map();
const vaeEncoderCache = new Map();
const staticGpuTensorCache = new Map();
const customTransformerRuntimeCache = new Map();
let latentUpdatePipeline = null;
let latentUpdateBindGroupLayout = null;
let webGpuProfileEvents = [];
let activeProfileLabel = null;
let textContextDbPromise = null;
let lastTextEncoderDetails = null;
let lastVaeEncoderDetails = null;

function optionList(value) {
  if (Array.isArray(value)) return value.map((item) => String(item).trim()).filter(Boolean);
  if (typeof value === 'string') return value.split(',').map((item) => item.trim()).filter(Boolean);
  return [];
}

function stageMatches(stage, patterns) {
  if (!patterns.length) return false;
  return patterns.some((pattern) => {
    if (pattern === '*' || pattern === stage) return true;
    return stage.startsWith(pattern);
  });
}

function shouldUseGraphCapture(stage) {
  if (!runtimeOptions.enableGraphCapture) return false;
  if (String(stage || '').startsWith('vae-decoder-split')) return false;
  const allowedStages = optionList(runtimeOptions.graphCaptureStages);
  return !allowedStages.length || stageMatches(stage, allowedStages);
}

function profileDurationMs(event) {
  const raw = Number(event.endTime || 0) - Number(event.startTime || 0);
  if (!Number.isFinite(raw) || raw < 0) return 0;
  return raw > 100000 ? raw / 1000000 : raw;
}

function log(stage, detail) {
  console.log(`[${stage}] ${detail}`);
}

function summarizeProfileEvents(stage, label, events) {
  if (!runtimeOptions.profileWebGpu || !events.length) return;
  const grouped = new Map();
  let total = 0;
  for (const event of events) {
    const duration = profileDurationMs(event);
    if (!Number.isFinite(duration) || duration < 0) continue;
    total += duration;
    const name = event.programName || event.kernelName || event.kernelType || 'unknown';
    const entry = grouped.get(name) || { name, duration: 0, count: 0, kernelTypes: new Set() };
    entry.duration += duration;
    entry.count += 1;
    if (event.kernelType) entry.kernelTypes.add(event.kernelType);
    grouped.set(name, entry);
  }
  const limit = Number(runtimeOptions.profileTopK || 12);
  const rows = Array.from(grouped.values())
    .sort((a, b) => b.duration - a.duration)
    .slice(0, Number.isFinite(limit) && limit > 0 ? limit : 12)
    .map((entry) => `${entry.name}:${entry.duration.toFixed(3)}ms/${entry.count}${entry.kernelTypes.size ? ` types=${Array.from(entry.kernelTypes).join('|')}` : ''}`);
  log(stage, `webgpu profile ${label}: events=${events.length} total=${total.toFixed(3)}ms top=${rows.join(' ; ')}`);
}

async function profiledRun(session, feeds, fetches, stage, label) {
  if (!runtimeOptions.profileWebGpu) {
    return fetches ? session.run(feeds, fetches) : session.run(feeds);
  }
  const startIndex = webGpuProfileEvents.length;
  const previousLabel = activeProfileLabel;
  activeProfileLabel = `${stage}:${label}`;
  try {
    return fetches ? await session.run(feeds, fetches) : await session.run(feeds);
  } finally {
    activeProfileLabel = previousLabel;
    summarizeProfileEvents(stage, label, webGpuProfileEvents.slice(startIndex));
  }
}

function openTextContextDb() {
  if (typeof indexedDB === 'undefined') return Promise.resolve(null);
  if (textContextDbPromise) return textContextDbPromise;
  textContextDbPromise = new Promise((resolve) => {
    const request = indexedDB.open('flux2-browser-cache', 3);
    request.onupgradeneeded = () => {
      const db = request.result;
      const textStore = db.objectStoreNames.contains('text-contexts')
        ? request.transaction.objectStore('text-contexts')
        : db.createObjectStore('text-contexts', { keyPath: 'key' });
      if (!textStore.indexNames.contains('savedAt')) {
        textStore.createIndex('savedAt', 'savedAt');
      }
      const vaeStore = db.objectStoreNames.contains('vae-encoder-latents')
        ? request.transaction.objectStore('vae-encoder-latents')
        : db.createObjectStore('vae-encoder-latents', { keyPath: 'key' });
      if (!vaeStore.indexNames.contains('savedAt')) {
        vaeStore.createIndex('savedAt', 'savedAt');
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => {
      log('text-cache', `IndexedDB open failed: ${request.error?.message || request.error || 'unknown error'}`);
      resolve(null);
    };
    request.onblocked = () => {
      log('text-cache', 'IndexedDB open blocked by another page');
      resolve(null);
    };
  });
  return textContextDbPromise;
}

async function pruneObjectStoreBySavedAt(db, storeName, maxEntries, stage) {
  await new Promise((resolve) => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    const entries = [];
    const request = store.index('savedAt').openCursor();
    request.onsuccess = () => {
      const cursor = request.result;
      if (!cursor) return;
      entries.push({ key: cursor.primaryKey, savedAt: Number(cursor.key || 0) });
      cursor.continue();
    };
    tx.oncomplete = () => {
      if (entries.length <= maxEntries) {
        resolve();
        return;
      }
      const deleteTx = db.transaction(storeName, 'readwrite');
      const deleteStore = deleteTx.objectStore(storeName);
      const remove = entries.sort((a, b) => a.savedAt - b.savedAt).slice(0, entries.length - maxEntries);
      for (const entry of remove) deleteStore.delete(entry.key);
      deleteTx.oncomplete = () => resolve();
      deleteTx.onerror = () => resolve();
    };
    tx.onerror = () => {
      log(stage, `IndexedDB prune scan failed for ${storeName}`);
      resolve();
    };
  });
}

function makePersistentTextContextKey(modelConfig, cacheKey, seqLen, contextDim) {
  return [
    'ctx-v2',
    modelConfig.file || 'text-encoder',
    `seq=${seqLen}`,
    `dim=${contextDim}`,
    cacheKey,
  ].join('|');
}

async function loadPersistentTextContext(key, expectedValues) {
  if (!key) return null;
  const db = await openTextContextDb();
  if (!db) return null;
  return await new Promise((resolve) => {
    const tx = db.transaction('text-contexts', 'readonly');
    const store = tx.objectStore('text-contexts');
    const request = store.get(key);
    request.onsuccess = () => {
      const entry = request.result;
      if (!entry || !entry.data) {
        resolve(null);
        return;
      }
      const values = entry.data instanceof Uint16Array
        ? entry.data
        : (entry.data instanceof ArrayBuffer ? new Uint16Array(entry.data) : null);
      if (!values || values.length !== expectedValues) {
        resolve(null);
        return;
      }
      resolve(new Uint16Array(values));
    };
    request.onerror = () => {
      log('text-cache', `IndexedDB read failed: ${request.error?.message || request.error || 'unknown error'}`);
      resolve(null);
    };
  });
}

async function savePersistentTextContext(key, values) {
  if (!key || !(values instanceof Uint16Array)) return false;
  const db = await openTextContextDb();
  if (!db) return false;
  const saved = await new Promise((resolve) => {
    const tx = db.transaction('text-contexts', 'readwrite');
    const store = tx.objectStore('text-contexts');
    const buffer = values.buffer.slice(values.byteOffset, values.byteOffset + values.byteLength);
    const request = store.put({
      key,
      data: buffer,
      bytes: values.byteLength,
      savedAt: Date.now(),
    });
    request.onsuccess = () => resolve(true);
    request.onerror = () => {
      log('text-cache', `IndexedDB write failed: ${request.error?.message || request.error || 'unknown error'}`);
      resolve(false);
    };
  });
  if (saved) prunePersistentTextContexts(db).catch((err) => {
    log('text-cache', `IndexedDB prune failed: ${errorDetail(err)}`);
  });
  return saved;
}

async function prunePersistentTextContexts(db) {
  const maxEntries = Math.max(1, Math.trunc(Number(runtimeOptions.persistentTextContextCacheSize || 8)));
  await pruneObjectStoreBySavedAt(db, 'text-contexts', maxEntries, 'text-cache');
}

function rememberTextContext(cacheKey, ctx) {
  if (!cacheKey) return;
  textContextCache.set(cacheKey, ctx);
  while (textContextCache.size > Number(runtimeOptions.textContextCacheSize || 4)) {
    const oldestKey = textContextCache.keys().next().value;
    textContextCache.delete(oldestKey);
  }
  log('text-encoder', `cached text context ${cacheKey.slice(0, 12)} entries=${textContextCache.size}`);
}

function makeVaeEncoderCacheKey(params, modelConfig, width, height) {
  if (!params.cacheVaeEncoder || !params.initImageCacheKey) return '';
  return [
    modelConfig.file || 'vae-encoder',
    `${width}x${height}`,
    String(params.initImageCacheKey),
  ].join('|');
}

function rememberVaeEncoderResult(cacheKey, encoded) {
  if (!cacheKey) return;
  vaeEncoderCache.set(cacheKey, {
    latent: new Uint16Array(encoded.latent),
    latentWidth: encoded.latentWidth,
    latentHeight: encoded.latentHeight,
  });
  const maxEntries = Math.max(1, Math.trunc(Number(runtimeOptions.vaeEncoderCacheSize || 3)));
  while (vaeEncoderCache.size > maxEntries) {
    const oldestKey = vaeEncoderCache.keys().next().value;
    vaeEncoderCache.delete(oldestKey);
  }
  log('vae-encoder', `cached source latent ${cacheKey.slice(0, 24)} entries=${vaeEncoderCache.size}`);
}

async function loadPersistentVaeEncoderResult(cacheKey, expectedValues, width, height) {
  if (!cacheKey || !runtimeOptions.persistentVaeEncoderCache) return null;
  const db = await openTextContextDb();
  if (!db) return null;
  return await new Promise((resolve) => {
    const tx = db.transaction('vae-encoder-latents', 'readonly');
    const store = tx.objectStore('vae-encoder-latents');
    const request = store.get(cacheKey);
    request.onsuccess = () => {
      const entry = request.result;
      if (!entry || !entry.data || Number(entry.latentWidth) !== width || Number(entry.latentHeight) !== height) {
        resolve(null);
        return;
      }
      const values = entry.data instanceof Uint16Array
        ? entry.data
        : (entry.data instanceof ArrayBuffer ? new Uint16Array(entry.data) : null);
      if (!values || values.length !== expectedValues) {
        resolve(null);
        return;
      }
      resolve({
        latent: new Uint16Array(values),
        latentWidth: width,
        latentHeight: height,
      });
    };
    request.onerror = () => {
      log('vae-cache', `IndexedDB read failed: ${request.error?.message || request.error || 'unknown error'}`);
      resolve(null);
    };
  });
}

async function savePersistentVaeEncoderResult(cacheKey, encoded) {
  if (!cacheKey || !runtimeOptions.persistentVaeEncoderCache || !(encoded.latent instanceof Uint16Array)) return false;
  const db = await openTextContextDb();
  if (!db) return false;
  const saved = await new Promise((resolve) => {
    const tx = db.transaction('vae-encoder-latents', 'readwrite');
    const store = tx.objectStore('vae-encoder-latents');
    const values = encoded.latent;
    const buffer = values.buffer.slice(values.byteOffset, values.byteOffset + values.byteLength);
    const request = store.put({
      key: cacheKey,
      data: buffer,
      latentWidth: encoded.latentWidth,
      latentHeight: encoded.latentHeight,
      bytes: values.byteLength,
      savedAt: Date.now(),
    });
    request.onsuccess = () => resolve(true);
    request.onerror = () => {
      log('vae-cache', `IndexedDB write failed: ${request.error?.message || request.error || 'unknown error'}`);
      resolve(false);
    };
  });
  if (saved) {
    const maxEntries = Math.max(1, Math.trunc(Number(runtimeOptions.persistentVaeEncoderCacheSize || 8)));
    pruneObjectStoreBySavedAt(db, 'vae-encoder-latents', maxEntries, 'vae-cache').catch((err) => {
      log('vae-cache', `IndexedDB prune failed: ${errorDetail(err)}`);
    });
  }
  return saved;
}

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return 'unknown';
  const units = ['B', 'KiB', 'MiB', 'GiB'];
  let value = bytes;
  let unit = 0;
  while (Math.abs(value) >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return `${value.toFixed(unit === 0 ? 0 : 1)} ${units[unit]}`;
}

function jsMemorySummary() {
  const memory = performance?.memory;
  if (!memory) return 'jsHeap=unavailable';
  const used = formatBytes(memory.usedJSHeapSize);
  const total = formatBytes(memory.totalJSHeapSize);
  const limit = formatBytes(memory.jsHeapSizeLimit);
  return `jsHeap=${used}/${total} limit=${limit}`;
}

function logMemory(stage, label) {
  const deviceMemory = navigator.deviceMemory ? ` deviceMemory=${navigator.deviceMemory}GiB` : '';
  log(stage, `memory ${label}: ${jsMemorySummary()}${deviceMemory}`);
}

function errorDetail(err) {
  if (!err) return String(err);
  const parts = [];
  if (err.name) parts.push(err.name);
  if (err.message) parts.push(err.message);
  if (!parts.length) parts.push(String(err));
  if (err.stack) parts.push(err.stack);
  return parts.join(': ');
}

async function fetchJsonChecked(url, label) {
  const response = await fetch(url);
  const body = await response.text();
  if (!response.ok) throw new Error(`Failed to fetch ${label}: HTTP ${response.status} ${response.statusText} from ${url}`);
  return JSON.parse(body);
}

function float32ToFloat16Bits(value) {
  if (Number.isNaN(value)) return 0x7e00;
  if (value === Infinity) return 0x7c00;
  if (value === -Infinity) return 0xfc00;
  const sign = value < 0 || Object.is(value, -0) ? 0x8000 : 0;
  const abs = Math.abs(value);
  if (abs === 0) return sign;
  if (abs >= 65504) return sign | 0x7bff;
  if (abs < 5.960464477539063e-8) return sign;
  let exponent = Math.floor(Math.log2(abs));
  let mantissa = abs / Math.pow(2, exponent) - 1;
  let halfExp = exponent + 15;
  if (halfExp <= 0) return sign | Math.round(abs / 5.960464477539063e-8);
  let halfMant = Math.round(mantissa * 1024);
  if (halfMant === 1024) {
    halfMant = 0;
    halfExp += 1;
  }
  if (halfExp >= 31) return sign | 0x7bff;
  return sign | (halfExp << 10) | (halfMant & 0x03ff);
}

function float16BitsToFloat32(bits) {
  const sign = bits & 0x8000 ? -1 : 1;
  const exponent = (bits >> 10) & 0x1f;
  const mantissa = bits & 0x03ff;
  if (exponent === 0) return sign * (mantissa / 1024) * Math.pow(2, -14);
  if (exponent === 31) return mantissa ? NaN : sign * Infinity;
  return sign * (1 + mantissa / 1024) * Math.pow(2, exponent - 15);
}

let halfToImageByteLut = null;

function imageByteFromFloat(value) {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(255, Math.round((value + 1) * 127.5)));
}

function getHalfToImageByteLut() {
  if (halfToImageByteLut) return halfToImageByteLut;
  const table = new Uint8Array(65536);
  for (let bits = 0; bits < table.length; bits++) {
    table[bits] = imageByteFromFloat(float16BitsToFloat32(bits));
  }
  halfToImageByteLut = table;
  return table;
}

function f32ToF16Array(values) {
  const out = new Uint16Array(values.length);
  for (let i = 0; i < values.length; i++) out[i] = float32ToFloat16Bits(values[i]);
  return out;
}

function f16ToF32Array(values) {
  const out = new Float32Array(values.length);
  for (let i = 0; i < values.length; i++) out[i] = float16BitsToFloat32(values[i]);
  return out;
}

function tensor(type, data, dims) {
  return new ort.Tensor(type, data, dims);
}

function alignTo(value, alignment) {
  return Math.ceil(value / alignment) * alignment;
}

function getWebGpuDevice() {
  const device = ort.env?.webgpu?.device;
  if (!device) throw new Error('ORT WebGPU device is not available');
  return device;
}

function createGpuTensorFromTypedArray(data, dataType, dims, extraUsage = 0) {
  if (typeof ort.Tensor.fromGpuBuffer !== 'function') {
    throw new Error('ort.Tensor.fromGpuBuffer is not available in this ONNX Runtime Web build');
  }
  const device = getWebGpuDevice();
  const byteLength = data.byteLength;
  const buffer = device.createBuffer({
    size: alignTo(Math.max(byteLength, 4), 16),
    usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST | GPUBufferUsage.COPY_SRC | extraUsage,
  });
  device.queue.writeBuffer(buffer, 0, data.buffer, data.byteOffset, byteLength);
  return {
    tensor: ort.Tensor.fromGpuBuffer(buffer, { dataType, dims }),
    buffer,
    byteLength,
  };
}

function getCachedGpuTensorResource(key, factory, stage) {
  if (staticGpuTensorCache.has(key)) {
    const cached = staticGpuTensorCache.get(key);
    log(stage, `reusing cached GPU tensor ${key}`);
    return cached;
  }
  const resource = factory();
  resource.__flux2StaticGpuCacheKey = key;
  staticGpuTensorCache.set(key, resource);
  log(stage, `cached GPU tensor ${key}: ${formatBytes(resource.byteLength || 0)}`);
  return resource;
}

function clearStaticGpuTensorCache() {
  for (const resource of staticGpuTensorCache.values()) {
    try {
      resource.buffer?.destroy?.();
    } catch {
    }
  }
  staticGpuTensorCache.clear();
}

async function readGpuBuffer(buffer, byteLength) {
  const device = getWebGpuDevice();
  const readback = device.createBuffer({
    size: alignTo(Math.max(byteLength, 4), 4),
    usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
  });
  const encoder = device.createCommandEncoder();
  encoder.copyBufferToBuffer(buffer, 0, readback, 0, byteLength);
  device.queue.submit([encoder.finish()]);
  await readback.mapAsync(GPUMapMode.READ, 0, alignTo(Math.max(byteLength, 4), 4));
  const mapped = readback.getMappedRange(0, byteLength);
  const copy = mapped.slice(0);
  readback.unmap();
  readback.destroy();
  return copy;
}

function getLatentUpdatePipeline() {
  if (latentUpdatePipeline) return { pipeline: latentUpdatePipeline, layout: latentUpdateBindGroupLayout };
  const device = getWebGpuDevice();
  if (!device.features?.has?.('shader-f16')) {
    throw new Error('GPU denoise update requires WebGPU shader-f16 support');
  }
  latentUpdateBindGroupLayout = device.createBindGroupLayout({
    entries: [
      { binding: 0, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'storage' } },
      { binding: 1, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'read-only-storage' } },
      { binding: 2, visibility: GPUShaderStage.COMPUTE, buffer: { type: 'uniform' } },
    ],
  });
  const pipelineLayout = device.createPipelineLayout({ bindGroupLayouts: [latentUpdateBindGroupLayout] });
  const module = device.createShaderModule({
    code: `
      enable f16;
      struct Params {
        dt: f32,
        length: u32,
        pad0: u32,
        pad1: u32,
      };
      @group(0) @binding(0) var<storage, read_write> x: array<f16>;
      @group(0) @binding(1) var<storage, read> pred: array<f16>;
      @group(0) @binding(2) var<uniform> params: Params;

      @compute @workgroup_size(256)
      fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
        let i = gid.x;
        if (i >= params.length) {
          return;
        }
        let updated = f32(x[i]) + params.dt * f32(pred[i]);
        x[i] = f16(clamp(updated, -65504.0, 65504.0));
      }
    `,
  });
  latentUpdatePipeline = device.createComputePipeline({
    layout: pipelineLayout,
    compute: { module, entryPoint: 'main' },
  });
  return { pipeline: latentUpdatePipeline, layout: latentUpdateBindGroupLayout };
}

function dispatchLatentUpdate(xBuffer, predBuffer, length, dt) {
  const device = getWebGpuDevice();
  const { pipeline, layout } = getLatentUpdatePipeline();
  const params = new ArrayBuffer(16);
  const view = new DataView(params);
  view.setFloat32(0, dt, true);
  view.setUint32(4, length, true);
  const paramsBuffer = device.createBuffer({
    size: 16,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });
  device.queue.writeBuffer(paramsBuffer, 0, params);
  const bindGroup = device.createBindGroup({
    layout,
    entries: [
      { binding: 0, resource: { buffer: xBuffer } },
      { binding: 1, resource: { buffer: predBuffer } },
      { binding: 2, resource: { buffer: paramsBuffer } },
    ],
  });
  const encoder = device.createCommandEncoder();
  const pass = encoder.beginComputePass();
  pass.setPipeline(pipeline);
  pass.setBindGroup(0, bindGroup);
  pass.dispatchWorkgroups(Math.ceil(length / 256));
  pass.end();
  device.queue.submit([encoder.finish()]);
  return paramsBuffer;
}

function tensorElementBytes(type) {
  switch (String(type || '').toLowerCase()) {
    case 'float32':
    case 'int32':
    case 'uint32':
      return 4;
    case 'float16':
    case 'int16':
    case 'uint16':
      return 2;
    case 'int64':
    case 'uint64':
      return 8;
    case 'bool':
    case 'int8':
    case 'uint8':
      return 1;
    default:
      return 0;
  }
}

function tensorByteEstimate(tensorValue) {
  if (!tensorValue || typeof tensorValue !== 'object') return 0;
  if (tensorValue.data?.byteLength) return tensorValue.data.byteLength;
  if (tensorValue.cpuData?.byteLength) return tensorValue.cpuData.byteLength;
  const dims = Array.isArray(tensorValue.dims) ? tensorValue.dims : [];
  if (!dims.length) return 0;
  const elementBytes = tensorElementBytes(tensorValue.type || tensorValue.dataType);
  if (!elementBytes) return 0;
  return dims.reduce((a, b) => a * Number(b || 0), 1) * elementBytes;
}

function tensorDebugSummary(tensorValue) {
  if (!tensorValue || typeof tensorValue !== 'object') return 'null';
  const ctor = tensorValue.constructor?.name || typeof tensorValue;
  const type = tensorValue.type || tensorValue.dataType || 'unknown';
  const dims = Array.isArray(tensorValue.dims) ? tensorValue.dims.join('x') : 'unknown';
  const location = tensorValue.location || tensorValue.dataLocation || 'unknown';
  const methods = ['getData', 'dispose', 'release'].filter((name) => typeof tensorValue[name] === 'function').join('|') || 'none';
  return `${ctor} type=${type} dims=${dims} location=${location} est=${formatBytes(tensorByteEstimate(tensorValue))} methods=${methods}`;
}

function yieldToRuntime() {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

async function tensorData(tensorValue) {
  if (typeof tensorValue?.getData === 'function') return await tensorValue.getData();
  if (tensorValue?.data) return tensorValue.data;
  throw new Error('tensor has no getData() or data field');
}

function firstOutput(outputs, preferredName) {
  if (outputs[preferredName]) return outputs[preferredName];
  const keys = Object.keys(outputs);
  if (!keys.length) throw new Error('session returned no outputs');
  return outputs[keys[0]];
}

function asFloat16Array(data, label) {
  if (data instanceof Uint16Array) return data;
  if (ArrayBuffer.isView(data) && data.constructor?.name === 'Float16Array') {
    return new Uint16Array(data.buffer, data.byteOffset, data.length);
  }
  if (data instanceof Float32Array) return f32ToF16Array(data);
  throw new Error(`${label} has unsupported data type ${Object.prototype.toString.call(data)}`);
}

function asFloat32Array(data, label) {
  if (data instanceof Float32Array) return data;
  if (data instanceof Uint16Array) return f16ToF32Array(data);
  if (ArrayBuffer.isView(data) && data.constructor?.name === 'Float16Array') {
    return f16ToF32Array(new Uint16Array(data.buffer, data.byteOffset, data.length));
  }
  throw new Error(`${label} has unsupported data type ${Object.prototype.toString.call(data)}`);
}

function transformerUsesFloat32(modelConfig) {
  const dtype = String(modelConfig.activation_dtype || modelConfig.dtype || '').toLowerCase();
  return dtype === 'float32' || dtype === 'fp32';
}

function mulberry32(seed) {
  let state = seed | 0;
  return function () {
    state = (state + 0x6D2B79F5) | 0;
    let value = Math.imul(state ^ (state >>> 15), 1 | state);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function normalSource(seed) {
  const rng = seed == null ? Math.random : mulberry32(seed);
  let spare = null;
  return function () {
    if (spare !== null) {
      const value = spare;
      spare = null;
      return value;
    }
    const u = Math.max(rng(), 1e-7);
    const v = rng();
    const mag = Math.sqrt(-2.0 * Math.log(u));
    spare = mag * Math.sin(2.0 * Math.PI * v);
    return mag * Math.cos(2.0 * Math.PI * v);
  };
}

function generalizedTimeSnrShift(t, mu, sigma) {
  return Math.exp(mu) / (Math.exp(mu) + Math.pow(1 / t - 1, sigma));
}

function computeEmpiricalMu(imageSeqLen, numSteps) {
  const a1 = 8.73809524e-05;
  const b1 = 1.89833333;
  const a2 = 0.00016927;
  const b2 = 0.45666666;
  if (imageSeqLen > 4300) return a2 * imageSeqLen + b2;
  const m200 = a2 * imageSeqLen + b2;
  const m10 = a1 * imageSeqLen + b1;
  const a = (m200 - m10) / 190.0;
  const b = m200 - 200.0 * a;
  return a * numSteps + b;
}

function getSchedule(numSteps, imageSeqLen) {
  const mu = computeEmpiricalMu(imageSeqLen, numSteps);
  const steps = [];
  for (let i = 0; i <= numSteps; i++) {
    const t = 1 - i / numSteps;
    steps.push(generalizedTimeSnrShift(t, mu, 1.0));
  }
  return steps;
}

function makeImageIds(latentHeight, latentWidth) {
  const values = new Float32Array(latentHeight * latentWidth * 4);
  let offset = 0;
  for (let h = 0; h < latentHeight; h++) {
    for (let w = 0; w < latentWidth; w++) {
      values[offset++] = 0;
      values[offset++] = h;
      values[offset++] = w;
      values[offset++] = 0;
    }
  }
  return values;
}

function makeTextIds(seqLen) {
  const values = new Float32Array(seqLen * 4);
  let offset = 0;
  for (let i = 0; i < seqLen; i++) {
    values[offset++] = 0;
    values[offset++] = 0;
    values[offset++] = 0;
    values[offset++] = i;
  }
  return values;
}

function makeNoiseF32(imageSeqLen, channels, seed) {
  const nextNormal = normalSource(seed);
  const values = new Float32Array(imageSeqLen * channels);
  for (let i = 0; i < values.length; i++) values[i] = nextNormal();
  return values;
}

function roundUpToMultiple(value, multiple) {
  const safeMultiple = Math.max(1, Math.trunc(Number(multiple || 1)));
  return Math.ceil(Number(value || 0) / safeMultiple) * safeMultiple;
}

function attentionMaskActiveTokenCount(data, seqLen) {
  if (data === undefined || data === null || typeof data === 'string') return seqLen;
  let values = null;
  if (data instanceof BigInt64Array || data instanceof BigUint64Array) {
    values = data;
  } else if (data instanceof ArrayBuffer) {
    if (data.byteLength !== seqLen * 8) return seqLen;
    values = new BigInt64Array(data);
  } else if (ArrayBuffer.isView(data)) {
    values = data;
  } else if (Array.isArray(data)) {
    values = data;
  }
  if (!values || values.length < seqLen) return seqLen;
  for (let index = seqLen - 1; index >= 0; index--) {
    if (Number(values[index]) !== 0) return index + 1;
  }
  return 1;
}

function coerceLatentF32(data, expectedValues, label) {
  let values = null;
  if (data instanceof Float32Array) {
    values = data;
  } else if (data instanceof Uint16Array) {
    values = f16ToF32Array(data);
  } else if (ArrayBuffer.isView(data)) {
    values = new Float32Array(data.length);
    for (let i = 0; i < data.length; i++) values[i] = Number(data[i]);
  } else if (data instanceof ArrayBuffer) {
    if (data.byteLength === expectedValues * 4) values = new Float32Array(data);
    else if (data.byteLength === expectedValues * 2) values = f16ToF32Array(new Uint16Array(data));
  } else if (Array.isArray(data)) {
    values = Float32Array.from(data, Number);
  }
  if (!(values instanceof Float32Array)) {
    throw new Error(`${label} must be a Float32Array, Uint16Array, ArrayBuffer, typed array, or number array`);
  }
  if (values.length !== expectedValues) {
    throw new Error(`${label} has ${values.length} values, expected ${expectedValues}`);
  }
  return values;
}

function logArrayStats(stage, label, values) {
  const stats = arrayStats(values);
  const finiteLabel = stats.nonFinite ? ` nonfinite=${stats.nonFinite}` : '';
  log(stage, `${label}: min=${stats.min.toFixed(4)} max=${stats.max.toFixed(4)} mean=${stats.mean.toFixed(4)} std=${stats.std.toFixed(4)}${finiteLabel}`);
  return stats;
}

function arrayStats(values) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let sumSquares = 0;
  let finite = 0;
  let nonFinite = 0;
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (!Number.isFinite(value)) {
      nonFinite += 1;
      continue;
    }
    if (value < min) min = value;
    if (value > max) max = value;
    sum += value;
    sumSquares += value * value;
    finite += 1;
  }
  if (!finite) return { min: NaN, max: NaN, mean: NaN, std: NaN, count: values.length, finite, nonFinite };
  const mean = sum / finite;
  const variance = Math.max(0, sumSquares / finite - mean * mean);
  return { min, max, mean, std: Math.sqrt(variance), count: values.length, finite, nonFinite };
}

function assertFiniteStats(stats, label) {
  if (stats.nonFinite) throw new Error(`${label} contains ${stats.nonFinite} non-finite values`);
}

function clampFloat16ArrayInPlace(values, limit) {
  if (!limit || limit <= 0) return 0;
  let clipped = 0;
  for (let i = 0; i < values.length; i++) {
    const value = float16BitsToFloat32(values[i]);
    if (value > limit) {
      values[i] = float32ToFloat16Bits(limit);
      clipped += 1;
    } else if (value < -limit) {
      values[i] = float32ToFloat16Bits(-limit);
      clipped += 1;
    }
  }
  return clipped;
}

function zeroMaskedTextContextInPlace(values, attentionMask, seqLen, contextDim) {
  let zeroedTokens = 0;
  for (let token = 0; token < seqLen; token++) {
    if (attentionMask[token] !== 0n) continue;
    values.fill(0, token * contextDim, (token + 1) * contextDim);
    zeroedTokens += 1;
  }
  return zeroedTokens;
}

async function loadInt64Binary(url, expectedValues, label) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${label}: HTTP ${response.status}`);
  const buffer = await response.arrayBuffer();
  if (buffer.byteLength !== expectedValues * 8) throw new Error(`${label} has ${buffer.byteLength} bytes, expected ${expectedValues * 8}`);
  return new BigInt64Array(buffer);
}

function coerceInt64Array(data, expectedValues, label) {
  let values = null;
  if (data instanceof BigInt64Array) {
    values = data;
  } else if (data instanceof BigUint64Array) {
    values = new BigInt64Array(data.length);
    for (let i = 0; i < data.length; i++) values[i] = BigInt.asIntN(64, data[i]);
  } else if (data instanceof ArrayBuffer) {
    if (data.byteLength !== expectedValues * 8) throw new Error(`${label} has ${data.byteLength} bytes, expected ${expectedValues * 8}`);
    values = new BigInt64Array(data);
  } else if (ArrayBuffer.isView(data)) {
    values = new BigInt64Array(data.length);
    for (let i = 0; i < data.length; i++) values[i] = BigInt(Math.trunc(Number(data[i])));
  } else if (Array.isArray(data)) {
    values = new BigInt64Array(data.length);
    for (let i = 0; i < data.length; i++) values[i] = BigInt(Math.trunc(Number(data[i])));
  }
  if (!(values instanceof BigInt64Array)) {
    throw new Error(`${label} must be a BigInt64Array, ArrayBuffer, typed array, or number array`);
  }
  if (values.length !== expectedValues) {
    throw new Error(`${label} has ${values.length} values, expected ${expectedValues}`);
  }
  return values;
}

async function loadFloat16Binary(url, expectedValues, label) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${label}: HTTP ${response.status}`);
  const buffer = await response.arrayBuffer();
  if (buffer.byteLength !== expectedValues * 2) throw new Error(`${label} has ${buffer.byteLength} bytes, expected ${expectedValues * 2}`);
  return new Uint16Array(buffer);
}

async function loadOptionalFloat16Binary(url, expectedValues, label) {
  if (!url) return null;
  try {
    return await loadFloat16Binary(url, expectedValues, label);
  } catch (err) {
    log(label, `optional fp16 binary unavailable: ${errorDetail(err)}`);
    return null;
  }
}

async function loadFloat32Binary(url, expectedValues, label) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${label}: HTTP ${response.status}`);
  const buffer = await response.arrayBuffer();
  if (buffer.byteLength !== expectedValues * 4) throw new Error(`${label} has ${buffer.byteLength} bytes, expected ${expectedValues * 4}`);
  return new Float32Array(buffer);
}

async function resolveExternalData(modelConfig, stage) {
  if (!modelConfig.manifest) {
    return [];
  }
  const manifestUrl = `${modelBaseUrl}/${modelConfig.manifest}`;
  let manifest;
  try {
    manifest = await fetchJsonChecked(manifestUrl, modelConfig.manifest);
  } catch (err) {
    log(stage, `no manifest at ${modelConfig.manifest}; treating as inline (no external data)`);
    return [];
  }
  const externalData = [];
  for (let index = 0; index < manifest.length; index++) {
    if (abortRequested) throw new Error('ABORTED_BY_CLIENT');
    const name = manifest[index];
    log(stage, `registering shard ${index + 1}/${manifest.length}: ${name}`);
    externalData.push({ path: name, data: `${modelBaseUrl}/${name}` });
  }
  return externalData;
}

async function createSession(modelConfig, stage, freeDimensionOverrides = {}) {
  const cacheSessions = Boolean(freeDimensionOverrides.__cacheSessions);
  delete freeDimensionOverrides.__cacheSessions;
  const preferredOutputLocation = freeDimensionOverrides.__preferredOutputLocation;
  delete freeDimensionOverrides.__preferredOutputLocation;
  const requestedProvider = runtimeOptions.executionProvider || modelConfig.execution_provider || 'webgpu';
  const graphCaptureRequested = requestedProvider === 'webgpu' && shouldUseGraphCapture(stage);
  const cacheKey = JSON.stringify({
    file: modelConfig.file,
    executionProvider: requestedProvider,
    webnnDeviceType: runtimeOptions.webnnDeviceType || 'gpu',
    enableGraphCapture: graphCaptureRequested,
    preferredOutputLocation,
    freeDimensionOverrides,
  });
  if (cacheSessions && sessionCache.has(cacheKey)) {
    const cached = sessionCache.get(cacheKey);
    log(stage, `reusing cached WEBGPU session for ${modelConfig.file}; inputs=${(cached.inputNames || []).join(',') || 'unknown'} outputs=${(cached.outputNames || []).join(',') || 'unknown'}`);
    return cached;
  }
  logMemory(stage, 'before resolve external data');
  let externalData = await resolveExternalData(modelConfig, stage);
  let executionProviders;
  if (requestedProvider === 'webnn') {
    executionProviders = [{
      name: 'webnn',
      deviceType: runtimeOptions.webnnDeviceType || 'gpu',
      powerPreference: 'high-performance',
    }];
  } else if (requestedProvider === 'webgpu') {
    executionProviders = ['webgpu'];
  } else {
    throw new Error(`${stage} requested unsupported browser execution provider ${requestedProvider}`);
  }
  const baseFreeDimensions = {
    batch: 1,
    text_seq: config.text_seq_len || 512,
  };
  const options = {
    externalData,
    graphOptimizationLevel: modelConfig.graph_optimization_level || 'disabled',
    freeDimensionOverrides: { ...baseFreeDimensions, ...freeDimensionOverrides },
    enableGraphCapture: graphCaptureRequested,
    ...(preferredOutputLocation ? { preferredOutputLocation } : {}),
    enableMemPattern: false,
    enableCpuMemArena: false,
    executionProviders,
    extra: {
      session: {
        'optimization.disable_specified_optimizers': 'MemcpyTransformer,TransformerMemcpy',
      },
    },
  };
  const quant = modelConfig.quantization ? ` quant=${modelConfig.quantization.algorithm || 'unknown'} accuracy=${modelConfig.quantization.accuracy_level ?? 'n/a'}` : '';
  log(stage, `creating ${requestedProvider.toUpperCase()} session for ${modelConfig.file}; freeDims=${JSON.stringify(options.freeDimensionOverrides)} graphCapture=${options.enableGraphCapture}${quant}`);
  logMemory(stage, 'before session create');
  const t0 = performance.now();
  let session;
  try {
    session = await ort.InferenceSession.create(`${modelBaseUrl}/${modelConfig.file}`, options);
  } catch (err) {
    if (!options.enableGraphCapture || !String(errorDetail(err)).includes('graph capture')) {
      throw err;
    }
    log(stage, `graph capture unavailable for ${modelConfig.file}; retrying without graph capture: ${errorDetail(err)}`);
    options.enableGraphCapture = false;
    session = await ort.InferenceSession.create(`${modelBaseUrl}/${modelConfig.file}`, options);
    session.__flux2GraphCaptureFallback = true;
  }
  log(stage, `session created in ${((performance.now() - t0) / 1000).toFixed(3)}s; inputs=${(session.inputNames || []).join(',') || 'unknown'} outputs=${(session.outputNames || []).join(',') || 'unknown'}`);
  externalData = null;
  options.externalData = null;
  if (globalThis.gc) globalThis.gc();
  logMemory(stage, 'after session create + gc');
  if (cacheSessions) {
    session.__flux2CacheKey = cacheKey;
    session.__flux2Cached = true;
    sessionCache.set(cacheKey, session);
    log(stage, `cached WEBGPU session for ${modelConfig.file}`);
  }
  return session;
}

async function releaseSession(session, stage) {
  if (!session) return;
  if (session.__flux2Cached) {
    log(stage, `releaseSession skipped; cached session retained for ${session.__flux2CacheKey}`);
    return;
  }
  log(stage, `releaseSession start: hasRelease=${typeof session.release === 'function'}`);
  logMemory(stage, 'before session release');
  const t0 = performance.now();
  if (typeof session.release === 'function') await session.release();
  log(stage, `releaseSession release() returned in ${((performance.now() - t0) / 1000).toFixed(3)}s`);
  if (globalThis.gc) globalThis.gc();
  logMemory(stage, 'after session release + gc');
  for (let i = 0; i < 5; i++) {
    await yieldToRuntime();
    if (globalThis.gc) globalThis.gc();
    logMemory(stage, `after release yield ${i + 1}/5`);
  }
  log(stage, 'session released and runtime yields complete');
}

async function releaseTensorValue(tensorValue) {
  if (!tensorValue || typeof tensorValue !== 'object') return 'none';
  try {
    if (typeof tensorValue.dispose === 'function') {
      await tensorValue.dispose();
      return 'dispose';
    } else if (typeof tensorValue.release === 'function') {
      await tensorValue.release();
      return 'release';
    }
  } catch (err) {
    console.warn(`[runtime] tensor release ignored: ${errorDetail(err)}`);
    return 'error';
  }
  return 'no-method';
}

async function releaseTensorMap(tensors, stage = 'runtime', label = 'tensors') {
  if (!tensors || typeof tensors !== 'object') {
    log(stage, `releaseTensorMap ${label}: empty`);
    return;
  }
  const entries = Object.entries(tensors);
  const totalBytes = entries.reduce((sum, [, value]) => sum + tensorByteEstimate(value), 0);
  log(stage, `releaseTensorMap ${label}: count=${entries.length} est=${formatBytes(totalBytes)} details=${entries.map(([name, value]) => `${name}:{${tensorDebugSummary(value)}}`).join(' ; ')}`);
  const counts = {};
  const values = Object.values(tensors);
  for (let i = 0; i < values.length; i++) {
    const method = await releaseTensorValue(values[i]);
    counts[method] = (counts[method] || 0) + 1;
  }
  log(stage, `releaseTensorMap ${label}: releaseMethods=${JSON.stringify(counts)}`);
}

async function customKernelStatus(options = {}) {
  if (!options.force && customKernelState.checked && customKernelState.lastStatus) {
    return customKernelState.lastStatus;
  }
  const base = runtimeOptions.customKernelBaseUrl || '/runtime/custom_lowbit';
  const wgslFeatures = navigator.gpu && navigator.gpu.wgslLanguageFeatures
    ? Array.from(navigator.gpu.wgslLanguageFeatures).sort()
    : [];
  const status = {
    enabled: runtimeOptions.customTransformerMode !== 'off',
    mode: runtimeOptions.customTransformerMode || 'off',
    baseUrl: base,
    gpu: Boolean(navigator.gpu),
    shaderF16: false,
    dp4a: wgslFeatures.includes('packed_4x8_integer_dot_product'),
    scriptsLoaded: typeof globalThis.runCustomSingleStreamMlpBench === 'function',
    checkpointsLoaded: {
      singleBlock: typeof globalThis.runCustomSingleStreamMlpBench === 'function',
      singleBlocksLoop: typeof globalThis.runCustomSingleStreamBlocksLoopBench === 'function',
      doubleBlock: typeof globalThis.runCustomDoubleStreamBlockBench === 'function',
      doubleBlocksLoop: typeof globalThis.runCustomDoubleStreamBlocksLoopBench === 'function',
      fullDenoise: typeof globalThis.runCustomFluxTransformerDenoise === 'function',
    },
    transformerRuntimeLoaded: typeof globalThis.createCustomFluxTransformerRuntime === 'function',
    bundles: {},
    fullTransformer: null,
    fullImageBackend: typeof globalThis.runCustomFluxTransformerDenoise === 'function' ? 'custom-lowbit-webgpu' : 'onnx-webgpu',
    notes: [],
  };
  try {
    if (navigator.gpu) {
      const adapter = await navigator.gpu.requestAdapter({ powerPreference: 'high-performance' });
      status.shaderF16 = Boolean(adapter && adapter.features && adapter.features.has('shader-f16'));
    }
  } catch (err) {
    status.notes.push(`adapter check failed: ${errorDetail(err)}`);
  }
  const bundlePaths = {
    qkv0: 'transformer_img_qkv0/manifest.json',
    singleLinear1: 'transformer_single_linear1_0/manifest.json',
    singleLinear2: 'transformer_single_linear2_0/manifest.json',
    singleBlock0: 'transformer_single_block0/manifest.json',
  };
  const checkLegacyBundles = Boolean(options.checkLegacyBundles ?? runtimeOptions.checkLegacyCustomBundles);
  if (checkLegacyBundles) {
    for (const [key, path] of Object.entries(bundlePaths)) {
      try {
        const response = await fetch(`${base}/${path}`);
        if (!response.ok) {
          status.bundles[key] = { ok: false, status: response.status };
          continue;
        }
        const manifest = await response.json();
        status.bundles[key] = {
          ok: true,
          name: manifest.name || '',
          sourceNode: manifest.source_node || '',
          shape: manifest.shape || null,
        };
      } catch (err) {
        status.bundles[key] = { ok: false, error: errorDetail(err) };
      }
    }
  } else {
    status.notes.push('legacy checkpoint manifest probe skipped; set legacyStatus=1 for checkpoint diagnostics');
  }
  const diagnosticBundlesReady = !checkLegacyBundles || Object.values(status.bundles).every((item) => item && item.ok);
  try {
    const response = await fetch(`${base}/full_transformer/manifest.json`);
    if (response.ok) {
      const manifest = await response.json();
      status.fullTransformer = {
        ok: true,
        name: manifest.name || '',
        counts: manifest.counts || null,
        linears: Array.isArray(manifest.linears) ? manifest.linears.length : 0,
        qkNormGroups: Array.isArray(manifest.qk_norm_groups) ? manifest.qk_norm_groups.length : (
          manifest.counts && Number.isFinite(manifest.counts.qk_norm_groups) ? manifest.counts.qk_norm_groups : 0
        ),
      };
    } else {
      status.fullTransformer = { ok: false, status: response.status };
    }
  } catch (err) {
    status.fullTransformer = { ok: false, error: errorDetail(err) };
  }
  status.available = Boolean(
    status.gpu &&
    status.shaderF16 &&
    status.dp4a &&
    status.scriptsLoaded &&
    status.transformerRuntimeLoaded &&
    status.checkpointsLoaded.fullDenoise &&
    status.fullTransformer &&
    status.fullTransformer.ok,
  );
  if (!status.available) {
    status.notes.push('custom transformer is not complete; generation uses ONNX WebGPU correctness backend');
    status.fullImageBackend = 'onnx-webgpu';
  } else {
    if (!diagnosticBundlesReady) {
      status.notes.push('legacy checkpoint manifests are missing; full-image custom denoise remains available');
    }
    status.notes.push(status.checkpointsLoaded.fullDenoise
      ? 'custom low-bit WebGPU transformer denoise path is available; VAE decode remains on the split ONNX WebGPU path'
      : 'custom block checkpoints are available, but full denoise is not loaded; generation uses ONNX WebGPU correctness backend');
    if (!status.checkpointsLoaded.fullDenoise) status.fullImageBackend = 'onnx-webgpu';
  }
  customKernelState.available = status.available;
  customKernelState.checked = true;
  customKernelState.lastStatus = status;
  log('custom-kernels', JSON.stringify(status));
  return status;
}

async function prepareCustomTransformerAssets(params = {}) {
  if (typeof globalThis.createCustomFluxTransformerRuntime !== 'function') {
    throw new Error('CUSTOM_TRANSFORMER_RUNTIME_NOT_LOADED');
  }
  const baseUrl = `${runtimeOptions.customKernelBaseUrl || '/runtime/custom_lowbit'}/full_transformer/`;
  if (!customTransformerRuntimeCache.has(baseUrl)) {
    customTransformerRuntimeCache.set(baseUrl, globalThis.createCustomFluxTransformerRuntime({
      baseUrl,
      preloadBinaries: false,
    }));
  }
  const runtime = await customTransformerRuntimeCache.get(baseUrl);
  if (typeof runtime.prepareAssets !== 'function') {
    throw new Error('CUSTOM_TRANSFORMER_ASSET_PREPARE_NOT_AVAILABLE');
  }
  const start = performance.now();
  const result = await runtime.prepareAssets(params);
  log('transformer-custom-webgpu', `custom asset prepare returned in ${((performance.now() - start) / 1000).toFixed(3)}s; summary=${JSON.stringify(result.summary || {})}`);
  return result;
}

async function getCustomTransformerRuntime() {
  if (typeof globalThis.createCustomFluxTransformerRuntime !== 'function') {
    throw new Error('CUSTOM_TRANSFORMER_RUNTIME_NOT_LOADED');
  }
  const baseUrl = `${runtimeOptions.customKernelBaseUrl || '/runtime/custom_lowbit'}/full_transformer/`;
  if (!customTransformerRuntimeCache.has(baseUrl)) {
    customTransformerRuntimeCache.set(baseUrl, globalThis.createCustomFluxTransformerRuntime({
      baseUrl,
      preloadBinaries: false,
    }));
  }
  return {
    baseUrl,
    runtime: await customTransformerRuntimeCache.get(baseUrl),
  };
}

async function prepareCustomTransformerStageSetup(params = {}) {
  if (!config || !modelBaseUrl) throw new Error('Engine is not initialized');
  const { runtime } = await getCustomTransformerRuntime();
  const dispatchWarmup = params.dispatchWarmup === true;
  const prepareMethod = dispatchWarmup ? runtime.warmDispatch : runtime.prepareStage;
  if (typeof prepareMethod !== 'function') {
    throw new Error(dispatchWarmup ? 'CUSTOM_TRANSFORMER_DISPATCH_WARMUP_NOT_AVAILABLE' : 'CUSTOM_TRANSFORMER_STAGE_PREPARE_NOT_AVAILABLE');
  }
  const outputWidth = Number(params.width || config.default_width);
  const outputHeight = Number(params.height || config.default_height);
  if (outputWidth % config.latent_downsample || outputHeight % config.latent_downsample) {
    throw new Error(`width and height must be divisible by ${config.latent_downsample}`);
  }
  const renderPlan = makePreviewRenderPlan(
    outputWidth,
    outputHeight,
    params.previewRenderMaxSize,
    previewRenderEnabledForParams(params),
  );
  const width = renderPlan.renderWidth;
  const height = renderPlan.renderHeight;
  const latentWidth = width / config.latent_downsample;
  const latentHeight = height / config.latent_downsample;
  const imageSeqLen = latentWidth * latentHeight;
  const channels = config.latent_channels;
  const fullTextTokens = Number(config.text_seq_len || 512);
  const requestedTextTokens = Math.trunc(Number(params.textTokens || params.customTextTokenLimit || fullTextTokens));
  const minTextTokens = Math.max(1, Math.trunc(Number(params.minTextTokens || params.customMinTextTokens || 32)));
  const textTokens = Math.min(
    fullTextTokens,
    Math.max(minTextTokens, roundUpToMultiple(Math.max(1, requestedTextTokens), 16)),
  );
  if (imageSeqLen + textTokens > 4608) {
    throw new Error(`CUSTOM_TRANSFORMER_TOKEN_LIMIT: custom WebGPU path currently supports <=4608 joint tokens, got ${imageSeqLen + textTokens}`);
  }
  const contextF16 = new Uint16Array(textTokens * config.context_dim);
  const initialLatentF32 = new Float32Array(imageSeqLen * channels);
  const timesteps = Array.isArray(params.customTimesteps) && params.customTimesteps.length > 1
    ? params.customTimesteps.map(Number)
    : getSchedule(params.numSteps || config.num_steps, imageSeqLen);
  const start = performance.now();
  const result = await prepareMethod.call(runtime, {
    contextF16,
    initialLatentF32,
    imageTokens: imageSeqLen,
    textTokens,
    latentChannels: channels,
    imageWidth: latentWidth,
    timesteps: Array.from(timesteps),
    linearTileCols: params.customLinearTileCols,
    projTileCols: params.customProjTileCols,
    finalTileCols: params.customFinalTileCols,
    wChunkCols: params.customWChunkCols,
    linearRowBlock: params.customLinearRowBlock || params.linearRowBlock,
    singleQ4TileCols: params.customSingleQ4TileCols,
    singleQ4KChunk: params.customSingleQ4KChunk,
    singleQ4Dp4aTileCols: params.customSingleQ4Dp4aTileCols,
    attentionTileKeys: params.customAttentionTileKeys,
    attentionQueryRows: params.customAttentionQueryRows,
    singleAttentionKernel: params.customSingleAttentionKernel || params.singleAttentionKernel || params.attentionKernel,
    textContextCacheKey: "",
    persistentTextProjectionCache: false,
    textProjectionUrl: params.textProjectionUrl || '',
    singleLinear1Output: params.customSingleLinear1Output || params.singleLinear1Output,
    singleLinear1Q4Kernel: params.customSingleLinear1Q4Kernel || params.singleLinear1Q4Kernel,
    singleLinear1Q4ActivationScale: params.customSingleLinear1Q4ActivationScale || params.singleLinear1Q4ActivationScale,
    singleLinear1QkvBackend: params.customSingleLinear1QkvBackend || params.singleLinear1QkvBackend,
    singleLinear1MlpBackend: params.customSingleLinear1MlpBackend || params.singleLinear1MlpBackend,
    singleLinear2Backend: params.customSingleLinear2Backend || params.singleLinear2Backend,
    singleQkNormStorage: params.customSingleQkNormStorage || params.singleQkNormStorage,
    approxReusePredEvery: params.customApproxReusePredEvery || params.approxReusePredEvery,
    approxPredictionMode: params.customApproxPredictionMode || params.approxPredictionMode,
    approxAbScale: params.customApproxAbScale || params.approxAbScale,
    skipSingleBlocksFromStep: params.customSkipSingleBlocksFromStep || params.skipSingleBlocksFromStep,
    skipSingleBlocksFromBlock: params.customSkipSingleBlocksFromBlock || params.skipSingleBlocksFromBlock,
    reuseSingleTailFromStep: params.customReuseSingleTailFromStep || params.reuseSingleTailFromStep,
    reuseSingleTailFromBlock: params.customReuseSingleTailFromBlock || params.reuseSingleTailFromBlock,
    profilePhases: false,
    profileSingleParts: false,
    stepSubmitFusion: params.customStepSubmitFusion ?? params.stepSubmitFusion,
    singleComputePass: params.customSingleComputePass || params.singleComputePass,
    maxDoubleBlocks: params.customMaxDoubleBlocks || params.maxDoubleBlocks,
    maxSingleBlocks: params.customMaxSingleBlocks || params.maxSingleBlocks,
  });
  log('transformer-custom-webgpu', `custom ${dispatchWarmup ? 'dispatch warmup' : 'stage prepare'} returned in ${((performance.now() - start) / 1000).toFixed(3)}s; load=${JSON.stringify(result.load || {})}`);
  return {
    ...result,
    shape: {
      width,
      height,
      latentWidth,
      latentHeight,
      imageSeqLen,
      textTokens,
      renderPlan,
    },
  };
}

async function prepareCustomTransformerTextProjection(params = {}) {
  if (!config || !modelBaseUrl) throw new Error('Engine is not initialized');
  const { runtime } = await getCustomTransformerRuntime();
  if (typeof runtime.runDenoise !== 'function') {
    throw new Error('CUSTOM_TRANSFORMER_TEXT_PROJECTION_PREPARE_NOT_AVAILABLE');
  }
  const outputWidth = Number(params.width || config.default_width);
  const outputHeight = Number(params.height || config.default_height);
  if (outputWidth % config.latent_downsample || outputHeight % config.latent_downsample) {
    throw new Error(`width and height must be divisible by ${config.latent_downsample}`);
  }
  const renderPlan = makePreviewRenderPlan(
    outputWidth,
    outputHeight,
    params.previewRenderMaxSize,
    previewRenderEnabledForParams(params),
  );
  const width = renderPlan.renderWidth;
  const height = renderPlan.renderHeight;
  const latentWidth = width / config.latent_downsample;
  const latentHeight = height / config.latent_downsample;
  const imageSeqLen = latentWidth * latentHeight;
  const channels = config.latent_channels;
  const fullTextTokens = Number(config.text_seq_len || 512);
  const inputIds = params.inputIds !== undefined
    ? coerceInt64Array(params.inputIds, fullTextTokens, 'input ids')
    : await loadInt64Binary(params.inputIdsUrl, fullTextTokens, 'input ids');
  const attentionMask = params.attentionMask !== undefined
    ? coerceInt64Array(params.attentionMask, fullTextTokens, 'attention mask')
    : await loadInt64Binary(params.attentionMaskUrl, fullTextTokens, 'attention mask');
  const activeTextTokens = attentionMaskActiveTokenCount(attentionMask, fullTextTokens);
  const requestedTextLimit = Math.max(0, Math.trunc(Number(params.customTextTokenLimit || params.textTokens || 0)));
  const minTextTokens = Math.max(1, Math.trunc(Number(params.customMinTextTokens || params.minTextTokens || 64)));
  let textTokens = fullTextTokens;
  if (requestedTextLimit > 0) {
    textTokens = Math.min(
      fullTextTokens,
      Math.max(minTextTokens, roundUpToMultiple(Math.min(activeTextTokens, requestedTextLimit), 16)),
    );
  }
  if (imageSeqLen + textTokens > 4608) {
    throw new Error(`CUSTOM_TRANSFORMER_TOKEN_LIMIT: custom WebGPU path currently supports <=4608 joint tokens, got ${imageSeqLen + textTokens}`);
  }
  const ctx = await runTextEncoder({
    ...params,
    inputIds,
    attentionMask,
  });
  const contextF16 = textTokens < fullTextTokens
    ? ctx.slice(0, textTokens * config.context_dim)
    : ctx;
  const timesteps = Array.isArray(params.customTimesteps) && params.customTimesteps.length > 1
    ? params.customTimesteps.map(Number)
    : getSchedule(params.numSteps || config.num_steps, imageSeqLen);
  const start = performance.now();
  const result = await runtime.runDenoise({
    contextF16,
    initialLatentF32: new Float32Array(imageSeqLen * channels),
    imageTokens: imageSeqLen,
    textTokens,
    latentChannels: channels,
    imageWidth: latentWidth,
    timesteps: Array.from(timesteps),
    linearTileCols: params.customLinearTileCols,
    projTileCols: params.customProjTileCols,
    finalTileCols: params.customFinalTileCols,
    wChunkCols: params.customWChunkCols,
    linearRowBlock: params.customLinearRowBlock || params.linearRowBlock,
    singleQ4TileCols: params.customSingleQ4TileCols,
    singleQ4KChunk: params.customSingleQ4KChunk,
    singleQ4Dp4aTileCols: params.customSingleQ4Dp4aTileCols,
    attentionTileKeys: params.customAttentionTileKeys,
    attentionQueryRows: params.customAttentionQueryRows,
    singleAttentionKernel: params.customSingleAttentionKernel || params.singleAttentionKernel || params.attentionKernel,
    textContextCacheKey: params.customTextProjectionCache === false || !params.promptCacheKey ? "" : `${params.promptCacheKey}|txt=${textTokens}`,
    persistentTextProjectionCache: params.persistentTextContextCache !== false,
    textProjectionUrl: params.textProjectionUrl || '',
    singleLinear1Output: params.customSingleLinear1Output || params.singleLinear1Output,
    singleLinear1Q4Kernel: params.customSingleLinear1Q4Kernel || params.singleLinear1Q4Kernel,
    singleLinear1Q4ActivationScale: params.customSingleLinear1Q4ActivationScale || params.singleLinear1Q4ActivationScale,
    singleLinear1QkvBackend: params.customSingleLinear1QkvBackend || params.singleLinear1QkvBackend,
    singleLinear1MlpBackend: params.customSingleLinear1MlpBackend || params.singleLinear1MlpBackend,
    singleLinear2Backend: params.customSingleLinear2Backend || params.singleLinear2Backend,
    singleQkNormStorage: params.customSingleQkNormStorage || params.singleQkNormStorage,
    approxReusePredEvery: params.customApproxReusePredEvery || params.approxReusePredEvery,
    approxPredictionMode: params.customApproxPredictionMode || params.approxPredictionMode,
    approxAbScale: params.customApproxAbScale || params.approxAbScale,
    skipSingleBlocksFromStep: params.customSkipSingleBlocksFromStep || params.skipSingleBlocksFromStep,
    skipSingleBlocksFromBlock: params.customSkipSingleBlocksFromBlock || params.skipSingleBlocksFromBlock,
    reuseSingleTailFromStep: params.customReuseSingleTailFromStep || params.reuseSingleTailFromStep,
    reuseSingleTailFromBlock: params.customReuseSingleTailFromBlock || params.reuseSingleTailFromBlock,
    profilePhases: false,
    profileSingleParts: false,
    stepSubmitFusion: false,
    singleComputePass: false,
    maxDoubleBlocks: params.customMaxDoubleBlocks || params.maxDoubleBlocks,
    maxSingleBlocks: params.customMaxSingleBlocks || params.maxSingleBlocks,
    textProjectionOnly: true,
  });
  log('transformer-custom-webgpu', `custom text projection prepare returned in ${((performance.now() - start) / 1000).toFixed(3)}s; load=${JSON.stringify(result.load || {})}`);
  return {
    ...result,
    shape: {
      width,
      height,
      latentWidth,
      latentHeight,
      imageSeqLen,
      textTokens,
      activeTextTokens,
      renderPlan,
    },
    textEncoder: lastTextEncoderDetails ? {...lastTextEncoderDetails} : null,
  };
}

async function init(baseUrl, options = {}) {
  try {
    clearStaticGpuTensorCache();
    modelBaseUrl = baseUrl;
    runtimeOptions = {
      enableGraphCapture: Boolean(options.enableGraphCapture),
      graphCaptureStages: optionList(options.graphCaptureStages),
      profileWebGpu: Boolean(options.profileWebGpu),
      profileTopK: Number(options.profileTopK || 12),
      textContextCacheSize: Number(options.textContextCacheSize || 4),
      vaeEncoderCacheSize: Number(options.vaeEncoderCacheSize || 3),
      persistentTextContextCache: options.persistentTextContextCache !== false,
      persistentTextContextCacheSize: Number(options.persistentTextContextCacheSize || 8),
      persistentVaeEncoderCache: options.persistentVaeEncoderCache !== false,
      persistentVaeEncoderCacheSize: Number(options.persistentVaeEncoderCacheSize || 8),
      checkLegacyCustomBundles: Boolean(options.checkLegacyCustomBundles),
      enableFusedTransformer: Boolean(options.enableFusedTransformer),
      executionProvider: options.executionProvider || 'webgpu',
      webnnDeviceType: options.webnnDeviceType || 'gpu',
      customKernelBaseUrl: options.customKernelBaseUrl || '/runtime/custom_lowbit',
      customTransformerMode: options.customTransformerMode || 'off',
    };
    if (runtimeOptions.profileWebGpu) {
      webGpuProfileEvents = [];
      ort.env.webgpu.profiling = {
        mode: 'default',
        ondata: (data) => {
          webGpuProfileEvents.push({ ...data, label: activeProfileLabel || 'unscoped' });
        },
      };
    } else {
      ort.env.webgpu.profiling = { mode: 'off' };
    }
    config = await fetchJsonChecked(`${modelBaseUrl}/flux2-config.json`, 'flux2-config.json');
    await customKernelStatus({ force: true });
    log('ready', `FLUX.2 staged browser engine initialized; ort=${ortVersion} provider=${runtimeOptions.executionProvider} webnnDevice=${runtimeOptions.webnnDeviceType} gcAvailable=${typeof globalThis.gc === 'function'} gpuAvailable=${!!navigator.gpu} mlAvailable=${!!navigator.ml} graphCapture=${runtimeOptions.enableGraphCapture} graphCaptureStages=${runtimeOptions.graphCaptureStages.join(',') || 'all'} fusedTransformer=${runtimeOptions.enableFusedTransformer} profileWebGpu=${runtimeOptions.profileWebGpu} customTransformerMode=${runtimeOptions.customTransformerMode} customKernels=${customKernelState.available}`);
    logMemory('ready', 'after config load');
    return { backend: 'webgpu', config, customKernels: customKernelState.lastStatus };
  } catch (err) {
    log('error', `Init failed: ${errorDetail(err)}`);
    throw err;
  }
}

async function runTextEncoder(params) {
  const stage = 'text-encoder';
  const modelConfig = config.models.text_encoder;
  const seqLen = config.text_seq_len;
  const cacheKey = params.cacheTextContext && params.promptCacheKey ? String(params.promptCacheKey) : '';
  const expectedCtxValues = seqLen * config.context_dim;
  const persistentCacheKey = cacheKey && params.persistentTextContextCache !== false
    ? makePersistentTextContextKey(modelConfig, cacheKey, seqLen, config.context_dim)
    : '';
  lastTextEncoderDetails = {
    cacheKey: cacheKey ? cacheKey.slice(0, 12) : '',
    source: 'miss',
    persistent: Boolean(persistentCacheKey),
    persistentMs: 0,
  };
  if (cacheKey && textContextCache.has(cacheKey)) {
    const cached = textContextCache.get(cacheKey);
    lastTextEncoderDetails = {
      ...lastTextEncoderDetails,
      source: 'memory',
    };
    log(stage, `reusing cached text context ${cacheKey.slice(0, 12)} values=${cached.length}`);
    return cached;
  }
  if (persistentCacheKey) {
    const persistentStart = performance.now();
    const cached = await loadPersistentTextContext(persistentCacheKey, expectedCtxValues);
    lastTextEncoderDetails.persistentMs = performance.now() - persistentStart;
    if (cached) {
      rememberTextContext(cacheKey, cached);
      lastTextEncoderDetails = {
        ...lastTextEncoderDetails,
        source: 'indexeddb',
      };
      log(stage, `reusing IndexedDB text context ${cacheKey.slice(0, 12)} values=${cached.length} read=${lastTextEncoderDetails.persistentMs.toFixed(1)}ms`);
      return cached;
    }
  }
  if (params.textContextUrl) {
    const staticStart = performance.now();
    const staticCtx = await loadOptionalFloat16Binary(params.textContextUrl, expectedCtxValues, stage);
    lastTextEncoderDetails.persistentMs = performance.now() - staticStart;
    if (staticCtx) {
      if (cacheKey) rememberTextContext(cacheKey, staticCtx);
      if (persistentCacheKey) {
        savePersistentTextContext(persistentCacheKey, staticCtx).catch((err) => {
          log('text-cache', `could not persist static text context: ${errorDetail(err)}`);
        });
      }
      lastTextEncoderDetails = {
        ...lastTextEncoderDetails,
        source: 'static-file',
      };
      log(stage, `loaded static text context ${cacheKey ? cacheKey.slice(0, 12) : ''} values=${staticCtx.length} read=${lastTextEncoderDetails.persistentMs.toFixed(1)}ms`);
      return staticCtx;
    }
  }
  const inputIds = params.inputIds !== undefined
    ? coerceInt64Array(params.inputIds, seqLen, 'input ids')
    : await loadInt64Binary(params.inputIdsUrl, seqLen, 'input ids');
  const attentionMask = params.attentionMask !== undefined
    ? coerceInt64Array(params.attentionMask, seqLen, 'attention mask')
    : await loadInt64Binary(params.attentionMaskUrl, seqLen, 'attention mask');
  let session = null;
  let feeds = null;
  let outputs = null;
  try {
    session = await createSession(modelConfig, stage, { __cacheSessions: params.cacheSessions });
    feeds = {
      input_ids: tensor('int64', inputIds, [1, seqLen]),
      attention_mask: tensor('int64', attentionMask, [1, seqLen]),
    };
    logMemory(stage, 'before session.run');
    outputs = await profiledRun(session, feeds, null, stage, 'text-encoder');
    logMemory(stage, 'after session.run');
    const ctxRaw = asFloat16Array(await tensorData(firstOutput(outputs, 'ctx')), 'text encoder output');
    const ctx = new Uint16Array(ctxRaw);
    if (ctx.length !== expectedCtxValues) throw new Error(`text encoder output has ${ctx.length} values, expected ${expectedCtxValues}`);
    log(stage, `output tensor: ${tensorDebugSummary(firstOutput(outputs, 'ctx'))}`);
    if (config.zero_padded_context) {
      const zeroedTokens = zeroMaskedTextContextInPlace(ctx, attentionMask, seqLen, config.context_dim);
      if (zeroedTokens) log(stage, `zeroed ${zeroedTokens} padded context tokens`);
    }
    const ctxClip = config.context_clip ?? 0;
    const clipped = clampFloat16ArrayInPlace(ctx, ctxClip);
    if (clipped) log(stage, `clipped ${clipped} context values to +/-${ctxClip}`);
    logArrayStats(stage, 'context', f16ToF32Array(ctx));
    log(stage, `produced context tensor ${ctx.length} fp16 values`);
    if (cacheKey) {
      rememberTextContext(cacheKey, ctx);
      if (persistentCacheKey) {
        const persistentStart = performance.now();
        const saved = await savePersistentTextContext(persistentCacheKey, ctx);
        lastTextEncoderDetails.persistentMs = performance.now() - persistentStart;
        lastTextEncoderDetails = {
          ...lastTextEncoderDetails,
          source: saved ? 'encoded+indexeddb-save' : 'encoded',
        };
        log(stage, `IndexedDB text context save ${saved ? 'complete' : 'skipped'} in ${lastTextEncoderDetails.persistentMs.toFixed(1)}ms`);
      } else {
        lastTextEncoderDetails = {
          ...lastTextEncoderDetails,
          source: 'encoded',
        };
      }
    }
    return ctx;
  } finally {
    await releaseTensorMap(outputs, stage, 'outputs');
    await releaseTensorMap(feeds, stage, 'feeds');
    outputs = null;
    feeds = null;
    await releaseSession(session, stage);
  }
}

async function runTransformerGpuResident(ctx, params, width, height) {
  const stage = 'transformer-gpu';
  const modelConfig = config.models.transformer;
  if (transformerUsesFloat32(modelConfig)) {
    throw new Error('GPU-resident denoise path currently supports fp16 transformer activations only');
  }
  const latentWidth = width / config.latent_downsample;
  const latentHeight = height / config.latent_downsample;
  const imageSeqLen = latentWidth * latentHeight;
  const channels = config.latent_channels;
  const latentElements = imageSeqLen * channels;
  const ctxIds = makeTextIds(config.text_seq_len);
  const xIds = makeImageIds(latentHeight, latentWidth);
  const xInitialF32 = params.initialLatentF32 !== undefined
    ? coerceLatentF32(params.initialLatentF32, latentElements, 'initial latent')
    : makeNoiseF32(imageSeqLen, channels, params.seed ?? 42);
  const xInitialF16 = f32ToF16Array(xInitialF32);
  const timesteps = Array.isArray(params.customTimesteps) && params.customTimesteps.length > 1
    ? params.customTimesteps.map(Number)
    : getSchedule(params.numSteps || config.num_steps, imageSeqLen);
  let session = null;
  const gpuResources = [];
  const paramsBuffers = [];
  try {
    session = await createSession(modelConfig, stage, {
      __cacheSessions: params.cacheSessions,
      image_seq: imageSeqLen,
      latent_height: latentHeight,
      latent_width: latentWidth,
      height,
      width,
    });
    const xResource = createGpuTensorFromTypedArray(xInitialF16, 'float16', [1, imageSeqLen, channels]);
    const predResource = createGpuTensorFromTypedArray(new Uint16Array(latentElements), 'float16', [1, imageSeqLen, channels]);
    const xIdsResource = getCachedGpuTensorResource(
      `x_ids:${latentHeight}x${latentWidth}`,
      () => createGpuTensorFromTypedArray(xIds, 'float32', [1, imageSeqLen, 4]),
      stage,
    );
    const ctxCacheKey = params.cacheTextContext && params.promptCacheKey ? String(params.promptCacheKey) : '';
    const ctxResource = ctxCacheKey
      ? getCachedGpuTensorResource(
        `ctx:${ctxCacheKey}`,
        () => createGpuTensorFromTypedArray(ctx, 'float16', [1, config.text_seq_len, config.context_dim]),
        stage,
      )
      : createGpuTensorFromTypedArray(ctx, 'float16', [1, config.text_seq_len, config.context_dim]);
    const ctxIdsResource = getCachedGpuTensorResource(
      `ctx_ids:${config.text_seq_len}`,
      () => createGpuTensorFromTypedArray(ctxIds, 'float32', [1, config.text_seq_len, 4]),
      stage,
    );
    const timestepResource = createGpuTensorFromTypedArray(new Uint16Array(2), 'float16', [1]);
    gpuResources.push(xResource, predResource, timestepResource);
    if (!ctxCacheKey) gpuResources.push(ctxResource);
    const feeds = {
      x: xResource.tensor,
      x_ids: xIdsResource.tensor,
      timesteps: timestepResource.tensor,
      ctx: ctxResource.tensor,
      ctx_ids: ctxIdsResource.tensor,
    };
    const fetches = { pred: predResource.tensor };
    log(stage, `denoising ${width}x${height}, tokens=${imageSeqLen}, steps=${timesteps.length - 1}, gpu-resident=true`);
    for (let step = 0; step < timesteps.length - 1; step++) {
      if (abortRequested) throw new Error('ABORTED_BY_CLIENT');
      const tCurr = timesteps[step];
      const tPrev = timesteps[step + 1];
      const timestepF16 = f32ToF16Array(new Float32Array([tCurr, 0]));
      getWebGpuDevice().queue.writeBuffer(timestepResource.buffer, 0, timestepF16.buffer, timestepF16.byteOffset, timestepF16.byteLength);
      const runStart = performance.now();
      await profiledRun(session, feeds, fetches, stage, `step-${step + 1}`);
      const runMs = performance.now() - runStart;
      const updateStart = performance.now();
      paramsBuffers.push(dispatchLatentUpdate(xResource.buffer, predResource.buffer, latentElements, tPrev - tCurr));
      const updateMs = performance.now() - updateStart;
      log(stage, `session.run step ${step + 1} returned in ${(runMs / 1000).toFixed(3)}s; gpu latent update queued in ${(updateMs / 1000).toFixed(3)}s`);
    }
    const readStart = performance.now();
    const latentBuffer = await readGpuBuffer(xResource.buffer, latentElements * 2);
    log(stage, `final latent readback returned in ${((performance.now() - readStart) / 1000).toFixed(3)}s`);
    return { latent: new Uint16Array(latentBuffer), latentWidth, latentHeight };
  } finally {
    for (const buffer of paramsBuffers) {
      try {
        buffer.destroy();
      } catch {
      }
    }
    for (const resource of gpuResources) {
      try {
        resource.buffer.destroy();
      } catch {
      }
    }
    await releaseSession(session, stage);
  }
}

async function runTransformerFusedGpuResident(ctx, params, width, height) {
  const stage = 'transformer-fused-gpu';
  const modelConfig = config.models.transformer_fused_4step;
  if (!modelConfig) throw new Error('fused transformer model is not configured');
  if (Number(params.numSteps || config.num_steps) !== 4) throw new Error('fused transformer requires exactly 4 denoise steps');
  if (transformerUsesFloat32(config.models.transformer)) {
    throw new Error('fused GPU denoise path currently supports fp16 transformer activations only');
  }
  const latentWidth = width / config.latent_downsample;
  const latentHeight = height / config.latent_downsample;
  const imageSeqLen = latentWidth * latentHeight;
  const channels = config.latent_channels;
  const latentElements = imageSeqLen * channels;
  const ctxIds = makeTextIds(config.text_seq_len);
  const xIds = makeImageIds(latentHeight, latentWidth);
  const xInitialF32 = params.initialLatentF32 !== undefined
    ? coerceLatentF32(params.initialLatentF32, latentElements, 'initial latent')
    : makeNoiseF32(imageSeqLen, channels, params.seed ?? 42);
  const xInitialF16 = f32ToF16Array(xInitialF32);
  const timesteps = getSchedule(4, imageSeqLen);
  let session = null;
  const gpuResources = [];
  try {
    session = await createSession(modelConfig, stage, {
      __cacheSessions: params.cacheSessions,
      image_seq: imageSeqLen,
      latent_height: latentHeight,
      latent_width: latentWidth,
      height,
      width,
    });
    const xResource = createGpuTensorFromTypedArray(xInitialF16, 'float16', [1, imageSeqLen, channels]);
    const latentResource = createGpuTensorFromTypedArray(new Uint16Array(latentElements), 'float16', [1, imageSeqLen, channels]);
    const xIdsResource = getCachedGpuTensorResource(
      `x_ids:${latentHeight}x${latentWidth}`,
      () => createGpuTensorFromTypedArray(xIds, 'float32', [1, imageSeqLen, 4]),
      stage,
    );
    const ctxCacheKey = params.cacheTextContext && params.promptCacheKey ? String(params.promptCacheKey) : '';
    const ctxResource = ctxCacheKey
      ? getCachedGpuTensorResource(
        `ctx:${ctxCacheKey}`,
        () => createGpuTensorFromTypedArray(ctx, 'float16', [1, config.text_seq_len, config.context_dim]),
        stage,
      )
      : createGpuTensorFromTypedArray(ctx, 'float16', [1, config.text_seq_len, config.context_dim]);
    const ctxIdsResource = getCachedGpuTensorResource(
      `ctx_ids:${config.text_seq_len}`,
      () => createGpuTensorFromTypedArray(ctxIds, 'float32', [1, config.text_seq_len, 4]),
      stage,
    );
    gpuResources.push(xResource, latentResource);
    if (!ctxCacheKey) gpuResources.push(ctxResource);
    const feeds = {
      x: xResource.tensor,
      x_ids: xIdsResource.tensor,
      ctx: ctxResource.tensor,
      ctx_ids: ctxIdsResource.tensor,
    };
    for (let step = 0; step < 4; step++) {
      feeds[`timestep_${step}`] = tensor('float16', f32ToF16Array(new Float32Array([timesteps[step]])), [1]);
      feeds[`dt_${step}`] = tensor('float32', new Float32Array([timesteps[step + 1] - timesteps[step]]), [1]);
    }
    log(stage, `denoising ${width}x${height}, tokens=${imageSeqLen}, steps=4, fused=true gpu-resident=true`);
    const runStart = performance.now();
    await profiledRun(session, feeds, { latent: latentResource.tensor }, stage, 'fused-4step');
    log(stage, `fused session.run returned in ${((performance.now() - runStart) / 1000).toFixed(3)}s`);
    const readStart = performance.now();
    const latentBuffer = await readGpuBuffer(latentResource.buffer, latentElements * 2);
    log(stage, `final latent readback returned in ${((performance.now() - readStart) / 1000).toFixed(3)}s`);
    return { latent: new Uint16Array(latentBuffer), latentWidth, latentHeight };
  } finally {
    for (const resource of gpuResources) {
      try {
        resource.buffer.destroy();
      } catch {
      }
    }
    await releaseSession(session, stage);
  }
}

async function runTransformerCustomLowbitWebGpu(ctx, params, width, height) {
  const stage = 'transformer-custom-webgpu';
  const latentWidth = width / config.latent_downsample;
  const latentHeight = height / config.latent_downsample;
  const imageSeqLen = latentWidth * latentHeight;
  const channels = config.latent_channels;
  const fullTextTokens = config.text_seq_len;
  const activeTextTokens = attentionMaskActiveTokenCount(params.attentionMask, fullTextTokens);
  const requestedTextLimit = Math.max(0, Math.trunc(Number(params.customTextTokenLimit || 0)));
  const minTextTokens = Math.max(1, Math.trunc(Number(params.customMinTextTokens || 64)));
  let textTokens = fullTextTokens;
  if (requestedTextLimit > 0) {
    textTokens = Math.min(
      fullTextTokens,
      Math.max(minTextTokens, roundUpToMultiple(Math.min(activeTextTokens, requestedTextLimit), 16)),
    );
  }
  const contextF16 = textTokens < fullTextTokens
    ? ctx.slice(0, textTokens * config.context_dim)
    : ctx;
  const timesteps = Array.isArray(params.customTimesteps) && params.customTimesteps.length > 1
    ? params.customTimesteps.map(Number)
    : getSchedule(params.numSteps || config.num_steps, imageSeqLen);
  const initialLatentF32 = params.initialLatentF32 !== undefined
    ? coerceLatentF32(params.initialLatentF32, imageSeqLen * channels, 'initial latent')
    : makeNoiseF32(imageSeqLen, channels, params.seed ?? 42);
  const baseUrl = `${runtimeOptions.customKernelBaseUrl || '/runtime/custom_lowbit'}/full_transformer/`;
  if (imageSeqLen + textTokens > 4608) {
    throw new Error(`CUSTOM_TRANSFORMER_TOKEN_LIMIT: custom WebGPU path currently supports <=4608 joint tokens, got ${imageSeqLen + textTokens}`);
  }
  if (typeof globalThis.createCustomFluxTransformerRuntime !== 'function') {
    throw new Error('CUSTOM_TRANSFORMER_RUNTIME_NOT_LOADED');
  }
  if (!customTransformerRuntimeCache.has(baseUrl)) {
    customTransformerRuntimeCache.set(baseUrl, globalThis.createCustomFluxTransformerRuntime({
      baseUrl,
      preloadBinaries: false,
    }));
  }
  const runtime = await customTransformerRuntimeCache.get(baseUrl);
  const status = runtime.status();
  if (!status.ready) {
    throw new Error(`CUSTOM_TRANSFORMER_RUNTIME_NOT_READY: ${JSON.stringify(status.notes || [])}`);
  }
  log(stage, `custom low-bit WebGPU denoise starting ${width}x${height}, imageTokens=${imageSeqLen}, textTokens=${textTokens}/${fullTextTokens}, activeTextTokens=${activeTextTokens}, steps=${timesteps.length - 1}`);
  const start = performance.now();
  const result = await runtime.runDenoise({
    contextF16,
    initialLatentF32,
    imageTokens: imageSeqLen,
    textTokens,
    latentChannels: channels,
    imageWidth: latentWidth,
    timesteps: Array.from(timesteps),
    linearTileCols: params.customLinearTileCols,
    projTileCols: params.customProjTileCols,
    finalTileCols: params.customFinalTileCols,
    wChunkCols: params.customWChunkCols,
    linearRowBlock: params.customLinearRowBlock || params.linearRowBlock,
    singleQ4TileCols: params.customSingleQ4TileCols,
    singleQ4KChunk: params.customSingleQ4KChunk,
    singleQ4Dp4aTileCols: params.customSingleQ4Dp4aTileCols,
    attentionTileKeys: params.customAttentionTileKeys,
    attentionQueryRows: params.customAttentionQueryRows,
    singleAttentionKernel: params.customSingleAttentionKernel || params.singleAttentionKernel || params.attentionKernel,
    textContextCacheKey: params.customTextProjectionCache === false || !params.promptCacheKey ? "" : `${params.promptCacheKey}|txt=${textTokens}`,
    persistentTextProjectionCache: params.persistentTextContextCache !== false,
    textProjectionUrl: params.textProjectionUrl || '',
    singleLinear1Output: params.customSingleLinear1Output || params.singleLinear1Output,
    singleLinear1Q4Kernel: params.customSingleLinear1Q4Kernel || params.singleLinear1Q4Kernel,
    singleLinear1Q4ActivationScale: params.customSingleLinear1Q4ActivationScale || params.singleLinear1Q4ActivationScale,
    singleLinear1QkvBackend: params.customSingleLinear1QkvBackend || params.singleLinear1QkvBackend,
    singleLinear1MlpBackend: params.customSingleLinear1MlpBackend || params.singleLinear1MlpBackend,
    singleLinear2Backend: params.customSingleLinear2Backend || params.singleLinear2Backend,
    singleQkNormStorage: params.customSingleQkNormStorage || params.singleQkNormStorage,
    approxReusePredEvery: params.customApproxReusePredEvery || params.approxReusePredEvery,
    approxPredictionMode: params.customApproxPredictionMode || params.approxPredictionMode,
    approxAbScale: params.customApproxAbScale || params.approxAbScale,
    skipSingleBlocksFromStep: params.customSkipSingleBlocksFromStep || params.skipSingleBlocksFromStep,
    skipSingleBlocksFromBlock: params.customSkipSingleBlocksFromBlock || params.skipSingleBlocksFromBlock,
    reuseSingleTailFromStep: params.customReuseSingleTailFromStep || params.reuseSingleTailFromStep,
    reuseSingleTailFromBlock: params.customReuseSingleTailFromBlock || params.reuseSingleTailFromBlock,
    profilePhases: params.customProfilePhases ?? params.profilePhases,
    profileSingleParts: params.customProfileSingleParts ?? params.profileSingleParts,
    stepSubmitFusion: params.customStepSubmitFusion ?? params.stepSubmitFusion,
    debugStopAfter: params.debugStopAfter,
    debugReadbackCount: params.debugReadbackCount,
    debugImgReadbackCount: params.debugImgReadbackCount,
    debugTxtReadbackCount: params.debugTxtReadbackCount,
    singleComputePass: params.customSingleComputePass || params.singleComputePass,
    maxDoubleBlocks: params.customMaxDoubleBlocks || params.maxDoubleBlocks,
    maxSingleBlocks: params.customMaxSingleBlocks || params.maxSingleBlocks,
  });
  const latent = result.latentF16 instanceof Uint16Array
    ? result.latentF16
    : new Uint16Array(result.latentF16 || []);
  if (params.debugStopAfter) {
    log(stage, `custom low-bit WebGPU debug returned in ${((performance.now() - start) / 1000).toFixed(3)}s; summary=${JSON.stringify(result.summary || {})}`);
    return { latent, latentWidth, latentHeight, debug: result.debug || null, rawResult: result };
  }
  if (latent.length !== imageSeqLen * channels) {
    throw new Error(`CUSTOM_TRANSFORMER_BAD_LATENT_LENGTH: got ${latent.length}, expected ${imageSeqLen * channels}`);
  }
  log(stage, `custom low-bit WebGPU denoise returned in ${((performance.now() - start) / 1000).toFixed(3)}s; summary=${JSON.stringify(result.summary || {})}`);
  return {
    latent,
    latentWidth,
    latentHeight,
    transformerDetails: {
      verdict: result.verdict || null,
      config: result.config || null,
      load: result.load || null,
      summary: result.summary || null,
      step_ms: result.step_ms || null,
      sample: result.sample || null,
    },
  };
}

async function runTransformer(ctx, params, width, height) {
  const stage = 'transformer';
  const modelConfig = config.models.transformer;
  const requestedBackend = params.transformerBackend || runtimeOptions.customTransformerMode || 'onnx-webgpu';
  if (requestedBackend === 'custom-lowbit-webgpu') {
    try {
      return await runTransformerCustomLowbitWebGpu(ctx, params, width, height);
    } catch (err) {
      log(stage, `custom low-bit WebGPU transformer failed: ${errorDetail(err)}`);
      if (params.requireCustomTransformer) throw err;
      log(stage, 'falling back to ONNX WebGPU transformer for complete image generation');
    }
  } else if (requestedBackend !== 'onnx-webgpu' && requestedBackend !== 'off') {
    const status = customKernelState.checked ? customKernelState.lastStatus : await customKernelStatus();
    log(stage, `custom transformer backend requested (${requestedBackend}); full custom image backend status=${JSON.stringify(status)}`);
    if (params.requireCustomTransformer) {
      throw new Error('CUSTOM_TRANSFORMER_FULL_IMAGE_BACKEND_NOT_READY');
    }
    log(stage, 'falling back to ONNX WebGPU transformer for complete start-to-finish image generation');
  }
  if (params.gpuDenoise && !transformerUsesFloat32(modelConfig)) {
    if (runtimeOptions.enableFusedTransformer !== false && !params.customTimesteps && Number(params.numSteps || config.num_steps) === 4) {
      try {
        return await runTransformerFusedGpuResident(ctx, params, width, height);
      } catch (err) {
        log(stage, `fused GPU denoise failed, falling back to per-step GPU loop: ${errorDetail(err)}`);
      }
    }
    try {
      return await runTransformerGpuResident(ctx, params, width, height);
    } catch (err) {
      log(stage, `GPU-resident denoise failed, falling back to CPU tensor loop: ${errorDetail(err)}`);
    }
  }
  const latentWidth = width / config.latent_downsample;
  const latentHeight = height / config.latent_downsample;
  const imageSeqLen = latentWidth * latentHeight;
  const channels = config.latent_channels;
  const ctxIds = makeTextIds(config.text_seq_len);
  const xIds = makeImageIds(latentHeight, latentWidth);
  let x = params.initialLatentF32 !== undefined
    ? new Float32Array(coerceLatentF32(params.initialLatentF32, imageSeqLen * channels, 'initial latent'))
    : makeNoiseF32(imageSeqLen, channels, params.seed ?? 42);
  logArrayStats(stage, 'initial latent', x);
  const timesteps = Array.isArray(params.customTimesteps) && params.customTimesteps.length > 1
    ? params.customTimesteps.map(Number)
    : getSchedule(params.numSteps || config.num_steps, imageSeqLen);
  let session = null;
  let finalLatent = null;
  try {
    session = await createSession(modelConfig, stage, {
      __cacheSessions: params.cacheSessions,
      image_seq: imageSeqLen,
      latent_height: latentHeight,
      latent_width: latentWidth,
      height,
      width,
    });
    log(stage, `denoising ${width}x${height}, tokens=${imageSeqLen}, steps=${timesteps.length - 1}`);
    for (let step = 0; step < timesteps.length - 1; step++) {
      if (abortRequested) throw new Error('ABORTED_BY_CLIENT');
      const tCurr = timesteps[step];
      const tPrev = timesteps[step + 1];
      const useFloat32 = transformerUsesFloat32(modelConfig);
      let feeds = null;
      let outputs = null;
      try {
        feeds = {
          x: useFloat32 ? tensor('float32', x, [1, imageSeqLen, channels]) : tensor('float16', f32ToF16Array(x), [1, imageSeqLen, channels]),
          x_ids: tensor('float32', xIds, [1, imageSeqLen, 4]),
          timesteps: useFloat32 ? tensor('float32', new Float32Array([tCurr]), [1]) : tensor('float16', f32ToF16Array(new Float32Array([tCurr])), [1]),
          ctx: useFloat32 ? tensor('float32', f16ToF32Array(ctx), [1, config.text_seq_len, config.context_dim]) : tensor('float16', ctx, [1, config.text_seq_len, config.context_dim]),
          ctx_ids: tensor('float32', ctxIds, [1, config.text_seq_len, 4]),
        };
        logMemory(stage, `before session.run step ${step + 1}`);
        const runStart = performance.now();
        outputs = await profiledRun(session, feeds, null, stage, `step-${step + 1}`);
        log(stage, `session.run step ${step + 1} returned in ${((performance.now() - runStart) / 1000).toFixed(3)}s`);
        logMemory(stage, `after session.run step ${step + 1}`);
        const predTensor = firstOutput(outputs, 'pred');
        log(stage, `pred tensor step ${step + 1}: ${tensorDebugSummary(predTensor)}`);
        const pred = asFloat32Array(await tensorData(predTensor), 'transformer output');
        const dt = tPrev - tCurr;
        const predStats = logArrayStats(stage, `pred step ${step + 1}`, pred);
        assertFiniteStats(predStats, `pred step ${step + 1}`);
        for (let i = 0; i < x.length; i++) x[i] += dt * pred[i];
        const latentStats = logArrayStats(stage, `latent step ${step + 1}`, x);
        assertFiniteStats(latentStats, `latent step ${step + 1}`);
        log(stage, `step ${step + 1}/${timesteps.length - 1} complete`);
      } finally {
        await releaseTensorMap(outputs, stage, `outputs step ${step + 1}`);
        await releaseTensorMap(feeds, stage, `feeds step ${step + 1}`);
        outputs = null;
        feeds = null;
      }
    }
    assertFiniteStats(logArrayStats(stage, 'final latent', x), 'final latent');
    finalLatent = f32ToF16Array(x);
    x = null;
    logMemory(stage, 'after final latent conversion');
  } finally {
    await releaseSession(session, stage);
    session = null;
  }
  log(stage, 'transformer resources yielded before VAE creation');
  return { latent: finalLatent, latentWidth, latentHeight };
}

function latentSequenceToNchw(latent, latentWidth, latentHeight, channels) {
  const out = new Uint16Array(channels * latentHeight * latentWidth);
  for (let h = 0; h < latentHeight; h++) {
    for (let w = 0; w < latentWidth; w++) {
      const srcBase = (h * latentWidth + w) * channels;
      for (let c = 0; c < channels; c++) out[(c * latentHeight + h) * latentWidth + w] = latent[srcBase + c];
    }
  }
  return out;
}

function latentNchwToSequence(latent, latentWidth, latentHeight, channels) {
  const out = new Uint16Array(latentWidth * latentHeight * channels);
  for (let h = 0; h < latentHeight; h++) {
    for (let w = 0; w < latentWidth; w++) {
      const dstBase = (h * latentWidth + w) * channels;
      for (let c = 0; c < channels; c++) out[dstBase + c] = latent[(c * latentHeight + h) * latentWidth + w];
    }
  }
  return out;
}

function downsampleLatentSequenceAverage(latent, srcWidth, srcHeight, dstWidth, dstHeight, channels) {
  if (srcWidth === dstWidth && srcHeight === dstHeight) return latent;
  const out = new Float32Array(dstWidth * dstHeight * channels);
  const counts = new Uint16Array(dstWidth * dstHeight);
  for (let sy = 0; sy < srcHeight; sy++) {
    const dy = Math.min(dstHeight - 1, Math.floor((sy * dstHeight) / srcHeight));
    for (let sx = 0; sx < srcWidth; sx++) {
      const dx = Math.min(dstWidth - 1, Math.floor((sx * dstWidth) / srcWidth));
      const srcBase = (sy * srcWidth + sx) * channels;
      const dstToken = dy * dstWidth + dx;
      const dstBase = dstToken * channels;
      counts[dstToken] += 1;
      for (let c = 0; c < channels; c++) {
        out[dstBase + c] += float16BitsToFloat32(latent[srcBase + c]);
      }
    }
  }
  for (let token = 0; token < counts.length; token++) {
    const count = Math.max(1, counts[token]);
    const base = token * channels;
    for (let c = 0; c < channels; c++) out[base + c] /= count;
  }
  return f32ToF16Array(out);
}

function makePreviewDecodePlan(latentResult, width, height, maxSize) {
  const requestedMax = Math.max(0, Math.trunc(Number(maxSize || 0)));
  if (!requestedMax || Math.max(width, height) <= requestedMax) {
    return {
      latentResult,
      decodeWidth: width,
      decodeHeight: height,
      previewDecode: null,
    };
  }
  const scale = requestedMax / Math.max(width, height);
  const decodeWidth = Math.max(config.latent_downsample, Math.floor((width * scale) / config.latent_downsample) * config.latent_downsample);
  const decodeHeight = Math.max(config.latent_downsample, Math.floor((height * scale) / config.latent_downsample) * config.latent_downsample);
  const decodeLatentWidth = decodeWidth / config.latent_downsample;
  const decodeLatentHeight = decodeHeight / config.latent_downsample;
  const latent = downsampleLatentSequenceAverage(
    latentResult.latent,
    latentResult.latentWidth,
    latentResult.latentHeight,
    decodeLatentWidth,
    decodeLatentHeight,
    config.latent_channels,
  );
  return {
    latentResult: { latent, latentWidth: decodeLatentWidth, latentHeight: decodeLatentHeight },
    decodeWidth,
    decodeHeight,
    previewDecode: {
      sourceWidth: width,
      sourceHeight: height,
      decodeWidth,
      decodeHeight,
      maxSize: requestedMax,
    },
  };
}

function makePreviewRenderPlan(width, height, maxSize, enabled = true) {
  const requestedMax = Math.max(0, Math.trunc(Number(maxSize || 0)));
  if (!enabled || !requestedMax || Math.max(width, height) <= requestedMax) {
    return {
      renderWidth: width,
      renderHeight: height,
      previewRender: null,
    };
  }
  const scale = requestedMax / Math.max(width, height);
  const renderWidth = Math.max(config.latent_downsample, Math.floor((width * scale) / config.latent_downsample) * config.latent_downsample);
  const renderHeight = Math.max(config.latent_downsample, Math.floor((height * scale) / config.latent_downsample) * config.latent_downsample);
  return {
    renderWidth,
    renderHeight,
    previewRender: {
      sourceWidth: width,
      sourceHeight: height,
      renderWidth,
      renderHeight,
      maxSize: requestedMax,
    },
  };
}

function previewRenderEnabledForParams(params = {}) {
  const hasInitImage = params.initImage !== undefined || params.hasInitImage === true;
  return !hasInitImage || params.previewRenderInitImage === true;
}

function coerceImageNchwF16(data, width, height) {
  const expectedValues = width * height * 3;
  if (data instanceof Uint16Array) {
    if (data.length !== expectedValues) throw new Error(`init image has ${data.length} values, expected ${expectedValues}`);
    return data;
  }
  let values;
  if (data instanceof Float32Array) {
    values = data;
  } else if (ArrayBuffer.isView(data)) {
    values = new Float32Array(data.length);
    for (let i = 0; i < data.length; i++) values[i] = Number(data[i]);
  } else if (data instanceof ArrayBuffer) {
    if (data.byteLength !== expectedValues * 4) throw new Error(`init image has ${data.byteLength} bytes, expected ${expectedValues * 4}`);
    values = new Float32Array(data);
  } else if (Array.isArray(data)) {
    values = Float32Array.from(data, Number);
  } else {
    throw new Error('init image must be a normalized NCHW Float32Array/Uint16Array, ArrayBuffer, typed array, or number array');
  }
  if (values.length !== expectedValues) throw new Error(`init image has ${values.length} values, expected ${expectedValues}`);
  return f32ToF16Array(values);
}

function img2imgStrengthCurveExponent(curve) {
  if (curve === 'linear') return 1;
  if (curve === 'balanced') return 1.25;
  if (curve === 'strong') return 3;
  if (curve === 'rewrite') return 6;
  if (curve === 'edit') return 2.5;
  return 2.5;
}

function img2imgEffectiveStrength(strength, curve) {
  const clamped = Math.max(0, Math.min(1, Number(strength ?? 0.65)));
  return 1 - Math.pow(1 - clamped, img2imgStrengthCurveExponent(curve));
}

function normalizeImg2ImgCurve(curve) {
  if (curve === 'linear' || curve === 'balanced' || curve === 'edit' || curve === 'strong' || curve === 'rewrite') return curve;
  return 'edit';
}

function normalizeImg2ImgStepPolicy(policy) {
  return policy === 'adaptive' ? 'adaptive' : 'full';
}

function img2imgSchedule(numSteps, imageSeqLen, strength, curve = 'edit', stepPolicy = 'full') {
  const full = getSchedule(numSteps, imageSeqLen);
  const normalizedCurve = normalizeImg2ImgCurve(curve);
  const normalizedStepPolicy = normalizeImg2ImgStepPolicy(stepPolicy);
  const clamped = Math.max(0, Math.min(1, Number(strength ?? 0.65)));
  if (clamped <= 0) {
    return {
      timesteps: [0],
      startT: 0,
      stepCount: 0,
      requestedSteps: numSteps,
      strength: clamped,
      effectiveStrength: 0,
      curve: normalizedCurve,
      stepPolicy: normalizedStepPolicy,
    };
  }
  const effectiveStrength = img2imgEffectiveStrength(clamped, normalizedCurve);
  const targetSteps = normalizedStepPolicy === 'adaptive'
    ? Math.max(1, Math.min(numSteps, Math.ceil(numSteps * clamped)))
    : numSteps;
  const timesteps = targetSteps === numSteps
    ? full.map((value) => value * effectiveStrength)
    : getSchedule(targetSteps, imageSeqLen).map((value) => value * effectiveStrength);
  return {
    timesteps,
    startT: effectiveStrength,
    stepCount: targetSteps,
    requestedSteps: numSteps,
    strength: clamped,
    effectiveStrength,
    curve: normalizedCurve,
    stepPolicy: normalizedStepPolicy,
  };
}

function blendLatentWithNoise(encodedLatentF16, imageSeqLen, channels, seed, startT) {
  const encoded = f16ToF32Array(encodedLatentF16);
  const noise = makeNoiseF32(imageSeqLen, channels, seed);
  const out = new Float32Array(encoded.length);
  const latentScale = 1 - startT;
  for (let i = 0; i < out.length; i++) out[i] = encoded[i] * latentScale + noise[i] * startT;
  return out;
}

const isLittleEndian = (() => {
  const buffer = new ArrayBuffer(4);
  new Uint32Array(buffer)[0] = 0x0a0b0c0d;
  return new Uint8Array(buffer)[0] === 0x0d;
})();

function imageTensorToRgba(imageData, width, height) {
  const rgba = new Uint8ClampedArray(width * height * 4);
  const plane = width * height;
  if (isLittleEndian) {
    const packed = new Uint32Array(rgba.buffer);
    if (imageData instanceof Uint16Array) {
      const lut = getHalfToImageByteLut();
      for (let pixel = 0; pixel < plane; pixel++) {
        const r = lut[imageData[pixel]];
        const g = lut[imageData[plane + pixel]];
        const b = lut[imageData[plane * 2 + pixel]];
        packed[pixel] = 0xff000000 | (b << 16) | (g << 8) | r;
      }
    } else {
      for (let pixel = 0; pixel < plane; pixel++) {
        const r = imageByteFromFloat(imageData[pixel]);
        const g = imageByteFromFloat(imageData[plane + pixel]);
        const b = imageByteFromFloat(imageData[plane * 2 + pixel]);
        packed[pixel] = 0xff000000 | (b << 16) | (g << 8) | r;
      }
    }
  } else {
    if (imageData instanceof Uint16Array) {
      const lut = getHalfToImageByteLut();
      for (let pixel = 0; pixel < plane; pixel++) {
        const out = pixel * 4;
        rgba[out] = lut[imageData[pixel]];
        rgba[out + 1] = lut[imageData[plane + pixel]];
        rgba[out + 2] = lut[imageData[plane * 2 + pixel]];
        rgba[out + 3] = 255;
      }
    } else {
      for (let pixel = 0; pixel < plane; pixel++) {
        const out = pixel * 4;
        rgba[out] = imageByteFromFloat(imageData[pixel]);
        rgba[out + 1] = imageByteFromFloat(imageData[plane + pixel]);
        rgba[out + 2] = imageByteFromFloat(imageData[plane * 2 + pixel]);
        rgba[out + 3] = 255;
      }
    }
  }
  return rgba;
}

function canvasToPngBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error('Canvas did not produce a PNG blob'));
    }, 'image/png');
  });
}

async function runVaeDecoder(latentResult, width, height, cacheSessions = false, outputOptions = {}) {
  const stage = 'vae-decoder';
  const modelConfig = config.models.vae_decoder;
  const { latent, latentWidth, latentHeight } = latentResult;
  log(stage, `latent input sequence: len=${latent.length} bytes=${formatBytes(latent.byteLength)} shape=[1,${latentWidth * latentHeight},${config.latent_channels}]`);
  logMemory(stage, 'before latentSequenceToNchw');
  const z = latentSequenceToNchw(latent, latentWidth, latentHeight, config.latent_channels);
  log(stage, `VAE z tensor prepared: len=${z.length} bytes=${formatBytes(z.byteLength)} shape=[1,${config.latent_channels},${latentHeight},${latentWidth}]`);
  logMemory(stage, 'after latentSequenceToNchw');
  return runVaeDecoderNchw(z, latentWidth, latentHeight, width, height, stage, modelConfig, cacheSessions, outputOptions);
}

async function runVaeEncoder(params, width, height, cacheSessions = false) {
  const stage = 'vae-encoder';
  const modelConfig = config.models.vae_encoder;
  if (!modelConfig) {
    throw new Error('VAE encoder is not configured in the model bundle; img2img requires flux2-klein-4b-vae-encoder-fp16.onnx');
  }
  const latentWidth = width / config.latent_downsample;
  const latentHeight = height / config.latent_downsample;
  const cacheKey = makeVaeEncoderCacheKey(params, modelConfig, width, height);
  lastVaeEncoderDetails = { source: cacheKey ? 'miss' : 'disabled', cacheKey: cacheKey ? cacheKey.slice(0, 24) : '' };
  if (cacheKey && vaeEncoderCache.has(cacheKey)) {
    const cached = vaeEncoderCache.get(cacheKey);
    lastVaeEncoderDetails = { ...lastVaeEncoderDetails, source: 'memory' };
    log(stage, `reusing cached source latent ${cacheKey.slice(0, 24)} latent=${cached.latentWidth}x${cached.latentHeight}`);
    return {
      latent: new Uint16Array(cached.latent),
      latentWidth: cached.latentWidth,
      latentHeight: cached.latentHeight,
    };
  }
  const expectedLatentValues = config.latent_channels * latentHeight * latentWidth;
  const persistent = await loadPersistentVaeEncoderResult(cacheKey, expectedLatentValues, latentWidth, latentHeight);
  if (persistent) {
    rememberVaeEncoderResult(cacheKey, persistent);
    lastVaeEncoderDetails = { ...lastVaeEncoderDetails, source: 'indexeddb' };
    log(stage, `loaded cached source latent from IndexedDB ${cacheKey.slice(0, 24)} latent=${persistent.latentWidth}x${persistent.latentHeight}`);
    return persistent;
  }
  const image = coerceImageNchwF16(params.initImage, width, height);
  let session = null;
  let feeds = null;
  let outputs = null;
  try {
    logMemory(stage, 'before VAE encoder session create');
    session = await createSession(modelConfig, stage, {
      __cacheSessions: cacheSessions,
      height,
      width,
      latent_height: latentHeight,
      latent_width: latentWidth,
    });
    feeds = {
      image: tensor('float16', image, [1, 3, height, width]),
    };
    log(stage, `VAE encode starting: image=${width}x${height} latent=${latentWidth}x${latentHeight} feed=${tensorDebugSummary(feeds.image)}`);
    logMemory(stage, 'before session.run');
    const runStart = performance.now();
    outputs = await profiledRun(session, feeds, null, stage, 'vae-encoder');
    log(stage, `VAE encoder session.run returned in ${((performance.now() - runStart) / 1000).toFixed(3)}s`);
    logMemory(stage, 'after session.run');
    const zTensor = firstOutput(outputs, 'z');
    log(stage, `encoded latent tensor: ${tensorDebugSummary(zTensor)}`);
    const zRaw = asFloat16Array(await tensorData(zTensor), 'VAE encoder output');
    const zNchw = new Uint16Array(zRaw);
    if (zNchw.length !== expectedLatentValues) throw new Error(`VAE encoder output has ${zNchw.length} values, expected ${expectedLatentValues}`);
    const latent = latentNchwToSequence(zNchw, latentWidth, latentHeight, config.latent_channels);
    const encoded = { latent, latentWidth, latentHeight };
    rememberVaeEncoderResult(cacheKey, encoded);
    savePersistentVaeEncoderResult(cacheKey, encoded).then((saved) => {
      if (saved) log('vae-cache', `IndexedDB source latent save complete ${cacheKey.slice(0, 24)}`);
    }).catch((err) => {
      log('vae-cache', `IndexedDB save failed: ${errorDetail(err)}`);
    });
    if (cacheKey) lastVaeEncoderDetails = { ...lastVaeEncoderDetails, source: 'encoded' };
    return encoded;
  } finally {
    await releaseTensorMap(outputs, stage, 'outputs');
    await releaseTensorMap(feeds, stage, 'feeds');
    outputs = null;
    feeds = null;
    await releaseSession(session, stage);
  }
}

async function runVaeDecoderNchw(z, latentWidth, latentHeight, width, height, stage = 'vae-decoder', modelConfig = config.models.vae_decoder, cacheSessions = false, outputOptions = {}) {
  const postStageKeys = Array.isArray(config.vae_decoder_post_stage_keys) ? config.vae_decoder_post_stage_keys : [];
  const hasPostStages = postStageKeys.some((key) => config.models[key]);
  if (config.models.vae_decoder_pre && config.models.vae_decoder_attn_chunk && (config.models.vae_decoder_post || hasPostStages)) {
    return runVaeDecoderSplitNchw(z, latentWidth, latentHeight, width, height, cacheSessions, outputOptions);
  }
  if (!modelConfig) {
    throw new Error('VAE decoder is not configured: missing both split decoder stages and unified vae_decoder model');
  }
  let session = null;
  let feeds = null;
  let outputs = null;
  try {
    logMemory(stage, 'before VAE session create');
    session = await createSession(modelConfig, stage, {
      __cacheSessions: cacheSessions,
      latent_height: latentHeight,
      latent_width: latentWidth,
      height,
      width,
    });
    feeds = {
      z: tensor('float16', z, [1, config.latent_channels, latentHeight, latentWidth]),
    };
    log(stage, `VAE run starting: latent=${latentWidth}x${latentHeight} output=${width}x${height} feed=${tensorDebugSummary(feeds.z)}`);
    logMemory(stage, 'before session.run');
    const runStart = performance.now();
    outputs = await profiledRun(session, feeds, null, stage, 'vae');
    log(stage, `VAE session.run returned in ${((performance.now() - runStart) / 1000).toFixed(3)}s`);
    logMemory(stage, 'after session.run');
    const imageTensor = firstOutput(outputs, 'image');
    log(stage, `image tensor: ${tensorDebugSummary(imageTensor)}`);
    const image = await tensorData(imageTensor);
    log(stage, `image tensor data materialized: ${image.constructor?.name || typeof image} bytes=${formatBytes(image.byteLength || 0)}`);
    logMemory(stage, 'after image getData');
    return await imageTensorDataToOutput(image, width, height, stage, outputOptions);
  } finally {
    await releaseTensorMap(outputs, stage, 'outputs');
    await releaseTensorMap(feeds, stage, 'feeds');
    outputs = null;
    feeds = null;
    await releaseSession(session, stage);
  }
}

async function imageTensorDataToOutput(image, width, height, stage, outputOptions = {}) {
  if (outputOptions.warmDispatchOnly === true) {
    const bytes = image?.byteLength || 0;
    log(stage, `warm dispatch decoded image tensor; skipping RGBA/PNG output: bytes=${formatBytes(bytes)}`);
    return { imageBytes: bytes, pngBytes: 0, warmDispatchOnly: true, timings: { imageTensorToRgbaMs: 0, pngEncodeMs: 0 } };
  }
  const convertStart = performance.now();
  const rgba = imageTensorToRgba(image, width, height);
  const imageTensorToRgbaMs = performance.now() - convertStart;
  log(stage, `RGBA buffer prepared: bytes=${formatBytes(rgba.byteLength)}`);
  logMemory(stage, 'after imageTensorToRgba');
  const imageDataStart = performance.now();
  const imageData = new ImageData(rgba, width, height);
  const imageDataMs = performance.now() - imageDataStart;
  if (outputOptions.returnImageData && !outputOptions.returnImageBlob) {
    log(stage, `returning ImageData without PNG encode: ${formatBytes(rgba.byteLength)}`);
    return { imageData, imageBytes: rgba.byteLength, pngBytes: 0, timings: { imageTensorToRgbaMs, imageDataMs, pngEncodeMs: 0 } };
  }
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  context.putImageData(imageData, 0, 0);
  const pngStart = performance.now();
  const png = await canvasToPngBlob(canvas);
  const pngEncodeMs = performance.now() - pngStart;
  log(stage, `encoded PNG ${png.size} bytes`);
  return {
    imageBlob: png,
    imageData: outputOptions.returnImageData ? imageData : undefined,
    imageBytes: rgba.byteLength,
    pngBytes: png.size,
    timings: { imageTensorToRgbaMs, imageDataMs, pngEncodeMs },
  };
}

function vaeSplitTensorDims(name, width, height, decoderWidth, decoderHeight, seqLen, headDim, length = null) {
  const tensorName = String(name || '');
  if (tensorName === 'z') return [1, config.latent_channels, decoderHeight / 2, decoderWidth / 2];
  if (tensorName.includes('/decoder/block_1/Add_output_0')) return [1, headDim, decoderHeight, decoderWidth];
  if (tensorName.includes('/decoder/attn_1/MatMul_1_output_0')) return [1, 1, seqLen, headDim];
  if (tensorName.includes('/decoder/upsample/conv/Conv_output_0')) return [1, headDim, decoderHeight * 2, decoderWidth * 2];
  if (tensorName.includes('/decoder/upsample/conv_1/Conv_output_0')) return [1, headDim, decoderHeight * 4, decoderWidth * 4];
  if (tensorName.includes('/decoder/block.0_2/Add_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / ((width / 2) * (height / 2)))), height / 2, width / 2];
  if (tensorName.includes('/decoder/block.1_2/Add_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / ((width / 2) * (height / 2)))), height / 2, width / 2];
  if (tensorName.includes('/decoder/block.2_2/Add_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / ((width / 2) * (height / 2)))), height / 2, width / 2];
  if (tensorName.includes('/decoder/upsample/conv_2/Conv_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName.includes('/decoder/block.0/nin_shortcut_1/Conv_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName.includes('/decoder/block.0/norm1_3/Add_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName.includes('/decoder/block.0/conv1_3/Conv_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName.includes('/decoder/block.0/conv2_3/Conv_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName.includes('/decoder/block.0_3/Add_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName.includes('/decoder/block.1/norm1_3/Add_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName.includes('/decoder/block.1/conv1_3/Conv_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName.includes('/decoder/block.1/norm2_3/Add_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName.includes('/decoder/block.1/conv2_3/Conv_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName.includes('/decoder/block.1_3/Add_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName.includes('/decoder/block.2/norm1_3/Add_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName.includes('/decoder/block.2/conv1_3/Conv_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName.includes('/decoder/block.2/norm2_3/Add_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName.includes('/decoder/block.2/conv2_3/Conv_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName.includes('/decoder/block.2_3/Add_output_0')) return [1, Math.max(1, Math.round(Number(length || 0) / (width * height))), height, width];
  if (tensorName === 'image') return [1, 3, height, width];
  if (length && width > 0 && height > 0 && length % (width * height) === 0) return [1, length / (width * height), height, width];
  throw new Error(`No split VAE tensor shape rule for ${tensorName}`);
}

async function runVaeDecoderPostStages(stage, postStageKeys, residualName, residual, attnName, attn, dimsContext) {
  const tensors = new Map([
    [residualName, residual],
    [attnName, attn],
  ]);
  const futureInputsByStage = postStageKeys.map((_, index) => {
    const names = new Set();
    for (let future = index + 1; future < postStageKeys.length; future++) {
      const futureConfig = config.models[postStageKeys[future]];
      for (const inputName of futureConfig?.inputs || []) names.add(inputName);
    }
    return names;
  });
  let finalImage = null;
  for (let index = 0; index < postStageKeys.length; index++) {
    if (abortRequested) throw new Error('ABORTED_BY_CLIENT');
    const key = postStageKeys[index];
    const stageConfig = config.models[key];
    if (!stageConfig) throw new Error(`Missing VAE post stage config ${key}`);
    const inputNames = stageConfig.inputs || [];
    const outputName = stageConfig.outputs?.[0];
    if (!inputNames.length || !outputName) throw new Error(`Invalid VAE post stage config ${key}`);

    let postSession = null;
    let postFeeds = null;
    let postOutputs = null;
    try {
      postSession = await createSession(stageConfig, `${stage}:post:${index + 1}/${postStageKeys.length}`, {
        __cacheSessions: dimsContext.cacheSessions,
        latent_height: dimsContext.latentHeight,
        latent_width: dimsContext.latentWidth,
        height: dimsContext.height,
        width: dimsContext.width,
        kv_seq: dimsContext.seqLen,
        chunk_seq: dimsContext.chunkSize,
      });
      postFeeds = {};
      for (const inputName of inputNames) {
        const data = tensors.get(inputName);
        if (!data) throw new Error(`VAE post stage ${key} missing input ${inputName}`);
        postFeeds[inputName] = tensor(
          'float16',
          data,
          vaeSplitTensorDims(
            inputName,
            dimsContext.width,
            dimsContext.height,
            dimsContext.decoderWidth,
            dimsContext.decoderHeight,
            dimsContext.seqLen,
            dimsContext.headDim,
            data.length,
          ),
        );
      }
      log(stage, `post stage ${index + 1}/${postStageKeys.length} starting: ${stageConfig.file} inputs=${inputNames.map((name) => `${name}:${formatBytes(tensors.get(name)?.byteLength || 0)}`).join(', ')}`);
      logMemory(stage, `before post stage ${index + 1}`);
      const t0 = performance.now();
      postOutputs = await profiledRun(postSession, postFeeds, null, `${stage}:post:${index + 1}`, `stage-${index + 1}`);
      const outputTensor = postOutputs[outputName] || firstOutput(postOutputs, outputName);
      log(stage, `post stage ${index + 1}/${postStageKeys.length} returned in ${((performance.now() - t0) / 1000).toFixed(3)}s; output=${tensorDebugSummary(outputTensor)}`);
      const futureInputs = futureInputsByStage[index];
      await releaseTensorMap(postFeeds, `${stage}:post:${index + 1}`, 'feeds-after-run');
      postFeeds = null;
      for (const inputName of inputNames) {
        if (inputName !== outputName && !futureInputs.has(inputName)) tensors.delete(inputName);
      }
      log(stage, `post stage ${index + 1}/${postStageKeys.length} released unneeded inputs before materializing output; retained=${Array.from(tensors.keys()).map((name) => `${name}:${formatBytes(tensors.get(name)?.byteLength || 0)}`).join(', ') || 'none'}`);
      await yieldToRuntime();
      const outputData = asFloat16Array(await tensorData(outputTensor), outputName);
      log(stage, `post stage ${index + 1}/${postStageKeys.length} materialized ${outputName}: ${formatBytes(outputData.byteLength)}`);
      logMemory(stage, `after post stage ${index + 1} getData`);

      tensors.set(outputName, outputData);
      if (outputName === 'image') finalImage = outputData;
    } finally {
      await releaseTensorMap(postOutputs, `${stage}:post:${index + 1}`, 'outputs');
      await releaseTensorMap(postFeeds, `${stage}:post:${index + 1}`, 'feeds');
      await releaseSession(postSession, `${stage}:post:${index + 1}`);
      await yieldToRuntime();
    }
  }
  if (!finalImage) {
    finalImage = tensors.get('image');
  }
  if (!finalImage) throw new Error('VAE post stages did not produce image');
  return finalImage;
}

async function releaseTensorMapValues(tensors, stage, label) {
  if (!tensors || !tensors.size) {
    log(stage, `releaseTensorMapValues ${label}: empty`);
    return;
  }
  const counts = {};
  for (const tensorValue of tensors.values()) {
    const method = await releaseTensorValue(tensorValue);
    counts[method] = (counts[method] || 0) + 1;
  }
  tensors.clear();
  log(stage, `releaseTensorMapValues ${label}: releaseMethods=${JSON.stringify(counts)}`);
}

async function runVaeDecoderPostStagesGpuHandoff(stage, postStageKeys, tensors, dimsContext) {
  const futureInputsByStage = postStageKeys.map((_, index) => {
    const names = new Set();
    for (let future = index + 1; future < postStageKeys.length; future++) {
      const futureConfig = config.models[postStageKeys[future]];
      for (const inputName of futureConfig?.inputs || []) names.add(inputName);
    }
    return names;
  });
  let finalTensor = null;
  for (let index = 0; index < postStageKeys.length; index++) {
    if (abortRequested) throw new Error('ABORTED_BY_CLIENT');
    const key = postStageKeys[index];
    const stageConfig = config.models[key];
    if (!stageConfig) throw new Error(`Missing VAE post stage config ${key}`);
    const inputNames = stageConfig.inputs || [];
    const outputName = stageConfig.outputs?.[0];
    if (!inputNames.length || !outputName) throw new Error(`Invalid VAE post stage config ${key}`);

    let postSession = null;
    let postOutputs = null;
    try {
      postSession = await createSession(stageConfig, `${stage}:gpu-post:${index + 1}/${postStageKeys.length}`, {
        __cacheSessions: dimsContext.cacheSessions,
        __preferredOutputLocation: { [outputName]: 'gpu-buffer' },
        latent_height: dimsContext.latentHeight,
        latent_width: dimsContext.latentWidth,
        height: dimsContext.height,
        width: dimsContext.width,
        kv_seq: dimsContext.seqLen,
        chunk_seq: dimsContext.chunkSize,
      });
      const postFeeds = {};
      for (const inputName of inputNames) {
        const inputTensor = tensors.get(inputName);
        if (!inputTensor) throw new Error(`VAE GPU post stage ${key} missing input ${inputName}`);
        postFeeds[inputName] = inputTensor;
      }
      log(stage, `GPU post stage ${index + 1}/${postStageKeys.length} starting: ${stageConfig.file} inputs=${inputNames.map((name) => `${name}:{${tensorDebugSummary(tensors.get(name))}}`).join(', ')}`);
      const t0 = performance.now();
      postOutputs = await profiledRun(postSession, postFeeds, null, `${stage}:gpu-post:${index + 1}`, `stage-${index + 1}`);
      const outputTensor = postOutputs[outputName] || firstOutput(postOutputs, outputName);
      log(stage, `GPU post stage ${index + 1}/${postStageKeys.length} returned in ${((performance.now() - t0) / 1000).toFixed(3)}s; output=${tensorDebugSummary(outputTensor)}`);

      const futureInputs = futureInputsByStage[index];
      for (const inputName of inputNames) {
        if (inputName !== outputName && !futureInputs.has(inputName)) {
          await releaseTensorValue(tensors.get(inputName));
          tensors.delete(inputName);
        }
      }
      tensors.set(outputName, outputTensor);
      if (outputName === 'image') finalTensor = outputTensor;
      postOutputs = null;
      await yieldToRuntime();
    } finally {
      await releaseTensorMap(postOutputs, `${stage}:gpu-post:${index + 1}`, 'outputs-after-error');
      await releaseSession(postSession, `${stage}:gpu-post:${index + 1}`);
    }
  }
  if (!finalTensor) {
    finalTensor = tensors.get('image');
  }
  if (!finalTensor) throw new Error('VAE GPU post stages did not produce image');
  return finalTensor;
}

async function runVaeDecoderSplitNchwGpuHandoff(z, latentWidth, latentHeight, width, height, cacheSessions = false, outputOptions = {}) {
  const stage = 'vae-decoder-split-gpu';
  const preConfig = config.models.vae_decoder_pre;
  const chunkConfig = config.models.vae_decoder_attn_chunk;
  const postStageKeys = (Array.isArray(config.vae_decoder_post_stage_keys) ? config.vae_decoder_post_stage_keys : []).filter((key) => config.models[key]);
  if (!postStageKeys.length) throw new Error('GPU VAE handoff currently expects staged post decoder graphs');
  const postConfig = config.models.vae_decoder_post || config.models[postStageKeys[0]];
  const decoderHeight = latentHeight * 2;
  const decoderWidth = latentWidth * 2;
  const seqLen = decoderHeight * decoderWidth;
  const headDim = Number(chunkConfig.head_dim || 512);
  const residualName = postConfig?.residual_input || postConfig?.inputs?.[0] || '/decoder/block_1/Add_output_0';
  const attnName = postConfig?.attn_input || postConfig?.inputs?.[1] || '/decoder/attn_1/MatMul_1_output_0';
  const preOutputs = preConfig.outputs || [];
  const qName = preOutputs.find((name) => String(name).includes('/Mul_6_output_0')) || '/decoder/attn_1/Mul_6_output_0';
  const ktName = preOutputs.find((name) => String(name).includes('/Mul_7_output_0')) || '/decoder/attn_1/Mul_7_output_0';
  const vName = preOutputs.find((name) => String(name).includes('/Reshape_2_output_0')) || '/decoder/attn_1/Reshape_2_output_0';
  const chunkOutputName = chunkConfig.outputs?.[0] || 'attn_chunk';

  const tensors = new Map();
  let preSession = null;
  let preFeeds = null;
  let preRunOutputs = null;
  let chunkSession = null;
  let chunkOutputs = null;
  try {
    log(stage, `GPU handoff pre-attention run: latent=${latentWidth}x${latentHeight} decoder_mid=${decoderWidth}x${decoderHeight} seq=${seqLen}`);
    preSession = await createSession(preConfig, `${stage}:pre`, {
      __cacheSessions: cacheSessions,
      __preferredOutputLocation: {
        [residualName]: 'gpu-buffer',
        [qName]: 'gpu-buffer',
        [ktName]: 'gpu-buffer',
        [vName]: 'gpu-buffer',
      },
      latent_height: latentHeight,
      latent_width: latentWidth,
      height,
      width,
    });
    preFeeds = { z: tensor('float16', z, [1, config.latent_channels, latentHeight, latentWidth]) };
    preRunOutputs = await profiledRun(preSession, preFeeds, null, `${stage}:pre`, 'pre');
    for (const name of [residualName, qName, ktName, vName]) {
      const outputTensor = preRunOutputs[name];
      if (!outputTensor) throw new Error(`GPU VAE pre missing output ${name}`);
      tensors.set(name, outputTensor);
    }
    log(stage, `GPU pre outputs ready: ${Array.from(tensors.entries()).map(([name, value]) => `${name}:{${tensorDebugSummary(value)}}`).join(' ; ')}`);
    preRunOutputs = null;
    await releaseTensorMap(preFeeds, `${stage}:pre`, 'feeds');
    preFeeds = null;
    await releaseSession(preSession, `${stage}:pre`);
    preSession = null;

    chunkSession = await createSession(chunkConfig, `${stage}:attn`, {
      __cacheSessions: cacheSessions,
      __preferredOutputLocation: { [chunkOutputName]: 'gpu-buffer' },
      chunk_seq: seqLen,
      kv_seq: seqLen,
      batch: 1,
      heads: 1,
    });
    const chunkFeeds = {
      q_chunk: tensors.get(qName),
      kt: tensors.get(ktName),
      v: tensors.get(vName),
    };
    log(stage, `GPU attention full chunk starting: seq=${seqLen} q=${tensorDebugSummary(chunkFeeds.q_chunk)} kt=${tensorDebugSummary(chunkFeeds.kt)} v=${tensorDebugSummary(chunkFeeds.v)}`);
    const attnStart = performance.now();
    chunkOutputs = await profiledRun(chunkSession, chunkFeeds, null, `${stage}:attn`, 'full-chunk');
    const attnTensor = chunkOutputs[chunkOutputName] || firstOutput(chunkOutputs, chunkOutputName);
    log(stage, `GPU attention full chunk returned in ${((performance.now() - attnStart) / 1000).toFixed(3)}s; output=${tensorDebugSummary(attnTensor)}`);
    for (const name of [qName, ktName, vName]) {
      await releaseTensorValue(tensors.get(name));
      tensors.delete(name);
    }
    tensors.set(attnName, attnTensor);
    chunkOutputs = null;
    await releaseSession(chunkSession, `${stage}:attn`);
    chunkSession = null;

    const imageTensor = await runVaeDecoderPostStagesGpuHandoff(stage, postStageKeys, tensors, {
      latentWidth,
      latentHeight,
      width,
      height,
      decoderWidth,
      decoderHeight,
      seqLen,
      headDim,
      chunkSize: seqLen,
      cacheSessions,
    });
    log(stage, `GPU final image tensor: ${tensorDebugSummary(imageTensor)}`);
    const image = await tensorData(imageTensor);
    log(stage, `GPU final image data materialized: ${image.constructor?.name || typeof image} bytes=${formatBytes(image.byteLength || 0)}`);
    return await imageTensorDataToOutput(image, width, height, stage, outputOptions);
  } finally {
    await releaseTensorMap(preRunOutputs, `${stage}:pre`, 'outputs-after-error');
    await releaseTensorMap(preFeeds, `${stage}:pre`, 'feeds');
    await releaseSession(preSession, `${stage}:pre`);
    await releaseTensorMap(chunkOutputs, `${stage}:attn`, 'outputs-after-error');
    await releaseSession(chunkSession, `${stage}:attn`);
    await releaseTensorMapValues(tensors, stage, 'gpu-handoff-tensors');
  }
}

async function runVaeDecoderSplitNchw(z, latentWidth, latentHeight, width, height, cacheSessions = false, outputOptions = {}) {
  const stage = 'vae-decoder-split';
  const preConfig = config.models.vae_decoder_pre;
  const chunkConfig = config.models.vae_decoder_attn_chunk;
  const postStageKeys = (Array.isArray(config.vae_decoder_post_stage_keys) ? config.vae_decoder_post_stage_keys : []).filter((key) => config.models[key]);
  const postConfig = config.models.vae_decoder_post || (postStageKeys.length ? config.models[postStageKeys[0]] : null);
  const decoderHeight = latentHeight * 2;
  const decoderWidth = latentWidth * 2;
  const seqLen = decoderHeight * decoderWidth;
  const headDim = Number(chunkConfig.head_dim || 512);
  const baseChunkSize = Number(chunkConfig.chunk_size || 1024);
  const requestedChunkSize = Math.trunc(Number(outputOptions.vaeAttentionChunkSize || 0));
  const maxAutoChunkSeq = Math.trunc(Number(outputOptions.maxAutoVaeAttentionChunkSeq || 0));
  const chunkSize = Math.min(
    seqLen,
    requestedChunkSize > 0
      ? requestedChunkSize
      : (seqLen <= maxAutoChunkSeq ? seqLen : baseChunkSize),
  );
  const chunkCount = Math.ceil(seqLen / chunkSize);
  if (chunkSize !== baseChunkSize) {
    log(stage, `attention chunk size override: ${baseChunkSize} -> ${chunkSize} for seq=${seqLen}`);
  }

  const residualName = postConfig?.residual_input || postConfig?.inputs?.[0] || '/decoder/block_1/Add_output_0';
  const attnName = postConfig?.attn_input || postConfig?.inputs?.[1] || '/decoder/attn_1/MatMul_1_output_0';
  const preOutputs = preConfig.outputs || [];
  const qName = preOutputs.find((name) => String(name).includes('/Mul_6_output_0')) || '/decoder/attn_1/Mul_6_output_0';
  const ktName = preOutputs.find((name) => String(name).includes('/Mul_7_output_0')) || '/decoder/attn_1/Mul_7_output_0';
  const vName = preOutputs.find((name) => String(name).includes('/Reshape_2_output_0')) || '/decoder/attn_1/Reshape_2_output_0';
  const chunkOutputName = chunkConfig.outputs?.[0] || 'attn_chunk';
  const maxGpuHandoffSeq = Number(outputOptions.maxGpuHandoffSeq || 4096);
  const canTryGpuHandoff = outputOptions.gpuHandoff === true &&
    runtimeOptions.executionProvider === 'webgpu' &&
    postStageKeys.length > 0 &&
    seqLen <= maxGpuHandoffSeq;
  if (canTryGpuHandoff) {
    try {
      return await runVaeDecoderSplitNchwGpuHandoff(z, latentWidth, latentHeight, width, height, cacheSessions, outputOptions);
    } catch (err) {
      log(stage, `GPU VAE handoff failed; falling back to CPU-staged split VAE: ${errorDetail(err)}`);
    }
  }

  let preSession = null;
  let preFeeds = null;
  let preRunOutputs = null;
  let residual = null;
  let q = null;
  let kt = null;
  let v = null;
  try {
    log(stage, `pre-attention run: latent=${latentWidth}x${latentHeight} decoder_mid=${decoderWidth}x${decoderHeight} seq=${seqLen}`);
    preSession = await createSession(preConfig, `${stage}:pre`, {
      __cacheSessions: cacheSessions,
      latent_height: latentHeight,
      latent_width: latentWidth,
      height,
      width,
    });
    preFeeds = { z: tensor('float16', z, [1, config.latent_channels, latentHeight, latentWidth]) };
    preRunOutputs = await profiledRun(preSession, preFeeds, null, `${stage}:pre`, 'pre');
    residual = asFloat16Array(await tensorData(preRunOutputs[residualName]), residualName).slice();
    q = asFloat16Array(await tensorData(preRunOutputs[qName]), qName).slice();
    kt = asFloat16Array(await tensorData(preRunOutputs[ktName]), ktName).slice();
    v = asFloat16Array(await tensorData(preRunOutputs[vName]), vName).slice();
    log(stage, `pre outputs materialized: residual=${formatBytes(residual.byteLength)} q=${formatBytes(q.byteLength)} kt=${formatBytes(kt.byteLength)} v=${formatBytes(v.byteLength)}`);
  } finally {
    await releaseTensorMap(preRunOutputs, `${stage}:pre`, 'outputs');
    await releaseTensorMap(preFeeds, `${stage}:pre`, 'feeds');
    await releaseSession(preSession, `${stage}:pre`);
  }

  let attn = new Uint16Array(seqLen * headDim);
  let chunkSession = null;
  try {
    chunkSession = await createSession(chunkConfig, `${stage}:attn`, {
      __cacheSessions: cacheSessions,
      chunk_seq: chunkSize,
      kv_seq: seqLen,
      batch: 1,
      heads: 1,
    });
    for (let start = 0, chunkIndex = 0; start < seqLen; start += chunkSize, chunkIndex++) {
      if (abortRequested) throw new Error('ABORTED_BY_CLIENT');
      let chunkFeeds = null;
      let chunkOutputs = null;
      const validRows = Math.min(chunkSize, seqLen - start);
      const end = start + validRows;
      try {
        let qChunk = q.slice(start * headDim, end * headDim);
        if (validRows < chunkSize) {
          const padded = new Uint16Array(chunkSize * headDim);
          padded.set(qChunk);
          qChunk = padded;
        }
        chunkFeeds = {
          q_chunk: tensor('float16', qChunk, [1, 1, chunkSize, headDim]),
          kt: tensor('float16', kt, [1, 1, headDim, seqLen]),
          v: tensor('float16', v, [1, 1, seqLen, headDim]),
        };
        log(stage, `attention chunk ${chunkIndex + 1}/${chunkCount}: q=${start}:${end}${validRows < chunkSize ? ` padded=${chunkSize - validRows}` : ''}`);
        const t0 = performance.now();
        chunkOutputs = await profiledRun(chunkSession, chunkFeeds, null, `${stage}:attn`, `chunk-${chunkIndex + 1}`);
        const chunk = asFloat16Array(await tensorData(chunkOutputs[chunkOutputName]), chunkOutputName);
        attn.set(validRows < chunkSize ? chunk.slice(0, validRows * headDim) : chunk, start * headDim);
        log(stage, `attention chunk ${chunkIndex + 1} returned in ${((performance.now() - t0) / 1000).toFixed(3)}s; output=${formatBytes(chunk.byteLength)}`);
      } finally {
        await releaseTensorMap(chunkOutputs, `${stage}:attn`, `chunk-${chunkIndex + 1}-outputs`);
        await releaseTensorMap(chunkFeeds, `${stage}:attn`, `chunk-${chunkIndex + 1}-feeds`);
        await yieldToRuntime();
      }
    }
  } finally {
    await releaseSession(chunkSession, `${stage}:attn`);
    q = null;
    kt = null;
    v = null;
  }

  if (postStageKeys.length) {
    const image = await runVaeDecoderPostStages(stage, postStageKeys, residualName, residual, attnName, attn, {
      latentWidth,
      latentHeight,
      width,
      height,
      decoderWidth,
      decoderHeight,
      seqLen,
      headDim,
      chunkSize,
      cacheSessions,
    });
    residual = null;
    attn = null;
    return await imageTensorDataToOutput(image, width, height, stage, outputOptions);
  } else {
    let postSession = null;
    let postFeeds = null;
    let postOutputs = null;
    try {
      postSession = await createSession(postConfig, `${stage}:post`, {
        __cacheSessions: cacheSessions,
        latent_height: latentHeight,
        latent_width: latentWidth,
        height,
        width,
        kv_seq: seqLen,
        chunk_seq: chunkSize,
      });
      postFeeds = {
        [residualName]: tensor('float16', residual, [1, headDim, decoderHeight, decoderWidth]),
        [attnName]: tensor('float16', attn, [1, 1, seqLen, headDim]),
      };
      residual = null;
      log(stage, `post-attention run starting: attn=${formatBytes(attn.byteLength)}`);
      postOutputs = await profiledRun(postSession, postFeeds, null, `${stage}:post`, 'post');
      const imageTensor = firstOutput(postOutputs, 'image');
      log(stage, `image tensor: ${tensorDebugSummary(imageTensor)}`);
      const image = await tensorData(imageTensor);
      log(stage, `image tensor data materialized: ${image.constructor?.name || typeof image} bytes=${formatBytes(image.byteLength || 0)}`);
      return await imageTensorDataToOutput(image, width, height, stage, outputOptions);
    } finally {
      await releaseTensorMap(postOutputs, `${stage}:post`, 'outputs');
      await releaseTensorMap(postFeeds, `${stage}:post`, 'feeds');
      await releaseSession(postSession, `${stage}:post`);
    }
  }
}

function makeVaePrepareShape(params = {}) {
  const outputWidth = Number(params.width || config.default_width);
  const outputHeight = Number(params.height || config.default_height);
  if (outputWidth % config.latent_downsample || outputHeight % config.latent_downsample) {
    throw new Error(`width and height must be divisible by ${config.latent_downsample}`);
  }
  const renderPlan = makePreviewRenderPlan(
    outputWidth,
    outputHeight,
    params.previewRenderMaxSize,
    previewRenderEnabledForParams(params),
  );
  const width = renderPlan.renderWidth;
  const height = renderPlan.renderHeight;
  const requestedMax = Math.max(0, Math.trunc(Number(params.previewDecodeMaxSize || 0)));
  let decodeWidth = width;
  let decodeHeight = height;
  let previewDecode = null;
  if (requestedMax && Math.max(width, height) > requestedMax) {
    const scale = requestedMax / Math.max(width, height);
    decodeWidth = Math.max(config.latent_downsample, Math.floor((width * scale) / config.latent_downsample) * config.latent_downsample);
    decodeHeight = Math.max(config.latent_downsample, Math.floor((height * scale) / config.latent_downsample) * config.latent_downsample);
    previewDecode = {
      sourceWidth: width,
      sourceHeight: height,
      decodeWidth,
      decodeHeight,
      maxSize: requestedMax,
    };
  }
  return {
    outputWidth,
    outputHeight,
    renderWidth: width,
    renderHeight: height,
    decodeWidth,
    decodeHeight,
    latentWidth: decodeWidth / config.latent_downsample,
    latentHeight: decodeHeight / config.latent_downsample,
    previewRender: renderPlan.previewRender,
    previewDecode,
  };
}

function vaeDecoderChunkSizeForShape(latentWidth, latentHeight, outputOptions = {}) {
  const chunkConfig = config.models.vae_decoder_attn_chunk;
  if (!chunkConfig) return 0;
  const decoderHeight = latentHeight * 2;
  const decoderWidth = latentWidth * 2;
  const seqLen = decoderHeight * decoderWidth;
  const baseChunkSize = Number(chunkConfig.chunk_size || 1024);
  const requestedChunkSize = Math.trunc(Number(outputOptions.vaeAttentionChunkSize || 0));
  const maxAutoChunkSeq = Math.trunc(Number(outputOptions.maxAutoVaeAttentionChunkSeq || 0));
  return Math.min(
    seqLen,
    requestedChunkSize > 0
      ? requestedChunkSize
      : (seqLen <= maxAutoChunkSeq ? seqLen : baseChunkSize),
  );
}

async function prepareVaeDecoderSessionsForShape(latentWidth, latentHeight, width, height, outputOptions = {}) {
  const stage = 'vae-decoder-prepare';
  const postStageKeys = (Array.isArray(config.vae_decoder_post_stage_keys) ? config.vae_decoder_post_stage_keys : []).filter((key) => config.models[key]);
  if (config.models.vae_decoder_pre && config.models.vae_decoder_attn_chunk && (config.models.vae_decoder_post || postStageKeys.length)) {
    const preConfig = config.models.vae_decoder_pre;
    const chunkConfig = config.models.vae_decoder_attn_chunk;
    const postConfig = config.models.vae_decoder_post || (postStageKeys.length ? config.models[postStageKeys[0]] : null);
    const decoderHeight = latentHeight * 2;
    const decoderWidth = latentWidth * 2;
    const seqLen = decoderHeight * decoderWidth;
    const headDim = Number(chunkConfig.head_dim || 512);
    const chunkSize = vaeDecoderChunkSizeForShape(latentWidth, latentHeight, outputOptions);
    const created = [];
    const createCached = async (modelConfig, stageName, freeDims) => {
      const session = await createSession(modelConfig, stageName, {
        __cacheSessions: true,
        ...freeDims,
      });
      created.push(stageName);
      await releaseSession(session, stageName);
    };

    await createCached(preConfig, `${stage}:pre`, {
      latent_height: latentHeight,
      latent_width: latentWidth,
      height,
      width,
    });
    await createCached(chunkConfig, `${stage}:attn`, {
      chunk_seq: chunkSize,
      kv_seq: seqLen,
      batch: 1,
      heads: 1,
    });
    if (postStageKeys.length) {
      for (let index = 0; index < postStageKeys.length; index++) {
        const key = postStageKeys[index];
        await createCached(config.models[key], `${stage}:post:${index + 1}/${postStageKeys.length}`, {
          latent_height: latentHeight,
          latent_width: latentWidth,
          height,
          width,
          kv_seq: seqLen,
          chunk_seq: chunkSize,
        });
      }
    } else if (postConfig) {
      await createCached(postConfig, `${stage}:post`, {
        latent_height: latentHeight,
        latent_width: latentWidth,
        height,
        width,
        kv_seq: seqLen,
        chunk_seq: chunkSize,
      });
    }
    return {
      split: true,
      sessions: created.length,
      stages: created,
      seqLen,
      chunkSize,
      chunkCount: Math.ceil(seqLen / chunkSize),
      headDim,
    };
  }

  if (!config.models.vae_decoder) {
    throw new Error('VAE decoder is not configured: missing both split decoder stages and unified vae_decoder model');
  }
  const session = await createSession(config.models.vae_decoder, stage, {
    __cacheSessions: true,
    latent_height: latentHeight,
    latent_width: latentWidth,
    height,
    width,
  });
  await releaseSession(session, stage);
  return {
    split: false,
    sessions: 1,
    stages: [stage],
    seqLen: latentWidth * latentHeight * 4,
    chunkSize: 0,
    chunkCount: 0,
  };
}

async function prepareVaeSessions(params = {}) {
  if (!config || !modelBaseUrl) throw new Error('Engine is not initialized');
  const stage = 'vae-prepare';
  const start = performance.now();
  const shape = makeVaePrepareShape(params);
  const outputOptions = {
    vaeAttentionChunkSize: params.vaeAttentionChunkSize,
    maxAutoVaeAttentionChunkSeq: params.maxAutoVaeAttentionChunkSeq,
  };
  const lutStart = performance.now();
  getHalfToImageByteLut();
  const imageByteLutMs = performance.now() - lutStart;
  const decoder = await prepareVaeDecoderSessionsForShape(
    shape.latentWidth,
    shape.latentHeight,
    shape.decodeWidth,
    shape.decodeHeight,
    outputOptions,
  );
  let encoder = null;
  if (params.includeEncoder === true && config.models.vae_encoder) {
    const encoderSession = await createSession(config.models.vae_encoder, `${stage}:encoder`, {
      __cacheSessions: true,
      height: shape.renderHeight,
      width: shape.renderWidth,
      latent_height: shape.renderHeight / config.latent_downsample,
      latent_width: shape.renderWidth / config.latent_downsample,
    });
    await releaseSession(encoderSession, `${stage}:encoder`);
    encoder = {
      sessions: 1,
      width: shape.renderWidth,
      height: shape.renderHeight,
      latentWidth: shape.renderWidth / config.latent_downsample,
      latentHeight: shape.renderHeight / config.latent_downsample,
    };
  }
  let dispatch = null;
  if (params.dispatchWarmup === true) {
    const dispatchStart = performance.now();
    const latent = new Uint16Array(shape.latentWidth * shape.latentHeight * config.latent_channels);
    const output = await runVaeDecoder(
      { latent, latentWidth: shape.latentWidth, latentHeight: shape.latentHeight },
      shape.decodeWidth,
      shape.decodeHeight,
      true,
      {
        ...outputOptions,
        warmDispatchOnly: true,
        returnImageBlob: false,
        returnImageData: false,
      },
    );
    dispatch = {
      elapsed_ms: performance.now() - dispatchStart,
      imageBytes: output.imageBytes || 0,
      pngBytes: output.pngBytes || 0,
    };
  }
  const elapsedMs = performance.now() - start;
  log(stage, `prepared VAE sessions in ${(elapsedMs / 1000).toFixed(3)}s; decoder=${JSON.stringify(decoder)} encoder=${JSON.stringify(encoder)} dispatch=${JSON.stringify(dispatch)}`);
  return {
    verdict: 'vae-sessions-prepared',
    elapsed_ms: elapsedMs,
    shape,
    decoder,
    encoder,
    dispatch,
    imageByteLutMs,
  };
}

async function prepareVaeEncoderLatent(params = {}) {
  if (!config || !modelBaseUrl) throw new Error('Engine is not initialized');
  const width = Number(params.width || config.default_width);
  const height = Number(params.height || config.default_height);
  if (width % config.latent_downsample || height % config.latent_downsample) {
    throw new Error(`width and height must be divisible by ${config.latent_downsample}`);
  }
  if (params.initImage === undefined) {
    throw new Error('prepareVaeEncoderLatent requires initImage');
  }
  const start = performance.now();
  const encoded = await runVaeEncoder(
    {
      ...params,
      cacheVaeEncoder: params.cacheVaeEncoder !== false,
    },
    width,
    height,
    true,
  );
  const elapsedMs = performance.now() - start;
  return {
    verdict: 'vae-encoder-latent-prepared',
    elapsed_ms: elapsedMs,
    source: lastVaeEncoderDetails?.source || 'unknown',
    cacheKey: lastVaeEncoderDetails?.cacheKey || '',
    latentWidth: encoded.latentWidth,
    latentHeight: encoded.latentHeight,
    values: encoded.latent.length,
  };
}

async function generateImage(params) {
  if (!config || !modelBaseUrl) throw new Error('Engine is not initialized');
  abortRequested = false;
  const outputWidth = params.width || config.default_width;
  const outputHeight = params.height || config.default_height;
  if (outputWidth % config.latent_downsample || outputHeight % config.latent_downsample) {
    throw new Error(`width and height must be divisible by ${config.latent_downsample}`);
  }
  const renderPlan = makePreviewRenderPlan(outputWidth, outputHeight, params.previewRenderMaxSize, previewRenderEnabledForParams(params));
  const width = renderPlan.renderWidth;
  const height = renderPlan.renderHeight;
  try {
    const totalStart = performance.now();
    const timings = {};
    let stageStart = performance.now();
    const customStatus = await customKernelStatus();
    timings.customKernelStatusSeconds = Number(((performance.now() - stageStart) / 1000).toFixed(3));
    logMemory('generate', 'start');
    const img2imgImageSeqLen = params.initImage !== undefined
      ? (width / config.latent_downsample) * (height / config.latent_downsample)
      : 0;
    const precomputedImg2imgSchedule = params.initImage !== undefined
      ? img2imgSchedule(params.numSteps || config.num_steps, img2imgImageSeqLen, params.strength, params.strengthCurve, params.img2imgStepPolicy)
      : null;
    stageStart = performance.now();
    let ctx = null;
    if (!precomputedImg2imgSchedule || precomputedImg2imgSchedule.stepCount > 0) {
      ctx = await runTextEncoder(params);
      timings.textEncoderSeconds = Number(((performance.now() - stageStart) / 1000).toFixed(3));
      timings.textEncoderCacheSource = lastTextEncoderDetails?.source || 'unknown';
      timings.textEncoderCacheSeconds = Number(((lastTextEncoderDetails?.persistentMs || 0) / 1000).toFixed(3));
      logMemory('generate', 'after text encoder');
    } else {
      timings.textEncoderSeconds = 0;
      timings.textEncoderCacheSource = 'skipped-source-only';
      timings.textEncoderCacheSeconds = 0;
      log('generate', 'skipping text encoder for img2img strength=0 source-only decode');
    }
    let transformerParams = params;
    let img2imgInfo = null;
    let encodedLatentResult = null;
    if (params.initImage !== undefined) {
      stageStart = performance.now();
      const encoded = await runVaeEncoder(params, width, height, params.cacheSessions);
      timings.vaeEncoderSeconds = Number(((performance.now() - stageStart) / 1000).toFixed(3));
      timings.vaeEncoderCacheSource = lastVaeEncoderDetails?.source || 'unknown';
      const imageSeqLen = encoded.latentWidth * encoded.latentHeight;
      const schedule = precomputedImg2imgSchedule || img2imgSchedule(params.numSteps || config.num_steps, imageSeqLen, params.strength, params.strengthCurve, params.img2imgStepPolicy);
      img2imgInfo = {
        strength: schedule.strength,
        effectiveStrength: Number(schedule.effectiveStrength.toFixed(6)),
        curve: schedule.curve,
        startT: Number(schedule.startT.toFixed(6)),
        denoiseSteps: schedule.stepCount,
        requestedSteps: schedule.requestedSteps,
        stepPolicy: schedule.stepPolicy,
      };
      if (schedule.stepCount <= 0) {
        transformerParams = params;
        encodedLatentResult = encoded;
      } else {
        transformerParams = {
          ...params,
          customTimesteps: schedule.timesteps,
          initialLatentF32: blendLatentWithNoise(encoded.latent, imageSeqLen, config.latent_channels, params.seed ?? 42, schedule.startT),
        };
      }
      log('img2img', `encoded init image; strength=${img2imgInfo.strength} effective=${img2imgInfo.effectiveStrength} curve=${img2imgInfo.curve} startT=${img2imgInfo.startT} denoiseSteps=${img2imgInfo.denoiseSteps}`);
    }
    stageStart = performance.now();
    let latentResult;
    if (encodedLatentResult) {
      latentResult = encodedLatentResult;
      timings.transformerSeconds = 0;
    } else {
      latentResult = await runTransformer(ctx, transformerParams, width, height);
      timings.transformerSeconds = Number(((performance.now() - stageStart) / 1000).toFixed(3));
    }
    const transformerDetails = latentResult.transformerDetails || null;
    ctx = null;
    if (globalThis.gc) globalThis.gc();
    logMemory('generate', 'after transformer + ctx drop');
    stageStart = performance.now();
    const decodePlan = makePreviewDecodePlan(latentResult, width, height, params.previewDecodeMaxSize);
    const outputOptions = {
      returnImageBlob: Boolean(params.returnImageBlob || params.returnImageObjectUrl || params.resultUrl),
      returnImageData: Boolean(params.returnImageData),
      gpuHandoff: params.gpuVaeHandoff === true,
      maxGpuHandoffSeq: params.maxGpuHandoffSeq,
      vaeAttentionChunkSize: params.vaeAttentionChunkSize,
      maxAutoVaeAttentionChunkSeq: params.maxAutoVaeAttentionChunkSeq,
    };
    const imageOutput = await runVaeDecoder(decodePlan.latentResult, decodePlan.decodeWidth, decodePlan.decodeHeight, params.cacheSessions, outputOptions);
    timings.vaeSeconds = Number(((performance.now() - stageStart) / 1000).toFixed(3));
    if (imageOutput.timings) {
      timings.imageTensorToRgbaSeconds = Number(((imageOutput.timings.imageTensorToRgbaMs || 0) / 1000).toFixed(3));
      timings.imageDataSeconds = Number(((imageOutput.timings.imageDataMs || 0) / 1000).toFixed(3));
      timings.pngEncodeSeconds = Number(((imageOutput.timings.pngEncodeMs || 0) / 1000).toFixed(3));
    }
    latentResult = null;
    if (globalThis.gc) globalThis.gc();
    logMemory('generate', 'after VAE + latent drop');
    if (params.resultUrl) await fetch(params.resultUrl, { method: 'POST', body: imageOutput.imageBlob });
    timings.totalBrowserSeconds = Number(((performance.now() - totalStart) / 1000).toFixed(3));
    const response = {
      width: outputWidth,
      height: outputHeight,
      renderWidth: width,
      renderHeight: height,
      seed: params.seed ?? 42,
      numSteps: params.numSteps || config.num_steps,
      mode: params.initImage !== undefined ? 'image-to-image' : 'text-to-image',
      img2img: img2imgInfo,
      pngBytes: imageOutput.pngBytes || 0,
      imageBytes: imageOutput.imageBytes || imageOutput.pngBytes || 0,
      imageDataWidth: decodePlan.decodeWidth,
      imageDataHeight: decodePlan.decodeHeight,
      previewRender: renderPlan.previewRender,
      previewDecode: decodePlan.previewDecode,
      staged: params.initImage !== undefined
        ? (img2imgInfo?.denoiseSteps > 0 ? ['text_encoder', 'vae_encoder', 'transformer', 'vae_decoder'] : ['vae_encoder', 'vae_decoder'])
        : ['text_encoder', 'transformer', 'vae_decoder'],
      transformerBackend: params.transformerBackend || runtimeOptions.customTransformerMode || 'onnx-webgpu',
      customKernels: customStatus,
      timings,
      transformerDetails,
    };
    if (params.returnImageData) response.imageData = imageOutput.imageData;
    if (params.returnImageBlob) response.imageBlob = imageOutput.imageBlob;
    if (params.returnImageObjectUrl) response.imageObjectUrl = URL.createObjectURL(imageOutput.imageBlob);
    return response;
  } catch (err) {
    log('error', errorDetail(err));
    throw err;
  }
}

async function encodeText(params) {
  if (!config || !modelBaseUrl) throw new Error('Engine is not initialized');
  const ctx = await runTextEncoder(params);
  const ctxF32 = f16ToF32Array(ctx);
  const stats = logArrayStats('text-encoder-contract', 'context', ctxF32);
  if (params.resultUrl) {
    const bytes = ctxF32.byteOffset === 0 && ctxF32.byteLength === ctxF32.buffer.byteLength ? ctxF32.buffer : ctxF32.slice().buffer;
    await fetch(params.resultUrl, { method: 'POST', body: bytes });
  }
  return {
    shape: [1, config.text_seq_len, config.context_dim],
    dtype: 'float32',
    stats,
  };
}

async function decodeLatent(params) {
  if (!config || !modelBaseUrl) throw new Error('Engine is not initialized');
  const width = params.width || config.default_width;
  const height = params.height || config.default_height;
  const latentWidth = width / config.latent_downsample;
  const latentHeight = height / config.latent_downsample;
  if (!Number.isInteger(latentWidth) || !Number.isInteger(latentHeight)) {
    throw new Error(`width and height must be divisible by ${config.latent_downsample}`);
  }
  const z = await loadFloat16Binary(params.latentUrl, config.latent_channels * latentHeight * latentWidth, 'latent');
  const imageOutput = await runVaeDecoderNchw(z, latentWidth, latentHeight, width, height, 'vae-decoder', config.models.vae_decoder, false, {
    returnImageBlob: true,
    returnImageData: false,
  });
  if (params.resultUrl) await fetch(params.resultUrl, { method: 'POST', body: imageOutput.imageBlob });
  return { width, height, pngBytes: imageOutput.pngBytes, imageBytes: imageOutput.imageBytes, staged: ['vae_decoder'] };
}

async function transformerContract(params) {
  if (!config || !modelBaseUrl) throw new Error('Engine is not initialized');
  const stage = 'transformer-contract';
  const modelConfig = config.models.transformer;
  const latentHeight = Number(params.latentHeight || params.latent_height || 2);
  const latentWidth = Number(params.latentWidth || params.latent_width || 2);
  const imageSeqLen = latentHeight * latentWidth;
  const channels = config.latent_channels;
  const x = await loadFloat32Binary(params.xUrl, imageSeqLen * channels, 'contract latent');
  const ctx = await loadFloat32Binary(params.ctxUrl, config.text_seq_len * config.context_dim, 'contract context');
  const ctxIds = makeTextIds(config.text_seq_len);
  const xIds = makeImageIds(latentHeight, latentWidth);
  const timestep = Number(params.timestep ?? getSchedule(params.numSteps || config.num_steps, imageSeqLen)[0]);
  let session = null;
  try {
    session = await createSession(modelConfig, stage, {
      image_seq: imageSeqLen,
      latent_height: latentHeight,
      latent_width: latentWidth,
      height: latentHeight * config.latent_downsample,
      width: latentWidth * config.latent_downsample,
    });
    const useFloat32 = transformerUsesFloat32(modelConfig);
    const outputs = await profiledRun(session, {
      x: useFloat32 ? tensor('float32', x, [1, imageSeqLen, channels]) : tensor('float16', f32ToF16Array(x), [1, imageSeqLen, channels]),
      x_ids: tensor('float32', xIds, [1, imageSeqLen, 4]),
      timesteps: useFloat32 ? tensor('float32', new Float32Array([timestep]), [1]) : tensor('float16', f32ToF16Array(new Float32Array([timestep])), [1]),
      ctx: useFloat32 ? tensor('float32', ctx, [1, config.text_seq_len, config.context_dim]) : tensor('float16', f32ToF16Array(ctx), [1, config.text_seq_len, config.context_dim]),
      ctx_ids: tensor('float32', ctxIds, [1, config.text_seq_len, 4]),
    }, null, stage, 'contract');
    const pred = asFloat32Array(await tensorData(firstOutput(outputs, 'pred')), 'transformer contract output');
    const stats = logArrayStats(stage, 'pred', pred);
    if (params.resultUrl) {
      const bytes = pred.byteOffset === 0 && pred.byteLength === pred.buffer.byteLength ? pred.buffer : pred.slice().buffer;
      await fetch(params.resultUrl, { method: 'POST', body: bytes });
    }
    return {
      shape: [1, imageSeqLen, channels],
      dtype: 'float32',
      timestep,
      stats,
    };
  } finally {
    await releaseSession(session, stage);
  }
}

function deterministicContractContextF32(seqLen, dim) {
  const values = new Float32Array(seqLen * dim);
  for (let row = 0; row < seqLen; row++) {
    for (let col = 0; col < dim; col++) {
      const code = ((row * 37 + col * 17 + 11) % 257) - 128;
      values[row * dim + col] = code / 256;
    }
  }
  return values;
}

function compareFloatArrays(actual, expected, maxItems = 16) {
  let finite = 0;
  let maxAbs = 0;
  let sumAbs = 0;
  let sumSq = 0;
  let maxRel = 0;
  const count = Math.min(actual.length, expected.length);
  for (let i = 0; i < count; i++) {
    const a = actual[i];
    const e = expected[i];
    if (Number.isFinite(a) && Number.isFinite(e)) finite += 1;
    const diff = Math.abs(a - e);
    maxAbs = Math.max(maxAbs, diff);
    sumAbs += diff;
    sumSq += diff * diff;
    maxRel = Math.max(maxRel, diff / Math.max(1e-6, Math.abs(e)));
  }
  return {
    count,
    finite,
    max_abs: maxAbs,
    mean_abs: count ? sumAbs / count : 0,
    rms: count ? Math.sqrt(sumSq / count) : 0,
    max_rel: maxRel,
    actual_sample: Array.from(actual.slice(0, Math.min(maxItems, actual.length))),
    expected_sample: Array.from(expected.slice(0, Math.min(maxItems, expected.length))),
  };
}

async function customTransformerContract(params = {}) {
  if (!config || !modelBaseUrl) throw new Error('Engine is not initialized');
  const stage = 'custom-transformer-contract';
  const latentHeight = Number(params.latentHeight || params.latent_height || 2);
  const latentWidth = Number(params.latentWidth || params.latent_width || 2);
  const imageSeqLen = latentHeight * latentWidth;
  const channels = config.latent_channels;
  const x = makeNoiseF32(imageSeqLen, channels, Number(params.seed ?? 123));
  const ctxF32 = deterministicContractContextF32(config.text_seq_len, config.context_dim);
  const ctxF16 = f32ToF16Array(ctxF32);
  const timestep = Number(params.timestep ?? getSchedule(params.numSteps || config.num_steps, imageSeqLen)[0]);
  const ctxIds = makeTextIds(config.text_seq_len);
  const xIds = makeImageIds(latentHeight, latentWidth);
  const modelConfig = config.models.transformer;
  if (params.debugStopAfter) {
    const custom = await runTransformerCustomLowbitWebGpu(ctxF16, {
      seed: Number(params.seed ?? 123),
      numSteps: params.numSteps || config.num_steps,
      customTimesteps: [timestep, 0],
      customAttentionTileKeys: params.customAttentionTileKeys,
      customAttentionQueryRows: params.customAttentionQueryRows,
      customSingleQ4TileCols: params.customSingleQ4TileCols,
      customSingleQ4Dp4aTileCols: params.customSingleQ4Dp4aTileCols,
      customSingleLinear1Output: params.customSingleLinear1Output || params.singleLinear1Output,
      customSingleLinear1Q4Kernel: params.customSingleLinear1Q4Kernel || params.singleLinear1Q4Kernel,
      customSingleLinear1Q4ActivationScale: params.customSingleLinear1Q4ActivationScale || params.singleLinear1Q4ActivationScale,
      customSingleLinear1QkvBackend: params.customSingleLinear1QkvBackend || params.singleLinear1QkvBackend,
      customSingleLinear1MlpBackend: params.customSingleLinear1MlpBackend || params.singleLinear1MlpBackend,
      customSingleLinear2Backend: params.customSingleLinear2Backend || params.singleLinear2Backend,
      debugStopAfter: params.debugStopAfter,
      debugReadbackCount: params.debugReadbackCount,
      debugImgReadbackCount: params.debugImgReadbackCount,
      debugTxtReadbackCount: params.debugTxtReadbackCount,
    }, latentWidth * config.latent_downsample, latentHeight * config.latent_downsample);
    return {
      shape: [1, imageSeqLen, channels],
      timestep,
      latentHeight,
      latentWidth,
      debug: custom.debug || null,
    };
  }
  let session = null;
  try {
    session = await createSession(modelConfig, stage, {
      image_seq: imageSeqLen,
      latent_height: latentHeight,
      latent_width: latentWidth,
      height: latentHeight * config.latent_downsample,
      width: latentWidth * config.latent_downsample,
    });
    const useFloat32 = transformerUsesFloat32(modelConfig);
    const onnxOutputs = await profiledRun(session, {
      x: useFloat32 ? tensor('float32', x, [1, imageSeqLen, channels]) : tensor('float16', f32ToF16Array(x), [1, imageSeqLen, channels]),
      x_ids: tensor('float32', xIds, [1, imageSeqLen, 4]),
      timesteps: useFloat32 ? tensor('float32', new Float32Array([timestep]), [1]) : tensor('float16', f32ToF16Array(new Float32Array([timestep])), [1]),
      ctx: useFloat32 ? tensor('float32', ctxF32, [1, config.text_seq_len, config.context_dim]) : tensor('float16', ctxF16, [1, config.text_seq_len, config.context_dim]),
      ctx_ids: tensor('float32', ctxIds, [1, config.text_seq_len, 4]),
    }, null, stage, 'onnx-reference');
    const onnxPred = asFloat32Array(await tensorData(firstOutput(onnxOutputs, 'pred')), 'onnx contract pred');
    const custom = await runTransformerCustomLowbitWebGpu(ctxF16, {
      seed: Number(params.seed ?? 123),
      numSteps: params.numSteps || config.num_steps,
      customTimesteps: [timestep, 0],
      customAttentionTileKeys: params.customAttentionTileKeys,
      customAttentionQueryRows: params.customAttentionQueryRows,
      customSingleQ4TileCols: params.customSingleQ4TileCols,
      customSingleQ4Dp4aTileCols: params.customSingleQ4Dp4aTileCols,
      customSingleLinear1Output: params.customSingleLinear1Output || params.singleLinear1Output,
      customSingleLinear1Q4Kernel: params.customSingleLinear1Q4Kernel || params.singleLinear1Q4Kernel,
      customSingleLinear1Q4ActivationScale: params.customSingleLinear1Q4ActivationScale || params.singleLinear1Q4ActivationScale,
      customSingleLinear1QkvBackend: params.customSingleLinear1QkvBackend || params.singleLinear1QkvBackend,
      customSingleLinear1MlpBackend: params.customSingleLinear1MlpBackend || params.singleLinear1MlpBackend,
      customSingleLinear2Backend: params.customSingleLinear2Backend || params.singleLinear2Backend,
      debugStopAfter: params.debugStopAfter,
      debugReadbackCount: params.debugReadbackCount,
      debugImgReadbackCount: params.debugImgReadbackCount,
      debugTxtReadbackCount: params.debugTxtReadbackCount,
    }, latentWidth * config.latent_downsample, latentHeight * config.latent_downsample);
    if (params.debugStopAfter) {
      return {
        shape: [1, imageSeqLen, channels],
        timestep,
        latentHeight,
        latentWidth,
        debug: custom.debug || null,
      };
    }
    const customLatent = f16ToF32Array(custom.latent);
    const customPred = new Float32Array(customLatent.length);
    for (let i = 0; i < customPred.length; i++) {
      customPred[i] = (x[i] - customLatent[i]) / timestep;
    }
    const comparison = compareFloatArrays(customPred, onnxPred, Number(params.sample ?? 16));
    log(stage, `comparison=${JSON.stringify(comparison)}`);
    return {
      shape: [1, imageSeqLen, channels],
      timestep,
      latentHeight,
      latentWidth,
      comparison,
    };
  } finally {
    await releaseSession(session, stage);
  }
}

function abortGeneration() {
  abortRequested = true;
}

globalThis.flux2Engine = { init, generateImage, encodeText, decodeLatent, transformerContract, customTransformerContract, customKernelStatus, prepareCustomTransformerAssets, prepareCustomTransformerStageSetup, prepareCustomTransformerTextProjection, prepareVaeSessions, prepareVaeEncoderLatent, abortGeneration };
