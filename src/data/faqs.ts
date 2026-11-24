export interface FaqItem {
  id: string;
  category: 'General' | 'Smart Products' | 'Hospitality' | 'Software & Process';
  question: string;
  answer: string;
}

export const faqsData: FaqItem[] = [
  {
    id: 'what-does-brotocol-do',
    category: 'General',
    question: 'What does BROTOCOL do?',
    answer:
      'BROTOCOL is a technology company operating across three divisions: BROTOCOL Smart (NFC and QR physical products), BROTOCOL Hospitality (QR-based restaurant ordering and kitchen workflow software), and BROTOCOL Systems (custom web applications, business software, and workflow automation).',
  },
  {
    id: 'types-of-businesses',
    category: 'General',
    question: 'What types of businesses does BROTOCOL work with?',
    answer:
      'We build practical solutions for restaurants, cafes, hotels, retail stores, salons, clinics, professional service firms, and small-to-medium enterprises that want to modernize customer touchpoints or replace manual workflows.',
  },
  {
    id: 'what-are-smart-products',
    category: 'Smart Products',
    question: 'What are BROTOCOL Smart products?',
    answer:
      'BROTOCOL Smart currently focuses on two physical-to-digital products: the Google Review NFC Card and the Smart Digital Menu Stand. Both combine NFC tap technology with a scannable QR code so customers can open your digital destination without downloading an app.',
  },
  {
    id: 'how-nfc-review-card-works',
    category: 'Smart Products',
    question: 'How does the NFC Google Review Card work?',
    answer:
      'Before delivery, we configure and test the card with your business’s genuine Google Review link. Placed at your counter, a customer taps a compatible smartphone or scans the QR code to open your review page directly in their browser, where they independently decide whether to submit a review.',
  },
  {
    id: 'what-is-digital-menu-stand',
    category: 'Smart Products',
    question: 'What is the Smart Digital Menu Stand?',
    answer:
      'It is an acrylic tabletop stand equipped with both NFC and QR access. Customers tap or scan from their table to view your digital menu, Google Review link, and business social profiles—helping reduce menu reprinting costs when items or prices change.',
  },
  {
    id: 'how-qr-ordering-works',
    category: 'Hospitality',
    question: 'How does the QR Restaurant Ordering System work?',
    answer:
      'Each table receives a unique QR code. Guests scan it to browse your digital menu, add items to a cart, and submit an order without installing an app. Validated orders are saved and routed directly to your Kitchen Order Ticket (KOT) screen and Counter dashboard, alongside a Call Waiter option.',
  },
  {
    id: 'custom-business-software',
    category: 'Software & Process',
    question: 'Can BROTOCOL develop custom business software?',
    answer:
      'Yes. Through BROTOCOL Systems, we build custom websites, database-driven web applications, internal management portals, admin dashboards, and REST APIs tailored to the exact operational steps of your business.',
  },
  {
    id: 'automate-workflows',
    category: 'Software & Process',
    question: 'Can you automate existing business workflows?',
    answer:
      'Yes. We evaluate your current manual tasks—such as form-to-database entry, lead routing, reporting, and system notifications—and build reliable API or workflow integrations only where automation measurably saves time or reduces errors.',
  },
  {
    id: 'project-cost',
    category: 'Software & Process',
    question: 'How much does a project cost?',
    answer:
      'Pricing depends on the product configuration, hardware quantities, or software scope required. After an initial discovery discussion, we provide a clear written breakdown covering setup or product cost, any customization, and applicable hosting or maintenance terms.',
  },
  {
    id: 'development-timeline',
    category: 'Software & Process',
    question: 'How long does software development take?',
    answer:
      'Delivery timelines depend on project complexity, integrations, and review cycles. Once requirements and acceptance criteria are agreed upon during the planning phase, we share a realistic milestone schedule before starting development.',
  },
  {
    id: 'ongoing-maintenance',
    category: 'Software & Process',
    question: 'Do you provide ongoing maintenance?',
    answer:
      'Yes, where agreed as part of your engagement. Software clients can opt into structured maintenance covering security updates, monitoring, backup verification, and defined technical support.',
  },
  {
    id: 'outside-maharashtra',
    category: 'General',
    question: 'Do you work with businesses outside Maharashtra?',
    answer:
      'Our primary focus is Maharashtra—including centers such as Nashik, Mumbai, Thane, Navi Mumbai, and Pune—while our digital software, automation, and smart product deliveries support businesses across India.',
  },
  {
    id: 'customized-solution',
    category: 'General',
    question: 'Can I request a customized solution?',
    answer:
      'Yes. Every organization works differently. You can share your operational challenge through our enquiry form, and we will recommend whether an existing BROTOCOL product, a tailored configuration, or a custom software build fits best.',
  },
  {
    id: 'how-to-get-started',
    category: 'General',
    question: 'How do I get started?',
    answer:
      'Submit your details through the Project Enquiry section on this website with the division or service you are interested in. We will review your note, arrange a discovery conversation, and outline the practical next steps.',
  },
];
