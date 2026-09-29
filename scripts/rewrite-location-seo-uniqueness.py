"""Rewrite city seoSections + FAQs and uniquify service×country CTAs. Idempotent."""
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CITY_FILE = ROOT / "src/data/cityPageContent.ts"
SVC_FILE = ROOT / "src/data/serviceCountryContent.ts"
SITEMAP = ROOT / "src/app/sitemap.ts"

MARKER = "Written scopes stay in your repository from the first sprint."

import importlib.util

_spec = importlib.util.spec_from_file_location(
    "expand_location_depth", ROOT / "scripts/expand-location-depth.py"
)
_mod = importlib.util.module_from_spec(_spec)
assert _spec.loader
_spec.loader.exec_module(_mod)
CITIES = _mod.CITIES
COUNTRIES = _mod.COUNTRIES

COUNTRY_FROM_CITY_KEY = {k: k.split("/")[0] for k in CITIES}

CURRENCY_LABEL = {
    "united-states": "USD",
    "united-kingdom": "GBP",
    "canada": "CAD",
    "australia": "AUD",
    "united-arab-emirates": "AED",
    "saudi-arabia": "SAR",
    "germany": "EUR",
    "new-zealand": "NZD",
    "qatar": "QAR",
    "singapore": "SGD",
}


def ts_string(value: str) -> str:
    return '"' + value.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n") + '"'


def ts_template_strings(items: list[str], indent: str) -> str:
    lines = [f"{indent}`{s.replace(chr(96), chr(92) + chr(96))}`," for s in items]
    return "\n".join(lines)


def balance_bracket_end(text: str, open_pos: int) -> int:
    """Return index after closing ] matching [ at open_pos."""
    depth = 0
    i = open_pos
    while i < len(text):
        c = text[i]
        if c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                return i + 1
        elif c == '"':
            i += 1
            while i < len(text):
                if text[i] == "\\":
                    i += 2
                    continue
                if text[i] == '"':
                    break
                i += 1
        i += 1
    raise ValueError("unbalanced brackets")


def stack_blurb(name: str, eco: str, products: str) -> str:
    eco_l = eco.lower()
    if "fintech" in eco_l or "finance" in eco_l or "bank" in eco_l:
        stacks = (
            f"Typical {name} stacks pair Next.js or React with a typed API in Node or .NET, PostgreSQL for core data, "
            "and structured audit logs when your compliance team reviews access. We prefer infrastructure in your cloud account."
        )
    elif "saas" in eco_l or "ai" in eco_l or "startup" in eco_l:
        stacks = (
            f"{name} SaaS and AI-adjacent builds often use Next.js, a Node or Python API, PostgreSQL or a managed document store, "
            "and Stripe or Paddle when subscriptions are in scope. Feature flags and staging environments are set up in sprint one."
        )
    elif "health" in eco_l or "life sciences" in eco_l:
        stacks = (
            f"Health-adjacent work for {name} usually means role-based access, encrypted transport, and React or Next.js front ends "
            "talking to hardened APIs — with HIPAA or local health-privacy constraints documented before real patient data is used."
        )
    elif "logistics" in eco_l or "manufacturing" in eco_l or "energy" in eco_l:
        stacks = (
            f"Operations software around {name} often combines React dashboards, Node or Java APIs, and integrations to ERP, "
            "WMS or field devices. Offline-tolerant mobile views are scoped when warehouse or plant use is expected."
        )
    elif "real estate" in eco_l or "tourism" in eco_l or "hospitality" in eco_l:
        stacks = (
            f"Customer-facing {name} products frequently use Next.js for SEO, a headless CMS your marketing team can edit, "
            "and payment or booking APIs. Arabic or bilingual layouts use RTL-safe components when that market needs them."
        )
    elif "game" in eco_l or "media" in eco_l or "entertainment" in eco_l:
        stacks = (
            f"For {name} media and consumer brands we often ship Next.js or Astro marketing sites, CDN-friendly assets, "
            "and lightweight portals backed by Node or serverless functions when campaign traffic spikes."
        )
    else:
        stacks = (
            f"We match stack to your team: common choices for {name} are TypeScript, React or Next.js, Node or Python APIs, "
            f"and PostgreSQL — tuned for {products} rather than a generic template."
        )
    return stacks


