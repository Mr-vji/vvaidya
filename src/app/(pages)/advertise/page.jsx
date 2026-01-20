"use client";

import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  Upload,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function AdvertiserForm() {
  const [targetAudience, setTargetAudience] = useState(["doctors"]);
  const [squareImage, setSquareImage] = useState(null);
  const [landscapeImage, setLandscapeImage] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [industry, setIndustry] = useState("");
  const [companyLegalName, setCompanyLegalName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [website, setWebsite] = useState("");
  const [officialEmail, setOfficialEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [geography, setGeography] = useState("");
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");

  const [agreedEvidence, setAgreedEvidence] = useState(false);
  const [agreedPolicy, setAgreedPolicy] = useState(false);

  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  const [errorFields, setErrorFields] = useState({});
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const notificationRef = useRef(null);
  const squareInputRef = useRef(null);
  const landscapeInputRef = useRef(null);

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setMobile(value);
    }
  };

  const handleFileChange = (e, setImage) => {
    const file = e.target.files[0];
    if (!file) return;

    file.preview = URL.createObjectURL(file);
    setImage(file);
  };

  const showNotification = (type, message) => {
    setNotification({
      show: true,
      type,
      message,
    });

    if (notificationRef.current) {
      const notif = notificationRef.current;

      notif.style.opacity = "0";
      notif.style.transform = "scale(0.8) translateY(-30px)";

      setTimeout(() => {
        notif.style.transition = "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
        notif.style.opacity = "1";
        notif.style.transform = "scale(1) translateY(0)";
      }, 10);

      setTimeout(() => {
        notif.style.transition = "all 0.4s ease-out";
        notif.style.opacity = "0";
        notif.style.transform = "scale(0.8) translateY(-30px)";

        setTimeout(() => {
          setNotification({
            show: false,
            type: "",
            message: "",
          });
        }, 400);
      }, 4000);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const newErrorFields = {};
    let hasErrors = false;

    if (!companyLegalName.trim()) {
      newErrorFields.companyLegalName = true;
      hasErrors = true;
    }

    if (!brandName.trim()) {
      newErrorFields.brandName = true;
      hasErrors = true;
    }

    if (!industry) {
      newErrorFields.industry = true;
      hasErrors = true;
    }

    if (!website.trim()) {
      newErrorFields.website = true;
      hasErrors = true;
    }

    if (!officialEmail.trim()) {
      newErrorFields.officialEmail = true;
      hasErrors = true;
    }

    if (!mobile.trim() || mobile.length !== 10) {
      newErrorFields.mobile = true;
      hasErrors = true;
    }

    if (!geography) {
      newErrorFields.geography = true;
      hasErrors = true;
    }

    if (!startDate) {
      newErrorFields.startDate = true;
      hasErrors = true;
    }

    if (!endDate) {
      newErrorFields.endDate = true;
      hasErrors = true;
    }

    if (!headline.trim()) {
      newErrorFields.headline = true;
      hasErrors = true;
    }

    if (!description.trim()) {
      newErrorFields.description = true;
      hasErrors = true;
    }

    if (!agreedEvidence) {
      newErrorFields.agreedEvidence = true;
      hasErrors = true;
    }

    if (!agreedPolicy) {
      newErrorFields.agreedPolicy = true;
      hasErrors = true;
    }

    if (hasErrors) {
      setErrorFields(newErrorFields);
      showNotification("error", "Please fill all required fields");
      return;
    }

    setErrorFields({});
    setLoading(true);

    const formData = new FormData();
    formData.append("companyLegalName", companyLegalName);
    formData.append("brandName", brandName);
    formData.append("industry", industry);
    formData.append("website", website);
    formData.append("officialEmail", officialEmail);
    formData.append("mobile", mobile);
    formData.append("targetAudience", JSON.stringify(targetAudience));
    formData.append("geography", geography);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    formData.append("headline", headline);
    formData.append("description", description);

    if (squareImage) formData.append("squareImage", squareImage);
    if (landscapeImage) formData.append("landscapeImage", landscapeImage);

    try {
      const res = await fetch("/api/advertiser", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setShowSuccessPopup(true);
        setCompanyLegalName("");
        setBrandName("");
        setIndustry("");
        setWebsite("");
        setOfficialEmail("");
        setMobile("");
        setGeography("");
        setHeadline("");
        setDescription("");
        setTargetAudience(["doctors"]);
        setSquareImage(null);
        setLandscapeImage(null);
        setStartDate("");
        setEndDate("");
        setAgreedEvidence(false);
        setAgreedPolicy(false);
        setErrorFields({});
      } else {
        showNotification(
          "error",
          data.error || "Failed to submit campaign. Please try again.",
        );
      }
    } catch (err) {
      console.error(err);
      showNotification("error", "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getNotificationIcon = () => {
    switch (notification.type) {
      case "success":
        return <CheckCircle className="w-6 h-6 flex-shrink-0" />;
      case "error":
        return <AlertCircle className="w-6 h-6 flex-shrink-0" />;
      default:
        return null;
    }
  };

  const getInputBorderClass = (fieldName) => {
    if (errorFields[fieldName]) {
      return "border-red-500 focus:border-red-500 focus:ring-red-500/20 bg-red-50";
    }
    return "border-slate-200 focus:border-indigo-600 focus:ring-indigo-600/20";
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-3">
              Submission received
            </h2>
            
            <p className="text-slate-600 text-center mb-6">
              Thank you for submitting your advertisement request. Our team will now:
            </p>
            
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-slate-400 mt-0.5">•</span>
                <span>Review your submission for relevance, safety, and compliance</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-slate-400 mt-0.5">•</span>
                <span>Evaluate audience fit and placement suitability</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <span className="text-slate-400 mt-0.5">•</span>
                <span>Prepare a custom quote based on reach, duration, and visibility</span>
              </li>
            </ul>
            
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800 flex items-start gap-2">
                <span className="text-lg">💡</span>
                <span>You will receive a response within 2–3 business days.</span>
              </p>
            </div>
            
            <div className="flex items-center justify-between mb-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span className="text-slate-600 font-medium">Status: Under review</span>
              </div>
              <span className="text-slate-500">Reference ID: ADV-2025-001</span>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowSuccessPopup(false);
                  window.open("/", "_self");
                }}
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
              >
                Back to homepage
              </button>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="flex-1 px-4 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
              >
                Submit another request
              </button>
            </div>
            
            <p className="text-xs text-slate-500 text-center mt-6">
              You can reply to the confirmation email any time if you need to share additional details, updated creatives, or revised timelines.
            </p>
          </div>
        </div>
      )}

      {notification.show && (
        <div
          ref={notificationRef}
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-2xl backdrop-blur-2xl border font-medium flex items-center gap-3 max-w-md w-11/12 shadow-2xl ${
            notification.type === "success"
              ? "bg-green-500/25 border-green-400/60 text-green-700"
              : "bg-red-500/25 border-red-400/60 text-red-700"
          }`}
          style={{ opacity: 0, transform: "scale(0.8) translateY(-30px)" }}
        >
          {getNotificationIcon()}
          <span className="text-sm sm:text-base font-semibold">
            {notification.message}
          </span>
        </div>
      )}

      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <h1 className="text-lg font-bold text-slate-900">
                Healthcare Announcements (Reviewed)
              </h1>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <button
              onClick={() => window.open("/", "_self")}
              className="text-slate-600 hover:text-slate-900 transition-transform duration-200 hover:scale-95 cursor-pointer"
            >
              Back to homepage
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="rounded-2xl p-6 border border-indigo-100 sticky top-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 mb-5 border border-white/60 shadow-sm">
                <h3 className="text-sm font-bold text-indigo-900 mb-3">
                  Responsible healthcare visibility
                </h3>
                <h2 className="text-xl font-bold text-slate-900 mb-4 leading-snug">
                  Reach verified doctors & hospitals — not random clicks
                </h2>
                <p className="text-sm text-slate-700 mb-4 leading-relaxed">
                  Advertise inside India's duty-doctor and hospital staffing
                  network. Every announcement is manually reviewed for medical
                  relevance, ethics, and safety.
                </p>
                <ul className="space-y-2 text-xs text-slate-600 mb-5">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Doctors and hospital decision-makers only</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>No open ad exchanges or third-party resellers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>Context-aware, workflow-friendly placements</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                  <h4 className="text-sm font-bold text-slate-900 mb-2">
                    How this works
                  </h4>
                  <p className="text-xs text-slate-600 mb-3">
                    A simple, three-step review-led process before anything is
                    shown to healthcare professionals.
                  </p>
                  <ol className="text-xs text-slate-600 space-y-1.5">
                    <li>1. Share advertiser & campaign details</li>
                    <li>2. Our team verifies compliance & fit</li>
                    <li>3. We confirm placement, timing & quote</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Request a Healthcare Announcement
                </h2>
                <p className="text-sm text-slate-600">
                  Share your organization, campaign details, and compliance
                  confirmations in a single, structured form. Our team will
                  review and respond with availability and pricing.
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <div className="mb-6">
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      Step 1 · About your organization
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-x-6 gap-y-5">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-2">
                        Organization / Company name
                      </label>
                      <p className="text-xs text-slate-500 mb-2">
                        Hospital, clinic, pharmaceutical company, or healthcare business name
                      </p>
                      <input
                        type="text"
                        value={companyLegalName}
                        onChange={(e) => setCompanyLegalName(e.target.value)}
                        placeholder="Example: Sunrise Multi-Speciality Hospital"
                        className={`w-full px-3 py-2.5 rounded-md border focus:ring-2 outline-none text-sm transition-all ${getInputBorderClass("companyLegalName")}`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-2">
                        Organization type
                      </label>
                      <p className="text-xs text-slate-500 mb-2">
                        Choose the option that best describes your organization
                      </p>
                      <div className="relative">
                        <select
                          value={industry}
                          onChange={(e) => setIndustry(e.target.value)}
                          className={`w-full px-3 py-2.5 rounded-md border focus:ring-2 outline-none text-sm appearance-none bg-white transition-all ${getInputBorderClass("industry")}`}
                          style={{ color: industry ? "#1e293b" : "#64748b" }}
                        >
                          <option value="">Select organization type</option>
                          <option value="Pharmaceuticals">Pharmaceuticals</option>
                          <option value="Medical Equipment">Medical Equipment</option>
                          <option value="Hospital">Hospital</option>
                          <option value="Clinic">Clinic</option>
                          <option value="Healthcare Services">Healthcare Services</option>
                          <option value="Recruiter">Recruiter</option>
                        </select>
                        <ChevronLeft className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 -rotate-90 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-2">
                        Contact person name
                      </label>
                      <p className="text-xs text-slate-500 mb-2">
                        Primary point of contact
                      </p>
                      <input
                        type="text"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="Dr. Ananya Rao - Medical Director"
                        className={`w-full px-3 py-2.5 rounded-md border focus:ring-2 outline-none text-sm transition-all ${getInputBorderClass("brandName")}`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-2">
                        Official website
                      </label>
                      <p className="text-xs text-slate-500 mb-2">
                        Used for verification
                      </p>
                      <input
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://your-organization.com"
                        className={`w-full px-3 py-2.5 rounded-md border focus:ring-2 outline-none text-sm transition-all ${getInputBorderClass("website")}`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-2">
                        Email address
                      </label>
                      <p className="text-xs text-slate-500 mb-2">
                        We'll share review status and quotation here
                      </p>
                      <input
                        type="email"
                        value={officialEmail}
                        onChange={(e) => setOfficialEmail(e.target.value)}
                        placeholder="name@your-organization.com"
                        className={`w-full px-3 py-2.5 rounded-md border focus:ring-2 outline-none text-sm transition-all ${getInputBorderClass("officialEmail")}`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-2">
                        Phone number
                      </label>
                      <p className="text-xs text-slate-500 mb-2">
                        For urgent clarifications, if required
                      </p>
                      <input
                        type="tel"
                        value={mobile}
                        onChange={handlePhoneChange}
                        placeholder="9XXXXXXXXX (10 digits)"
                        maxLength="10"
                        className={`w-full px-3 py-2.5 rounded-md border focus:ring-2 outline-none text-sm transition-all ${getInputBorderClass("mobile")}`}
                      />
                      {mobile && mobile.length < 10 && (
                        <span className="text-xs text-red-500 mt-1 block">
                          Phone number must be 10 digits
                        </span>
                      )}
                    </div>
                  </div>
                </section>

                <section className="border-t border-slate-200 pt-8">
                  <div className="mb-6">
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      Step 2 · Ad / announcement details
                    </h3>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-2">
                        Announcement type
                      </label>
                      <p className="text-xs text-slate-500 mb-2">
                        Select the category that best fits your requirement
                      </p>
                      <div className="relative">
                        <select
                          value={geography}
                          onChange={(e) => setGeography(e.target.value)}
                          className={`w-full px-3 py-2.5 rounded-md border focus:ring-2 outline-none text-sm appearance-none bg-white transition-all ${getInputBorderClass("geography")}`}
                        >
                          <option value="">Select announcement type</option>
                          <option value="Temporary gig">Temporary gig</option>
                          <option value="Emergency shift">Emergency shift</option>
                          <option value="Vacancy">Vacancy</option>
                          <option value="Service">Service</option>
                          <option value="Pharma awareness">Pharma awareness</option>
                          <option value="Product awareness">Product awareness</option>
                          <option value="Training">Training</option>
                        </select>
                        <ChevronLeft className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 -rotate-90 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-2">
                        Brief description
                      </label>
                      <p className="text-xs text-slate-500 mb-2">
                        Include who it is for, locations, timelines, and any key eligibility details
                      </p>
                      <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="3"
                        placeholder="Clearly explain the requirement, role, service, or product context you want to announce."
                        className={`w-full px-3 py-2.5 rounded-md border focus:ring-2 outline-none text-sm resize-none transition-all ${getInputBorderClass("description")}`}
                      ></textarea>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-2">
                          Urgency level
                        </label>
                        <p className="text-xs text-slate-500 mb-2">
                          Helps us prioritize review and placement
                        </p>
                        <div className="relative">
                          <select
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className={`w-full px-3 py-2.5 rounded-md border focus:ring-2 outline-none text-sm appearance-none bg-white transition-all ${getInputBorderClass("startDate")}`}
                          >
                            <option value="">Select urgency</option>
                            <option value="Immediate">Immediate</option>
                            <option value="Scheduled">Scheduled</option>
                            <option value="Planned">Planned</option>
                          </select>
                          <ChevronLeft className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 -rotate-90 pointer-events-none" />
                        </div>
                      </div>

                      <div className="md:col-span-2">
                        <label className="text-xs font-semibold text-slate-700 block mb-2">
                          Preferred visibility duration
                        </label>
                        <p className="text-xs text-slate-500 mb-2">
                          How long should this announcement be active?
                        </p>
                        <input
                          type="text"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          placeholder="Example: 7 days, 14 days, 30 days"
                          className={`w-full px-3 py-2.5 rounded-md border focus:ring-2 outline-none text-sm transition-all ${getInputBorderClass("endDate")}`}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-2">
                          Target audience
                        </label>
                        <p className="text-xs text-slate-500 mb-2">
                          Specific specialties or general healthcare professionals
                        </p>
                        <input
                          type="text"
                          value={headline}
                          onChange={(e) => setHeadline(e.target.value)}
                          placeholder="Example: ICU specialists in Hyderabad"
                          className={`w-full px-3 py-2.5 rounded-md border focus:ring-2 outline-none text-sm transition-all ${getInputBorderClass("headline")}`}
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-2">
                          Attachments (optional)
                        </label>
                        <p className="text-xs text-slate-500 mb-2">
                          Helps speed up compliance and review
                        </p>
                        <input
                          type="file"
                          ref={landscapeInputRef}
                          accept="image/*,.pdf,.doc,.docx"
                          className="hidden"
                          onChange={(e) => handleFileChange(e, setLandscapeImage)}
                        />
                        <div
                          onClick={() => landscapeInputRef.current?.click()}
                          className={`relative border border-dashed rounded-md p-3 cursor-pointer transition-all hover:bg-slate-50 ${
                            landscapeImage ? "border-green-300 bg-green-50" : "border-slate-300"
                          }`}
                        >
                          {landscapeImage ? (
                            <div className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                              <span className="text-xs text-green-700 font-medium truncate">
                                {landscapeImage.name}
                              </span>
                              <span className="text-[10px] text-slate-500 ml-auto">
                                Click to change
                              </span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <Upload className="w-4 h-4 text-slate-400" />
                              <span className="text-xs text-slate-500">
                                Upload documents or creatives
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="border-t border-slate-200 pt-8">
                  <div className="mb-6">
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      Step 3 · Campaign preferences & compliance
                    </h3>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-2">
                        Compliance & declarations
                      </label>
                      <p className="text-xs text-slate-500 mb-3">
                        All checkboxes must be true before submission
                      </p>

                      <div className="space-y-3">
                        <label
                          className={`flex gap-3 cursor-pointer group items-start p-3 rounded-lg transition-all border ${
                            errorFields.agreedEvidence
                              ? "bg-red-50 border-red-200"
                              : "border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/30"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={agreedEvidence}
                            onChange={(e) => setAgreedEvidence(e.target.checked)}
                            className="w-4 h-4 mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <span
                            className={`text-xs leading-relaxed ${
                              errorFields.agreedEvidence
                                ? "text-red-700 font-semibold"
                                : "text-slate-600"
                            }`}
                          >
                            I confirm this promotion is healthcare-related and ethically compliant.
                          </span>
                        </label>

                        <label
                          className={`flex gap-3 cursor-pointer group items-start p-3 rounded-lg transition-all border ${
                            errorFields.agreedPolicy
                              ? "bg-red-50 border-red-200"
                              : "border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/30"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={agreedPolicy}
                            onChange={(e) => setAgreedPolicy(e.target.checked)}
                            className="w-4 h-4 mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <span
                            className={`text-xs leading-relaxed ${
                              errorFields.agreedPolicy
                                ? "text-red-700 font-semibold"
                                : "text-slate-600"
                            }`}
                          >
                            The content does not violate medical advertising regulations.
                          </span>
                        </label>

                        <label className="flex gap-3 cursor-pointer group items-start p-3 rounded-lg transition-all border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/30">
                          <input
                            type="checkbox"
                            className="w-4 h-4 mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <span className="text-xs leading-relaxed text-slate-600">
                            All claims in this announcement are factual and verifiable.
                          </span>
                        </label>

                        <label className="flex gap-3 cursor-pointer group items-start p-3 rounded-lg transition-all border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/30">
                          <input
                            type="checkbox"
                            className="w-4 h-4 mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <span className="text-xs leading-relaxed text-slate-600">
                            I agree to Vaidya 247's ad review and approval process.
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 mt-4">
                      <p className="text-xs text-blue-800 leading-relaxed">
                        <span className="font-bold">Note:</span> Vaidya 247 may
                        modify, reject, or discontinue any announcement to
                        protect platform trust and community well-being.
                      </p>
                    </div>
                  </div>
                </section>

                <section className="border-t border-slate-200 pt-6">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 mb-6">
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      <span className="font-bold">
                        Need to check a previous request?
                      </span>{" "}
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-700 font-semibold underline"
                      >
                        View submission status
                      </a>
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Submissions are typically reviewed within one business
                      day. Promotional, misleading, or non-compliant content
                      will not be approved.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={handleSubmit}
                      disabled={loading || !agreedEvidence || !agreedPolicy}
                      className={`w-full font-bold text-sm py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md ${
                        loading || !agreedEvidence || !agreedPolicy
                          ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                          : "bg-indigo-600 text-white hover:bg-indigo-700 active:scale-[0.98]"
                      }`}
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin w-5 h-5"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            />
                          </svg>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        "Submit for review"
                      )}
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}