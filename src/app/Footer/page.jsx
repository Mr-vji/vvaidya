import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full px-4 py-8">
      <footer className="w-full bg-gradient-to-br from-[#2d1b69] via-[#251555] to-[#1a0f3d] rounded-[32px] mx-auto max-w-[1400px]">
        <div className="px-14 py-12">
          <div className="flex justify-between items-start gap-8">
            {/* Left Section */}
            <div className="flex-1 max-w-2xl">
              <h3 className="text-white text-[17px] font-semibold mb-4 tracking-tight">
                Healthcare-first. Trust-led.
              </h3>

              <p className="text-gray-200/90 text-[15px] leading-relaxed mb-2">
                Privacy & data responsibility upheld for all users.
              </p>

              <p className="text-gray-200/90 text-[15px] leading-relaxed mb-2">
                Contact: partnerships@vaidya.health
              </p>

              <p className="text-gray-200/90 text-[15px] leading-relaxed mb-6">
                All announcements are reviewed for medical compliance and
                ethical standards.
              </p>

              <div className="flex items-center gap-4 mb-4">
                <a
                  href="/terms"
                  className="text-[#f5a742] hover:text-[#ffc168] text-[15px] font-medium transition-colors"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/Privacy-Policy"
                  className="text-[#f5a742] hover:text-[#ffc168] text-[15px] font-medium transition-colors"
                >
                  Privacy Policy
                </a>
              </div>

              <p className="text-gray-300/80 text-[14px]">
                © {currentYear} Yesca Technologies · Vaidya 247. All rights
                reserved.
              </p>
            </div>

            {/* Right Section - Social Icons */}
            <div className="flex gap-5 items-start pt-1">
              <a
                href="https://in.linkedin.com/company/yescatechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-all hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter size={22} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.instagram.com/vaidya.247?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
