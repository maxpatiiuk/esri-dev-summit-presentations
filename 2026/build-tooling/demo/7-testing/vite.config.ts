/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    proxy: {
      "/arcgis": {
        target: "https://places-api.arcgis.com",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()],
  test: {
    setupFiles: "./src/setupTests.ts",
    browser: {
      enabled: true,
      provider: "playwright",
      // https://vitest.dev/guide/browser/playwright
      instances: [{ browser: "chromium" }],
    },
    onConsoleLog: (msg) => {
      const ignores = [/^Lit is in dev mode/u, /^Using Calcite Components/u];
      return !ignores.some((re) => re.test(msg));
    },
  },
});
