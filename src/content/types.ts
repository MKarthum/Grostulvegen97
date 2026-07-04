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
  // navigationUrl is a fixed Google Maps link, not generated from `value`.
  // Use this when the geocoded pin for the address text is wrong (e.g. a
  // pending Google Maps correction) so the "Navigate" button still points
  // guests to the correct spot.
  address: { label: string; value: string; navigationUrl: string };
  checkIn: { label: string; value: string; caption: string };
  checkOut: { label: string; value: string; caption: string };
  parking: { label: string; value: string };
  barrier: { label: string; phone: string; info: string; callLabel: string };
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
  // ids into `videos[]` for the matching instructional video(s) shown
  // alongside these written steps.
  videoIds: string[];
}

export interface WaterInstructions {
  title: string;
  steps: string[];
  videoIds: string[];
}

export interface TvInstructions {
  title: string;
  intro: string;
  steps: string[];
  streamingNote: string;
}

export interface QuookerInfo {
  title: string;
  paragraphs: string[];
  videoIds: string[];
}

export interface FirewoodPowerInfo {
  title: string;
  paragraphs: string[];
}

export interface BlindsInfo {
  title: string;
  paragraphs: string[];
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
  sendButtonLabel: string;
  sendHelperText: string;
  emailSubject: string;
  emailGreeting: string;
  emailIntro: string;
  emailCompletedLabel: string;
  emailNoneCompleted: string;
  emailUncheckedLabel: string;
  emailNoneUnchecked: string;
  emailClosing: string;
  emailSignoff: string;
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
  website?: string;
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

// Alt text for the photo gallery. `id` must match one of the image
// files imported in PhotoGallery.tsx (src/assets/images).
export interface GalleryPhoto {
  id: string;
  alt: string;
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
  photosTitle: string;
  galleryPhotos: GalleryPhoto[];

  beforeArrivalTitle: string;
  beforeArrivalEyebrow: string;
  destinationEyebrow: string;
  navigateLabel: string;
  navigateAppleLabel: string;
  navigationNote: string;
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
  entertainmentEyebrow: string;
  kitchenEyebrow: string;
  firewoodEyebrow: string;
  blindsEyebrow: string;
  packingListEyebrow: string;
  houseRulesEyebrow: string;
  localGuideEyebrow: string;
  experiencesTitle: string;
  stayVideosTitle: string;
  stayVideosIntro: string;

  departureEyebrow: string;

  watchVideoLabel: string;
  openInYoutubeLabel: string;
  videoComingSoonLabel: string;

  contactTitle: string;
  emailButtonLabel: string;

  stats: CabinStats;
  statsLabels: StatsLabels;
  beforeArrival: BeforeArrivalInfo;
  wifi: WifiInfo;
  door: DoorInstructions;
  water: WaterInstructions;
  tv: TvInstructions;
  quooker: QuookerInfo;
  firewoodPower: FirewoodPowerInfo;
  blinds: BlindsInfo;
  linen: LinenInfo;
  rules: HouseRules;
  checklist: DepartureChecklist;
  hikes: Hike[];
  dayTrips: DayTrip[];
  hikesTitle: string;
  dayTripsTitle: string;
  hikesSource: string;
  hikesMapNote: string;
  tripsSource: string;
  visitWebsiteLabel: string;
  hikesRegionLabel: string;
  areaMapAlt: string;
  skiTrailsMapAlt: string;
  enlargeImageLabel: string;
  closeLabel: string;
  contact: ContactEmergency;
  videos: VideoGuide[];

  copiedLabel: string;
  copyLabel: string;
  footerTagline: string;
}
