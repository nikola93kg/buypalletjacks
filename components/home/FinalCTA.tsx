import { Phone, MessageSquare, MapPin, Shield, Truck, Tag } from "lucide-react";
import Link from "next/link";

const TRUST_PILLS = [
  { icon: Shield, text: "2-Month Warranty" },
  { icon: Tag,    text: "40–60% Below Retail" },
  { icon: Truck,  text: "Delivery Available" },
];

const PAYMENT_METHODS = ["Cash", "Credit Card", "Zelle", "CashApp", "Venmo"];

export default function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden bg-[#0F172A] section-padding"
      aria-labelledby="final-cta-heading"
    >
      {/* Radial glow behind the content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(29,78,216,0.22) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(255,255,255,0.012) 60px, rgba(255,255,255,0.012) 120px)",
        }}
        aria-hidden="true"
      />
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1D4ED8] via-[#3B82F6] to-[#F97316]"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="max-w-2xl mx-auto text-center">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <span className="h-px w-8 bg-[#F97316]/60" aria-hidden="true" />
            <span
              className="text-[#F97316] text-xs font-700 uppercase tracking-[0.2em]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Ready to Buy
            </span>
            <span className="h-px w-8 bg-[#F97316]/60" aria-hidden="true" />
          </div>

          {/* Headline */}
          <h2
            id="final-cta-heading"
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-900 text-white leading-[1.05] tracking-tight mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Your next pallet jack
            <br />
            <span className="text-[#60A5FA]">is ready today.</span>
          </h2>

          <p className="text-[#64748B] text-lg leading-relaxed mb-8 max-w-lg mx-auto">
            26+ pickup locations nationwide. Professionally refurbished.
            2-month warranty included on every unit.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            {TRUST_PILLS.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="flex items-center gap-1.5 text-xs text-[#CBD5E1] font-medium px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <Icon size={13} className="text-[#60A5FA]" aria-hidden="true" />
                {text}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href="tel:+12622541835"
              className="inline-flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6F0E] text-white font-700 text-base px-8 py-4 rounded-xl transition-colors shadow-lg shadow-orange-900/30"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <Phone size={18} aria-hidden="true" />
              Call Now
            </a>
            <a
              href="sms:+12622541835"
              className="inline-flex items-center gap-2.5 text-white font-600 text-base px-8 py-4 rounded-xl border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              <MessageSquare size={18} aria-hidden="true" />
              Text Us
            </a>
          </div>

          {/* Find a location link */}
          <Link
            href="/locations"
            className="inline-flex items-center gap-1.5 text-[#475569] hover:text-[#93C5FD] transition-colors text-sm font-medium mb-10"
          >
            <MapPin size={14} aria-hidden="true" />
            Find a pickup location near you
          </Link>

          {/* Divider */}
          <div className="border-t border-white/[0.07] pt-8">
            <p className="text-[#475569] text-xs uppercase tracking-widest mb-3 font-medium">
              Accepted payments
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {PAYMENT_METHODS.map((m) => (
                <span
                  key={m}
                  className="text-xs text-[#64748B] px-3 py-1 rounded-md"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
