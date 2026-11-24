import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { ArrowRight, MapPin } from 'lucide-react';
import { BrandMark } from '@/components/common/BrandMark';
import { SocialIcon } from '@/components/common/SocialIcons';
import { getConfiguredSocialLinks, siteConfig } from '@/config/site';

const newsletterSchema = z.object({
  email: z.string().trim().email('Please enter a valid email address.'),
});

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = getConfiguredSocialLinks();

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{
    type: 'idle' | 'error' | 'info' | 'success';
    message: string;
  }>({ type: 'idle', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = newsletterSchema.safeParse({ email });
    if (!parsed.success) {
      setStatus({
        type: 'error',
        message: parsed.error.issues[0]?.message || 'Enter a valid email.',
      });
      return;
    }

    const endpoint = siteConfig.integrations.newsletterEndpoint;
    if (!endpoint) {
      setStatus({
        type: 'info',
        message:
          'Newsletter delivery is not yet connected in this environment. Subscriptions are only recorded once a live newsletter provider is configured.',
      });
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: parsed.data.email }),
      });
      if (!response.ok) {
        throw new Error('Subscription request failed');
      }
      setStatus({
        type: 'success',
        message: 'You are subscribed to BROTOCOL updates.',
      });
      setEmail('');
    } catch {
      setStatus({
        type: 'error',
        message: 'Unable to complete subscription right now. Please try again later.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#020617] text-white">
      {/* Newsletter Header Band */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-6">
            <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
              Stay Connected with BROTOCOL.
            </h2>
            <p className="mt-2 max-w-xl text-sm text-[#94A3B8]">
              Get practical insights on technology, software and business automation.
            </p>
          </div>

          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubscribe}
              noValidate
              className="flex flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="footer-newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status.type !== 'idle') setStatus({ type: 'idle', message: '' });
                }}
                placeholder="Enter your business email"
                className="h-12 flex-1 rounded-full border border-white/15 bg-white/6 px-5 text-sm text-white placeholder:text-[#94A3B8] focus:border-[#0D7F80] focus:outline-none"
              />
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#0D7F80] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#0C6A6B] disabled:opacity-60"
              >
                <span>{submitting ? 'Submitting...' : 'Subscribe'}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
            {status.type !== 'idle' && (
              <p
                role="status"
                className={`mt-2.5 text-xs ${
                  status.type === 'error'
                    ? 'text-red-300'
                    : status.type === 'success'
                    ? 'text-[#AFEAEA]'
                    : 'text-[#94A3B8]'
                }`}
              >
                {status.message}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main 5-Column Directory */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Column 01: BROTOCOL Identity */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Link to="/" aria-label="BROTOCOL Home">
              <BrandMark variant="light" showTagline />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#94A3B8]">
              {siteConfig.brand.shortDescription}
            </p>
            <p className="mt-4 inline-flex items-start gap-2 text-xs text-[#E0F7F7]">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#AFEAEA]" aria-hidden="true" />
              <span>{siteConfig.serviceArea.summary}</span>
            </p>

            {socialLinks.length > 0 && (
              <div className="mt-5 flex items-center gap-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`BROTOCOL on ${social.label}`}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[#E0F7F7] transition-colors hover:border-[#0D7F80] hover:bg-[#0D7F80] hover:text-white"
                  >
                    <SocialIcon network={social.id} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Column 02: What We Do */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold tracking-wide text-white">
              What We Do
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <Link to="/divisions/smart" className="transition-colors hover:text-[#AFEAEA]">
                  Smart NFC Products
                </Link>
              </li>
              <li>
                <Link to="/products#smart-digital-menu-stand" className="transition-colors hover:text-[#AFEAEA]">
                  Digital Menu Solutions
                </Link>
              </li>
              <li>
                <Link to="/divisions/hospitality" className="transition-colors hover:text-[#AFEAEA]">
                  Restaurant Ordering Systems
                </Link>
              </li>
              <li>
                <Link to="/divisions/systems" className="transition-colors hover:text-[#AFEAEA]">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition-colors hover:text-[#AFEAEA]">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link to="/divisions/systems" className="transition-colors hover:text-[#AFEAEA]">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-[#AFEAEA]">
                  Technology Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 03: Products & Solutions */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold tracking-wide text-white">
              Products &amp; Solutions
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <Link to="/products#google-review-nfc-card" className="transition-colors hover:text-[#AFEAEA]">
                  Google Review NFC Card
                </Link>
              </li>
              <li>
                <Link to="/products#smart-digital-menu-stand" className="transition-colors hover:text-[#AFEAEA]">
                  Smart Digital Menu Stand
                </Link>
              </li>
              <li>
                <Link to="/products#qr-restaurant-ordering-system" className="transition-colors hover:text-[#AFEAEA]">
                  QR Restaurant Ordering
                </Link>
              </li>
              <li>
                <Link to="/divisions/hospitality" className="transition-colors hover:text-[#AFEAEA]">
                  Hospitality Technology
                </Link>
              </li>
              <li>
                <Link to="/products#custom-business-systems" className="transition-colors hover:text-[#AFEAEA]">
                  Custom Business Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 04: Company */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold tracking-wide text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <Link to="/about" className="transition-colors hover:text-[#AFEAEA]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#team" className="transition-colors hover:text-[#AFEAEA]">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/our-work" className="transition-colors hover:text-[#AFEAEA]">
                  Our Work
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="transition-colors hover:text-[#AFEAEA]">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="transition-colors hover:text-[#AFEAEA]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 05: Resources */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold tracking-wide text-white">
              Resources
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <Link to="/insights" className="transition-colors hover:text-[#AFEAEA]">
                  Insights &amp; Guides
                </Link>
              </li>
              <li>
                <Link to="/#faq" className="transition-colors hover:text-[#AFEAEA]">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="transition-colors hover:text-[#AFEAEA]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition-colors hover:text-[#AFEAEA]">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="transition-colors hover:text-[#AFEAEA]">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-[#94A3B8] sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {currentYear} {siteConfig.brand.name}. {siteConfig.brand.tagline}
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/privacy-policy" className="transition-colors hover:text-[#AFEAEA]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-[#AFEAEA]">
              Terms and Conditions
            </Link>
            <a href="/sitemap.xml" className="transition-colors hover:text-[#AFEAEA]">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
