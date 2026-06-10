#!/usr/bin/env node
/**
 * After Vite build — GitHub Pages SPA fallback + skip Jekyll.
 */
import { spawnSync } from "node:child_process";
import { copyFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const index = join(dist, "index.html");

copyFileSync(index, join(dist, "404.html"));
writeFileSync(join(dist, ".nojekyll"), "\n");
spawnSync(process.execPath, ["scripts/normalize-social-html.mjs"], {
  cwd: join(dirname(fileURLToPath(import.meta.url)), ".."),
  stdio: "inherit",
});
console.log("Pages postbuild: wrote 404.html + .nojekyll + normalized social HTML");
