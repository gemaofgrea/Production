"use client";

import React from "react";

interface AuraLogoProps {
  className?: string;
}

export function AuraLogo({ className = "w-7 h-7" }: AuraLogoProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45 group-hover:scale-110`}
      aria-hidden="true"
    >
      {/* Outer Cinema Optical Iris */}
      <circle
        cx="16"
        cy="16"
        r="11.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="72"
        className="text-white/30 group-hover:text-[#e26228] transition-all duration-500 group-hover:stroke-dashoffset-12"
      />
      {/* Signature Anamorphic Lens Streak */}
      <line
        x1="2.5"
        y1="16"
        x2="29.5"
        y2="16"
        stroke="#e26228"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {/* Optical Core Housing */}
      <circle
        cx="16"
        cy="16"
        r="4.2"
        fill="#151513"
        stroke="#ecebe4"
        strokeWidth="1.2"
        className="group-hover:stroke-[#e26228] transition-colors"
      />
      {/* Luminous Ember Core */}
      <circle cx="16" cy="16" r="2" fill="#e26228" />
    </svg>
  );
}
