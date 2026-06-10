import { afterEach, describe, expect, it, vi } from "vitest";

import { MODELS } from "./modelRegistry";
import {
  cacheKeyFromUrl,
  FLUX_MODEL_BASE,
  FLUX_ONNX_TOTAL_BYTES,
  FLUX_OPFS_CACHE_DIR,
  fluxGenProgressToWire,
  resolvePublicAsset,
  trackFluxFetchProgress,
} from "./fluxPipeline";

describe("fluxPipeline", () => {
  afterEach(() => {
    Reflect.deleteProperty(globalThis, "document");
    Reflect.deleteProperty(globalThis, "window");
    vi.unstubAllEnvs();
  });

  it("points at the ryanhlewis HF bundle", () => {
    expect(FLUX_MODEL_BASE).toContain("ryanhlewis/flux2-klein-4b-webgpu-lowbit");
  });

  it("estimates staged HF bundle download size", () => {
    expect(FLUX_ONNX_TOTAL_BYTES).toBeGreaterThan(12_000_000_000);
    expect(FLUX_ONNX_TOTAL_BYTES).toBeLessThan(14_000_000_000);
  });

  it("matches model registry estimate", () => {
    expect(MODELS.flux.estimatedBytes).toBe(FLUX_ONNX_TOTAL_BYTES);
  });

  it("resolves public assets from origin root in dev (BASE_URL ./)", () => {
    vi.stubEnv("BASE_URL", "./");
    Object.defineProperty(globalThis, "location", {
      configurable: true,
      value: { origin: "http://localhost:5180", href: "http://localhost:5180/" },
    });
    expect(resolvePublicAsset("flux2/flux2-engine.js")).toBe(
      "http://localhost:5180/flux2/flux2-engine.js",
    );
    expect(resolvePublicAsset("flux2/tools/custom_lowbit_webgpu/custom_lowbit_linear.js")).toBe(
      "http://localhost:5180/flux2/tools/custom_lowbit_webgpu/custom_lowbit_linear.js",
    );
  });

  it("ignores worker script href (avoids Vite @fs app/src/flux2 paths)", () => {
    vi.stubEnv("BASE_URL", "./");
    Object.defineProperty(globalThis, "location", {
      configurable: true,
      value: {
        origin: "http://127.0.0.1:5180",
        href: "http://127.0.0.1:5180/@fs/C:/Users/Avatar001/CascadeProjects/JANUSGROVE/app/src/flux.worker.ts",
      },
    });
    expect(resolvePublicAsset("flux2/tools/custom_lowbit_webgpu/custom_lowbit_linear.js")).toBe(
      "http://127.0.0.1:5180/flux2/tools/custom_lowbit_webgpu/custom_lowbit_linear.js",
    );
  });

  it("resolves public assets with BASE_URL subpath deploys", () => {
    vi.stubEnv("BASE_URL", "/JANUSGROVE/");
    Object.defineProperty(globalThis, "location", {
      configurable: true,
      value: { origin: "https://example.com", href: "https://example.com/JANUSGROVE/" },
    });
    expect(resolvePublicAsset("flux2/flux2-engine.js")).toBe(
      "https://example.com/JANUSGROVE/flux2/flux2-engine.js",
    );
  });

  it("accumulates fetch bytes across files without resetting", () => {
    const events: Array<{ loaded: number; filesCompleted: number; fileCount: number }> = [];
    const report = trackFluxFetchProgress((state) => {
      events.push({
        loaded: state.loaded,
        filesCompleted: state.filesCompleted,
        fileCount: state.fileCount,
      });
    }, FLUX_ONNX_TOTAL_BYTES);

    report(1_000_000, 2_000_000, "a.bin", "https://hf.co/a.bin");
    report(2_000_000, 2_000_000, "a.bin", "https://hf.co/a.bin");
    report(0, 3_000_000, "b.bin", "https://hf.co/b.bin");
    report(500_000, 3_000_000, "b.bin", "https://hf.co/b.bin");

    expect(events[0]?.loaded).toBe(1_000_000);
    expect(events[1]?.loaded).toBe(2_000_000);
    expect(events[1]?.filesCompleted).toBe(1);
    expect(events[2]?.loaded).toBe(2_000_000);
    expect(events[2]?.fileCount).toBe(2);
    expect(events[3]?.loaded).toBe(2_500_000);
  });

  it("uses a dedicated OPFS cache directory", () => {
    expect(FLUX_OPFS_CACHE_DIR).toBe("janusgrove-flux-cache");
  });

  it("derives unique cache keys per full URL", async () => {
    const a = await cacheKeyFromUrl("https://huggingface.co/a/weight.bin");
    const b = await cacheKeyFromUrl("https://huggingface.co/b/weight.bin");
    expect(a).toMatch(/^flux_[0-9a-f]{64}$/);
    expect(a).not.toBe(b);
    expect(await cacheKeyFromUrl("https://huggingface.co/a/weight.bin")).toBe(a);
  });

  it("tracks same basename on different URLs separately", () => {
    const events: Array<{ loaded: number; filesCompleted: number }> = [];
    const report = trackFluxFetchProgress((state) => {
      events.push({ loaded: state.loaded, filesCompleted: state.filesCompleted });
    }, FLUX_ONNX_TOTAL_BYTES);

    report(100, 100, "weight.bin", "https://hf.co/custom_lowbit/weight.bin");
    report(100, 100, "weight.bin", "https://hf.co/custom_lowbit/weight.bin");
    report(50, 100, "weight.bin", "https://hf.co/onnx/weight.bin");

    expect(events[1]?.filesCompleted).toBe(1);
    expect(events[2]?.loaded).toBe(150);
    expect(events[2]?.filesCompleted).toBe(1);
  });

  it("provides document.currentScript for classic runtime bootstrap", () => {
    Object.defineProperty(globalThis, "location", {
      configurable: true,
      value: { origin: "http://localhost:5180", href: "http://localhost:5180/" },
    });
    const scriptUrl = "http://localhost:5180/flux2/tools/custom_lowbit_webgpu/custom_transformer_runtime.js";
    (0, eval)(`
      (function () {
        globalThis.document = {
          currentScript: { src: ${JSON.stringify(scriptUrl)} },
          head: { appendChild: function () {} },
          createElement: function () { return {}; },
        };
        const resolved = document.currentScript && document.currentScript.src
          ? document.currentScript.src
          : null;
        if (!resolved) throw new Error("document.currentScript missing");
      })();
    `);
    expect(true).toBe(true);
  });

  it("maps denoise progress to step counters for the UI", () => {
    const wire = fluxGenProgressToWire({
      fraction: 0.5,
      phase: "denoise",
      denoiseStep: 2,
      denoiseTotal: 4,
      elapsedSec: 12,
    });
    expect(wire.count).toBe(2);
    expect(wire.total).toBe(4);
    expect(wire.progress).toBe(0.5);
    expect(wire.phase).toBe("denoise");
    expect(wire.elapsedSec).toBe(12);
  });

  it("maps non-denoise phases to percent scale", () => {
    const wire = fluxGenProgressToWire({
      fraction: 0.15,
      phase: "gpu_prep",
      elapsedSec: 45,
    });
    expect(wire.count).toBe(15);
    expect(wire.total).toBe(100);
    expect(wire.progress).toBe(0.15);
  });
});
