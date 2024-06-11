export const prerender = true;

import type { APIRoute } from "astro";
import {
  PUBLIC_SITE_TITLE,
  PUBLIC_SITE_DESCRIPTION,
  PUBLIC_SITE_BACKGROUND_COLOR,
  PUBLIC_SITE_THEME_COLOR,
} from "@/src/consts";

const manifestTxt = `{
  "name": "${PUBLIC_SITE_TITLE}",
  "short_name": "${PUBLIC_SITE_TITLE}",
  "description": "${PUBLIC_SITE_DESCRIPTION}",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "${PUBLIC_SITE_BACKGROUND_COLOR}",
  "theme_color": "${PUBLIC_SITE_THEME_COLOR}",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "images/icon-48x48.png",
      "sizes": "48x48",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "images/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "images/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "images/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "images/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "images/maskable-icon.png",
      "sizes": "196x196",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "images/icon-256x256.png",
      "sizes": "256x256",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "images/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "images/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    }
  ],
  "screenshots" : [
    {
      "src": "images/screenshot1.png",
      "sizes": "720x540",
      "type": "image/png",
      "form_factor": "wide",
      "label": "Homescreen of Awesome App"
    },
    {
      "src": "images/screenshot2.png",
      "sizes": "540x720",
      "type": "image/png",
      "form_factor": "narrow",
      "label": "List of Awesome Resources available in Awesome App"
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
