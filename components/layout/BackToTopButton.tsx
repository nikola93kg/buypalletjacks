"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const SHOW_AFTER_SCROLL = 300;

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_SCROLL);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={[
        "fixed right-4 md:right-6 z-40",
        "bottom-20 md:bottom-6",
        "group",
        "h-12 w-12 rounded-full",
        "flex items-center justify-center",
        "bg-[#0F172A] text-white",
        "shadow-xl shadow-black/20",
        "ring-1 ring-white/10",
        "transition-all duration-300 ease-out",
        "hover:bg-[#1D4ED8] hover:ring-[#1D4ED8]/40 hover:ring-2",
        "hover:shadow-[0_8px_24px_rgba(29,78,216,0.4)]",
        "hover:-translate-y-1 hover:scale-105",
        "active:scale-95 active:translate-y-0",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2",
        isVisible
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none translate-y-2",
      ].join(" ")}
    >
      <ArrowUp
        size={18}
        strokeWidth={2.5}
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </button>
  );
}
