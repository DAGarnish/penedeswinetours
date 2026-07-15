"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);


  const faqs: FaqItem[] = [
    {
      question: "Where does the tour begin?",
      answer: "We meet at 14:00 directly at the historic Celler de l'Hospital de Sitges in town. From there, our driver handles all transport into the Garraf region before returning you to the Celler.",
    },
    {
      question: "Is wine and food tasting included in the tour price?",
      answer: "Absolutely. The price covers every detail: premium private transport, your dedicated sommelier host, guided visits to two contrasting boutique estates, all premium wine/Cava tastings, and the custom Xarcuteria lunch board curated by our celebrity chef.",
    },
    {
      question: "How do you handle dietary requests (like vegan, gluten-free, or vegetarian)?",
      answer: (
        <div className="space-y-4">
          <p>
            You can outline your dietary requirements in the checkout or inquiry form. Our former A-list celebrity chef creates bespoke, premium culinary selections tailored for vegetarian, vegan and gluten-free guests, ensuring these options are held to the same high standard as our signature boards—never treated as an afterthought.
          </p>
          <p>
            Please note that, unlike most mass-produced wines, all of our wines are vegan!
          </p>
        </div>
      ),
    },
    {
      question: "How long is the tour, and will I be back in time for the beach or dinner?",
      answer: "The formal tour starts at 14:00 and lasts around 4 hours, bringing you through the vineyards and concluding with your culinary pairing back at Celler de l'Hospital. Afterward, you are welcome to stay and relax into the evening at El Clastré!",
    },
    {
      question: "What is the typical group size?",
      answer: "To ensure an intimate and luxurious experience, our group sizes are kept small, typically ranging from 1 to 8 guests. This allows for personalized attention from the winemaker hosts and our tour guide.",
    },
    {
      question: "Can I book a fully private tour for a special event?",
      answer: "Yes, we specialize in private tours for corporate retreats, family milestones, and wedding parties staying in Sitges. Simply indicate your request in the booking form, and our sommelier concierge will design a private itinerary tailored to your group.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-stone-100/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-terracotta-600 font-serif text-sm tracking-widest uppercase block mb-3">
            Have Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight">
            FAQs
          </h2>
          <p className="text-stone-600 mt-4 text-sm md:text-base leading-relaxed">
            Everything you need to know about planning your escape from Sitges into the beautiful Penedès wine valley.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-stone-200/50 shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-stone-800 text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                  <span className={`w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[300px] border-t border-stone-100" : "max-h-0"
                    }`}
                >
                  <div className="p-5 md:p-6 text-stone-600 text-sm md:text-base leading-relaxed bg-stone-50/50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
