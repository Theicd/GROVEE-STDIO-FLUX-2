#!/usr/bin/env node
/** Simulates worker classic-script bootstrap against the dev server. */
const base = process.env.JANUS_URL ?? "http://localhost:5180/";
const pageBase = base.endsWith("/") ? base : `${base}/`;

function resolvePublicAsset(rel) {
  const path = rel.replace(/^\//, "");
  const origin = new URL(pageBase).origin;
  return `${origin}/${path}`;
}

const LINEAR_URL = resolvePublicAsset("flux2/tools/custom_lowbit_webgpu/custom_lowbit_linear.js");
const RUNTIME_URL = resolvePublicAsset("flux2/tools/custom_lowbit_webgpu/custom_transformer_runtime.js");

function ensureWorkerDomPolyfill(currentScriptUrl) {
  const pageHref = pageBase;
  const pageOrigin = new URL(pageHref).origin;
  globalThis.window = globalThis.window ?? { location: { href: pageHref, origin: pageOrigin } };
  if (!globalThis.document?.__fluxPolyfill) {
    globalThis.document = {
      __fluxPolyfill: true,
      currentScript: currentScriptUrl ? { src: currentScriptUrl } : null,
      head: { appendChild() {} },
      createElement(tag) {
        if (tag === "script") return { src: "", async: true, onload: null, onerror: null };
        return { width: 0, height: 0, getContext: () => null };
      },
    };
  } else if (currentScriptUrl) {
    globalThis.document.currentScript = { src: currentScriptUrl };
  }
}

async function execClassicScript(url) {
  ensureWorkerDomPolyfill(url);
  const response = await fetch(url);
  if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
  let code = await response.text();
  if (code.trimStart().startsWith("<!")) throw new Error(`HTML instead of JS: ${url}`);
  const prev = globalThis.document.currentScript;
  globalThis.document.currentScript = { src: url };
  try {
    code = code.replace(/\bwindow\./g, "globalThis.");
    (0, eval)(`${code}\n//# sourceURL=${url}`);
  } finally {
    globalThis.document.currentScript = prev;
  }
}

try {
  await execClassicScript(LINEAR_URL);
  await execClassicScript(RUNTIME_URL);
  console.log(JSON.stringify({ ok: true, linear: LINEAR_URL, runtime: RUNTIME_URL, createCustom: typeof globalThis.createCustomFluxTransformerRuntime }, null, 2));
} catch (err) {
  console.error(JSON.stringify({ ok: false, error: err.message }, null, 2));
  process.exit(1);
}
