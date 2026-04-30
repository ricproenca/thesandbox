"use client";

import type { LangFilter } from "@/lib/spark";

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "Data", value: "data" },
  { label: "Games", value: "games" },
  { label: "AI", value: "ai" },
  { label: "Hardware", value: "hardware" },
  { label: "Tools", value: "tools" },
  { label: "Academic", value: "academic" },
];

const LEVELS = [
  { label: "All", value: "all" },
  { label: "Newcomer", value: "newcomer" },
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
];

const LANGS = [
  { label: "All", value: "all" as LangFilter },
  { label: "Python", value: "python" as LangFilter },
  { label: "JavaScript", value: "javascript" as LangFilter },
  { label: "HTML / CSS", value: "html" as LangFilter },
  { label: "No code needed", value: "no-code" as LangFilter },
];

interface SparkFiltersProps {
  activeCat: string;
  onCatChange: (v: string) => void;
  activeLevel: string;
  onLevelChange: (v: string) => void;
  activeLang: LangFilter;
  onLangChange: (v: LangFilter) => void;
  search: string;
  onSearchChange: (v: string) => void;
}

export default function SparkFilters({
  activeCat,
  onCatChange,
  activeLevel,
  onLevelChange,
  activeLang,
  onLangChange,
  search,
  onSearchChange,
}: SparkFiltersProps) {
  return (
    <div className="bg-white px-8 lg:px-12 py-3 border-b-2 border-teal shadow-[0_2px_8px_rgba(13,45,62,0.06)]">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-2.5">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full sm:max-w-[300px] px-4 py-2 text-[0.85rem] border-[1.5px] border-border rounded-[8px] bg-white text-navy transition-[border-color,box-shadow] focus:outline-none focus:border-teal focus:shadow-[0_0_0_3px_rgba(28,197,202,0.1)] placeholder:text-muted font-body"
          aria-label="Search projects"
        />
        <FilterRow label="Topic">
          {CATEGORIES.map((c) => (
            <button
              key={c.value}
              className={`font-body text-[0.78rem] font-medium px-[0.8rem] py-[0.3rem] rounded-full cursor-pointer transition-all duration-180 ${
                activeCat === c.value
                  ? "bg-teal-dark border-teal-dark text-white font-semibold"
                  : "border-[1.5px] border-border text-muted hover:border-teal hover:text-teal-dark hover:bg-teal-dim"
              }`}
              onClick={() => onCatChange(c.value)}
              aria-pressed={activeCat === c.value}
            >
              {c.label}
            </button>
          ))}
        </FilterRow>
        <FilterRow label="Level">
          {LEVELS.map((l) => (
            <LevelButton
              key={l.value}
              label={l.label}
              value={l.value}
              active={activeLevel}
              onClick={onLevelChange}
            />
          ))}
        </FilterRow>
        <FilterRow label="Language">
          {LANGS.map((l) => (
            <LangButton
              key={l.value}
              label={l.label}
              value={l.value}
              active={activeLang}
              onClick={onLangChange}
            />
          ))}
        </FilterRow>
      </div>
    </div>
  );
}

function FilterRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-[0.45rem] flex-wrap">
      <span className="font-mono text-[10px] text-muted tracking-[0.1em] uppercase w-16 flex-shrink-0">
        {label}
      </span>
      {children}
    </div>
  );
}

function LevelButton({
  label,
  value,
  active,
  onClick,
}: {
  label: string;
  value: string;
  active: string;
  onClick: (v: string) => void;
}) {
  const isActive = active === value;
  const colorMap: Record<string, string> = {
    all: "text-teal-dark bg-teal-dim",
    newcomer: "text-[#16a34a] bg-[#16a34a]/7",
    beginner: "text-teal-dark bg-teal-dim",
    intermediate: "text-[#b45309] bg-[#b45309]/7",
    advanced: "text-[#6d28d9] bg-[#6d28d9]/7",
  };
  return (
    <button
      className={`font-mono text-[10px] tracking-[0.06em] uppercase px-[0.7rem] py-[0.3rem] rounded-sm cursor-pointer transition-all duration-180 ${
        isActive
          ? `font-semibold border-[1.5px] ${colorMap[value]}`
          : "border-[1.5px] border-border text-muted hover:border-teal hover:text-teal-dark"
      }`}
      onClick={() => onClick(value)}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}

function LangButton({
  label,
  value,
  active,
  onClick,
}: {
  label: string;
  value: LangFilter;
  active: LangFilter;
  onClick: (v: LangFilter) => void;
}) {
  const isActive = active === value;
  return (
    <button
      className={`font-mono text-[10px] tracking-[0.06em] uppercase px-[0.7rem] py-[0.3rem] rounded-sm cursor-pointer transition-all duration-180 ${
        isActive
          ? "bg-orange border-orange text-white font-semibold"
          : "border-[1.5px] border-border text-muted hover:border-teal hover:text-teal-dark"
      }`}
      onClick={() => onClick(value)}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}
