import { Truck, PackageCheck, DollarSign } from "lucide-react";

export default function DeliveryBulk() {
  return (
    <section
      id="delivery"
      className="section-padding bg-white"
      aria-labelledby="delivery-heading"
    >
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="section-eyebrow">Delivery &amp; Bulk</span>
          <h2
            id="delivery-heading"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl md:text-4xl font-800 text-[#0F172A] mb-4"
          >
            Need more than one?{" "}
            <span className="text-[#1D4ED8]">We&apos;ve got you covered</span>
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-base">
            Whether you&apos;re outfitting a small warehouse or buying for a fleet,
            our multi-unit discounts and delivery options are designed for businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Delivery card */}
          <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] border border-[#BFDBFE] rounded-2xl p-7 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#1D4ED8] flex items-center justify-center">
              <Truck size={24} className="text-white" aria-hidden="true" />
            </div>
            <div>
              <h3
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-xl font-700 text-[#0F172A] mb-2"
              >
                Delivery Available
              </h3>
              <p className="text-[#475569] text-sm leading-relaxed">
                For select quantities and locations, we can bring the units
                directly to you. Call to discuss availability and pricing.
              </p>
            </div>
            <a href="tel:+18005555555" className="btn-outline text-sm mt-auto">
              Ask About Delivery
            </a>
          </div>

          {/* Bulk discount card */}
          <div className="bg-gradient-to-br from-[#FFF7ED] to-[#FED7AA] border border-[#FED7AA] rounded-2xl p-7 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#F97316] flex items-center justify-center">
              <DollarSign size={24} className="text-white" aria-hidden="true" />
            </div>
            <div>
              <h3
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-xl font-700 text-[#0F172A] mb-2"
              >
                Multi-Unit Discounts
              </h3>
              <p className="text-[#78350F] text-sm leading-relaxed">
                Buying 3 or more units? Pricing gets better the more you buy.
                Discounts vary by brand, quantity, and location. Ask us.
              </p>
            </div>
            <a
              href="sms:+18005555555"
              className="inline-flex items-center justify-center gap-2 bg-[#F97316] text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#EA6F0E] transition-colors mt-auto"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Text for a Quote
            </a>
          </div>

          {/* Pricing info card */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-7 flex flex-col gap-5">
            <div className="w-12 h-12 rounded-xl bg-[#1E293B] flex items-center justify-center">
              <PackageCheck size={24} className="text-white" aria-hidden="true" />
            </div>
            <div>
              <h3
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-xl font-700 text-[#0F172A] mb-2"
              >
                Pricing by Brand &amp; Condition
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed">
                Pricing varies by brand, model, and quantity. All units are
                professionally refurbished — you get warehouse-grade quality without
                the new-equipment price.
              </p>
            </div>
            <a href="/contact" className="btn-outline text-sm mt-auto">
              Get a Price Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
