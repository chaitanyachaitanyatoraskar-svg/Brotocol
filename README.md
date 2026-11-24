# BROTOCOL — Technology. Innovation. Automation.

Official corporate website, division showcase, and engineering case study platform for **BROTOCOL**, building smarter business solutions across Maharashtra and India through smart NFC/QR hardware, hospitality ordering systems, custom web applications, and workflow automation.

---

## Business Divisions

1. **BROTOCOL SMART (`/divisions/smart`)**
   - Physical-to-digital customer touchpoints including branded **Google Review NFC Cards** and **Smart Digital Menu Stands** combining NFC tap + QR scanning.
2. **BROTOCOL HOSPITALITY (`/divisions/hospitality`)**
   - End-to-end **QR-Based Restaurant Ordering System** featuring mobile guest menus, server-validated order processing, live Kitchen Order Ticket (KOT) screens, counter dashboards, waiter-call alerts, and restaurant admin management.
3. **BROTOCOL SYSTEMS (`/divisions/systems`)**
   - Custom business web applications, internal operations portals, REST APIs, and workflow automation pipelines engineered around real business processes.

---

## Selected Work & Case Studies

The **Selected Work / Case Studies** section (`#our-work`, `/our-work`, `/case-studies/:slug`) highlights real engineering builds alongside BROTOCOL product architectures:

- **01 · Terminal Technologies** (`Live Deployment` — `https://terminal-technologies.vercel.app`) — Corporate engineering platform for a Tier-1 automotive component manufacturer built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, and GSAP.
- **02 · PropStudio** (`Web Platform`) — Full-stack property lead-generation website and Firebase-authenticated tenant/builder/manager portal built with React 19, TypeScript, Tailwind CSS, Vite, Firebase Auth, and Cloud Firestore.
- **03 · Atelier Build** (`Web Platform`) — Multi-route editorial architectural and residential showcase built with React 19, React Router, Vite, and intersection-observed transitions.
- **04–08 · Product & System Demonstrations** — Structured architectures covering Restaurant QR Ordering Systems, Smart NFC Google Review Solutions, Smart Digital Menu Stands, Custom Business Management Systems, and Workflow Automation Applications.

---

## Tech Stack

- **Framework:** React 19 (`react`, `react-dom`)
- **Language:** TypeScript
- **Build Tool:** Vite 8 (`@vitejs/plugin-react`)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with `Plus Jakarta Sans` typography and custom design tokens (`src/index.css`)
- **Routing:** React Router v7 (`react-router-dom`)
- **Validation & Icons:** Zod v4 (`zod`), Lucide React (`lucide-react`)

---

## Routes & Pages

| Route | View | Description |
| --- | --- | --- |
| `/` | `HomePage` | Full landing experience: Hero, Service Marquee, Divisions, About, Approach, Selected Work, Team, Industries & Why BROTOCOL, FAQ, CTA, and Contact |
| `/about` | `AboutPage` | Company narrative, mission, and leadership directory |
| `/services` | `ServicesPage` | Overview across BROTOCOL's three core technology divisions |
| `/divisions/smart` | `DivisionPage` | BROTOCOL Smart NFC & QR product showcase |
| `/divisions/hospitality` | `DivisionPage` | BROTOCOL Hospitality restaurant ordering & KOT architecture |
| `/divisions/systems` | `DivisionPage` | BROTOCOL Systems custom software & automation lifecycle |
| `/products` | `ProductsPage` | Smart NFC Review Cards and Digital Menu Stand product catalogue |
| `/our-work` | `OurWorkPage` | Full Selected Work & product demonstrations archive |
| `/case-studies` | `OurWorkPage` | Case studies index view |
| `/case-studies/:slug` | `CaseStudyDetailPage` | Detailed problem, solution, architecture features, stack, and live/repo links |
| `/insights` & `/insights/:slug` | `InsightsPage` | Practical articles and technical notes |
| `/contact` | `ContactPage` | Scoped inquiry intake form with client-side Zod validation |
| `/privacy-policy` & `/terms` | `LegalPage` | Privacy policy and service terms |

---

## Project Structure

```text
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── .env.example
├── public/                     # Static public assets & favicon
└── src/
    ├── App.tsx                 # Route definitions wrapped in SiteLayout
    ├── index.css               # Theme variables, backgrounds, utility classes
    ├── main.tsx                # Application entrypoint
    ├── assets/images/          # Team portraits, hero photography, project UI captures, logo
    ├── components/
    │   ├── about/              # Company narrative & editorial visuals
    │   ├── common/             # BrandMark, ProductPreview, SocialIcons
    │   ├── contact/            # Inquiry form & final CTA banner
    │   ├── faq/                # Filterable FAQ accordion
    │   ├── footer/             # Navigation & newsletter footer
    │   ├── hero/               # Full-bleed hero section
    │   ├── layout/             # Shared header/footer page wrapper
    │   ├── navigation/         # TopBar & responsive Navbar
    │   ├── portfolio/          # Selected Work & Case Studies section
    │   ├── services/           # Divisions, Approach, Industries & Why BROTOCOL
    │   └── team/               # People Behind BROTOCOL editorial section
    ├── config/
    │   └── site.ts             # Brand copy, env-backed contact/social links & integrations
    ├── data/                   # Strongly-typed content modules (projects, services, team, faqs, etc.)
    ├── hooks/                  # Document metadata helper (useDocumentMeta)
    └── pages/                  # Route page components
```

---

## Environment Configuration

Copy `.env.example` to `.env` if you want to configure optional public contact channels, social links, or form endpoints:

```bash
cp .env.example .env
```

Available optional variables:
- `VITE_CONTACT_PHONE`, `VITE_CONTACT_EMAIL`, `VITE_WHATSAPP_NUMBER`, `VITE_OFFICE_ADDRESS`
- `VITE_SOCIAL_LINKEDIN`, `VITE_SOCIAL_INSTAGRAM`, `VITE_SOCIAL_FACEBOOK`
- `VITE_CONTACT_FORM_ENDPOINT`, `VITE_NEWSLETTER_ENDPOINT`, `VITE_SITE_URL`

Unconfigured fields automatically remain hidden in the UI without placeholder clutter.

---

## Local Development

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Run TypeScript typechecking
npm run typecheck

# Build for production (runs tsc --noEmit && vite build)
npm run build

# Preview production bundle locally
npm run preview
```
