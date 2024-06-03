import { z, defineCollection } from "astro:content";
import { PUBLIC_SITE_LANG, PUBLIC_SITE_LANG_DEFAULT } from "@src/consts";

export const postsCollection = defineCollection({
  type: "content",
  schema: z
    .object({
      isDraft: z.boolean().default(false),
      language: z.enum(PUBLIC_SITE_LANG).default(PUBLIC_SITE_LANG_DEFAULT),
      title: z.string(),
      description: z.string(),
      author: z.string(),
      tags: z.array(z.string()).optional(),
      pubDate: z.date(),
      upDate: z.date().optional(),
      image: z.string(),
    })
    .refine((data) => ({
      upDate: data.upDate ?? data.pubDate,
    })),
});
