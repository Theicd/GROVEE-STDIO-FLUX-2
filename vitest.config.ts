import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    environment: "node",
    include: ["app/src/**/*.test.ts"],
    exclude: [
      "app/src/fluxPipeline.test.ts",
      "app/src/sanaPipeline.test.ts",
    ],
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "app/src"),
    },
  },
});
