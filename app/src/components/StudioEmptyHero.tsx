import { useLocale } from "../i18n/LocaleContext";

type StudioEmptyHeroProps = {
  headline: string;
};

export function StudioEmptyHero({ headline }: StudioEmptyHeroProps) {
  const { dir } = useLocale();

  return (
    <div className="studio-empty-hero" dir={dir}>
      <h1 className="studio-empty-hero__headline">{headline}</h1>
    </div>
  );
}
