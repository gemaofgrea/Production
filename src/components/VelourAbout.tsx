"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export function VelourAbout() {
  return (
    <section id="about" className="py-24 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Section Kicker */}
      <div className="text-xs uppercase tracking-widest text-[#8e8d86] font-medium mb-8">
        About us
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Bold Editorial Philosophy */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#ecebe4] tracking-tight leading-[1.08] mb-8">
            We believe in cinematic work that commands attention without screaming for it.
          </h2>

          <div className="space-y-6 text-[#8e8d86] text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            <p>
              We are a creative production studio translating ambitious brand stories into
              meaningful visual worlds. Every camera move, lighting setup, and color grade is
              shaped around emotional resonance and long-term brand identity.
            </p>
            <p>
              Whether shooting national broadcast commercials, documentary films, or high-volume
              digital content, we handle every stage under one roof with craft and care.
            </p>
          </div>

          <div className="pt-8">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm text-[#ecebe4] hover:text-[#e26228] transition-colors velour-link font-medium"
            >
              <span>Work with us</span>
              <ArrowUpRight size={14} className="text-[#e26228] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* Right Column: Studio Video Reel & Stats */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div className="relative rounded-xl overflow-hidden bg-[#1d1d1a] aspect-[4/3] border border-white/10 hover:border-[#e26228]/40 shadow-2xl hover:shadow-[0_20px_50px_rgba(226,98,40,0.18)] transition-all duration-500 hover:-translate-y-1.5 group">
            <video
              src="/clips/about-preview.mp4"
              poster="/webp/tevah-wellness-thumb.webp"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadedMetadata={(e) => e.currentTarget.play().catch(() => { })}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Studio Badge Overlay with Radar Ping */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-[#ecebe4] flex items-center gap-2 z-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-[#e26228]" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e26228]" />
              </span>
              <span>STUDIO FILM</span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-[#8e8d86] px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/5">
              <span>VANCOUVER STAGES</span>
              <span className="text-[#ecebe4]">24 FPS · LOG C</span>
            </div>
          </div>

          {/* Interactive Stat Cards with Hover Lift */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#e26228]/40 hover:-translate-y-1 transition-all duration-300 group">
              <p className="text-3xl sm:text-4xl font-light text-[#ecebe4] group-hover:text-[#e26228] transition-colors duration-300">100+</p>
              <p className="text-xs text-[#8e8d86] uppercase tracking-wider mt-1 font-mono">Campaigns Produced</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#e26228]/40 hover:-translate-y-1 transition-all duration-300 group">
              <p className="text-3xl sm:text-4xl font-light text-[#ecebe4] group-hover:text-[#e26228] transition-colors duration-300">Vancouver</p>
              <p className="text-xs text-[#8e8d86] uppercase tracking-wider mt-1 font-mono">Base & Stages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
