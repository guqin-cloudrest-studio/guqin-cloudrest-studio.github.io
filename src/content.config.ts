import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: 'src/posts/**/*.md', base: '.' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    slug: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
