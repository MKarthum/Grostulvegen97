import React from "react";
import { Droplet } from "lucide-react";
import { WaterInstructions, VideoGuide } from "../content/types";
import VideoCard from "./VideoCard";

interface WaterInstructionsCardProps {
  water: WaterInstructions;
  utilitiesEyebrow: string;
  videos: VideoGuide[];
  watchVideoLabel: string;
  openInYoutubeLabel: string;
  videoComingSoonLabel: string;
}

export default function WaterInstructionsCard({
  water,
  utilitiesEyebrow,
  videos,
  watchVideoLabel,
  openInYoutubeLabel,
  videoComingSoonLabel,
}: WaterInstructionsCardProps) {
  return (
    <div id="water-instructions-card" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-text-light shadow-xl relative overflow-hidden flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-6 border-b border-cabin-accent/15 pb-3">
          <div>
            <span className="text-text-dim font-mono text-xs uppercase tracking-widest block mb-1">{utilitiesEyebrow}</span>
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
    </div>
  );
}
