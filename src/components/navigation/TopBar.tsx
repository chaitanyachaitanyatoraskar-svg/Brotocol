import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { SocialIcon } from '@/components/common/SocialIcons';
import { getConfiguredSocialLinks, siteConfig } from '@/config/site';

export const TopBar: React.FC = () => {
  const socialLinks = getConfiguredSocialLinks();
  const { phone, email } = siteConfig.contact;

  return (
    <div className="bg-[#020617] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-xs">
        {/* Left info strip */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 px-4 py-2 sm:px-6 lg:px-8">
          {phone && (
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-[#AFEAEA]"
            >
              <Phone className="h-3.5 w-3.5 text-[#AFEAEA]" aria-hidden="true" />
              <span>{phone}</span>
            </a>
          )}

          {email && (
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1.5 text-white/90 transition-colors hover:text-[#AFEAEA]"
            >
              <Mail className="h-3.5 w-3.5 text-[#AFEAEA]" aria-hidden="true" />
              <span>{email}</span>
            </a>
          )}

          <span className="inline-flex items-center gap-1.5 text-white/90">
            <MapPin className="h-3.5 w-3.5 text-[#AFEAEA]" aria-hidden="true" />
            <span>
              {siteConfig.serviceArea.primaryMarket} ·{' '}
              <span className="text-[#94A3B8]">{siteConfig.serviceArea.expansion}</span>
            </span>
          </span>
        </div>

        {/* Right Primary Teal angled cap */}
        <div
          className="hidden sm:flex items-center bg-[#0D7F80] py-2 pl-8 pr-6 text-white lg:pr-8"
          style={{
            clipPath: 'polygon(16px 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        >
          {socialLinks.length > 0 ? (
            <div className="flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`BROTOCOL on ${social.label}`}
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-[#020617]"
                >
                  <SocialIcon network={social.id} className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          ) : (
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-[11px] font-bold tracking-wide text-white uppercase transition-opacity hover:opacity-85"
            >
              <span>Project Enquiry</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
