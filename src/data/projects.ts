import propStudioImg from '@/assets/images/project-propstudio.png';
import atelierBuildImg from '@/assets/images/project-atelier-build.png';
import terminalTechImg from '@/assets/images/project-terminal-technologies.png';

export type ProjectStatusLabel =
  | 'Live Deployment'
  | 'Web Platform'
  | 'Product Demo'
  | 'Demonstration'
  | 'Concept Project';

export type ProjectPreviewKind =
  | 'qr-ordering'
  | 'nfc-review'
  | 'menu-stand'
  | 'business-system'
  | 'workflow-automation';

export interface ProjectRecord {
  slug: string;
  title: string;
  division: 'BROTOCOL SMART' | 'BROTOCOL HOSPITALITY' | 'BROTOCOL SYSTEMS';
  category: string;
  statusLabel: ProjectStatusLabel;
  shortDescription: string;
  overview: string;
  businessProblem: string;
  proposedSolution: string;
  features: string[];
  technologyStack: string[];
  previewKind?: ProjectPreviewKind;
  previewImage?: string;
  previewAlt?: string;
  liveUrl?: string;
  repoUrl?: string;
  projectStatusDetail: string;
  /**
   * Populate only with verified client-confirmed results.
   * Left null for demonstration and concept showcases.
   */
  verifiedOutcome: string | null;
}

