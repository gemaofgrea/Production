import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://auraproductions.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aura Productions | Vancouver Video & Photography",
    template: "%s | Aura Productions",
  },
  description:
    "Aura Productions is a Vancouver creative production studio crafting cinematic video, photography, social content and creative direction for brands.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aura Productions | Vancouver Video & Photography",
    description:
      "Aura Productions is a Vancouver creative production studio crafting cinematic video, photography, social content and creative direction for brands.",
    url: siteUrl,
    siteName: "Aura Productions",
    locale: "en_CA",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};


export const viewport = {
  themeColor: "#151513",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#151513] text-[#ecebe4] antialiased">
      <body className="min-h-full flex flex-col bg-[#151513] text-[#ecebe4] selection:bg-[#e26228] selection:text-white">
        {children}
      </body>
    </html>
  );
}
