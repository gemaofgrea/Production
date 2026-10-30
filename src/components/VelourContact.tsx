"use client";

import React, { useState } from "react";
import { VELOUR_DATA } from "@/data/cinemaData";
import { ArrowUpRight, Check, AlertCircle, Loader2 } from "lucide-react";

export function VelourContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Cinematography & Film",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const contact = VELOUR_DATA.contact;

  const services = ["Cinematography & Film", "Photography & Stills", "Commercials", "Creative Direction", "Full Service"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", service: "Cinematography & Film", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <footer id="contact" className="pt-24 sm:pt-36 pb-16 px-6 sm:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
        {/* Left Column: Contact Headline & Direct Wire */}
        <div className="lg:col-span-5">
          <div className="text-xs uppercase tracking-widest text-[#e26228] font-semibold mb-4">
            Contact
          </div>

          <h2 className="text-3xl sm:text-5xl font-light text-[#ecebe4] tracking-tight leading-[1.1] mb-6">
            Got a project in mind? Let’s talk about it.
          </h2>

          <p className="text-sm text-[#8e8d86] font-light leading-relaxed max-w-sm mb-8">
            Tell us about your brand, campaign goals, or timeline. We’ll get back to you within 24 hours.
          </p>

          <div className="space-y-4 pt-4 border-t border-white/[0.08]">
            <div>
              <span className="text-xs text-[#8e8d86] block mb-1">Direct email</span>
              <a
                href={`mailto:${contact.email}`}
                className="text-base text-[#ecebe4] hover:text-[#e26228] transition-colors velour-link"
              >
                {contact.email}
              </a>
            </div>
            <div>
              <span className="text-xs text-[#8e8d86] block mb-1">Studio base</span>
              <p className="text-sm text-[#ecebe4]">{contact.address}</p>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Form */}
        <div className="lg:col-span-7 bg-[#1b1b19] p-8 sm:p-12 rounded-xl border border-white/5">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Pills */}
            <div>
              <label className="block text-xs text-[#8e8d86] uppercase tracking-wider mb-2.5 font-medium">
                What are you looking for?
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, service: item }))}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer active:scale-95 ${formData.service === item
                        ? "bg-[#e26228] text-white shadow-[0_0_15px_rgba(226,98,40,0.4)] scale-105"
                        : "bg-white/5 text-[#8e8d86] hover:text-[#ecebe4] border border-white/5 hover:border-white/20 hover:scale-105"
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Name Input */}
            <div className="relative border-b border-white/10 pb-2 focus-within:border-[#e26228] transition-all duration-300 group">
              <label htmlFor="name" className="block text-xs text-[#8e8d86] mb-1 group-focus-within:text-[#e26228] transition-colors">
                Your name
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Jane Doe"
                className="w-full bg-transparent text-sm sm:text-base text-[#ecebe4] placeholder-[#4f4f49] focus:outline-none transition-colors"
              />
            </div>

            {/* Email Input */}
            <div className="relative border-b border-white/10 pb-2 focus-within:border-[#e26228] transition-all duration-300 group">
              <label htmlFor="email" className="block text-xs text-[#8e8d86] mb-1 group-focus-within:text-[#e26228] transition-colors">
                Your email
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                placeholder="jane@company.com"
                className="w-full bg-transparent text-sm sm:text-base text-[#ecebe4] placeholder-[#4f4f49] focus:outline-none transition-colors"
              />
            </div>

            {/* Message Input */}
            <div className="relative border-b border-white/10 pb-2 focus-within:border-[#e26228] transition-all duration-300 group">
              <label htmlFor="message" className="block text-xs text-[#8e8d86] mb-1 group-focus-within:text-[#e26228] transition-colors">
                Project brief or message
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                placeholder="Tell us about the project goals, dates, and scope..."
                className="w-full bg-transparent text-sm sm:text-base text-[#ecebe4] placeholder-[#4f4f49] focus:outline-none resize-none transition-colors"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group px-8 py-3 rounded-full text-xs font-semibold bg-[#e26228] hover:bg-[#f0743a] hover:shadow-[0_0_25px_rgba(226,98,40,0.4)] hover:scale-105 active:scale-95 text-white transition-all duration-300 flex items-center gap-2 cursor-pointer disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={14} className="animate-spin text-white" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send inquiry</span>
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>
            </div>

            {status === "success" && (
              <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <Check size={14} />
                <span>Thank you! Your message has been sent. We will get back to you shortly.</span>
              </div>
            )}
            {status === "error" && (
              <div className="p-3.5 rounded-lg bg-red-950/40 border border-red-500/30 text-red-300 text-xs flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <AlertCircle size={14} />
                <span>Please fill in your name, email, and message.</span>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer Meta Row */}
      <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#8e8d86]">
        {/* Social Links with Animated Underline */}
        <div className="flex items-center gap-6">
          {[
            { label: "Instagram", href: contact.instagram },
            { label: "LinkedIn", href: contact.linkedin },
          ].map((soc) => (
            <a
              key={soc.label}
              href={soc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative py-0.5 hover:text-[#ecebe4] hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <span>{soc.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#e26228] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="font-mono">{contact.copyright}</div>
      </div>
    </footer>
  );
}
