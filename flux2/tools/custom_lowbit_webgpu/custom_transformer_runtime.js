"use strict";

(function () {
  const DEFAULT_BASE_URL = "/runtime/custom_lowbit/full_transformer/";
  const DP4A_FEATURE = "packed_4x8_integer_dot_product";
  const CONVENTIONAL_BUNDLES = [
    {name: "qkv0", path: "transformer_img_qkv0/manifest.json", kind: "linear"},
    {name: "singleLinear1", path: "transformer_single_linear1_0/manifest.json", kind: "linear"},
    {name: "singleLinear2", path: "transformer_single_linear2_0/manifest.json", kind: "linear"},
    {name: "singleBlock0", path: "transformer_single_block0/manifest.json", kind: "block_constants"},
  ];
  const scriptUrl = document.currentScript && document.currentScript.src
    ? document.currentScript.src
    : null;

  function asDirectoryUrl(value) {
    const url = new URL(String(value || DEFAULT_BASE_URL), window.location.href).toString();
    return url.endsWith("/") ? url : `${url}/`;
  }

  function resolveUrl(baseUrl, ref) {
    return new URL(ref, new URL(baseUrl, window.location.href)).toString();
  }

  function cloneJson(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function sleepMs(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function fetchWithRetry(url, options, optional = false) {
    let lastError = null;
    for (let attempt = 0; attempt < 4; attempt += 1) {
      try {
        const response = await fetch(url, options);
        if (response.ok || (optional && response.status === 404)) return response;
        throw new Error(`fetch failed ${response.status}: ${url}`);
      } catch (err) {
        lastError = err;
        if (attempt < 3) await sleepMs(100 * (attempt + 1));
      }
    }
    if (optional) return null;
    throw lastError || new Error(`fetch failed: ${url}`);
  }

  async function fetchJson(url, optional = false) {
    const response = await fetchWithRetry(url, {}, optional);
    if (!response) return null;
    if (!response.ok) {
      if (optional) return null;
      throw new Error(`fetch failed ${response.status}: ${url}`);
    }
    return await response.json();
  }

  async function fetchArrayBufferRuntime(url) {
    const response = await fetchWithRetry(url, {});
    if (!response.ok) {
      throw new Error(`fetch failed ${response.status}: ${url}`);
    }
    return await response.arrayBuffer();
  }

  function isFileRef(value) {
    return typeof value === "string" && /\.(bin|dat|raw)$/i.test(value);
  }

  function isManifestRef(value) {
    return typeof value === "string" && /(^|\/)manifest\.json(\?.*)?$/i.test(value);
  }

  function looksLikeBundleDirectory(keyPath, value) {
    if (typeof value !== "string") return false;
    if (!value || value.startsWith("/model/") || value.includes("\\")) return false;
    if (/\.[a-z0-9]+$/i.test(value) && !value.endsWith("/")) return false;
    const key = keyPath[keyPath.length - 1] || "";
    const parent = keyPath[keyPath.length - 2] || "";
    return (
      /(^|_)(base_?url|bundle|dir|directory|path)$/i.test(key) ||
      /^(bundles|linears|blocks|checkpoints|layers)$/i.test(parent)
    );
  }

  function inferViewConstructor(keyPath, url) {
    const text = `${keyPath.join(".")} ${url}`.toLowerCase();
    if (text.includes("f32")) return Float32Array;
    if (text.includes("f16")) return Uint16Array;
    if (text.includes("u32") || text.includes("zero_point")) return Uint32Array;
    if (text.includes("i8")) return Int8Array;
    if (text.includes("u8") || text.includes("q4")) return Uint8Array;
    return Uint8Array;
  }

  function walkObject(value, visit, keyPath = []) {
    if (!value || typeof value !== "object") return;
    if (Array.isArray(value)) {
      for (let index = 0; index < value.length; index += 1) {
        visit(value[index], keyPath.concat(String(index)));
        walkObject(value[index], visit, keyPath.concat(String(index)));
      }
      return;
    }
    for (const [key, child] of Object.entries(value)) {
      visit(child, keyPath.concat(key));
      walkObject(child, visit, keyPath.concat(key));
    }
  }

  function bundleNameFromKeyPath(keyPath, fallback) {
    const key = keyPath[keyPath.length - 1] || fallback;
    const parent = keyPath[keyPath.length - 2] || "";
    if (/^(bundles|linears|blocks|checkpoints|layers)$/i.test(parent)) {
      return key;
    }
    return keyPath.slice(-2).join(".") || fallback;
  }

  function collectBundleRefs(manifest, baseUrl) {
    const refs = new Map();
    walkObject(manifest, (value, keyPath) => {
      if (isManifestRef(value)) {
        const url = resolveUrl(baseUrl, value);
        refs.set(url, {
          name: bundleNameFromKeyPath(keyPath, value),
          url,
          baseUrl: resolveUrl(url, "."),
          explicit: true,
        });
      } else if (looksLikeBundleDirectory(keyPath, value)) {
        const dirUrl = asDirectoryUrl(resolveUrl(baseUrl, value));
        const url = resolveUrl(dirUrl, "manifest.json");
        refs.set(url, {
          name: bundleNameFromKeyPath(keyPath, value),
          url,
          baseUrl: dirUrl,
          explicit: false,
        });
      }
    });
    if (!(manifest && Array.isArray(manifest.linears))) {
      for (const item of CONVENTIONAL_BUNDLES) {
        const url = resolveUrl(baseUrl, item.path);
        if (!refs.has(url)) {
          refs.set(url, {
            name: item.name,
            kind: item.kind,
            url,
            baseUrl: resolveUrl(url, "."),
            explicit: false,
            conventional: true,
          });
        }
      }
    }
    return Array.from(refs.values());
  }

  function collectBinaryRefs(manifest, baseUrl, label) {
    const refs = [];
    walkObject(manifest, (value, keyPath) => {
      if (!isFileRef(value)) return;
      refs.push({
        key: `${label}:${keyPath.join(".")}`,
        keyPath,
        url: resolveUrl(baseUrl, value),
      });
    });
    return refs;
  }

  function expectedCountForRef(manifest, keyPath) {
    const section = keyPath.length > 1 ? manifest[keyPath[0]] : null;
    const key = keyPath[keyPath.length - 1];
    if (!section || typeof section !== "object") return null;
    if (key === "packed_u32" && Number.isFinite(section.packed_u32_count)) return section.packed_u32_count;
    if (/scale/.test(key) && Number.isFinite(section.scale_count)) return section.scale_count;
    if (/zero/.test(key) && Number.isFinite(section.zero_point_count)) return section.zero_point_count;
    return null;
  }

  async function loadBinaryAssets(manifest, baseUrl, label, warnings) {
    const assets = new Map();
    const refs = collectBinaryRefs(manifest, baseUrl, label);
    await Promise.all(refs.map(async (ref) => {
      const buffer = await fetchArrayBufferRuntime(ref.url);
      const View = inferViewConstructor(ref.keyPath, ref.url);
      const view = buffer.byteLength % View.BYTES_PER_ELEMENT === 0
        ? new View(buffer)
        : new Uint8Array(buffer);
      const expectedCount = expectedCountForRef(manifest, ref.keyPath);
      if (expectedCount !== null && view.length !== expectedCount) {
        warnings.push(
          `${ref.key} expected ${expectedCount} values, loaded ${view.length} from ${ref.url}`,
        );
      }
      assets.set(ref.key, {
        url: ref.url,
        byteLength: buffer.byteLength,
        valueType: view.constructor.name,
        buffer,
        view,
      });
    }));
    return assets;
  }

  function identifyBundleKind(manifest) {
    if (manifest && manifest.i8_dp4a && manifest.shape) return "linear";
    if (manifest && manifest.q4 && manifest.shape) return "linear";
    if (manifest && Array.isArray(manifest.linears)) return "full_transformer";
    if (manifest && manifest.query_norm_scale_f16 && manifest.key_norm_scale_f16) return "block_constants";
    return "unknown";
  }

  function summarizeManifest(manifest) {
    if (!manifest || typeof manifest !== "object") return null;
    return {
      format_version: manifest.format_version ?? null,
      name: manifest.name || null,
      source_node: manifest.source_node || null,
      shape: manifest.shape || null,
      q4: manifest.q4 ? {
        packed_u32_count: manifest.q4.packed_u32_count ?? null,
        scale_count: manifest.q4.scale_count ?? null,
        zero_point_count: manifest.q4.zero_point_count ?? null,
      } : null,
      i8_dp4a: manifest.i8_dp4a ? {
        k_words: manifest.i8_dp4a.k_words ?? null,
        packed_u32_count: manifest.i8_dp4a.packed_u32_count ?? null,
        scale_count: manifest.i8_dp4a.scale_count ?? null,
      } : null,
      counts: manifest.counts || null,
    };
  }

  async function loadLinearHarness() {
    if (typeof window.runCustomLowbitLinearBench === "function" &&
        typeof window.runCustomLowbitLinearManifestBench === "function" &&
        typeof window.runCustomSingleStreamMlpBench === "function" &&
        typeof window.runCustomSingleStreamBlocksLoopBench === "function" &&
        typeof window.runCustomDoubleStreamBlockBench === "function" &&
        typeof window.runCustomDoubleStreamBlocksLoopBench === "function" &&
        typeof window.runCustomTimestepModulationBench === "function" &&
        typeof window.runCustomSingleBlockQ4Bench === "function" &&
        typeof window.runCustomFluxTransformerDenoise === "function") {
      return {loaded: true, loadedByRuntime: false};
    }
    if (!scriptUrl) {
      return {loaded: false, error: "custom_lowbit_linear.js is not loaded and runtime script URL is unknown"};
    }
    const harnessUrl = resolveUrl(scriptUrl, "custom_lowbit_linear.js");
    await new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = harnessUrl;
      script.async = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`failed to load ${harnessUrl}`));
      document.head.appendChild(script);
    });
    return {
      loaded: typeof window.runCustomLowbitLinearBench === "function" &&
        typeof window.runCustomLowbitLinearManifestBench === "function" &&
        typeof window.runCustomSingleStreamMlpBench === "function" &&
        typeof window.runCustomSingleStreamBlocksLoopBench === "function" &&
        typeof window.runCustomDoubleStreamBlockBench === "function" &&
        typeof window.runCustomDoubleStreamBlocksLoopBench === "function" &&
        typeof window.runCustomTimestepModulationBench === "function" &&
        typeof window.runCustomSingleBlockQ4Bench === "function" &&
        typeof window.runCustomFluxTransformerDenoise === "function",
      loadedByRuntime: true,
      url: harnessUrl,
    };
  }

  async function inspectWebGpu() {
    const result = {
      navigatorGpu: Boolean(navigator.gpu),
      adapterAvailable: false,
      adapterFeatures: [],
      wgslLanguageFeatures: [],
      shaderF16: false,
      dp4a: false,
      valid: false,
      notes: [],
    };
    if (!navigator.gpu) {
      result.notes.push("navigator.gpu is not available");
      return result;
    }
    const wgslFeatures = navigator.gpu.wgslLanguageFeatures || new Set();
    result.wgslLanguageFeatures = Array.from(wgslFeatures).sort();
    result.dp4a = wgslFeatures.has(DP4A_FEATURE);
    const adapter = await navigator.gpu.requestAdapter({powerPreference: "high-performance"});
    result.adapterAvailable = Boolean(adapter);
    if (!adapter) {
      result.notes.push("WebGPU adapter is not available");
      return result;
    }
    result.adapterFeatures = Array.from(adapter.features || []).sort();
    result.shaderF16 = Boolean(adapter.features && adapter.features.has("shader-f16"));
    result.valid = result.shaderF16 && result.dp4a;
    if (!result.shaderF16) result.notes.push("WebGPU adapter does not expose shader-f16");
    if (!result.dp4a) result.notes.push(`WGSL ${DP4A_FEATURE} is not available`);
    return result;
  }

  function selectLinearBundle(runtimeState, params) {
    const requestedName = params.linearId || params.linearName || params.bundleName;
    if (requestedName) {
      const exact = runtimeState.bundles.find((bundle) => (
        bundle.name === requestedName ||
        (bundle.manifest && bundle.manifest.id === requestedName) ||
        (bundle.manifest && bundle.manifest.source_node === requestedName)
      ));
      if (!exact) throw new Error(`linear bundle not found: ${requestedName}`);
      if (exact.kind !== "linear" && exact.kind !== "linear_entry") {
        throw new Error(`bundle is not a linear bundle: ${requestedName}`);
      }
      return exact;
    }
    if (params.bundleBaseUrl) {
      return {
        name: "params.bundleBaseUrl",
        baseUrl: asDirectoryUrl(params.bundleBaseUrl),
        manifest: null,
        kind: "linear",
      };
    }
    const preferredName = "single_blocks.0.linear1";
    return (
      runtimeState.bundles.find((bundle) => (bundle.kind === "linear" || bundle.kind === "linear_entry") && bundle.name === preferredName) ||
      runtimeState.bundles.find((bundle) => (bundle.kind === "linear" || bundle.kind === "linear_entry") && bundle.name === "singleLinear1") ||
      runtimeState.bundles.find((bundle) => (bundle.kind === "linear" || bundle.kind === "linear_entry") && bundle.name === "qkv0") ||
      runtimeState.bundles.find((bundle) => bundle.kind === "linear" || bundle.kind === "linear_entry")
    );
  }

  function bundleMatches(bundle, names, sourcePattern) {
    const wanted = new Set(names.map((name) => name.toLowerCase()));
    const manifestName = bundle.manifest && bundle.manifest.name ? String(bundle.manifest.name) : "";
    const sourceNode = bundle.manifest && bundle.manifest.source_node ? String(bundle.manifest.source_node) : "";
    return (
      wanted.has(String(bundle.name || "").toLowerCase()) ||
      wanted.has(manifestName.toLowerCase()) ||
      (sourcePattern && sourcePattern.test(sourceNode))
    );
  }

  function selectSingleBlock(runtimeState, params) {
    const linear1 = params.linear1BaseUrl
      ? {baseUrl: asDirectoryUrl(params.linear1BaseUrl), name: "params.linear1BaseUrl"}
      : runtimeState.bundles.find((bundle) => (
        bundle.kind === "linear" &&
        bundleMatches(bundle, ["singleLinear1", "linear1", "transformer_single_linear1_0"], /\/linear1\//)
      ));
    const linear2 = params.linear2BaseUrl
      ? {baseUrl: asDirectoryUrl(params.linear2BaseUrl), name: "params.linear2BaseUrl"}
      : runtimeState.bundles.find((bundle) => (
        bundle.kind === "linear" &&
        bundleMatches(bundle, ["singleLinear2", "linear2", "transformer_single_linear2_0"], /\/linear2\//)
      ));
    const block = params.blockBaseUrl
      ? {baseUrl: asDirectoryUrl(params.blockBaseUrl), name: "params.blockBaseUrl"}
      : runtimeState.bundles.find((bundle) => (
        bundle.kind === "block_constants" &&
        bundleMatches(bundle, ["singleBlock0", "block0", "single_block0", "transformer_single_block0"])
      ));
    if (!linear1 || !linear2 || !block) {
      throw new Error("single block checkpoint requires singleLinear1, singleLinear2, and singleBlock0 bundles");
    }
    return {linear1, linear2, block};
  }

  function makeStatus(runtimeState) {
    const assetSummary = {};
    for (const [key, item] of runtimeState.assets.entries()) {
      assetSummary[key] = {
        url: item.url,
        byteLength: item.byteLength,
        valueType: item.valueType,
      };
    }
    return {
      verdict: runtimeState.ready ? "custom-transformer-runtime-ready" : "custom-transformer-runtime-not-ready",
      ready: runtimeState.ready,
      baseUrl: runtimeState.baseUrl,
      manifest: {
        url: runtimeState.manifestUrl,
        summary: summarizeManifest(runtimeState.manifest),
      },
      webgpu: cloneJson(runtimeState.webgpu),
      harness: cloneJson(runtimeState.harness),
      bundles: runtimeState.bundles.map((bundle) => ({
        name: bundle.name,
        kind: bundle.kind,
        baseUrl: bundle.baseUrl,
        url: bundle.url,
        manifest: summarizeManifest(bundle.manifest),
      })),
      assets: assetSummary,
      assetCount: runtimeState.assets.size,
      warnings: runtimeState.warnings.slice(),
      notes: runtimeState.notes.slice(),
    };
  }

  function makeCheckpointStatus(runtimeState) {
    return {
      verdict: runtimeState.ready ? "custom-transformer-runtime-ready" : "custom-transformer-runtime-not-ready",
      ready: runtimeState.ready,
      baseUrl: runtimeState.baseUrl,
      manifest: {
        url: runtimeState.manifestUrl,
        summary: summarizeManifest(runtimeState.manifest),
      },
      webgpu: cloneJson(runtimeState.webgpu),
      harness: cloneJson(runtimeState.harness),
      bundleCount: runtimeState.bundles.length,
      assetCount: runtimeState.assets.size,
      warnings: runtimeState.warnings.slice(),
      notes: runtimeState.notes.slice(),
    };
  }

  async function createCustomFluxTransformerRuntime(options = {}) {
    const baseUrl = asDirectoryUrl(options.baseUrl || DEFAULT_BASE_URL);
    const manifestUrl = resolveUrl(baseUrl, "manifest.json");
    const warnings = [];
    const notes = [];
    const manifest = await fetchJson(manifestUrl);
    const webgpu = await inspectWebGpu();
    const harness = await loadLinearHarness();
    if (!harness.loaded) notes.push(harness.error || "custom low-bit linear harness is not loaded");

    const assets = options.preloadBinaries === false
      ? new Map()
      : await loadBinaryAssets(manifest, baseUrl, "full", warnings);
    const bundles = [];
    const bundleRefs = collectBundleRefs(manifest, baseUrl);
    for (const ref of bundleRefs) {
      const bundleManifest = await fetchJson(ref.url, !ref.explicit);
      if (!bundleManifest) continue;
      const kind = ref.kind || identifyBundleKind(bundleManifest);
      const bundle = {
        name: ref.name,
        kind,
        url: ref.url,
        baseUrl: ref.baseUrl,
        manifest: bundleManifest,
      };
      bundles.push(bundle);
      if (options.preloadBinaries !== false) {
        const bundleAssets = await loadBinaryAssets(bundleManifest, ref.baseUrl, ref.name, warnings);
        for (const [key, asset] of bundleAssets.entries()) assets.set(key, asset);
      }
    }

    if (Array.isArray(manifest.linears)) {
      for (const linear of manifest.linears) {
        bundles.push({
          name: linear.id || linear.source_node || `linear_${bundles.length}`,
          kind: "linear_entry",
          url: manifestUrl,
          baseUrl,
          manifest: linear,
          fullManifestEntry: true,
        });
      }
    }

    if (identifyBundleKind(manifest) === "linear") {
      bundles.unshift({
        name: manifest.name || "full",
        kind: "linear",
        url: manifestUrl,
        baseUrl,
        manifest,
      });
    }

    const ready = Boolean(webgpu.valid && harness.loaded && manifest && (bundles.length > 0 || identifyBundleKind(manifest) !== "unknown"));
    const runtimeState = {
      ready,
      baseUrl,
      manifestUrl,
      manifest,
      webgpu,
      harness,
      bundles,
      assets,
      warnings,
      notes,
    };

    return {
      status() {
        return makeStatus(runtimeState);
      },

      async runDenoise(params = {}) {
        if (!runtimeState.webgpu.valid) {
          throw new Error(runtimeState.webgpu.notes.join("; ") || "WebGPU feature validation failed");
        }
        if (!runtimeState.harness.loaded) {
          throw new Error("custom low-bit transformer harness is not loaded");
        }
        if (typeof window.runCustomFluxTransformerDenoise !== "function") {
          throw new Error("custom full transformer denoise harness is not loaded");
        }
        const result = await window.runCustomFluxTransformerDenoise({
          ...params,
          fullManifest: runtimeState.manifest,
          bundleBaseUrl: runtimeState.baseUrl,
        });
        return {
          ...result,
          runtimeStatus: makeCheckpointStatus(runtimeState),
        };
      },

      async prepareAssets(params = {}) {
        if (!runtimeState.webgpu.valid) {
          throw new Error(runtimeState.webgpu.notes.join("; ") || "WebGPU feature validation failed");
        }
        if (typeof window.prepareCustomFluxTransformerAssets !== "function") {
          throw new Error("custom full transformer asset prepare harness is not loaded");
        }
        return await window.prepareCustomFluxTransformerAssets({
          ...params,
          fullManifest: runtimeState.manifest,
          bundleBaseUrl: runtimeState.baseUrl,
        });
      },

      async prepareStage(params = {}) {
        if (!runtimeState.webgpu.valid) {
          throw new Error(runtimeState.webgpu.notes.join("; ") || "WebGPU feature validation failed");
        }
        if (!runtimeState.harness.loaded) {
          throw new Error("custom low-bit transformer harness is not loaded");
        }
        if (typeof window.runCustomFluxTransformerDenoise !== "function") {
          throw new Error("custom full transformer denoise harness is not loaded");
        }
        const result = await window.runCustomFluxTransformerDenoise({
          ...params,
          prepareOnly: true,
          fullManifest: runtimeState.manifest,
          bundleBaseUrl: runtimeState.baseUrl,
        });
        return {
          ...result,
          runtimeStatus: makeCheckpointStatus(runtimeState),
        };
      },

      async warmDispatch(params = {}) {
        if (!runtimeState.webgpu.valid) {
          throw new Error(runtimeState.webgpu.notes.join("; ") || "WebGPU feature validation failed");
        }
        if (!runtimeState.harness.loaded) {
          throw new Error("custom low-bit transformer harness is not loaded");
        }
        if (typeof window.runCustomFluxTransformerDenoise !== "function") {
          throw new Error("custom full transformer denoise harness is not loaded");
        }
        const result = await window.runCustomFluxTransformerDenoise({
          ...params,
          warmDispatchOnly: true,
          fullManifest: runtimeState.manifest,
          bundleBaseUrl: runtimeState.baseUrl,
        });
        return {
          ...result,
          runtimeStatus: makeCheckpointStatus(runtimeState),
        };
      },

      async runCheckpoint(params = {}) {
        if (!runtimeState.webgpu.valid) {
          throw new Error(runtimeState.webgpu.notes.join("; ") || "WebGPU feature validation failed");
        }
        if (!runtimeState.harness.loaded) {
          throw new Error("custom low-bit linear harness is not loaded");
        }
        const kind = params.kind || params.checkpoint || (
          runtimeState.bundles.some((bundle) => bundle.name === "singleLinear1") ? "single_block" : "linear"
        );
        const releaseDeviceAfter = params.releaseDeviceAfter !== false;
        try {
        if (kind === "linear") {
          const bundle = selectLinearBundle(runtimeState, params);
          if (!bundle) throw new Error("no executable linear bundle was found");
          const common = {
            mode: params.mode || (bundle.kind === "linear_entry" ? "q4" : "i8"),
            n: Number(params.n ?? 16),
            warmupRuns: Number(params.warmupRuns ?? 0),
            timedRuns: Number(params.timedRuns ?? 1),
            verify: Boolean(params.verify),
            q4TileCols: params.q4TileCols,
            i8TileCols: params.i8TileCols,
            i8Kernel: params.i8Kernel,
            rowBlockSize: params.rowBlockSize,
            prefixCount: params.prefixCount,
            verifyRows: params.verifyRows,
          };
          const result = bundle.kind === "linear_entry"
            ? await window.runCustomLowbitLinearManifestBench({
                ...common,
                manifest: bundle.manifest,
                bundleBaseUrl: runtimeState.baseUrl,
              })
            : await window.runCustomLowbitLinearBench({
                ...common,
                bundleBaseUrl: bundle.baseUrl,
              });
          return {
            verdict: "custom-transformer-linear-checkpoint-completed",
            checkpoint: {kind: "linear", bundle: bundle.name, baseUrl: bundle.baseUrl},
            runtimeStatus: makeCheckpointStatus(runtimeState),
            result,
          };
        }
        if (kind === "single_block") {
          const selected = selectSingleBlock(runtimeState, params);
          const result = await window.runCustomSingleStreamMlpBench({
            linear1BaseUrl: selected.linear1.baseUrl,
            linear2BaseUrl: selected.linear2.baseUrl,
            blockBaseUrl: selected.block.baseUrl,
            n: Number(params.n ?? 16),
            warmupRuns: Number(params.warmupRuns ?? 0),
            timedRuns: Number(params.timedRuns ?? 1),
            realAttention: Boolean(params.realAttention),
            readbackSample: Number(params.readbackSample ?? 8),
            linear1TileCols: params.linear1TileCols,
            linear2TileCols: params.linear2TileCols,
            linear1WChunkCols: params.linear1WChunkCols,
            linear2WChunkCols: params.linear2WChunkCols,
            linear1OutputF16: params.linear1OutputF16,
            fuseActivationQuant: Boolean(params.fuseActivationQuant),
            correctSingleBlock: Boolean(params.correctSingleBlock),
            rope: Boolean(params.rope),
            tiledAttention: params.tiledAttention,
            attentionTileKeys: params.attentionTileKeys,
            attentionQueryRows: params.attentionQueryRows ?? 16,
            textTokens: params.textTokens,
            imageWidth: params.imageWidth,
          });
          return {
            verdict: "custom-transformer-single-block-checkpoint-completed",
            checkpoint: {
              kind: "single_block",
              linear1: selected.linear1.baseUrl,
              linear2: selected.linear2.baseUrl,
              block: selected.block.baseUrl,
            },
            runtimeStatus: makeCheckpointStatus(runtimeState),
            result,
          };
        }
        if (kind === "timestep_modulation" || kind === "modulation") {
          if (typeof window.runCustomTimestepModulationBench !== "function") {
            throw new Error("custom timestep modulation harness is not loaded");
          }
          const result = await window.runCustomTimestepModulationBench({
            manifest: runtimeState.manifest,
            bundleBaseUrl: runtimeState.baseUrl,
            timestep: params.timestep,
            modulation: params.modulation,
            q4TileCols: params.q4TileCols,
            warmupRuns: Number(params.warmupRuns ?? 0),
            timedRuns: Number(params.timedRuns ?? 1),
            readbackSample: Number(params.readbackSample ?? 24),
          });
          return {
            verdict: "custom-transformer-timestep-modulation-checkpoint-completed",
            checkpoint: {kind: "timestep_modulation", baseUrl: runtimeState.baseUrl},
            runtimeStatus: makeCheckpointStatus(runtimeState),
            result,
          };
        }
        if (kind === "single_block_q4") {
          if (typeof window.runCustomSingleBlockQ4Bench !== "function") {
            throw new Error("custom q4 single-block harness is not loaded");
          }
          const result = await window.runCustomSingleBlockQ4Bench({
            manifest: runtimeState.manifest,
            bundleBaseUrl: runtimeState.baseUrl,
            blockIndex: Number(params.blockIndex ?? 0),
            n: Number(params.n ?? 768),
            timestep: params.timestep,
            warmupRuns: Number(params.warmupRuns ?? 0),
            timedRuns: Number(params.timedRuns ?? 1),
            readbackSample: Number(params.readbackSample ?? 16),
            q4TileCols: params.q4TileCols,
            rope: params.rope,
            textTokens: params.textTokens,
            imageWidth: params.imageWidth,
          });
          return {
            verdict: "custom-transformer-single-block-q4-checkpoint-completed",
            checkpoint: {kind: "single_block_q4", baseUrl: runtimeState.baseUrl},
            runtimeStatus: makeCheckpointStatus(runtimeState),
            result,
          };
        }
        if (kind === "single_block_dynamic_i8") {
          const result = await window.runCustomSingleStreamMlpBench({
            fullManifest: runtimeState.manifest,
            bundleBaseUrl: runtimeState.baseUrl,
            dynamicI8FromQ4: true,
            realModulation: true,
            blockIndex: Number(params.blockIndex ?? 0),
            n: Number(params.n ?? 768),
            timestep: params.timestep,
            warmupRuns: Number(params.warmupRuns ?? 0),
            timedRuns: Number(params.timedRuns ?? 1),
            realAttention: params.realAttention !== false,
            readbackSample: Number(params.readbackSample ?? 16),
            linear1TileCols: params.linear1TileCols ?? 256,
            linear2TileCols: params.linear2TileCols ?? 256,
            linear1WChunkCols: params.linear1WChunkCols ?? 64,
            linear2WChunkCols: params.linear2WChunkCols ?? 64,
            linear1OutputF16: params.linear1OutputF16 !== false,
            singleComputePass: params.singleComputePass !== false,
            fuseActivationQuant: params.fuseActivationQuant !== false,
            fuseResidualDot: params.fuseResidualDot !== false,
            correctSingleBlock: true,
            rope: params.rope,
            tiledAttention: params.tiledAttention,
            attentionTileKeys: params.attentionTileKeys,
            attentionQueryRows: params.attentionQueryRows,
            textTokens: params.textTokens,
            imageWidth: params.imageWidth,
          });
          return {
            verdict: "custom-transformer-single-block-dynamic-i8-checkpoint-completed",
            checkpoint: {kind: "single_block_dynamic_i8", baseUrl: runtimeState.baseUrl},
            runtimeStatus: makeCheckpointStatus(runtimeState),
            result,
          };
        }
        if (kind === "single_blocks_loop_dynamic_i8") {
          if (typeof window.runCustomSingleStreamBlocksLoopBench !== "function") {
            throw new Error("custom single-stream blocks loop harness is not loaded");
          }
          const result = await window.runCustomSingleStreamBlocksLoopBench({
            fullManifest: runtimeState.manifest,
            bundleBaseUrl: runtimeState.baseUrl,
            blockIndex: Number(params.blockIndex ?? 0),
            blockCount: Number(params.blockCount ?? 4),
            n: Number(params.n ?? 768),
            timestep: params.timestep,
            warmupRuns: Number(params.warmupRuns ?? 0),
            timedRuns: Number(params.timedRuns ?? 1),
            readbackSample: Number(params.readbackSample ?? 16),
            linear1TileCols: params.linear1TileCols ?? 256,
            linear2TileCols: params.linear2TileCols ?? 256,
            linear1WChunkCols: params.linear1WChunkCols ?? 64,
            linear2WChunkCols: params.linear2WChunkCols ?? 64,
            linear1OutputF16: params.linear1OutputF16 !== false,
            attentionTileKeys: params.attentionTileKeys,
            attentionQueryRows: params.attentionQueryRows ?? 16,
            textTokens: params.textTokens,
            imageWidth: params.imageWidth,
          });
          return {
            verdict: "custom-transformer-single-blocks-loop-dynamic-i8-checkpoint-completed",
            checkpoint: {kind: "single_blocks_loop_dynamic_i8", baseUrl: runtimeState.baseUrl},
            runtimeStatus: makeCheckpointStatus(runtimeState),
            result,
          };
        }
        if (kind === "double_block_dynamic_i8") {
          if (typeof window.runCustomDoubleStreamBlockBench !== "function") {
            throw new Error("custom double-stream block harness is not loaded");
          }
          const result = await window.runCustomDoubleStreamBlockBench({
            fullManifest: runtimeState.manifest,
            bundleBaseUrl: runtimeState.baseUrl,
            blockIndex: Number(params.blockIndex ?? 0),
            imageTokens: Number(params.imageTokens ?? 256),
            textTokens: Number(params.textTokens ?? 512),
            imageWidth: params.imageWidth,
            timestep: params.timestep,
            warmupRuns: Number(params.warmupRuns ?? 0),
            timedRuns: Number(params.timedRuns ?? 1),
            readbackSample: Number(params.readbackSample ?? 16),
            linearTileCols: params.linearTileCols ?? 256,
            projTileCols: params.projTileCols ?? 256,
            wChunkCols: params.wChunkCols ?? 64,
            attentionTileKeys: params.attentionTileKeys,
            attentionQueryRows: params.attentionQueryRows ?? 16,
          });
          return {
            verdict: "custom-transformer-double-block-dynamic-i8-checkpoint-completed",
            checkpoint: {kind: "double_block_dynamic_i8", baseUrl: runtimeState.baseUrl},
            runtimeStatus: makeCheckpointStatus(runtimeState),
            result,
          };
        }
        if (kind === "double_blocks_loop_dynamic_i8") {
          if (typeof window.runCustomDoubleStreamBlocksLoopBench !== "function") {
            throw new Error("custom double-stream blocks loop harness is not loaded");
          }
          const result = await window.runCustomDoubleStreamBlocksLoopBench({
            fullManifest: runtimeState.manifest,
            bundleBaseUrl: runtimeState.baseUrl,
            blockIndex: Number(params.blockIndex ?? 0),
            blockCount: Number(params.blockCount ?? 5),
            imageTokens: Number(params.imageTokens ?? 256),
            textTokens: Number(params.textTokens ?? 512),
            imageWidth: params.imageWidth,
            timestep: params.timestep,
            warmupRuns: Number(params.warmupRuns ?? 0),
            timedRuns: Number(params.timedRuns ?? 1),
            readbackSample: Number(params.readbackSample ?? 16),
            linearTileCols: params.linearTileCols ?? 256,
            projTileCols: params.projTileCols ?? 256,
            wChunkCols: params.wChunkCols ?? 64,
            attentionTileKeys: params.attentionTileKeys,
            attentionQueryRows: params.attentionQueryRows ?? 16,
          });
          return {
            verdict: "custom-transformer-double-blocks-loop-dynamic-i8-checkpoint-completed",
            checkpoint: {kind: "double_blocks_loop_dynamic_i8", baseUrl: runtimeState.baseUrl},
            runtimeStatus: makeCheckpointStatus(runtimeState),
            result,
          };
        }
        throw new Error(`unknown checkpoint kind: ${kind}`);
        } finally {
          if (releaseDeviceAfter && typeof window.resetCustomLowbitWebGpuDevice === "function") {
            window.resetCustomLowbitWebGpuDevice();
          }
        }
      },
    };
  }

  globalThis.createCustomFluxTransformerRuntime = createCustomFluxTransformerRuntime;
}());
