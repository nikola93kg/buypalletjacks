"use client";

import { useEffect, useRef, useState } from "react";
import { normalizeStateId } from "@/lib/locations";

interface UsaMapProps {
  statesWithLocations: string[];
  selectedState?: string | null;
  onStateSelect?: (stateCode: string | null) => void;
  compact?: boolean;
  theme?: 'dark' | 'light';
}

export default function UsaMap({
  statesWithLocations,
  selectedState,
  onStateSelect,
  compact = false,
  theme = 'dark',
}: UsaMapProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [svgContent, setSvgContent] = useState<string>("");
  // Default to the known viewBox of the current SVG file; overridden dynamically on load
  const [svgViewBox, setSvgViewBox] = useState<string>("477 421 593.3779761904764 318.2870370370371");
  const [internalSelected, setInternalSelected] = useState<string | null>(null);

  const currentSelected = selectedState !== undefined ? selectedState : internalSelected;

  // Load SVG content from public/maps/usa.svg
  useEffect(() => {
    fetch("/maps/usa.svg")
      .then((r) => r.text())
      .then((text) => {
        // Extract viewBox from the SVG so we always match the file's coordinate space
        const vbMatch = text.match(/viewBox="([^"]+)"/);
        if (vbMatch) setSvgViewBox(vbMatch[1]);
        // Extract just the inner content (strip outer <svg> tag)
        const match = text.match(/<svg[^>]*>([\s\S]*)<\/svg>/i);
        setSvgContent(match ? match[1] : text);
      })
      .catch(() => {
        setSvgContent("");
      });
  }, []);

  // Apply classes and accessibility attributes to state paths after SVG renders
  useEffect(() => {
    if (!svgRef.current || !svgContent) return;
    const paths = svgRef.current.querySelectorAll<SVGPathElement | SVGCircleElement>(
      "path[id], circle[id]"
    );
    paths.forEach((el) => {
      const rawId = el.getAttribute("id") || "";
      const code = normalizeStateId(rawId);
      el.classList.remove("has-locations", "selected");

      if (statesWithLocations.includes(code)) {
        el.classList.add("has-locations");
        // Make clickable states keyboard-accessible
        el.setAttribute("tabindex", "0");
        el.setAttribute("role", "button");
        const title = el.querySelector("title")?.textContent || code;
        el.setAttribute("aria-label", `Select ${title} — has pickup locations`);
      } else {
        el.removeAttribute("tabindex");
        el.removeAttribute("role");
        el.removeAttribute("aria-label");
      }

      if (currentSelected && code === currentSelected) {
        el.classList.add("selected");
      }
    });
  }, [svgContent, statesWithLocations, currentSelected]);

  // Click / keyboard handler
  const handleInteraction = (e: React.MouseEvent | React.KeyboardEvent) => {
    const target = e.target as SVGElement;
    if (
      e.type === "keydown" &&
      (e as React.KeyboardEvent).key !== "Enter" &&
      (e as React.KeyboardEvent).key !== " "
    )
      return;

    const pathEl = target.closest<SVGElement>("path[id], circle[id]");
    if (!pathEl) return;

    const rawId = pathEl.getAttribute("id") || "";
    const code = normalizeStateId(rawId);
    if (!statesWithLocations.includes(code)) return;

    const next = code === currentSelected ? null : code;
    if (onStateSelect) {
      onStateSelect(next);
    } else {
      setInternalSelected(next);
    }
  };

  if (!svgContent) {
    return (
      <div
        className={`w-full ${compact ? "aspect-[5/3]" : "aspect-[5/3] max-w-3xl mx-auto"} bg-[#1E293B] rounded-xl animate-pulse`}
        aria-label="Loading USA map"
      />
    );
  }

  return (
    <div className={`w-full ${compact ? "" : "max-w-3xl mx-auto"}`} data-map-theme={theme}>
      <svg
        ref={svgRef}
        viewBox={svgViewBox}
        className="usa-map w-full h-auto"
        aria-label="Interactive map of the United States. States with pickup locations are highlighted in blue."
        role="img"
        onClick={handleInteraction}
        onKeyDown={handleInteraction}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
      {/* Accessible fallback is in StateSelectFallback — used externally */}
    </div>
  );
}
