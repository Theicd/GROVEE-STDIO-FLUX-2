import type { Locale } from "./i18n/translations";

export type LandingSuggestion = {
  id: string;
  icon: string;
  label: string;
  prompt: string;
};

type SuggestionSeed = {
  id: string;
  icon: string;
  labelEn: string;
  promptEn: string;
  labelHe: string;
  promptHe: string;
};

export const LANDING_HEADLINES = [
  "What will you create today?",
  "Describe your vision.",
  "Turn words into images.",
  "What scene do you imagine?",
  "Let's bring your idea to life.",
  "Create something unique.",
  "Paint with prompts.",
] as const;

const PROMPT_SUGGESTION_SEEDS: SuggestionSeed[] = [
  {
    id: "giant-moon-ocean",
    icon: "🌕",
    labelEn: "Giant moon",
    promptEn: "A giant moon above the ocean",
    labelHe: "ירח ענק",
    promptHe: "ירח ענק מעל האוקיינוס",
  },
  {
    id: "lighthouse-sunset",
    icon: "🗼",
    labelEn: "Lighthouse sunset",
    promptEn: "A lonely lighthouse at sunset",
    labelHe: "מגדלור בשקיעה",
    promptHe: "מגדלור בודד בשקיעה",
  },
  {
    id: "castle-floating-island",
    icon: "🏰",
    labelEn: "Floating island castle",
    promptEn: "A castle on a floating island",
    labelHe: "טירה על אי",
    promptHe: "טירה על אי מרחף",
  },
  {
    id: "giant-whale-sky",
    icon: "🐋",
    labelEn: "Sky whale",
    promptEn: "A giant whale in the sky",
    labelHe: "לוויתן בשמיים",
    promptHe: "לוויתן ענק בשמיים",
  },
  {
    id: "train-snowy-mountains",
    icon: "🚂",
    labelEn: "Snowy mountain train",
    promptEn: "A train crossing snowy mountains",
    labelHe: "רכבת בהרים",
    promptHe: "רכבת חוצה הרים מושלגים",
  },
  {
    id: "glowing-city-night",
    icon: "🌃",
    labelEn: "Glowing city",
    promptEn: "A glowing city at night",
    labelHe: "עיר זוהרת",
    promptHe: "עיר זוהרת בלילה",
  },
  {
    id: "spaceship-earth",
    icon: "🚀",
    labelEn: "Spaceship over Earth",
    promptEn: "A spaceship above Earth",
    labelHe: "חללית מעל כדור הארץ",
    promptHe: "חללית מעל כדור הארץ",
  },
  {
    id: "dragon-castle",
    icon: "🐉",
    labelEn: "Dragon over castle",
    promptEn: "A dragon flying over a castle",
    labelHe: "דרקון מעל טירה",
    promptHe: "דרקון עף מעל טירה",
  },
  {
    id: "futuristic-city-sunrise",
    icon: "🌅",
    labelEn: "Futuristic sunrise",
    promptEn: "A futuristic city at sunrise",
    labelHe: "עיר עתידנית",
    promptHe: "עיר עתידנית בזריחה",
  },
  {
    id: "jungle-waterfall",
    icon: "💧",
    labelEn: "Jungle waterfall",
    promptEn: "A waterfall in a hidden jungle",
    labelHe: "מפל בג'ונגל",
    promptHe: "מפל בג'ונגל נסתר",
  },
  {
    id: "giant-tree-clouds",
    icon: "🌳",
    labelEn: "Tree in clouds",
    promptEn: "A giant tree in the clouds",
    labelHe: "עץ בעננים",
    promptHe: "עץ ענק בעננים",
  },
  {
    id: "storm-ship",
    icon: "⛵",
    labelEn: "Storm ship",
    promptEn: "A sailing ship in a storm",
    labelHe: "ספינה בסערה",
    promptHe: "ספינת מפרש בסערה",
  },
  {
    id: "forest-portal",
    icon: "🌀",
    labelEn: "Forest portal",
    promptEn: "A mysterious portal in the forest",
    labelHe: "פורטל ביער",
    promptHe: "פורטל מסתורי ביער",
  },
  {
    id: "desert-robot",
    icon: "🤖",
    labelEn: "Desert robot",
    promptEn: "A robot walking in the desert",
    labelHe: "רובוט במדבר",
    promptHe: "רובוט הולך במדבר",
  },
  {
    id: "neon-street-rain",
    icon: "🌆",
    labelEn: "Neon after rain",
    promptEn: "A neon street after rain",
    labelHe: "רחוב ניאון",
    promptHe: "רחוב ניאון אחרי גשם",
  },
  {
    id: "cliff-house",
    icon: "🏠",
    labelEn: "Cliff house",
    promptEn: "A house on a mountain cliff",
    labelHe: "בית על צוק",
    promptHe: "בית על צוק הר",
  },
  {
    id: "crystal-cave",
    icon: "💎",
    labelEn: "Crystal cave",
    promptEn: "A crystal cave underground",
    labelHe: "מערת קריסטלים",
    promptHe: "מערת קריסטלים מתחת לאדמה",
  },
  {
    id: "giant-planet-sky",
    icon: "🪐",
    labelEn: "Giant planet",
    promptEn: "A giant planet in the sky",
    labelHe: "כוכב ענק",
    promptHe: "כוכב לכת ענק בשמיים",
  },
  {
    id: "peaceful-lake-dawn",
    icon: "🏞️",
    labelEn: "Lake at dawn",
    promptEn: "A peaceful lake at dawn",
    labelHe: "אגם בשחר",
    promptHe: "אגם שקט בשחר",
  },
  {
    id: "flying-island-clouds",
    icon: "☁️",
    labelEn: "Flying island",
    promptEn: "A flying island above the clouds",
    labelHe: "אי מעופף",
    promptHe: "אי מעופף מעל העננים",
  },
];

