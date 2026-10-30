import { VelourPreloader } from "@/components/VelourPreloader";
import { AmbientGlow } from "@/components/AmbientGlow";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { VelourHeader } from "@/components/VelourHeader";
import { VelourHero } from "@/components/VelourHero";
import { VelourFilmstrip } from "@/components/VelourFilmstrip";
import { VelourServices } from "@/components/VelourServices";
import { VelourAbout } from "@/components/VelourAbout";
import { VelourContact } from "@/components/VelourContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#151513] text-[#ecebe4] selection:bg-[#e26228] selection:text-white relative overflow-x-hidden">
      {/* Visible Ambient Background Glow & Lighting */}
      <AmbientGlow />

      {/* Editorial Preloader with Shutter Curtain Exit */}
      <VelourPreloader />

      {/* Header with Brand Mark and Navigation */}
      <VelourHeader />

      {/* Hero Opening Statement */}
      <VelourHero />

      {/* Selected Work Filmstrip Horizontal Carousel with Smooth Reveal */}
      <RevealOnScroll direction="up" delay={100}>
        <VelourFilmstrip />
      </RevealOnScroll>

      {/* What We Do Services Suite with Smooth Reveal */}
      <RevealOnScroll direction="up" delay={150}>
        <VelourServices />
      </RevealOnScroll>

      {/* About The Studio Narrative with Smooth Reveal */}
      <RevealOnScroll direction="up" delay={150}>
        <VelourAbout />
      </RevealOnScroll>

      {/* Contact & Footer Suite with Smooth Reveal */}
      <RevealOnScroll direction="up" delay={100}>
        <VelourContact />
      </RevealOnScroll>
    </main>
  );
}
