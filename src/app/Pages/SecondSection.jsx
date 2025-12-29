import React from "react";
import {
  Clock,
  UserCheck,
  CalendarDays,
  Wallet,
  SlidersHorizontal,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

function SecondSection() {
  // This shadow has 0 vertical offset, so it appears on top and bottom equally.
  // Applied to all cards permanently.
  const cardShadow =
    "shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:shadow-[0_0_25px_rgba(0,0,0,0.15)]";

  return (
    <section className="min-h-screen w-full font-sans bg-white flex flex-col justify-center items-center pb-16 pt-5 px-4 sm:px-6 lg:px-8">
      {/* Bento Grid Container */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">
        {/* 1. Hero / Header Card (Spans 2x2) */}
        <div
          className={`lg:col-span-2 lg:row-span-2 bg-white rounded-3xl p-8 md:p-10 flex flex-col justify-between ${cardShadow} transition-transform hover:scale-[1.01] duration-300`}
        >
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-bold tracking-wider uppercase text-[#27187e]">
              Why Vaidya 247
            </span>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight text-[#ff8600]">
              A structured, transparent way to manage duties
            </h2>
          </div>
          <div className="mt-8">
            <p className="text-gray-700 text-lg font-medium max-w-md leading-relaxed mb-6">
              Built for busy hospitals and practising doctors who need a
              reliable way to discover, schedule, and complete duties.
            </p>
            <Link
              href="/Contact"
              className="bg-[#ff8600] text-white px-6 py-3 rounded-xl font-semibold 
                 hover:bg-[#e67a00] transition-colors inline-flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 2. Flexible Duties */}
        <div
          className={`bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-between ${cardShadow} transition-all duration-300 group`}
        >
          <div className="w-12 h-12 bg-[#ff8600]/10 rounded-2xl flex items-center justify-center text-[#ff8600] group-hover:scale-110 transition-transform">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#ff8600] mb-2">
              Flexible duties
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pick duties that match your speciality, timing, and location.
            </p>
          </div>
        </div>

        {/* 3. Verified Doctors */}
        <div
          className={`bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-between ${cardShadow} transition-all duration-300 group`}
        >
          <div className="w-12 h-12 bg-[#27187e]/10 rounded-2xl flex items-center justify-center text-[#27187e] group-hover:scale-110 transition-transform">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#27187e] mb-2">
              Verified doctors
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              100% verified through AP/TS medical registries.
            </p>
          </div>
        </div>

        {/* 4. Organised Shift Management */}
        <div
          className={`lg:col-span-2 bg-white rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center gap-6 ${cardShadow} transition-all duration-300`}
        >
          <div className="bg-[#ff8600]/10 p-4 rounded-2xl">
            <CalendarDays className="w-8 h-8 text-[#ff8600]" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#ff8600] mb-2">
              Organised shift management
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Keep track of who is on duty, upcoming shifts, and completed work
              in one place.
            </p>
          </div>
        </div>

        {/* 5. Transparent Payments */}
        <div
          className={`bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-between ${cardShadow} transition-all duration-300 group`}
        >
          <div className="w-12 h-12 bg-[#27187e]/10 rounded-2xl flex items-center justify-center text-[#27187e] group-hover:scale-110 transition-transform">
            <Wallet className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#27187e] mb-2">
              Transparent payments
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Clear fee visibility and structured payouts.
            </p>
          </div>
        </div>

        {/* 6. Speciality Filters */}
        <div
          className={`bg-white rounded-3xl p-8 border border-gray-100 flex flex-col justify-between ${cardShadow} transition-all duration-300 group`}
        >
          <div className="w-12 h-12 bg-[#ff8600]/10 rounded-2xl flex items-center justify-center text-[#ff8600] group-hover:scale-110 transition-transform">
            <SlidersHorizontal className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#ff8600] mb-2">
              Speciality filters
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Filter duties by speciality or hospital type instantly.
            </p>
          </div>
        </div>

        {/* 7. Secure Verification */}
        <div
          className={`lg:col-span-2 bg-white rounded-3xl p-8 flex flex-col justify-center items-center text-center ${cardShadow} transition-all duration-300`}
        >
          <div className="mb-4 bg-[#27187e]/10 p-3 rounded-full backdrop-blur-sm">
            <ShieldCheck className="w-8 h-8 text-[#27187e]" />
          </div>
          <h3 className="text-xl font-bold text-[#27187e] mb-2">
            Secure verification
          </h3>
          <p className="text-gray-600 max-w-md">
            Hospitals and doctors undergo strict onboarding and authentication
            checks.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
