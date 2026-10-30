import Link from "next/link";
import { ArrowLeft, Film, Compass, Sparkles } from "lucide-react";
import { AuraLogo } from "@/components/AuraLogo";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#151513] text-[#ecebe4] flex flex-col justify-between selection:bg-[#e26228] selection:text-white relative overflow-hidden px-6 sm:px-12 py-8">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(226, 98, 40, 0.45) 0%, rgba(245, 158, 11, 0.15) 45%, transparent 75%)",
        }}
      />

      {/* Top Header Bar */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <Link
          href="/"
          className="group flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <AuraLogo className="w-7 h-7 text-[#ecebe4]" />
          <span className="text-sm font-medium tracking-tight text-[#ecebe4] group-hover:text-white transition-colors">
            Aura Productions
          </span>
        </Link>

        <span className="text-xs uppercase tracking-widest text-[#8e8d86] font-mono border border-white/10 px-3 py-1 rounded-full">
          Error 404
        </span>
      </header>

      {/* Center 404 Body */}
      <div className="max-w-3xl mx-auto text-center my-auto py-16 relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs uppercase tracking-widest text-[#e26228] mb-8 font-medium">
          <Sparkles size={13} />
          <span>Scene Missing • Route Not Found</span>
        </div>

        <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-[#ecebe4] leading-none mb-6">
          4<span className="text-[#e26228]">0</span>4
        </h1>

        <p className="text-lg sm:text-xl text-[#8e8d86] max-w-lg mb-10 leading-relaxed font-light">
          The frame you are looking for has been cut from the film or moved to a different timeline.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#e26228] text-white font-medium text-sm transition-all duration-300 hover:bg-[#c9521d] hover:shadow-[0_0_30px_rgba(226,98,40,0.4)] hover:scale-105 active:scale-95"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Return to Studio Home</span>
          </Link>

          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-[#ecebe4] font-medium text-sm transition-all duration-300"
          >
            <Film size={16} className="text-[#8e8d86]" />
            <span>Selected Work</span>
          </Link>
        </div>

        {/* Quick Nav Anchors */}
        <div className="mt-14 pt-8 border-t border-white/[0.08] w-full max-w-md flex items-center justify-center gap-8 text-xs text-[#8e8d86]">
          <Link href="/#about" className="hover:text-white transition-colors flex items-center gap-1.5">
            <Compass size={12} />
            <span>About Studio</span>
          </Link>
          <span className="text-white/20">•</span>
          <Link href="/#services" className="hover:text-white transition-colors">
            Services
          </Link>
          <span className="text-white/20">•</span>
          <Link href="/#contact" className="hover:text-[#e26228] transition-colors">
            Get In Touch
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
