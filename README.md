# Sai Sreenivas Chintha — Astro Portfolio

A fast, resume-focused personal website built with Astro and ready for GitHub Pages.

## Recommended GitHub Pages setup

For a clean professional URL, create this repository on GitHub:

```txt
sensai99.github.io
```

Then your site will be available at:

```txt
https://sensai99.github.io
```

This project is already configured for that URL in `astro.config.mjs`.

## Run locally

```bash
npm install
npm run dev
```

## Build locally

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Create a new GitHub repository named `sensai99.github.io`.
2. Push this project to the `main` branch.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push a commit to `main`, or manually run the workflow from the **Actions** tab.

The workflow file is included here:

```txt
.github/workflows/deploy.yml
```

It builds the Astro site and publishes the `dist/` folder to GitHub Pages.

## If you use a project repository instead

If your repository is named something like `sai-astro-portfolio`, your URL will be:

```txt
https://sensai99.github.io/sai-astro-portfolio/
```

In that case, update `astro.config.mjs` to:

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sensai99.github.io',
  base: '/sai-astro-portfolio'
});
```

## Update content

Edit:

```txt
src/pages/index.astro
```

Your resume PDF lives at:

```txt
public/Sai_Sreenivas_Chintha_Resume.pdf
```
