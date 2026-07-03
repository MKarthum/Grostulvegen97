import React, { useState } from "react";
import { Wifi, Copy, Check, Key } from "lucide-react";
import { WifiInfo } from "../content/types";

interface WifiCardProps {
  wifi: WifiInfo;
  copiedLabel: string;
  copyLabel: string;
  connectivityEyebrow: string;
  wifiKeyTitle: string;
  networkLabel: string;
  securityLabel: string;
  passwordLabel: string;
}

export default function WifiCard({
  wifi,
  copiedLabel,
  copyLabel,
  connectivityEyebrow,
  wifiKeyTitle,
  networkLabel,
  securityLabel,
  passwordLabel,
}: WifiCardProps) {
  const [copiedNetwork, setCopiedNetwork] = useState(false);

  const copyNetwork = () => {
    navigator.clipboard.writeText(wifi.network);
    setCopiedNetwork(true);
    setTimeout(() => setCopiedNetwork(false), 2000);
  };

  return (
    <div id="wifi-card-container" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-text-light shadow-xl relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-cabin-accent/5 rounded-full blur-2xl group-hover:bg-cabin-accent/10 transition-all duration-500" />

      <div className="flex items-start justify-between mb-6 border-b border-cabin-accent/15 pb-3">
        <div>
          <span className="text-text-dim font-mono text-xs uppercase tracking-widest block mb-1">{connectivityEyebrow}</span>
          <h3 id="wifi-card-title" className="text-2xl font-bold tracking-tight font-display text-cabin-accent">
            {wifiKeyTitle}
          </h3>
        </div>
        <div className="bg-white/5 p-3 rounded-2xl text-cabin-accent border border-white/10">
          <Wifi className="w-6 h-6 animate-pulse" />
        </div>
      </div>

      <div className="space-y-4">
        {/* Network Name */}
        <div id="wifi-network-row" className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 gap-3">
          <div className="flex items-center gap-3">
            <span className="text-cabin-accent text-sm font-semibold">{networkLabel}:</span>
            <span className="font-mono text-white font-semibold break-all">{wifi.network}</span>
          </div>
          <button
            id="copy-network-btn"
            onClick={copyNetwork}
            className="self-end sm:self-auto flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cabin-green hover:bg-cabin-green/80 border border-cabin-accent/15 active:scale-95 text-xs font-semibold text-white transition-all cursor-pointer"
          >
            {copiedNetwork ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>{copiedLabel}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{copyLabel}</span>
              </>
            )}
          </button>
        </div>

        {/* Security Method */}
        <div id="wifi-security-row" className="flex items-center gap-3 p-4 bg-white/3 rounded-2xl border border-white/5">
          <span className="text-cabin-accent text-sm font-semibold">{securityLabel}:</span>
          <span className="font-mono text-text-light text-sm font-medium">{wifi.security}</span>
        </div>

        {/* Password note (the real password is never published here) */}
        <div id="wifi-password-row" className="flex items-center gap-3 p-4 bg-white/3 rounded-2xl border border-white/5">
          <span className="text-cabin-accent text-sm font-semibold">{passwordLabel}:</span>
          <span className="text-text-light text-sm font-medium">{wifi.passwordNote}</span>
        </div>
      </div>

      <div id="keybox-info-box" className="mt-6 flex gap-3 p-4 bg-cabin-green/10 border border-cabin-accent/10 rounded-2xl text-text-light text-sm leading-relaxed">
        <Key className="w-5 h-5 text-cabin-accent shrink-0 mt-0.5" />
        <p className="font-medium">{wifi.keyBoxInstructions}</p>
      </div>
    </div>
  );
}
