import React from "react";
import { BedDouble, Bath, ChefHat, Tv, Flame, Trees, Milestone, Car, Sparkles, Home } from "lucide-react";
import { CabinStats as CabinStatsType, StatsLabels } from "../content/types";

interface CabinStatsProps {
  stats: CabinStatsType;
  labels: StatsLabels;
  title: string;
}

export default function CabinStats({ stats, labels, title }: CabinStatsProps) {
  // Helper to map an amenity to its corresponding icon
  const getAmenityIcon = (amenity: string) => {
    const lowercase = amenity.toLowerCase();
    if (lowercase.includes("kjøkken") || lowercase.includes("kitchen")) {
      return <ChefHat className="w-5 h-5 text-cabin-accent" />;
    }
    if (lowercase.includes("tv") || lowercase.includes("living")) {
      return <Tv className="w-5 h-5 text-cabin-accent" />;
    }
    if (lowercase.includes("badstue") || lowercase.includes("sauna")) {
      return <Flame className="w-5 h-5 text-cabin-accent" />;
    }
    if (lowercase.includes("terrasse") || lowercase.includes("terrace")) {
      return <Trees className="w-5 h-5 text-cabin-accent" />;
    }
    if (lowercase.includes("ski")) {
      return <Milestone className="w-5 h-5 text-cabin-accent" />;
    }
    if (lowercase.includes("parkering") || lowercase.includes("parking")) {
      return <Car className="w-5 h-5 text-cabin-accent" />;
    }
    return <Sparkles className="w-5 h-5 text-cabin-accent" />;
  };

  return (
    <div id="cabin-stats-section" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl text-text-light">
      <div className="flex items-center gap-3 mb-6 border-b border-cabin-accent/20 pb-3">
        <Home className="w-6 h-6 text-cabin-accent" />
        <h3 id="cabin-stats-title" className="text-2xl font-bold tracking-tight text-cabin-accent font-display">
          {title}
        </h3>
      </div>

      {/* Main Specs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div id="stat-bedrooms" className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-sm text-center flex flex-col items-center justify-center transition-all hover:bg-white/8">
          <BedDouble className="w-7 h-7 text-cabin-accent mb-2" />
          <span className="text-xl font-bold text-white font-sans">{stats.bedrooms}</span>
          <span className="text-xs text-text-dim font-medium mt-0.5">{labels.bedrooms}</span>
        </div>

        <div id="stat-beds" className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-sm text-center flex flex-col items-center justify-center transition-all hover:bg-white/8">
          <BedDouble className="w-7 h-7 text-cabin-accent mb-2" />
          <span className="text-xl font-bold text-white font-sans">{stats.beds}</span>
          <span className="text-xs text-text-dim font-medium mt-0.5">{labels.beds}</span>
        </div>

        <div id="stat-bathrooms" className="p-4 bg-white/5 rounded-2xl border border-white/10 shadow-sm text-center flex flex-col items-center justify-center transition-all hover:bg-white/8">
          <Bath className="w-7 h-7 text-cabin-accent mb-2" />
          <span className="text-xl font-bold text-white font-sans">{stats.bathrooms}</span>
          <span className="text-xs text-text-dim font-medium mt-0.5">{labels.bathrooms}</span>
        </div>
      </div>

      {/* Amenities Bullet Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {stats.amenities.map((amenity, idx) => (
          <div
            key={idx}
            id={`amenity-item-${idx}`}
            className="flex items-center gap-3 p-3.5 bg-white/3 rounded-xl border border-white/5 hover:border-cabin-accent/30 hover:bg-white/8 transition-colors duration-250 shadow-sm"
          >
            <div className="bg-white/5 p-2 rounded-lg border border-white/10 shrink-0">
              {getAmenityIcon(amenity)}
            </div>
            <span className="text-sm font-semibold text-text-light">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
