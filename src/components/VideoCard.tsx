import React from "react";
import { ExternalLink } from "lucide-react";
import { VideoGuide } from "../content/types";
import { getYouTubeEmbedUrl } from "../lib/youtube";

interface VideoCardProps {
  video: VideoGuide;
  watchVideoLabel: string;
  openInYoutubeLabel: string;
  videoComingSoonLabel: string;
}

export default function VideoCard({ video, watchVideoLabel, openInYoutubeLabel, videoComingSoonLabel }: VideoCardProps) {
  const embedUrl = video.url ? getYouTubeEmbedUrl(video.url) : null;

  return (
    <div
      id={`video-card-${video.id}`}
      className="flex flex-col justify-between p-5 rounded-2xl border border-white/10 bg-white/5 shadow-sm gap-4"
    >
      <div>
        <h4 className="text-base font-bold text-white mb-1">{video.title}</h4>
        <p className="text-sm text-text-dim leading-relaxed">{video.description}</p>
      </div>

      {embedUrl && (
        <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
          <iframe
            src={embedUrl}
            title={video.title}
            loading="lazy"
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      )}

      {video.url ? (
        embedUrl ? (
          <a
            id={`video-link-${video.id}`}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-xs font-semibold text-cabin-accent hover:text-white transition-colors cursor-pointer"
          >
            <span>{openInYoutubeLabel}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
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
        )
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
  );
}
