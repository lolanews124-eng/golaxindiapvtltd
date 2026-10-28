// International / offshore locations served by Golax India.
// Tuned for high-intent keywords like:
//   - "offshore web development company in <country>"
//   - "hire developers from India for <country> businesses"
//   - "outsource software development to India from <country>"
//   - "<service> agency for <country> startups / SMEs / enterprises"

import { services as serviceCatalog, ServiceData } from "./serviceLocations";
import { getServiceCountryContent } from "./serviceCountryContent";

export interface InternationalLocationData {
  country: string;
  slug: string;
  countryCode: string; // ISO 3166-1 alpha-2
  region: string; // e.g. "North America", "Europe", "Middle East", "APAC"
  flag: string; // emoji
  currency: string; // e.g. "USD"
  currencySymbol: string;
  timezoneOverlap: string; // hours of working overlap with India
  majorCities: string[];
  description: string; // meta description
  heroTagline: string;
  about: string;
  whyChooseUs: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
  seoContent: {
    introduction: string;
    whyOffshore: string;
    ourExpertise: string;
    webDevelopmentDetails: string;
    softwareDevelopmentDetails: string;
    mobileAppDetails: string;
    digitalMarketingDetails: string;
    itConsultingDetails: string;
    pricingAdvantage: string;
    workingModel: string;
    technologyStack: string;
    processOverview: string;
    commitment: string;
  };
}


