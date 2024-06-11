import "dotenv/config";
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

const conf = {};

if (process.env.PUBLIC_SITE_ADAPTER === "node") {
  conf.output = "server";
  conf.adapter = node({
    mode: "standalone",
  });
}

export default defineConfig({
  ...conf,
});
