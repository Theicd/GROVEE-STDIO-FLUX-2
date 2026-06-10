/** Janus-Pro browser defaults — aligned with native inference (cfg≈5, temp≈1). */
export type GenerationSettings = {
  doSample: boolean;
  temperature: number;
  topP: number;
  topK: number;
  guidanceScale: number;
};

export const DEFAULT_GENERATION: GenerationSettings = {
  doSample: true,
  temperature: 1.0,
  topP: 0.95,
  topK: 50,
  /** Classifier-free guidance — critical for Janus image quality (native default ~5). */
  guidanceScale: 5.0,
};

/** HF model-card example — much stronger than a one-line object prompt. */
export const QUALITY_DEMO_PROMPT =
  "A stunning princess from Kabul in red and white traditional clothing, blue eyes, brown hair, soft natural lighting, photorealistic portrait, high detail, sharp focus";

/** SD 1.5 WebGPU defaults — aligned with Zhare-AI / Intel Web AI Showcase. */
export type SdGenerationSettings = {
  numInferenceSteps: number;
  guidanceScale: number;
  height: number;
  width: number;
};

export const SD_DEFAULT_GENERATION: SdGenerationSettings = {
  numInferenceSteps: 20,
  guidanceScale: 7.5,
  height: 512,
  width: 512,
};

/** FLUX.2 Klein defaults — aligned with ryanhlewis/flux2-webgpu benchmarks. */
export type FluxGenerationSettings = {
  numInferenceSteps: number;
  guidanceScale: number;
  height: number;
  width: number;
};

export const FLUX_DEFAULT_GENERATION: FluxGenerationSettings = {
  numInferenceSteps: 4,
  guidanceScale: 3.5,
  height: 512,
  width: 512,
};

/** SANA 0.6B defaults — aligned with NVlabs / brad-agi web pipeline. */
export type SanaGenerationSettings = {
  numInferenceSteps: number;
  guidanceScale: number;
  height: number;
  width: number;
  seed?: number;
};

export const SANA_DEFAULT_GENERATION: SanaGenerationSettings = {
  numInferenceSteps: 20,
  guidanceScale: 4.5,
  height: 1024,
  width: 1024,
};

/** DreamLite-Mobile — distilled 4–8 step path, no CFG (official diffusers defaults). */
export type DreamLiteGenerationSettings = {
  numInferenceSteps: number;
  height: number;
  width: number;
  seed?: number;
};

export const DREAMLITE_DEFAULT_GENERATION: DreamLiteGenerationSettings = {
  numInferenceSteps: 8,
  height: 1024,
  width: 1024,
};