export const internationalLocations: InternationalLocationData[] = [
  {
    country: "United States",
    slug: "united-states",
    countryCode: "US",
    region: "North America",
    flag: "🇺🇸",
    currency: "USD",
    currencySymbol: "$",
    timezoneOverlap: "4-5 hours",
    majorCities: ["New York","San Francisco","Los Angeles","Chicago","Austin","Seattle","Boston","Miami"],
    description:
      "Senior Indian engineers for US product teams. SaaS, fintech and healthcare builds, invoiced in USD, with NDA and IP assignment signed before code starts.",
    heroTagline: "Offshore Software Development for United States Businesses",
    about:
      "We're a small engineering company in Patna, India. US teams bring us in when the roadmap is bigger than the team and hiring in-house would eat a whole quarter. Most of our US work is SaaS, fintech and healthcare software. We invoice in USD and sign your NDA and IP assignment before anyone touches code.",
    whyChooseUs: [
      "Part of the team works a late shift, so you get about four to five live hours with US East each day",
      "Used to working inside SOC 2 style controls: reviewed merges, named access, an offboarding checklist",
      "BAA available for HIPAA projects, and we'll tell you early if a project needs more than a services vendor can give",
      "Comfortable with the usual US integration list: Stripe, Plaid, Twilio, Salesforce, QuickBooks",
      "Invoices and quotes in USD, so nobody on your side deals with currency conversion",
    ],
    industries: ["SaaS","Healthcare","Fintech","E-commerce","B2B services"],
    faqs: [
      {
        question: "What does this cost compared with hiring in the US?",
        answer:
          "A senior US engineer often runs $80 to $180 an hour once salary, benefits and overhead are counted. Our senior engineers are about $25 to $45 an hour on dedicated or time-and-material work. Fixed-price projects are quoted after a scoping call. The rate gap is real, but the bigger saving is usually speed. You can start in a couple of weeks instead of waiting out a hiring cycle.",
      },
      {
        question: "Can you work inside our HIPAA or SOC 2 requirements?",
        answer:
          "We can work inside them. For PHI projects that means a BAA, access limited to named engineers, MFA, code review before merge and logs your auditor can ask for. We don't use this page to claim certifications. If a customer contract needs a specific control, send it over and we'll tell you straight whether we can meet it.",
      },
      {
        question: "How do you handle California rules like CCPA and CPRA?",
        answer:
          "Mostly through the contract and the way we build. We sign a data processing agreement that limits us to your instructions, keep production data off personal laptops where we can, and build deletion and export flows into the product when your users need them. Your counsel decides what applies to your business. We implement it.",
      },
      {
        question: "What hours will the team actually be online?",
        answer:
          "A core group works roughly 2 pm to 11 pm India time. That covers your morning through lunch on the East Coast. The West Coast gets a shorter window early in your day, usually an hour or two, and the rest runs on written end-of-day updates and a weekly recorded demo.",
      },
      {
        question: "How fast can we start?",
        answer:
          "We reply within one business day. If the scope is clear, a contract can be signed in a few days and the team usually starts one to two weeks after that.",
      },
    ],
    seoContent: {
      introduction: "A Patna-based engineering team for US product companies that need senior capacity without a long hiring process.",
      whyOffshore: "Most US teams we talk to aren't short of ideas. They're short of senior people who can ship them. A good engineer in San Francisco, New York or Austin can cost $80 to $180 an hour fully loaded, and the search can run for months. An India-based team lets you add capacity in a couple of weeks and scale back without a layoff conversation. It isn't free of trade-offs. Time zones take planning and you'll write more things down. But for SaaS, fintech and healthcare products with a steady roadmap, it works well.",
      ourExpertise: "US clients mostly bring us three kinds of work. SaaS products that need billing, roles and an admin panel. Fintech and payments tools that sit on top of Stripe, Plaid or a bank API. And healthcare portals where privacy is the first requirement, not an afterthought.\n\nWe also take on rebuilds, mobile apps in Flutter or React Native, and the unglamorous integration work around Salesforce, HubSpot or QuickBooks. Some teams hire us for one project. Others keep two or three engineers with us for years.",
      webDevelopmentDetails: "For US clients, web work is usually a customer portal, a marketing site that has to convert, or a rebuild that keeps existing URLs with proper 301 redirects. Hosting and DNS stay in your accounts.",
      softwareDevelopmentDetails: "Typical US briefs: a multi-tenant SaaS MVP, an internal tool that replaces a spreadsheet, or an integration layer between Stripe, your CRM and your accounting system. We start with the one workflow users can't live without.",
      mobileAppDetails: "iOS and Android apps, usually in Flutter or React Native, with native Swift or Kotlin when the product needs it. You get TestFlight and Play internal builds every week so your own team can try the app.",
      digitalMarketingDetails: "We handle technical SEO on the sites we build and set up analytics in your accounts. We don't promise rankings. Content, competition and links decide that.",
      itConsultingDetails: "Before work starts we sign an NDA, an IP assignment and, where personal data is involved, a data processing agreement. For health data we'll sign a BAA.\n\nOn privacy, California's CCPA and CPRA is what most clients ask about first, along with state laws in places like Virginia and Colorado. We build to what your counsel tells us applies: consent handling, deletion and export, retention limits. If your customers ask for SOC 2, we work inside your controls: named access, MFA, reviewed merges, and a clean offboarding when someone leaves the project.\n\nWe don't claim certifications we haven't been audited for. If a contract needs one, ask before you sign anything.",
      pricingAdvantage: "Everything is quoted in USD. Senior engineers on dedicated or time-and-material terms run about $25 to $45 an hour. A marketing site usually starts around $3,500. A SaaS MVP with auth, billing and an admin panel more often lands between $15,000 and $60,000, depending on integrations and how much design is needed.\n\nFixed price works when the scope is clear. Time and material suits a product that will keep changing. If you just need extra hands, a dedicated engineer is billed monthly. You get a number in writing before you commit.",
      workingModel: "India is 9.5 to 10.5 hours ahead of New York depending on daylight saving, so the schedule has to be built, not assumed.\n\nA core group works roughly 2 pm to 11 pm India time. That gives you about four to five hours live with East Coast mornings. Pacific time gets a shorter window, usually an hour or two, so we lean on written end-of-day updates and a recorded demo each week.\n\nStand-up happens at a time you pick. Work is tracked in the Jira, Linear or GitHub Projects you already use.",
      technologyStack: "TypeScript, React, Next.js, Node, Python and PostgreSQL on AWS or Azure cover most US SaaS work. Flutter or React Native for mobile. You own the repository, the cloud accounts and the keys.",
      processOverview: "It starts with a call. Tell us what you're building, who uses it, what already exists and what the budget looks like. We'll ask a lot of questions, and a few might be uncomfortable.\n\nA few days later you get a written proposal with scope, assumptions and a price in USD. If it makes sense, we sign the contract and NDA. Kickoff is usually one to two weeks after that, and you'll see a first working build on a staging link within the first sprint or two.",
      commitment: "We reply to every enquiry within one business day. Send a short brief to contact@golaxindia.com or book a call. If the project is sensitive, say so and we'll sign a mutual NDA before you share detail. And if we're not the right fit, we'll say that too.",
    },
  },
  {
    country: "United Kingdom",
    slug: "united-kingdom",
    countryCode: "GB",
    region: "Europe",
    flag: "🇬🇧",
    currency: "GBP",
    currencySymbol: "£",
    timezoneOverlap: "5-6 hours",
    majorCities: ["London","Manchester","Birmingham","Edinburgh"],
    description:
      "Offshore web and software development for UK companies. Senior Indian engineers, GBP invoicing, UK GDPR-aware contracts with IDTA support.",
    heroTagline: "Offshore Software Development for United Kingdom Businesses",
    about:
      "Golax India is a Patna-based engineering team that works with UK fintech, property and professional-services companies. Your working day sits in our afternoon and evening, so you get real hours together without anyone on a night shift. Contracts are written with UK GDPR in mind, and we can invoice in GBP.",
    whyChooseUs: [
      "IDTA or the UK Addendum signed with you whenever personal data crosses to India",
      "UK office hours fall in our afternoon, so four to six hours of live overlap is normal",
      "Audit trails and role-based access built in, because fintech and property clients get asked about them",
      "Property workflows we can build: listings, lettings, viewings and document signing",
      "Public-facing UK sites built to WCAG 2.2 AA from the start, not patched on at the end",
      "Quotes and invoices in pounds",
    ],
    industries: ["Fintech","E-commerce","Healthcare","Property","Professional services"],
    faqs: [
      {
        question: "How much cheaper is it than hiring in the UK?",
        answer:
          "UK agencies commonly quote £70 to £140 an hour for senior developers. Our senior engineers are about $25 to $45 an hour, and we can invoice in GBP if you'd rather not deal with USD. Exact savings depend on the skills you need and how long the work runs.",
      },
      {
        question: "India doesn't have UK adequacy status. Can we still send personal data?",
        answer:
          "Yes, with a lawful transfer mechanism. In practice that's the UK International Data Transfer Agreement (IDTA), or the UK Addendum to the EU standard contractual clauses. We sign whichever your solicitor prefers, along with a data processing agreement. Your adviser should also confirm whether a transfer risk assessment is needed in your case.",
      },
      {
        question: "Will the team work UK hours?",
        answer:
          "Mostly, yes. 9 am in London is 2:30 pm in India in winter and 1:30 pm during British Summer Time. We set a daily live window of four to six hours inside your working day, and handle the rest with written handoffs.",
      },
      {
        question: "We're in a regulated sector. Is that a problem?",
        answer:
          "We build software for regulated firms, but we don't give regulatory advice and we aren't an FCA-authorised business. What we can do is build audit logs, permissions and data handling so your compliance team can sign off, and follow your information security policy while we work.",
      },
    ],
    seoContent: {
      introduction: "An India-based engineering team that shares your working afternoon, for UK fintech, property and professional-services companies.",
      whyOffshore: "UK engineering rates keep climbing, especially in London. Agencies often charge £70 to £140 an hour for senior developers, and good contractors are booked months ahead. An India-based team is a different option. Your working day sits in our afternoon, so you get real hours together without anyone on a night shift. It suits fintech, property and professional-services firms with a backlog that doesn't fit the current team.",
      ourExpertise: "UK work tends to fall into three buckets. Client portals and internal tools for professional-services firms, with proper roles and audit trails. Fintech products that connect to payment providers and open banking APIs. And property platforms, where listings, enquiries, documents and viewings all need to talk to each other.\n\nWe also rebuild ageing WordPress and .NET sites, build apps in Flutter, and take over projects another supplier left half finished. If your product serves EU customers too, we can set up English and a second language from the start.",
      webDevelopmentDetails: "Corporate sites and client portals with clean URLs, accessibility built in and good Core Web Vitals on UK mobile networks. Rebuilds keep existing URLs with 301s so you don't lose search traffic.",
      softwareDevelopmentDetails: "Workflow software for professional firms and fintech teams: case or client management, document handling, approvals, reporting. Audit logs and role-based access are part of the first version.",
      mobileAppDetails: "iOS and Android apps for customers and field staff. Flutter or React Native when one codebase is enough, native when the product needs it. Weekly builds you can install and test.",
      digitalMarketingDetails: "Technical SEO and landing pages for UK search, with consent-aware analytics set up in your accounts. No promises about rankings.",
      itConsultingDetails: "UK GDPR and the Data Protection Act 2018 apply to the personal data of people in the UK, wherever the developer sits. India doesn't have UK adequacy status, so a transfer needs its own mechanism. Usually that's the UK International Data Transfer Agreement (IDTA), or the UK Addendum to the EU SCCs. We sign whichever your solicitor prefers, plus a data processing agreement.\n\nBefore work starts we also sign an NDA and IP assignment. Access is limited to named engineers, and production data stays in the region you choose. For anything involving special category data, a short call with your DPO first is a good idea.",
      pricingAdvantage: "Quotes are written in GBP, or USD if you prefer. Senior engineers on dedicated or time-and-material terms are about $25 to $45 an hour. A brochure site typically starts around $3,500, and a portal or SaaS MVP is more often $15,000 to $60,000. We scope it before putting a figure on it.\n\nVAT depends on your set-up, so check with your accountant. Notice periods for dedicated engineers are set in the contract, so there's no surprise on either side.",
      workingModel: "9 am in London is 2:30 pm in India during winter and 1:30 pm during British Summer Time. Your working day maps neatly onto our afternoon and evening.\n\nWe usually agree a daily stand-up in your late morning, then work through to your close of business. Expect four to six hours of live overlap, with written handoffs covering the rest. There's a weekly demo, a shared board in Jira or Linear, and a named project lead you can message directly.",
      technologyStack: "React, Next.js, Node, .NET and PostgreSQL are the usual picks for UK work, on Azure or AWS depending on what your IT team already uses. You own the repository and the cloud accounts.",
      processOverview: "First a call, ideally within a week of you writing in. We ask about users, systems already in place, deadlines and any compliance constraints on your side.\n\nThen a written proposal in GBP. If you're happy, we sign the NDA, contract and data agreement. The team normally starts one to two weeks later, and the first sprint ends with something you can click through on a staging link.",
      commitment: "Drop us a line at contact@golaxindia.com with a few lines on what you need. We reply within one business day. If you'd like an NDA signed first, say so and we'll send a mutual one.",
    },
  },
  {
    country: "Canada",
    slug: "canada",
    countryCode: "CA",
    region: "North America",
    flag: "🇨🇦",
    currency: "CAD",
    currencySymbol: "C$",
    timezoneOverlap: "4-5 hours",
    majorCities: ["Toronto","Vancouver","Montreal","Calgary"],
    description:
      "Offshore development for Canadian companies. Senior Indian engineers, CAD or USD invoicing, PIPEDA and Quebec Law 25 awareness, English and French interfaces.",
    heroTagline: "Offshore Software Development for Canada Businesses",
    about:
      "Canada isn't one time zone, and we plan for that. Toronto and Montreal teams get solid evening overlap with our day. Vancouver and Calgary need a bit more planning. We build web, SaaS and mobile products for Canadian companies, with PIPEDA, Quebec's Law 25 and provincial health privacy rules in mind.",
    whyChooseUs: [
      "Toronto and Montreal get four to five live hours. Vancouver and Calgary get a shorter, scheduled window",
      "PIPEDA accountability, Quebec Law 25 and Ontario's PHIPA considered at design stage, not at launch",
      "English and French interfaces built with proper i18n, with translations reviewed by your people or a translator we coordinate",
      "Canadian cloud regions available (for example AWS ca-central-1 or Azure Canada Central) when data should stay in the country",
      "CAD or USD invoicing, with milestone-based quotes written before you commit",
    ],
    industries: ["Fintech","AI","Clean technology","Gaming","Energy","E-commerce"],
    faqs: [
      {
        question: "How much does it cost compared with hiring in Canada?",
        answer:
          "Canadian agencies commonly quote CAD 90 to 160 an hour for senior developers. Our senior engineers are about $25 to $45 an hour, billed in CAD or USD. Fixed-price projects are quoted after a scoping call, so you see the number before you commit.",
      },
      {
        question: "Does our data have to stay in Canada?",
        answer:
          "PIPEDA doesn't ban sending data abroad, but you stay accountable for it and need to be open about it. Quebec's Law 25 adds an assessment before personal information leaves the province. Some public-sector and health clients have stricter rules again. If your data should stay in Canada, we can build and host in a Canadian cloud region and limit what engineers can access from India.",
      },
      {
        question: "What about Vancouver, where the time difference is bigger?",
        answer:
          "Vancouver is 12.5 to 13.5 hours behind India, so overlap is shorter than in Toronto. Usually it's an hour or two at the start of your day, while our late-shift engineers are still online. We plan around it with a fixed daily check-in, written handoffs and a weekly demo.",
      },
      {
        question: "Can you build products in English and French?",
        answer:
          "We can build a bilingual product: proper i18n, French-ready layouts and a content structure that doesn't break when copy changes. We don't offer in-house French copywriting. Translations come from your team or a translator we coordinate, and Quebec's language rules are worth checking with your lawyer.",
      },
    ],
    seoContent: {
      introduction: "Offshore engineering for Canadian companies, with different plans for Eastern and Pacific time.",
      whyOffshore: "Canadian tech hiring is tight outside a handful of cities, and senior developers commonly cost CAD 90 to 160 an hour through agencies. Plenty of teams in Toronto, Waterloo, Vancouver and Calgary have good product ideas and not enough engineers. We usually come in to add capacity: a few developers for a defined product, then scaled up or down as the roadmap changes.",
      ourExpertise: "Canadian clients lean towards fintech, AI tools, clean-tech and e-commerce. A typical project might be a lending or payments platform, a data-heavy dashboard, or an online store that has outgrown its templates and needs a custom backend.\n\nWe also build mobile apps in Flutter and React Native. Canadian products often need English and French from day one, so we plan for it early. Adding it later usually costs more.",
      webDevelopmentDetails: "Marketing sites, customer portals and e-commerce builds that work in English and French when needed. Accessible by default, because AODA and Canadian public-sector buyers ask about it.",
      softwareDevelopmentDetails: "Custom platforms and dashboards, often with heavy reporting and role-based access. Data residency questions come up early, so we settle hosting region at the start.",
      mobileAppDetails: "iOS and Android apps built in Flutter or React Native, or native when needed. Weekly test builds, and release support for both stores.",
      digitalMarketingDetails: "Technical SEO and landing pages for Canadian search, including separate English and French pages where they make sense. Analytics stays in your accounts.",
      itConsultingDetails: "PIPEDA is the federal baseline for private-sector personal data. It makes you accountable for information a processor handles for you, so the contract has to say what we can do with it, where it's stored and who can see it. Quebec's Law 25 adds stricter rules, including privacy impact assessments before personal information is transferred outside Quebec. Health projects in Ontario fall under PHIPA.\n\nWe sign an NDA, an IP assignment and a data processing agreement before work starts. Canadian cloud regions are available if your policy needs them. Your lawyer decides what applies. We make the build match.",
      pricingAdvantage: "Quotes are in CAD or USD, your choice. Senior engineers on monthly or hourly terms run about $25 to $45 an hour. A marketing site starts around $3,500, and a product MVP usually falls between $15,000 and $60,000 depending on scope.\n\nWe write the number down before you commit, and break it into milestones so you can see where the money goes.",
      workingModel: "Toronto and Montreal share Eastern time. Nine in the morning there is 6:30 pm in India in summer and 7:30 pm in winter. Part of our team works a late shift for that, giving you four to five hours live.\n\nVancouver and Calgary are harder. By the time you're at your desk, our day is nearly over. For those teams we agree a shorter daily check-in, a clear end-of-day update and a weekly demo. It works, but it works better when specs are written down properly.",
      technologyStack: "TypeScript, React, Node, Python and PostgreSQL are common for Canadian products, hosted on AWS or Azure in a Canadian region when needed. Flutter or React Native for mobile.",
      processOverview: "Send a short brief. We'll book a call, usually within a few days, and ask about users, deadlines, existing systems and whether any data has to stay in Canada.\n\nThen comes a written proposal in CAD or USD. After contract and NDA, the team starts in one to two weeks. On a Vancouver or Calgary project we set the check-in schedule in that first week so nobody is guessing.",
      commitment: "Email contact@golaxindia.com with a few lines about the project and your city. We reply within one business day. If you need French support or Canadian hosting, mention it and we'll address it in the first reply.",
    },
  },
  {
    country: "Australia",
    slug: "australia",
    countryCode: "AU",
    region: "APAC",
    flag: "🇦🇺",
    currency: "AUD",
    currencySymbol: "A$",
    timezoneOverlap: "3-5 hours",
    majorCities: ["Sydney","Melbourne","Brisbane","Perth"],
    description:
      "Offshore software development for Australian businesses. Senior Indian engineers, AUD invoicing, Privacy Act and APP 8 aware, afternoon-friendly hours.",
    heroTagline: "Offshore Software Development for Australia Businesses",
    about:
      "Australian afternoons line up with the start of our day. Sydney and Melbourne teams talk to us after lunch, and Perth gets even more overlap. We build web, SaaS and mobile products for Australian businesses, and keep the Privacy Act and APP 8 in mind from the first contract.",
    whyChooseUs: [
      "Your afternoon is our morning: three to five live hours for Sydney and Melbourne, more for Perth",
      "Contracts written around the Privacy Act and APP 8, so you can show reasonable steps on overseas disclosure",
      "Breach notification terms agreed up front, with the Notifiable Data Breaches scheme in mind",
      "Offline-friendly mobile apps for sites where signal drops: mines, farms, building sites",
      "AUD or USD invoicing, with Xero, MYOB and Stripe integrations in scope when you need them",
    ],
    industries: ["Fintech","Mining & resources","Healthcare","Education","Retail"],
    faqs: [
      {
        question: "How much cheaper is it than hiring in Sydney or Melbourne?",
        answer:
          "Agency rates for senior developers in Australia often start around AUD 100 an hour and go well above that. Our senior engineers are about $25 to $45 an hour, billed in AUD or USD. On top of that, you skip recruitment fees, payroll and super. Exact savings depend on the skills and how long the work runs.",
      },
      {
        question: "Does sending data to India breach the Privacy Act?",
        answer:
          "No, but you can't just hand it over. Under APP 8, before disclosing personal information overseas you're expected to take reasonable steps to make sure the recipient handles it in line with the Australian Privacy Principles, and in many cases you stay accountable for what they do. We sign a data processing agreement, restrict access and agree breach reporting in the contract. Your lawyer should confirm how APP 8 applies to you.",
      },
      {
        question: "Is the time difference a problem?",
        answer:
          "Less than most people expect. Sydney is 4.5 to 5.5 hours ahead of India depending on daylight saving. We start early, around 7:30 or 8 am India time, which is early afternoon in Sydney. You get roughly three to five live hours before your day ends. Perth is only 2.5 hours ahead of India, so overlap there is longer.",
      },
      {
        question: "Can you work with our existing developers and tools?",
        answer:
          "Yes. Most Australian clients already have a few developers or another vendor. We join your Jira or GitHub, follow your branching and review rules, and use whatever chat tool you already have.",
      },
    ],
    seoContent: {
      introduction: "An India-based team that starts early so your Australian afternoon is its morning.",
      whyOffshore: "Australian developer rates are among the highest outside the US, and skills shortages have made hiring slow for years. Agencies in Sydney and Melbourne often start around AUD 100 an hour for senior people, and go well above that. Working with an India-based team costs less, and the time difference is kinder than most people expect. Our morning is your afternoon, so you're not waiting a whole day for answers.",
      ourExpertise: "Australian clients usually come from fintech, mining and resources, healthcare, education and retail. What they ask for tends to be practical: a customer portal, a field reporting app that copes with patchy signal, a retail inventory or booking system, a student or patient platform.\n\nWe also build in Flutter and React Native, rebuild old PHP and .NET systems, and handle integrations with Xero, MYOB, Stripe and local payment providers.",
      webDevelopmentDetails: "Business sites, portals and e-commerce builds for Australian buyers, with accessibility and mobile speed taken seriously. Hosting can sit in an Australian region.",
      softwareDevelopmentDetails: "Field and operations software, booking and inventory systems, and customer portals. We start with the workflow your staff repeat every day and build from there.",
      mobileAppDetails: "iOS and Android apps, often with offline sync for remote sites. Flutter or React Native for most, native when device features demand it.",
      digitalMarketingDetails: "Technical SEO and landing pages for Australian search, with analytics in your accounts. No ranking promises.",
      itConsultingDetails: "The Privacy Act 1988 and the Australian Privacy Principles apply to personal information we handle for you. APP 8 matters most for offshore work: before disclosing personal information overseas, you're expected to take reasonable steps to make sure the recipient doesn't breach the APPs. In practice that means a written agreement, limited access and clear rules about where data lives.\n\nWe also write breach notification into the contract, so you can meet the Notifiable Data Breaches scheme timelines. NDA and IP assignment come before work starts. If you're in healthcare or government, tell us early. There may be extra hosting or clearance rules to follow.",
      pricingAdvantage: "Quotes are in AUD or USD. Dedicated engineers cost around $25 to $45 an hour. A business website can start near $3,500, and a custom portal or app MVP usually sits between $15,000 and $60,000.\n\nBecause we're offshore, there's no recruitment fee, no payroll and no super on your side. Every quote is itemised, so you can see where the money goes.",
      workingModel: "Sydney and Melbourne run 4.5 to 5.5 hours ahead of India, depending on daylight saving. Perth is 2.5 hours ahead.\n\nOur team starts early, around 7:30 or 8 am India time. That's early afternoon in Sydney, with live overlap until your day ends: roughly three to five hours. Perth gets longer. At the end of our day we post a written update, so it's waiting for you when your morning begins.",
      technologyStack: "React, Next.js, Node, .NET and PostgreSQL are common for Australian projects, on AWS or Azure with an Australian region where needed. Flutter or React Native for mobile.",
      processOverview: "Tell us what you need and we'll set up a call, usually at a time that suits your afternoon. We'll ask about users, existing systems and any data that can't leave Australia.\n\nA written proposal in AUD follows. Once the contract and NDA are signed, the team starts one to two weeks later. The first milestone is a working build on a staging link you can try for yourself.",
      commitment: "Email contact@golaxindia.com and tell us your city so we can plan the overlap. We reply within one business day. If you need an NDA before sharing detail, we'll send a mutual one.",
    },
  },
  {
    country: "United Arab Emirates",
    slug: "united-arab-emirates",
    countryCode: "AE",
    region: "Middle East",
    flag: "🇦🇪",
    currency: "AED",
    currencySymbol: "AED",
    timezoneOverlap: "8+ hours",
    majorCities: ["Dubai","Abu Dhabi","Sharjah"],
    description:
      "Offshore software and web development for UAE businesses. Senior Indian engineers, AED or USD invoicing, Arabic and English support, Gulf-friendly hours.",
    heroTagline: "Offshore Software Development for United Arab Emirates Businesses",
    about:
      "Dubai is only 1.5 hours behind India, so there's almost no time-zone friction. We build web platforms, mobile apps and business systems for UAE companies, from mainland firms to free-zone start-ups. Arabic and English interfaces are part of the build when the product needs them.",
    whyChooseUs: [
      "Only 1.5 hours between Dubai and India, so you share nearly a full working day",
      "Contracts that work for mainland companies and free-zone entities such as DMCC, DIFC and ADGM",
      "Arabic and English interfaces with proper right-to-left layouts, not mirrored at the last minute",
      "UAE PDPL (Federal Decree-Law 45 of 2021) and DIFC or ADGM data rules considered at contract stage",
      "Listings, bookings and WhatsApp-connected customer flows for real estate, tourism and logistics teams",
      "AED or USD quotes, with payment terms agreed before kickoff",
    ],
    industries: ["Real estate","E-commerce","Logistics","Tourism","Government services","Fintech"],
    faqs: [
      {
        question: "Can you build Arabic and English sites?",
        answer:
          "Yes. Right-to-left layout, Arabic typography, mirrored navigation and a bilingual content structure are part of the build. We don't write Arabic marketing copy ourselves. That comes from your team or a translator, and we set up the content system so editing both languages is straightforward.",
      },
      {
        question: "Which UAE data rules should we think about?",
        answer:
          "It depends on where you're registered. The federal Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) applies on the mainland. DIFC and ADGM have their own data protection regulations. Health and finance add sector rules on top. We sign a data processing agreement and limit access. Your legal adviser confirms which regime applies.",
      },
      {
        question: "Do you work with free-zone companies?",
        answer:
          "Yes. Free-zone and mainland companies both work with us. We need the legal name of the contracting entity for the contract and invoice, plus any rules your licence adds. Hosting can stay in a UAE cloud region if your policy asks for that.",
      },
      {
        question: "How do your hours compare with Dubai?",
        answer:
          "India is 1.5 hours ahead of the UAE. A 9 am start in Dubai is 10:30 am for us, and we can start earlier. You get nearly your whole working day live. We plan around short Fridays and Ramadan hours.",
      },
      {
        question: "What does a developer cost compared with hiring in Dubai?",
        answer:
          "A local senior hire means salary plus visa, medical insurance and often relocation or agency fees. Our senior engineers are about $25 to $45 an hour, with quotes in AED or USD. Fixed-price projects are priced after a scoping call.",
      },
    ],
    seoContent: {
      introduction: "Engineering support for UAE companies from a team that is only 1.5 hours ahead of Dubai.",
      whyOffshore: "Hiring a developer in Dubai or Abu Dhabi isn't cheap, and once you add visa, medical insurance and relocation, the real cost climbs fast. Many UAE businesses want one capable team for a defined project rather than three full-time hires. An India-based team fits that. You share almost your whole working day, you pay in AED or USD, and you can scale back when the project settles.",
      ourExpertise: "In the UAE we most often build for real estate, e-commerce, logistics, tourism and fintech. Think property listing platforms with lead routing, delivery and fleet dashboards, booking systems for tours and experiences, and online stores that sell across the GCC.\n\nBilingual Arabic and English builds with right-to-left layouts are part of normal scope. We also build mobile apps and WhatsApp-connected workflows, which matter more in the Gulf than in most markets.",
      webDevelopmentDetails: "Bilingual company sites, property and tour portals, and stores for GCC customers. Right-to-left pages are designed alongside English, not copied later.",
      softwareDevelopmentDetails: "CRMs, fleet and delivery dashboards, booking engines and internal tools. Integration with payment gateways, WhatsApp Business API and your existing systems is common.",
      mobileAppDetails: "iOS and Android apps in Flutter or React Native with Arabic and English from day one. Built for customers who live on their phones.",
      digitalMarketingDetails: "Technical SEO and landing pages in English and Arabic, with analytics in your accounts. We won't promise rankings.",
      itConsultingDetails: "UAE personal data rules depend on where you operate. Mainland companies fall under Federal Decree-Law No. 45 of 2021 (the PDPL). DIFC and ADGM have their own data protection regulations. Health and finance add sector rules on top.\n\nWe sign an NDA, an IP assignment and a data processing agreement before work starts, and limit access to named engineers. If your policy needs data hosted in the UAE, we use a UAE cloud region. Your legal adviser confirms the exact regime. We make the build and contracts match it.",
      pricingAdvantage: "Quotes can be written in AED or USD. Dedicated engineers cost about $25 to $45 an hour. A company website usually starts near $3,500, and a booking platform or portal commonly lands between $12,000 and $50,000, depending on integrations.\n\nPayment terms and milestones are agreed before kickoff. VAT treatment depends on your entity, so check with your accountant.",
      workingModel: "Dubai is 1.5 hours behind India, so almost the whole day overlaps. Our team starts around 9:30 am India time, which is 8 am in Dubai, and runs to the end of your business day.\n\nWe adjust for short Fridays, Ramadan hours and public holidays that don't match India's. Stand-ups are in the morning, demos weekly, and for anything urgent you can message a named project lead directly.",
      technologyStack: "React, Next.js, Node and Laravel are common for UAE projects, with PostgreSQL or MySQL on AWS, Azure or a UAE cloud region. Flutter for mobile.",
      processOverview: "A call first. Tell us about your business, who the product serves and whether it needs Arabic. We'll ask what's already in place: licence type, hosting, payment gateway, WhatsApp set-up.\n\nThen a written proposal in AED or USD. When the contract and NDA are signed, kickoff is usually one to two weeks away. Expect a staging link early, so you can review layouts, including right-to-left pages, before the build is far along.",
      commitment: "Write to contact@golaxindia.com or book a call. We reply within one business day. If the project is sensitive, mention it and we'll sign a mutual NDA before you share detail.",
    },
  },
  {
    country: "Saudi Arabia",
    slug: "saudi-arabia",
    countryCode: "SA",
    region: "Middle East",
    flag: "🇸🇦",
    currency: "SAR",
    currencySymbol: "SAR",
    timezoneOverlap: "9+ hours",
    majorCities: ["Riyadh","Jeddah","Dammam"],
    description:
      "Offshore development for Saudi businesses. Senior Indian engineers, SAR or USD invoicing, PDPL-aware contracts, Arabic-first interfaces when needed.",
    heroTagline: "Offshore Software Development for Saudi Arabia Businesses",
    about:
      "Saudi projects often start with two questions: will the product work properly in Arabic, and can the data stay where it should? We build web and mobile products for companies in Riyadh, Jeddah and Dammam, with Arabic-first layouts and the PDPL in mind. Riyadh and India share nearly the whole working day.",
    whyChooseUs: [
      "Arabic-first builds with right-to-left layouts planned from the first wireframe",
      "PDPL and SDAIA rules on cross-border transfers reviewed when the contract is drafted",
      "Team schedule follows the Saudi working week, Sunday to Thursday",
      "Hosting in a Saudi cloud region when the data or the contract calls for it",
      "Payment gateway integrations common in the Kingdom, such as Mada, through your acquirer",
      "SAR or USD quotes with milestone-based payment terms",
    ],
    industries: ["Government digital services","Energy","Retail","Logistics","Healthcare","Tourism"],
    faqs: [
      {
        question: "Do you build Arabic-first products?",
        answer:
          "Yes, when that's what the product needs. We design for right-to-left from the start, so the Arabic version isn't an afterthought. Copy and translations come from your team or a translator. We set up the content system so both languages are easy to maintain.",
      },
      {
        question: "Can our data stay inside Saudi Arabia?",
        answer:
          "It can. We can build and host in a Saudi cloud region and restrict what engineers see from India. Whether you must keep data in the Kingdom depends on your sector and contract. The PDPL sets conditions on transferring personal data abroad, and government or regulated clients often have stricter rules. Your legal team confirms what applies, and we build to it.",
      },
      {
        question: "What does the PDPL mean for us as a client?",
        answer:
          "Saudi Arabia's Personal Data Protection Law, overseen by SDAIA, sets rules on consent, purpose, retention and sending data outside the Kingdom. If we process personal data for you, a written agreement defines what we can do, where it sits and who can access it. We flag the design choices where this matters.",
      },
      {
        question: "How do your working hours match ours?",
        answer:
          "Riyadh is 2.5 hours behind India, and the Saudi working week runs Sunday to Thursday. We schedule team time around that week, so your Sunday is a working day for us. Indian public holidays and Eid cover are agreed in advance.",
      },
      {
        question: "What does it cost compared with hiring in Riyadh?",
        answer:
          "Hiring a senior developer in Riyadh usually means salary plus housing, visa, insurance and recruitment fees. Our engineers are about $25 to $45 an hour, with quotes in SAR or USD.",
      },
    ],
    seoContent: {
      introduction: "Arabic-capable engineering support for Saudi companies, working your Sunday to Thursday week.",
      whyOffshore: "Many Saudi companies are digitising fast under Vision 2030, and local engineering talent is in demand. Hiring a senior developer in Riyadh means salary, housing allowances, visas, insurance and agency fees. An offshore team lets you start a defined project without building a whole department first. With only 2.5 hours between Riyadh and India, you're not trading speed for savings.",
      ourExpertise: "Saudi work tends to be portals and platforms for government-adjacent services, energy, retail, logistics, healthcare and tourism. That could be a customer service app, an inventory and fleet dashboard, a booking platform for travel or events, or a retail store that needs Arabic and English with local payment methods.\n\nWe design Arabic-first when the product calls for it. We also build mobile apps and admin dashboards, and integrate payment gateways common in the Kingdom through your acquirer.",
      webDevelopmentDetails: "Arabic-first and bilingual sites, portals and online stores. Right-to-left layout, Arabic fonts and mirrored navigation are designed in, not patched.",
      softwareDevelopmentDetails: "Dashboards, internal systems, booking tools and customer portals. Hosting region and access rules are settled before the first sprint.",
      mobileAppDetails: "iOS and Android apps with Arabic and English, built in Flutter or React Native. Weekly test builds and store-release support.",
      digitalMarketingDetails: "Technical SEO and landing pages in Arabic and English, with analytics in your accounts. No ranking promises.",
      itConsultingDetails: "Saudi Arabia's Personal Data Protection Law (PDPL), overseen by SDAIA, governs how personal data is collected, used, stored and sent outside the Kingdom. Cross-border transfers have conditions, and public-sector or regulated clients often have more, including the National Cybersecurity Authority's controls.\n\nWe sign an NDA, an IP assignment and a data processing agreement before work begins, restrict access to named engineers, and can host in a Saudi cloud region if your contract requires it. We're not a law firm, so your legal team confirms which rules apply. The build follows their answer.",
      pricingAdvantage: "Quotes are in SAR or USD. Senior engineers on dedicated or hourly terms are about $25 to $45 an hour. A bilingual business site usually starts near $4,000, and a portal or app MVP often falls between $15,000 and $55,000.\n\nMilestones and payment terms are fixed in the contract before work starts. VAT and withholding questions depend on your entity, so have your accountant read the contract.",
      workingModel: "Riyadh is 2.5 hours behind India, and the Saudi working week runs Sunday to Thursday. We plan around that, so Sunday is a working day for us and Friday isn't a gap in the plan.\n\nA typical day starts with a short stand-up in the Riyadh morning. Almost your entire business day overlaps with ours. We adjust for Ramadan hours, Eid and Saudi National Day, and agree Indian public holidays in advance so nothing surprises you.",
      technologyStack: "React, Next.js, Node and Laravel with PostgreSQL or MySQL are typical, hosted on AWS, Azure or a Saudi cloud region. Flutter for mobile.",
      processOverview: "A call, in English, with the project lead. We'll ask what the product does, whether the main language is Arabic, who hosts it and which regulator matters to you.\n\nA written proposal follows in SAR or USD. After NDA and contract, the team starts within one to two weeks. Arabic screens appear early, so your own people can check them before the build is deep.",
      commitment: "Email contact@golaxindia.com with a short description of the project and the main language of your users. We reply within one business day. Need an NDA first? Say so and we'll send one.",
    },
  },
  {
    country: "Singapore",
    slug: "singapore",
    countryCode: "SG",
    region: "APAC",
    flag: "🇸🇬",
    currency: "SGD",
    currencySymbol: "S$",
    timezoneOverlap: "Full-day overlap",
    majorCities: ["Singapore"],
    description:
      "Offshore development for Singapore companies. Senior Indian engineers, SGD or USD invoicing, PDPA-aware contracts, close to a full working day of overlap.",
    heroTagline: "Offshore Software Development for Singapore Businesses",
    about:
      "Singapore is only 2.5 hours ahead of India, so your working day and ours are almost the same day. We build fintech, logistics and SaaS products for Singapore teams, with PDPA terms in the contract and MAS-style security expectations in mind where they apply.",
    whyChooseUs: [
      "About six live hours every day with Singapore, more when we shift for early meetings",
      "PDPA Transfer Limitation Obligation handled in the contract, not as an afterthought",
      "Can follow the controls MAS-regulated clients pass to vendors: change control, access reviews, logging, test evidence",
      "Shipment tracking, customs documents and partner APIs for logistics and trade platforms",
      "Multi-currency, multi-language setup for regional launches across Southeast Asia",
      "SGD or USD invoicing",
    ],
    industries: ["Fintech","Logistics & trade","E-commerce","SaaS","Regional platforms"],
    faqs: [
      {
        question: "Is the overlap really that good?",
        answer:
          "Yes. Singapore is 2.5 hours ahead of India. Our day runs roughly 9:30 am to 6:30 pm India time, which is noon to 9 pm in Singapore, so most clients get about six live hours. For early meetings we can move part of the team to start sooner.",
      },
      {
        question: "Does the PDPA allow sending data to India?",
        answer:
          "Yes, with conditions. The PDPA's Transfer Limitation Obligation requires that the recipient gives personal data a standard of protection comparable to the PDPA, which is normally done through a contract. We sign a data processing agreement with the right clauses and limit access to named engineers. Your DPO or lawyer confirms the details.",
      },
      {
        question: "We're a regulated fintech. Can you work with MAS expectations?",
        answer:
          "We build to your policies. MAS's Technology Risk Management Guidelines come up often: change management, access control, logging, testing. We follow your policies, give you evidence such as pull requests, logs and test reports, and tell you if a requirement is beyond what we can do. We don't give regulatory advice, and we don't hold a MAS licence.",
      },
      {
        question: "Why use an offshore team in Singapore at all?",
        answer:
          "Senior engineers in Singapore are expensive and in demand, and foreign hires bring Employment Pass considerations. Our senior engineers are about $25 to $45 an hour, billed in SGD or USD. Many Singapore clients use us for a defined build or a regional rollout and keep their core team small.",
      },
    ],
    seoContent: {
      introduction: "An India-based team that works almost the same day as Singapore, for fintech, logistics and SaaS products.",
      whyOffshore: "Singapore is a small market with a lot of ambitious companies, and the same developers get approached by everyone. Salaries are high, foreign hiring needs passes, and a senior engineer can take months to land. We're not a replacement for your core team, but we can take on the product build, the integration backlog or the regional rollout. And because Singapore and India are only 2.5 hours apart, the time difference barely matters.",
      ourExpertise: "Our Singapore clients are mostly in fintech, logistics and trade, SaaS and regional e-commerce. Typical builds include payment and wallet flows, shipment and warehouse dashboards with partner APIs, and SaaS platforms that need multi-currency and multi-language setup for Southeast Asia.\n\nFor regional rollouts we plan English first, then Chinese, Malay or Bahasa Indonesia as markets open. Translations come from your team or a translator. We make sure the product can handle them.",
      webDevelopmentDetails: "Corporate sites, partner portals and e-commerce builds that stay fast across Southeast Asian networks. Multi-language routing is set up early.",
      softwareDevelopmentDetails: "Payment flows, back-office tools, logistics dashboards and SaaS platforms. Partner APIs and reconciliation logic get as much attention as the interface.",
      mobileAppDetails: "iOS and Android apps in Flutter or React Native, built for regional launches. Weekly builds you can test on real devices.",
      digitalMarketingDetails: "Technical SEO and landing pages for Singapore search and regional markets. Analytics in your accounts, no ranking promises.",
      itConsultingDetails: "Singapore's Personal Data Protection Act (PDPA) sets the rules. The part that matters most offshore is the Transfer Limitation Obligation: if personal data goes outside Singapore, the recipient must provide a standard of protection comparable to the PDPA, normally through a written agreement. We sign one, along with an NDA and IP assignment, before work starts.\n\nFor financial institutions, MAS Technology Risk Management guidelines often get passed down to vendors. We follow the policies you give us: change control, access reviews, logging and test evidence. We don't give regulatory advice, so your compliance team should confirm what applies.",
      pricingAdvantage: "Quotes in SGD or USD. Dedicated senior engineers are about $25 to $45 an hour. A corporate site starts near $3,500, and a SaaS or fintech MVP is typically $18,000 to $65,000, depending on integrations and security work.\n\nFixed price suits clear scopes. Monthly engineers suit ongoing roadmaps. GST treatment depends on your entity, so your accountant can confirm.",
      workingModel: "Singapore is 2.5 hours ahead of India. Our team works roughly 9:30 am to 6:30 pm India time, which is noon to 9 pm in Singapore, so you'll share about six hours every day. If you need an early meeting, part of the team can start sooner.\n\nStand-ups are mid-morning or midday your time. You get a named lead, a shared board and a weekly demo. Because the overlap is generous, quick calls replace most long email threads.",
      technologyStack: "TypeScript, React, Node, Python and PostgreSQL on AWS or Azure, often in the Singapore region. Flutter or React Native for mobile.",
      processOverview: "A quick call first, usually the same week you write. We'll ask about users, existing systems and any regulator or customer audit you answer to.\n\nThen a written proposal in SGD or USD. After contract and NDA the team starts in one to two weeks. Because overlap is long, you'll see progress early, usually a clickable build within the first sprint.",
      commitment: "Email contact@golaxindia.com. We reply within one business day. If compliance is a factor, say so in the first message and the first call can focus on it.",
    },
  },
  {
    country: "Germany",
    slug: "germany",
    countryCode: "DE",
    region: "Europe",
    flag: "🇩🇪",
    currency: "EUR",
    currencySymbol: "€",
    timezoneOverlap: "5-6 hours",
    majorCities: ["Berlin","Munich","Hamburg","Frankfurt"],
    description:
      "Offshore development for German companies. Senior Indian engineers, EUR invoicing, GDPR contracts with SCCs, written specs and documented delivery.",
    heroTagline: "Offshore Software Development for Germany Businesses",
    about:
      "German clients tend to ask the right questions early: where the data sits, who is responsible, what is in the spec and what happens when it isn't met. That suits us. We build B2B platforms, internal tools and apps for German companies, with EUR invoicing, GDPR paperwork and written specs before development starts.",
    whyChooseUs: [
      "Article 28 data processing agreement and Standard Contractual Clauses for transfers to India, signed before work starts",
      "Written specs, acceptance criteria and test reports. We expect to be held to them",
      "Four to six hours of live overlap with German office hours",
      "Personal data hosted in the EU, for example Frankfurt regions, by default",
      "Comfortable integrating with ERP systems such as SAP or Odoo for supplier and dealer portals",
      "German and English interfaces built with proper i18n when your users need both",
    ],
    industries: ["Automotive","Manufacturing","Logistics","Finance","B2B platforms"],
    faqs: [
      {
        question: "Is it allowed to send personal data to India under the GDPR?",
        answer:
          "Yes, with safeguards. India has no EU adequacy decision, so transfers rely on Standard Contractual Clauses, plus a transfer impact assessment where required, and an Article 28 data processing agreement. We sign both. We also keep personal data hosted in the EU and limit access. Your data protection officer confirms what is needed in your case.",
      },
      {
        question: "How strict are you with specs and documentation?",
        answer:
          "Quite. We write requirements, acceptance criteria and a change log. You get architecture notes, test reports and a handover document. If scope changes, it goes through a written change request with a new estimate.",
      },
      {
        question: "Will the team work in German?",
        answer:
          "Project communication is in English. We can build German-language interfaces and set up proper i18n, but we don't write German copy or legal text. Those come from your side or from a translator.",
      },
      {
        question: "What are the working hours compared with Germany?",
        answer:
          "India is 3.5 hours ahead of Germany in summer and 4.5 in winter. 9 am in Berlin is 12:30 or 1:30 pm in India, so German office hours land in our afternoon and evening. That gives four to six hours of live time every day.",
      },
      {
        question: "What does it cost compared with hiring in Germany?",
        answer:
          "Agencies often quote EUR 80 to 140 an hour for senior developers, and permanent hires come with long notice periods. Our senior engineers are about $25 to $45 an hour, invoiced in EUR. Fixed-price work is quoted after a specification phase.",
      },
    ],
    seoContent: {
      introduction: "A specification-driven India-based team for German companies that care about documentation and data protection.",
      whyOffshore: "Germany has had a shortage of software engineers for years, and senior hires can take half a year, with notice periods on top. Agencies often charge EUR 80 to 140 an hour for senior people. German companies are known for careful, specification-led work, which actually makes offshore collaboration easier, because the specs already exist. If your team has a clear backlog and a limited number of in-house developers, an India-based team can take on specific modules or products end to end.",
      ourExpertise: "German clients mostly come from manufacturing, automotive supply, logistics, finance and B2B services. Typical work is a supplier or dealer portal, a document and approval workflow, a customer-facing configurator, or a dashboard on top of an ERP such as SAP or Odoo.\n\nWe work the way German teams usually prefer: requirements first, tested increments, documented handover. We won't push a sprint to hit a date if it isn't ready.",
      webDevelopmentDetails: "Corporate sites, B2B portals and configurators with clean, documented front-ends. Cookie consent and imprint requirements are handled as part of the build.",
      softwareDevelopmentDetails: "Supplier portals, approval workflows, internal tools and ERP-connected dashboards. Each module ships with tests and a short technical document.",
      mobileAppDetails: "Apps for field staff, service technicians and customers. Flutter or React Native for most, native when device APIs require it. German and English UI supported.",
      digitalMarketingDetails: "Technical SEO and landing pages in German or English, with consent-compliant analytics in your accounts. No ranking promises.",
      itConsultingDetails: "The GDPR applies, along with the BDSG for German specifics. India doesn't have an EU adequacy decision, so transfers need safeguards: Standard Contractual Clauses and, where the situation requires it, a transfer impact assessment with supplementary measures. We sign an Article 28 data processing agreement and the SCCs with you.\n\nWhere possible, personal data stays on EU infrastructure such as Frankfurt regions, with access limited to named engineers, MFA and logging. NDA and IP assignment come before work starts. Your DPO or lawyer should review the final package. We can provide a description of technical and organisational measures, which most German companies ask for.",
      pricingAdvantage: "Quotes are in EUR. Senior engineers on dedicated or hourly terms are about $25 to $45 an hour, converted to EUR in the contract. A corporate website starts around EUR 3,500, and a B2B portal or workflow platform is typically EUR 15,000 to 60,000, depending on integrations and acceptance requirements.\n\nFixed price needs a fully specified scope, so we'd rather spend time on discovery than guess. VAT and reverse-charge treatment is a question for your accountant.",
      workingModel: "India is 3.5 hours ahead of Germany in summer and 4.5 in winter. Nine in the morning in Berlin is 12:30 or 1:30 in the afternoon in India, so German office hours land in our afternoon and evening.\n\nThat gives you four to six hours of live time. We keep fixed slots: a short daily stand-up, a sprint review every two weeks and a written status report. Everything else happens in your tracker, with decisions noted.",
      technologyStack: "TypeScript, React, Node, Java or .NET with PostgreSQL are common choices for German B2B projects, hosted in EU regions on AWS or Azure. You own the repository, the cloud accounts and the documentation.",
      processOverview: "An introductory call, then a discovery phase that results in a written specification: scope, acceptance criteria, assumptions and risks. You approve it before we estimate. The proposal follows in EUR with milestones.\n\nContract, data processing agreement and SCCs are signed before development starts. Kickoff usually follows one to two weeks later. Each sprint ends with a demo and a test report.",
      commitment: "Write to contact@golaxindia.com with your requirements, even if they're still rough. We reply within one business day. If your lawyer needs to review the data processing agreement and SCCs first, tell us and we'll send the documents before any call.",
    },
  },
  {
    country: "New Zealand",
    slug: "new-zealand",
    countryCode: "NZ",
    region: "APAC",
    flag: "🇳🇿",
    currency: "NZD",
    currencySymbol: "NZ$",
    timezoneOverlap: "2-4 hours",
    majorCities: ["Auckland","Wellington"],
    description:
      "Offshore development for New Zealand businesses. Senior Indian engineers, NZD or USD invoicing, Privacy Act 2020 aware, early-start schedule for your afternoons.",
    heroTagline: "Offshore Software Development for New Zealand Businesses",
    about:
      "New Zealand is one of the furthest time zones from India, so we plan for it instead of pretending it isn't there. Our team starts early to catch your afternoon, then keeps working after you've logged off. We build web, SaaS and mobile products for Kiwi businesses, with the Privacy Act 2020 in the contract.",
    whyChooseUs: [
      "The team starts around 7 am India time, which is early afternoon in Auckland",
      "Work continues after your day ends, so a written update and short recorded walkthrough are waiting the next morning",
      "Privacy Act 2020 and overseas disclosure (IPP 12) handled with a written agreement and limited access",
      "Mobile builds that cope with patchy rural connections",
      "Booking, seasonal operations and learning-portal workflows for tourism, agritech and education teams",
      "NZD or USD invoicing, with fixed-price quotes for small projects",
    ],
    industries: ["Agritech","Tourism","SaaS","Government","Education"],
    faqs: [
      {
        question: "How do you deal with the time zone?",
        answer:
          "It takes effort, and we don't hide that. New Zealand is 6.5 to 7.5 hours ahead of India. We start around 7 am India time, which is early afternoon in New Zealand, so you get roughly two to four hours live depending on daylight saving. The rest runs on written handoffs. What we finish during our day is waiting for you the next morning.",
      },
      {
        question: "How does the Privacy Act 2020 apply when data goes to India?",
        answer:
          "Information Privacy Principle 12 covers disclosing personal information outside New Zealand, and the notifiable privacy breach rules apply if something goes wrong. We sign a data processing agreement, restrict access to named engineers and agree how and when we'd tell you about an incident. Your adviser should confirm how IPP 12 applies to your set-up.",
      },
      {
        question: "How much cheaper is it than hiring locally?",
        answer:
          "Local agencies often charge NZD 100 to 160 an hour for senior developers, and the talent pool is small. Our senior engineers are about $25 to $45 an hour, billed in NZD or USD. Exact savings depend on the skills and the length of the work.",
      },
      {
        question: "Is this realistic for a small business budget?",
        answer:
          "Often, yes. A simple business site starts around $3,500, and a small custom app or portal is usually in the low tens of thousands. If your budget is too small for what you're after, we'll say so and suggest where to trim.",
      },
    ],
    seoContent: {
      introduction: "An India-based team that starts early to meet your afternoon, then works while you're offline.",
      whyOffshore: "New Zealand has a small developer pool, and the best people are pulled towards Australia and the US. Hiring a senior engineer can take months, and local agencies often charge NZD 100 to 160 an hour. Offshore isn't a perfect answer, because the time difference is large. But for a clear scope and a client who can review work each morning, it works well. What we build during India's day is ready to review when yours begins.",
      ourExpertise: "Kiwi clients tend to be in agritech, tourism, SaaS, education and government-adjacent work. Think booking and trip-planning platforms, farm and supply-chain dashboards, learning portals, or SaaS products aimed at the Australian and New Zealand market together.\n\nWe also build mobile apps that cope with patchy rural connections, using offline-first patterns where they make sense.",
      webDevelopmentDetails: "Business sites, booking platforms and portals that load quickly on mobile and rural connections. Hosting and domains stay in your accounts.",
      softwareDevelopmentDetails: "Farm and supply-chain dashboards, booking systems, learning platforms and internal tools. We work in small increments so you can review each one over breakfast.",
      mobileAppDetails: "iOS and Android apps in Flutter or React Native, with offline sync for areas where signal drops.",
      digitalMarketingDetails: "Technical SEO and landing pages for New Zealand search, with analytics in your accounts. No ranking promises.",
      itConsultingDetails: "The Privacy Act 2020 governs personal information. Information Privacy Principle 12 deals with sending information overseas, and the notifiable privacy breach rules apply if something goes wrong. We sign a data processing agreement that limits what we can do with your data, name the engineers who have access, and agree how and when we'd tell you about an incident.\n\nNDA and IP assignment are signed before work begins. Health, education and government clients often have extra rules, so ask us early. Your lawyer confirms what the Act requires for your situation.",
      pricingAdvantage: "Quotes are in NZD or USD. Dedicated engineers are about $25 to $45 an hour. A small business website often starts near $3,500, and a custom app or portal MVP is generally $12,000 to $50,000, depending on scope.\n\nFor small budgets we'll tell you what's realistic and where to trim. GST treatment depends on your set-up, so check with your accountant.",
      workingModel: "New Zealand is 6.5 to 7.5 hours ahead of India. We don't pretend that's easy. Our team starts around 7 am India time, which is early afternoon in Auckland, and you get roughly two to four hours live before your day ends.\n\nThe real rhythm is overnight. We keep working after you've logged off, then post a written update and a short recorded walkthrough. It's waiting for you the next morning. Questions you leave get answered in our next day. For this to work, specs have to be clear and decisions quick. We'll help with both.",
      technologyStack: "React, Next.js, Node and PostgreSQL on AWS or Azure, with an Australian region where local hosting matters. Flutter or React Native for mobile.",
      processOverview: "First a call, at a time that works in your afternoon. We'll ask about users, existing systems, deadlines and who on your side can answer questions in the morning.\n\nThen a written proposal in NZD or USD. After NDA and contract, kickoff is usually one to two weeks away. In week one we set the format of the daily written update, so the time zone doesn't slow the first sprint.",
      commitment: "Send a note to contact@golaxindia.com about what you want to build and when you need it. We reply within one business day, and if you write in your evening, the answer is often waiting by the next morning.",
    },
  },
  {
    country: "Qatar",
    slug: "qatar",
    countryCode: "QA",
    region: "Middle East",
    flag: "🇶🇦",
    currency: "QAR",
    currencySymbol: "QAR",
    timezoneOverlap: "8+ hours",
    majorCities: ["Doha","Lusail"],
    description:
      "Offshore development for Qatar businesses. Senior Indian engineers, QAR or USD invoicing, Arabic and English support, Gulf business hours.",
    heroTagline: "Offshore Software Development for Qatar Businesses",
    about:
      "Doha is 2.5 hours behind India, and Qatar works Sunday to Thursday. We plan around that. We build portals, apps and business systems for Qatari companies, with Arabic and English interfaces, QAR invoicing and Qatar's data protection law in the contract.",
    whyChooseUs: [
      "Doha and India share almost the entire working day",
      "Qatar's personal data law (Law No. 13 of 2016) and QFC data protection rules considered when contracts are written",
      "Arabic and English interfaces for bilingual corporate sites and apps",
      "Corporate sites, client portals and booking tools for hospitality, sports, education and public-sector teams",
      "Sunday to Thursday schedule, with Ramadan hours built into the plan",
      "Written quotations with scope, milestones and validity, in QAR or USD",
    ],
    industries: ["Smart-city & public sector","Energy","Hospitality","Sports","Education"],
    faqs: [
      {
        question: "Can you build bilingual Arabic and English products?",
        answer:
          "Yes. We build right-to-left layouts, Arabic typography and a bilingual content structure. We don't write Arabic marketing copy ourselves. That comes from your team or a translator, and we make sure editing both languages is simple.",
      },
      {
        question: "Which data law applies in Qatar?",
        answer:
          "Law No. 13 of 2016 on Personal Data Privacy Protection applies to personal data in Qatar. The Qatar Financial Centre has its own data protection regulations, and sector rules add to both. We sign a data processing agreement and limit access. Your legal adviser confirms which regime applies to you.",
      },
      {
        question: "Can you provide quotations that suit our procurement process?",
        answer:
          "We provide written quotations with scope, milestones, payment terms and validity, in QAR or USD. If your procurement team needs a particular template, send it over and we'll fill it in.",
      },
      {
        question: "What are your working hours compared with Doha?",
        answer:
          "Doha is 2.5 hours behind India. When it's 8 am in Doha it's 10:30 am here. We schedule our team to the Qatari working week, Sunday to Thursday, and agree cover for Indian public holidays in advance.",
      },
      {
        question: "What does it cost compared with hiring in Doha?",
        answer:
          "A local senior developer means salary plus accommodation allowance, residence permit and recruitment fees. Our senior engineers are about $25 to $45 an hour, with quotes in QAR or USD.",
      },
    ],
    seoContent: {
      introduction: "Engineering support for Qatari organisations, scheduled around the Sunday to Thursday week.",
      whyOffshore: "Hiring a senior developer in Doha means salary, accommodation allowances, residence permits and recruitment fees, and the right person may not be available at all. Many Qatari organisations just need a capable team for a defined project, such as a portal, a mobile app or an internal system. Offshore delivery covers that without a long hiring plan. And with only 2.5 hours between Doha and India, you aren't losing days to time zones.",
      ourExpertise: "In Qatar we mostly see corporate and institutional work: bilingual company websites, customer and supplier portals, booking and ticketing tools for hospitality and sports events, learning platforms for education, and dashboards for energy and public-sector teams.\n\nMany of these projects have more than one stakeholder and a formal approval route, so we write things down: scope, milestones, sign-offs. That makes it easier to move a project through procurement.",
      webDevelopmentDetails: "Bilingual corporate sites, client and supplier portals, and booking tools. Right-to-left pages are designed alongside English from the start.",
      softwareDevelopmentDetails: "Approval workflows, dashboards and internal systems for organisations with several stakeholders. Roles and sign-off steps are built to match how you already work.",
      mobileAppDetails: "iOS and Android apps with Arabic and English, built in Flutter or React Native. Weekly test builds for your team.",
      digitalMarketingDetails: "Technical SEO and landing pages in English and Arabic, with analytics in your accounts. No ranking promises.",
      itConsultingDetails: "In Qatar, personal data is governed by Law No. 13 of 2016 on Personal Data Privacy Protection. Organisations in the Qatar Financial Centre follow the QFC's own data protection regulations, and sector regulators may add requirements. Cross-border transfers need safeguards and, in some cases, notice to individuals.\n\nWe sign an NDA, an IP assignment and a data processing agreement before work starts, restrict access to named engineers, and can host in a Qatar-based cloud region if your policy asks for it. We aren't lawyers, so your adviser confirms the rules that apply. We build to match.",
      pricingAdvantage: "Quotes are in QAR or USD. Dedicated senior engineers are about $25 to $45 an hour. A bilingual corporate website commonly starts near $4,000, and a portal or app MVP typically sits between $15,000 and $55,000.\n\nQuotations show scope, milestones, payment terms and how long the price is valid, in a format your finance team can approve. Tax treatment depends on your entity, so ask your accountant.",
      workingModel: "Doha is 2.5 hours behind India and the Qatari working week runs Sunday to Thursday. We schedule our team to the Qatari week and agree cover for Indian holidays in advance.\n\nWhen it's 8 am in Doha, it's 10:30 am here. A short stand-up at the start of your day, a weekly demo and a shared board cover most things. During Ramadan we adjust meeting times to your shorter hours.",
      technologyStack: "React, Next.js, Node and Laravel with PostgreSQL or MySQL on AWS, Azure or a Qatar cloud region. Flutter for mobile.",
      processOverview: "We start with a call and a short list of questions: who uses it, which languages, which approvals you need internally, what the deadline is. Then a written quotation with scope, milestones and price in QAR or USD.\n\nAfter NDA and contract, kickoff is usually one to two weeks later. Bilingual screens show up early so your team can review both versions before they're locked.",
      commitment: "Email contact@golaxindia.com with a short brief. We reply within one business day. If your procurement team needs a specific quotation format, send it with your first message.",
    },
  },
];

