import { type Project } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid({
  projects,
  onProjectClick,
}: {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-16 px-6 text-muted text-[15px]">
        No projects match that filter yet.
      </div>
    );
  }

  const byYear: Record<string, Project[]> = {};
  projects.forEach((p) => {
    if (!byYear[p.year]) byYear[p.year] = [];
    byYear[p.year].push(p);
  });

  return (
    <div>
      {Object.entries(byYear)
        .sort((a, b) => b[0].localeCompare(a[0]))
        .map(([year, yearProjects]) => (
          <div key={year} className="mb-12 last:mb-0">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[11px] font-semibold text-muted tracking-[0.1em] uppercase whitespace-nowrap px-3 py-[0.3rem] bg-white border-[1.5px] border-border rounded-full">
                Year {year}
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5">
              {yearProjects.map((p, i) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  delay={i * 0.06}
                  onClick={() => onProjectClick(p)}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
