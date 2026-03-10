import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Placeholder gallery items — replace src with real images
const GALLERY_ITEMS = [
  {
    src: "/gallery/pallet-jack-1.jpg",
    alt: "Refurbished pallet jack — painted and sealed, ready for warehouse use",
    label: "Ready to Go",
  },
  {
    src: "/gallery/pallet-jack-2.jpg",
    alt: "Industrial blue pallet jack — professionally refurbished",
    label: "Professionally Refurbished",
  },
  {
    src: "/gallery/pallet-jack-3.jpg",
    alt: "Pallet jack close-up — high quality repaint and seal",
    label: "Quality Finish",
  },
  {
    src: "/gallery/pallet-jack-4.jpg",
    alt: "Multiple pallet jacks ready for pickup — storage facility",
    label: "Ready Inventory",
  },
  {
    src: "/gallery/pallet-jack-5.jpg",
    alt: "Pallet jack being loaded for delivery",
    label: "Delivery Available",
  },
  {
    src: "/gallery/pallet-jack-6.jpg",
    alt: "Warehouse pallet jack in action",
    label: "Warehouse Ready",
  },
];

export default function GalleryPreview() {
  return (
    <section
      className="section-padding bg-[#F1F5F9]"
      aria-labelledby="gallery-preview-heading"
    >
      <div className="container-site">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="section-eyebrow">Gallery</span>
            <h2
              id="gallery-preview-heading"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-3xl md:text-4xl font-800 text-[#0F172A]"
            >
              See the quality for yourself
            </h2>
          </div>
          <Link
            href="/gallery"
            className="flex items-center gap-1.5 text-[#1D4ED8] font-medium text-sm hover:gap-2.5 transition-all"
          >
            View full gallery
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-xl overflow-hidden bg-[#CBD5E1] group"
            >
              {/* Placeholder colored div — replace with next/image when real photos available */}
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, #1E3A8A ${10 + i * 5}%, #1D4ED8 100%)`,
                }}
              >
                <div className="text-center px-4">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-lg bg-white/10 flex items-center justify-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="2" y="7" width="20" height="3" rx="1" />
                      <path d="M4 10v7a1 1 0 001 1h2a1 1 0 001-1v-7" />
                      <path d="M16 10v7a1 1 0 001 1h2a1 1 0 001-1v-7" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-xs font-medium">
                    {item.label}
                  </p>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#0F172A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                <span className="text-white text-xs font-medium">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-6 text-[#64748B] text-sm">
          Want to see current inventory?{" "}
          <a
            href="tel:+18005555555"
            className="text-[#1D4ED8] font-medium hover:underline"
          >
            Call or text us
          </a>{" "}
          and we&apos;ll send photos of what&apos;s available at your nearest location.
        </p>
      </div>
    </section>
  );
}
