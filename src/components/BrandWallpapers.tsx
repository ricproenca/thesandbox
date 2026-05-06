"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "./Section";
import BrandModal from "./BrandModal";

const WALLPAPERS = [
  { src: "/assets/wallpapers/wallpaper_1.png", label: "Wallpaper 1" },
  { src: "/assets/wallpapers/wallpaper_2.png", label: "Wallpaper 2" },
  { src: "/assets/wallpapers/wallpaper_3.png", label: "Wallpaper 3" },
];

export default function BrandWallpapers() {
  const [preview, setPreview] = useState<number | null>(null);

  const open = (i: number) => setPreview(i);
  const close = () => setPreview(null);
  const prev = () => setPreview((p) => (p === null || p === 0 ? WALLPAPERS.length - 1 : p - 1));
  const next = () => setPreview((p) => (p === null || p === WALLPAPERS.length - 1 ? 0 : p + 1));

  return (
    <Section>
      <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
        Wallpapers
      </span>
      <h2 className="font-serif text-[clamp(24px,3vw,32px)] font-normal text-navy leading-[1.1] mb-2">
        Desktop backgrounds.
      </h2>
      <p className="text-[15px] text-muted leading-[1.6] max-w-[480px] mb-8">
        The Sandbox wallpapers for your screen. Click to preview.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5">
        {WALLPAPERS.map((w, i) => (
          <div
            key={w.label}
            className="border-[1.5px] border-border rounded-[14px] overflow-hidden bg-white cursor-pointer transition-[border-color,transform,box-shadow] hover:border-teal hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(13,45,62,0.08)]"
            onClick={() => open(i)}
          >
            <div className="relative aspect-video">
              <Image
                src={w.src}
                alt={w.label}
                fill
                className="object-cover"
              />
            </div>
            <div className="px-4 py-3 mt-2 flex items-center justify-between">
              <span className="text-[13px] text-navy font-semibold">{w.label}</span>
              <a
                href={w.src}
                download
                onClick={(e) => e.stopPropagation()}
                className="text-[12px] font-bold text-teal-dark no-underline border border-teal-dark/30 px-3 py-1 rounded-sm hover:bg-teal-dark hover:text-white transition-colors"
              >
                &darr;
              </a>
            </div>
          </div>
        ))}
      </div>
      {preview !== null && (
        <BrandModal
          src={WALLPAPERS[preview].src}
          alt={WALLPAPERS[preview].label}
          onClose={close}
          prev={prev}
          next={next}
        />
      )}
    </Section>
  );
}
