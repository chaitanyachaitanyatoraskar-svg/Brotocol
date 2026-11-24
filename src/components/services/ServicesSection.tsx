import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { SectionEyebrow } from '@/components/common/BrandMark';
import { divisionsData } from '@/data/services';
import heroNfcImg from '@/assets/images/hero-nfc.jpg';
import heroHospitalityImg from '@/assets/images/hero-hospitality.jpg';
import heroSoftwareImg from '@/assets/images/hero-software.jpg';

export const ServicesSection: React.FC = () => {
  const smart = divisionsData.find((d) => d.id === 'smart')!;
  const hospitality = divisionsData.find((d) => d.id === 'hospitality')!;
  const systems = divisionsData.find((d) => d.id === 'systems')!;

  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative border-b border-[#E2E8F0] bg-[#FFFFFF]"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Editorial Header Band */}
        <div className="grid gap-6 border-b border-[#E2E8F0] pb-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionEyebrow label="OUR DIVISIONS" />
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.12] text-[#020617] sm:text-4xl lg:text-[42px]">
              Technology Solutions{' '}
              <span className="block text-[#0D7F80] sm:inline">
                Built Around Your Business.
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 lg:col-span-5 lg:items-end lg:text-right">
            <p className="max-w-md text-base leading-relaxed text-[#64748B]">
              Every business operates differently. We develop practical digital
              products and systems designed around real operational needs.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#FFFFFF] px-5 py-2.5 text-sm font-medium text-[#020617] transition-colors hover:border-[#AFEAEA] hover:bg-[#EEFCFC] hover:text-[#0D7F80]"
            >
              <span>Explore All Solutions</span>
              <ArrowRight className="h-4 w-4 text-[#0D7F80]" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Refined Ecosystem Layout: 4-col Compact Smart + 8-col Teal Hospitality Centerpiece, followed by 12-col Horizontal Enterprise Systems */}
        <div
          className={`mt-10 space-y-6 transition-all duration-700 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >
          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            {/* DIVISION 01 — BROTOCOL SMART (4-col Compact Light Hardware Panel) */}
            <article className="group flex flex-col justify-between overflow-hidden rounded-[22px] border border-[#E2E8F0] bg-[#F1F5F9]/70 p-6 transition-colors duration-300 hover:border-[#AFEAEA] sm:p-7 lg:col-span-4">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs font-semibold text-[#0D7F80]">
                    01 · {smart.name}
                  </span>
                  <span className="rounded-full border border-[#AFEAEA] bg-[#EEFCFC] px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#0D7F80] uppercase">
                    {smart.categoryLabel}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-[#020617] sm:text-[22px]">
                  {smart.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#64748B]">
                  {smart.description}
                </p>

                <div className="mt-5 overflow-hidden rounded-[14px] border border-[#E2E8F0] bg-white">
                  <img
                    src={heroNfcImg}
                    alt="BROTOCOL Smart NFC card beside a smartphone on a counter"
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover grayscale contrast-105 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <ul className="mt-4 space-y-2">
                  {smart.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-between rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2 text-xs font-medium text-[#020617]"
                    >
                      <span>{item}</span>
                      <Check
                        className="h-3.5 w-3.5 shrink-0 text-[#0D7F80]"
                        aria-hidden="true"
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 border-t border-[#E2E8F0] pt-4">
                <Link
                  to={smart.route}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#020617] transition-colors group-hover:text-[#0D7F80]"
                >
                  <span>{smart.ctaLabel}</span>
                  <ArrowRight
                    className="h-4 w-4 text-[#0D7F80] transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>

            {/* DIVISION 02 — BROTOCOL HOSPITALITY (8-col Teal Visual Centerpiece with Integrated Full-Height Split) */}
            <article className="group grid overflow-hidden rounded-[22px] bg-[#0D7F80] text-white md:grid-cols-12 lg:col-span-8">
              {/* Left Integrated Content Column */}
              <div className="flex flex-col justify-between p-6 sm:p-8 md:col-span-7">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-mono text-xs font-semibold text-[#AFEAEA]">
                      02 · {hospitality.name}
                    </span>
                    <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white uppercase">
                      {hospitality.categoryLabel}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-semibold leading-snug text-white sm:text-[28px]">
                    {hospitality.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#E0F7F7] sm:text-[15px]">
                    {hospitality.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {hospitality.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-sm font-medium text-white"
                      >
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/15">
                          <Check
                            className="h-3 w-3 text-[#AFEAEA]"
                            aria-hidden="true"
                          />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 space-y-4 border-t border-white/15 pt-5">
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium text-[#E0F7F7]">
                    <span className="rounded bg-white/10 px-2.5 py-1">
                      Table QR
                    </span>
                    <span aria-hidden="true" className="text-[#AFEAEA]">
                      →
                    </span>
                    <span className="rounded bg-white/10 px-2.5 py-1">
                      Order Queue
                    </span>
                    <span aria-hidden="true" className="text-[#AFEAEA]">
                      →
                    </span>
                    <span className="rounded bg-white/10 px-2.5 py-1">
                      Kitchen KOT
                    </span>
                  </div>

                  <div>
                    <Link
                      to={hospitality.route}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0D7F80] transition-colors hover:bg-[#EEFCFC]"
                    >
                      <span>{hospitality.ctaLabel}</span>
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Integrated Full-Height Editorial Image Column */}
              <div className="relative min-h-[240px] overflow-hidden border-t border-white/15 md:col-span-5 md:min-h-full md:border-l md:border-t-0">
                <img
                  src={heroHospitalityImg}
                  alt="Guest scanning a tabletop QR digital menu stand at a restaurant table"
                  loading="lazy"
                  className="h-full w-full object-cover object-center grayscale contrast-110 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#020617]/70 via-[#020617]/20 to-transparent p-4"
                >
                  <p className="text-[11px] font-medium tracking-wide text-[#E0F7F7]">
                    Dine-in ordering · Live kitchen sync
                  </p>
                </div>
              </div>
            </article>
          </div>

          {/* DIVISION 03 — BROTOCOL SYSTEMS (Full-Width Technical Showcase with Left Image / Right Engineering Spec) */}
          <article className="group grid overflow-hidden rounded-[22px] border border-[#020617] bg-[#020617] text-white lg:grid-cols-12">
            {/* Left Integrated Software Photography */}
            <div className="relative min-h-[240px] overflow-hidden border-b border-white/10 lg:col-span-5 lg:min-h-[320px] lg:border-b-0 lg:border-r">
              <img
                src={heroSoftwareImg}
                alt="Software developers building a custom web application and dashboard"
                loading="lazy"
                className="h-full w-full object-cover object-center grayscale contrast-105 transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-[#020617]/20"
              />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs">
                <span className="font-mono font-semibold text-[#AFEAEA]">
                  03 · {systems.name}
                </span>
                <span className="rounded-full border border-white/20 bg-[#020617]/75 px-2.5 py-0.5 text-[10px] font-medium text-[#E0F7F7]">
                  Custom Engineering
                </span>
              </div>
            </div>

            {/* Right Structured Technical Content */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-7 lg:p-10">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-[#AFEAEA] uppercase">
                    {systems.categoryLabel}
                  </span>
                  <span className="hidden font-mono text-[11px] text-[#94A3B8] sm:inline">
                    APIs · Databases · Workflows
                  </span>
                </div>

                <h3 className="mt-3 max-w-xl font-display text-2xl font-semibold leading-snug text-white sm:text-[28px]">
                  {systems.title}
                </h3>

                <p className="mt-2.5 max-w-2xl text-sm leading-relaxed text-[#94A3B8] sm:text-[15px]">
                  {systems.description}
                </p>

                {/* Hairline-divided capability index */}
                <div className="mt-6 grid divide-y divide-white/10 border-y border-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                  {systems.highlights.map((item, idx) => (
                    <div
                      key={item}
                      className="py-3 sm:px-4 sm:py-3.5 sm:first:pl-0 sm:last:pr-0"
                    >
                      <span className="font-mono text-[10px] font-semibold text-[#0D7F80]">
                        0{idx + 1}
                      </span>
                      <p className="mt-1 text-xs font-medium text-white sm:text-[13px]">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-1">
                <p className="text-xs text-[#94A3B8]">
                  Scoped around your operational workflow and data model.
                </p>
                <Link
                  to={systems.route}
                  className="inline-flex items-center gap-2 rounded-full bg-[#0D7F80] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0C6A6B]"
                >
                  <span>{systems.ctaLabel}</span>
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
