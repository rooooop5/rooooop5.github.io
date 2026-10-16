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

## Deploy on Vercel

Import the repository in Vercel. It detects Vite automatically (build command `npm run build`, output directory `dist`), so no extra config is needed. Or from the terminal:

```bash
npx vercel
```