/** English pool (legacy export for tests). */
export const PROMPT_SUGGESTION_POOL: LandingSuggestion[] = PROMPT_SUGGESTION_SEEDS.map((s) =>
  toSuggestion(s, "en"),
);

export function toSuggestion(seed: SuggestionSeed, locale: Locale): LandingSuggestion {
  if (locale === "he") {
    return { id: seed.id, icon: seed.icon, label: seed.labelHe, prompt: seed.promptHe };
  }
  return { id: seed.id, icon: seed.icon, label: seed.labelEn, prompt: seed.promptEn };
}

export function getSuggestionPool(locale: Locale = "en"): LandingSuggestion[] {
  return PROMPT_SUGGESTION_SEEDS.map((s) => toSuggestion(s, locale));
}

export function resolveSuggestionById(id: string, locale: Locale): LandingSuggestion | undefined {
  const seed = PROMPT_SUGGESTION_SEEDS.find((s) => s.id === id);
  return seed ? toSuggestion(seed, locale) : undefined;
}

export const SUGGESTION_ROTATE_MS = 11_000;
export const SUGGESTION_CHIP_STAGGER_MS = 90;
export const SUGGESTION_EXIT_ANIM_MS = 520;
export const SUGGESTION_ENTER_ANIM_MS = 620;

/** Total time for all chips to finish exit (incl. stagger). */
export function suggestionExitDurationMs(chipCount = 3): number {
  return SUGGESTION_EXIT_ANIM_MS + SUGGESTION_CHIP_STAGGER_MS * Math.max(0, chipCount - 1);
}

/** Total time for all chips to finish enter (incl. stagger). */
export function suggestionEnterDurationMs(chipCount = 3): number {
  return SUGGESTION_ENTER_ANIM_MS + SUGGESTION_CHIP_STAGGER_MS * Math.max(0, chipCount - 1);
}

export function pickRandomSuggestions(
  count = 3,
  excludeIds: readonly string[] = [],
  locale: Locale = "en",
): LandingSuggestion[] {
  const exclude = new Set(excludeIds);
  let candidates = getSuggestionPool(locale).filter((s) => !exclude.has(s.id));
  if (candidates.length < count) {
    candidates = getSuggestionPool(locale);
  }

  const picked: LandingSuggestion[] = [];
  const pool = [...candidates];
  while (picked.length < count && pool.length > 0) {
    const index = Math.floor(Math.random() * pool.length);
    picked.push(pool[index]);
    pool.splice(index, 1);
  }
  return picked;
}

export function pickLandingContent(
  headlines: readonly string[] = LANDING_HEADLINES,
  locale: Locale = "en",
) {
  const pool = headlines.length ? headlines : LANDING_HEADLINES;
  return {
    headline: pool[Math.floor(Math.random() * pool.length)],
    suggestions: pickRandomSuggestions(3, [], locale),
  };
}
