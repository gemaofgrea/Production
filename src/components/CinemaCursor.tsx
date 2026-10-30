"use client";

import React, { useEffect, useState, useRef } from "react";

export function CinemaCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState<string>("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Check what is currently hovered
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "a, button, [role='button'], input, textarea, .cursor-pointer"
        );
        const videoElement = target.closest("video, [data-cursor-view]");
        const filmCard = target.closest(".filmstrip-card, .service-row");

        if (videoElement || filmCard) {
          setIsHovered(true);
          setCursorText("PLAY");
        } else if (interactive) {
          setIsHovered(true);
          setCursorText("");
        } else {
          setIsHovered(false);
          setCursorText("");
        }
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Smooth spring render loop
    const render = () => {
      // Direct position for the inner dot
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Smooth lerp interpolation for the outer ring
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* Precision Center Dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-[#e26228] transition-opacity duration-300 pointer-events-none ${
          cursorText ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Trailing Cinema Ring / Lens */}
      <div
        ref={cursorRingRef}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none transition-all duration-300 ease-out backdrop-blur-[2px] ${
          cursorText
            ? "-ml-9 -mt-9 w-18 h-18 bg-[#151513]/80 border border-[#e26228]/50 shadow-[0_0_20px_rgba(226,98,40,0.3)] text-[10px] font-mono tracking-widest text-[#ecebe4] scale-100"
            : isHovered
            ? "-ml-6 -mt-6 w-12 h-12 bg-white/[0.04] border border-[#e26228] shadow-[0_0_15px_rgba(226,98,40,0.2)] scale-100"
            : "-ml-4 -mt-4 w-8 h-8 border border-white/25 scale-100"
        } ${isClicking ? "scale-90" : ""}`}
      >
        {cursorText && (
          <span className="font-semibold text-[#e26228] animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