def seo_sections_for_city(key: str) -> list[tuple[str, str]]:
    name, eco, hours, law, products = CITIES[key]
    country = COUNTRY_FROM_CITY_KEY[key]
    currency = CURRENCY_LABEL.get(country, "USD")
    c = COUNTRIES.get(country, {})
    country_name = c.get("name", country.replace("-", " "))

    sections: list[tuple[str, str]] = []

    sections.append(
        (
            f"Technology stacks for {name} projects",
            stack_blurb(name, eco, products),
        )
    )

    sections.append(
        (
            f"From first email to kickoff in {name}",
            (
                f"Most {name} engagements start with a short email to contact@golaxindia.com — we reply within 24 hours on business days. "
                f"A free 30-minute discovery call follows, usually in {hours}. "
                "If you need an NDA before sharing architecture diagrams, we sign that next. "
                + (
                    f"We then send a written proposal with scope, assumptions and pricing in {currency}. "
                    if currency == "USD"
                    else f"We then send a written proposal with scope, assumptions and pricing in {currency} or USD. "
                )
                + "After MSA and IP assignment, engineers join within about one to two weeks and sprint planning uses your backlog."
            ),
        )
    )

    sections.append(
        (
            f"First sprint deliverables for {name} teams",
            (
                f"Sprint one for {name} clients typically lands a repo in your Git organisation, CI running on your chosen host, "
                f"and a staging URL your stakeholders can click. For {products}, that often means auth scaffolding or a CMS shell, "
                "core navigation, and one vertical slice of the highest-risk workflow. "
                f"You review during {hours} and we adjust backlog order for sprint two — no surprise scope without a change note."
            ),
        )
    )

    invoice_line = (
        f"Invoices are raised in {currency}."
        if currency == "USD"
        else f"Invoices are raised in {currency} or USD for {country_name} buyers."
    )
    billing_body = (
        f"{name} clients can choose fixed-scope delivery, time-and-material, or a dedicated monthly pod. "
        f"Senior engineering is commonly quoted around $25–$45 per hour equivalent; websites often start near $3,500 and "
        f"SaaS MVPs are usually $15,000–$60,000 after discovery. {invoice_line} "
        f"Email contact@golaxindia.com for a written quote — we aim to reply within 24 hours on business days. {MARKER}"
    )
    sections.append(
        (
            f"Billing and contracts for {name}",
            billing_body,
        )
    )

    sections.append(
        (
            f"Security and data handling in {name}",
            (
                f"Engagements touching {name} users are planned around {law}. "
                "We limit production access to named engineers, use your SSO when available, and remove credentials when the project ends. "
                "We do not claim certifications your counsel has not asked us to evidence — your local adviser confirms statutory duties. "
                "Mutual NDA, MSA and IP assignment are signed before production code."
            ),
        )
    )

    sections.append(
        (
            f"Start your {name} build with Golax India",
            (
                f"Tell us what you want to ship in {name}, who will use it, and your target launch window. "
                f"Delivery stays in Patna, India, with live collaboration during {hours}. "
                "Book a discovery call or email contact@golaxindia.com — we reply within 24 hours on business days. "
                f"Sprint goals and acceptance criteria are tracked in your repository so product and engineering stay aligned."
            ),
        )
    )

    return sections


def faqs_for_city(key: str) -> list[tuple[str, str]]:
    name, eco, hours, law, products = CITIES[key]
    country = COUNTRY_FROM_CITY_KEY[key]
    currency = CURRENCY_LABEL.get(country, "USD")

    return [
        (
            f"Do you have an office in {name}?",
            "No. We work remotely from India. We meet you by video and can travel for workshops if your project needs it.",
        ),
        (
            f"What does it cost to hire from India for a {name} company?",
            (
                f"Senior engineers are commonly around $25–$45 per hour equivalent, billed in {currency}"
                + ("." if currency == "USD" else " or USD.")
                + " Websites often start near $3,500 and SaaS MVPs are usually scoped between $15,000 and $60,000 after discovery."
            ),
        ),
        (
            "How quickly does Golax India reply to project enquiries?",
            "We reply within 24 hours on business days — email contact@golaxindia.com or use the contact form on golaxindia.com.",
        ),
        (
            f"What timezone overlap do you offer for {name}?",
            (
                f"Meetings are booked in {name} local time, using {hours}. "
                "Daily written updates and a shared board keep work moving if a call is missed."
            ),
        ),
        (
            f"Who owns the code and IP for {name} projects?",
            (
                "Your company owns the work product. Repositories are created in your account, and IP assignment is signed "
                "before we write production code. Handover includes credentials and documentation your team needs to operate the system."
            ),
        ),
    ]


