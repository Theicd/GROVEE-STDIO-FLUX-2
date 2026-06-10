# תוכנית QA — GROVEE STDIO FLUX 2

ממשק נפרד מ-GROVEE STDIO (SD 1.5). בדיקות ממוקדות ב-FLUX.2 Klein WebGPU.

## Smoke (מקומי)

```bash
npm test
npm run build:pages
npm run qa:pages
npm run dev -- --host 127.0.0.1 --port 5180
```

## בדיקות ידניות

1. Intro — הורדה מתחילה, progress עולה מונוטונית (קבצים + GB).
2. רענון דף אחרי הורדה חלקית — ממשיך מ-cache (OPFS), לא מאפס ל-0.
3. Studio נפתח אחרי `loaded`.
4. ייצור ראשון — הודעות שלב (GPU prep / denoise) + מד התקדמות זז.
5. ייצור שני — מהיר יותר, אותה רזולוציה.
6. שינוי רזולוציה — warmup חדש עם feedback.
7. GitHub Pages — `https://theicd.github.io/GROVEE-STDIO-FLUX-2/` טוען את האפליקציה (לא README).

## QA אוטומטי (אופציונלי)

- `scripts/qa-flux-scripts.mjs` — בדיקת נתיבי `flux2-engine.js`
- `?qa=1` probe בדפדפן (`window.__janusQa`)
