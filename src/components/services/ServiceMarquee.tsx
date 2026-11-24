import React from 'react';
import { marqueeItems } from '@/data/services';

const StarSeparator: React.FC<{ muted?: boolean }> = ({ muted = false }) => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    className={`shrink-0 ${muted ? 'text-[#0D7F80]' : 'text-[#AFEAEA]'}`}
  >
    <path
      d="M12 2V22M2 12H22M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

export const ServiceMarquee: React.FC = () => {
  const repeatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <div
      aria-label="BROTOCOL core capabilities"
      className="marquee-wrapper overflow-hidden border-y border-[#020617] bg-[#020617] py-4 text-white"
    >
      <div className="animate-marquee items-center">
        {repeatedItems.map((item, idx) => (
          <div key={`${item}-${idx}`} className="flex items-center">
            <span className="whitespace-nowrap px-6 font-display text-sm font-semibold tracking-wide text-white sm:px-8 sm:text-base">
              {item}
            </span>
            <StarSeparator muted={idx % 2 === 1} />
          </div>
        ))}
      </div>
    </div>
  );
};
