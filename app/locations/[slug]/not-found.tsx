import Link from "next/link";
import { ChevronLeft, Phone } from "lucide-react";
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_E164,
} from "@/lib/seo";

export default function LocationNotFound() {
  return (
    <section className="section-padding bg-white">
      <div className="container-site max-w-3xl">
        <div className="rounded-[2rem] border border-border bg-[#F8FAFC] p-8 text-center shadow-sm md:p-12">
          <span className="section-eyebrow">Location Not Found</span>
          <h1 className="mt-4 text-4xl font-900 text-graphite md:text-5xl">
            We couldn&apos;t find that pickup page.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-steel">
            Head back to the locations hub to browse all active markets, or call
            us now and we&apos;ll help you find the nearest pickup option.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/locations" className="btn-primary px-6 py-3 text-sm">
              <ChevronLeft size={16} />
              Back to Locations
            </Link>
            <a
              href={`tel:${BUSINESS_PHONE_E164}`}
              className="btn-outline px-6 py-3 text-sm"
            >
              <Phone size={16} />
              Call {BUSINESS_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
