import React from 'react';
import { SectionEyebrow } from '@/components/common/BrandMark';
import { approachSteps } from '@/data/services';

export const ApproachSection: React.FC = () => {
  return (
    <section className="border-y border-[#E2E8F0] bg-gradient-to-b from-[#EEFCFC]/70 to-[#FFFFFF] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionEyebrow label="HOW WE WORK" />
          <h2 className="mt-4 font-display text-3xl font-semibold text-[#020617] sm:text-4xl">
            A Structured Approach From Discovery to Support.
          </h2>
          <p className="mt-3 text-base text-[#64748B]">
            Clear requirements, defined scope, and practical delivery so you
            know exactly what is being built and how it operates.
          </p>
        </div>

        {/* Desktop horizontal process / Mobile vertical timeline */}
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {approachSteps.map((step, index) => (
            <div
              key={step.step}
              className="relative flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-colors hover:border-[#AFEAEA]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0D7F80] font-display text-sm font-bold text-white">
                  {step.step}
                </span>
                {index < approachSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="ml-4 hidden h-px flex-1 bg-[#E2E8F0] md:block"
                  />
                )}
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold text-[#020617]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
