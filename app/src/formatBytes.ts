/** Approximate Janus-Pro ONNX bundle size for progress UI when total is unknown. */
export const ESTIMATED_MODEL_BYTES = 2_516_582_400;

export function formatBytes(bytes: number): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  let v = bytes;
  let i = 0;
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024;
    i += 1;
  }
  return `${v < 10 && i > 0 ? v.toFixed(1) : Math.round(v)} ${units[i]}`;
}

export function formatSpeed(bytesPerSec: number): string {
  if (!Number.isFinite(bytesPerSec) || bytesPerSec < 512) return "—";
  return `${formatBytes(bytesPerSec)}/s`;
}