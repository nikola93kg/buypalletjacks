import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  CreditCard,
  ChevronRight,
  Zap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import styles from "@/components/contact/contact.module.css";

export const metadata: Metadata = buildMetadata({
  title: "Contact Buy Pallet Jacks – Call or Text for Availability",
  description:
    "Get in touch with Buy Pallet Jacks. Call or text to check inventory at your nearest location. We respond fast — usually within minutes during business hours.",
  path: "/contact",
});

const HOURS = [
  { day: "Monday – Friday", hours: "7:00 AM – 6:00 PM", open: true },
  { day: "Saturday", hours: "8:00 AM – 4:00 PM", open: true },
  { day: "Sunday", hours: "Closed", open: false },
];

const PAYMENT_METHODS = [
  "Visa",
  "Mastercard",
  "American Express",
  "Discover",
  "Cash",
  "Business Check",
  "ACH / Wire Transfer",
];

const TRUST_ITEMS = [
  { icon: Zap, label: "Responds within minutes", sub: "During business hours" },
  { icon: ShieldCheck, label: "No deposit to reserve", sub: "Pay at pickup only" },
  { icon: MapPin, label: "26 locations · 19 states", sub: "Same-day pickup available" },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Page header ─────────────────────────────────────── */}
      <section className={styles.pageHeader} aria-labelledby="contact-heading">
        <div className="container-site">
          <div className="flex flex-col items-center sm:items-start">
            <p className={styles.pageEyebrow}>Contact Us</p>
          </div>
          <h1 id="contact-heading" className={styles.pageHeadline}>
            We&apos;re a{" "}
            <span className={styles.headlineAccent}>call or text away</span>
          </h1>
          <p className={styles.pageSubline}>
            Call or text us directly to check stock, get photos, and schedule
            a same-day pickup at the location nearest you.
          </p>
          <div className={styles.trustRow} role="list">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className={styles.trustPill} role="listitem">
                <span className={styles.trustPillIcon} aria-hidden="true">
                  <item.icon />
                </span>
                <span className={styles.trustPillText}>
                  {item.label}
                  <span className={styles.trustPillSub}>{item.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body ────────────────────────────────────────────── */}
      <section className={styles.bodySection}>
        <div className="container-site">
          <div className={styles.mainGrid}>

            {/* Left column */}
            <div className={styles.leftCol}>

              {/* Call + Text cards */}
              <div className={styles.ctaCards}>
                <a
                  href="tel:+12622541835"
                  className={styles.callCard}
                  aria-label="Call Buy Pallet Jacks at (262) 254-1835"
                >
                  <span className={styles.cardGlow} aria-hidden="true" />
                  <span className={styles.cardIconWrap} aria-hidden="true">
                    <Phone />
                  </span>
                  <div>
                    <p className={styles.cardEyebrow}>Fastest Response</p>
                    <p className={styles.cardTitle}>Call Us</p>
                    <p className={styles.cardPhone}>(262) 254-1835</p>
                    <p className={styles.cardDesc}>
                      Speak with someone now. Check inventory, get directions, or ask anything.
                    </p>
                  </div>
                  <span className={styles.cardCta}>
                    Tap to call <ArrowRight />
                  </span>
                </a>

                <a
                  href="sms:+12622541835"
                  className={styles.textCard}
                  aria-label="Text Buy Pallet Jacks at (262) 254-1835"
                >
                  <span className={styles.cardGlow} aria-hidden="true" />
                  <span className={styles.cardIconWrap} aria-hidden="true">
                    <MessageSquare />
                  </span>
                  <div>
                    <p className={styles.cardEyebrow}>Get Photos &amp; Details</p>
                    <p className={styles.cardTitle}>Text Us</p>
                    <p className={styles.cardPhone}>(262) 254-1835</p>
                    <p className={styles.cardDesc}>
                      Send your state — we&apos;ll reply with the nearest location, stock photos &amp; pricing.
                    </p>
                  </div>
                  <span className={styles.cardCta}>
                    Tap to text <ArrowRight />
                  </span>
                </a>
              </div>

              {/* Divider */}
              <div className={styles.orDivider} aria-hidden="true">
                <span className={styles.orDividerLine} />
                <span className={styles.orDividerLabel}>or send a message</span>
                <span className={styles.orDividerLine} />
              </div>

              {/* Contact form */}
              <ContactForm />
            </div>

            {/* Right sidebar */}
            <div className={styles.sidebar}>

              {/* Business hours */}
              <div className={styles.sideCard}>
                <div className={styles.sideCardHeader}>
                  <span className={styles.sideCardIconWrap} aria-hidden="true">
                    <Clock />
                  </span>
                  <h2 className={styles.sideCardTitle}>Business Hours</h2>
                </div>
                <div className={styles.sideCardBody}>
                  {HOURS.map((row) => (
                    <div key={row.day} className={styles.hoursRow}>
                      <span className={styles.hoursDay}>{row.day}</span>
                      <span className={row.open ? styles.hoursTime : styles.hoursClosed}>
                        {row.hours}
                      </span>
                    </div>
                  ))}
                  <p className={styles.hoursNote}>
                    All times are local to each pickup location.
                  </p>
                </div>
              </div>

              {/* Find a location */}
              <div className={styles.locationCard}>
                <span className={styles.locationCardGlow} aria-hidden="true" />
                <div className={styles.locationCardInner}>
                  <div className={styles.locationCardHead}>
                    <span className={styles.locationIconWrap} aria-hidden="true">
                      <MapPin />
                    </span>
                    <h2 className={styles.locationCardTitle}>Find a Location</h2>
                  </div>
                  <p className={styles.locationCardDesc}>
                    26 pickup locations across 19 states. Use the interactive map to find
                    the one nearest you and get directions.
                  </p>
                  <Link href="/locations" className={styles.locationCardBtn}>
                    <MapPin aria-hidden="true" />
                    View All Locations
                  </Link>
                </div>
              </div>

              {/* Payment methods */}
              <div className={styles.sideCard}>
                <div className={styles.sideCardHeader}>
                  <span className={styles.sideCardIconWrap} aria-hidden="true">
                    <CreditCard />
                  </span>
                  <h2 className={styles.sideCardTitle}>Payment Methods</h2>
                </div>
                <div className={styles.sideCardBody}>
                  <div className={styles.paymentTags}>
                    {PAYMENT_METHODS.map((method) => (
                      <span key={method} className={styles.paymentTag}>{method}</span>
                    ))}
                  </div>
                  <p className={styles.paymentNote}>
                    Payment collected at pickup. No deposits required.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ teaser */}
          <div className={styles.faqTeaser}>
            <div>
              <p className={styles.faqTeaserTitle}>Have a question not answered here?</p>
              <p className={styles.faqTeaserSub}>
                Warranty, bulk pricing, delivery options, and more — all in our FAQ.
              </p>
            </div>
            <Link href="/#faq" className={styles.faqTeaserBtn}>
              View FAQ
              <ChevronRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
