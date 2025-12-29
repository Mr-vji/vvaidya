"use client";
import React, { useState, useRef } from "react";
import {
  ChevronLeft,
  Calendar,
  MapPin,
  Upload,
  Link as LinkIcon,
  CheckCircle,
  AlertCircle,
  Building,
  Globe,
  Mail,
  Image as ImageIcon,
} from "lucide-react";

export default function AdvertiserForm() {
  const [targetAudience, setTargetAudience] = useState(["doctors"]);
  const [activeStep, setActiveStep] = useState(1);
  const [squareImage, setSquareImage] = useState(null);
  const [landscapeImage, setLandscapeImage] = useState(null);

  const [agreedEvidence, setAgreedEvidence] = useState(false);
  const [agreedPolicy, setAgreedPolicy] = useState(false);

  // Refs for file inputs
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

    file.preview = URL.createObjectURL(file); // ✅ create preview
    setImage(file);
  };

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    if (!agreedEvidence || !agreedPolicy) return;

    setLoading(true);

    const form = e.target;

    const formData = new FormData();

    formData.append("companyLegalName", form.companyLegalName.value);
    formData.append("brandName", form.brandName.value);
    formData.append("industry", form.industry.value);
    formData.append("website", form.website.value);
    formData.append("officialEmail", form.officialEmail.value);
    formData.append("mobile", form.mobile.value);

    formData.append("targetAudience", JSON.stringify(targetAudience));
    formData.append("geography", form.geography.value);
    formData.append("startDate", form.startDate.value);
    formData.append("endDate", form.endDate.value);

    formData.append("headline", form.headline.value);
    formData.append("description", form.description.value);

    if (squareImage) formData.append("squareImage", squareImage);
    if (landscapeImage) formData.append("landscapeImage", landscapeImage);

    try {
      const form = e.target;
      const formData = new FormData(form);

      if (squareImage) formData.append("squareImage", squareImage);
      if (landscapeImage) formData.append("landscapeImage", landscapeImage);

      const res = await fetch("/api/advertiser", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        form.reset();
        setAgreedEvidence(false);
        setAgreedPolicy(false);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Main Content */}
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12"
      >
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
                  Company legal name
                </label>
                <div className="relative">
                  <input
                    name="companyLegalName"
                    type="text"
                    placeholder="e.g. Acme Healthcare Pvt Ltd"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-[#27187e] focus:ring-2 focus:ring-[#27187e]/20 outline-none text-sm transition-all"
                  />
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Brand name
                </label>
                <input
                  name="brandName"
                  type="text"
                  placeholder="e.g. Acme Critical Care"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#27187e] focus:ring-2 focus:ring-[#27187e]/20 outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Industry category
                </label>
                <div className="relative">
                  <select
                    name="industry"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#27187e] focus:ring-2 focus:ring-[#27187e]/20 outline-none text-sm appearance-none bg-white text-slate-600 transition-all"
                  >
                    <option>Select category</option>
                    <option>Pharmaceuticals</option>
                    <option>Medical Equipment</option>
                  </select>
                  <ChevronLeft className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 -rotate-90 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Website URL
                </label>
                <div className="relative">
                  <input
                    name="website"
                    type="text"
                    placeholder="e.g. https://www.acme.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-[#27187e] focus:ring-2 focus:ring-[#27187e]/20 outline-none text-sm transition-all"
                  />
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Official email ID
                </label>
                <div className="relative">
                  <input
                    name="officialEmail"
                    type="email"
                    placeholder="marketing@acme.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-[#27187e] focus:ring-2 focus:ring-[#27187e]/20 outline-none text-sm transition-all"
                  />
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Mobile number
                </label>
                <div className="relative">
                  <input
                    name="mobile"
                    type="tel"
                    placeholder="98765 43210"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-[#27187e] focus:ring-2 focus:ring-[#27187e]/20 outline-none text-sm transition-all"
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
                  Target audience
                </label>
                <div className="flex flex-wrap gap-3">
                  {["Doctors", "Hospitals", "Clinics / Diagnostic centers"].map(
                    (audience) => (
                      <button
                        key={audience}
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
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Target geography
                </label>
                <div className="relative">
                  <select
                    name="geography"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-[#27187e] focus:ring-2 focus:ring-[#27187e]/20 outline-none text-sm appearance-none bg-white text-slate-600 transition-all"
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
                    Start Date
                  </label>
                  <div className="relative">
                    <input
                      name="startDate"
                      type="date"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-[#27187e] focus:ring-2 focus:ring-[#27187e]/20 outline-none text-sm text-slate-600 transition-all"
                    />
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-800 block mb-2">
                    End Date
                  </label>
                  <div className="relative">
                    <input
                      name="endDate"
                      type="date"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-[#27187e] focus:ring-2 focus:ring-[#27187e]/20 outline-none text-sm text-slate-600 transition-all"
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
                  Headline
                </label>
                <input
                  name="headline"
                  type="text"
                  placeholder="e.g. ICU monitor solutions trusted by 120+ tier-2 hospitals"
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#27187e] focus:ring-2 focus:ring-[#27187e]/20 outline-none text-sm transition-all"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800 block mb-2">
                  Short description
                </label>
                <textarea
                  name="description"
                  rows="2"
                  placeholder="Explain the value in simple, factual language."
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#27187e] focus:ring-2 focus:ring-[#27187e]/20 outline-none text-sm resize-none transition-all"
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-4">
                {/* Hidden File Inputs */}
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

                {/* Square Upload Box */}
                <div
                  onClick={() => squareInputRef.current.click()}
                  className={`border border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-all group relative overflow-hidden h-48
                    ${
                      squareImage
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
                        Upload square image
                      </h4>
                      <p className="text-xs text-slate-500">
                        1080 × 1080 px • PNG/JPG
                      </p>
                    </>
                  )}
                </div>

                {/* Landscape Upload Box */}
                <div
                  onClick={() => landscapeInputRef.current.click()}
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
                        <ImageIcon className="w-5 h-5 text-[#27187e]" />
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
              <label className="flex gap-3 cursor-pointer group items-start">
                <input
                  type="checkbox"
                  checked={agreedEvidence}
                  onChange={(e) => setAgreedEvidence(e.target.checked)}
                  className="w-4 h-4 mt-1 rounded border-slate-300 text-[#27187e] focus:ring-[#27187e]"
                />
                <span className="text-xs text-slate-600 group-hover:text-slate-900 leading-relaxed">
                  I confirm all medical claims in this campaign are backed by
                  valid evidence.
                </span>
              </label>

              <label className="flex gap-3 cursor-pointer group items-start">
                <input
                  type="checkbox"
                  checked={agreedPolicy}
                  onChange={(e) => setAgreedPolicy(e.target.checked)}
                  className="w-4 h-4 mt-1 rounded border-slate-300 text-[#27187e] focus:ring-[#27187e]"
                />
                <span className="text-xs text-slate-600 group-hover:text-slate-900 leading-relaxed">
                  I agree to the VAIDYA 247 ad policy and Terms & Conditions.
                </span>
              </label>
            </div>
          </section>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={!agreedEvidence || !agreedPolicy || loading}
              className={`w-full font-bold text-base py-4 rounded-xl transition-all flex items-center justify-center gap-2
    ${
      !agreedEvidence || !agreedPolicy || loading
        ? "bg-slate-300 text-slate-500 cursor-not-allowed"
        : "bg-[#ff8600] text-white hover:bg-[#27187e]/90 shadow-xl shadow-[#27187e]/20"
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
                  Submitting...
                </>
              ) : (
                <>
                  Submit Campaign <CheckCircle className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
