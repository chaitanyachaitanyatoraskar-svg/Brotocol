import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Nfc, UtensilsCrossed } from 'lucide-react';
import { SectionEyebrow } from '@/components/common/BrandMark';

interface DivisionContainer {
  number: string;
  division: string;
  category: string;
  title: string;
  description: string;
  ctaLabel: string;
  route: string;
  tone: 'light' | 'teal' | 'dark';
  Icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
}

const divisionContainers: DivisionContainer[] = [
  {
    number: '01',
    division: 'BROTOCOL SMART',
    category: 'SMART PRODUCTS',
    title: 'Connect Your Business to the Digital World.',
    description:
      'Smart NFC and QR-enabled products that make it easier for customers to access your digital business presence.',
    ctaLabel: 'Explore Smart Solutions',
    route: '/divisions/smart',
    tone: 'light',
    Icon: Nfc,
  },
  {
    number: '02',
    division: 'BROTOCOL HOSPITALITY',
    category: 'HOSPITALITY TECHNOLOGY',
    title: 'Smarter Ordering. Better Restaurant Operations.',
    description:
      'Digital ordering and kitchen workflow solutions designed to simplify restaurant operations.',
    ctaLabel: 'Explore Hospitality Solutions',
    route: '/divisions/hospitality',
    tone: 'teal',
    Icon: UtensilsCrossed,
  },
  {
    number: '03',
    division: 'BROTOCOL SYSTEMS',
    category: 'SOFTWARE & AUTOMATION',
    title: 'Software Designed Around the Way You Work.',
    description:
      'Custom business applications, management systems, dashboards, and workflow automation built around your operational requirements.',
    ctaLabel: 'Explore Software Solutions',
    route: '/divisions/systems',
    tone: 'dark',
    Icon: Code2,
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="border-b border-[#E2E8F0] bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Clean Left-Aligned Section Heading */}
        <div className="max-w-2xl">
          <SectionEyebrow label="OUR DIVISIONS" />
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-[#020617] sm:text-4xl lg:text-[42px]">
            Solutions Built Around{' '}
            <span className="text-[#0D7F80]">Your Business</span>
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-[#64748B] sm:text-[17px]">
            BROTOCOL builds practical digital products, intelligent business
            systems, and connected technologies designed around how businesses
            actually operate.
          </p>
        </div>

        {/* Simple Three-Column Reference Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
          {divisionContainers.map((item, index) => {
            const isLight = item.tone === 'light';
            const isTeal = item.tone === 'teal';
            const Icon = item.Icon;

            const cardClasses = isLight
              ? 'border-[#E2E8F0] bg-[#F1F5F9]/75 text-[#020617] hover:border-[#0D7F80]/55 hover:bg-[#F8FAFC]'
              : isTeal
              ? 'border-[#0C6A6B] bg-[#0D7F80] text-white hover:border-[#AFEAEA]/60'
              : 'border-[#020617] bg-[#020617] text-white hover:border-[#0D7F80]/70';

            const metaClasses = isLight
              ? 'text-[#0D7F80]'
              : isTeal
              ? 'text-[#E0F7F7]'
              : 'text-[#AFEAEA]';

            const categoryClasses = isLight
              ? 'border-[#E2E8F0] bg-white text-[#64748B]'
              : isTeal
              ? 'border-white/20 bg-white/10 text-[#EEFCFC]'
              : 'border-white/15 bg-white/5 text-[#94A3B8]';

            const descClasses = isLight
              ? 'text-[#64748B]'
              : isTeal
              ? 'text-[#E0F7F7]'
              : 'text-[#94A3B8]';

            const ctaClasses = isLight
              ? 'text-[#020617] group-hover:text-[#0D7F80]'
              : isTeal
              ? 'text-white'
              : 'text-white group-hover:text-[#AFEAEA]';

            const arrowClasses = isLight
              ? 'text-[#0D7F80]'
              : isTeal
              ? 'text-[#EEFCFC]'
              : 'text-[#AFEAEA]';

            const iconBoxClasses = isLight
              ? 'border-[#E2E8F0] bg-white text-[#0D7F80]'
              : isTeal
              ? 'border-white/20 bg-white/12 text-white'
              : 'border-white/15 bg-white/5 text-[#AFEAEA]';

            return (
              <Link
                key={item.number}
                to={item.route}
                className={`group flex h-full flex-col justify-between rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7 ${cardClasses} ${
                  index === 2 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div>
                    <span
                      className={`block font-mono text-[11px] font-semibold tracking-wider uppercase ${metaClasses}`}
                    >
                      {item.number} / {item.division}
                    </span>

                    <span
                      className={`mt-2 inline-block rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.08em] uppercase ${categoryClasses}`}
                    >
                      {item.category}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-xl font-semibold leading-snug sm:text-[22px]">
                    {item.title}
                  </h3>

                  <p className={`mt-2.5 text-sm leading-relaxed ${descClasses}`}>
                    {item.description}
                  </p>
                </div>

                {/* Bottom Link + Rounded Square Icon Box */}
                <div className="mt-8 flex items-end justify-between gap-3">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.03em] uppercase whitespace-nowrap transition-colors ${ctaClasses}`}
                  >
                    <span>{item.ctaLabel}</span>
                    <ArrowRight
                      className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 ${arrowClasses}`}
                      aria-hidden="true"
                    />
                  </span>

                  <span
                    aria-hidden="true"
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 sm:h-13 sm:w-13 ${iconBoxClasses}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
