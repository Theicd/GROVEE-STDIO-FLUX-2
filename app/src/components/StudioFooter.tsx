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
    <footer
      className="studio-footer"
      data-testid="studio-footer"
      dir={dir}
      aria-label={t.studio.quickPrompts}
    >
      <div className="studio-footer__board">
        <div
          className="studio-footer__zones"
          data-phase={animPhase}
          aria-live="polite"
          aria-atomic="true"
        >
          {suggestions.map((item, index) => (
            <div key={item.id} className="studio-footer__zone" data-slot={index + 1}>
              <button
                type="button"
                className="studio-footer__suggestion"
                onClick={() => onPick(item.prompt)}
                title={item.prompt}
                disabled={disabled || animPhase !== "idle"}
              >
                <span className="studio-footer__suggestion-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span
                  className="studio-footer__suggestion-label"
                  dir={locale === "he" ? "rtl" : "ltr"}
                >
                  {item.label}
                </span>
              </button>
            </div>
          ))}
        </div>
        <span className="studio-footer__tag">{t.studio.quickPrompts}</span>
      </div>
    </footer>
  );
}
