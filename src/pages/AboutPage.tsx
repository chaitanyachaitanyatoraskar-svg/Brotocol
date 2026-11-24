import React from 'react';
import { SectionEyebrow } from '@/components/common/BrandMark';
import { AboutSection } from '@/components/about/AboutSection';
import { TeamSection } from '@/components/team/TeamSection';
import { ApproachSection } from '@/components/services/ApproachSection';
import { FinalCtaBanner } from '@/components/contact/FinalCtaBanner';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export const AboutPage: React.FC = () => {
  useDocumentMeta({
    title: 'About BROTOCOL — Technology. Innovation. Automation.',
    description:
      'Learn about BROTOCOL, an emerging technology startup in Maharashtra combining smart NFC products, hospitality software, and custom business automation.',
    canonicalPath: '/about',
  });

  return (
    <>
      <section className="bg-hero-aqua border-b border-[#E2E8F0] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="WHO WE ARE" />
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-[#020617] sm:text-5xl">
            Technology. Innovation. Automation.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg">
            BROTOCOL is an emerging technology company focused on making
            practical digital products, restaurant technology, and custom
            business software accessible to organizations across Maharashtra and
            India.
          </p>
        </div>
      </section>

      <AboutSection />
      <ApproachSection />
      <TeamSection />
      <FinalCtaBanner />
    </>
  );
};
