"use client";

import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  Calendar,
  MapPin,
  Upload,
  CheckCircle,
  AlertCircle,
  Building,
  Globe,
  Mail,
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

  const notificationRef = useRef(null);
  const squareInputRef = useRef(null);
  const landscapeInputRef = useRef(null);

  const handleAudienceToggle = (value) => {
    if (targetAudience.includes(value)) {
      setTargetAudience(targetAudience.filter((item) => item !== value));
    } else {
      setTargetAudience([...targetAudience, value]);
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

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
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

    if (!mobile.trim()) {
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

    if (!squareImage) {
      newErrorFields.squareImage = true;
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

      if (res.ok) {
        showNotification("success", "Campaign submitted successfully! 🎉");

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
          "Failed to submit campaign. Please try again.",
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
    return "border-slate-200 focus:border-[#27187e] focus:ring-[#27187e]/20";
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Notification */}
      {notification.show && (
        <div
          ref={notificationRef}
          className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-4 rounded-2xl backdrop-blur-2xl border font-medium flex items-center gap-3 max-w-md w-11/12 shadow-2xl
          ${
            notification.type === "success"
              ? "bg-green-500/25 border-green-400/60 text-green-700"
              : "bg-red-500/25 border-red-400/60 text-red-700"
          }`}
          style={{
            opacity: 0,
            transform: "scale(0.8) translateY(-30px)",
          }}
        >
          {getNotificationIcon()}
          <span className="text-sm sm:text-base font-semibold">
            {notification.message}
          </span>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Advertiser Submission
          </h2>
          <p className="text-slate-500">
            Configure your campaign details below to get started.
          </p>
        </div>

        <div className="space-y-8">
          {/* Section 1: Company Details */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff8600]/10 text-[#ff8600] font-bold text-sm">
                1
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Company details
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Company legal name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={companyLegalName}
                    onChange={(e) => setCompanyLegalName(e.target.value)}
                    placeholder="e.g. Acme Healthcare Pvt Ltd"
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 outline-none text-sm transition-all ${getInputBorderClass(
                      "companyLegalName",
                    )}`}
                  />
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Brand name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="e.g. Acme Critical Care"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none text-sm transition-all ${getInputBorderClass(
                    "brandName",
                  )}`}
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Industry category <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none text-sm appearance-none bg-white transition-all ${getInputBorderClass(
                      "industry",
                    )}`}
                    style={{
                      color: industry ? "#1e293b" : "#64748b",
                    }}
                  >
                    <option value="" className="text-slate-600">
                      Select category
                    </option>
                    <option value="Pharmaceuticals" className="text-slate-900">
                      Pharmaceuticals
                    </option>
                    <option
                      value="Medical Equipment"
                      className="text-slate-900"
                    >
                      Medical Equipment
                    </option>
                  </select>
                  <ChevronLeft className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 -rotate-90 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Website URL <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="e.g. https://www.acme.com"
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 outline-none text-sm transition-all ${getInputBorderClass(
                      "website",
                    )}`}
                  />
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Official email ID <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={officialEmail}
                    onChange={(e) => setOfficialEmail(e.target.value)}
                    placeholder="marketing@acme.com"
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 outline-none text-sm transition-all ${getInputBorderClass(
                      "officialEmail",
                    )}`}
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Mobile number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="98765 43210"
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 outline-none text-sm transition-all ${getInputBorderClass(
                      "mobile",
                    )}`}
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400">
                    +91
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Campaign Details */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff8600]/10 text-[#ff8600] font-bold text-sm">
                2
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Campaign details
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-3">
                  Target audience <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {["Doctors", "Hospitals", "Clinics / Diagnostic centers"].map(
                    (audience) => (
                      <button
                        key={audience}
                        type="button"
                        onClick={() =>
                          handleAudienceToggle(audience.toLowerCase())
                        }
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all
                      ${
                        targetAudience.includes(audience.toLowerCase())
                          ? "border-[#27187e] bg-[#27187e]/10 text-[#27187e]"
                          : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      }`}
                      >
                        {targetAudience.includes(audience.toLowerCase()) && (
                          <CheckCircle className="w-3.5 h-3.5" />
                        )}
                        {audience}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Target geography <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    value={geography}
                    onChange={(e) => setGeography(e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 outline-none text-sm appearance-none bg-white text-slate-600 transition-all ${getInputBorderClass(
                      "geography",
                    )}`}
                  >
                    <option value="">Select State</option>
                    <option value="AP">Andhra Pradesh (AP)</option>
                    <option value="TS">Telangana (TS)</option>
                  </select>
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <ChevronLeft className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 -rotate-90 pointer-events-none" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-semibold text-slate-800 block mb-2">
                    Start Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      min={getTodayDate()}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 outline-none text-sm transition-all ${getInputBorderClass(
                        "startDate",
                      )}`}
                    />
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-800 block mb-2">
                    End Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      min={startDate || getTodayDate()}
                      className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 outline-none text-sm transition-all ${getInputBorderClass(
                        "endDate",
                      )}`}
                    />
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Ad Content & Creatives */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff8600]/10 text-[#ff8600] font-bold text-sm">
                3
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                Ad content & creatives
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Headline <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  placeholder="e.g. ICU monitor solutions trusted by 120+ tier-2 hospitals"
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none text-sm transition-all ${getInputBorderClass(
                    "headline",
                  )}`}
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Short description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="2"
                  placeholder="Explain the value in simple, factual language."
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 outline-none text-sm resize-none transition-all ${getInputBorderClass(
                    "description",
                  )}`}
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4">
                <input
                  type="file"
                  ref={squareInputRef}
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, setSquareImage)}
                />
                <input
                  type="file"
                  ref={landscapeInputRef}
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, setLandscapeImage)}
                />

                <div
                  onClick={() => squareInputRef.current?.click()}
                  className={`border border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all group relative overflow-hidden h-48
                    ${
                      errorFields.squareImage
                        ? "border-red-500 bg-red-50"
                        : squareImage
                          ? "border-green-300 bg-green-50"
                          : "border-slate-300 hover:bg-slate-50"
                    }`}
                >
                  {squareImage ? (
                    <>
                      <img
                        src={squareImage.preview}
                        alt="Square preview"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                      />
                      <div className="relative z-10 bg-white/90 p-2 rounded-lg shadow-sm">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-1" />
                        <p className="text-xs font-semibold text-green-700 truncate max-w-[120px]">
                          {squareImage.name}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Click to change
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-10 h-10 rounded-full bg-[#27187e]/10 flex items-center justify-center mb-3 group-hover:bg-[#27187e]/20 transition-colors">
                        <Upload className="w-5 h-5 text-[#27187e]" />
                      </div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">
                        Upload square image{" "}
                        <span className="text-red-500">*</span>
                      </h4>
                      <p className="text-xs text-slate-500">
                        1080 × 1080 px • PNG/JPG
                      </p>
                    </>
                  )}
                </div>

                <div
                  onClick={() => landscapeInputRef.current?.click()}
                  className={`border border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all group relative overflow-hidden h-48
                    ${
                      landscapeImage
                        ? "border-green-300 bg-green-50"
                        : "border-slate-300 hover:bg-slate-50"
                    }`}
                >
                  {landscapeImage ? (
                    <>
                      <img
                        src={landscapeImage.preview}
                        alt="Landscape preview"
                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                      />
                      <div className="relative z-10 bg-white/90 p-2 rounded-lg shadow-sm">
                        <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-1" />
                        <p className="text-xs font-semibold text-green-700 truncate max-w-[120px]">
                          {landscapeImage.name}
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Click to change
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-10 h-10 rounded-full bg-[#27187e]/10 flex items-center justify-center mb-3 group-hover:bg-[#27187e]/20 transition-colors">
                        <svg
                          className="w-5 h-5 text-[#27187e]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">
                        Upload landscape image
                      </h4>
                      <p className="text-xs text-slate-500">
                        1200 × 628 px • Optional
                      </p>
                    </>
                  )}
                </div>
              </div>

              <div className="bg-orange-50 rounded-lg p-4 border border-orange-100 mt-4">
                <h5 className="flex items-center gap-2 text-xs font-bold text-orange-800 mb-2">
                  <AlertCircle className="w-3.5 h-3.5" /> Content reminders
                </h5>
                <ul className="text-[11px] text-orange-800 space-y-1 list-disc pl-4 opacity-90">
                  <li>No flashy graphics or clickbait</li>
                  <li>No misleading or unverified medical claims</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: Compliance */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ff8600]/10 text-[#ff8600] font-bold text-sm">
                4
              </span>
              <h3 className="text-lg font-bold text-slate-900">Compliance</h3>
            </div>

            <div className="space-y-4">
              <label
                className={`flex gap-3 cursor-pointer group items-start p-3 rounded-lg transition-all ${
                  errorFields.agreedEvidence
                    ? "bg-red-50 border border-red-200"
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={agreedEvidence}
                  onChange={(e) => setAgreedEvidence(e.target.checked)}
                  className="w-4 h-4 mt-1 rounded border-slate-300 text-[#27187e] focus:ring-[#27187e]"
                />
                <span
                  className={`text-xs leading-relaxed ${
                    errorFields.agreedEvidence
                      ? "text-red-700 font-semibold"
                      : "text-slate-600 group-hover:text-slate-900"
                  }`}
                >
                  I confirm all medical claims in this campaign are backed by
                  valid evidence. <span className="text-red-500">*</span>
                </span>
              </label>

              <label
                className={`flex gap-3 cursor-pointer group items-start p-3 rounded-lg transition-all ${
                  errorFields.agreedPolicy
                    ? "bg-red-50 border border-red-200"
                    : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={agreedPolicy}
                  onChange={(e) => setAgreedPolicy(e.target.checked)}
                  className="w-4 h-4 mt-1 rounded border-slate-300 text-[#27187e] focus:ring-[#27187e]"
                />
                <span
                  className={`text-xs leading-relaxed ${
                    errorFields.agreedPolicy
                      ? "text-red-700 font-semibold"
                      : "text-slate-600 group-hover:text-slate-900"
                  }`}
                >
                  I agree to the VAIDYA 247 ad policy and Terms & Conditions.{" "}
                  <span className="text-red-500">*</span>
                </span>
              </label>
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              onClick={handleSubmit}
              disabled={loading || !agreedEvidence || !agreedPolicy}
              className={`w-full font-bold text-base py-4 rounded-xl transition-all flex items-center justify-center gap-2
    ${
      loading || !agreedEvidence || !agreedPolicy
        ? "bg-slate-300 text-slate-500 cursor-not-allowed"
        : "bg-[#ff8600] text-white hover:bg-[#27187e]/90 shadow-xl shadow-[#27187e]/20 active:scale-95"
    }
  `}
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
                <>
                  Submit Campaign <CheckCircle className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