export const projectsData: ProjectRecord[] = [
  {
    slug: 'terminal-technologies',
    title: 'Terminal Technologies',
    division: 'BROTOCOL SYSTEMS',
    category: 'Industrial Engineering',
    statusLabel: 'Live Deployment',
    shortDescription:
      'Enterprise web platform for a Tier-1 manufacturer supplying terminals, connectors, and power modules to global OEMs.',
    overview:
      'Terminal Technologies is a modern corporate engineering website built for an established Indian manufacturer supplying 2B+ annual precision interconnection components to 500+ global OEM customers since 1993.',
    businessProblem:
      'Industrial Tier-1 manufacturers need an authoritative digital presence that communicates engineering scale, product precision, and quality certifications while capturing B2B inquiries cleanly.',
    proposedSolution:
      'Engineered a Next.js + TypeScript web application with Framer Motion and GSAP interactions—structuring interactive product category tabs, an 11-step manufacturing excellence showcase, core capabilities, and B2B contact flows.',
    features: [
      'Interactive tabbed product portfolio covering Terminals, Connectors, Power Distribution, and Custom Parts',
      'Key operational milestone highlights (30+ years, 2B+ annual connections, 500+ global OEMs)',
      'Dedicated Manufacturing Excellence, Core Capabilities, Quality Controls, and Innovation sections',
      'OEM partner marquee, global footprint view, and structured technical RFQ intake',
      'Next.js App Router build with Tailwind CSS v4, Framer Motion, and GSAP animations',
    ],
    technologyStack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Framer Motion',
      'GSAP',
    ],
    previewImage: terminalTechImg,
    previewAlt:
      'Terminal Technologies live website hero showing Tier-1 automotive banner and industrial KPI cards',
    liveUrl: 'https://terminal-technologies.vercel.app',
    repoUrl:
      'https://github.com/chaitanyachaitanyatoraskar-svg/terminal-technologies',
    projectStatusDetail:
      'Live web application verified online via HTTPS; built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.',
    verifiedOutcome:
      'Production deployment live at terminal-technologies.vercel.app with complete product catalog and B2B inquiry sections.',
  },
  {
    slug: 'propstudio',
    title: 'PropStudio',
    division: 'BROTOCOL SYSTEMS',
    category: 'PropTech & Lead Platform',
    statusLabel: 'Web Platform',
    shortDescription:
      'Lead-generation website and role-based Firebase portal built for local builders, landlords, and rental managers.',
    overview:
      'PropStudio is a full-stack web design and operations platform built specifically for local property businesses—combining mobile-first showcase pages and WhatsApp lead routing with authenticated portals for tenants, builders, and managers.',
    businessProblem:
      'Many local builders and rental managers rely on fragmented spreadsheets and manual calls—missing incoming enquiries and lacking a central portal for maintenance requests or project progress.',
    proposedSolution:
      'Built a React + TypeScript application backed by Firebase Authentication and Cloud Firestore, uniting conversion-oriented consultation capture with role-based portals for Tenant Maintenance, Builder Build Progress, and Portfolio Command.',
    features: [
      'Firebase Authentication (Email/Password & Google Sign-In) with Firestore role routing',
      'Tenant portal for rent tracking and live maintenance ticket submission',
      'Builder client view with phase progress and technical blueprint access',
      'Property manager command overview monitoring active units and scheduled work',
      'Pre-integrated consultation request intake and WhatsApp lead routing',
    ],
    technologyStack: [
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Firebase Auth',
      'Cloud Firestore',
    ],
    previewImage: propStudioImg,
    previewAlt:
      'PropStudio interface showing hero lead capture funnel and floating property portal status badges',
    repoUrl: 'https://github.com/chaitanyachaitanyatoraskar-svg/PropStudio',
    projectStatusDetail:
      'Full-stack React and Firebase source verified in repository; public Vercel URL currently inactive.',
    verifiedOutcome: null,
  },
  {
    slug: 'atelier-build',
    title: 'Atelier Build',
    division: 'BROTOCOL SYSTEMS',
    category: 'Architecture & Real Estate',
    statusLabel: 'Web Platform',
    shortDescription:
      'Editorial architectural showcase highlighting residential, villa, and commercial developments across six Indian cities.',
    overview:
      'Atelier Build is a multi-route React application crafted for an architectural developer—highlighting flagship residences, studio craft philosophy, client testimonials, and private walkthrough booking in an understated editorial aesthetic.',
    businessProblem:
      'Luxury architectural studios and bespoke developers need a digital flagship that expresses material honesty and spatial restraint instead of generic real-estate template grids.',
    proposedSolution:
      'Designed an editorial web experience with React Router navigation across Home, Properties, Atelier, and Contact—featuring curated property collections across Bangalore and Mumbai, studio process chapters, and direct enquiry pathways.',
    features: [
      'Dedicated routes for Home showcase, Properties catalogue, Atelier philosophy, and Contact',
      'Curated developments filtered across Residential, Villa, Commercial, and Mixed Use',
      'Intersection-observed scroll transitions paired with refined editorial typography',
      'Four-stage architectural process presentation (Listen, Sketch, Craft, Steward)',
      'Direct private-visit scheduling and project portfolio exploration flows',
    ],
    technologyStack: [
      'React 19',
      'React Router',
      'Vite',
      'Custom CSS',
      'Intersection Observer API',
    ],
    previewImage: atelierBuildImg,
    previewAlt:
      'Atelier Build architectural website hero displaying modern poolside villa and editorial typography',
    repoUrl: 'https://github.com/chaitanyachaitanyatoraskar-svg/atelier-build',
    projectStatusDetail:
      'React 19 application source verified in repository; public Vercel URL currently inactive.',
    verifiedOutcome: null,
  },
  {
    slug: 'restaurant-qr-ordering-system',
    title: 'Restaurant QR Ordering System',
    division: 'BROTOCOL HOSPITALITY',
    category: 'Hospitality Technology',
    statusLabel: 'Product Demo',
    shortDescription:
      'End-to-end table QR ordering web app connected to a live Kitchen Order Ticket (KOT) screen, counter monitor, and waiter-call system.',
    overview:
      'A full-stack dine-in ordering demonstration built under BROTOCOL Hospitality. Designed for independent restaurants, cafes, and hotel dining rooms that want faster table-to-kitchen coordination without forcing guests to install an app.',
    businessProblem:
      'During peak dining hours, waitstaff spend significant time taking repetitive orders and walking back and forth to clarify table modifications, leading to order delays and missed table requests.',
    proposedSolution:
      'Assign each table a unique QR code that opens a lightweight mobile ordering flow. Submitted orders pass server-side validation, persist to a transactional database, and appear immediately on both the Kitchen Order Ticket board and Counter dashboard.',
    features: [
      'Table-encoded QR landing with zero app installation',
      'Categorized digital menu with item notes and live cart review',
      'Server-side duplicate submission guard and persistent order log',
      'Kitchen Order Ticket board with New / Accepted / Preparing / Ready states',
      'Counter overview dashboard and rate-limited Call Waiter button',
      'Admin management for categories, menu pricing, and table QR generation',
    ],
    technologyStack: ['React', 'TypeScript', 'Node.js / REST API', 'PostgreSQL', 'WebSockets'],
    previewKind: 'qr-ordering',
    projectStatusDetail:
      'Active internal product demonstration available for live walkthroughs with restaurants across Maharashtra.',
    verifiedOutcome: null,
  },
  {
    slug: 'smart-nfc-google-review-solution',
    title: 'Smart NFC Google Review Solution',
    division: 'BROTOCOL SMART',
    category: 'Smart Products & NFC',
    statusLabel: 'Product Demo',
    shortDescription:
      'Dual NFC + dynamic QR counter card engineered to take customers directly to a business’s genuine Google Review screen in a single tap.',
    overview:
      'A practical physical-to-digital customer touchpoint under BROTOCOL Smart. Built for retail stores, clinics, salons, and hospitality counters where satisfied customers often intend to leave feedback but forget once they leave.',
    businessProblem:
      'Asking customers to search for a business name on Google Maps, verify the right branch, and locate the review button creates friction that causes most willing customers to drop off.',
    proposedSolution:
      'Provide a pre-tested, NDEF-encoded NFC card paired with a fallback QR code placed right at checkout. One smartphone tap or camera scan opens the exact Google Review link with zero intermediary filtering or gating.',
    features: [
      'NTAG-compatible NFC tap plus high-contrast printed QR backup',
      'Works across modern Android and iPhone devices without apps',
      'Pre-delivery URL testing and physical durability check',
      'Compliant direct-link routing with zero review gating',
    ],
    technologyStack: ['NFC NDEF', 'Dynamic QR Routing', 'Web Redirect Layer', 'Mobile Browser UX'],
    previewKind: 'nfc-review',
    projectStatusDetail:
      'Production-ready product demonstration; custom business configurations prepared per order.',
    verifiedOutcome: null,
  },
  {
    slug: 'digital-menu-stand',
    title: 'Smart Digital Menu Stand',
    division: 'BROTOCOL SMART',
    category: 'Smart Tabletop Hardware',
    statusLabel: 'Demonstration',
    shortDescription:
      'Acrylic tabletop stand combining NFC tap and QR scanning to present an updatable mobile menu alongside review and social links.',
    overview:
      'An integrated tabletop hardware and mobile web experience for cafes, bakeries, and restaurants looking to replace worn paper menus while keeping review and social channels one tap away.',
    businessProblem:
      'Printed menus degrade quickly from spills and wear, and every seasonal item or price update forces businesses to pay for reprinting across dozens of tables.',
    proposedSolution:
      'Deploy a durable acrylic tabletop stand housing both an NFC tag and scannable QR code linked to a clean, fast-loading mobile menu hub with dedicated buttons for Google Reviews and official social profiles.',
    features: [
      'Dual-access NFC + QR tabletop acrylic stand architecture',
      'Fast mobile-first digital menu grouped by food categories',
      'Dedicated navigation to Google Review and verified social pages',
      'Upgradeable pathway to full BROTOCOL Hospitality table ordering',
    ],
    technologyStack: ['NFC Tagging', 'QR Code Integration', 'Responsive Web Menu', 'CSS Design System'],
    previewKind: 'menu-stand',
    projectStatusDetail:
      'Hardware and digital landing demonstration ready for cafe and restaurant trials.',
    verifiedOutcome: null,
  },
  {
    slug: 'custom-business-management-system',
    title: 'Custom Business Management System',
    division: 'BROTOCOL SYSTEMS',
    category: 'Custom Software',
    statusLabel: 'Concept Project',
    shortDescription:
      'Role-based internal operations portal replacing scattered spreadsheets with structured records, approvals, and operational reporting.',
    overview:
      'A reference architecture created by BROTOCOL Systems illustrating how growing SMEs can transition daily enquiry tracking, inventory logs, and staff tasks out of fragile spreadsheets into a unified web application.',
    businessProblem:
      'Growing teams relying on shared spreadsheets and chat messages frequently encounter conflicting file versions, accidental deletions, missing audit trails, and slow status reporting.',
    proposedSolution:
      'Design a tailored browser-based internal portal backed by a relational SQL database, role-based access permissions, validated entry forms, and clean operational summary views.',
    features: [
      'Role-based authentication for admin, operations, and staff roles',
      'Validated client, order, and task data entry workflows',
      'Searchable audit trail and exportable operational summaries',
      'Responsive layout usable across desktop office monitors and tablets',
    ],
    technologyStack: ['React', 'TypeScript', 'FastAPI / Node.js', 'PostgreSQL', 'Zod Validation'],
    previewKind: 'business-system',
    projectStatusDetail:
      'Reference architecture showcase demonstrating BROTOCOL Systems custom build capabilities.',
    verifiedOutcome: null,
  },
  {
    slug: 'workflow-automation-application',
    title: 'Workflow Automation Application',
    division: 'BROTOCOL SYSTEMS',
    category: 'Business Automation',
    statusLabel: 'Concept Project',
    shortDescription:
      'Event-driven automation pipeline connecting web enquiries, structured database storage, and instant team notifications.',
    overview:
      'A modular workflow automation blueprint under BROTOCOL Systems built to eliminate manual copy-pasting between website enquiry forms, internal trackers, and team notification channels.',
    businessProblem:
      'Teams often lose hours each week manually copying enquiry form submissions into trackers, assigning follow-ups, and formatting repetitive status updates.',
    proposedSolution:
      'Connect validated webhook triggers to structured API pipelines that deduplicate incoming leads, write records to a central database, notify the right owner, and log delivery status with fallback alerts.',
    features: [
      'Schema-validated webhook ingestion and deduplication',
      'Automated routing to CRM / internal database tables',
      'Configurable notification alerts and failure retry logging',
      'Human-in-the-loop approval checkpoints for sensitive actions',
    ],
    technologyStack: ['REST Webhooks', 'Python / Node.js', 'n8n / Custom Workers', 'PostgreSQL'],
    previewKind: 'workflow-automation',
    projectStatusDetail:
      'Concept blueprint used during discovery consultations to scope client workflow automations.',
    verifiedOutcome: null,
  },
];
