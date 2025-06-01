import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://gokuhashira.github.io',
  base: process.env.CI ? '/gokul-astro-project' : '/',  // Use base only in production
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })]
});