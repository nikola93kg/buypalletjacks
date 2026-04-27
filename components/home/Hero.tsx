"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, MapPin, ChevronRight, Shield, Truck, Tag, Info } from "lucide-react";
import { locations } from "@/lib/locations";
import { useState, useEffect, useRef } from "react";
import heroImg from "@/public/heroImg.jpg";
import heroImgPng from "@/public/heroImg.png";

export default function Hero() {
  const locationCount = locations.length;
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
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--color-hero-bg)' }}
      aria-labelledby="hero-heading"
    >
      {/* Hero background image — parallax */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 pointer-events-none select-none"
        style={{ willChange: "transform" }}
        aria-hidden="true"
      >
        <Image
          src={heroImgPng}
          alt=""
          fill
          priority
          quality={85}
          className="object-cover object-right"
          sizes="100vw"
        />
      </div>

      {/* Two-layer overlay:
           Layer 1 — horizontal: white-left (text legible) → subtle transparent right (image shows)
           Layer 2 — subtle bottom fade for mobile single-column readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.88) 32%, rgba(255,255,255,0.60) 60%, rgba(255,255,255,0.05) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Mobile bottom-fade so text stays readable in single column */}
      <div
        className="absolute inset-0 pointer-events-none lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.96) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top gradient band */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: 'linear-gradient(to right, var(--color-brand-blue), var(--color-trust-blue), var(--color-brand-orange))'
        }}
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="grid gap-10 xl:gap-16 items-start py-14 md:py-18 lg:py-22">

          {/* ── LEFT COLUMN — Hero copy ── */}
          <div className="hero-left-column">
            {/* MAIN PUNCH HEADLINE */}
            <h1
              id="hero-heading"
              className="font-900 leading-[0.92] mt-2 tracking-tight mb-5 text-center sm:text-left"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(2.6rem, 5.5vw, 4rem)",
                color: 'var(--color-hero-text)'
              }}
            >
              Heavy-duty pallet jacks
              <br />
              <span style={{ color: 'var(--color-hero-accent)' }}>Skip the new price</span>
              <br />
              Get to work!
            </h1>

            {/* Save up to 40% OFF accent */}
            <div className="flex flex-col items-center sm:items-start">
              <p
                className="text-slate-600 text-lg font-semibold leading-tight mb-0"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Save up to
              </p>
              <div className="flex items-start gap-2">
                <span
                  className="font-900 leading-none tracking-tight text-[#F97316]"
                  style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
                >
                  40-60% OFF
                </span>
                {/* Info tooltip trigger */}
                <div className="group relative mt-3">
                  <Info size={18} className="text-slate-500 hover:text-slate-700 cursor-default mt-1" />
                  <div className="pointer-events-none absolute left-6 top-0 w-52 bg-slate-900 border border-white/10 text-slate-100 text-xs rounded-lg px-3 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 leading-snug">
                    Save up to 40% vs. buying new. Based on average retail price of comparable brand-new pallet jacks.
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-offer row */}
            <div className="flex items-center justify-center sm:justify-start gap-4 mb-8 mt-4">
              <div className="flex-shrink-0 leading-none">
                <span
                  style={{
                    color: 'var(--color-hero-text)',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "1.5rem",
                    fontWeight: "800",
                    lineHeight: "none"
                  }}
                >
                  2-Month
                </span>
                <br />
                <span
                  style={{
                    color: 'var(--color-hero-steel)',
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase"
                  }}
                >
                  Warranty Included
                </span>
              </div>
              <div className="w-px self-stretch bg-slate-300" />
              <p
                style={{
                  color: 'var(--color-hero-text)',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: "1.125rem",
                  fontWeight: "bold",
                  lineHeight: "1.15"
                }}
              >
                Easy Pickup
                <br />
                <span style={{ color: 'var(--color-hero-steel)', fontSize: "0.875rem", fontWeight: "normal" }}>
                  {locationCount}+ locations nationwide
                </span>
              </p>
            </div>

            {/* Trust cards */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-[10px] mb-8 items-center sm:items-start">
              {[
                { icon: Shield, title: "2-Month Warranty", accent: 'var(--color-trust-blue)' },
                { icon: Tag, title: "Multi-Unit Discounts", accent: 'var(--color-brand-orange)' },
                { icon: Truck, title: "Delivery Available", accent: 'var(--color-trust-green)' },
              ].map(({ icon: Icon, title, accent }) => (
                <div
                  key={title}
                  className="relative flex items-center gap-3 rounded-2xl px-4 py-3 overflow-hidden backdrop-blur-sm w-full sm:w-[200px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.92) 100%)",
                    border: "1px solid rgba(148,163,184,0.28)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.65), 0 10px 28px rgba(15,23,42,0.10)",
                  }}
                >
                  <span
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${accent}30, ${accent}12)`,
                      border: `1px solid ${accent}45`,
                      boxShadow: `0 8px 18px ${accent}25`,
                    }}
                  >
                    <Icon size={22} strokeWidth={2.4} style={{ color: accent }} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-base md:text-lg font-semibold leading-tight" style={{ color: 'var(--color-hero-text)', fontFamily: "'Outfit', sans-serif" }}>
                      {title}
                    </p>
                  </div>
                </div>
              ))}
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

            {/* Payment + view all */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-4 gap-y-1">
              <p style={{ color: 'var(--color-hero-muted)', fontSize: "0.75rem" }}>
                Cash · Card · Zelle · CashApp · Venmo
              </p>
              <Link
                href="/locations"
                className="flex items-center gap-2 transition-colors text-base font-bold flex-shrink-0 ml-3"
                style={{ color: 'var(--color-hero-link)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-hero-text)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-hero-link)'}
              >
                <MapPin size={16} />
                View all locations
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}