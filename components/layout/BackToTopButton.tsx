"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

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
        "h-11 w-11 rounded-full",
        "flex items-center justify-center",
        "bg-[#1D4ED8] text-white shadow-lg shadow-blue-600/25",
        "border border-white/70",
        "transition-all duration-200",
        "hover:-translate-y-0.5 hover:bg-[#1E40AF]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-2",
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      <ChevronUp size={20} aria-hidden="true" />
    </button>
  );
}
