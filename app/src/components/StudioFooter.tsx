import { useLocale } from "../i18n/LocaleContext";
import { useRotatingSuggestions } from "../hooks/useRotatingSuggestions";
import type { LandingSuggestion } from "../landingContent";

type StudioFooterProps = {
  initialSuggestions?: LandingSuggestion[];
  onPick: (prompt: string) => void;
  disabled?: boolean;
};

export function StudioFooter({ initialSuggestions, onPick, disabled = false }: StudioFooterProps) {
  const { t, dir, locale } = useLocale();
  const { suggestions, animPhase } = useRotatingSuggestions(locale, initialSuggestions);

  return (
    <footer className="studio-footer" data-testid="studio-footer" dir={dir}>
      <p className="studio-footer__hint">{t.studio.quickPrompts}</p>
      <div
        className="studio-footer__chips hal-studio-landing__chips"
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
            disabled={disabled || animPhase !== "idle"}
          >
            <span className="btn-hal__shine" aria-hidden="true" />
            <span className="hal-chip-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="hal-chip-label" dir={locale === "he" ? "rtl" : "ltr"}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </footer>
  );
}
