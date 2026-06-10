# JanusGrove

ממשק וובי פרימיום ליצירת תמונות בדפדפן עם [Janus-Pro-1B-ONNX](https://huggingface.co/onnx-community/Janus-Pro-1B-ONNX).

## Quick start

```bash
npm install
npm run dev
```

פתח `http://127.0.0.1:5173` → **Load Janus-Pro model** (~2.4GB הורדה ראשונה) → כתוב prompt → **Generate**.

## Scripts

| פקודה | תיאור |
|--------|--------|
| `npm run dev` | שרת פיתוח |
| `npm run build` | בניית production → `dist/` |
| `npm test` | unit tests |
| `npm run qa:janus` | smoke QA |

## יכולות (MVP)

- הורדה וטעינה מקומית מ-Hugging Face
- Text → Image (384×384)
- Negative prompt (מיזוג לטקסט)
- Style presets: Portrait, Landscape, Product, Anime
- גלריה: Download, Copy, Regenerate, Delete
- Landing עם כותרת + 3 הצעות (אקראי ברענון)

## דרישות

- Chrome / Edge עם **WebGPU**
- ~4GB+ זיכרון פנוי מומלץ
- חיבור אינטרנט להורדה ראשונה בלבד

## מסמכים

- [PROJECT_PLAN.md](PROJECT_PLAN.md)
- [docs/QA_PLAN.md](docs/QA_PLAN.md)
- [docs/MODEL_CAPABILITIES.md](docs/MODEL_CAPABILITIES.md)
- [docs/PROMPT_LIBRARY.md](docs/PROMPT_LIBRARY.md)
