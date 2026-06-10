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
  { id: "astronaut-horse", icon: "🧑‍🚀", label: "Astronaut on horse", prompt: "An astronaut riding a horse" },
  { id: "cat-sports-car", icon: "🐱", label: "Cat sports car", prompt: "A cat driving a sports car" },
  { id: "crystal-dragon", icon: "💎", label: "Crystal dragon", prompt: "A dragon made of crystal" },
  { id: "city-giant-tree", icon: "🌳", label: "City in a tree", prompt: "A city inside a giant tree" },
  { id: "floating-castle", icon: "🏰", label: "Floating castle", prompt: "A floating castle above the clouds" },
  { id: "cyberpunk-samurai", icon: "⚔️", label: "Cyberpunk samurai", prompt: "A cyberpunk samurai warrior" },
  { id: "giant-robot", icon: "🤖", label: "Giant robot", prompt: "A giant robot protecting a city" },
  { id: "flying-whale", icon: "🐋", label: "Flying whale", prompt: "A whale flying through the sky" },
  { id: "magical-fox", icon: "🦊", label: "Magical fox", prompt: "A magical fox with glowing tails" },
  { id: "tokyo-skyline", icon: "🗼", label: "Tokyo skyline", prompt: "A futuristic Tokyo skyline" },
  { id: "floating-island", icon: "🏝️", label: "Floating island", prompt: "A castle on a floating island" },
  { id: "phoenix-mountains", icon: "🔥", label: "Phoenix mountains", prompt: "A phoenix soaring over mountains" },
  { id: "forest-portal", icon: "🌀", label: "Forest portal", prompt: "A hidden portal in the forest" },
  { id: "wormhole-ship", icon: "🚀", label: "Wormhole ship", prompt: "A spaceship entering a wormhole" },
  { id: "mech-dragon-knight", icon: "🐲", label: "Mech dragon knight", prompt: "A knight riding a mechanical dragon" },
  { id: "giant-moon", icon: "🌕", label: "Giant moon", prompt: "A giant moon above the ocean" },
  { id: "panda-astronaut", icon: "🐼", label: "Panda astronaut", prompt: "A panda astronaut in space" },
  { id: "underwater-city", icon: "🌊", label: "Underwater city", prompt: "A futuristic underwater city" },
  { id: "wizard-spell", icon: "🧙", label: "Wizard spell", prompt: "A wizard casting a powerful spell" },
  {
    id: "dragon-awakening",
    icon: "🐉",
    label: "Dragon awakening",
    prompt: "A legendary dragon awakening",
  },
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
