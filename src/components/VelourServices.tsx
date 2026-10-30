"use client";

import React, { useState } from "react";
import { VELOUR_DATA, VelourService } from "@/data/cinemaData";
import { ArrowUpRight, Plus, Minus, Check } from "lucide-react";

export function VelourServices() {
  const [activeService, setActiveService] = useState<string | null>("01");
  const services = VELOUR_DATA.services;

  const toggleService = (num: string) => {
    setActiveService(activeService === num ? null : num);
  };

  return (
    <section id="services" className="py-24 sm:py-36 px-6 sm:px-12 max-w-7xl mx-auto">
      {/* Section Kicker */}
      <div className="flex flex-wrap items-center justify-between text-xs uppercase tracking-widest text-[#8e8d86] font-medium border-b border-white/[0.08] pb-4 mb-12 sm:mb-16">
        <span>What we do</span>
        <span className="text-[#e26228]">Full service production</span>
      </div>

      {/* Interactive Service Rows */}
      <div className="space-y-2">
        {services.map((service) => {
          const isOpen = activeService === service.num;

          return (
            <div
              key={service.num}
              className={`service-row py-8 sm:py-10 cursor-pointer group transition-all duration-300 relative ${
                isOpen ? "bg-white/[0.015] px-4 rounded-xl border-white/20" : "hover:pl-3"
              }`}
              onClick={() => toggleService(service.num)}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                {/* Title & Number */}
                <div className="flex items-baseline gap-6 sm:gap-12">
                  <span className="font-mono text-sm sm:text-base text-[#8e8d86] group-hover:text-[#e26228] transition-colors duration-300">
                    {service.num}
                  </span>
                  <h3 className="text-3xl sm:text-5xl lg:text-6xl font-light text-[#ecebe4] group-hover:text-white group-hover:translate-x-2 transition-all duration-300 tracking-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Summary & Toggle Icon */}
                <div className="flex items-center justify-between sm:justify-end gap-6 sm:max-w-md">
                  <p className="text-xs sm:text-sm text-[#8e8d86] font-light leading-relaxed group-hover:text-[#ecebe4] transition-colors duration-300">
                    {service.summary}
                  </p>
                  <div
                    className={`w-9 h-9 rounded-full border border-white/10 group-hover:border-[#e26228] group-hover:text-[#e26228] group-hover:scale-105 active:scale-95 flex items-center justify-center text-[#ecebe4] flex-shrink-0 transition-all duration-300 ${
                      isOpen ? "bg-[#e26228] text-white border-[#e26228] rotate-180 shadow-[0_0_15px_rgba(226,98,40,0.4)]" : "rotate-0"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </div>
              </div>

              {/* Expandable Capabilities Drawer */}
              {isOpen && (
                <div className="pt-8 sm:pt-10 mt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 text-sm text-[#8e8d86] animate-drawer-expand">
                  <div className="md:col-span-5 text-[#ecebe4] font-light leading-relaxed">
                    <p>{service.description}</p>
                  </div>
                  <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {service.capabilities.map((cap, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2.5 text-xs sm:text-sm text-[#ecebe4] hover:text-white hover:translate-x-1 transition-all duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e26228] shadow-[0_0_8px_rgba(226,98,40,0.7)] flex-shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
