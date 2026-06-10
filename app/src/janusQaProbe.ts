export type JanusQaSnapshot = {
  phase: string;
  webgpu: boolean;
  deviceLabel: string;
  loadedBytes: number;
  totalBytes: number;
  progress: number;
  status: string;
  isGenerating: boolean;
  galleryCount: number;
  lastImageWidth: number;
  lastImageHeight: number;
  error: string | null;
};

declare global {
  interface Window {
    __janusQa?: JanusQaSnapshot;
  }
}

export function publishJanusQa(snapshot: JanusQaSnapshot) {
  if (typeof window === "undefined") return;
  window.__janusQa = snapshot;
}

export const QA_JANUS_MODE =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).has("qa");

export const QA_AUTOGEN =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("autogen") === "1";

import { QUALITY_DEMO_PROMPT } from "./generationConfig";

export const QA_PROMPT =
  typeof window !== "undefined"
    ? new URLSearchParams(window.location.search).get("prompt") ?? QUALITY_DEMO_PROMPT
    : QUALITY_DEMO_PROMPT;
