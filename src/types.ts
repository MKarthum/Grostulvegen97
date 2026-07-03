export interface CabinStats {
  bedrooms: string;
  beds: string;
  bathrooms: string;
  amenities: string[];
}

export interface BeforeArrivalInfo {
  address: {
    label: string;
    value: string;
  };
  checkIn: {
    label: string;
    value: string;
  };
  checkOut: {
    label: string;
    value: string;
  };
  parking: {
    label: string;
    value: string;
  };
}

export interface WifiInfo {
  network: string;
  security: string;
  password: string;
  keyBoxInstructions: string;
}

export interface DoorInstructions {
  title: string;
  steps: string[];
}

export interface WaterInstructions {
  title: string;
  steps: string[];
  videoPlaceholder: string;
}

export interface LinenInfo {
  title: string;
  items: string[];
  warning: string;
}

export interface HouseRules {
  title: string;
  rules: string[];
}

export interface DepartureChecklist {
  title: string;
  items: string[];
  importantNote: string;
}

export interface Hike {
  name: string;
  elevation?: string;
  details: string;
  difficulty?: string;
}

export interface DayTrip {
  name: string;
  distance: string;
  description: string;
  website?: string;
}

export interface ContactEmergency {
  title: string;
  questionsEmail: {
    label: string;
    email: string;
  };
  doctor: {
    label: string;
    phone: string;
  };
  fire: string;
  police: string;
  ambulance: string;
}

export interface Translation {
  heroTitle: string;
  heroSubtitle: string;
  welcomeMessage: string;
  aboutTitle: string;
  beforeArrivalTitle: string;
  wifiKeyTitle: string;
  doorTitle: string;
  waterTitle: string;
  linenTitle: string;
  rulesTitle: string;
  checklistTitle: string;
  hikesTitle: string;
  dayTripsTitle: string;
  contactTitle: string;
  
  stats: CabinStats;
  beforeArrival: BeforeArrivalInfo;
  wifi: WifiInfo;
  door: DoorInstructions;
  water: WaterInstructions;
  linen: LinenInfo;
  rules: HouseRules;
  checklist: DepartureChecklist;
  hikes: Hike[];
  dayTrips: DayTrip[];
  contact: ContactEmergency;
  
  copiedLabel: string;
  copyLabel: string;
  smsNotice: string;
  videoButtonLabel: string;
  completedLabel: string;
  hikesSource: string;
  tripsSource: string;
}
