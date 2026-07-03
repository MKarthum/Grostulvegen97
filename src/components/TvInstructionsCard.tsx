import React from "react";
import { Tv, Info } from "lucide-react";
import { TvInstructions } from "../content/types";

interface TvInstructionsCardProps {
  tv: TvInstructions;
  entertainmentEyebrow: string;
}

export default function TvInstructionsCard({ tv, entertainmentEyebrow }: TvInstructionsCardProps) {
  return (
    <div id="tv-instructions-card" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-text-light shadow-xl relative overflow-hidden">
      <div className="flex items-start justify-between mb-6 border-b border-cabin-accent/15 pb-3">
        <div>
          <span className="text-text-dim font-mono text-xs uppercase tracking-widest block mb-1">{entertainmentEyebrow}</span>
          <h3 id="tv-title" className="text-2xl font-bold tracking-tight text-cabin-accent font-display">
            {tv.title}
          </h3>
        </div>
        <div className="bg-white/5 text-cabin-accent p-3 rounded-2xl border border-white/10">
          <Tv className="w-6 h-6" />
        </div>
      </div>

      <p className="text-sm text-text-dim mb-4 font-medium">{tv.intro}</p>

      <div className="space-y-4">
        {tv.steps.map((step, idx) => (
          <div key={idx} className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 shadow-sm items-start transition-all hover:bg-white/8">
            <div className="w-8 h-8 rounded-xl bg-white/5 text-cabin-accent border border-white/10 flex items-center justify-center font-bold text-sm shrink-0">
              {idx + 1}
            </div>
            <p className="text-sm font-medium text-white leading-relaxed">{step}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-3 p-4 bg-cabin-green/10 border border-cabin-accent/10 rounded-2xl text-text-light text-sm leading-relaxed">
        <Info className="w-5 h-5 text-cabin-accent shrink-0 mt-0.5" />
        <p className="font-medium">{tv.streamingNote}</p>
      </div>
    </div>
  );
}
