# JanusGrove — תוכנית עבודה וצ'קליסט מוצר פרימיום

**פרויקט:** ממשק וובי ליצירת תמונות בדפדפן  
**מודל:** [`onnx-community/Janus-Pro-1B-ONNX`](https://huggingface.co/onnx-community/Janus-Pro-1B-ONNX)  
**השראת עיצוב:** GROVEE (טכני-כהה) + Leonardo / Midjourney (חוויית יצירה)  
**מיקום:** `c:\Users\Avatar001\CascadeProjects\JANUSGROVE\`

---

## סיכום מנהלים

| נושא | החלטה |
|------|--------|
| עריכת תמונה | **לא ב-MVP** — רק T2I + (אופציונלי) תיאור תמונה |
| Negative prompt | **מיזוג טקסטואלי** ל-prompt (אין API native) |
| רזולוציה | **384×384** — להציג בממשק + טיפ upscale |
| הורדה | ~2.4GB, cache מקומי, progress מפורט |
| ריצה | WebGPU ראשון, WASM fallback |

מסמכי עזר:
- [`docs/MODEL_CAPABILITIES.md`](docs/MODEL_CAPABILITIES.md)
- [`docs/PROMPT_LIBRARY.md`](docs/PROMPT_LIBRARY.md)
- [`docs/QA_PLAN.md`](docs/QA_PLAN.md)

---

## ארכיטקטורה (יעד)

```
JANUSGROVE/
├── app/
│   ├── index.html
│   └── src/
│       ├── main.tsx
│       ├── App.tsx
│       ├── index.css                 # design tokens (GROVEE-like)
│       ├── janus.worker.ts           # MultiModalityCausalLM
│       ├── janusClient.ts
│       ├── promptBuilder.ts          # positive + negative merge
│       ├── components/
│       │   ├── IntroScreen.tsx       # הורדת מודל
│       │   ├── StudioLanding.tsx     # כותרת + 3 הצעות
│       │   ├── PromptStudio.tsx      # Leonardo-style prompt bar
│       │   ├── GenerationGallery.tsx
│       │   ├── ImageCard.tsx
│       │   ├── GeneratingSplash.tsx
│       │   ├── NegativePromptPanel.tsx
│       │   └── SettingsDrawer.tsx
│       └── hooks/
│           ├── useJanusWorker.ts
│           └── useLandingContent.ts
├── scripts/
│   ├── qa-janus-smoke.mjs
│   ├── qa-janus-premium.mjs
│   └── qa-pages.mjs
├── tests/
│   └── fixtures/
├── docs/                             # (קיים)
├── package.json
├── vite.config.ts
└── .github/workflows/
    ├── ci.yml
    └── deploy-pages.yml
```

---

## פאזות פיתוח

### Phase 0 — תשתית (יום 1)
- [ ] **0.1** — `npm create vite` + React + TS + `@huggingface/transformers@^4.2`
- [ ] **0.2** — `vite.config.ts`: root `app/`, outDir `dist/`, `base: './'`
- [ ] **0.3** — העתקת design tokens מ-GROVEE: `--bg-deep`, `--accent`, `--sci-fi-blue`, intro rings
- [ ] **0.4** — `janus.worker.ts` שלד + `postMessage` types
- [ ] **0.5** — ESLint + vitest + Git repo + `.gitignore`

### Phase 1 — הורדה וטעינת מודל (MVP קריטי)
- [ ] **1.1** — `load`: `AutoProcessor` + `MultiModalityCausalLM.from_pretrained`
- [ ] **1.2** — `progress_callback` → UI: % + MB/MB + speed
- [ ] **1.3** — dtype/device לפי `MODEL_CAPABILITIES.md` (q4 + webgpu)
- [ ] **1.4** — מסך Intro: לוגו, טבעות, «טען Janus-Pro», progress bar
- [ ] **1.5** — טיפול שגיאות: WebGPU חסר, OOM, רשת, abort
- [ ] **1.6** — Badge מצב: `Downloading` → `Ready (GPU)` / `Ready (CPU)`
- [ ] **1.7** — QA: QA-DL-01 עד QA-DL-05 (mock), QA-DL-10 ידני

### Phase 2 — יצירת תמונה (ליבת המוצר)
- [ ] **2.1** — `generate_image`: chat_template `text_to_image`
- [ ] **2.2** — `generate_images` + `ProgressStreamer` → אחוז יצירה
- [ ] **2.3** — החזרת `RawImage` → blob URL ל-UI
- [ ] **2.4** — `promptBuilder`: positive + negative merge
- [ ] **2.5** — Generating splash: «GENERATING IMAGE...» + tokens/progress
- [ ] **2.6** — תצוגת תמונה בגלריה + metadata (384×384, זמן, prompt)
- [ ] **2.7** — כפתורים: Download PNG, Copy prompt, Regenerate, Delete
- [ ] **2.8** — QA: QA-GEN-01 עד QA-GEN-14

### Phase 3 — UI פרימיום (Leonardo-style)
- [ ] **3.1** — **Prompt Studio** מרכזי: textarea גדול, character count, enhance button (הרחבת prompt אוטומטית — טקסט סטטי או template)
- [ ] **3.2** — **Negative prompt** collapsible + presets מ-`PROMPT_LIBRARY.md`
- [ ] **3.3** — **Style chips**: Portrait, Landscape, Anime, Product, Fantasy
- [ ] **3.4** — **Landing**: כותרת אקראית + 3 הצעות (4 סטים, ללא רוטציה בזמן אמת)
- [ ] **3.5** — **Sidebar היסטוריה**: sessions של יצירות (תמונות + prompts ב-localStorage)
- [ ] **3.6** — **Activity log** (אופציונלי): הורדות, יצירות, שגיאות
- [ ] **3.7** — **Settings**: clear cache, backend force WASM, language HE/EN
- [ ] **3.8** — מובייל: layout מלא, gallery grid 2 עמודות
- [ ] **3.9** — QA-UX-01 עד QA-UX-07

### Phase 4 — הבנת תמונה (VQA) — אחרי MVP יציב
- [ ] **4.1** — העלאת תמונה + «Describe» / שאלה חופשית
- [ ] **4.2** — `processor(conversation)` + `model.generate()` (לא generate_images)
- [ ] **4.3** — טאב: **Create** | **Understand**
- [ ] **4.4** — QA-VQA-01, QA-VQA-02

### Phase 5 — QA אוטומטי + Deploy
- [ ] **5.1** — `scripts/qa-janus-smoke.mjs`
- [ ] **5.2** — `scripts/qa-janus-premium.mjs` (Playwright + `?qa=janus`)
- [ ] **5.3** — `scripts/qa-pages.mjs`
- [ ] **5.4** — GitHub Actions: CI (lint, test, build)
- [ ] **5.5** — GitHub Pages: **רק** `deploy-pages.yml` או `/docs` מסונכרן (לא redirect שבור)
- [ ] **5.6** — מטריצת פרמטרים M1–M4 מתועדת
- [ ] **5.7** — README: דרישות מערכת, קישור live, revoke token reminder

### Phase 6 — Polish פרימיום (אופציונלי)
- [ ] **6.1** — Upscale hint + קישור לכלי חיצוני
- [ ] **6.2** — השוואת before/after negative prompt
- [ ] **6.3** — Export כל הגלריה כ-ZIP
- [ ] **6.4** — PWA + offline אחרי cache

---

## צ'קליסט עיצוב (Leonardo / מקצועי)

### מבנה מסך
- [ ] שורת prompt **גדולה ומרכזית** (לא קטנה בתחתית כמו צ'אט בלבד)
- [ ] **גלריה ויזואלית** של כל היצירות (grid, לא רק בועת צ'אט)
- [ ] **פאנל הגדרות יצירה** מימין או מתחת: Negative, Style, Sample on/off
- [ ] **מצב כהה** כברירת מחדל, accent ירוק/cyan כמו GROVEE
- [ ] **אנימציית טעינה** ברמת GROVEE (particles + rings)

### מיקרו-אינטראקציות
- [ ] Hover על תמונה → overlay: Download, Zoom, Regenerate
- [ ] Progress עם אחוזים אמיתיים (לא spinner בלבד)
- [ ] Toast על שגיאות עם פעולה מוצעת («נסה WASM»)
- [ ] Skeleton בזמן טעינת גלריה מ-localStorage

### עקביות מותג
- [ ] שם מוצר: **JanusGrove** (או שם שתבחר)
- [ ] ללא אזכור Gemma — מודל Janus-Pro בלבד
- [ ] אייקון מצלמה/מכחול — לא צ'אט גנרי

---

## צ'קליסט חוויית משתמש (Premium)

- [ ] משתמש חדש מבין תוך 5 שניות: «מורידים מודל → כותבים → מקבלים תמונה»
- [ ] אזהרה לפני הורדה 2.4GB («המשך?»)
- [ ] זמן משוער בהורדה (מבוסס speed)
- [ ] זמן יצירה מוצג אחרי כל תמונה
- [ ] Prompt קצר מדי → tooltip «הוסף פרטים לתוצאה טובה יותר»
- [ ] תמונה 384px — תווית «Native resolution» + אייקון מידע
- [ ] אין מילוי אוטומטי של token בטופס
- [ ] עבודה ב-Chrome/Edge עם WebGPU

---

## סדר ביצוע מומלץ (לעקיבה)

```
שבוע 1: Phase 0 → 1 → 2 (MVP עובד מקומית)
שבוע 2: Phase 3 + QA smoke
שבוע 3: Phase 4 + QA premium + Phase 5 deploy
שבוע 4: Phase 6 + מטריצת פרמטרים + תיעוד
```

---

## מעקב התקדמות (עדכן ידנית)

| Phase | סטטוס | תאריך |
|-------|--------|-------|
| 0 תשתית | ⬜ לא התחיל | |
| 1 הורדה | ⬜ | |
| 2 יצירה | ⬜ | |
| 3 UI פרימיום | ⬜ | |
| 4 VQA | ⬜ | |
| 5 QA+Deploy | ⬜ | |
| 6 Polish | ⬜ | |

**סימונים:** ⬜ לא התחיל · 🟡 בעבודה · ✅ הושלם · ⏸️ מושהה

---

## השלב הבא (כשמתחילים קוד)

1. אשר שם מוצר סופי (JanusGrove / Grovee Studio / אחר)
2. התחל **Phase 0.1** — scaffold Vite
3. מימוש **janus.worker.ts** לפי דוגמת HF
4. הרץ **QA-DL-10** ידני אחרי load ראשון

> לביצוע אוטומטי של הקוד — בקש ב-Agent mode: «התחל Phase 0 לפי PROJECT_PLAN.md».
