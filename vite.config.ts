import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

const LOCALHOST_PORT = 3000;

export default defineConfig(() => ({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: LOCALHOST_PORT,
    proxy: {
      "/v1": {
        target: "https://api.oireachtas.ie/v1",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  test: {
    globals: true,
    dir: "src",
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    coverage: {
      reporter: ["text", "html"],
      exclude: ["node_modules/", "src/setupTests.ts"],
    },
  },
}));
