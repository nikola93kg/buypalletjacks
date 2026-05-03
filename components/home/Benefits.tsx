import styles from "./Benefits.module.css";

const STATS = [
  { stat: "28", label: "Pickup Locations" },
  { stat: "2-Mo", label: "Warranty Included" },
  { stat: "40–60%", label: "Below Retail Price" },
];

const SPECS = [
  {
    title: "Professionally Refurbished",
    desc: "Every unit is fully disassembled, inspected, repaired, repainted, and sealed by experienced technicians — not just cleaned and relisted.",
  },
  {
    title: "2-Month Warranty",
    desc: "All pallet jacks come with a full 2-month mechanical warranty. Extended coverage available. Receipts provided on request.",
  },
  {
    title: "28 Pickup Locations",
    desc: "Self-storage facilities in major metro areas. Find your nearest spot, confirm availability, and pick up same day.",
  },
  {
    title: "Delivery Available",
    desc: "Need it brought to you? Delivery is available for select quantities and locations. Ask when you call or text.",
  },
  {
    title: "Flexible Payment",
    desc: "Cash, Credit Card, Zelle, and CashApp. Pay at pickup. No accounts, no financing — just a straightforward transaction.",
  },
  {
    title: "Ready Now — No Backorders",
    desc: "Stock is on-hand at all locations. Call or text to confirm, then pick up on your schedule. No lead times, no waiting.",
  },
];

export default function Benefits() {
  return (
    <section aria-labelledby="benefits-heading">
      {/* Stats band */}
      <div className={styles.statsBand}>
        <div className={`container-site ${styles.statsContainer}`}>
          <div className="grid grid-cols-3">
            {STATS.map(({ stat, label }, i) => (
              <div
                key={label}
                className={`${styles.statItem} ${i > 0 ? styles.statItemBorder : ""}`}
              >
                <p className={styles.statNumber}>{stat}</p>
                <p className={styles.statLabel}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Spec rows */}
      <div className={styles.specSection}>
        <div className="container-site">
          <div className={styles.heading}>
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 id="benefits-heading" className={styles.headingTitle}>
              Built for business.{" "}
              <span className={styles.headingBlue}>Priced for value.</span>
            </h2>
          </div>
          <div className={styles.specGrid}>
            {SPECS.map(({ title, desc }) => (
              <div key={title} className={styles.specItem}>
                <div className={styles.specAccent} />
                <div>
                  <h3 className={styles.specTitle}>{title}</h3>
                  <p className={styles.specDesc}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
