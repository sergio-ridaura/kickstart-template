import { z, defineCollection } from "astro:content";

const globalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  globalCollection,
};
