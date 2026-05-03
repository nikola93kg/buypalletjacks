"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "@/public/gallery/1.webp";
import img2 from "@/public/gallery/2.jpg";
import img3 from "@/public/gallery/3.jpg";
import img4 from "@/public/gallery/4.jpg";
import styles from "./GalleryPreview.module.css";

const GALLERY = [
  {
    src: img1,
    alt: "Rows of refurbished blue and white pallet jacks lined up in a warehouse",
    span2: true,
  },
  {
    src: img2,
    alt: "Close-up of freshly painted blue pallet jack forks and hydraulic mechanism",
    span2: false,
  },
  {
    src: img3,
    alt: "White Crown pallet jack load wheels and rebuilt forks",
    span2: false,
  },
  {
    src: img4,
    alt: "Refurbished white extended-fork pallet jack in warehouse setting",
    span2: true,
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
      className={`section-padding ${styles.section}`}
      aria-labelledby="gallery-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className={styles.headerContainer}>
          <span className="section-eyebrow">Gallery</span>
          <h2
            id="gallery-heading"
            className={styles.heading}
          >
            See the quality{" "}
            <span className={styles.headingAccent}>up close.</span>
          </h2>
          <p className={styles.description}>
            Every unit is fully disassembled, repainted, and resealed before it
            ships. Here&apos;s what professionally refurbished looks like.
          </p>
        </div>

        {/* Z-mosaic grid */}
        <div className={styles.galleryGrid}>
          {GALLERY.map(({ src, alt, span2 }, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Open image: ${alt}`}
              className={`${styles.galleryItem} ${span2 ? styles.galleryItemSpan2 : ''}`}
            >
              <Image
                src={src}
                alt={alt}
                fill
                className={styles.galleryImage}
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 40vw, 480px"
              />
              <div
                className={styles.galleryOverlay}
                aria-hidden="true"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={GALLERY[activeIndex].alt}
        >
          {/* Backdrop */}
          <div
            className={styles.lightboxBackdrop}
            onClick={close}
            aria-hidden="true"
          />

          {/* Image */}
          <div className={styles.lightboxImageContainer}>
            <Image
              src={GALLERY[activeIndex].src}
              alt={GALLERY[activeIndex].alt}
              className={styles.lightboxImage}
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
            className={`${styles.lightboxButton} ${styles.closeButton}`}
          >
            <X size={20} />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className={`${styles.lightboxButton} ${styles.prevButton}`}
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className={`${styles.lightboxButton} ${styles.nextButton}`}
          >
            <ChevronRight size={22} />
          </button>

          {/* Counter */}
          <p className={styles.counter}>
            {activeIndex + 1} / {GALLERY.length}
          </p>
        </div>
      )}
    </section>
  );
}
