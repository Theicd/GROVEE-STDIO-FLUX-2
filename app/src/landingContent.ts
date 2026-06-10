export type LandingSuggestion = {
  id: string;
  icon: string;
  label: string;
  prompt: string;
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

/** Full rotating prompt pool — 3 shown at a time in the studio landing. */
export const PROMPT_SUGGESTION_POOL: LandingSuggestion[] = [
  { id: "giant-moon-ocean", icon: "🌕", label: "Giant moon", prompt: "A giant moon above the ocean" },
  { id: "lighthouse-sunset", icon: "🗼", label: "Lighthouse sunset", prompt: "A lonely lighthouse at sunset" },
  { id: "castle-floating-island", icon: "🏰", label: "Floating island castle", prompt: "A castle on a floating island" },
  { id: "giant-whale-sky", icon: "🐋", label: "Sky whale", prompt: "A giant whale in the sky" },
  { id: "train-snowy-mountains", icon: "🚂", label: "Snowy mountain train", prompt: "A train crossing snowy mountains" },
  { id: "glowing-city-night", icon: "🌃", label: "Glowing city", prompt: "A glowing city at night" },
  { id: "spaceship-earth", icon: "🚀", label: "Spaceship over Earth", prompt: "A spaceship above Earth" },
  { id: "dragon-castle", icon: "🐉", label: "Dragon over castle", prompt: "A dragon flying over a castle" },
  { id: "futuristic-city-sunrise", icon: "🌅", label: "Futuristic sunrise", prompt: "A futuristic city at sunrise" },
  { id: "jungle-waterfall", icon: "💧", label: "Jungle waterfall", prompt: "A waterfall in a hidden jungle" },
  { id: "giant-tree-clouds", icon: "🌳", label: "Tree in clouds", prompt: "A giant tree in the clouds" },
  { id: "storm-ship", icon: "⛵", label: "Storm ship", prompt: "A sailing ship in a storm" },
  { id: "forest-portal", icon: "🌀", label: "Forest portal", prompt: "A mysterious portal in the forest" },
  { id: "desert-robot", icon: "🤖", label: "Desert robot", prompt: "A robot walking in the desert" },
  { id: "neon-street-rain", icon: "🌆", label: "Neon after rain", prompt: "A neon street after rain" },
  { id: "cliff-house", icon: "🏠", label: "Cliff house", prompt: "A house on a mountain cliff" },
  { id: "crystal-cave", icon: "💎", label: "Crystal cave", prompt: "A crystal cave underground" },
  { id: "giant-planet-sky", icon: "🪐", label: "Giant planet", prompt: "A giant planet in the sky" },
  { id: "peaceful-lake-dawn", icon: "🏞️", label: "Lake at dawn", prompt: "A peaceful lake at dawn" },
  { id: "flying-island-clouds", icon: "☁️", label: "Flying island", prompt: "A flying island above the clouds" },
];

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
): LandingSuggestion[] {
  const exclude = new Set(excludeIds);
  let candidates = PROMPT_SUGGESTION_POOL.filter((s) => !exclude.has(s.id));
  if (candidates.length < count) {
    candidates = [...PROMPT_SUGGESTION_POOL];
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

export function pickLandingContent() {
  return {
    headline: LANDING_HEADLINES[Math.floor(Math.random() * LANDING_HEADLINES.length)],
    suggestions: pickRandomSuggestions(3),
  };
}
