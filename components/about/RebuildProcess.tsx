import { Wrench, ShieldCheck, TrendingUp, BadgeCheck, type LucideIcon } from "lucide-react";
import styles from "./about.module.css";

type ProcessStep = {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    icon: Wrench,
    number: "01",
    title: "Complete Disassembly",
    description:
      "Every pallet jack is fully disassembled so we can inspect and replace worn seals, hydraulic fluid, and mechanical components.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Hydraulic Testing",
    description:
      "Each unit is load-tested at full capacity to verify the hydraulic system holds pressure and lifts smoothly to spec.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Repaint & Detail",
    description:
      "After mechanical approval, every unit is stripped, primed, and powder-coated or painted to a like-new finish.",
  },
  {
    icon: BadgeCheck,
    number: "04",
    title: "Final Quality Check",
    description:
      "Our QC team performs a full operational test — wheels, forks, handle, pump, and release valve — before the 2-month warranty applies.",
  },
];

function StepCard({ step }: { step: ProcessStep }) {
  const Icon = step.icon;
  return (
    <article className={styles.stepCard}>
      <span className={styles.stepGhost} aria-hidden="true">{step.number}</span>
      <div className={styles.stepIconWrap} aria-hidden="true">
        <Icon />
      </div>
      <p className={styles.stepLabel}>Step {step.number}</p>
      <h3 className={styles.stepTitle}>{step.title}</h3>
      <p className={styles.stepDesc}>{step.description}</p>
    </article>
  );
}

export default function RebuildProcess() {
  return (
    <section className={styles.sectionWhite} aria-labelledby="process-heading">
      <div className="container-site">
        <div className={styles.sectionCenter}>
          <p className="section-eyebrow">Our Process</p>
          <h2 id="process-heading" className={styles.sectionTitle}>
            What &ldquo;Refurbished&rdquo; actually means to us
          </h2>
          <p className={styles.sectionDesc}>
            We don&rsquo;t clean and relist. Every unit goes through a 4-stage
            rebuild before it leaves our facility.
          </p>
        </div>
        <div className={styles.processGrid}>
          {PROCESS_STEPS.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
