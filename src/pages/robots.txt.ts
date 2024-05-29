export const prerender = true;
import type { APIRoute } from "astro";
import { PUBLIC_SITE_URL } from "@src/consts";

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${new URL("sitemap-index.xml", PUBLIC_SITE_URL).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
