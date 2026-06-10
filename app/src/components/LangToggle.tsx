import { useLocale } from "../i18n/LocaleContext";

type LangToggleProps = {
  variant?: "compact" | "premium";
};

/** HE / EN toggle — compact for legacy slots, premium matches intro HUD style. */
export function LangToggle({ variant = "compact" }: LangToggleProps) {
  const { locale, t, setLocale } = useLocale();

  if (variant === "premium") {
    return (
      <div
        className="intro-topbar__lang"
        data-active={locale}
        role="group"
        aria-label="Language"
      >
        <span className="intro-topbar__lang-thumb" aria-hidden="true" />
        <button
          type="button"
          className={`intro-topbar__lang-btn ${locale === "he" ? "active" : ""}`}
          onClick={() => setLocale("he")}
          aria-pressed={locale === "he"}
        >
          {t.topBar.langHe}
        </button>
        <button
          type="button"
          className={`intro-topbar__lang-btn ${locale === "en" ? "active" : ""}`}
          onClick={() => setLocale("en")}
          aria-pressed={locale === "en"}
        >
          {t.topBar.langEn}
        </button>
      </div>
    );
  }

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-toggle__btn ${locale === "he" ? "active" : ""}`}
        onClick={() => setLocale("he")}
        aria-pressed={locale === "he"}
      >
        {t.topBar.langHe}
      </button>
      <button
        type="button"
        className={`lang-toggle__btn ${locale === "en" ? "active" : ""}`}
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
      >
        {t.topBar.langEn}
      </button>
    </div>
  );
}
