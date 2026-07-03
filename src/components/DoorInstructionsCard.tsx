import React from "react";
import { Lock, ArrowUp, ShieldAlert } from "lucide-react";
import { DoorInstructions } from "../content/types";

interface DoorInstructionsCardProps {
  door: DoorInstructions;
  accessEyebrow: string;
}

export default function DoorInstructionsCard({ door, accessEyebrow }: DoorInstructionsCardProps) {
  return (
    <div id="door-instructions-card" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-text-light shadow-xl relative overflow-hidden flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-6 border-b border-cabin-accent/15 pb-3">
          <div>
            <span className="text-text-dim font-mono text-xs uppercase tracking-widest block mb-1">{accessEyebrow}</span>
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
                      {door.handleReminder}
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
          <strong>{door.warningTitle}</strong> {door.warningText}
        </p>
      </div>
    </div>
  );
}
