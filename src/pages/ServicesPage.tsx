import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { SectionEyebrow } from '@/components/common/BrandMark';
import { ApproachSection } from '@/components/services/ApproachSection';
import { FinalCtaBanner } from '@/components/contact/FinalCtaBanner';
import { divisionsData } from '@/data/services';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export const ServicesPage: React.FC = () => {
  useDocumentMeta({
    title: 'Services & Divisions — BROTOCOL',
    description:
      'Explore BROTOCOL Smart, BROTOCOL Hospitality, and BROTOCOL Systems—NFC products, QR restaurant ordering, custom software, and business automation.',
    canonicalPath: '/services',
  });

  return (
    <>
      <section className="bg-hero-aqua border-b border-[#E2E8F0] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="OUR SERVICES" />
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-[#020617] sm:text-5xl">
            Three Divisions Built Around Practical Business Needs.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg">
            BROTOCOL combines physical smart products, hospitality ordering
            software, and custom engineering under one cohesive roof.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {divisionsData.map((div) => (
            <div
              key={div.id}
              className="grid gap-8 rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <span className="text-xs font-bold tracking-widest text-[#0D7F80] uppercase">
                  {div.code} · {div.categoryLabel}
                </span>
                <h2 className="mt-2 font-display text-2xl font-semibold text-[#020617] sm:text-3xl">
                  {div.name}
                </h2>
                <p className="mt-2 font-medium text-[#0D7F80]">{div.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                  {div.overview}
                </p>
                <Link
                  to={div.route}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0D7F80] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0C6A6B]"
                >
                  <span>{div.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="rounded-xl bg-[#F1F5F9] p-6 lg:col-span-7">
                <h3 className="font-display text-sm font-semibold tracking-wide text-[#020617] uppercase">
                  Confirmed Capabilities
                </h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {div.confirmedCapabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2.5 text-sm text-[#020617]"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#0D7F80]"
                        aria-hidden="true"
                      />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ApproachSection />
      <FinalCtaBanner />
    </>
  );
};
