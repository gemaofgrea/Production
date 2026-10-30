"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Film } from "lucide-react";

interface CinemaImageProps {
  src?: string;
  alt: string;
  className?: string;
  aspect?: string;
  tag?: string;
  meta?: string;
  priority?: boolean;
}

export function CinemaImage({
  src,
  alt,
  className = "",
  aspect = "aspect-[16/10]",
  tag,
  meta,
  priority = false,
}: CinemaImageProps) {
  const [hasError, setHasError] = useState(false);

  // If user provided a valid image
  if (src && !hasError) {
    return (
      <div className={`relative overflow-hidden group bg-zinc-950 ${aspect} ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          onError={() => setHasError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>
    );
  }

  // Clean, elegant modern placeholder
  return (
    <div
      className={`relative overflow-hidden group bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-white/5 flex flex-col justify-between p-5 ${aspect} ${className}`}
    >
      <div className="flex justify-between items-center text-xs">
        <span className="px-2.5 py-1 rounded-full bg-white/10 text-zinc-300 font-medium text-[11px]">
          {tag || "Production"}
        </span>
        {meta && <span className="text-zinc-500 text-[11px] font-mono">{meta}</span>}
      </div>

      <div className="flex flex-col items-center justify-center my-auto text-zinc-600 group-hover:text-indigo-400 transition-colors">
        <Film size={28} className="mb-2 opacity-60 group-hover:opacity-100 transition-opacity" />
        <span className="text-xs text-zinc-500 tracking-wider uppercase font-medium">
          {alt}
        </span>
      </div>

      <div className="flex justify-between items-center text-[11px] text-zinc-500 border-t border-white/5 pt-2">
        <span>4K Cinema</span>
        <span className="text-indigo-400 font-medium">Ready</span>
      </div>
    </div>
  );
}
