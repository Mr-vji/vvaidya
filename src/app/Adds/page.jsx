"use client";
import React, { useState, useEffect, useRef } from "react";
// import { sendEmail } from "@/app/actions/sendEmail";

import {
  Megaphone,
  TrendingUp,
  Users,
  Target,
  Mail,
  CheckCircle,
  ArrowRight,
  Globe2,
  Send,
} from "lucide-react";

// --- Rolling Digit Animation ---
const RollingDigit = ({ digit, trigger }) => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (trigger && !isNaN(parseInt(digit))) {
      const timeout = setTimeout(() => {
        setPosition(parseInt(digit));
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [trigger, digit]);

  if (isNaN(parseInt(digit))) {
    return <span>{digit}</span>;
  }

  return (
    <div className="relative inline-block h-[1em] overflow-hidden align-bottom">
      <div
        className="flex flex-col transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
        style={{ transform: `translateY(-${position * 10}%)` }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="h-[1em] flex items-center justify-center">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

const StatTicker = ({ value, suffix, trigger }) => {
  const chars = value.toString().split("");

  return (
    <div className="inline-flex items-baseline font-bold tabular-nums leading-none tracking-tight">
      {chars.map((char, idx) => (
        <RollingDigit key={`${idx}-${char}`} digit={char} trigger={trigger} />
      ))}
      {suffix && <span>{suffix}</span>}
    </div>
  );
};

// --- MAIN COMPONENT ---
export default function Adds() {
  const [formStatus, setFormStatus] = useState("idle"); // idle | submitting | success | error
  const [startAnimation, setStartAnimation] = useState(false);
  const statsSectionRef = useRef(null);

  // Start number animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsSectionRef.current) observer.observe(statsSectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Glassy Input Styles
  const glassyInputClass =
    "w-full px-4 py-3 rounded-xl border border-black/40 bg-white/50 backdrop-blur-xl shadow-lg shadow-gray-200/20 focus:bg-white/80 focus:border-[#ff8600] focus:ring-2 focus:ring-[#ff8600]/20 outline-none transition-all text-[#27187e] placeholder-[#27187e]/40 font-medium";

  // SERVER ACTION HANDLER
  async function handleForm(formData) {
    setFormStatus("submitting");

    const result = await sendEmail(formData);

    if (result?.success) {
      setFormStatus("success");
    } else {
      setFormStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-white font-sans text-[#27187e]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white pt-20 pb-32">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#ff8600]/10 via-white to-white -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff8600]/10 text-[#ff8600] font-semibold text-sm mb-8 border border-[#ff8600]/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff8600] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff8600]"></span>
            </span>
            Accepting New Partners for Q4
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#27187e] mb-6">
            Amplify Your Brand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#27187e] to-[#27187e]">
              Where It Matters
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10">
            Reach millions of engaged users with high-impact native advertising.
            Real-time analytics, precise targeting, and premium placements
            await.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 text-lg font-bold text-white bg-[#ff8600] rounded-full hover:bg-[#e57800] transition-all shadow-xl hover:scale-105 flex items-center justify-center"
            >
              Start Your Campaign <ArrowRight className="ml-2 w-5 h-5" />
            </a>

            <button className="px-8 py-4 text-lg font-bold text-[#27187e] bg-white border border-[#27187e]/20 rounded-full hover:bg-gray-50 transition-all">
              Download Media Kit
            </button>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsSectionRef} className="bg-[#27187e] py-16 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#ff8600]/20">
            <div className="p-4">
              <div className="text-5xl font-bold text-[#ff8600] mb-2 h-14">
                <StatTicker value="2.5" suffix="M+" trigger={startAnimation} />
              </div>
              <div className="text-blue-100 uppercase tracking-wide text-sm">
                Active Monthly Users
              </div>
            </div>

            <div className="p-4">
              <div className="text-5xl font-bold text-[#ff8600] mb-2 h-14">
                <StatTicker value="15" suffix=" min" trigger={startAnimation} />
              </div>
              <div className="text-blue-100 uppercase tracking-wide text-sm">
                Avg. Session Duration
              </div>
            </div>

            <div className="p-4">
              <div className="text-5xl font-bold text-[#ff8600] mb-2 h-14">
                <StatTicker value="8.4" suffix="%" trigger={startAnimation} />
              </div>
              <div className="text-blue-100 uppercase tracking-wide text-sm">
                Average CTR
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#27187e] mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide the tools and audience you need to scale your business
              effectively.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* 1 */}
            <div className="group p-8 rounded-3xl bg-gray-50 shadow-xl border border-gray-100 transition-all">
              <div className="w-14 h-14 bg-[#27187e]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#27187e] transition-colors">
                <Target className="w-7 h-7 text-[#27187e] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#27187e] mb-3">
                Hyper-Targeting
              </h3>
              <p className="text-gray-600">
                Reach exactly who you need based on behavior, location,
                demographics, and interests. Zero wasted impressions.
              </p>
            </div>

            {/* 2 */}
            <div className="p-8 rounded-3xl bg-gray-50 shadow-xl border border-gray-100 transition-all">
              <div className="w-14 h-14 bg-[#ff8600]/10 rounded-2xl flex items-center justify-center mb-6">
                <Megaphone className="w-7 h-7 text-[#ff8600]" />
              </div>
              <h3 className="text-2xl font-bold text-[#27187e] mb-3">
                Native Formats
              </h3>
              <p className="text-gray-600">
                Ads that blend naturally with content, improving engagement
                rates.
              </p>
            </div>

            {/* 3 */}
            <div className="p-8 rounded-3xl bg-gray-50 shadow-xl border border-gray-100 transition-all">
              <div className="w-14 h-14 bg-[#27187e]/10 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-[#27187e]" />
              </div>
              <h3 className="text-2xl font-bold text-[#27187e] mb-3">
                Real-Time ROI
              </h3>
              <p className="text-gray-600">
                Track clicks, conversions, and spend with full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[2.5rem] shadow-xl border overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* LEFT */}
              <div className="bg-[#27187e] p-12 text-white flex flex-col justify-between relative">
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6">
                    Let's build something great.
                  </h3>
                  <p className="text-blue-100 text-lg mb-12">
                    Our team will craft a custom proposal based on your goals
                    and budget.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-[#ff8600]" />
                      <div>
                        <div className="font-semibold text-lg">Email Sales</div>
                        <div className="text-blue-100">vaidya@gmail.com</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Globe2 className="w-6 h-6 text-[#ff8600]" />
                      <div>
                        <div className="font-semibold text-lg">
                          Global Reach
                        </div>
                        <div className="text-blue-100">
                          Available in 150+ Countries
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Users className="w-6 h-6 text-[#ff8600]" />
                      <div>
                        <div className="font-semibold text-lg">Support</div>
                        <div className="text-blue-100">
                          Dedicated Account Manager
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT FORM */}
              <div className="p-12 bg-white">
                {formStatus === "success" ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#27187e] mb-2">
                      Request Sent!
                    </h3>
                    <p className="text-gray-600">
                      Our ad team will review your details and get back within
                      24h.
                    </p>

                    <button
                      onClick={() => setFormStatus("idle")}
                      className="mt-8 text-[#ff8600] font-semibold hover:underline"
                    >
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form action={handleForm} className="space-y-6">
                    {/* FULL NAME */}
                    <div>
                      <label className="block text-sm font-semibold text-[#27187e] mb-2">
                        Full Name
                      </label>
                      <input
                        required
                        type="text"
                        name="fullName"
                        placeholder="John Appleseed"
                        className={glassyInputClass}
                      />
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label className="block text-sm font-semibold text-[#27187e] mb-2">
                        Work Email
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        className={glassyInputClass}
                      />
                    </div>

                    {/* COMPANY + BUDGET */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#27187e] mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          name="company"
                          placeholder="Your Brand"
                          className={glassyInputClass}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#27187e] mb-2">
                          Monthly Budget
                        </label>
                        <select
                          name="budget"
                          className={`${glassyInputClass} appearance-none cursor-pointer`}
                        >
                          <option>Select Range</option>
                          <option>$1,000 - $5,000</option>
                          <option>$5,000 - $10,000</option>
                          <option>$10,000 - $50,000</option>
                          <option>$50,000+</option>
                        </select>
                      </div>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <label className="block text-sm font-semibold text-[#27187e] mb-2">
                        Campaign Goals / Message
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        placeholder="Tell us about your advertising goals..."
                        className={`${glassyInputClass} resize-none`}
                      ></textarea>
                    </div>

                    <button
                      disabled={formStatus === "submitting"}
                      type="submit"
                      className="w-full py-4 px-6 bg-[#ff8600] hover:bg-[#e57800] text-white font-bold rounded-xl shadow-lg shadow-[#ff8600]/20 transition-all flex items-center justify-center gap-2"
                    >
                      {formStatus === "submitting" ? (
                        "Sending..."
                      ) : (
                        <>
                          Submit Inquiry <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-400">
                      By submitting, you agree to our Terms of Advertising
                      Service.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
