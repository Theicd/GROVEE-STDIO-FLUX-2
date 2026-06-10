import { UI_MODEL_IDS, type ModelId } from "./modelRegistry";

export type AppPhase = "start" | "loading" | "ready";

export type ModelProgressRow = {
  done: boolean;
  status: string;
};

export function shouldShowIntro(phase: AppPhase, loadedModelCount: number): boolean {
  return phase === "start" || (phase === "loading" && loadedModelCount === 0);
}

export function pickFirstReadyModel(loadedModels: readonly ModelId[]): ModelId | null {
  for (const id of UI_MODEL_IDS) {
    if (loadedModels.includes(id)) return id;
  }
  return loadedModels[0] ?? null;
}

export function shouldEnterStudio(phase: AppPhase, loadedModels: readonly ModelId[]): boolean {
  return phase === "loading" && loadedModels.length > 0;
}

export function listPendingModels(
  modelProgress: Partial<Record<ModelId, ModelProgressRow>>,
  loadedModels: readonly ModelId[],
): ModelId[] {
  return UI_MODEL_IDS.filter((id) => {
    const row = modelProgress[id];
    if (!row || loadedModels.includes(id) || row.done || row.status.startsWith("Unavailable")) return false;
    return true;
  });
}

export function resolveQueueModelAt(
  queue: readonly ModelId[],
  index: number,
  loadedModels: readonly ModelId[],
  failedModels: ReadonlySet<ModelId>,
): ModelId | null {
  for (let i = index; i < queue.length; i += 1) {
    const modelId = queue[i];
    if (!loadedModels.includes(modelId) && !failedModels.has(modelId)) return modelId;
  }
  return null;
}

export function hasBackgroundDownloads(
  queue: readonly ModelId[],
  loadedModels: readonly ModelId[],
  failedModels: ReadonlySet<ModelId>,
): boolean {
  return queue.some((id) => !loadedModels.includes(id) && !failedModels.has(id));
}
