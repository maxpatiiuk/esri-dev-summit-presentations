import react from "@vitejs/plugin-react";
import Sonda from "sonda/vite";
import { playwright } from "@vitest/browser-playwright";
import { defineConfig } from "vitest/config";
import chaosMonkey from "./support/chaosMonkey.js";

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true,
    proxy: {
      "/arcgis": {
        target: "https://services.arcgis.com",
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(
            /^\/arcgis(?=\?|$)/u,
            "/V6ZHFr6zdgNZuVG0/arcgis/rest/services/NY%20Educational%20Attainment/FeatureServer/0/query",
          ),
      },
    },
  },
  plugins: [
    react(),
    process.env.CHAOS
      ? chaosMonkey([
          {
            apiUrl: "/arcgis",
            chaosRatio: 0.5,
            chaosErrors: [400, 401, 403, 500],
          },
        ])
      : undefined,
    process.env.SONDA
      ? Sonda({
          gzip: true,
          deep: true,
        })
      : undefined,
  ],
  test: {
    setupFiles: "./src/setupTests.ts",
    browser: {
      enabled: true,
      provider: playwright(),
      // https://vitest.dev/config/browser/playwright
      instances: [{ browser: "chromium" }],
      viewport: { width: 800, height: 600 },
    },
    onConsoleLog: (msg) => {
      const ignores = [/^Lit is in dev mode/u, /^Using Calcite Components/u];
      return !ignores.some((re) => re.test(msg));
    },
  },
});
