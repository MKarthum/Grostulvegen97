import React from "react";
import { Zap } from "lucide-react";
import { FirewoodPowerInfo } from "../content/types";

interface FirewoodPowerCardProps {
  firewoodPower: FirewoodPowerInfo;
  firewoodEyebrow: string;
}

export default function FirewoodPowerCard({ firewoodPower, firewoodEyebrow }: FirewoodPowerCardProps) {
  return (
    <div id="firewood-power-card" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-text-light shadow-xl relative overflow-hidden">
      <div className="flex items-start justify-between mb-6 border-b border-cabin-accent/15 pb-3">
        <div>
          <span className="text-text-dim font-mono text-xs uppercase tracking-widest block mb-1">{firewoodEyebrow}</span>
          <h3 id="firewood-power-title" className="text-2xl font-bold tracking-tight text-cabin-accent font-display">
            {firewoodPower.title}
          </h3>
        </div>
        <div className="bg-white/5 text-cabin-accent p-3 rounded-2xl border border-white/10">
          <Zap className="w-6 h-6" />
        </div>
      </div>

      <div className="space-y-3">
        {firewoodPower.paragraphs.map((paragraph, idx) => (
          <p key={idx} className="text-sm text-text-dim leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
