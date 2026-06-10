#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const transcript =
  process.argv[2] ||
  "C:/Users/Avatar001/.cursor/projects/c-BRAIN-jarvis-main-continue-models2-ollama-activity-channel/agent-transcripts/5ec1d3a6-ea33-42a5-9973-73449b89c1af/5ec1d3a6-ea33-42a5-9973-73449b89c1af.jsonl";

const raw = readFileSync(transcript, "utf8");
const match = raw.match(/data:image\/jpeg;base64,([A-Za-z0-9+/=]+)/);
if (!match) {
  console.error("JPEG base64 not found in transcript");
  process.exit(1);
}

const out = join(root, "app", "public", "og-image.jpg");
writeFileSync(out, Buffer.from(match[1], "base64"));
console.log(`Wrote ${out} (${match[1].length} b64 chars)`);
