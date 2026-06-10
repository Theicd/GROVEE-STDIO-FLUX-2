import { APP_DOWNLOAD_PREFIX, APP_NAME } from "./appBranding";
import type { GenerationItem } from "./types";

const SITE_URL = "https://theicd.github.io/GROVEE-STDIO/";

export type ShareChannel =
  | "native"
  | "whatsapp"
  | "telegram"
  | "twitter"
  | "facebook"
  | "linkedin"
  | "copyImage"
  | "copyPrompt"
  | "download";

async function imageBlob(item: GenerationItem): Promise<Blob> {
  const res = await fetch(item.imageUrl);
  return res.blob();
}

async function imageFile(item: GenerationItem): Promise<File> {
  const blob = await imageBlob(item);
  const type = blob.type || "image/png";
  return new File([blob], `${APP_DOWNLOAD_PREFIX}-${item.id}.png`, { type });
}

function shareText(item: GenerationItem): string {
  return `${item.prompt}\n\n— ${APP_NAME}\n${SITE_URL}`;
}

export async function shareViaNative(item: GenerationItem): Promise<boolean> {
  if (!navigator.share) return false;
  try {
    const file = await imageFile(item);
    const payload: ShareData = {
      title: APP_NAME,
      text: item.prompt,
      files: [file],
    };
    if (navigator.canShare && !navigator.canShare(payload)) {
      await navigator.share({ title: APP_NAME, text: shareText(item), url: SITE_URL });
      return true;
    }
    await navigator.share(payload);
    return true;
  } catch (err) {
    if (err instanceof DOMException && err.name === "AbortError") return true;
    return false;
  }
}

export function shareUrl(channel: Exclude<ShareChannel, "native" | "copyImage" | "copyPrompt" | "download">, item: GenerationItem): string {
  const text = shareText(item);
  const encoded = encodeURIComponent(text);
  const encodedUrl = encodeURIComponent(SITE_URL);
  switch (channel) {
    case "whatsapp":
      return `https://wa.me/?text=${encoded}`;
    case "telegram":
      return `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(item.prompt)}`;
    case "twitter":
      return `https://twitter.com/intent/tweet?text=${encoded}`;
    case "facebook":
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodeURIComponent(item.prompt)}`;
    case "linkedin":
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
    default:
      return SITE_URL;
  }
}

export async function copyPrompt(item: GenerationItem): Promise<void> {
  await navigator.clipboard.writeText(item.prompt);
}

export async function copyImage(item: GenerationItem): Promise<boolean> {
  try {
    const blob = await imageBlob(item);
    if (!navigator.clipboard?.write) return false;
    await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
    return true;
  } catch {
    return false;
  }
}

export function downloadImage(item: GenerationItem): void {
  const a = document.createElement("a");
  a.href = item.imageUrl;
  a.download = `${APP_DOWNLOAD_PREFIX}-${item.id}.png`;
  a.click();
}
