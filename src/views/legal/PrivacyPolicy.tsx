"use client";

import Layout from "@/components/layout/Layout";
import LegalPageHero from "@/components/shared/LegalPageHero";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <Layout>
      <LegalPageHero
        icon={Shield}
        badge="Your Privacy Matters"
        title="Privacy Policy"
        subtitle="Last Updated: January 21, 2026"
      />

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Quick Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 mb-12"
            >
              <h2 className="text-lg font-heading font-semibold text-foreground mb-4">Quick Navigation</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Information We Collect",
                  "How We Use Information",
                  "Information Sharing",
                  "Data Security",
                  "Your Rights",
                  "Contact Us"
                ].map((item, index) => (
                  <a
                    key={index}
                    href={`#section-${index + 1}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    → {item}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none mb-12"
            >
              <p className="text-muted-foreground leading-relaxed">
                At Golax India Private Limited ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in any way. By accessing or using our services, you agree to the terms of this Privacy Policy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Golax India Private Limited is an offshore software, web and mobile development company headquartered in Patna, Bihar, India. We provide IT services to startups and enterprises in the United States, United Kingdom, UAE, Canada, Australia and other international markets.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Data controller:</strong> Golax India Private Limited (Golax India Pvt Ltd), 1st Floor, Flat No-102, Sneh Highway Views, Bypass Rd, Near Jaganpura More, Nalanda Colony, Kankarbagh, Patna, Bihar 800020, India. For privacy requests contact{" "}
                <a href="mailto:contact@golaxindia.com" className="text-primary hover:underline">contact@golaxindia.com</a>.
              </p>
            </motion.div>

            {/* Section 1 */}
            <motion.div
              id="section-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">1. Information We Collect</h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground">
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Personal Information</h3>
                  <p className="mb-4">We may collect personal information that you voluntarily provide to us, including but not limited to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Name and contact information (email address, phone number, address)</li>
                    <li>Business information (company name, designation, industry)</li>
                    <li>Project requirements and specifications</li>
                    <li>Payment and billing information</li>
                    <li>Communication preferences</li>
                    <li>Any other information you choose to provide</li>
                  </ul>
                </div>

                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Automatically Collected Information</h3>
                  <p className="mb-4">When you visit our website, we automatically collect certain information, including:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on each page</li>
                    <li>Referring website addresses</li>
                    <li>Geographic location (city/country level)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>

                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Information from Third Parties</h3>
                  <p>We may receive information about you from third parties, including business partners, marketing partners, social media platforms, and publicly available sources.</p>
                </div>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              id="section-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">2. How We Use Your Information</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>We use the information we collect for various purposes, including:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Providing and maintaining our IT services",
                    "Processing transactions and sending related information",
                    "Responding to inquiries and providing customer support",
                    "Sending promotional communications (with your consent)",
                    "Improving our website and services",
                    "Analyzing usage patterns and trends",
                    "Protecting against fraudulent or illegal activity",
                    "Complying with legal obligations",
                    "Personalizing your experience on our website",
                    "Communicating about projects and deliverables"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-muted/30 rounded-lg p-4">
                      <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">{index + 1}</span>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Section 3 */}
            <motion.div
              id="section-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">3. Information Sharing and Disclosure</h2>
              </div>
              
              <div className="space-y-6 text-muted-foreground">
                <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h3 className="font-semibold text-foreground mb-2">Service Providers</h3>
                    <p>We may share information with third-party service providers who assist us in operating our website, conducting our business, or providing services to you. Typical categories include email delivery, website hosting, analytics (for example Google Analytics when enabled), customer relationship tools, and payment processors when you purchase services. Each provider is engaged for a defined purpose and should not use your data for their own marketing unless disclosed separately.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h3 className="font-semibold text-foreground mb-2">Legal Requirements</h3>
                    <p>We may disclose information if required by law, court order, or governmental regulation, or if we believe disclosure is necessary to protect our rights or the safety of others.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h3 className="font-semibold text-foreground mb-2">Business Transfers</h3>
                    <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6 py-2">
                    <h3 className="font-semibold text-foreground mb-2">With Your Consent</h3>
                    <p>We may share your information with third parties when you have given us explicit consent to do so.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 4 */}
            <motion.div
              id="section-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">4. Data Security</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Encryption", desc: "SSL/TLS encryption for data in transit" },
                    { title: "Access Controls", desc: "Role-based access to sensitive information" },
                    { title: "Regular Audits", desc: "Periodic security assessments and audits" },
                    { title: "Secure Storage", desc: "Data stored on secure, protected servers" },
                    { title: "Employee Training", desc: "Staff trained on data protection practices" },
                    { title: "Incident Response", desc: "Procedures for handling data breaches" }
                  ].map((item, index) => (
                    <div key={index} className="bg-card border border-border rounded-xl p-4">
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm bg-muted/50 rounded-lg p-4">
                  <strong>Note:</strong> While we strive to protect your personal information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security of your data.
                </p>
              </div>
            </motion.div>

            {/* Section 5 */}
            <motion.div
              id="section-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">5. Your Rights and Choices</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>You have certain rights regarding your personal information:</p>
                
                <ul className="space-y-3">
                  {[
                    { right: "Access", desc: "Request access to the personal information we hold about you" },
                    { right: "Correction", desc: "Request correction of inaccurate or incomplete information" },
                    { right: "Deletion", desc: "Request deletion of your personal information (subject to legal requirements)" },
                    { right: "Opt-out", desc: "Opt-out of receiving marketing communications at any time" },
                    { right: "Data Portability", desc: "Request a copy of your data in a structured, machine-readable format" },
                    { right: "Withdraw Consent", desc: "Withdraw consent for processing where consent was the legal basis" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 bg-muted/30 rounded-lg p-4">
                      <span className="font-semibold text-foreground min-w-[120px]">{item.right}:</span>
                      <span>{item.desc}</span>
                    </li>
                  ))}
                </ul>
                
                <p>To exercise any of these rights, please contact us using the information provided below.</p>
              </div>
            </motion.div>

            {/* International transfers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. International Data Transfers</h2>
              <p className="text-muted-foreground mb-4">
                We are based in India and serve clients in the United Kingdom, European Economic Area, Canada, Australia, the Gulf region and other countries. When you visit our website or engage our services, personal data may be processed in India and in other countries where our service providers operate.
              </p>
              <p className="text-muted-foreground mb-4">
                Where required by applicable law, we use appropriate safeguards for transfers — such as standard contractual clauses, data processing agreements, or other mechanisms your counsel recognises. You may request more information about safeguards relevant to your engagement by emailing{" "}
                <a href="mailto:contact@golaxindia.com" className="text-primary hover:underline">contact@golaxindia.com</a>.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Retention:</strong> We keep personal data only as long as needed for the purposes described in this policy, to meet legal obligations, resolve disputes and enforce agreements. Enquiry and project records are typically retained for the duration of the relationship and for a reasonable period afterward unless a longer period is required by law or contract.
              </p>
            </motion.div>

            {/* Legal basis (summary) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">7. Legal Bases for Processing (EEA / UK visitors)</h2>
              <p className="text-muted-foreground">
                Where GDPR or UK GDPR applies, we rely on one or more of the following bases: <strong className="text-foreground">contract</strong> (to respond to enquiries and deliver services you request); <strong className="text-foreground">legitimate interests</strong> (to operate and improve our website, prevent fraud and communicate about similar services, balanced against your rights); <strong className="text-foreground">consent</strong> (for non-essential cookies and certain marketing where required); and <strong className="text-foreground">legal obligation</strong> (where we must retain or disclose data). You may object to processing based on legitimate interests or withdraw consent without affecting the lawfulness of processing before withdrawal.
              </p>
            </motion.div>

            {/* Cookies Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">8. Cookies and Tracking Technologies</h2>
              </div>
              
              <div className="space-y-4 text-muted-foreground">
                <p>We use cookies and similar tracking technologies to enhance your browsing experience. For detailed information about the cookies we use, please see our <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>.</p>
                
                <p>You can control cookies through your browser settings. However, disabling certain cookies may affect the functionality of our website.</p>
              </div>
            </motion.div>

            {/* Children's Privacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">10. California Privacy Notice (CCPA / CPRA)</h2>
              <p className="text-muted-foreground mb-4">
                If you are a California resident, you may have additional rights under the California Consumer Privacy Act (CCPA) as amended by the CPRA, including the right to know categories of personal information collected, to request deletion subject to exceptions, to correct inaccurate information, and to opt out of certain sharing for cross-context behavioural advertising where applicable.
              </p>
              <p className="text-muted-foreground">
                We do not sell personal information for money. If we use analytics or advertising tools that qualify as “sharing” under California law, we will offer appropriate opt-out mechanisms when required. To exercise California rights, email{" "}
                <a href="mailto:contact@golaxindia.com" className="text-primary hover:underline">contact@golaxindia.com</a> with “California privacy request” in the subject line. We may verify your request as permitted by law. This notice is provided for transparency; whether CCPA thresholds apply to your interaction with us depends on our actual data volumes and business context — consult your counsel if you need a formal determination.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">11. Children&apos;s Privacy</h2>
              <p className="text-muted-foreground">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately, and we will take steps to delete such information.
              </p>
            </motion.div>

            {/* Changes to Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
              </p>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              id="section-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">13. Contact Us</h2>
              <p className="text-muted-foreground mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:contact@golaxindia.com" className="text-primary hover:underline">contact@golaxindia.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <a href="tel:+919128666005" className="text-primary hover:underline">+91 9128666005</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <h3 className="font-semibold text-foreground mb-2">Registered Office</h3>
                <p className="text-muted-foreground">
                  Golax India Pvt Ltd<br />
                  1st Floor, Flat No-102, Sneh Highway Views, Bypass Rd<br />
                  Near Jaganpura More, Nalanda Colony, Kankarbagh<br />
                  Patna, Bihar 800020, India
                </p>
              </div>
            </motion.div>

            {/* Related Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-wrap gap-4 justify-center"
            >
              <Link href="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/cookie-policy" className="text-primary hover:underline">Cookie Policy</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/disclaimer" className="text-primary hover:underline">Disclaimer</Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/refund-policy" className="text-primary hover:underline">Refund Policy</Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
