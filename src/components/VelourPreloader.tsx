"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { AuraLogo } from "./AuraLogo";
import { ArrowUpRight, Volume2 } from "lucide-react";

interface VelourPreloaderProps {
  onComplete?: () => void;
}

export function VelourPreloader({ onComplete }: VelourPreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [timecode, setTimecode] = useState("00:00:00:00");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExited, setIsExited] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 4K Cinema Studio Film with Full Stereo Audio
  const videoUrl = "/clips/hero-reel-full.mp4";

  const handleEnter = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsLoaded(true);
    document.body.style.overflow = "";
    onComplete?.();
    setTimeout(() => {
      setIsExited(true);
    }, 1000);
  }, [onComplete]);

  // Activate unmuted audio
  const activateSound = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      videoRef.current
        .play()
        .then(() => {
          setIsMuted(false);
        })
        .catch(() => {});
    }
  }, []);

  // Initial playback and user gesture listeners
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 1.0;

    // Try unmuted play first
    video
      .play()
      .then(() => {
        video.muted = false;
        setIsMuted(false);
      })
      .catch(() => {
        // Fallback: start muted so video autoplays smoothly
        video.muted = true;
        setIsMuted(true);
        video.play().catch(() => {});
      });

    // Listen for genuine user gestures to enable sound
    const handleGesture = () => {
      activateSound();
    };

    window.addEventListener("pointerdown", handleGesture, { passive: true });
    window.addEventListener("click", handleGesture, { passive: true });
    window.addEventListener("touchstart", handleGesture, { passive: true });
    window.addEventListener("keydown", handleGesture, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", handleGesture);
      window.removeEventListener("click", handleGesture);
      window.removeEventListener("touchstart", handleGesture);
      window.removeEventListener("keydown", handleGesture);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [activateSound]);

  // Cinematic Timecode and Progress Counter
  useEffect(() => {
    document.body.style.overflow = "hidden";

    let current = 0;
    let frames = 0;

    const interval = setInterval(() => {
      const remaining = 100 - current;
      const step = Math.max(1, Math.min(Math.floor(remaining * 0.05 + Math.random() * 2), 3));
      current += step;
      frames += Math.floor(Math.random() * 3) + 1;

      // Realistic 24 FPS SMPTE Timecode
      const totalFrames = frames;
      const ff = String(totalFrames % 24).padStart(2, "0");
      const ss = String(Math.floor(totalFrames / 24) % 60).padStart(2, "0");
      const mm = String(Math.floor(totalFrames / 1440) % 60).padStart(2, "0");
      setTimecode(`00:${mm}:${ss}:${ff}`);

      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);

        setTimeout(() => {
          handleEnter();
        }, 1200);
      } else {
        setProgress(current);
      }
    }, 55);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [handleEnter]);

  if (isExited) return null;

  return (
    <div
      onClick={activateSound}
      aria-hidden={isLoaded}
      className={`fixed inset-0 z-[100] bg-[#0c0c0a] text-[#ecebe4] flex flex-col justify-between transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] select-none cursor-pointer ${
        isLoaded
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Top Anamorphic Cinema Shutter Bar */}
      <div
        className={`w-full bg-[#0c0c0a] z-20 px-6 sm:px-12 py-5 sm:py-7 flex items-center justify-between border-b border-white/[0.06] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isLoaded ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Brand & Studio ID */}
        <div className="flex items-center gap-3">
          <AuraLogo className="w-6 h-6 text-[#ecebe4]" />
          <div>
            <span className="text-sm font-medium tracking-tight text-[#ecebe4]">
              Aura Productions
            </span>
            <span className="text-[10px] text-[#8e8d86] font-mono block sm:inline sm:ml-2">
              {"// STUDIO FILM 4K"}
            </span>
          </div>
        </div>

        {/* Live Cinema Slate & Quick Enter Button */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden sm:flex items-center gap-2 text-[11px] font-mono text-[#8e8d86]">
            <span className="relative flex h-2 w-2">
              <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-[#e26228]" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e26228]" />
            </span>
            <span className="text-[#ecebe4]">REC</span>
            <span>·</span>
            <span>4K DCI 24FPS</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleEnter();
            }}
            className="group px-4 py-1.5 rounded-full text-xs font-mono tracking-wider border border-white/10 hover:border-[#e26228] bg-white/[0.03] hover:bg-[#e26228] text-[#ecebe4] hover:text-white transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
          >
            <span>ENTER</span>
            <ArrowUpRight
              size={12}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>

      {/* Center Theatrical Video Chamber with Optical Framing */}
      <div className="relative my-auto w-full max-w-6xl mx-auto px-4 sm:px-12 py-4">
        {/* Cinema Video Viewport with Anamorphic Aspect */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] sm:aspect-[2.39/1] bg-black border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
          {/* Autoplaying 4K Studio Film with Full Stereo Audio */}
          <video
            ref={videoRef}
            src={videoUrl}
            poster="/webp/scammer-thumb.webp"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover opacity-90 transition-transform duration-1000 scale-100 hover:scale-102"
          />

          {/* Cinematic Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />

          {/* Optical Viewfinder Overlay Marks */}
          <div className="absolute inset-4 sm:inset-6 pointer-events-none border border-white/10 rounded-lg flex flex-col justify-between p-3 sm:p-5">
            {/* Top Viewfinder Metadata */}
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#ecebe4]/80">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[#e26228]">
                  TC {timecode}
                </span>
                <span className="hidden sm:inline px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  SHUTTER 180°
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  ISO 800
                </span>
                <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-white font-medium">
                  LOG C
                </span>
              </div>
            </div>

            {/* Center Framing Reticle with Interactive Audio Trigger */}
            <div className="my-auto text-center pointer-events-auto">
              <div className="inline-flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl">
                <AuraLogo className="w-8 h-8 sm:w-10 sm:h-10 text-[#ecebe4] mb-2 animate-pulse" />
                <h1 className="text-xl sm:text-2xl font-light tracking-tight text-white">
                  Aura Productions
                </h1>
                <p className="text-[10px] sm:text-xs text-[#8e8d86] font-mono tracking-widest uppercase mt-0.5">
                  Cinema & Film Studio
                </p>

                {/* Sound Activation Badge */}
                {isMuted ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      activateSound();
                    }}
                    className="mt-3.5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e26228] hover:bg-[#c9521d] text-white text-xs font-mono font-medium tracking-wider shadow-[0_0_25px_rgba(226,98,40,0.6)] animate-pulse hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <Volume2 size={14} />
                    <span>TAP FOR FILM SOUND</span>
                  </button>
                ) : (
                  <div className="mt-3.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e26228]/20 border border-[#e26228]/40 text-xs font-mono text-[#ecebe4]">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-[#e26228]" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e26228]" />
                    </span>
                    <span className="text-[#e26228] font-semibold">48KHZ SOUND ACTIVE</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Viewfinder Metadata */}
            <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#ecebe4]/80">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  PRORES 4444 XQ
                </span>
                <span className="hidden sm:inline px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  35MM ANAMORPHIC
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[#e26228]">
                  FRAME {progress}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Anamorphic Cinema Shutter Bar & Progress Cluster */}
      <div
        className={`w-full bg-[#0c0c0a] z-20 px-6 sm:px-12 py-5 sm:py-7 border-t border-white/[0.06] transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isLoaded ? "translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-4xl mx-auto space-y-3">
          {/* Progress Header */}
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2.5 text-[#8e8d86]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e26228] animate-ping" />
              <span className="uppercase tracking-widest text-[11px] text-[#ecebe4]">
                {progress < 100 ? "Syncing 4K Film Stream" : "Studio Master Ready"}
              </span>
            </div>
            <div className="text-[#ecebe4] tracking-widest font-mono text-xs">
              [ {progress}% ]
            </div>
          </div>

          {/* 1.5px Razor Track & Progress Bar */}
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#e26228]/80 to-[#e26228] transition-all duration-100 ease-out shadow-[0_0_12px_rgba(226,98,40,0.6)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Technical Film Footer Meta */}
          <div className="flex items-center justify-between text-[10px] font-mono text-[#8e8d86] pt-1">
            <span>DCI 4K · 24 FPS · 48 KHZ AUDIO</span>
            <span>VANCOUVER · BC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
