import image from '@astrojs/image'
// https://astro.build/config
import mdx from '@astrojs/mdx'
// https://astro.build/config
import react from '@astrojs/react'
import solid from '@astrojs/solid-js'
// https://astro.build/config
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    solid(),
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
    mdx(),
    react(),
  ],
})
