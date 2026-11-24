export interface DivisionService {
  id: 'smart' | 'hospitality' | 'systems';
  code: string;
  name: string;
  categoryLabel: string;
  title: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  route: string;
  featured?: boolean;
  overview: string;
  confirmedCapabilities: string[];
  futureRoadmap: string[];
  targetCustomers: string[];
}

export const divisionsData: DivisionService[] = [
  {
    id: 'smart',
    code: 'DIVISION 01',
    name: 'BROTOCOL SMART',
    categoryLabel: 'SMART PRODUCTS',
    title: 'Connect Your Business to the Digital World.',
    description:
      'Smart NFC and QR-enabled products that make it easier for customers to access your digital business presence.',
    highlights: ['Google Review NFC Card', 'Smart Digital Menu Stand'],
    ctaLabel: 'Explore Smart Solutions',
    route: '/divisions/smart',
    featured: false,
    overview:
      'BROTOCOL SMART develops physical NFC and QR-enabled products that bridge everyday customer touchpoints—counters, tables, and reception desks—with your digital destinations without requiring app downloads.',
    confirmedCapabilities: [
      'NFC-enabled Google Review Card with dynamic QR backup',
      'Acrylic tabletop Smart Digital Menu Stand with NFC and QR',
      'Pre-configured and tested destination routing before delivery',
      'No mobile app installation required for end customers',
      'Direct access to genuine Google Review pages, digital menus, and business links',
    ],
    futureRoadmap: [
      'Centralized dynamic link management portal',
      'Client-side product management dashboards',
      'Tap and QR scan analytics where technically measurable',
      'Multi-card and multi-branch asset management',
      'Custom enterprise hardware branding tiers',
    ],
    targetCustomers: [
      'Retail stores and showrooms',
      'Clinics, salons, and service counters',
      'Restaurants, cafes, and bakeries',
      'Local businesses across Maharashtra',
    ],
  },
  {
    id: 'hospitality',
    code: 'DIVISION 02',
    name: 'BROTOCOL HOSPITALITY',
    categoryLabel: 'HOSPITALITY TECHNOLOGY',
    title: 'Smarter Ordering. Better Restaurant Operations.',
    description:
      'Digital ordering and kitchen workflow solutions designed to simplify restaurant operations.',
    highlights: [
      'QR ordering interface',
      'Kitchen order display',
      'Restaurant table QR experience',
    ],
    ctaLabel: 'Explore Hospitality Solutions',
    route: '/divisions/hospitality',
    featured: true,
    overview:
      'BROTOCOL HOSPITALITY focuses on practical software built specifically for dine-in restaurants, cafes, hotels, and food outlets—connecting table-side QR ordering directly with kitchen and counter workflows.',
    confirmedCapabilities: [
      'QR-based table identification and mobile-first digital menu',
      'Customer ordering interface with shopping cart and order review',
      'Server-validated order processing with persistent storage',
      'Kitchen Order Ticket (KOT) system and live kitchen dashboard',
      'Counter dashboard for tracking active tables and order states',
      'Call Waiter request system and restaurant administration panel',
    ],
    futureRoadmap: [
      'Third-party POS billing integrations',
      'Multi-branch centralized restaurant management',
      'Ingredient and inventory tracking modules',
      'Sales and item-level restaurant analytics',
      'Integrated online payment gateway options',
    ],
    targetCustomers: [
      'Independent restaurants and family dining',
      'Cafes, lounges, and bakeries',
      'Boutique hotels and food courts',
      'Multi-table dine-in hospitality venues',
    ],
  },
  {
    id: 'systems',
    code: 'DIVISION 03',
    name: 'BROTOCOL SYSTEMS',
    categoryLabel: 'SOFTWARE & AUTOMATION',
    title: 'Software Designed Around the Way You Work.',
    description:
      'Custom business applications, management systems and workflow automation built for your operational requirements.',
    highlights: [
      'Web applications',
      'Admin dashboards',
      'Data and automation interfaces',
    ],
    ctaLabel: 'Explore Software Solutions',
    route: '/divisions/systems',
    featured: false,
    overview:
      'BROTOCOL SYSTEMS designs and develops custom websites, web applications, internal management tools, REST APIs, and practical workflow automations for businesses outgrowing spreadsheets and manual paperwork.',
    confirmedCapabilities: [
      'Custom business websites and responsive web applications',
      'Database-driven internal management systems and admin dashboards',
      'REST API development and system-to-system integrations',
      'Workflow automation for repetitive data entry and notifications',
      'Data processing, structured reporting, and technology consulting',
    ],
    futureRoadmap: [
      'Reusable industry-specific SaaS starter modules',
      'Document extraction and automated operational pipelines',
      'Evaluated AI-assisted workflow routing with human approval controls',
    ],
    targetCustomers: [
      'Small and medium enterprises replacing spreadsheets',
      'Professional services, clinics, and distributors',
      'Growing organizations needing tailored internal tools',
    ],
  },
];

export const marqueeItems: string[] = [
  'Smart NFC Solutions',
  'Hospitality Technology',
  'Custom Software',
  'Web Applications',
  'Business Automation',
  'Digital Transformation',
];

export const approachSteps = [
  {
    step: '01',
    title: 'Understand',
    description:
      'We study your business, requirements and operational challenges.',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'We define the solution, scope, technology and implementation approach.',
  },
  {
    step: '03',
    title: 'Build',
    description: 'We design, develop and test the solution.',
  },
  {
    step: '04',
    title: 'Support',
    description:
      'We help with deployment, onboarding and agreed ongoing support.',
  },
];

export const whyBrotocolPillars = [
  {
    title: 'Solutions built around actual business needs',
    detail:
      'Every product and software build begins with how your team and customers actually operate, rather than forcing rigid templates.',
  },
  {
    title: 'Smart products combined with software',
    detail:
      'We connect physical counter and tabletop hardware directly to web software, menus, and operational workflows.',
  },
  {
    title: 'Customizable technology',
    detail:
      'From branded NFC touchpoints to custom internal dashboards, systems are shaped to match your scope and workflow.',
  },
  {
    title: 'Clear project scope',
    detail:
      'Requirements, deliverables, exclusions, and maintenance terms are documented upfront before build work begins.',
  },
  {
    title: 'Practical implementation',
    detail:
      'We prioritize reliable, accessible technology that local teams can run daily without specialized IT staff.',
  },
  {
    title: 'Long-term technical support where agreed',
    detail:
      'Structured onboarding, staff walkthroughs, and defined ongoing maintenance plans keep systems dependable after launch.',
  },
  {
    title: 'Focus on usability and reliability',
    detail:
      'Clean mobile-first interfaces for customers and fault-tolerant server validation for business operations.',
  },
];
