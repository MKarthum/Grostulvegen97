# Grostulvegen 97 - gjesteguide

Statisk nettside med praktisk informasjon til leietakere av hytta på Grostulvegen 97,
Bø i Telemark. Bygget med React + Vite, publiseres automatisk til GitHub Pages.

## Live side

https://mkarthum.github.io/Grostulvegen97/

## Kjøre lokalt

```
npm install
npm run dev
```

Åpne http://localhost:3000/Grostulvegen97/ i nettleseren.

## Redigere norsk innhold

All norsk tekst ligger i `src/content/no.ts`: overskrifter, adresse, wifi,
dør- og vanninstruksjoner, sjekkliste, turer, kontaktinfo osv. Endre teksten
der og lagre.

## Redigere engelsk innhold

All engelsk tekst ligger i den tilsvarende filen `src/content/en.ts`, med
nøyaktig samme struktur som den norske filen. Husk å oppdatere begge filene
når noe endres, slik at norsk og engelsk versjon av siden alltid viser det
samme innholdet.

**Innebygd sikkerhetsnett mot manglende oversettelser:** begge filene må
følge samme datastruktur (`Translation`-typen i `src/content/types.ts`).
Hvis et felt mangler i den ene fila, eller er stavet feil, vil
`npm run lint` (og `npm run build`) feile med en tydelig TypeScript-feil
som viser nøyaktig hvilket felt som mangler. Da vet du med en gang at noe
må rettes før du committer.

## Legge til eller bytte ut videolenker

Instruksjonsvideoene ligger i `videos`-lista nederst i `src/content/no.ts`
og `src/content/en.ts` (samme fire videoer i begge filer, bare med
oversatt tittel/beskrivelse). Hver video har et `url`-felt:

```ts
{
  id: "water-on",
  title: "Slik åpner du vannet",
  description: "Steg for steg video ...",
  url: "", // lim inn lenken her når videoen finnes
}
```

- Så lenge `url` er tom vises videoen som «Kommer snart» på siden.
- Lim inn en lenke til en **uoppført (unlisted) YouTube-video** eller en
  delt **Google Drive-lenke** (husk å sette delingstilgang til «alle med
  lenken»).
- Ikke last opp videofiler direkte til dette GitHub-repoet — de hører
  hjemme i YouTube/Drive, ikke i git-historikken.

## Bygge / teste før commit

Prosjektet har ingen automatiske tester, men kjør alltid disse to
kommandoene før du committer, slik at feil fanges opp tidlig:

```
npm run lint    # TypeScript-sjekk, feiler bl.a. hvis no.ts/en.ts er ute av synk
npm run build   # bygger produksjonsversjonen til dist/
```

Push til `main` bygger og publiserer siden automatisk via GitHub Actions
innen et par minutter.

## Sikkerhet og personvern

Dette repoet og den publiserte siden er **offentlige**. Ikke legg inn:

- ekte nøkkelbokskoder eller alarmkoder
- private telefonnumre
- annen informasjon dere ikke ønsker at hvem som helst på internett kan lese

Wifi-passordet er bevisst *ikke* lagt inn i klartekst i innholdsfilene av
denne grunnen — se `passwordNote`-feltet i `src/content/no.ts` / `en.ts`.
