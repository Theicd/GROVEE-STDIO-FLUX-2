#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const html = readFileSync(join(dirname(fileURLToPath(import.meta.url)), "..", "dist", "index.html"), "utf8");
const props = {};
for (const m of html.matchAll(/<meta\s+([^>]+)>/gi)) {
  const tag = m[1].replace(/\s+/g, " ");
  const p = tag.match(/property="([^"]+)"/);
  const n = tag.match(/name="([^"]+)"/);
  const c = tag.match(/content="([^"]*)"/);
  const key = p?.[1] || n?.[1];
  if (key && c) props[key] = c[1];
}
console.log(JSON.stringify(props, null, 2));
console.log("script in head:", /<head>[\s\S]*?<script/i.test(html));
console.log("multiline meta:", /<meta\s*\n/.test(html));
