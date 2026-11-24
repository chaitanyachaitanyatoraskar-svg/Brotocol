import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionEyebrow } from '@/components/common/BrandMark';
import { faqsData, type FaqItem } from '@/data/faqs';

const categories: Array<'All' | FaqItem['category']> = [
  'All',
  'General',
  'Smart Products',
  'Hospitality',
  'Software & Process',
];

export const FaqSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof categories)[number]>('All');
  const [openId, setOpenId] = useState<string | null>(faqsData[0]?.id ?? null);

  const filteredFaqs =
    selectedCategory === 'All'
      ? faqsData
      : faqsData.filter((item) => item.category === selectedCategory);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionEyebrow label="FREQUENTLY ASKED QUESTIONS" align="center" />
          <h2 className="mt-4 font-display text-3xl font-semibold text-[#020617] sm:text-4xl">
            Clear Answers Before You Start.
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            Straightforward details about our products, software development
            process, and how engagements are scoped.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  const first =
                    cat === 'All'
                      ? faqsData[0]
                      : faqsData.find((f) => f.category === cat);
                  setOpenId(first?.id ?? null);
                }}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  active
                    ? 'bg-[#0D7F80] text-white'
                    : 'border border-[#E2E8F0] bg-white text-[#64748B] hover:border-[#AFEAEA] hover:text-[#020617]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Separated White Accordion Panels matching Screenshot 3 */}
        <div className="mt-10 space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            const panelId = `faq-panel-${faq.id}`;
            const buttonId = `faq-button-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border bg-white px-5 transition-colors sm:px-7 ${
                  isOpen
                    ? 'border-[#AFEAEA] bg-[#FEFFFF]'
                    : 'border-[#E2E8F0] hover:border-[#AFEAEA]/70'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(faq.id)}
                    className={`flex w-full items-center justify-between gap-4 py-5 text-left font-display text-base font-semibold transition-colors sm:text-lg ${
                      isOpen
                        ? 'text-[#0D7F80]'
                        : 'text-[#020617] hover:text-[#0D7F80]'
                    }`}
                  >
                    <span>{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? 'bg-[#EEFCFC] text-[#0D7F80]'
                          : 'bg-[#F1F5F9] text-[#64748B]'
                      }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="pb-5 pr-8 text-sm leading-relaxed text-[#64748B] sm:text-base"
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
