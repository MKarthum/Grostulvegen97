import React from "react";
import { Mail, Phone, ShieldAlert, Sparkles, PhoneCall } from "lucide-react";
import { ContactEmergency } from "../content/types";

interface ContactEmergencyCardProps {
  contact: ContactEmergency;
  welcomeMessage: string;
  welcomeEyebrow: string;
  emailButtonLabel: string;
}

export default function ContactEmergencyCard({ contact, welcomeMessage, welcomeEyebrow, emailButtonLabel }: ContactEmergencyCardProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Welcome & Contact Host */}
      <div id="contact-host-card" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-text-light shadow-xl flex flex-col justify-between lg:col-span-2 relative overflow-hidden group">
        {/* Ambient background decoration */}
        <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-cabin-accent/5 rounded-full blur-3xl group-hover:bg-cabin-accent/10 transition-all duration-700" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-cabin-accent animate-spin-slow" />
            <span className="text-text-dim font-mono text-xs uppercase tracking-widest block">{welcomeEyebrow}</span>
          </div>

          <h3 id="welcome-message" className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight leading-snug mb-6 max-w-xl">
            {welcomeMessage}
          </h3>

          <div className="space-y-4">
            <div className="p-5 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-cabin-accent text-xs font-semibold block mb-2 font-mono uppercase tracking-wider">
                {contact.questionsEmail.label}
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="font-mono text-base font-semibold text-white break-all">{contact.questionsEmail.email}</span>
                <a
                  id="email-host-link"
                  href={`mailto:${contact.questionsEmail.email}`}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 bg-cabin-green hover:bg-cabin-green/85 border border-cabin-accent/20 text-white text-xs font-semibold rounded-xl shadow-md transition-colors w-full sm:w-auto cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>{emailButtonLabel}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-8 border-t border-white/5 pt-6 text-xs text-text-dim font-mono">
          {contact.hostFooterNote} {contact.questionsEmail.email}
        </div>
      </div>

      {/* Emergency Numbers */}
      <div id="emergency-numbers-card" className="bg-red-950/20 border border-red-900/30 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-text-light shadow-xl flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2.5 mb-6 border-b border-red-900/20 pb-3">
            <ShieldAlert className="w-6 h-6 text-red-400 animate-pulse" />
            <h3 id="emergency-title" className="text-xl font-bold tracking-tight text-red-400 font-display">
              {contact.title}
            </h3>
          </div>

          {/* Quick Dial Primary Emergency Numbers */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center justify-between p-3.5 bg-white/5 rounded-2xl border border-white/10 shadow-sm transition-all hover:bg-white/8">
              <span className="font-bold text-white text-sm">{contact.fire.number} {contact.fire.label}</span>
              <a
                id="call-fire-btn"
                href={`tel:${contact.fire.number}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-xs font-bold text-red-300 border border-red-500/30 transition-colors cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{contact.callLabel} {contact.fire.number}</span>
              </a>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-white/5 rounded-2xl border border-white/10 shadow-sm transition-all hover:bg-white/8">
              <span className="font-bold text-white text-sm">{contact.police.number} {contact.police.label}</span>
              <a
                id="call-police-btn"
                href={`tel:${contact.police.number}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-xs font-bold text-red-300 border border-red-500/30 transition-colors cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{contact.callLabel} {contact.police.number}</span>
              </a>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-white/5 rounded-2xl border border-white/10 shadow-sm transition-all hover:bg-white/8">
              <span className="font-bold text-white text-sm">{contact.ambulance.number} {contact.ambulance.label}</span>
              <a
                id="call-ambulance-btn"
                href={`tel:${contact.ambulance.number}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-xs font-bold text-red-300 border border-red-500/30 transition-colors cursor-pointer"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>{contact.callLabel} {contact.ambulance.number}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Local Emergency Room Doctor */}
        <div id="local-doctor-info" className="p-4 bg-red-950/30 border border-red-900/20 rounded-2xl">
          <span className="text-red-400/80 text-xs font-semibold block mb-2 font-mono uppercase tracking-wider leading-relaxed">
            {contact.doctor.label}
          </span>
          <div className="flex items-center justify-between gap-3">
            <span className="font-mono font-bold text-white text-base">{contact.doctor.phone}</span>
            <a
              id="call-doctor-btn"
              href={`tel:${contact.doctor.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 px-3 py-2 bg-red-600 hover:bg-red-700 border border-red-500/20 text-white rounded-xl text-xs font-semibold transition-all shadow-md cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{contact.callLabel} {contact.doctor.label}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
