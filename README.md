# GROVEE STDIO FLUX 2

**FLUX.2 Klein 4B** — AI image generation entirely in your browser (WebGPU). HAL-terminal UI.

This is a **separate product** from [GROVEE STDIO (SD 1.5)](https://github.com/Theicd/GROVEE-STDIO). Different repo, different model (~12 GB), different live URL.

---

## Open the app (not the GitHub repo page)

### Live web UI

**https://theicd.github.io/GROVEE-STDIO-FLUX-2/**

This is the real interface. The repo page on github.com is only source code + this README.

> **First visit:** FLUX.2 Klein downloads in the browser (~12 GB, cached locally via OPFS) + GPU warmup (several minutes on first generate) → enter prompt → **▶**  
> **Return visits:** model loads from browser cache — no reinstall, no npm.

### Deploy / update the live UI

Same pattern as [GROVEE STDIO (SD 1.5)](https://github.com/Theicd/GROVEE-STDIO): built files live on the **`gh-pages`** branch, not on `main`.

```bash
npm run deploy:pages
```

One-time repo setup: **Settings → Pages → Source: Deploy from branch → `gh-pages` / `/`**

### If you see only this README on Pages

`main` is source code only. Point Pages at **`gh-pages`**, then run `npm run deploy:pages` and reload **https://theicd.github.io/GROVEE-STDIO-FLUX-2/**

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
| `npm run build:pages` | Production build for GitHub Pages (`/GROVEE-STDIO-FLUX-2/`) |
| `npm run deploy:pages` | Build + push `dist/` to `gh-pages` (updates live URL) |
| `npm run qa:pages` | Smoke-check `dist/` after Pages build |
| `npm test` | Unit tests |

## Requirements

- Chrome / Edge **113+** with **WebGPU** and **shader-f16**
- ~8 GB RAM recommended
- Internet for first model download ([Hugging Face — ryanhlewis/flux2-klein-4b-webgpu-lowbit](https://huggingface.co/ryanhlewis/flux2-klein-4b-webgpu-lowbit))

## Docs

- [docs/MODEL_CAPABILITIES.md](docs/MODEL_CAPABILITIES.md)
- [docs/QA_PLAN.md](docs/QA_PLAN.md)
- [docs/PROMPT_LIBRARY.md](docs/PROMPT_LIBRARY.md)

## Related

| Product | Model | Live URL |
|---------|-------|----------|
| **GROVEE STDIO FLUX 2** (this repo) | FLUX.2 Klein 4B WebGPU | https://theicd.github.io/GROVEE-STDIO-FLUX-2/ |
| [GROVEE STDIO](https://github.com/Theicd/GROVEE-STDIO) | Stable Diffusion 1.5 | https://theicd.github.io/GROVEE-STDIO/ |
