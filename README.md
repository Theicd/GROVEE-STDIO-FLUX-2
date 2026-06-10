# GROVEE STDIO

**SD 1.5** — AI image generation entirely in your browser (WebGPU / WASM). HAL-terminal UI.

---

## Open the app (not the GitHub repo page)

### Live web UI

**https://theicd.github.io/GROVEE-STDIO/**

This is the real interface. The repo page on github.com is only source code + this README.

> **First visit:** engine loads automatically in the browser (~2 GB cached once) + GPU prep (2–5 min) → enter prompt → **▶**  
> **Return visits:** loads from browser cache in seconds — no reinstall, no npm.

### If you see only this README on Pages

GitHub is serving the repo instead of the built app. Fix once:

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Push latest `main` (includes `.github/workflows/deploy-pages.yml`)
3. **Actions** tab → wait for **Deploy GitHub Pages** to finish (green)
4. Reload **https://theicd.github.io/GROVEE-STDIO/** — you should see **GROVEE STDIO** intro, not JanusGrove text

---

## Local (Windows)

```bat
start.bat
```

→ **http://127.0.0.1:5180**

## Build

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (`base: ./`) |
| `npm run build:pages` | Production build for GitHub Pages (`/GROVEE-STDIO/`) |
| `npm run qa:pages` | Smoke-check `dist/` after Pages build |
| `npm test` | Unit tests |

## Requirements

- Chrome / Edge **113+** with **WebGPU**
- ~4 GB RAM recommended
- Internet for first model download (Hugging Face CDN — works from Pages origin)

## Docs

- [docs/MODEL_CAPABILITIES.md](docs/MODEL_CAPABILITIES.md)
- [docs/QA_PLAN.md](docs/QA_PLAN.md)
- [docs/PROMPT_LIBRARY.md](docs/PROMPT_LIBRARY.md)
