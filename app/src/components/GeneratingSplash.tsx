import { useLocale } from "../i18n/LocaleContext";

type GeneratingSplashProps = {
  progress: number;
  tokenCount: number;
  tokenTotal: number;
  label?: "tokens" | "steps";
};

export function GeneratingSplash({
  progress,
  tokenCount,
  tokenTotal,
  label = "tokens",
}: GeneratingSplashProps) {
  const { t, dir } = useLocale();
  const pct = Math.round(progress * 100);
  const unitLabel = label === "steps" ? t.generating.steps : label;

  return (
    <div className="hal-generating" aria-live="polite" aria-busy="true" dir={dir}>
      <p className="hal-generating__title">
        {t.generating.title}
        <span className="hal-generating__dots">····</span>
      </p>
      <div className="hal-generating__bar">
        <div className="hal-generating__fill" style={{ width: `${pct}%` }} />
      </div>
      <p className="hal-generating__meta" dir="ltr">
        {tokenTotal > 0 ? `${tokenCount} / ${tokenTotal} ${unitLabel} · ` : ""}
        {pct}%
      </p>
    </div>
  );
}
