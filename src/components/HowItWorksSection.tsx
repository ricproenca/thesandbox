import { TIMELINE_STEPS } from "@/lib/timeline";
import Section from "./Section";

const INFO_CARDS = [
  { label: "When & where", val: "Weekly · 2 hours", sub: "Same room, same time each week. School computers provided." },
  { label: "Who can join", val: "KS3 to A Level", sub: "No experience needed. Newcomers as welcome as advanced students." },
  { label: "The AI rule", val: "Use it — if you can explain every line.", sub: "AI is a professional tool here. Not a shortcut.", dark: true },
];

export default function HowItWorksSection() {
  return (
    <Section>
      <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
        How it works
      </span>
      <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-normal text-navy leading-[1.1] mb-4">
        Every session follows
        <br />
        the same <em className="text-orange italic">rhythm.</em>
      </h2>
      <p className="text-[16px] text-muted leading-[1.7] max-w-[520px] mb-10">
        Two hours. Five moments. No lectures, no homework, no grades — just
        structured time to build.
      </p>
      <div className="relative mb-10">
        <div className="absolute left-4 top-8 bottom-8 w-px bg-border" />
        <div className="space-y-8">
          {TIMELINE_STEPS.map((step) => (
            <div key={step.num} className="relative pl-12">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-navy text-white font-mono text-[13px] font-bold flex items-center justify-center z-10">
                {step.num}
              </div>
              <div className="font-mono text-[11px] text-teal mb-1">
                {step.time}
              </div>
              <h3 className="font-serif text-[18px] text-navy mb-1">
                {step.title}
              </h3>
              <p className="text-[14px] text-muted leading-[1.6]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {INFO_CARDS.map((item, i) => (
          <div
            key={i}
            className={`border-[1.5px] border-border rounded-[14px] p-6 ${item.dark ? "bg-navy border-navy" : ""}`}
          >
            <div className={`font-mono text-[10px] tracking-[0.1em] uppercase mb-1 ${item.dark ? "text-teal" : "text-muted"}`}>
              {item.label}
            </div>
            <div className={`font-serif text-[20px] mb-1 ${item.dark ? "text-white" : "text-navy"}`}>
              {item.val}
            </div>
            <div className={`text-[13px] ${item.dark ? "text-white/50" : "text-muted"}`}>
              {item.sub}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