export const getInternationalLocation = (slug: string): InternationalLocationData | undefined =>
  internationalLocations.find((loc) => loc.slug === slug);

// ---------- City helpers (per-country city landing pages) ----------

export const slugifyCity = (city: string): string =>
  city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics (Düsseldorf -> dusseldorf)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export interface InternationalCityData {
  city: string;
  citySlug: string;
  country: InternationalLocationData;
}

export const getInternationalCity = (
  countrySlug: string,
  citySlug: string,
): InternationalCityData | null => {
  const country = getInternationalLocation(countrySlug);
  if (!country) return null;
  const city = country.majorCities.find((c) => slugifyCity(c) === citySlug);
  if (!city) return null;
  return { city, citySlug, country };
};

export const getAllInternationalCities = (): Array<{
  countrySlug: string;
  citySlug: string;
  city: string;
}> => {
  const out: Array<{ countrySlug: string; citySlug: string; city: string }> = [];
  for (const c of internationalLocations) {
    for (const city of c.majorCities) {
      out.push({ countrySlug: c.slug, citySlug: slugifyCity(city), city });
    }
  }
  return out;
};


// ---------- Service Ã- Country page support ----------

export interface ServiceInternationalData {
  service: ServiceData;
  location: InternationalLocationData;
  seoContent: {
    introduction: string;
    whyServiceMatters: string;
    ourApproach: string;
    serviceDetails: string;
    industryApplications: string;
    pricingOverview: string;
    workingModel: string;
    technologyStack: string;
    processOverview: string;
    whyChooseUs: string;
    successStories: string;
    callToAction: string;
  };
  faqs: { question: string; answer: string }[];
}

