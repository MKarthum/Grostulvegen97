import React, { useState, useEffect } from "react";
import { translations } from "./content";
import { Translation, VideoGuide } from "./content/types";

// Import custom components
import CabinStats from "./components/CabinStats";
import BeforeArrivalCard from "./components/BeforeArrivalCard";
import WifiCard from "./components/WifiCard";
import DoorInstructionsCard from "./components/DoorInstructionsCard";
import WaterInstructionsCard from "./components/WaterInstructionsCard";
import TvInstructionsCard from "./components/TvInstructionsCard";
import QuookerCard from "./components/QuookerCard";
import FirewoodPowerCard from "./components/FirewoodPowerCard";
import BlindsCard from "./components/BlindsCard";
import RulesAndLinen from "./components/RulesAndLinen";
import InteractiveChecklist from "./components/InteractiveChecklist";
import HikesAndTrips from "./components/HikesAndTrips";
import VideoGuides from "./components/VideoGuides";
import ContactEmergencyCard from "./components/ContactEmergencyCard";
import PhotoGallery from "./components/PhotoGallery";
import heroImage from "./assets/images/hero-cabin-exterior.jpg";

// Icons for navigation bar
import {
  Home,
  MapPin,
  Key,
  ClipboardList,
  CheckSquare,
  PhoneCall,
  Compass as GuideIcon,
} from "lucide-react";

