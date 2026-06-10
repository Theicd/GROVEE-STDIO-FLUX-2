#!/usr/bin/env node
/** Save gallery screenshot from running dev server. */
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const URL = process.env.QA_JANUS_URL ?? "http://127.0.0.1:5180/?qa=1&autogen=1";
const outDir = join(ROOT, "tests", "fixtures", "qa-runs");
mkdirSync(outDir, { recursive: true });
const shot = join(outDir, `janus-qa-${Date.now()}.png`);

const browser = await chromium.launch({ headless: true, args: ["--enable-unsafe-webgpu"] });
const page = await browser.newPage();
await page.goto(URL.replace("autogen=1", "autogen=0"), { waitUntil: "domcontentloaded" });

// Wait for cached model + existing gallery or quick load
for (let i = 0; i < 120; i++) {
  const snap = await page.evaluate(() => window.__janusQa ?? null);
  if (snap?.galleryCount >= 1) break;
  if (snap?.phase === "start") {
    await page.locator('[data-testid="load-model"]').click();
  }
  if (snap?.phase === "ready" && snap.galleryCount === 0) {
    await page.locator('[data-testid="generate-btn"]').click({ timeout: 5000 }).catch(() => {});
  }
  await new Promise((r) => setTimeout(r, 5000));
}

const img = page.locator('[data-testid="gallery-image"]').first();
await img.waitFor({ state: "visible", timeout: 60000 });
await img.screenshot({ path: shot });
const dims = await img.evaluate((el) => ({ w: el.naturalWidth, h: el.naturalHeight }));
console.log(`Saved ${shot} (${dims.w}x${dims.h})`);
await browser.close();
