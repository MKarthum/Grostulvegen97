import React from "react";
import { AlertCircle, FileText, Ban, Trash, HelpCircle, Shield, Wind, Sparkles } from "lucide-react";
import { LinenInfo, HouseRules } from "../types";

interface RulesAndLinenProps {
  linen: LinenInfo;
  rules: HouseRules;
}

export default function RulesAndLinen({ linen, rules }: RulesAndLinenProps) {
  // We can helper-map specific icons to specific house rules to make them look custom-crafted rather than generic!
  const getRuleIcon = (rule: string) => {
    const lowercase = rule.toLowerCase();
    if (lowercase.includes("dyr") || lowercase.includes("pet")) {
      return <Ban className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />;
    }
    if (lowercase.includes("røyk") || lowercase.includes("smok")) {
      return <Ban className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />;
    }
    if (lowercase.includes("grill")) {
      return <AlertCircle className="w-5 h-5 text-cabin-accent shrink-0 mt-0.5" />;
    }
    if (lowercase.includes("ved") || lowercase.includes("firewood")) {
      return <Sparkles className="w-5 h-5 text-cabin-accent shrink-0 mt-0.5" />;
    }
    return <Shield className="w-5 h-5 text-cabin-accent shrink-0 mt-0.5" />;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Bed Linen & Towels */}
      <div id="linen-card" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-text-light shadow-xl flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-6 border-b border-cabin-accent/15 pb-3">
            <div>
              <span className="text-text-dim font-mono text-xs uppercase tracking-widest block mb-1">Packing List</span>
              <h3 id="linen-title" className="text-2xl font-bold tracking-tight text-cabin-accent font-display">
                {linen.title}
              </h3>
            </div>
            <div className="bg-white/5 text-cabin-accent p-3 rounded-2xl border border-white/10">
              <FileText className="w-6 h-6" />
            </div>
          </div>

          <p className="text-sm text-text-dim mb-6 font-medium">
            Husk å pakke med følgende / Remember to bring the following items:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {linen.items.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/10 shadow-sm transition-all hover:bg-white/8">
                <div className="w-2 h-2 rounded-full bg-cabin-accent shrink-0" />
                <span className="text-sm font-semibold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 p-4 bg-cabin-gold/5 border border-cabin-gold/20 rounded-2xl flex gap-3 text-text-light text-sm leading-relaxed">
          <AlertCircle className="w-5 h-5 text-cabin-accent shrink-0 mt-0.5" />
          <p className="font-semibold">{linen.warning}</p>
        </div>
      </div>

      {/* House Rules */}
      <div id="rules-card" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-text-light shadow-xl flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between mb-6 border-b border-cabin-accent/15 pb-3">
            <div>
              <span className="text-text-dim font-mono text-xs uppercase tracking-widest block mb-1">Cabin Code</span>
              <h3 id="rules-title" className="text-2xl font-bold tracking-tight text-cabin-accent font-display">
                {rules.title}
              </h3>
            </div>
            <div className="bg-white/5 text-cabin-accent p-3 rounded-2xl border border-white/10">
              <Shield className="w-6 h-6" />
            </div>
          </div>

          <div className="space-y-4">
            {rules.rules.map((rule, idx) => (
              <div key={idx} className="flex gap-3.5 p-3.5 bg-white/5 rounded-2xl border border-white/10 shadow-sm items-start transition-all hover:bg-white/8">
                {getRuleIcon(rule)}
                <span className="text-sm font-semibold text-white leading-relaxed">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-xs text-text-dim text-center font-mono">
          Takk for at dere hjelper oss å ta vare på hytta! / Thank you for caring for our cabin!
        </div>
      </div>
    </div>
  );
}
