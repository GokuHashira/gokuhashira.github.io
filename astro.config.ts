import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://gokuhashira.github.io',
  base: '/', // No subdirectory needed for username.github.io repos
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })]
});