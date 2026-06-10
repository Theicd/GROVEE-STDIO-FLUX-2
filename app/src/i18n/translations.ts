export type Locale = "he" | "en";

export const LOCALE_STORAGE_KEY = "grovee-stdio-locale";

export type TranslationTree = {
  app: {
    tagline: string;
    mark: string;
  };
  intro: {
    typewriter: readonly string[];
    webgpuWarn: string;
    modelMeta: string;
    initialize: string;
    initializeAlt: string;
    standby: string;
    firstLoadNote: string;
  };
  topBar: {
    browserStudio: string;
    webgpuOn: string;
    webgpuOff: string;
    langHe: string;
    langEn: string;
  };
  studio: {
    memoryOk: string;
    model: string;
    enterPrompt: string;
    promptPlaceholder: string;
    generate: string;
    stop: string;
    settings: string;
    generating: string;
    scale: string;
    sdUnavailable: string;
    quickPrompts: string;
    headlines: readonly string[];
  };
  settings: {
    title: string;
    subtitle: string;
    close: string;
    modelId: string;
    device: string;
    resolution: string;
    cfg: string;
    steps: string;
    stepsHint: string;
    negativeNote: string;
    stylePreset: string;
    negativePrompt: string;
    negativeHint: string;
    negativePlaceholder: string;
    clearNegative: string;
    resetNegative: string;
    resetAll: string;
    styles: Record<string, string>;
  };
  gallery: {
    title: string;
    save: string;
    copy: string;
    rerun: string;
    del: string;
    ariaLabel: string;
    prev: string;
    next: string;
    openImage: string;
    close: string;
    lightboxTitle: string;
    shareTitle: string;
    shareNative: string;
    shareCopyImage: string;
  };
  generating: {
    title: string;
    steps: string;
  };
  status: {
    readyToLoad: string;
    preparingDownload: string;
    modelReady: string;
    generating: string;
    imageReady: string;
    stopped: string;
    notLoaded: string;
    compiling: string;
    downloading: string;
  };
  errors: {
    sdUnavailable: string;
  };
};

