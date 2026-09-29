import { PILLARS } from "@/lib/pillars";
import Icon from "./Icon";
import Section from "./Section";

export default function AboutSection() {
  return (
    <Section>
      <span className="font-mono text-[12px] font-medium tracking-[0.15em] uppercase text-teal-ink mb-3 block">
        What is The Sandbox?
      </span>
      <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-normal text-navy leading-[1.1] mb-4 text-balance">
        A place where things get made.
      </h2>
      <p className="text-[16px] text-muted leading-[1.7] max-w-[520px] mb-10">
        You come in, pick a project that excites you, and build it at your own
        pace, with a guide nearby when you get stuck. No experience needed.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 mb-12">
        {PILLARS.map((p) => (
          <div
            key={p.title}
            className={`border-[1.5px] rounded-[14px] p-6 relative ${
              p.badge ? "bg-orange-light border-orange/25" : "bg-white border-border"
            }`}
          >
            {p.badge && (
              <span className="absolute top-4 right-4 font-mono text-[12px] font-semibold tracking-[0.08em] uppercase bg-orange/15 text-navy px-[10px] py-[3px] rounded-full">
                {p.badge}
              </span>
            )}
            <span
              className={`w-11 h-11 rounded-[10px] flex items-center justify-center mb-4 ${
                p.badge ? "bg-orange/15 text-orange" : "bg-teal/10 text-teal-ink"
              }`}
            >
              <Icon name={p.icon} size={22} />
            </span>
            <h3 className="font-semibold text-[16px] text-navy mb-2">
              {p.title}
            </h3>
            <p className={`text-[14px] leading-[1.6] ${p.badge ? "text-navy/75" : "text-muted"}`}>
              {p.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="border-l-2 border-teal pl-6 max-w-[640px]">
        <p className="text-[16px] text-navy leading-[1.7] italic">
          Students come in, work on their own projects, and leave having
          built something real. A space, a guide, and the freedom to
          create.
        </p>
        <div className="text-[13px] text-muted mt-2 font-mono">
          — The Sandbox, Academic Year 2026/27
        </div>
      </div>
    </Section>
  );
}
