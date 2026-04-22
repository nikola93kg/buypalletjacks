import { Tag, Zap, ShieldCheck, type LucideIcon } from "lucide-react";
import styles from "./about.module.css";

type ValueItem = {
  icon: LucideIcon;
  title: string;
  sub: string;
};

const VALUE_ITEMS: ValueItem[] = [
  {
    icon: Tag,
    title: "40–60% Below Retail",
    sub: "Commercial-grade quality without the commercial price tag.",
  },
  {
    icon: Zap,
    title: "Same-Day Availability",
    sub: "Stock is on hand. Confirm by call or text, pick up today.",
  },
  {
    icon: ShieldCheck,
    title: "2-Month Warranty",
    sub: "Written guarantee on every unit. No fine print. No exceptions.",
  },
];

export default function ValueStrip() {
  return (
    <div className={styles.valueStrip}>
      <div className="container-site">
        <div className={styles.valueStripGrid}>
          {VALUE_ITEMS.map(({ icon: Icon, title, sub }) => (
            <div key={title} className={styles.valueItem}>
              <div className={styles.valueIconWrap} aria-hidden="true">
                <Icon />
              </div>
              <div>
                <p className={styles.valueItemTitle}>{title}</p>
                <p className={styles.valueItemSub}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
