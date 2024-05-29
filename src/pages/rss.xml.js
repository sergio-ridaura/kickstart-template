import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { PUBLIC_SITE_TITLE, PUBLIC_SITE_DESCRIPTION } from "@src/consts";

export async function GET(context) {
  const posts = await getCollection("documentation");
  return rss({
    title: PUBLIC_SITE_TITLE,
    description: PUBLIC_SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/documentation/${post.slug}/`,
    })),
  });
}
