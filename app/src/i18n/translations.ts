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
    genPhases: {
      tokenize: string;
      gpu_prep: string;
      gpu_prep_first: string;
      gpu_prep_hint: string;
      encode: string;
      encode_first: string;
      denoise: string;
      denoise_first: string;
      denoise_eta: string;
      vae: string;
      done: string;
    };
  };
  errors: {
    sdUnavailable: string;
  };
};

export const translations: Record<Locale, TranslationTree> = {
  he: {
    app: {
      tagline: "FLUX.2 // מנוע דפדפן",
      mark: "F2",
    },
    intro: {
      typewriter: [
        "מערכת מוכנה להפעלה...",
        "טוען מנוע יצירת תמונות...",
        "אני ממתין להוראותיך.",
        "FLUX.2 Klein · WebGPU · ללא התקנה",
      ],
      webgpuWarn: "WebGPU לא זוהה — FLUX.2 דורש WebGPU.",
      modelMeta: "512×512 · WebGPU · ~12GB · נשמר מקומית אחרי הורדה",
      initialize: "אתחול מודל",
      initializeAlt: "לחצו עלי",
      standby: "> המתנה",
      firstLoadNote:
        "הכל רץ בדפדפן — ללא התקנה. הורדה ראשונה ~12GB נשמרת מקומית; רענון דף לא מוריד מחדש.",
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
      sdUnavailable: "FLUX לא זמין",
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
      title: "FLUX.2 Klein 4B",
      subtitle: "הגדרות יצירה",
      close: "סגור הגדרות",
      modelId: "מזהה מודל",
      device: "מכשיר",
      resolution: "רזולוציה",
      cfg: "Guidance scale (CFG)",
      steps: "שלבי הסקה",
      stepsHint: "1–8 שלבים (ברירת מחדל 4)",
      negativeNote: "FLUX.2 Klein לא תומך ב-negative prompt נפרד — השתמש בסגנון ובפרומפט מפורט.",
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
      readyToLoad: "מוכן לטעינת FLUX.2 Klein",
      preparingDownload: "מכין הורדה…",
      modelReady: "FLUX.2 מוכן — הסטודיו פתוח",
      generating: "מייצר…",
      imageReady: "התמונה מוכנה",
      stopped: "היצירה הופסקה",
      notLoaded: "FLUX.2 עדיין לא נטען",
      compiling: "FLUX.2: הכנת transformer ב-WebGPU…",
      downloading: "FLUX.2: מוריד",
      genPhases: {
        tokenize: "מקודד פרומפט",
        gpu_prep: "מכין GPU לרזולוציה",
        gpu_prep_first: "טעינה ראשונית ל-GPU",
        gpu_prep_hint: "פעם אחת לרזולוציה · אחר כך ~30 שנ' לתמונה",
        encode: "מקודד טקסט",
        encode_first: "מתחיל ייצור ראשון",
        denoise: "מייצר תמונה",
        denoise_first: "יוצר תמונה ראשונה",
        denoise_eta: "~30 שנ' לתמונה",
        vae: "מפענח תמונה",
        done: "מסיים",
      },
    },
    errors: {
      sdUnavailable: "FLUX.2 Klein דורש WebGPU. השתמש ב-Chrome/Edge 113+ עם WebGPU.",
    },
  },
  en: {
    app: {
      tagline: "FLUX.2 // BROWSER ENGINE",
      mark: "F2",
    },
    intro: {
      typewriter: [
        "System ready for initialization...",
        "Loading image generation engine...",
        "Awaiting your instructions.",
        "FLUX.2 Klein · WebGPU · browser only",
      ],
      webgpuWarn: "WebGPU not detected — FLUX.2 requires WebGPU.",
      modelMeta: "512×512 · WebGPU · ~12GB · persisted locally after download",
      initialize: "INITIALIZE MODEL",
      initializeAlt: "PRESS ON ME",
      standby: "> STANDBY",
      firstLoadNote:
        "Runs in browser — no install. First ~12GB download is saved locally; refresh won't re-download.",
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
      sdUnavailable: "FLUX UNAVAILABLE",
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
      title: "FLUX.2 Klein 4B",
      subtitle: "Generation settings",
      close: "Close settings",
      modelId: "Model ID",
      device: "Device",
      resolution: "Resolution",
      cfg: "Guidance scale (CFG)",
      steps: "Inference steps",
      stepsHint: "1–8 steps (default 4)",
      negativeNote: "FLUX.2 Klein has no native negative prompt — use style presets and detailed prompts.",
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
      readyToLoad: "Ready to load FLUX.2 Klein",
      preparingDownload: "Preparing download…",
      modelReady: "FLUX.2 ready — studio open",
      generating: "Generating…",
      imageReady: "Image ready",
      stopped: "Generation stopped",
      notLoaded: "FLUX.2 is not loaded yet",
      compiling: "FLUX.2: preparing transformer on WebGPU…",
      downloading: "FLUX.2: downloading",
      genPhases: {
        tokenize: "Tokenizing prompt",
        gpu_prep: "Preparing GPU for resolution",
        gpu_prep_first: "First-time GPU warmup",
        gpu_prep_hint: "Once per resolution · then ~30s per image",
        encode: "Encoding text",
        encode_first: "Starting first render",
        denoise: "Rendering image",
        denoise_first: "First image render",
        denoise_eta: "~30s per image",
        vae: "Decoding image",
        done: "Finishing",
      },
    },
    errors: {
      sdUnavailable:
        "FLUX.2 Klein requires WebGPU. Use Chrome/Edge 113+ with WebGPU enabled.",
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
