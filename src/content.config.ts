import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    coverImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    description: z.string(),
    order: z.number(),
    section: z.enum(['venture', 'app']),
    featured: z.boolean().default(false),
    role: z.string().optional(),
    status: z.string().optional(),
    /** "owner/name" on GitHub; its stars, forks and language are fetched at build time */
    repo: z.string().optional(),
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
  }),
});

const talks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/talks' }),
  schema: z.object({
    title: z.string(),
    event: z.string(),
    date: z.coerce.date(),
    link: z.string().url().optional(),
  }),
});

const hackathons = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/hackathons' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    event: z.string().optional(),
    link: z.string().url().optional(),
  }),
});

export const collections = { blog, projects, talks, hackathons };
