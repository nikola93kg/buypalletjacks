import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  ShieldCheck,
  Wrench,
  MapPin,
  TrendingUp,
  Phone,
  CheckCircle,
  Clock,
  BadgeCheck,
  Truck,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Buy Pallet Jacks – Trusted Refurbished Equipment Nationwide",
  description:
    "Learn about Buy Pallet Jacks — our mission, our refurbishment process, and why thousands of businesses trust us for reliable, affordable pallet handling equipment.",
  path: "/about",
});

const STATS = [
  { value: "26", label: "Pickup Locations", accent: false },
  { value: "19", label: "States Covered", accent: false },
  { value: "1-Year", label: "Warranty Included", accent: true },
  { value: "5★", label: "Customer Rating", accent: false },
];

const TRUST_PILLARS = [
  {
    icon: BadgeCheck,
    title: "1-Year Written Warranty",
    description:
      "Every unit ships with a 1-year warranty — in writing, no fine print. If it fails under normal use, we fix or replace it.",
  },
  {
    icon: Wrench,
    title: "Full Mechanical Rebuild",
    description:
      "We disassemble every pallet jack, replace seals and hydraulic fluid, load-test at capacity, and repaint to a like-new finish.",
  },
  {
    icon: Truck,
    title: "Same-Day Pickup",
    description:
      "Buy online, pick up the same day from one of 26 locations nationwide. No freight delays, no surprise shipping costs.",
  },
  {
    icon: Clock,
    title: "In-Stock & Ready",
    description:
      "We maintain live inventory across all 26 locations. What you see is what's physically on the floor — ready to go today.",
  },
];

const PROCESS_STEPS = [
  {
    icon: Wrench,
    number: "01",
    title: "Complete Disassembly",
    description:
      "Every pallet jack is fully disassembled so we can inspect and replace worn seals, hydraulic fluid, and mechanical components.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Hydraulic Testing",
    description:
      "Each unit is load-tested at full capacity to verify the hydraulic system holds pressure and lifts smoothly to spec.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Repaint & Detail",
    description:
      "After mechanical approval, every unit is stripped to bare metal, primed, and powder-coated or painted to a like-new finish.",
  },
  {
    icon: BadgeCheck,
    number: "04",
    title: "Final Quality Check",
    description:
      "Our QC team performs a full operational test — wheels, forks, handle, pump, and release valve — before the 1-year warranty sticker goes on.",
  },
];

const DIFFERENTIATORS = [
  "Full mechanical rebuild — not just a clean and repaint",
  "1-year warranty on every single unit",
  "26 pickup locations across 19 states",
  "Same-day pickup available at all locations",
  "Live inventory — no waitlists, no backorders",
  "Fraction of new-equipment cost",
];

export default function AboutPage() {
  return (
    <>
      {/* ── Stats bar ─────────────────────────────────────────── */}
      {/* <section className="bg-brand-navy text-white">
        <div className="container-site py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center px-6 py-2">
                <p
                  className={`text-4xl md:text-5xl font-extrabold leading-none ${
                    stat.accent ? "text-brand-orange" : "text-white"
                  }`}
                >
                  {stat.value}
                </p>
                <p className="text-blue-300 text-sm font-medium mt-2 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── Mission ───────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-eyebrow mb-4">About Us</p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-graphite mb-6 leading-tight">
                Give every business access to equipment that works
              </h1>
              <div className="space-y-5 text-[#475569] leading-relaxed text-[1.0625rem]">
                <p>
                  Small and mid-size operations spend too much time chasing
                  down equipment that actually works. New pallet jacks carry
                  steep price tags and lead times that can stretch for weeks.
                  Used equipment is often a gamble with no warranty and no
                  support.
                </p>
                <p>
                  We took a different approach: source commercial-grade units,
                  rebuild them from scratch, and back them with a real warranty.
                  Then we put them within driving distance of you — not behind a
                  freight quote.
                </p>
              </div>

              {/* Warranty badge */}
              <div className="mt-8 inline-flex items-center gap-4 bg-[#F0FDF4] border border-[#86EFAC] rounded-xl px-5 py-4">
                <ShieldCheck className="w-8 h-8 text-[#16A34A] flex-shrink-0" />
                <div>
                  <p className="font-bold text-[#15803D] text-sm">
                    1-Year Warranty — Included on Every Unit
                  </p>
                  <p className="text-[#166534] text-xs mt-0.5">
                    Written guarantee. No fine print. No exceptions.
                  </p>
                </div>
              </div>
            </div>

            {/* Differentiators list */}
            <div className="bg-[#F8FAFC] border border-border rounded-2xl p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-6">
                What sets us apart
              </p>
              <ul className="space-y-4">
                {DIFFERENTIATORS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#16A34A] flex-shrink-0 mt-0.5" />
                    <span className="text-graphite font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust pillars ─────────────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="section-eyebrow mb-3">Why Customers Trust Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-graphite mb-4">
              Built around the things that matter
            </h2>
            <p className="text-steel text-lg max-w-xl mx-auto">
              We designed every part of our business to eliminate the risks that
              come with buying used industrial equipment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-brand-blue hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <pillar.icon className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-graphite mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-steel leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="text-center mb-14">
            <p className="section-eyebrow mb-3">Our Process</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-graphite mb-4">
              What &ldquo;Refurbished&rdquo; actually means to us
            </h2>
            <p className="text-steel text-lg max-w-2xl mx-auto">
              We don&apos;t clean and relist. Every unit goes through a 4-stage
              rebuild before it leaves our facility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.title}
                className="relative bg-[#F8FAFC] border border-border rounded-2xl p-6 overflow-hidden"
              >
                {/* Large background number */}
                <span
                  className="absolute top-4 right-4 text-7xl font-black text-brand-blue/[0.07] leading-none select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
                <div className="w-11 h-11 rounded-xl bg-brand-blue flex items-center justify-center mb-5 flex-shrink-0">
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-1">
                  Step {step.number}
                </p>
                <h3 className="font-bold text-graphite text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-steel leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="section-padding bg-brand-navy text-white">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <ShieldCheck className="w-12 h-12 text-brand-orange mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to pick up today?
            </h2>
            <p className="text-blue-300 mb-10 text-lg leading-relaxed">
              26 locations, same-day pickup, 1-year warranty included. Find the
              location nearest you and drive away with a fully rebuilt pallet
              jack today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/locations" className="btn-primary">
                <MapPin className="w-5 h-5" />
                Find a Location
              </Link>
              <a href="tel:+12622541835" className="btn-secondary">
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