export default function App() {
  const [lang, setLang] = useState<"no" | "en">("no");
  const t: Translation = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = lang === "no" ? "Grostulvegen 97 – hytteguide" : "Grostulvegen 97 – cabin guide";
  }, [lang]);

  // Look up video guides by id so instruction sections can embed the
  // matching video without duplicating its title/description anywhere.
  const findVideos = (ids: string[]): VideoGuide[] =>
    ids.map((id) => t.videos.find((video) => video.id === id)).filter((v): v is VideoGuide => Boolean(v));
  const findVideo = (id: string): VideoGuide | undefined => t.videos.find((video) => video.id === id);

  // Quick navigation items with translated labels
  const navItems = [
    { id: "om-hytta", icon: <Home className="w-4 h-4" />, label: t.nav.about },
    { id: "for-ankomst", icon: <MapPin className="w-4 h-4" />, label: t.nav.beforeArrival },
    { id: "ankomst", icon: <Key className="w-4 h-4" />, label: t.nav.arrival },
    { id: "opphold", icon: <ClipboardList className="w-4 h-4" />, label: t.nav.stay },
    { id: "avreise", icon: <CheckSquare className="w-4 h-4" />, label: t.nav.departure },
    { id: "kontakt", icon: <PhoneCall className="w-4 h-4" />, label: t.nav.contact },
  ];

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-cabin-dark text-slate-100 pb-16 flex flex-col font-sans selection:bg-cabin-accent/20 selection:text-white">
      {/* Top Banner Language Switcher Header (Sticky) */}
      <header className="sticky top-0 z-50 bg-cabin-dark/85 backdrop-blur-md border-b border-white/8 px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="bg-cabin-green/40 text-cabin-accent p-2 rounded-xl border border-white/10">
              <GuideIcon className="w-5 h-5" />
            </div>
            <div>
              <h1 id="header-title" className="font-display font-bold text-lg text-white tracking-tight leading-none">
                {t.heroTitle}
              </h1>
              <span className="text-[10px] text-text-dim font-mono tracking-widest uppercase block mt-1.5">
                {t.headerTagline}
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
      <div id="hero-banner" className="relative h-[40vh] sm:h-[42vh] min-h-[300px] w-full overflow-hidden bg-cabin-dark flex items-end">
        {/* Replace src/assets/images/hero-cabin-exterior.jpg to swap the hero photo. */}
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay so the heading text stays readable over the photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-cabin-dark via-cabin-dark/50 to-cabin-dark/10" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 text-left animate-fade-in-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cabin-accent/15 text-cabin-accent font-mono text-xs font-bold rounded-full border border-cabin-accent/25 backdrop-blur-md mb-4 animate-pulse">
            <MapPin className="w-3.5 h-3.5" />
            {t.heroLocation}
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
            {t.jumpToLabel}
          </span>
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`jump-btn-${item.id}`}
              onClick={() => handleScrollTo(item.id)}
              className="flex items-center gap-1.5 px-4 py-2 bg-white/5 hover:bg-white/10 text-text-light hover:text-white rounded-xl text-xs font-semibold border border-white/10 hover:border-cabin-accent/25 shadow-sm transition-all cursor-pointer"
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16 flex-1 w-full animate-fade-in-up">

        {/* Section: About the cabin */}
        <section id="om-hytta" className="scroll-mt-36">
          <CabinStats stats={t.stats} labels={t.statsLabels} title={t.aboutTitle} />
          <PhotoGallery photos={t.galleryPhotos} title={t.photosTitle} />
        </section>

        {/* Section: Before arrival (address, check-in/out, parking) */}
        <section id="for-ankomst" className="scroll-mt-36 border-t border-white/5 pt-12">
          <div className="mb-6">
            <span className="text-cabin-accent font-mono text-xs uppercase tracking-widest font-bold block mb-1">
              {t.beforeArrivalEyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {t.beforeArrivalTitle}
            </h2>
          </div>
          <BeforeArrivalCard
            info={t.beforeArrival}
            copiedLabel={t.copiedLabel}
            copyAddressLabel={t.copyAddressLabel}
            navigateLabel={t.navigateLabel}
            navigateAppleLabel={t.navigateAppleLabel}
            navigationNote={t.navigationNote}
            destinationEyebrow={t.destinationEyebrow}
            areaMapAlt={t.areaMapAlt}
            enlargeImageLabel={t.enlargeImageLabel}
            closeLabel={t.closeLabel}
          />
        </section>

        {/* Section: Arrival (wifi/key + door lock, things needed right when guests arrive) */}
        <section id="ankomst" className="scroll-mt-36 border-t border-white/5 pt-12">
          <div className="mb-6">
            <span className="text-cabin-accent font-mono text-xs uppercase tracking-widest font-bold block mb-1">
              {t.arrivalEyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {t.arrivalTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <WifiCard
              wifi={t.wifi}
              copiedLabel={t.copiedLabel}
              copyLabel={t.copyLabel}
              connectivityEyebrow={t.connectivityEyebrow}
              wifiKeyTitle={t.wifiKeyTitle}
              networkLabel={t.networkLabel}
              securityLabel={t.securityLabel}
              passwordLabel={t.passwordLabel}
              keyBoxVideo={findVideo("key-box")}
              watchVideoLabel={t.watchVideoLabel}
              openInYoutubeLabel={t.openInYoutubeLabel}
              videoComingSoonLabel={t.videoComingSoonLabel}
            />
            <DoorInstructionsCard
              door={t.door}
              accessEyebrow={t.accessEyebrow}
              videos={findVideos(t.door.videoIds)}
              watchVideoLabel={t.watchVideoLabel}
              openInYoutubeLabel={t.openInYoutubeLabel}
              videoComingSoonLabel={t.videoComingSoonLabel}
            />
            <WaterInstructionsCard
              water={t.water}
              utilitiesEyebrow={t.utilitiesEyebrow}
              videos={findVideos(t.water.videoIds)}
              watchVideoLabel={t.watchVideoLabel}
              openInYoutubeLabel={t.openInYoutubeLabel}
              videoComingSoonLabel={t.videoComingSoonLabel}
            />
          </div>
        </section>

        {/* Section: During the stay (fireplace/washing machine videos, house rules, linen, hikes & trips) */}
        <section id="opphold" className="scroll-mt-36 border-t border-white/5 pt-12">
          <div className="mb-6">
            <span className="text-cabin-accent font-mono text-xs uppercase tracking-widest font-bold block mb-1">
              {t.stayEyebrow}
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
              {t.stayTitle}
            </h2>
          </div>
          <div className="space-y-8">
            <VideoGuides
              videos={findVideos(["fireplace", "washing-machine-water-on", "washing-machine-water-off"])}
              title={t.stayVideosTitle}
              intro={t.stayVideosIntro}
              watchVideoLabel={t.watchVideoLabel}
              openInYoutubeLabel={t.openInYoutubeLabel}
              videoComingSoonLabel={t.videoComingSoonLabel}
            />
            <FirewoodPowerCard firewoodPower={t.firewoodPower} firewoodEyebrow={t.firewoodEyebrow} />
            <BlindsCard blinds={t.blinds} blindsEyebrow={t.blindsEyebrow} />
            <TvInstructionsCard tv={t.tv} entertainmentEyebrow={t.entertainmentEyebrow} />
            <QuookerCard
              quooker={t.quooker}
              kitchenEyebrow={t.kitchenEyebrow}
              videos={findVideos(t.quooker.videoIds)}
              watchVideoLabel={t.watchVideoLabel}
              openInYoutubeLabel={t.openInYoutubeLabel}
              videoComingSoonLabel={t.videoComingSoonLabel}
            />
            <RulesAndLinen
              linen={t.linen}
              rules={t.rules}
              packingListEyebrow={t.packingListEyebrow}
              houseRulesEyebrow={t.houseRulesEyebrow}
            />
            <HikesAndTrips
              hikes={t.hikes}
              dayTrips={t.dayTrips}
              hikesTitle={t.hikesTitle}
              dayTripsTitle={t.dayTripsTitle}
              hikesSource={t.hikesSource}
              hikesMapNote={t.hikesMapNote}
              tripsSource={t.tripsSource}
              experiencesTitle={t.experiencesTitle}
              localGuideEyebrow={t.localGuideEyebrow}
              visitWebsiteLabel={t.visitWebsiteLabel}
              hikesRegionLabel={t.hikesRegionLabel}
              skiTrailsMapAlt={t.skiTrailsMapAlt}
              skiMapCardTitle={t.skiMapCardTitle}
              skiMapCardDescription={t.skiMapCardDescription}
              enlargeImageLabel={t.enlargeImageLabel}
              closeLabel={t.closeLabel}
            />
          </div>
        </section>

        {/* Section: Departure checklist */}
        <section id="avreise" className="scroll-mt-36 border-t border-white/5 pt-12">
          <InteractiveChecklist
            checklist={t.checklist}
            departureEyebrow={t.departureEyebrow}
            contactEmail={t.contact.questionsEmail.email}
          />
        </section>

        {/* Section: Contact and emergency numbers */}
        <section id="kontakt" className="scroll-mt-36 border-t border-white/5 pt-12">
          <ContactEmergencyCard
            contact={t.contact}
            welcomeMessage={t.welcomeMessage}
            welcomeEyebrow={t.welcomeEyebrow}
            emailButtonLabel={t.emailButtonLabel}
          />
        </section>

      </main>

      {/* Elegant Footer */}
      <footer className="mt-24 border-t border-white/5 bg-white/2 py-12 px-4 sm:px-6 lg:px-8 text-center text-text-dim text-xs font-mono">
        <div className="max-w-7xl mx-auto space-y-2">
          <p className="text-cabin-accent font-semibold font-sans">{t.beforeArrival.address.value}</p>
          <p>© 2026 {t.heroTitle} — {t.footerTagline}</p>
        </div>
      </footer>
    </div>
  );
}
