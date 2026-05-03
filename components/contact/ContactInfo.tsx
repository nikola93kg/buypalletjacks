import Link from "next/link";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  CreditCard,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import styles from "@/components/contact/contact.module.css";
import { ReactNode } from "react";

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

export default function ContactInfo({ children }: { children?: ReactNode }) {
  return (
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

            {/* Contact form (passed as children) */}
            {children}
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
                  28 pickup locations across 19 states. Use the interactive map to find
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
  );
}
