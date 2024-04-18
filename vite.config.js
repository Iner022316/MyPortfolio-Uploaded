import { defineConfig } from "vite";
import babel from "@vitejs/plugin-babel";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MyPortfolio-Uploaded/",
  plugins: [babel()],
});
