import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export const NotFoundPage: React.FC = () => {
  useDocumentMeta({
    title: 'Page Not Found — BROTOCOL',
    description: 'The requested page could not be found on BROTOCOL.',
  });

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-xl px-4 text-center">
        <span className="inline-block rounded-full border border-[#AFEAEA] bg-[#EEFCFC] px-3.5 py-1 text-xs font-bold tracking-widest text-[#0D7F80] uppercase">
          404
        </span>
        <h1 className="mt-4 font-display text-3xl font-semibold text-[#020617] sm:text-4xl">
          Page Not Found
        </h1>
        <p className="mt-3 text-base text-[#64748B]">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0D7F80] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0C6A6B]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Return Home</span>
        </Link>
      </div>
    </section>
  );
};
