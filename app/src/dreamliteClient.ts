import type { DreamLiteMainToWorker, WorkerToMain } from "./types";

export type DreamLiteClientCallbacks = {
  onMessage: (msg: WorkerToMain) => void;
};

export function createDreamLiteWorker(callbacks: DreamLiteClientCallbacks): Worker {
  const worker = new Worker(new URL("./dreamlite.worker.ts", import.meta.url), { type: "module" });
  worker.addEventListener("message", (ev: MessageEvent<WorkerToMain>) => {
    callbacks.onMessage(ev.data);
  });
  return worker;
}

export function postToDreamLiteWorker(worker: Worker, msg: DreamLiteMainToWorker) {
  worker.postMessage(msg);
}
