import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import "dotenv/config";

const site = "https://kickstart-template-demo.vercel.app/";

let conf = {
  site,
  prefetch: true,
  integrations: [tailwind(), sitemap()],
  devToolbar: {
    enabled: false,
  },
};

if (process.env.PUBLIC_ADAPTER === "vercel") {
  conf = {
    site: process.env.PUBLIC_SITE,
    prefetch: true,
    integrations: [tailwind(), sitemap()],
    devToolbar: {
      enabled: false,
    },
    output: "server",
    adapter: vercel(),
  };
}

export default defineConfig(conf);
