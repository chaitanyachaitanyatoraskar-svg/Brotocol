import React from 'react';
import { SectionEyebrow } from '@/components/common/BrandMark';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

interface LegalPageProps {
  doc: 'privacy' | 'terms';
}

export const LegalPage: React.FC<LegalPageProps> = ({ doc }) => {
  const isPrivacy = doc === 'privacy';

  useDocumentMeta({
    title: `${isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'} — BROTOCOL`,
    description: isPrivacy
      ? 'BROTOCOL privacy and personal data handling practices.'
      : 'General terms and conditions governing BROTOCOL products, software services, and website usage.',
    canonicalPath: isPrivacy ? '/privacy-policy' : '/terms',
  });

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionEyebrow label="LEGAL INFORMATION" />
        <h1 className="mt-4 font-display text-3xl font-semibold text-[#020617] sm:text-4xl">
          {isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}
        </h1>
        <p className="mt-2 text-xs text-[#64748B]">
          Applicable across BROTOCOL digital touchpoints and enquiry channels.
        </p>

        {isPrivacy ? (
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#64748B] sm:text-base">
            <section>
              <h2 className="font-display text-lg font-semibold text-[#020617]">
                1. Data Collection &amp; Purpose Limitation
              </h2>
              <p className="mt-2">
                BROTOCOL collects only the personal and business contact details
                you voluntarily submit through project enquiry or subscription
                forms (such as your name, business name, email address, phone
                number, and project requirements) strictly for evaluating and
                responding to your enquiry.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-[#020617]">
                2. Storage, Security &amp; Retention
              </h2>
              <p className="mt-2">
                Enquiry data is transmitted only when an authorized backend
                endpoint is configured over HTTPS. We apply data minimization and
                access controls aligned with applicable Indian data protection
                principles, including the Digital Personal Data Protection Act,
                2023.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-[#020617]">
                3. Third-Party Platforms &amp; Google Review Independence
              </h2>
              <p className="mt-2">
                BROTOCOL Smart products route users directly to business-selected
                external destinations (such as genuine Google Review pages or
                digital menus). BROTOCOL is independent of Google and does not
                access or control third-party platform privacy practices.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-[#020617]">
                4. Correction &amp; Deletion Requests
              </h2>
              <p className="mt-2">
                You may request access to, correction of, or deletion of
                submitted enquiry information at any time through our official
                contact channels once active.
              </p>
            </section>
          </div>
        ) : (
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#64748B] sm:text-base">
            <section>
              <h2 className="font-display text-lg font-semibold text-[#020617]">
                1. Scope of Products &amp; Services
              </h2>
              <p className="mt-2">
                Descriptions on this website explain BROTOCOL&apos;s smart NFC
                products, hospitality software, and custom software services.
                Specific deliverables, timelines, pricing, and ongoing
                maintenance obligations are governed exclusively by a written
                proposal or signed Scope of Work agreed for each project.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-[#020617]">
                2. Demonstration Showcases
              </h2>
              <p className="mt-2">
                Portfolio entries labeled &ldquo;Product Demo&rdquo;,
                &ldquo;Demonstration&rdquo;, or &ldquo;Concept Project&rdquo;
                illustrate technical architecture and intended workflows and do
                not represent guaranteed commercial outcomes.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-[#020617]">
                3. Lawful Use of Smart NFC Products
              </h2>
              <p className="mt-2">
                Clients using Google Review NFC Cards or Smart Digital Menu
                Stands must provide accurate, lawful destination URLs and comply
                with applicable platform policies, including refraining from
                incentivized or deceptive review practices.
              </p>
            </section>
            <section>
              <h2 className="font-display text-lg font-semibold text-[#020617]">
                4. Support &amp; Maintenance
              </h2>
              <p className="mt-2">
                Ongoing hosting, third-party API expenses, and software
                maintenance are provided strictly in accordance with the
                maintenance terms specified in each client agreement.
              </p>
            </section>
          </div>
        )}
      </div>
    </section>
  );
};