const buildServiceCountryContent = (
  service: ServiceData,
  loc: InternationalLocationData,
): ServiceInternationalData["seoContent"] => {
  const { country, region, currency, currencySymbol, timezoneOverlap, majorCities, industries } = loc;
  const serviceName = service.title;
  const serviceKw = service.title.toLowerCase();
  const cityList = majorCities.slice(0, 4).join(", ");

  return {
    introduction: `Golax India is an offshore ${serviceName} company for businesses in ${country}. From ${cityList} and across ${country}, we help startups and established teams ship ${serviceKw} projects with senior engineers, transparent ${currency} pricing, and ${timezoneOverlap} of daily timezone overlap.

We're not a body-shop. Every ${serviceName} engagement for a ${country} client is led by a senior practitioner, supported by a dedicated project manager, and shipped against a clearly defined scope and quality bar. The outcome: faster delivery, predictable invoices, and code or campaigns that actually move your ${country} business forward.`,

    whyServiceMatters: `${serviceName} is one of the highest-leverage investments a ${country} business can make right now. Customers in ${country} expect fast, polished digital experiences - and competitors are investing accordingly. Falling behind on ${serviceKw} means losing leads, sales, and category share to companies that ship better digital products.

Outsourcing ${serviceKw} to India through Golax India gives ${country} businesses access to a deep, specialized talent pool that simply isn't available - or affordable - locally. You get senior engineers and growth specialists who have shipped similar projects dozens of times before, without the recruitment, payroll, and overhead burden of building the same team in ${country}.`,

    ourApproach: `Our approach to ${serviceName} for ${country} clients is built on three principles: senior ownership, transparent communication, and disciplined delivery. Every engagement starts with a discovery call to understand your ${country} business context - goals, customers, constraints, and success metrics.

From there, we propose a clearly scoped engagement (fixed-scope project, monthly retainer, or dedicated team), agree on milestones, and kick off in 1–2 weeks after the contract. You get shared access to the tools you choose - board, GitHub or GitLab, Figma, staging - plus a project contact during your ${country} business hours.

Throughout delivery we run weekly demos, daily async updates, and senior code review on every pull request. There are no surprises and no quiet quality drops.`,

    serviceDetails: `Our ${serviceName} engagements for ${country} clients typically cover:

${service.features.map((f) => `- ${f}`).join("\n")}

Whether you need a single deliverable or an ongoing capability, we structure the work around your ${country} business outcomes - not just hours billed.`,

    industryApplications: `Across ${country} we've delivered ${serviceName} for clients in ${industries.slice(0, 5).join(", ")}, and more. A few examples of how ${serviceKw} typically shows up in each of these sectors:

${industries
  .slice(0, 6)
  .map((ind) => `- ${ind}: tailored ${serviceKw} solutions designed around ${ind.toLowerCase()} workflows, compliance needs, and customer expectations specific to ${country}.`)
  .join("\n")}

If your industry isn't listed, that's fine - we adapt quickly. A 30-minute discovery call is usually enough for us to confirm fit and propose an approach.`,

    pricingOverview: `Transparent ${currency} pricing for ${country} clients. Common engagement options for ${serviceName}:

- Fixed-scope projects - clear deliverables, fixed price, ideal for first engagements.
- Dedicated specialist / pod - monthly retainer for an exclusive senior practitioner.
- Time and materials - flexible billing with detailed weekly time logs.
- Outcome-based retainers - particularly common for marketing, SEO, and growth.

You'll get a written proposal in ${currency} within 48 hours of the discovery call, with no hidden fees and no minimum lock-ins beyond 30 days.`,

    workingModel: `Working across time zones with an offshore ${serviceName} partner can feel risky the first time. We've removed that risk by structuring engagements for transparency:

- Dedicated PM during your ${country} business hours.
- ${timezoneOverlap} of daily overlap with our team.
- Daily async updates via Slack/Teams plus 2-3 live calls per week.
- Shared access to all project tooling and environments.
- Senior review on every deliverable.
- Monthly executive summary for ${country} stakeholders.

Most of our ${country} clients say the experience feels more like an extended in-house team than a typical offshore vendor.`,

    technologyStack: `For ${serviceName} engagements in ${country} we work with proven, modern technologies:

${service.technologies.map((t) => `- ${t}`).join("\n")}

We pick the right stack for your ${country} business - long-term maintainability and hire-ability matter as much as short-term speed.`,

    processOverview: `Our ${serviceName} delivery process for ${country} clients:

1. Discovery call (free, 30-45 min).
2. Written proposal in ${currency} within 48 hours.
3. Contracting - MSA, NDA, IP assignment, DPA where relevant.
4. Kickoff in 1–2 weeks after the contract.
5. Iterative delivery with weekly demos and async updates.
6. QA, UAT, and senior review before each release.
7. Production launch with monitoring and on-call coverage.
8. Optional support plan after launch if you want ongoing help.`,

    whyChooseUs: `${country} businesses choose Golax India for ${serviceName} because we combine senior talent, transparent ${currency} pricing, and a working model designed for offshore engagements that don't feel offshore. We've shipped for ${country} startups racing competitors, agencies white-labelling our capacity, and enterprises modernizing decades-old systems - and the common feedback is the same: predictable delivery, honest communication, and code or campaigns that actually perform.`,

    successStories: `Recent ${serviceName} outcomes for ${country} clients include:

- A ${country} ${industries[0].toLowerCase()} startup shipped their MVP in 9 weeks for ${currencySymbol}${(currency === "INR" ? 800000 : 22000).toLocaleString()}, vs a ${currencySymbol}${(currency === "INR" ? 4000000 : 110000).toLocaleString()} local quote.
- A ${country} ${industries[1].toLowerCase()} business grew organic traffic 280% in 6 months through our SEO and content engine.
- A ${region}-headquartered enterprise consolidated 3 legacy systems into one modern platform with our dedicated 8-person engineering pod.

We're happy to share more detailed references after a discovery call.`,

    callToAction: `Ready to scope your ${serviceName} project for ${country}? Book a free 30-minute discovery call and you'll get a written proposal in ${currency} within 48 hours - no obligation, no pressure. Whether you're hiring an offshore partner for the first time or already work with vendors and want a better experience, we'd love to be in your shortlist.`,
  };
};

