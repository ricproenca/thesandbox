"use client";

import { useMemo, useState } from "react";
import { PROJECTS, type Project } from "@/lib/projects";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectModal from "@/components/ProjectModal";
import SubmitCTA from "@/components/SubmitCTA";
import DemoBadge from "@/components/DemoBadge";
import Footer from "@/components/Footer";

export default function Home() {
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
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
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
      <Footer />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
