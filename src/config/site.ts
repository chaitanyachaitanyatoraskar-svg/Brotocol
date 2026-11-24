export interface SocialLink {
  id: 'linkedin' | 'instagram' | 'facebook';
  label: string;
  url: string;
}

export interface NavItem {
  label: string;
  to: string;
  sectionId?: string;
}

/**
 * Centralized brand, contact, social, and integration configuration.
 * Leave contact or social fields empty until verified production details exist.
 * Unconfigured contact items and social links are automatically hidden in the UI.
 */
export const siteConfig = {
  brand: {
    name: 'BROTOCOL',
    tagline: 'Technology. Innovation. Automation.',
    supportingStatement: 'Building smarter solutions for a digitally connected world.',
    promise: 'We build technology that makes businesses work smarter.',
    shortDescription:
      'Building smarter business solutions through smart products, software development and automation.',
  },
  serviceArea: {
    primaryMarket: 'Maharashtra, India',
    expansion: 'Across India',
    summary: 'Working with businesses across Maharashtra and India.',
    badgeText: 'Maharashtra & Across India',
  },
  contact: {
    phone: (import.meta.env.VITE_CONTACT_PHONE as string | undefined)?.trim() || '',
    email: (import.meta.env.VITE_CONTACT_EMAIL as string | undefined)?.trim() || '',
    whatsappNumber:
      (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined)?.trim() || '',
    officeAddress:
      (import.meta.env.VITE_OFFICE_ADDRESS as string | undefined)?.trim() || '',
  },
  social: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: (import.meta.env.VITE_SOCIAL_LINKEDIN as string | undefined)?.trim() || '',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      url: (import.meta.env.VITE_SOCIAL_INSTAGRAM as string | undefined)?.trim() || '',
    },
    {
      id: 'facebook',
      label: 'Facebook',
      url: (import.meta.env.VITE_SOCIAL_FACEBOOK as string | undefined)?.trim() || '',
    },
  ] satisfies SocialLink[],
  integrations: {
    contactFormEndpoint:
      (import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined)?.trim() || '',
    newsletterEndpoint:
      (import.meta.env.VITE_NEWSLETTER_ENDPOINT as string | undefined)?.trim() || '',
    siteUrl: (import.meta.env.VITE_SITE_URL as string | undefined)?.trim() || '',
  },
  navigation: [
    { label: 'Home', to: '/', sectionId: 'top' },
    { label: 'Services', to: '/services', sectionId: 'services' },
    { label: 'Products', to: '/products', sectionId: 'products' },
    { label: 'Our Work', to: '/our-work', sectionId: 'our-work' },
    { label: 'About Us', to: '/about', sectionId: 'about' },
    { label: 'Insights', to: '/insights', sectionId: 'insights' },
  ] satisfies NavItem[],
} as const;

export function getConfiguredSocialLinks(): SocialLink[] {
  return siteConfig.social.filter((item) => item.url.length > 0);
}
