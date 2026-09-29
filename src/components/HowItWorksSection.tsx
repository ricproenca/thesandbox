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
    <Section variant="navy">
      <span className="font-mono text-[12px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
        How it works
      </span>
      <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-normal text-white leading-[1.1] mb-4 text-balance">
        Every session follows the same rhythm.
      </h2>
      <p className="text-[16px] text-white/65 leading-[1.7] max-w-[520px] mb-10">
        Ninety minutes. Five moments. Most of it is time to build, with a clear
        routine around it.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Timeline - Left */}
        <div className="relative">
          <div className="absolute left-4 top-8 bottom-8 w-px bg-white/15" />
          <div className="space-y-8">
            {TIMELINE_STEPS.map((step) => (
              <div key={step.num} className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-teal text-navy font-mono text-[13px] font-bold flex items-center justify-center z-10">
                  {step.num}
                </div>
                <div className="font-mono text-[12px] text-teal mb-1">
                  {step.time}
                </div>
                <h3 className="font-serif text-[18px] text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-[14px] text-white/65 leading-[1.6]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* How students get unstuck - Right */}
        <div>
          <h3 className="font-serif text-[20px] text-white mb-1">
            How students get unstuck
          </h3>
          <p className="text-[14px] text-white/65 mb-6 leading-[1.6]">
            Before a student can ask the teacher for help, they work through four
            layers in order. AI sits at Layer 3 — a professional tool, not a first resort.
          </p>
          {/* Stacked cards on phones, where the table's third column gets too narrow */}
          <ol className="sm:hidden space-y-3">
            {UNSTUCK_LAYERS.map((item) => (
              <li
                key={item.layer}
                className="border border-white/10 rounded-[14px] bg-white/5 p-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-7 h-7 rounded-full bg-teal text-navy font-mono text-[13px] font-bold flex items-center justify-center">
                    {item.layer}
                  </span>
                  <span className="font-mono text-[13px] text-teal">
                    {item.source}
                  </span>
                </div>
                <p className="text-[14px] text-white/65 leading-[1.6]">
                  {item.how}
                </p>
              </li>
            ))}
          </ol>
          <div className="hidden sm:block border border-white/10 rounded-[14px] overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/10 text-white font-mono text-[12px] tracking-[0.1em] uppercase">
                  <th className="px-4 py-3 font-semibold">Layer</th>
                  <th className="px-4 py-3 font-semibold">Source</th>
                  <th className="px-4 py-3 font-semibold">How to use it</th>
                </tr>
              </thead>
              <tbody>
                {UNSTUCK_LAYERS.map((item, i) => (
                  <tr
                    key={item.layer}
                    className={i % 2 === 0 ? "bg-white/[0.03]" : "bg-white/[0.06]"}
                  >
                    <td className="px-4 py-3 font-mono text-[13px] font-bold text-white border-t border-white/10">
                      {item.layer}
                    </td>
                    <td className="px-4 py-3 font-mono text-[13px] text-teal border-t border-white/10">
                      {item.source}
                    </td>
                    <td className="px-4 py-3 text-[14px] text-white/65 leading-[1.5] border-t border-white/10">
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
