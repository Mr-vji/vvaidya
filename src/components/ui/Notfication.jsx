"use client";
import React, { useState } from "react";
import { CheckCircle, AlertCircle, Upload } from "lucide-react";

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
    attachments: "",
    additionalNotes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left Column - Info Section */}
          <div className="lg:col-span-5">
            <div className="sticky top-4 lg:top-8">
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 sm:mb-4">
                FOR VERIFIED MEDICAL PARTNERS
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Request a Healthcare Announcement
              </h1>

              {/* Info Cards */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Announcements are seen by duty doctors and hospital admins
                    inside their daily workflow screens.
                  </p>
                </div>

                <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <AlertCircle className="text-red-600" size={20} />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Every request is manually reviewed for compliance, medical
                    accuracy, and platform guidelines.
                  </p>
                </div>

                <div className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    Mention your specialties and locations so we can match you
                    to the right doctors or hospitals.
                  </p>
                </div>
              </div>

              {/* Timeline & Help Box */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 sm:p-5 mb-6 border border-blue-200 shadow-sm">
                <p className="text-xs sm:text-sm text-gray-800 mb-3">
                  <span className="font-semibold">⏱️ Review time:</span> within
                  one business day
                </p>
                <p className="text-xs sm:text-sm text-gray-800">
                  <span className="font-semibold">✓ What you get:</span>{" "}
                  confirmation email with available slots, pricing, and next
                  steps
                </p>
              </div>

              <p className="text-xs sm:text-sm text-gray-700">
                📧 Need help? Write to{" "}
                <span className="font-semibold text-blue-600">
                  ads@vaidya247.com
                </span>{" "}
                with your query.
              </p>
            </div>
          </div>

          {/* Right Column - Form Section */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200">
              {/* Section 1: Company Details */}
              <div className="mb-8 sm:mb-12">
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                    1
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-gray-900">
                    Company details
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 block">
                        Organization / Company Name
                      </label>
                      <input
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        placeholder="Apollo Hospitals, Sunrise Diagnostics"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm transition-all shadow-sm hover:shadow-md"
                      />
                      <p className="text-xs text-gray-500 mt-1 sm:mt-2">
                        Hospital, clinic, pharmaceutical company, or healthcare
                        business name
                      </p>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 block">
                        Organization Type
                      </label>
                      <select
                        name="organizationType"
                        value={formData.organizationType}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm transition-all shadow-sm hover:shadow-md bg-white"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 block">
                        Contact Person Name
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        placeholder="Dr. Ananya Rao / Mr. Rakesh"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm transition-all shadow-sm hover:shadow-md"
                      />
                      <p className="text-xs text-gray-500 mt-1 sm:mt-2">
                        Primary point of contact
                      </p>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="name@your-organization.com"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm transition-all shadow-sm hover:shadow-md"
                      />
                      <p className="text-xs text-gray-500 mt-1 sm:mt-2">
                        We'll share review status and quotation here
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9XXXXXXXXX"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm transition-all shadow-sm hover:shadow-md"
                      />
                      <p className="text-xs text-gray-500 mt-1 sm:mt-2">
                        For urgent clarifications, if required
                      </p>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 block">
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="https://your-organization-website.com"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm transition-all shadow-sm hover:shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Announcement Details */}
              <div className="mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-gray-200">
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                    2
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-gray-900">
                    Announcement details
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 block">
                        Announcement Type
                      </label>
                      <select
                        name="announcementType"
                        value={formData.announcementType}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm transition-all shadow-sm hover:shadow-md bg-white"
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
                      <p className="text-xs text-gray-500 mt-1 sm:mt-2">
                        Select the category that best fits your requirement
                      </p>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 block">
                        Urgency Level
                      </label>
                      <select
                        name="urgencyLevel"
                        value={formData.urgencyLevel}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm transition-all shadow-sm hover:shadow-md bg-white"
                      >
                        <option value="">Select urgency level</option>
                        <option value="immediate">Immediate</option>
                        <option value="scheduled">Scheduled</option>
                        <option value="planned">Planned</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 block">
                        Preferred Visibility Duration
                      </label>
                      <select
                        name="visibility"
                        value={formData.visibility}
                        onChange={handleInputChange}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm transition-all shadow-sm hover:shadow-md bg-white"
                      >
                        <option value="">Select duration</option>
                        <option value="7">7 days</option>
                        <option value="15">15 days</option>
                        <option value="30">30 days</option>
                      </select>
                      <p className="text-xs text-gray-500 mt-1 sm:mt-2">
                        How long should this announcement be active?
                      </p>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 block">
                        Target Audience
                      </label>
                      <input
                        type="text"
                        name="targetAudience"
                        value={formData.targetAudience}
                        onChange={handleInputChange}
                        placeholder="ICU specialists, anaesthetists, general physicians"
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm transition-all shadow-sm hover:shadow-md"
                      />
                      <p className="text-xs text-gray-500 mt-1 sm:mt-2">
                        Specific specialties or general healthcare professionals
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 block">
                      Brief Description
                    </label>
                    <textarea
                      name="briefDescription"
                      value={formData.briefDescription}
                      onChange={handleInputChange}
                      placeholder="We are looking for ICU duty doctors for weekend night shifts in Hyderabad. Requirements: 5+ years experience, critical care expertise..."
                      rows="4"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm transition-all shadow-sm hover:shadow-md resize-none"
                    />
                    <p className="text-xs text-gray-500 mt-1 sm:mt-2">
                      Clearly explain the requirement, role, service, or product
                      context
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3: Attachments */}
              <div className="mb-8 sm:mb-12 pb-8 sm:pb-12 border-b border-gray-200">
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                    3
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-gray-900">
                    Attachments (optional)
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 block">
                      Attachments
                    </label>
                    <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 sm:p-6 text-center hover:border-blue-500 transition-colors cursor-pointer bg-blue-50">
                      <Upload
                        className="mx-auto text-blue-500 mb-2"
                        size={24}
                      />
                      <p className="text-xs sm:text-sm font-medium text-gray-700">
                        Click to upload or drag & drop
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PDF, DOC, JPG, PNG up to 10MB
                      </p>
                      <input
                        type="file"
                        name="attachments"
                        onChange={handleInputChange}
                        className="hidden"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 block">
                      Additional Notes
                    </label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      placeholder="Any special instructions for placement, timing, or compliance..."
                      rows="4"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm transition-all shadow-sm hover:shadow-md resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: Compliance */}
              <div>
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-sm">
                    4
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-gray-900">
                    Compliance
                  </h2>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <label className="flex items-start gap-3 p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 accent-blue-600 flex-shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-gray-700">
                      Medical claims in this announcement are verified and
                      compliant with applicable medical advertising laws.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 accent-blue-600 flex-shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-gray-700">
                      Content is not promotional, misleading, or non-compliant,
                      and does not include off-label medical claims.
                    </span>
                  </label>

                  <label className="flex items-start gap-3 p-3 sm:p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 accent-blue-600 flex-shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-gray-700">
                      I agree to VAIDYA 247 ad policy and accept the terms &
                      conditions for healthcare announcements.
                    </span>
                  </label>
                </div>

                <p className="text-xs text-gray-600 mb-6 sm:mb-8 leading-relaxed bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
                  ⚠️ Submissions are reviewed within one business day.
                  Promotional, misleading, or non-compliant content will not be
                  approved.
                </p>

                {/* Submit Button */}
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 sm:py-4 px-6 rounded-lg transition duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base">
                  <CheckCircle size={20} />
                  Submit for review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
