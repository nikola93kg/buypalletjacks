"use client";

import { Phone, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./MobileStickyCTA.module.css";

export default function MobileStickyCTA() {
  return (
    <div
      className={cn("fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-[0_-4px_16px_rgba(0,0,0,0.08)]", styles.mobileStickyCTA)}
      role="navigation"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-2 gap-0">
        <a
          href="tel:+12622541835"
          className={cn("flex items-center justify-center gap-2 py-4 text-white font-semibold text-base active:opacity-90 transition-colors", styles.callBtn)}
        >
          <Phone size={18} />
          Call Now
        </a>
        <a
          href="sms:+12622541835"
          className={cn("flex items-center justify-center gap-2 py-4 text-white font-semibold text-base active:opacity-90 transition-colors", styles.textBtn)}
        >
          <MessageSquare size={18} />
          Text Us
        </a>
      </div>
    </div>
  );
}
