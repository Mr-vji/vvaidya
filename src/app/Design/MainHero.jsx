"use client";
import React from "react";
import HeroCanvas from "../THREED/HeroCanvas";

export default function MainHero() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans overflow-x-hidden relative flex flex-col">
      {/* Background Gradients */}
      {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-blue-50 rounded-full blur-[100px] opacity-40"></div>
      </div> */}

      {/* HERO SECTION */}
      <main className="max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-10 md:gap-14 items-center relative z-10 ">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center w-full">
          <div className="text-left max-w-3xl w-full">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200  bg-[#27187e]/10 text-[#27187e] backdrop-blur-sm text-sm font-medium text-gray-600 mb-6">
              verified healthcare network
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
              Connect hospitals and doctors for <br /> duties in minutes.
            </h1>

            <p className="text-gray-500 text-base md:text-lg lg:text-xl max-w-xl mb-8 leading-relaxed">
              Vaidya 247 is a healthcare workforce platform that connects
              hospitals with verified doctors for duty shifts, speciality
              visits, and flexible schedules without manual calls.
            </p>

            <div className="flex flex-row items-center gap-4 w-full">
              {/* <div className="flex flex-row items-center bg-[#ff8600]/30 radiused-full rounded-[18px] p-4 gap-4 w-full"> */}

              <button
                onClick={() => window.open("https://yesca.in/", "_blank")}
                className="
    bg-black rounded-xl shadow-xl p-1 w-44
    hover:scale-105
    active:scale-95 active:shadow-lg
    transition-transform transition-shadow duration-300 ease-out
  "
              >
                <img
                  src="im/google-play-store-seeklogo.png"
                  alt="Google Play"
                  className="w-full h-12 object-contain"
                />
              </button>

              <button
                onClick={() => window.open("https://yesca.in/", "_blank")}
                className="
    bg-black rounded-xl shadow-xl p-1 w-44
    hover:scale-105
    active:scale-95 active:shadow-lg
    transition-transform transition-shadow duration-300 ease-out
  "
              >
                <img
                  src="im/apple store.png"
                  alt="App Store"
                  className="w-full h-12 object-contain"
                />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="h-[500px] lg:h-[600px] flex items-center justify-center relative w-full">
          <div className="w-full h-full absolute inset-0">
            <HeroCanvas />
          </div>
        </div>
      </main>
    </div>
  );
}
