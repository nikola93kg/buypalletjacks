import { Phone, MessageSquare, MapPin } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      className="section-padding border-t-[3px] border-[#F97316] bg-[#0F172A]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, transparent, transparent 60px, rgba(255,255,255,0.012) 60px, rgba(255,255,255,0.012) 120px)",
      }}
      aria-labelledby="final-cta-heading"
    >
      <div className="container-site">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-[0.6875rem] font-700 uppercase tracking-[0.18em] text-[#F97316] mb-5 flex items-center justify-center gap-2"
          >
            <span className="w-5 h-[2px] bg-[#F97316]" aria-hidden="true" />
            Ready to Buy
            <span className="w-5 h-[2px] bg-[#F97316]" aria-hidden="true" />
          </p>

          <h2
            id="final-cta-heading"
            style={{ fontFamily: "'Outfit', sans-serif", color: "#fff" }}
            className="text-4xl sm:text-5xl md:text-6xl font-900 text-white leading-[1.05] tracking-tight mb-6"
          >
            Your next pallet jack
            <br className="hidden sm:block" /> is warehouse-ready
          </h2>

          <p className="text-[#64748B] text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            26+ pickup locations nationwide. Professionally refurbished. 2-month warranty
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href="tel:+18005555555"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="inline-flex items-center gap-2.5 bg-[#F97316] hover:bg-[#EA6F0E] text-white font-700 text-base px-8 py-4 transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href="sms:+18005555555"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="inline-flex items-center gap-2.5 text-white font-600 text-base px-8 py-4 border border-white/25 hover:border-white/60 hover:bg-white/5 transition-all"
            >
              <MessageSquare size={18} />
              Text Us
            </a>
            <a
              href="/locations"
              className="flex items-center gap-1.5 text-[#475569] hover:text-white transition-colors text-sm font-medium"
            >
              <MapPin size={15} />
              Find a location
            </a>
          </div>

          {/* Payment methods */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {["Cash", "Credit Card", "Zelle", "CashApp", "Receipts Available"].map((m) => (
              <span
                key={m}
                className="text-xs text-[#475569] border border-[#1E293B] px-3 py-1.5 tracking-wide"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
