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
          className="flex items-center justify-center gap-2 py-4 text-white font-semibold text-base active:opacity-90 transition-colors"
          style={{
            backgroundColor: 'var(--color-brand-blue)',
            fontFamily: "'Outfit', sans-serif"
          }}
          onMouseDown={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brand-navy)'}
          onMouseUp={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brand-blue)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brand-blue)'}
        >
          <Phone size={18} />
          Call Now
        </a>
        <a
          href="sms:+12622541835"
          className="flex items-center justify-center gap-2 py-4 text-white font-semibold text-base active:opacity-90 transition-colors"
          style={{
            backgroundColor: 'var(--color-brand-orange)',
            fontFamily: "'Outfit', sans-serif"
          }}
          onMouseDown={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brand-orange-hover)'}
          onMouseUp={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brand-orange)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brand-orange)'}
        >
          <MessageSquare size={18} />
          Text Us
        </a>
      </div>
    </div>
  );
}
