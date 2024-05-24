import type { APIRoute } from "astro";
import pkg from "@/../package.json";

const manifestTxt = `
{
  "name": "${pkg.title}",
  "short_name": "${pkg.title}",
  "description": "${pkg.description}",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "${import.meta.env.PUBLIC_BACKGROUND_COLOR}",
  "theme_color": "${import.meta.env.PUBLIC_THEME_COLOR}",
  "icons": [
    {
      "src": "/images/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/images/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}`;

export const GET: APIRoute = () => {
  return new Response(manifestTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
