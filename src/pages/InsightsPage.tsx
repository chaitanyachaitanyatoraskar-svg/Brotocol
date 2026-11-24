import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionEyebrow } from '@/components/common/BrandMark';
import { FinalCtaBanner } from '@/components/contact/FinalCtaBanner';
import { insightsData } from '@/data/insights';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export const InsightsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const activeArticle = slug
    ? insightsData.find((item) => item.slug === slug)
    : undefined;

  useDocumentMeta({
    title: activeArticle
      ? `${activeArticle.title} — BROTOCOL Insights`
      : 'Insights & Guides — BROTOCOL',
    description: activeArticle
      ? activeArticle.summary
      : 'Practical technology, NFC, hospitality software, and business automation guides from BROTOCOL.',
    canonicalPath: activeArticle ? `/insights/${activeArticle.slug}` : '/insights',
  });

  if (slug && activeArticle) {
    return (
      <>
        <article className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#0D7F80] hover:text-[#0C6A6B] hover:underline"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              <span>All Insights</span>
            </Link>

            <div className="mt-6 flex items-center gap-3 text-xs font-semibold text-[#64748B]">
              <span className="rounded-full border border-[#AFEAEA] bg-[#EEFCFC] px-3 py-1 text-[#0D7F80]">
                {activeArticle.category}
              </span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-semibold text-[#020617] sm:text-4xl">
              {activeArticle.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
              {activeArticle.summary}
            </p>

            <div className="mt-8 rounded-2xl border border-[#AFEAEA] bg-[#EEFCFC] p-6">
              <h2 className="font-display text-sm font-semibold tracking-wider text-[#0D7F80] uppercase">
                Key Takeaways
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[#020617]">
                {activeArticle.keyTakeaways.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#0D7F80]"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-[#020617]/90">
              {activeArticle.body.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
        </article>
        <FinalCtaBanner />
      </>
    );
  }

  return (
    <>
      <section className="bg-hero-aqua border-b border-[#E2E8F0] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionEyebrow label="INSIGHTS & GUIDES" />
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold text-[#020617] sm:text-5xl">
            Practical Perspectives on Business Technology.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[#64748B] sm:text-lg">
            Technical and operational notes covering NFC touchpoints, dine-in
            ordering architecture, and custom business software decisions.
          </p>
        </div>
      </section>

      <section className="bg-aqua-wash bg-subtle-grid py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
          {insightsData.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col justify-between rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#AFEAEA] hover:shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full border border-[#AFEAEA] bg-[#EEFCFC] px-2.5 py-0.5 font-semibold text-[#0D7F80]">
                    {article.category}
                  </span>
                  <span className="text-[#64748B]">{article.readTime}</span>
                </div>
                <h2 className="mt-4 font-display text-xl font-semibold text-[#020617]">
                  {article.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[#64748B]">
                  {article.summary}
                </p>
              </div>

              <div className="mt-6 border-t border-[#E2E8F0] pt-4">
                <Link
                  to={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0D7F80] hover:text-[#0C6A6B] hover:underline"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FinalCtaBanner />
    </>
  );
};
