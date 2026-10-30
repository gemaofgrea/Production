"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

export default function GlobalError({
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
    console.error("[Global Error Boundary caught]", error);
  }, [error]);

  return (
    <html lang="en" className="h-full bg-[#151513] text-[#ecebe4]">
      <body className="min-h-full flex flex-col items-center justify-center bg-[#151513] text-[#ecebe4] px-6 py-12 selection:bg-[#e26228] selection:text-white font-sans">
        <div className="max-w-md w-full text-center flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
            <AlertTriangle size={24} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-[#ecebe4] mb-3">
            System Interruption
          </h1>

          <p className="text-sm text-[#8e8d86] mb-8 leading-relaxed font-light">
            A critical application error occurred. Please refresh or attempt to restart the application shell.
          </p>

          <div className="flex gap-4">
            {handleRetry && (
              <button
                onClick={() => handleRetry()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e26228] text-white font-medium text-sm transition-all hover:bg-[#c9521d] cursor-pointer"
              >
                <RotateCcw size={15} />
                <span>Reload Application</span>
              </button>
            )}

            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.location.href = "/";
                }
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/10 text-[#ecebe4] font-medium text-sm transition-all hover:bg-white/[0.1] cursor-pointer"
            >
              Go to Home
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
