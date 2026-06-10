import {
  LOADING_HOLO_CYCLE_MS,
  LOADING_HOLO_STAGGER_MS,
  splitLoadingHoloSides,
} from "../loadingHoloGallery";

type HoloSideProps = {
  side: "left" | "right";
  urls: string[];
};

function HoloSide({ side, urls }: HoloSideProps) {
  return (
    <div
      className={`loading-holo-gallery__side loading-holo-gallery__side--${side}`}
      aria-hidden="true"
    >
      {urls.map((url, index) => {
        const delaySec = (index * LOADING_HOLO_STAGGER_MS) / 1000;
        const cycleSec = LOADING_HOLO_CYCLE_MS / 1000;
        const floatDelaySec = delaySec + 0.6;

        return (
          <div
            key={url}
            className="loading-holo-gallery__frame"
            style={{
              animationDuration: `${cycleSec}s, ${6 + index * 0.8}s`,
              animationDelay: `${delaySec}s, ${floatDelaySec}s`,
            }}
          >
            <img className="loading-holo-gallery__img" src={url} alt="" loading="eager" decoding="async" />
            <span className="loading-holo-gallery__glow" />
          </div>
        );
      })}
    </div>
  );
}

export function LoadingHoloGallery() {
  const { left, right } = splitLoadingHoloSides();

  return (
    <div className="loading-holo-gallery" data-testid="loading-holo-gallery">
      <HoloSide side="left" urls={left} />
      <HoloSide side="right" urls={right} />
    </div>
  );
}
