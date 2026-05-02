import { Store, Package, DollarSign, type LucideIcon } from "lucide-react";
import styles from "./about.module.css";

type ServeCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  tags: string[];
  accentBg: string;
  accentColor: string;
};

const SERVE_CARDS: ServeCard[] = [
  {
    icon: Store,
    title: "Small & Mid-Size Warehouses",
    description:
      "You need equipment now, not in three weeks. Our on-hand inventory at 28 locations means zero lead time. Same-day pickup, every day.",
    tags: ["Same-day pickup", "No freight wait", "Live inventory"],
    accentBg: "#DBEAFE",
    accentColor: "#1D4ED8",
  },
  {
    icon: Package,
    title: "Resellers & Distributors",
    description:
      "Buying in volume? We offer bulk pricing on multiple units. Our rebuilt jacks carry real margins — without the overhead of buying new.",
    tags: ["Bulk pricing", "Multiple units", "Consistent quality"],
    accentBg: "#FEF3C7",
    accentColor: "#D97706",
  },
  {
    icon: DollarSign,
    title: "Operations on a Budget",
    description:
      "40–60% below retail price for commercial-grade equipment that's fully rebuilt and covered by warranty. No corners cut, just cost cut.",
    tags: ["40–60% savings", "2-month warranty", "Rebuilt not cleaned"],
    accentBg: "#DCFCE7",
    accentColor: "#16A34A",
  },
];

function AudienceCard({ card }: { card: ServeCard }) {
  const Icon = card.icon;
  return (
    <article className={styles.serveCard}>
      <div
        className={styles.serveIconWrap}
        style={{ backgroundColor: card.accentBg }}
        aria-hidden="true"
      >
        <Icon style={{ color: card.accentColor }} />
      </div>
      <h3 className={styles.serveTitle}>{card.title}</h3>
      <p className={styles.serveDesc}>{card.description}</p>
      <ul className={styles.serveTagList} aria-label="Key benefits">
        {card.tags.map((tag) => (
          <li
            key={tag}
            className={styles.serveTag}
            style={{ color: card.accentColor, backgroundColor: card.accentBg }}
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function WhoWeServe() {
  return (
    <section className={styles.sectionLight} aria-labelledby="serve-heading">
      <div className="container-site">
        <div className={styles.sectionCenter}>
          <p className="section-eyebrow">Who We Serve</p>
          <h2 id="serve-heading" className={styles.sectionTitle}>
            Built for businesses that move fast
          </h2>
          <p className={styles.sectionDesc}>
            Whether you run a warehouse, resell equipment, or just need
            something that works without overpaying — we built this for you.
          </p>
        </div>
        <div className={styles.serveGrid}>
          {SERVE_CARDS.map((card) => (
            <AudienceCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
