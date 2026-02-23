import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

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
  plugins: [react()],
});
