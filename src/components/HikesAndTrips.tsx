import React, { useState } from "react";
import { Compass, Car, MapPin, ExternalLink, Mountain, Info } from "lucide-react";
import { Hike, DayTrip, HikeDifficulty } from "../content/types";
import ExpandableImage from "./ExpandableImage";
import skiTrailsMapImage from "../assets/images/ski-trails-map.jpg";

interface HikesAndTripsProps {
  hikes: Hike[];
  dayTrips: DayTrip[];
  hikesTitle: string;
  dayTripsTitle: string;
  hikesSource: string;
  hikesMapNote: string;
  tripsSource: string;
  experiencesTitle: string;
  localGuideEyebrow: string;
  visitWebsiteLabel: string;
  hikesRegionLabel: string;
  skiTrailsMapAlt: string;
  skiMapCardTitle: string;
  skiMapCardDescription: string;
  enlargeImageLabel: string;
  closeLabel: string;
}

const badgeColors: Record<HikeDifficulty, string> = {
  moderate: "bg-sky-500/10 text-sky-300 border-sky-500/25",
  demanding: "bg-red-500/10 text-red-300 border-red-500/25",
  favorite: "bg-emerald-500/10 text-emerald-300 border-emerald-500/25",
  popular: "bg-purple-500/10 text-purple-300 border-purple-500/25",
  hike: "bg-white/5 text-text-light border-white/10",
};

export default function HikesAndTrips({
  hikes,
  dayTrips,
  hikesTitle,
  dayTripsTitle,
  hikesSource,
  hikesMapNote,
  tripsSource,
  experiencesTitle,
  localGuideEyebrow,
  visitWebsiteLabel,
  hikesRegionLabel,
  skiTrailsMapAlt,
  skiMapCardTitle,
  skiMapCardDescription,
  enlargeImageLabel,
  closeLabel,
}: HikesAndTripsProps) {
  const [activeTab, setActiveTab] = useState<"hikes" | "trips">("hikes");

  return (
    <div id="hikes-and-trips-section" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl text-text-light">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-cabin-accent/15 pb-6 mb-6 gap-4">
        <div>
          <span className="text-text-dim font-mono text-xs uppercase tracking-widest block mb-1">{localGuideEyebrow}</span>
          <h3 className="text-2xl font-bold tracking-tight text-cabin-accent font-display">
            {experiencesTitle}
          </h3>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 self-start sm:self-auto">
          <button
            id="tab-hikes-btn"
            onClick={() => setActiveTab("hikes")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "hikes"
                ? "bg-cabin-green text-cabin-accent border border-cabin-accent/10 shadow-md"
                : "text-text-dim hover:text-white"
            }`}
          >
            <Compass className="w-4 h-4 text-cabin-accent" />
            <span>{hikesTitle}</span>
          </button>
          <button
            id="tab-trips-btn"
            onClick={() => setActiveTab("trips")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              activeTab === "trips"
                ? "bg-cabin-green text-cabin-accent border border-cabin-accent/10 shadow-md"
                : "text-text-dim hover:text-white"
            }`}
          >
            <Car className="w-4 h-4 text-cabin-accent" />
            <span>{dayTripsTitle}</span>
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === "hikes" ? (
        <div id="hikes-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hikes.map((hike, idx) => (
              <div
                key={idx}
                id={`hike-card-${idx}`}
                className="flex flex-col justify-between p-5 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/5 hover:border-cabin-accent/20 transition-all duration-300 shadow-sm group"
              >
                <div>
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-cabin-accent transition-colors">
                      {hike.name}
                    </h4>
                    {hike.elevation && (
                      <span className="shrink-0 bg-white/5 border border-white/10 text-cabin-gold text-xs font-semibold px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                        <Mountain className="w-3.5 h-3.5" />
                        {hike.elevation}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-text-dim leading-relaxed font-medium">{hike.details}</p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between gap-2">
                  <span className={`inline-flex items-center text-xs px-2.5 py-0.5 rounded-full font-semibold border ${badgeColors[hike.difficulty]}`}>
                    {hike.badge}
                  </span>
                  {hike.website ? (
                    <a
                      id={`hike-link-${idx}`}
                      href={hike.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs font-semibold text-cabin-accent hover:text-white transition-colors cursor-pointer"
                    >
                      <span>{visitWebsiteLabel}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-xs text-text-dim font-mono">{hikesRegionLabel}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Local area map, shown as a normal card in this grid (hikes only, not day trips) */}
            <div
              id="ski-map-card"
              className="flex flex-col justify-between p-5 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/5 hover:border-cabin-accent/20 transition-all duration-300 shadow-sm group"
            >
              <div>
                <ExpandableImage
                  src={skiTrailsMapImage}
                  alt={skiTrailsMapAlt}
                  enlargeLabel={enlargeImageLabel}
                  closeLabel={closeLabel}
                  className="mb-3"
                  imgClassName="w-full h-32 object-cover"
                />
                <h4 className="text-lg font-bold text-white group-hover:text-cabin-accent transition-colors mb-1">
                  {skiMapCardTitle}
                </h4>
                <p className="text-sm text-text-dim leading-relaxed font-medium">{skiMapCardDescription}</p>
              </div>
            </div>
          </div>

          <div id="hikes-footer" className="mt-6 space-y-2">
            <div className="flex items-center gap-2 p-3 bg-white/3 rounded-xl text-xs text-text-dim font-mono border border-white/5">
              <Info className="w-4 h-4 text-cabin-accent shrink-0" />
              <span>{hikesSource}</span>
            </div>
            <div id="hikes-map-note" className="flex items-center gap-2 p-3 bg-white/3 rounded-xl text-xs text-text-dim border border-white/5">
              <MapPin className="w-4 h-4 text-cabin-accent shrink-0" />
              <span>{hikesMapNote}</span>
            </div>
          </div>
        </div>
      ) : (
        <div id="trips-content">
          <div className="space-y-4">
            {dayTrips.map((trip, idx) => (
              <div
                key={idx}
                id={`trip-card-${idx}`}
                className="p-5 rounded-2xl border border-white/10 bg-white/3 hover:bg-white/5 hover:border-cabin-accent/20 transition-all duration-300 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="text-lg font-bold text-white group-hover:text-cabin-accent transition-colors">
                      {trip.name}
                    </h4>
                    <span className="bg-white/5 border border-white/10 text-cabin-gold text-xs font-semibold px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {trip.distance}
                    </span>
                  </div>
                  <p className="text-sm text-text-dim leading-relaxed font-medium max-w-2xl">{trip.description}</p>
                </div>

                {trip.website && (
                  <a
                    id={`trip-link-${idx}`}
                    href={trip.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold text-white bg-cabin-green hover:bg-cabin-green/85 border border-cabin-accent/20 shadow-md px-3.5 py-2.5 rounded-xl transition-all w-full sm:w-auto justify-center cursor-pointer"
                  >
                    <span>{visitWebsiteLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>

          <div id="trips-footer" className="mt-6 flex items-center gap-2 p-3 bg-white/3 rounded-xl text-xs text-text-dim font-mono border border-white/5">
            <Info className="w-4 h-4 text-cabin-accent shrink-0" />
            <span>{tripsSource}</span>
          </div>
        </div>
      )}
    </div>
  );
}
