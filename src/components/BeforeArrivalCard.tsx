import React, { useState } from "react";
import { MapPin, Clock, Car, Copy, Check, Navigation, Calendar } from "lucide-react";
import { BeforeArrivalInfo } from "../content/types";

interface BeforeArrivalCardProps {
  info: BeforeArrivalInfo;
  copiedLabel: string;
  copyAddressLabel: string;
  navigateLabel: string;
  destinationEyebrow: string;
}

export default function BeforeArrivalCard({
  info,
  copiedLabel,
  copyAddressLabel,
  navigateLabel,
  destinationEyebrow,
}: BeforeArrivalCardProps) {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(info.address.value);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    info.address.value
  )}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Address & Navigation Card */}
      <div id="address-nav-card" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-text-light shadow-xl flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-6 border-b border-cabin-accent/15 pb-3">
            <div>
              <span className="text-text-dim font-mono text-xs uppercase tracking-widest block mb-1">{destinationEyebrow}</span>
              <h3 id="address-title" className="text-2xl font-bold tracking-tight text-cabin-accent font-display">
                {info.address.label}
              </h3>
            </div>
            <div className="bg-white/5 text-cabin-accent p-3 rounded-2xl border border-white/10">
              <MapPin className="w-6 h-6" />
            </div>
          </div>

          <div className="p-5 bg-white/5 rounded-2xl border border-white/10 shadow-sm mb-6">
            <p className="font-mono text-white font-semibold text-base sm:text-lg leading-relaxed select-all">
              {info.address.value}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            id="copy-address-btn"
            onClick={copyAddress}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/15 hover:bg-white/5 active:scale-95 font-semibold text-sm text-text-light transition-all cursor-pointer"
          >
            {copiedAddress ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{copiedLabel}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-cabin-accent" />
                <span>{copyAddressLabel}</span>
              </>
            )}
          </button>

          <a
            id="navigate-maps-link"
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cabin-green hover:bg-cabin-green/85 border border-cabin-accent/20 active:scale-95 font-semibold text-sm text-white shadow-md transition-all cursor-pointer"
          >
            <Navigation className="w-4 h-4 fill-white" />
            <span>{navigateLabel}</span>
          </a>
        </div>
      </div>

      {/* Checking & Parking Times */}
      <div id="check-times-card" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Check-In */}
        <div id="check-in-box" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 shadow-xl flex flex-col justify-between transition-all hover:bg-white/5">
          <div className="flex justify-between items-start border-b border-cabin-accent/10 pb-3">
            <span className="text-cabin-accent font-mono text-xs uppercase tracking-widest font-semibold">
              {info.checkIn.label}
            </span>
            <Clock className="w-5 h-5 text-cabin-accent" />
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-white font-display tracking-tight">{info.checkIn.value}</p>
            <p className="text-xs text-text-dim mt-1">{info.checkIn.caption}</p>
          </div>
        </div>

        {/* Check-Out */}
        <div id="check-out-box" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 shadow-xl flex flex-col justify-between transition-all hover:bg-white/5">
          <div className="flex justify-between items-start border-b border-cabin-accent/10 pb-3">
            <span className="text-cabin-accent font-mono text-xs uppercase tracking-widest font-semibold">
              {info.checkOut.label}
            </span>
            <Clock className="w-5 h-5 text-cabin-accent" />
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold text-white font-display tracking-tight">{info.checkOut.value}</p>
            <p className="text-xs text-text-dim mt-1">{info.checkOut.caption}</p>
          </div>
        </div>

        {/* Parking info */}
        <div id="parking-box" className="sm:col-span-2 bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 shadow-xl flex items-center gap-4 transition-all hover:bg-white/5">
          <div className="bg-white/5 border border-white/10 p-3 rounded-2xl shrink-0">
            <Car className="w-6 h-6 text-cabin-accent" />
          </div>
          <div>
            <span className="text-xs font-mono text-text-dim uppercase tracking-widest block mb-0.5">
              {info.parking.label}
            </span>
            <p className="text-sm font-semibold text-text-light leading-relaxed">{info.parking.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
