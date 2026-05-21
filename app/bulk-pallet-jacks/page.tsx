import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MapPin, MessageSquare, Phone, Warehouse } from "lucide-react";
import {
  BASE_URL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_E164,
  buildBreadcrumbJsonLd,
  buildMetadata,
  buildOfferCatalogJsonLd,
} from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";

const BULK_BUYER_REASONS = [
  "Warehouse expansions and fleet replacements",
  "Repeat buying for multi-site operations",
  "Lower cost than new equipment without sacrificing readiness",
];

export const metadata: Metadata = buildMetadata({
  title: "Bulk Pallet Jack Orders for Warehouses and Commercial Buyers",
  description:
    "Need multiple pallet jacks? Call or text Buy Pallet Jacks for warehouse orders, repeat buying, and bulk pricing on professionally refurbished units.",
  path: "/bulk-pallet-jacks",
});

export default function BulkPalletJacksPage() {
  return (
    <>
      <JsonLd
        id="bulk-breadcrumb-jsonld"
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Bulk Pallet Jacks", path: "/bulk-pallet-jacks" },
        ])}
      />
      <JsonLd
        id="bulk-offers-jsonld"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          url: `${BASE_URL}/bulk-pallet-jacks`,
          name: "Bulk Pallet Jack Orders",
          hasOfferCatalog: buildOfferCatalogJsonLd(
            "Bulk Refurbished Pallet Jacks",
            "Multi-unit refurbished pallet jack orders for warehouses, repeat commercial buyers, and fleet replacement needs.",
          ),
        }}
      />

      <section className="section-padding bg-white">
        <div className="container-site max-w-5xl">
          <span className="section-eyebrow">Commercial Buying</span>
          <h1 className="text-4xl font-900 text-graphite md:text-5xl">
            Bulk pallet jacks for warehouses and commercial buyers
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-steel">
            Buy multiple refurbished pallet jacks for warehouse use, repeat orders, or fleet replacement.
            We help you confirm nearby pickup availability, compare options, and move quickly on quantity pricing.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {BULK_BUYER_REASONS.map((reason) => (
              <div key={reason} className="rounded-2xl border border-border bg-[#F8FAFC] p-5 shadow-sm">
                <CheckCircle2 className="h-5 w-5 text-brand-blue" aria-hidden="true" />
                <p className="mt-3 text-sm font-600 text-graphite">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-site max-w-5xl">
          <div className="grid gap-8 rounded-[2rem] border border-border bg-white p-8 shadow-[0_18px_60px_rgba(15,23,42,0.08)] md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-700 uppercase tracking-[0.18em] text-brand-blue">
                <Warehouse className="h-4 w-4" aria-hidden="true" />
                Bulk Sales Support
              </div>
              <h2 className="mt-5 text-3xl font-800 text-graphite md:text-4xl">
                Tell us quantity, timing, and your nearest market.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-steel">
                Call or text for current multi-unit availability, pickup guidance, and quote turnaround.
                If you are ordering for multiple sites, we can point you to the best nearby pickup markets first.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${BUSINESS_PHONE_E164}`} className="btn-primary px-6 py-3 text-sm">
                  <Phone size={16} />
                  Call {BUSINESS_PHONE_DISPLAY}
                </a>
                <a href={`sms:${BUSINESS_PHONE_E164}`} className="btn-outline px-6 py-3 text-sm">
                  <MessageSquare size={16} />
                  Text for Bulk Pricing
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0F172A] p-6 text-white">
              <h3 className="text-xl font-700">What to include when you reach out</h3>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-200">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                  Your city or state so we can match you with the nearest pickup option.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                  Quantity needed now and whether you expect repeat buying.
                </li>
                <li className="flex gap-3">
                  <Warehouse className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-orange" aria-hidden="true" />
                  Any brand preference, timing requirement, or delivery question.
                </li>
              </ul>
              <div className="mt-6 border-t border-white/10 pt-6">
                <Link href="/locations" className="text-sm font-600 text-white underline underline-offset-4">
                  Browse pickup markets first
                </Link>
                <span className="mx-3 text-slate-500">•</span>
                <Link href="/contact" className="text-sm font-600 text-white underline underline-offset-4">
                  Use the contact form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
