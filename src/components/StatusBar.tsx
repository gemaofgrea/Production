"use client";

import React, { useState, useEffect } from "react";
import { CINEMA_DATA } from "@/data/cinemaData";

export function StatusBar() {
  const [lang, setLang] = useState<"EN" | "UA">("EN");
  const [timeStr, setTimeStr] = useState("14:00:00");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      setTimeStr(`${hours}:${minutes}:${seconds}`);
    };

    updateTime();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    const timer = setInterval(updateTime, 1000);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 px-6 sm:px-12 py-3 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] font-mono-tech tracking-widest text-zinc-400">
        {/* Left: Language Toggle */}
        <div className="pointer-events-auto flex items-center gap-2">
          <button
            onClick={() => setLang("EN")}
            className={`transition-colors ${lang === "EN" ? "text-white font-bold" : "text-zinc-600 hover:text-zinc-300"
              }`}
          >
            EN
          </button>
          <span className="text-zinc-700">|</span>
          <button
            onClick={() => setLang("UA")}
            className={`transition-colors ${lang === "UA" ? "text-white font-bold" : "text-zinc-600 hover:text-zinc-300"
              }`}
          >
            UA
          </button>
        </div>

        {/* Center: Coordinates / Film Slate Marker */}
        <div className="hidden sm:block text-zinc-500 font-mono tracking-[0.3em] select-none text-[10px]">
          {CINEMA_DATA.footer.code}
        </div>

        {/* Right: Real-time Live Timecode Clock */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping inline-block" />
          <span className="text-zinc-300 font-mono tracking-wider tabular-nums">
            {timeStr}
          </span>
        </div>
      </div>
    </div>
  );
}
