import { Fragment } from "react";
import styles from "./about.module.css";

const STATS = [
  { value: "26+", label: "Pickup Locations" },
  { value: "19", label: "States Covered" },
  { value: "2-Mo", label: "Warranty Included" },
  { value: "5★", label: "Customer Rating" },
];

export default function PageHeader() {
  return (
    <section className={styles.pageHeader} aria-labelledby="about-page-heading">
      <div className="container-site">
        <p className={styles.pageEyebrow}>About Us</p>
        <h1 id="about-page-heading" className={styles.pageHeadline}>
          Give every business access to{" "}
          <span className={styles.headlineAccent}>equipment that works</span>
        </h1>
        <p className={styles.pageSubline}>
          We source commercial-grade units, rebuild them from scratch, back
          them with a real warranty, and put them within driving distance of you.
        </p>
        <div className={styles.statsRow} role="list" aria-label="Key statistics">
          {STATS.map(({ value, label }, i) => (
            <Fragment key={label}>
              {i > 0 && (
                <div className={styles.statDivider} aria-hidden="true" />
              )}
              <div className={styles.statCell} role="listitem">
                <span className={styles.statNum}>{value}</span>
                <span className={styles.statLbl}>{label}</span>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
