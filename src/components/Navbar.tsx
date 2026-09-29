"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Project ideas", href: "/#ideas" },
  { label: "Brand", href: "/brand" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (menuOpen) {
      previouslyFocusedRef.current = document.activeElement as HTMLElement;
      setTimeout(() => menuRef.current?.querySelector<HTMLElement>("a")?.focus(), 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      previouslyFocusedRef.current?.focus();
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        setMenuOpen(false);
      }
      if (e.key === "Tab" && menuRef.current) {
        const focusable = Array.from(
          menuRef.current.querySelectorAll<HTMLElement>("a")
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((v) => !v);

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
          <div className="text-[12px] text-white/40 tracking-[0.08em] uppercase mt-[1px]">
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
            aria-current={link.href === pathname ? "page" : undefined}
            className="text-[14px] text-white/70 no-underline transition-colors hover:text-teal aria-[current=page]:text-white aria-[current=page]:font-semibold"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="https://forms.cloud.microsoft/e/20XRHrbVef"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange text-white text-[13px] font-bold px-5 py-2 rounded-[8px] no-underline transition-[transform,opacity] hover:-translate-y-px hover:opacity-90"
        >
          Join the club
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col items-center justify-center gap-[5px] w-11 h-11 -mr-2 bg-transparent border-none cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span className={`block w-6 h-[2px] bg-white transition-all ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block w-6 h-[2px] bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-[2px] bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 left-0 right-0 bg-navy-deep border-b border-white/[0.07] flex flex-col px-8 py-4 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={link.href === pathname ? "page" : undefined}
              className="py-3 text-[16px] text-white/70 no-underline transition-colors hover:text-teal aria-[current=page]:text-white aria-[current=page]:font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://forms.cloud.microsoft/e/20XRHrbVef"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange text-white text-[14px] font-bold px-5 py-3 rounded-[8px] no-underline text-center mt-3"
            onClick={() => setMenuOpen(false)}
          >
            Join the club
          </a>
        </div>
      )}
    </nav>
  );
}
