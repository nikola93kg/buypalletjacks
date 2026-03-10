import { CheckCircle2 } from "lucide-react";

const REASONS = [
  {
    stat: "40–60%",
    title: "Less Than Buying New",
    desc: "Get the same lifting capacity and warehouse-grade reliability at a fraction of the retail price. Our units are priced for businesses that understand value.",
  },
  {
    stat: "Same Day",
    title: "Pick Up — No Backorders",
    desc: "New equipment can take weeks to arrive. Our inventory is on-hand at 26 locations across the USA. Call, confirm, and pick up the same day.",
  },
  {
    stat: "100%",
    title: "Rebuilt, Not Just Cleaned",
    desc: "Every unit is disassembled, serviced, repainted, and sealed by experienced technicians. You're not buying a dirty used jack — you're buying a rebuilt one.",
  },
];

const COMPARISON = [
  { feature: "Price vs new", us: "40–60% less", them: "Full retail price" },
  { feature: "Availability", us: "Same day pickup", them: "Weeks of lead time" },
  { feature: "Condition", us: "Rebuilt & sealed", them: "Factory new" },
  { feature: "Warranty", us: "2-month included", them: "Manufacturer warranty" },
  { feature: "Pickup options", us: "26 locations nationwide", them: "Dealer or freight only" },
];

export default function WhyRefurbished() {
  return (
    <section
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="why-refurbished-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-eyebrow">Why Refurbished?</span>
          <h2
            id="why-refurbished-heading"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-5xl font-900 text-[#0F172A] mb-4"
          >
            Smart buyers choose refurbished.{" "}
            <span className="text-[#1D4ED8]">Here&apos;s why.</span>
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-base leading-relaxed">
            New isn&apos;t always better — especially when the alternative is
            professionally rebuilt equipment at half the price, available today.
          </p>
        </div>

        {/* Stat callout rows */}
        <div className="border border-[#CBD5E1] overflow-hidden mb-14">
          {REASONS.map(({ stat, title, desc }, i) => (
            <div
              key={title}
              className={`flex flex-col sm:flex-row items-start sm:items-center bg-white ${
                i > 0 ? "border-t border-[#CBD5E1]" : ""
              }`}
            >
              {/* Stat column */}
              <div className="flex-shrink-0 w-full sm:w-44 px-8 py-7 sm:py-8 bg-[#F8FAFC] border-b sm:border-b-0 sm:border-r border-[#CBD5E1]">
                <span
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-3xl sm:text-4xl font-900 text-[#1D4ED8] leading-none"
                >
                  {stat}
                </span>
              </div>
              {/* Content */}
              <div className="flex-1 px-8 py-7 sm:py-8">
                <h3
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-sm font-800 text-[#0F172A] mb-1.5 uppercase tracking-widest"
                >
                  {title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="max-w-2xl mx-auto overflow-hidden border border-[#CBD5E1]">
          {/* Table header */}
          <div
            className="grid grid-cols-3 bg-[#0F172A] text-sm font-semibold"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <div className="p-4 text-[#64748B]">Feature</div>
            <div className="p-4 text-center bg-[#1D4ED8] text-white">
              Buy Pallet Jacks
            </div>
            <div className="p-4 text-center text-[#64748B]">Buying New</div>
          </div>

          {/* Rows */}
          {COMPARISON.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 text-sm border-t border-[#E2E8F0] ${
                i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"
              }`}
            >
              <div className="p-4 font-medium text-[#374151]">{row.feature}</div>
              <div className="p-4 text-center bg-[#EFF6FF] flex items-center justify-center gap-1.5 font-semibold text-[#1D4ED8]">
                <CheckCircle2
                  size={14}
                  className="text-[#22C55E] flex-shrink-0"
                  aria-hidden="true"
                />
                {row.us}
              </div>
              <div className="p-4 text-center text-[#64748B]">{row.them}</div>
            </div>
          ))}
        </div>

        {/* Bottom punchline */}
        <p className="text-center mt-8 text-[#64748B] text-sm italic max-w-lg mx-auto">
          &ldquo;The only downside of refurbished? You won&apos;t overpay for equipment
          that just moves boxes.&rdquo;
        </p>
      </div>
    </section>
  );
}
