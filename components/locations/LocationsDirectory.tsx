"use client";

import { useState, useMemo } from "react";
import { MapPin, Search, Navigation, ExternalLink, X } from "lucide-react";
import {
  getLocationsGroupedByState,
  searchLocations,
  STATE_NAMES,
  type Location,
} from "@/lib/locations";

export default function LocationsDirectory() {
  const [query, setQuery] = useState("");
  const [activeState, setActiveState] = useState<string | null>(null);

  const grouped = getLocationsGroupedByState();
  const states = Object.keys(grouped).sort();

  const displayedGrouped = useMemo(() => {
    if (query.trim()) {
      const results = searchLocations(query);
      return results.reduce((acc, loc) => {
        const state = loc.state.toUpperCase();
        if (!acc[state]) acc[state] = [];
        acc[state].push(loc);
        return acc;
      }, {} as Record<string, Location[]>);
    }
    if (activeState) {
      return { [activeState]: grouped[activeState] };
    }
    return grouped;
  }, [query, activeState, grouped]);

  const displayedStates = Object.keys(displayedGrouped).sort();
  const totalResults = displayedStates.reduce(
    (sum, s) => sum + displayedGrouped[s].length,
    0
  );

  return (
    <section className="section-padding bg-white" aria-labelledby="directory-heading">
      <div className="container-site">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="section-eyebrow">Directory</p>
          <h2
            id="directory-heading"
            className="text-3xl md:text-4xl font-extrabold text-graphite mb-4"
          >
            All Pickup Locations
          </h2>
          <p className="text-steel text-lg max-w-2xl mx-auto">
            26 locations across 19 states. Search by city, state, or facility — or
            filter by state to jump straight to your area.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-steel pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveState(null);
            }}
            placeholder="Search city, state, or facility…"
            className="w-full border-2 border-border rounded-xl pl-12 pr-10 py-3.5 text-graphite placeholder:text-steel bg-white focus:outline-none focus:border-brand-blue transition-colors text-base shadow-sm"
            aria-label="Search pickup locations"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-steel hover:text-graphite transition-colors p-1 cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* State quick-jump pills */}
        {!query && (
          <div
            className="flex flex-wrap gap-2 justify-center mb-12"
            role="group"
            aria-label="Filter by state"
          >
            <button
              onClick={() => setActiveState(null)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                !activeState
                  ? "bg-brand-blue text-white shadow-sm"
                  : "bg-white border border-border text-steel hover:border-brand-blue hover:text-brand-blue"
              }`}
            >
              All States
            </button>
            {states.map((code) => (
              <button
                key={code}
                onClick={() =>
                  setActiveState(activeState === code ? null : code)
                }
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                  activeState === code
                    ? "bg-brand-blue text-white shadow-sm"
                    : "bg-white border border-border text-steel hover:border-brand-blue hover:text-brand-blue"
                }`}
              >
                {STATE_NAMES[code] || code}
              </button>
            ))}
          </div>
        )}

        {/* Search result count */}
        {query && (
          <p className="text-sm text-steel text-center mb-8">
            {totalResults === 0 ? (
              "No locations found"
            ) : (
              <>
                <span className="font-semibold text-graphite">{totalResults}</span>{" "}
                location{totalResults !== 1 ? "s" : ""} found for &ldquo;{query}&rdquo;
              </>
            )}
          </p>
        )}

        {/* Empty state */}
        {totalResults === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-brand-blue" />
            </div>
            <p className="text-graphite font-semibold text-lg mb-2">
              No locations found
            </p>
            <p className="text-steel text-sm">
              Try a different search or{" "}
              <a
                href="tel:+12622541835"
                className="text-brand-blue hover:underline"
              >
                call us
              </a>{" "}
              — we may have upcoming stock near you.
            </p>
          </div>
        )}

        {/* State groups */}
        {totalResults > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedStates.flatMap((stateCode) =>
              displayedGrouped[stateCode].map((loc, idx) => (
                <LocationCard key={`${stateCode}-${idx}`} loc={loc} />
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function LocationCard({ loc }: { loc: Location }) {
  const stateName = STATE_NAMES[loc.state.toUpperCase() as keyof typeof STATE_NAMES] ?? loc.state;
  return (
    <div className="bg-white border border-border rounded-xl p-5 flex flex-col gap-4 hover:border-brand-blue hover:shadow-md transition-all duration-200 group cursor-default">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-brand-blue transition-colors duration-200">
          <MapPin className="w-4 h-4 text-brand-blue group-hover:text-white transition-colors duration-200" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-graphite text-base leading-tight">
            {loc.cityState}
          </p>
          <p className="text-xs font-semibold text-brand-blue mt-0.5">{stateName}</p>
          {loc.facility && (
            <p className="text-xs text-steel mt-1 leading-snug">
              {loc.facility}
              {loc.unitNumber &&
                loc.unitNumber !== "-" &&
                loc.unitNumber !== "" &&
                ` · ${loc.unitNumber}`}
            </p>
          )}
        </div>
      </div>

      {loc.gmaps && (
        <a
          href={loc.gmaps}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-navy transition-colors mt-auto cursor-pointer group/link"
          aria-label={`Get directions to ${loc.cityState}`}
        >
          <Navigation className="w-3.5 h-3.5" />
          Get Directions
          <ExternalLink className="w-3 h-3 opacity-50 group-hover/link:opacity-100 transition-opacity" />
        </a>
      )}
    </div>
  );
}
