"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "./Section";
import BrandModal from "./BrandModal";

const WALLPAPERS = [
  // The PNGs come from design/wallpapers/ (HTML); see its README to edit and re-render.
  { src: "/assets/wallpapers/wallpaper_cubes.png", label: "Cube orbit" },
  { src: "/assets/wallpapers/wallpaper_blocks.png", label: "Building blocks" },
  { src: "/assets/wallpapers/wallpaper_openbox.png", label: "Open box" },
  { src: "/assets/wallpapers/wallpaper_boxgrid.png", label: "Box grid" },
];

export default function BrandWallpapers() {
  const [preview, setPreview] = useState<number | null>(null);

  const open = (i: number) => setPreview(i);
  const close = () => setPreview(null);
  const prev = () => setPreview((p) => (p === null || p === 0 ? WALLPAPERS.length - 1 : p - 1));
  const next = () => setPreview((p) => (p === null || p === WALLPAPERS.length - 1 ? 0 : p + 1));

  return (
    <Section>
      <span className="font-mono text-[12px] font-medium tracking-[0.15em] uppercase text-teal-ink mb-3 block">
        Wallpapers
      </span>
      <h2 className="font-serif text-[clamp(24px,3vw,32px)] font-normal text-navy leading-[1.1] mb-2">
        Desktop backgrounds.
      </h2>
      <p className="text-[15px] text-muted leading-[1.6] max-w-[480px] mb-8">
        Wallpapers for club and classroom computers, each with a QR code to join. Click to preview.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {WALLPAPERS.map((w, i) => (
          <div
            key={w.label}
            className="border-[1.5px] border-border rounded-[14px] overflow-hidden bg-white transition-[border-color,transform,box-shadow] hover:border-teal hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(13,45,62,0.08)]"
          >
            <button
              onClick={() => open(i)}
              className="relative aspect-video w-full cursor-pointer border-none p-0 bg-transparent"
              aria-label={`Preview ${w.label}`}
            >
              <Image
                src={w.src}
                alt={w.label}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </button>
            <div className="px-4 py-3 mt-2 flex items-center justify-between">
              <span className="text-[13px] text-navy font-semibold">{w.label}</span>
              <a
                href={w.src}
                download
                className="whitespace-nowrap text-[12px] font-bold text-teal-ink no-underline border border-teal-dark/30 px-3 py-1 rounded-sm hover:bg-teal-dark hover:text-white transition-colors"
                aria-label={`Download ${w.label}`}
              >
                &darr; Download
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
