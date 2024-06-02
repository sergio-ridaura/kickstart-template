import { z, defineCollection } from "astro:content";
import { PUBLIC_SITE_LANG, PUBLIC_SITE_LANG_DEFAULT } from "@src/consts";

export const milestonesCollection = defineCollection({
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
      image: z.string().optional(),
      issues: z.array(
        z.object({
          title: z.string(),
          url: z.string(),
        })
      ),
      status: z.enum(["backlog", "doing", "done"]).default("backlog"),
      efforts: z.number(),
      startDate: z.date().optional(),
      endDate: z.date().optional(),
    })
    .refine((data) => ({
      upDate: data.upDate ?? data.pubDate,
    })),
});