const buildServiceCountryFAQs = (
  service: ServiceData,
  loc: InternationalLocationData,
): { question: string; answer: string }[] => {
  const { country, currency, currencySymbol, timezoneOverlap } = loc;
  const serviceName = service.title;
  return [
    {
      question: `Why outsource ${serviceName.toLowerCase()} from ${country} to Golax India?`,
      answer: `${country} businesses outsource ${serviceName.toLowerCase()} to Golax India for senior engineers, ${timezoneOverlap} of daily overlap, and billing in ${currency}. Senior rates are commonly quoted at $25–$45 per hour equivalent. Compare that with your local quotes after a discovery call.`,
    },
    {
      question: `How much does ${serviceName.toLowerCase()} cost for ${country} businesses?`,
      answer: `Pricing depends on scope, but typical ${country} engagements start from ${currencySymbol}3,000 for small fixed-scope projects and scale to retainer pods of ${currencySymbol}8,000-${currencySymbol}30,000 per month for a multi-person team. We provide a fixed written proposal within 48 hours of a discovery call.`,
    },
    {
      question: `How do you collaborate across time zones with ${country} clients?`,
      answer: `We maintain ${timezoneOverlap} of daily overlap with ${country} business hours. A dedicated PM works during your hours, with daily async updates and 2-3 live calls per week. Most ${country} clients say the working rhythm feels close to an in-house team.`,
    },
    {
      question: `Do you sign NDAs, MSAs, and IP-assignment agreements with ${country} clients?`,
      answer: `Yes - mutual NDA, MSA, IP assignment, and DPA (where applicable) are signed before any work starts. We're happy to work with your preferred ${country} legal templates.`,
    },
    {
      question: `How quickly can you start on a ${country} ${serviceName.toLowerCase()} project?`,
      answer: `For most ${country} engagements we kick off in 1–2 weeks after the contract is signed, with a project contact, a senior lead, and shared tooling access.`,
    },
    {
      question: `Do you provide ongoing support after the ${serviceName.toLowerCase()} project launches?`,
      answer: `Yes. After launch we can stay on for fixes and small improvements under a monthly care plan, billed in ${currency}. The exact support window is written into the proposal so there is no surprise.`,
    },
    {
      question: `Have you worked with ${country} businesses before?`,
      answer: `We serve ${country} remotely from Patna, India. We do not publish client names unless they approve a case study. Ask on the discovery call if a relevant reference is available.`,
    },
  ];
};

