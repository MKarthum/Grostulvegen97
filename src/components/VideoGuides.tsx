import React from "react";
import { PlayCircle, ExternalLink } from "lucide-react";
import { VideoGuide } from "../content/types";

interface VideoGuidesProps {
  videos: VideoGuide[];
  title: string;
  intro: string;
  watchVideoLabel: string;
  videoComingSoonLabel: string;
}

export default function VideoGuides({ videos, title, intro, watchVideoLabel, videoComingSoonLabel }: VideoGuidesProps) {
  return (
    <div id="video-guides-section" className="bg-white/3 border border-white/8 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-xl text-text-light">
      <div className="flex items-center gap-3 mb-2 border-b border-cabin-accent/20 pb-3">
        <PlayCircle className="w-6 h-6 text-cabin-accent" />
        <h3 className="text-2xl font-bold tracking-tight text-cabin-accent font-display">{title}</h3>
      </div>
      <p className="text-sm text-text-dim mb-6 mt-3">{intro}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {videos.map((video) => (
          <div
            key={video.id}
            id={`video-card-${video.id}`}
            className="flex flex-col justify-between p-5 rounded-2xl border border-white/10 bg-white/5 shadow-sm gap-4"
          >
            <div>
              <h4 className="text-base font-bold text-white mb-1">{video.title}</h4>
              <p className="text-sm text-text-dim leading-relaxed">{video.description}</p>
            </div>

            {video.url ? (
              <a
                id={`video-link-${video.id}`}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-cabin-green hover:bg-cabin-green/85 border border-cabin-accent/15 text-white font-medium text-xs rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <span>{watchVideoLabel}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span
                id={`video-link-${video.id}`}
                aria-disabled="true"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 text-text-dim font-medium text-xs rounded-xl cursor-not-allowed select-none"
              >
                <span>{videoComingSoonLabel}</span>
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
