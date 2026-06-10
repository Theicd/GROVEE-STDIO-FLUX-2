import type { TranslationTree } from "./i18n/translations";

type GenProgressMessage = {
  phase?: string;
  count: number;
  total: number;
  elapsedSec?: number;
  firstWarmup?: boolean;
  firstGeneration?: boolean;
};

export function formatGenProgressStatus(
  phases: TranslationTree["status"]["genPhases"],
  msg: GenProgressMessage,
): { label: string; hint: string } {
  if (!msg.phase || !(msg.phase in phases)) {
    return { label: "", hint: "" };
  }

  const p = phases[msg.phase as keyof typeof phases];
  let label = p;
  let hint = "";

  if (msg.phase === "gpu_prep" && msg.firstWarmup) {
    label = phases.gpu_prep_first;
    hint = phases.gpu_prep_hint;
  } else if (msg.phase === "encode" && msg.firstGeneration) {
    label = phases.encode_first;
    hint = phases.denoise_eta;
  } else if (msg.phase === "denoise") {
    label = msg.firstGeneration ? phases.denoise_first : phases.denoise;
    if (msg.total > 0 && msg.total <= 16) {
      label = `${label} ${msg.count}/${msg.total}`;
    }
    if (msg.firstGeneration && (!msg.elapsedSec || msg.elapsedSec < 8)) {
      hint = phases.denoise_eta;
    }
  } else if (msg.phase === "gpu_prep") {
    label = phases.gpu_prep;
  }

  if (msg.elapsedSec && msg.elapsedSec >= 3) {
    label = `${label} · ${msg.elapsedSec}s`;
  }

  return { label, hint };
}
