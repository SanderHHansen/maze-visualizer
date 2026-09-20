# Maze Visualizer

A website for visualizing the generation and solving of two-dimensional
"perfect" mazes. You choose the size (square), generation method, and speed,
then watch the maze build up step by step before the solution is drawn with a
color gradient from white (start) to blue (finish).

> **Status:** Framework and UI shell only. The maze logic itself (generation,
> solving, and animation) is not implemented yet.

## Tech stack

- [TypeScript](https://www.typescriptlang.org/) (strict)
- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)
- ESLint (flat config) + Prettier

## Getting started

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

## Scripts

| Command                | Description                  |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Start the dev server (Vite)  |
| `npm run build`        | Typecheck + production build |
| `npm run preview`      | Preview the production build |
| `npm run typecheck`    | Run `tsc`                    |
| `npm run lint`         | Run ESLint                   |
| `npm run format`       | Format with Prettier         |
| `npm run format:check` | Check formatting             |
| `npm run test`         | Run the tests once           |
| `npm run test:watch`   | Run tests in watch mode      |

## npm release-age lock

The project uses npm's built-in `min-release-age` setting in `.npmrc`:

```
min-release-age=14
```

This means `npm install` only accepts package versions that were published
**at least 14 days ago**. It reduces the risk of pulling in recently published,
compromised packages. If a dependency has no version old enough, the install
fails.

Temporary exceptions can be added to `.npmrc`:

```
min-release-age-exclude[]=package-name
min-release-age-exclude[]=@scope/*
```

## Deploying to GitHub Pages

Deployment runs automatically via GitHub Actions on every push to `main`
(`.github/workflows/deploy.yml`).

**One-time setup:** In the repository settings under **Settings → Pages**, set
**Build and deployment → Source** to **GitHub Actions**.

The site is then published at:

```
https://sanderhhansen.github.io/maze-visualizer/
```

Vite is configured with `base: '/maze-visualizer/'` in `vite.config.ts` to match
that URL.

## Structure

```
src/
  components/
    Controls.tsx     # Control panel (size, method, speed, generate)
    MazeGrid.tsx     # Maze display (placeholder grid)
  test/setup.ts      # Test setup (jest-dom)
  App.tsx            # Layout and control state
  config.ts          # Constants and method options
  index.css          # Tailwind import and global theme
```
