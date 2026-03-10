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
} from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Contact Buy Pallet Jacks – Call or Text for Availability",
  description:
    "Get in touch with Buy Pallet Jacks. Call or text to check inventory at your nearest location. We respond fast — usually within minutes during business hours.",
  path: "/contact",
});

const HOURS = [
  { day: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
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

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-graphite text-white section-padding-sm">
        <div className="container-site text-center">
          <p className="section-eyebrow mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            We&apos;re here to help
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Call or text us to check availability at your nearest location. We
            typically respond within minutes during business hours.
          </p>
        </div>
      </section>

      {/* Main CTAs */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Call CTA */}
            <a
              href="tel:+18005555555"
              className="group flex flex-col items-center text-center p-10 rounded-2xl bg-brand-blue text-white shadow-lg hover:bg-brand-navy transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <Phone className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-extrabold mb-2">Call Us</h2>
              <p className="text-blue-100 mb-4 text-sm">
                Speak with someone immediately — fastest way to check inventory
              </p>
              <span className="text-2xl font-black tracking-wide">
                +1 (800) 555-5555
              </span>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold bg-white/20 px-4 py-2 rounded-xl">
                Tap to Call <ChevronRight className="w-4 h-4" />
              </span>
            </a>

            {/* Text CTA */}
            <a
              href="sms:+18005555555"
              className="group flex flex-col items-center text-center p-10 rounded-2xl bg-cta-orange text-white shadow-lg hover:bg-orange-600 transition-colors"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-extrabold mb-2">Text Us</h2>
              <p className="text-orange-100 mb-4 text-sm">
                Prefer texting? Send us your state and we&apos;ll reply with
                nearest location + photos
              </p>
              <span className="text-2xl font-black tracking-wide">
                +1 (800) 555-5555
              </span>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold bg-white/20 px-4 py-2 rounded-xl">
                Tap to Text <ChevronRight className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Info grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-site">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Hours */}
            <div className="card-base p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="font-bold text-graphite">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {HOURS.map((row) => (
                  <div
                    key={row.day}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-steel">{row.day}</span>
                    <span
                      className={`font-semibold ${
                        row.hours === "Closed"
                          ? "text-red-500"
                          : "text-graphite"
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
            <div className="card-base p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="font-bold text-graphite">Find a Location</h3>
              </div>
              <p className="text-sm text-steel mb-5 leading-relaxed">
                We have 26 pickup locations across the USA. Use our interactive
                map to find the nearest one and get directions.
              </p>
              <Link
                href="/locations"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-brand-blue px-4 py-2.5 rounded-xl hover:bg-brand-navy transition-colors"
              >
                <MapPin className="w-4 h-4" />
                View All Locations
              </Link>
            </div>

            {/* Payment methods */}
            <div className="card-base p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="font-bold text-graphite">Payment Methods</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {PAYMENT_METHODS.map((method) => (
                  <span
                    key={method}
                    className="text-xs bg-slate-100 text-graphite font-medium px-3 py-1.5 rounded-lg border border-border"
                  >
                    {method}
                  </span>
                ))}
              </div>
              <p className="text-xs text-steel mt-4">
                Payment collected at pickup. No deposits required to reserve.
              </p>
            </div>
          </div>

          {/* FAQ teaser */}
          <div className="mt-10 rounded-2xl bg-white border border-border p-8 text-center">
            <h2 className="text-xl font-extrabold text-graphite mb-2">
              Have a question not listed here?
            </h2>
            <p className="text-steel text-sm mb-5">
              Check our FAQ for answers to common questions about warranty,
              delivery, bulk pricing, and more.
            </p>
            <Link
              href="/#faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:underline"
            >
              View FAQ <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
