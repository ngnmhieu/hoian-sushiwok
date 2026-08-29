// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Output goes straight into /docs, which GitHub Pages serves for this repo.
// public/CNAME and public/.nojekyll are copied on every build — do not move them
// back into docs/, the build wipes that folder.
export default defineConfig({
  site: 'https://hoian-sushiwok.de',
  outDir: './docs',
  trailingSlash: 'ignore',
  integrations: [react(), sitemap()],
  build: { format: 'directory' },
});
