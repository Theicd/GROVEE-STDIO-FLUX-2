#!/usr/bin/env node
import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

execSync("tsc -b && vite build", {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, VITE_BASE: "/GROVEE-STDIO-FLUX-2/" },
});
execSync("node scripts/pages-postbuild.mjs", { cwd: root, stdio: "inherit" });
