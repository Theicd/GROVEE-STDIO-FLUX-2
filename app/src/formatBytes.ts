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

/** Byte ratio → percent (0–100), for download progress UI. */
export function downloadProgressPercent(loaded: number, total: number): number {
  if (!Number.isFinite(loaded) || !Number.isFinite(total) || total <= 0) return 0;
  return Math.min(100, Math.max(0, (loaded / total) * 100));
}

/** Show fractional percent below 1% (two decimals when total is multi-GB). */
export function formatDownloadPercent(percent: number): string {
  if (!Number.isFinite(percent) || percent <= 0) return "0";
  if (percent < 0.1) return percent.toFixed(2);
  if (percent < 1) return percent.toFixed(1);
  return String(Math.round(percent));
}