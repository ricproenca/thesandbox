import type { Metadata } from "next";
import BrandHero from "@/components/BrandHero";
import BrandLogos from "@/components/BrandLogos";
import BrandPosters from "@/components/BrandPosters";
import BrandWallpapers from "@/components/BrandWallpapers";
import BrandInfographic from "@/components/BrandInfographic";

export const metadata: Metadata = {
  title: "Brand & Media — The Sandbox",
  description:
    "Download logos, posters, wallpapers, and infographics for The Sandbox Technology Club.",
  robots: "index, follow",
  alternates: { canonical: "https://thesandboxclub.netlify.app/brand" },
};

export default function BrandPage() {
  return (
    <main id="main-content">
      <BrandHero />
      <BrandLogos />
      <BrandPosters />
      <BrandWallpapers />
      <BrandInfographic />
    </main>
  );
}
