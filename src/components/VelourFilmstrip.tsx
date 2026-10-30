"use client";

import React, { useState, useRef, useEffect } from "react";
import { VELOUR_DATA, VelourProject } from "@/data/cinemaData";
import { CinemaImage } from "@/components/CinemaImage";
import { ArrowLeft, ArrowRight, X, ArrowUpRight, Volume2, VolumeX, Sparkles } from "lucide-react";

export function VelourFilmstrip() {
  const [selectedProject, setSelectedProject] = useState<VelourProject | null>(null);
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.85);
  const [isPlaying, setIsPlaying] = useState(true);
  const [soundNotice, setSoundNotice] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const modalAudioRef = useRef<HTMLAudioElement>(null);
  const projects = VELOUR_DATA.projects;

  // Auto-play sound whenever a project is opened
  useEffect(() => {
    if (selectedProject) {
      setIsMuted(false);
      setIsPlaying(true);
      setSoundNotice(true);
      const timer = setTimeout(() => setSoundNotice(false), 3800);

      // Trigger video & audio playback with sound
      const playTimer = setTimeout(() => {
        if (modalVideoRef.current) {
          modalVideoRef.current.currentTime = 0;
          modalVideoRef.current.muted = false;
          modalVideoRef.current.volume = volume;
          modalVideoRef.current.play().catch(() => { });
        }
        if (modalAudioRef.current) {
          modalAudioRef.current.currentTime = 0;
          modalAudioRef.current.muted = false;
          modalAudioRef.current.volume = volume;
          modalAudioRef.current.play().catch(() => { });
        }
      }, 50);

      return () => {
        clearTimeout(timer);
        clearTimeout(playTimer);
      };
    } else {
      if (modalAudioRef.current) {
        modalAudioRef.current.pause();
      }
    }
  }, [selectedProject, volume]);

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = nextMuted;
    }
    if (modalAudioRef.current) {
      modalAudioRef.current.muted = nextMuted;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    const unmuted = newVol > 0 ? false : true;
    setIsMuted(unmuted);
    if (modalVideoRef.current) {
      modalVideoRef.current.volume = newVol;
      modalVideoRef.current.muted = unmuted;
    }
    if (modalAudioRef.current) {
      modalAudioRef.current.volume = newVol;
      modalAudioRef.current.muted = unmuted;
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    if (modalAudioRef.current) {
      modalAudioRef.current.play().catch(() => { });
    }
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    if (modalAudioRef.current) {
      modalAudioRef.current.pause();
    }
  };

  const handleVideoSeeked = () => {
    if (modalVideoRef.current && modalAudioRef.current) {
      const dur = modalAudioRef.current.duration || 16;
      modalAudioRef.current.currentTime = modalVideoRef.current.currentTime % dur;
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -450, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 450, behavior: "smooth" });
    }
  };

  const getAspectClass = (aspect: VelourProject["aspect"]) => {
    switch (aspect) {
      case "portrait":
        return "w-[280px] sm:w-[340px] md:w-[380px] aspect-[4/5]";
      case "landscape":
        return "w-[340px] sm:w-[440px] md:w-[500px] aspect-[3/2]";
      case "wide":
        return "w-[360px] sm:w-[480px] md:w-[560px] aspect-[16/9]";
      default:
        return "w-[320px] aspect-[4/5]";
    }
  };

  return (
    <section id="work" className="py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-12 sm:mb-16">
        {/* Section Kicker */}
        <div className="text-xs uppercase tracking-widest text-[#e26228] font-semibold mb-3">
          Selected work
        </div>

        {/* Heading & Subtitle Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#ecebe4]">
              Selected Work
            </h2>
            <p className="text-sm sm:text-base text-[#8e8d86] font-light mt-3 max-w-lg">
              A selection of films, photographs, campaigns, and brand worlds with sound design.
            </p>
          </div>

          {/* Navigation Arrows for Filmstrip */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={scrollLeft}
              aria-label="Previous work"
              className="w-11 h-11 rounded-full border border-white/10 hover:border-[#e26228] flex items-center justify-center text-[#ecebe4] hover:text-[#e26228] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
            >
              <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Next work"
              className="w-11 h-11 rounded-full border border-white/10 hover:border-[#e26228] flex items-center justify-center text-[#ecebe4] hover:text-[#e26228] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
            >
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Filmstrip Carousel Track */}
      <div
        ref={scrollRef}
        className="filmstrip-scroll px-6 sm:px-12 cursor-grab active:cursor-grabbing"
      >
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              className="flex-shrink-0 group cursor-pointer flex flex-col justify-between filmstrip-card-item"
            >
              {/* Project Image & Video Frame */}
              <div
                className={`relative overflow-hidden rounded-md bg-[#1d1d1a] ${getAspectClass(
                  project.aspect
                )} transition-transform duration-500 group-hover:scale-[1.01]`}
              >
                {/* Crisp 1080p Video Preview or Poster Fallback */}
                {project.previewClip || project.videoUrl ? (
                  <video
                    src={project.previewClip || project.videoUrl}
                    poster={project.webpPoster || project.image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onLoadedMetadata={(e) => e.currentTarget.play().catch(() => { })}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : project.webpPreview ? (
                  <div className="absolute inset-0 w-full h-full overflow-hidden">
                    <img
                      src={project.webpPreview}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <CinemaImage
                    src={project.image}
                    alt={project.title}
                    aspect={getAspectClass(project.aspect)}
                    tag={project.services}
                  />
                )}


                {/* Video Indicator Pill with radar ping */}
                {project.videoUrl && (
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-[#ecebe4] flex items-center gap-1.5 z-10">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-[#e26228]" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e26228]" />
                    </span>
                    <span>SOUND FILM</span>
                  </div>
                )}

                {/* View Project Pill on Hover with Smooth Spring Scale */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <span className="px-5 py-2.5 rounded-full bg-[#151513]/95 text-xs font-medium text-[#ecebe4] border border-white/15 backdrop-blur-md shadow-2xl flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Volume2 size={13} className="text-[#e26228]" />
                    <span>View project with sound</span>
                    <ArrowUpRight size={13} className="text-[#e26228] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>

              {/* Bottom Metadata (Matching Velour) */}
              <div className="flex items-center justify-between text-xs sm:text-[13px] text-[#8e8d86] font-light mt-4 pt-2 border-t border-white/[0.08] tracking-wide transition-colors group-hover:border-white/20">
                <span className="font-mono text-[#ecebe4] font-medium group-hover:text-[#e26228] transition-colors">{project.num}</span>
                <span className="text-[#ecebe4] font-medium text-sm group-hover:text-[#e26228] transition-colors">
                  {project.title}
                </span>
                <span className="hidden sm:inline transition-colors group-hover:text-[#ecebe4]">{project.services}</span>
                <span className="font-mono">{project.year}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Project Dossier Modal with Video Player & Sound */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#1b1b19] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto text-[#ecebe4] animate-in zoom-in-95 duration-300"
          >
            {/* Header Row */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
              <div>
                <span className="text-xs text-[#e26228] font-mono tracking-widest uppercase">
                  {selectedProject.num} // {selectedProject.year}
                </span>
                <h3 className="text-2xl sm:text-4xl font-light text-[#ecebe4] mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-[#8e8d86] hover:text-[#ecebe4] rounded-full hover:bg-white/10 hover:rotate-90 transition-all duration-300 cursor-pointer"
                aria-label="Close project dossier"
              >
                <X size={20} />
              </button>
            </div>

            {/* Cinematic Video Player with Sound */}
            {selectedProject.videoUrl ? (
              <div className="relative rounded-xl overflow-hidden bg-black aspect-[16/9] mb-4 border border-white/10 shadow-2xl">
                {/* Synchronized companion audio element */}
                {selectedProject.audioUrl && (
                  <audio
                    ref={modalAudioRef}
                    src={selectedProject.audioUrl}
                    loop
                    preload="auto"
                  />
                )}

                <video
                  ref={modalVideoRef}
                  src={selectedProject.videoUrl}
                  poster={selectedProject.image}
                  controls
                  autoPlay
                  playsInline
                  onPlay={handleVideoPlay}
                  onPause={handleVideoPause}
                  onSeeked={handleVideoSeeked}
                  className="w-full h-full object-cover"
                />

                {/* Sound Active Toast Banner */}
                {soundNotice && !isMuted && (
                  <div className="absolute top-4 left-4 z-30 pointer-events-none px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#e26228]/40 shadow-xl text-xs text-[#ecebe4] flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-radar-ping absolute inline-flex h-full w-full rounded-full bg-[#e26228]" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e26228]" />
                    </span>
                    <span className="font-mono text-[11px] tracking-wide text-white">
                      SOUND ON • {selectedProject.soundLabel || "Cinema Stereo Mix"}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative rounded-lg overflow-hidden bg-[#22221f] aspect-[16/9] mb-8 border border-white/10">
                <CinemaImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  aspect="aspect-[16/9]"
                  tag={selectedProject.services}
                />
              </div>
            )}

            {/* Master Audio Control & Sound Design Console */}
            {selectedProject.videoUrl && (
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#22221f] border border-white/10 mb-8">
                {/* Left: Sound Toggle Button with Animated Waveform */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleMute}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 transition-all duration-300 cursor-pointer ${isMuted
                        ? "bg-white/5 border border-white/10 text-[#8e8d86] hover:text-[#ecebe4] hover:bg-white/10"
                        : "bg-[#e26228] text-white shadow-[0_0_20px_rgba(226,98,40,0.4)]"
                      }`}
                  >
                    {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                    <span>{isMuted ? "Sound Muted" : "Sound Playing"}</span>
                  </button>

                  {/* Dynamic Audio Visualizer Bars */}
                  <div className="flex items-end gap-1 h-4 px-2" title="Audio waveform">
                    {[
                      { delay: "0ms", height: isPlaying && !isMuted ? "h-4" : "h-1" },
                      { delay: "150ms", height: isPlaying && !isMuted ? "h-2.5" : "h-1" },
                      { delay: "300ms", height: isPlaying && !isMuted ? "h-3.5" : "h-1" },
                      { delay: "75ms", height: isPlaying && !isMuted ? "h-1.5" : "h-1" },
                    ].map((bar, i) => (
                      <span
                        key={i}
                        className={`w-0.5 rounded-full bg-[#e26228] transition-all duration-300 ${bar.height} ${isPlaying && !isMuted ? "animate-pulse" : "opacity-30"
                          }`}
                        style={{ animationDelay: bar.delay }}
                      />
                    ))}
                  </div>

                  <span className="text-xs text-[#8e8d86] font-mono hidden sm:inline">
                    {selectedProject.soundLabel || "48kHz Cinema Master Stereo"}
                  </span>
                </div>

                {/* Right: Volume Slider */}
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-[#8e8d86] uppercase tracking-wider">
                    Volume
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-24 sm:w-28 accent-[#e26228] cursor-pointer h-1.5 bg-white/10 rounded-lg appearance-none"
                    aria-label="Audio Volume"
                  />
                  <span className="text-xs font-mono text-[#ecebe4] w-8 text-right">
                    {isMuted ? "0%" : `${Math.round(volume * 100)}%`}
                  </span>
                </div>
              </div>
            )}

            {/* Narrative Description */}
            <p className="text-base sm:text-lg text-[#8e8d86] font-light leading-relaxed mb-8">
              {selectedProject.description}
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-lg bg-[#22221f] border border-white/5 mb-8 text-sm">
              <div>
                <span className="text-xs text-[#8e8d86] block mb-1">Client</span>
                <span className="text-[#ecebe4] font-medium">{selectedProject.client}</span>
              </div>
              <div>
                <span className="text-xs text-[#8e8d86] block mb-1">Services</span>
                <span className="text-[#ecebe4] font-medium">{selectedProject.services}</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-xs text-[#8e8d86] block mb-2">Key Deliverables</span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.deliverables.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-[#ecebe4] hover:border-[#e26228]/50 hover:bg-[#e26228]/10 hover:scale-105 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-4 border-t border-white/10">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-full text-xs font-medium border border-white/10 hover:border-white/30 text-[#ecebe4] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="group px-6 py-2.5 rounded-full text-xs font-semibold bg-[#e26228] text-white hover:bg-[#f0743a] hover:shadow-[0_0_20px_rgba(226,98,40,0.35)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Inquire About Project</span>
                <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

