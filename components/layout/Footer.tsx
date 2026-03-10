import Link from "next/link";
import { Phone, MessageSquare, MapPin } from "lucide-react";

const FOOTER_LINKS = [
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/gallery", label: "Gallery" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { href: "/locations", label: "Find a Location" },
      { href: "/#warranty", label: "2-Month Warranty" },
      { href: "/#delivery", label: "Delivery Available" },
      { href: "/#bulk", label: "Bulk Discounts" },
    ],
  },
  {
    heading: "Get Help",
    links: [
      { href: "tel:+18005555555", label: "Call Us" },
      { href: "sms:+18005555555", label: "Text Us" },
      { href: "/#faq", label: "FAQ" },
      { href: "/contact", label: "Contact Page" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      {/* CTA band */}
      <div className="bg-[#1D4ED8] py-12">
        <div className="container-site text-center">
          <p
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-2xl md:text-3xl font-bold text-white mb-3"
          >
            Ready to pick up your pallet jack?
          </p>
          <p className="text-blue-200 mb-6 text-base max-w-xl mx-auto">
            26+ pickup locations nationwide. Call or text to confirm availability and schedule your pickup today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+18005555555"
              className="btn-primary"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href="sms:+18005555555"
              className="btn-secondary"
            >
              <MessageSquare size={16} />
              Text Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-site py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              style={{ fontFamily: "'Outfit', sans-serif" }}
              className="text-2xl font-bold text-white mb-4 inline-block"
            >
              Buy<span className="text-blue-400">Pallet</span>Jacks
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
              Professionally refurbished pallet jacks sold nationwide. Every unit is painted, sealed, and backed by a full 2-month warranty.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
              <MapPin size={14} className="text-blue-400 flex-shrink-0" />
              26 locations across the USA
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Phone size={14} className="text-blue-400 flex-shrink-0" />
              <a href="tel:+18005555555" className="hover:text-white transition-colors">
                (800) 555-5555
              </a>
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h3
                style={{ fontFamily: "'Outfit', sans-serif" }}
                className="text-sm font-600 text-white uppercase tracking-wider mb-4"
              >
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} BuyPalletJacks. All rights reserved.</p>
          <p>Payment: Cash · Credit Card · Zelle · CashApp · Receipts available</p>
        </div>
      </div>
    </footer>
  );
}
