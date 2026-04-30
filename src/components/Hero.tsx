"use client";

import { useEffect, useState } from "react";
import { PROJECTS } from "@/lib/projects";

function AnimatedCounter({ target }: { target: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let val = 0;
    const step = Math.ceil(target / 20);
    const timer = setInterval(() => {
      val = Math.min(val + step, target);
      setCurrent(val);
      if (val >= target) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{current}</span>;
}

export default function Hero() {
  const projects = PROJECTS.length;
  const students = new Set(PROJECTS.map((p) => p.student)).size;
  const categories = new Set(PROJECTS.map((p) => p.cat)).size;

  return (
    <div className="bg-navy px-8 lg:px-12 pt-16 pb-18 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 100% at 90% 50%, rgba(28, 197, 202, 0.05), transparent 70%)",
        }}
      />
      <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
        Built by students
      </span>
      <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-normal text-white leading-[1.05] mb-4">
        Real projects.
        <br />
        <em className="text-orange italic">Real students.</em>
      </h1>
      <p className="text-[16px] text-white/55 leading-[1.7] max-w-[520px] mb-9">
        Everything here was built during a Sandbox session. No templates. No
        shortcuts. Each project is a student&apos;s own idea, built from
        scratch.
      </p>
      <div className="flex flex-wrap gap-0">
        {[
          { val: projects, label: "Projects built" },
          { val: students, label: "Students" },
          { val: categories, label: "Categories" },
        ].map((stat, i) => (
          <div
            key={stat.label}
            className={`pr-7 mr-7 border-r border-white/10 ${i === 2 ? "border-0 pr-0 mr-0" : ""}`}
          >
            <div className="font-serif text-[28px] text-teal leading-none">
              <AnimatedCounter target={stat.val} />
            </div>
            <div className="text-[11px] text-white/35 mt-1 font-mono tracking-[0.04em]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
