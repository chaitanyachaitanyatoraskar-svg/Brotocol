import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SectionEyebrow } from '@/components/common/BrandMark';

const capabilities = [
  'Smart physical products',
  'Custom software',
  'Business applications',
  'Operational systems',
  'Workflow automation',
];

const divisionIndex = [
  {
    code: '01',
    name: 'BROTOCOL Smart',
    tag: 'Physical-to-Digital',
    desc: 'NFC Google Review Cards and Smart Digital Menu Stands connecting physical counters to digital destinations.',
    route: '/divisions/smart',
  },
  {
    code: '02',
    name: 'BROTOCOL Hospitality',
    tag: 'Ordering & Kitchen Flow',
    desc: 'QR-based table ordering, Kitchen Order Tickets (KOT), counter tracking, and restaurant administration.',
    route: '/divisions/hospitality',
  },
  {
    code: '03',
    name: 'BROTOCOL Systems',
    tag: 'Engineering & Automation',
    desc: 'Custom websites, internal business applications, REST APIs, and practical workflow automation.',
    route: '/divisions/systems',
  },
];

const factualPillars = [
  {
    value: '03',
    label: 'Integrated Divisions',
    detail: 'Smart, Hospitality & Systems',
  },
  {
    value: 'NFC + QR',
    label: 'Dual-Access Hardware',
    detail: 'App-free mobile customer flow',
  },
  {
    value: 'MH → IN',
    label: 'Maharashtra & India',
    detail: 'Local onboarding, wider reach',
  },
  {
    value: 'Scoped',
    label: 'Clear Delivery Model',
    detail: 'Documented scope & support',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="border-b border-[#E2E8F0] bg-[#F8FAFC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Typography-Led Manifesto & Numbered Division Architecture */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Left Manifesto & Company Introduction */}
          <div className="lg:col-span-6">
            <SectionEyebrow label="ABOUT BROTOCOL" />

            <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-[#020617] sm:text-4xl lg:text-[38px]">
              We don&apos;t build technology for the sake of technology.
              <span className="mt-1.5 block text-[#0D7F80]">
                We build systems that make businesses work smarter.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#64748B] sm:text-[17px]">
              BROTOCOL is a technology company focused on helping businesses
              modernize how they operate—uniting reliable software architecture
              with practical day-to-day workflows.
            </p>

            {/* Technical Capability Strip */}
            <div className="mt-6">
              <p className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[#64748B] uppercase">
                Core Capabilities
              </p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {capabilities.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-[#E2E8F0] bg-white px-3 py-1.5 text-xs font-medium text-[#020617]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-[#020617] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0D7F80]"
              >
                <span>Discover BROTOCOL</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Numbered Divisions Specification Panel */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white">
              <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#F1F5F9]/60 px-6 py-3.5">
                <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[#020617] uppercase">
                  Operating Architecture
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] text-[#0D7F80]">
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-[#0D7F80]"
                  />
                  03 Divisions
                </span>
              </div>

              <div className="divide-y divide-[#E2E8F0]">
                {divisionIndex.map((div) => (
                  <Link
                    key={div.code}
                    to={div.route}
                    className="group flex items-start justify-between gap-4 p-6 transition-colors hover:bg-[#F8FAFC]"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-[#AFEAEA] bg-[#EEFCFC] font-mono text-xs font-bold text-[#0D7F80]">
                        {div.code}
                      </span>
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="font-display text-base font-semibold text-[#020617] transition-colors group-hover:text-[#0D7F80]">
                            {div.name}
                          </h3>
                          <span className="font-mono text-[10px] font-medium tracking-wider text-[#64748B] uppercase">
                            {div.tag}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-[#64748B]">
                          {div.desc}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      className="mt-1 h-4 w-4 shrink-0 text-[#94A3B8] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0D7F80]"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4-column Factual Foundation Bar */}
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[#E2E8F0] pt-10 lg:grid-cols-4">
          {factualPillars.map((item, idx) => (
            <div
              key={item.label}
              className={
                idx !== 0 ? 'lg:border-l lg:border-[#E2E8F0] lg:pl-6' : ''
              }
            >
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-[#0D7F80]" />
                <p className="font-display text-2xl font-semibold text-[#020617] sm:text-3xl">
                  {item.value}
                </p>
              </div>
              <p className="mt-1.5 text-sm font-semibold text-[#020617]">
                {item.label}
              </p>
              <p className="mt-0.5 text-xs text-[#64748B]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
