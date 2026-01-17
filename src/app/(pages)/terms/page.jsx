"use client";
import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";

export default function TermsConditions() {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using the Vaidya247 platform operated by YESCA Technologies Pvt Ltd, you accept and agree to be legally bound by these Terms of Service. If you do not agree to these terms, you must immediately discontinue use of our services. Your continued use constitutes acceptance of any future modifications.",
    },
    {
      id: "platform",
      title: "2. Platform Description",
      items: [
        "2.1 Nature of Service: Vaidya247 is a technology marketplace platform that connects healthcare professionals (doctors) with healthcare facilities (hospitals/clinics) for temporary medical gig opportunities.",
        "2.2 Platform Role: Vaidya247 is NOT an employer or staffing agency. We do NOT employ doctors or hospital staff. We act solely as a technology intermediary. All relationships are independent contractor relationships.",
        "2.3 Terminology: The term 'gig' (not 'job') reinforces the independent contractor nature of opportunities. This is not employment.",
      ],
    },
    {
      id: "eligibility",
      title: "3. Eligibility",
      items: [
        "Be at least 18 years of age",
        "Be a resident of India",
        "Have the legal capacity to enter into binding contracts",
        "Provide accurate and complete registration information",
        "Maintain the security of your account credentials",
        "For Doctors: Valid NMC registration, active medical license, professional indemnity insurance (recommended)",
        "For Hospitals: Valid facility registration, authorized representative, compliance with healthcare regulations",
      ],
    },
    {
      id: "government-doctors",
      title: "3.3 Compliance Requirements for Government-Employed Doctors",
      content:
        "Healthcare professionals employed by government organizations must ensure full compliance with applicable service rules. You are strictly prohibited from accepting duties during official government working hours. You must comply with all 'No Private Practice' rules and obtain necessary approvals from competent authorities.",
      footer:
        "Platform Disclaimer: YESCA Technologies and Vaidya247 are NOT responsible for monitoring government service rules. Users bear sole responsibility for compliance.",
    },
    {
      id: "private-doctors",
      title:
        "3.4 Compliance Requirements for Private Hospital-Employed Doctors",
      content:
        "Doctors employed by private hospitals must verify contractual permissions before accepting external duties. You must thoroughly review your employment contract for exclusivity clauses and obtain explicit written permission from your employer if restrictions exist.",
      footer:
        "The platform is NOT liable for disputes arising between you and your primary employer regarding external duties.",
    },
    {
      id: "account",
      title: "4. Account Registration and Verification",
      items: [
        "You must provide accurate, current, and complete information",
        "Maintain and promptly update your account information",
        "Keep your password secure and confidential",
        "Notify us immediately of any unauthorized access",
        "All users must complete verification: Doctors need NMC verification, credential validation, and admin review. Hospitals need facility license verification and authorized representative validation.",
        "We may suspend or terminate your account if you violate Terms, provide false information, or engage in fraudulent behavior",
      ],
    },
    {
      id: "usage",
      title: "5. Platform Usage",
      items: [
        "Use Platform only for lawful purposes",
        "Do NOT violate laws, regulations, or third-party rights",
        "Do NOT impersonate, upload false information, or transmit malware",
        "Do NOT interfere with Platform security or scrape data",
        "Do NOT use automated systems or harassment",
        "Healthcare Specific: Do NOT practice without valid license, share patient records without consent, or misrepresent qualifications",
      ],
    },
    {
      id: "gig",
      title: "6. Gig Posting and Applications",
      items: [
        "Hospitals: Provide accurate gig details, specify requirements, pay publishing fee, review applications promptly, verify completion, make timely payments",
        "Doctors: Only apply for gigs you're qualified for, complete payment within 10-minute hold window, arrive on time, follow facility protocols, maintain patient confidentiality",
        "Hold System: When you apply, the gig is on 10-minute hold. Payment must be completed to secure booking.",
      ],
    },
    {
      id: "fees",
      title: "7. Fees and Payments",
      items: [
        "Gig Publishing Fee: Paid by hospitals when posting",
        "Application Fee: Paid by doctors when applying",
        "Platform Commission: Deducted from doctor's payout after completion",
        "All payments through Cashfree in Indian Rupees (INR)",
        "Payments are non-refundable except per Cancellation Policy",
        "You're responsible for payment method fees",
        "Payout = Gig price minus platform commission, processed within 1-3 business days after admin approval",
        "We reserve right to change fees with 30 days' notice",
      ],
    },
    {
      id: "cancellation",
      title: "8. Cancellation Policy",
      items: [
        "Before Booking: Hospitals may cancel freely. Publishing fee is non-refundable.",
        "After Booking - Hospital Cancels: Hospital loses publishing fee, doctor gets full application fee refund (3-5 business days)",
        "After Booking - Doctor Cancels: Doctor loses application fee, hospital gets full publishing fee refund (3-5 business days)",
        "After Gig Starts: Cancellations NOT PERMITTED. Disputes resolved through support.",
        "Excessive cancellations result in warnings, reduced visibility, temporary suspension, or account termination",
      ],
    },
    {
      id: "contractor",
      title: "9. Independent Contractor Relationship",
      items: [
        "Vaidya247 is NOT your employer, agent, or partner",
        "No employer-employee relationship exists",
        "All relationships are independent contractor relationships",
        "You are responsible for your own taxes, insurance, and compliance",
        "NOT entitled to: Provident Fund, ESI, Gratuity, Paid leave, Health insurance, Retirement benefits, Minimum wage, Severance pay",
        "You are solely responsible for reporting income, paying taxes (income tax, GST), maintaining tax records, and obtaining tax registrations",
        "Vaidya247 does not withhold taxes. You receive full payment minus platform commission and must handle taxes independently",
      ],
    },
    {
      id: "liability",
      title: "10. Liability and Disclaimers",
      items: [
        "CRITICAL: Vaidya247 is NOT LIABLE for medical malpractice, negligence, or adverse outcomes from medical services",
        "Platform provided AS IS without warranties of merchantability, accuracy, uninterrupted operation, or quality",
        "NOT liable for indirect damages, loss of profits, medical errors, employment disputes, user conduct, or force majeure events",
        "Maximum liability: Fees paid in 12 months preceding claim or ₹10,000, whichever is lower",
        "You must maintain professional indemnity insurance, comply with laws, resolve disputes directly, and hold Vaidya247 harmless",
      ],
    },
    {
      id: "indemnification",
      title: "11. Indemnification",
      content:
        "You agree to indemnify and hold harmless Vaidya247, its affiliates, officers, and agents from claims, damages, losses arising from your use of Platform, violation of Terms, violation of laws, medical malpractice, employment disputes, content you submit, or interactions with other users.",
    },
    {
      id: "ip",
      title: "12. Intellectual Property",
      items: [
        "All Platform content (software, text, graphics, logos, audio, video) is owned by Vaidya247 and protected by law",
        "You receive limited, non-exclusive license to access Platform for intended purposes only",
        "Do NOT copy, modify, reverse engineer, or use for commercial purposes",
        "By submitting content (profiles, reviews, messages), you grant Vaidya247 worldwide, royalty-free license to use it",
        "You retain ownership of your content and are responsible for ensuring you have rights to submit it",
      ],
    },
    {
      id: "dispute",
      title: "13. Dispute Resolution",
      items: [
        "Inter-User Disputes: Should be resolved directly. We may provide support but are not obligated.",
        "Disputes with Vaidya247: Contact support@vaidya247.com → formal grievance → we respond within 30 days → arbitration or court",
        "Governing Law: Laws of India. Exclusive jurisdiction of courts in Hyderabad, Telangana, India.",
        "Arbitration: By mutual agreement, disputes resolved under Arbitration and Conciliation Act, 1996 in English in Hyderabad",
      ],
    },
    {
      id: "communications",
      title: "14. Communications",
      items: [
        "You consent to receive transactional messages (booking confirmations, payment receipts, security alerts)",
        "Push notifications about gig opportunities and updates",
        "SMS and WhatsApp messages for verification and notifications",
        "Email communications about account and Platform updates",
        "You may opt out of marketing but cannot opt out of transactional messages essential to service",
      ],
    },
    {
      id: "modifications",
      title: "15. Modifications to Terms",
      items: [
        "We reserve right to modify Terms anytime",
        "Changes notified via email, in-app notification, or Platform banner",
        "Continued use after changes indicates acceptance",
        "If you disagree, you must stop using Platform",
      ],
    },
    {
      id: "termination",
      title: "16. Termination",
      items: [
        "By You: Terminate anytime through account settings or contacting support. You remain liable for outstanding obligations.",
        "By Us: We may suspend/terminate immediately if you violate Terms, we're required by law, we discontinue Platform, or your conduct poses risk",
        "Effect: Your access ceases immediately, outstanding payments must be settled, ongoing gigs must be completed/cancelled per policy, we may retain data as required",
      ],
    },
    {
      id: "miscellaneous",
      title: "17. Miscellaneous",
      items: [
        "Entire Agreement: These Terms, Privacy Policy, and role-specific agreements constitute entire agreement",
        "Severability: If provision is unenforceable, remaining provisions stay in effect",
        "Waiver: Failure to enforce right doesn't constitute waiver",
        "Assignment: You cannot assign without consent. We may assign to successors.",
        "Force Majeure: Not liable for delays due to pandemics, disasters, government acts",
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
            <ChevronLeft size={20} className="mr-1" />
            Back to Home
          </button>
        </a>

        <div className="bg-white rounded-lg shadow-lg p-8 sm:p-12">
          {/* Title Section */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>

          <div className="space-y-2 mb-8 border-b pb-8">
            <p className="text-base text-gray-700">
              <span className="font-semibold">Effective Date:</span> November
              2024 | <span className="font-semibold">Version:</span> 1.1.0
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
                  <h2 className="text-lg font-bold text-gray-900">
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
                    <div className="space-y-4">
                      {section.content && (
                        <p className="text-gray-800 leading-relaxed">
                          {section.content}
                        </p>
                      )}

                      {section.items && (
                        <ul className="space-y-2 ml-4">
                          {section.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-gray-700 flex items-start"
                            >
                              <span className="text-blue-500 mr-3 font-bold">
                                •
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.footer && (
                        <p className="text-gray-700 italic border-l-4 border-blue-300 pl-4 py-2 bg-blue-50 mt-4">
                          {section.footer}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              18. Contact Information
            </h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms, please contact us:
            </p>

            <div className="space-y-4 text-gray-700">
              <div>
                <p className="font-semibold">YESCA Technologies Pvt Ltd</p>
                <p className="text-sm">(Operating as Vaidya247)</p>
              </div>

              <div>
                <p className="font-semibold">Email:</p>
                <p>support@yesca.in</p>
              </div>

              <div>
                <p className="font-semibold">Phone:</p>
                <p>+91 79953 47299</p>
              </div>

              <div>
                <p className="font-semibold">Support Hours:</p>
                <p>Monday - Saturday, 9:00 AM - 6:00 PM IST</p>
              </div>

              <div>
                <p className="font-semibold">Registered Address:</p>
                <p>
                  425, Workafella Cyber Crown,Cyber Crown,
                  <br></br>Sec-II Village, HUDA Techno Enclave, Madhapur,
                  Hyderabad,Telangana-500081.
                </p>
              </div>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="mt-8 p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="font-bold text-gray-900 mb-2">
              Acknowledgment and Acceptance
            </h3>
            <p className="text-gray-800">
              BY ACCESSING OR USING THE VAIDYA247 PLATFORM, YOU ACKNOWLEDGE THAT
              YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS
              AND CONDITIONS. If you do not agree to these Terms, you must not
              access or use the Platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
