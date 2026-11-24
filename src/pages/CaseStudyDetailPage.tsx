import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Layers } from 'lucide-react';
import { SectionEyebrow } from '@/components/common/BrandMark';
import { ProductPreview } from '@/components/common/ProductPreview';
import { SocialIcon } from '@/components/common/SocialIcons';
import { FinalCtaBanner } from '@/components/contact/FinalCtaBanner';
import { projectsData } from '@/data/projects';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export const CaseStudyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  useDocumentMeta({
    title: project ? `${project.title} — BROTOCOL` : 'Project Not Found — BROTOCOL',
    description: project
      ? project.shortDescription
      : 'Requested BROTOCOL project record was not found.',
    canonicalPath: project ? `/case-studies/${project.slug}` : '/our-work',
  });

  if (!project) {
    return (
      <section className="bg-white py-24">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h1 className="font-display text-3xl font-semibold text-[#020617]">
            Project Showcase Not Found
          </h1>
          <p className="mt-3 text-sm text-[#64748B]">
            The project record you requested does not exist or has moved.
          </p>
          <Link
            to="/our-work"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0D7F80] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0C6A6B]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Return to Our Work</span>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="bg-hero-aqua border-b border-[#E2E8F0] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#64748B] transition-colors hover:text-[#0D7F80]"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Back to Our Work</span>
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <SectionEyebrow label={project.division} />
            <span className="rounded-full border border-[#AFEAEA] bg-[#E0F7F7] px-3 py-0.5 text-xs font-bold text-[#0D7F80]">
              {project.statusLabel}
            </span>
          </div>

          <h1 className="mt-4 max-w-3xl font-display text-3xl font-semibold text-[#020617] sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg">
            {project.overview}
          </p>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          {/* Main Column */}
          <div className="space-y-8 lg:col-span-7">
            {project.previewImage ? (
              <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9] shadow-sm">
                <img
                  src={project.previewImage}
                  alt={project.previewAlt ?? `${project.title} preview`}
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </div>
            ) : project.previewKind ? (
              <ProductPreview kind={project.previewKind} />
            ) : null}

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h2 className="font-display text-xl font-semibold text-[#020617]">
                Business Problem
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[#64748B] sm:text-base">
                {project.businessProblem}
              </p>
            </div>

            <div className="rounded-2xl border border-[#AFEAEA] bg-[#EEFCFC] p-6">
              <h2 className="font-display text-xl font-semibold text-[#020617]">
                Proposed Solution
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-[#020617]/85 sm:text-base">
                {project.proposedSolution}
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-semibold text-[#020617]">
                Key Features &amp; Architecture
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.features.map((feat) => (
                  <li
                    key={feat}
                    className="flex items-start gap-2.5 rounded-xl border border-[#E2E8F0] bg-white p-3.5 text-sm text-[#020617]"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#0D7F80]"
                      aria-hidden="true"
                    />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9]/80 p-6">
              <h2 className="font-display text-sm font-semibold tracking-wider text-[#0D7F80] uppercase">
                Project Status
              </h2>
              <p className="mt-2 inline-block rounded-full bg-[#0D7F80] px-3 py-1 text-xs font-semibold text-white">
                {project.statusLabel}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
                {project.projectStatusDetail}
              </p>

              {(project.liveUrl || project.repoUrl) && (
                <div className="mt-5 flex flex-wrap gap-3 border-t border-[#E2E8F0] pt-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-[#020617] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0D7F80]"
                    >
                      <span>Visit Live Site</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-xs font-semibold text-[#020617] transition-colors hover:border-[#AFEAEA] hover:bg-[#EEFCFC] hover:text-[#0D7F80]"
                    >
                      <SocialIcon
                        network="github"
                        className="h-3.5 w-3.5 text-[#0D7F80]"
                      />
                      <span>View GitHub Repo</span>
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
              <h2 className="flex items-center gap-2 font-display text-sm font-semibold tracking-wider text-[#020617] uppercase">
                <Layers className="h-4 w-4 text-[#0D7F80]" aria-hidden="true" />
                <span>Technology Stack</span>
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologyStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-[#E2E8F0] bg-[#F1F5F9] px-3 py-1.5 text-xs font-semibold text-[#020617]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.verifiedOutcome && (
              <div className="rounded-2xl border border-[#AFEAEA] bg-[#EEFCFC] p-6">
                <h2 className="font-display text-sm font-semibold tracking-wider text-[#0D7F80] uppercase">
                  Verified Outcome
                </h2>
                <p className="mt-2 text-sm text-[#020617]">
                  {project.verifiedOutcome}
                </p>
              </div>
            )}

            <div className="rounded-2xl bg-[#020617] p-6 text-white">
              <h2 className="font-display text-lg font-semibold">
                Interested in a Similar Setup?
              </h2>
              <p className="mt-2 text-sm text-[#94A3B8]">
                Request a live walkthrough or discuss tailoring this architecture
                around your business workflow.
              </p>
              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0D7F80] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0C6A6B]"
              >
                <span>Request Walkthrough</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <FinalCtaBanner />
    </>
  );
};
