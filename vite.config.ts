import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.join(__dirname, "app"),
  // FLUX engine scripts live in app/public/flux2/ (not repo-root public/).
  publicDir: path.join(__dirname, "app", "public"),
  base: process.env.VITE_BASE ?? "./",
  plugins: [react()],
  worker: {
    format: "es",
  },
  build: {
    outDir: path.join(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("onnxruntime-web")) return "onnxruntime";
        },
      },
    },
  },
});
