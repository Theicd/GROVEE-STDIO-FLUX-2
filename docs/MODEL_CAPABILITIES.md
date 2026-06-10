# JanusGrove — יכולות מודלים, מגבלות והגדרות

הפרויקט תומך בשני מודלים ליצירת תמונות בדפדפן. בחר אחד או שניהם במסך ההורדה.

| מודל | HF ID | גודל משוער | רזולוציה | Negative prompt |
|------|-------|------------|----------|-----------------|
| **Janus-Pro 1B** | [`onnx-community/Janus-Pro-1B-ONNX`](https://huggingface.co/onnx-community/Janus-Pro-1B-ONNX) | ~2.4 GB | 384×384 | מיזוג טקסטואלי (`Avoid: …`) |
| **SD 1.5 WebGPU** | ONNX: [`microsoft/stable-diffusion-v1.5-webnn`](https://huggingface.co/microsoft/stable-diffusion-v1.5-webnn) · ref: [`ehristoforu/stable-diffusion-v1-5-tiny`](https://huggingface.co/ehristoforu/stable-diffusion-v1-5-tiny) | ~2.0 GB | 512×512 | **native** (`negative_prompt`) |

---

## Janus-Pro-1B-ONNX

מקור: DeepSeek Janus-Pro (1B), רישיון MIT.

### מצבי עבודה נתמכים (Transformers.js)

| מצב | API | סטטוס |
|-----|-----|--------|
| **Text → Image** | `processor(..., { chat_template: "text_to_image" })` + `model.generate_images()` | **פעיל** |
| **Image + Text → Text** | `processor(conversation)` + `model.generate()` | Phase 2 |
| **inpaint / img2img** | — | לא נתמך |

### פרמטרים (browser ONNX)

```ts
await model.generate_images({
  ...inputs,
  min_new_tokens: processor.num_image_tokens,
  max_new_tokens: processor.num_image_tokens,
  do_sample: true,
  guidance_scale: 5.0,
  temperature: 1.0,
  top_p: 0.95,
});
```

| פרמטר | הערות |
|--------|--------|
| `guidance_scale` | **5.0 — קריטי לאיכות** |
| `negative_prompt` | **לא native** — ממוזג ב-`buildFullPrompt()` |
| `width/height` | **384×384** קבוע |
| `seed` | לא נתמך בדפדפן |

### dtype / device מומלץ

```ts
dtype: {
  prepare_inputs_embeds: "q4",
  language_model: "q4f16",
  lm_head: "fp16",
  gen_head: "fp16",
  gen_img_embeds: "fp16",
  image_decode: "fp32",
}
device: {
  prepare_inputs_embeds: "wasm",
  language_model: "webgpu",
  lm_head: "webgpu",
  gen_head: "webgpu",
  gen_img_embeds: "webgpu",
  image_decode: "webgpu",
}
```

### חוזקות / חולשות

- חזק ב-prompts מפורטים, פורטרטים, עקיבה אחר הוראות (1B).
- חלש ב-384px, ידיים, טקסט בתוך תמונה, prompts קצרים.

---

## SD 1.5 WebGPU (ONNX Runtime Web)

מקור: Stable Diffusion v1.5 — משקולות ONNX מ-[`microsoft/stable-diffusion-v1.5-webnn`](https://huggingface.co/microsoft/stable-diffusion-v1.5-webnn) (WebNN/WebGPU).  
Tokenizer: `Xenova/clip-vit-large-patch14`.  
רישיון: CreativeML OpenRAIL-M.

### יישום ב-JanusGrove (`sdPipeline.ts` + `sd.worker.ts`)

**לא** דרך Transformers.js `text-to-image` (לא נתמך).  
הממשק משתמש ב-**ONNX Runtime Web** (`onnxruntime-web`) עם WebGPU:

```ts
// טעינה: text-encoder + unet + vae-decoder (~2.0 GB)
// יצירה: 512×512, steps 20/25/50, guidance_scale 7.5, negative_prompt native
```

| פרמeter | ברירת מחדל UI | הערות |
|--------|---------------|--------|
| `num_inference_steps` | 20 | 20 / 25 / 50 (snap) |
| `guidance_scale` | 7.5 | 1–20 |
| `width` / `height` | 512 | קבוע כרגע |
| `negative_prompt` | presets | **ערוץ נפרד** — `buildSdPrompt()` |
| `seed` | אקראי | אופציונלי |

### קבצי ONNX (נטענים)

| קובץ | גודל |
|------|------|
| `text-encoder.onnx` | ~246 MB |
| `sd-unet-v1.5-…-float16….onnx` | ~1.7 GB |
| `Stable-Diffusion-v1.5-vae-decoder….onnx` | ~99 MB |

Cache מקומי: OPFS `janusgrove-sd-cache`.

### חוזקות / חולשות

- 512×512, negative prompt אמיתי, diffusion קלאסי.
- דורש WebGPU (Chrome/Edge 113+); ~2 GB הורדה + compile.
- לא משתמש ישירות במשקולות `ehristoforu/stable-diffusion-v1-5-tiny` (safetensors) — אותה ארכיטקטורת SD 1.5 ב-ONNX.

---

## בחירת מודל ב-UI

1. **מסך Intro** — Janus / SD 1.5 / שניהם + progress לכל מודל.
2. **Studio** — pills ליד שדה הקלט + ⚙ הגדרות למודל הפעיל.
3. **Negative panel** — תג `native` כש-SD פעיל; Janus ממשיך במיזוג `Avoid:` (אופציונלי).

---

## מסקנות ל-UX

- Janus: prompts **מפורטים**, CFG 5, style Photoreal.
- SD 1.5: negative prompt נפרד, CFG 7.5, 20 steps, 512×512.
- הצג badge רזולוציה לפי מודל פעיל.
- אזהרת WebGPU כשאין GPU.
