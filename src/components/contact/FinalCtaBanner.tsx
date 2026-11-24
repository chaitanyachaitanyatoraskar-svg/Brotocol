import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionEyebrow } from '@/components/common/BrandMark';

export const FinalCtaBanner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-16 text-white sm:py-20">
      <div
        aria-hidden="true"
        className="bg-diagonal-hatch pointer-events-none absolute inset-x-0 top-0 h-5 border-b border-white/10"
      />
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <SectionEyebrow label="LET'S WORK TOGETHER" tone="dark" />
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
            Have a Business Challenge? Let&apos;s Build the Solution.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#94A3B8]">
            Tell us what you are trying to improve. We&apos;ll help you identify
            the right technology and a practical way to implement it.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3.5">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0D7F80] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0C6A6B]"
          >
            <span>Start a Project</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-[#AFEAEA] hover:text-[#E0F7F7]"
          >
            <span>Contact BROTOCOL</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
