import {
  LOADING_HOLO_RIGHT_OFFSET_SEC,
  LOADING_HOLO_SLOT_SEC,
  holoSideCycleSec,
  splitLoadingHoloSides,
} from "../loadingHoloGallery";

type HoloSideProps = {
  side: "left" | "right";
  urls: readonly string[];
  phaseOffsetSec: number;
};

function HoloSide({ side, urls, phaseOffsetSec }: HoloSideProps) {
  const cycleSec = holoSideCycleSec(urls.length);

  return (
    <div
      className={`loading-holo-gallery__side loading-holo-gallery__side--${side}`}
      aria-hidden="true"
    >
      <div className="loading-holo-gallery__slot">
        {urls.map((url, index) => {
          const delaySec = phaseOffsetSec + index * LOADING_HOLO_SLOT_SEC;
          return (
          <div
            key={url}
            className="loading-holo-gallery__frame"
            style={{
              animationDuration: `${cycleSec}s`,
              animationDelay: `${delaySec}s`,
              ["--holo-delay" as string]: `${delaySec}s`,
              ["--holo-duration" as string]: `${cycleSec}s`,
            }}
          >
            <img className="loading-holo-gallery__img" src={url} alt="" loading="eager" decoding="async" />
            <span className="loading-holo-gallery__glow" />
          </div>
          );
        })}
      </div>
    </div>
  );
}

export function LoadingHoloGallery() {
  const { left, right } = splitLoadingHoloSides();

  return (
    <div className="loading-holo-gallery" data-testid="loading-holo-gallery">
      <HoloSide side="left" urls={left} phaseOffsetSec={0} />
      <HoloSide side="right" urls={right} phaseOffsetSec={LOADING_HOLO_RIGHT_OFFSET_SEC} />
    </div>
  );
}
