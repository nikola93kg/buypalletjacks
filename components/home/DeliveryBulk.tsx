import { Truck, PackageCheck, DollarSign } from "lucide-react";
import styles from "./DeliveryBulk.module.css";

export default function DeliveryBulk() {
  return (
    <section
      id="delivery"
      className={`section-padding ${styles.section}`}
      aria-labelledby="delivery-heading"
    >
      <div className="container-site">
        <div className={styles.headerContainer}>
          <span className="section-eyebrow">Delivery &amp; Bulk</span>
          <h2
            id="delivery-heading"
            className={styles.heading}
          >
            Need more than one?{" "}
            <span className={styles.headingAccent}>We&apos;ve got you covered</span>
          </h2>
          <p className={styles.description}>
            Whether you&apos;re outfitting a small warehouse or buying for a fleet,
            our multi-unit discounts and delivery options are designed for businesses.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {/* Delivery card */}
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <div className={`${styles.iconWrapper} ${styles.iconWrapperBlue}`}>
              <Truck size={24} className={styles.icon} aria-hidden="true" />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Delivery Available
              </h3>
              <p className={`${styles.cardDescription} ${styles.cardDescriptionBlue}`}>
                For select quantities and locations, we can bring the units
                directly to you. Call to discuss availability and pricing.
              </p>
            </div>
            <a href="tel:+12622541835" className={`btn-outline text-sm ${styles.ctaOutline}`}>
              Ask About Delivery
            </a>
          </div>

          {/* Bulk discount card */}
          <div className={`${styles.card} ${styles.cardOrange}`}>
            <div className={`${styles.iconWrapper} ${styles.iconWrapperOrange}`}>
              <DollarSign size={24} className={styles.icon} aria-hidden="true" />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Multi-Unit Discounts
              </h3>
              <p className={`${styles.cardDescription} ${styles.cardDescriptionOrange}`}>
                Buying 3 or more units? Pricing gets better the more you buy.
                Discounts vary by brand, quantity, and location. Ask us.
              </p>
            </div>
            <a
              href="sms:+12622541835"
              className={styles.ctaSolid}
            >
              Text for a Quote
            </a>
          </div>

          {/* Pricing info card */}
          <div className={`${styles.card} ${styles.cardGray}`}>
            <div className={`${styles.iconWrapper} ${styles.iconWrapperGraphite}`}>
              <PackageCheck size={24} className={styles.icon} aria-hidden="true" />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>
                Pricing by Brand &amp; Condition
              </h3>
              <p className={`${styles.cardDescription} ${styles.cardDescriptionGray}`}>
                Pricing varies by brand, model, and quantity. All units are
                professionally refurbished — you get warehouse-grade quality without
                the new-equipment price.
              </p>
            </div>
            <a href="/contact" className={`btn-outline text-sm ${styles.ctaOutline}`}>
              Get a Price Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
