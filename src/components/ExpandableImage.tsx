import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Maximize2, X } from "lucide-react";

interface ExpandableImageProps {
  src: string;
  alt: string;
  enlargeLabel: string;
  closeLabel: string;
  className?: string;
  // Overrides the thumbnail <img> sizing (e.g. a fixed height + object-cover
  // for a compact card preview). The enlarged lightbox always shows the
  // full, uncropped image regardless of this prop.
  imgClassName?: string;
}

export default function ExpandableImage({ src, alt, enlargeLabel, closeLabel, className, imgClassName }: ExpandableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={enlargeLabel}
        className={`relative block w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 cursor-zoom-in group ${className ?? ""}`}
      >
        <img src={src} alt={alt} className={imgClassName ?? "w-full h-auto object-contain"} />
        <span className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-black/60 group-hover:bg-black/80 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg transition-colors">
          <Maximize2 className="w-3.5 h-3.5" />
        </span>
      </button>

      {isOpen &&
        createPortal(
          // Rendered into document.body: several cards use backdrop-blur,
          // which (like transform/filter) creates a new containing block
          // for position:fixed descendants. Without the portal, "fixed
          // inset-0" would be confined to that card's box instead of the
          // real viewport.
          <div
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in-up"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label={closeLabel}
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-xl p-2.5 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain rounded-xl cursor-zoom-out"
            />
          </div>,
          document.body
        )}
    </>
  );
}
