import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  ShieldCheck,
  Wrench,
  MapPin,
  TrendingUp,
  Star,
  Phone,
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "About Buy Pallet Jacks – Trusted Refurbished Equipment Nationwide",
  description:
    "Learn about Buy Pallet Jacks — our mission, our refurbishment process, and why thousands of businesses trust us for reliable, affordable pallet handling equipment.",
  path: "/about",
});

const STATS = [
  { value: "26+", label: "Pickup locations" },
  { value: "1-Year", label: "Warranty on every unit" },
  { value: "100s", label: "Units in stock" },
  { value: "5★", label: "Average customer rating" },
];

const PROCESS_STEPS = [
  {
    icon: Wrench,
    title: "Complete Disassembly",
    description:
      "Every pallet jack is fully disassembled so we can inspect and replace worn seals, hydraulic fluid, and mechanical components.",
  },
  {
    icon: ShieldCheck,
    title: "Hydraulic Testing",
    description:
      "Each unit is load-tested at full capacity to verify the hydraulic system holds pressure and lifts smoothly to spec.",
  },
  {
    icon: Star,
    title: "Repaint & Detail",
    description:
      "After mechanical approval, every unit is stripped to bare metal, primed, and powder-coated or painted to a like-new finish.",
  },
  {
    icon: TrendingUp,
    title: "Final Quality Check",
    description:
      "Our QC team performs a full operational test — wheels, forks, handle, pump, and release valve — before we put a 1-year warranty sticker on it.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-graphite text-white section-padding-sm">
        <div className="container-site">
          <div className="max-w-3xl">
            <p className="section-eyebrow mb-4">About Us</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Reliable pallet jacks at a fraction of new-equipment cost
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed">
              Buy Pallet Jacks was built to solve a simple problem: businesses
              need dependable material handling equipment, but new pallet jacks
              are expensive and new-equipment lead times can stretch for weeks.
              We fix that.
            </p>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="bg-brand-blue text-white">
        <div className="container-site py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-extrabold">
                  {stat.value}
                </p>
                <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-eyebrow mb-3">Our Mission</p>
              <h2 className="text-3xl font-extrabold text-graphite mb-5">
                Give every business access to equipment that works
              </h2>
              <div className="space-y-4 text-steel leading-relaxed">
                <p>
                  We believe small and mid-size warehouses, distribution
                  centers, and retail operations deserve the same quality
                  equipment as Fortune 500 companies — without the Fortune 500
                  price tag.
                </p>
                <p>
                  Our nationwide network of 26 pickup locations means you can
                  usually find a unit within driving distance. No waiting for
                  freight, no huge shipping bills, no surprises.
                </p>
                <p>
                  Every pallet jack we sell is covered by our{" "}
                  <strong className="text-graphite">1-year warranty</strong> —
                  not because we have to, but because we stand behind our
                  refurbishment process.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: MapPin,
                  label: "26 States",
                  sub: "Pickup locations nationwide",
                },
                {
                  icon: ShieldCheck,
                  label: "1-Year Warranty",
                  sub: "On all units, no exceptions",
                },
                {
                  icon: Wrench,
                  label: "Pro Refurb",
                  sub: "Full disassembly & rebuild",
                },
                {
                  icon: TrendingUp,
                  label: "Same-Day",
                  sub: "Pick up the day you buy",
                },
              ].map((card) => (
                <div key={card.label} className="card-base p-5">
                  <card.icon className="w-8 h-8 text-brand-blue mb-3" />
                  <p className="font-bold text-graphite">{card.label}</p>
                  <p className="text-xs text-steel mt-1">{card.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What "Refurbished" means */}
      <section className="section-padding bg-slate-50">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-eyebrow mb-3">Our Process</p>
            <h2 className="text-3xl font-extrabold text-graphite mb-4">
              What &ldquo;Refurbished&rdquo; actually means to us
            </h2>
            <p className="text-steel max-w-2xl mx-auto">
              We don&apos;t just clean and relist. Every unit goes through a
              4-stage rebuild process before it leaves our facility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.title} className="card-base p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <span className="text-3xl font-black text-brand-blue/20 leading-none">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-bold text-graphite mb-2">{step.title}</h3>
                <p className="text-sm text-steel leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-padding bg-graphite text-white">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold mb-4">
              Ready to find a location near you?
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              With 26 locations across the country and same-day pickup
              available, there&apos;s never been an easier way to get quality
              material handling equipment for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/locations" className="btn-primary">
                <MapPin className="w-5 h-5" />
                Find a Location
              </Link>
              <a href="tel:+18005555555" className="btn-secondary">
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
