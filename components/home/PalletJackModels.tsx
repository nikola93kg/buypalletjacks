import { CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import altraImg from "@/public/altra.webp";
import crownImg from "@/public/crown.webp";
import altraLogo from "@/public/altra-logo.png";
import crownLogo from "@/public/crown-logo.png";

const MODELS = [
  {
    brand: "Altra",
    img: altraImg,
    logo: altraLogo,
    tagline: "Built for the everyday warehouse.",
    description:
      "Altra pallet jacks are engineered for heavy-duty warehouse use — featuring durable steel frames, smooth hydraulics, and ease of operation. Ideal for loading docks, distribution centers, and daily warehouse floor work.",
    specs: [
      "5,500 lb lifting capacity",
      "Smooth single-speed hydraulic pump",
      "Durable steel fork frame",
      "Rebuilt fork seals & load wheels",
    ],
    accentColor: "#1D4ED8",
    accentBg: "#EFF6FF",
    accentBorder: "#BFDBFE",
    buttonClass:
      "border-[#1D4ED8] text-[#1D4ED8] hover:bg-[#1D4ED8] hover:text-white",
  },
  {
    brand: "Crown",
    img: crownImg,
    logo: crownLogo,
    tagline: "Precision-engineered for high-volume operations.",
    description:
      "Crown is one of the most trusted names in material handling. Their pallet jacks are known for precision engineering, long service life, and ergonomic design — a top choice in high-volume logistics and distribution centers.",
    specs: [
      "5,500 lb lifting capacity",
      "Ergonomic cushion-grip handle",
      "Precision hydraulic control system",
      "Rebuilt to manufacturer specifications",
    ],
    accentColor: "#F97316",
    accentBg: "#FFF7ED",
    accentBorder: "#FED7AA",
    buttonClass:
      "border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white",
  },
];

export default function PalletJackModels() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="models-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-eyebrow">Our Equipment</span>
          <h2
            id="models-heading"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-5xl font-900 text-[#0F172A] mb-4"
          >
            Two proven brands.{" "}
            <span className="text-[#1D4ED8]">Both rebuilt right.</span>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-base leading-relaxed">
            We carry <strong className="text-[#0F172A] font-600">Altra</strong>{" "}
            and <strong className="text-[#0F172A] font-600">Crown</strong> — two
            of the most reliable pallet jack brands in the industry. Every unit
            is fully disassembled, serviced, repainted, and sealed by
            experienced technicians before it reaches you.
          </p>
        </div>

        {/* Model cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {MODELS.map((model) => (
            <article
              key={model.brand}
              className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_10px_30px_-18px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(15,23,42,0.28)]"
            >
              <div className="relative border-b border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef4fb_100%)]">
                <div
                  className="absolute inset-x-0 top-0 h-1.5"
                  style={{ backgroundColor: model.accentColor }}
                />

                <div className="absolute left-4 top-4 z-10">
                  <div
                    className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-600 shadow-sm"
                    style={{
                      backgroundColor: model.accentBg,
                      border: `1px solid ${model.accentBorder}`,
                      color: model.accentColor,
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    <Image
                      src={model.logo}
                      alt={`${model.brand} logo`}
                      height={16}
                      className="h-4 w-auto object-contain"
                    />
                    <span>{model.brand}</span>
                  </div>
                </div>

                <div className="relative h-80 sm:h-[27rem] overflow-hidden">
                  <Image
                    src={model.img}
                    alt={`${model.brand} pallet jack`}
                    fill
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="p-6 md:p-7">
                <h3
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-2xl font-800 text-[#0F172A] mb-1"
                >
                  {model.brand} Pallet Jack
                </h3>
                <p className="text-[#64748B] text-sm font-500 mb-4">
                  {model.tagline}
                </p>
                <p className="text-[#475569] text-sm leading-relaxed mb-6">
                  {model.description}
                </p>

                {/* Spec list */}
                <ul className="space-y-2.5 mb-8">
                  {model.specs.map((spec) => (
                    <li key={spec} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: model.accentColor }}
                        aria-hidden="true"
                      />
                      <span className="text-[#334155] text-sm">{spec}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="tel:+12622541835"
                  className={`w-full check-availability flex items-center justify-center gap-2 font-600 text-sm px-5 py-2.5 rounded-lg border-2 transition-colors duration-200 cursor-pointer ${model.buttonClass}`}
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <Phone size={14} aria-hidden="true" />
                  Check {model.brand} Availability
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-[#64748B] text-sm mt-8">
          All units inspected, repainted, sealed, and backed by our{" "}
          <span className="text-[#0F172A] font-600">2-month warranty</span>.
        </p>
      </div>
    </section>
  );
}
