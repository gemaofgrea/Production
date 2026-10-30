import React from "react";
import { AuraLogo } from "@/components/AuraLogo";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#151513] text-[#ecebe4] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(226, 98, 40, 0.5) 0%, transparent 70%)",
        }}
      />

      <div className="flex flex-col items-center gap-6 z-10">
        <div className="relative">
          <AuraLogo className="w-10 h-10 text-[#ecebe4] animate-pulse" />
          <div className="absolute inset-0 rounded-full border-t border-[#e26228] animate-spin -m-2" />
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e26228] animate-ping" />
          <span className="text-xs uppercase tracking-widest text-[#8e8d86] font-mono">
            Loading Film...
          </span>
        </div>
      </div>
    </div>
  );
}
