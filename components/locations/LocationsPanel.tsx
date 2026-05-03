"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { MapPin, Search, ExternalLink, X } from "lucide-react";
import { getLocationsByState, searchLocations, STATE_NAMES, type Location } from "@/lib/locations";
import styles from "./LocationsPanel.module.css";

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
  const dk = theme === 'dark';

  // Reset search query when a new state is selected from the map
  // This is a deliberate UX pattern to clear search when navigating via map
  useEffect(() => {
    if (selectedState) setQuery(""); // eslint-disable-line react-hooks/set-state-in-effect
  }, [selectedState]);

  const filtered = useMemo(() => {
    if (selectedState) return getLocationsByState(selectedState);
    if (query) return searchLocations(query);
    return [];
  }, [selectedState, query]);

  const stateName = selectedState ? STATE_NAMES[selectedState] || selectedState : null;
  const showAll = !selectedState && !query;

  return (
    <div className={`${styles.panel} ${compact ? styles.compact : ''}`}>
      {/* Panel header */}
      <div className={`${styles.header} ${dk ? styles.dark : styles.light}`}>
        <div className={styles.headerTop}>
          <div className={styles.headerTitle}>
            <MapPin size={15} className={`${styles.mapIcon} ${dk ? styles.dark : styles.light}`} aria-hidden="true" />
            <span className={`${styles.titleText} ${dk ? styles.dark : styles.light}`}>
              {stateName
                ? `${stateName} — ${filtered.length} location${filtered.length !== 1 ? "s" : ""}`
                : "Find a Location"}
            </span>
          </div>
          {selectedState && onClear && (
            <button
              onClick={onClear}
              className={`${styles.clearButton} ${dk ? styles.dark : styles.light}`}
              aria-label="Clear state selection"
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Search */}
        <div className={styles.searchWrapper}>
          <Search
            size={14}
            className={styles.searchIcon}
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search city or state…"
            className={`${styles.searchInput} ${dk ? styles.dark : styles.light}`}
            aria-label="Search pickup locations"
          />
        </div>
      </div>

      {/* Location list */}
      <div className={styles.listWrapper}>
        {showAll && (
          <div className={styles.emptyState}>
            <div className={`${styles.emptyIcon} ${dk ? styles.dark : styles.light}`}>
              <MapPin size={15} />
            </div>
            <p className={`${styles.emptyText} ${dk ? styles.dark : styles.light}`}>
              Click a highlighted state on the map to see nearby pickup locations.
            </p>
            <p className={styles.emptySubtext}>
              Or use the search box above to find a city.
            </p>
          </div>
        )}

        {!showAll && filtered.length === 0 && (
          <div className={styles.noResults}>
            <p className={`${styles.noResultsText} ${dk ? styles.dark : styles.light}`}>
              No locations found. Try a different search or{" "}
              <a href="tel:+12622541835" className={`${styles.noResultsLink} ${dk ? styles.dark : styles.light}`}>
                call us
              </a>{" "}
              — we may have upcoming stock.
            </p>
          </div>
        )}

        {filtered.length > 0 && (
          <ul className={styles.locationList} role="list">
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
        <div className={`${styles.footer} ${dk ? styles.dark : styles.light}`}>
          <Link href="/locations" className={`${styles.footerLink} ${dk ? styles.dark : styles.light}`}>
            View all 28 locations
            <ExternalLink size={11} />
          </Link>
        </div>
      )}

      {/* Footer link — no results, non-compact only */}
      {!compact && filtered.length === 0 && (
        <div className={`${styles.footer} ${dk ? styles.dark : styles.light}`}>
          <Link href="/locations" className={`${styles.footerLink} ${dk ? styles.dark : styles.light}`}>
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
    <div className={`${styles.locationCard} ${dk ? styles.dark : styles.light}`}>
      <div className={styles.cardContent}>
        <div className={styles.cardInfo}>
          <p className={`${styles.cardCity} ${dk ? styles.dark : styles.light}`}>
            {loc.cityState}
          </p>
          {loc.facility && (
            <p className={`${styles.cardFacility} ${dk ? styles.dark : styles.light}`}>
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
          className={`${styles.cardMapButton} ${dk ? styles.dark : styles.light}`}
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
          className={`${styles.cardDirections} ${dk ? styles.dark : styles.light}`}
        >
          <MapPin size={10} />
          Get Directions
        </a>
      )}
    </div>
  );
}
