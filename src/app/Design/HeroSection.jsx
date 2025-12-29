"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingBag,
  Bell,
  ArrowUpRight,
  Home,
  Heart,
  User,
  Apple,
} from "lucide-react";

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-200 overflow-x-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-blue-50 rounded-full blur-[100px] opacity-40"></div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto relative z-20">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            {/* Site Icon */}
            <img
              src="./IM/vaidya icon.png"
              alt="Site Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <span className="text-xl font-bold tracking-tight">VAIDYA 247</span>
        </div>
        <button
          onClick={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.yesca.cbaprayer&hl=en_IN",
              "_blank"
            )
          }
          className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/20"
        >
          Download App
        </button>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 pt-8 pb-20 flex flex-col items-center relative z-10">
        {/* Text Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm text-sm font-medium text-gray-600 mb-6 shadow-sm">
            Transform Your Experience
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Indulge in the World of <br /> Luxurious Fashion!
          </h1>
          <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed">
            Download LuxiQue for exclusive collections and a seamless luxury
            shopping experience.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-3 text-white px-6 py-3 rounded-xl  transition-colors ">
              <img
                src="./IM/AppStore и GooglePlay.svg"
                alt="Google Play Icon"
                className="object-contain"
              />
            </button>
          </div>
        </div>

        {/* Interactive Visual Section */}
        <div className="relative w-full max-w-6xl h-[600px] md:h-[800px] mt-8 flex justify-center items-center">
          {/* Network Lines Layer (SVG) */}
          <div className="absolute inset-0 z-0 pointer-events-none hidden md:block">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 800"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#e2e8f0" />
                  <stop offset="50%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#e2e8f0" />
                </linearGradient>
              </defs>

              {/* Node Connections */}
              {/* Top Left */}
              <path
                d="M500 400 L 250 250 L 150 250"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                fill="none"
              />
              <rect
                x="245"
                y="245"
                width="10"
                height="10"
                transform="rotate(45 250 250)"
                fill="white"
                stroke="#cbd5e1"
                strokeWidth="2"
              />

              {/* Top Right */}
              <path
                d="M500 400 L 750 250 L 850 250"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                fill="none"
              />
              <rect
                x="745"
                y="245"
                width="10"
                height="10"
                transform="rotate(45 750 250)"
                fill="white"
                stroke="#cbd5e1"
                strokeWidth="2"
              />

              {/* Middle Left */}
              <path
                d="M500 400 L 300 450 L 180 450"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Middle Right */}
              <path
                d="M500 400 L 700 450 L 820 450"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                fill="none"
              />

              {/* Bottom Left */}
              <path
                d="M500 400 L 350 650 L 250 650"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                fill="none"
              />
              <rect
                x="345"
                y="645"
                width="10"
                height="10"
                transform="rotate(45 350 650)"
                fill="white"
                stroke="#cbd5e1"
                strokeWidth="2"
              />

              {/* Bottom Right */}
              <path
                d="M500 400 L 650 650 L 750 650"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                fill="none"
              />
              <rect
                x="645"
                y="645"
                width="10"
                height="10"
                transform="rotate(45 650 650)"
                fill="white"
                stroke="#cbd5e1"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Floating Avatar Nodes */}
          {/* Note: Using standard img tags for external URLs to avoid next.config.js requirements in this demo */}
          <div className="absolute top-[15%] left-[5%] md:left-[10%] animate-float-slow hidden md:block">
            <Avatar
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
              size="lg"
            />
          </div>
          <div className="absolute top-[15%] right-[5%] md:right-[10%] animate-float-delayed hidden md:block">
            <Avatar
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop"
              size="lg"
            />
          </div>

          <div className="absolute top-[45%] left-[2%] md:left-[15%] animate-float hidden md:block">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <ShoppingBag className="text-purple-600 w-6 h-6" />
            </div>
          </div>
          <div className="absolute top-[45%] right-[2%] md:right-[15%] animate-float-slow hidden md:block">
            <Avatar
              src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=150&h=150&fit=crop"
              size="md"
            />
          </div>

          <div className="absolute bottom-[15%] left-[10%] md:left-[20%] animate-float-delayed hidden md:block">
            <Avatar
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop"
              size="md"
            />
          </div>
          <div className="absolute bottom-[10%] right-[10%] md:right-[20%] animate-float hidden md:block">
            <Avatar
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
              size="lg"
            />
          </div>

          {/* Central Phone Mockup */}
          <div className="relative z-20 w-[300px] md:w-[340px] h-[600px] md:h-[680px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-4 border-gray-800 ring-1 ring-gray-900/50 transform transition-transform hover:scale-[1.01] duration-500">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-30 flex items-center justify-center gap-2">
              <div className="w-12 h-1.5 bg-gray-800 rounded-full"></div>
            </div>

            {/* Screen Content */}
            <div className="w-full h-full bg-slate-50 rounded-[2.5rem] overflow-hidden relative flex flex-col">
              {/* Status Bar */}
              <div className="h-12 w-full flex justify-between items-center px-6 pt-2 text-[10px] font-semibold text-gray-800">
                <span>9:41</span>
                <div className="flex gap-1.5 items-center">
                  <div className="w-4 h-2.5 border border-gray-800 rounded-[2px] relative">
                    <div className="absolute inset-0.5 bg-gray-800"></div>
                  </div>
                </div>
              </div>

              {/* App Header */}
              <div className="px-6 py-2 flex justify-between items-center mb-2">
                <span className="font-bold text-lg">LuxiQue</span>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600">
                    <Search size={16} />
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-gray-600 relative">
                    <ShoppingBag size={16} />
                    <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                  </div>
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto no-scrollbar px-6 pb-20">
                {/* Hero Cards */}
                <div className="flex gap-4 mb-8 overflow-x-visible">
                  {/* Card 1 */}
                  <div className="min-w-[160px] h-[200px] bg-purple-200 rounded-3xl p-5 relative flex flex-col justify-between group cursor-pointer transition-all hover:shadow-lg">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      Explore All <br />
                      Product
                    </h3>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center self-end group-hover:scale-110 transition-transform">
                      <ArrowUpRight size={18} className="text-slate-900" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-300/30 rounded-full blur-xl"></div>
                  </div>

                  {/* Card 2 */}
                  <div className="min-w-[160px] h-[200px] bg-white rounded-3xl p-5 relative flex flex-col justify-between border border-gray-100 shadow-sm cursor-pointer hover:shadow-lg transition-all">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight">
                      Top Selling <br />
                      Product
                    </h3>
                    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center self-end">
                      <ArrowUpRight size={18} className="text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Popular Products Header */}
                <div className="flex justify-between items-end mb-4">
                  <h2 className="text-lg font-bold">Popular Products</h2>
                  <span className="text-xs text-gray-400 font-medium">
                    See all
                  </span>
                </div>

                {/* Filters */}
                <div className="flex gap-3 mb-6 overflow-x-auto no-scrollbar py-1">
                  <div className="px-4 py-2 bg-slate-900 text-white rounded-full text-xs font-medium whitespace-nowrap shadow-md shadow-slate-900/20">
                    All Items
                  </div>
                  <div className="px-4 py-2 bg-white text-gray-500 rounded-full text-xs font-medium whitespace-nowrap border border-gray-100">
                    Dress
                  </div>
                  <div className="px-4 py-2 bg-white text-gray-500 rounded-full text-xs font-medium whitespace-nowrap border border-gray-100">
                    Footwear
                  </div>
                </div>

                {/* Product List */}
                <div className="grid grid-cols-2 gap-4">
                  <ProductCard
                    img="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=300&h=400&fit=crop"
                    title="Green Jacket"
                    price="$125.00"
                  />
                  <ProductCard
                    img="https://images.unsplash.com/photo-1589465885857-44edb59ef526?w=300&h=400&fit=crop"
                    title="Classic Blue"
                    price="$89.50"
                  />
                  <ProductCard
                    img="https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=300&h=400&fit=crop"
                    title="Urban Chic"
                    price="$240.00"
                  />
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-white border-t border-gray-100 px-6 flex justify-between items-center pb-2 z-20">
                <div className="flex flex-col items-center gap-1 text-slate-900">
                  <Home size={22} fill="currentColor" className="opacity-100" />
                  <span className="text-[10px] font-bold">Home</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
                  <Heart size={22} />
                </div>
                <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
                  <Bell size={22} />
                </div>
                <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-gray-600">
                  <User size={22} />
                </div>
              </div>

              {/* Floating Fade for Bottom */}
              <div className="absolute bottom-20 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
            </div>
          </div>

          {/* Hand/Shadow Simulation (Optional aesthetic touch) */}
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-[80%] h-12 bg-black/40 blur-3xl rounded-full -z-10"></div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-18px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite 1s;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite 0.5s;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

function Avatar({ src, size = "md" }) {
  const sizeClasses = {
    md: "w-12 h-12 md:w-16 md:h-16",
    lg: "w-16 h-16 md:w-20 md:h-20",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full p-1 bg-white shadow-lg shadow-gray-200/50 hover:scale-110 transition-transform duration-300 cursor-pointer`}
    >
      <img
        src={src}
        alt="User"
        className="w-full h-full rounded-full object-cover"
      />
    </div>
  );
}

function ProductCard({ img, title, price }) {
  return (
    <div className="bg-gray-50 p-2 rounded-2xl pb-3 group cursor-pointer hover:bg-white hover:shadow-md transition-all duration-300">
      <div className="w-full h-32 rounded-xl overflow-hidden mb-3 relative">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button className="absolute top-2 right-2 w-6 h-6 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
          <Heart size={12} className="text-gray-600" />
        </button>
      </div>
      <div className="px-1">
        <h4 className="text-sm font-bold text-gray-800 mb-0.5 truncate">
          {title}
        </h4>
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-gray-500">{price}</span>
          <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center text-white">
            <ShoppingBag size={10} />
          </div>
        </div>
      </div>
    </div>
  );
}
