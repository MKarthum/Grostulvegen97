import React from "react";
import { PlayCircle } from "lucide-react";
import { VideoGuide } from "../content/types";
import VideoCard from "./VideoCard";

interface VideoGuidesProps {
  videos: VideoGuide[];
  title: string;
  intro: string;
  watchVideoLabel: string;
  openInYoutubeLabel: string;
  videoComingSoonLabel: string;
}

export default function VideoGuides({
  videos,
  title,
  intro,
  watchVideoLabel,
  openInYoutubeLabel,
  videoComingSoonLabel,
}: VideoGuidesProps) {
  return (
    <div id="video-guides-section" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl text-text-light">
      <div className="flex items-center gap-3 mb-2 border-b border-cabin-accent/20 pb-3">
        <PlayCircle className="w-6 h-6 text-cabin-accent" />
        <h3 className="text-2xl font-bold tracking-tight text-cabin-accent font-display">{title}</h3>
      </div>
      <p className="text-sm text-text-dim mb-6 mt-3">{intro}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
    </div>
  );
}
