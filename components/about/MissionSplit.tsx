import { ShieldCheck, CheckCircle2 } from "lucide-react";
import styles from "./about.module.css";

const DIFFERENTIATORS = [
  "Full mechanical rebuild — not just a clean and repaint",
  "2-month warranty on every single unit",
  "26 pickup locations across 19 states",
  "Same-day pickup available at all locations",
  "Live inventory — no waitlists, no backorders",
  "Fraction of new-equipment cost",
];

export default function MissionSplit() {
  return (
    <section className={styles.sectionWhite} aria-labelledby="mission-heading">
      <div className="container-site">
        <div className={styles.missionGrid}>

          {/* Left — narrative */}
          <div>
            <p className={styles.missionEyebrow}>Our Mission</p>
            <h2 id="mission-heading" className={styles.storyHeading}>
              Refurbished doesn&rsquo;t mean compromised
            </h2>
            <div className={styles.storyBody}>
              <p>
                New pallet jacks carry steep price tags and lead times that
                stretch for weeks. Generic used equipment is a gamble with no
                warranty and no support. We close that gap.
              </p>
              <p>
                Every unit is fully disassembled, inspected, repaired,
                repainted, and sealed by experienced technicians — not just
                cleaned and relisted. Then it&rsquo;s available same-day at one of
                26 pickup points nationwide.
              </p>
              <p>
                No middlemen. No freight quotes. No waiting. You call, confirm
                your nearest location, and drive away with a rebuilt pallet
                jack the same day.
              </p>
            </div>

            <div className={styles.warrantyBadge}>
              <ShieldCheck aria-hidden="true" />
              <div>
                <p className={styles.warrantyTitle}>
                  2-Month Warranty — Included on Every Unit
                </p>
                <span className={styles.warrantySub}>
                  Written guarantee. No fine print. No exceptions.
                </span>
              </div>
            </div>
          </div>

          {/* Right — differentiators */}
          <div className={styles.diffCard}>
            <p className={styles.diffLabel}>What sets us apart</p>
            <ul className={styles.diffList}>
              {DIFFERENTIATORS.map((item) => (
                <li key={item} className={styles.diffItem}>
                  <CheckCircle2 aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
                <li key={item} className={styles.diffItem}>
                  <CheckCircle2 aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
