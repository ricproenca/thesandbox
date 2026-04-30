"use client";

import { useMemo, useState } from "react";
import { PROJECTS, type Project } from "@/lib/projects";
import FilterBar from "@/components/FilterBar";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectModal from "@/components/ProjectModal";
import SubmitCTA from "@/components/SubmitCTA";
import DemoBadge from "@/components/DemoBadge";
import Hero from "@/components/Hero";

export default function ShowcasePage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return PROJECTS;
    return PROJECTS.filter(
      (p) =>
        `cat-${p.cat}` === activeFilter || `level-${p.level}` === activeFilter,
    );
  }, [activeFilter]);

  return (
    <>
      <Hero />
      <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <main id="main" className="max-w-[1200px] mx-auto px-8 lg:px-12 py-10 pb-20">
        <DemoBadge />
        <ProjectGrid
          projects={filteredProjects}
          onProjectClick={setSelectedProject}
        />
        <SubmitCTA />
      </main>
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
