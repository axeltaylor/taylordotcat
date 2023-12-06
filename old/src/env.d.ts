/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly variable: string
  readonly GHOST_KEY: string
  readonly GHOST_URL: string
  readonly GHOST_STATIC_URL: string
  readonly GHOST_REPLACE_STATIC_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
