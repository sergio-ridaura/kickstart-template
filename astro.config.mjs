import { defineConfig } from "astro/config";
import "dotenv/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import node from "@astrojs/node";
import netlify from "@astrojs/netlify";
import mdx from "@astrojs/mdx";

const conf = {
  site: process.env.PUBLIC_SITE_URL,
  prefetch: true,
  integrations: [tailwind(), sitemap(), mdx()],
  devToolbar: {
    enabled: false,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
    // fallback: {
    //   es: "en",
    // },
  },
};

if (process.env.PUBLIC_SITE_ADAPTER === "vercel") {
  conf.output = "server";
  conf.adapter = vercel();
} else if (process.env.PUBLIC_SITE_ADAPTER === "netlify") {
  conf.output = "server";
  conf.adapter = netlify();
} else {
  conf.output = "server";
  conf.adapter = node({
    mode: "standalone",
  });
}

export default defineConfig(conf);
