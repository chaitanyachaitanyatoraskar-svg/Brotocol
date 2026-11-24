import React from 'react';
import { Globe } from 'lucide-react';
import { SocialIcon } from '@/components/common/SocialIcons';
import { teamData } from '@/data/team';

export const TeamSection: React.FC = () => {
  return (
    <section
      id="team"
      className="relative overflow-hidden border-y border-[#E2E8F0] bg-white py-16 sm:py-20 lg:py-24"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 46% 52% at 6% 94%, rgba(224, 247, 247, 0.75), transparent 72%)',
      }}
    >
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[21%_1fr] lg:items-stretch lg:gap-10 xl:gap-12">
          {/* Left Introduction Column */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-[#0D7F80]"
                />
                <span className="text-xs font-medium tracking-[0.14em] text-[#64748B] uppercase">
                  OUR TEAM
                </span>
              </div>

              {/* Stacked Editorial Heading */}
              <h2 className="mt-4 font-display text-4xl font-bold leading-[0.98] tracking-[-0.02em] text-[#020617] sm:text-[42px]">
                THE
                <br />
                PEOPLE
                <br />
                BEHIND IT
              </h2>

              {/* Supporting Copy */}
              <p className="mt-5 text-sm font-semibold text-[#020617]">
                A small team. Big ideas.
              </p>
              <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-[#64748B]">
                Different skills, same purpose: to build brands, websites and
                experiences that make an impact.
              </p>
            </div>

            {/* Subtle Handwritten-Style Annotation */}
            <div
              aria-hidden="true"
              className="mt-10 hidden items-end gap-2.5 lg:flex"
            >
              <div className="-rotate-3 text-[15px] leading-tight font-medium italic text-[#64748B]">
                <span className="block">Nice people</span>
                <span className="block pl-3">Great work</span>
              </div>
              <svg
                width="34"
                height="22"
                viewBox="0 0 34 22"
                fill="none"
                className="mb-0.5 text-[#64748B]"
              >
                <path
                  d="M2 18C12 18 22 14 29 4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
                <path
                  d="M23 5L29.5 3.5L29 10"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Right Four-Portrait Editorial Row */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-7">
            {teamData.map((member) => {
              const isExternal = (url: string) =>
                url.startsWith('http://') || url.startsWith('https://');

              const socialItems = [
                {
                  key: 'linkedin',
                  url: member.linkedinUrl,
                  label: `${member.name} on LinkedIn`,
                  icon: <SocialIcon network="linkedin" className="h-4 w-4" />,
                },
                {
                  key: 'website',
                  url: member.websiteUrl,
                  label: `${member.name} portfolio`,
                  icon: <Globe className="h-4 w-4" aria-hidden="true" />,
                },
                {
                  key: 'github',
                  url: member.githubUrl,
                  label: `${member.name} on GitHub`,
                  icon: <SocialIcon network="github" className="h-4 w-4" />,
                },
                {
                  key: 'x',
                  url: member.xUrl,
                  label: `${member.name} on X`,
                  icon: <SocialIcon network="x" className="h-4 w-4" />,
                },
                {
                  key: 'instagram',
                  url: member.instagramUrl,
                  label: `${member.name} on Instagram`,
                  icon: <SocialIcon network="instagram" className="h-4 w-4" />,
                },
              ].filter((item) => item.url.length > 0);

              return (
                <article key={member.id} className="flex flex-col">
                  {/* Large 4:5 Portrait Image or Neutral Studio Placeholder */}
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-[#F1F5F9]">
                    {member.photoUrl ? (
                      <img
                        src={member.photoUrl}
                        alt={`${member.name} — ${member.role}`}
                        loading="lazy"
                        style={{
                          objectPosition: member.photoPosition || '50% 20%',
                        }}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col justify-between border border-[#E2E8F0] bg-gradient-to-b from-[#F1F5F9] via-[#FEFFFF] to-[#EEFCFC]/70 p-5">
                        <span className="text-[11px] font-medium tracking-[0.14em] text-[#94A3B8] uppercase">
                          Portrait {member.slotCode}
                        </span>
                        <div className="my-auto border-y border-[#E2E8F0]/90 py-4 text-center">
                          <p className="text-xs font-medium text-[#64748B]">
                            Portrait Placeholder
                          </p>
                          <p className="mt-1 text-[11px] text-[#94A3B8]">
                            4:5 Studio Photo Slot
                          </p>
                        </div>
                        <span className="text-[11px] font-medium text-[#94A3B8]">
                          BROTOCOL
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Minimal Editorial Metadata Directly Below Image */}
                  <div className="mt-4">
                    <h3 className="flex items-center gap-1.5 font-display text-[17px] font-semibold text-[#020617]">
                      <span>{member.name}</span>
                      <span
                        aria-hidden="true"
                        className="inline-block h-1.5 w-1.5 rounded-full bg-[#0D7F80]"
                      />
                    </h3>

                    <p className="mt-0.5 text-[13px] text-[#64748B]">
                      {member.role}
                    </p>

                    {member.bio && (
                      <p className="mt-2.5 text-[13px] leading-relaxed text-[#64748B]">
                        {member.bio}
                      </p>
                    )}

                    {socialItems.length > 0 && (
                      <div className="mt-3.5 flex items-center gap-3">
                        {socialItems.map((item) => {
                          const external = isExternal(item.url);
                          return (
                            <a
                              key={item.key}
                              href={item.url}
                              target={external ? '_blank' : undefined}
                              rel={external ? 'noopener noreferrer' : undefined}
                              aria-label={
                                external
                                  ? item.label
                                  : `${item.label} (placeholder link)`
                              }
                              title={
                                external
                                  ? item.label
                                  : 'Placeholder link — update in src/data/team.ts'
                              }
                              className="inline-flex text-[#64748B] transition-colors hover:text-[#0D7F80]"
                            >
                              {item.icon}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
