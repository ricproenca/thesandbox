import { TIMELINE_STEPS } from "@/lib/timeline";
import Section from "./Section";

const UNSTUCK_LAYERS = [
  {
    layer: "1",
    source: "Yourself",
    how: "Read the error. Google it. Try one fix. Spend at least 10 minutes before moving on.",
  },
  {
    layer: "2",
    source: "A peer",
    how: "Describe the problem out loud to another student. Most bugs get solved in this step.",
  },
  {
    layer: "3",
    source: "AI tools",
    how: "Claude, ChatGPT, Copilot. Paste the error and your code. Read and understand the answer before applying.",
  },
  {
    layer: "4",
    source: "The teacher",
    how: "Can ask after layers 1–3. Explain what you tried and what the AI said.",
  },
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Timeline - Left */}
        <div className="relative">
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
        {/* How students get unstuck - Right */}
        <div>
          <h3 className="font-serif text-[20px] text-navy mb-1">
            How students get unstuck
          </h3>
          <p className="text-[13px] text-muted mb-6 leading-[1.6]">
            Before a student can ask the teacher for help, they work through four
            layers in order. AI sits at Layer 3 — a professional tool, not a first resort.
          </p>
          <div className="border-[1.5px] border-border rounded-[14px] overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-navy text-white font-mono text-[10px] tracking-[0.1em] uppercase">
                  <th className="px-4 py-3 font-semibold">Layer</th>
                  <th className="px-4 py-3 font-semibold">Source</th>
                  <th className="px-4 py-3 font-semibold">How to use it</th>
                </tr>
              </thead>
              <tbody>
                {UNSTUCK_LAYERS.map((item, i) => (
                  <tr
                    key={item.layer}
                    className={i % 2 === 0 ? "bg-bg" : "bg-white"}
                  >
                    <td className="px-4 py-3 font-mono text-[13px] font-bold text-navy border-t border-border">
                      {item.layer}
                    </td>
                    <td className="px-4 py-3 font-mono text-[12px] text-teal border-t border-border">
                      {item.source}
                    </td>
                    <td className="px-4 py-3 text-[13px] text-muted leading-[1.5] border-t border-border">
                      {item.how}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Section>
  );
}
