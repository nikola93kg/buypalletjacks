const STATS = [
  { stat: "26+", label: "Pickup Locations" },
  { stat: "2-Mo", label: "Warranty Included" },
  { stat: "40–60%", label: "Below Retail Price" },
];

const SPECS = [
  {
    title: "Professionally Refurbished",
    desc: "Every unit is fully disassembled, inspected, repaired, repainted, and sealed by experienced technicians — not just cleaned and relisted.",
  },
  {
    title: "2-Month Warranty",
    desc: "All pallet jacks come with a full 2-month mechanical warranty. Extended coverage available. Receipts provided on request.",
  },
  {
    title: "26+ Pickup Locations",
    desc: "Self-storage facilities in major metro areas. Find your nearest spot, confirm availability, and pick up same day.",
  },
  {
    title: "Delivery Available",
    desc: "Need it brought to you? Delivery is available for select quantities and locations. Ask when you call or text.",
  },
  {
    title: "Flexible Payment",
    desc: "Cash, Credit Card, Zelle, and CashApp. Pay at pickup. No accounts, no financing — just a straightforward transaction.",
  },
  {
    title: "Ready Now — No Backorders",
    desc: "Stock is on-hand at all locations. Call or text to confirm, then pick up on your schedule. No lead times, no waiting.",
  },
];

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-heading">
      {/* Stats band */}
      <div className="bg-[#0F172A]">
        <div className="container-site py-10 md:py-12">
          <div className="grid grid-cols-3">
            {STATS.map(({ stat, label }, i) => (
              <div
                key={label}
                className={`text-center py-2 ${
                  i > 0 ? "border-l border-[#1E3A8A]" : ""
                }`}
              >
                <p
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  className="text-3xl sm:text-5xl font-900 text-white leading-none mb-2"
                >
                  {stat}
                </p>
                <p className="text-[#475569] text-[0.7rem] sm:text-xs uppercase tracking-widest leading-snug px-2">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spec rows */}
      <div className="bg-white section-padding">
        <div className="container-site">
          <div className="text-center mb-12">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2
              id="benefits-heading"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-4xl md:text-5xl font-900 text-[#0F172A]"
            >
              Built for business.{" "}
              <span className="text-[#1D4ED8]">Priced for value.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {SPECS.map(({ title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="w-[3px] self-stretch bg-[#F97316] flex-shrink-0" />
                <div>
                  <h3
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                    className="text-sm font-700 text-[#0F172A] mb-2 uppercase tracking-widest"
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
