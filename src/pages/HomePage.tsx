import React from 'react';
import { HeroSection } from '@/components/hero/HeroSection';
import { ServiceMarquee } from '@/components/services/ServiceMarquee';
import { ServicesSection } from '@/components/services/ServicesSection';
import { AboutSection } from '@/components/about/AboutSection';
import { ApproachSection } from '@/components/services/ApproachSection';
import { PortfolioSection } from '@/components/portfolio/PortfolioSection';
import { TeamSection } from '@/components/team/TeamSection';
import { IndustriesAndWhySection } from '@/components/services/IndustriesAndWhySection';
import { FaqSection } from '@/components/faq/FaqSection';
import { FinalCtaBanner } from '@/components/contact/FinalCtaBanner';
import { ContactSection } from '@/components/contact/ContactSection';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';

export const HomePage: React.FC = () => {
  useDocumentMeta({
    title: 'BROTOCOL — Technology. Innovation. Automation.',
    description:
      'BROTOCOL builds practical digital solutions across Maharashtra and India: smart NFC Google Review cards, digital menu stands, QR restaurant ordering systems, custom software, and workflow automation.',
    canonicalPath: '/',
  });

  return (
    <>
      <HeroSection />
      <ServiceMarquee />
      <ServicesSection />
      <AboutSection />
      <ApproachSection />
      <PortfolioSection />
      <TeamSection />
      <IndustriesAndWhySection />
      <FaqSection />
      <FinalCtaBanner />
      <ContactSection />
    </>
  );
};
