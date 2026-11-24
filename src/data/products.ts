export interface ProductItem {
  id: string;
  division: 'BROTOCOL SMART' | 'BROTOCOL HOSPITALITY' | 'BROTOCOL SYSTEMS';
  divisionRoute: string;
  name: string;
  category: string;
  shortDescription: string;
  howItWorks: string[];
  confirmedFeatures: string[];
  plannedEnhancements: string[];
  complianceNote?: string;
}

export const productsData: ProductItem[] = [
  {
    id: 'google-review-nfc-card',
    division: 'BROTOCOL SMART',
    divisionRoute: '/divisions/smart',
    name: 'Google Review NFC Card',
    category: 'Smart Physical Product',
    shortDescription:
      'A physical NFC-enabled card paired with a scannable QR code that makes accessing your genuine Google Review page effortless for customers.',
    howItWorks: [
      'BROTOCOL configures and tests your business Google Review destination before delivery.',
      'Your team places the card at the billing counter, reception desk, or handover point.',
      'A customer taps a compatible smartphone or scans the printed QR code—no app needed.',
      'The browser opens your direct Google Review page where the customer chooses whether to leave a review.',
    ],
    confirmedFeatures: [
      'Dual NFC tap + QR code accessibility across Android and iOS devices',
      'NDEF-compatible URL configuration tested prior to dispatch',
      'Reusable physical card format designed for counter use',
      'Zero app installation required for customers',
    ],
    plannedEnhancements: [
      'Dynamic link management dashboard',
      'Tap and QR scan analytics where technically measurable',
      'Multi-card and multi-branch management portal',
    ],
    complianceNote:
      'Directs customers exclusively to genuine Google Review pages. BROTOCOL does not support review gating, incentivized reviews, or automated review generation, and is independent of Google.',
  },
  {
    id: 'smart-digital-menu-stand',
    division: 'BROTOCOL SMART',
    divisionRoute: '/divisions/smart',
    name: 'Smart Digital Menu Stand',
    category: 'Smart Tabletop Hardware',
    shortDescription:
      'An acrylic tabletop stand equipped with NFC and QR technology, giving dine-in guests instant access to your digital menu, review page, and business links.',
    howItWorks: [
      'Placed cleanly on dining tables, cafe counters, or waiting lounges.',
      'Guests tap the NFC zone or scan the QR code with any standard smartphone camera.',
      'A lightweight mobile page loads your digital menu, Google Review link, and social destinations.',
      'Menu updates happen digitally without reprinting physical cards on every price or item change.',
    ],
    confirmedFeatures: [
      'Tabletop acrylic stand combining NFC tap and crisp QR code',
      'Mobile-friendly digital menu and business link landing page',
      'Reduces recurring menu reprinting when items or prices change',
      'Compatible with optional upgrade into BROTOCOL Hospitality ordering',
    ],
    plannedEnhancements: [
      'Self-serve multi-branch menu editor',
      'Multilingual menu switching and dietary tagging',
      'Real-time item availability toggles across stands',
    ],
  },
  {
    id: 'qr-restaurant-ordering-system',
    division: 'BROTOCOL HOSPITALITY',
    divisionRoute: '/divisions/hospitality',
    name: 'QR-Based Restaurant Ordering System',
    category: 'Hospitality Software Platform',
    shortDescription:
      'An end-to-end dine-in web platform linking table QR ordering directly with Kitchen Order Tickets (KOT), counter visibility, waiter alerts, and restaurant administration.',
    howItWorks: [
      'Guest scans the unique table QR code—table identity is captured automatically.',
      'Guest browses categorized menu items, adds quantities to cart, and submits the order.',
      'Server validates and persists the order, immediately routing it to the Kitchen and Counter dashboards.',
      'Kitchen staff update order status (New, Accepted, Preparing, Ready, Completed) while guests can call a waiter if needed.',
    ],
    confirmedFeatures: [
      'Table-specific QR identification & mobile-first ordering cart',
      'Persistent, server-validated order processing preventing duplicate submissions',
      'Live Kitchen Order Ticket (KOT) display built for readability',
      'Counter dashboard for unified visibility across active tables',
      'Rate-limited Call Waiter alert system & Restaurant Admin Panel',
    ],
    plannedEnhancements: [
      'POS billing system integrations',
      'Multi-branch administration & consolidated analytics',
      'Inventory tracking and payment gateway modules',
    ],
  },
  {
    id: 'custom-business-systems',
    division: 'BROTOCOL SYSTEMS',
    divisionRoute: '/divisions/systems',
    name: 'Custom Software & Workflow Automation',
    category: 'Tailored Systems Engineering',
    shortDescription:
      'Custom web applications, internal dashboards, database-backed tools, and automated workflows engineered around your organization.',
    howItWorks: [
      'Discovery and requirements documentation covering your current bottlenecks and users.',
      'Structured system architecture, UI wireframes, and scope sign-off.',
      'Modular frontend, backend API, and SQL database implementation with testing.',
      'Production deployment, team onboarding, and optional maintenance coverage.',
    ],
    confirmedFeatures: [
      'Custom business websites, portals, and internal management dashboards',
      'Role-based access control and server-side data validation',
      'REST APIs and integrations connecting existing software tools',
      'Automated form-to-database workflows, notifications, and reporting',
    ],
    plannedEnhancements: [
      'Domain-specific automation accelerators for SMEs',
      'Evaluated document parsing and AI-assisted triage with human review',
    ],
  },
];
