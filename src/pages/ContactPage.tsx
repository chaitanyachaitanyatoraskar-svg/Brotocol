import React from 'react';
import { SectionEyebrow } from '@/components/common/BrandMark';
import { ContactSection } from '@/components/contact/ContactSection';
import { FaqSection } from '@/components/faq/FaqSection';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export const ContactPage: React.FC = () => {
  useDocumentMeta({
    title: 'Contact BROTOCOL — Start a Project',
    description:
      'Get in touch with BROTOCOL to discuss NFC smart products, QR restaurant ordering systems, custom software, or business workflow automation.',
    canonicalPath: '/contact',
  });

  return (
    <>
      <section className="bg-hero-aqua border-b border-[#E2E8F0] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="CONTACT US" />
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-[#020617] sm:text-5xl">
            Let&apos;s Discuss What You Need to Build.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[#64748B] sm:text-lg">
            Share your operational goal or product interest below. We focus on
            clear written scope, practical timelines, and solutions tailored to
            your business across Maharashtra and India.
          </p>
        </div>
      </section>

      <ContactSection />
      <FaqSection />
    </>
  );
};
