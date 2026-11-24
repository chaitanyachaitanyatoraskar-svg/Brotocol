import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { SectionEyebrow } from '@/components/common/BrandMark';
import { ProductPreview } from '@/components/common/ProductPreview';
import { FinalCtaBanner } from '@/components/contact/FinalCtaBanner';
import { productsData } from '@/data/products';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

const previewMap: Record<string, 'nfc-review' | 'menu-stand' | 'qr-ordering' | 'business-system'> = {
  'google-review-nfc-card': 'nfc-review',
  'smart-digital-menu-stand': 'menu-stand',
  'qr-restaurant-ordering-system': 'qr-ordering',
  'custom-business-systems': 'business-system',
};

export const ProductsPage: React.FC = () => {
  useDocumentMeta({
    title: 'Products & Platforms — BROTOCOL',
    description:
      'Google Review NFC Card, Smart Digital Menu Stand, QR Restaurant Ordering System, and custom business software from BROTOCOL.',
    canonicalPath: '/products',
  });

  return (
    <>
      <section className="bg-hero-aqua border-b border-[#E2E8F0] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="PRODUCTS & PLATFORMS" />
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-[#020617] sm:text-5xl">
            Smart Hardware &amp; Software Designed for Everyday Operations.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[#64748B] sm:text-lg">
            Detailed breakdown of each BROTOCOL product—distinguishing confirmed
            capabilities from future roadmap enhancements.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          {productsData.map((product) => (
            <article
              key={product.id}
              id={product.id}
              className="scroll-mt-24 rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8"
            >
              <div className="grid items-start gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6">
                  <span className="text-xs font-bold tracking-widest text-[#0D7F80] uppercase">
                    {product.division} · {product.category}
                  </span>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-[#020617] sm:text-3xl">
                    {product.name}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#64748B]">
                    {product.shortDescription}
                  </p>

                  <h3 className="mt-6 font-display text-sm font-semibold tracking-wide text-[#020617] uppercase">
                    How It Works
                  </h3>
                  <ol className="mt-3 space-y-2 text-sm text-[#64748B]">
                    {product.howItWorks.map((step, i) => (
                      <li key={step} className="flex items-start gap-2.5">
                        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0D7F80] text-[11px] font-bold text-white">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>

                  {product.complianceNote && (
                    <div className="mt-5 flex items-start gap-2.5 rounded-xl border border-[#AFEAEA] bg-[#EEFCFC] p-3.5 text-xs text-[#020617]">
                      <ShieldCheck
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#0D7F80]"
                        aria-hidden="true"
                      />
                      <span>{product.complianceNote}</span>
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-[#0D7F80] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0C6A6B]"
                    >
                      <span>Enquire About This Product</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                    <Link
                      to={product.divisionRoute}
                      className="inline-flex items-center rounded-full border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-semibold text-[#020617] transition-colors hover:border-[#AFEAEA] hover:bg-[#EEFCFC] hover:text-[#0D7F80]"
                    >
                      Division Overview
                    </Link>
                  </div>
                </div>

                <div className="space-y-5 lg:col-span-6">
                  <ProductPreview kind={previewMap[product.id] ?? 'business-system'} />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-xl border border-[#AFEAEA] bg-[#EEFCFC]/65 p-4">
                      <h3 className="flex items-center gap-1.5 font-display text-xs font-bold tracking-wider text-[#0D7F80] uppercase">
                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Confirmed Features</span>
                      </h3>
                      <ul className="mt-2.5 space-y-1.5 text-xs text-[#020617]">
                        {product.confirmedFeatures.map((feat) => (
                          <li key={feat}>• {feat}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl border border-[#E2E8F0] bg-[#F1F5F9]/75 p-4">
                      <h3 className="flex items-center gap-1.5 font-display text-xs font-bold tracking-wider text-[#64748B] uppercase">
                        <Clock className="h-3.5 w-3.5 text-[#0D7F80]" aria-hidden="true" />
                        <span>Future Roadmap</span>
                      </h3>
                      <ul className="mt-2.5 space-y-1.5 text-xs text-[#64748B]">
                        {product.plannedEnhancements.map((item) => (
                          <li key={item}>• {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCtaBanner />
    </>
  );
};
