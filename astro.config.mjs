// https://astro.build/config
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'

// https://astro.build/config
import solidJs from '@astrojs/solid-js'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), solidJs()],
  markdown: {
    remarkPlugins: [remarkDirective, remarkDirectiveRehype],
  },
})
