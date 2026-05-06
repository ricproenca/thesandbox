"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "./Section";
import BrandModal from "./BrandModal";

export default function BrandInfographic() {
  const [open, setOpen] = useState(false);

  return (
    <Section variant="bg">
      <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
        Infographic
      </span>
      <h2 className="font-serif text-[clamp(24px,3vw,32px)] font-normal text-navy leading-[1.1] mb-2">
        How it works, at a glance.
      </h2>
      <p className="text-[15px] text-muted leading-[1.6] max-w-[480px] mb-8">
        A visual overview of The Sandbox sessions. Click to view full size.
      </p>
      <div
        className="border-[1.5px] border-border rounded-[14px] overflow-hidden bg-white cursor-pointer transition-[border-color,transform,box-shadow] hover:border-teal hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(13,45,62,0.08)] max-w-[800px]"
        onClick={() => setOpen(true)}
      >
        <div className="relative aspect-[3/2]">
          <Image
            src="/assets/others/infographic.png"
            alt="The Sandbox Infographic"
            fill
            className="object-contain bg-bg"
          />
        </div>
        <div className="px-5 py-3 mt-3 flex items-center justify-between border-t border-border">
          <span className="text-[14px] text-navy font-semibold">Sandbox Infographic</span>
          <a
            href="/assets/others/infographic.png"
            download
            onClick={(e) => e.stopPropagation()}
            className="text-[13px] font-bold text-teal-dark no-underline border border-teal-dark/30 px-4 py-2 rounded-sm hover:bg-teal-dark hover:text-white transition-colors"
          >
            &darr; Download
          </a>
        </div>
      </div>
      {open && (
        <BrandModal
          src="/assets/others/infographic.png"
          alt="The Sandbox Infographic"
          onClose={() => setOpen(false)}
        />
      )}
    </Section>
  );
}
