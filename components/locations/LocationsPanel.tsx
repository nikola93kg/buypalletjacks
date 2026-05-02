"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin, Search, ExternalLink, X } from "lucide-react";
import { locations, searchLocations, STATE_NAMES, type Location } from "@/lib/locations";

interface LocationsPanelProps {
  selectedState?: string | null;
  onClear?: () => void;
  compact?: boolean;
  theme?: 'dark' | 'light';
}

export default function LocationsPanel({
  selectedState,
  onClear,
  compact = false,
  theme = 'dark',
}: LocationsPanelProps) {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState<Location[]>([]);
  const dk = theme === 'dark';

  useEffect(() => {
    if (selectedState) {
      const stateLocations = locations.filter(
        (l) => l.state.toUpperCase() === selectedState.toUpperCase()
      );
      setFiltered(stateLocations);
      setQuery("");
    } else if (query) {
      setFiltered(searchLocations(query));
    } else {
      setFiltered([]);
    }
  }, [selectedState, query]);

  const stateName = selectedState ? STATE_NAMES[selectedState] || selectedState : null;
  const showAll = !selectedState && !query;

  return (
    <div
      className={`flex flex-col h-full ${compact ? "min-h-[180px] max-h-[280px]" : "min-h-[280px]"}`}
    >
      {/* Panel header */}
      <div className={`px-4 py-2.5 border-b ${dk ? 'border-white/10' : 'border-[#E2E8F0]'}`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <MapPin size={15} className={dk ? 'text-[#60A5FA]' : 'text-[#1D4ED8]'} aria-hidden="true" />
            <span
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className={`${dk ? 'text-white' : 'text-[#0F172A]'} text-sm font-600`}
            >
              {stateName
                ? `${stateName} — ${filtered.length} location${filtered.length !== 1 ? "s" : ""}`
                : "Find a Location"}
            </span>
          </div>
          {selectedState && onClear && (
            <button
              onClick={onClear}
              className={`${dk ? 'text-[#64748B] hover:text-white' : 'text-[#94A3B8] hover:text-[#0F172A]'} transition-colors p-1 rounded`}
              aria-label="Clear state selection"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Search */}
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search city or state…"
            className={`w-full border text-xs rounded-lg pl-8 pr-3 py-2 focus:outline-none focus:border-[#3B82F6] transition-colors ${dk ? 'bg-white/[0.06] border-white/10 text-white placeholder:text-[#94A3B8]' : 'bg-white border-[#CBD5E1] text-[#0F172A] placeholder:text-[#94A3B8]'}`}
            aria-label="Search pickup locations"
          />
        </div>
      </div>

      {/* Location list */}
      <div className="flex-1 overflow-y-auto overscroll-contain">
        {showAll && (
          <div className="p-4 flex flex-col items-center justify-center h-full text-center gap-2">
            <div className={`w-8 h-8 rounded-full ${dk ? 'bg-white/10' : 'bg-[#DBEAFE]'} flex items-center justify-center`}>
              <MapPin size={15} className={dk ? 'text-[#60A5FA]' : 'text-[#1D4ED8]'} />
            </div>
            <p className={`${dk ? 'text-white' : 'text-[#64748B]'} text-xs`}>
              Click a highlighted state on the map to see nearby pickup locations.
            </p>
            <p className={`${dk ? 'text-[#94A3B8]' : 'text-[#94A3B8]'} text-xs`}>
              Or use the search box above to find a city.
            </p>
          </div>
        )}

        {!showAll && filtered.length === 0 && (
          <div className="p-5 text-center">
            <p className={`${dk ? 'text-[#94A3B8]' : 'text-[#64748B]'} text-sm`}>
              No locations found. Try a different search or{" "}
              <a href="tel:+12622541835" className={`${dk ? 'text-[#60A5FA]' : 'text-[#1D4ED8]'} hover:underline`}>
                call us
              </a>{" "}
              — we may have upcoming stock.
            </p>
          </div>
        )}

        {filtered.length > 0 && (
          <ul className="p-1.5 flex flex-col gap-1" role="list">
            {filtered.map((loc, i) => (
              <li key={`${loc.cityState}-${i}`}>
                <LocationCard loc={loc} compact={compact} theme={theme} />
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer link — always shown when there are results */}
      {filtered.length > 0 && (
        <div className={`px-4 py-2.5 border-t ${dk ? 'border-white/10' : 'border-[#E2E8F0]'}`}>
          <Link
            href="/locations"
            className={`flex items-center justify-center gap-2 ${dk ? 'text-white hover:text-[#60A5FA]' : 'text-[#1D4ED8] hover:text-[#1E3A8A]'} text-xs font-medium transition-colors`}
          >
            View all 28 locations
            <ExternalLink size={11} />
          </Link>
        </div>
      )}

      {/* Footer link — no results, non-compact only */}
      {!compact && filtered.length === 0 && (
        <div className={`px-4 py-2.5 border-t ${dk ? 'border-white/10' : 'border-[#E2E8F0]'}`}>
          <Link
            href="/locations"
            className={`flex items-center justify-center gap-2 ${dk ? 'text-white hover:text-[#60A5FA]' : 'text-[#1D4ED8] hover:text-[#1E3A8A]'} text-xs font-medium transition-colors`}
          >
            View all 28 locations
            <ExternalLink size={11} />
          </Link>
        </div>
      )}
    </div>
  );
}

function LocationCard({
  loc,
  compact,
  theme = 'dark',
}: {
  loc: Location;
  compact?: boolean;
  theme?: 'dark' | 'light';
}) {
  const dk = theme === 'dark';
  return (
    <div className={`${dk ? 'bg-white/[0.06] hover:bg-white/[0.10] border-white/10 hover:border-white/20' : 'bg-white hover:bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#BFDBFE]'} border rounded-lg px-3 py-2 transition-colors group`}>
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className={`${dk ? 'text-white' : 'text-[#0F172A]'} text-md font-600 leading-tight truncate`}
          >
            {loc.cityState}
          </p>
          {loc.facility && (
            <p className={`${dk ? 'text-[#94A3B8]' : 'text-[#64748B]'} text-xs mt-0.5 truncate`}>
              {loc.facility}
              {loc.unitNumber && loc.unitNumber !== "-" && loc.unitNumber !== ""
                ? ` · Unit ${loc.unitNumber}`
                : ""}
            </p>
          )}
        </div>
        <a
          href={loc.gmaps}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-shrink-0 ${dk ? 'text-[#94A3B8] hover:text-[#60A5FA]' : 'text-[#94A3B8] hover:text-[#1D4ED8]'} transition-colors p-1`}
          aria-label={`Open ${loc.cityState} on Google Maps`}
        >
          <ExternalLink size={18} />
        </a>
      </div>
      {!compact && (
        <a
          href={loc.gmaps}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 ${dk ? 'text-[#60A5FA]' : 'text-[#1D4ED8]'} text-xs mt-2 hover:underline`}
        >
          <MapPin size={10} />
          Get Directions
        </a>
      )}
    </div>
  );
}
