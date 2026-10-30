"use client";

import React from "react";

export function FilmGrainOverlay() {
  return (
    <>
      {/* 35mm Analog Film Grain Texture */}
      <div className="film-grain" aria-hidden="true" />

      {/* Film Dust & Ambient Noise */}
      <div className="film-dust" aria-hidden="true" />

      {/* Left Anamorphic Red Pillar Flare (Seen prominently in video) */}
      <div className="anamorphic-beam-left" aria-hidden="true" />
      <div className="red-vertical-flare-left" aria-hidden="true" />

      {/* Right Anamorphic Red Pillar Flare */}
      <div className="anamorphic-beam-right" aria-hidden="true" />
      <div className="red-vertical-flare-right" aria-hidden="true" />

      {/* Subtle Top & Bottom Cinematic Letterbox Vignettes */}
      <div
        className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/80 via-black/20 to-transparent pointer-events-none z-30"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-30"
        aria-hidden="true"
      />
    </>
  );
}
