export const prerender = true;
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { PUBLIC_SITE_TITLE, PUBLIC_SITE_DESCRIPTION } from "@src/consts";
import { defaultLang } from "@src/i18n/ui";

const globals = await getCollection("globals");
const posts = await getCollection("documentation");
const allPosts = [...posts, ...globals];

export async function GET(context) {
  return rss({
    title: PUBLIC_SITE_TITLE,
    description: PUBLIC_SITE_DESCRIPTION,
    site: context.site,
    items: allPosts.map((post) => ({
      ...post.data,
    })),
    customData: `<language>${defaultLang}</language>`,
    stylesheet: "/css/rss.xsl",
  });
}
