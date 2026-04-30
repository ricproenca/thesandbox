"use client";

import { useEffect } from "react";
import { CAT_COLORS, type Project, makeSVGBg } from "@/lib/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (project) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const cc = CAT_COLORS[project.cat];

  return (
    <div
      className="fixed inset-0 bg-navy/75 backdrop-blur-sm z-[200] flex items-center justify-center p-8 transition-opacity duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white border-2 border-teal rounded-4 w-full max-w-[620px] max-h-[88vh] overflow-y-auto transition-transform duration-250 translate-y-0 scale-100">
        <div
          className="h-[220px] flex items-center justify-center relative rounded-t-[14px] overflow-hidden"
          style={{ background: project.bg }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-navy/55 border border-white/20 text-white w-8 h-8 rounded-full cursor-pointer flex items-center justify-center z-10 transition-colors hover:bg-navy/85 text-[0.9rem]"
          >
            &times;
          </button>
          <div
            dangerouslySetInnerHTML={{
              __html: makeSVGBg(project.cat, cc.text),
            }}
          />
          <span className="text-[72px] relative z-10 drop-shadow-[0_8px_24px_rgba(0,0,0,0.2)]">
            {project.emoji}
          </span>
        </div>
        <div className="p-7">
          <div
            className="font-mono text-[10px] font-semibold tracking-[0.1em] uppercase mb-1.5"
            style={{ color: cc.text }}
          >
            {project.cat} &middot; {project.level} &middot; {project.term}{" "}
            {project.year}
          </div>
          <h2 className="font-serif text-[1.7rem] font-normal text-navy mb-1">
            {project.title}
          </h2>
          <div className="text-[14px] font-semibold text-teal-dark mb-4">
            {project.student}
          </div>
          <p className="text-[14px] text-muted leading-[1.75] mb-5">
            {project.desc}
          </p>
          <div className="font-mono text-[10px] font-semibold tracking-[0.12em] uppercase text-teal-dark mb-2">
            What makes it theirs
          </div>
          <ul className="list-none flex flex-col gap-[0.4rem] mb-5">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="text-[13px] text-navy px-[0.85rem] py-[0.6rem] bg-bg border-[1.5px] border-border rounded-[8px] leading-[1.5]"
              >
                <span className="font-mono text-teal-dark/60 mr-1">
                  &rarr;{" "}
                </span>
                {h}
              </li>
            ))}
          </ul>
          <div className="font-mono text-[10px] font-semibold tracking-[0.12em] uppercase text-teal-dark mb-2">
            Built with
          </div>
          <div className="flex flex-wrap gap-[0.4rem] mb-5">
            {project.tech.primary.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-[0.65rem] py-[0.28rem] rounded-sm bg-teal-dark/8 border border-teal-dark/25 text-teal-dark font-semibold"
              >
                {t}
              </span>
            ))}
            {project.tech.secondary.map((t) => (
              <span
                key={t}
                className="font-mono text-[11px] px-[0.65rem] py-[0.28rem] rounded-sm bg-bg border border-border text-muted font-normal"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
