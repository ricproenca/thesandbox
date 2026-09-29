import { THEMES, type Level } from "@/lib/ideas";
import Section from "./Section";

const LEVEL_DOT: Record<Level, string> = {
  "First project": "bg-teal",
  "Some experience": "bg-orange",
  "Stretch goal": "bg-navy",
};

export default function IdeasSection() {
  return (
    <Section variant="bg" id="ideas">
      <span className="font-mono text-[12px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
        What can you build?
      </span>
      <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-normal text-navy leading-[1.1] mb-4 text-balance">
        Pick something that makes you{" "}
        <em className="text-orange italic">curious.</em>
      </h2>
      <p className="text-[16px] text-muted leading-[1.7] max-w-[560px] mb-10">
        A few ideas to get you started, from your very first program to
        something you&apos;d actually show off. Steal one, mix two together, or
        ignore them all.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 mb-8">
        {THEMES.map((theme) => (
          <div
            key={theme.name}
            className="border-[1.5px] border-border rounded-[14px] overflow-hidden bg-white"
          >
            <div className="flex items-center gap-3 px-5 py-3 bg-surface2 border-b border-border">
              <span className="text-[22px]" aria-hidden="true">
                {theme.icon}
              </span>
              <h3 className="font-mono text-[12px] font-semibold tracking-[0.08em] uppercase text-navy">
                {theme.name}
              </h3>
            </div>
            <ul className="divide-y divide-border">
              {theme.ideas.map((idea) => (
                <li key={idea.title} className="p-5">
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-[22px] leading-none mt-[2px]" aria-hidden="true">
                      {idea.icon}
                    </span>
                    <h4 className="font-serif text-[18px] font-normal text-navy leading-[1.25]">
                      {idea.title}
                    </h4>
                  </div>
                  <p className="text-[14px] text-muted leading-[1.6] mb-3">
                    {idea.hook}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[12px] text-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${LEVEL_DOT[idea.level]}`} />
                      {idea.level}
                    </span>
                    <span className="bg-teal-dark/8 border border-teal-dark/25 text-teal-dark px-2 py-[2px] rounded-sm">
                      {idea.tools}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-[1.5px] border-dashed border-teal-dark/40 rounded-[14px] px-6 py-5 text-center">
        <p className="font-serif text-[20px] text-navy mb-1">
          Got your own idea? <em className="text-orange italic">Even better.</em>
        </p>
        <p className="text-[14px] text-muted leading-[1.6] max-w-[560px] mx-auto">
          These are only starting points. Not sure yet? Come anyway and
          we&apos;ll help you find something worth building.
        </p>
      </div>
    </Section>
  );
}
