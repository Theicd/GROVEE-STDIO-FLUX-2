#!/usr/bin/env node
/**
 * Post-build: crawler-friendly HTML for link previews (WhatsApp, Telegram, Facebook).
 * - Move Vite module scripts out of <head> to end of <body>
 * - Collapse multiline <meta> tags to one line
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");

function collapseMetaTags(html) {
  return html.replace(/<meta[\s\S]*?>/gi, (tag) => tag.replace(/\s+/g, " ").trim());
}

function normalize(fileName) {
  const path = join(dist, fileName);
  let html = readFileSync(path, "utf8");
  html = collapseMetaTags(html);

  const scripts = [];
  html = html.replace(/<script type="module"[^>]*><\/script>\s*/g, (match) => {
    scripts.push(match.trim());
    return "";
  });
  html = html.replace(/<link rel="modulepreload"[^>]*>\s*/g, "");

  if (scripts.length > 0) {
    html = html.replace("</body>", `    ${scripts.join("\n    ")}\n  </body>`);
  }

  writeFileSync(path, html);
  console.log(`Normalized social HTML: ${fileName}`);
}

for (const file of ["index.html", "404.html"]) {
  normalize(file);
}
