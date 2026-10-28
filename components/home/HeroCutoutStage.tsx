"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, MapPin, ChevronRight, Shield, Truck, Tag, Info } from "lucide-react";
import { useRef } from "react";
import { LOCATION_COUNT } from "@/lib/locations";
import newHeroImg from "@/public/new-hero.png";
import altraCutout from "@/public/altra-hero-cutout.png";
import crownCutout from "@/public/crown-hero-cutout.png";
import styles from "./HeroCutoutStage.module.css";

export default function HeroCutoutStage() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${styles.heroSection}`}
      aria-labelledby="hero-heading"
    >
      {/* ── Background: Photographic warehouse with Depth-of-Field Blur (Option 1) ── */}
      <div
        className={`hero-bg-wrapper absolute inset-0 pointer-events-none select-none ${styles.bgWrapper}`}
        aria-hidden="true"
      >
        <Image
          src={newHeroImg}
          alt="Modern warehouse distribution center"
          fill
          priority
          quality={90}
          className={`object-cover object-center ${styles.bgDofBlur}`}
          sizes="100vw"
        />
      </div>

      {/* Mobile overlay */}
      <div
        className={`absolute inset-0 pointer-events-none sm:hidden ${styles.mobileOverlay}`}
        aria-hidden="true"
      />
      {/* Desktop overlay — soft horizontal fade for text legibility */}
      <div
        className={`absolute inset-0 pointer-events-none hidden sm:block ${styles.desktopOverlay}`}
        aria-hidden="true"
      />

      {/* Top gradient band */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 z-10 ${styles.topAccent}`}
        aria-hidden="true"
      />

      {/* ── ANIMATED PALLET JACK STAGE (Altra & Crown) ── */}
      <div
        className={`absolute inset-0 pointer-events-none select-none overflow-hidden ${styles.productStage}`}
        aria-hidden="true"
      >
        <div className={styles.stageInner}>
          {/* Altra Pallet Jack (Midground / Stagger 1 — center-right) */}
          <div className={styles.altraWrapper}>
            <div className={styles.altraInner}>
              <svg
                className={styles.groundShadow}
                viewBox="0 0 1122 1402"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <filter id="altraContactBlur" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="2.5" />
                  </filter>
                  <filter id="altraAmbientBlur" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="9" />
                  </filter>
                  <filter id="altraCastBlur" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="16" />
                  </filter>
                </defs>

                {/* 1. Directional Cast Shadow — soft warehouse sunlight from left door */}
                <g filter="url(#altraCastBlur)" opacity="0.38">
                  <path
                    d="M 180 990 L 405 875 L 480 955 L 1025 1242 L 1030 1270 L 685 1390 L 655 1365 L 320 1025 Z"
                    fill="#1e293b"
                  />
                  <ellipse cx="215" cy="1008" rx="68" ry="24" fill="#1e293b" />
                  <ellipse cx="685" cy="1375" rx="88" ry="25" fill="#1e293b" />
                  <ellipse cx="1020" cy="1252" rx="78" ry="23" fill="#1e293b" />
                </g>

                {/* 2. Ambient Undercarriage Occlusion */}
                <g filter="url(#altraAmbientBlur)" opacity="0.55">
                  <path
                    d="M 160 985 L 365 865 L 440 945 L 970 1230 L 975 1252 L 640 1365 L 620 1345 L 290 1015 Z"
                    fill="#0f172a"
                  />
                  <ellipse cx="190" cy="998" rx="64" ry="18" fill="#0f172a" />
                  <ellipse cx="645" cy="1360" rx="80" ry="19" fill="#0f172a" />
                  <ellipse cx="975" cy="1239" rx="72" ry="17" fill="#0f172a" />
                </g>

                {/* 3. Physical Wheel Contact Patches (steer wheel + load rollers) */}
                <g filter="url(#altraContactBlur)" opacity="0.94">
                  <ellipse cx="185" cy="995" rx="48" ry="12" fill="#020617" />
                  <ellipse cx="640" cy="1358" rx="62" ry="13" fill="#020617" />
                  <ellipse cx="970" cy="1237" rx="56" ry="12" fill="#020617" />
                </g>
              </svg>
              <Image
                src={altraCutout}
                alt="Altra heavy-duty pallet jack"
                priority
                quality={95}
                className={`${styles.palletJackImg} ${styles.altraImg}`}
                sizes="(max-width: 640px) 44vw, (max-width: 1024px) 28vw, 420px"
              />
            </div>
          </div>

          {/* Crown Pallet Jack (Foreground / Stagger 2 — far-right) */}
          <div className={styles.crownWrapper}>
            <div className={styles.crownInner}>
              <svg
                className={styles.groundShadow}
                viewBox="0 0 1122 1402"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <filter id="crownContactBlur" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="2.5" />
                  </filter>
                  <filter id="crownAmbientBlur" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="9" />
                  </filter>
                  <filter id="crownCastBlur" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="16" />
                  </filter>
                </defs>

                {/* 1. Directional Cast Shadow — soft warehouse sunlight from left door */}
                <g filter="url(#crownCastBlur)" opacity="0.42">
                  <path
                    d="M 155 985 L 420 880 L 500 960 L 1100 1262 L 1105 1290 L 745 1420 L 710 1395 L 320 1025 Z"
                    fill="#1e293b"
                  />
                  <ellipse cx="195" cy="1005" rx="72" ry="24" fill="#1e293b" />
                  <ellipse cx="745" cy="1405" rx="92" ry="26" fill="#1e293b" />
                  <ellipse cx="1095" cy="1272" rx="84" ry="24" fill="#1e293b" />
                </g>

                {/* 2. Ambient Undercarriage Occlusion */}
                <g filter="url(#crownAmbientBlur)" opacity="0.62">
                  <path
                    d="M 140 980 L 380 870 L 460 950 L 1045 1250 L 1050 1272 L 695 1395 L 675 1375 L 290 1010 Z"
                    fill="#0f172a"
                  />
                  <ellipse cx="160" cy="992" rx="62" ry="18" fill="#0f172a" />
                  <ellipse cx="700" cy="1390" rx="84" ry="20" fill="#0f172a" />
                  <ellipse cx="1050" cy="1258" rx="76" ry="18" fill="#0f172a" />
                </g>

                {/* 3. Physical Wheel Contact Patches (steer wheel + load rollers) */}
                <g filter="url(#crownContactBlur)" opacity="0.95">
                  <ellipse cx="155" cy="990" rx="46" ry="12" fill="#020617" />
                  <ellipse cx="695" cy="1388" rx="66" ry="13" fill="#020617" />
                  <ellipse cx="1045" cy="1256" rx="58" ry="12" fill="#020617" />
                </g>
              </svg>
              <Image
                src={crownCutout}
                alt="Crown precision pallet jack"
                priority
                quality={95}
                className={`${styles.palletJackImg} ${styles.crownImg}`}
                sizes="(max-width: 640px) 46vw, (max-width: 1024px) 32vw, 480px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div className="container-site relative z-10">
        <div className="grid gap-6 sm:gap-10 xl:gap-16 items-start pt-6 pb-4 sm:py-14 md:py-18 lg:py-22">
          <div className="hero-left-column max-w-2xl">

            {/* Headline */}
            <h1
              id="hero-heading"
              className={`font-900 leading-[0.93] mt-2 tracking-tight mb-4 text-center sm:text-left ${styles.heroHeading}`}
            >
              Heavy-duty pallet jacks
              <br />
              <span className={styles.heroHeadingAccent}>Skip the new price</span>
              <br />
              Get to work!
            </h1>

            <p className={styles.heroLead} style={{ color: "var(--color-brand-blue)" }}>
              Shop refurbished and used pallet jacks for sale with{" "}
              {LOCATION_COUNT} pickup locations, same-day availability, and a
              2-month warranty.
            </p>

            {/* Save up to */}
            <div className="flex flex-col items-center sm:items-start mb-1">
              <p className={`text-slate-600 text-base font-semibold leading-tight mb-0 ${styles.saveUpToText}`}>
                Save up to
              </p>
              <div className="flex items-start gap-2">
                <span
                  className={`font-900 leading-none tracking-tight ${styles.discountText}`}
                >
                  40-60% OFF
                </span>
                <div className="group relative mt-2">
                  <Info size={17} className="text-slate-500 hover:text-slate-700 cursor-default mt-1" />
                  <div className="pointer-events-none absolute left-6 top-0 w-52 bg-slate-900 border border-white/10 text-slate-100 text-xs rounded-lg px-3 py-2 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 leading-snug">
                    Save up to 40% vs. buying new. Based on average retail price of comparable brand-new pallet jacks.
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges — full cards on desktop */}
            <div className="mb-5">
              {/* Desktop / Tablet: full cards */}
              <div className="hidden sm:flex flex-row flex-wrap gap-[10px] items-start max-w-[430px] lg:max-w-none">
                {[
                  { icon: Shield, title: "2-Month Warranty", accent: 'var(--color-trust-blue)' },
                  { icon: Tag, title: "Multi-Unit Discounts", accent: 'var(--color-brand-orange)' },
                  { icon: Truck, title: "Delivery Available", accent: 'var(--color-trust-green)' },
                ].map(({ icon: Icon, title, accent }) => (
                  <div
                    key={title}
                    className={`relative flex items-center gap-3 rounded-2xl px-4 py-3 overflow-hidden backdrop-blur-sm w-[200px] ${styles.trustCard}`}
                    style={{ '--badge-accent': accent } as React.CSSProperties}
                  >
                    <span
                      className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${styles.trustIcon}`}
                    >
                      <Icon size={22} strokeWidth={2.4} aria-hidden="true" />
                    </span>
                    <p className={`text-base md:text-lg font-semibold leading-tight ${styles.trustTitle}`}>
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mb-4">
              <a href="tel:+12622541835" className="btn-primary text-base px-7 py-3.5">
                <Phone size={17} />
                Call to Order
              </a>
              <a href="sms:+12622541835" className="btn-secondary btn-secondary-hero text-base px-7 py-3.5">
                <MessageSquare size={17} />
                Text Us
              </a>
            </div>

            {/* Payment + locations */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-x-4 sm:gap-y-1">
              {/* Desktop: original muted text */}
              <p className={`hidden sm:block ${styles.paymentText}`}>
                Cash · Card · Zelle · CashApp · Venmo
              </p>
              {/* Mobile: pill for locations */}
              <Link
                href="/locations"
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-md font-semibold sm:hidden ${styles.mobileLocationPill}`}
              >
                <MapPin size={13} />
                View all locations
                <ChevronRight size={13} />
              </Link>
              {/* Desktop: original link */}
              <Link
                href="/locations"
                className={`hidden sm:flex items-center gap-2 transition-colors text-base font-bold flex-shrink-0 ml-3 ${styles.desktopLocationLink}`}
              >
                <MapPin size={16} />
                View all locations
                <ChevronRight size={16} />
              </Link>
            </div>

            {/* Mobile spacer — pushes section tall enough to see PJs below content */}
            <div className={`sm:hidden ${styles.mobileSpacer}`} />

          </div>
        </div>
      </div>
    </section>
  );
}
