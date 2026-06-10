import { useEffect } from "react";

import { createPortal } from "react-dom";



import {

  copyImage,

  copyPrompt,

  downloadImage,

  shareUrl,

  shareViaNative,

  type ShareChannel,

} from "../galleryShare";

import { useLocale } from "../i18n/LocaleContext";

import { DEFAULT_MODEL_ID, getModel } from "../modelRegistry";

import type { GenerationItem } from "../types";



type GalleryLightboxProps = {

  item: GenerationItem;

  onClose: () => void;

};



const SOCIAL_CHANNELS: ShareChannel[] = [

  "native",

  "whatsapp",

  "telegram",

  "twitter",

  "facebook",

  "linkedin",

];



const TOOL_CHANNELS: ShareChannel[] = ["copyImage", "copyPrompt", "download"];



export function GalleryLightbox({ item, onClose }: GalleryLightboxProps) {

  const { t } = useLocale();

  const model = getModel(item.modelId ?? DEFAULT_MODEL_ID);



  useEffect(() => {

    const onKey = (e: KeyboardEvent) => {

      if (e.key === "Escape") onClose();

    };

    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {

      window.removeEventListener("keydown", onKey);

      document.body.style.overflow = prevOverflow;

    };

  }, [onClose]);



  const labelFor = (channel: ShareChannel): string => {

    const map: Record<ShareChannel, string> = {

      native: t.gallery.shareNative,

      whatsapp: "WhatsApp",

      telegram: "Telegram",

      twitter: "X",

      facebook: "Facebook",

      linkedin: "LinkedIn",

      copyImage: t.gallery.shareCopyImage,

      copyPrompt: t.gallery.copy,

      download: t.gallery.save,

    };

    return map[channel];

  };



  const handleShare = async (channel: ShareChannel) => {

    if (channel === "native") {

      const ok = await shareViaNative(item);

      if (!ok) downloadImage(item);

      return;

    }

    if (channel === "copyImage") {

      const ok = await copyImage(item);

      if (!ok) downloadImage(item);

      return;

    }

    if (channel === "copyPrompt") {

      await copyPrompt(item);

      return;

    }

    if (channel === "download") {

      downloadImage(item);

      return;

    }

    window.open(shareUrl(channel, item), "_blank", "noopener,noreferrer,width=600,height=520");

  };



  return createPortal(

    <div

      className="gallery-lightbox"

      role="dialog"

      aria-modal="true"

      aria-label={t.gallery.lightboxTitle}

    >

      <button

        type="button"

        className="gallery-lightbox__backdrop"

        aria-label={t.gallery.close}

        onClick={onClose}

      />

      <article className="gallery-lightbox__card">

        <div

          className="gallery-lightbox__visual"

          style={{

            aspectRatio: `${item.width} / ${item.height}`,

            ["--lb-ar" as string]: String(item.width / item.height),

          }}

        >

          <img

            className="gallery-lightbox__image"

            src={item.imageUrl}

            alt={item.prompt}

            data-testid="gallery-lightbox-image"

          />



          <button

            type="button"

            className="gallery-lightbox__close"

            onClick={onClose}

            aria-label={t.gallery.close}

          >

            ×

          </button>



          <span className="gallery-lightbox__meta" dir="ltr">

            {model.shortLabel} · {item.width}×{item.height} · {(item.durationMs / 1000).toFixed(1)}s

          </span>



          <div className="gallery-lightbox__toolbar">

            <p className="gallery-lightbox__prompt" dir="auto">

              {item.prompt}

            </p>



            <nav className="gallery-lightbox__actions" aria-label={t.gallery.shareTitle}>

              <div className="gallery-lightbox__row gallery-lightbox__row--social">

                {SOCIAL_CHANNELS.map((channel, index) => (

                  <span key={channel} className="gallery-lightbox__action-wrap">

                    {index > 0 ? (

                      <span className="gallery-lightbox__sep" aria-hidden="true">

                        ·

                      </span>

                    ) : null}

                    <button

                      type="button"

                      className="gallery-lightbox__action"

                      onClick={() => void handleShare(channel)}

                    >

                      {labelFor(channel)}

                    </button>

                  </span>

                ))}

              </div>



              <div className="gallery-lightbox__row gallery-lightbox__row--tools">

                {TOOL_CHANNELS.map((channel, index) => (

                  <span key={channel} className="gallery-lightbox__action-wrap">

                    {index > 0 ? (

                      <span className="gallery-lightbox__sep" aria-hidden="true">

                        ·

                      </span>

                    ) : null}

                    <button

                      type="button"

                      className={`gallery-lightbox__action${channel === "download" ? " gallery-lightbox__action--accent" : ""}`}

                      onClick={() => void handleShare(channel)}

                    >

                      {labelFor(channel)}

                    </button>

                  </span>

                ))}

              </div>

            </nav>

          </div>

        </div>

      </article>

    </div>,

    document.body,

  );

}

