import Link from "next/link";
import {
  ChevronRight,
  ExternalLink,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Warehouse,
} from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import type { LocationPage } from "@/lib/location-pages";
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_E164,
  buildBreadcrumbJsonLd,
} from "@/lib/seo";

const INTERNAL_LINKS = [
  {
    href: "/locations",
    label: "Browse all pickup markets",
    description: "Compare every city and state location before you drive.",
  },
  {
    href: "/bulk-pallet-jacks",
    label: "Need multiple pallet jacks?",
    description: "See the bulk order page for quantity quotes and repeat buying.",
  },
  {
    href: "/contact",
    label: "Ask a pickup question",
    description: "Use the contact page if you need photos, timing help, or a custom quote.",
  },
];

function hasUnitNumber(unitNumber?: string) {
  return Boolean(unitNumber && unitNumber !== "-");
}

export default function LocationLandingPage({ page }: { page: LocationPage }) {
  const unitLabel = hasUnitNumber(page.unitNumber)
    ? `Unit ${page.unitNumber}`
    : "Unit details provided when you call or text";
  const facilityLabel = page.facility ?? "Local pickup location";
  const pickupReference = hasUnitNumber(page.unitNumber)
    ? `Ask for ${unitLabel} when you arrive at ${facilityLabel} so the pickup handoff stays quick.`
    : `Call or text before arrival so we can share the exact pickup reference for ${facilityLabel}.`;

  return (
    <>
      <JsonLd
        id={`location-${page.slug}-breadcrumb-jsonld`}
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations" },
          {
            name: `${page.city}, ${page.stateCode}`,
            path: `/locations/${page.slug}`,
          },
        ])}
      />

      <section className="section-padding bg-white">
        <div className="container-site max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <span className="section-eyebrow">Local Pickup Page</span>
              <h1 className="mt-4 text-4xl font-900 text-graphite md:text-5xl">
                Refurbished pallet jacks in {page.city}, {page.stateCode}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-steel">
                {page.marketFocus}
              </p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-steel">
                {page.serviceArea}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${BUSINESS_PHONE_E164}`}
                  className="btn-primary px-6 py-3 text-sm"
                >
                  <Phone size={16} />
                  Call {BUSINESS_PHONE_DISPLAY}
                </a>
                <a
                  href={`sms:${BUSINESS_PHONE_E164}`}
                  className="btn-outline px-6 py-3 text-sm"
                >
                  <MessageSquare size={16} />
                  Text for Availability
                </a>
                <a
                  href={page.gmaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-6 py-3 text-sm"
                >
                  <MapPin size={16} />
                  Get Directions
                </a>
              </div>

              <div className="mt-10 rounded-[2rem] border border-border bg-[#F8FAFC] p-6 shadow-sm md:p-8">
                <div className="flex items-center gap-2 text-sm font-700 uppercase tracking-[0.18em] text-brand-blue">
                  <Warehouse className="h-4 w-4" aria-hidden="true" />
                  Facility Details
                </div>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs font-700 uppercase tracking-[0.18em] text-steel">
                      Pickup Market
                    </p>
                    <p className="mt-2 text-lg font-700 text-graphite">
                      {page.city}, {page.stateName}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-700 uppercase tracking-[0.18em] text-steel">
                      Facility
                    </p>
                    <p className="mt-2 text-lg font-700 text-graphite">
                      {facilityLabel}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-700 uppercase tracking-[0.18em] text-steel">
                      Unit / Pickup Reference
                    </p>
                    <p className="mt-2 text-base font-600 text-graphite">
                      {unitLabel}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-700 uppercase tracking-[0.18em] text-steel">
                      Directions
                    </p>
                    <a
                      href={page.gmaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-base font-600 text-brand-blue hover:text-brand-navy"
                    >
                      Open Google Maps
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <aside className="rounded-[2rem] bg-[#0F172A] p-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.24)]">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-700 uppercase tracking-[0.18em] text-slate-100">
                <ShieldCheck className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                Buying Notes
              </div>
              <h2 className="mt-5 text-2xl font-800">
                What to expect from this {page.city} pickup option
              </h2>
              <ul className="mt-6 space-y-4 text-sm leading-6 text-slate-200">
                <li>
                  Professionally refurbished pallet jacks with a full 2-month
                  warranty and ready-to-work 5,500 lb capacity.
                </li>
                <li>
                  {page.pickupTip}
                </li>
                <li>
                  Payment is handled at pickup. Call or text if you need to ask
                  about quantity, brand preference, or timing.
                </li>
              </ul>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm font-600 text-white">
                  Need this for a warehouse team or multi-site order?
                </p>
                <Link
                  href="/bulk-pallet-jacks"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-700 text-brand-orange hover:text-orange-300"
                >
                  Review bulk buying details
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-site max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] border border-border bg-white p-7 shadow-sm md:p-9">
              <span className="section-eyebrow">Pickup Planning</span>
              <h2 className="mt-4 text-3xl font-800 text-graphite">
                How {page.city}-area pickup works
              </h2>
              <p className="mt-5 text-base leading-7 text-steel">
                This {page.city}, {page.stateCode} page gives buyers a real
                pickup stop at {facilityLabel} instead of a generic market
                mention, which helps crews map the stop, confirm access, and
                keep loading plans on schedule.
              </p>
              <p className="mt-4 text-base leading-7 text-steel">
                {pickupReference} Save the facility name, unit reference, and
                map link before you leave so your driver can check in quickly
                and keep the {page.city} pickup on schedule.
              </p>
              <p className="mt-4 text-base leading-7 text-steel">
                Whether you are replacing a worn-out pallet jack or adding a
                backup unit for shipping and receiving, this page lets you
                compare this {page.city} pickup option with the wider locations
                hub before you drive.
              </p>
            </div>

            <div className="rounded-[2rem] border border-border bg-white p-7 shadow-sm md:p-9">
              <span className="section-eyebrow">Next Steps</span>
              <h2 className="mt-4 text-3xl font-800 text-graphite">
                Helpful links for {page.city}-area buyers
              </h2>
              <div className="mt-6 space-y-4">
                {INTERNAL_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-2xl border border-border bg-[#F8FAFC] p-5 transition-colors hover:border-brand-blue"
                  >
                    <p className="text-base font-700 text-graphite">
                      {link.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-steel">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
