"use client";

import React, { useState } from "react";
import { Play, ArrowRight, Sparkles, Award, Film, X } from "lucide-react";
import { CinemaImage } from "@/components/CinemaImage";

export function HeroSection() {
  const [reelOpen, setReelOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative pt-36 pb-20 px-6 sm:px-10 max-w-6xl mx-auto flex flex-col items-center text-center"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Clean Tag Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-zinc-300 mb-6 backdrop-blur-md">
        <Sparkles size={13} className="text-indigo-400" />
        <span>Independent Film & Creative Studio</span>
      </div>

      {/* Main Clean Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl leading-[1.1] mb-6">
        Crafting visual stories that{" "}
        <span className="text-gradient-primary">inspire and captivate.</span>
      </h1>

      {/* Clean Subtitle */}
      <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mb-10">
        We are a full-service cinema production studio creating feature films,
        commercials, and episodic series with world-class artistic integrity.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <a
          href="#works"
          className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold btn-primary"
        >
          <span>Explore Our Works</span>
          <ArrowRight size={16} />
        </a>
        <button
          onClick={() => setReelOpen(true)}
          className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold btn-secondary"
        >
          <Play size={15} className="fill-white" />
          <span>Watch Film</span>
        </button>
      </div>

      {/* Featured Production Centerpiece Card */}
      <div className="w-full relative rounded-2xl overflow-hidden clean-card p-3 sm:p-4 mb-16 group">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-zinc-950">
          <CinemaImage
            src="/images/projects/scammer-clapper.jpg"
            alt="Scammer Feature Film"
            tag="Flagship Production"
            meta="2026 // 4K"
            aspect="aspect-[16/9] sm:aspect-[21/9]"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8 text-left">
            <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
              Latest Release
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-4xl font-bold text-white mb-2">
                  SCAMMER
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-xl font-light leading-relaxed">
                  A high-tension crime drama exploring the fragile line between struggle and survival.
                </p>
              </div>
              <button
                onClick={() => setReelOpen(true)}
                className="self-start sm:self-end flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
              >
                <Play size={13} className="fill-white" />
                <span>Play Trailer</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Studio Statistics Strip */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/[0.08]">
        <div>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-1">24+</p>
          <p className="text-xs text-zinc-400 font-medium">International Awards</p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-1">4.8B+</p>
          <p className="text-xs text-zinc-400 font-medium">Global Views</p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-1">50+</p>
          <p className="text-xs text-zinc-400 font-medium">Projects Delivered</p>
        </div>
        <div>
          <p className="text-3xl sm:text-4xl font-bold text-white mb-1">100%</p>
          <p className="text-xs text-zinc-400 font-medium">Client Satisfaction</p>
        </div>
      </div>

      {/* Showreel Modal */}
      {reelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in">
          <div className="relative w-full max-w-4xl clean-card overflow-hidden bg-zinc-950 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2">
                <Film size={18} className="text-indigo-400" />
                <h4 className="text-sm font-semibold text-white">STUDIO FILM 2026</h4>
              </div>
              <button
                onClick={() => setReelOpen(false)}
                className="text-zinc-400 hover:text-white p-1"
              >
                <X size={20} />
              </button>
            </div>

            <div className="aspect-[16/9] rounded-lg bg-black flex flex-col items-center justify-center p-6 text-center border border-white/10">
              <Award size={40} className="text-amber-400 mb-3" />
              <h5 className="text-2xl font-bold text-white mb-2">Cinematic Film</h5>
              <p className="text-xs text-zinc-400 max-w-md mb-6">
                Featuring highlights from award-winning feature films, Netflix originals, and global commercial campaigns.
              </p>
              <button
                onClick={() => setReelOpen(false)}
                className="px-6 py-2.5 rounded-full text-xs font-semibold btn-primary"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
