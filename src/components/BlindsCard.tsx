import React from "react";
import { Blinds as BlindsIcon } from "lucide-react";
import { BlindsInfo } from "../content/types";

interface BlindsCardProps {
  blinds: BlindsInfo;
  blindsEyebrow: string;
}

export default function BlindsCard({ blinds, blindsEyebrow }: BlindsCardProps) {
  return (
    <div id="blinds-card" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-text-light shadow-xl relative overflow-hidden">
      <div className="flex items-start justify-between mb-6 border-b border-cabin-accent/15 pb-3">
        <div>
          <span className="text-text-dim font-mono text-xs uppercase tracking-widest block mb-1">{blindsEyebrow}</span>
          <h3 id="blinds-title" className="text-2xl font-bold tracking-tight text-cabin-accent font-display">
            {blinds.title}
          </h3>
        </div>
        <div className="bg-white/5 text-cabin-accent p-3 rounded-2xl border border-white/10">
          <BlindsIcon className="w-6 h-6" />
        </div>
      </div>

      <div className="space-y-3">
        {blinds.paragraphs.map((paragraph, idx) => (
          <p key={idx} className="text-sm text-text-dim leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
