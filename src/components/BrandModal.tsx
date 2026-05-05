"use client";

import { useEffect } from "react";

interface BrandModalProps {
  src: string;
  alt: string;
  onClose: () => void;
  prev?: () => void;
  next?: () => void;
}

export default function BrandModal({ src, alt, onClose, prev, next }: BrandModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev?.();
      if (e.key === "ArrowRight") next?.();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      <div className="relative max-w-[90vw] max-h-[90vh] cursor-default" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white text-2xl bg-transparent border-none cursor-pointer p-2"
        >
          &times;
        </button>
        {prev && (
          <button
            onClick={prev}
            className="absolute -left-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl bg-transparent border-none cursor-pointer p-4"
          >
            &#8249;
          </button>
        )}
        {next && (
          <button
            onClick={next}
            className="absolute -right-12 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl bg-transparent border-none cursor-pointer p-4"
          >
            &#8250;
          </button>
        )}
        <img src={src} alt={alt} className="max-w-full max-h-[85vh] object-contain rounded-lg" />
        <div className="text-center text-white/50 text-sm mt-3 font-mono">{alt}</div>
      </div>
    </div>
  );
}
