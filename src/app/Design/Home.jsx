"use client";

import React from "react";
import {
  CheckCircle,
  Lock,
  Users,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import HeroCanvas from "../THREED/HeroCanvas";

export default function Home() {
  const handleAdvertise = () => {
    window.open("#", "_self");
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden relative flex flex-col">
      {/* HERO SECTION */}
      <main className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-10 md:gap-14 items-center relative z-10 py-8 lg:py-0">
        {/* LEFT SECTION */}
        <div className="flex flex-col justify-center w-full">
          <div className="text-left max-w-3xl w-full">
            {/* Header Badge */}
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-[#27187e]/10 text-[#27187e] backdrop-blur-sm text-sm font-medium mb-6">
              verified healthcare network
            </div>

            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-slate-900">
              On-demand healthcare shifts you can trust.
            </h1>

            {/* Subheading */}
            <p className="text-gray-500 text-base md:text-base lg:text-lg max-w-xl mb-8 leading-relaxed">
              Verified doctors and hospitals connected for as-needed medical
              coverage.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-row items-center gap-4 w-full mb-8">
              <button
                onClick={() => window.open("https://yesca.in/", "_blank")}
                className="bg-[#1c1a15] rounded-xl shadow-xl p-1 w-44 hover:scale-105 active:scale-95 active:shadow-lg transition-transform transition-shadow duration-300 ease-out"
              >
                <img
                  src="/gp.png"
                  alt="Google Play"
                  className="w-full h-12 object-contain"
                />
              </button>

              <button
                onClick={() => window.open("https://yesca.in/", "_blank")}
                className="bg-[#000000] rounded-xl shadow-xl p-1 w-44 hover:scale-105 active:scale-95 active:shadow-lg transition-transform transition-shadow duration-300 ease-out"
              >
                <img
                  src="/apple.png"
                  alt="App Store"
                  className="w-full h-12 object-contain"
                />
              </button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-sm">
                <CheckCircle
                  size={14}
                  className="text-blue-600 flex-shrink-0"
                />
                <span className="text-xs text-gray-700 whitespace-nowrap">
                  Verified doctors
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-sm">
                <Lock size={14} className="text-blue-600 flex-shrink-0" />
                <span className="text-xs text-gray-700 whitespace-nowrap">
                  Secure, healthcare-first
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border border-gray-200 shadow-sm">
                <Users size={14} className="text-blue-600 flex-shrink-0" />
                <span className="text-xs text-gray-700 whitespace-nowrap">
                  Trusted clinical network
                </span>
              </div>
            </div>

            {/* Announcements Section */}
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-md max-w-md">
              <div className="flex items-start gap-3">
                <MessageCircle
                  size={18}
                  className="text-gray-400 mt-0.5 flex-shrink-0"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-sm mb-1">
                    Healthcare announcements (reviewed)
                  </h3>
                  <p className="text-xs text-gray-600">
                    Limited, healthcare-only announcements from verified
                    organizations.
                  </p>

                  <button
                    onClick={() => window.open("/advertise", "_self")}
                    className="inline-flex items-center gap-2 
             text-blue-600 hover:text-blue-700 
             font-semibold text-xs mt-3 
             transition-all duration-200 
             hover:scale-105 
             cursor-pointer"
                  >
                    Go to advertise page
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="h-[500px] lg:h-[600px] flex items-center justify-center relative w-full">
          {/* Your Dashboard Component Goes Here */}
          <HeroCanvas />
        </div>
      </main>
    </div>
  );
}