def format_faqs(faqs: list[tuple[str, str]]) -> str:
    parts = ["    faqs: ["]
    for q, a in faqs:
        parts.append("      {")
        parts.append(f'        question: {ts_string(q)},')
        parts.append(f'        answer: {ts_string(a)},')
        parts.append("      },")
    parts.append("    ],")
    return "\n".join(parts)


def format_seo_sections(sections: list[tuple[str, str]]) -> str:
    parts = ["    seoSections: ["]
    for heading, body in sections:
        parts.append("      {")
        parts.append(f"        heading: {ts_string(heading)},")
        parts.append(f"        body: {ts_string(body)},")
        parts.append("      },")
    parts.append("    ],")
    return "\n".join(parts)


def singapore_intro_fix() -> tuple[str, list[str], list[str]]:
    intro_heading = "Why Singapore companies choose an offshore team"
    intro = [
        "Singapore salaries and office costs make small engineering benches expensive. Golax India adds senior capacity with strong SGT overlap so product teams can ship without waiting on a long local hire cycle.",
        "Businesses in Singapore commonly work in fintech, logistics, trade and regional SaaS. We build customer-facing websites, SaaS products, mobile apps, e-commerce stores, internal tools, and integrations with the systems you already use.",
        "Singapore hours overlap most of the India working day. Meetings happen in Singapore time. We use Slack or Teams, a shared board and weekly demos.",
        "For Singapore we plan around the Personal Data Protection Act (PDPA). We sign NDA, MSA and IP assignment before starting.",
        "Engagement options: Fixed-scope project for a defined build. Time-and-material for evolving products. Dedicated team billed monthly. NDA, MSA and IP assignment are signed before work starts.",
    ]
    local_focus = [
        "fintech",
        "logistics",
        "trade",
        "regional SaaS",
        "Timezone overlap for live collaboration",
        "NDA · MSA · IP assignment",
    ]
    return intro_heading, intro, local_focus


def replace_city_block(text: str, key: str) -> str:
    m = re.search(rf'  "{re.escape(key)}": \{{', text)
    if not m:
        raise SystemExit(f"missing city {key}")
    start = m.start()
    nxt = re.search(r'\n  "[a-z0-9-]+/[a-z0-9-]+": \{', text[m.end() :])
    end = m.end() + nxt.start() if nxt else text.find("\n};", m.end())
    block = text[start:end]

    faqs_m = re.search(r"    faqs: \[", block)
    if not faqs_m:
        raise SystemExit(f"no faqs in {key}")
    faqs_start = faqs_m.start()
    faqs_open = block.index("[", faqs_m.end() - 1)
    faqs_end = balance_bracket_end(block, faqs_open)

    seo_m = re.search(r"    seoSections: \[", block)
    if not seo_m:
        raise SystemExit(f"no seoSections in {key}")
    seo_open = block.index("[", seo_m.end() - 1)
    seo_end = balance_bracket_end(block, seo_open)

    new_faqs = format_faqs(faqs_for_city(key))
    new_seo = format_seo_sections(seo_sections_for_city(key))

    tail = block[seo_end:]
    if tail.startswith(","):
        tail = tail[1:]
    block = block[:faqs_start] + new_faqs + "\n" + new_seo + tail

    if key == "singapore/singapore":
        intro_heading, intro, local_focus = singapore_intro_fix()
        block = re.sub(
            r"    introHeading: \"[^\"]*\",",
            f'    introHeading: {ts_string(intro_heading)},',
            block,
            count=1,
        )
        intro_block = "    intro: [\n" + ts_template_strings(intro, "      ") + "\n    ],"
        block = re.sub(r"    intro: \[[\s\S]*?\],", intro_block, block, count=1)
        lf_block = "    localFocus: [\n" + ts_template_strings(local_focus, "      ") + "\n    ],"
        block = re.sub(r"    localFocus: \[[\s\S]*?\],", lf_block, block, count=1)

    return text[:start] + block + text[end:]


