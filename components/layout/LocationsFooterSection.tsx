import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import {
  locations,
  getLocationsGroupedByState,
  STATE_NAMES,
} from "@/lib/locations";

export default function LocationsFooterSection() {
  const grouped = getLocationsGroupedByState();
  const stateEntries = Object.entries(grouped).sort(([a], [b]) =>
    (STATE_NAMES[a] || a).localeCompare(STATE_NAMES[b] || b)
  );

  return (
    <section
      className="bg-[#F8FAFC] border-t border-[#E2E8F0]"
      aria-label="Pickup locations"
    >
      <div className="container-site py-14">
        {/* Intro blurb */}
        <p className="text-[#475569] text-sm leading-relaxed max-w-3xl mb-10">
          Buy Pallet Jacks is the leading supplier of professionally refurbished
          pallet jacks for your warehouse, logistics, and business needs — with{" "}
          {locations.length}+ pickup locations nationwide. We carry Altra and
          Crown pallet jacks fully rebuilt to warehouse-ready condition, backed
          by a 2-month warranty and no long-term commitment.{" "}
          <a
            href="tel:+12622541835"
            className="text-[#1D4ED8] hover:underline font-600"
          >
            Call or text us
          </a>{" "}
          for pricing and same-day pickup availability.
        </p>

        {/* Location columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-8">
          {stateEntries.map(([stateCode, locs]) => {
            const stateName = STATE_NAMES[stateCode] || stateCode;
            return (
              <div key={stateCode}>
                <h3
                  className="text-xs font-700 text-[#0F172A] uppercase tracking-wider mb-3 pb-2 border-b border-[#E2E8F0]"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Buy Pallet Jacks in {stateName}:
                </h3>
                <ul className="space-y-1.5">
                  {locs.map((loc) => {
                    const city = loc.cityState.split(",")[0].trim();
                    // Title-case the city name (stored as ALL CAPS in data)
                    const cityFormatted = city
                      .toLowerCase()
                      .replace(/\b\w/g, (c) => c.toUpperCase());
                    return (
                      <li key={loc.cityState}>
                        <Link
                          href={`/locations?state=${stateCode}`}
                          className="text-sm text-[#1D4ED8] hover:text-[#1E3A8A] hover:underline transition-colors leading-snug"
                        >
                          {cityFormatted}, {stateName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/locations"
            className="inline-flex items-center gap-1.5 text-sm text-[#1D4ED8] hover:text-[#1E3A8A] font-600 transition-colors"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <MapPin size={14} />
            View all {locations.length} locations with directions &amp; contact
            info
          </Link>
          <a
            href="tel:+12622541835"
            className="inline-flex items-center gap-1.5 text-sm text-[#475569] hover:text-[#1D4ED8] transition-colors"
          >
            <Phone size={14} />
            (800) 555-5555 — Call for same-day pickup availability
          </a>
        </div>
      </div>
    </section>
  );
}
