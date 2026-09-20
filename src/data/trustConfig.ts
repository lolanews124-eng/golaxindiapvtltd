/**
 * Trust / E-E-A-T placeholders — fill only with verified data.
 * Leave arrays empty until you have approved case studies, logos, reviews.
 */

export interface CaseStudyPlaceholder {
  /** Client name or approved anonymized label */
  clientLabel: string;
  problem: string;
  solution: string;
  stack: string[];
  /** Only include results you can verify */
  result?: string;
  linkedInUrl?: string;
}

export interface TeamMemberPlaceholder {
  name: string;
  role: string;
  linkedInUrl?: string;
  bio?: string;
}

export interface TestimonialPlaceholder {
  quote: string;
  authorName: string;
  authorRole: string;
  company: string;
  linkedInUrl?: string;
}

export interface ReviewPlatformLink {
  name: "Clutch" | "GoodFirms" | "LinkedIn" | "Google";
  url: string;
}

export const trustConfig = {
  caseStudies: [] as CaseStudyPlaceholder[],
  team: [
    {
      name: "Vinay Bhaskar",
      role: "Founder",
      linkedInUrl: "", // add real profile URL when ready
    },
    {
      name: "Deepak Bharti",
      role: "CEO",
      linkedInUrl: "",
    },
    {
      name: "Shekhar Sahani",
      role: "CTO",
      linkedInUrl: "",
    },
  ] as TeamMemberPlaceholder[],
  testimonials: [] as TestimonialPlaceholder[],
  clientLogos: [] as { name: string; src: string; href?: string }[],
  reviewPlatforms: [] as ReviewPlatformLink[],
  /**
   * Claims previously shown on the marketing site that need human verification.
   * Do not re-enable in UI until confirmed.
   */
  unverifiedClaimsToReview: [
    "50+ Happy Clients (homepage)",
    "150+ Projects Delivered (homepage)",
    "4.9/5 Rating (homepage)",
    "4.8/5 Client Rating (homepage)",
    "40–60% below US rates (homepage)",
    "15,000+ downloads (portfolio preview)",
    "40% cost cut / hosting (portfolio preview)",
    "Named testimonials (Michael Torres, Sarah Mitchell, James Chen) — removed as unverified",
    "ISO 9001 / ISO 27001 — confirm certificate scope and visibility on /certificates before citing in ads",
    "Hourly band $25–$45 — confirm current commercial policy before publishing as a hard rate",
  ],
};
