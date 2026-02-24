import react from "@vitejs/plugin-react";
import Sonda from "sonda/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
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
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    process.env.SONDA
      ? Sonda({
          gzip: true,
          deep: true,
        })
      : undefined,
  ],
});
