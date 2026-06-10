import type { FluxMainToWorker, WorkerToMain } from "./types";

export type FluxClientCallbacks = {
  onMessage: (msg: WorkerToMain) => void;
};

export function createFluxWorker(callbacks: FluxClientCallbacks): Worker {
  const worker = new Worker(new URL("./flux.worker.ts", import.meta.url), {
    type: "module",
  });

  worker.addEventListener("message", (ev: MessageEvent<WorkerToMain>) => {
    callbacks.onMessage(ev.data);
  });

  return worker;
}

export function postToFluxWorker(worker: Worker, msg: FluxMainToWorker) {
  worker.postMessage(msg);
}
