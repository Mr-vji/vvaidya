// Header.jsx
"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <nav className="flex items-center justify-between text-black px-4 md:px-6 py-4 max-w-7xl mx-auto w-full relative z-20">
      {/* Left Logo + Title */}
      <Link href="/">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center bg-white">
            <img
              src="/im/vaidya icon.png"
              alt="Site Icon"
              className="w-8 h-8 object-contain"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-lg md:text-xl font-bold tracking-tight">
              VAIDYA 247
            </span>
            <span className="text-xs md:text-sm font-medium opacity-80 -mt-1">
              Yesca Technologies
            </span>
          </div>
        </div>
      </Link>

      {/* Right Buttons */}
      <div className="flex items-center gap-4">
        <Link href="/Adds">
          <button
            className="text-white px-4 md:px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/20"
            style={{ backgroundColor: "#27187e" }}
          >
            Get in Touch
          </button>
        </Link>
      </div>
    </nav>
  );
}
