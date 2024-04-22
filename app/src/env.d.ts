/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_APP_AUTH_TOKEN_STORAGE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}