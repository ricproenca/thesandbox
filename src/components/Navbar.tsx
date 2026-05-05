"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Sandbox", href: "/" },
  { label: "Project Spark", href: "/spark" },
  { label: "Brand", href: "/brand" },
  { label: "Showcase", href: "/showcase" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-navy sticky top-0 z-50 px-8 lg:px-12 h-16 flex items-center justify-between border-b border-white/[0.07]">
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <Image
          src="/assets/logo/sandbox_logo.png"
          alt="The Sandbox"
          width={36}
          height={36}
          className="rounded-md"
        />
        <div>
          <div className="text-sm font-bold text-white">The Sandbox</div>
          <div className="text-[10px] text-white/40 tracking-[0.08em] uppercase mt-[1px]">
            Technology Club
          </div>
        </div>
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[14px] text-white/70 no-underline transition-colors hover:text-teal"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="#join"
          className="bg-orange text-white text-[13px] font-bold px-5 py-2 rounded-[8px] no-underline transition-[transform,opacity] hover:-translate-y-px hover:opacity-90"
        >
          Join the club
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-[2px] bg-white transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block w-6 h-[2px] bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-[2px] bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-navy-deep border-b border-white/[0.07] flex flex-col px-8 py-6 gap-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] text-white/70 no-underline transition-colors hover:text-teal"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#join"
            className="bg-orange text-white text-[14px] font-bold px-5 py-2.5 rounded-[8px] no-underline text-center mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Join the club
          </a>
        </div>
      )}
    </nav>
  );
}
