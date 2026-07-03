import React from "react";
import { Lock, Unlock, Droplet, ArrowUp, ShieldAlert, PlayCircle, ExternalLink } from "lucide-react";
import { DoorInstructions, WaterInstructions } from "../types";

interface CabinInstructionsProps {
  door: DoorInstructions;
  water: WaterInstructions;
  videoButtonLabel: string;
}

export default function CabinInstructions({ door, water, videoButtonLabel }: CabinInstructionsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Door Lock Instructions */}
      <div id="door-instructions-card" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-text-light shadow-xl relative overflow-hidden flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-6 border-b border-cabin-accent/15 pb-3">
            <div>
              <span className="text-text-dim font-mono text-xs uppercase tracking-widest block mb-1">Access</span>
              <h3 id="door-title" className="text-2xl font-bold tracking-tight text-cabin-accent font-display">
                {door.title}
              </h3>
            </div>
            <div className="bg-white/5 text-cabin-accent p-3 rounded-2xl border border-white/10">
              <Lock className="w-6 h-6" />
            </div>
          </div>

          <div className="space-y-4">
            {door.steps.map((step, idx) => {
              const isFirst = idx === 0;
              return (
                <div key={idx} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 shadow-sm items-start transition-all hover:bg-white/8">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                    isFirst ? "bg-cabin-gold/10 text-cabin-gold border border-cabin-gold/20" : "bg-white/5 text-text-light border border-white/10"
                  }`}>
                    {idx + 1}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-white leading-relaxed">{step}</p>
                    {isFirst && (
                      <span className="inline-flex items-center gap-1 text-xs text-cabin-accent font-semibold bg-white/5 px-2.5 py-1 rounded-lg border border-cabin-accent/20 mt-1.5">
                        <ArrowUp className="w-3.5 h-3.5 animate-bounce" />
                        Husk håndtaket! / Remember the handle!
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 flex gap-3 p-4 bg-cabin-gold/5 border border-cabin-gold/20 rounded-2xl text-text-light text-xs sm:text-sm leading-relaxed">
          <ShieldAlert className="w-5 h-5 text-cabin-accent shrink-0 mt-0.5" />
          <p>
            <strong>OBS!</strong> Hvis døren ikke låses ved å løfte håndtaket helt opp først, går ikke låsen i lås, og hytta blir stående ulåst.
          </p>
        </div>
      </div>

      {/* Water System Instructions */}
      <div id="water-instructions-card" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-text-light shadow-xl relative overflow-hidden flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-6 border-b border-cabin-accent/15 pb-3">
            <div>
              <span className="text-text-dim font-mono text-xs uppercase tracking-widest block mb-1">Utilities</span>
              <h3 id="water-title" className="text-2xl font-bold tracking-tight text-cabin-accent font-display">
                {water.title}
              </h3>
            </div>
            <div className="bg-white/5 text-cabin-accent p-3 rounded-2xl border border-white/10">
              <Droplet className="w-6 h-6" />
            </div>
          </div>

          <div className="space-y-4">
            {water.steps.map((step, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 shadow-sm items-start transition-all hover:bg-white/8">
                <div className="w-8 h-8 rounded-xl bg-white/5 text-cabin-accent border border-white/10 flex items-center justify-center font-bold text-sm shrink-0">
                  {idx + 1}
                </div>
                <p className="text-sm font-medium text-white leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Video link card */}
        <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <PlayCircle className="w-10 h-10 text-cabin-accent shrink-0" />
            <div className="text-left">
              <h4 className="text-sm font-semibold text-white">Videoinstruksjon / Video Guide</h4>
              <p className="text-xs text-text-dim">Se nøyaktig hvordan du åpner og stenger vannet.</p>
            </div>
          </div>
          {water.videoPlaceholder ? (
            <a
              id="water-video-link"
              href={water.videoPlaceholder}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-cabin-green hover:bg-cabin-green/85 border border-cabin-accent/15 text-white font-medium text-xs rounded-xl shadow-md transition-colors cursor-pointer"
            >
              <span>{videoButtonLabel}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span
              id="water-video-link"
              aria-disabled="true"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-text-dim font-medium text-xs rounded-xl cursor-not-allowed select-none"
            >
              <span>{videoButtonLabel}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
