#!/usr/bin/env node
/**
 * After Vite build — GitHub Pages SPA fallback + skip Jekyll.
 */
import { copyFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");
const index = join(dist, "index.html");

copyFileSync(index, join(dist, "404.html"));
writeFileSync(join(dist, ".nojekyll"), "\n");
console.log("Pages postbuild: wrote 404.html + .nojekyll");
