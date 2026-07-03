// Norsk innhold for gjesteguiden.
//
// Dette er stedet å redigere all norsk tekst som vises på siden:
// overskrifter, instruksjoner, sjekklister, turer osv.
// Den engelske teksten ligger i den tilsvarende `en.ts`-filen —
// husk å oppdatere begge når noe endres.
//
// Legg ALDRI ekte nøkkelbokskoder, alarmkoder eller private
// telefonnumre direkte i denne filen. Den er offentlig tilgjengelig
// (offentlig GitHub-repo + offentlig nettside).

import { Translation } from "./types";

export const no: Translation = {
  headerTagline: "Gjesteguide",
  heroTitle: "Grostulvegen 97",
  heroSubtitle: "Hytteinfo & Gjort enkelt",
  heroLocation: "Lifjell, Bø i Telemark, Norge",
  welcomeMessage: "Vi gleder oss til å ønske dere velkommen til hytta!",
  welcomeEyebrow: "Velkommen",

  jumpToLabel: "Hopp til:",
  nav: {
    about: "Om hytta",
    beforeArrival: "Før ankomst",
    arrival: "Ankomst",
    stay: "Under oppholdet",
    departure: "Avreise",
    videos: "Videoer",
    contact: "Kontakt",
  },

  aboutTitle: "Om hytta",

  beforeArrivalTitle: "Før dere kommer",
  beforeArrivalEyebrow: "Reiseinformasjon",
  destinationEyebrow: "Reisemål",
  navigateLabel: "Naviger",
  copyAddressLabel: "Kopier adresse",

  arrivalTitle: "Ankomst",
  arrivalEyebrow: "Når dere kommer frem",
  accessEyebrow: "Adgang",
  connectivityEyebrow: "Nett",
  wifiKeyTitle: "Wifi og nøkkel",
  networkLabel: "Nettverk",
  securityLabel: "Sikkerhet",
  passwordLabel: "Passord",

  stayTitle: "Under oppholdet",
  stayEyebrow: "Praktisk informasjon",
  utilitiesEyebrow: "Vann og strøm",
  packingListEyebrow: "Pakkeliste",
  houseRulesEyebrow: "Husregler",
  localGuideEyebrow: "Lokal guide",
  experiencesTitle: "Turer og opplevelser",

  departureEyebrow: "Avreise",

  videosTitle: "Videoinstruksjoner",
  videosEyebrow: "Se og lær",
  videosIntro: "Korte videoer som viser praktiske gjøremål på hytta.",
  watchVideoLabel: "Se video",
  videoComingSoonLabel: "Kommer snart",

  contactTitle: "Kontakt og nødnumre",
  emailButtonLabel: "Send e-post",

  stats: {
    bedrooms: "4 soverom",
    beds: "12 senger",
    bathrooms: "2 bad",
    amenities: [
      "Fullt utstyrt kjøkken",
      "TV og stue",
      "Badstue",
      "Terrasse",
      "Ski inn / ski ut",
      "Parkering til 4 biler",
    ],
  },
  statsLabels: {
    bedrooms: "Soverom",
    beds: "Sengeplasser",
    bathrooms: "Bad",
  },
  beforeArrival: {
    address: {
      label: "Adresse",
      value: "Grostulvegen 97, 3804 Bø i Telemark",
    },
    checkIn: {
      label: "Innsjekk",
      value: "Fra kl. 15:00",
      caption: "Innsjekkstidspunkt",
    },
    checkOut: {
      label: "Utsjekk",
      value: "Innen kl. 11:00",
      caption: "Utsjekkstidspunkt",
    },
    parking: {
      label: "Parkering",
      value: "Plass til 4 biler ved hytta",
    },
    barrier: {
      label: "Bom",
      phone: "+47 580000609208",
      info: "Bommen åpnes kun for godkjente telefonnumre. Avtal med oss i forkant av oppholdet hvilket nummer som skal godkjennes.",
      callLabel: "Ring bom",
    },
  },
  wifi: {
    network: "LishanWifi",
    security: "WPA2 Personal",
    passwordNote: "Passordet sendes til dere på e-post eller SMS før ankomst.",
    keyBoxInstructions: "Nøkkelboks ved siden av inngangsdøren. Dere får tilsendt koden på SMS.",
  },
  door: {
    title: "Hoveddøren, slik låser dere",
    steps: [
      "Løft håndtaket helt opp.",
      "Når håndtaket er løftet, kan døren låses både fra innsiden og utsiden.",
      "Forsøker dere å låse uten å løfte håndtaket først, går ikke låsen i, og døren blir stående ulåst.",
    ],
    handleReminder: "Husk håndtaket!",
    warningTitle: "OBS!",
    warningText:
      "Hvis døren ikke låses ved å løfte håndtaket helt opp først, går ikke låsen i lås, og hytta blir stående ulåst.",
  },
  water: {
    title: "Vann, åpne og stenge",
    steps: [
      "Åpne skapet i boden. Det er ikke låst med nøkkel, men har en vrilås som åpnes med for eksempel en skrutrekker.",
      "Løft opp lokket inne i skapet. Der finner dere en blå spak.",
      "Vri spaken for å åpne vannet. Steng vannet ved å vri motsatt vei.",
    ],
  },
  linen: {
    title: "Sengetøy og håndklær",
    intro: "Husk å pakke med følgende:",
    items: ["Laken", "Dynetrekk", "Putetrekk", "Badehåndkle", "Tørkehåndkle til badet"],
    warning: "Sengetøy og håndklær følger ikke med hytta, dette må dere ta med selv.",
  },
  rules: {
    title: "Husregler",
    rules: [
      "Ingen dyr",
      "Ingen røyking",
      "Grilling er ikke tillatt på terrassen, men det er god plass på grusen utenfor",
      "Ved følger ikke med, men det finnes ved på hytta til moderat bruk",
    ],
    thankYouNote: "Takk for at dere hjelper oss å ta vare på hytta!",
  },
  checklist: {
    title: "Sjekkliste før avreise",
    items: [
      "Fjern alt søppel fra hytta",
      "Skru av alle lys",
      "Tøm kjøleskapet",
      "Støvsug gulvene",
      "Vask gulvene",
      "Rengjør bad og kjøkken",
      "Slå av kaffemaskinen",
      "Lukk og lås alle dører og vinduer (husk håndtaket på hoveddøren)",
    ],
    importantLabel: "Viktig",
    importantNote:
      "Søppel skal ikke i bøtten ved hovedinngangen, den tømmes ikke. Kjør det til kontainerne på den store parkeringsplassen rett etter bommen når dere kjører ut.",
    resetLabel: "Nullstill",
    ofLabel: "av",
    completedLabel: "utført",
  },
  hikes: [
    {
      name: "Øysteinnatten",
      elevation: "1174 moh",
      details:
        "Høyeste toppen på Lifjell. Utgangspunkt fra Jønnbu, like ved hytta. Rundtur på ca. 12 km, rundt 4 timer, høydeforskjell ca. 425 meter, moderat krevende.",
      difficulty: "moderate",
      badge: "Moderat krevende",
    },
    {
      name: "Glekse",
      details: "Passeres på vei mot Øysteinnatten, en av de mer krevende stigningene i terrenget.",
      difficulty: "demanding",
      badge: "Krevende",
    },
    {
      name: "Tretoppen",
      details: "En av våre egne favoritturer i området, spør oss gjerne om veibeskrivelse.",
      difficulty: "favorite",
      badge: "Anbefalt",
    },
    {
      name: "Falkefjell",
      elevation: "983 moh",
      details: "Kan nås videre fra Hellerdalskyrkja.",
      difficulty: "hike",
      badge: "Tur",
    },
    {
      name: "Hellerdalskyrkja",
      details: "Store bergsprekker og en hule man kan gå gjennom, med egen sagnhistorie om to jotner.",
      difficulty: "hike",
      badge: "Tur",
    },
    {
      name: "Gygrestolen",
      details: "Bøs mest populære tur, en spektakulær steinformasjon. Rundtur ca. 6-7 km, kjøring fra Bø sentrum.",
      difficulty: "popular",
      badge: "Populær",
    },
  ],
  dayTrips: [
    {
      name: "Bø Sommarland",
      distance: "ca. 11 km fra hytta",
      description: "Skandinavias største badeland. Sesongåpent, sjekk sommarland.no for datoer og priser.",
      website: "https://sommarland.no",
    },
    {
      name: "Bø Museum",
      distance: "i Bø sentrum",
      description: "Museum langs elva, fin kombinasjon med en spasertur. Sommeråpent, ellers etter avtale, sjekk bomuseum.no.",
      website: "https://bomuseum.no",
    },
    {
      name: "Heddal stavkirke",
      distance: "ca. 36 km fra hytta",
      description: "Norges største stavkirke.",
      website: "https://www.heddalstavkirke.no/",
    },
  ],
  hikesTitle: "Turer på Lifjell",
  dayTripsTitle: "Turer med bil",
  hikesSource: "Kilder: ut.no, visitbo.no, boturlag.no.",
  tripsSource: "Kilder: sommarland.no, bomuseum.no, egen Airbnb-annonse for hytta.",
  visitWebsiteLabel: "Besøk nettside",
  videos: [
    {
      id: "water-on",
      title: "Slik åpner du vannet",
      description: "Steg for steg video som viser hvordan dere åpner vanntilførselen ved ankomst.",
      url: "",
    },
    {
      id: "water-off",
      title: "Slik stenger du vannet",
      description: "Steg for steg video som viser hvordan dere stenger vanntilførselen før avreise.",
      url: "",
    },
    {
      id: "heating-ventilation",
      title: "Varme og ventilasjon",
      description: "Hvordan dere styrer ovner, varmekabler og ventilasjon i hytta.",
      url: "",
    },
    {
      id: "departure-checklist",
      title: "Sjekkliste før avreise",
      description: "Gjennomgang av rutinene på sjekklisten, filmet på hytta.",
      url: "",
    },
  ],
  contact: {
    title: "Kontakt og nødnumre",
    questionsEmail: {
      label: "Spørsmål før eller under oppholdet",
      email: "grostulvegen97@gmail.com",
    },
    doctor: {
      label: "Legevakt (Notodden interkommunale legevakt)",
      phone: "116 117",
    },
    fire: { number: "110", label: "Brann" },
    police: { number: "112", label: "Politi" },
    ambulance: { number: "113", label: "Ambulanse" },
    callLabel: "Ring",
    hostFooterNote: "Eies og drives privat, av vertskapet.",
  },

  copiedLabel: "Kopiert!",
  copyLabel: "Kopier",
  footerTagline: "Bygget med omtanke for hyttegjester.",
};
