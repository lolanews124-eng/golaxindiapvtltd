"""Expand thin country seoContent fields and city section bodies. Idempotent via a marker sentence."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
COUNTRY_FILE = ROOT / "src/data/internationalLocations.ts"
CITY_FILE = ROOT / "src/data/cityPageContent.ts"
MARKER = "Written scopes stay in your repository from the first sprint."

COUNTRIES = {
    "united-states": {
        "name": "the United States",
        "currency": "USD",
        "hours": "US Eastern mornings and a shorter planned window for Pacific time",
        "industries": "SaaS, healthcare, fintech, e-commerce and B2B services",
        "privacy": "state privacy laws such as CCPA/CPRA, HIPAA where health data is in scope, and customer-driven SOC 2 expectations",
        "web": "marketing sites, customer portals and multi-tenant web apps that must stay fast on mobile networks across US time zones",
        "soft": "SaaS MVPs with billing, roles and admin, plus internal tools that replace spreadsheet operations",
        "mobile": "iOS and Android apps for product teams that need TestFlight and Play Console builds their US stakeholders can install each week",
        "mkt": "technical SEO and landing pages aimed at US buyers, with analytics set up in your accounts",
    },
    "united-kingdom": {
        "name": "the United Kingdom",
        "currency": "GBP",
        "hours": "UK office hours, about three to four hours of natural overlap, longer in summer",
        "industries": "fintech, e-commerce, healthcare, property and professional services",
        "privacy": "UK GDPR and the Data Protection Act 2018, using a UK IDTA or Addendum when personal data moves to India",
        "web": "corporate sites and client portals that need clean URLs, accessibility and Core Web Vitals suitable for UK search",
        "soft": "workflow products for professional firms and fintech teams, with audit logs and role-based access",
        "mobile": "store-ready iOS and Android apps, including bilingual English layouts when a product also serves EU customers",
        "mkt": "SEO and landing pages for UK search intent, with consent-aware analytics",
    },
    "canada": {
        "name": "Canada",
        "currency": "CAD",
        "hours": "Toronto business mornings, with a shorter planned overlap for Vancouver",
        "industries": "fintech, AI, cleantech, gaming, energy and e-commerce",
        "privacy": "PIPEDA and applicable provincial privacy rules",
        "web": "bilingual-ready websites and portals for teams selling in English and, when required, French",
        "soft": "SaaS and internal platforms for Canadian product companies that want CAD invoices and IP assigned to their corporation",
        "mobile": "cross-platform apps for consumer and field teams, with push, maps and payments scoped up front",
        "mkt": "search and landing-page work for Canadian buyers, including city-level pages for Toronto, Vancouver, Montreal and Calgary",
    },
    "australia": {
        "name": "Australia",
        "currency": "AUD",
        "hours": "the Australian afternoon, which is the practical overlap with India",
        "industries": "fintech, resources, healthcare, education and retail",
        "privacy": "the Australian Privacy Act and the Australian Privacy Principles",
        "web": "fast marketing sites and member portals for brands selling across Sydney, Melbourne, Brisbane and Perth",
        "soft": "operations software for distributors, clinics and education providers",
        "mobile": "iOS and Android apps tested against current store guidelines before submission",
        "mkt": "SEO for Australian search, with content written for local spelling and buyer language",
    },
    "united-arab-emirates": {
        "name": "the United Arab Emirates",
        "currency": "AED",
        "hours": "Gulf business hours, which overlap almost the full India working day",
        "industries": "real estate, e-commerce, logistics, tourism and fintech",
        "privacy": "UAE data-protection expectations you confirm with local counsel, plus NDAs before any customer data is shared",
        "web": "English and Arabic-ready websites, including RTL layouts when Arabic is in scope",
        "soft": "portals for brokerages, logistics operators and free-zone companies",
        "mobile": "bilingual apps for residents and visitors, with payments and maps planned in discovery",
        "mkt": "search and landing pages for UAE buyers, including Dubai, Abu Dhabi and Sharjah",
    },
    "saudi-arabia": {
        "name": "Saudi Arabia",
        "currency": "SAR",
        "hours": "Gulf business hours with near-complete overlap",
        "industries": "government-adjacent digital programmes, energy, logistics, retail and tourism",
        "privacy": "the Saudi Personal Data Protection Law, which your counsel confirms for each data flow",
        "web": "Arabic and English websites with RTL typography, clear Arabic URLs and accessible forms",
        "soft": "internal systems and customer portals aligned with digital-transformation programmes",
        "mobile": "bilingual iOS and Android apps, with store listings prepared in Arabic and English",
        "mkt": "Arabic and English search content for Riyadh, Jeddah and Dammam audiences",
    },
    "singapore": {
        "name": "Singapore",
        "currency": "SGD",
        "hours": "Singapore time, which overlaps most of the India working day",
        "industries": "fintech, logistics, trade, e-commerce and regional SaaS",
        "privacy": "the Personal Data Protection Act (PDPA)",
        "web": "high-trust marketing sites and customer portals for regional headquarters based in Singapore",
        "soft": "multi-entity SaaS and back-office tools used across Southeast Asia",
        "mobile": "compact product apps for logistics, fintech and consumer brands",
        "mkt": "technical SEO for Singapore and regional English search",
    },
    "germany": {
        "name": "Germany",
        "currency": "EUR",
        "hours": "Central European office hours, morning overlap with India afternoon",
        "industries": "automotive suppliers, industrial software, logistics and B2B SaaS",
        "privacy": "GDPR, with data-processing terms agreed before production data is used",
        "web": "precise B2B websites and portals, with German-language pages when your market requires them",
        "soft": "integration-heavy business software that must document data flows for your privacy counsel",
        "mobile": "field and customer apps with offline-tolerant flows where warehouse or plant use is expected",
        "mkt": "SEO for German and English queries, without claiming rankings we cannot measure yet",
    },
    "new-zealand": {
        "name": "New Zealand",
        "currency": "NZD",
        "hours": "an early-morning New Zealand overlap, agreed in the contract so stand-ups stay predictable",
        "industries": "primary industry, tourism, public-sector suppliers and retail",
        "privacy": "the New Zealand Privacy Act 2020",
        "web": "straightforward marketing sites and booking or member portals",
        "soft": "internal tools for operators who have outgrown spreadsheets",
        "mobile": "iOS and Android apps for field staff and customers",
        "mkt": "search content aimed at New Zealand buyers in Auckland and Wellington",
    },
    "qatar": {
        "name": "Qatar",
        "currency": "QAR",
        "hours": "Gulf business hours with strong overlap",
        "industries": "energy, construction, hospitality and government digital projects",
        "privacy": "Qatar's personal-data rules as confirmed by your local adviser",
        "web": "bilingual corporate sites for Doha and Lusail organisations",
        "soft": "project and vendor portals with clear approval workflows",
        "mobile": "Arabic and English apps for residents, visitors and field teams",
        "mkt": "search landing pages for Qatar buyers, written in the language your customers actually use",
    },
}

CITIES = {
    "united-states/new-york": ("New York", "finance, media, advertising technology and retail", "US Eastern mornings", "the NY SHIELD Act and, for health data, HIPAA", "secure portals, campaign sites and internal tools for Manhattan and Brooklyn teams"),
    "united-states/san-francisco": ("San Francisco", "SaaS, AI products and venture-backed startups", "a shorter, planned Pacific-time window", "CCPA/CPRA", "MVP web apps and admin tools for Bay Area product teams"),
    "united-states/los-angeles": ("Los Angeles", "entertainment, consumer brands and e-commerce", "Pacific time, with meetings clustered in the LA morning", "CCPA/CPRA", "brand sites, streaming-adjacent portals and DTC stores"),
    "united-states/chicago": ("Chicago", "trading firms, logistics and manufacturing", "Central time mornings", "US state privacy expectations you confirm with counsel", "operations dashboards, customer portals and B2B catalogs"),
    "united-states/austin": ("Austin", "startups, semiconductors and product studios", "Central time", "US privacy and security baselines you specify", "SaaS MVPs and marketing sites for Austin product teams"),
    "united-states/seattle": ("Seattle", "cloud software, retail technology and gaming", "Pacific time", "CCPA-style consumer privacy where it applies to your users", "web platforms and internal tools that sit beside AWS-heavy stacks"),
    "united-states/boston": ("Boston", "healthtech, education and life sciences", "US Eastern mornings", "HIPAA when patient data is in scope", "patient-adjacent portals and research or campus tools designed with access control"),
    "united-states/miami": ("Miami", "cross-border fintech, real estate and Latin American HQs", "US Eastern time", "US privacy rules plus any LatAm obligations your counsel flags", "bilingual marketing sites and investor or broker portals"),
    "united-kingdom/london": ("London", "fintech, professional services and marketplaces", "UK office hours", "UK GDPR and the Data Protection Act 2018", "client portals and SaaS used by City and Shoreditch teams"),
    "united-kingdom/manchester": ("Manchester", "digital agencies, media and e-commerce", "UK office hours", "UK GDPR", "storefronts, content sites and agency white-label builds"),
    "united-kingdom/birmingham": ("Birmingham", "manufacturing, logistics and professional services", "UK office hours", "UK GDPR", "supplier portals, inventory tools and corporate websites"),
    "united-kingdom/edinburgh": ("Edinburgh", "financial services, universities and tourism", "UK office hours", "UK GDPR", "secure web apps and public-facing sites for Scottish organisations"),
    "canada/toronto": ("Toronto", "banks, fintech and enterprise SaaS", "Eastern time mornings", "PIPEDA", "client portals and SaaS for teams along the downtown corridor"),
    "canada/vancouver": ("Vancouver", "games, film, cleantech and trade with Asia", "a shorter Pacific overlap", "PIPEDA and British Columbia privacy rules where they apply", "product sites, game-adjacent tools and member portals"),
    "canada/montreal": ("Montreal", "AI research, games and aerospace suppliers", "Eastern time", "Quebec privacy rules (Law 25) as your counsel defines them, plus PIPEDA", "English and French interfaces when both languages are in scope"),
    "canada/calgary": ("Calgary", "energy, logistics and industrial services", "Mountain time", "PIPEDA and Alberta privacy requirements you confirm", "field dashboards, vendor portals and corporate sites"),
    "australia/sydney": ("Sydney", "fintech, professional services and consumer brands", "the Sydney afternoon", "the Australian Privacy Principles", "member portals and marketing sites for harbour-city companies"),
    "australia/melbourne": ("Melbourne", "retail, education, sport and creative businesses", "the Melbourne afternoon", "the Australian Privacy Principles", "commerce sites, course portals and campaign landing pages"),
    "australia/brisbane": ("Brisbane", "resources services, tourism and regional HQs", "the Brisbane afternoon", "the Australian Privacy Principles", "booking tools, corporate sites and lightweight internal apps"),
    "australia/perth": ("Perth", "mining services, energy and regional trade", "a shorter Perth afternoon window, agreed up front because the time difference is larger", "the Australian Privacy Principles", "operations portals and contractor tools"),
    "united-arab-emirates/dubai": ("Dubai", "free-zone companies, real estate, logistics and tourism", "Gulf hours with near-full overlap", "UAE data-protection expectations confirmed by your adviser", "English and Arabic sites, broker portals and booking flows"),
    "united-arab-emirates/abu-dhabi": ("Abu Dhabi", "energy, government suppliers and finance", "Gulf hours", "UAE data-protection expectations confirmed by your adviser", "formal corporate sites and approval-heavy internal portals"),
    "united-arab-emirates/sharjah": ("Sharjah", "manufacturing, education and logistics", "Gulf hours", "UAE data-protection expectations confirmed by your adviser", "catalog sites, dealer portals and bilingual company pages"),
    "saudi-arabia/riyadh": ("Riyadh", "ministries' suppliers, finance and large enterprises", "Gulf hours", "the Saudi Personal Data Protection Law as your counsel applies it", "Arabic-first portals and enterprise websites"),
    "saudi-arabia/jeddah": ("Jeddah", "trade, logistics, retail and religious tourism services", "Gulf hours", "the Saudi Personal Data Protection Law as your counsel applies it", "commerce sites and customer apps for a port city"),
    "saudi-arabia/dammam": ("Dammam", "energy services, industrial suppliers and the Eastern Province", "Gulf hours", "the Saudi Personal Data Protection Law as your counsel applies it", "vendor portals and industrial corporate sites"),
    "germany/berlin": ("Berlin", "startups, marketplaces and creative technology", "Central European mornings", "GDPR", "product MVPs and German or English marketing sites"),
    "germany/munich": ("Munich", "automotive suppliers, industrial software and insurers", "Central European mornings", "GDPR", "integration-heavy business software and precise B2B sites"),
    "germany/hamburg": ("Hamburg", "logistics, media and trade", "Central European mornings", "GDPR", "tracking portals, media sites and B2B catalogs"),
    "germany/frankfurt": ("Frankfurt", "banking, payments and European HQs", "Central European mornings", "GDPR and the security reviews your bank or auditor expects", "secure dashboards and corporate sites, without us providing a financial licence"),
    "new-zealand/auckland": ("Auckland", "commerce, logistics and consumer brands", "an early Auckland morning overlap", "the Privacy Act 2020", "retail sites, booking tools and internal ops apps"),
    "new-zealand/wellington": ("Wellington", "public-sector suppliers, film and professional services", "an early Wellington morning overlap", "the Privacy Act 2020", "formal websites and workflow tools for government-adjacent teams"),
    "qatar/doha": ("Doha", "energy, hospitality and corporate headquarters", "Gulf hours", "Qatar personal-data rules confirmed by your adviser", "bilingual corporate sites and guest or staff portals"),
    "qatar/lusail": ("Lusail", "new districts, real estate and smart-city programmes", "Gulf hours", "Qatar personal-data rules confirmed by your adviser", "property portals and project-status tools"),
    "singapore/singapore": ("Singapore", "fintech, logistics, trade and regional SaaS", "Singapore hours, which overlap most of the India day", "the PDPA", "multi-market web apps and high-trust corporate sites"),
}


def ts_string(value: str) -> str:
    return '"' + value.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n") + '"'


def replace_field(block: str, field: str, value: str) -> str:
    pattern = rf'({field}: )"(?:\\.|[^"\\])*"'
    repl = rf"\1{ts_string(value)}"
    new, n = re.subn(pattern, repl, block, count=1)
    if n != 1:
        raise SystemExit(f"field {field} not replaced ({n})")
    return new


def country_copy(c: dict) -> dict[str, str]:
    name = c["name"]
    return {
        "webDevelopmentDetails": (
            f"For {name} we design and build {c['web']}. "
            f"Typical work includes a marketing site, a logged-in portal, or a rebuild that keeps existing URLs with 301 redirects. "
            f"Pages are server-rendered where it helps search and first load, with metadata, sitemaps and structured data included. "
            f"Your team reviews staging during {c['hours']}. Hosting and DNS stay in your accounts. {MARKER}"
        ),
        "softwareDevelopmentDetails": (
            f"Custom software for {name} usually means {c['soft']}. "
            f"We start with the users, the must-have workflow and the integrations (payments, CRM, accounting or internal APIs). "
            f"SaaS MVPs are commonly quoted between $15,000 and $60,000 after discovery; larger platforms are phased. "
            f"You receive architecture notes, a repository you own, and a weekly demo. {MARKER}"
        ),
        "mobileAppDetails": (
            f"Mobile work for {name} covers {c['mobile']}. "
            f"We recommend Flutter or React Native when one codebase is enough, and native Swift or Kotlin when device performance or store-specific features require it. "
            f"The engagement includes API hooks, an admin view when the product needs one, device QA, and store submission support. "
            f"You install weekly builds and sign off before release. {MARKER}"
        ),
        "digitalMarketingDetails": (
            f"Growth support for {name} is {c['mkt']}. "
            f"We fix technical SEO on the sites we build, write service pages that match how {c['industries']} buyers search, and can run paid campaigns when you want them. "
            f"We do not promise a number-one ranking. Rankings depend on competition, links and how consistently you publish. "
            f"Analytics and search-console properties stay in your name. {MARKER}"
        ),
        "processOverview": (
            f"A {name} project follows the same sequence every time. "
            f"First, a discovery call in your hours covering goals, stack, budget and compliance. "
            f"Second, a written proposal with scope, assumptions and price in {c['currency']} or USD. "
            f"Third, design review, then two-week build sprints with a staging link. "
            f"Fourth, QA, launch checklists and a handover so your team can operate the product. "
            f"NDA, MSA and IP assignment are signed before production code starts. {MARKER}"
        ),
        "commitment": (
            f"Golax India is based in Patna and works remotely with companies in {name}. "
            f"You get senior engineers, an English-speaking project contact, and a daily overlap during {c['hours']}. "
            f"Email contact@golaxindia.com with a short brief. We reply within one business day with next steps and, if useful, a mutual NDA before you share detail. {MARKER}"
        ),
        "pricingAdvantage": (
            f"Quotes for {name} are written in {c['currency']} or USD before you commit. "
            f"Marketing sites often start around $3,500. SaaS MVPs commonly fall between $15,000 and $60,000 depending on roles, integrations and design depth. "
            f"Dedicated senior engineers are billed monthly at about $25–$45 per hour equivalent. "
            f"Fixed scope suits a defined launch. Time-and-material suits a product that will change. A dedicated squad suits a long roadmap. {MARKER}"
        ),
    }


def city_sections(name: str, eco: str, hours: str, law: str, products: str) -> dict[str, str]:
    return {
        "why": (
            f"{name} companies in {eco} often need senior engineers faster than a local hire allows. "
            f"An offshore squad from Golax India can join in one to two weeks after the contract, work only on your roadmap, and scale up or down with notice. "
            f"You keep product decisions. We handle recruiting, code review and delivery. "
            f"The first call covers budget, stack and whether a fixed build or a monthly team fits. {MARKER}"
        ),
        "build": (
            f"For {name} we most often ship {products}. "
            f"That includes marketing websites, customer portals, SaaS MVPs, iOS and Android apps, and the integrations those products need. "
            f"If a standard SaaS tool already fits, we say so instead of building a custom system. "
            f"Every repository is created in your account and assigned to you in the contract. {MARKER}"
        ),
        "hours": (
            f"Meetings for {name} are booked in local time, using {hours}. "
            f"You get a shared Slack or Teams channel, a board, and a weekly demo. "
            f"Daily written updates cover what shipped, what is blocked and what is next, so a missed call does not stall the sprint. "
            f"The overlap window is written into the statement of work. {MARKER}"
        ),
        "compliance": (
            f"Work for {name} is planned around {law}. "
            f"We sign a mutual NDA before detailed discovery, then an MSA and IP assignment before coding. "
            f"Access is limited to the people on your project and removed when the engagement ends. "
            f"We do not claim a certification your counsel has not asked us to evidence. Confirm your own legal duties with a local adviser. {MARKER}"
        ),
        "engage": (
            f"{name} teams can buy a fixed-scope launch, a time-and-material runway, or a dedicated pod billed monthly. "
            f"Senior engineering is quoted around $25–$45 per hour equivalent. Websites often start near $3,500 and SaaS MVPs are usually $15,000–$60,000 after discovery. "
            f"Invoices can be raised in local currency or USD. "
            f"Email contact@golaxindia.com — we reply within one business day. {MARKER}"
        ),
        "talk": (
            f"Tell us what you want to launch in {name}, who it is for, and your target date. "
            f"A 30-minute discovery call is free. If you prefer, we sign an NDA before you share documents. "
            f"Delivery stays in Patna, India, with collaboration during {hours}. {MARKER}"
        ),
    }


def expand_countries(text: str) -> str:
    # Split keeping slug markers. Country entries use slug: "..."
    parts = re.split(r'(slug: "(?:united-states|united-kingdom|canada|australia|united-arab-emirates|saudi-arabia|singapore|germany|new-zealand|qatar)")', text)
    # parts[0] preamble, then pairs of marker, rest
    out = [parts[0]]
    i = 1
    while i < len(parts):
        marker = parts[i]
        block = parts[i + 1] if i + 1 < len(parts) else ""
        slug = re.search(r'"([^"]+)"', marker).group(1)
        # Only the location objects contain seoContent one-liners; service blocks may not.
        if slug in COUNTRIES and "webDevelopmentDetails:" in block:
            # Limit replacement to this country object: cut at next top-level country by leaving block as-is
            # The split already isolates until the next slug marker.
            copy = country_copy(COUNTRIES[slug])
            for field, value in copy.items():
                if field + ":" in block:
                    block = replace_field(block, field, value)
        out.append(marker)
        out.append(block)
        i += 2
    return "".join(out)


HEADING_KEY = (
    ("Why ", "why"),
    ("What we build", "build"),
    ("Working hours", "hours"),
    ("Compliance", "compliance"),
    ("Engagement", "engage"),
    ("Talk to us", "talk"),
)


def expand_cities(text: str) -> str:
    for key, facts in CITIES.items():
        name, eco, hours, law, products = facts
        sections = city_sections(name, eco, hours, law, products)
        # Find the object start
        m = re.search(rf'"{re.escape(key)}": \{{', text)
        if not m:
            raise SystemExit(f"missing city {key}")
        start = m.start()
        # next city key or end of record
        nxt = re.search(r'\n  "[a-z0-9-]+/[a-z0-9-]+": \{', text[m.end():])
        end = m.end() + nxt.start() if nxt else len(text)
        block = text[start:end]

        def repl_body(match: re.Match) -> str:
            heading = match.group(1)
            old = match.group(2).encode("utf-8").decode("unicode_escape") if False else match.group(2)
            # group 2 is the raw TS string content with escapes
            raw = bytes(old, "utf-8").decode("unicode_escape")
            if MARKER in raw:
                return match.group(0)
            which = None
            for prefix, sk in HEADING_KEY:
                if heading.startswith(prefix):
                    which = sk
                    break
            if not which:
                return match.group(0)
            extra = sections[which]
            combined = raw.strip() + "\n\n" + extra
            return f'heading: "{heading}",\n        body: {ts_string(combined)}'

        new_block = re.sub(
            r'heading: "([^"]+)",\s*body: "((?:\\.|[^"\\])*)"',
            repl_body,
            block,
        )
        text = text[:start] + new_block + text[end:]
    return text


def main() -> None:
    country = COUNTRY_FILE.read_text(encoding="utf-8")
    country2 = expand_countries(country)
    if country2 == country:
        raise SystemExit("country file unchanged")
    COUNTRY_FILE.write_text(country2, encoding="utf-8")
    print("countries updated", country2.count(MARKER))

    city = CITY_FILE.read_text(encoding="utf-8")
    city2 = expand_cities(city)
    CITY_FILE.write_text(city2, encoding="utf-8")
    print("city markers", city2.count(MARKER))


if __name__ == "__main__":
    main()
