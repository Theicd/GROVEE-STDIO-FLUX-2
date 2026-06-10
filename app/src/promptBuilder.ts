import type { SdModelSettings } from "./modelSettings";

export const DEFAULT_NEGATIVE =
  "blurry, low quality, distorted, deformed, ugly, bad anatomy, extra limbs, watermark, text, logo, cartoon, sketch, flat colors";

export type StylePreset = "none" | "photoreal" | "portrait" | "product" | "landscape" | "anime";

const STYLE_POSITIVE: Record<Exclude<StylePreset, "none">, string> = {
  photoreal:
    "photorealistic, professional photography, natural lighting, high detail, sharp focus, realistic textures",
  portrait:
    "cinematic portrait, soft studio lighting, shallow depth of field, natural skin texture, expressive eyes",
  product:
    "commercial product photography, studio lighting, clean background, accurate shadows, crisp details",
  landscape:
    "landscape photography, golden hour light, atmospheric depth, vivid natural colors, wide composition",
  anime:
    "anime illustration, clean line art, vibrant colors, detailed background, studio ghibli inspired",
};

const STYLE_NEGATIVE: Record<Exclude<StylePreset, "none">, string> = {
  photoreal: "cartoon, illustration, painting, 3d render, plastic skin, oversaturated",
  portrait: "bad face, asymmetrical eyes, crossed eyes, extra teeth, plastic skin, deformed hands",
  product: "cluttered background, wrong shadows, floating object, messy composition",
  landscape: "flat lighting, dull colors, horizon tilt, oversharpened",
  anime: "3d render, realistic photo, western cartoon, photorealistic",
};

const SHORT_PROMPT_BOOST =
  "photorealistic, high detail, sharp focus, professional quality, natural lighting";

/** Warn when prompt is too vague for small autoregressive models. */
export function isPromptTooShort(prompt: string): boolean {
  const words = prompt.trim().split(/\s+/).filter(Boolean);
  return words.length < 8 || prompt.trim().length < 40;
}

export function buildFullPrompt(
  positive: string,
  negative: string,
  style: StylePreset = "photoreal",
): string {
  const trimmed = positive.trim();
  if (!trimmed) return "";

  const parts: string[] = [trimmed];

  if (style !== "none") {
    parts.push(STYLE_POSITIVE[style]);
  } else if (isPromptTooShort(trimmed)) {
    parts.push(SHORT_PROMPT_BOOST);
  }

  const negParts: string[] = [];
  if (negative.trim()) negParts.push(negative.trim());
  if (style !== "none") negParts.push(STYLE_NEGATIVE[style]);

  if (negParts.length > 0) {
    parts.push(`Avoid: ${negParts.join(", ")}`);
  }
  return parts.join(". ");
}

export type SdPromptPair = {
  prompt: string;
  negativePrompt: string;
};

/** SD 1.5 uses a native negative_prompt channel (not merged into positive). */
export function buildSdPrompt(
  positive: string,
  negative: string,
  style: StylePreset = "photoreal",
): SdPromptPair {
  const trimmed = positive.trim();
  if (!trimmed) return { prompt: "", negativePrompt: "" };

  const promptParts: string[] = [trimmed];
  if (style !== "none") {
    promptParts.push(STYLE_POSITIVE[style]);
  } else if (isPromptTooShort(trimmed)) {
    promptParts.push(SHORT_PROMPT_BOOST);
  }

  const negParts: string[] = [];
  if (negative.trim()) negParts.push(negative.trim());
  if (style !== "none") negParts.push(STYLE_NEGATIVE[style]);

  return {
    prompt: promptParts.join(", "),
    negativePrompt: negParts.join(", "),
  };
}

export function buildSdPromptFromSettings(
  positive: string,
  settings: SdModelSettings,
  negative: string,
): SdPromptPair {
  return buildSdPrompt(positive, negative, settings.style);
}
