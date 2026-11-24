import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CircularStamp, SectionEyebrow } from '@/components/common/BrandMark';
import aboutCollabImg from '@/assets/images/about-collab.jpg';
import heroNfcImg from '@/assets/images/hero-nfc.jpg';

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
    <section id="about" className="bg-[#F1F5F9]/75 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow label="ABOUT BROTOCOL" align="center" />
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#020617] sm:text-4xl">
            Building Smarter Solutions for Real Business Challenges.
          </h2>
        </div>

        {/* Two-column editorial & stacked imagery */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Visual Composition */}
          <div className="relative lg:col-span-6">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
                <img
                  src={aboutCollabImg}
                  alt="BROTOCOL product and software planning session around laptops and wireframes"
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover grayscale contrast-105"
                />
              </div>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
                  <img
                    src={heroNfcImg}
                    alt="Minimalist matte NFC smart card next to a smartphone"
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover grayscale contrast-105"
                  />
                </div>
                <div className="col-span-5 flex flex-col justify-between rounded-2xl bg-[#0D7F80] p-4 text-white">
                  <span className="text-[10px] font-semibold tracking-widest text-[#E0F7F7] uppercase">
                    Brand Promise
                  </span>
                  <p className="font-display text-sm font-semibold leading-snug sm:text-base">
                    We build technology that makes businesses work smarter.
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 sm:block">
              <CircularStamp text="TECHNOLOGY · INNOVATION · AUTOMATION · " />
            </div>
          </div>

          {/* Right Narrative & Divisions Overview */}
          <div className="lg:col-span-6">
            <p className="text-base leading-relaxed text-[#64748B] sm:text-lg">
              BROTOCOL is an emerging technology company focused on helping
              businesses modernize the way they operate. We combine smart
              physical products, custom software and automation to develop
              solutions that solve practical business problems.
            </p>

            <div className="mt-8 space-y-5 border-t border-[#E2E8F0] pt-6">
              {[
                {
                  code: '01',
                  name: 'BROTOCOL Smart',
                  desc: 'NFC Google Review Cards and Smart Digital Menu Stands connecting physical counters to digital destinations.',
                },
                {
                  code: '02',
                  name: 'BROTOCOL Hospitality',
                  desc: 'QR-based table ordering, Kitchen Order Tickets (KOT), counter tracking, and restaurant administration.',
                },
                {
                  code: '03',
                  name: 'BROTOCOL Systems',
                  desc: 'Custom websites, internal business applications, REST APIs, and practical workflow automation.',
                },
              ].map((div) => (
                <div key={div.code} className="flex items-start gap-4">
                  <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E0F7F7] font-display text-xs font-bold text-[#0D7F80] ring-1 ring-[#AFEAEA]">
                    {div.code}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-[#020617]">
                      {div.name}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                      {div.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full bg-[#0D7F80] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0C6A6B]"
              >
                <span>Discover BROTOCOL</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom 4-column Factual Foundation Bar */}
        <div className="mt-14 grid grid-cols-2 gap-6 border-t border-[#E2E8F0] pt-10 lg:grid-cols-4">
          {factualPillars.map((item, idx) => (
            <div
              key={item.label}
              className={`${
                idx !== 0 ? 'lg:border-l lg:border-[#E2E8F0] lg:pl-6' : ''
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#0D7F80] ring-2 ring-[#AFEAEA]" />
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
