import { CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import altraImg from "@/public/altra.webp";
import crownImg from "@/public/crown.webp";
import altraLogo from "@/public/altra-logo.png";
import crownLogo from "@/public/crown-logo.png";
import styles from "./PalletJackModels.module.css";

const MODELS = [
  {
    brand: "Altra",
    img: altraImg,
    logo: altraLogo,
    tagline: "Built for the everyday warehouse.",
    description:
      "Altra pallet jacks are engineered for heavy-duty warehouse use — featuring durable steel frames, smooth hydraulics, and ease of operation. Ideal for loading docks, distribution centers, and daily warehouse floor work.",
    specs: [
      "5,500 lb lifting capacity",
      "Smooth single-speed hydraulic pump",
      "Durable steel fork frame",
      "Rebuilt fork seals & load wheels",
    ],
    accentColor: "#1D4ED8",
    accentBg: "#EFF6FF",
    accentBorder: "#BFDBFE",
  },
  {
    brand: "Crown",
    img: crownImg,
    logo: crownLogo,
    tagline: "Precision-engineered for high-volume operations.",
    description:
      "Crown is one of the most trusted names in material handling. Their pallet jacks are known for precision engineering, long service life, and ergonomic design — a top choice in high-volume logistics and distribution centers.",
    specs: [
      "5,500 lb lifting capacity",
      "Ergonomic cushion-grip handle",
      "Precision hydraulic control system",
      "Rebuilt to manufacturer specifications",
    ],
    accentColor: "#F97316",
    accentBg: "#FFF7ED",
    accentBorder: "#FED7AA",
  },
];

export default function PalletJackModels() {
  return (
    <section
      className={`section-padding ${styles.section}`}
      aria-labelledby="models-heading"
    >
      <div className="container-site">
        {/* Header */}
        <div className={styles.headerContainer}>
          <span className="section-eyebrow">Our Equipment</span>
          <h2
            id="models-heading"
            className={styles.heading}
          >
            Two proven brands.{" "}
            <span className={styles.headingAccent}>Both rebuilt right.</span>
          </h2>
          <p className={styles.description}>
            We carry <strong className={styles.descriptionStrong}>Altra</strong>{" "}
            and <strong className={styles.descriptionStrong}>Crown</strong> — two
            of the most reliable pallet jack brands in the industry. Every unit
            is fully disassembled, serviced, repainted, and sealed by
            experienced technicians before it reaches you.
          </p>
        </div>

        {/* Model cards */}
        <div className={styles.modelsGrid}>
          {MODELS.map((model) => (
            <article
              key={model.brand}
              className={styles.modelCard}
              style={{
                '--card-accent': model.accentColor,
                '--card-accent-bg': model.accentBg,
                '--card-accent-border': model.accentBorder,
              } as React.CSSProperties}
            >
              <div className={styles.imageHeader}>
                <div className={styles.accentBar} />

                <div className={styles.badgeContainer}>
                  <div className={styles.badge}>
                    <Image
                      src={model.logo}
                      alt={`${model.brand} logo`}
                      height={16}
                      className={styles.badgeLogo}
                    />
                    <span>{model.brand}</span>
                  </div>
                </div>

                <div className={styles.imageContainer}>
                  <Image
                    src={model.img}
                    alt={`${model.brand} pallet jack`}
                    fill
                    className={styles.modelImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.modelTitle}>
                  {model.brand} Pallet Jack
                </h3>
                <p className={styles.tagline}>
                  {model.tagline}
                </p>
                <p className={styles.modelDescription}>
                  {model.description}
                </p>

                {/* Spec list */}
                <ul className={styles.specList}>
                  {model.specs.map((spec) => (
                    <li key={spec} className={styles.specItem}>
                      <CheckCircle2
                        size={16}
                        className={styles.specIcon}
                        aria-hidden="true"
                      />
                      <span className={styles.specText}>{spec}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="tel:+12622541835"
                  className={`${styles.ctaButton} check-availability`}
                >
                  <Phone size={14} aria-hidden="true" />
                  Check {model.brand} Availability
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Trust note */}
        <p className={styles.trustNote}>
          All units inspected, repainted, sealed, and backed by our{" "}
          <span className={styles.trustNoteStrong}>2-month warranty</span>.
        </p>
      </div>
    </section>
  );
}
