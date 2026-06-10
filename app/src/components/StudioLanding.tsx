import { useCallback, useEffect, useRef, useState } from "react";

import { useLocale } from "../i18n/LocaleContext";
import {
  pickRandomSuggestions,
  suggestionEnterDurationMs,
  suggestionExitDurationMs,
  SUGGESTION_ROTATE_MS,
  type LandingSuggestion,
} from "../landingContent";

type StudioLandingProps = {
  headline: string;
  initialSuggestions?: LandingSuggestion[];
  onPick: (prompt: string) => void;
};

type ChipAnimPhase = "idle" | "exit" | "enter";

const CHIP_COUNT = 3;

export function StudioLanding({ headline, initialSuggestions, onPick }: StudioLandingProps) {
  const { t, dir } = useLocale();
  const [suggestions, setSuggestions] = useState<LandingSuggestion[]>(
    () => initialSuggestions ?? pickRandomSuggestions(CHIP_COUNT),
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
      setSuggestions(pickRandomSuggestions(CHIP_COUNT, current.map((s) => s.id)));
      setAnimPhase("enter");

      window.setTimeout(() => {
        setAnimPhase("idle");
      }, suggestionEnterDurationMs(CHIP_COUNT));
    }, suggestionExitDurationMs(CHIP_COUNT));
  }, []);

  useEffect(() => {
    const schedule = () => {
      rotateTimerRef.current = window.setTimeout(() => {
        rotateSuggestions();
        schedule();
      }, SUGGESTION_ROTATE_MS);
    };

    schedule();
    return () => {
      if (rotateTimerRef.current !== null) {
        window.clearTimeout(rotateTimerRef.current);
      }
    };
  }, [rotateSuggestions]);

  return (
    <div className="hal-studio-landing" dir={dir}>
      <h1 className="hal-studio-landing__headline">{headline}</h1>
      <p className="hal-studio-landing__hint">{t.studio.quickPrompts}</p>
      <div
        className="hal-studio-landing__chips"
        data-phase={animPhase}
        aria-live="polite"
        aria-atomic="true"
      >
        {suggestions.map((item) => (
          <button
            key={item.id}
            type="button"
            className="btn-hal btn-hal--chip hal-chip"
            onClick={() => onPick(item.prompt)}
            title={item.prompt}
            disabled={animPhase !== "idle"}
          >
            <span className="btn-hal__shine" aria-hidden="true" />
            <span className="hal-chip-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="hal-chip-label" dir="ltr">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
