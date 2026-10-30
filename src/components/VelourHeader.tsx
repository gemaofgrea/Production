"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AuraLogo } from "./AuraLogo";

export function VelourHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 sm:px-12 ${
        mounted ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        scrolled
          ? "py-4 bg-[#151513]/90 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "py-7 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Signature Aura Anamorphic Brand Icon */}
        <Link href="/" aria-label="Aura Productions, home" className="group flex items-center gap-3">
          <AuraLogo className="w-7 h-7 text-[#ecebe4]" />
          <span className="text-sm font-medium tracking-tight text-[#ecebe4] hidden sm:inline group-hover:text-white transition-colors">
            Aura
          </span>
        </Link>

        {/* Clean Editorial Navigation with Hover Lift & Underline */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-[#8e8d86]">
          {[
            { name: "Work", href: "/#work" },
            { name: "About", href: "/#about" },
            { name: "Services", href: "/#services" },
            { name: "Contact", href: "/#contact" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative py-1 hover:text-[#ecebe4] hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#e26228] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Contact Indicator Button with Hover Physics */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#contact"
            className="group text-xs font-semibold tracking-wider uppercase text-[#ecebe4] px-5 py-2.5 rounded-full border border-white/10 hover:border-[#e26228] hover:text-white hover:bg-[#e26228] hover:shadow-[0_0_25px_rgba(226,98,40,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5"
          >
            <span>Get In Touch</span>
            <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#ecebe4] p-2 hover:text-[#e26228] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu with Smooth Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#181815] border border-white/10 px-6 py-6 flex flex-col gap-4 text-base font-medium mt-3 rounded-2xl shadow-2xl animate-in slide-in-from-top-4 duration-300">
          {[
            { name: "Work", href: "/#work" },
            { name: "About", href: "/#about" },
            { name: "Services", href: "/#services" },
            { name: "Contact", href: "/#contact", accent: true },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`py-2 border-b border-white/5 transition-colors ${
                item.accent ? "text-[#e26228]" : "text-[#ecebe4] hover:text-[#e26228]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

