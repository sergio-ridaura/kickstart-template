import { z, defineCollection } from "astro:content";

const documentation = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    link: z.string(),
  }),
});

const globalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    link: z.string(),
  }),
});

export const collections = {
  documentation,
  globalCollection,
};
