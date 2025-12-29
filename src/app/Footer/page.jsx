"use client";

import React from "react";
import { Command } from "lucide-react";

// If using Next.js, replace this with:
// import Link from "next/link";
const Link = ({ href, children, className }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-slate-200 bg-white py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 md:flex-row">
        {/* Left Side: Logo (Home Button) & Copyright */}
        <div className="mb-4 flex items-center space-x-2 text-sm text-slate-500 md:mb-0">
          <Link
            href="/"
            className="flex items-center justify-center rounded-lg p-1 hover:bg-slate-100 transition-colors"
          >
            <img
              src="/IM/vaidya icon.png"
              alt="Vaidya Logo"
              className="w-6 h-6 object-contain"
            />
          </Link>

          <span>© {currentYear} Yesca Technologies. All rights reserved.</span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex space-x-6 text-sm font-medium text-slate-600">
          <Link href="#" className="hover:text-black transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-black transition-colors">
            Terms of Service
          </Link>
          <Link href="/Adds" className="hover:text-black transition-colors">
            Contact
          </Link>
        </div>

        {/* Right Side: (Removed intentionally) */}
      </div>
    </footer>
  );
}
