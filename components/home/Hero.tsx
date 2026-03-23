"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Phone, MessageSquare, MapPin, ChevronRight, Shield, Truck, Tag, Info } from "lucide-react";
import { locations, getAllStatesWithLocations } from "@/lib/locations";
import { useState, useEffect, useRef, type ComponentProps } from "react";
import heroImg from "@/public/heroImg.jpg";
import heroImgPng from "@/public/heroImg.png";

// Type aliases so dynamic() receives explicit prop types
type UsaMapProps = ComponentProps<typeof import("@/components/locations/UsaMap")["default"]>;
type LocationsPanelProps = ComponentProps<typeof import("@/components/locations/LocationsPanel")["default"]>;

const UsaMap = dynamic<UsaMapProps>(
  () => import("@/components/locations/UsaMap"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full aspect-[5/3] bg-[#E2E8F0] animate-pulse rounded-xl flex items-center justify-center">
        <span className="text-[#64748B] text-sm">Loading map…</span>
      </div>
    ),
  }
);

const LocationsPanel = dynamic<LocationsPanelProps>(
  () => import("@/components/locations/LocationsPanel"),
  { ssr: false }
);

export default function Hero() {
  const statesWithLocations = getAllStatesWithLocations();
  const locationCount = locations.length;
  const [selectedState, setSelectedState] = useState<string | null>(null);
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

  // Auto-scroll the locations panel into view on mobile when a state is selected
  useEffect(() => {
    if (selectedState && window.innerWidth < 1024) {
      document
        .getElementById("hero-locations-panel")
        ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [selectedState]);

  return (
    <section
      className="relative overflow-hidden bg-[#0F172A]"
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
           Layer 1 — horizontal: dark-left (text legible) → fully transparent right (image shows)
           Layer 2 — subtle bottom fade for mobile single-column readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.88) 30%, rgba(15,23,42,0.45) 55%, rgba(15,23,42,0.05) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Mobile bottom-fade so text stays readable in single column */}
      <div
        className="absolute inset-0 pointer-events-none lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,23,42,0.30) 0%, rgba(15,23,42,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top gradient band */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#F97316]"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 xl:gap-16 items-center py-14 md:py-18 lg:py-22">

          {/* ── LEFT COLUMN — Hero copy ── */}
          <div>
            {/* MAIN PUNCH HEADLINE */}
            <h1
              id="hero-heading"
              className="text-white font-900 leading-[0.92] tracking-tight mb-5"
              style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2.6rem, 5.5vw, 4rem)" }}
            >
              Skip the dealer.
              <br />
              <span className="text-[#60A5FA]">Go straight to</span>
              <br />
              your warehouse.
            </h1>

            {/* Save up to 40% OFF accent */}
            <div className="mb-2">
              <p
                className="text-[#CBD5E1] text-lg font-600 leading-tight mb-0"
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
                  <Info size={18} className="text-[#64748B] hover:text-[#94A3B8] cursor-default mt-1" />
                  <div className="pointer-events-none absolute left-6 top-0 w-52 bg-[#1E293B] border border-white/10 text-[#CBD5E1] text-xs rounded-lg px-3 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 leading-snug">
                    Save up to 40% vs. buying new. Based on average retail price of comparable brand-new pallet jacks.
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-offer row */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-shrink-0 leading-none">
                <span
                  className="text-white font-black text-2xl sm:text-3xl leading-none"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  2-Month
                </span>
                <br />
                <span
                  className="text-[#94A3B8] font-semibold text-xs tracking-widest uppercase"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Warranty Included
                </span>
              </div>
              <div className="w-px self-stretch bg-white/20" />
              <p
                className="text-white font-bold text-lg leading-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Easy Pickup
                <br />
                <span className="text-[#94A3B8] text-sm font-normal">
                  {locationCount}+ locations nationwide
                </span>
              </p>
            </div>

            {/* Trust cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-8">
              {[
                { icon: Shield, title: "2-Month Warranty",     accent: "#3B82F6" },
                { icon: Tag,    title: "Multi-Unit Discounts", accent: "#F97316" },
                { icon: Truck,  title: "Delivery Available",   accent: "#10B981" },
              ].map(({ icon: Icon, title, accent }) => (
                <div
                  key={title}
                  className="relative flex items-start gap-2.5 rounded-xl px-3 py-2.5 overflow-hidden backdrop-blur-sm"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                    border: "1px solid rgba(255,255,255,0.11)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.09), 0 4px 20px rgba(0,0,0,0.25)",
                  }}
                >
                  {/* Per-card accent highlight on top edge */}
                  <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: `linear-gradient(to right, transparent, ${accent}70, transparent)` }}
                    aria-hidden="true"
                  />
                  <span
                    className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${accent}28, ${accent}0d)`,
                      border: `1px solid ${accent}35`,
                      boxShadow: `0 0 10px ${accent}22`,
                    }}
                  >
                    <Icon size={14} style={{ color: accent }} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-white text-xs font-semibold leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-4">
              <a href="tel:+12622541835" className="btn-primary text-base px-7 py-3.5">
                <Phone size={17} />
                Call to Order
              </a>
              <a href="sms:+12622541835" className="btn-secondary text-base px-7 py-3.5">
                <MessageSquare size={17} />
                Text Us
              </a>
            </div>

            {/* Payment + view all */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
              <p className="text-[#64748B] text-xs">
                Cash · Card · Zelle · CashApp · Venmo
              </p>
              <Link
                href="/locations"
                className="flex items-center gap-1 text-[#93C5FD] hover:text-white transition-colors text-xs font-medium"
              >
                <MapPin size={12} />
                View all locations
                <ChevronRight size={12} />
              </Link>
            </div>
          </div>

          {/* ── RIGHT COLUMN — Interactive map card ── */}
          <div className="flex flex-col gap-3">
            {/* Card header */}
            <div
              className="flex items-center justify-between px-3 py-2.5 rounded-xl backdrop-blur-sm"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                border: "1px solid rgba(255,255,255,0.11)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.09)",
              }}
            >
              {selectedState ? (
                <div className="flex items-center gap-2">
                  <span
                    className="text-white text-sm font-semibold"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Locations in{" "}
                    <span className="text-[#60A5FA]">{selectedState}</span>
                  </span>
                  <button
                    onClick={() => setSelectedState(null)}
                    className="text-xs text-[#94A3B8] hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 px-2 py-0.5 rounded transition-colors"
                    aria-label="Clear state selection"
                  >
                    Clear
                  </button>
                </div>
              ) : (
                <p
                  className="text-[#CBD5E1] text-sm flex items-center gap-1.5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <MapPin size={15} className="text-[#60A5FA] flex-shrink-0" aria-hidden="true" />
                  Click your state to find pickup locations
                </p>
              )}
              <Link
                href="/locations"
                className="text-[#93C5FD] hover:text-white text-sm font-medium flex items-center gap-1 transition-colors flex-shrink-0 ml-3"
              >
                View all <ChevronRight size={14} />
              </Link>
            </div>

            {/* Map card */}
            <div
              className="rounded-2xl overflow-hidden backdrop-blur-sm"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                border: "1px solid rgba(255,255,255,0.11)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.09), 0 8px 32px rgba(0,0,0,0.35)",
              }}
            >
              <div className="flex flex-col">
                <div className="p-4 md:p-5">
                  <UsaMap
                    statesWithLocations={statesWithLocations}
                    selectedState={selectedState}
                    onStateSelect={setSelectedState}
                    compact
                    theme="dark"
                  />
                </div>
                <div
                  id="hero-locations-panel"
                  className="border-t border-white/10"
                  style={{ background: "rgba(10, 18, 35, 0.92)" }}
                  aria-live="polite"
                  aria-label="Pickup locations for selected state"
                >
                  <LocationsPanel
                    selectedState={selectedState}
                    onClear={() => setSelectedState(null)}
                    theme="dark"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
