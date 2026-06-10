import { APP_NAME } from "../appBranding";
import { useLocale } from "../i18n/LocaleContext";

type IntroTopBarProps = {
  webgpu: boolean;
};

export function IntroTopBar({ webgpu }: IntroTopBarProps) {
  const { locale, t, setLocale, dir } = useLocale();

  return (
    <header className="intro-topbar" data-testid="intro-topbar" dir={dir}>
      <div className="intro-topbar__brand">
        <span className="intro-topbar__mark" aria-hidden="true">
          {t.app.mark}
        </span>
        <span className="intro-topbar__name" dir="ltr">
          {APP_NAME}
        </span>
      </div>

      <div className="intro-topbar__badges" dir="ltr">
        <span className={`intro-topbar__pill ${webgpu ? "intro-topbar__pill--ok" : ""}`}>
          <span className="intro-topbar__pill-dot" aria-hidden="true" />
          {webgpu ? t.topBar.webgpuOn : t.topBar.webgpuOff}
        </span>
        <span className="intro-topbar__pill intro-topbar__pill--accent">{t.topBar.browserStudio}</span>
        <span className="intro-topbar__pill intro-topbar__pill--dim">SD 1.5</span>
      </div>

      <div className="intro-topbar__lang" role="group" aria-label="Language">
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
    </header>
  );
}
