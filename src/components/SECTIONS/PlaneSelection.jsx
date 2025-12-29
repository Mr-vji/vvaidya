"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  ChevronLeft,
  Check,
  Download,
  Building2,
  User,
  Users,
  Calendar,
  MapPin,
  FileText,
  Crown,
  Zap,
  Star,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function PlaneSelection() {
  const [selectedPlan, setSelectedPlan] = useState("standard");
  const [targetAudience, setTargetAudience] = useState(["doctors"]);
  const [agreed, setAgreed] = useState(false);

  // Geography Dropdown State
  const [geoOpen, setGeoOpen] = useState(false);
  const [selectedGeo, setSelectedGeo] = useState("");
  const geoRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (geoRef.current && !geoRef.current.contains(event.target)) {
        setGeoOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [geoRef]);

  const geoOptions = [
    "Hyderabad",
    "Bangalore",
    "Mumbai",
    "Delhi NCR",
    "Chennai",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Tier-2 Cities (South)",
    "Tier-2 Cities (North)",
    "Pan India",
  ];

  // Mock router for display purposes since next/navigation isn't available
  const router = useRouter();

  const plans = [
    {
      id: "starter",
      title: "Starter Card",
      subtitle: "Entry / Discovery · 7 days",
      duration: "7 days",
      price: "₹18,000",
      period: "/ 7 days",
      impressions: "4,000–8,000",
      cpc: "₹12–18",
      features: [
        "Sponsored card in job/shift feed or doctor dashboard",
        "1 creative (image + link) + basic analytics report",
      ],
      cta: "Select Starter",
      footer: "Ideal for small vendors or courses",
      icon: <Zap className="w-5 h-5 text-gray-400" />,
      theme: "gray",
    },
    {
      id: "standard",
      title: "Standard Spotlight",
      subtitle: "Growth · Most popular · 30 days",
      duration: "30 days",
      price: "₹55,000",
      period: "/ month",
      impressions: "20,000–45,000",
      cpc: "₹10–15",
      features: [
        "2 sponsored blocks + 1 education slot (CME / learning)",
        "Creative design help (optional), mid-month & end report",
        "10% discount for quarterly booking",
      ],
      cta: "Selected plan",
      footer: "Best balance of reach & visibility",
      recommended: true,
      icon: <Star className="w-5 h-5 text-blue-600" />,
      theme: "blue",
    },
    {
      id: "premium",
      title: "Premium Takeover",
      subtitle: "Premium · High visibility · 30 days",
      duration: "30 days",
      price: "₹1,50,000",
      period: "/ month",
      impressions: "45,000–90,000",
      cpc: "₹8–12",
      features: [
        "Full-screen spotlight (once/day) + top banner + fixed slots",
        "Dedicated account manager, weekly report, geo + specialty targeting",
        "Add-ons: Push notification blasts (from ₹35,000)",
      ],
      cta: "Select Premium",
      footer: "For big brands, equipment & pharma",
      icon: <Crown className="w-5 h-5 text-amber-500" />,
      theme: "orange",
    },
    {
      id: "enterprise",
      title: "Enterprise Partner",
      subtitle: "Enterprise / Exclusive · 3–12 months",
      duration: "Quarterly",
      price: "₹3.5L – ₹8.0L",
      period: "/ quarter",
      impressions: "Custom scope",
      cpc: "Exclusive",
      features: [
        "Category exclusivity, co-branded content, webinar / CME listing",
        "Premium directory listing, custom integrations & lead delivery",
        "Workshops & product demos in 3 selected cities",
      ],
      cta: "Talk to sales",
      footer: "For hospital chains, OCMs, insurers",
      custom: true,
      icon: <Building2 className="w-5 h-5 text-gray-400" />,
      theme: "slate",
    },
  ];

  const activePlan = useMemo(
    () => plans.find((p) => p.id === selectedPlan) || plans[1],
    [selectedPlan]
  );

  const getThemeGradient = (theme) => {
    switch (theme) {
      case "blue":
        return "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-200";
      case "orange":
        return "bg-gradient-to-br from-orange-500 to-amber-500 shadow-orange-200";
      case "gray":
        return "bg-gradient-to-br from-slate-500 to-gray-600 shadow-slate-200";
      case "slate":
        return "bg-gradient-to-br from-slate-700 to-slate-900 shadow-slate-400";
      default:
        return "bg-gradient-to-br from-blue-500 to-indigo-600 shadow-blue-200";
    }
  };

  const getThemeText = (theme) => {
    switch (theme) {
      case "blue":
        return "text-blue-50";
      case "orange":
        return "text-orange-50";
      default:
        return "text-slate-50";
    }
  };

  const handleAudienceToggle = (value) => {
    if (targetAudience.includes(value)) {
      setTargetAudience(targetAudience.filter((item) => item !== value));
    } else {
      setTargetAudience([...targetAudience, value]);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Confirm your advertising plan
            </h2>
            <p className="text-slate-500 max-w-2xl">
              Review plan details, share a few preferences, and then move to the
              full advertiser submission form.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-400 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">
              Step 1-3
            </span>
            <span className="text-slate-800">Plan</span>
            <ChevronLeft className="w-3 h-3 rotate-180" />
            <span>Preferences</span>
            <ChevronLeft className="w-3 h-3 rotate-180" />
            <span>Confirmation</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column: Plan Selection & Preferences */}
          <div className="lg:col-span-8 space-y-8">
            {/* Section 1: Choose a Plan */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold text-sm">
                    1
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Choose a plan
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-medium hidden sm:block">
                  You can upgrade or customise later
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`relative rounded-xl border-2 transition-all cursor-pointer group hover:shadow-md overflow-hidden flex flex-col
                        ${
                          selectedPlan === plan.id
                            ? "border-blue-600 bg-blue-50/30"
                            : "border-slate-200 hover:border-slate-300 bg-white"
                        }`}
                  >
                    {/* Badge / Header Area */}
                    <div className="flex justify-between items-start p-5 pb-2">
                      <div className="pr-2 flex-1">
                        <div className="flex gap-2 mb-2 min-h-[20px]">
                          {plan.recommended && (
                            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                              Recommended
                            </span>
                          )}
                          {plan.custom && (
                            <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide">
                              Custom
                            </span>
                          )}
                        </div>

                        <h4 className="font-bold text-slate-900 text-lg">
                          {plan.title}
                        </h4>
                        <p className="text-xs text-slate-500 font-medium mt-1">
                          {plan.subtitle}
                        </p>
                      </div>
                      <div className="mt-1 shrink-0">{plan.icon}</div>
                    </div>

                    <div className="px-5 mb-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-slate-900">
                          {plan.price}
                        </span>
                        <span className="text-sm text-slate-500 font-medium">
                          {plan.period}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        Est. {plan.impressions} impressions • ~{plan.cpc} CPC
                      </p>
                    </div>

                    <ul className="px-5 space-y-2 mb-6 min-h-[60px]">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between mt-auto px-5 py-4 border-t border-slate-100 bg-white/50">
                      <button
                        className={`text-sm font-semibold px-4 py-2 rounded-lg transition-colors w-full sm:w-auto
                          ${
                            selectedPlan === plan.id
                              ? "bg-blue-600 text-white shadow-sm"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          }`}
                      >
                        {selectedPlan === plan.id ? "Selected" : "Select"}
                      </button>
                      <span className="text-[10px] text-slate-400 hidden sm:block text-right max-w-[120px] leading-tight">
                        {plan.footer}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 2: Quick Preferences */}
            <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600 font-bold text-sm">
                    2
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Quick preferences
                  </h3>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-xs text-slate-500 font-medium block">
                    Helps us tailor placements
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-semibold text-slate-800">
                      Primary target audience
                    </label>
                    <span className="text-xs text-slate-400">
                      Select all that apply
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => handleAudienceToggle("doctors")}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all
                          ${
                            targetAudience.includes("doctors")
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                          }`}
                    >
                      <User className="w-4 h-4" /> Doctors
                    </button>
                    <button
                      onClick={() => handleAudienceToggle("hospitals")}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all
                          ${
                            targetAudience.includes("hospitals")
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                          }`}
                    >
                      <Building2 className="w-4 h-4" /> Hospitals
                    </button>
                    <button
                      onClick={() => {
                        setTargetAudience(["doctors", "hospitals"]);
                      }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-medium transition-all
                          ${
                            targetAudience.length === 2
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                          }`}
                    >
                      <Users className="w-4 h-4" /> Both doctors & hospitals
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-800">
                      Key specialties
                    </label>
                    <span className="text-xs text-slate-400">Optional</span>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. ICU, Anaesthesia, Cardiology, Emergency, Internal Medicine"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
                    />
                    <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Geography with Dropdown */}
                  <div className="relative" ref={geoRef}>
                    <label className="text-sm font-semibold text-slate-800 mb-2 block">
                      Target geography
                    </label>
                    <div
                      className="relative cursor-pointer"
                      onClick={() => setGeoOpen(!geoOpen)}
                    >
                      <input
                        type="text"
                        readOnly
                        value={selectedGeo}
                        placeholder="Select region/city..."
                        className="w-full pl-10 pr-10 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all cursor-pointer bg-white"
                      />
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <ChevronDown
                        className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 transition-transform ${
                          geoOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {geoOpen && (
                      <div className="absolute z-10 top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl border border-slate-100 max-h-60 overflow-y-auto">
                        {geoOptions.map((city) => (
                          <div
                            key={city}
                            className="px-4 py-3 hover:bg-slate-50 cursor-pointer text-sm text-slate-700 transition-colors border-b border-slate-50 last:border-0"
                            onClick={() => {
                              setSelectedGeo(city);
                              setGeoOpen(false);
                            }}
                          >
                            {city}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Date Picker */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-slate-800">
                        Preferred start date
                      </label>
                      <span className="text-xs text-slate-400">
                        Approximate
                      </span>
                    </div>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm bg-white transition-all text-slate-600 appearance-none min-h-[46px]"
                        onClick={(e) =>
                          e.target.showPicker && e.target.showPicker()
                        }
                      />
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-800">
                      Anything we should know?
                    </label>
                    <span className="text-xs text-slate-400">Optional</span>
                  </div>
                  <textarea
                    rows="3"
                    placeholder="Share any specific KPIs, launch timelines, or compliance notes your team follows."
                    className="w-full p-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm resize-none transition-all"
                  ></textarea>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-6 space-y-6">
              {/* Summary Card */}
              <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-600 font-bold text-xs">
                      3
                    </span>
                    <h3 className="font-bold text-slate-900">Plan summary</h3>
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wide font-medium">
                    Review key terms
                  </span>
                </div>

                {/* Dynamic Plan Card */}
                <div className="p-6">
                  <div
                    className={`${getThemeGradient(
                      activePlan.theme
                    )} rounded-xl p-5 text-white shadow-lg mb-6 relative overflow-hidden transition-all duration-300`}
                  >
                    {activePlan.recommended && (
                      <div className="absolute top-0 right-0 p-3">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Most popular
                        </span>
                      </div>
                    )}

                    <p
                      className={`${
                        activePlan.theme === "orange"
                          ? "text-orange-100"
                          : "text-white/80"
                      } text-xs font-medium mb-1`}
                    >
                      Selected plan
                    </p>
                    <h4 className="text-xl font-bold mb-4">
                      {activePlan.title}
                    </h4>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span
                          className={`${
                            activePlan.theme === "orange"
                              ? "text-orange-100"
                              : "text-white/80"
                          }`}
                        >
                          Duration
                        </span>
                        <span className="font-medium">
                          {activePlan.duration}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span
                          className={`${
                            activePlan.theme === "orange"
                              ? "text-orange-100"
                              : "text-white/80"
                          }`}
                        >
                          Est. Impressions
                        </span>
                        <span className="font-medium">
                          {activePlan.impressions}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-white/10 pb-2">
                        <span
                          className={`${
                            activePlan.theme === "orange"
                              ? "text-orange-100"
                              : "text-white/80"
                          }`}
                        >
                          Est. CPC
                        </span>
                        <span className="font-medium">
                          {activePlan.cpc} / click
                        </span>
                      </div>
                    </div>

                    <ul
                      className={`text-xs space-y-1.5 ${getThemeText(
                        activePlan.theme
                      )} opacity-90 mb-6`}
                    >
                      {activePlan.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-white">•</span> {feat}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-end justify-between pt-4 border-t border-white/20">
                      <div>
                        <p
                          className={`${
                            activePlan.theme === "orange"
                              ? "text-orange-100"
                              : "text-white/80"
                          } text-xs font-medium`}
                        >
                          Estimated fee
                        </p>
                        <p
                          className={`${
                            activePlan.theme === "orange"
                              ? "text-orange-200"
                              : "text-white/60"
                          } text-[10px]`}
                        >
                          Taxes extra as applicable
                        </p>
                      </div>
                      <span className="text-xl font-bold">
                        {activePlan.price}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      I understand that final pricing, discounts, and add-ons
                      will be confirmed by the VAIDYA 247 team before
                      activation.
                    </p>

                    <label className="flex gap-3 cursor-pointer group select-none">
                      <div className="relative flex items-start mt-0.5">
                        <input
                          type="checkbox"
                          className="peer sr-only"
                          checked={agreed}
                          onChange={(e) => setAgreed(e.target.checked)}
                        />
                        {/* Checkbox Background */}
                        <div
                          className={`w-5 h-5 border-2 rounded transition-all flex items-center justify-center
                            ${
                              agreed
                                ? "bg-blue-600 border-blue-600"
                                : "border-slate-300 bg-white group-hover:border-slate-400"
                            }`}
                        >
                          <Check
                            className={`w-3.5 h-3.5 text-white ${
                              agreed ? "block" : "hidden"
                            }`}
                          />
                        </div>
                      </div>
                      <span className="text-xs text-slate-600 group-hover:text-slate-800 transition-colors">
                        I agree that all placements are subject to internal
                        review, brand fit, and medical advertising compliance.
                      </span>
                    </label>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <h5 className="font-bold text-slate-900 text-sm mb-2">
                      Next step
                    </h5>
                    <p className="text-xs text-slate-500 mb-4">
                      Complete the full advertiser submission so our team can
                      validate compliance, confirm timelines, and schedule your
                      campaign.
                    </p>

                    <div className="grid gap-3">
                      <button
                        onClick={() => router.push("/AdvertiserForm")}
                        disabled={!agreed}
                        className={`w-full font-semibold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group
                          ${
                            agreed
                              ? "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200"
                              : "bg-slate-300 text-slate-500 cursor-not-allowed"
                          }`}
                      >
                        Continue to full form
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button className="w-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                        <Download className="w-4 h-4 text-slate-400" />
                        Download plan PDF
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
