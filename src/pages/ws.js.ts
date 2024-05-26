import type { APIRoute } from "astro";
import pkg from "@/package.json";

const serviceWorker = `

  self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open("${pkg.version}").then((cache) => {
        return cache.addAll([
          "/**/*.*"
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
  });
}`;

export const GET: APIRoute = () => {
  return new Response(serviceWorker, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
