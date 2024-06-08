import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@src": path.resolve(__dirname, "./src"),
      "@cmp": path.resolve(__dirname, "./src/components"),
      "@pbl": path.resolve(__dirname, "./src/public"),
    },
  },
});
