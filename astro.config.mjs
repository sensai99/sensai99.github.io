import { defineConfig } from 'astro/config';

// For a GitHub user site, create a repo named: sensai99.github.io
// Final URL: https://sensai99.github.io
export default defineConfig({
  site: 'https://sensai99.github.io'
});

// If you instead deploy from a project repo, for example:
// https://github.com/sensai99/sai-astro-portfolio
// then use this config instead:
// export default defineConfig({
//   site: 'https://sensai99.github.io',
//   base: '/sai-astro-portfolio'
// });
