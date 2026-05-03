"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Phone, Menu, X, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/public/logo.webp";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/locations", label: "Locations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm p-1">

      <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-[4.5rem]">
          {/* Logo + Desktop nav — left-aligned together */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded"
              aria-label="Buy Pallet Jacks — Home"
            >
              <Image
                src={logoImg}
                alt="Buy Pallet Jacks logo"
                className={cn("h-16 w-auto", styles.logoBlend)}
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden ml-3 md:flex items-center gap-1 uppercase" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-150",
                    pathname === link.href
                      ? styles.navLinkActive
                      : styles.navLinkDefault
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/locations"
              className={cn("flex items-center gap-1.5 text-sm font-medium transition-colors", styles.locationLink)}
            >
              <MapPin size={15} />
              28 Locations
            </Link>
            <a
              href="tel:+12622541835"
              className="btn-primary text-sm py-2.5 px-5"
            >
              <Phone size={15} />
              (262) 254-1835
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className={cn("md:hidden p-2 rounded-md transition-colors", styles.mobileMenuBtn)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      

      {/* Mobile menu — fullscreen overlay */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 z-40 bg-white flex flex-col"
        >
          {/* Header row inside overlay */}
          <div className={cn("flex items-center justify-between px-4 h-[4.5rem] border-b flex-shrink-0", styles.mobileHeaderBorder)}>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2"
              aria-label="Buy Pallet Jacks — Home"
            >
              <Image
                src={logoImg}
                alt="Buy Pallet Jacks logo"
                className={cn("h-14 w-auto", styles.logoBlend)}
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className={cn("p-2 rounded-md transition-colors", styles.mobileMenuBtn)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col justify-center px-6 gap-2" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-5 py-4 rounded-xl text-xl font-semibold transition-colors",
                  pathname === link.href
                    ? styles.mobileNavLinkActive
                    : styles.mobileNavLinkDefault
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom CTA */}
          <div className="px-6 pb-8 flex flex-col gap-3 flex-shrink-0">
            <a href="tel:+12622541835" className="btn-primary justify-center py-4 text-lg">
              <Phone size={18} />
              (262) 254-1835
            </a>
            <a href="sms:+12622541835" className="btn-outline justify-center py-4 text-lg">
              Text Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
