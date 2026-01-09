"use client";
import React, { useState } from "react";
import { CheckCircle, AlertCircle, Upload, Loader } from "lucide-react";

export default function HealthcareAnnouncementForm() {
  const [formData, setFormData] = useState({
    organizationName: "",
    organizationType: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    announcementType: "",
    urgencyLevel: "",
    visibility: "",
    targetAudience: "",
    briefDescription: "",
    additionalNotes: "",
  });

  const [attachedFile, setAttachedFile] = useState(null);
  const [compliance, setCompliance] = useState({
    medicalClaims: false,
    contentCompliance: false,
    policyAgreement: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB");
        return;
      }
      setAttachedFile(file);
    }
  };

  const handleCheckboxChange = (field) => {
    setCompliance((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !compliance.medicalClaims ||
      !compliance.contentCompliance ||
      !compliance.policyAgreement
    ) {
      alert("Please agree to all compliance requirements");
      return;
    }

    setLoading(true);
    setSubmitStatus(null);

    try {
      const submitFormData = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        submitFormData.append(key, value);
      });

      submitFormData.append("complianceData", JSON.stringify(compliance));

      if (attachedFile) {
        submitFormData.append("attachments", attachedFile);
      }

      const response = await fetch("/api/planeSelectionn", {
        method: "POST",
        body: submitFormData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message:
            "✓ Announcement submitted successfully! Check your email for confirmation.",
        });

        setFormData({
          organizationName: "",
          organizationType: "",
          contactPerson: "",
          email: "",
          phone: "",
          website: "",
          announcementType: "",
          urgencyLevel: "",
          visibility: "",
          targetAudience: "",
          briefDescription: "",
          additionalNotes: "",
        });

        setCompliance({
          medicalClaims: false,
          contentCompliance: false,
          policyAgreement: false,
        });

        setAttachedFile(null);
      } else {
        setSubmitStatus({
          type: "error",
          message: `Error: ${data.error || "Failed to submit announcement"}`,
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: `Error: ${error.message || "Network error occurred"}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white px-3 py-6 sm:px-4 sm:py-8 md:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
          {/* Left Column - Info Section */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="lg:sticky lg:top-4">
              <div className="text-xs font-bold text-[#ff8600] uppercase tracking-widest mb-2 sm:mb-3 md:mb-4">
                FOR VERIFIED MEDICAL PARTNERS
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
                Request a Healthcare Announcement
              </h1>

              {/* Info Cards */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                <div className="flex gap-2 sm:gap-3 md:gap-4 bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Announcements are seen by duty doctors and hospital admins
                    inside their daily workflow screens.
                  </p>
                </div>

                <div className="flex gap-2 sm:gap-3 md:gap-4 bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex-shrink-0 mt-0.5">
                    <AlertCircle className="text-red-600 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Every request is manually reviewed for compliance, medical
                    accuracy, and platform guidelines.
                  </p>
                </div>

                <div className="flex gap-2 sm:gap-3 md:gap-4 bg-white p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <div className="flex-shrink-0 mt-0.5">
                    <CheckCircle className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                    Mention your specialties and locations so we can match you
                    to the right doctors or hospitals.
                  </p>
                </div>
              </div>

              {/* Timeline & Help Box */}
              <div className="bg-gradient-to-br from-[#fff5f0] to-[#ffe6d5] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 mb-4 sm:mb-6 border border-[#ffd9b3] shadow-sm">
                <p className="text-xs sm:text-sm md:text-base text-gray-800 mb-2 sm:mb-3">
                  <span className="font-semibold">⏱️ Review time:</span> within
                  one business day
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-800">
                  <span className="font-semibold">✓ What you get:</span>{" "}
                  confirmation email with available slots, pricing, and next
                  steps
                </p>
              </div>

              <p className="text-xs sm:text-sm md:text-base text-gray-700">
                📧 Need help? Write to{" "}
                <span className="font-semibold text-[#ff8600]">
                  ads@vaidya247.com
                </span>{" "}
                with your query.
              </p>
            </div>
          </div>

          {/* Right Column - Form Section */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 border border-gray-200"
            >
              {/* Status Messages */}
              {submitStatus && (
                <div
                  className={`mb-6 p-4 rounded-lg border ${
                    submitStatus.type === "success"
                      ? "bg-green-50 border-green-300 text-green-800"
                      : "bg-red-50 border-red-300 text-red-800"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Section 1: Company Details */}
              <div className="mb-6 sm:mb-8 md:mb-12">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                  <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ff8600] text-white font-bold text-xs sm:text-sm">
                    1
                  </span>
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    Company details
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5 sm:mb-2 md:mb-3 block">
                        Organization / Company Name
                      </label>
                      <input
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        required
                        placeholder="Apollo Hospitals, Sunrise Diagnostics"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-200 focus:border-[#ff8600] focus:ring-2 focus:ring-[#fff5f0] outline-none transition-all shadow-sm hover:shadow-md"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5 sm:mb-2 md:mb-3 block">
                        Organization Type
                      </label>
                      <select
                        name="organizationType"
                        value={formData.organizationType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-200 focus:border-[#ff8600] focus:ring-2 focus:ring-[#fff5f0] outline-none transition-all shadow-sm hover:shadow-md bg-white"
                      >
                        <option value="">Select organization type</option>
                        <option value="hospital">Hospital</option>
                        <option value="clinic">Clinic</option>
                        <option value="pharma">Pharma Company</option>
                        <option value="device">Medical Device</option>
                        <option value="services">Healthcare Services</option>
                        <option value="recruiter">Recruiter</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5 sm:mb-2 md:mb-3 block">
                        Contact Person Name
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        required
                        placeholder="Dr. Ananya Rao / Mr. Rakesh"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-200 focus:border-[#ff8600] focus:ring-2 focus:ring-[#fff5f0] outline-none transition-all shadow-sm hover:shadow-md"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5 sm:mb-2 md:mb-3 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="name@your-organization.com"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-200 focus:border-[#ff8600] focus:ring-2 focus:ring-[#fff5f0] outline-none transition-all shadow-sm hover:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5 sm:mb-2 md:mb-3 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 9XXXXXXXXX"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-200 focus:border-[#ff8600] focus:ring-2 focus:ring-[#fff5f0] outline-none transition-all shadow-sm hover:shadow-md"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5 sm:mb-2 md:mb-3 block">
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://your-organization-website.com"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-200 focus:border-[#ff8600] focus:ring-2 focus:ring-[#fff5f0] outline-none transition-all shadow-sm hover:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Announcement Details */}
              <div className="mb-6 sm:mb-8 md:mb-12 pb-6 sm:pb-8 md:pb-12 border-b border-gray-200">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                  <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ff8600] text-white font-bold text-xs sm:text-sm">
                    2
                  </span>
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    Announcement details
                  </h2>
                </div>

                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5 sm:mb-2 md:mb-3 block">
                        Announcement Type
                      </label>
                      <select
                        name="announcementType"
                        value={formData.announcementType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-200 focus:border-[#ff8600] focus:ring-2 focus:ring-[#fff5f0] outline-none transition-all shadow-sm hover:shadow-md bg-white"
                      >
                        <option value="">Select category</option>
                        <option value="gig">Temporary gig</option>
                        <option value="shift">Emergency shift</option>
                        <option value="vacancy">Vacancy</option>
                        <option value="service">Service</option>
                        <option value="pharma">
                          Pharma or product awareness
                        </option>
                        <option value="training">Training</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5 sm:mb-2 md:mb-3 block">
                        Urgency Level
                      </label>
                      <select
                        name="urgencyLevel"
                        value={formData.urgencyLevel}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-200 focus:border-[#ff8600] focus:ring-2 focus:ring-[#fff5f0] outline-none transition-all shadow-sm hover:shadow-md bg-white"
                      >
                        <option value="">Select urgency level</option>
                        <option value="immediate">Immediate</option>
                        <option value="scheduled">Scheduled</option>
                        <option value="planned">Planned</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5 sm:mb-2 md:mb-3 block">
                        Preferred Visibility Duration
                      </label>
                      <select
                        name="visibility"
                        value={formData.visibility}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-200 focus:border-[#ff8600] focus:ring-2 focus:ring-[#fff5f0] outline-none transition-all shadow-sm hover:shadow-md bg-white"
                      >
                        <option value="">Select duration</option>
                        <option value="7">7 days</option>
                        <option value="15">15 days</option>
                        <option value="30">30 days</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5 sm:mb-2 md:mb-3 block">
                        Target Audience
                      </label>
                      <input
                        type="text"
                        name="targetAudience"
                        value={formData.targetAudience}
                        onChange={handleInputChange}
                        required
                        placeholder="ICU specialists, anaesthetists, general physicians"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-200 focus:border-[#ff8600] focus:ring-2 focus:ring-[#fff5f0] outline-none transition-all shadow-sm hover:shadow-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5 sm:mb-2 md:mb-3 block">
                      Brief Description
                    </label>
                    <textarea
                      name="briefDescription"
                      value={formData.briefDescription}
                      onChange={handleInputChange}
                      required
                      placeholder="We are looking for ICU duty doctors for weekend night shifts in Hyderabad. Requirements: 5+ years experience, critical care expertise..."
                      rows="4"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-200 focus:border-[#ff8600] focus:ring-2 focus:ring-[#fff5f0] outline-none transition-all shadow-sm hover:shadow-md resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Attachments */}
              <div className="mb-6 sm:mb-8 md:mb-12 pb-6 sm:pb-8 md:pb-12 border-b border-gray-200">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                  <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ff8600] text-white font-bold text-xs sm:text-sm">
                    3
                  </span>
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    Attachments (optional)
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5 sm:mb-2 md:mb-3 block">
                      Attachments
                    </label>
                    <label className="border-2 border-dashed border-[#ffd9b3] rounded-lg p-4 sm:p-6 text-center hover:border-[#ff8600] transition-colors cursor-pointer bg-[#fff5f0] block">
                      <Upload className="mx-auto text-[#ff8600] mb-2 w-5 h-5 sm:w-6 sm:h-6" />
                      <p className="text-xs sm:text-sm font-medium text-gray-700">
                        Click to upload or drag & drop
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PDF, DOC, JPG, PNG up to 10MB
                      </p>
                      {attachedFile && (
                        <p className="text-xs text-[#ff8600] font-semibold mt-2">
                          ✓ {attachedFile.name}
                        </p>
                      )}
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        className="hidden"
                      />
                    </label>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1.5 sm:mb-2 md:mb-3 block">
                      Additional Notes
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      placeholder="Any special instructions for placement, timing, or compliance..."
                      rows="4"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-lg border border-gray-200 focus:border-[#ff8600] focus:ring-2 focus:ring-[#fff5f0] outline-none transition-all shadow-sm hover:shadow-md resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: Compliance */}
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                  <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ff8600] text-white font-bold text-xs sm:text-sm">
                    4
                  </span>
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                    Compliance
                  </h2>
                </div>

                <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-4 sm:mb-6 md:mb-8">
                  <label
                    className={`flex items-start gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-lg border transition-all cursor-pointer ${
                      compliance.medicalClaims
                        ? "bg-[#fff5f0] border-[#ff8600]"
                        : "border-gray-200 hover:border-[#ffd9b3] hover:bg-[#fff5f0]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={compliance.medicalClaims}
                      onChange={() => handleCheckboxChange("medicalClaims")}
                      className="mt-1 w-4 h-4 accent-[#ff8600] flex-shrink-0 cursor-pointer"
                    />
                    <span className="text-xs sm:text-sm md:text-base text-gray-700">
                      Medical claims in this announcement are verified and
                      compliant with applicable medical advertising laws.
                    </span>
                  </label>

                  <label
                    className={`flex items-start gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-lg border transition-all cursor-pointer ${
                      compliance.contentCompliance
                        ? "bg-[#fff5f0] border-[#ff8600]"
                        : "border-gray-200 hover:border-[#ffd9b3] hover:bg-[#fff5f0]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={compliance.contentCompliance}
                      onChange={() => handleCheckboxChange("contentCompliance")}
                      className="mt-1 w-4 h-4 accent-[#ff8600] flex-shrink-0 cursor-pointer"
                    />
                    <span className="text-xs sm:text-sm md:text-base text-gray-700">
                      Content is not promotional, misleading, or non-compliant,
                      and does not include off-label medical claims.
                    </span>
                  </label>

                  <label
                    className={`flex items-start gap-2 sm:gap-3 p-2 sm:p-3 md:p-4 rounded-lg border transition-all cursor-pointer ${
                      compliance.policyAgreement
                        ? "bg-[#fff5f0] border-[#ff8600]"
                        : "border-gray-200 hover:border-[#ffd9b3] hover:bg-[#fff5f0]"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={compliance.policyAgreement}
                      onChange={() => handleCheckboxChange("policyAgreement")}
                      className="mt-1 w-4 h-4 accent-[#ff8600] flex-shrink-0 cursor-pointer"
                    />
                    <span className="text-xs sm:text-sm md:text-base text-gray-700">
                      I agree to VAIDYA 247 ad policy and accept the terms &
                      conditions for healthcare announcements.
                    </span>
                  </label>
                </div>

                <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6 md:mb-8 leading-relaxed bg-[#fff5f0] border border-[#ffd9b3] rounded-lg p-2 sm:p-3 md:p-4">
                  ⚠️ Submissions are reviewed within one business day.
                  Promotional, misleading, or non-compliant content will not be
                  approved.
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={
                    loading ||
                    !compliance.medicalClaims ||
                    !compliance.contentCompliance ||
                    !compliance.policyAgreement
                  }
                  className="w-full bg-gradient-to-r from-[#ff8600] to-[#e67e00] hover:from-[#e67e00] hover:to-[#cc6d00] disabled:from-gray-400 disabled:to-gray-400 text-white font-bold py-2.5 sm:py-3 md:py-4 px-4 sm:px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
