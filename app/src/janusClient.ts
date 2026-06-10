import type { JanusMainToWorker, WorkerToMain } from "./types";

export type JanusClientCallbacks = {
  onMessage: (msg: WorkerToMain) => void;
};

export function createJanusWorker(callbacks: JanusClientCallbacks): Worker {
  const worker = new Worker(new URL("./janus.worker.ts", import.meta.url), {
    type: "module",
  });

  worker.addEventListener("message", (ev: MessageEvent<WorkerToMain>) => {
    callbacks.onMessage(ev.data);
  });

  return worker;
}

export function postToWorker(worker: Worker, msg: JanusMainToWorker) {
  worker.postMessage(msg);
}
