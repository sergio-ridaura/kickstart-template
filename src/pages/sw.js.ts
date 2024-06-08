export const prerender = true;
import type { APIRoute } from "astro";
import { PUBLIC_DEV_VERSION } from "@src/consts";

const serviceWorker = `
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("${PUBLIC_DEV_VERSION}").then((cache) => {
      return cache.addAll(
        [
          "/",
          "/es/",
          "/about/",
          "/es/about/",
          "/contact/",
          "/es/contact/",
          "/documentation/",
          "/es/documentation/",
          "/privacy-policy/",
          "/es/privacy-policy/",
          "/css/fonts.css",
          "/css/styles.css",
          "/fonts/Atkinson-Hyperlegible-Bold-102.eot",
          "/fonts/Atkinson-Hyperlegible-Bold-102.svg",
          "/fonts/Atkinson-Hyperlegible-Bold-102.ttf",
          "/fonts/Atkinson-Hyperlegible-Bold-102.woff",
          "/fonts/Atkinson-Hyperlegible-Bold-102a.woff2",
          "/fonts/Atkinson-Hyperlegible-BoldItalic-102.eot",
          "/fonts/Atkinson-Hyperlegible-BoldItalic-102.svg",
          "/fonts/Atkinson-Hyperlegible-BoldItalic-102.ttf",
          "/fonts/Atkinson-Hyperlegible-BoldItalic-102.woff",
          "/fonts/Atkinson-Hyperlegible-BoldItalic-102a.woff2",
          "/fonts/Atkinson-Hyperlegible-Italic-102.eot",
          "/fonts/Atkinson-Hyperlegible-Italic-102.svg",
          "/fonts/Atkinson-Hyperlegible-Italic-102.ttf",
          "/fonts/Atkinson-Hyperlegible-Italic-102.woff",
          "/fonts/Atkinson-Hyperlegible-Italic-102a.woff2",
          "/fonts/Atkinson-Hyperlegible-Regular-102.eot",
          "/fonts/Atkinson-Hyperlegible-Regular-102.svg",
          "/fonts/Atkinson-Hyperlegible-Regular-102.ttf",
          "/fonts/Atkinson-Hyperlegible-Regular-102.woff",
          "/fonts/Atkinson-Hyperlegible-Regular-102a.woff2",
          "/images/about.jpeg",
          "/images/default-placeholder.jpeg",
          "/images/first-post.jpeg",
          "/images/icon-48x48.png",
          "/images/icon-72x72.png",
          "/images/icon-96x96.png",
          "/images/icon-144x144.png",
          "/images/icon-192x192.png",
          "/images/icon-256x256.png",
          "/images/icon-384x384.png",
          "/images/icon-512x512.png",
          "/images/markdown-style-guide.jpeg",
          "/images/privacy-policy.jpeg",
          "/images/screenshot1.png",
          "/images/screenshot2.png",
          "/images/second-post.jpeg",
          "/images/third-post.jpeg",
          "/images/using-mdx.jpeg",
          "/favicon.svg",
          "/manifest.json",
          "/robots.txt",
          "/sitemap-0.xml",
          "/sitemap-index.xml",
        ]);
      })
    );
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });`;

export const GET: APIRoute = () => {
  return new Response(serviceWorker, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
