import { BadgeCheck, Wrench, Truck, Clock, type LucideIcon } from "lucide-react";
import styles from "./about.module.css";

type Pillar = {
  icon: LucideIcon;
  title: string;
  description: string;
  accentBg: string;
  accentColor: string;
};

const PILLARS: Pillar[] = [
  {
    icon: BadgeCheck,
    title: "2-Month Written Warranty",
    description:
      "Every unit comes with a 2-month warranty — in writing, no fine print. If it fails under normal use, we fix or replace it.",
    accentBg: "#DBEAFE",
    accentColor: "#1D4ED8",
  },
  {
    icon: Wrench,
    title: "Full Mechanical Rebuild",
    description:
      "We disassemble every unit, replace seals and hydraulic fluid, load-test at capacity, and repaint to a like-new finish.",
    accentBg: "#FEF3C7",
    accentColor: "#D97706",
  },
  {
    icon: Truck,
    title: "Same-Day Pickup — Weekends Too",
    description:
      "Pick up the same day from one of 28 locations nationwide — including weekends. No freight delays, no surprise shipping costs.",
    accentBg: "#DCFCE7",
    accentColor: "#16A34A",
  },
  {
    icon: Clock,
    title: "In-Stock & Ready",
    description:
      "Live inventory across all 28 locations. What you see is what's physically on the floor — ready to go today.",
    accentBg: "#E0E7FF",
    accentColor: "#1E3A8A",
  },
];

function PillarCard({ pillar }: { pillar: Pillar }) {
  const Icon = pillar.icon;
  return (
    <article className={styles.pillarCard}>
      <div
        className={styles.pillarIconWrap}
        style={{ backgroundColor: pillar.accentBg }}
        aria-hidden="true"
      >
        <Icon style={{ color: pillar.accentColor, width: "1.375rem", height: "1.375rem" }} />
      </div>
      <div>
        <h3 className={styles.pillarTitle}>{pillar.title}</h3>
        <p className={styles.pillarDesc}>{pillar.description}</p>
      </div>
    </article>
  );
}

export default function TrustPillars() {
  return (
    <section className={styles.sectionLight} aria-labelledby="pillars-heading">
      <div className="container-site">
        <div className={styles.sectionCenter}>
          <p className="section-eyebrow">Why Customers Trust Us</p>
          <h2 id="pillars-heading" className={styles.sectionTitle}>
            Built around the things that matter
          </h2>
          <p className={styles.sectionDesc}>
            Every part of our business is designed to eliminate the risks that
            come with buying used industrial equipment.
          </p>
        </div>
        <div className={styles.pillarsGrid}>
          {PILLARS.map((pillar) => (
            <PillarCard key={pillar.title} pillar={pillar} />
          ))}
        </div>
      </div>
    </section>
  );
}
