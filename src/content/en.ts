// English content for the guest guide.
//
// This is the place to edit all English text shown on the site:
// headings, instructions, checklists, hikes, etc. The Norwegian text
// lives in the matching `no.ts` file — remember to update both when
// something changes.
//
// NEVER put real key box codes, alarm codes, or private phone numbers
// directly in this file. It is publicly accessible (public GitHub
// repo + public website).

import { Translation } from "./types";

export const en: Translation = {
  headerTagline: "Cabin guide",
  heroTitle: "Grostulvegen 97",
  heroSubtitle: "Practical information for your stay",
  heroLocation: "Lifjell, Bø in Telemark, Norway",
  welcomeMessage: "We can't wait to welcome you to the cabin!",
  welcomeEyebrow: "Welcome",

  jumpToLabel: "Jump to:",
  nav: {
    about: "About",
    beforeArrival: "Before arrival",
    arrival: "Arrival",
    stay: "During your stay",
    departure: "Departure",
    contact: "Contact",
  },

  aboutTitle: "About the cabin",
  photosTitle: "Photos",
  galleryPhotos: [
    { id: "exterior-summer", alt: "The cabin seen from outside on a sunny day" },
    { id: "living-room-view", alt: "The living room with a panoramic mountain view" },
    { id: "kitchen", alt: "The fully equipped kitchen" },
    { id: "dining-view", alt: "The dining table with a mountain view" },
    { id: "bedroom", alt: "A bedroom with a window facing the forest" },
    { id: "wood-stove", alt: "The wood stove lit on a cold evening" },
    { id: "terrace", alt: "The terrace overlooking snow-covered mountains" },
    { id: "hike-view", alt: "The view from one of the hikes on Lifjell" },
  ],

  beforeArrivalTitle: "Before you arrive",
  beforeArrivalEyebrow: "Travel information",
  destinationEyebrow: "Destination",
  navigateLabel: "Google Maps",
  navigateAppleLabel: "Apple Maps",
  navigationNote: "Google Maps currently has the wrong pin for this address (a correction has been submitted to Google, but isn't live yet). Use the \"Google Maps\" button above for the correct location, or use Apple Maps, which takes you all the way to the cabin.",
  copyAddressLabel: "Copy address",

  arrivalTitle: "Arrival",
  arrivalEyebrow: "When you get there",
  accessEyebrow: "Access",
  connectivityEyebrow: "Connectivity",
  wifiKeyTitle: "Wifi and key",
  networkLabel: "Network",
  securityLabel: "Security",
  passwordLabel: "Password",

  stayTitle: "During your stay",
  stayEyebrow: "Practical information",
  utilitiesEyebrow: "Water",
  entertainmentEyebrow: "Entertainment",
  kitchenEyebrow: "Kitchen",
  firewoodEyebrow: "Firewood and power",
  blindsEyebrow: "Blinds",
  packingListEyebrow: "Packing list",
  houseRulesEyebrow: "House rules",
  localGuideEyebrow: "Local guide",
  experiencesTitle: "Hikes and experiences",
  stayVideosTitle: "Fireplace and washing machine",
  stayVideosIntro: "Practical video help for things you'll need during your stay.",

  departureEyebrow: "Departure",

  watchVideoLabel: "Watch video",
  openInYoutubeLabel: "Open in YouTube",
  videoComingSoonLabel: "Coming soon",

  contactTitle: "Contact and emergency numbers",
  emailButtonLabel: "Send email",

  stats: {
    bedrooms: "4 bedrooms",
    beds: "9 beds + sofa bed for 2",
    bathrooms: "2 bathrooms",
    amenities: [
      "Fully equipped kitchen",
      "TV and living room",
      "Sauna",
      "Terrace",
      "Nature right outside your door",
      "Parking for 4 cars",
    ],
  },
  statsLabels: {
    bedrooms: "Bedrooms",
    beds: "Beds",
    bathrooms: "Bathrooms",
  },
  beforeArrival: {
    address: {
      label: "Address",
      value: "Grostulvegen 97, 3804 Bø i Telemark, Norway",
      navigationUrl: "https://maps.app.goo.gl/zifFiwP2oXSN9xZAA",
    },
    checkIn: {
      label: "Check in",
      value: "From 3:00 PM",
      caption: "Check-in time",
    },
    checkOut: {
      label: "Check out",
      value: "By 11:00 AM",
      caption: "Check-out time",
    },
    parking: {
      label: "Parking",
      value: "Space for 4 cars at the cabin",
    },
    barrier: {
      label: "Barrier",
      phone: "+47 580000609208",
      info: "The barrier only opens for approved phone numbers. Agree with us before your stay which number should be approved.",
      callLabel: "Call barrier",
    },
  },
  wifi: {
    network: "LishanWifi",
    security: "WPA2 Personal",
    passwordNote: "The password is sent to you by email or SMS before arrival.",
    keyBoxInstructions: "Key box next to the front door. The code is sent to you by SMS.",
  },
  door: {
    title: "The front door, how to lock it",
    steps: [
      "Lift the handle all the way up.",
      "Once the handle is lifted, the door can be locked from both inside and outside.",
      "If you try to lock the door without lifting the handle first, the lock will not engage and the door will remain unlocked.",
    ],
    handleReminder: "Remember the handle!",
    warningTitle: "Note!",
    warningText:
      "If the door is not locked by lifting the handle all the way up first, the lock will not engage and the cabin will remain unlocked.",
    videoIds: ["lock-door-inside", "lock-door-outside"],
  },
  water: {
    title: "Water, turning it on and off",
    steps: [
      "Open the cabinet in the shed. It is not key locked, but has a twist lock you can open with, for example, a screwdriver.",
      "Lift the lid inside the cabinet. You will find a blue lever.",
      "Turn the lever to turn the water on. Turn it the other way to turn it off.",
    ],
    videoIds: ["water-on", "water-off"],
  },
  tv: {
    title: "TV and streaming",
    intro: "To watch regular TV channels:",
    steps: [
      "Turn on the TV.",
      "Navigate left to open the menu.",
      "Select “Tilkoblede enheter” / “Connected devices”.",
      "Navigate right and select “HDMI2”.",
      "Apple TV will start automatically.",
      "Choose the “Mathias” profile.",
      "Open “Telia Play” to watch regular TV channels.",
    ],
    streamingNote:
      "Apple TV also has access to several streaming services. You can use the services already available, sign in with your own accounts, or stream from your phone to Apple TV. Please remember to sign out of any personal accounts before you leave.",
  },
  quooker: {
    title: "Quooker",
    paragraphs: [
      "The Quooker is the kitchen tap that can provide boiling water directly from the tap. It can be used for tea, cooking, and other situations where you would normally boil water. The tap has a child safety mechanism, so use it carefully and follow the markings on the tap.",
      "If you do not want to use the Quooker, there is a regular kettle next to the coffee machine.",
      "Remember to turn off the Quooker before departure if it has been used. See the separate video on this page for how to turn the Quooker tank on and off.",
    ],
    videoIds: ["quooker-on", "quooker-off"],
  },
  firewoodPower: {
    title: "Firewood, electricity and EV charging",
    paragraphs: [
      "There are some 60-litre bags of firewood at the cabin that may be used if needed. The price is NOK 150 per bag. Payment for firewood and other agreed extra costs can be made to account number 9044.13.37247.",
      "Only use regular firewood and fire-starter briquettes in the fireplace. Do not burn cardboard, paper, packaging, or other waste.",
      "Normal electricity use is included in the rent. We still ask that you use electricity sensibly, and turn down the heating before departure as described in the departure checklist.",
      "Charging an electric vehicle is not included by default and must be agreed with us in advance.",
    ],
  },
  blinds: {
    title: "Blinds and moisture in the window frames",
    paragraphs: [
      "Please close the blinds when you leave the cabin. To avoid too much heat building up between the blind and the window glass, leave a small gap of a few centimetres at both the top and bottom.",
      "If a lot of moisture collects in the window frames during your stay, please wipe it off regularly, and especially before departure.",
    ],
  },
  linen: {
    title: "Bed linen and towels",
    intro: "Remember to bring the following items:",
    items: ["Sheets", "Duvet cover", "Pillowcase", "Bath towel", "Hand towel for the bathroom"],
    warning: "Bed linen and towels are not provided with the cabin, please bring these yourself.",
  },
  rules: {
    title: "House rules",
    rules: [
      "No pets",
      "No smoking",
      "No grilling on the terrace, but the gravel area outside works well",
      "Firewood is not included, but there is firewood at the cabin for moderate use",
    ],
    belongingsNote: {
      title: "Private cabin and personal belongings",
      paragraphs: [
        "This is a private cabin, so there will be personal belongings in some cupboards and drawers. We ask that you respect this.",
        "Some cupboards and drawers, including storage under the beds, have been emptied and can be used during your stay.",
        "There are also many games at the cabin. You are welcome to use them, but please treat them with care and put everything back neatly when you are done.",
      ],
    },
    thankYouNote: "Thank you for caring for our cabin!",
  },
  checklist: {
    title: "Checklist before you leave",
    items: [
      "Remove all rubbish from the cabin",
      "Turn off all lights",
      "Empty the fridge",
      "Turn off the water. See the separate instructions and video on this page.",
      "Empty the fireplace if it has been used. The ash vacuum is in the inside storage room and must only be used when the fireplace is completely cold. If the ash vacuum is full, cold ash can be emptied on the slope below the cabin.",
      "Turn the heat down to 10°C on all 5 thermostats: downstairs bathroom, upstairs bathroom, living room, kitchen, and hallway.",
      "Unplug the coffee machine and kettle. Empty the coffee filter as well.",
      "Turn off the Quooker if it has been used.",
      "Vacuum the floors",
      "Wash the floors",
      "Clean the downstairs bathroom.",
      "Clean the upstairs bathroom.",
      "Clean the kitchen.",
      "Check that all personal belongings are packed and taken with you.",
      "Close all blinds before departure. Leave a small gap of a few centimetres at both the top and bottom, to reduce heat build-up between the blind and the glass.",
      "Close and lock all doors and windows (remember the front door handle)",
      "Feel free to take a few photos of the cabin before you leave, once tidying and cleaning are done. This is useful documentation for both you and us, and makes it easier to clarify anything afterwards if needed. The photos can be sent to the contact email listed on this page.",
    ],
    importantLabel: "Important",
    importantNote:
      "Do not leave rubbish in the bin by the main entrance, it is not emptied. Drive it to the containers at the large car park just past the barrier as you leave.",
    resetLabel: "Reset",
    ofLabel: "of",
    completedLabel: "completed",
    sendButtonLabel: "Send departure checklist",
    sendHelperText:
      "The button opens a prefilled email. Feel free to attach photos of the cabin after tidying and cleaning before sending.",
    emailSubject: "Departure checklist for Grostulvegen 97",
    emailGreeting: "Hi,",
    emailIntro: "We have gone through the departure checklist for Grostulvegen 97.",
    emailCompletedLabel: "Completed items:",
    emailNoneCompleted: "No items have been checked yet.",
    emailUncheckedLabel: "Any items not checked:",
    emailNoneUnchecked: "None",
    emailClosing:
      "We can attach photos of the cabin after tidying and cleaning as documentation of how it was left.",
    emailSignoff: "Best regards",
  },
  hikes: [
    {
      name: "Øysteinnatten",
      elevation: "1174 m",
      details:
        "The highest peak on Lifjell. Starting point at Jønnbu, close to the cabin. About a 12 km loop, roughly 4 hours, elevation gain around 425 m, moderately challenging.",
      difficulty: "moderate",
      badge: "Moderate",
      website: "https://ut.no/turforslag/119479/topptur-til-ysteinnatten-1174-moh",
    },
    {
      name: "Glekse",
      details:
        "A hike of about 8–10 km round trip depending on the route. Less demanding than Øysteinnatten, and also passed on the way there. Called Gleksefjell on the trail map hanging in the cabin's living room.",
      difficulty: "hike",
      badge: "Hike",
      website: "https://ut.no/kart/stedsnavn/487612/gleksefjell#11/59.4916/8.9814",
    },
    {
      name: "Tretopper'n",
      details:
        "One of the best signposted hikes in the area, starting from Jønnbu. Goes over the three nearby peaks Anebunatten, Krintofjellet, and Bøkstulnatten – you can also choose to climb just one of them for a shorter hike.",
      difficulty: "favorite",
      badge: "Favorite",
      website: "https://ut.no/turforslag/119484/krintofjellet-pa-lifjell-familievennlig",
    },
    {
      name: "Falkefjell",
      elevation: "983 m",
      details: "More demanding than Glekse. Reachable onward from Hellerdalskyrkja.",
      difficulty: "moderate",
      badge: "Moderate",
      website: "https://www.alltrails.com/nb-no/sti/norway/vestfold-og-telemark/falkefjell",
    },
    {
      name: "Hellerdalskyrkja",
      details: "Large cracks in the rock and a cave you can walk through, with its own local legend of two giants.",
      difficulty: "hike",
      badge: "Hike",
      website: "https://boturlag.no/webkart/Lifjell/Hellerdalskyrkja.pdf",
    },
  ],
  dayTrips: [
    {
      name: "Gygrestolen",
      distance: "A short drive from Bø town centre",
      description: "Bø's most popular destination, a striking rock formation reached by car and a short walk from the car park.",
      website: "https://ut.no/sted/145647599/gygrestolen",
    },
    {
      name: "Bø Sommarland",
      distance: "about 11 km from the cabin",
      description: "Scandinavia's largest water park. Seasonal, check sommarland.no for dates and prices.",
      website: "https://sommarland.no",
    },
    {
      name: "Bø Museum",
      distance: "in Bø town centre",
      description: "A museum by the river, a nice combination with a short walk. Open in summer, otherwise by appointment, check bomuseum.no.",
      website: "https://bomuseum.no",
    },
    {
      name: "Heddal stave church",
      distance: "about 36 km from the cabin",
      description: "Norway's largest stave church.",
      website: "https://www.heddalstavkirke.no/",
    },
  ],
  hikesTitle: "Hikes on Lifjell",
  dayTripsTitle: "Day trips by car",
  hikesSource: "Sources: ut.no, visitbo.no, boturlag.no.",
  hikesMapNote: "There's a hiking map of Lifjell in the cabin's living room, showing many more route options in the area.",
  tripsSource: "Sources: sommarland.no, bomuseum.no, our own Airbnb listing for the cabin.",
  visitWebsiteLabel: "Visit website",
  hikesRegionLabel: "Lifjell",
  areaMapAlt: "Map of the local area around the cabin",
  skiTrailsMapAlt: "Map of ski trails and hiking routes in the area",
  enlargeImageLabel: "Click to enlarge",
  closeLabel: "Close",
  videos: [
    {
      id: "key-box",
      title: "How to use the key box",
      description: "Open the panel, enter the code you received by SMS, and use the opener on the left side of the box. Reset the dials to 0000 after use.",
      url: "https://youtube.com/shorts/d6k2GnxmDZs?feature=share",
    },
    {
      id: "water-on",
      title: "How to turn on the water for the cabin",
      description: "Done when you arrive. The water cabinet is at the far end of the shed to the right of the front door. No special key is needed. Use something to turn it with, such as a key or screwdriver.",
      url: "https://youtube.com/shorts/gLBb66djzb4?feature=share",
    },
    {
      id: "water-off",
      title: "How to turn off the water for the cabin",
      description: "Done when you leave the cabin. The water cabinet is at the far end of the shed to the right of the front door. No special key is needed. Use something to turn it with, such as a key or screwdriver.",
      url: "https://youtube.com/shorts/RuXYISfkhIo?feature=share",
    },
    {
      id: "lock-door-inside",
      title: "How to lock the door from the inside",
      description: "The handle must be lifted all the way up before you turn the lock, otherwise it won't engage.",
      url: "https://youtube.com/shorts/ifUZzJuAolw?feature=share",
    },
    {
      id: "lock-door-outside",
      title: "How to lock the door from the outside",
      description: "The handle must be lifted all the way up before you lock with the key, otherwise it won't engage.",
      url: "https://youtube.com/shorts/sTrSQ23qYX0?feature=share",
    },
    {
      id: "washing-machine-water-on",
      title: "Turning on the water for the washing machine",
      description: "How to open the water supply to the washing machine before use.",
      url: "https://youtube.com/shorts/qXgCGHjRoBM?feature=share",
    },
    {
      id: "washing-machine-water-off",
      title: "Turning off the water for the washing machine",
      description: "How to shut off the water supply to the washing machine after use. Important to avoid leaks.",
      url: "https://youtube.com/shorts/prVTHhEduIc?feature=share",
    },
    {
      id: "fireplace",
      title: "How to use the fireplace",
      description:
        "Shows how to open the damper before lighting the fire, use the door, and adjust the airflow while the fire is burning. The damper can be partly open once the fire is giving off good heat, but should only be closed fully when the fire is out and cold. Only burn firewood and fire-starter briquettes, never cardboard, paper, or other rubbish.",
      url: "https://youtube.com/shorts/kW1oQm3UYLg?feature=share",
    },
    {
      id: "quooker-on",
      title: "How to turn on the Quooker",
      description:
        "This video shows how to turn on the Quooker tank. Please note that it takes a few minutes after turning it on before the water is hot enough.",
      url: "https://youtube.com/shorts/pQovaNyRSA0?feature=share",
    },
    {
      id: "quooker-off",
      title: "How to turn off the Quooker",
      description:
        "This video shows how to turn off the Quooker tank before departure. Remember to turn it off if it has been used during your stay.",
      url: "https://youtube.com/shorts/947Oexg4kxc?feature=share",
    },
  ],
  contact: {
    title: "Contact and emergency numbers",
    questionsEmail: {
      label: "Questions before or during your stay",
      email: "grostulvegen97@gmail.com",
    },
    doctor: {
      label: "Out of hours doctor (Notodden interkommunale legevakt)",
      phone: "116 117",
    },
    fire: { number: "110", label: "Fire" },
    police: { number: "112", label: "Police" },
    ambulance: { number: "113", label: "Ambulance" },
    callLabel: "Call",
    hostFooterNote: "Privately owned and managed by the host.",
  },

  copiedLabel: "Copied!",
  copyLabel: "Copy",
  footerTagline: "Built with care for cabin renters.",
};
