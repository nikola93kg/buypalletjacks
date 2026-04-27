"use client";

import { useState, useMemo } from "react";
import { MapPin, Search, Navigation, ExternalLink, X } from "lucide-react";
import {
  getLocationsGroupedByState,
  searchLocations,
  STATE_NAMES,
  type Location,
} from "@/lib/locations";
import styles from "./locations.module.css";

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
    <section className={styles.directory} aria-labelledby="directory-heading">
      <div className="container-site">
        {/* Section header */}
        <div className={styles.dirHeader}>
          <p className={styles.dirEyebrow}>Directory</p>
          <h2 id="directory-heading" className={styles.dirHeadline}>
            All Pickup Locations
          </h2>
          <p className={styles.dirSubline}>
            26 locations across 19 states. Search by city, state, or facility — or
            filter by state to jump straight to your area.
          </p>
        </div>

        {/* Search bar */}
        <div className={styles.searchWrap}>
          <Search className={styles.searchIcon} aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveState(null);
            }}
            placeholder="Search city, state, or facility…"
            className={styles.searchInput}
            aria-label="Search pickup locations"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className={styles.searchClear}
              aria-label="Clear search"
            >
              <X width={16} height={16} />
            </button>
          )}
        </div>

        {/* State quick-jump pills */}
        {!query && (
          <div
            className={styles.pillsRow}
            role="group"
            aria-label="Filter by state"
          >
            <button
              onClick={() => setActiveState(null)}
              className={`${styles.pill} ${!activeState ? styles.pillActive : ""}`}
            >
              All States
            </button>
            {states.map((code) => (
              <button
                key={code}
                onClick={() => setActiveState(activeState === code ? null : code)}
                className={`${styles.pill} ${activeState === code ? styles.pillActive : ""}`}
              >
                {STATE_NAMES[code] || code}
              </button>
            ))}
          </div>
        )}

        {/* Search result count */}
        {query && (
          <p className={styles.resultCount}>
            {totalResults === 0 ? (
              "No locations found"
            ) : (
              <>
                <span className={styles.resultCountBold}>{totalResults}</span>{" "}
                location{totalResults !== 1 ? "s" : ""} found for &ldquo;{query}&rdquo;
              </>
            )}
          </p>
        )}

        {/* Empty state */}
        {totalResults === 0 && (
          <div className={styles.emptyState}>
            <div className={styles.emptyIconWrap}>
              <MapPin aria-hidden="true" />
            </div>
            <p className={styles.emptyTitle}>No locations found</p>
            <p className={styles.emptyBody}>
              Try a different search or{" "}
              <a href="tel:+12622541835" className={styles.emptyLink}>
                call us
              </a>{" "}
              — we may have upcoming stock near you.
            </p>
          </div>
        )}

        {/* Cards grid */}
        {totalResults > 0 && (
          <div className={styles.cardsGrid}>
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
  const stateName =
    STATE_NAMES[loc.state.toUpperCase() as keyof typeof STATE_NAMES] ?? loc.state;

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.cardIconWrap}>
          <MapPin aria-hidden="true" />
        </div>
        <div>
          <p className={styles.cardCity}>{loc.cityState}</p>
          <p className={styles.cardState}>{stateName}</p>
          {loc.facility && (
            <p className={styles.cardFacility}>
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
          className={styles.cardDirections}
          aria-label={`Get directions to ${loc.cityState}`}
        >
          <Navigation aria-hidden="true" />
          Get Directions
          <ExternalLink className={styles.cardDirectionsExt} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
