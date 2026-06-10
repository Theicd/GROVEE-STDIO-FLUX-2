import type { SdMainToWorker, WorkerToMain } from "./types";

export type SdClientCallbacks = {
  onMessage: (msg: WorkerToMain) => void;
};

export function createSdWorker(callbacks: SdClientCallbacks): Worker {
  const worker = new Worker(new URL("./sd.worker.ts", import.meta.url), {
    type: "module",
  });

  worker.addEventListener("message", (ev: MessageEvent<WorkerToMain>) => {
    callbacks.onMessage(ev.data);
  });

  return worker;
}

export function postToSdWorker(worker: Worker, msg: SdMainToWorker) {
  worker.postMessage(msg);
}
