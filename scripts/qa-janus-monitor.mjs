#!/usr/bin/env node
/** Poll __janusQa until ready + image or timeout. Logs every 10s. */
import { chromium } from "playwright";

const ORIGIN = (process.env.QA_JANUS_URL ?? "http://127.0.0.1:5180").replace(/\/$/, "");
const URL = `${ORIGIN}/?qa=1&autogen=1`;
const LOAD_MS = Number(process.env.QA_LOAD_TIMEOUT_MS ?? 45 * 60 * 1000);
const GEN_MS = Number(process.env.QA_GEN_TIMEOUT_MS ?? 15 * 60 * 1000);
const TOTAL = LOAD_MS + GEN_MS;

const browser = await chromium.launch({
  headless: process.env.QA_HEADLESS === "1",
  args: ["--enable-unsafe-webgpu", "--disable-dev-shm-usage"],
});
const page = await browser.newPage();
await page.goto(URL, { waitUntil: "domcontentloaded" });

const start = Date.now();
let last = "";
while (Date.now() - start < TOTAL) {
  const snap = await page.evaluate(() => window.__janusQa ?? null);
  const line = snap
    ? `${snap.phase} loaded=${snap.loadedBytes} total=${snap.totalBytes} gen=${snap.isGenerating} gallery=${snap.galleryCount} err=${snap.error ?? ""} status=${snap.status}`
    : "no snap";
  if (line !== last) {
    console.log(`[${Math.round((Date.now() - start) / 1000)}s] ${line}`);
    last = line;
  }
  if (snap?.error) break;
  if (snap?.phase === "ready" && snap.galleryCount >= 1 && !snap.isGenerating) {
    console.log("DONE");
    break;
  }
  await new Promise((r) => setTimeout(r, 10000));
}

const final = await page.evaluate(() => window.__janusQa ?? null);
console.log("FINAL:", JSON.stringify(final, null, 2));
await browser.close();
process.exit(final?.galleryCount >= 1 ? 0 : 1);
