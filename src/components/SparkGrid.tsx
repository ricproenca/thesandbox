import { CAT_COLORS, LEVEL_COLORS, type SparkProject } from "@/lib/spark";

function makeVisual(p: SparkProject): string {
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

export default function SparkGrid({
  projects,
  onProjectClick,
}: {
  projects: SparkProject[];
  onProjectClick: (p: SparkProject) => void;
}) {
  if (projects.length === 0) {
    return (
      <div className="col-span-full text-center py-16 px-8 text-muted text-[0.9rem]">
        No projects match that filter.
        <br />
        Try a different combination.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
      {projects.map((p, i) => {
        const cc = CAT_COLORS[p.cat];
        const lc = LEVEL_COLORS[p.level];
        return (
          <button
            key={p.id}
            onClick={() => onProjectClick(p)}
            className="bg-white border-[1.5px] border-border rounded-[12px] overflow-hidden cursor-pointer transition-[border-color,transform,box-shadow] duration-200 hover:border-teal hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(13,45,62,0.12)] text-left flex flex-col animate-[fadeUp_0.4s_ease_both]"
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            <div
              className="h-[140px] relative overflow-hidden flex items-center justify-center"
              style={{ background: p.bg }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: makeVisual(p) }}
                aria-hidden="true"
              />
              <span className="text-[2.75rem] relative z-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
                {p.emoji}
              </span>
            </div>
            <div className="px-[1.15rem] pt-[1rem] pb-[1.15rem] flex-1 flex flex-col gap-[0.45rem]">
              <div className="flex items-center justify-between gap-2">
                <span
                  className="font-mono text-[10px] tracking-[0.08em] uppercase px-[0.6rem] py-[0.2rem] rounded-sm font-semibold"
                  style={{ background: cc.tag, color: cc.text }}
                >
                  {p.cat}
                </span>
                <span className="font-mono text-[10px] tracking-[0.06em] uppercase text-muted">
                  <span
                    className="inline-block w-[6px] h-[6px] rounded-full mr-1 align-middle"
                    style={{ background: lc }}
                  />
                  {p.level}
                </span>
              </div>
              <h2 className="font-serif text-[1.2rem] font-normal text-navy leading-[1.2]">
                {p.title}
              </h2>
              <p className="text-[0.83rem] text-muted leading-[1.6] flex-1">
                {p.short}
              </p>
              <div className="flex flex-wrap gap-[0.3rem]">
                {p.hooks.map((h) => (
                  <span
                    key={h}
                    className="text-[0.7rem] text-muted bg-[#edf1f5] border border-border rounded-sm px-[0.45rem] py-[0.18rem] transition-all duration-150 group-hover:border-[rgba(18,133,164,0.3)] group-hover:text-teal-dark"
                  >
                    {h}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-[0.3rem] mt-[0.2rem] pt-[0.5rem] border-t border-border items-center">
                {p.tech.primary.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-[0.04em] px-[0.5rem] py-[0.15rem] rounded-sm font-medium bg-teal-dark/10 border border-teal-dark/30 text-teal-dark"
                  >
                    {t}
                  </span>
                ))}
                {p.tech.alts && p.tech.alts.length > 0 && (
                  <>
                    <span className="font-mono text-[9px] text-muted opacity-50">
                      or
                    </span>
                    {p.tech.alts[0].primary.map((t) => (
                      <span
                        key={`alt-${t}`}
                        className="font-mono text-[10px] tracking-[0.04em] px-[0.5rem] py-[0.15rem] rounded-sm font-medium bg-teal-dark/10 border border-teal-dark/30 text-teal-dark"
                      >
                        {t}
                      </span>
                    ))}
                  </>
                )}
                {p.tech.secondary.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-[0.04em] px-[0.5rem] py-[0.15rem] rounded-sm bg-[#edf1f5] border border-border text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