def rewrite_cities(text: str) -> tuple[str, int]:
    for key in CITIES:
        text = replace_city_block(text, key)
    marker_count = text.count(MARKER)
    return text, len(CITIES)


SERVICE_LABEL = {
    "web-development": "web development",
    "software-development": "software and SaaS development",
    "mobile-app-development": "mobile app development",
    "digital-marketing": "digital marketing and seo",
    "it-consulting": "it consulting and cloud",
}

COUNTRY_DISPLAY = {
    "united-states": "United States",
    "united-kingdom": "United Kingdom",
    "united-arab-emirates": "United Arab Emirates",
    "australia": "Australia",
    "canada": "Canada",
    "singapore": "Singapore",
    "germany": "Germany",
}

TIMEZONE_BLURB = {
    "united-states": "US Eastern mornings and a planned Pacific window when your team sits on the West Coast",
    "united-kingdom": "UK office hours with roughly three to four hours of overlap",
    "united-arab-emirates": "Gulf business hours with near-full overlap with India",
    "australia": "Australian afternoon slots that line up with India mornings",
    "canada": "Toronto mornings with a shorter Pacific overlap for Vancouver teams",
    "singapore": "Singapore time across most of the India working day",
    "germany": "Central European mornings overlapping India afternoons",
}

CTA_TEMPLATES = {
    "web-development": (
        "Need a {service} quote for {country}? Email contact@golaxindia.com with your sitemap or redesign brief — "
        "we respond within 24 hours on business days with {currency} pricing and a suggested meeting window for {tz}. "
        "You can also reach us via golaxindia.com/contact or the {path} page. NDA, MSA and IP assignment are signed before we touch production code."
    ),
    "software-development": (
        "Planning {service} for {country}? Write to contact@golaxindia.com with your product outline and integration list — "
        "replies land within 24 hours on business days, including {currency} options and overlap for {tz}. "
        "Use golaxindia.com/contact or {path} to start. Contracts include NDA, MSA and IP assignment ahead of the first sprint."
    ),
    "mobile-app-development": (
        "For {service} in {country}, send store targets and device list to contact@golaxindia.com — "
        "we answer within 24 hours on business days with {currency} estimates and demo slots aligned to {tz}. "
        "The {path} page and golaxindia.com/contact both reach the same team. NDA, MSA and IP assignment precede TestFlight or Play builds."
    ),
    "digital-marketing": (
        "Want {service} support in {country}? Email contact@golaxindia.com with your site URL and goals — "
        "expect a reply within 24 hours on business days, {currency} packaging options, and calls scheduled for {tz}. "
        "Start from golaxindia.com/contact or {path}. NDA and IP terms are agreed before we access analytics or ad accounts."
    ),
    "it-consulting": (
        "Book {service} for {country} by mailing contact@golaxindia.com with your environment diagram — "
        "we respond within 24 hours on business days with {currency} assessment pricing and workshop times for {tz}. "
        "Use {path} or golaxindia.com/contact. NDA, MSA and IP assignment are in place before production changes."
    ),
}

