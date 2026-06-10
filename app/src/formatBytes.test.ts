import { describe, expect, it } from "vitest";

import { downloadProgressPercent, formatDownloadPercent } from "./formatBytes";

describe("download progress display", () => {
  const total = 13_100_000_000;

  it("computes sub-1% progress for early MB downloads on multi-GB total", () => {
    const loaded = 5.4 * 1024 * 1024;
    const pct = downloadProgressPercent(loaded, total);
    expect(pct).toBeGreaterThan(0.03);
    expect(pct).toBeLessThan(1);
    expect(formatDownloadPercent(pct)).toBe("0.04");
  });

  it("formats whole percents at 1% and above", () => {
    expect(formatDownloadPercent(0)).toBe("0");
    expect(formatDownloadPercent(0.05)).toBe("0.05");
    expect(formatDownloadPercent(0.15)).toBe("0.1");
    expect(formatDownloadPercent(1.2)).toBe("1");
    expect(formatDownloadPercent(42.6)).toBe("43");
  });
});
