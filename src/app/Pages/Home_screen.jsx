"use client";
import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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
import { ContactShadows, Environment, Float } from "@react-three/drei";
import HeroCanvas from "../THREED/HeroCanvas";

function RotatingGeometry() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.5}>
        <torusKnotGeometry args={[0.8, 0.25, 128, 16]} />
        <meshNormalMaterial />
      </mesh>
    </Float>
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

export default function Home_screen() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen bg-white text-slate-900 font-sans selection:bg-purple-200 overflow-hidden relative flex flex-col">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-blue-50 rounded-full blur-[100px] opacity-40"></div>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full relative z-20 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl font-serif">
            Q
          </div>
          <span className="text-xl font-bold tracking-tight">LuxiQue</span>
        </div>
        <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-lg shadow-black/20">
          Download App
        </button>
      </nav>

      {/* Main Content Grid */}
      <main className="flex-grow max-w-7xl mx-auto px-4 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10 h-full">
        {/* LEFT COLUMN: Text Content */}
        <div className="flex flex-col items-center lg:items-start w-full justify-center h-full">
          <div className="text-center lg:text-left max-w-3xl animate-fade-in-up w-full">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm text-sm font-medium text-gray-600 mb-6 shadow-sm">
              Transform Your Experience
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Indulge in the World of <br /> Luxurious Fashion!
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Download LuxiQue for exclusive collections and a seamless luxury
              shopping experience.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors shadow-xl shadow-black/10">
                <Apple size={24} fill="white" />
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold tracking-wider">
                    Download on the
                  </div>
                  <div className="text-sm font-bold leading-none">
                    App Store
                  </div>
                </div>
              </button>
              <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors shadow-xl shadow-black/10">
                <div className="relative w-6 h-6">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M3 22V2L21 12L3 22Z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-[10px] uppercase font-semibold tracking-wider">
                    Get it on
                  </div>
                  <div className="text-sm font-bold leading-none">
                    Google Play
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: R3F Canvas */}
        <div className="h-full w-full flex items-center justify-center relative">
          <div className="w-full h-full absolute inset-0">
            <HeroCanvas />
          </div>
        </div>
      </main>
    </div>
  );
}
