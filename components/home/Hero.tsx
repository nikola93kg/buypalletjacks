"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Phone, MessageSquare, MapPin, ChevronRight, Sun, Moon } from "lucide-react";
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
  const [mapTheme, setMapTheme] = useState<'dark' | 'light'>('dark');
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
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay — keeps text readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.82) 0%, rgba(15,23,42,0.70) 50%, rgba(15,23,42,0.90) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top gradient band */}
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#F97316]"
        aria-hidden="true"
      />

      <div className="container-site relative">
        {/* Top headline area */}
        <div className="pt-14 pb-8 md:pt-20 md:pb-10 text-center max-w-3xl mx-auto">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <span className="h-px w-10 bg-[#3B82F6]" aria-hidden="true" />
            <span
              className="text-[#60A5FA] text-xs font-semibold tracking-[0.15em] uppercase"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Nationwide · {locationCount} Locations · Ready to Pick Up
            </span>
            <span className="h-px w-10 bg-[#3B82F6]" aria-hidden="true" />
          </div>

          <h1
            id="hero-heading"
            style={{ fontFamily: "'Outfit', sans-serif", color: "#fff" }}
            className="text-5xl sm:text-6xl md:text-7xl font-900 text-white leading-[1.05] tracking-tight mb-5"
          >
            Refurbished{" "}
            <span className="text-[#60A5FA]">Pallet Jacks</span>{" "}
            <br className="hidden sm:block" />
            Near You
          </h1>

          <p className="text-[#94A3B8] text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            Painted, sealed, and warehouse-ready. Pick up at one of our{" "}
            <strong className="text-white font-medium">{locationCount}+ locations</strong> across
            the USA — or ask about delivery. Every unit comes with a{" "}
            <strong className="text-white font-medium">full 2-month warranty</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <a href="tel:+18005555555" className="btn-primary text-base px-6 py-3.5">
              <Phone size={17} />
              Call to Order
            </a>
            <a href="sms:+18005555555" className="btn-secondary text-base px-6 py-3.5">
              <MessageSquare size={17} />
              Text Us
            </a>
            <Link
              href="/locations"
              className="flex items-center gap-1.5 text-[#93C5FD] hover:text-white transition-colors text-sm font-medium"
            >
              <MapPin size={15} />
              View all locations
              <ChevronRight size={14} />
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#fff]">
            {[
              "2-Month Warranty",
              "Cash · Card · Zelle · CashApp",
              "Multi-Unit Discounts",
              "Delivery Available",
            ].map((badge) => (
              <span key={badge} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] flex-shrink-0" aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Map + panel area */}
        <div className="pb-12 md:pb-16">
          {/* Instruction / selected-state indicator */}
          <div className="relative flex items-center justify-center gap-3 mb-5 min-h-[1.5rem]">
            <button
              onClick={() => setMapTheme(t => t === 'dark' ? 'light' : 'dark')}
              className="absolute left-0 flex items-center gap-2 text-sm font-semibold text-white bg-[#1E3A8A] hover:bg-[#1D4ED8] border border-[#3B82F6]/50 hover:border-[#3B82F6] px-4 py-1.5 rounded-lg shadow-md transition-all"
              aria-label={mapTheme === 'dark' ? 'Switch to light map' : 'Switch to dark map'}
            >
              {mapTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              {mapTheme === 'dark' ? '' : ''}
            </button>
            {selectedState ? (
              <>
                <span className="text-[#60A5FA] text-sm font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Showing locations in <strong className="text-white">{selectedState}</strong>
                </span>
                <button
                  onClick={() => setSelectedState(null)}
                  className="text-xs text-[#64748B] hover:text-[#12748B] bg-white border border-[#334155] hover:border-[#475569] px-2.5 py-1 rounded-md transition-colors"
                  aria-label="Clear state selection"
                >
                  Clear
                </button>
              </>
            ) : (
              <p
                className="text-center text-[#fff] text-sm"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <MapPin size={14} className="inline mr-1 text-[#fff]" aria-hidden="true" />
                Click your state on the map to find pickup locations near you
              </p>
            )}
          </div>

          <div className={`${mapTheme === 'dark' ? 'bg-[#0A1628] border-[#1E3A8A]/40' : 'bg-white border-[#E2E8F0]'} border rounded-2xl overflow-hidden shadow-2xl`}>
            <div className="flex flex-col lg:flex-row">
              {/* Map panel */}
              <div className="lg:flex-1 p-4 md:p-6">
                <UsaMap
                  statesWithLocations={statesWithLocations}
                  selectedState={selectedState}
                  onStateSelect={setSelectedState}
                  compact
                  theme={mapTheme}
                />
              </div>

              {/* Locations panel */}
              <div
                id="hero-locations-panel"
                className={`lg:w-80 xl:w-86 border-t lg:border-t-0 lg:border-l ${mapTheme === 'dark' ? 'border-[#1E3A8A]/30' : 'border-[#E2E8F0]'}`}
                aria-live="polite"
                aria-label="Pickup locations for selected state"
              >
                <LocationsPanel
                  selectedState={selectedState}
                  onClear={() => setSelectedState(null)}
                  // compact
                  theme={mapTheme}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
