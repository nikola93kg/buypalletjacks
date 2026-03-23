import React from "react";
import { Shield, CheckCircle, Plus } from "lucide-react";

const WARRANTY_FEATURES = [
  "Full 2-month coverage on all mechanical components",
  "All units tested before sale — no surprises",
  "Extended warranty available at additional cost",
  "Receipts provided upon request",
  "Every unit painted and sealed before delivery",
  "Transparent condition — ask us anything",
];

export default function Warranty() {
  return (
    <section
      id="warranty"
      className="section-padding bg-[#0F172A] text-white"
      aria-labelledby="warranty-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <span className="section-eyebrow text-[#60A5FA]">Quality Promise</span>
            <h2
              id="warranty-heading"
              style={{ fontFamily: "'Outfit', sans-serif", color: "#fff" }}
              className="text-3xl md:text-4xl font-800 text-white mb-5 "
            >
              Every unit backed by a{" "}
              <span className="text-[#60A5FA]">full 2-month warranty</span>
            </h2>
            <p className="text-[#94A3B8] text-base leading-relaxed mb-8">
              We stand behind every pallet jack we sell. "Refurbished" means
              professionally inspected, repaired, painted, and sealed — not just
              cleaned up and resold. If something isn&apos;t right within 2 months, we
              make it right.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {WARRANTY_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle
                    size={18}
                    className="text-[#22C55E] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-[#CBD5E1] text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <a href="tel:+12622541835" className="btn-primary">
                Ask About Warranty
              </a>
              <a href="/about" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>

          {/* Visual card side */}
          <div className="flex flex-col gap-5">
            {/* Main warranty card */}
            <div className="bg-[#1E3A8A] rounded-2xl p-8 flex flex-col items-center text-center border border-[#2563EB]/30">
              <div className="w-16 h-16 rounded-full bg-[#1D4ED8] flex items-center justify-center mb-5">
                <Shield size={32} className="text-white" aria-hidden="true" />
              </div>
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-5xl font-900 text-white mb-2"
              >
                2
              </p>
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-xl font-600 text-[#93C5FD] mb-3"
              >
                Month Warranty
              </p>
              <p className="text-[#94A3B8] text-sm max-w-xs">
                Standard on every unit. Extended coverage available on request.
              </p>
            </div>

            {/* Extra warranty callout */}
            <div className="bg-[#1E293B] rounded-xl p-5 flex items-center gap-4 border border-[#334155]">
              <div className="w-10 h-10 rounded-lg bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                <Plus size={20} className="text-[#F97316]" aria-hidden="true" />
              </div>
              <div>
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-white font-600 text-sm mb-0.5"
                >
                  Extended Warranty Available
                </p>
                <p className="text-[#64748B] text-xs">
                  Need longer coverage? Ask us about extended warranty pricing when you call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
