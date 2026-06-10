#!/usr/bin/env node
/**
 * Static deploy smoke — run after npm run build.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
let fail = 0;

const check = (ok, name, detail = "") => {
  if (ok) console.log(`[PASS] ${name}${detail ? ` — ${detail}` : ""}`);
  else {
    console.error(`[FAIL] ${name}${detail ? ` — ${detail}` : ""}`);
    fail += 1;
  }
};

const indexPath = join(dist, "index.html");
check(existsSync(indexPath), "QA-PG-01 dist/index.html");

if (existsSync(indexPath)) {
  const html = readFileSync(indexPath, "utf8");
  check(html.includes('id="root"'), "QA-PG-02 root mount");
  const script = html.match(/src="([^"]+\/assets\/[^"]+\.js)"/);
  if (script) {
    const assetPath = script[1].replace(/^\//, "").replace(/^GROVEE-STDIO\//, "");
    check(existsSync(join(dist, assetPath)), "QA-PG-03 main bundle");
  } else {
    check(false, "QA-PG-03 main bundle", "script tag missing");
  }
}

check(existsSync(join(dist, "assets")), "QA-PG-04 assets folder");
check(existsSync(join(dist, ".nojekyll")), "QA-PG-05 .nojekyll for Pages");
check(existsSync(join(dist, "404.html")), "QA-PG-06 404.html SPA fallback");

const workerFiles = existsSync(join(dist, "assets"))
  ? readdirSync(join(dist, "assets")).filter((f) => f.startsWith("sd.worker-") && f.endsWith(".js"))
  : [];
check(workerFiles.length > 0, "QA-PG-07 sd.worker bundle in dist/assets", workerFiles[0] ?? "");

if (fail > 0) process.exit(1);
console.log("\nPages smoke OK.");
