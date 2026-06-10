import type { GenerationItem } from "./types";

const DB_NAME = "janusgrove-gallery";
const STORE_NAME = "items";
const DB_VERSION = 1;
const MAX_ITEMS = 48;

export type StoredGalleryItem = {
  id: string;
  prompt: string;
  negativePrompt: string;
  width: number;
  height: number;
  durationMs: number;
  createdAt: number;
  modelId?: GenerationItem["modelId"];
  blob: Blob;
};

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onerror = () => reject(req.error ?? new Error("IndexedDB open failed"));
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };
    req.onsuccess = () => resolve(req.result);
  });
}

function runTransaction<T>(
  mode: IDBTransactionMode,
  fn: (store: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  return openDb().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, mode);
        const store = tx.objectStore(STORE_NAME);
        const req = fn(store);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error ?? new Error("IndexedDB request failed"));
        tx.oncomplete = () => db.close();
        tx.onerror = () => reject(tx.error ?? new Error("IndexedDB transaction failed"));
      }),
  );
}

export async function loadGalleryFromStore(): Promise<GenerationItem[]> {
  const rows = await runTransaction<StoredGalleryItem[]>("readonly", (store) => store.getAll());
  return rows
    .sort((a, b) => b.createdAt - a.createdAt)
    .map((row) => ({
      id: row.id,
      prompt: row.prompt,
      negativePrompt: row.negativePrompt,
      imageUrl: URL.createObjectURL(row.blob),
      width: row.width,
      height: row.height,
      durationMs: row.durationMs,
      createdAt: row.createdAt,
      modelId: row.modelId,
    }));
}

export async function saveGalleryItem(item: GenerationItem, blob: Blob): Promise<void> {
  const record: StoredGalleryItem = {
    id: item.id,
    prompt: item.prompt,
    negativePrompt: item.negativePrompt,
    width: item.width,
    height: item.height,
    durationMs: item.durationMs,
    createdAt: item.createdAt,
    modelId: item.modelId,
    blob,
  };

  try {
    await runTransaction("readwrite", (store) => store.put(record));
  } catch (err) {
    if (!isQuotaError(err)) throw err;
    await pruneOldestItems(8);
    await runTransaction("readwrite", (store) => store.put(record));
  }
}

export async function deleteGalleryItem(id: string): Promise<void> {
  await runTransaction("readwrite", (store) => store.delete(id));
}

async function pruneOldestItems(count: number): Promise<void> {
  const rows = await runTransaction<StoredGalleryItem[]>("readonly", (store) => store.getAll());
  const oldest = [...rows].sort((a, b) => a.createdAt - b.createdAt).slice(0, count);
  for (const row of oldest) {
    await runTransaction("readwrite", (store) => store.delete(row.id));
  }
}

export async function trimGalleryIfNeeded(): Promise<void> {
  const rows = await runTransaction<StoredGalleryItem[]>("readonly", (store) => store.getAll());
  if (rows.length <= MAX_ITEMS) return;
  const excess = rows.length - MAX_ITEMS;
  const oldest = [...rows].sort((a, b) => a.createdAt - b.createdAt).slice(0, excess);
  for (const row of oldest) {
    await runTransaction("readwrite", (store) => store.delete(row.id));
  }
}

function isQuotaError(err: unknown): boolean {
  if (!(err instanceof DOMException)) return false;
  return err.name === "QuotaExceededError" || err.code === 22;
}
