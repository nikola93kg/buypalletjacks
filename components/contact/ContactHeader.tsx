import { Zap, ShieldCheck, MapPin } from "lucide-react";
import styles from "@/components/contact/contact.module.css";

const TRUST_ITEMS = [
  { icon: Zap, label: "Responds within minutes", sub: "During business hours" },
  { icon: ShieldCheck, label: "No deposit to reserve", sub: "Pay at pickup only" },
  { icon: MapPin, label: "28 locations · 19 states", sub: "Same-day pickup available" },
];

export default function ContactHeader() {
  return (
    <section className={styles.pageHeader} aria-labelledby="contact-heading">
      <div className="container-site">
        <div className="flex flex-col items-center sm:items-start">
          <p className={styles.pageEyebrow}>Contact Us</p>
        </div>
        <h1 id="contact-heading" className={styles.pageHeadline}>
          We&apos;re a{" "}
          <span className={styles.headlineAccent}>call or text away</span>
        </h1>
        <p className={styles.pageSubline}>
          Call or text us directly to check stock, get photos, and schedule
          a same-day pickup at the location nearest you.
        </p>
        <div className={styles.trustRow} role="list">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className={styles.trustPill} role="listitem">
              <span className={styles.trustPillIcon} aria-hidden="true">
                <item.icon />
              </span>
              <span className={styles.trustPillText}>
                {item.label}
                <span className={styles.trustPillSub}>{item.sub}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
