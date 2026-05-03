import React from "react";
import Image from "next/image";
import { CheckCircle, BadgeCheck } from "lucide-react";
import warrantyPic from "../../public/2monthswarranty.webp";
import styles from "./Warranty.module.css";

const WARRANTY_FEATURES = [
  "Full 2-month coverage on all mechanical components",
  "All units tested before sale — no surprises",
  "Extended warranty available at additional cost",
  "Receipts provided upon request",
  "Every unit painted and sealed before delivery",
  "Transparent condition — ask us anything",
];

export default function Warranty() {
  return (
    <section
      id="warranty"
      className={styles.section}
      aria-labelledby="warranty-heading"
    >
      <div className="container-site">
        <div className={styles.grid}>
          {/* ── LEFT — Text ── */}
          <div className={styles.textContent}>
            <span className={`section-eyebrow ${styles.eyebrow}`}>
              Quality Promise
            </span>
            <h2 id="warranty-heading" className={styles.heading}>
              Every unit backed by a{" "}
              <span className={styles.headingAccent}>full 2-month warranty</span>
            </h2>
            <p className={styles.description}>
              We stand behind every pallet jack we sell. &quot;Refurbished&quot; means
              professionally inspected, repaired, painted, and sealed — not just
              cleaned up and resold. If something isn&apos;t right within 2 months, we
              make it right.
            </p>

            <ul className={styles.featureList}>
              {WARRANTY_FEATURES.map((f) => (
                <li key={f} className={styles.featureItem}>
                  <CheckCircle
                    size={18}
                    className={styles.checkIcon}
                    aria-hidden="true"
                  />
                  <span className={styles.featureText}>{f}</span>
                </li>
              ))}
            </ul>

            <div className={styles.buttonGroup}>
              <a href="tel:+12622541835" className="btn-primary">
                Ask About Warranty
              </a>
              <a href="/about" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>

          {/* ── RIGHT — Image + stat cards ── */}
          <div className={styles.imageColumn}>
            {/* Hero image with overlay badge */}
            <div className={styles.heroImageWrapper}>
              <Image
                src={warrantyPic}
                alt="2-month warranty badge with warranty document and pen"
                className={styles.heroImage}
                quality={90}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Dark gradient at the bottom so the badge is readable */}
              <div className={styles.imageOverlay} aria-hidden="true" />
              {/* Floating badge */}
              <div className={styles.floatingBadgeContainer}>
                <div className={styles.floatingBadge}>
                  <div className={styles.badgeContent}>
                    <p className={styles.badgeTitle}>Included on Every Unit</p>
                    <p className={styles.badgeSubtitle}>
                      No extra cost. No fine print.
                    </p>
                  </div>
                  <span className={styles.badgePill}>
                    <BadgeCheck size={13} aria-hidden="true" />
                    FREE
                  </span>
                </div>
              </div>
            </div>

            {/* Two stat mini-cards */}
            <div className={styles.statCardGrid}>
              {[
                { value: "2", label: "Month Coverage", accent: "#3b82f6" },
                { value: "100%", label: "Units Tested", accent: "#22c55e" },
              ].map(({ value, label, accent }) => (
                <div key={label} className={styles.statCard}>
                  <p className={styles.statValue} style={{ "--stat-accent": accent } as React.CSSProperties}>
                    {value}
                  </p>
                  <p className={styles.statLabel}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
