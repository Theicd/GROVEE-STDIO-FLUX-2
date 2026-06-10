import { APP_NAME } from "../appBranding";
import { useLocale } from "../i18n/LocaleContext";
import { MODELS } from "../modelRegistry";

import { LangToggle } from "./LangToggle";

type StudioTopBarProps = {
  deviceLabel: string;
};

export function StudioTopBar({ deviceLabel }: StudioTopBarProps) {
  const { t, dir } = useLocale();
  const model = MODELS.flux;
  const deviceLive = /webgpu/i.test(deviceLabel);

  return (
    <header className="intro-topbar studio-topbar" data-testid="studio-topbar" dir={dir}>
      <div className="studio-topbar__brand" dir="ltr">
        <span className="studio-topbar__mark" aria-hidden="true">
          {t.app.mark}
        </span>
        <span className="studio-topbar__name">{APP_NAME}</span>
        <span className="studio-topbar__sep" aria-hidden="true">
          //
        </span>
        <span className="studio-topbar__tagline">{t.app.tagline}</span>
      </div>

      <div className="studio-topbar__stats" dir="ltr" aria-label="Studio status">
        <span className="studio-topbar__stat studio-topbar__stat--live">
          <span className="studio-topbar__dot" aria-hidden="true" />
          {t.studio.memoryOk} <strong>OK</strong>
        </span>
        <span className="studio-topbar__stat studio-topbar__stat--accent">
          {t.studio.model} <strong>{model.shortLabel}</strong>
        </span>
        <span
          className={`studio-topbar__stat ${deviceLive ? "studio-topbar__stat--live" : "studio-topbar__stat--dim"}`}
        >
          {deviceLive ? <span className="studio-topbar__dot" aria-hidden="true" /> : null}
          {deviceLabel || "READY"}
        </span>
      </div>

      <LangToggle variant="premium" />
    </header>
  );
}
