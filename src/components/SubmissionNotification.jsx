"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SubmissionNotification({
  isVisible,
  referenceId,
  onClose,
}) {
  const notificationRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isVisible && notificationRef.current) {
      // Animate in
      gsap.fromTo(
        notificationRef.current,
        {
          opacity: 0,
          y: -50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        }
      );

      // Auto-close after 8 seconds
      const timer = setTimeout(() => {
        gsap.to(notificationRef.current, {
          opacity: 0,
          y: -50,
          duration: 0.6,
          ease: "power3.in",
          onComplete: onClose,
        });
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div ref={notificationRef} className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div
          ref={contentRef}
          className="bg-white rounded-xl shadow-2xl border-l-4 border-green-500 p-6"
        >
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Submission received
              </h3>
              <p className="text-gray-700 mb-3 text-sm">
                Thank you for submitting your advertisement request. Our team
                will now:
              </p>
              <ul className="space-y-2 mb-4 text-sm text-gray-600">
                <li>
                  • Review your submission for relevance, safety, and compliance
                </li>
                <li>• Evaluate audience fit and placement suitability</li>
                <li>
                  • Prepare a custom quote based on reach, duration, and
                  visibility
                </li>
              </ul>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <p className="text-sm text-red-700">
                  🕐 You will receive a response within 2-3 business days.
                </p>
              </div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                  Status: Under review
                </span>
                <span className="text-gray-500 text-xs">
                  Reference ID: {referenceId}
                </span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => (window.location.href = "/")}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg text-sm hover:bg-gray-50 transition"
                >
                  Back to homepage
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-2 bg-blue-900 text-white font-semibold rounded-lg text-sm hover:bg-blue-950 transition"
                >
                  Submit another request
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-4 text-center">
                You can reply to the confirmation email any time if you need to
                share additional details, updated creatives, or revised
                timelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