export const getServiceInternationalData = (
  serviceSlug: string,
  countrySlug: string,
): ServiceInternationalData | null => {
  const service = serviceCatalog.find((s) => s.slug === serviceSlug);
  const location = getInternationalLocation(countrySlug);
  if (!service || !location) return null;

  const unique = getServiceCountryContent(serviceSlug, countrySlug);
  if (!unique) return null; // only indexed combos with hand-written content

  const seoContent: ServiceInternationalData["seoContent"] = {
    introduction: unique.sections[0]?.body ?? "",
    whyServiceMatters: unique.sections[1]?.body ?? "",
    ourApproach: unique.sections[2]?.body ?? "",
    serviceDetails: service.features.map((f) => `- ${f}`).join("\n"),
    industryApplications: unique.sections[1]?.body ?? "",
    pricingOverview: `Transparent ${location.currency} pricing. Written proposal after a free discovery call — fixed-scope, dedicated pod, or time & materials.`,
    workingModel: `${location.timezoneOverlap} of daily overlap. Slack/Teams, weekly demos, senior review on deliverables.`,
    technologyStack: service.technologies.map((t) => `- ${t}`).join("\n"),
    processOverview: `1. Discovery call\n2. Written ${location.currency} proposal\n3. NDA / IP / DPA as needed\n4. Kickoff in 1–2 weeks after the contract\n5. Weekly demos, then launch and handover`,
    whyChooseUs: unique.lead,
    successStories: "", // never invent metrics
    callToAction: `Ready to scope ${service.title} for ${location.country}? Book a free discovery call — proposal in ${location.currency} within 48 hours.`,
  };

  return {
    service,
    location,
    seoContent,
    faqs: unique.faqs,
  };
};
