"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";
import { AuraLogo } from "@/components/AuraLogo";

export default function ErrorBoundary({
  error,
  retry,
  reset,
}: {
  error: unknown;
  retry?: () => void;
  reset?: () => void;
}) {
  const handleRetry = retry || reset;

  useEffect(() => {
    // Log runtime routing error for observability
    console.error("[Route Error Boundary caught]", error);
  }, [error]);

  const errorMessage =
    error instanceof Error ? error.message : "An unexpected routing interruption occurred.";
  const digest = error && typeof error === "object" && "digest" in error ? (error as { digest: string }).digest : null;

  return (
    <main className="min-h-screen bg-[#151513] text-[#ecebe4] flex flex-col justify-between selection:bg-[#e26228] selection:text-white relative overflow-hidden px-6 sm:px-12 py-8">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(239, 68, 68, 0.35) 0%, rgba(226, 98, 40, 0.2) 45%, transparent 75%)",
        }}
      />

      {/* Top Header Bar */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <Link href="/" className="group flex items-center gap-3 transition-opacity hover:opacity-90">
          <AuraLogo className="w-7 h-7 text-[#ecebe4]" />
          <span className="text-sm font-medium tracking-tight text-[#ecebe4] group-hover:text-white transition-colors">
            Aura Productions
          </span>
        </Link>

        <span className="text-xs uppercase tracking-widest text-red-400 font-mono border border-red-500/20 bg-red-500/10 px-3 py-1 rounded-full">
          Runtime Exception
        </span>
      </header>

      {/* Center Error Body */}
      <div className="max-w-2xl mx-auto text-center my-auto py-16 relative z-10 flex flex-col items-center">
        <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
          <AlertTriangle size={24} />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#ecebe4] mb-3">
          Playback Interrupted
        </h1>

        <p className="text-sm sm:text-base text-[#8e8d86] max-w-md mb-8 leading-relaxed font-light">
          An unexpected error occurred while loading this view. You can reload this segment or return safely to home.
        </p>

        {digest && (
          <div className="mb-8 px-4 py-2 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-[#8e8d86]">
            Digest ID: <span className="text-[#ecebe4]">{digest}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {handleRetry && (
            <button
              onClick={() => handleRetry()}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e26228] text-white font-medium text-sm transition-all duration-300 hover:bg-[#c9521d] hover:shadow-[0_0_30px_rgba(226,98,40,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <RotateCcw size={15} className="transition-transform group-hover:rotate-180 duration-500" />
              <span>Retry Render</span>
            </button>
          )}

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#ecebe4] font-medium text-sm transition-all duration-300"
          >
            <Home size={15} className="text-[#8e8d86]" />
            <span>Return to Studio Home</span>
          </Link>
        </div>
      </div>

      {/* Footer Note */}
      <footer className="max-w-7xl mx-auto w-full text-center text-xs text-[#8e8d86]/60 z-10 font-mono">
        Aura Creative Studio • Vancouver, BC
      </footer>
    </main>
  );
}
