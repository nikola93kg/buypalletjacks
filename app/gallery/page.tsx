import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Phone } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Pallet Jack Photo Gallery – See Our Refurbished Inventory",
  description:
    "Browse photos of our refurbished pallet jacks. All units are professionally cleaned, repainted, and tested before sale. 1-year warranty included.",
  path: "/gallery",
});

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Standard 5,500 lb Pallet Jack",
    category: "Walkie",
    alt: "Refurbished standard 5500 lb walkie pallet jack – blue and black finish",
  },
  {
    id: 2,
    title: "Heavy-Duty 8,000 lb Pallet Jack",
    category: "Heavy Duty",
    alt: "Heavy duty 8000 lb refurbished pallet jack – industrial grade",
  },
  {
    id: 3,
    title: "Narrow Aisle Pallet Jack",
    category: "Narrow Aisle",
    alt: "Narrow aisle refurbished pallet jack for tight warehouse spaces",
  },
  {
    id: 4,
    title: "Electric Walkie Rider",
    category: "Electric",
    alt: "Electric walkie rider pallet jack – refurbished and tested",
  },
  {
    id: 5,
    title: "Low Profile Pallet Jack",
    category: "Low Profile",
    alt: "Low profile pallet jack for low-clearance pallets – refurbished",
  },
  {
    id: 6,
    title: "Scale Pallet Jack",
    category: "Scale",
    alt: "Scale-equipped pallet jack – refurbished with working digital scale",
  },
  {
    id: 7,
    title: "Stainless Steel Pallet Jack",
    category: "Stainless",
    alt: "Stainless steel pallet jack for food-grade environments – refurbished",
  },
  {
    id: 8,
    title: "Rough Terrain Pallet Jack",
    category: "Rough Terrain",
    alt: "Rough terrain pallet jack for outdoor use – refurbished",
  },
  {
    id: 9,
    title: "High Lift Pallet Jack",
    category: "High Lift",
    alt: "High lift pallet jack – refurbished with full lift range",
  },
  {
    id: 10,
    title: "Drum Handler Pallet Jack",
    category: "Specialty",
    alt: "Drum handler attachment on refurbished pallet jack",
  },
  {
    id: 11,
    title: "Extended Fork Pallet Jack",
    category: "Extended Fork",
    alt: "Extended fork pallet jack for oversized pallets – refurbished",
  },
  {
    id: 12,
    title: "Tandem Pallet Jack",
    category: "Tandem",
    alt: "Tandem pallet jack for double-pallet loads – refurbished",
  },
];

const CATEGORIES = [
  "All",
  "Walkie",
  "Heavy Duty",
  "Electric",
  "Narrow Aisle",
  "Low Profile",
  "Stainless",
  "Specialty",
];

export default function GalleryPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-graphite text-white section-padding-sm">
        <div className="container-site text-center">
          <p className="section-eyebrow mb-3">Photo Gallery</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Refurbished Inventory
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Every unit is professionally cleaned, repainted, and tested before
            leaving our facility. What you see is what you get — ready to work
            on day one.
          </p>
        </div>
      </section>

      {/* Category filter strip (static labels only — filtering requires JS) */}
      <div className="sticky top-16 z-30 bg-white border-b border-border shadow-sm">
        <div className="container-site py-3 flex gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => (
            <span
              key={cat}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-default ${
                cat === "All"
                  ? "bg-brand-blue text-white border-brand-blue"
                  : "bg-white text-graphite border-border hover:border-brand-blue hover:text-brand-blue"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      {/* Gallery grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.id}
                className="group card-base overflow-hidden cursor-pointer"
              >
                {/* Placeholder image tile */}
                <div className="aspect-square bg-gradient-to-br from-brand-blue/20 via-brand-navy/30 to-brand-blue/10 flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Simulated product silhouette */}
                  <div className="w-24 h-16 bg-brand-blue/40 rounded-sm transform -rotate-2 group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute bottom-3 left-3 bg-white/90 text-xs font-semibold text-brand-blue px-2 py-1 rounded">
                    {item.category}
                  </div>
                  {/* Replace with actual <Image> once photos are available */}
                  <span className="sr-only">{item.alt}</span>
                </div>
                <div className="p-3">
                  <p className="text-sm font-semibold text-graphite leading-tight">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo request CTA */}
          <div className="mt-16 rounded-2xl bg-brand-blue text-white p-8 text-center">
            <h2 className="text-2xl font-extrabold mb-3">
              Need photos of a specific unit?
            </h2>
            <p className="text-blue-100 mb-6 max-w-lg mx-auto">
              Call or text us and we&apos;ll send photos of available inventory
              at your nearest location — usually within minutes.
            </p>
            <a
              href="tel:+18005555555"
              className="inline-flex items-center gap-2 bg-white text-brand-blue font-bold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call for Photos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
