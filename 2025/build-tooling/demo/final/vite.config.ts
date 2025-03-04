/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import chaosMonkey from "./support/chaosMonkey.js";

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
  plugins: [
    react(),
    process.env.CHAOS
      ? chaosMonkey([
          {
            apiUrl: "/arcgis",
            delay: 3000,
            chaosRatio: 0.1,
            // https://developers.arcgis.com/rest/places/near-point-get/#response
            chaosErrors: [400, 401, 403, 500],
          },
        ])
      : undefined,
  ],
  test: {
    setupFiles: "./src/setupTests.ts",
    browser: {
      enabled: true,
      provider: "playwright",
      // https://vitest.dev/guide/browser/playwright
      instances: [{ browser: "chromium" }],
    },
    onConsoleLog: (msg) => {
      const ignores = [/^Lit is in dev mode/, /^Using Calcite Components/];
      return !ignores.some((re) => re.test(msg));
    },
  },
});
