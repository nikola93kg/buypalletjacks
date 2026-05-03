import { Phone } from "lucide-react";
import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    step: "01",
    title: "Call or Text Us",
    desc: "Reach out to confirm what's available in your area. We'll match you with the nearest location and answer any questions about brand, capacity, or condition.",
  },
  {
    step: "02",
    title: "Find Your Location",
    desc: "We'll give you the exact address of the nearest storage facility. Most are accessible 7 days a week during extended hours — no appointment required.",
  },
  {
    step: "03",
    title: "Pick Up & Go",
    desc: "Pay on pickup with Cash, Card, Zelle, or CashApp. Load it in your vehicle and you're done. Your pallet jack is ready to work from day one.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="how-heading">
      <div className="container-site">
        <div className={styles.heading}>
          <span className="section-eyebrow">The Process</span>
          <h2 id="how-heading" className={styles.headingTitle}>
            3 steps to warehouse-ready
          </h2>
        </div>

        <div className={styles.stepGrid}>
          {STEPS.map(({ step, title, desc }, i) => (
            <div
              key={step}
              className={`${styles.stepCard} ${i > 0 ? styles.stepCardBorder : ""}`}
            >
              {/* Giant watermark step number */}
              <span aria-hidden="true" className={styles.stepWatermark}>
                {step}
              </span>

              {/* Orange accent bar */}
              <div className={styles.stepAccent} aria-hidden="true" />

              {/* Step label */}
              <p className={styles.stepLabel}>Step {step}</p>

              {/* Title */}
              <h3 className={styles.stepTitle}>{title}</h3>

              {/* Description */}
              <p className={styles.stepDesc}>{desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a href="tel:+12622541835" className="btn-primary text-base px-8 py-3.5">
            <Phone size={17} />
            Start with a Call
          </a>
        </div>
      </div>
    </section>
  );
}
