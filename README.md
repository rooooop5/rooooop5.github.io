# Saswata Mondal — portfolio

A single-page, frontend-only portfolio built with Vite, React, TypeScript, Tailwind CSS v4 and shadcn/ui.

## Run it

```bash
npm install
npm run dev
```

`npm run build` type-checks and writes the static site to `dist/`.

## Edit the content

All text lives in two files, so you rarely need to touch the components:

- `src/data/profile.ts`: name, role, intro and GitHub link.
- `src/data/projects.ts`: the six featured projects, the Zimi card and the C experiments card.

To show a real recording of Zimi, put the file in `public/` (for example `public/zimi.gif`) and set `gif: "/zimi.gif"` on the `zimi` object. Until then the card draws animated eyes.

Shopko has no public repository yet, so its card shows "Private repo". Add a `links` entry when it's published.

## Deploy

The live site is on GitHub Pages at https://rooooop5.github.io/. To publish changes:

```bash
npm run deploy
```

That builds the site and pushes `dist/` to the `gh-pages` branch, which Pages serves.

It also works on Vercel: import the repository and Vercel detects Vite automatically.
