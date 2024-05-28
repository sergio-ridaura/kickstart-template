import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import "dotenv/config";
import node from "@astrojs/node";

const site = "https://kickstart-template-demo.vercel.app/";

let conf = {
  site,
  prefetch: true,
  integrations: [tailwind(), sitemap()],
  devToolbar: {
    enabled: false,
  },
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
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
