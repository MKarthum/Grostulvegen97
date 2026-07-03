import React, { useState } from "react";
import { translations } from "./data";
import { Translation } from "./types";

// Import custom components
import CabinStats from "./components/CabinStats";
import BeforeArrivalCard from "./components/BeforeArrivalCard";
import WifiCard from "./components/WifiCard";
import CabinInstructions from "./components/CabinInstructions";
import RulesAndLinen from "./components/RulesAndLinen";
import InteractiveChecklist from "./components/InteractiveChecklist";
import HikesAndTrips from "./components/HikesAndTrips";
import ContactEmergencyCard from "./components/ContactEmergencyCard";

// Import custom hero asset
import cabinHero from "./assets/images/cabin_hero_1783082572003.jpg";

// Icons for navigation bar
import {
  Home,
  MapPin,
  Wifi,
  Lock,
  FileText,
  CheckSquare,
  Compass,
  PhoneCall,
  Globe,
  Compass as GuideIcon
} from "lucide-react";

export default function App() {
  const [lang, setLang] = useState<"no" | "en">("no");
  const t: Translation = translations[lang];

  // Quick navigation items with translated labels
  const navItems = [
    { id: "om-hytta", icon: <Home className="w-4 h-4" />, no: "Om hytta", en: "About" },
    { id: "for-ankomst", icon: <MapPin className="w-4 h-4" />, no: "Før ankomst", en: "Arrival" },
    { id: "wifi-nøkkel", icon: <Wifi className="w-4 h-4" />, no: "Wifi & Nøkkel", en: "Wifi & Key" },
    { id: "instrukser", icon: <Lock className="w-4 h-4" />, no: "Instrukser", en: "Instructions" },
    { id: "regler-sengetøy", icon: <FileText className="w-4 h-4" />, no: "Regler", en: "Rules" },
    { id: "avreise-sjekkliste", icon: <CheckSquare className="w-4 h-4" />, no: "Sjekkliste", en: "Checklist" },
    { id: "turer-opplevelser", icon: <Compass className="w-4 h-4" />, no: "Turer", en: "Hikes" },
    { id: "kontakt-nød", icon: <PhoneCall className="w-4 h-4" />, no: "Kontakt", en: "Contact" },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-cabin-dark text-slate-100 pb-16 flex flex-col font-sans select-none selection:bg-cabin-accent/20 selection:text-white">
      {/* Top Banner Language Switcher Header (Sticky) */}
      <header className="sticky top-0 z-50 bg-cabin-dark/85 backdrop-blur-md border-b border-white/8 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="bg-cabin-green/40 text-cabin-accent p-2 rounded-xl border border-white/10">
              <GuideIcon className="w-5 h-5" />
            </div>
            <div>
              <h1 id="header-title" className="font-display font-bold text-lg text-white tracking-tight leading-none">
                Grostulvegen 97
              </h1>
              <span className="text-[10px] text-text-dim font-mono tracking-widest uppercase block mt-1.5">
                Gjesteguide / Cabin Guide
              </span>
            </div>
          </div>

          {/* Language toggle selector */}
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 p-1 rounded-xl">
            <button
              id="lang-no-btn"
              onClick={() => setLang("no")}
              className={`flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                lang === "no"
                  ? "bg-cabin-green text-cabin-accent border border-cabin-accent/10 shadow-sm"
                  : "text-text-dim hover:text-white"
              }`}
            >
              <span>🇳🇴 NO</span>
            </button>
            <button
              id="lang-en-btn"
              onClick={() => setLang("en")}
              className={`flex items-center gap-1 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                lang === "en"
                  ? "bg-cabin-green text-cabin-accent border border-cabin-accent/10 shadow-sm"
                  : "text-text-dim hover:text-white"
              }`}
            >
              <span>🇬🇧 EN</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner Section */}
      <div id="hero-banner" className="relative h-[45vh] sm:h-[50vh] min-h-[350px] w-full overflow-hidden bg-cabin-dark flex items-end">
        {/* Real Custom Generated Cabin Hero Image */}
        <img
          src={cabinHero}
          alt="Grostulvegen 97 cabin nestled in the beautiful mountain region of Lifjell, Norway"
          className="absolute inset-0 w-full h-full object-cover opacity-75"
          referrerPolicy="no-referrer"
        />
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cabin-dark via-cabin-dark/40 to-black/30" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 text-left animate-fade-in-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cabin-accent/15 text-cabin-accent font-mono text-xs font-bold rounded-full border border-cabin-accent/25 backdrop-blur-md mb-4 animate-pulse">
            <MapPin className="w-3.5 h-3.5" />
            Lifjell, Bø i Telemark, Norge
          </span>
          <h2 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight leading-tight mb-3">
            {t.heroTitle}
          </h2>
          <p id="hero-subtext" className="text-base sm:text-lg md:text-xl text-text-light font-medium tracking-wide max-w-2xl font-display leading-relaxed">
            {t.heroSubtitle}
          </p>
        </div>
      </div>

      {/* Quick Jump Bar for mobile & desktop */}
      <div id="quick-jump-bar" className="bg-cabin-dark/85 backdrop-blur-md border-b border-white/8 py-3.5 overflow-x-auto sticky top-[69px] z-40 shadow-lg scrollbar-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 whitespace-nowrap">
          <span className="text-[10px] font-mono text-text-dim uppercase tracking-widest font-bold mr-2.5 hidden md:inline">
            Hopp til:
          </span>
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`jump-btn-${item.id}`}
              onClick={() => handleScrollTo(item.id)}
              className="flex items-center gap-1.5 px-4 py-2 bg-white/5 hover:bg-white/10 text-text-light hover:text-white rounded-xl text-xs font-semibold border border-white/10 hover:border-cabin-accent/25 shadow-sm transition-all cursor-pointer"
            >
              {item.icon}
              <span>{lang === "no" ? item.no : item.en}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16 flex-1 w-full animate-fade-in-up">
        
        {/* Seksjon 1: Om hytta */}
        <section id="om-hytta" className="scroll-mt-36">
          <CabinStats stats={t.stats} title={t.aboutTitle} />
        </section>

        {/* Seksjon 2: Før dere kommer */}
        <section id="for-ankomst" className="scroll-mt-36 border-t border-white/5 pt-12">
          <div className="mb-6">
            <span className="text-cabin-accent font-mono text-xs uppercase tracking-widest font-bold block mb-1">
              Arrival Instructions
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {t.beforeArrivalTitle}
            </h2>
          </div>
          <BeforeArrivalCard info={t.beforeArrival} copiedLabel={t.copiedLabel} copyLabel={t.copyLabel} />
        </section>

        {/* Seksjon 3: Wifi og nøkkel */}
        <section id="wifi-nøkkel" className="scroll-mt-36 border-t border-white/5 pt-12">
          <WifiCard wifi={t.wifi} copiedLabel={t.copiedLabel} copyLabel={t.copyLabel} />
        </section>

        {/* Seksjon 4: Hoveddør og Vann */}
        <section id="instrukser" className="scroll-mt-36 border-t border-white/5 pt-12">
          <div className="mb-6">
            <span className="text-cabin-accent font-mono text-xs uppercase tracking-widest font-bold block mb-1">
              Cabin Guidelines
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              Praktiske bruksanvisninger / Instructions
            </h2>
          </div>
          <CabinInstructions door={t.door} water={t.water} videoButtonLabel={t.videoButtonLabel} />
        </section>

        {/* Seksjon 5: Regler og Sengetøy */}
        <section id="regler-sengetøy" className="scroll-mt-36 border-t border-white/5 pt-12">
          <RulesAndLinen linen={t.linen} rules={t.rules} />
        </section>

        {/* Seksjon 6: Sjekkliste før avreise */}
        <section id="avreise-sjekkliste" className="scroll-mt-36 border-t border-white/5 pt-12">
          <InteractiveChecklist checklist={t.checklist} completedLabel={t.completedLabel} />
        </section>

        {/* Seksjon 7: Turer og Opplevelser */}
        <section id="turer-opplevelser" className="scroll-mt-36 border-t border-white/5 pt-12">
          <HikesAndTrips
            hikes={t.hikes}
            dayTrips={t.dayTrips}
            hikesTitle={t.hikesTitle}
            dayTripsTitle={t.dayTripsTitle}
            hikesSource={t.hikesSource}
            tripsSource={t.tripsSource}
          />
        </section>

        {/* Seksjon 8: Kontakt og nødnumre */}
        <section id="kontakt-nød" className="scroll-mt-36 border-t border-white/5 pt-12">
          <ContactEmergencyCard contact={t.contact} welcomeMessage={t.welcomeMessage} />
        </section>

      </main>

      {/* Elegant Footer */}
      <footer className="mt-24 border-t border-white/5 bg-white/2 py-12 px-4 sm:px-6 lg:px-8 text-center text-text-dim text-xs font-mono">
        <div className="max-w-7xl mx-auto space-y-2">
          <p className="text-cabin-accent font-semibold font-sans">Grostulvegen 97, 3804 Bø i Telemark</p>
          <p>© 2026 Grostulvegen 97 Guest Guide. Built with care for cabin renters.</p>
        </div>
      </footer>
    </div>
  );
}
