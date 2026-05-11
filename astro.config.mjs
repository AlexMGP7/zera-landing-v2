// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['4321-iek1rtsmuqsakffuazvx3-0c7ec6a5.us2.manus.computer'],
    },
  },
});
