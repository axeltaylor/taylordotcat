/// <reference types="@astrojs/image/client" />

interface ImportMetaEnv {
  readonly NOTION_API_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
