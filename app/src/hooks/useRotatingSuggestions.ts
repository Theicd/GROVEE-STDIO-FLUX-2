import { useCallback, useEffect, useRef, useState } from "react";

import type { Locale } from "../i18n/translations";
import {
  pickRandomSuggestions,
  resolveSuggestionById,
  suggestionEnterDurationMs,
  suggestionExitDurationMs,
  SUGGESTION_ROTATE_MS,
  type LandingSuggestion,
} from "../landingContent";

type ChipAnimPhase = "idle" | "exit" | "enter";

const CHIP_COUNT = 3;

export function useRotatingSuggestions(
  locale: Locale,
  initialSuggestions?: LandingSuggestion[],
) {
  const [suggestions, setSuggestions] = useState<LandingSuggestion[]>(
    () => initialSuggestions ?? pickRandomSuggestions(CHIP_COUNT, [], locale),
  );
  const [animPhase, setAnimPhase] = useState<ChipAnimPhase>("idle");
  const suggestionsRef = useRef(suggestions);
  const animPhaseRef = useRef(animPhase);
  const rotateTimerRef = useRef<number | null>(null);
  suggestionsRef.current = suggestions;
  animPhaseRef.current = animPhase;

  const rotateSuggestions = useCallback(() => {
    if (animPhaseRef.current !== "idle") return;
    const current = suggestionsRef.current;
    setAnimPhase("exit");
    window.setTimeout(() => {
      setSuggestions(pickRandomSuggestions(CHIP_COUNT, current.map((s) => s.id), locale));
      setAnimPhase("enter");
      window.setTimeout(() => setAnimPhase("idle"), suggestionEnterDurationMs(CHIP_COUNT));
    }, suggestionExitDurationMs(CHIP_COUNT));
  }, [locale]);

  useEffect(() => {
    setSuggestions((prev) =>
      prev.map((item) => resolveSuggestionById(item.id, locale) ?? item),
    );
  }, [locale]);

  useEffect(() => {
    const schedule = () => {
      rotateTimerRef.current = window.setTimeout(() => {
        rotateSuggestions();
        schedule();
      }, SUGGESTION_ROTATE_MS);
    };
    schedule();
    return () => {
      if (rotateTimerRef.current !== null) window.clearTimeout(rotateTimerRef.current);
    };
  }, [rotateSuggestions]);

  return { suggestions, animPhase };
}
