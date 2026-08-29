"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "How fast can a crew mobilize on site?",
    answer:
      "Most site assessments happen within a week of first contact, with crews mobilizing 2–4 weeks after the engineering plan is signed off, depending on scope and region.",
  },
  {
    question: "Do you work with existing site EPCs?",
    answer:
      "Yes — we regularly work alongside a site's existing EPC and operations teams, slotting into their schedule and safety protocols rather than replacing them.",
  },
  {
    question: "What safety certifications does Minvip hold?",
    answer:
      "We hold ISO 45001, ISO 14001, ISO 9001 and OHSAS 18001 certifications, independently audited on a recurring basis across every active site.",
  },
  {
    question: "Do you provide fixed-cost estimates?",
    answer:
      "Every project starts with a site assessment and a fixed-cost engineering plan — no open-ended time-and-materials billing.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
      <div className="container">
        <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-11 lg:flex-row lg:items-end">
          <h2 className="font-display text-2xl font-semibold leading-tight text-white sm:text-4xl">
            Frequently Asked <span className="text-lime-400">Questions</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-white/50">
            Still have questions? Reach the team directly.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-ink-800">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                >
                  <span className="text-[14.5px] font-semibold text-white sm:text-[15px]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-white/50 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 text-[13.5px] leading-relaxed text-white/50 sm:px-7">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
