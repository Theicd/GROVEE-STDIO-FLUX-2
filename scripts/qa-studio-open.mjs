#!/usr/bin/env node
/**
 * Studio open smoke test (Playwright).
 *
 * Fast path (?mockstudio=1): verifies phase transition without downloading SD 1.5.
 * Live path: set STUDIO_LIVE=1 — waits up to 15 min for real SD compile (dev server required).
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const baseUrl = process.env.STUDIO_URL ?? "http://127.0.0.1:5180";
const live = process.env.STUDIO_LIVE === "1";
const mockUrl = `${baseUrl}/?qa=1&mockstudio=1`;

let fail = 0;
const check = (ok, name, detail = "") => {
  if (ok) console.log(`[PASS] ${name}${detail ? ` — ${detail}` : ""}`);
  else {
    console.error(`[FAIL] ${name}${detail ? ` — ${detail}` : ""}`);
    fail += 1;
  }
};

async function probeServer(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(3000) });
    return res.ok;
  } catch {
    return false;
  }
}

async function runMockStudioTest() {
  const { chromium } = await import("playwright");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(mockUrl, { waitUntil: "domcontentloaded", timeout: 15000 });
    await page.waitForSelector('[data-testid="app-studio"]', { timeout: 15000 });
    const phase = await page.getAttribute('[data-testid="app-studio"]', "data-phase");
    check(phase === "ready", "mock studio opens", `phase=${phase}`);

    const qa = await page.evaluate(() => window.__janusQa ?? null);
    check(qa?.studioOpen === true, "QA snapshot studioOpen", JSON.stringify(qa));
    check((qa?.loadedModelCount ?? 0) >= 1, "QA snapshot loadedModelCount");
  } finally {
    await browser.close();
  }
}

async function runLiveStudioTest() {
  const { chromium } = await import("playwright");
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    await page.goto(`${baseUrl}/?qa=1`, { waitUntil: "domcontentloaded", timeout: 15000 });
    const loadBtn = page.getByRole("button", { name: /load/i });
    await loadBtn.click();
    await page.waitForSelector('[data-testid="app-studio"]', { timeout: 900_000 });
    check(true, "live SD 1.5 studio opened");
  } finally {
    await browser.close();
  }
}

const lint = spawnSync("npm", ["run", "lint"], { cwd: root, shell: true, encoding: "utf8" });
check(lint.status === 0, "tsc lint");

const test = spawnSync("npm", ["test"], { cwd: root, shell: true, encoding: "utf8" });
check(test.status === 0, "vitest unit tests");

const up = await probeServer(baseUrl);
if (!up) {
  console.warn(`[SKIP] Dev server not reachable at ${baseUrl} — start start.bat for browser tests`);
  if (fail > 0) process.exit(1);
  console.log("\nUnit tests OK. Manual: SD 1.5 only → Load → wait compile → studio appears.");
  process.exit(0);
}

try {
  if (live) await runLiveStudioTest();
  else await runMockStudioTest();
} catch (e) {
  check(false, live ? "live studio test" : "mock studio test", e instanceof Error ? e.message : String(e));
}

if (fail > 0) process.exit(1);
console.log("\nStudio open smoke OK.");
if (!live) {
  console.log("Manual verification: select SD 1.5 only → Load → wait UNet compile (2–5 min) → studio.");
  console.log("Full live test: STUDIO_LIVE=1 node scripts/qa-studio-open.mjs");
}
