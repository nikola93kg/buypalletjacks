import React from "react";
import Image from "next/image";
import { CheckCircle, BadgeCheck } from "lucide-react";
import warrantyPic from "../../public/2monthswarranty.webp";

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
      className="section-padding bg-[#0F172A] text-white overflow-hidden"
      aria-labelledby="warranty-heading"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">

          {/* ── LEFT — Text ── */}
          <div>
            <span className="section-eyebrow text-[#60A5FA]">Quality Promise</span>
            <h2
              id="warranty-heading"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-3xl md:text-4xl font-800 text-white mb-5"
            >
              Every unit backed by a{" "}
              <span className="text-[#60A5FA]">full 2-month warranty</span>
            </h2>
            <p className="text-[#94A3B8] text-base leading-relaxed mb-8">
              We stand behind every pallet jack we sell. &quot;Refurbished&quot; means
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

          {/* ── RIGHT — Image + stat cards ── */}
          <div className="flex flex-col gap-4">

            {/* Hero image with overlay badge */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={warrantyPic}
                alt="2-month warranty badge with warranty document and pen"
                className="w-full object-cover"
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Dark gradient at the bottom so the badge is readable */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,18,40,0.85) 0%, rgba(10,18,40,0.10) 55%, transparent 100%)",
                }}
                aria-hidden="true"
              />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div
                  className="flex items-center gap-3 rounded-xl px-4 py-3 backdrop-blur-md"
                  style={{
                    background: "rgba(15,23,42,0.75)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.4)",
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-white text-sm font-semibold leading-tight"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      Included on Every Unit
                    </p>
                    <p className="text-[#94A3B8] text-xs mt-0.5">
                      No extra cost. No fine print.
                    </p>
                  </div>
                  <span
                    className="flex-shrink-0 flex items-center gap-1 text-[#22C55E] text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(34,197,94,0.15)",
                      border: "1px solid rgba(34,197,94,0.35)",
                    }}
                  >
                    <BadgeCheck size={13} aria-hidden="true" />
                    FREE
                  </span>
                </div>
              </div>
            </div>

            {/* Two stat mini-cards */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "2", label: "Month Coverage", accent: "#3B82F6" },
                { value: "100%", label: "Units Tested", accent: "#22C55E" },
              ].map(({ value, label, accent }) => (
                <div
                  key={label}
                  className="rounded-xl px-4 py-4 text-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
                  }}
                >
                  <p
                    className="font-900 leading-none mb-1"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      color: accent,
                    }}
                  >
                    {value}
                  </p>
                  <p className="text-[#94A3B8] text-xs font-medium tracking-wide uppercase">
                    {label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
