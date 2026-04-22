import Link from "next/link";
import { ShieldCheck, MapPin, Phone } from "lucide-react";
import styles from "./about.module.css";

export default function AboutCTA() {
  return (
    <section className={styles.ctaSection} aria-labelledby="about-cta-heading">
      <div className={styles.ctaGlow} aria-hidden="true" />
      <div className={styles.ctaTexture} aria-hidden="true" />
      <div className={styles.ctaAccentLine} aria-hidden="true" />

      <div className="container-site">
        <div className={styles.ctaBody}>
          <ShieldCheck
            aria-hidden="true"
            style={{ width: "3rem", height: "3rem", color: "#f97316", margin: "0 auto" }}
          />
          <h2 id="about-cta-heading" className={styles.ctaTitle}>
            Ready to pick up today?
          </h2>
          <p className={styles.ctaDesc}>
            26 locations, same-day pickup, 2-month warranty included on every
            unit. Find the location nearest you and drive away with a fully
            rebuilt pallet jack today.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/locations" className="btn-primary">
              <MapPin aria-hidden="true" style={{ width: "1.125rem", height: "1.125rem" }} />
              Find a Location
            </Link>
            <a href="tel:+12622541835" className="btn-secondary">
              <Phone aria-hidden="true" style={{ width: "1.125rem", height: "1.125rem" }} />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
