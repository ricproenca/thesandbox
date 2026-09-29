"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "./Section";
import BrandModal from "./BrandModal";

export default function BrandInfographic() {
  const [open, setOpen] = useState(false);

  return (
    <Section variant="bg">
      <span className="font-mono text-[12px] font-medium tracking-[0.15em] uppercase text-teal-ink mb-3 block">
        Infographic
      </span>
      <h2 className="font-serif text-[clamp(24px,3vw,32px)] font-normal text-navy leading-[1.1] mb-2">
        How it works, at a glance.
      </h2>
      <p className="text-[15px] text-muted leading-[1.6] max-w-[480px] mb-8">
        How the club works, what happens in a session and how to get unstuck, on one page. Click to view full size.
      </p>
      <div className="border-[1.5px] border-border rounded-[14px] overflow-hidden bg-white transition-[border-color,transform,box-shadow] hover:border-teal hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(13,45,62,0.08)] max-w-[800px]">
        <button
          onClick={() => setOpen(true)}
          className="relative aspect-[3/2] w-full cursor-pointer border-none p-0 bg-transparent"
          aria-label="Preview the infographic full size"
        >
          <Image
             src="/assets/others/sandbox_infographic_v2.png"
             alt="The Sandbox at a glance: how it works (pick a project, build at your own pace, show what you made), a 90-minute session (stand-up, 60 minutes of build time, pair feedback, commit check, show and tell) and four steps for getting unstuck (yourself, a peer, AI tools, the teacher)"
             fill
             sizes="(max-width: 800px) 100vw, 800px"
             priority
             className="object-contain bg-white"
           />
        </button>
        <div className="px-5 py-3 mt-3 flex items-center justify-between border-t border-border">
          <span className="text-[14px] text-navy font-semibold">The Sandbox, at a glance</span>
          <a
            href="/assets/others/sandbox_infographic_v2.png"
            download
            className="text-[13px] font-bold text-teal-ink no-underline border border-teal-dark/30 px-4 py-2 rounded-sm hover:bg-teal-dark hover:text-white transition-colors"
            aria-label="Download the infographic"
          >
            &darr; Download
          </a>
        </div>
      </div>
      {open && (
        <BrandModal
          src="/assets/others/sandbox_infographic_v2.png"
          alt="The Sandbox, at a glance"
          onClose={() => setOpen(false)}
        />
      )}
    </Section>
  );
}
