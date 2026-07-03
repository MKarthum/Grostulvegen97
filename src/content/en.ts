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
  headerTagline: "Cabin Guide",
  heroTitle: "Grostulvegen 97",
  heroSubtitle: "Cabin Guide & Practical Info",
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
    videos: "Videos",
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
  navigateLabel: "Navigate",
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
  utilitiesEyebrow: "Water and power",
  packingListEyebrow: "Packing list",
  houseRulesEyebrow: "House rules",
  localGuideEyebrow: "Local guide",
  experiencesTitle: "Hikes and experiences",

  departureEyebrow: "Departure",

  videosTitle: "Video instructions",
  videosEyebrow: "Watch and learn",
  videosIntro: "Short videos showing practical tasks at the cabin.",
  watchVideoLabel: "Watch video",
  videoComingSoonLabel: "Coming soon",

  contactTitle: "Contact and emergency numbers",
  emailButtonLabel: "Send email",

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
  },
  water: {
    title: "Water, turning it on and off",
    steps: [
      "Open the cabinet in the shed. It is not key locked, but has a twist lock you can open with, for example, a screwdriver.",
      "Lift the lid inside the cabinet. You will find a blue lever.",
      "Turn the lever to turn the water on. Turn it the other way to turn it off.",
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
    thankYouNote: "Thank you for caring for our cabin!",
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
      "Close and lock all doors and windows (remember the front door handle)",
    ],
    importantLabel: "Important",
    importantNote:
      "Do not leave rubbish in the bin by the main entrance, it is not emptied. Drive it to the containers at the large car park just past the barrier as you leave.",
    resetLabel: "Reset",
    ofLabel: "of",
    completedLabel: "completed",
  },
  hikes: [
    {
      name: "Øysteinnatten",
      elevation: "1174 m",
      details:
        "The highest peak on Lifjell. Starting point at Jønnbu, close to the cabin. About a 12 km loop, roughly 4 hours, elevation gain around 425 m, moderately challenging.",
      difficulty: "moderate",
      badge: "Moderate",
    },
    {
      name: "Glekse",
      details: "Passed on the way up to Øysteinnatten, one of the steeper sections of the route.",
      difficulty: "demanding",
      badge: "Demanding",
    },
    {
      name: "Tretoppen",
      details: "One of our own favourite local hikes, feel free to ask us for directions.",
      difficulty: "favorite",
      badge: "Favorite",
    },
    {
      name: "Falkefjell",
      elevation: "983 m",
      details: "Reachable onward from Hellerdalskyrkja.",
      difficulty: "hike",
      badge: "Hike",
    },
    {
      name: "Hellerdalskyrkja",
      details: "Large cracks in the rock and a cave you can walk through, with its own local legend of two giants.",
      difficulty: "hike",
      badge: "Hike",
    },
    {
      name: "Gygrestolen",
      details: "Bø's most popular hike, a striking rock formation. About a 6 to 7 km loop, drive from Bø town centre.",
      difficulty: "popular",
      badge: "Popular",
    },
  ],
  dayTrips: [
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
  tripsSource: "Sources: sommarland.no, bomuseum.no, our own Airbnb listing for the cabin.",
  visitWebsiteLabel: "Visit website",
  videos: [
    {
      id: "key-box",
      title: "How to use the key box",
      description: "Open the panel, enter the code you received by SMS, and use the opener on the left side of the box. Remember to reset the code to 0000 when it's not in use.",
      url: "https://youtube.com/shorts/d6k2GnxmDZs?feature=share",
    },
    {
      id: "water-on",
      title: "How to turn on the water for the cabin",
      description: "Done when you arrive. The water cabinet is at the far end of the shed to the right of the front door. No special key is needed, just something to turn it with, such as any key or a screwdriver.",
      url: "https://youtube.com/shorts/gLBb66djzb4?feature=share",
    },
    {
      id: "water-off",
      title: "How to turn off the water for the cabin",
      description: "Done when you leave the cabin. The water cabinet is at the far end of the shed to the right of the front door. No special key is needed, just something to turn it with, such as any key or a screwdriver.",
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
