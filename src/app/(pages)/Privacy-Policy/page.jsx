"use client";
import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    {
      id: "info-collect",
      title: "2. Information We Collect",
      subsections: [
        {
          title: "2.1 Information You Provide Directly",
          items: [
            {
              label: "For All Users:",
              content: [
                "Account information: Name, email address, phone number",
                "Profile information: Profile photo, bio, preferences",
                "Authentication data: Login credentials, authentication tokens",
                "Communication data: Messages, support tickets, feedback",
                "Marketing consent: Email subscription preferences",
              ],
            },
            {
              label: "For Healthcare Professionals (Doctors):",
              content: [
                "Professional credentials: NMC registration number, medical degree certificates",
                "Educational background: MBBS state, additional qualifications, specializations",
                "Work experience: Previous positions, hospital affiliations, years of experience",
                "Identity verification: Government-issued ID, registration certificates, photographs",
                "Bank account details: Account number, IFSC code, bank name (for payouts)",
                "Professional indemnity insurance details (if applicable)",
              ],
            },
            {
              label: "For Healthcare Facilities (Hospitals/Clinics):",
              content: [
                "Facility information: Hospital name, address, type, bed count, departments",
                "License information: Facility registration number, license certificates",
                "Contact person details: Name, designation, phone number, email",
                "Identity verification: Registration certificates, contact person ID proof",
                "Financial information: GST number, PAN number, bank account details",
                "Facility accreditations (NABH, NABL, etc.)",
              ],
            },
          ],
        },
        {
          title: "2.2 Information Collected Automatically",
          items: [
            {
              content: [
                "Device information: Device type, operating system, unique device identifiers",
                "Usage data: App features used, time spent, interaction patterns",
                "Location data: GPS coordinates (with your consent), IP address-based location",
                "Technical data: IP address, browser type, app version, error logs",
                "Push notification tokens: FCM tokens for sending notifications",
                "Cookies and similar technologies: Session cookies, preference cookies",
              ],
            },
          ],
        },
        {
          title: "2.3 Information from Third Parties",
          items: [
            {
              content: [
                "Social media authentication: Profile information from Google, Apple (if you use social login)",
                "Payment processors: Transaction status, payment method details (from Cashfree)",
                "Verification services: NMC registration validation data",
                "Referral sources: Information from users who refer you",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "info-use",
      title: "3. How We Use Your Information",
      subsections: [
        {
          title: "3.1 Primary Purposes",
          items: [
            {
              content: [
                "Account Management: Creating and managing your account, authentication, profile updates",
                "Platform Services: Facilitating gig postings, applications, bookings, and communications",
                "Verification: Verifying professional credentials, licenses, and identity documents",
                "Payment Processing: Processing payments, payouts, refunds, and transaction records",
                "Communication: Sending notifications, updates, and responding to inquiries",
                "Matching: Connecting healthcare professionals with suitable gig opportunities",
              ],
            },
          ],
        },
        {
          title: "3.2 Secondary Purposes",
          items: [
            {
              content: [
                "Platform Improvement: Analyzing usage patterns to enhance user experience",
                "Security: Detecting and preventing fraud, abuse, and security incidents",
                "Compliance: Meeting legal obligations, regulatory requirements, and dispute resolution",
                "Marketing: Sending promotional content (with your consent, opt-out available)",
                "Research: Conducting anonymized research and analytics",
                "Customer Support: Providing technical support and resolving issues",
              ],
            },
          ],
        },
        {
          title: "3.3 Legal Bases for Processing (DPDPA Compliance)",
          items: [
            {
              content: [
                "Consent: You have given explicit consent for specific purposes",
                "Contract Performance: Processing is necessary to fulfill our service agreement with you",
                "Legal Obligation: We must process data to comply with Indian laws",
                "Legitimate Interest: Processing is necessary for fraud prevention, security, and platform improvement",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "info-share",
      title: "4. How We Share Your Information",
      subsections: [
        {
          title: "4.1 With Other Platform Users",
          items: [
            {
              content: [
                "When you apply for a gig, hospitals see your professional profile, qualifications, and ratings",
                "When a hospital accepts your application, contact information is shared for coordination",
                "After gig completion, both parties can view ratings and reviews",
              ],
            },
          ],
        },
        {
          title: "4.2 With Service Providers",
          items: [
            {
              content: [
                "Firebase (Google): Cloud infrastructure, database, authentication, hosting",
                "Cashfree: Payment processing, payouts, refunds",
                "Google Maps: Location services, geocoding",
                "Cloud storage providers: Document and image storage",
                "Communication services: SMS, email, push notifications",
                "Analytics providers: Usage analytics and performance monitoring",
              ],
            },
          ],
        },
        {
          title: "4.3 For Legal and Safety Reasons",
          items: [
            {
              content: [
                "Compliance with legal obligations, court orders, or government requests",
                "Enforcement of our Terms of Service and user agreements",
                "Protection of our rights, property, and safety, or that of users and the public",
                "Detection and prevention of fraud, security incidents, or illegal activities",
                "Response to medical emergencies or public health requirements",
              ],
            },
          ],
        },
        {
          title: "4.4 Business Transfers",
          items: [
            {
              content: [
                "In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity. You will be notified of any such change via email or platform notification.",
              ],
            },
          ],
        },
        {
          title: "4.5 With Your Consent",
          items: [
            {
              content: [
                "We may share your information with third parties when you explicitly authorize us to do so.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "data-retention",
      title: "5. Data Retention",
      subsections: [
        {
          items: [
            {
              content: [
                "Active accounts: Data retained while account is active",
                "Inactive accounts: 3 years of inactivity before deletion",
                "Transaction records: 7 years (as per Indian accounting laws)",
                "Communication logs: 2 years",
                "Support tickets: 3 years",
                "Legal compliance data: As required by applicable laws",
                "Audit logs: 5 years for security and compliance",
              ],
            },
            {
              content: [
                "After the retention period, we securely delete or anonymize your personal information. Some information may be retained in anonymized form for analytical purposes.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "security",
      title: "6. Data Security",
      subsections: [
        {
          items: [
            {
              label: "Security Measures Include:",
              content: [
                "Encryption: Data encrypted in transit (TLS 1.3) and at rest (AES-256)",
                "Authentication: Multi-factor authentication, secure phone OTP verification",
                "Access Controls: Role-based access, principle of least privilege",
                "Firebase Security Rules: Strict database access controls",
                "Regular Audits: Security assessments and vulnerability scanning",
                "Secure Infrastructure: Firebase/Google Cloud Platform security features",
                "Employee Training: Data protection and security awareness training",
                "Incident Response: 72-hour data breach notification protocol (DPDPA compliance)",
              ],
            },
            {
              content: [
                "While we strive to protect your information, no security system is impenetrable. We cannot guarantee absolute security. Please use strong passwords and do not share your account credentials.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "your-rights",
      title: "7. Your Rights (DPDPA Compliance)",
      subsections: [
        {
          title: "7.1 Right to Access",
          items: [
            {
              content: [
                "You can request a copy of the personal information we hold about you. We will provide this in a structured, commonly used, and machine-readable format within 30 days.",
              ],
            },
          ],
        },
        {
          title: "7.2 Right to Correction",
          items: [
            {
              content: [
                "You can update or correct your personal information at any time through your profile settings or by contacting us.",
              ],
            },
          ],
        },
        {
          title: "7.3 Right to Erasure",
          items: [
            {
              content: [
                "You can request deletion of your personal information. We will comply unless we have a legitimate reason to retain it (e.g., legal obligations, ongoing disputes, transaction records).",
              ],
            },
          ],
        },
        {
          title: "7.4 Right to Withdraw Consent",
          items: [
            {
              content: [
                "Where processing is based on consent, you can withdraw consent at any time. This will not affect the lawfulness of processing before withdrawal.",
              ],
            },
          ],
        },
        {
          title: "7.5 Right to Grievance Redressal",
          items: [
            {
              content: [
                "You can raise concerns about our data practices with our Data Protection Officer or the Data Protection Board of India.",
              ],
            },
          ],
        },
        {
          title: "How to Exercise Your Rights:",
          items: [
            {
              content: [
                "Contact us at privacy@vaidya247.com with your request. We will respond within 30 days. You may need to verify your identity for security purposes.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "cookies",
      title: "8. Cookies and Tracking Technologies",
      subsections: [
        {
          title: "Types of Cookies We Use:",
          items: [
            {
              content: [
                "Essential Cookies: Required for platform functionality (authentication, security)",
                "Performance Cookies: Analyze platform usage and performance",
                "Functional Cookies: Remember your preferences and settings",
                "Analytics Cookies: Google Analytics, Firebase Analytics",
              ],
            },
            {
              content: [
                "You can control cookies through your browser settings. However, disabling certain cookies may limit platform functionality.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "children",
      title: "9. Children's Privacy",
      subsections: [
        {
          items: [
            {
              content: [
                "Vaidya247 is intended for adults aged 18 and above. We do not knowingly collect personal information from individuals under 18. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. We will delete such information promptly.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "international",
      title: "10. International Data Transfers",
      subsections: [
        {
          items: [
            {
              content: [
                "Your data is primarily stored on Firebase servers located in India (asia-south1 region). However, some service providers (e.g., Firebase/Google Cloud) may process data in other countries.",
              ],
            },
            {
              content: [
                "We ensure that any international data transfers comply with DPDPA requirements and use Standard Contractual Clauses or other approved transfer mechanisms. We will seek your explicit consent for cross-border data transfers where required by law.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "third-party",
      title: "11. Third-Party Links and Services",
      subsections: [
        {
          items: [
            {
              content: [
                "Our Platform may contain links to third-party websites or services (e.g., social media, payment gateways). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "marketing",
      title: "12. Marketing Communications",
      subsections: [
        {
          items: [
            {
              label:
                "With your consent, we may send you promotional emails, push notifications, and SMS messages about:",
              content: [
                "New gig opportunities matching your profile",
                "Platform updates and new features",
                "Special offers and promotions",
                "Educational content and tips",
              ],
            },
            {
              label: "Opt-Out Options:",
              content: [
                "Click 'Unsubscribe' in any marketing email",
                "Adjust notification preferences in app settings",
                "Contact us at support@vaidya247.com",
              ],
            },
            {
              content: [
                "Note: You cannot opt out of transactional communications (e.g., booking confirmations, payment receipts, security alerts) as these are essential to the service.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "whatsapp",
      title: "13. WhatsApp Business API Communication",
      subsections: [
        {
          items: [
            {
              label: "We may use WhatsApp Business API to send you:",
              content: [
                "Booking confirmations and updates",
                "Payment notifications",
                "Gig reminders",
                "Customer support responses",
                "Verification codes (OTP)",
              ],
            },
            {
              content: [
                "By using our Platform and providing your phone number, you consent to receive these transactional messages via WhatsApp. You can opt out of non-essential WhatsApp messages at any time by replying 'STOP' or adjusting your preferences in the app.",
              ],
            },
            {
              content: [
                "WhatsApp messages are subject to WhatsApp's Privacy Policy and Terms of Service. We do not share your WhatsApp chat content with third parties (except WhatsApp/Meta for message delivery).",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "breach",
      title: "14. Data Breach Notification",
      subsections: [
        {
          items: [
            {
              label:
                "In the event of a data breach that affects your personal information, we will:",
              content: [
                "Notify affected users within 72 hours of discovering the breach (as per DPDPA)",
                "Inform the Data Protection Board of India",
                "Provide details about the breach, affected data, and remedial actions",
                "Offer guidance on steps you can take to protect yourself",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "changes",
      title: "15. Changes to This Privacy Policy",
      subsections: [
        {
          title: "Notification of Changes:",
          items: [
            {
              content: [
                "We will update the 'Last Updated' date at the top of this policy",
                "For material changes, we will notify you via email or in-app notification",
                "Your continued use of the Platform after changes indicates acceptance",
                "If changes require new consent, we will seek it explicitly",
              ],
            },
            {
              content: [
                "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.",
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <a href="/">
          <button
            className="
      flex items-center
      text-blue-600 hover:text-blue-700
      mb-8 font-medium
      transition-transform duration-200 ease-in-out
      hover:scale-105
      active:scale-95
    "
          >
            {" "}
            <ChevronLeft size={20} className="mr-1" />
            Back to Home
          </button>
        </a>

        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
          {/* Title Section */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>

          <div className="space-y-2 mb-8 border-b pb-8">
            <p className="text-base text-gray-700">
              <span className="font-semibold">DPDPA 2023 Compliant</span> |
              YESCA Technologies Pvt Ltd, Hyderabad, Telangana, India
            </p>
            <p className="text-base text-gray-700">
              <span className="font-semibold">Effective Date:</span> November
              2024 | <span className="font-semibold">Version:</span> 1.1.0
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-gray-800 leading-relaxed">
              YESCA Technologies Pvt Ltd operates the Vaidya247 platform - a
              marketplace connecting healthcare professionals with healthcare
              facilities for temporary medical gig opportunities. We are
              committed to protecting your personal information and your right
              to privacy in compliance with the Digital Personal Data Protection
              Act, 2023 (DPDPA).
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-4">
            {sections.map((section) => (
              <div
                key={section.id}
                className="border border-gray-200 rounded-lg"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <h2 className="text-xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                  <span
                    className={`transform transition-transform ${
                      expandedSections[section.id] ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {expandedSections[section.id] && (
                  <div className="px-6 py-6 bg-white border-t border-gray-200">
                    <div className="space-y-6">
                      {section.subsections.map((subsection, idx) => (
                        <div key={idx}>
                          {subsection.title && (
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                              {subsection.title}
                            </h3>
                          )}
                          <div className="space-y-4">
                            {subsection.items.map((item, itemIdx) => (
                              <div key={itemIdx}>
                                {item.label && (
                                  <p className="font-semibold text-gray-800 mb-2">
                                    {item.label}
                                  </p>
                                )}
                                <ul className="space-y-2 ml-4">
                                  {item.content.map((point, pointIdx) => (
                                    <li
                                      key={pointIdx}
                                      className="text-gray-700 flex items-start"
                                    >
                                      <span className="text-blue-500 mr-3 font-bold">
                                        •
                                      </span>
                                      <span>{point}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              16. Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us:
            </p>

            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold">YESCA Technologies Pvt Ltd</p>
                <p className="text-sm">(Operating as Vaidya247)</p>
              </div>

              <div>
                <p className="font-semibold">Data Protection Officer:</p>
                <p>Email: support@yesca.in</p>
              </div>

              <div>
                <p className="font-semibold">Customer Support:</p>
                <p>Email: support@yesca.in</p>
                <p>Phone: +91 79953 47299</p>
                <p>Support Hours: Monday - Saturday, 9:00 AM - 6:00 PM IST</p>
              </div>

              <div>
                <p className="font-semibold">Registered Address:</p>
                <p>425, Workafella Cyber Crown, Cyber Crown, Sec-II Village,</p>
                <p>Cyber Crown, Sec-II Village,</p>
                <p>
                  HUDA Techno Enclave, Madhapur, Hyderabad,Telangana-500081.
                </p>
                <p>India</p>
              </div>

              <div>
                <p className="font-semibold">Grievance Redressal:</p>
                <p>Response Time: 30 days</p>
                <p className="text-sm">
                  If not satisfied, you may escalate to the Data Protection
                  Board of India: www.dpb.gov.in
                </p>
              </div>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-gray-900 mb-2">Acknowledgment</h3>
            <p className="text-gray-800">
              By using Vaidya247, you acknowledge that you have read,
              understood, and agree to be bound by this Privacy Policy. If you
              do not agree, please discontinue use of the Platform immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
