"use client";

import { useEffect, useRef, useCallback } from "react";
import { CAT_COLORS, type SparkProject } from "@/lib/spark";

function makeModalVisual(p: SparkProject): string {
  const c = p.color;
  const patterns: Record<string, string> = {
    web: `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><circle cx="240" cy="30" r="60" fill="${c}" opacity="0.08"/><circle cx="60" cy="130" r="40" fill="${c}" opacity="0.05"/><line x1="0" y1="80" x2="300" y2="80" stroke="${c}" stroke-width="0.5" opacity="0.1"/><line x1="150" y1="0" x2="150" y2="160" stroke="${c}" stroke-width="0.5" opacity="0.1"/></svg>`,
    data: `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect x="20" y="100" width="30" height="60" fill="${c}" opacity="0.12" rx="2"/><rect x="70" y="70" width="30" height="90" fill="${c}" opacity="0.1" rx="2"/><rect x="120" y="50" width="30" height="110" fill="${c}" opacity="0.08" rx="2"/><rect x="170" y="80" width="30" height="80" fill="${c}" opacity="0.1" rx="2"/><rect x="220" y="40" width="30" height="120" fill="${c}" opacity="0.12" rx="2"/></svg>`,
    games: `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect x="10" y="10" width="20" height="20" fill="${c}" opacity="0.1" rx="2"/><rect x="40" y="10" width="20" height="20" fill="${c}" opacity="0.06" rx="2"/><rect x="70" y="40" width="20" height="20" fill="${c}" opacity="0.1" rx="2"/><rect x="100" y="10" width="20" height="20" fill="${c}" opacity="0.08" rx="2"/><circle cx="220" cy="80" r="50" fill="none" stroke="${c}" stroke-width="0.5" opacity="0.12"/><circle cx="220" cy="80" r="30" fill="none" stroke="${c}" stroke-width="0.5" opacity="0.08"/></svg>`,
    ai: `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice">${Array.from({ length: 8 }, (_, i) => `<circle cx="${30 + i * 35}" cy="50" r="4" fill="${c}" opacity="${0.05 + i * 0.02}"/><circle cx="${30 + i * 35}" cy="110" r="4" fill="${c}" opacity="${0.05 + i * 0.015}"/><line x1="${30 + i * 35}" y1="54" x2="${30 + ((i + 1) % 8) * 35}" y2="106" stroke="${c}" stroke-width="0.5" opacity="0.08"/>`).join("")}</svg>`,
    hardware: `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect x="80" y="40" width="140" height="80" fill="none" stroke="${c}" stroke-width="0.5" opacity="0.15" rx="4"/><line x1="80" y1="80" x2="20" y2="80" stroke="${c}" stroke-width="1" opacity="0.1"/><line x1="220" y1="80" x2="280" y2="80" stroke="${c}" stroke-width="1" opacity="0.1"/><circle cx="150" cy="80" r="20" fill="${c}" opacity="0.06"/><circle cx="150" cy="80" r="8" fill="${c}" opacity="0.1"/></svg>`,
    academic: `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><circle cx="150" cy="80" r="55" fill="none" stroke="${c}" stroke-width="0.5" opacity="0.15"/><circle cx="150" cy="80" r="35" fill="none" stroke="${c}" stroke-width="0.5" opacity="0.1"/><circle cx="150" cy="80" r="15" fill="${c}" opacity="0.08"/><line x1="150" y1="25" x2="150" y2="55" stroke="${c}" stroke-width="0.5" opacity="0.12"/><line x1="150" y1="105" x2="150" y2="135" stroke="${c}" stroke-width="0.5" opacity="0.12"/><line x1="95" y1="80" x2="125" y2="80" stroke="${c}" stroke-width="0.5" opacity="0.12"/><line x1="175" y1="80" x2="205" y2="80" stroke="${c}" stroke-width="0.5" opacity="0.12"/></svg>`,
    tools: `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><line x1="40" y1="20" x2="40" y2="140" stroke="${c}" stroke-width="0.5" opacity="0.1"/><line x1="80" y1="20" x2="80" y2="140" stroke="${c}" stroke-width="0.5" opacity="0.07"/><line x1="120" y1="20" x2="120" y2="140" stroke="${c}" stroke-width="0.5" opacity="0.1"/><line x1="20" y1="50" x2="280" y2="50" stroke="${c}" stroke-width="0.5" opacity="0.07"/><line x1="20" y1="90" x2="280" y2="90" stroke="${c}" stroke-width="0.5" opacity="0.1"/></svg>`,
  };
  return patterns[p.cat] || "";
}

