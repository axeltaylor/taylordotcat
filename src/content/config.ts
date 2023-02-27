import { z, defineCollection } from 'astro:content'

const entriesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    type: z.enum(['blog', 'youtube']).default('blog'),
    publishDate: z
      .string()
      .default('')
      .transform((str) => (str ? new Date(str) : new Date(8640000000000000))),
    tags: z.string().array().optional(),
    cover: z.string().optional(),
    externalLink: z.string().url().optional(),
  }),
})

export const collections = {
  entries: entriesCollection,
}
