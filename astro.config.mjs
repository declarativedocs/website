// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ddf.dev',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
