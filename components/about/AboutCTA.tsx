import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import styles from "./about.module.css";

export default function AboutCTA() {
  return (
    <section className={styles.ctaSection} aria-labelledby="about-cta-heading">
      <div className="container-site">
        <div className={styles.ctaBody}>
          <div>
            <h2 id="about-cta-heading" className={styles.ctaTitle}>
              Ready to pick up today?
            </h2>
            <p className={styles.ctaDesc}>
              28 locations, same-day pickup, 2-month warranty included on every unit.
            </p>
          </div>
          <div className={styles.ctaButtons}>
            <Link href="/locations" className="btn-primary">
              <MapPin aria-hidden="true" style={{ width: "1rem", height: "1rem" }} />
              Find a Location
            </Link>
            <a href="tel:+12622541835" className={styles.ctaPhoneBtn}>
              <Phone aria-hidden="true" style={{ width: "1rem", height: "1rem" }} />
              (262) 254-1835
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
