const HEBREW_RE = /[\u0590-\u05FF]/;

export function containsHebrew(text: string): boolean {
  return HEBREW_RE.test(text);
}

/** Translate Hebrew text to English for SD; English passes through unchanged. */
export async function translateToEnglish(text: string): Promise<string> {
  const trimmed = text.trim();
  if (!trimmed || !containsHebrew(trimmed)) return trimmed;

  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(trimmed)}`;
    const response = await fetch(url);
    if (!response.ok) return trimmed;

    const data = (await response.json()) as [Array<[string] | null>];
    const translated = (data[0] ?? [])
      .map((item) => item?.[0] ?? "")
      .join("")
      .trim();

    return translated || trimmed;
  } catch {
    return trimmed;
  }
}

/** Resolve prompt + negative for the model (silent Hebrew → English). */
export async function resolvePromptsForModel(
  positive: string,
  negative: string,
): Promise<{ positive: string; negative: string }> {
  const [resolvedPositive, resolvedNegative] = await Promise.all([
    translateToEnglish(positive),
    translateToEnglish(negative),
  ]);
  return { positive: resolvedPositive, negative: resolvedNegative };
}
