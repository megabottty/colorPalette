# Dexii colour palette

Designer hand-off page for the Dexii app: every theme, colour role and hex value as written in code.

**Live page:** https://dexii-palette.web.app

## Development

An Angular 21 app. It needs Node 24 (`nvm use` picks it up from `.nvmrc`).

```bash
npm install
npm start        # dev server at http://localhost:4200
npm test         # unit tests
npm run build    # production build in dist/dexii-palette/browser
```

## Deploying

The live page is on Firebase Hosting (project `dexii-palette`):

```bash
npm run build
firebase deploy --only hosting
```

Pushing to `main` also builds and deploys a mirror to GitHub Pages at
https://megabottty.github.io/colorPalette/ (`.github/workflows/deploy.yml`).

## Updating the colours

The themes in `src/app/data/palette.data.ts` are a copy of `THEME_DEFINITIONS` in Dexii's
`src/app/core/services/theme.service.ts`. When themes change there, copy them across and update
`GENERATED_ON`. Contrast ratios are calculated from the hex values, so nothing else needs editing.
