import { Phone, MessageSquare, MapPin, Shield, Truck, Tag } from "lucide-react";
import Link from "next/link";
import styles from "./FinalCTA.module.css";

const TRUST_PILLS = [
  { icon: Shield, text: "2-Month Warranty" },
  { icon: Tag,    text: "40–60% Below Retail" },
  { icon: Truck,  text: "Delivery Available" },
];

const PAYMENT_METHODS = ["Cash", "Credit Card", "Zelle", "CashApp", "Venmo"];

export default function FinalCTA() {
  return (
    <section
      className={`${styles.section} relative overflow-hidden section-padding`}
      aria-labelledby="final-cta-heading"
    >
      {/* Radial glow behind the content */}
      <div
        className={styles.radialGlow}
        aria-hidden="true"
      />
      {/* Subtle diagonal texture */}
      <div
        className={styles.diagonalTexture}
        aria-hidden="true"
      />
      {/* Top accent line */}
      <div
        className={styles.topAccent}
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="max-w-2xl mx-auto text-center">

          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2.5 mb-6">
            <span className={styles.eyebrowLine} aria-hidden="true" />
            <span className={`${styles.eyebrowText} text-xs font-700 uppercase`}>
              Ready to Buy
            </span>
            <span className={styles.eyebrowLine} aria-hidden="true" />
          </div>

          {/* Headline */}
          <h2
            id="final-cta-heading"
            className={`${styles.heading} text-4xl sm:text-5xl font-900 text-white tracking-tight mb-5`}
          >
            Your next pallet jack
            <br />
            <span className={styles.headingAccent}>is ready today.</span>
          </h2>

          <p className={`${styles.subtext} text-lg leading-relaxed mb-8 max-w-lg mx-auto`}>
            28 pickup locations nationwide. Professionally refurbished.
            2-month warranty included on every unit.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
            {TRUST_PILLS.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className={`${styles.trustPill} flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full`}
              >
                <Icon size={13} className={styles.trustPillIcon} aria-hidden="true" />
                {text}
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            <a
              href="tel:+12622541835"
              className={`${styles.callCta} inline-flex items-center gap-2.5 text-white font-700 text-base px-8 py-4 rounded-xl shadow-lg shadow-orange-900/30`}
            >
              <Phone size={18} aria-hidden="true" />
              Call Now
            </a>
            <a
              href="sms:+12622541835"
              className={`${styles.textCta} inline-flex items-center gap-2.5 text-white font-600 text-base px-8 py-4 rounded-xl border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all`}
            >
              <MessageSquare size={18} aria-hidden="true" />
              Text Us
            </a>
          </div>

          {/* Find a location link */}
          <Link
            href="/locations"
            className={`${styles.locationLink} inline-flex items-center gap-1.5 text-sm font-medium mb-10`}
          >
            <MapPin size={14} aria-hidden="true" />
            Find a pickup location near you
          </Link>

          {/* Divider */}
          <div className={`${styles.divider} pt-8`}>
            <p className={`${styles.paymentsLabel} text-xs uppercase tracking-widest mb-3 font-medium`}>
              Accepted payments
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {PAYMENT_METHODS.map((m) => (
                <span
                  key={m}
                  className={`${styles.paymentPill} text-xs px-3 py-1 rounded-md`}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
