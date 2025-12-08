/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE: string; // matches your .env variable
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
