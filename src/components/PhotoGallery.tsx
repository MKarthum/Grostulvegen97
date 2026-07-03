import React from "react";
import { GalleryPhoto } from "../content/types";

import exteriorSummer from "../assets/images/gallery-exterior-summer.jpg";
import livingRoomView from "../assets/images/gallery-living-room-view.jpg";
import kitchen from "../assets/images/gallery-kitchen.jpg";
import diningView from "../assets/images/gallery-dining-view.jpg";
import bedroom from "../assets/images/gallery-bedroom.jpg";
import woodStove from "../assets/images/gallery-wood-stove.jpg";
import terrace from "../assets/images/gallery-terrace.jpg";
import hikeView from "../assets/images/gallery-hike-view.jpg";

// Map each photo id (see src/content/no.ts / en.ts `galleryPhotos`) to its
// imported image. Add a new image file + entry here and in both content
// files to add another photo to the gallery.
const imagesById: Record<string, string> = {
  "exterior-summer": exteriorSummer,
  "living-room-view": livingRoomView,
  kitchen: kitchen,
  "dining-view": diningView,
  bedroom: bedroom,
  "wood-stove": woodStove,
  terrace: terrace,
  "hike-view": hikeView,
};

interface PhotoGalleryProps {
  photos: GalleryPhoto[];
  title: string;
}

export default function PhotoGallery({ photos, title }: PhotoGalleryProps) {
  return (
    <div id="photo-gallery-section" className="mt-8">
      <h3 className="text-lg font-bold tracking-tight text-cabin-accent font-display mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {photos.map((photo) => (
          <div
            key={photo.id}
            id={`gallery-photo-${photo.id}`}
            className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-sm"
          >
            <img
              src={imagesById[photo.id]}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
