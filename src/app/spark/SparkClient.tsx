"use client";

import { useMemo, useState } from "react";
import {
  SPARK_PROJECTS,
  type SparkProject,
  type LangFilter,
  projectMatchesLang,
  projectMatchesSearch,
} from "@/lib/spark";
import SparkHeader from "@/components/SparkHeader";
import SparkFilters from "@/components/SparkFilters";
import SparkGrid from "@/components/SparkGrid";
import SparkModal from "@/components/SparkModal";

export default function SparkClient() {
  const [activeCat, setActiveCat] = useState("all");
  const [activeLevel, setActiveLevel] = useState("all");
  const [activeLang, setActiveLang] = useState<LangFilter>("all");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<SparkProject | null>(null);

  const filtered = useMemo(() => {
    return SPARK_PROJECTS.filter(
      (p) =>
        (activeCat === "all" || p.cat === activeCat) &&
        (activeLevel === "all" || p.level === activeLevel) &&
        projectMatchesLang(p, activeLang) &&
        projectMatchesSearch(p, search),
    );
  }, [activeCat, activeLevel, activeLang, search]);

  return (
    <>
      <SparkHeader />
      <SparkFilters
        activeCat={activeCat}
        onCatChange={setActiveCat}
        activeLevel={activeLevel}
        onLevelChange={setActiveLevel}
        activeLang={activeLang}
        onLangChange={setActiveLang}
        search={search}
        onSearchChange={setSearch}
      />
      <main id="grid" className="max-w-[1200px] mx-auto px-8 lg:px-12 py-8 pb-16">
        <div className="mb-4 text-sm text-muted font-mono">
          {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          {activeCat !== "all" || activeLevel !== "all" || activeLang !== "all" || search ? " found" : ""}
        </div>
        <SparkGrid
          projects={filtered}
          onProjectClick={setSelected}
        />
      </main>
      <SparkModal project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
