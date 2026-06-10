import { describe, expect, it } from "vitest";

import { formatGenProgressStatus } from "./genProgressLabel";
import { translations } from "./i18n/translations";

const phases = translations.he.status.genPhases;

describe("formatGenProgressStatus", () => {
  it("shows first-time GPU warmup with follow-up hint", () => {
    const { label, hint } = formatGenProgressStatus(phases, {
      phase: "gpu_prep",
      count: 14,
      total: 100,
      elapsedSec: 45,
      firstWarmup: true,
    });
    expect(label).toContain("טעינה ראשונית");
    expect(label).toContain("45s");
    expect(hint).toContain("30");
  });

  it("shows ~30s hint on first denoise", () => {
    const { label, hint } = formatGenProgressStatus(phases, {
      phase: "denoise",
      count: 1,
      total: 4,
      firstGeneration: true,
    });
    expect(label).toContain("ראשונה");
    expect(hint).toContain("30");
  });
});
