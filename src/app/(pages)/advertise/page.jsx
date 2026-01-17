"use client";
import React, { useState, useEffect } from "react";
import { CheckCircle, Upload, Loader } from "lucide-react";
import SubmissionNotification from "@/components/SubmissionNotification";

export default function HealthcareAnnouncementForm() {
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationType: "",
    website: "",
    contactPerson: "",
    email: "",
    phone: "",
    announcementType: "", 
    briefDescription: "",
    urgencyLevel: "",
    visibility: "",
    targetAudience: "",
    preferredPlacement: "",
    geographicFocus: "",
    expectedOutcome: "",
  });

  const [attachedFile, setAttachedFile] = useState(null);
  const [compliance, setCompliance] = useState({
    healthcare: false,
    medical: false,
    factual: false,
    policy: false,
  });

  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => setShowNotification(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 10 * 1024 * 1024) {
      setAttachedFile(file);
    }
  };

  const handleCheckboxChange = (field) => {
    setCompliance((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !compliance.healthcare ||
      !compliance.medical ||
      !compliance.factual ||
      !compliance.policy
    ) {
      alert("Please agree to all compliance requirements");
      return;
    }

    setLoading(true);
    try {
      const submitFormData = new FormData();
      Object.entries(formData).forEach(([key, value]) =>
        submitFormData.append(key, value)
      );
      submitFormData.append("complianceData", JSON.stringify(compliance));
      if (attachedFile) submitFormData.append("attachments", attachedFile);

      const response = await fetch("/api/submit-announcement", {
        method: "POST",
        body: submitFormData,
      });
      const data = await response.json();

      if (response.ok) {
        setReferenceId(
          `ADV-${new Date().getFullYear()}-${Math.random()
            .toString(36)
            .substr(2, 9)
            .toUpperCase()}`
        );
        setShowNotification(true);
        setTimeout(() => {
          setFormData({
            organizationName: "",
            organizationType: "",
            website: "",
            contactPerson: "",
            email: "",
            phone: "",
            announcementType: "",
            briefDescription: "",
            urgencyLevel: "",
            visibility: "",
            targetAudience: "",
            preferredPlacement: "",
            geographicFocus: "",
            expectedOutcome: "",
          });
          setCompliance({
            healthcare: false,
            medical: false,
            factual: false,
            policy: false,
          });
          setAttachedFile(null);
        }, 3000);
      }
    } catch (error) {
      console.error("Submission error:", error.message);
      // You can create an error notification component similar to SubmissionNotification
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Success Notification */}
      {showNotification && (
        <div
          className="fixed top-0 left-0 right-0 z-50 p-4"
          style={{ animation: "slideDown 0.5s ease-out" }}
        >
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl border-l-4 border-green-500 p-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Submission received
                  </h3>
                  <p className="text-gray-700 mb-3 text-sm">
                    Thank you for submitting your advertisement request. Our
                    team will now:
                  </p>
                  <ul className="space-y-1 mb-4 text-sm text-gray-600">
                    <li>
                      • Review your submission for relevance, safety, and
                      compliance
                    </li>
                    <li>• Evaluate audience fit and placement suitability</li>
                    <li>
                      • Prepare a custom quote based on reach, duration, and
                      visibility
                    </li>
                  </ul>
                  <div className="bg-red-50 border border-red-200 rounded p-3 mb-4">
                    <p className="text-sm text-red-700">
                      🕐 You will receive a response within 2-3 business days.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                      Status: Under review
                    </span>
                    <span className="text-gray-500 text-xs">
                      Reference ID: {referenceId}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => (window.location.href = "/")}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded text-sm"
                    >
                      Back to homepage
                    </button>
                    <button
                      onClick={() => setShowNotification(false)}
                      className="flex-1 px-4 py-2 bg-blue-900 text-white font-semibold rounded text-sm"
                    >
                      Submit another
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center text-white font-bold">
              V
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Healthcare Announcements (Reviewed)
              </h1>
              <p className="text-xs text-gray-600">
                Single form · 3 simple steps · Manually approved for medical
                relevance
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <span className="text-green-600 font-semibold">
              Steps 1–3 · Details, campaign & compliance
            </span>
            <a href="/" className="text-blue-600 hover:underline">
              Back to homepage
            </a>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-4">
              <p className="text-orange-600 text-sm font-semibold mb-2">
                Responsible healthcare visibility
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Reach verified doctors & hospitals — not random clicks
              </h2>
              <p className="text-gray-700 text-sm mb-4">
                Advertise inside India's duty-doctor and hospital staffing
                network. Every announcement is manually reviewed for medical
                relevance, ethics, and safety.
              </p>

              <div className="text-gray-600 text-sm space-y-2 mb-6">
                <p>Doctors and hospital decision-makers only</p>
                <p>No open ad exchanges or third-party trackers</p>
                <p>Context-aware, workflow-friendly placements</p>
              </div>

              <button className="w-full bg-blue-900 text-white font-semibold py-3 px-4 rounded hover:bg-blue-950 transition text-sm mb-8 flex items-center justify-center gap-2">
                Submit an advertisement request
                <span>→</span>
              </button>

              <div className="border-t pt-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">
                  How this works
                </h3>
                <ol className="space-y-2 text-sm text-gray-700">
                  <li>1. Share advertiser & campaign details</li>
                  <li>2. Our team verifies compliance & fit</li>
                  <li>3. We confirm placement, timing & quote</li>
                </ol>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">
                  Who typically advertises?
                </h3>
                <p className="text-gray-700 text-sm">
                  Pharma & devices, diagnostics, insurers, medical education
                  providers, and healthcare platforms seeking ethical
                  visibility.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg p-6 md:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                Request a Healthcare Announcement
              </h2>
              <p className="text-sm text-gray-600 mb-8">
                Share your organization, campaign details, and compliance
                confirmations in a single, structured form. Our team will review
                and respond with availability and pricing.
              </p>

              <div className="space-y-8">
                {/* Step 1 */}
                <div>
                  <h3 className="text-base font-bold text-blue-700 mb-6">
                    Step 1 · About your organization
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-2">
                        Organization / Company name
                      </label>
                      <p className="text-xs text-gray-500 mb-2">
                        Hospital, clinic, pharmaceutical company, or healthcare
                        business name
                      </p>
                      <input
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        placeholder="Example: Sunrise Multi-Speciality Hospital, MedCare Pharma Pvt. Ltd."
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Organization type
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          Choose the option that best describes your
                          organization
                        </p>
                        <select
                          name="organizationType"
                          value={formData.organizationType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 text-sm border border-gray-300 rounded bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                          required
                        >
                          <option value="">
                            Select · Hospital, clinic, pharma company...
                          </option>
                          <option value="hospital">Hospital</option>
                          <option value="clinic">Clinic</option>
                          <option value="pharma">Pharma Company</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Official website
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          Used for verification
                        </p>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="https://your-organization.com"
                          className="w-full px-4 py-2 text-sm border border-gray-300 rounded bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Contact person name
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          Primary point of contact
                        </p>
                        <input
                          type="text"
                          name="contactPerson"
                          value={formData.contactPerson}
                          onChange={handleInputChange}
                          placeholder="Dr. Ananya Rao · Medical Director / Mr. Rakesh · Marketing Lead"
                          className="w-full px-4 py-2 text-sm border border-gray-300 rounded bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Email address
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          We'll share review status and quotation here
                        </p>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@your-organization.com"
                          className="w-full px-4 py-2 text-sm border border-gray-300 rounded bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-2">
                        Phone number
                      </label>
                      <p className="text-xs text-gray-500 mb-2">
                        For urgent clarifications, if required
                      </p>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9XXXXXXXXX"
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="border-t pt-8">
                  <h3 className="text-base font-bold text-blue-700 mb-6">
                    Step 2 · Ad / announcement details
                  </h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Announcement type
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          Select the category that best fits your requirement
                        </p>
                        <select
                          name="announcementType"
                          value={formData.announcementType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 text-sm border border-gray-300 rounded bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                          required
                        >
                          <option value="">
                            Temporary gig, emergency shift, vacancy, service...
                          </option>
                          <option value="gig">Temporary gig</option>
                          <option value="shift">Emergency shift</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Urgency level
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          Helps us prioritise review and placement
                        </p>
                        <select
                          name="urgencyLevel"
                          value={formData.urgencyLevel}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 text-sm border border-gray-300 rounded bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                          required
                        >
                          <option value="">
                            Immediate, scheduled, or planned
                          </option>
                          <option value="immediate">Immediate</option>
                          <option value="scheduled">Scheduled</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-2">
                        Brief description
                      </label>
                      <p className="text-xs text-gray-500 mb-2">
                        Include who it is for, locations, timelines, and any key
                        eligibility details
                      </p>
                      <textarea
                        name="briefDescription"
                        value={formData.briefDescription}
                        onChange={handleInputChange}
                        placeholder="Clearly explain the requirement, role, service, or product context you want to announce."
                        rows={2}
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none resize-none"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Preferred visibility duration
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          How long should this announcement be active?
                        </p>
                        <select
                          name="visibility"
                          value={formData.visibility}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 text-sm border border-gray-300 rounded bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                          required
                        >
                          <option value="">
                            Example: 7 days, 14 days, 30 days
                          </option>
                          <option value="7">7 days</option>
                          <option value="15">15 days</option>
                          <option value="30">30 days</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Target audience
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          Specific specialties or general healthcare
                          professionals
                        </p>
                        <input
                          type="text"
                          name="targetAudience"
                          value={formData.targetAudience}
                          onChange={handleInputChange}
                          placeholder="Example: ICU specialists in Hyderabad, all doctors..."
                          className="w-full px-4 py-2 text-sm border border-gray-300 rounded bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Attachments (optional)
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          Helps speed up compliance and review
                        </p>
                        <label className="border-2 border-dashed border-blue-300 rounded p-4 text-center hover:border-blue-500 transition cursor-pointer bg-blue-50">
                          <Upload className="mx-auto text-blue-600 mb-1 w-5 h-5" />
                          <p className="text-xs font-medium text-gray-700">
                            Click to upload
                          </p>
                          <p className="text-xs text-gray-500">
                            PDF, DOC up to 10MB
                          </p>
                          {attachedFile && (
                            <p className="text-xs text-blue-600 font-semibold mt-1">
                              ✓ {attachedFile.name}
                            </p>
                          )}
                          <input
                            type="file"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                          />
                        </label>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Upload supporting documents
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          creatives, or approvals (if any)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="border-t pt-8">
                  <h3 className="text-base font-bold text-blue-700 mb-6">
                    Step 3 · Campaign preferences & compliance
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Preferred placement
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          Final placement will be confirmed after review
                        </p>
                        <select
                          name="preferredPlacement"
                          value={formData.preferredPlacement}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 text-sm border border-gray-300 rounded bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                          required
                        >
                          <option value="">
                            Feed announcement, featured banner...
                          </option>
                          <option value="feed">Feed announcement</option>
                          <option value="banner">Featured banner</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 block mb-2">
                          Geographic focus
                        </label>
                        <p className="text-xs text-gray-500 mb-2">
                          Pan-India, state, or city / region
                        </p>
                        <input
                          type="text"
                          name="geographicFocus"
                          value={formData.geographicFocus}
                          onChange={handleInputChange}
                          placeholder="Example: Pan-India, Karnataka, Hyderabad..."
                          className="w-full px-4 py-2 text-sm border border-gray-300 rounded bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-gray-700 block mb-2">
                        Expected outcome
                      </label>
                      <p className="text-xs text-gray-500 mb-2">
                        What would you like this campaign to achieve?
                      </p>
                      <input
                        type="text"
                        name="expectedOutcome"
                        value={formData.expectedOutcome}
                        onChange={handleInputChange}
                        placeholder="Awareness, engagement, educational reach, lead generation..."
                        className="w-full px-4 py-2 text-sm border border-gray-300 rounded bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="text-sm font-bold text-gray-900 mb-3">
                      Compliance & declarations
                    </h4>
                    <p className="text-xs text-gray-600 mb-4">
                      All checkboxes must be true before submission
                    </p>

                    <div className="space-y-3 mb-6">
                      {[
                        {
                          key: "healthcare",
                          label:
                            "I confirm this promotion is healthcare-related and ethically compliant.",
                        },
                        {
                          key: "medical",
                          label:
                            "The content does not violate medical advertising regulations.",
                        },
                        {
                          key: "factual",
                          label:
                            "All claims in this announcement are factual and verifiable.",
                        },
                        {
                          key: "policy",
                          label:
                            "I agree to Vaidya 247's ad review and approval process.",
                        },
                      ].map((item) => (
                        <label
                          key={item.key}
                          className={`flex items-start gap-3 p-3 rounded border text-sm cursor-pointer ${
                            compliance[item.key]
                              ? "bg-blue-50 border-blue-500"
                              : "border-gray-300 hover:bg-blue-50"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={compliance[item.key]}
                            onChange={() => handleCheckboxChange(item.key)}
                            className="mt-0.5 w-4 h-4"
                          />
                          <span className="text-gray-700">{item.label}</span>
                        </label>
                      ))}
                    </div>

                    <p className="text-xs text-gray-600 mb-6 bg-blue-50 border border-blue-200 rounded p-3">
                      ⚠️ Vaidya 247 may modify, reject, or discontinue any
                      announcement to protect platform trust and community
                      well-being.
                    </p>

                    <p className="text-xs text-gray-600 mb-6">
                      Need to check a previous request?{" "}
                      <span className="text-blue-700 font-semibold cursor-pointer hover:underline">
                        View submission status
                      </span>
                    </p>

                    <p className="text-xs text-gray-600 mb-6">
                      Submissions are typically reviewed within one business
                      day. Promotional, misleading, or non-compliant content
                      will not be approved.
                    </p>

                    <button
                      onClick={handleSubmit}
                      disabled={
                        loading ||
                        !compliance.healthcare ||
                        !compliance.medical ||
                        !compliance.factual ||
                        !compliance.policy
                      }
                      className="w-full bg-blue-900 hover:bg-blue-950 disabled:bg-gray-400 text-white font-semibold py-3 rounded transition flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader size={18} className="animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <CheckCircle size={18} />
                          Submit for review
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
