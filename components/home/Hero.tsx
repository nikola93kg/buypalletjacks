"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MessageSquare,
  MapPin,
  ChevronRight,
  Shield,
  Truck,
  Tag,
  Info,
  Pause,
  Play,
} from "lucide-react";
import { useState, useEffect } from "react";
import { LOCATION_COUNT } from "@/lib/locations";
import styles from "./Hero.module.css";

const SLIDE_DURATION_MS = 4200;

interface HeroSlide {
  src: string;
  alt: string;
  desktopPos: string;
  mobilePos: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/hero-images/hero1.webp",
    alt: "Lineup of refurbished Crown and Altra heavy-duty pallet jacks ready for pickup",
    desktopPos: "62% 72%",
    mobilePos: "55% 82%",
  },
  {
    src: "/hero-images/hero2.webp",
    alt: "Refurbished Altra and Crown pallet jacks staged with delivery truck",
    desktopPos: "60% 65%",
    mobilePos: "52% 75%",
  },
  {
    src: "/hero-images/hero3.webp",
    alt: "Row of refurbished blue Altra and white Crown pallet jacks",
    desktopPos: "65% 62%",
    mobilePos: "60% 72%",
  },
  {
    src: "/hero-images/hero4.webp",
    alt: "Indoor warehouse inventory of blue Altra and white Crown pallet jacks",
    desktopPos: "65% 68%",
    mobilePos: "60% 76%",
  },
  {
    src: "/hero-images/hero5.webp",
    alt: "Refurbished Altra and Crown pallet jacks staged outside storage bay",
    desktopPos: "64% 68%",
    mobilePos: "58% 76%",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION_MS);
    return () => window.clearInterval(timer);
  }, [isPaused, activeIndex]);

  return (
    <section
      className={`relative overflow-hidden ${styles.heroSection}`}
      aria-labelledby="hero-heading"
    >
      {/* ── Background: YETI-style transitioning real photography ── */}
      <div
        className={`hero-bg-wrapper absolute inset-0 pointer-events-none select-none ${styles.bgWrapper}`}
        aria-hidden="true"
      >
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={slide.src}
              className={`${styles.slideLayer} ${
                isActive ? styles.slideActive : styles.slideInactive
              }`}
              style={
                {
                  "--desktop-pos": slide.desktopPos,
                  "--mobile-pos": slide.mobilePos,
                } as React.CSSProperties
              }
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                quality={90}
                className={`object-cover ${styles.slideImage}`}
                sizes="100vw"
              />
            </div>
          );
        })}
      </div>

      {/* Mobile overlay */}
      <div
        className={`absolute inset-0 pointer-events-none sm:hidden ${styles.mobileOverlay}`}
        aria-hidden="true"
      />
      {/* Desktop overlay — calibrated horizontal fade for crisp text legibility */}
      <div
        className={`absolute inset-0 pointer-events-none hidden sm:block ${styles.desktopOverlay}`}
        aria-hidden="true"
      />
      {/* Subtle bottom vignette for YETI-style controls */}
      <div
        className={`absolute inset-x-0 bottom-0 h-28 pointer-events-none hidden sm:block ${styles.bottomVignette}`}
        aria-hidden="true"
      />

      {/* Top gradient band */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 z-10 ${styles.topAccent}`}
        aria-hidden="true"
      />

      {/* ── CONTENT ── */}
      <div className="container-site relative z-10">
        <div className="grid gap-6 sm:gap-10 xl:gap-16 items-start pt-6 pb-4 sm:py-14 md:py-18 lg:py-22">
          <div className="hero-left-column max-w-2xl">
            {/* Headline */}
            <h1
              id="hero-heading"
              className={`font-900 leading-[0.93] mt-2 tracking-tight mb-4 text-center sm:text-left ${styles.heroHeading}`}
            >
              Heavy-duty pallet jacks
              <br />
              <span className={styles.heroHeadingAccent}>Skip the new price</span>
              <br />
              Get to work!
            </h1>

            <p className={styles.heroLead} style={{ color: "var(--color-brand-blue)" }}>
              Shop refurbished and used pallet jacks for sale with{" "}
              {LOCATION_COUNT} pickup locations, same-day availability, and a
              2-month warranty.
            </p>

            {/* Save up to */}
            <div className="flex flex-col items-center sm:items-start mb-1">
              <p
                className={`text-slate-600 text-base font-semibold leading-tight mb-0 ${styles.saveUpToText}`}
              >
                Save up to
              </p>
              <div className="flex items-start gap-2">
                <span
                  className={`font-900 leading-none tracking-tight ${styles.discountText}`}
                >
                  40-60% OFF
                </span>
                <div className="group relative mt-2">
                  <Info
                    size={17}
                    className="text-slate-500 hover:text-slate-700 cursor-default mt-1"
                  />
                  <div className="pointer-events-none absolute left-6 top-0 w-52 bg-slate-900 border border-white/10 text-slate-100 text-xs rounded-lg px-3 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 leading-snug">
                    Save up to 40% vs. buying new. Based on average retail price of
                    comparable brand-new pallet jacks.
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges — full cards on desktop */}
            <div className="mb-5">
              {/* Desktop / Tablet: full cards */}
              <div className="hidden sm:flex flex-row flex-wrap gap-[10px] items-start max-w-[430px] lg:max-w-none">
                {[
                  {
                    icon: Shield,
                    title: "2-Month Warranty",
                    accent: "var(--color-trust-blue)",
                  },
                  {
                    icon: Tag,
                    title: "Multi-Unit Discounts",
                    accent: "var(--color-brand-orange)",
                  },
                  {
                    icon: Truck,
                    title: "Delivery Available",
                    accent: "var(--color-trust-green)",
                  },
                ].map(({ icon: Icon, title, accent }) => (
                  <div
                    key={title}
                    className={`relative flex items-center gap-3 rounded-2xl px-4 py-3 overflow-hidden backdrop-blur-sm w-[200px] ${styles.trustCard}`}
                    style={{ "--badge-accent": accent } as React.CSSProperties}
                  >
                    <span
                      className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${styles.trustIcon}`}
                    >
                      <Icon size={22} strokeWidth={2.4} aria-hidden="true" />
                    </span>
                    <p
                      className={`text-base md:text-lg font-semibold leading-tight ${styles.trustTitle}`}
                    >
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-4">
              <a
                href="tel:+12622541835"
                className="btn-primary text-base px-7 py-3.5"
              >
                <Phone size={17} />
                Call to Order
              </a>
              <a
                href="sms:+12622541835"
                className="btn-secondary btn-secondary-hero text-base px-7 py-3.5"
              >
                <MessageSquare size={17} />
                Text Us
              </a>
            </div>

            {/* Payment + locations */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-x-4 sm:gap-y-1">
              {/* Desktop: original muted text */}
              <p className={`hidden sm:block ${styles.paymentText}`}>
                Cash · Card · Zelle · CashApp · Venmo
              </p>
              {/* Mobile: pill for locations */}
              <Link
                href="/locations"
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-md font-semibold sm:hidden ${styles.mobileLocationPill}`}
              >
                <MapPin size={13} />
                View all locations
                <ChevronRight size={13} />
              </Link>
              {/* Desktop: original link */}
              <Link
                href="/locations"
                className={`hidden sm:flex items-center gap-2 transition-colors text-base font-bold flex-shrink-0 ml-3 ${styles.desktopLocationLink}`}
              >
                <MapPin size={16} />
                View all locations
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Mobile spacer — pushes section tall enough to see the transitioning photos below content */}
            <div className={`sm:hidden ${styles.mobileSpacer}`} />
          </div>
        </div>
      </div>

      {/* ── YETI-STYLE SLIDESHOW CONTROL (Bottom-Right) ── */}
      <div className={styles.controlsDock}>
        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          aria-label={
            isPaused ? "Play background slideshow" : "Pause background slideshow"
          }
          className={styles.pausePlayBtn}
        >
          <svg
            className={styles.progressRing}
            viewBox="0 0 44 44"
            aria-hidden="true"
          >
            <circle
              className={styles.progressTrack}
              cx="22"
              cy="22"
              r="19"
              fill="none"
              strokeWidth="2"
            />
            <circle
              key={`${activeIndex}-${isPaused ? "paused" : "playing"}`}
              className={`${styles.progressIndicator} ${
                isPaused ? styles.progressPaused : styles.progressAnimating
              }`}
              cx="22"
              cy="22"
              r="19"
              fill="none"
              strokeWidth="2.2"
              style={
                {
                  "--slide-duration": `${SLIDE_DURATION_MS}ms`,
                } as React.CSSProperties
              }
            />
          </svg>
          {isPaused ? (
            <Play size={15} className="translate-x-[1px] fill-current" />
          ) : (
            <Pause size={15} className="fill-current" />
          )}
        </button>
      </div>
    </section>
  );
}
