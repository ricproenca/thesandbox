import { PILLARS } from "@/lib/pillars";
import Section from "./Section";

export default function AboutSection() {
  return (
    <Section>
      <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
        What is The Sandbox?
      </span>
      <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-normal text-navy leading-[1.1] mb-4">
        A place where things
        <br />
        get <em className="text-orange italic">made.</em>
      </h2>
      <p className="text-[16px] text-muted leading-[1.7] max-w-[520px] mb-10">
        No fixed curriculum. No pressure. No experience needed. You come in,
        pick a project that excites you, and build it — with a guide nearby
        when you get stuck.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 mb-12">
        {PILLARS.map((p) => (
          <div
            key={p.title}
            className={`border-[1.5px] border-border rounded-[14px] p-6 relative ${
              p.badge
                ? "bg-[#fffbeb] border-[rgba(180,83,9,0.2)]"
                : "bg-white"
            }`}
          >
            {p.badge && (
              <span className="absolute top-4 right-4 font-mono text-[10px] font-semibold tracking-[0.08em] uppercase bg-orange/12 border border-orange/30 text-orange px-[10px] py-[3px] rounded-full">
                {p.badge}
              </span>
            )}
            <span className="text-[32px] mb-3 block">{p.icon}</span>
            <h3 className={`font-semibold text-[16px] mb-2 ${p.badge ? "text-navy" : "text-navy"}`}>
              {p.title}
            </h3>
            <p
              className={`text-[14px] leading-[1.6] ${p.badge ? "text-[#78450a]" : "text-muted"}`}
            >
              {p.desc}
            </p>
          </div>
        ))}
      </div>
      <div className="border-l-2 border-teal pl-6 max-w-[640px]">
        <p className="text-[16px] text-navy leading-[1.7] italic">
          Students come in, work on their own projects, and leave having
          built something real. No fixed curriculum. No pressure. Just a
          space, a guide, and the freedom to create.
        </p>
        <div className="text-[13px] text-muted mt-2 font-mono">
          — The Sandbox, Academic Year 2025/26
        </div>
      </div>
    </Section>
  );
}
