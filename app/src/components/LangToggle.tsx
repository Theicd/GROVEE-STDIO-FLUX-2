import { useLocale } from "../i18n/LocaleContext";

/** Compact HE / EN toggle for the studio header. */
export function LangToggle() {
  const { locale, t, setLocale } = useLocale();

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
