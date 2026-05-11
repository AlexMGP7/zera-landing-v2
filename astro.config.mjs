// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      chunkSizeWarningLimit: 1000,
    },
    server: {
      allowedHosts: ['4321-iek1rtsmuqsakffuazvx3-0c7ec6a5.us2.manus.computer'],
    },
    ssr: {
      noExternal: ['lenis'],
    }
  },
});
