import { describe, expect, it } from "vitest";

import {
  PROMPT_SUGGESTION_POOL,
  pickRandomSuggestions,
  resolveSuggestionById,
  SUGGESTION_ROTATE_MS,
  suggestionEnterDurationMs,
  suggestionExitDurationMs,
} from "./landingContent";

describe("pickRandomSuggestions", () => {
  it("returns 3 unique suggestions from the pool", () => {
    const picked = pickRandomSuggestions(3);
    expect(picked).toHaveLength(3);
    const ids = picked.map((s) => s.id);
    expect(new Set(ids).size).toBe(3);
    picked.forEach((s) => {
      expect(PROMPT_SUGGESTION_POOL.some((p) => p.id === s.id)).toBe(true);
    });
  });

  it("excludes currently visible ids when rotating", () => {
    const current = pickRandomSuggestions(3);
    const next = pickRandomSuggestions(3, current.map((s) => s.id));
    expect(next).toHaveLength(3);
    const overlap = next.filter((s) => current.some((c) => c.id === s.id));
    expect(overlap).toHaveLength(0);
  });

  it("uses Hebrew labels and prompts when locale is he", () => {
    const picked = pickRandomSuggestions(1, [], "he")[0];
    expect(picked.label).toMatch(/[\u0590-\u05FF]/);
    expect(picked.prompt).toMatch(/[\u0590-\u05FF]/);
    const en = resolveSuggestionById(picked.id, "en");
    expect(en?.prompt).not.toBe(picked.prompt);
  });

  it("uses slower rotation and staggered animation timing", () => {
    expect(SUGGESTION_ROTATE_MS).toBeGreaterThanOrEqual(8000);
    expect(suggestionExitDurationMs(3)).toBeGreaterThan(500);
    expect(suggestionEnterDurationMs(3)).toBeGreaterThan(600);
  });
});
