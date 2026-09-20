# Maze Visualizer

Nettside for å visualisere generering og løsning av todimensjonale
«perfekte» labyrinter. Du velger størrelse (kvadratisk), genereringsmetode og
hastighet, og ser labyrinten bygges trinnvis før løsningen tegnes opp med en
fargegradient fra hvit (start) til blå (slutt).

> **Status:** Kun rammeverk og UI-skall. Selve labyrint-logikken
> (generering, løsning og animasjon) er ikke implementert ennå.

## Tech stack

- [TypeScript](https://www.typescriptlang.org/) (strict)
- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)
- ESLint (flat config) + Prettier

## Kom i gang

Krever Node.js 22 eller nyere.

```bash
npm install
npm run dev
```

## Scripts

| Kommando               | Beskrivelse                     |
| ---------------------- | ------------------------------- |
| `npm run dev`          | Starter utviklingsserver (Vite) |
| `npm run build`        | Typecheck + produksjonsbygg     |
| `npm run preview`      | Forhåndsviser produksjonsbygget |
| `npm run typecheck`    | Kjører `tsc`                    |
| `npm run lint`         | Kjører ESLint                   |
| `npm run format`       | Formaterer med Prettier         |
| `npm run format:check` | Sjekker formatering             |
| `npm run test`         | Kjører testene én gang          |
| `npm run test:watch`   | Kjører tester i watch-modus     |

## npm-lås (release-age)

Prosjektet bruker npm sin innebygde `min-release-age`-innstilling i `.npmrc`:

```
min-release-age=14
```

Det betyr at `npm install` kun aksepterer pakkeversjoner som ble publisert for
**minst 14 dager siden**. Dette reduserer risikoen for å dra inn nylig
publiserte, kompromitterte pakker. Hvis en avhengighet mangler en versjon som
er gammel nok, feiler installasjonen.

Midlertidige unntak kan legges til i `.npmrc`:

```
min-release-age-exclude[]=pakkenavn
min-release-age-exclude[]=@scope/*
```

## Deploy til GitHub Pages

Deploy skjer automatisk via GitHub Actions ved push til `main`
(`.github/workflows/deploy.yml`).

**Én gang:** I repo-innstillingene under **Settings → Pages**, sett
**Build and deployment → Source** til **GitHub Actions**.

Siden publiseres deretter på:

```
https://sanderhhansen.github.io/maze-visualizer/
```

Vite er konfigurert med `base: '/maze-visualizer/'` i `vite.config.ts` for å
matche denne URL-en.

## Struktur

```
src/
  components/
    Controls.tsx     # Kontrollpanel (størrelse, metode, hastighet, generer)
    MazeGrid.tsx     # Visning av labyrinten (placeholder-grid)
  test/setup.ts      # Test-oppsett (jest-dom)
  App.tsx            # Layout og tilstand for kontrollene
  config.ts          # Konstanter og metodevalg
  index.css          # Tailwind-import og globalt tema
```
