import { APP_NAME } from "../appBranding";
import { useLocale } from "../i18n/LocaleContext";
import { MODELS } from "../modelRegistry";
import { LangToggle } from "./LangToggle";

type IntroTopBarProps = {
  webgpu: boolean;
};

export function IntroTopBar({ webgpu }: IntroTopBarProps) {
  const { t, dir } = useLocale();

  return (
    <header className="intro-topbar" data-testid="intro-topbar" dir={dir}>
      <div className="intro-topbar__zone intro-topbar__zone--brand">
        <div className="intro-topbar__brand">
          <span className="intro-topbar__mark" aria-hidden="true">
            <span className="intro-topbar__mark-core">{t.app.mark}</span>
          </span>
          <span className="intro-topbar__name" dir="ltr">
            {APP_NAME}
          </span>
        </div>
      </div>

      <div className="intro-topbar__zone intro-topbar__zone--hud">
        <div className="intro-topbar__hud" dir="ltr" aria-label="System status">
          <span className="intro-topbar__hud-cap intro-topbar__hud-cap--start" aria-hidden="true" />
          <div className={`intro-topbar__node ${webgpu ? "intro-topbar__node--live" : ""}`}>
            <span className="intro-topbar__node-dot" aria-hidden="true" />
            <span className="intro-topbar__node-label">
              {webgpu ? t.topBar.webgpuOn : t.topBar.webgpuOff}
            </span>
          </div>
          <span className="intro-topbar__hud-sep" aria-hidden="true" />
          <div className="intro-topbar__node intro-topbar__node--accent">
            <span className="intro-topbar__node-label">{t.topBar.browserStudio}</span>
          </div>
          <span className="intro-topbar__hud-sep" aria-hidden="true" />
          <div className="intro-topbar__node intro-topbar__node--dim">
            <span className="intro-topbar__node-label">{MODELS.flux.shortLabel}</span>
          </div>
          <span className="intro-topbar__hud-cap intro-topbar__hud-cap--end" aria-hidden="true" />
        </div>
      </div>

      <div className="intro-topbar__zone intro-topbar__zone--lang">
        <LangToggle variant="premium" />
      </div>
    </header>
  );
}
