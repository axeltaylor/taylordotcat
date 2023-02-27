import image from '@astrojs/image'
// https://astro.build/config
import mdx from '@astrojs/mdx'
// https://astro.build/config
import react from '@astrojs/react'
import solid from '@astrojs/solid-js'
// https://astro.build/config
import tailwind from '@astrojs/tailwind'
import remarkDirective from 'remark-directive'
import remarkDirectiveRehype from 'remark-directive-rehype'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [solid(), tailwind(), image(), mdx(), react()],
  markdown: {
    remarkPlugins: [remarkDirective, remarkDirectiveRehype],
  },
})
