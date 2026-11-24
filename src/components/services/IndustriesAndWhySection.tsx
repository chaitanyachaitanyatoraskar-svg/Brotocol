import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SectionEyebrow } from '@/components/common/BrandMark';
import { industriesData } from '@/data/industries';
import { whyBrotocolPillars } from '@/data/services';

export const IndustriesAndWhySection: React.FC = () => {
  return (
    <>
      {/* SECTION 10 — INDUSTRIES WE SERVE */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionEyebrow label="INDUSTRIES WE SERVE" />
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#020617] sm:text-4xl">
              Practical Technology Across Core Business Sectors.
            </h2>
            <p className="mt-3 text-base text-[#64748B]">
              Our divisions are structured around the practical requirements of
              local and growing businesses across Maharashtra and India.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industriesData.map((industry, index) => (
              <div
                key={industry.id}
                className={`rounded-2xl border border-[#E2E8F0] bg-[#FEFFFF] p-6 transition-colors hover:border-[#AFEAEA] ${
                  index === industriesData.length - 1 ? 'sm:col-span-2 lg:col-span-3' : ''
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-[#020617]">
                    {industry.name}
                  </h3>
                  <span className="rounded-full bg-[#EEFCFC] px-2.5 py-0.5 text-[11px] font-semibold text-[#0D7F80] ring-1 ring-[#AFEAEA]">
                    {industry.divisionFocus}
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-[#64748B]">
                  {industry.application}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — WHY BROTOCOL */}
      <section
        id="why-brotocol"
        className="border-t border-[#E2E8F0] bg-gradient-to-b from-[#EEFCFC]/55 to-[#F1F5F9]/85 py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:grid-cols-12 lg:items-start lg:gap-12 xl:gap-16">
            {/* Left Intro Column */}
            <div className="max-w-2xl lg:sticky lg:top-28 lg:col-span-5 lg:max-w-none">
              <SectionEyebrow label="WHY BROTOCOL" />
              <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.16] tracking-[-0.02em] text-[#020617] sm:text-[34px] lg:text-[38px]">
                Practical Technology.
                <br className="hidden sm:inline" /> Thoughtful Execution.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-[#64748B] sm:text-base">
                We focus on clear scope, dependable engineering, and systems
                that real staff and customers can use every day without
                unnecessary complexity.
              </p>
            </div>

            {/* Right Seven-Card Grid (2x3 symmetrical pairs + deliberate spanning foundation) */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-7">
              {whyBrotocolPillars.map((pillar, index) => {
                const isFinalPillar = index === whyBrotocolPillars.length - 1;
                return (
                  <article
                    key={pillar.title}
                    className={`flex h-full flex-col rounded-xl border bg-white p-5 transition-colors duration-200 sm:p-6 ${
                      isFinalPillar
                        ? 'border-[#AFEAEA] sm:col-span-2'
                        : 'border-[#E2E8F0] hover:border-[#AFEAEA]'
                    }`}
                  >
                    <div
                      className={
                        isFinalPillar
                          ? 'sm:grid sm:grid-cols-12 sm:items-start sm:gap-5'
                          : ''
                      }
                    >
                      <div
                        className={`flex items-start gap-3.5 ${
                          isFinalPillar ? 'sm:col-span-5' : ''
                        }`}
                      >
                        <span
                          className="flex h-[22px] w-5 shrink-0 items-center justify-center text-[#0D7F80]"
                          aria-hidden="true"
                        >
                          <CheckCircle2 className="h-[18px] w-[18px]" />
                        </span>
                        <h3 className="min-w-0 flex-1 font-display text-[15px] font-semibold leading-[22px] text-[#020617] sm:text-base">
                          {pillar.title}
                        </h3>
                      </div>
                      <p
                        className={`mt-2 pl-[34px] text-sm leading-[1.65] text-[#64748B] ${
                          isFinalPillar ? 'sm:col-span-7 sm:mt-0 sm:pl-0' : ''
                        }`}
                      >
                        {pillar.detail}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
