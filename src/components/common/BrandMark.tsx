import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import brotocolLogoBlack from '@/assets/images/brotocol-logo-black.png';
import brotocolLogoWhite from '@/assets/images/brotocol-logo-white.png';

interface BrandMarkProps {
  variant?: 'dark' | 'light';
  showTagline?: boolean;
}

export const BrandMark: React.FC<BrandMarkProps> = ({
  variant = 'dark',
  showTagline = false,
}) => {
  const isLight = variant === 'light';
  const logoSrc = isLight ? brotocolLogoWhite : brotocolLogoBlack;

  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <img
        src={logoSrc}
        alt="BROTOCOL Logo"
        className={`w-auto shrink-0 object-contain ${
          showTagline ? 'h-8 sm:h-9' : 'h-7 sm:h-8'
        }`}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[17px] font-bold tracking-tight sm:text-lg ${
            isLight ? 'text-white' : 'text-[#020617]'
          }`}
        >
          BROTOCOL
        </span>
        {showTagline && (
          <span
            className={`mt-0.5 text-[10px] font-medium tracking-[0.14em] uppercase ${
              isLight ? 'text-[#94A3B8]' : 'text-[#64748B]'
            }`}
          >
            Technology. Innovation. Automation.
          </span>
        )}
      </span>
    </span>
  );
};

interface SectionEyebrowProps {
  label: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({
  label,
  tone = 'light',
  align = 'left',
}) => {
  const isDark = tone === 'dark';

  return (
    <div
      className={`inline-flex items-center gap-2.5 ${
        align === 'center' ? 'justify-center' : ''
      }`}
    >
      <span aria-hidden="true" className="inline-flex items-center gap-1">
        <span
          className={`h-3 w-3 rounded-full ${
            isDark ? 'bg-[#AFEAEA]' : 'bg-[#0D7F80]'
          }`}
        />
        <span
          className={`-ml-2 h-3 w-3 rounded-full border-2 ${
            isDark
              ? 'border-[#020617] bg-[#0D7F80]'
              : 'border-white bg-[#020617]'
          }`}
        />
      </span>
      <span
        className={`text-xs font-semibold tracking-[0.14em] uppercase ${
          isDark ? 'text-[#E0F7F7]' : 'text-[#0D7F80]'
        }`}
      >
        {label}
      </span>
    </div>
  );
};

interface CircularStampProps {
  text?: string;
  className?: string;
}

export const CircularStamp: React.FC<CircularStampProps> = ({
  text = 'BROTOCOL · SMART · SYSTEMS · ',
  className = '',
}) => {
  return (
    <div
      aria-hidden="true"
      className={`relative flex h-24 w-24 items-center justify-center rounded-full bg-[#020617] text-white shadow-lg ring-4 ring-white ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="animate-spin-slow h-full w-full p-1.5"
      >
        <defs>
          <path
            id="brotocol-stamp-circle"
            d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
          />
        </defs>
        <text
          fill="#E2E8F0"
          fontSize="8.5"
          fontWeight="600"
          letterSpacing="2.4"
        >
          <textPath href="#brotocol-stamp-circle">{text}</textPath>
        </text>
      </svg>
      <span className="absolute flex h-9 w-9 items-center justify-center rounded-full bg-[#0D7F80] text-white ring-2 ring-[#AFEAEA]/60">
        <ArrowUpRight className="h-4 w-4 stroke-[2.25]" />
      </span>
    </div>
  );
};
