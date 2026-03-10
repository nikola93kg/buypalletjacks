"use client";

import { STATE_NAMES } from "@/lib/locations";

interface StateSelectFallbackProps {
  statesWithLocations: string[];
  selectedState: string | null;
  onStateSelect: (state: string | null) => void;
}

export default function StateSelectFallback({
  statesWithLocations,
  selectedState,
  onStateSelect,
}: StateSelectFallbackProps) {
  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="state-select-fallback"
        className="text-sm font-medium text-[#374151] whitespace-nowrap"
      >
        Jump to state:
      </label>
      <select
        id="state-select-fallback"
        value={selectedState || ""}
        onChange={(e) => onStateSelect(e.target.value || null)}
        className="flex-1 border border-[#E2E8F0] rounded-lg px-3 py-2 text-sm text-[#0F172A] bg-white focus:outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#DBEAFE] transition-colors"
        aria-label="Select a state to see pickup locations"
      >
        <option value="">All States</option>
        {statesWithLocations.map((code) => (
          <option key={code} value={code}>
            {STATE_NAMES[code] || code} ({code})
          </option>
        ))}
      </select>
      {selectedState && (
        <button
          onClick={() => onStateSelect(null)}
          className="text-sm text-[#64748B] hover:text-[#1D4ED8] transition-colors px-2 py-2"
          aria-label="Clear state selection"
        >
          Clear
        </button>
      )}
    </div>
  );
}
