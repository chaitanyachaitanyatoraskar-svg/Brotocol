import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteLayout } from '@/components/layout/SiteLayout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ServicesPage } from '@/pages/ServicesPage';
import { DivisionPage } from '@/pages/DivisionPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { OurWorkPage } from '@/pages/OurWorkPage';
import { CaseStudyDetailPage } from '@/pages/CaseStudyDetailPage';
import { ContactPage } from '@/pages/ContactPage';
import { InsightsPage } from '@/pages/InsightsPage';
import { LegalPage } from '@/pages/LegalPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route
            path="/divisions/smart"
            element={<DivisionPage divisionId="smart" />}
          />
          <Route
            path="/divisions/hospitality"
            element={<DivisionPage divisionId="hospitality" />}
          />
          <Route
            path="/divisions/systems"
            element={<DivisionPage divisionId="systems" />}
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/our-work" element={<OurWorkPage mode="our-work" />} />
          <Route
            path="/case-studies"
            element={<OurWorkPage mode="case-studies" />}
          />
          <Route
            path="/case-studies/:slug"
            element={<CaseStudyDetailPage />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/insights/:slug" element={<InsightsPage />} />
          <Route path="/privacy-policy" element={<LegalPage doc="privacy" />} />
          <Route path="/terms" element={<LegalPage doc="terms" />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
};

export default App;
