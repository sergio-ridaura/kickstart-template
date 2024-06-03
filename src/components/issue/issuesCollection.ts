import { z, defineCollection } from "astro:content";
import { PUBLIC_SITE_LANG, PUBLIC_SITE_LANG_DEFAULT } from "@src/consts";

export const issuesCollection = defineCollection({
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
      milestone: z.object({
        title: z.string(),
        url: z.string(),
      }),
      status: z
        .enum(["backlog", "todo", "doing", "review", "test", "done"])
        .default("backlog"),
      efforts: z.number(),
      responsible: z.array(z.string()),
      startDate: z.date().optional(),
      endDate: z.date().optional(),
      develop: z
        .object({
          title: z.string(),
          url: z.string(),
        })
        .optional(),
    })
    .refine((data) => ({
      upDate: data.upDate ?? data.pubDate,
    })),
});
