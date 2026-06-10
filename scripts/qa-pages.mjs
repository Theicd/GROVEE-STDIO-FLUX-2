#!/usr/bin/env node
/**
 * Static deploy smoke — run after npm run build.
 */
import { existsSync, readFileSync } from "node:fs";
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
  const script = html.match(/src="(\.\/assets\/[^"]+\.js)"/);
  if (script) {
    check(existsSync(join(dist, script[1].replace(/^\.\//, ""))), "QA-PG-03 main bundle");
  } else {
    check(false, "QA-PG-03 main bundle", "script tag missing");
  }
}

check(existsSync(join(dist, "assets")), "QA-PG-04 assets folder");

if (fail > 0) process.exit(1);
console.log("\nPages smoke OK.");
