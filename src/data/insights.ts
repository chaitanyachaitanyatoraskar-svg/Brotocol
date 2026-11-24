export interface InsightArticle {
  slug: string;
  category: 'Smart Products' | 'Hospitality Tech' | 'Software & Automation';
  title: string;
  summary: string;
  readTime: string;
  keyTakeaways: string[];
  body: string[];
}

export const insightsData: InsightArticle[] = [
  {
    slug: 'nfc-and-qr-counter-touchpoints',
    category: 'Smart Products',
    title: 'Why Combining NFC and QR Matters at Customer Counters',
    summary:
      'A practical look at device compatibility, customer habits, and why dual-access physical cards outperform single-method touchpoints.',
    readTime: '3 min read',
    keyTakeaways: [
      'NFC enables single-tap convenience on modern smartphones without opening a camera.',
      'Printing a clean QR fallback guarantees access for devices with NFC disabled or older hardware.',
      'Pre-delivery URL verification prevents broken links on the shop floor.',
    ],
    body: [
      'Physical touchpoints fail when customers hit unexpected friction—such as having to search for a business name manually or install a dedicated app. Pairing an NDEF-programmed NFC chip with a high-contrast QR code solves both modern tap habits and universal camera scanning.',
      'At BROTOCOL Smart, every Google Review NFC Card and Smart Digital Menu Stand is tested prior to dispatch so the destination opens directly in the customer’s mobile browser, keeping your counter experience straightforward and compliant.',
    ],
  },
  {
    slug: 'reliable-qr-ordering-in-busy-kitchens',
    category: 'Hospitality Tech',
    title: 'Designing QR Ordering Systems That Hold Up During Peak Service',
    summary:
      'Why persistent database storage and clear Kitchen Order Ticket (KOT) states matter more than flashy visual menus.',
    readTime: '4 min read',
    keyTakeaways: [
      'Order confirmation must rely on server-side validation, never frontend-only state.',
      'Kitchen displays require high-contrast, distance-readable typography and minimal clicks.',
      'Counter dashboards bridge dining room visibility without interrupting chefs.',
    ],
    body: [
      'Many digital menu tools stop at showing a PDF or static webpage. In an active dining room, the operational bottleneck happens between table submission, kitchen preparation, and counter follow-up.',
      'BROTOCOL Hospitality structures table ordering around persistent database transactions and dedicated views for guests, kitchen staff, and counter operators so orders stay synchronized even across patchy local Wi-Fi.',
    ],
  },
  {
    slug: 'when-spreadsheets-need-custom-software',
    category: 'Software & Automation',
    title: 'Recognizing When Spreadsheets Need a Custom Operational System',
    summary:
      'Practical criteria for deciding between off-the-shelf tools, lightweight workflow automation, and a custom web application.',
    readTime: '4 min read',
    keyTakeaways: [
      'Spreadsheets break down when multiple staff edit concurrently without access controls.',
      'Automation should eliminate repetitive copying before introducing complex AI layers.',
      'Scoped documentation keeps custom software budgets predictable.',
    ],
    body: [
      'Spreadsheets are an excellent starting point for early operations, but as headcount and customer volume grow, version conflicts, accidental overwrites, and manual reporting drain daily productivity.',
      'Before writing software, BROTOCOL Systems maps the actual workflow first—recommending conventional database-backed tools and deterministic APIs wherever they deliver higher reliability at lower maintenance cost.',
    ],
  },
];
