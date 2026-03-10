"use client";

import { useState, useEffect } from "react";
import { MapPin, Search } from "lucide-react";
import dynamic from "next/dynamic";
import { getAllStatesWithLocations, STATE_NAMES } from "@/lib/locations";
import StateSelectFallback from "./StateSelectFallback";
import type { ComponentProps } from "react";

type UsaMapProps = ComponentProps<typeof import("./UsaMap")["default"]>;
type LocationsPanelProps = ComponentProps<typeof import("./LocationsPanel")["default"]>;

const UsaMap = dynamic<UsaMapProps>(() => import("./UsaMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full aspect-[5/3] rounded-2xl bg-[#E2E8F0] animate-pulse flex items-center justify-center">
      <span className="text-[#64748B] text-sm">Loading map…</span>
    </div>
  ),
});

const LocationsPanel = dynamic<LocationsPanelProps>(
  () => import("./LocationsPanel"),
  { ssr: false }
);

export default function InteractiveLocationsHero() {
  const statesWithLocations = getAllStatesWithLocations();
  const [selectedState, setSelectedState] = useState<string | null>(null);

  // Auto-scroll panel into view on mobile when state is selected
  useEffect(() => {
    if (selectedState && window.innerWidth < 1024) {
      const panel = document.getElementById("locations-panel");
      panel?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [selectedState]);

  return (
    <section
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="locations-hero-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-eyebrow">Locations</span>
          <h1
            id="locations-hero-heading"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl md:text-5xl font-800 text-[#0F172A] mb-4"
          >
            Find a Pickup Location{" "}
            <span className="text-[#1D4ED8]">Near You</span>
          </h1>
          <p className="text-[#64748B] text-base max-w-xl mx-auto">
            {statesWithLocations.length} states, 26+ locations nationwide. Click your state
            on the map to see all available pickup points.
          </p>

          {/* Accessible fallback for screen readers / keyboard-only users */}
          <div className="mt-6 max-w-sm mx-auto">
            <StateSelectFallback
              statesWithLocations={statesWithLocations}
              selectedState={selectedState}
              onStateSelect={setSelectedState}
            />
          </div>
        </div>

        {/* Map + panel grid */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Map */}
          <div className="lg:flex-1">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm p-4 md:p-6">
              {/* Legend */}
              <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-3 rounded-sm bg-[#BFDBFE] inline-block border border-[#93C5FD]" aria-hidden="true" />
                  Has Locations
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-3 rounded-sm bg-[#1D4ED8] inline-block" aria-hidden="true" />
                  Selected
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-3 rounded-sm bg-[#CBD5E1] inline-block" aria-hidden="true" />
                  No Locations
                </span>
              </div>
              <UsaMap
                statesWithLocations={statesWithLocations}
                selectedState={selectedState}
                onStateSelect={setSelectedState}
              />
              {selectedState && (
                <p className="text-center text-sm text-[#64748B] mt-3">
                  Showing locations in{" "}
                  <strong className="text-[#1D4ED8]">
                    {STATE_NAMES[selectedState] || selectedState}
                  </strong>{" "}
                  —{" "}
                  <button
                    onClick={() => setSelectedState(null)}
                    className="text-[#1D4ED8] hover:underline font-medium"
                  >
                    Clear selection
                  </button>
                </p>
              )}
            </div>
          </div>

          {/* Locations panel */}
          <div
            id="locations-panel"
            className="lg:w-80 xl:w-96"
            aria-live="polite"
            aria-label="Location results"
          >
            <div className="bg-[#0F172A] rounded-2xl border border-[#1E3A8A]/30 overflow-hidden h-full">
              <LocationsPanel
                selectedState={selectedState}
                onClear={() => setSelectedState(null)}
                compact={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
