# ספריית Prompts — JanusGrove

## Negative prompt (אין API native)

ב-Transformers.js **אין** `negative_prompt` ל-`generate_images`.  
אסטרטגיה: **מיזוג לסוף ה-prompt הראשי** או שדה נפרד ב-UI שמתחבר אוטומטית:

```
{user_prompt}. Avoid: blurry, low quality, distorted, deformed, ugly, bad anatomy, extra limbs, missing fingers, watermark, text, logo, oversaturated, noisy, jpeg artifacts.
```

### רשימת מילים שליליות מומלצת (ברירת מחדל ב-UI)

```
blurry, low quality, low resolution, distorted, deformed, disfigured, bad anatomy, wrong proportions, extra limbs, missing fingers, fused fingers, long neck, duplicate, cropped, watermark, signature, text, logo, username, oversaturated, undersaturated, overexposed, underexposed, noisy, grainy, jpeg artifacts, out of frame, mutation, ugly, poorly drawn face, poorly drawn hands
```

### פרופילים לפי סגנון (משתמש בוחר)

| פרופיל | תוספת שלילית |
|--------|----------------|
| **Portrait** | `bad face, asymmetrical eyes, crossed eyes, extra teeth, plastic skin` |
| **Product** | `cluttered background, wrong shadows, floating object` |
| **Landscape** | `flat lighting, dull colors, horizon tilt` |
| **Anime** | `3d render, realistic photo, western cartoon` |

---

## Prompt חיובי — מבנה אופטימלי

Janus-Pro חזק יותר ב-**prompts מפורטים** (לא מילה בודדת):

```
[Subject], [action/pose], [environment], [lighting], [style], [color palette], [mood], high detail, sharp focus
```

דוגמה:
```
A young woman in traditional red and white Afghan dress, standing in a sunlit courtyard, soft golden hour light, cinematic portrait, shallow depth of field, warm color palette, serene mood, high detail, sharp focus
```

---

## סטים מתחלפים ל-Landing (3 הצעות, נבחר אקראית ברענון)

### Set A — Portrait & character
| אייקון | Label | Prompt |
|--------|-------|--------|
| 👤 | Cinematic portrait | `Cinematic close-up portrait of a wise elder, dramatic side lighting, warm tones, shallow depth of field, high detail` |
| 🎭 | Fantasy character | `Fantasy warrior in ornate silver armor, misty forest background, epic fantasy art style, cool blue palette` |
| 👘 | Cultural attire | `Elegant figure in traditional embroidered clothing, soft studio lighting, rich textures, photorealistic` |

### Set B — Scenes & environments
| אייקון | Label | Prompt |
|--------|-------|--------|
| 🌆 | Cyberpunk city | `Rainy cyberpunk street at night, neon signs reflecting on wet pavement, moody atmosphere, cinematic wide shot` |
| 🏔️ | Mountain vista | `Snow-capped mountains at sunrise, golden light, mist in valleys, landscape photography style` |
| 🏠 | Cozy interior | `Cozy cabin interior with fireplace, warm ambient light, wooden textures, inviting atmosphere` |

### Set C — Creative & stylized
| אייקון | Label | Prompt |
|--------|-------|--------|
| 🎨 | Watercolor | `Watercolor painting of a lighthouse on rocky coast, soft pastel colors, artistic brush strokes` |
| 🚀 | Sci-fi | `Futuristic space station orbiting a blue planet, hard sci-fi illustration, crisp details` |
| 🐉 | Creature | `Majestic dragon perched on ancient ruins, fantasy illustration, dramatic clouds, vivid colors` |

### Set D — Product & minimal
| אייקון | Label | Prompt |
|--------|-------|--------|
| 📦 | Product shot | `Minimal product photo of a sleek smartwatch on marble surface, studio lighting, clean white background` |
| 🍽️ | Food | `Gourmet dish on ceramic plate, top-down view, natural light, food photography style` |
| 💎 | Abstract | `Abstract geometric composition, iridescent gradients, modern digital art, balanced symmetry` |

---

## כותרות Landing (אקראי ברענון)

```
What will you create today?
Describe your vision.
Turn words into images.
What scene do you imagine?
Let's bring your idea to life.
Create something unique.
Paint with prompts.
```

---

## בדיקות QA ל-prompts (להרצה ידנית + אוטומטית)

| ID | Prompt | ציפייה |
|----|--------|--------|
| P01 | `red apple on white table, studio light` | תפוח אדום ברור, רקע בהיר |
| P02 | `cyberpunk cat wearing sunglasses` | חתול + אווירה עירונית (artifacts אפשריים) |
| P03 | `mountain lake reflection sunset` | נוף כללי נכון |
| P04 | `portrait woman blue eyes brown hair` | פורטרט, פנים סבירות ב-384px |
| P05 | קצר: `dragon` | איכות נמוכה יותר — לוודא שה-UI מזהיר |
| P06 | + negative מלא | פחות blur/noise יחסית ל-P04 |

שמור תוצאות ב-`tests/fixtures/qa-runs/YYYY-MM-DD/` להשוואה ויזואלית.
