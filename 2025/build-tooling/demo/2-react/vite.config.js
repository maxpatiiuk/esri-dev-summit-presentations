import { defineConfig } from "vite";
// Import the react plugin
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
  },
  // Add the react plugin to the list of Vite plugins
  // This improves live update and adds JSX support
  plugins: [react()],
});
