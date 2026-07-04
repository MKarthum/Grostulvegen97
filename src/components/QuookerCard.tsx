import React from "react";
import { Droplets } from "lucide-react";
import { QuookerInfo, VideoGuide } from "../content/types";
import VideoCard from "./VideoCard";

interface QuookerCardProps {
  quooker: QuookerInfo;
  kitchenEyebrow: string;
  videos: VideoGuide[];
  watchVideoLabel: string;
  openInYoutubeLabel: string;
  videoComingSoonLabel: string;
}

export default function QuookerCard({
  quooker,
  kitchenEyebrow,
  videos,
  watchVideoLabel,
  openInYoutubeLabel,
  videoComingSoonLabel,
}: QuookerCardProps) {
  return (
    <div id="quooker-card" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-text-light shadow-xl relative overflow-hidden">
      <div className="flex items-start justify-between mb-6 border-b border-cabin-accent/15 pb-3">
        <div>
          <span className="text-text-dim font-mono text-xs uppercase tracking-widest block mb-1">{kitchenEyebrow}</span>
          <h3 id="quooker-title" className="text-2xl font-bold tracking-tight text-cabin-accent font-display">
            {quooker.title}
          </h3>
        </div>
        <div className="bg-white/5 text-cabin-accent p-3 rounded-2xl border border-white/10">
          <Droplets className="w-6 h-6" />
        </div>
      </div>

      <div className="space-y-3 mb-2">
        {quooker.paragraphs.map((paragraph, idx) => (
          <p key={idx} className="text-sm text-text-dim leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      {videos.length > 0 && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              watchVideoLabel={watchVideoLabel}
              openInYoutubeLabel={openInYoutubeLabel}
              videoComingSoonLabel={videoComingSoonLabel}
            />
          ))}
        </div>
      )}
    </div>
  );
}
