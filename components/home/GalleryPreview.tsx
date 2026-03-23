import Image from "next/image";
import altraImg from "@/public/altra.webp";
import crownImg from "@/public/crown.webp";
import heroImg from "@/public/heroImg.png";

const GALLERY_ITEMS = [
  { src: altraImg,  alt: "Refurbished Altra pallet jack — front view",           span: "md:col-span-2 md:row-span-2" },
  { src: crownImg,  alt: "Refurbished Crown pallet jack — side profile",          span: "" },
  { src: heroImg,   alt: "Pallet jacks ready for pickup at warehouse location",   span: "" },
  { src: crownImg,  alt: "Crown pallet jack hydraulic pump detail",               span: "" },
  { src: altraImg,  alt: "Altra pallet jack load wheels after rebuild",            span: "" },
];

export default function GalleryPreview() {
  return (
    <section
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="gallery-preview-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="section-eyebrow">Gallery</span>
          <h2
            id="gallery-preview-heading"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-4xl md:text-5xl font-900 text-[#0F172A] mb-4"
          >
            See the quality{" "}
            <span className="text-[#1D4ED8]">up close.</span>
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-base leading-relaxed">
            Every unit is fully disassembled, repainted, and resealed before it ships. Here's what professionally refurbished looks like.
          </p>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 md:gap-4 max-w-5xl mx-auto auto-rows-[220px]">
          {GALLERY_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden bg-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow duration-300 ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Subtle bottom gradient for depth */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(15,23,42,0.25) 0%, transparent 50%)" }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
