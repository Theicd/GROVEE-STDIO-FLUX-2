#!/usr/bin/env node
/**
 * Build + push dist/ to the gh-pages branch (same flow as GROVEE-STDIO / SD 1.5).
 *
 * Requires: git, npm, and push access to origin or flux2 remote.
 * Optional: GH_TOKEN or GITHUB_TOKEN for non-interactive push.
 */
import { execSync } from "node:child_process";
import { cpSync, existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const remote =
  process.env.PAGES_REMOTE ||
  (execSync("git remote get-url flux2", { cwd: root, encoding: "utf8" }).trim() ||
    execSync("git remote get-url origin", { cwd: root, encoding: "utf8" }).trim());

const token = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
let pushUrl = remote;
if (token && pushUrl.startsWith("https://github.com/")) {
  pushUrl = pushUrl.replace("https://github.com/", `https://x-access-token:${token}@github.com/`);
}

console.log("Building for GitHub Pages…");
execSync("npm run build:pages", { cwd: root, stdio: "inherit" });

const dist = join(root, "dist");
const stage = mkdtempSync(join(tmpdir(), "grovee-flux2-pages-"));
try {
  cpSync(dist, stage, { recursive: true });
  execSync("git init", { cwd: stage, stdio: "inherit" });
  execSync("git add -A", { cwd: stage, stdio: "inherit" });
  execSync('git -c user.email=deploy@local -c user.name=deploy commit -m "Deploy GROVEE STDIO FLUX 2 UI"', {
    cwd: stage,
    stdio: "inherit",
  });
  execSync(`git push --force "${pushUrl}" HEAD:gh-pages`, { cwd: stage, stdio: "inherit" });
  console.log("\nDeployed → https://theicd.github.io/GROVEE-STDIO-FLUX-2/");
  console.log("Pages source must be: branch gh-pages, folder / (repo Settings → Pages).");
} finally {
  rmSync(stage, { recursive: true, force: true });
}
