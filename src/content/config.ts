import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    pubDate: z.date(),
    description: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
