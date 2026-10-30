"use client";

import React, { useState, useRef } from "react";
import { CINEMA_DATA } from "@/data/cinemaData";
import { Upload, Check, AlertCircle, Loader2 } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [fileCount, setFileCount] = useState(0);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const maxChars = 1000;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "message" && value.length > maxChars) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFileCount(e.target.files.length);
    }
  };

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
      setFormData({ name: "", email: "", service: "", message: "" });
      setFileCount(0);
      setTimeout(() => setStatus("idle"), 5000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen pt-24 sm:pt-32 pb-28 flex flex-col justify-between px-6 sm:px-12 max-w-7xl mx-auto z-10"
    >
      {/* Contact Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-red-600 inline-block animate-pulse" />
            <span className="text-xs font-mono-tech tracking-[0.25em] text-zinc-400 uppercase">
              CONTACT US
            </span>
          </div>

          <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase text-white cinematic-blur-title leading-tight">
            DROP US <br />
            A LINE!
          </h2>

          <p className="mt-8 text-xs sm:text-sm text-zinc-400 font-mono-tech uppercase tracking-wider leading-relaxed max-w-sm">
            HAVE A SCRIPT, COMMERCIAL BRIEF, OR CO-PRODUCTION IN MIND? LET’S SHAPE REALITY TOGETHER.
          </p>
        </div>

        {/* Right Column: Sleek Minimalist Dark Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Input */}
            <div className="relative border-b border-zinc-800 focus-within:border-red-600 transition-colors">
              <label
                htmlFor="name"
                className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="YOUR FULL NAME"
                className="w-full bg-transparent py-2 text-sm sm:text-base text-white placeholder-zinc-700 focus:outline-none font-mono-tech"
              />
            </div>

            {/* Email Input */}
            <div className="relative border-b border-zinc-800 focus-within:border-red-600 transition-colors">
              <label
                htmlFor="email"
                className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="YOUR.NAME@COMPANY.COM"
                className="w-full bg-transparent py-2 text-sm sm:text-base text-white placeholder-zinc-700 focus:outline-none font-mono-tech"
              />
            </div>

            {/* Service or Project Input */}
            <div className="relative border-b border-zinc-800 focus-within:border-red-600 transition-colors">
              <label
                htmlFor="service"
                className="block text-xs font-mono text-zinc-500 uppercase tracking-widest mb-1"
              >
                Service or Project
              </label>
              <input
                id="service"
                name="service"
                type="text"
                value={formData.service}
                onChange={handleInputChange}
                placeholder="FEATURE FILM / TV SERIES / COMMERCIAL"
                className="w-full bg-transparent py-2 text-sm sm:text-base text-white placeholder-zinc-700 focus:outline-none font-mono-tech"
              />
            </div>

            {/* Message Textarea */}
            <div className="relative border-b border-zinc-800 focus-within:border-red-600 transition-colors">
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-zinc-500 uppercase tracking-widest"
                >
                  Message
                </label>
                <span className="text-[10px] font-mono text-zinc-600">
                  {formData.message.length} / {maxChars} symbols
                </span>
              </div>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="TELL US ABOUT YOUR PROJECT TIMELINE AND VISION..."
                className="w-full bg-transparent py-2 text-sm sm:text-base text-white placeholder-zinc-700 focus:outline-none font-mono-tech resize-none"
              />
            </div>

            {/* File Upload Button */}
            <div className="flex items-center gap-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple
                className="hidden"
                id="file-upload"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono tracking-wider border border-white/20 text-zinc-300 hover:border-red-500 hover:text-white transition-all bg-white/5"
              >
                <Upload size={14} className="text-red-500" />
                <span>{fileCount > 0 ? `${fileCount} file(s) attached` : "+ Upload files"}</span>
              </button>
              {fileCount > 0 && (
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <Check size={14} /> Ready to send
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full sm:w-auto px-10 py-3.5 rounded-full text-xs font-bold tracking-[0.25em] uppercase btn-cinema-red flex items-center justify-center gap-3"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>TRANSMITTING...</span>
                  </>
                ) : (
                  <span>SEND MESSAGE</span>
                )}
              </button>
            </div>

            {/* Status Feedback */}
            {status === "success" && (
              <div className="p-4 rounded border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                <Check size={16} className="text-emerald-400" />
                <span>Message received. Our production desk will contact you within 24 hours.</span>
              </div>
            )}
            {status === "error" && (
              <div className="p-4 rounded border border-red-500/40 bg-red-950/30 text-red-300 text-xs font-mono flex items-center gap-2">
                <AlertCircle size={16} className="text-red-400" />
                <span>Please fill in all required fields before sending.</span>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Footer Row (as in video at 00:27 - 00:30) */}
      <div className="mt-24 pt-10 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono-tech tracking-widest text-zinc-500">
        {/* Social Links */}
        <div className="flex items-center gap-8">
          {CINEMA_DATA.footer.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
              <span>{social.name}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-zinc-600 text-center md:text-right">
          © {CINEMA_DATA.brand.year} {CINEMA_DATA.brand.name}. ALL RIGHTS RESERVED.
        </div>
      </div>
    </section>
  );
}
