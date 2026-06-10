import { afterEach, describe, expect, it, vi } from "vitest";

import {
  deleteGalleryItem,
  loadGalleryFromStore,
  saveGalleryItem,
  trimGalleryIfNeeded,
} from "./galleryStore";
import type { GenerationItem } from "./types";

const sampleItem = (id: string, createdAt: number): GenerationItem => ({
  id,
  prompt: "test prompt",
  negativePrompt: "",
  imageUrl: "blob:fake",
  width: 512,
  height: 512,
  durationMs: 1000,
  createdAt,
  modelId: "sd15",
});

function makeReq<T>(result: T) {
  const req = { result, onsuccess: null as (() => void) | null, onerror: null as (() => void) | null };
  queueMicrotask(() => req.onsuccess?.());
  return req;
}

function stubIndexedDb(store: Record<string, unknown>) {
  const mockTx = {
    objectStore: () => store,
    oncomplete: null as (() => void) | null,
    onerror: null as (() => void) | null,
  };
  const originalTransaction = () => {
    queueMicrotask(() => mockTx.oncomplete?.());
    return mockTx;
  };
  const mockDb = {
    transaction: originalTransaction,
    close: vi.fn(),
    objectStoreNames: { contains: () => true },
  };
  vi.stubGlobal(
    "indexedDB",
    {
      open: () => {
        const req = {
          onsuccess: null as (() => void) | null,
          onerror: null,
          onupgradeneeded: null,
          result: mockDb,
        };
        queueMicrotask(() => req.onsuccess?.());
        return req;
      },
    } as unknown as IDBFactory,
  );
}

describe("galleryStore", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("persists and loads items with blob URLs", async () => {
    const stored = [
      {
        ...sampleItem("a", 2),
        blob: new Blob([new Uint8Array([1, 2, 3])], { type: "image/png" }),
      },
    ];
    stubIndexedDb({
      put: () => makeReq(undefined),
      getAll: () => makeReq(stored),
      delete: () => makeReq(undefined),
    });
    vi.stubGlobal("URL", { createObjectURL: vi.fn(() => "blob:restored") });

    const blob = new Blob([new Uint8Array([9])], { type: "image/png" });
    await saveGalleryItem(sampleItem("a", 2), blob);

    const loaded = await loadGalleryFromStore();
    expect(loaded).toHaveLength(1);
    expect(loaded[0].imageUrl).toBe("blob:restored");
    expect(loaded[0].prompt).toBe("test prompt");
  });

  it("deletes by id", async () => {
    const del = vi.fn(() => makeReq(undefined));
    stubIndexedDb({ put: () => makeReq(undefined), getAll: () => makeReq([]), delete: del });
    await deleteGalleryItem("gone");
    expect(del).toHaveBeenCalled();
  });

  it("trimGalleryIfNeeded is a no-op under cap", async () => {
    const del = vi.fn(() => makeReq(undefined));
    stubIndexedDb({
      put: () => makeReq(undefined),
      getAll: () => makeReq([{ ...sampleItem("a", 1), blob: new Blob() }]),
      delete: del,
    });
    await trimGalleryIfNeeded();
    expect(del).not.toHaveBeenCalled();
  });
});
