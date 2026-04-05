import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  CreditCard,
  ChevronRight,
  Zap,
  ShieldCheck,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = buildMetadata({
  title: "Contact Buy Pallet Jacks – Call or Text for Availability",
  description:
    "Get in touch with Buy Pallet Jacks. Call or text to check inventory at your nearest location. We respond fast — usually within minutes during business hours.",
  path: "/contact",
});

const HOURS = [
  { day: "Monday – Friday", hours: "7:00 AM – 6:00 PM", open: true },
  { day: "Saturday", hours: "8:00 AM – 4:00 PM", open: true },
  { day: "Sunday", hours: "Closed", open: false },
];

const PAYMENT_METHODS = [
  "Visa",
  "Mastercard",
  "American Express",
  "Discover",
  "Cash",
  "Business Check",
  "ACH / Wire Transfer",
];

const TRUST_ITEMS = [
  {
    icon: Zap,
    label: "Responds within minutes",
    sub: "During business hours",
  },
  {
    icon: ShieldCheck,
    label: "No deposit to reserve",
    sub: "Pay at pickup only",
  },
  {
    icon: MapPin,
    label: "26 pickup locations",
    sub: "Across 19 states",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Main content ─────────────────────────────────────── */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-site">

          {/* Page header */}
          <div className="mb-10">
            <p className="section-eyebrow mb-3">Contact Us</p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-graphite mb-4 leading-tight">
              We&apos;re a call or text away
            </h1>
            <p className="text-steel text-lg leading-relaxed max-w-2xl mb-6">
              Skip the form — call or text us directly to check inventory, get
              photos, or schedule a same-day pickup at the location nearest you.
            </p>
            <div className="flex flex-wrap gap-5">
              {TRUST_ITEMS.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white border border-border flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-graphite leading-tight">
                      {item.label}
                    </p>
                    <p className="text-xs text-steel">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_400px] gap-8 items-stretch">

            {/* Left — contact action cards */}
            <div className="flex flex-col gap-5 h-full">
              {/* Call card */}
              <a
                href="tel:+12622541835"
                className="group relative bg-brand-blue rounded-2xl p-8 flex items-center gap-6 overflow-hidden hover:bg-brand-navy transition-colors duration-200 cursor-pointer"
                aria-label="Call Buy Pallet Jacks"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 80% 50%, #ffffff, transparent 60%)" }}
                  aria-hidden="true"
                />
                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">
                    Call Us — Fastest Response
                  </p>
                  <p className="text-white text-3xl font-extrabold tracking-tight leading-none">
                    (262) 254-1835
                  </p>
                  <p className="text-blue-200 text-sm mt-2">
                    Speak with someone immediately. Check inventory, get
                    directions, ask anything.
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-white/40 group-hover:text-white/80 transition-colors flex-shrink-0 hidden sm:block" />
              </a>

              {/* Text card */}
              <a
                href="sms:+12622541835"
                className="group relative bg-brand-orange rounded-2xl p-8 flex items-center gap-6 overflow-hidden hover:bg-brand-orange-hover transition-colors duration-200 cursor-pointer"
                aria-label="Text Buy Pallet Jacks"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-200 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 80% 50%, #ffffff, transparent 60%)" }}
                  aria-hidden="true"
                />
                <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-orange-100 text-xs font-bold uppercase tracking-widest mb-1">
                    Text Us — Get Photos &amp; Details
                  </p>
                  <p className="text-white text-3xl font-extrabold tracking-tight leading-none">
                    (262) 254-1835
                  </p>
                  <p className="text-orange-100 text-sm mt-2">
                    Send your state — we&apos;ll reply with the nearest
                    location, stock photos, and pricing.
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-white/40 group-hover:text-white/80 transition-colors flex-shrink-0 hidden sm:block" />
              </a>

              {/* Contact form */}
              <div className="flex-1 flex flex-col min-h-0">
                <ContactForm className="h-full" />
              </div>
            </div>

            {/* Right — info panel */}
            <div className="flex flex-col gap-5">
              {/* Business hours */}
              <div className="bg-white border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h2 className="font-bold text-graphite">Business Hours</h2>
                </div>
                <div className="space-y-3">
                  {HOURS.map((row) => (
                    <div
                      key={row.day}
                      className="flex items-center justify-between text-sm py-2 border-b border-border last:border-0 last:pb-0"
                    >
                      <span className="text-[#475569]">{row.day}</span>
                      <span
                        className={`font-semibold tabular-nums ${
                          row.open ? "text-graphite" : "text-red-500"
                        }`}
                      >
                        {row.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-steel mt-4 pt-4 border-t border-border">
                  All times are local to each pickup location.
                </p>
              </div>

              {/* Find a location */}
              <div className="bg-brand-navy text-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <h2 className="font-bold text-white">Find a Location</h2>
                </div>
                <p className="text-sm text-blue-200 mb-5 leading-relaxed">
                  26 pickup locations across 19 states. Use the interactive
                  map to find the one nearest you and get directions.
                </p>
                <Link
                  href="/locations"
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors duration-200 cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  View All Locations
                </Link>
              </div>

              {/* Payment methods */}
              <div className="bg-white border border-border rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h2 className="font-bold text-graphite">Payment Methods</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {PAYMENT_METHODS.map((method) => (
                    <span
                      key={method}
                      className="text-xs bg-[#F1F5F9] text-graphite font-medium px-3 py-1.5 rounded-lg border border-border"
                    >
                      {method}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-steel mt-4 pt-4 border-t border-border">
                  Payment collected at pickup. No deposits required.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ teaser */}
          <div className="mt-8 bg-white border border-border rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-graphite text-lg">
                Have a question not answered here?
              </p>
              <p className="text-[#475569] text-sm mt-1">
                Check our FAQ — warranty, bulk pricing, delivery, and more.
              </p>
            </div>
            <Link
              href="/#faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-navy px-5 py-2.5 rounded-xl transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              View FAQ
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
