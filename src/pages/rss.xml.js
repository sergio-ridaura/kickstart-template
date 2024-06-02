export const prerender = true;
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { PUBLIC_SITE_TITLE, PUBLIC_SITE_DESCRIPTION, PUBLIC_SITE_LANG_DEFAULT } from "@src/consts";

const globals = await getCollection("globals");
const posts = await getCollection("documentation");
const postsEs = await getCollection("es");
const allPosts = [...posts, ...postsEs, ...globals];

export async function GET(context) {
  return rss({
    title: PUBLIC_SITE_TITLE,
    description: PUBLIC_SITE_DESCRIPTION,
    site: context.site,
    items: allPosts.map((post) => ({
      ...post.data,
    })),
    customData: `<language>${PUBLIC_SITE_LANG_DEFAULT}</language>`,
    stylesheet: "/css/rss.xsl",
  });
}
