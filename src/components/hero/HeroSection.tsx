import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#F1F5F9] px-3 py-3 sm:px-4 sm:py-4">
      <div className="bg-hero-surface flex min-h-[540px] w-full flex-col items-center justify-center rounded-[24px] px-5 py-20 sm:min-h-[600px] sm:px-8 sm:py-24 lg:min-h-[640px] lg:px-12 lg:py-28">
        <div className="mx-auto w-full max-w-[1220px] text-center">
          {/* Oversized Centered Two-Line Headline */}
          <h1 className="mx-auto max-w-[1220px] font-display text-[clamp(38px,5vw,76px)] font-semibold leading-[1.06] tracking-[-0.02em] text-[#020617]">
            Technology that works.
            <br className="hidden sm:inline" />{' '}
            Business that moves forward.
          </h1>

          {/* Centered Supporting Description */}
          <p className="mx-auto mt-6 max-w-[800px] text-base leading-[1.6] text-[#64748B] sm:mt-7 sm:text-[19px]">
            From smart NFC products and hospitality technology to custom software
            and business automation, BROTOCOL builds practical digital solutions
            that help businesses work smarter.
          </p>

          {/* Reference-Matched CTA Buttons */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5 sm:mt-10 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full bg-[#020617] py-2 pl-6 pr-2 text-sm font-medium text-white transition-colors hover:bg-[#0D7F80]"
            >
              <span>Discuss Your Project</span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#020617]">
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-6 py-3.5 text-sm font-medium text-[#020617] transition-colors hover:border-[#AFEAEA] hover:bg-[#EEFCFC]"
            >
              <span>Explore Our Solutions</span>
              <ArrowRight className="h-4 w-4 text-[#020617]" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
