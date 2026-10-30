"use client";

import React, { useEffect, useRef, useState } from "react";

export function AmbientGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let mouseX = window.innerWidth * 0.6;
    let mouseY = window.innerHeight * 0.4;
    let glowX = mouseX;
    let glowY = mouseY;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    const render = () => {
      // Smooth organic lerp for atmospheric floating feel
      glowX += (mouseX - glowX) * 0.06;
      glowY += (mouseY - glowY) * 0.06;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX - 400}px, ${glowY - 400}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none">
      {/* Soft Low-Intensity Dynamic Mouse Spotlight */}
      <div
        ref={glowRef}
        className="hidden sm:block fixed top-0 left-0 w-[800px] h-[800px] rounded-full pointer-events-none mix-blend-screen opacity-50 transition-opacity duration-1000"
        style={{
          background:
            "radial-gradient(circle, rgba(226, 98, 40, 0.09) 0%, rgba(226, 98, 40, 0.035) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Atmospheric Subtle Fixed Glow Orb 1 (Top Hero) */}
      <div
        className="absolute -top-32 right-[-5%] w-[600px] h-[600px] rounded-full bg-[#e26228]/[0.06] blur-[180px] pointer-events-none mix-blend-screen animate-ambient-pulse"
      />

      {/* Atmospheric Subtle Fixed Glow Orb 2 (Middle Work) */}
      <div
        className="absolute top-[40%] -left-36 w-[550px] h-[550px] rounded-full bg-[#e26228]/[0.04] blur-[180px] pointer-events-none mix-blend-screen animate-ambient-pulse"
        style={{ animationDelay: "3s" }}
      />

      {/* Atmospheric Subtle Fixed Glow Orb 3 (Bottom Section) */}
      <div
        className="absolute top-[75%] right-[10%] w-[650px] h-[650px] rounded-full bg-[#e26228]/[0.05] blur-[180px] pointer-events-none mix-blend-screen animate-ambient-pulse"
        style={{ animationDelay: "5s" }}
      />
    </div>
  );
}
