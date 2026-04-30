"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
    <section id="faq" className="section-padding bg-white" aria-labelledby="faq-heading">
      <div className="container-site max-w-3xl">
        <div className="text-center mb-12">
          <span className="section-eyebrow">FAQ</span>
          <h2
            id="faq-heading"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-3xl md:text-4xl font-800 text-[#0F172A] mb-4"
          >
            Common questions
          </h2>
          <p className="text-[#64748B] text-base">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="tel:+12622541835" className="text-[#1D4ED8] hover:underline font-medium">
              Call us directly
            </a>
            .
          </p>
        </div>

        <dl className="flex flex-col gap-2">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-xl transition-colors ${
                  isOpen
                    ? "border-[#1D4ED8] bg-[#F8FAFC]"
                    : "border-[#E2E8F0] bg-white"
                }`}
              >
                <dt>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                      className={`text-base font-600 ${isOpen ? "text-[#1D4ED8]" : "text-[#0F172A]"}`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                        isOpen ? "bg-[#1D4ED8] text-white" : "bg-[#F1F5F9] text-[#64748B]"
                      }`}
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
                    className="px-5 pb-5"
                  >
                    <p className="text-[#475569] text-sm leading-relaxed">{faq.a}</p>
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
