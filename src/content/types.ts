// Shared shape for all guest-facing text on the site.
//
// `no.ts` and `en.ts` each export a `Translation` object. Because every
// field here is required (no `?`), TypeScript will fail the build
// (`npm run lint` / `npm run build`) if either language file is missing a
// key or has a typo in a nested field. That is the safeguard against
// missing translations — no separate script needed.

export interface CabinStats {
  bedrooms: string;
  beds: string;
  bathrooms: string;
  amenities: string[];
}

export interface StatsLabels {
  bedrooms: string;
  beds: string;
  bathrooms: string;
}

export interface BeforeArrivalInfo {
  address: { label: string; value: string };
  checkIn: { label: string; value: string; caption: string };
  checkOut: { label: string; value: string; caption: string };
  parking: { label: string; value: string };
}

export interface WifiInfo {
  network: string;
  security: string;
  // Do NOT put the real wifi password here — this file is public
  // (public GitHub repo + public website). Keep this a note pointing
  // guests to how they actually receive it.
  passwordNote: string;
  keyBoxInstructions: string;
}

export interface DoorInstructions {
  title: string;
  steps: string[];
  handleReminder: string;
  warningTitle: string;
  warningText: string;
}

export interface WaterInstructions {
  title: string;
  steps: string[];
}

export interface LinenInfo {
  title: string;
  intro: string;
  items: string[];
  warning: string;
}

export interface HouseRules {
  title: string;
  rules: string[];
  thankYouNote: string;
}

export interface DepartureChecklist {
  title: string;
  items: string[];
  importantLabel: string;
  importantNote: string;
  resetLabel: string;
  ofLabel: string;
  completedLabel: string;
}

// Language-neutral category used only to pick a badge color.
// The actual visible label lives in `Hike.badge` per language.
export type HikeDifficulty = "moderate" | "demanding" | "favorite" | "popular" | "hike";

export interface Hike {
  name: string;
  elevation?: string;
  details: string;
  difficulty: HikeDifficulty;
  badge: string;
}

export interface DayTrip {
  name: string;
  distance: string;
  description: string;
  website?: string;
}

export interface EmergencyContact {
  number: string;
  label: string;
}

export interface ContactEmergency {
  title: string;
  questionsEmail: { label: string; email: string };
  doctor: { label: string; phone: string };
  fire: EmergencyContact;
  police: EmergencyContact;
  ambulance: EmergencyContact;
  callLabel: string;
  hostFooterNote: string;
}

// Instructional videos hosted externally (YouTube unlisted / Google Drive).
// Leave `url` empty until a real link exists — the UI shows a
// "coming soon" state automatically.
export interface VideoGuide {
  id: string;
  title: string;
  description: string;
  url: string;
}

export interface NavLabels {
  about: string;
  beforeArrival: string;
  arrival: string;
  stay: string;
  departure: string;
  videos: string;
  contact: string;
}

export interface Translation {
  headerTagline: string;
  heroTitle: string;
  heroSubtitle: string;
  heroLocation: string;
  welcomeMessage: string;
  welcomeEyebrow: string;

  jumpToLabel: string;
  nav: NavLabels;

  aboutTitle: string;

  beforeArrivalTitle: string;
  beforeArrivalEyebrow: string;
  destinationEyebrow: string;
  navigateLabel: string;
  copyAddressLabel: string;

  arrivalTitle: string;
  arrivalEyebrow: string;
  accessEyebrow: string;
  connectivityEyebrow: string;
  wifiKeyTitle: string;
  networkLabel: string;
  securityLabel: string;
  passwordLabel: string;

  stayTitle: string;
  stayEyebrow: string;
  utilitiesEyebrow: string;
  packingListEyebrow: string;
  houseRulesEyebrow: string;
  localGuideEyebrow: string;
  experiencesTitle: string;

  departureEyebrow: string;

  videosTitle: string;
  videosEyebrow: string;
  videosIntro: string;
  watchVideoLabel: string;
  videoComingSoonLabel: string;

  contactTitle: string;
  emailButtonLabel: string;

  stats: CabinStats;
  statsLabels: StatsLabels;
  beforeArrival: BeforeArrivalInfo;
  wifi: WifiInfo;
  door: DoorInstructions;
  water: WaterInstructions;
  linen: LinenInfo;
  rules: HouseRules;
  checklist: DepartureChecklist;
  hikes: Hike[];
  dayTrips: DayTrip[];
  hikesTitle: string;
  dayTripsTitle: string;
  hikesSource: string;
  tripsSource: string;
  visitWebsiteLabel: string;
  contact: ContactEmergency;
  videos: VideoGuide[];

  copiedLabel: string;
  copyLabel: string;
  footerTagline: string;
}