WHY_OPENING_VARIANTS = {
    "web-development": {
        "united-states": "Fully loaded US web engineers often sit in a higher hourly band than offshore delivery. Teams in the United States working in SaaS, healthcare, fintech, e-commerce and B2B services bring in Golax India when hiring cycles slow launches.",
        "united-kingdom": "UK agency day rates for web work are commonly steep relative to offshore benches. Organisations in the United Kingdom — fintech, e-commerce, healthcare, property and professional services — use us to ship sites and portals without pausing roadmaps.",
        "united-arab-emirates": "UAE buyers frequently compare agency retainers with offshore web delivery. Companies in the United Arab Emirates across real estate, e-commerce, logistics, tourism and fintech add capacity while keeping Arabic/English experiences on brand.",
        "australia": "Australian web agencies are often priced above offshore teams for the same throughput. Fintech, resources, healthcare, education and retail businesses in Australia use Golax India to keep Core Web Vitals and CMS work moving.",
        "canada": "Canadian product companies report long searches for senior web engineers. Fintech, AI, cleantech, gaming, energy and e-commerce teams in Canada use offshore delivery for marketing sites and logged-in portals.",
        "singapore": "Singapore web talent is competitive and costly to bench. Fintech, logistics, trade, e-commerce and regional SaaS firms in Singapore engage us for SGD-priced delivery with SGT overlap.",
        "germany": "German B2B sites demand precision; local senior web capacity is not always available on short notice. Automotive, manufacturing, logistics, finance and platform companies in Germany use offshore squads for accessible, fast sites.",
    },
    "software-development": {
        "united-states": "US SaaS and platform engineers are expensive to hire and retain. Product companies in the United States — SaaS, healthcare, fintech, e-commerce and B2B services — extend engineering with Golax India instead of freezing features.",
        "united-kingdom": "UK scale-ups often wait months for senior backend hires. Fintech, e-commerce, healthcare, property and professional services firms in the United Kingdom add an offshore squad for APIs, workflows and admin tools.",
        "united-arab-emirates": "UAE enterprises modernise quickly; local software headcount may lag demand. Real estate, logistics, tourism and fintech operators in the United Arab Emirates use us for custom platforms and integrations.",
        "australia": "Australian SaaS teams face timezone-friendly hiring pressure. Mining services, fintech, healthcare, education and retail companies in Australia offshore product engineering to keep release cadence.",
        "canada": "Canadian founders stretch runway by mixing local product leadership with offshore build capacity. AI, cleantech, gaming, energy and e-commerce companies in Canada use Golax India for SaaS MVPs and internal tools.",
        "singapore": "Singapore SaaS salaries push burn rates up. Regional fintech, logistics and trade platforms in Singapore partner with us for PDPA-aware product delivery in SGD.",
    },
    "mobile-app-development": {
        "united-states": "US mobile specialists are among the hardest roles to fill quickly. SaaS, healthcare, fintech and consumer brands in the United States offshore iOS and Android work to ship store builds on schedule.",
        "united-kingdom": "UK agencies quote premium rates for dual-store delivery. Fintech, retail and healthcare product teams in the United Kingdom use Golax India for Flutter, React Native or native builds with GBP billing.",
        "united-arab-emirates": "UAE consumer apps often need bilingual UX; local mobile capacity can be scarce. Real estate, tourism and fintech companies in the United Arab Emirates offshore app sprints with Gulf-hour collaboration.",
        "australia": "Australian apps must pass strict store review; hiring both iOS and Android seniors takes time. Fintech, resources and retail brands in Australia use us for weekly TestFlight and Play builds.",
    },
    "digital-marketing": {
        "united-states": "US retainers for technical SEO and landing-page work add up fast. SaaS, healthcare, fintech and e-commerce marketers in the United States use Golax India for fixes on sites we build or inherit.",
        "united-kingdom": "UK search competition rewards fast technical fixes; specialist contractors are not always available. Fintech, property and e-commerce teams in the United Kingdom outsource SEO implementation and content support.",
        "united-arab-emirates": "UAE campaigns often need Arabic and English landing pages at pace. Real estate, tourism and e-commerce brands in the United Arab Emirates use offshore delivery for on-page SEO and analytics setup.",
    },
    "it-consulting": {
        "united-states": "US cloud assessments and remediations compete with product roadmaps for the same senior engineers. SaaS, healthcare and fintech operators in the United States use Golax India for architecture reviews and implementation sprints.",
        "united-kingdom": "UK teams modernising Azure or AWS stacks need senior help without permanent headcount. Fintech, property and professional services firms in the United Kingdom engage us for assessments and phased migrations.",
        "singapore": "Singapore regulated buyers expect documented cloud changes. Fintech, logistics and SaaS companies in Singapore use Golax India for SGT-aligned consulting and DevOps retainers billed in SGD.",
    },
}


