"use client";

import { useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface BrandModalProps {
  src: string;
  alt: string;
  onClose: () => void;
  prev?: () => void;
  next?: () => void;
}

const ROUND_BUTTON =
  "w-11 h-11 rounded-full bg-white/10 text-white border border-white/20 flex items-center justify-center cursor-pointer transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-teal";

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={dir === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

export default function BrandModal({ src, alt, onClose, prev, next }: BrandModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previouslyFocusedRef.current = document.activeElement as HTMLElement;
    closeRef.current?.focus();
  }, []);

  const handleClose = useCallback(() => {
    onClose();
    previouslyFocusedRef.current?.focus();
  }, [onClose]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
      if (e.key === "ArrowLeft") prev?.();
      if (e.key === "ArrowRight") next?.();
      if (e.key === "Tab") {
        const el = containerRef.current;
        if (!el) return;
        const focusable = Array.from(el.querySelectorAll<HTMLElement>("button, [href]"));
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
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleClose, prev, next]);

  // Portal to <body>: the sections use a transform for their scroll-in animation, and a
  // transformed ancestor would trap this fixed overlay inside the section instead of the viewport.
  return createPortal(
    <div
      ref={containerRef}
      className="fixed inset-0 z-[1000] bg-navy-deep flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={`Image preview: ${alt}`}
      onClick={handleClose}
    >
      <div
        className="flex items-center justify-between gap-4 px-4 sm:px-6 pt-[max(1rem,env(safe-area-inset-top))] pb-3"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="text-white/80 text-[15px] font-semibold truncate">{alt}</span>
        <div className="flex items-center gap-2 flex-shrink-0">
          <a
            href={src}
            download
            className="text-[13px] font-bold text-white no-underline border border-white/25 px-4 py-2.5 rounded-full hover:bg-white/10 transition-colors"
          >
            &darr; Download
          </a>
          <button ref={closeRef} onClick={handleClose} className={ROUND_BUTTON} aria-label="Close preview">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* The image fills whatever space is left and keeps its whole shape (object-contain) */}
      <div className="relative flex-1 min-h-0 mx-4 sm:mx-20 mb-4 sm:mb-[max(1rem,env(safe-area-inset-bottom))]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {(prev || next) && (
        <>
          {/* Phones: arrows in a bar under the image, so they don't cover it */}
          <div
            className="sm:hidden flex justify-center gap-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
            onClick={(e) => e.stopPropagation()}
          >
            {prev && (
              <button onClick={prev} className={ROUND_BUTTON} aria-label="Previous image">
                <Chevron dir="left" />
              </button>
            )}
            {next && (
              <button onClick={next} className={ROUND_BUTTON} aria-label="Next image">
                <Chevron dir="right" />
              </button>
            )}
          </div>
          {/* Larger screens: arrows at the sides, in the margin next to the image */}
          {prev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className={`${ROUND_BUTTON} hidden sm:flex absolute left-5 top-1/2 -translate-y-1/2`}
              aria-label="Previous image"
            >
              <Chevron dir="left" />
            </button>
          )}
          {next && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className={`${ROUND_BUTTON} hidden sm:flex absolute right-5 top-1/2 -translate-y-1/2`}
              aria-label="Next image"
            >
              <Chevron dir="right" />
            </button>
          )}
        </>
      )}
    </div>,
    document.body,
  );
}
