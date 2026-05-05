import Link from "next/link";
import Section from "./Section";

const OBJECTIONS = [
  "No experience needed",
  "No homework",
  "KS3 to A Level",
];

export default function CTASection() {
  return (
    <Section variant="navy" className="text-center">
      <div className="max-w-[640px] mx-auto">
        <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
          Ready to build something?
        </span>
        <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-normal text-white leading-[1.1] mb-4">
          What will you
          <br />
          <em className="text-orange italic">build?</em>
        </h2>
        <p className="text-[16px] text-white/55 leading-[1.7] mb-8">
          No experience needed. No homework. No pressure. Just show up with an
          idea — or let us help you find one.
        </p>
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          <a
            href="https://forms.cloud.microsoft/e/20XRHrbVef"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange text-white text-[14px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-[transform,opacity] hover:-translate-y-px hover:opacity-90"
          >
            Join the club &rarr;
          </a>
          <Link
            href="/spark"
            className="border border-white/20 text-white text-[14px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-colors hover:border-teal hover:text-teal"
          >
            Browse projects first
          </Link>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          {OBJECTIONS.map((item) => (
            <span
              key={item}
              className="font-mono text-[12px] text-white/50 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
