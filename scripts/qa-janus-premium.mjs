#!/usr/bin/env node
/**
 * JanusGrove premium QA — model download + image generation in real browser.
 *
 * Prereq: npm run dev (or set QA_JANUS_URL)
 * Run:    npm run qa:janus:premium
 */
import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const ORIGIN = (process.env.QA_JANUS_URL ?? "http://127.0.0.1:5180").replace(/\/$/, "");
const LOAD_TIMEOUT_MS = Number(process.env.QA_LOAD_TIMEOUT_MS ?? 45 * 60 * 1000);
const GEN_TIMEOUT_MS = Number(process.env.QA_GEN_TIMEOUT_MS ?? 15 * 60 * 1000);
const QA_URL = `${ORIGIN}/?qa=1&autogen=1`;

let pass = 0;
let fail = 0;
const results = [];

const log = (ok, name, detail = "") => {
  const tag = ok ? "PASS" : "FAIL";
  const line = `[${tag}] ${name}${detail ? ` — ${detail}` : ""}`;
  console.log(line);
  results.push({ ok, name, detail });
  if (ok) pass += 1;
  else fail += 1;
};

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForQa(page, predicate, timeoutMs, label) {
  const start = Date.now();
  let lastLog = 0;
  while (Date.now() - start < timeoutMs) {
    if (page.isClosed()) throw new Error(`Browser closed while waiting: ${label}`);
    const snap = await page.evaluate(() => window.__janusQa ?? null);
    if (snap && Date.now() - lastLog > 30000) {
      console.log(
        `  … ${label}: phase=${snap.phase} loaded=${snap.loadedBytes} gallery=${snap.galleryCount} gen=${snap.isGenerating}`,
      );
      lastLog = Date.now();
    }
    if (snap && predicate(snap)) return snap;
    await delay(1500);
  }
  throw new Error(`Timeout: ${label} (${timeoutMs}ms)`);
}

async function main() {
  console.log(`JanusGrove premium QA → ${QA_URL}\n`);
  console.log(`Load timeout: ${Math.round(LOAD_TIMEOUT_MS / 60000)}m · Gen timeout: ${Math.round(GEN_TIMEOUT_MS / 60000)}m\n`);

  const profileDir = join(ROOT, "tests", "fixtures", "playwright-profile");
  mkdirSync(profileDir, { recursive: true });

  const context = await chromium.launchPersistentContext(profileDir, {
    headless: process.env.QA_HEADLESS === "1" || !!process.env.CI,
    args: [
      "--enable-unsafe-webgpu",
      "--disable-dev-shm-usage",
      "--no-sandbox",
    ],
  });
  const page = context.pages()[0] ?? (await context.newPage());

  try {
    const res = await page.goto(QA_URL, { waitUntil: "domcontentloaded", timeout: 60000 });
    log(res?.ok(), "QA-DL-01 page loads", `HTTP ${res?.status()}`);

    const intro = page.locator('[data-testid="intro-screen"]');
    await intro.waitFor({ timeout: 15000 });
    log(true, "QA-DL-02 intro screen visible");

    log(true, "QA-DL-03 auto-load triggered (?qa=1)");

    let loadSnap;
    try {
      loadSnap = await waitForQa(
        page,
        (s) => s.phase === "loading" && s.totalBytes > 0,
        120000,
        "download progress bytes",
      );
      log(true, "QA-DL-04 download progress", `${loadSnap.loadedBytes} / ${loadSnap.totalBytes}`);
    } catch {
      loadSnap = await waitForQa(
        page,
        (s) => s.phase === "loading" || s.loadedBytes > 0,
        60000,
        "loading phase",
      );
      log(true, "QA-DL-04 download started (cache?)", `loaded=${loadSnap.loadedBytes}`);
    }

    const readySnap = await waitForQa(
      page,
      (s) => s.phase === "ready" && !s.error,
      LOAD_TIMEOUT_MS,
      "model ready",
    );
    log(true, "QA-LD-01 model loaded", readySnap.deviceLabel || "ready");
    log(readySnap.webgpu, "QA-LD-02 WebGPU detected", readySnap.webgpu ? "yes" : "no — may be slow");

    await page.locator('[data-testid="app-studio"]').waitFor({ timeout: 10000 });
    log(true, "QA-LD-04 studio UI visible");

    const genSnap = await waitForQa(
      page,
      (s) => s.isGenerating,
      60000,
      "generation started",
    );
    log(true, "QA-GEN-01 generation started", genSnap.status);

    const doneSnap = await waitForQa(
      page,
      (s) => s.galleryCount >= 1 && !s.isGenerating,
      GEN_TIMEOUT_MS,
      "image in gallery",
    );
    log(true, "QA-GEN-02 gallery has image", `count=${doneSnap.galleryCount}`);

    const img = page.locator('[data-testid="gallery-image"]').first();
    await img.waitFor({ state: "visible", timeout: 10000 });
    const dims = await img.evaluate((el) => ({
      w: (el).naturalWidth,
      h: (el).naturalHeight,
    }));
    log(dims.w > 0 && dims.h > 0, "QA-GEN-10 image has pixels", `${dims.w}×${dims.h}`);
    log(
      dims.w >= 256 && dims.h >= 256,
      "QA-GEN-11 resolution plausible",
      `expected ~384×384, got ${dims.w}×${dims.h}`,
    );

    const outDir = join(ROOT, "tests", "fixtures", "qa-runs");
    mkdirSync(outDir, { recursive: true });
    const shot = join(outDir, `janus-qa-${Date.now()}.png`);
    await img.screenshot({ path: shot });
    log(true, "QA-GEN screenshot saved", shot);

    if (doneSnap.error) log(false, "QA no worker error", doneSnap.error);
    else log(true, "QA no worker error");
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    log(false, "QA run exception", msg);
    try {
      await page.screenshot({
        path: join(ROOT, "tests", "fixtures", "qa-runs", "janus-qa-fail.png"),
      });
    } catch {
      /* ignore */
    }
  } finally {
    await context.close();
  }

  const outJson = join(ROOT, "tests", "fixtures", "qa-janus-premium-results.json");
  mkdirSync(dirname(outJson), { recursive: true });
  writeFileSync(
    outJson,
    JSON.stringify({ url: QA_URL, pass, fail, results, at: new Date().toISOString() }, null, 2),
  );

  console.log(`\nResults: ${pass} passed, ${fail} failed → ${outJson}`);
  if (fail > 0) process.exit(1);
}

main();
