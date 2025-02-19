import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export const viteConfig = defineConfig({
  plugins: [react(), svgr()],
});
