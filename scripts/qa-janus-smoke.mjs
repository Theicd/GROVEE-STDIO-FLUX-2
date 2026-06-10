#!/usr/bin/env node
/**
 * Smoke test: dev build artifacts + promptBuilder logic via vitest.
 * Full model QA: npm run qa:janus:premium (when implemented).
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
let fail = 0;

const check = (ok, name, detail = "") => {
  if (ok) console.log(`[PASS] ${name}${detail ? ` — ${detail}` : ""}`);
  else {
    console.error(`[FAIL] ${name}${detail ? ` — ${detail}` : ""}`);
    fail += 1;
  }
};

check(existsSync(path.join(root, "dist", "index.html")), "dist/index.html exists");
check(existsSync(path.join(root, "app", "src", "janus.worker.ts")), "janus.worker.ts exists");

const test = spawnSync("npm", ["test"], { cwd: root, shell: true, encoding: "utf8" });
check(test.status === 0, "vitest unit tests", test.stderr?.slice(0, 200));

if (fail > 0) process.exit(1);
console.log("\nSmoke OK. For live model: open npm run dev → Load model → Generate.");
