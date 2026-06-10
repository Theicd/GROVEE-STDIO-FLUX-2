# תוכנית QA — JanusGrove

מטרה: לוודא שהמודל **יורד**, **נטען**, **מייצר תמונה**, וה-UI **פרימיום** עובד מקצה לקצה.

---

## רמות בדיקה

| רמה | כלי | מתי |
|-----|-----|-----|
| **L0** | Unit (vitest) | CI כל commit |
| **L1** | Worker smoke (headless) | CI |
| **L2** | Playwright E2E (dev server) | CI + לפני release |
| **L3** | Playwright E2E + מודל אמיתי | ידני / nightly (איטי, ~3GB) |
| **L4** | Pages deploy smoke | אחרי push ל-GitHub Pages |

---

## QA-1: הורדת המודל

### בדיקות אוטומטיות (L1/L2)

- [ ] **QA-DL-01** — Worker מקבל `load` ושולח `status` עם `phase: download`
- [ ] **QA-DL-02** — Progress: `loaded` / `total` bytes עולים (mock או אמיתי)
- [ ] **QA-DL-03** — בסיום: `type: loaded` + `modelId` נכון
- [ ] **QA-DL-04** — שגיאת רשת → `type: error` + הודעה בעברית/אנגלית
- [ ] **QA-DL-05** — ביטול טעינה (`abort`) לא קורס את הדף

### בדיקות אמיתיות (L3 — חובה לפני release)

- [ ] **QA-DL-10** — טעינה ראשונה: סה"כ הורדה ~2.0–2.6 GB (לוג ב-console)
- [ ] **QA-DL-11** — רענון דף שני: טעינה מה-cache (< 30s, ללא הורדה מלאה)
- [ ] **QA-DL-12** — `navigator.storage.estimate()` — שימוש ב-quota עולה אחרי טעינה
- [ ] **QA-DL-13** — WebGPU זמין → badge `GPU`; אחרת `WASM` + אזהרת ביצועים

### Probe בדפדפן (כמו GROVEE `?qa=vision`)

- [ ] **QA-DL-20** — `?qa=janus&phase=download` — דילוג UI, רק בדיקת הורדה
- [ ] **QA-DL-21** — `?qa=janus&phase=generate&prompt=red+apple` — הורדה + יצירה אחת

---

## QA-2: אימות שהמודל נטען

- [ ] **QA-LD-01** — אחרי `loaded`, כפתור Generate פעיל
- [ ] **QA-LD-02** — `worker.ping` → `pong` תוך 2s
- [ ] **QA-LD-03** — זיכרון: אין duplicate load על לחיצה כפולה (singleton)
- [ ] **QA-LD-04** — מעבר intro → landing תוך < 500ms אחרי loaded
- [ ] **QA-LD-05** — רענון: מצב `ready` מה-cache בלי לחיצה חוזרת (אופציונלי)

---

## QA-3: יצירת תמונה

### אוטומטי (mock worker)

- [ ] **QA-GEN-01** — `generate_image` עם prompt → `image_ready` + blob/url
- [ ] **QA-GEN-02** — UI מציג `<img>` עם `naturalWidth > 0`
- [ ] **QA-GEN-03** — Generating splash מופיע ונעלם
- [ ] **QA-GEN-04** — Stop בזמן יצירה → `aborted`, UI חוזר ל-idle
- [ ] **QA-GEN-05** — שתי יצירות רצופות — אין crash / OOM

### אמיתי (L3)

- [ ] **QA-GEN-10** — Prompt P01 (תפוח) — תמונה 384×384 ± טולרנס
- [ ] **QA-GEN-11** — Prompt P04 (פורטרט) — פנים מזוהות (ידני)
- [ ] **QA-GEN-12** — `do_sample: true` vs `false` — הבדל ויזואלי נשמר בלוג
- [ ] **QA-GEN-13** — negative prompt מוזג — השוואה לפני/אחרי (צילום מסך)
- [ ] **QA-GEN-14** — זמן יצירה נרשם ב-activity log (יעד: מדידה, לא SLA קשיח)

---

## QA-4: פרמטרים אופטימליים (מטריצת ניסויים)

הרץ טבלה ותעד ב-`tests/fixtures/param-matrix.md`:

| Run | do_sample | negative | prompt אורך | הערות |
|-----|-----------|----------|-------------|--------|
| M1 | true | off | ארוך | baseline |
| M2 | false | off | ארוך | פחות גיוון |
| M3 | true | on | ארוך | פחות artifacts |
| M4 | true | on | קצר (`dragon`) | איכות נמוכה — UI warning |

**מסקנה צפויה:** `do_sample: true` + prompt מפורט + negative מוזג = ברירת מחדל.

---

## QA-5: הבנת תמונה (Phase 2)

- [ ] **QA-VQA-01** — העלאת PNG + "Describe this image" → טקסט לא ריק
- [ ] **QA-VQA-02** — תמונת נוסחה (quadratic) → LaTeX או תיאור מתמטי (כמו דוגמת HF)

---

## QA-6: UI / UX פרימיום

- [ ] **QA-UX-01** — Landing: כותרת + 3 chips + composer ממורכז
- [ ] **QA-UX-02** — אין "?What" (RTL שבור על אנגלית) — `dir=ltr` ב-landing
- [ ] **QA-UX-03** — גלריה: כל תמונה עם download, copy prompt, regenerate
- [ ] **QA-UX-04** — מובייל 375px — grid הצעות → עמודה אחת
- [ ] **QA-UX-05** — ניגודיות WCAG על טקסט ראשי
- [ ] **QA-UX-06** — מקלדת: Enter לשליחה, Esc לביטול
- [ ] **QA-UX-07** — מצב offline אחרי cache — הודעה ברורה

---

## QA-7: Deploy (GitHub Pages)

- [ ] **QA-PG-01** — `npm run qa:pages` — index + assets 200
- [ ] **QA-PG-02** — אין redirect שבור ל-`/docs/` (למידה מ-GROVEE)
- [ ] **QA-PG-03** — טעינת מודל מ-Pages URL אמיתי (L3)

---

## סקריפטים מתוכננים

```
scripts/
  qa-janus-smoke.mjs      # L2 — mock / short
  qa-janus-premium.mjs    # L3 — Playwright + מודל אמיתי
  qa-pages.mjs            # L4 — deploy smoke
```

### פקודות package.json (מתוכנן)

```json
"qa:janus": "node scripts/qa-janus-smoke.mjs",
"qa:janus:premium": "node scripts/qa-janus-premium.mjs",
"qa:pages": "node scripts/qa-pages.mjs"
```

---

## קריטריוני Pass ל-release

- כל L0 + L1 + L2 **ירוקים** ב-CI
- L3 ידני: QA-DL-10, QA-GEN-10, QA-GEN-11 **עברו**
- אין regressions ב-UX checklist
- תיעוד `MODEL_CAPABILITIES.md` מעודכן
