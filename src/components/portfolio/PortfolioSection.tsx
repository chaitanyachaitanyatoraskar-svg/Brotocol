import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { SectionEyebrow } from '@/components/common/BrandMark';
import { ProductPreview } from '@/components/common/ProductPreview';
import { SocialIcon } from '@/components/common/SocialIcons';
import { projectsData, type ProjectRecord } from '@/data/projects';

const filterOptions = [
  { id: 'All', label: 'All Work' },
  { id: 'BROTOCOL SYSTEMS', label: 'BROTOCOL Systems' },
  { id: 'BROTOCOL HOSPITALITY', label: 'BROTOCOL Hospitality' },
  { id: 'BROTOCOL SMART', label: 'BROTOCOL Smart' },
] as const;

type FilterId = (typeof filterOptions)[number]['id'];

const formatUrlHost = (url: string): string =>
  url.replace(/^https?:\/\//, '').replace(/\/$/, '');

const ProjectVisualFrame: React.FC<{
  project: ProjectRecord;
  browserChrome?: boolean;
}> = ({ project, browserChrome = false }) => {
  const visualContent = project.previewImage ? (
    <img
      src={project.previewImage}
      alt={project.previewAlt ?? `${project.title} preview`}
      loading="lazy"
      className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
    />
  ) : project.previewKind ? (
    <div className="flex aspect-[16/10] w-full items-center justify-center bg-[#F8FAFC] p-3 sm:p-4">
      <div className="w-full">
        <ProductPreview kind={project.previewKind} compact />
      </div>
    </div>
  ) : null;

  if (browserChrome) {
    return (
      <div className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-[0_12px_30px_-16px_rgba(2,6,23,0.14)]">
        <div className="flex items-center justify-between border-b border-[#E2E8F0] bg-[#F8FAFC] px-3.5 py-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-[#CBD5E1]" />
            <span className="h-2 w-2 rounded-full bg-[#CBD5E1]" />
            <span className="h-2 w-2 rounded-full bg-[#CBD5E1]" />
          </div>
          {project.liveUrl ? (
            <span className="truncate font-mono text-[11px] text-[#64748B]">
              {formatUrlHost(project.liveUrl)}
            </span>
          ) : (
            <span className="font-mono text-[11px] text-[#94A3B8]">
              {project.slug}
            </span>
          )}
          <span className="w-8" aria-hidden="true" />
        </div>
        {visualContent}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-[#E2E8F0]/90 bg-white">
      {visualContent}
    </div>
  );
};

const ProjectActionLinks: React.FC<{ project: ProjectRecord }> = ({
  project,
}) => (
  <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#F1F5F9] pt-4">
    <Link
      to={`/case-studies/${project.slug}`}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#020617] transition-colors hover:text-[#0D7F80]"
    >
      <span>View Project</span>
      <ArrowRight
        className="h-4 w-4 text-[#0D7F80] transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>

    <div className="flex items-center gap-4">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold text-[#0D7F80] transition-colors hover:text-[#0C6A6B]"
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
          aria-label={`View ${project.title} source on GitHub`}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#64748B] transition-colors hover:text-[#020617]"
        >
          <SocialIcon network="github" className="h-3.5 w-3.5" />
          <span>GitHub</span>
        </a>
      )}
    </div>
  </div>
);

export const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterId>('All');
  const { pathname } = useLocation();
  const isArchiveRoute =
    pathname === '/our-work' || pathname === '/case-studies';

  const visibleProjects =
    activeFilter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.division === activeFilter);

  const featuredProject = visibleProjects[0];
  const supportingProjects = visibleProjects.slice(1, 3);
  const additionalProjects = visibleProjects.slice(3);

  const getCount = (id: FilterId) =>
    id === 'All'
      ? projectsData.length
      : projectsData.filter((p) => p.division === id).length;

  return (
    <section
      id="our-work"
      className="bg-aqua-wash bg-subtle-grid border-t border-[#E2E8F0] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="max-w-3xl">
          <SectionEyebrow label="CASE STUDIES" />
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.02em] text-[#020617] sm:text-4xl lg:text-[42px]">
            Selected Work
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-[1.7] text-[#64748B] sm:text-base">
            Production websites, digital platforms, and practical business
            systems built across industrial engineering, real estate,
            hospitality, and connected retail.
          </p>
        </div>

        {/* Integrated Underline Filter Strip + Understated Archive Link */}
        <div className="mt-10 flex flex-col justify-between gap-4 border-b border-[#E2E8F0] pb-px sm:flex-row sm:items-end">
          <div
            role="tablist"
            aria-label="Filter projects by BROTOCOL division"
            className="-mb-px flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7"
          >
            {filterOptions.map((option) => {
              const active = activeFilter === option.id;
              return (
                <button
                  key={option.id}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setActiveFilter(option.id)}
                  className={`relative shrink-0 cursor-pointer border-b-2 pb-3 text-sm font-medium whitespace-nowrap transition-colors ${
                    active
                      ? 'border-[#0D7F80] font-semibold text-[#020617]'
                      : 'border-transparent text-[#64748B] hover:border-[#CBD5E1] hover:text-[#020617]'
                  }`}
                >
                  <span>{option.label}</span>
                  <span
                    className={`ml-1.5 text-[11px] tabular-nums ${
                      active ? 'text-[#0D7F80]' : 'text-[#94A3B8]'
                    }`}
                  >
                    {getCount(option.id)}
                  </span>
                </button>
              );
            })}
          </div>

          {!isArchiveRoute && (
            <Link
              to="/our-work"
              className="group mb-3 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-[#0D7F80] transition-colors hover:text-[#0C6A6B] sm:self-auto"
            >
              <span>All Case Studies</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>

        {/* Featured Project (01 — Horizontal Editorial Showcase) */}
        {featuredProject && (
          <article className="group mt-10 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-colors duration-300 hover:border-[#AFEAEA]">
            <div className="grid lg:grid-cols-12">
              <Link
                to={`/case-studies/${featuredProject.slug}`}
                className="flex items-center border-b border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-5 lg:col-span-7 lg:border-r lg:border-b-0 lg:p-6"
              >
                <div className="w-full">
                  <ProjectVisualFrame project={featuredProject} browserChrome />
                </div>
              </Link>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-8">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-bold tracking-[0.14em] text-[#0D7F80] uppercase">
                      01 · {featuredProject.category}
                    </span>

                    {featuredProject.liveUrl ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0C6A6B]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0D7F80]" />
                        Live Deployment
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-[#64748B]">
                        {featuredProject.statusLabel}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-[#020617] transition-colors group-hover:text-[#0D7F80] sm:text-[28px]">
                    <Link to={`/case-studies/${featuredProject.slug}`}>
                      {featuredProject.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-[15px] leading-[1.68] text-[#64748B]">
                    {featuredProject.overview}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {featuredProject.technologyStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-[#E2E8F0] bg-[#F8FAFC] px-2.5 py-1 text-[11px] font-medium text-[#020617]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <ProjectActionLinks project={featuredProject} />
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Supporting Curated Pair (02 & 03 — Spacious Two-Column Gallery) */}
        {supportingProjects.length > 0 && (
          <div
            className={`mt-6 grid gap-6 ${
              supportingProjects.length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'
            }`}
          >
            {supportingProjects.map((project, idx) => (
              <article
                key={project.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-colors duration-300 hover:border-[#AFEAEA]"
              >
                <Link
                  to={`/case-studies/${project.slug}`}
                  className="block border-b border-[#E2E8F0] bg-[#F8FAFC] p-4 sm:p-5"
                >
                  <ProjectVisualFrame project={project} />
                </Link>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[11px] font-bold tracking-[0.14em] text-[#0D7F80] uppercase">
                        0{idx + 2} · {project.category}
                      </span>
                      <span className="text-xs font-medium text-[#64748B]">
                        {project.liveUrl ? 'Live Deployment' : project.statusLabel}
                      </span>
                    </div>

                    <h3 className="mt-2.5 font-display text-xl font-semibold tracking-tight text-[#020617] transition-colors group-hover:text-[#0D7F80] sm:text-2xl">
                      <Link to={`/case-studies/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="mt-2.5 text-sm leading-[1.65] text-[#64748B]">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6">
                    <ProjectActionLinks project={project} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Additional Product & System Demonstrations Index */}
        {additionalProjects.length > 0 && (
          <div className="mt-12">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-display text-sm font-semibold tracking-[0.12em] text-[#64748B] uppercase">
                Product &amp; System Demonstrations
              </h3>
              <span className="text-xs font-medium text-[#94A3B8]">
                {additionalProjects.length} architectures
              </span>
            </div>

            <div className="divide-y divide-[#E2E8F0] overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
              {additionalProjects.map((project, idx) => (
                <article
                  key={project.slug}
                  className="group grid gap-4 p-5 transition-colors hover:bg-[#F8FAFC]/80 sm:grid-cols-12 sm:items-center sm:gap-6 sm:px-6 sm:py-5"
                >
                  {/* Numbered Category Identifier */}
                  <div className="sm:col-span-4 lg:col-span-3">
                    <span className="font-mono text-xs font-semibold text-[#0D7F80]">
                      0{idx + 4}
                    </span>
                    <p className="mt-1 text-[11px] font-bold tracking-[0.14em] text-[#020617] uppercase">
                      {project.category}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-[#64748B]">
                      {project.statusLabel}
                    </p>
                  </div>

                  {/* Title + Concise Description */}
                  <div className="min-w-0 sm:col-span-5 lg:col-span-7">
                    <h4 className="font-display text-lg font-semibold text-[#020617] transition-colors group-hover:text-[#0D7F80]">
                      <Link to={`/case-studies/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h4>

                    <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="flex items-center sm:col-span-3 sm:justify-end lg:col-span-2">
                    <Link
                      to={`/case-studies/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#020617] transition-colors hover:text-[#0D7F80]"
                    >
                      <span>View Project</span>
                      <ArrowRight
                        className="h-4 w-4 text-[#0D7F80] transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
