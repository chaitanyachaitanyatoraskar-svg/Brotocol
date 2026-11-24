export interface IndustryItem {
  id: string;
  name: string;
  divisionFocus: string;
  application: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: 'restaurants-cafes',
    name: 'Restaurants and Cafes',
    divisionFocus: 'Hospitality & Smart',
    application:
      'QR table ordering, digital menus, Kitchen Order Ticket (KOT) boards, counter tracking, and tabletop Smart Digital Menu Stands.',
  },
  {
    id: 'hotels-hospitality',
    name: 'Hotels and Hospitality',
    divisionFocus: 'Hospitality & Smart',
    application:
      'In-room or dining QR ordering interfaces, reception Google Review NFC touchpoints, and guest-facing digital information hubs.',
  },
  {
    id: 'retail-businesses',
    name: 'Retail Businesses',
    divisionFocus: 'Smart & Systems',
    application:
      'Countertop NFC Google Review Cards, digital catalogue links, and custom inventory or billing workflow software.',
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    divisionFocus: 'Systems & Smart',
    application:
      'Client portals, automated enquiry-to-CRM pipelines, structured reporting dashboards, and NFC business touchpoints.',
  },
  {
    id: 'clinics-service-providers',
    name: 'Clinics and Service Providers',
    divisionFocus: 'Smart & Systems',
    application:
      'Frictionless front-desk Google Review NFC Cards alongside custom appointment or internal record management tools.',
  },
  {
    id: 'smes',
    name: 'Small and Medium Enterprises',
    divisionFocus: 'Systems',
    application:
      'Custom web applications replacing manual paperwork and disconnected spreadsheets with dependable database-backed systems.',
  },
  {
    id: 'growing-organizations',
    name: 'Growing Organizations',
    divisionFocus: 'Systems & Automation',
    application:
      'REST APIs, cross-platform integrations, automated notifications, and operational dashboards designed to scale cleanly.',
  },
];
