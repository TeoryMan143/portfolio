import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categories } from './components/TechnologiesSection';

const tags = categories.flatMap((c) => c.items).map((t) => t.id);

const project = defineCollection({
  loader: glob({ base: './src/content/project', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.enum(tags).array(),
  }),
});

export const collections = { project };
