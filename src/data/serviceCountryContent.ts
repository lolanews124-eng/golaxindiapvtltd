/**
 * Hand-written service × country landing content.
 * Only these combos are indexed; others 301 to the service hub.
 * Key: `${serviceSlug}/${countrySlug}`
 */

export interface ServiceCountryFaq {
  question: string;
  answer: string;
}

export interface ServiceCountrySection {
  heading: string;
  body: string;
}

export interface ServiceCountryPageContent {
  h1: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  faqs: ServiceCountryFaq[];
  sections: ServiceCountrySection[];
}

export const SERVICE_COUNTRY_ALLOWLIST: Record<string, string[]> = {
  "web-development": [
    "united-states",
    "united-kingdom",
    "united-arab-emirates",
    "australia",
    "canada",
    "singapore",
    "germany",
  ],
  "software-development": [
    "united-states",
    "united-kingdom",
    "united-arab-emirates",
    "australia",
    "canada",
    "singapore",
  ],
  "mobile-app-development": [
    "united-states",
    "united-kingdom",
    "united-arab-emirates",
    "australia",
  ],
  "digital-marketing": ["united-states", "united-kingdom", "united-arab-emirates"],
  "it-consulting": ["united-states", "united-kingdom", "singapore"],
};

export function isServiceCountryAllowed(serviceSlug: string, countrySlug: string): boolean {
  return SERVICE_COUNTRY_ALLOWLIST[serviceSlug]?.includes(countrySlug) ?? false;
}

/** Safe internal link — never points at a pruned/thin combo */
export function getServiceCountryHref(serviceSlug: string, countrySlug: string): string {
  const slug = serviceSlug === "seo-services" ? "digital-marketing" : serviceSlug;
  if (isServiceCountryAllowed(slug, countrySlug)) {
    return `/services/${slug}/global/${countrySlug}`;
  }
  // seo-services has no hub page
  if (slug === "seo-services") return "/services/digital-marketing";
  return `/services/${slug}`;
}

export function getServiceCountryContent(
  serviceSlug: string,
  countrySlug: string,
): ServiceCountryPageContent | undefined {
  return serviceCountryContent[`${serviceSlug}/${countrySlug}`];
}


