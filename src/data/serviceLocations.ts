export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  features: string[];
  technologies: string[];
}

export const services: ServiceData[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    icon: "Globe",
    description: "Custom websites and web applications built with modern technologies",
    features: [
      "Custom Website Design & Development",
      "E-commerce Solutions (Shopify, WooCommerce, Custom)",
      "Progressive Web Apps (PWA)",
      "Content Management Systems (WordPress, Custom CMS)",
      "Web Portal Development",
      "API Development & Integration",
      "Responsive Web Design",
      "Landing Page Development",
    ],
    technologies: ["React", "Next.js", "Node.js", "PHP", "WordPress", "Shopify", "Tailwind CSS", "TypeScript"],
  },
  {
    slug: "software-development",
    title: "Software Development",
    shortTitle: "Software Development",
    icon: "Code",
    description: "Custom software solutions to automate and optimize business processes",
    features: [
      "Custom Enterprise Software",
      "ERP & CRM Solutions",
      "Business Process Automation",
      "Legacy System Modernization",
      "Database Design & Management",
      "Software Integration Services",
      "Inventory Management Systems",
      "Billing & Accounting Software",
    ],
    technologies: ["Java", "Python", ".NET", "Node.js", "PostgreSQL", "MongoDB", "MySQL", "Redis"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    icon: "Smartphone",
    description: "Native and cross-platform mobile apps for iOS and Android",
    features: [
      "iOS App Development (Swift)",
      "Android App Development (Kotlin)",
      "Cross-Platform Apps (React Native, Flutter)",
      "Mobile UI/UX Design",
      "App Store Optimization",
      "App Maintenance & Support",
      "Push Notification Integration",
      "Mobile Payment Integration",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo", "iOS", "Android"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    shortTitle: "Digital Marketing",
    icon: "TrendingUp",
    description: "Data-driven marketing strategies to grow your online presence",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising (PPC)",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Google My Business Optimization",
      "Online Reputation Management",
      "Conversion Rate Optimization",
    ],
    technologies: ["Google Ads", "Facebook Ads", "SEMrush", "Google Analytics", "Mailchimp", "Ahrefs", "Canva"],
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    shortTitle: "SEO",
    icon: "Search",
    description: "Professional search engine optimization to rank higher on Google",
    features: [
      "Local SEO Optimization",
      "On-Page SEO",
      "Off-Page SEO & Link Building",
      "Technical SEO Audit",
      "Keyword Research & Strategy",
      "Content Optimization",
      "Google My Business Management",
      "Monthly SEO Reporting",
    ],
    technologies: ["Google Search Console", "SEMrush", "Ahrefs", "Moz", "Screaming Frog", "Google Analytics"],
  },
  {
    slug: "it-consulting",
    title: "IT Consulting & Cloud Services",
    shortTitle: "IT Consulting",
    icon: "Cloud",
    description: "Expert guidance on technology strategy and cloud infrastructure",
    features: [
      "Cloud Migration (AWS, Azure, GCP)",
      "IT Infrastructure Assessment",
      "Technology Roadmap Planning",
      "Cybersecurity Consulting",
      "DevOps Implementation",
      "Managed IT Services",
      "IT Support & Maintenance",
      "Data Backup & Recovery",
    ],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
