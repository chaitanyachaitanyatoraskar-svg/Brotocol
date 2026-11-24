import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import { BrandMark } from '@/components/common/BrandMark';
import { siteConfig } from '@/config/site';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md transition-all duration-200 ${
        scrolled
          ? 'border-b border-[#E2E8F0] shadow-[0_4px_20px_-8px_rgba(2,6,23,0.08)]'
          : 'border-b border-[#E2E8F0]/80'
      }`}
    >
      <nav
        aria-label="Primary Navigation"
        className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-4 sm:h-[74px] sm:px-6 lg:px-10"
      >
        <Link
          to="/"
          className="rounded-md focus-visible:outline-2 focus-visible:outline-[#0D7F80]"
          aria-label="BROTOCOL Home"
        >
          <BrandMark />
        </Link>

        {/* Centered rounded pill navigation container */}
        <ul className="hidden items-center gap-0.5 rounded-full border border-[#E2E8F0] bg-white px-1.5 py-1 shadow-[0_1px_4px_rgba(2,6,23,0.04)] lg:flex">
          {siteConfig.navigation.map((item) => {
            const active = isActive(item.to);
            return (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`block rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                    active
                      ? 'bg-[#EEFCFC] text-[#0D7F80] ring-1 ring-[#AFEAEA]/70'
                      : 'text-[#020617] hover:bg-[#F1F5F9] hover:text-[#0D7F80]'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden items-center gap-2 rounded-full bg-[#0D7F80] py-2 pl-5 pr-2 text-sm font-medium text-white transition-colors hover:bg-[#0C6A6B] sm:inline-flex"
          >
            <span>Let&apos;s Talk</span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white">
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#020617] transition-colors hover:border-[#AFEAEA] hover:bg-[#EEFCFC] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-[#E2E8F0] bg-white px-4 pb-6 pt-4 shadow-lg lg:hidden"
        >
          <ul className="space-y-1">
            {siteConfig.navigation.map((item) => {
              const active = isActive(item.to);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      active
                        ? 'bg-[#EEFCFC] text-[#0D7F80]'
                        : 'text-[#020617] hover:bg-[#F1F5F9]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="h-2 w-2 rounded-full bg-[#0D7F80]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 border-t border-[#E2E8F0] pt-4">
            <p className="mb-3 px-1 text-xs font-medium text-[#64748B]">
              Divisions
            </p>
            <div className="grid grid-cols-1 gap-2">
              <Link
                to="/divisions/smart"
                className="rounded-lg border border-[#E2E8F0] px-3.5 py-2 text-sm font-medium text-[#020617] hover:border-[#AFEAEA] hover:bg-[#EEFCFC]"
              >
                BROTOCOL Smart
              </Link>
              <Link
                to="/divisions/hospitality"
                className="rounded-lg border border-[#E2E8F0] px-3.5 py-2 text-sm font-medium text-[#020617] hover:border-[#AFEAEA] hover:bg-[#EEFCFC]"
              >
                BROTOCOL Hospitality
              </Link>
              <Link
                to="/divisions/systems"
                className="rounded-lg border border-[#E2E8F0] px-3.5 py-2 text-sm font-medium text-[#020617] hover:border-[#AFEAEA] hover:bg-[#EEFCFC]"
              >
                BROTOCOL Systems
              </Link>
            </div>

            <Link
              to="/contact"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#0D7F80] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0C6A6B]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
