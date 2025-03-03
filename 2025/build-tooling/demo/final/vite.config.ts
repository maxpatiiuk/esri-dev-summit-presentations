import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import chaosMonkey from "./support/chaosMonkey.mjs";

const API_URL = "/arcgis/rest/services/places-service";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    proxy: {
      [API_URL]: {
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
            apiUrl: API_URL,
            delay: 400,
            chaosRatio: 1,
            // https://developers.arcgis.com/rest/places/near-point-get/#response
            chaosErrors: [400, 401, 403, 500],
          },
        ])
      : undefined,
  ],
});
