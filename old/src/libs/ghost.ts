import GhostContentAPI from '@tryghost/content-api'
export type { PostOrPage as Post } from '@tryghost/content-api'
// Create API instance with site credentials
export const ghostClient = new GhostContentAPI({
  url: import.meta.env.GHOST_URL,
  key: import.meta.env.GHOST_KEY,
  version: 'v5.0',
})

export const findAndReplaceAssetUrl = (original: string): string => {
  return original.replaceAll(
    import.meta.env.GHOST_REPLACE_STATIC_URL,
    import.meta.env.GHOST_STATIC_URL,
  )
}
