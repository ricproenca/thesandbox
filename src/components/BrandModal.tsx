"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface BrandModalProps {
  src: string;
  alt: string;
  onClose: () => void;
  prev?: () => void;
  next?: () => void;
}

export default function BrandModal({ src, alt, onClose, prev, next }: BrandModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previouslyFocusedRef.current = document.activeElement as HTMLElement;
    containerRef.current?.focus();
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
        const focusable = Array.from(
          el.querySelectorAll<HTMLElement>("button, [href], [tabindex]:not([tabindex='-1'])")
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
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center p-4 cursor-pointer"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Image preview: ${alt}`}
    >
       <div
         ref={containerRef}
         tabIndex={-1}
         className="flex flex-col items-center cursor-default outline-none"
         onClick={(e) => e.stopPropagation()}
       >
         <button
           onClick={handleClose}
           className="absolute -top-12 right-0 text-white/70 hover:text-white text-2xl bg-transparent border-none cursor-pointer p-2 rounded"
           aria-label="Close preview"
         >
           &times;
         </button>
         {prev && (
           <button
             onClick={prev}
             className="absolute -left-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl bg-transparent border-none cursor-pointer p-4 rounded"
             aria-label="Previous image"
           >
             &#8249;
           </button>
         )}
         {next && (
           <button
             onClick={next}
             className="absolute -right-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl bg-transparent border-none cursor-pointer p-4 rounded"
             aria-label="Next image"
           >
             &#8250;
           </button>
         )}
         <div className="relative w-[90vw] h-[85vh]">
           <Image
             src={src}
             alt={alt}
             fill
             sizes="90vw"
             className="object-contain rounded-lg"
           />
         </div>
         <div className="text-center text-white/50 text-sm mt-3 font-mono">{alt}</div>
       </div>
    </div>
  );
}
