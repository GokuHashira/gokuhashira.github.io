import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? 'https://gokuhashira.github.io' : 'http://localhost:4321',
   base: process.env.CI ? '/gokul-astro-project' : '',
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })]
});