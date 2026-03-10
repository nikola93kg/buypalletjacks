"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Phone, Menu, X, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/public/logo-new.png";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/locations", label: "Locations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E2E8F0] shadow-sm">
      <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded"
            aria-label="Buy Pallet Jacks — Home"
          >
            <Image
              src={logoImg}
              alt="Buy Pallet Jacks logo"
              // height={36}
              // sizes="72px"
              className="h-13 w-auto"
              style={{ mixBlendMode: "multiply" }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150",
                  pathname === link.href
                    ? "text-[#1D4ED8] bg-[#DBEAFE]"
                    : "text-[#374151] hover:text-[#1D4ED8] hover:bg-[#F1F5F9]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/locations"
              className="flex items-center gap-1.5 text-sm font-medium text-[#64748B] hover:text-[#1D4ED8] transition-colors"
            >
              <MapPin size={15} />
              26 Locations
            </Link>
            <a
              href="tel:+18005555555"
              className="btn-primary text-sm py-2.5 px-5"
            >
              <Phone size={15} />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md text-[#374151] hover:bg-[#F1F5F9] transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[#E2E8F0] bg-white"
        >
          <nav className="container-site py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-md text-base font-medium transition-colors",
                  pathname === link.href
                    ? "text-[#1D4ED8] bg-[#DBEAFE]"
                    : "text-[#374151] hover:text-[#1D4ED8] hover:bg-[#F1F5F9]"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-[#E2E8F0] flex flex-col gap-2">
              <a href="tel:+18005555555" className="btn-primary justify-center">
                <Phone size={16} />
                Call Now
              </a>
              <a href="sms:+18005555555" className="btn-outline justify-center">
                Text Us
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
