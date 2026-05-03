import Link from "next/link";
import { MapPin, Phone, MessageSquare } from "lucide-react";
import {
  locations,
  getLocationsGroupedByState,
  STATE_NAMES,
} from "@/lib/locations";
import { cn } from "@/lib/utils";
import styles from "./LocationsFooterSection.module.css";

export default function LocationsFooterSection() {
  const grouped = getLocationsGroupedByState();
  const stateEntries = Object.entries(grouped).sort(([a], [b]) =>
    (STATE_NAMES[a] || a).localeCompare(STATE_NAMES[b] || b)
  );

  return (
    <section
      className={cn("border-t", styles.section)}
      aria-label="Pickup locations directory"
    >
      <div className="container-site py-14">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="text-center sm:text-left">
            <p
              className={cn("text-xs font-700 uppercase tracking-[0.18em] mb-2", styles.kicker, styles.outfitText)}
            >
              Nationwide Coverage
            </p>
            <h2
              className={cn("text-xl font-800 leading-tight", styles.heading, styles.outfitText)}
            >
              {locations.length}+ Pickup Locations
            </h2>
            <p className={cn("text-sm mt-1 max-w-md leading-relaxed", styles.bodyText)}>
              Professionally refurbished pallet jacks available for same-day
              pickup. Call or text to confirm stock before you show up.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 flex-shrink-0 justify-center sm:justify-start">
            <a
              href="tel:+12622541835"
              className={cn("inline-flex items-center gap-1.5 text-xs font-600 px-3.5 py-2 rounded-lg border transition-all", styles.ctaBtn, styles.outfitText)}
            >
              <Phone size={12} aria-hidden="true" />
              Call Us
            </a>
            <a
              href="sms:+12622541835"
              className={cn("inline-flex items-center gap-1.5 text-xs font-600 px-3.5 py-2 rounded-lg border transition-all", styles.ctaBtn, styles.outfitText)}
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
                  className={cn("text-[0.65rem] font-700 uppercase tracking-widest mb-2.5 pb-2 border-b", styles.stateHeading, styles.outfitText)}
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
                          className={cn("flex items-center gap-1.5 text-sm transition-colors leading-snug group", styles.cityLink)}
                        >
                          <MapPin
                            size={11}
                            className={cn("flex-shrink-0 transition-colors", styles.cityIcon)}
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
        <div className={cn("mt-12 pt-6 border-t flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4", styles.bottomBorder)}>
          <Link
            href="/locations"
            className={cn("inline-flex items-center gap-1.5 text-sm font-600 transition-colors", styles.viewAllLink, styles.outfitText)}
          >
            <MapPin size={14} aria-hidden="true" />
            View all {locations.length} locations with full details &amp; directions
          </Link>
          <p className={cn("text-xs", styles.bottomText)}>
            Altra · Crown · Same-day pickup · Delivery available
          </p>
        </div>

      </div>
    </section>
  );
}
