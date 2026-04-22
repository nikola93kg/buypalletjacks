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
  ArrowRight,
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
  { icon: Zap, label: "Responds within minutes", sub: "During business hours" },
  { icon: ShieldCheck, label: "No deposit to reserve", sub: "Pay at pickup only" },
  { icon: MapPin, label: "26 locations · 19 states", sub: "Same-day pickup available" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Dark hero header ───────────────────────────────── */}
      <section className="bg-text pt-16 pb-14 md:pt-20 md:pb-16">
        <div className="container-site">
          <p className="text-brand-orange text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Contact Us
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.06] tracking-tight mb-5"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            We&apos;re a{" "}
            <span className="text-brand-blue">call or text</span>
            <br className="hidden sm:block" /> away
          </h1>
          <p className="text-steel text-lg leading-relaxed max-w-xl mb-10">
            Call or text to check stock, get photos, and schedule a same-day
            pickup at the location nearest you.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-x-8 gap-y-5 pt-8 border-t border-white/[0.07]">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] border border-white/[0.09] flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-brand-orange" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <section className="section-padding bg-bg">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">

            {/* Left — contact channels + form */}
            <div className="flex flex-col gap-6">

              {/* Call + Text cards */}
              <div className="grid sm:grid-cols-2 gap-4">

                {/* Call card */}
                <a
                  href="tel:+12622541835"
                  className="group relative bg-text rounded-2xl p-6 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:shadow-[0_16px_48px_rgba(15,23,42,0.28)] hover:-translate-y-0.5"
                  aria-label="Call Buy Pallet Jacks at (262) 254-1835"
                >
                  {/* Blue glow orb */}
                  <div
                    className="absolute top-0 right-0 w-52 h-52 -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(29,78,216,0.22) 0%, transparent 65%)" }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex flex-col gap-4 h-full">
                    <div className="w-12 h-12 rounded-xl bg-brand-blue/20 border border-brand-blue/25 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#60A5FA]" />
                    </div>
                    <div>
                      <p className="text-brand-blue text-[10px] font-bold uppercase tracking-[0.18em] mb-1.5">
                        Fastest Response
                      </p>
                      <p className="text-white text-2xl font-extrabold tracking-tight leading-none mb-3">
                        Call Us
                      </p>
                      <p className="text-[#CBD5E1] font-bold text-lg tabular-nums tracking-tight">
                        (262) 254-1835
                      </p>
                      <p className="text-muted text-xs mt-2.5 leading-relaxed">
                        Speak with someone now. Check inventory, get directions,
                        or ask anything.
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-hero-text-muted font-semibold group-hover:text-trust-blue transition-colors duration-200 mt-auto">
                      Tap to call
                      <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>

                {/* Text card */}
                <a
                  href="sms:+12622541835"
                  className="group relative bg-brand-orange rounded-2xl p-6 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:bg-brand-orange-hover hover:shadow-[0_16px_48px_rgba(249,115,22,0.35)] hover:-translate-y-0.5"
                  aria-label="Text Buy Pallet Jacks at (262) 254-1835"
                >
                  <div
                    className="absolute top-0 right-0 w-52 h-52 -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)" }}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 flex flex-col gap-4 h-full">
                    <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-orange-100 text-[10px] font-bold uppercase tracking-[0.18em] mb-1.5">
                        Get Photos &amp; Details
                      </p>
                      <p className="text-white text-2xl font-extrabold tracking-tight leading-none mb-3">
                        Text Us
                      </p>
                      <p className="text-white/90 font-bold text-lg tabular-nums tracking-tight">
                        (262) 254-1835
                      </p>
                      <p className="text-orange-100/75 text-xs mt-2.5 leading-relaxed">
                        Send your state — we&apos;ll reply with the nearest
                        location, stock photos &amp; pricing.
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-orange-100/75 font-semibold group-hover:text-white transition-colors duration-200 mt-auto">
                      Tap to text
                      <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </a>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-[10px] font-bold text-steel uppercase tracking-[0.18em]">
                  or send a message
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Contact form */}
              <ContactForm />
            </div>

            {/* Right — info sidebar */}
            <div className="flex flex-col gap-5 lg:sticky lg:top-24">

              {/* Business hours */}
              <div className="bg-white border border-border rounded-2xl overflow-hidden">
                <div className="px-6 pt-5 pb-4 border-b border-border flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-brand-blue" aria-hidden="true" />
                  </div>
                  <h2 className="font-bold text-graphite text-sm">Business Hours</h2>
                </div>
                <div className="px-6 py-4">
                  {HOURS.map((row, i) => (
                    <div
                      key={row.day}
                      className={`flex items-center justify-between text-sm py-3 ${
                        i < HOURS.length - 1 ? "border-b border-border" : ""
                      }`}
                    >
                      <span className="text-hero-text-muted">{row.day}</span>
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
                <div className="px-6 pb-5">
                  <p className="text-xs text-steel pt-3 border-t border-border">
                    All times are local to each pickup location.
                  </p>
                </div>
              </div>

              {/* Find a location */}
              <div className="relative bg-text text-white rounded-2xl p-6 overflow-hidden">
                {/* Orange glow — bottom right */}
                <div
                  className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(249,115,22,0.22) 0%, transparent 65%)" }}
                  aria-hidden="true"
                />
                {/* Blue glow — top left */}
                <div
                  className="absolute -top-8 -left-8 w-36 h-36 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(29,78,216,0.18) 0%, transparent 65%)" }}
                  aria-hidden="true"
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.07] border border-white/[0.1] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-brand-orange" aria-hidden="true" />
                    </div>
                    <h2 className="font-bold text-white text-sm">Find a Location</h2>
                  </div>
                  <p className="text-sm text-steel mb-5 leading-relaxed">
                    26 pickup locations across 19 states. Use the interactive
                    map to find the one nearest you and get directions.
                  </p>
                  <Link
                    href="/locations"
                    className="group inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)]"
                  >
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    View All Locations
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              {/* Payment methods */}
              <div className="bg-white border border-border rounded-2xl overflow-hidden">
                <div className="px-6 pt-5 pb-4 border-b border-border flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-4 h-4 text-brand-blue" aria-hidden="true" />
                  </div>
                  <h2 className="font-bold text-graphite text-sm">Payment Methods</h2>
                </div>
                <div className="px-6 py-5">
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
          </div>

          {/* ── FAQ teaser ────────────────────────────────────── */}
          <div className="mt-10 bg-white border border-border rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="font-bold text-graphite text-lg leading-tight">
                Have a question not answered here?
              </p>
              <p className="text-steel text-sm mt-1">
                Warranty, bulk pricing, delivery options, and more — all in our FAQ.
              </p>
            </div>
            <Link
              href="/#faq"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-navy px-6 py-3 rounded-xl transition-colors duration-200 whitespace-nowrap flex-shrink-0"
            >
              View FAQ
              <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
