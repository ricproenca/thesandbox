"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "./Section";
import BrandModal from "./BrandModal";

const POSTERS = [
  { src: "/assets/posters/sandbox_poster_1.png", label: "Sandbox Poster 1" },
  { src: "/assets/posters/sandbox_poster_2.png", label: "Sandbox Poster 2" },
  { src: "/assets/posters/sandbox_poster_3.png", label: "Sandbox Poster 3" },
  { src: "/assets/posters/sandbox_poster_4.png", label: "Sandbox Poster 4" },
  { src: "/assets/posters/sandbox_poster_5.png", label: "Sandbox Poster 5" },
];

export default function BrandPosters() {
  const [preview, setPreview] = useState<number | null>(null);

  const open = (i: number) => setPreview(i);
  const close = () => setPreview(null);
  const prev = () => setPreview((p) => (p === null || p === 0 ? POSTERS.length - 1 : p - 1));
  const next = () => setPreview((p) => (p === null || p === POSTERS.length - 1 ? 0 : p + 1));

  return (
    <Section variant="bg">
      <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
        Posters
      </span>
      <h2 className="font-serif text-[clamp(24px,3vw,32px)] font-normal text-navy leading-[1.1] mb-2">
        Print-ready posters.
      </h2>
      <p className="text-[15px] text-muted leading-[1.6] max-w-[480px] mb-8">
        Click to preview. Download for events, showcases, or presentations.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
        {POSTERS.map((poster, i) => (
          <div
            key={poster.label}
            className="border-[1.5px] border-border rounded-[14px] overflow-hidden bg-white transition-[border-color,transform,box-shadow] hover:border-teal hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(13,45,62,0.08)]"
          >
            <button
              onClick={() => open(i)}
              className="relative aspect-[3/4] w-full cursor-pointer border-none p-0 bg-transparent"
              aria-label={`Preview ${poster.label}`}
            >
              <Image
                src={poster.src}
                alt={poster.label}
                fill
                className="object-cover"
              />
            </button>
            <div className="px-4 py-3 mt-2 flex items-center justify-between">
              <span className="text-[14px] text-navy font-semibold">{poster.label}</span>
              <a
                href={poster.src}
                download
                className="text-[12px] font-bold text-teal-dark no-underline border border-teal-dark/30 px-3 py-1 rounded-sm hover:bg-teal-dark hover:text-white transition-colors"
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
