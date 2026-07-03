# Grostulvegen 97 - gjesteguide

Statisk nettside med praktisk informasjon til leietakere av hytta på Grostulvegen 97,
Bø i Telemark. Bygget med React + Vite, publiseres automatisk til GitHub Pages.

## Live side

https://mkarthum.github.io/Grostulvegen97/

## Oppdatere innhold

Alt tekstinnhold ligger samlet i `src/data.ts` (norsk og engelsk side om side).
Endre teksten der, commit og push til `main`, så bygger og publiserer GitHub Actions
siden automatisk innen et par minutter.

## Kjøre lokalt

```
npm install
npm run dev
```

## Bygge manuelt

```
npm install
npm run build
```
Resultatet havner i `dist/`.
