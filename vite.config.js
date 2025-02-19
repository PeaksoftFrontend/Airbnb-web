import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export const viteConfig = defineConfig({
  plugins: [react(), svgr()],
});

// Убедитесь, что Vite получает правильный объект
export default viteConfig;
