"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "./Section";
import BrandModal from "./BrandModal";

const POSTERS = [
  // Sources live in design/posters/ (HTML); see its README to edit and re-render.
  { src: "/assets/posters/sandbox_poster_build_v2.png", label: "What will you build?" },
  { src: "/assets/posters/sandbox_poster_anything_v2.png", label: "Build anything" },
  { src: "/assets/posters/sandbox_poster_ideas_v2.png", label: "12 project ideas" },
];

export default function BrandPosters() {
  const [preview, setPreview] = useState<number | null>(null);

  const open = (i: number) => setPreview(i);
  const close = () => setPreview(null);
  const prev = () => setPreview((p) => (p === null || p === 0 ? POSTERS.length - 1 : p - 1));
  const next = () => setPreview((p) => (p === null || p === POSTERS.length - 1 ? 0 : p + 1));

  return (
    <Section variant="bg">
      <span className="font-mono text-[12px] font-medium tracking-[0.15em] uppercase text-teal-ink mb-3 block">
        Posters
      </span>
      <h2 className="font-serif text-[clamp(24px,3vw,32px)] font-normal text-navy leading-[1.1] mb-2">
        Print-ready posters.
      </h2>
      <p className="text-[15px] text-muted leading-[1.6] max-w-[480px] mb-8">
        A4, 300 dpi. Click to preview, or download to print for noticeboards, events and presentations. White backgrounds, so they print well on a school printer.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {POSTERS.map((poster, i) => (
          <div
            key={poster.label}
            className="border-[1.5px] border-border rounded-[14px] overflow-hidden bg-white transition-[border-color,transform,box-shadow] hover:border-teal hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(13,45,62,0.08)]"
          >
            <button
              onClick={() => open(i)}
              className="relative aspect-[210/297] w-full cursor-pointer border-none p-0 bg-transparent"
              aria-label={`Preview ${poster.label}`}
            >
              <Image
                src={poster.src}
                alt={poster.label}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </button>
            <div className="px-4 py-3 mt-2 flex items-center justify-between">
              <span className="text-[14px] text-navy font-semibold">{poster.label}</span>
              <a
                href={poster.src}
                download
                className="whitespace-nowrap text-[12px] font-bold text-teal-ink no-underline border border-teal-dark/30 px-3 py-1 rounded-sm hover:bg-teal-dark hover:text-white transition-colors"
                aria-label={`Download ${poster.label}`}
              >
                &darr; Download
              </a>
            </div>
          </div>
        ))}
      </div>
      {preview !== null && (
        <BrandModal
          src={POSTERS[preview].src}
          alt={POSTERS[preview].label}
          onClose={close}
          prev={prev}
          next={next}
        />
      )}
    </Section>
  );
}
