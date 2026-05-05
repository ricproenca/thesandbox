import Image from "next/image";
import Link from "next/link";

const STATS = [
  { val: "44+", label: "Project ideas" },
  { val: "6", label: "Topics" },
  { val: "4", label: "Skill levels" },
  { val: "3", label: "Languages" },
  { val: "2h", label: "Per session" },
];

export default function HeroSection() {
  return (
    <section className="px-8 lg:px-12 pt-16 pb-12 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 100% at 90% 50%, rgba(28, 197, 202, 0.05), transparent 70%)",
        }}
      />
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-24">
        <Image
          src="/assets/logo/sandbox_logo.png"
          alt="The Sandbox"
          width={320}
          height={320}
          className="rounded-xl opacity-90 flex-shrink-0"
        />
        <div>
          <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-normal text-navy leading-[1.05] mb-4">
            What will you
            <br />
            <em className="text-orange italic">build?</em>
          </h1>
          <p className="text-[16px] text-muted leading-[1.7] max-w-[520px] mb-6">
            An after-school club where you choose your own project, work at your
            own pace, and leave with something real.
          </p>
          <div className="inline-flex items-center gap-2 font-mono text-[12px] text-teal/80 mb-8">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            After-school &middot; KS3 to A Level
          </div>
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="https://forms.cloud.microsoft/e/20XRHrbVef"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange text-white text-[14px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-[transform,opacity] hover:-translate-y-px hover:opacity-90"
            >
              Join the club
            </a>
            <Link
              href="/spark"
              className="border border-navy/20 text-navy text-[14px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-colors hover:border-teal hover:text-teal"
            >
              Project Spark
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3 mb-10">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`pr-7 border-r border-navy/10 ${i === 4 ? "border-0 pr-0" : ""}`}
              >
                <div className="font-serif text-[28px] text-teal-dark leading-none">
                  {stat.val}
                </div>
                <div className="text-[11px] text-muted/60 mt-1 font-mono tracking-[0.04em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