export const serviceCountryContent: Record<string, ServiceCountryPageContent> = {
  "web-development/united-states": {
    h1: "Web Development for United States Businesses",
    lead: "We build marketing sites, customer portals and web apps for US companies from our team in Patna, India. You get USD invoices, a signed NDA and IP assignment, and a few hours of overlap with US Eastern time each day.",
    metaTitle: "Web Development for United States Businesses | Golax India",
    metaDescription: "Websites, portals and web apps for US companies, built from India. USD invoices, NDA and IP assignment, daily overlap with US Eastern hours.",
    faqs: [
      {
        question: "How long does a website take?",
        answer: "A marketing site usually takes three to six weeks. A custom web application takes eight to sixteen weeks, depending on features.",
      },
      {
        question: "Do you build for accessibility?",
        answer: "Yes. US sites do get accessibility complaints, so we aim for WCAG 2.1 AA: semantic markup, keyboard support, contrast and alt text. We test with automated tools and a manual pass. That is good practice, not a legal guarantee.",
      },
      {
        question: "How do you handle United States data rules?",
        answer: "We plan around state privacy laws such as CCPA/CPRA, HIPAA when health data is involved, and the SOC 2 questions larger customers ask. We sign the agreements your contracts need. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why US teams hire us for web work",
        body: "Senior web engineers in the US are expensive and slow to hire. SaaS, healthcare, fintech and e-commerce teams bring us in when a launch is slipping because the in-house team is full.",
      },
      {
        heading: "What we build",
        body: "Marketing and corporate sites, customer portals with logins and roles, and headless CMS setups on Sanity, Strapi, Contentful or WordPress. We connect payments, CRM, email and booking tools. Redesigns come with a redirect map so existing search traffic is not lost.",
      },
      {
        heading: "Privacy and contracts",
        body: "We plan around CCPA/CPRA in California, HIPAA if you handle health data, and SOC 2 questionnaires from enterprise buyers. NDA, MSA, data-processing terms and IP assignment are signed before work starts.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "Our evenings line up with US Eastern mornings, usually three to five hours a day. Pacific overlap is shorter, so we plan it ahead. Marketing sites start around $3,500. Custom web apps are quoted after discovery and usually begin in the low five figures. Invoices are in USD. Send your brief to contact@golaxindia.com.",
      },
    ],
  },

  "web-development/united-kingdom": {
    h1: "Web Development for United Kingdom Businesses",
    lead: "Golax India builds websites and web apps for UK companies. Work is invoiced in GBP, covered by an NDA and IP assignment, and runs on UK office hours for a few hours every day.",
    metaTitle: "Web Development for United Kingdom Businesses | Golax India",
    metaDescription: "Websites and web apps for UK companies from a senior India-based team. GBP invoicing, NDA, IP assignment and UK-hours overlap.",
    faqs: [
      {
        question: "How long does a website take?",
        answer: "A marketing site usually takes three to six weeks. A custom web application takes eight to sixteen weeks, depending on features.",
      },
      {
        question: "Do you handle UK cookie consent rules?",
        answer: "We build cookie consent and consent-aware analytics to fit UK GDPR and PECR. Your legal adviser should approve the policy wording.",
      },
      {
        question: "How do you handle United Kingdom data rules?",
        answer: "We work to UK GDPR and the Data Protection Act 2018. India does not have UK adequacy status, so transfers of personal data need a lawful mechanism such as the UK IDTA or the Addendum, which we sign with you. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why UK companies outsource web projects",
        body: "UK agency day rates are high, and good freelancers book out months ahead. Fintech, property, healthcare and e-commerce teams use us to ship sites and portals without pausing their roadmap.",
      },
      {
        heading: "What we build",
        body: "Corporate and marketing sites, logged-in portals, and CMS builds your team can edit without a developer. We handle API work and integrations with payments, CRM and booking tools, and we migrate old sites with redirects mapped page by page.",
      },
      {
        heading: "Data protection and contracts",
        body: "We plan around UK GDPR and the Data Protection Act 2018. Because India lacks UK adequacy status, personal-data transfers use the UK IDTA or Addendum. NDA, MSA, data-processing terms and IP assignment are signed before work starts.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "UK office hours fall in our afternoon and early evening, giving roughly three to four hours of shared time. Marketing sites start around $3,500, with GBP quotes available. Custom web apps are scoped after discovery. Write to contact@golaxindia.com with your sitemap or brief.",
      },
    ],
  },

  "web-development/united-arab-emirates": {
    h1: "Web Development for United Arab Emirates Businesses",
    lead: "We build websites and web apps for UAE companies, including bilingual Arabic and English sites. The UAE is only 1.5 hours behind India, so we share almost the whole working day.",
    metaTitle: "Web Development for UAE Businesses | Golax India",
    metaDescription: "Websites and web apps for UAE companies, including Arabic and English builds. AED invoicing, NDA, IP assignment and near-full hours overlap.",
    faqs: [
      {
        question: "How long does a website take?",
        answer: "A marketing site usually takes three to six weeks. A custom web application takes eight to sixteen weeks, depending on features. A bilingual build adds some time for layout and content review.",
      },
      {
        question: "Can you build right-to-left Arabic sites?",
        answer: "Yes. We build RTL layouts, Arabic typography and language switching, and we test them on real devices. Arabic copy should come from you or a native writer; we handle the build.",
      },
      {
        question: "How do you handle United Arab Emirates data rules?",
        answer: "We work to UAE Federal Decree-Law No. 45 of 2021 on personal data, and to DIFC or ADGM rules where they apply. We sign the agreements you need. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why UAE companies work with an offshore team",
        body: "Many UAE buyers compare local agency retainers with offshore delivery. Real estate, e-commerce, logistics, tourism and fintech companies add capacity with us and keep their Arabic and English experiences consistent.",
      },
      {
        heading: "What we build",
        body: "Marketing and corporate sites, customer portals, and headless CMS setups with proper Arabic RTL support. We connect payment gateways, CRM, email and booking tools, and handle redesigns with redirect mapping.",
      },
      {
        heading: "Data protection and contracts",
        body: "We plan around Decree-Law No. 45 of 2021, plus DIFC and ADGM regimes where relevant. NDA, MSA, data-processing terms and IP assignment are signed before work starts.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "With a 1.5-hour gap, calls can happen almost any time in the Gulf working day. Marketing sites start around $3,500, and invoices can be raised in AED. Custom web apps are scoped after discovery. Email contact@golaxindia.com to start.",
      },
    ],
  },

  "web-development/australia": {
    h1: "Web Development for Australia Businesses",
    lead: "We build websites and web apps for Australian companies from India. Invoices are in AUD, contracts include an NDA and IP assignment, and we start early so you get a real overlap with the Australian day.",
    metaTitle: "Web Development for Australia Businesses | Golax India",
    metaDescription: "Websites and web apps for Australian companies from India. AUD invoicing, NDA, IP assignment and an early-start schedule for overlap.",
    faqs: [
      {
        question: "How long does a website take?",
        answer: "A marketing site usually takes three to six weeks. A custom web application takes eight to sixteen weeks, depending on features.",
      },
      {
        question: "How do we meet when you are hours behind us?",
        answer: "We start early on our side. Your late morning to mid-afternoon lines up with our early-to-mid working day, and that is where we book standups and reviews. Everything else happens asynchronously.",
      },
      {
        question: "How do you handle Australia data rules?",
        answer: "We work to the Privacy Act 1988 and the Australian Privacy Principles, including APP 8 on sending personal information overseas. We sign the agreements you need. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why Australian companies hire offshore for web",
        body: "Australian agencies often cost more than offshore teams for the same output. Fintech, resources, healthcare, education and retail businesses use us for CMS builds and Core Web Vitals work.",
      },
      {
        heading: "What we build",
        body: "Marketing sites, customer portals and headless CMS setups, plus the integrations around them: payments, CRM, email and booking. Site speed gets real attention, since it affects both search and conversion.",
      },
      {
        heading: "Privacy and contracts",
        body: "We plan around the Privacy Act 1988 and the Australian Privacy Principles, especially APP 8 on overseas disclosure. NDA, MSA, data-processing terms and IP assignment are signed before work starts.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "Overlap is strongest from your late morning to mid-afternoon. Marketing sites start around $3,500 and can be invoiced in AUD. Custom web apps are scoped after discovery. Send a brief to contact@golaxindia.com.",
      },
    ],
  },

  "web-development/canada": {
    h1: "Web Development for Canada Businesses",
    lead: "We build websites and web apps for Canadian companies. Invoices can be in CAD, contracts include an NDA and IP assignment, and Toronto and Montreal teams get a daily window with us that is similar to US East.",
    metaTitle: "Web Development for Canada Businesses | Golax India",
    metaDescription: "Websites and web apps for Canadian companies from India. CAD invoicing, NDA, IP assignment and planned overlap from Toronto to Vancouver.",
    faqs: [
      {
        question: "How long does a website take?",
        answer: "A marketing site usually takes three to six weeks. A custom web application takes eight to sixteen weeks, depending on features.",
      },
      {
        question: "Can you build bilingual English and French sites?",
        answer: "Yes. We build bilingual setups with a clean translation workflow. French copy should come from you or a native writer. Your legal adviser can confirm what Quebec requires for your business.",
      },
      {
        question: "How do you handle Canada data rules?",
        answer: "We work to PIPEDA, Quebec's Law 25 for Quebec residents, and provincial health privacy rules such as PHIPA in Ontario. We sign the agreements you need. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why Canadian teams hire offshore for web",
        body: "Canadian product companies often spend months searching for senior web engineers. Fintech, AI, cleantech, gaming, energy and e-commerce teams use us for marketing sites and logged-in portals.",
      },
      {
        heading: "What we build",
        body: "Marketing sites, customer portals and headless CMS builds, with bilingual layouts when you need them. We handle integrations with payments, CRM and email, and move old sites over with redirects in place.",
      },
      {
        heading: "Privacy and contracts",
        body: "We plan around PIPEDA, Quebec's Law 25 and provincial health privacy rules such as PHIPA. NDA, MSA, data-processing terms and IP assignment are signed before work starts.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "Toronto and Montreal overlap with us much like US East does. Vancouver and Calgary get a shorter window that we plan around our early evening. Marketing sites start around $3,500, with CAD invoices available. Custom web apps are scoped after discovery. Brief us at contact@golaxindia.com.",
      },
    ],
  },

  "web-development/singapore": {
    h1: "Web Development for Singapore Businesses",
    lead: "We build websites and web apps for Singapore companies. Singapore is 2.5 hours ahead of India, so the working day overlaps almost completely, and invoices can be in SGD.",
    metaTitle: "Web Development for Singapore Businesses | Golax India",
    metaDescription: "Websites and web apps for Singapore companies. SGD invoicing, NDA, IP assignment and an almost fully shared working day.",
    faqs: [
      {
        question: "How long does a website take?",
        answer: "A marketing site usually takes three to six weeks. A custom web application takes eight to sixteen weeks, depending on features.",
      },
      {
        question: "Can you invoice in SGD?",
        answer: "Yes. We can quote and invoice in SGD. Your accountant confirms the tax treatment of cross-border services, including GST.",
      },
      {
        question: "How do you handle Singapore data rules?",
        answer: "We work to the Personal Data Protection Act (PDPA). For regulated financial firms we also follow your MAS technology-risk controls where they apply to the project. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why Singapore companies hire offshore for web",
        body: "Singapore web talent is in demand and expensive to keep on the bench. Fintech, logistics, trade, e-commerce and regional SaaS firms use us for delivery that runs on Singapore time.",
      },
      {
        heading: "What we build",
        body: "Marketing and corporate sites, customer portals, and headless CMS builds. We connect payments, CRM and analytics, and handle migrations with redirects mapped before launch.",
      },
      {
        heading: "Privacy and contracts",
        body: "We plan around the PDPA, plus MAS technology-risk guidelines for regulated financial institutions. NDA, MSA, data-processing terms and IP assignment are signed before work starts.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "With only 2.5 hours between us, meetings are easy to schedule. Marketing sites start around $3,500. Custom web apps are scoped after discovery. Email contact@golaxindia.com with your sitemap or brief.",
      },
    ],
  },

  "web-development/germany": {
    h1: "Web Development for Germany Businesses",
    lead: "We build websites and web apps for German companies. Invoices can be in EUR, contracts include an NDA, IP assignment and a data-processing agreement, and German mornings overlap with our afternoon.",
    metaTitle: "Web Development for Germany Businesses | Golax India",
    metaDescription: "Websites and web apps for German companies from India. EUR invoicing, NDA, IP assignment, a DPA and morning overlap with CET.",
    faqs: [
      {
        question: "How long does a website take?",
        answer: "A marketing site usually takes three to six weeks. A custom web application takes eight to sixteen weeks, depending on features.",
      },
      {
        question: "Do German sites need an Impressum and cookie consent?",
        answer: "Business sites in Germany generally do. We build the Impressum and privacy pages and a consent banner into the site. Your lawyer supplies the legal text.",
      },
      {
        question: "How do you handle Germany data rules?",
        answer: "We work to GDPR and the German Federal Data Protection Act (BDSG). India does not have EU adequacy status, so transfers rely on a data-processing agreement (Auftragsverarbeitungsvertrag) and Standard Contractual Clauses, which we sign with you. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why German companies bring in an offshore team",
        body: "German B2B sites need precision, and senior web capacity is hard to find at short notice. Automotive, manufacturing, logistics, finance and platform companies use us for fast, accessible sites.",
      },
      {
        heading: "What we build",
        body: "Corporate and product sites, customer portals and headless CMS builds. We handle consent management, integrations with CRM and ERP tools, and migrations that keep existing URLs working.",
      },
      {
        heading: "Privacy and contracts",
        body: "We plan around GDPR and the BDSG. Transfers to India rely on a DPA and Standard Contractual Clauses. NDA, MSA and IP assignment are signed before work starts.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "Germany is 3.5 to 4.5 hours behind India, depending on the season, so your morning and early afternoon meet our afternoon and evening. Marketing sites start around $3,500, with EUR invoices available. Custom web apps are scoped after discovery. Write to contact@golaxindia.com.",
      },
    ],
  },

  "software-development/united-states": {
    h1: "Software and SaaS Development for United States Businesses",
    lead: "We build SaaS products and internal software for US companies from our team in India. You get USD invoices, an NDA, IP assignment, and a daily overlap with US Eastern time.",
    metaTitle: "Software and SaaS Development for US | Golax India",
    metaDescription: "SaaS MVPs, internal tools and custom software for US companies, built from India. USD invoices, NDA, IP assignment and US-hours overlap.",
    faqs: [
      {
        question: "How much does an MVP cost?",
        answer: "Most SaaS MVPs fall between $15,000 and $60,000. The main drivers are user roles, integrations and how custom the interface is. We give a written estimate after discovery.",
      },
      {
        question: "Who owns the source code?",
        answer: "You do. It is assigned to you in the contract and lives in your repository from the first sprint.",
      },
      {
        question: "How do you handle United States data rules?",
        answer: "We plan around state privacy laws such as CCPA/CPRA, HIPAA when health data is involved, and customer SOC 2 requirements. We sign the agreements you need. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why US product teams extend with us",
        body: "Senior backend and platform engineers are costly to hire and harder to keep. SaaS, healthcare, fintech and B2B services companies add us to their team instead of freezing the roadmap.",
      },
      {
        heading: "What we build",
        body: "SaaS products with subscriptions, billing and admin panels. Multi-tenant architecture with role-based access and audit logs. ERP, CRM, inventory and workflow systems. Integrations with Stripe, QuickBooks, HubSpot, Salesforce and Slack.",
      },
      {
        heading: "Privacy and contracts",
        body: "We plan around CCPA/CPRA, HIPAA for health data, and the SOC 2 questions enterprise buyers ask. NDA, MSA, data-processing terms and IP assignment are signed before the first sprint.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "Our evenings overlap with US Eastern mornings, about three to five hours a day. Pacific time gets a shorter window we plan in advance. MVPs usually run $15,000 to $60,000, and bigger platforms are phased. Fixed scope fits an MVP; a dedicated team suits ongoing work. Send an outline to contact@golaxindia.com.",
      },
    ],
  },

  "software-development/united-kingdom": {
    h1: "Software and SaaS Development for United Kingdom Businesses",
    lead: "Golax India builds SaaS products, APIs and internal tools for UK companies. Invoices are in GBP, contracts include an NDA and IP assignment, and we work UK office hours for a few hours a day.",
    metaTitle: "Software and SaaS Development for UK | Golax India",
    metaDescription: "SaaS, APIs and internal tools for UK companies from a senior India-based team. GBP invoicing, NDA, IP assignment and UK-hours overlap.",
    faqs: [
      {
        question: "How much does an MVP cost?",
        answer: "Most SaaS MVPs fall between $15,000 and $60,000, depending on roles, integrations and how custom the interface is. We give a written estimate after discovery.",
      },
      {
        question: "Can you work inside our UK cloud accounts?",
        answer: "Yes. We work in your repositories and cloud accounts under your access controls, so you can keep data in a UK region such as London.",
      },
      {
        question: "How do you handle United Kingdom data rules?",
        answer: "We work to UK GDPR and the Data Protection Act 2018. India does not have UK adequacy status, so personal-data transfers use the UK IDTA or Addendum, which we sign with you. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why UK scale-ups use an offshore squad",
        body: "Senior backend hires can take months in the UK. Fintech, e-commerce, healthcare, property and professional services firms add an offshore squad for APIs, workflows and admin tools.",
      },
      {
        heading: "What we build",
        body: "SaaS MVPs and full products, plus back-office systems such as CRM, ERP and inventory tools. We build multi-tenant apps with role-based access and audit trails, and connect Stripe, accounting and CRM tools.",
      },
      {
        heading: "Data protection and contracts",
        body: "We plan around UK GDPR and the Data Protection Act 2018, with the UK IDTA or Addendum covering transfers to India. NDA, MSA, data-processing terms and IP assignment are signed before work starts.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "UK office hours fall in our afternoon and early evening, roughly three to four hours of overlap. MVPs usually run $15,000 to $60,000, and GBP quotes are available. Larger platforms are phased. Email your product outline to contact@golaxindia.com.",
      },
    ],
  },

  "software-development/united-arab-emirates": {
    h1: "Software and SaaS Development for United Arab Emirates Businesses",
    lead: "We build custom platforms, SaaS products and integrations for UAE companies. The UAE is only 1.5 hours behind India, so you can reach us for almost the full working day.",
    metaTitle: "Software and SaaS Development for UAE | Golax India",
    metaDescription: "Custom platforms, SaaS and integrations for UAE companies. AED invoicing, NDA, IP assignment and nearly full working-day overlap.",
    faqs: [
      {
        question: "How much does an MVP cost?",
        answer: "Most SaaS MVPs fall between $15,000 and $60,000, depending on roles, integrations and how custom the interface is. We give a written estimate after discovery.",
      },
      {
        question: "Can the system run in a UAE cloud region?",
        answer: "Yes, if your cloud provider offers one. We deploy to the region you choose and document which services handle personal data.",
      },
      {
        question: "How do you handle United Arab Emirates data rules?",
        answer: "We work to UAE Federal Decree-Law No. 45 of 2021 on personal data, and to DIFC or ADGM rules where they apply. We sign the agreements you need. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why UAE operators build with an offshore team",
        body: "UAE enterprises modernise quickly, and local software headcount often lags demand. Real estate, logistics, tourism and fintech operators use us for custom platforms and integrations.",
      },
      {
        heading: "What we build",
        body: "Custom platforms, SaaS products, booking and property systems, dashboards and back-office tools. We handle Arabic and English interfaces and integrate payment gateways, CRM and ERP.",
      },
      {
        heading: "Data protection and contracts",
        body: "We plan around Decree-Law No. 45 of 2021 and the DIFC and ADGM regimes where they apply. NDA, MSA, data-processing terms and IP assignment are signed before work starts.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "A 1.5-hour gap means workshops fit almost any Gulf working hour. MVPs usually run $15,000 to $60,000, and AED invoices are available. Bigger platforms are phased. Write to contact@golaxindia.com with your product outline.",
      },
    ],
  },

  "software-development/australia": {
    h1: "Software and SaaS Development for Australia Businesses",
    lead: "We build SaaS products and internal software for Australian companies. Invoices are in AUD, contracts include an NDA and IP assignment, and we start early so you get a useful window in your day.",
    metaTitle: "Software and SaaS Development for Australia | Golax India",
    metaDescription: "SaaS and custom software for Australian companies from India. AUD invoicing, NDA, IP assignment and an early-start schedule.",
    faqs: [
      {
        question: "How much does an MVP cost?",
        answer: "Most SaaS MVPs fall between $15,000 and $60,000, depending on roles, integrations and how custom the interface is. We give a written estimate after discovery.",
      },
      {
        question: "Can our data stay in Australia?",
        answer: "Yes. We deploy to a Sydney or Melbourne region when data needs to stay onshore, and we document which services touch personal information.",
      },
      {
        question: "How do you handle Australia data rules?",
        answer: "We work to the Privacy Act 1988 and the Australian Privacy Principles, including APP 8 on overseas disclosure. We sign the agreements you need. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why Australian teams offshore product work",
        body: "Hiring senior SaaS engineers locally is slow, and the time zone limits who you can bring in. Mining services, fintech, healthcare, education and retail companies offshore product engineering to keep releases on schedule.",
      },
      {
        heading: "What we build",
        body: "SaaS MVPs, customer and partner portals, internal tools and integrations. Multi-tenant setups with role-based access, reporting dashboards, and connections to Stripe, Xero and CRM.",
      },
      {
        heading: "Privacy and contracts",
        body: "We plan around the Privacy Act 1988 and the Australian Privacy Principles, especially APP 8. NDA, MSA, data-processing terms and IP assignment are signed before work starts.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "We start early on our side so standups land in your late morning. MVPs usually run $15,000 to $60,000 and can be invoiced in AUD. Larger platforms are phased. Send an outline to contact@golaxindia.com.",
      },
    ],
  },

  "software-development/canada": {
    h1: "Software and SaaS Development for Canada Businesses",
    lead: "We build SaaS products and internal tools for Canadian companies. Invoices can be in CAD, contracts include an NDA and IP assignment, and Eastern time teams share a good part of our day.",
    metaTitle: "Software and SaaS Development for Canada | Golax India",
    metaDescription: "SaaS MVPs and custom software for Canadian companies from India. CAD invoicing, NDA, IP assignment and planned overlap across time zones.",
    faqs: [
      {
        question: "How much does an MVP cost?",
        answer: "Most SaaS MVPs fall between $15,000 and $60,000, depending on roles, integrations and how custom the interface is. We give a written estimate after discovery.",
      },
      {
        question: "Can our data stay in Canada?",
        answer: "Yes. We deploy to a Canadian cloud region when you need it, and we document which services handle personal information. That helps with Quebec's Law 25 assessments.",
      },
      {
        question: "How do you handle Canada data rules?",
        answer: "We work to PIPEDA, Quebec's Law 25 for Quebec residents, and provincial health privacy rules such as PHIPA in Ontario. We sign the agreements you need. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why Canadian founders add offshore build capacity",
        body: "Many Canadian founders keep product leadership at home and hire offshore for the build to stretch runway. AI, cleantech, gaming, energy and e-commerce companies use us for SaaS MVPs and internal tools.",
      },
      {
        heading: "What we build",
        body: "SaaS MVPs, client portals, internal workflow tools and reporting dashboards. We build multi-tenant apps with role-based access and connect Stripe, CRM and accounting tools.",
      },
      {
        heading: "Privacy and contracts",
        body: "We plan around PIPEDA, Quebec's Law 25 and provincial health privacy rules such as PHIPA. NDA, MSA, data-processing terms and IP assignment are signed before work starts.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "Toronto and Montreal overlap with us like US East does. Vancouver and Calgary get a shorter window that we plan around our early evening. MVPs usually run $15,000 to $60,000, with CAD invoices available. Email contact@golaxindia.com.",
      },
    ],
  },

  "software-development/singapore": {
    h1: "Software and SaaS Development for Singapore Businesses",
    lead: "We build SaaS products and internal software for Singapore companies. Singapore is 2.5 hours ahead of India, so we share almost the full working day, and invoices can be in SGD.",
    metaTitle: "Software and SaaS Development for Singapore | Golax India",
    metaDescription: "SaaS and custom software for Singapore companies. SGD invoicing, NDA, IP assignment and an almost fully shared working day.",
    faqs: [
      {
        question: "How much does an MVP cost?",
        answer: "Most SaaS MVPs fall between $15,000 and $60,000, depending on roles, integrations and how custom the interface is. We give a written estimate after discovery.",
      },
      {
        question: "Can you work within MAS-regulated controls?",
        answer: "We can work inside your access, logging and change-approval controls and provide the evidence your risk team asks for. Meeting MAS requirements remains your firm's responsibility.",
      },
      {
        question: "How do you handle Singapore data rules?",
        answer: "We work to the Personal Data Protection Act (PDPA). For regulated financial institutions we follow your MAS technology-risk controls where they apply. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why Singapore teams offshore software work",
        body: "Singapore engineering salaries push burn rates up. Regional fintech, logistics and trade platforms use us to build products on Singapore time, billed in SGD.",
      },
      {
        heading: "What we build",
        body: "SaaS products, trading and logistics tools, partner portals and reporting systems. We handle role-based access, audit logs and integrations with payments and accounting.",
      },
      {
        heading: "Privacy and contracts",
        body: "We plan around the PDPA, plus MAS technology-risk guidelines when you are a regulated institution. NDA, MSA, data-processing terms and IP assignment are signed before work starts.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "With a 2.5-hour gap, daily calls are easy to fit. MVPs usually run $15,000 to $60,000, and bigger platforms are phased. Email your product outline to contact@golaxindia.com.",
      },
    ],
  },

  "mobile-app-development/united-states": {
    h1: "Mobile App Development for United States Businesses",
    lead: "We build iOS and Android apps for US companies, using Flutter, React Native or native code depending on the product. Invoices are in USD and we overlap with US Eastern hours for a few hours each day.",
    metaTitle: "Mobile App Development for US Businesses | Golax India",
    metaDescription: "iOS and Android apps for US companies from India. Flutter, React Native or native, USD invoicing, NDA and IP assignment.",
    faqs: [
      {
        question: "Should I build native or cross-platform?",
        answer: "Cross-platform (Flutter or React Native) is usually faster and cheaper, and it suits most business apps. Native is better for heavy graphics, advanced device features or maximum performance. We recommend based on your product.",
      },
      {
        question: "How long does an app take?",
        answer: "An MVP typically takes 10 to 16 weeks including design, build, testing and store approval.",
      },
      {
        question: "How do you handle United States data rules?",
        answer: "We plan around state privacy laws such as CCPA/CPRA, HIPAA when health data is involved, and customer SOC 2 requirements. We sign the agreements you need. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why US companies offshore mobile work",
        body: "Mobile specialists are among the hardest roles to fill quickly in the US. SaaS, healthcare, fintech and consumer brands offshore iOS and Android work to ship store builds on schedule.",
      },
      {
        heading: "What we build",
        body: "Flutter or React Native apps with one codebase, and native Swift or Kotlin apps for performance-critical products. We also build the backend, APIs and admin panels, and handle payments, subscriptions, push notifications, maps and chat. Store submission support is included.",
      },
      {
        heading: "Privacy and contracts",
        body: "We plan around CCPA/CPRA, HIPAA for health data, and SOC 2 questions from enterprise customers. NDA, MSA, data-processing terms and IP assignment are signed before the first build.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "Our evenings overlap with US Eastern mornings, about three to five hours a day. Pacific gets a shorter planned window. A focused MVP app usually starts in the low five figures; complex apps with custom backends cost more. Send store targets and a device list to contact@golaxindia.com.",
      },
    ],
  },

  "mobile-app-development/united-kingdom": {
    h1: "Mobile App Development for United Kingdom Businesses",
    lead: "We build iOS and Android apps for UK companies, with Flutter, React Native or native code. Invoices are in GBP, contracts include an NDA and IP assignment, and we work UK office hours for a few hours a day.",
    metaTitle: "Mobile App Development for UK Businesses | Golax India",
    metaDescription: "iOS and Android apps for UK companies from a senior India-based team. GBP invoicing, NDA, IP assignment and UK-hours overlap.",
    faqs: [
      {
        question: "Should I build native or cross-platform?",
        answer: "Cross-platform (Flutter or React Native) is usually faster and cheaper, and it suits most business apps. Native is better for heavy graphics, advanced device features or maximum performance. We recommend based on your product.",
      },
      {
        question: "How long does an app take?",
        answer: "An MVP typically takes 10 to 16 weeks including design, build, testing and store approval.",
      },
      {
        question: "How do you handle United Kingdom data rules?",
        answer: "We work to UK GDPR and the Data Protection Act 2018. India does not have UK adequacy status, so personal-data transfers use the UK IDTA or Addendum, which we sign with you. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why UK teams offshore app builds",
        body: "UK agencies charge a premium for building on both app stores. Fintech, retail and healthcare product teams use us for Flutter, React Native or native builds, invoiced in GBP.",
      },
      {
        heading: "What we build",
        body: "Cross-platform and native apps, with the backend, APIs and admin tools they depend on. Typical features include payments, subscriptions, push notifications, maps and in-app chat. We prepare builds for the App Store and Google Play.",
      },
      {
        heading: "Data protection and contracts",
        body: "We plan around UK GDPR and the Data Protection Act 2018, with the UK IDTA or Addendum covering transfers to India. NDA, MSA, data-processing terms and IP assignment are signed before work starts.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "UK office hours fall in our afternoon and early evening, roughly three to four hours of overlap. A focused MVP app usually starts in the low five figures. We quote a fixed estimate after discovery, or you can hire dedicated mobile developers by the month. Write to contact@golaxindia.com.",
      },
    ],
  },

  "mobile-app-development/united-arab-emirates": {
    h1: "Mobile App Development for United Arab Emirates Businesses",
    lead: "We build iOS and Android apps for UAE companies, including bilingual Arabic and English apps. The UAE is only 1.5 hours behind India, so you can reach the team during almost the full Gulf working day.",
    metaTitle: "Mobile App Development for UAE Businesses | Golax India",
    metaDescription: "iOS and Android apps for UAE companies, including Arabic and English. AED invoicing, NDA, IP assignment and near-full hours overlap.",
    faqs: [
      {
        question: "Should I build native or cross-platform?",
        answer: "Cross-platform (Flutter or React Native) is usually faster and cheaper, and it suits most business apps. Native is better for heavy graphics, advanced device features or maximum performance. We recommend based on your product.",
      },
      {
        question: "Can you build Arabic right-to-left apps?",
        answer: "Yes. We handle RTL layouts, Arabic fonts and language switching, and test on real devices. Arabic copy should come from you or a native writer.",
      },
      {
        question: "How do you handle United Arab Emirates data rules?",
        answer: "We work to UAE Federal Decree-Law No. 45 of 2021 on personal data, and to DIFC or ADGM rules where they apply. We sign the agreements you need. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why UAE companies build apps with us",
        body: "UAE consumer apps often need a bilingual interface, and local mobile capacity can be scarce. Real estate, tourism and fintech companies run app sprints with us on Gulf hours.",
      },
      {
        heading: "What we build",
        body: "Flutter and React Native apps with Arabic RTL support, plus native iOS and Android when the product needs it. We build the backend and admin panel, integrate local payment gateways, and support store submission.",
      },
      {
        heading: "Data protection and contracts",
        body: "We plan around Decree-Law No. 45 of 2021 and the DIFC and ADGM regimes where they apply. NDA, MSA, data-processing terms and IP assignment are signed before work starts.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "Demos and reviews fit almost any Gulf working hour. A focused MVP app usually starts in the low five figures, and invoices can be in AED. We give a fixed estimate after discovery. Send your store targets to contact@golaxindia.com.",
      },
    ],
  },

  "mobile-app-development/australia": {
    h1: "Mobile App Development for Australia Businesses",
    lead: "We build iOS and Android apps for Australian companies. Invoices are in AUD, contracts include an NDA and IP assignment, and we start early so you get a real overlap with the Australian day.",
    metaTitle: "Mobile App Development for Australia | Golax India",
    metaDescription: "iOS and Android apps for Australian companies from India. AUD invoicing, NDA, IP assignment and an early-start schedule.",
    faqs: [
      {
        question: "Should I build native or cross-platform?",
        answer: "Cross-platform (Flutter or React Native) is usually faster and cheaper, and it suits most business apps. Native is better for heavy graphics, advanced device features or maximum performance. We recommend based on your product.",
      },
      {
        question: "Who handles App Store and Google Play submission?",
        answer: "We prepare the builds and store listings. You own the Apple Developer and Google Play accounts, and the app is published under your name.",
      },
      {
        question: "How do you handle Australia data rules?",
        answer: "We work to the Privacy Act 1988 and the Australian Privacy Principles, including APP 8 on overseas disclosure. We sign the agreements you need. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why Australian teams offshore app builds",
        body: "Finding senior iOS and Android developers in Australia takes time, and store review is strict. Fintech, resources and retail brands use us for regular TestFlight and Play test builds.",
      },
      {
        heading: "What we build",
        body: "Flutter or React Native apps, plus native iOS and Android where needed. We build the backend and admin tools, and add payments, push notifications, maps and subscriptions.",
      },
      {
        heading: "Privacy and contracts",
        body: "We plan around the Privacy Act 1988 and the Australian Privacy Principles, especially APP 8. NDA, MSA, data-processing terms and IP assignment are signed before work starts.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "We start early on our side so demos land in your late morning or afternoon. A focused MVP app usually starts in the low five figures, and complex apps cost more. We quote a fixed estimate after discovery. Email contact@golaxindia.com.",
      },
    ],
  },

  "digital-marketing/united-states": {
    h1: "Digital Marketing and SEO for United States Businesses",
    lead: "We handle technical SEO, content and paid campaigns for US companies, and we fix the site problems that hold results back. Invoices are in USD and we overlap with US Eastern hours for a few hours each day.",
    metaTitle: "Digital Marketing and SEO for US Businesses | Golax India",
    metaDescription: "Technical SEO, content and paid campaigns for US companies from India. USD invoicing, NDA and calls in US Eastern hours.",
    faqs: [
      {
        question: "How long does SEO take to work?",
        answer: "Expect early technical gains within one to three months. Meaningful ranking growth usually takes six to twelve months, depending on competition and your domain's history.",
      },
      {
        question: "Can you do local SEO for several US cities?",
        answer: "Yes. We set up location pages that say something real about each market, plus Google Business Profile and local citation work. We do not publish thin copy-paste city pages.",
      },
      {
        question: "How do you handle United States data rules?",
        answer: "We plan around state privacy laws such as CCPA/CPRA when we work with analytics and ad accounts, and HIPAA if health data is involved. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why US marketers outsource SEO work",
        body: "Retainers for technical SEO and landing-page work add up fast in the US. SaaS, healthcare, fintech and e-commerce marketers use us for fixes on sites we built or inherited.",
      },
      {
        heading: "What we do",
        body: "Technical SEO audits and fixes: crawlability, speed, schema, internal links and indexation. Keyword research and content plans, service and location page work, and blog content written for buyers. We also run Google Ads and Meta Ads for lead generation.",
      },
      {
        heading: "Access and contracts",
        body: "We sign an NDA and IP terms before we touch analytics, Search Console or ad accounts. We plan around CCPA/CPRA when handling user data, and HIPAA if health data is involved.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "Our evenings overlap with US Eastern mornings, about three to five hours a day. Monthly retainers scale with pages, articles and campaigns, and one-off audits are available. Ad spend goes from you straight to the platforms. Email your site URL and goals to contact@golaxindia.com.",
      },
    ],
  },

  "digital-marketing/united-kingdom": {
    h1: "Digital Marketing and SEO for United Kingdom Businesses",
    lead: "We handle technical SEO, content and paid campaigns for UK companies. Invoices are in GBP, and we work UK office hours for a few hours each day.",
    metaTitle: "Digital Marketing and SEO for UK Businesses | Golax India",
    metaDescription: "Technical SEO, content and paid campaigns for UK companies. GBP invoicing, NDA and calls in UK office hours.",
    faqs: [
      {
        question: "How long does SEO take to work?",
        answer: "Expect early technical gains within one to three months. Meaningful ranking growth usually takes six to twelve months, depending on competition and your domain's history.",
      },
      {
        question: "Can you guarantee first-page rankings?",
        answer: "No honest agency can. We commit to a clear plan, steady work and plain reporting.",
      },
      {
        question: "How do you handle United Kingdom data rules?",
        answer: "We work to UK GDPR and the Data Protection Act 2018 when we handle analytics and ad data. India does not have UK adequacy status, so transfers use the UK IDTA or Addendum, which we sign with you. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why UK teams outsource SEO implementation",
        body: "UK search is competitive and rewards quick technical fixes, but specialist contractors are not always free. Fintech, property and e-commerce teams outsource SEO implementation and content support to us.",
      },
      {
        heading: "What we do",
        body: "Technical SEO audits and fixes, keyword research, content plans, and service and location page optimisation. We write blog content for buyers and run Google Ads and Meta Ads for lead generation.",
      },
      {
        heading: "Access and contracts",
        body: "NDA and IP terms are agreed before we get into analytics or ad accounts. We plan around UK GDPR, with the UK IDTA or Addendum covering transfers to India.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "UK office hours fall in our afternoon and early evening, roughly three to four hours of overlap. Retainers scale with pages, articles and campaigns, and one-off audits are available. Ad spend is paid by you directly. Write to contact@golaxindia.com with your site URL.",
      },
    ],
  },

  "digital-marketing/united-arab-emirates": {
    h1: "Digital Marketing and SEO for United Arab Emirates Businesses",
    lead: "We handle technical SEO, content and paid campaigns for UAE companies, with experience in Arabic and English sites. The UAE is 1.5 hours behind India, so calls are easy to schedule.",
    metaTitle: "Digital Marketing and SEO for UAE Businesses | Golax India",
    metaDescription: "Technical SEO, content and paid campaigns for UAE companies, in Arabic and English. AED invoicing, NDA and near-full hours overlap.",
    faqs: [
      {
        question: "How long does SEO take to work?",
        answer: "Expect early technical gains within one to three months. Meaningful ranking growth usually takes six to twelve months, depending on competition and your domain's history.",
      },
      {
        question: "Can you do Arabic SEO?",
        answer: "We handle the structure, hreflang, keyword research and on-page work for Arabic pages. Arabic copy should be written or reviewed by a native speaker.",
      },
      {
        question: "How do you handle United Arab Emirates data rules?",
        answer: "We work to UAE Federal Decree-Law No. 45 of 2021 on personal data, and to DIFC or ADGM rules where they apply. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why UAE brands outsource SEO and campaign work",
        body: "UAE campaigns often need Arabic and English landing pages quickly. Real estate, tourism and e-commerce brands use us for on-page SEO and analytics setup.",
      },
      {
        heading: "What we do",
        body: "Technical SEO audits and fixes, bilingual keyword research, landing-page optimisation and content planning. We also run Google Ads and Meta Ads for lead generation.",
      },
      {
        heading: "Access and contracts",
        body: "NDA and IP terms are agreed before we get into analytics or ad accounts. We plan around Decree-Law No. 45 of 2021, and DIFC or ADGM rules where relevant.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "With a 1.5-hour gap, calls fit almost any Gulf working hour. Retainers scale with pages, articles and campaigns, and AED invoices are available. Ad spend is paid by you directly to the platforms. Write to contact@golaxindia.com with your site URL and goals.",
      },
    ],
  },

  "it-consulting/united-states": {
    h1: "IT Consulting and Cloud for United States Businesses",
    lead: "We review architectures, plan cloud migrations and run DevOps for US companies. Assessments are fixed-fee, invoices are in USD, and we overlap with US Eastern hours for a few hours each day.",
    metaTitle: "IT Consulting and Cloud for US Businesses | Golax India",
    metaDescription: "Architecture reviews, AWS and Azure migrations and DevOps for US companies. USD invoicing, NDA and US Eastern overlap.",
    faqs: [
      {
        question: "Can you migrate us from on-premise to the cloud?",
        answer: "Yes. We plan in waves, test each stage and keep rollback options.",
      },
      {
        question: "Can you help us pass a customer security review?",
        answer: "We can help prepare policies, access controls and evidence. Formal audits such as SOC 2 are done by independent auditors.",
      },
      {
        question: "How do you handle United States data rules?",
        answer: "We plan around state privacy laws such as CCPA/CPRA, HIPAA when health data is involved, and customer SOC 2 requirements. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why US teams bring in outside cloud help",
        body: "Cloud assessments and fixes compete with the product roadmap for the same senior engineers. SaaS, healthcare and fintech operators use us for architecture reviews and implementation sprints.",
      },
      {
        heading: "What we do",
        body: "Architecture review and technical due diligence. AWS and Azure migration planning and execution. CI/CD, infrastructure as code, containers and Kubernetes. Cloud cost clean-up, monitoring, backups and disaster recovery.",
      },
      {
        heading: "Access and contracts",
        body: "We plan around CCPA/CPRA, HIPAA for health data, and customer SOC 2 requirements. NDA, MSA, data-processing terms and IP assignment are in place before we change anything in production.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "Our evenings overlap with US Eastern mornings, about three to five hours a day. Assessments are fixed-fee. Implementation is time-and-material or fixed by milestone, and managed DevOps is a monthly retainer. Send your environment diagram to contact@golaxindia.com.",
      },
    ],
  },

  "it-consulting/united-kingdom": {
    h1: "IT Consulting and Cloud for United Kingdom Businesses",
    lead: "We review architectures, plan Azure and AWS migrations and run DevOps for UK companies. Assessments are fixed-fee, invoices are in GBP, and we work UK office hours for a few hours each day.",
    metaTitle: "IT Consulting and Cloud for UK Businesses | Golax India",
    metaDescription: "Architecture reviews, cloud migrations and DevOps for UK companies. GBP invoicing, NDA and UK-hours overlap.",
    faqs: [
      {
        question: "Can you migrate us from on-premise to the cloud?",
        answer: "Yes. We plan in waves, test each stage and keep rollback options.",
      },
      {
        question: "Can we keep data in a UK region?",
        answer: "Yes. We build in the cloud region you choose, such as London, and document where personal data is stored and processed.",
      },
      {
        question: "How do you handle United Kingdom data rules?",
        answer: "We work to UK GDPR and the Data Protection Act 2018. India does not have UK adequacy status, so transfers use the UK IDTA or Addendum, which we sign with you. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why UK teams hire cloud help without adding headcount",
        body: "UK teams modernising Azure or AWS stacks often need senior help for a few months, not a permanent hire. Fintech, property and professional services firms engage us for assessments and phased migrations.",
      },
      {
        heading: "What we do",
        body: "Architecture review and technical due diligence, Azure and AWS migrations, CI/CD and infrastructure as code, cost optimisation, security hardening, backups and disaster recovery.",
      },
      {
        heading: "Access and contracts",
        body: "We plan around UK GDPR and the Data Protection Act 2018, with the UK IDTA or Addendum covering transfers to India. NDA, MSA and IP assignment are in place before we change anything in production.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "UK office hours fall in our afternoon and early evening, roughly three to four hours of overlap. Assessments are fixed-fee, with GBP quotes available. Implementation is time-and-material or milestone-based. Write to contact@golaxindia.com with your environment diagram.",
      },
    ],
  },

  "it-consulting/singapore": {
    h1: "IT Consulting and Cloud for Singapore Businesses",
    lead: "We review architectures, plan cloud migrations and run DevOps for Singapore companies. Singapore is 2.5 hours ahead of India, so we share almost the full working day, and invoices can be in SGD.",
    metaTitle: "IT Consulting and Cloud for Singapore | Golax India",
    metaDescription: "Architecture reviews, cloud migrations and DevOps for Singapore companies. SGD invoicing, NDA and a near-full shared working day.",
    faqs: [
      {
        question: "Can you migrate us from on-premise to the cloud?",
        answer: "Yes. We plan in waves, test each stage and keep rollback options.",
      },
      {
        question: "Can you document changes for our auditors?",
        answer: "Yes. We keep change logs, approvals and runbooks that your risk and audit teams can review. Formal audits are done by independent auditors.",
      },
      {
        question: "How do you handle Singapore data rules?",
        answer: "We work to the Personal Data Protection Act (PDPA). For regulated financial institutions we follow your MAS technology-risk controls where they apply. Your legal adviser confirms what applies to your business.",
      },
    ],
    sections: [
      {
        heading: "Why Singapore teams use us for cloud work",
        body: "Regulated Singapore buyers expect cloud changes to be documented. Fintech, logistics and SaaS companies use us for consulting and DevOps retainers that run on Singapore time.",
      },
      {
        heading: "What we do",
        body: "Architecture review and technical due diligence, AWS and Azure migrations, CI/CD, infrastructure as code, cost optimisation, security hardening, backups and disaster recovery.",
      },
      {
        heading: "Access and contracts",
        body: "We plan around the PDPA, plus MAS technology-risk guidelines for regulated institutions. NDA, MSA and IP assignment are in place before we change anything in production.",
      },
      {
        heading: "Hours, billing and pricing",
        body: "With a 2.5-hour gap, workshops are easy to schedule. Assessments are fixed-fee and can be quoted in SGD. Implementation is time-and-material or milestone-based, and managed DevOps is a monthly retainer. Send your environment diagram to contact@golaxindia.com.",
      },
    ],
  },
};
