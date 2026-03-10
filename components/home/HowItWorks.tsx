import { Phone } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Call or Text Us",
    desc: "Reach out to confirm what's available in your area. We'll match you with the nearest location and answer any questions about brand, capacity, or condition.",
  },
  {
    step: "02",
    title: "Find Your Location",
    desc: "We'll give you the exact address of the nearest storage facility. Most are accessible 7 days a week during extended hours — no appointment required.",
  },
  {
    step: "03",
    title: "Pick Up & Go",
    desc: "Pay on pickup with Cash, Card, Zelle, or CashApp. Load it in your vehicle and you're done. Your pallet jack is ready to work from day one.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="section-padding bg-[#F1F5F9]"
      aria-labelledby="how-heading"
    >
      <div className="container-site">
        <div className="text-center mb-14">
          <span className="section-eyebrow">The Process</span>
          <h2
            id="how-heading"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-5xl font-900 text-[#0F172A]"
          >
            3 steps to warehouse-ready
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden border border-[#CBD5E1]">
          {STEPS.map(({ step, title, desc }, i) => (
            <div
              key={step}
              className={`relative overflow-hidden bg-white p-8 md:p-10 ${
                i > 0 ? "border-t md:border-t-0 md:border-l border-[#CBD5E1]" : ""
              }`}
            >
              {/* Giant watermark step number */}
              <span
                aria-hidden="true"
                style={{ fontFamily: "'Outfit', sans-serif", color: "#EEF2F7" }}
                className="absolute -bottom-6 -right-3 text-[8rem] font-900 leading-none select-none pointer-events-none"
              >
                {step}
              </span>

              {/* Orange accent bar */}
              <div className="w-10 h-[3px] bg-[#F97316] mb-7 relative z-10" />

              {/* Step label */}
              <p
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-[0.6875rem] font-700 uppercase tracking-[0.18em] text-[#F97316] mb-3 relative z-10"
              >
                Step {step}
              </p>

              {/* Title */}
              <h3
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-2xl font-800 text-[#0F172A] mb-4 leading-tight relative z-10"
              >
                {title}
              </h3>

              {/* Description */}
              <p className="text-[#475569] text-sm leading-relaxed relative z-10">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="tel:+18005555555" className="btn-primary text-base px-8 py-3.5">
            <Phone size={17} />
            Start with a Call
          </a>
        </div>
      </div>
    </section>
  );
}
