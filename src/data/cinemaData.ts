export interface VelourProject {
  id: string;
  num: string;
  title: string;
  services: string;
  year: string;
  aspect: "portrait" | "landscape" | "wide";
  image: string;
  previewClip?: string;
  webpPreview?: string;
  webpPoster?: string;
  videoUrl?: string;
  audioUrl?: string;
  soundLabel?: string;
  description: string;
  client: string;
  deliverables: string[];
}

export interface VelourService {
  num: string;
  title: string;
  summary: string;
  description: string;
  capabilities: string[];
}

export const VELOUR_DATA = {
  brand: {
    name: "AURA PRODUCTIONS",
    shortName: "Aura",
    location: "Vancouver · BC",
    heroStatementPart1: "We give you a",
    heroStatementPart2: "point of view",
    intro:
      "You’re building a brand with something to say. We translate that story into cinematic work people feel, remember, and recognize as yours.",
  },
  projects: [
    {
      id: "rugby-bricks",
      num: "01",
      title: "Vienna Shortfilm",
      services: "Cinematography + Stills",
      year: "2026",
      aspect: "portrait",
      image: "/webp/rugby-bricks-thumb.webp",
      previewClip: "/clips/rugby-bricks-preview.mp4",
      webpPreview: "/webp/rugby-bricks.webp",
      webpPoster: "/webp/rugby-bricks-thumb.webp",
      videoUrl: "/newvideos/VIENNA _ 4K Cinematic Shortfilm _ SONY A7IV_2160p.mp4",
      audioUrl: "/audio/rugby-bricks.wav",
      soundLabel: "VIENNA 4K Cinematic Shortfilm • SONY A7IV",
      description:
        "High-performance cinematic shortfilm shot on Sony A7IV in Vienna, featuring architectural symmetry, natural tones, and ambient street sequences.",
      client: "Vienna Arts Guild",
      deliverables: ["4K Cinematic Shortfilm", "Color Grading", "Original Sound Mix"],
    },
    {
      id: "snackish",
      num: "02",
      title: "Post-it Spec Ad",
      services: "Commercial Film + Stills",
      year: "2026",
      aspect: "landscape",
      image: "/webp/snackish-thumb.webp",
      previewClip: "/clips/snackish-preview.mp4",
      webpPreview: "/webp/snackish.webp",
      webpPoster: "/webp/snackish-thumb.webp",
      videoUrl: "/newvideos/Great Ideas _ Spec Ad _ Post-it (2020)_1080p.mp4",
      audioUrl: "/audio/snackish.wav",
      soundLabel: "Commercial Synth & Narrative Groove",
      description:
        "Vibrant, energetic product narrative commercial campaign showcasing thoughtful ideas and creative brainstorm sets with fluid camera moves.",
      client: "Post-it Brand",
      deliverables: ["Commercial Campaign", "Product Key Art", "Digital Motion"],
    },
    {
      id: "kodama-ice",
      num: "03",
      title: "Anomaly Ski Commercial",
      services: "Cinematography + Creative Direction",
      year: "2026",
      aspect: "portrait",
      image: "/webp/kodama-ice-thumb.webp",
      previewClip: "/clips/kodama-ice-preview.mp4",
      webpPreview: "/webp/kodama-ice.webp",
      webpPoster: "/webp/kodama-ice-thumb.webp",
      videoUrl: "/newvideos/ANOMALY - CINEMATIC SKI COMMERCIAL _ SONY FX3 JAPAN [4K]_2160p.mp4",
      audioUrl: "/audio/kodama-ice.wav",
      soundLabel: "Alpine Snow Storm & Glacial Ambience",
      description:
        "High-speed cinematic ski commercial filmed on Sony FX3 in Hokkaido Japan, capturing powder snow bursts, mountain crests, and dynamic athletic movement.",
      client: "Anomaly Ski Equipment",
      deliverables: ["4K Commercial Film", "High-Speed Action Cinematography", "Sound Design"],
    },
    {
      id: "smartsweets",
      num: "04",
      title: "Cinematic Japan",
      services: "Travel Documentary + Creative Direction",
      year: "2026",
      aspect: "landscape",
      image: "/webp/smartsweets-thumb.webp",
      previewClip: "/clips/smartsweets-preview.mp4",
      webpPreview: "/webp/smartsweets.webp",
      webpPoster: "/webp/smartsweets-thumb.webp",
      videoUrl: "/newvideos/Cinematic Japan _ Tokyo to Hakuba to Osaka (Sony A7IV + ZV-E1)_2160p50.mp4",
      audioUrl: "/audio/smartsweets.wav",
      soundLabel: "Tokyo to Hakuba Journey Score",
      description:
        "Visual documentary odyssey spanning Tokyo, Hakuba alpine slopes, and neon Osaka nightscapes captured with Sony A7IV and ZV-E1 cameras.",
      client: "Japan Tourism Board",
      deliverables: ["Cinematic Travel Film", "Editorial Photography", "Motion Stills"],
    },
    {
      id: "slo-coffee",
      num: "05",
      title: "October Feels",
      services: "Brand Film + Stills",
      year: "2026",
      aspect: "portrait",
      image: "/webp/slo-coffee-thumb.webp",
      previewClip: "/clips/slo-coffee-preview.mp4",
      webpPreview: "/webp/slo-coffee.webp",
      webpPoster: "/webp/slo-coffee-thumb.webp",
      videoUrl: "/newvideos/How October Feels _ Shot on FX3_2160p.mp4",
      audioUrl: "/audio/slo-coffee.wav",
      soundLabel: "Autumn Ambience & Acoustic Warmth",
      description:
        "Sensory, tactile exploration of golden autumn light, cool forest breezes, and slow lifestyle stillness filmed on Sony FX3.",
      client: "October Collective",
      deliverables: ["Origin Brand Film", "Editorial Stills", "Digital Storytelling"],
    },
    {
      id: "scammer",
      num: "06",
      title: "Cinema Film",
      services: "Feature Film + Color Grading",
      year: "2026",
      aspect: "wide",
      image: "/webp/scammer-thumb.webp",
      previewClip: "/clips/scammer-preview.mp4",
      webpPreview: "/webp/scammer.webp",
      webpPoster: "/webp/scammer-thumb.webp",
      videoUrl: "/newvideos/The Most Cinematic Showreel You ll Ever See_2160p.mp4",
      audioUrl: "/audio/scammer.wav",
      soundLabel: "Cinematic Master Film Score",
      description:
        "Tense narrative master film showcasing dramatic lighting, high-contrast cinematography, kinetic action pacing, and anamorphic depth.",
      client: "Studio Feature Presentation",
      deliverables: ["Principal Photography", "Festival Trailer", "Color Grading"],
    },
    {
      id: "tevah-wellness",
      num: "07",
      title: "Cinematography 2025",
      services: "Cinematography + Post-production",
      year: "2026",
      aspect: "portrait",
      image: "/webp/tevah-wellness-thumb.webp",
      previewClip: "/clips/tevah-wellness-preview.mp4",
      webpPreview: "/webp/tevah-wellness.webp",
      webpPoster: "/webp/tevah-wellness-thumb.webp",
      videoUrl: "/newvideos/Cinematography Reel 2025_2160p.mp4",
      audioUrl: "/audio/tevah-wellness.wav",
      soundLabel: "Cinematic Symphony & Wellness Resonance",
      description:
        "Comprehensive cinematography film celebrating narrative camera movement, commercial key lighting, and tactile color science.",
      client: "Aura Creative Lab",
      deliverables: ["National Commercial", "Editorial Stills", "Sound Design"],
    },
  ] as VelourProject[],


  services: [
    {
      num: "01",
      title: "Cinematography & Film Production",
      summary: "End-to-end cinema production shaped around the story.",
      description:
        "From initial creative concept to principal photography, color grading, and final sound mix, we produce commercials, documentaries, brand films, and narrative cinema that leave a lasting mark.",
      capabilities: [
        "Commercials & Brand Anthems",
        "Narrative & Documentary Films",
        "High-Speed & Anamorphic Cinematography",
        "Complete On-Set Physical Production",
      ],
    },
    {
      num: "02",
      title: "Photography",
      summary: "Campaign, product, and editorial imagery with cinematic intent.",
      description:
        "We capture striking, tactile stills that convey emotion and character. High-end product photography, architectural environments, and editorial fashion with thoughtful lighting.",
      capabilities: [
        "Campaign & Key Art Photography",
        "Product & Culinary Stills",
        "Lookbooks & Editorial Portraits",
        "Digital & Print Retouching",
      ],
    },
    {
      num: "03",
      title: "Social Content",
      summary: "Short-form video and high-impact social-first storytelling.",
      description:
        "Content designed natively for platforms that doesn't feel like disposable ads. Thoughtfully filmed vertical stories with cinematic depth and undeniable retention.",
      capabilities: [
        "Vertical Video & TikTok/Reels Campaigns",
        "Dynamic Behind-The-Scenes",
        "Content Batching & Production Sprints",
        "Audience Growth Storytelling",
      ],
    },
    {
      num: "04",
      title: "Creative Direction",
      summary: "Brand positioning, concept development, and visual identity.",
      description:
        "We partner closely with founders, creative leads, and marketing directors to distill brand vision into distinct visual grammar and creative treatments.",
      capabilities: [
        "Creative Concepting & Treatments",
        "Visual Identity Systems",
        "Art Direction & Set Design",
        "Talent Casting & Location Scouting",
      ],
    },
  ] as VelourService[],
  contact: {
    email: "hello@auraproductions.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    vimeo: "https://vimeo.com",
    address: "Vancouver, BC",
    copyright: "© 2026 Aura Productions Inc. All rights reserved.",
  },
};