interface SparkModalProps {
  project: SparkProject | null;
  onClose: () => void;
}

export default function SparkModal({ project, onClose }: SparkModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (project) {
      previouslyFocusedRef.current = document.activeElement as HTMLElement;
      setTimeout(() => containerRef.current?.focus(), 0);
    }
  }, [project]);

  const handleClose = useCallback(() => {
    onClose();
    previouslyFocusedRef.current?.focus();
  }, [onClose]);

  useEffect(() => {
    if (!project) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
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
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, handleClose]);

  if (!project) return null;

  const cc = CAT_COLORS[project.cat];

  return (
    <div
      className="fixed inset-0 bg-navy/70 backdrop-blur-sm z-[200] flex items-center justify-center p-8 transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
    >
      <div
        ref={containerRef}
        tabIndex={-1}
        className="bg-white border-2 border-teal rounded-[16px] w-full max-w-[560px] max-h-[85vh] overflow-y-auto transition-transform duration-250 translate-y-0 scale-100 outline-none"
      >
        <div
          className="h-[180px] rounded-t-[14px] overflow-hidden relative flex items-center justify-center"
          style={{ background: project.bg }}
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 bg-navy/50 border border-white/20 text-white w-[30px] h-[30px] rounded-full cursor-pointer flex items-center justify-center transition-all duration-150 hover:bg-navy/80 text-[0.9rem] z-10"
            aria-label="Close project details"
          >
            &times;
          </button>
          <div
            aria-hidden="true"
            dangerouslySetInnerHTML={{
              __html: makeModalVisual(project),
            }}
          />
          <span className="text-[3.5rem] relative z-10">
            {project.emoji}
          </span>
        </div>
        <div className="p-6">
          <div
            className="font-mono text-[10px] tracking-[0.12em] uppercase mb-1 font-semibold"
            style={{ color: cc.text }}
          >
            {project.cat} &middot; {project.level}
          </div>
          <h2 className="font-serif text-[1.6rem] font-normal text-navy mb-2">
            {project.title}
          </h2>
          <p className="text-[0.88rem] text-muted leading-[1.7] mb-5">
            {project.desc}
          </p>
          <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-orange mb-2 font-semibold">
            Spark questions
          </div>
          <ul className="list-none flex flex-col gap-[0.4rem] mb-5">
            {project.questions.map((q) => (
              <li
                key={q}
                className="text-[0.85rem] text-navy px-[0.85rem] py-[0.6rem] bg-[#edf1f5] border-[1.5px] border-border rounded-[8px] leading-[1.5]"
              >
                <span className="font-mono text-muted/40">&rarr; </span>
                {q}
              </li>
            ))}
          </ul>
          <div className="font-mono text-[10px] tracking-[0.12em] uppercase text-orange mb-2 font-semibold">
            Built with
          </div>
          <div className="flex flex-col gap-[0.4rem] mb-5">
            <div className="flex flex-wrap gap-[0.35rem] items-center">
              {project.tech.primary.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-[0.65rem] py-[0.28rem] rounded-sm bg-orange/8 border border-orange/25 text-orange font-semibold"
                >
                  {t}
                </span>
              ))}
              {project.tech.secondary.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] px-[0.65rem] py-[0.28rem] rounded-sm bg-[#edf1f5] border border-border text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            {project.tech.alts &&
              project.tech.alts.map((alt, ai) => (
                <div
                  key={ai}
                  className="flex flex-wrap gap-[0.35rem] items-center"
                >
                  <span className="font-mono text-[9px] text-muted tracking-[0.06em] uppercase">
                    or
                  </span>
                  {alt.primary.map((t) => (
                    <span
                      key={`alt-${ai}-${t}`}
                      className="font-mono text-[11px] px-[0.65rem] py-[0.28rem] rounded-sm bg-orange/8 border border-orange/25 text-orange font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                  {alt.secondary &&
                    alt.secondary.map((t) => (
                      <span
                        key={`alt-s-${ai}-${t}`}
                        className="font-mono text-[11px] px-[0.65rem] py-[0.28rem] rounded-sm bg-[#edf1f5] border border-border text-muted"
                      >
                        {t}
                      </span>
                    ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
