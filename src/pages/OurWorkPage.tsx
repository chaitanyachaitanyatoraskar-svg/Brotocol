import React from 'react';
import { SectionEyebrow } from '@/components/common/BrandMark';
import { PortfolioSection } from '@/components/portfolio/PortfolioSection';
import { FinalCtaBanner } from '@/components/contact/FinalCtaBanner';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

interface OurWorkPageProps {
  mode?: 'our-work' | 'case-studies';
}

export const OurWorkPage: React.FC<OurWorkPageProps> = ({
  mode = 'our-work',
}) => {
  const isCaseStudies = mode === 'case-studies';

  useDocumentMeta({
    title: `${isCaseStudies ? 'Case Studies' : 'Our Work'} — BROTOCOL`,
    description:
      'Explore BROTOCOL product demonstrations and concept architectures across smart NFC products, QR restaurant ordering, and custom business systems.',
    canonicalPath: isCaseStudies ? '/case-studies' : '/our-work',
  });

  return (
    <>
      <section className="bg-hero-aqua border-b border-[#E2E8F0] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label={isCaseStudies ? 'CASE STUDIES' : 'OUR WORK'} />
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-[#020617] sm:text-5xl">
            Product Demonstrations &amp; System Architectures.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg">
            Every entry below is transparently labeled as a product demo,
            demonstration, or concept project—illustrating how BROTOCOL solves
            practical operational challenges without fabricated client metrics.
          </p>
        </div>
      </section>

      <PortfolioSection />
      <FinalCtaBanner />
    </>
  );
};
