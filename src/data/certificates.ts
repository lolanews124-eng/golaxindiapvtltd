export interface CompanyRegistration {
  legalName: string;
  cin: string;
  gstin: string;
  tan: string;
  pan: string;
  incorporationDate: string;
  companyType: string;
  registeredAddress: string[];
  mcaVerifyUrl: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  standard: string;
  issuer: string;
  certificateNumber: string;
  issuedOn: string;
  validThrough?: string;
  scope?: string;
  imageSrc: string;
  verifyUrl?: string;
}

/** Official MCA / tax identifiers for Golax India Private Limited */
export const companyRegistration: CompanyRegistration = {
  legalName: "GOLAX INDIA PRIVATE LIMITED",
  cin: "U42102BR2025PTC079250",
  gstin: "10AAMCG4053A1ZA",
  tan: "PTNG16445C",
  pan: "AAMCG4053A",
  incorporationDate: "25 September 2025",
  companyType: "Company limited by shares",
  registeredAddress: [
    "5/B, Anand Palace, New Bypass, Kankarbagh",
    "Ashok Nagar (Patna), Sampatchak",
    "Patna — 800020, Bihar, India",
  ],
  mcaVerifyUrl: "https://www.mca.gov.in/",
};

export const certificates: CertificateItem[] = [
  {
    id: "incorporation",
    title: "Certificate of Incorporation",
    standard: "Companies Act, 2013",
    issuer: "Ministry of Corporate Affairs — Central Registration Centre",
    certificateNumber: "CIN U42102BR2025PTC079250",
    issuedOn: "25 September 2025",
    scope:
      "Official incorporation of Golax India Private Limited as a company limited by shares, registered with the Registrar of Companies.",
    imageSrc: "/certificates/certificate-of-incorporation.png",
    verifyUrl: "https://www.mca.gov.in/",
  },
  {
    id: "startup-india",
    title: "Startup India — Certificate of Recognition",
    standard: "DPIIT Startup Recognition",
    issuer: "Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry",
    certificateNumber: "DIPP225612",
    issuedOn: "14 October 2025",
    validThrough: "24 September 2035",
    scope:
      "Recognised startup in the IT Services industry (Application Development sector). Valid for up to ten years from incorporation, subject to turnover not exceeding ₹100 Cr in any financial year.",
    imageSrc: "/certificates/startup-india-recognition.png",
    verifyUrl: "https://www.startupindia.gov.in/",
  },
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    standard: "Quality Management System",
    issuer: "MQA Certification Services (UKAF accredited)",
    certificateNumber: "QMS/25M05771",
    issuedOn: "18 November 2025",
    validThrough: "17 November 2028",
    scope:
      "Information technology and computer service activities, including design, development, customization, support and maintenance of software applications, digital platforms and cloud-based systems, plus e-commerce and technology-based digital solutions.",
    imageSrc: "/certificates/iso-9001.png",
    verifyUrl: "https://www.mqacertification.com",
  },
  {
    id: "iso-27001",
    title: "ISO/IEC 27001:2022",
    standard: "Information Security Management System",
    issuer: "MQA Certification Services (UKAF accredited)",
    certificateNumber: "ISMS/25M05772",
    issuedOn: "18 November 2025",
    validThrough: "17 November 2028",
    scope:
      "Information security management for IT and computer service activities — software applications, digital platforms, cloud-based systems and technology-based digital solutions delivered for clients.",
    imageSrc: "/certificates/iso-27001.png",
    verifyUrl: "https://www.mqacertification.com",
  },
];
