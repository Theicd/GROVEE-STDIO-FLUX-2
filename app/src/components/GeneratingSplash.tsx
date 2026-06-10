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
  const pct = Math.round(progress * 100);

  return (
    <div className="hal-generating" aria-live="polite" aria-busy="true" dir="rtl">
      <p className="hal-generating__title" dir="ltr">
        RENDERING
        <span className="hal-generating__dots">····</span>
      </p>
      <div className="hal-generating__bar">
        <div className="hal-generating__fill" style={{ width: `${pct}%` }} />
      </div>
      <p className="hal-generating__meta" dir="ltr">
        {tokenTotal > 0 ? `${tokenCount} / ${tokenTotal} ${label} · ` : ""}
        {pct}%
      </p>
    </div>
  );
}