def rewrite_service_country(text: str) -> tuple[str, int]:
    cta_old = (
        "Email contact@golaxindia.com for a quote in your billing currency — "
        "we reply within 24 hours on business days. NDA, MSA and IP assignment are signed before work starts."
    )
    cta_before = text.count(cta_old)

    def repl_cta(match: re.Match) -> str:
        heading = match.group(1)
        # infer service/country from heading like "Book a discovery call for web development in United Kingdom"
        hm = re.search(
            r"Book a discovery call for (.+?) in (.+)$",
            heading,
        )
        if not hm:
            return match.group(0)
        service_phrase = hm.group(1).strip()
        country_name = hm.group(2).strip()
        service_slug = None
        for slug, label in SERVICE_LABEL.items():
            if label == service_phrase or service_phrase.startswith(label):
                service_slug = slug
                break
        if not service_slug:
            for slug, label in SERVICE_LABEL.items():
                if label.replace(" and ", " ") in service_phrase:
                    service_slug = slug
                    break
        country_slug = None
        for slug, disp in COUNTRY_DISPLAY.items():
            if disp == country_name:
                country_slug = slug
                break
        if not service_slug or not country_slug:
            return match.group(0)
        currency = CURRENCY_LABEL.get(country_slug, "USD")
        tz = TIMEZONE_BLURB.get(country_slug, "your local business hours")
        path = f"/services/{service_slug}/global/{country_slug}"
        tpl = CTA_TEMPLATES[service_slug]
        body = tpl.format(
            service=service_phrase,
            country=country_name,
            currency=currency,
            tz=tz,
            path=path,
        )
        return f'heading: {ts_string(heading)},\n        body: {ts_string(body)}'

    text = re.sub(
        r'heading: "([^"]*Book a discovery call[^"]*)",\s*body: "Email contact@golaxindia\.com for a quote in your billing currency — we reply within 24 hours on business days\. NDA, MSA and IP assignment are signed before work starts\."',
        repl_cta,
        text,
    )

    old_why_tail = "use an offshore team to add capacity without a long hiring cycle."
    for service_slug, by_country in WHY_OPENING_VARIANTS.items():
        for country_slug, opening in by_country.items():
            country_name = COUNTRY_DISPLAY[country_slug]
            service_label = SERVICE_LABEL[service_slug]
            heading_pat = (
                f"Why {country_name} companies outsource {re.escape(service_label)}"
            )
            pattern = (
                rf'(heading: "{heading_pat}",\s*body: )"'
                rf'(?:\\.|[^"\\])*"'
            )
            text, n = re.subn(
                pattern,
                lambda m, o=opening: f'{m.group(1)}{ts_string(o)}',
                text,
                count=1,
            )
            if n == 0 and service_slug == "software-development":
                alt = f"Why {country_name} companies outsource software and SaaS development"
                pattern2 = rf'(heading: "{re.escape(alt)}",\s*body: )"(?:\\.|[^"\\])*"'
                text, _ = re.subn(
                    pattern2,
                    lambda m, o=opening: f'{m.group(1)}{ts_string(o)}',
                    text,
                    count=1,
                )

    # Any remaining duplicate why closings (e.g. heading casing mismatches)
    def repl_old_why(match: re.Match) -> str:
        heading = match.group(1)
        for service_slug, label in SERVICE_LABEL.items():
            if label not in heading.lower():
                continue
            for country_slug, disp in COUNTRY_DISPLAY.items():
                if disp not in heading:
                    continue
                opening = WHY_OPENING_VARIANTS.get(service_slug, {}).get(country_slug)
                if opening:
                    return f'heading: "{heading}",\n        body: {ts_string(opening)}'
        return match.group(0)

    text = re.sub(
        rf'heading: "(Why [^"]+)",\s*body: "[^"]*{re.escape(old_why_tail)}"',
        repl_old_why,
        text,
    )

    cta_after = text.count(cta_old)
    return text, cta_before - cta_after


def bump_sitemap(text: str) -> str:
    return re.sub(
        r'const contentUpdated = new Date\("[^"]+"\);',
        'const contentUpdated = new Date("2026-09-29");',
        text,
        count=1,
    )


def main() -> None:
    city_text = CITY_FILE.read_text(encoding="utf-8")
    city_new, city_n = rewrite_cities(city_text)
    markers = city_new.count(MARKER)
    if markers != len(CITIES):
        print(f"warning: expected {len(CITIES)} markers, got {markers}")
    CITY_FILE.write_text(city_new, encoding="utf-8")
    print(f"cities rewritten: {city_n}")

    svc_text = SVC_FILE.read_text(encoding="utf-8")
    svc_new, cta_n = rewrite_service_country(svc_text)
    SVC_FILE.write_text(svc_new, encoding="utf-8")
    print(f"service×country CTAs uniqued: {cta_n}")

    sm = SITEMAP.read_text(encoding="utf-8")
    SITEMAP.write_text(bump_sitemap(sm), encoding="utf-8")
    print("sitemap lastModified -> 2026-09-29")


if __name__ == "__main__":
    main()