// Aliases for compatibility with other files if needed
export const CINEMA_DATA = {
  brand: {
    name: "AURA PRODUCTIONS",
    monogram: "AURA",
    year: "2026",
    tagline: "We give you a point of view",
    heroHeading: "We give you a point of view",
    heroSubtext: VELOUR_DATA.brand.intro,
    stats: [
      { label: "Selected Works", value: "07" },
      { label: "Core Capabilities", value: "04" },
      { label: "Location", value: "Vancouver" },
      { label: "Full Service", value: "100%" },
    ],
  },
  featuredWorks: VELOUR_DATA.projects.map((p) => ({
    id: p.id,
    title: p.title,
    badge: p.services,
    category: p.services,
    year: p.year,
    duration: "2026",
    director: "Aura Collective",
    dop: "Alexandre Moreau",
    image: p.image,
    aspect: p.aspect,
    synopsis: p.description,
    awards: ["Official Selection"],
    camera: "Cinema Rig",
    stills: [],
  })),
  services: VELOUR_DATA.services.map((s) => ({
    id: s.num,
    num: s.num,
    number: s.num,
    title: s.title,
    tagline: s.summary,
    desc: s.description,
    description: s.summary,
    icon: "record",
    capabilities: s.capabilities,
    deliverables: s.capabilities,
  })),
  manifesto: {
    tag: "Approach",
    heading: "We translate stories into cinematic work",
    subheading: "Vancouver · BC",
    paragraphs: [VELOUR_DATA.brand.intro],
    pillars: [],
  },
  footer: {
    code: "VANCOUVER · BC",
    socials: [
      { name: "INSTAGRAM", href: "https://instagram.com" },
      { name: "LINKEDIN", href: "https://linkedin.com" },
      { name: "VIMEO", href: "https://vimeo.com" },
    ],
    hubs: [{ city: "VANCOUVER", timezone: "America/Vancouver", status: "STUDIO" }],
  },
};
