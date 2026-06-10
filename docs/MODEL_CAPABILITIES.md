# GROVEE STDIO FLUX 2 — יכולות מודל, מגבלות והגדרות

ממשק דפדפן עצמאי ליצירת תמונות עם **FLUX.2 Klein 4B** (WebGPU low-bit).  
**לא** קשור ל-[GROVEE STDIO SD 1.5](https://github.com/Theicd/GROVEE-STDIO).

| מודל | HF ID | גודל משוער | רזולוציה | Negative prompt |
|------|-------|------------|----------|-----------------|
| **FLUX.2 Klein 4B WebGPU** | [`ryanhlewis/flux2-klein-4b-webgpu-lowbit`](https://huggingface.co/ryanhlewis/flux2-klein-4b-webgpu-lowbit) | ~12 GB (הורדה ראשונה) | 256–1024 (כפולות של 16) | לא נתמך — פרומפט מפורט בלבד |

---

## ארכיטקטורה

| שכבה | קבצים |
|------|--------|
| UI | `app/src/App.tsx`, `PromptStudio.tsx`, `IntroScreen.tsx` |
| Worker | `app/src/flux.worker.ts` |
| Pipeline | `app/src/fluxPipeline.ts` — עוטף `app/public/flux2/flux2-engine.js` |
| Cache | OPFS `grovee-flux2-cache` — שומר משקולות HF בין רענונים |

---

## פרמטרים (ברירת מחדל)

| פרמטר | ערך | הערות |
|--------|-----|--------|
| `numInferenceSteps` | 4 | 1–8 |
| `guidanceScale` | 3.5 | CFG — פחות קריטי מ-SD |
| `width` / `height` | 512×512 | 256, 512, 768, 1024 |
| `seed` | אקראי | ניתן לקביעה בהגדרות |

---

## שלבי טעינה וייצור

1. **Intro** — הורדת bundle מ-HF (~12 GB), מוצג progress לפי קבצים ו-GB.
2. **Compile / warmup** — `prepareCustomTransformerStageSetup` + VAE ב-WebGPU (ברירת מחדל 512×512).
3. **Studio** — הזנת פרומפט → ייצור.
4. **ייצור ראשון ברזולוציה חדשה** (למשל 256×256) — עוד warmup GPU (דקות) עם הודעות שלב בממשק.
5. **ייצורים הבאים** — מהירים יותר (דקות → שניות).

---

## דרישות דפדפן

- Chrome / Edge 113+ עם WebGPU
- תמיכה ב-`shader-f16` (חובה לנתיב custom low-bit)
- `navigator.storage.persist()` מומלץ לשמירת cache

---

## מגבלות ידועות

- אין negative prompt נפרד (מגבלת מודל / pipeline).
- הורדה ראשונה כבדה; דורשת סבלנות ומקום בדיסק (OPFS).
- רזולוציה גבוהה = יותר VRAM / זמן denoise.
