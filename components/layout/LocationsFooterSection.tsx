import Link from "next/link";
import { MapPin, Phone, MessageSquare } from "lucide-react";
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
      aria-label="Pickup locations directory"
    >
      <div className="container-site py-14">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="text-center sm:text-left">
            <p
              className="text-xs font-700 uppercase tracking-[0.18em] text-[#3B82F6] mb-2"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Nationwide Coverage
            </p>
            <h2
              className="text-xl font-800 text-[#0F172A] leading-tight"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {locations.length}+ Pickup Locations
            </h2>
            <p className="text-[#475569] text-sm mt-1 max-w-md leading-relaxed">
              Professionally refurbished pallet jacks available for same-day
              pickup. Call or text to confirm stock before you show up.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 flex-shrink-0 justify-center sm:justify-start">
            <a
              href="tel:+12622541835"
              className="inline-flex items-center gap-1.5 text-xs font-600 text-[#0F172A] px-3.5 py-2 rounded-lg border border-[#CBD5E1] hover:border-[#94A3B8] hover:bg-[#E2E8F0] transition-all"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Phone size={12} aria-hidden="true" />
              Call Us
            </a>
            <a
              href="sms:+12622541835"
              className="inline-flex items-center gap-1.5 text-xs font-600 text-[#0F172A] px-3.5 py-2 rounded-lg border border-[#CBD5E1] hover:border-[#94A3B8] hover:bg-[#E2E8F0] transition-all"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <MessageSquare size={12} aria-hidden="true" />
              Text Us
            </a>
          </div>
        </div>

        {/* Location grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-8">
          {stateEntries.map(([stateCode, locs]) => {
            const stateName = STATE_NAMES[stateCode] || stateCode;
            return (
              <div key={stateCode}>
                <h3
                  className="text-[0.65rem] font-700 text-[#94A3B8] uppercase tracking-widest mb-2.5 pb-2 border-b border-[#E2E8F0]"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {stateName}
                </h3>
                <ul className="space-y-1.5">
                  {locs.map((loc) => {
                    const city = loc.cityState.split(",")[0].trim();
                    const cityFormatted = city
                      .toLowerCase()
                      .replace(/\b\w/g, (c) => c.toUpperCase());
                    return (
                      <li key={loc.cityState}>
                        <Link
                          href={`/locations?state=${stateCode}`}
                          className="flex items-center gap-1.5 text-sm text-[#1D4ED8] hover:text-[#1E3A8A] transition-colors leading-snug group"
                        >
                          <MapPin
                            size={11}
                            className="flex-shrink-0 text-[#93C5FD] group-hover:text-[#1D4ED8] transition-colors"
                            aria-hidden="true"
                          />
                          {cityFormatted}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
          <Link
            href="/locations"
            className="inline-flex items-center gap-1.5 text-sm text-[#1D4ED8] hover:text-[#1E3A8A] font-600 transition-colors"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <MapPin size={14} aria-hidden="true" />
            View all {locations.length} locations with full details &amp; directions
          </Link>
          <p className="text-[#94A3B8] text-xs">
            Altra · Crown · Same-day pickup · Delivery available
          </p>
        </div>

      </div>
    </section>
  );
}
