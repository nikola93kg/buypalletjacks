"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, MapPin, ChevronRight, Shield, Truck, Tag, Info } from "lucide-react";
import { useEffect, useRef } from "react";
import heroImgPng from "@/public/hero2.jpg";
import styles from "./Hero.module.css";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Parallax — mutates DOM directly so there's no React re-render on every scroll frame
  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.35}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={`relative overflow-hidden ${styles.heroSection}`}
      aria-labelledby="hero-heading"
    >
      {/* Background image — parallax on desktop, static on mobile */}
      <div
        ref={parallaxRef}
        className={`hero-bg-wrapper absolute inset-0 pointer-events-none select-none ${styles.bgWrapper}`}
        aria-hidden="true"
      >
        <Image
          src={heroImgPng}
          alt=""
          fill
          priority
          quality={90}
          className="hero-bg-img"
          sizes="100vw"
        />
      </div>

      {/* Mobile overlay — strong white at top fading to transparent ~55% so PJs show fully below */}
      <div
        className={`absolute inset-0 pointer-events-none sm:hidden ${styles.mobileOverlay}`}
        aria-hidden="true"
      />
      {/* Desktop overlay — horizontal fade left to right */}
      <div
        className={`absolute inset-0 pointer-events-none hidden sm:block ${styles.desktopOverlay}`}
        aria-hidden="true"
      />

      {/* Top gradient band */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 z-10 ${styles.topAccent}`}
        aria-hidden="true"
      />

      {/* ── CONTENT ── */}
      <div className="container-site relative">
        <div className="grid gap-10 xl:gap-16 items-start py-10 sm:py-14 md:py-18 lg:py-22">
          <div className="hero-left-column">

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

            {/* Save up to */}
            <div className="flex flex-col items-center sm:items-start mb-1">
              <p className={`text-slate-600 text-base font-semibold leading-tight mb-0 ${styles.saveUpToText}`}>
                Save up to
              </p>
              <div className="flex items-start gap-2">
                <span
                  className={`font-900 leading-none tracking-tight ${styles.discountText}`}
                >
                  40-60% OFF
                </span>
                <div className="group relative mt-2">
                  <Info size={17} className="text-slate-500 hover:text-slate-700 cursor-default mt-1" />
                  <div className="pointer-events-none absolute left-6 top-0 w-52 bg-slate-900 border border-white/10 text-slate-100 text-xs rounded-lg px-3 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 leading-snug">
                    Save up to 40% vs. buying new. Based on average retail price of comparable brand-new pallet jacks.
                  </div>
                </div>
              </div>
            </div>



            {/* Trust badges — full cards on desktop */}
            <div className="mb-5">
              {/* Desktop: full cards */}
              <div className="hidden sm:flex flex-row flex-wrap gap-[10px] items-start">
                {[
                  { icon: Shield, title: "2-Month Warranty", accent: 'var(--color-trust-blue)' },
                  { icon: Tag, title: "Multi-Unit Discounts", accent: 'var(--color-brand-orange)' },
                  { icon: Truck, title: "Delivery Available", accent: 'var(--color-trust-green)' },
                ].map(({ icon: Icon, title, accent }) => (
                  <div
                    key={title}
                    className={`relative flex items-center gap-3 rounded-2xl px-4 py-3 overflow-hidden backdrop-blur-sm w-[200px] ${styles.trustCard}`}
                    style={{ '--badge-accent': accent } as React.CSSProperties}
                  >
                    <span
                      className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${styles.trustIcon}`}
                    >
                      <Icon size={22} strokeWidth={2.4} aria-hidden="true" />
                    </span>
                    <p className={`text-base md:text-lg font-semibold leading-tight ${styles.trustTitle}`}>
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-4">
              <a href="tel:+12622541835" className="btn-primary text-base px-7 py-3.5">
                <Phone size={17} />
                Call to Order
              </a>
              <a href="sms:+12622541835" className="btn-secondary btn-secondary-hero text-base px-7 py-3.5">
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

            {/* Mobile spacer — pushes section tall enough to see PJs below content */}
            <div className={`sm:hidden ${styles.mobileSpacer}`} />

          </div>
        </div>
      </div>
    </section>
  );
}