export const translations: Record<Locale, TranslationTree> = {
  he: {
    app: {
      tagline: "SD 1.5 // מנוע דפדפן",
      mark: "GE",
    },
    intro: {
      typewriter: [
        "מערכת מוכנה להפעלה...",
        "טוען מנוע יצירת תמונות...",
        "אני ממתין להוראותיך.",
        "SD 1.5 · WebGPU · ללא התקנה",
      ],
      webgpuWarn: "WebGPU לא זוהה — WASM עלול להיות איטי.",
      modelMeta: "512×512 · WebGPU · נשמר ב-cache אחרי טעינה ראשונה",
      initialize: "אתחול מודל",
      initializeAlt: "לחצו עלי",
      standby: "> המתנה",
      firstLoadNote:
        "הכל רץ בדפדפן — ללא התקנה. טעינה ראשונה בלבד (~2GB ל-cache). ביקור חוזר: שניות.",
    },
    topBar: {
      browserStudio: "סטודיו דפדפן",
      webgpuOn: "WebGPU",
      webgpuOff: "WASM",
      langHe: "עב",
      langEn: "EN",
    },
    studio: {
      memoryOk: "זיכרון",
      model: "מודל",
      enterPrompt: "הזן תיאור",
      promptPlaceholder: "תיאור תמונה…",
      generate: "יצירה",
      stop: "עצור",
      settings: "הגדרות",
      generating: "מייצר…",
      scale: "גודל",
      sdUnavailable: "SD לא זמין",
      quickPrompts: "הצעות מהירות",
      headlines: [
        "מה תיצור היום?",
        "תאר את החזון שלך.",
        "הפוך מילים לתמונות.",
        "איזה סצנה אתה מדמיין?",
        "בוא נהפוך רעיון למציאות.",
        "צור משהו ייחודי.",
        "צייר עם מילים.",
      ],
    },
    settings: {
      title: "Stable Diffusion 1.5",
      subtitle: "הגדרות יצירה",
      close: "סגור הגדרות",
      modelId: "מזהה מודל",
      device: "מכשיר",
      resolution: "רזולוציה",
      cfg: "Guidance scale (CFG)",
      steps: "שלבי הסקה",
      stepsHint: "5–50 שלבים (מתוך לוח זמנים SD 1.5)",
      negativeNote: "SD 1.5 משתמש ב-negative_prompt נפרד.",
      stylePreset: "סגנון",
      negativePrompt: "פרומפט שלילי",
      negativeHint:
        "משותף לכל היצירות. נקה לביטול מותאם. סגנון עשוי להוסיף מונחים אלא אם נבחר None.",
      negativePlaceholder: "מונחים שליליים אופציונליים…",
      clearNegative: "נקה שלילי",
      resetNegative: "איפוס לברירת מחדל",
      resetAll: "איפוס הכל לברירת מחדל",
      styles: {
        photoreal: "פוטו",
        none: "ללא",
        portrait: "דיוקן",
        landscape: "נוף",
        product: "מוצר",
        anime: "אנימה",
      },
    },
    gallery: {
      title: "גלריית פלט",
      save: "שמור",
      copy: "העתק",
      rerun: "שוב",
      del: "מחק",
      ariaLabel: "תמונות שנוצרו",
      prev: "תמונות קודמות",
      next: "תמונות הבאות",
      openImage: "הצג תמונה בגדול",
      close: "סגור",
      lightboxTitle: "תצוגת תמונה",
      shareTitle: "שיתוף",
      shareNative: "שיתוף מערכת",
      shareCopyImage: "העתק תמונה",
    },
    generating: {
      title: "מעבד",
      steps: "שלבים",
    },
    status: {
      readyToLoad: "מוכן לטעינת SD 1.5",
      preparingDownload: "מכין הורדה…",
      modelReady: "SD 1.5 מוכן — הסטודיו פתוח",
      generating: "מייצר…",
      imageReady: "התמונה מוכנה",
      stopped: "היצירה הופסקה",
      notLoaded: "SD 1.5 עדיין לא נטען",
      compiling: "SD 1.5: קומפילציה ב-WebGPU (2–5 דק׳)…",
      downloading: "SD 1.5: מוריד",
    },
    errors: {
      sdUnavailable: "SD 1.5 דורש WebGPU או WASM. השתמש ב-Chrome/Edge 113+ עם WebGPU.",
    },
  },
  en: {
    app: {
      tagline: "SD 1.5 // BROWSER ENGINE",
      mark: "GE",
    },
    intro: {
      typewriter: [
        "System ready for initialization...",
        "Loading image generation engine...",
        "Awaiting your instructions.",
        "SD 1.5 · WebGPU · browser only",
      ],
      webgpuWarn: "WebGPU not detected — WASM fallback may be slower.",
      modelMeta: "512×512 · WebGPU · cached after first load",
      initialize: "INITIALIZE MODEL",
      initializeAlt: "PRESS ON ME",
      standby: "> STANDBY",
      firstLoadNote:
        "Runs in browser — no install. First load only (~2GB to cache). Return visits: seconds.",
    },
    topBar: {
      browserStudio: "BROWSER STUDIO",
      webgpuOn: "WebGPU",
      webgpuOff: "WASM",
      langHe: "עב",
      langEn: "EN",
    },
    studio: {
      memoryOk: "MEMORY",
      model: "MODEL",
      enterPrompt: "ENTER PROMPT",
      promptPlaceholder: "Describe your image…",
      generate: "Generate",
      stop: "STOP",
      settings: "Settings",
      generating: "GENERATING…",
      scale: "SCALE",
      sdUnavailable: "SD UNAVAILABLE",
      quickPrompts: "QUICK PROMPTS",
      headlines: [
        "What will you create today?",
        "Describe your vision.",
        "Turn words into images.",
        "What scene do you imagine?",
        "Let's bring your idea to life.",
        "Create something unique.",
        "Paint with prompts.",
      ],
    },
    settings: {
      title: "Stable Diffusion 1.5",
      subtitle: "Generation settings",
      close: "Close settings",
      modelId: "Model ID",
      device: "Device",
      resolution: "Resolution",
      cfg: "Guidance scale (CFG)",
      steps: "Inference steps",
      stepsHint: "5–50 steps (subsampled from SD 1.5 schedule)",
      negativeNote: "SD 1.5 uses native negative_prompt (separate channel).",
      stylePreset: "Style preset",
      negativePrompt: "Negative prompt",
      negativeHint:
        "Shared preset for all generations. Clear to disable custom terms. Style may still add terms unless set to None.",
      negativePlaceholder: "Optional custom negative terms…",
      clearNegative: "Clear negative",
      resetNegative: "Reset to recommended defaults",
      resetAll: "Reset all to recommended defaults",
      styles: {
        photoreal: "Photoreal",
        none: "None",
        portrait: "Portrait",
        landscape: "Landscape",
        product: "Product",
        anime: "Anime",
      },
    },
    gallery: {
      title: "OUTPUT BUFFER",
      save: "SAVE",
      copy: "COPY",
      rerun: "RE-RUN",
      del: "DEL",
      ariaLabel: "Generated images",
      prev: "Previous images",
      next: "Next images",
      openImage: "View full image",
      close: "Close",
      lightboxTitle: "Image preview",
      shareTitle: "Share",
      shareNative: "System share",
      shareCopyImage: "Copy image",
    },
    generating: {
      title: "RENDERING",
      steps: "steps",
    },
    status: {
      readyToLoad: "Ready to load SD 1.5",
      preparingDownload: "Preparing download…",
      modelReady: "SD 1.5 ready — studio open",
      generating: "Generating…",
      imageReady: "Image ready",
      stopped: "Generation stopped",
      notLoaded: "SD 1.5 is not loaded yet",
      compiling: "SD 1.5: compiling on WebGPU (2–5 min)…",
      downloading: "SD 1.5: downloading",
    },
    errors: {
      sdUnavailable:
        "SD 1.5 requires WebGPU or WASM. Use Chrome/Edge 113+ with WebGPU enabled.",
    },
  },
};

export function loadStoredLocale(): Locale {
  try {
    const raw = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (raw === "he" || raw === "en") return raw;
  } catch {
    /* ignore */
  }
  return "he";
}

export function saveLocale(locale: Locale): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    /* ignore */
  }
}

export function localeDir(locale: Locale): "rtl" | "ltr" {
  return locale === "he" ? "rtl" : "ltr";
}
