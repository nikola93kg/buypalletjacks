"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import styles from "./Faq.module.css";

const FAQS = [
  {
    q: "Are these new or used pallet jacks?",
    a: "They are professionally refurbished. Every unit has been fully disassembled, inspected, repaired where needed, repainted, and sealed. The result is a pallet jack that works like new without the new price.",
  },
  {
    q: "What brands do you carry?",
    a: "We carry two proven brands — Crown and Altra. Both are trusted names in material handling, fully rebuilt to perform like new.",
  },
  {
    q: "How does the warranty work?",
    a: "Every unit comes with a full 2-month warranty covering mechanical components. If you experience an issue within that period, reach out and we'll resolve it.",
  },
  {
    q: "Can I get delivery instead of pickup?",
    a: "Yes — delivery is available for select quantities and locations. It's not available everywhere, so contact us to find out if delivery works for your area.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept Cash, Credit Card, Zelle, and CashApp. Payment is made at pickup. Receipts are available upon request.",
  },
  {
    q: "Do you offer bulk or multi-unit discounts?",
    a: "Yes. Pricing improves with quantity. The exact discount depends on the brand, model, and number of units. Text us for a multi-unit quote.",
  },
  {
    q: "How do I find my nearest location?",
    a: "The quickest way is to call or text us — we'll point you to the closest available inventory right away. You can also use the interactive map on our locations page: select your state to browse all nearby pickup points with addresses and Google Maps directions.",
  },
  {
    q: "What is the weight capacity of your pallet jacks?",
    a: "All of our standard units are rated at 5,500 lbs — more than enough for typical warehouse and loading dock use. That capacity is maintained after the full rebuild, so you're getting the same performance as the original spec.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={`section-padding ${styles.section}`} aria-labelledby="faq-heading">
      <div className="container-site max-w-3xl">
        <div className={styles.headerContainer}>
          <span className="section-eyebrow">FAQ</span>
          <h2
            id="faq-heading"
            className={styles.heading}
          >
            Common questions
          </h2>
          <p className={styles.description}>
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="tel:+12622541835" className={styles.descriptionLink}>
              Call us directly
            </a>
            .
          </p>
        </div>

        <dl className={styles.faqList}>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : styles.faqItemClosed}`}
              >
                <dt>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className={styles.questionButton}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span
                      className={`${styles.questionText} ${isOpen ? styles.questionTextOpen : styles.questionTextClosed}`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`${styles.iconContainer} ${isOpen ? styles.iconContainerOpen : styles.iconContainerClosed}`}
                      aria-hidden="true"
                    >
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </span>
                  </button>
                </dt>
                {isOpen && (
                  <dd
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className={styles.answer}
                  >
                    <p className={styles.answerText}>{faq.a}</p>
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
