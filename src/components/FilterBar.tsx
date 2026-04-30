"use client";

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const categories = [
  { label: "All", value: "all" },
  { label: "Games", value: "cat-games" },
  { label: "Web", value: "cat-web" },
  { label: "AI", value: "cat-ai" },
  { label: "Data", value: "cat-data" },
  { label: "Hardware", value: "cat-hardware" },
  { label: "Tools", value: "cat-tools" },
];

const levels = [
  { label: "Newcomer", value: "level-newcomer" },
  { label: "Beginner", value: "level-beginner" },
  { label: "Intermediate", value: "level-intermediate" },
  { label: "Advanced", value: "level-advanced" },
];

export default function FilterBar({
  activeFilter,
  onFilterChange,
}: FilterBarProps) {
  return (
    <div
      className="bg-white border-b-2 border-teal px-8 lg:px-12 py-3 flex items-center gap-2 flex-wrap sm:flex-nowrap overflow-x-auto sticky top-16 z-[90] shadow-[0_2px_8px_rgba(13,45,62,0.06)]"
      role="group"
      aria-label="Filter projects"
    >
      <span className="font-mono text-[10px] text-muted tracking-[0.1em] uppercase mr-1">
        Filter
      </span>
      <FilterButton
        label={categories[0].label}
        value={categories[0].value}
        active={activeFilter}
        onClick={onFilterChange}
      />
      {categories.slice(1).map((f) => (
        <span key={f.value}>
          <span className="inline-block w-px h-5 bg-border mx-2 flex-shrink-0" />
          <FilterButton
            label={f.label}
            value={f.value}
            active={activeFilter}
            onClick={onFilterChange}
          />
        </span>
      ))}
      <span className="inline-block w-px h-5 bg-border mx-2 flex-shrink-0" />
      {levels.map((f) => (
        <FilterButton
          key={f.value}
          label={f.label}
          value={f.value}
          active={activeFilter}
          onClick={onFilterChange}
        />
      ))}
    </div>
  );
}

function FilterButton({
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
  return (
    <button
      className={`border-[1.5px] font-mono text-[11px] tracking-[0.04em] uppercase px-3 py-1.5 rounded-sm cursor-pointer transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-1 ${
        isActive
          ? "bg-teal-dark border-teal-dark text-white font-semibold"
          : "border-border text-muted hover:border-teal-dark hover:text-teal-dark hover:bg-teal-dim"
      }`}
      onClick={() => onClick(value)}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}
