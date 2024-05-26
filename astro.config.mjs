import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://kickstart-template-demo.vercel.app/",
  prefetch: true,
  integrations: [tailwind(), sitemap()],
  devToolbar: {
    enabled: false,
  },
});
