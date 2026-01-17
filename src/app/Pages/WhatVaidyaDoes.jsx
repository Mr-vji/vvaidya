"use client";

import React from "react";

export default function WhatVaidyaDoes() {
  return (
    <div className="min-h-auto bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 md:mb-12">
          <p className="text-orange-600 text-xs md:text-sm font-semibold mb-2 md:mb-3">
            What Vaidya does
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Designed for real-world healthcare workflows
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-2xl leading-relaxed">
            Reframed as clear use-cases for hospitals and doctors inside a
            healthcare-only network.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* For Hospitals Card */}
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200 hover:shadow-sm transition-shadow duration-300">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              For Hospitals
            </h3>

            <div className="space-y-3">
              <p className="text-gray-600 text-sm md:text-base">
                Urgent & planned doctor requirements
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Shift-based & short-term staffing
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Verified professionals only
              </p>
            </div>
          </div>

          {/* For Doctors Card */}
          <div className="bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200 hover:shadow-sm transition-shadow duration-300">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              For Doctors
            </h3>

            <div className="space-y-3">
              <p className="text-gray-600 text-sm md:text-base">
                Flexible gigs & duties
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Transparent shift details
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                Direct hospital access
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
