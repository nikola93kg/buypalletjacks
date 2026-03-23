"use client";

import { Phone, MessageSquare } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-[#E2E8F0] shadow-[0_-4px_16px_rgba(0,0,0,0.08)]"
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-2 gap-0">
        <a
          href="tel:+12622541835"
          className="flex items-center justify-center gap-2 py-4 bg-[#1D4ED8] text-white font-semibold text-base active:bg-[#1E3A8A] transition-colors"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <Phone size={18} />
          Call Now
        </a>
        <a
          href="sms:+12622541835"
          className="flex items-center justify-center gap-2 py-4 bg-[#F97316] text-white font-semibold text-base active:bg-[#EA6F0E] transition-colors"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          <MessageSquare size={18} />
          Text Us
        </a>
      </div>
    </div>
  );
}
