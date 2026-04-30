import {
  BadgeDollarSign,
  CheckCircle2,
  Clock3,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";
import styles from "./WhyRefurbished.module.css";

type ReasonTheme = "blue" | "orange" | "green";

type Reason = {
  stat: string;
  label: string;
  title: string;
  desc: string;
  theme: ReasonTheme;
  icon: LucideIcon;
};

type ComparisonRow = {
  feature: string;
  us: string;
  them: string;
};

const REASONS: Reason[] = [
  {
    stat: "40–60%",
    label: "Budget win",
    title: "Less Than Buying New",
    desc: "Get the same lifting capacity and warehouse-grade reliability at a fraction of the retail price. Our units are priced for businesses that understand value.",
    theme: "blue",
    icon: BadgeDollarSign,
  },
  {
    stat: "Same Day",
    label: "Fast pickup · Weekends too",
    title: "Pick Up — No Backorders",
    desc: "New equipment can take weeks to arrive. Our inventory is on-hand at 26 locations across the USA. Call, confirm, and pick up the same day — weekends included.",
    theme: "orange",
    icon: Clock3,
  },
  {
    stat: "100%",
    label: "Workshop rebuilt",
    title: "Rebuilt, Not Just Cleaned",
    desc: "Every unit is disassembled, serviced, repainted, and sealed by experienced technicians. You're not buying a dirty used jack — you're buying a rebuilt one.",
    theme: "green",
    icon: Wrench,
  },
];

const COMPARISON: ComparisonRow[] = [
  { feature: "Price vs new", us: "40–60% less", them: "Full retail price" },
  { feature: "Availability", us: "Same day · weekends too", them: "Weeks of lead time" },
  { feature: "Delivery", us: "Available for extra fee", them: "Usually freight-based" },
  { feature: "Condition", us: "Rebuilt & sealed", them: "Factory new" },
  { feature: "Warranty", us: "2-month included", them: "Manufacturer warranty" },
  { feature: "Pickup options", us: "26 locations nationwide", them: "Dealer or freight only" },
];

function ValueCard({ reason }: { reason: Reason }) {
  const Icon = reason.icon;

  return (
    <article className={`${styles.valueCard} ${styles[reason.theme]}`}>
      <div className={styles.valueBar} aria-hidden="true" />

      <div className={styles.valueCardHeader}>
        <div>
          <p className={styles.valueLabel}>{reason.label}</p>
          <div className={styles.statPill}>
            <span className={styles.statValue}>{reason.stat}</span>
          </div>
        </div>

        <span className={styles.iconWrap} aria-hidden="true">
          <Icon size={20} />
        </span>
      </div>

      <h3 className={styles.valueTitle}>{reason.title}</h3>
      <p className={styles.valueDescription}>{reason.desc}</p>
    </article>
  );
}

function ComparisonSection() {
  return (
    <div className={styles.comparisonSection}>
      <div className={styles.comparisonHeader}>
        <span className={styles.comparisonEyebrow}>Side by side comparison</span>
        <h3 className={styles.comparisonTitle}>
          Refurbished vs. buying new
        </h3>
        <p className={styles.comparisonDescription}>
          Same warehouse-ready equipment — faster pickup, lower cost, no retail
          markup. A straightforward choice for buyers who prioritize uptime over
          showroom pricing.
        </p>
      </div>

      <div className={styles.comparisonRows}>
        <div className={styles.comparisonColLabels}>
          <div className={styles.colLabelBlank} />
          <div className={styles.colLabelUs}>Buy Pallet Jacks</div>
          <div className={styles.colLabelThem}>Buying New</div>
        </div>

        {COMPARISON.map((row) => (
          <div key={row.feature} className={styles.comparisonRow}>
            <div className={styles.rowFeature}>{row.feature}</div>
            <div className={styles.rowUs}>
              <CheckCircle2 size={13} className={styles.iconSuccess} aria-hidden="true" />
              <span>{row.us}</span>
            </div>
            <div className={styles.rowThem}>
              <X size={12} className={styles.iconMuted} aria-hidden="true" />
              <span>{row.them}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhyRefurbished() {
  return (
    <section
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="why-refurbished-heading"
    >
      <div className="container-site">
        <div className="text-center mb-12">
          <span className="section-eyebrow">Why Refurbished?</span>
          <h2
            id="why-refurbished-heading"
            className="text-4xl md:text-5xl font-900 text-[#0F172A] mb-4"
          >
            Smart buyers choose refurbished.{" "}
            <span className="text-[#1D4ED8]">Here&apos;s why.</span>
          </h2>
          <p className="text-[#64748B] max-w-xl mx-auto text-base leading-relaxed">
            New isn&apos;t always better — especially when the alternative is
            professionally rebuilt equipment at half the price, available today.
          </p>
        </div>

        <div className="mb-14 grid gap-4 md:grid-cols-3">
          {REASONS.map((reason) => (
            <ValueCard key={reason.title} reason={reason} />
          ))}
        </div>

        <ComparisonSection />

        <p className={styles.quote}>
          &ldquo;The smart move is not paying extra for the exact same job to get
          done.&rdquo;
        </p>
      </div>
    </section>
  );
}
