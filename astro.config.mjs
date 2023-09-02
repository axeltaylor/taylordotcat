// https://astro.build/config
import mdx from '@astrojs/mdx'
// https://astro.build/config
import svelte from '@astrojs/svelte'
// https://astro.build/config
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind(), mdx()],
  markdown: {
    remarkPlugins: [remarkDirective, remarkDirectiveRehype],
  },
})
