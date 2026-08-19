# Resume Website

My personal resume and portfolio website, including an interactive shrimp-tank easter egg.

The site is built with React, TypeScript, Material UI, and Vite.

**Website:** [lucyrandewich.co.uk](https://lucyrandewich.co.uk)

## Running locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Vite prints the local URL when the server starts (normally `http://localhost:5173`).

## Project structure

```text
src/
  assets/       Imported project images and documents
  components/   Feature folders with rendering, data, types, and helpers
  theme/        Central colour, typography, layout, and shadow tokens
public/
  assets/       Static favicons and shrimp-game artwork
dist/           Tracked production output used by the deployment workflow
```

The Shrimp Tank keeps its game logic, audio hook, sprites, controls, constants, and CSS inside `src/components/ShrimpTank`.

## Quality checks

```bash
npm run format:check
npm run lint
npm run build
```

Run `npm run format` or `npm run lint:fix` to apply automatic fixes.

## Deployment

`npm run deploy` builds the application and publishes `dist` with `gh-pages`. The production build copies `public/CNAME` into `dist/CNAME`.
