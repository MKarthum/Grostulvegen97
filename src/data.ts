import { Translation } from "./types";

export const translations: Record<"no" | "en", Translation> = {
  no: {
    heroTitle: "Grostulvegen 97",
    heroSubtitle: "Hytteinfo & Gjort enkelt",
    welcomeMessage: "Vi gleder oss til å ønske dere velkommen til hytta!",
    aboutTitle: "Om hytta",
    beforeArrivalTitle: "Før dere kommer",
    wifiKeyTitle: "Wifi og nøkkel",
    doorTitle: "Hoveddøren, slik låser dere",
    waterTitle: "Vann, åpne og stenge",
    linenTitle: "Sengetøy og håndklær",
    rulesTitle: "Husregler",
    checklistTitle: "Sjekkliste før avreise",
    hikesTitle: "Turer på Lifjell",
    dayTripsTitle: "Turer med bil",
    contactTitle: "Kontakt og nødnumre",
    copiedLabel: "Kopiert!",
    copyLabel: "Kopier",
    smsNotice: "Dere får tilsendt koden på SMS.",
    videoButtonLabel: "Se instruksjonsvideo (kommer snart)",
    completedLabel: "utført",
    hikesSource: "Kilder: ut.no, visitbo.no, boturlag.no.",
    tripsSource: "Kilder: sommarland.no, bomuseum.no, egen Airbnb-annonse for hytta.",
    
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
        "Parkering til 4 biler"
      ]
    },
    beforeArrival: {
      address: {
        label: "Adresse",
        value: "Grostulvegen 97, 3804 Bø i Telemark"
      },
      checkIn: {
        label: "Innsjekk",
        value: "Fra kl. 15:00"
      },
      checkOut: {
        label: "Utsjekk",
        value: "Innen kl. 11:00"
      },
      parking: {
        label: "Parkering",
        value: "Plass til 4 biler ved hytta"
      }
    },
    wifi: {
      network: "LishanWifi",
      security: "WPA2 Personal",
      password: "playmate3wedge2mad9bavarian",
      keyBoxInstructions: "Nøkkelboks ved siden av inngangsdøren. Dere får tilsendt koden på SMS."
    },
    door: {
      title: "Hoveddøren, slik låser dere",
      steps: [
        "Løft håndtaket helt opp.",
        "Når håndtaket er løftet, kan døren låses både fra innsiden og utsiden.",
        "Forsøker dere å låse uten å løfte håndtaket først, går ikke låsen i, og døren blir stående ulåst."
      ]
    },
    water: {
      title: "Vann, åpne og stenge",
      steps: [
        "Åpne skapet i boden. Det er ikke låst med nøkkel, men har en vrilås som åpnes med for eksempel en skrutrekker.",
        "Løft opp lokket inne i skapet. Der finner dere en blå spak.",
        "Vri spaken for å åpne vannet. Steng vannet ved å vri motsatt vei."
      ],
      videoPlaceholder: "" // Add the real video link here when it is ready (e.g. a shared Google Drive or YouTube link).
    },
    linen: {
      title: "Sengetøy og håndklær",
      items: [
        "Laken",
        "Dynetrekk",
        "Putetrekk",
        "Badehåndkle",
        "Tørkehåndkle til badet"
      ],
      warning: "Sengetøy og håndklær følger ikke med hytta, dette må dere ta med selv."
    },
    rules: {
      title: "Husregler",
      rules: [
        "Ingen dyr",
        "Ingen røyking",
        "Grilling er ikke tillatt på terrassen, men det er god plass på grusen utenfor",
        "Ved følger ikke med, men det finnes ved på hytta til moderat bruk"
      ]
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
        "Lukk og lås alle dører og vinduer (husk håndtaket på hoveddøren)"
      ],
      importantNote: "Viktig: søppel skal ikke i bøtten ved hovedinngangen, den tømmes ikke. Kjør det til kontainerne på den store parkeringsplassen rett etter bommen når dere kjører ut."
    },
    hikes: [
      {
        name: "Øysteinnatten",
        elevation: "1174 moh",
        details: "Høyeste toppen på Lifjell. Utgangspunkt fra Jønnbu, like ved hytta. Rundtur på ca. 12 km, rundt 4 timer, høydeforskjell ca. 425 meter, moderat krevende."
      },
      {
        name: "Glekse",
        details: "Passeres på vei mot Øysteinnatten, en av de mer krevende stigningene i terrenget."
      },
      {
        name: "Tretoppen",
        details: "En av våre egne favoritturer i området, spør oss gjerne om veibeskrivelse."
      },
      {
        name: "Falkefjell",
        elevation: "983 moh",
        details: "Kan nås videre fra Hellerdalskyrkja."
      },
      {
        name: "Hellerdalskyrkja",
        details: "Store bergsprekker og en hule man kan gå gjennom, med egen sagnhistorie om to jotner."
      },
      {
        name: "Gygrestolen",
        details: "Bøs mest populære tur, en spektakulær steinformasjon. Rundtur ca. 6-7 km, kjøring fra Bø sentrum."
      }
    ],
    dayTrips: [
      {
        name: "Bø Sommarland",
        distance: "ca. 11 km fra hytta",
        description: "Skandinavias største badeland. Sesongåpent, sjekk sommarland.no for datoer og priser.",
        website: "https://sommarland.no"
      },
      {
        name: "Bø Museum",
        distance: "i Bø sentrum",
        description: "Museum langs elva, fin kombinasjon med en spasertur. Sommeråpent, ellers etter avtale, sjekk bomuseum.no.",
        website: "https://bomuseum.no"
      },
      {
        name: "Heddal stavkirke",
        distance: "ca. 36 km fra hytta",
        description: "Norges største stavkirke.",
        website: "https://www.heddalstavkirke.no/"
      }
    ],
    contact: {
      title: "Kontakt og nødnumre",
      questionsEmail: {
        label: "Spørsmål før eller under oppholdet",
        email: "grostulvegen97@gmail.com"
      },
      doctor: {
        label: "Legevakt (Notodden interkommunale legevakt)",
        phone: "116 117"
      },
      fire: "110 Brann",
      police: "112 Politi",
      ambulance: "113 Ambulanse"
    }
  },
  en: {
    heroTitle: "Grostulvegen 97",
    heroSubtitle: "Cabin Guide & Practical Info",
    welcomeMessage: "We can't wait to welcome you to the cabin!",
    aboutTitle: "About the cabin",
    beforeArrivalTitle: "Before you arrive",
    wifiKeyTitle: "Wifi and key",
    doorTitle: "The front door, how to lock it",
    waterTitle: "Water, turning it on and off",
    linenTitle: "Bed linen and towels",
    rulesTitle: "House rules",
    checklistTitle: "Checklist before you leave",
    hikesTitle: "Hikes on Lifjell",
    dayTripsTitle: "Day trips by car",
    contactTitle: "Contact and emergency numbers",
    copiedLabel: "Copied!",
    copyLabel: "Copy",
    smsNotice: "The code is sent to you by SMS.",
    videoButtonLabel: "Watch instructional video (coming soon)",
    completedLabel: "completed",
    hikesSource: "Sources: ut.no, visitbo.no, boturlag.no.",
    tripsSource: "Sources: sommarland.no, bomuseum.no, our own Airbnb listing for the cabin.",
    
    stats: {
      bedrooms: "4 bedrooms",
      beds: "12 beds",
      bathrooms: "2 bathrooms",
      amenities: [
        "Fully equipped kitchen",
        "TV and living room",
        "Sauna",
        "Terrace",
        "Ski in / ski out",
        "Parking for 4 cars"
      ]
    },
    beforeArrival: {
      address: {
        label: "Address",
        value: "Grostulvegen 97, 3804 Bø i Telemark, Norway"
      },
      checkIn: {
        label: "Check in",
        value: "From 3:00 PM"
      },
      checkOut: {
        label: "Check out",
        value: "By 11:00 AM"
      },
      parking: {
        label: "Parking",
        value: "Space for 4 cars at the cabin"
      }
    },
    wifi: {
      network: "LishanWifi",
      security: "WPA2 Personal",
      password: "playmate3wedge2mad9bavarian",
      keyBoxInstructions: "Key box next to the front door. The code is sent to you by SMS."
    },
    door: {
      title: "The front door, how to lock it",
      steps: [
        "Lift the handle all the way up.",
        "Once the handle is lifted, the door can be locked from both inside and outside.",
        "If you try to lock the door without lifting the handle first, the lock will not engage and the door will remain unlocked."
      ]
    },
    water: {
      title: "Water, turning it on and off",
      steps: [
        "Open the cabinet in the shed. It is not key locked, but has a twist lock you can open with, for example, a screwdriver.",
        "Lift the lid inside the cabinet. You will find a blue lever.",
        "Turn the lever to turn the water on. Turn it the other way to turn it off."
      ],
      videoPlaceholder: ""
    },
    linen: {
      title: "Bed linen and towels",
      items: [
        "Sheets",
        "Duvet cover",
        "Pillowcase",
        "Bath towel",
        "Hand towel for the bathroom"
      ],
      warning: "Bed linen and towels are not provided with the cabin, please bring these yourself."
    },
    rules: {
      title: "House rules",
      rules: [
        "No pets",
        "No smoking",
        "No grilling on the terrace, but the gravel area outside works well",
        "Firewood is not included, but there is firewood at the cabin for moderate use"
      ]
    },
    checklist: {
      title: "Checklist before you leave",
      items: [
        "Remove all rubbish from the cabin",
        "Turn off all lights",
        "Empty the fridge",
        "Vacuum the floors",
        "Wash the floors",
        "Clean the bathroom and kitchen",
        "Turn off the coffee machine",
        "Close and lock all doors and windows (remember the front door handle)"
      ],
      importantNote: "Important: do not leave rubbish in the bin by the main entrance, it is not emptied. Drive it to the containers at the large car park just past the barrier as you leave."
    },
    hikes: [
      {
        name: "Øysteinnatten",
        elevation: "1174 m",
        details: "The highest peak on Lifjell. Starting point at Jønnbu, close to the cabin. About a 12 km loop, roughly 4 hours, elevation gain around 425 m, moderately challenging."
      },
      {
        name: "Glekse",
        details: "Passed on the way up to Øysteinnatten, one of the steeper sections of the route."
      },
      {
        name: "Tretoppen",
        details: "One of our own favourite local hikes, feel free to ask us for directions."
      },
      {
        name: "Falkefjell",
        elevation: "983 m",
        details: "Reachable onward from Hellerdalskyrkja."
      },
      {
        name: "Hellerdalskyrkja",
        details: "Large cracks in the rock and a cave you can walk through, with its own local legend of two giants."
      },
      {
        name: "Gygrestolen",
        details: "Bø's most popular hike, a striking rock formation. About a 6 to 7 km loop, drive from Bø town centre."
      }
    ],
    dayTrips: [
      {
        name: "Bø Sommarland",
        distance: "about 11 km from the cabin",
        description: "Scandinavia's largest water park. Seasonal, check sommarland.no for dates and prices.",
        website: "https://sommarland.no"
      },
      {
        name: "Bø Museum",
        distance: "in Bø town centre",
        description: "A museum by the river, a nice combination with a short walk. Open in summer, otherwise by appointment, check bomuseum.no.",
        website: "https://bomuseum.no"
      },
      {
        name: "Heddal stave church",
        distance: "about 36 km from the cabin",
        description: "Norway's largest stave church.",
        website: "https://www.heddalstavkirke.no/"
      }
    ],
    contact: {
      title: "Contact and emergency numbers",
      questionsEmail: {
        label: "Questions before or during your stay",
        email: "grostulvegen97@gmail.com"
      },
      doctor: {
        label: "Out of hours doctor (Notodden interkommunale legevakt)",
        phone: "116 117"
      },
      fire: "110 Fire",
      police: "112 Police",
      ambulance: "113 Ambulance"
    }
  }
};
