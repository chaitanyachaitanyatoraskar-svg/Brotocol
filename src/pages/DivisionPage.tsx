import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { SectionEyebrow } from '@/components/common/BrandMark';
import { ProductPreview } from '@/components/common/ProductPreview';
import { ContactSection } from '@/components/contact/ContactSection';
import { divisionsData } from '@/data/services';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

interface DivisionPageProps {
  divisionId: 'smart' | 'hospitality' | 'systems';
}

const hospitalityModules = [
  {
    code: 'Module A',
    name: 'Customer Ordering Interface',
    detail:
      'Table QR opens a mobile-first menu with categories, item notes, shopping cart, and order confirmation—no app download required.',
  },
  {
    code: 'Module B',
    name: 'Order Processing System',
    detail:
      'Server-side validation, persistent database transactions, duplicate submission prevention, and reliable table routing.',
  },
  {
    code: 'Module C',
    name: 'Kitchen Order Ticket (KOT) System',
    detail:
      'Distance-readable live kitchen view displaying table number, ordered items, quantities, notes, and configurable status updates.',
  },
  {
    code: 'Module D',
    name: 'Counter Dashboard',
    detail:
      'Centralized front-desk visibility across active tables, preparation progress, and order delays without interrupting kitchen staff.',
  },
  {
    code: 'Module E',
    name: 'Waiter Call System',
    detail:
      'Rate-limited customer assistance requests routed cleanly to floor staff and marked resolved once attended.',
  },
  {
    code: 'Module F',
    name: 'Restaurant Admin Panel',
    detail:
      'Manage categories, menu items, pricing updates, table QR codes, staff roles, and order history within the agreed scope.',
  },
];

const systemsPhases = [
  'Discovery & Operational Audit',
  'Requirements & Scope Documentation',
  'UI/UX Flows & Architecture',
  'Modular Frontend & API Build',
  'Functional & Security Testing',
  'Production Deployment & SSL',
  'Staff Onboarding & Handover',
  'Agreed Maintenance & Support',
];

export const DivisionPage: React.FC<DivisionPageProps> = ({ divisionId }) => {
  const division = divisionsData.find((d) => d.id === divisionId)!;

  useDocumentMeta({
    title: `${division.name} — BROTOCOL`,
    description: division.overview,
    canonicalPath: division.route,
  });

  const defaultService =
    divisionId === 'smart'
      ? 'BROTOCOL SMART'
      : divisionId === 'hospitality'
      ? 'BROTOCOL HOSPITALITY'
      : 'BROTOCOL SYSTEMS';

  return (
    <>
      {/* Division Hero */}
      <section className="bg-hero-aqua border-b border-[#E2E8F0] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#64748B] transition-colors hover:text-[#0D7F80]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to All Solutions</span>
          </Link>

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionEyebrow
                label={`${division.code} · ${division.categoryLabel}`}
              />
              <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#020617] sm:text-5xl">
                {division.name}
              </h1>
              <p className="mt-2 font-display text-xl font-semibold text-[#0D7F80]">
                {division.title}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64748B]">
                {division.overview}
              </p>

              <div className="mt-8 flex flex-wrap gap-3.5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0D7F80] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#0C6A6B]"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  to="/our-work"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-6 py-3 text-sm font-semibold text-[#020617] transition-colors hover:border-[#AFEAEA] hover:bg-[#EEFCFC] hover:text-[#0D7F80]"
                >
                  <span>View Related Demos</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ProductPreview
                kind={
                  divisionId === 'smart'
                    ? 'nfc-review'
                    : divisionId === 'hospitality'
                    ? 'qr-ordering'
                    : 'business-system'
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Confirmed Capabilities vs Future Roadmap */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 lg:col-span-7">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#0D7F80]" aria-hidden="true" />
              <h2 className="font-display text-2xl font-semibold text-[#020617]">
                Core Capabilities
              </h2>
            </div>
            <p className="mt-2 text-sm text-[#64748B]">
              Confirmed functionality and delivery scope currently offered under{' '}
              {division.name}.
            </p>
            <ul className="mt-6 space-y-3">
              {division.confirmedCapabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-start gap-3 rounded-xl bg-[#F1F5F9] p-3.5 text-sm text-[#020617]"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#0D7F80]"
                    aria-hidden="true"
                  />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-[#AFEAEA] bg-[#EEFCFC] p-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#0D7F80]" aria-hidden="true" />
                <h2 className="font-display text-lg font-semibold text-[#020617]">
                  Future Roadmap Possibilities
                </h2>
              </div>
              <p className="mt-1.5 text-xs text-[#64748B]">
                Evaluated enhancements planned for future phases—not advertised
                as standard included features today.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[#020617]">
                {division.futureRoadmap.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D7F80]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h3 className="font-display text-base font-semibold text-[#020617]">
                Designed For
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-[#64748B]">
                {division.targetCustomers.map((cust) => (
                  <li key={cust} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#0D7F80]" />
                    <span>{cust}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Division-Specific Architecture Details */}
      {divisionId === 'smart' && (
        <section className="border-t border-[#E2E8F0] bg-[#F1F5F9]/75 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <ProductPreview kind="nfc-review" />
              <ProductPreview kind="menu-stand" />
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#E2E8F0] bg-white p-5 text-sm text-[#64748B]">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#0D7F80]" aria-hidden="true" />
              <p>
                <strong className="text-[#020617]">Platform Compliance:</strong>{' '}
                BROTOCOL Smart review cards direct customers straight to your
                genuine Google Review destination without review gating, fake
                reviews, or incentives. BROTOCOL is an independent technology
                provider and is not affiliated with Google.
              </p>
            </div>
          </div>
        </section>
      )}

      {divisionId === 'hospitality' && (
        <section className="border-t border-[#E2E8F0] bg-[#F1F5F9]/75 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionEyebrow label="SYSTEM ARCHITECTURE" />
            <h2 className="mt-3 font-display text-3xl font-semibold text-[#020617]">
              Six Connected Modules for Dine-In Operations.
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {hospitalityModules.map((mod) => (
                <div
                  key={mod.code}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-6"
                >
                  <span className="text-xs font-bold tracking-wider text-[#0D7F80] uppercase">
                    {mod.code}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-[#020617]">
                    {mod.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
                    {mod.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {divisionId === 'systems' && (
        <section className="border-t border-[#E2E8F0] bg-[#F1F5F9]/75 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionEyebrow label="DELIVERY LIFECYCLE" />
            <h2 className="mt-3 font-display text-3xl font-semibold text-[#020617]">
              Structured Custom Engineering Workflow.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {systemsPhases.map((phase, idx) => (
                <div
                  key={phase}
                  className="rounded-2xl border border-[#E2E8F0] bg-white p-5"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0D7F80] font-display text-xs font-bold text-white">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-3 font-display text-base font-semibold text-[#020617]">
                    {phase}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection defaultService={defaultService} />
    </>
  );
};
