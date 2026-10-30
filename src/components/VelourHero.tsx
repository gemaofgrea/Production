"use client";

import React, { useState, useEffect, useRef } from "react";
import { VELOUR_DATA } from "@/data/cinemaData";
import { ArrowDown, X, Volume2, VolumeX } from "lucide-react";

export function VelourHero() {
  const brand = VELOUR_DATA.brand;
  const [modalOpen, setModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      setIsMuted(false);
      const timer = setTimeout(() => {
        if (heroVideoRef.current) {
          heroVideoRef.current.currentTime = 0;
          heroVideoRef.current.muted = false;
          heroVideoRef.current.volume = volume;
          heroVideoRef.current.play().catch(() => { });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [modalOpen, volume]);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = nextMuted;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    const unmuted = newVol > 0 ? false : true;
    setIsMuted(unmuted);
    if (heroVideoRef.current) {
      heroVideoRef.current.volume = newVol;
      heroVideoRef.current.muted = unmuted;
    }
  };


  const heroPreviewUrl = "/clips/hero-preview.mp4";
  const reelUrl = "/clips/hero-reel-full.mp4";

  return (
    <section
      id="home"
      className="min-h-[88vh] pt-36 sm:pt-44 pb-16 px-6 sm:px-12 max-w-7xl mx-auto flex flex-col justify-between"
    >
      {/* Main Hero: Staggered Editorial Statement + Pristine Cinema Card */}
      <div className="my-auto py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Bold Staggered Statement */}
        <div className="lg:col-span-7">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.25rem] font-light tracking-tight text-[#ecebe4] leading-[0.98] select-none">
            <span
              className={`block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
            >
              We give
            </span>
            <span
              style={{ transitionDelay: "180ms" }}
              className={`block font-normal text-white transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
            >
              you a point
            </span>
            <span
              style={{ transitionDelay: "360ms" }}
              className={`block text-[#8e8d86] hover:text-[#ecebe4] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
            >
              of view
            </span>
          </h1>
        </div>

        {/* Right Column: Neat & Clean Pristine Cinema Card with Smooth Hover Physics */}
        <div
          style={{ transitionDelay: "300ms" }}
          className={`lg:col-span-5 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
        >
          <div
            onClick={() => setModalOpen(true)}
            className="group relative rounded-xl overflow-hidden bg-[#1c1c19] aspect-[16/10] border border-white/10 hover:border-[#e26228]/40 shadow-2xl hover:shadow-[0_20px_50px_rgba(226,98,40,0.15)] cursor-pointer transition-all duration-500 hover:-translate-y-1"
          >
            {/* Silent Ambient Loop with Smooth Zoom */}
            <video
              src={heroPreviewUrl}
              poster="/webp/scammer-thumb.webp"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onLoadedMetadata={(e) => e.currentTarget.play().catch(() => { })}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />

            {/* Quiet Corner Label with Pulse */}
            <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-full bg-[#151513]/85 backdrop-blur-md text-[11px] font-mono text-[#ecebe4] border border-white/10 opacity-80 group-hover:opacity-100 group-hover:border-[#e26228]/60 transition-all duration-300 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-[#e26228]" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e26228]" />
              </span>
              <span>Studio Film 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Bottom Metadata Row with Staggered Entrance */}
      <div
        style={{ transitionDelay: "450ms" }}
        className={`grid grid-cols-1 md:grid-cols-12 gap-8 pt-10 border-t border-white/[0.08] items-baseline text-sm transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
      >
        {/* Discipline Tags */}
        <div className="md:col-span-3 text-[#8e8d86] text-xs font-mono uppercase tracking-wider">
          <p className="hover:text-[#ecebe4] transition-colors cursor-default">Commercials · Documentary · Stills</p>
        </div>

        {/* Narrative Intro */}
        <div className="md:col-span-6 text-[#ecebe4] text-base font-light leading-relaxed max-w-xl">
          <p>{brand.intro}</p>
        </div>

        {/* Anchor Link with Micro-Bounce */}
        <div className="md:col-span-3 md:text-right">
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-[#ecebe4] hover:text-[#e26228] transition-all duration-300 velour-link font-medium group"
          >
            <span>View selected work</span>
            <ArrowDown size={14} className="text-[#e26228] transition-transform duration-300 group-hover:translate-y-1.5 animate-bounce" />
          </a>
        </div>
      </div>

      {/* Clean Theatrical Reel Modal */}
      {modalOpen && (
        <div
          onClick={() => setModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-10 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#181815] border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
          >
            {/* Modal Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase font-mono tracking-widest text-[#ecebe4]">
                  Aura Productions // Studio Film
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#e26228]/20 border border-[#e26228]/40 text-[10px] font-mono text-[#e26228]">
                  48kHz Stereo
                </span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1.5 rounded-full text-[#8e8d86] hover:text-[#ecebe4] hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Video Screen */}
            <div className="relative aspect-[16/9] bg-black">
              <video
                ref={heroVideoRef}
                src={reelUrl}
                poster="/webp/scammer-thumb.webp"
                controls
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Sound Controls Bar */}
            <div className="flex items-center justify-between px-6 py-3 bg-[#1e1e1b] border-t border-white/10">
              <button
                onClick={toggleMute}
                className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 transition-all cursor-pointer ${isMuted ? "bg-white/5 text-[#8e8d86]" : "bg-[#e26228] text-white shadow-[0_0_15px_rgba(226,98,40,0.35)]"
                  }`}
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                <span>{isMuted ? "Muted" : "Sound Active"}</span>
              </button>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-[#8e8d86]">VOLUME</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-24 accent-[#e26228] cursor-pointer h-1.5 bg-white/10 rounded-lg appearance-none"
                  aria-label="Volume"
                />
                <span className="text-xs font-mono text-[#ecebe4] w-8 text-right">
                  {isMuted ? "0%" : `${Math.round(volume * 100)}%`}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
