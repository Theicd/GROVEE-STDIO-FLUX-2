import { useLocale } from "../i18n/LocaleContext";
import { MODELS } from "../modelRegistry";

const MARQUEE_SEP = "  ◆  ";

export function IntroMarqueeFooter() {
  const { t, dir } = useLocale();
  const model = MODELS.sd15;
  const modelLine = `${model.label} · ${t.intro.modelMeta}`;
  const segments = [t.intro.firstLoadNote, modelLine];
  const line = `${segments.join(MARQUEE_SEP)}${MARQUEE_SEP}`;

  return (
    <footer
      className="intro-marquee-footer"
      data-testid="intro-marquee-footer"
      dir={dir}
      aria-label={`${t.intro.firstLoadNote}. ${modelLine}`}
    >
      <div className="intro-marquee-footer__edge intro-marquee-footer__edge--start" aria-hidden="true" />
      <div className="intro-marquee-footer__viewport">
        <div className={`intro-marquee-footer__track${dir === "rtl" ? " intro-marquee-footer__track--rtl" : ""}`}>
          <span className="intro-marquee-footer__text" data-testid="model-sd15">
            {line}
          </span>
          <span className="intro-marquee-footer__text" aria-hidden="true">
            {line}
          </span>
        </div>
      </div>
      <div className="intro-marquee-footer__edge intro-marquee-footer__edge--end" aria-hidden="true" />
    </footer>
  );
}
