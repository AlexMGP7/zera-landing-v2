// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://AlexMGP7.github.io',
  base: '/zera-landing-v2',
  trailingSlash: 'always',
  server: {
    allowedHosts: ['4321-iek1rtsmuqsakffuazvx3-0c7ec6a5.us2.manus.computer'],
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      chunkSizeWarningLimit: 1000,
    },
    ssr: {
      noExternal: ['lenis'],
    }
  },
});
