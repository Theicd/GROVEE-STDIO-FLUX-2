import type { SanaMainToWorker, WorkerToMain } from "./types";

export type SanaClientCallbacks = {
  onMessage: (msg: WorkerToMain) => void;
};

export function createSanaWorker(callbacks: SanaClientCallbacks): Worker {
  const worker = new Worker(new URL("./sana.worker.ts", import.meta.url), { type: "module" });
  worker.addEventListener("message", (ev: MessageEvent<WorkerToMain>) => {
    callbacks.onMessage(ev.data);
  });
  return worker;
}

export function postToSanaWorker(worker: Worker, msg: SanaMainToWorker) {
  worker.postMessage(msg);
}
