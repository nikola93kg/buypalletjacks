"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "@/public/gallery/1.webp";
import img2 from "@/public/gallery/2.jpg";
import img3 from "@/public/gallery/3.jpg";
import img4 from "@/public/gallery/4.jpg";

const GALLERY = [
  {
    src: img1,
    alt: "Rows of refurbished blue and white pallet jacks lined up in a warehouse",
    col: "md:col-span-2",
  },
  {
    src: img2,
    alt: "Close-up of freshly painted blue pallet jack forks and hydraulic mechanism",
    col: "",
  },
  {
    src: img3,
    alt: "White Crown pallet jack load wheels and rebuilt forks",
    col: "",
  },
  {
    src: img4,
    alt: "Refurbished white extended-fork pallet jack in warehouse setting",
    col: "md:col-span-2",
  },
];

export default function GalleryPreview() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(() =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length)), []);
  const next = useCallback(() =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % GALLERY.length)), []);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, close, prev, next]);

  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeIndex]);

  return (
    <section
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="gallery-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-eyebrow">Gallery</span>
          <h2
            id="gallery-heading"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-5xl font-900 text-[#0F172A] mb-4"
          >
            See the quality{" "}
            <span className="text-[#1D4ED8]">up close.</span>
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-base leading-relaxed">
            Every unit is fully disassembled, repainted, and resealed before it
            ships. Here&apos;s what professionally refurbished looks like.
          </p>
        </div>

        {/* Z-mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 md:auto-rows-[320px] max-w-6xl mx-auto">
          {GALLERY.map(({ src, alt, col }, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Open image: ${alt}`}
              className={`relative rounded-2xl overflow-hidden bg-[#E2E8F0] group shadow-sm h-[190px] md:h-full cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 ${col}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 40vw, 480px"
              />
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 pointer-events-none"
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={GALLERY[activeIndex].alt}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          {/* Image */}
          <div className="relative z-10 flex items-center justify-center max-w-[90vw] max-h-[90vh]">
            <Image
              src={GALLERY[activeIndex].src}
              alt={GALLERY[activeIndex].alt}
              className="rounded-xl object-contain shadow-2xl max-h-[90vh] w-auto"
              style={{ maxWidth: "90vw" }}
              quality={95}
              priority
              sizes="90vw"
            />
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close image"
            className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white transition-colors backdrop-blur-sm"
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white transition-colors backdrop-blur-sm"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-20 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white transition-colors backdrop-blur-sm"
          >
            <ChevronRight size={22} />
          </button>

          {/* Counter */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-white/50 text-sm tabular-nums select-none">
            {activeIndex + 1} / {GALLERY.length}
          </p>
        </div>
      )}
    </section>
  );
}
