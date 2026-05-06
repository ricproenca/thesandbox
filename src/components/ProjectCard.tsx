import { CAT_COLORS, LEVEL_COLORS, type Project, makeSVGBg } from "@/lib/projects";

export default function ProjectCard({
  project,
  delay,
  onClick,
}: {
  project: Project;
  delay: number;
  onClick: () => void;
}) {
  const cc = CAT_COLORS[project.cat];
  const lc = LEVEL_COLORS[project.level];
  const featured = project.featured;

  return (
    <button
      onClick={onClick}
      className={`bg-white border-[1.5px] border-border rounded-[14px] overflow-hidden cursor-pointer transition-[border-color,transform,box-shadow] duration-200 hover:border-teal hover:-translate-y-[3px] hover:shadow-[0_12px_32px_rgba(13,45,62,0.1)] text-left flex flex-col font-body animate-[fadeUp_0.4s_ease_both] ${
        featured ? "col-span-full flex-col md:flex-row max-h-[none] md:max-h-[260px]" : ""
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div
        className={`${featured ? "w-full md:w-[360px] md:h-full flex-shrink-0 h-[180px]" : "h-[180px]"} relative overflow-hidden flex items-center justify-center`}
        style={{ background: project.bg }}
      >
        <div
          dangerouslySetInnerHTML={{ __html: makeSVGBg(project.cat, cc.text) }}
          aria-hidden="true"
        />
        <span className="text-[56px] relative z-10 drop-shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
          {project.emoji}
        </span>
        <span className="absolute bottom-[10px] right-3 font-mono text-[10px] font-medium bg-navy/65 text-white/90 px-[9px] py-[3px] rounded-sm tracking-[0.04em] z-[3]">
          {project.techLabel}
        </span>
      </div>
      <div className={`px-[1.2rem] pt-[1.1rem] pb-[1.3rem] flex-1 flex flex-col gap-2 ${featured ? "justify-center" : ""}`}>
        {project.featured && (
          <span className="inline-block font-mono text-[10px] font-semibold tracking-[0.08em] uppercase bg-orange/12 border border-orange/30 text-orange px-[10px] py-[3px] rounded-full mb-2 w-fit">
            &star; Featured project
          </span>
        )}
        <div className="flex items-center justify-between gap-2">
          <span
            className="font-mono text-[10px] tracking-[0.08em] uppercase px-[0.6rem] py-[0.2rem] rounded-sm font-semibold"
            style={{ background: cc.tag, color: cc.text }}
          >
            {project.cat}
          </span>
          <span className="font-mono text-[10px] text-muted tracking-[0.05em] uppercase">
            <span
              className="inline-block w-[6px] h-[6px] rounded-full mr-1 align-middle"
              style={{ background: lc }}
            />
            {project.level}
          </span>
        </div>
        <h3 className="font-serif text-[1.2rem] font-normal text-navy leading-[1.2]">
          {project.title}
        </h3>
        <div className="text-[13px] text-teal-dark font-semibold">
          {project.student}
        </div>
        <p className="text-[13px] text-muted leading-[1.65] flex-1">
          {project.desc.substring(0, 120)}&hellip;
        </p>
        <div className="flex flex-wrap gap-[0.3rem] mt-[0.25rem] pt-[0.5rem] border-t border-border">
          {project.tech.primary.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] bg-teal-dark/8 border border-teal-dark/25 text-teal-dark px-[0.45rem] py-[0.15rem] rounded-sm"
            >
              {t}
            </span>
          ))}
          {project.tech.secondary.map((t) => (
            <span
              key={t}
              className="font-mono text-[10px] text-muted bg-bg border border-border px-[0.45rem] py-[0.15rem] rounded-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
