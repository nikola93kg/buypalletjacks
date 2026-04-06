"use client";

import { useEffect, useState, startTransition } from "react";

const THEMES = [
  {
    key: "",
    label: "Industrial Blue (default)",
    swatch: "#1D4ED8",
    swatchAlt: "#F97316",
  },
  {
    key: "industrial-steel",
    label: "Industrial Steel",
    swatch: "#64748B",
    swatchAlt: "#F97316",
  },
  {
    key: "heavy-freight",
    label: "Heavy Freight",
    swatch: "#1C1917",
    swatchAlt: "#F59E0B",
  },
  {
    key: "cargo-blue",
    label: "Cargo Blue",
    swatch: "#0369A1",
    swatchAlt: "#F97316",
  },
  {
    key: "midnight-authority",
    label: "Midnight Authority",
    swatch: "#020617",
    swatchAlt: "#38BDF8",
  },
] as const;

type ThemeKey = (typeof THEMES)[number]["key"];

const LS_KEY = "bpj-theme";

function applyTheme(key: ThemeKey) {
  const root = document.documentElement;
  if (key === "") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", key);
  }
  try {
    localStorage.setItem(LS_KEY, key);
  } catch {
    // ignore private-browsing errors
  }
}

export default function ThemeSwitcher() {
  const [active, setActive] = useState<ThemeKey>("");

  // Sync React state with the data-theme attribute already set by the inline
  // anti-flash script. Reading from the DOM avoids a direct localStorage call
  // inside the effect body and prevents cascading-render lint warnings.
  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") ?? "") as ThemeKey;
    startTransition(() => setActive(current));
  }, []);

  function handleSelect(key: ThemeKey) {
    setActive(key);
    applyTheme(key);
  }

  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Color theme switcher">
      {THEMES.map((theme) => {
        const isActive = active === theme.key;
        return (
          <button
            key={theme.key || "default"}
            onClick={() => handleSelect(theme.key)}
            title={theme.label}
            aria-label={`Switch to ${theme.label} theme${isActive ? " (active)" : ""}`}
            aria-pressed={isActive}
            className="relative w-5 h-5 rounded-full cursor-pointer transition-transform duration-150 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{
              background: `linear-gradient(135deg, ${theme.swatch} 55%, ${theme.swatchAlt} 55%)`,
              outline: isActive ? `2.5px solid ${theme.swatch}` : "2.5px solid transparent",
              outlineOffset: "2px",
              boxShadow: isActive
                ? `0 0 0 1px white, 0 0 0 3.5px ${theme.swatch}`
                : "0 1px 3px rgba(0,0,0,0.25)",
            }}
          />
        );
      })}
    </div>
  );
}
