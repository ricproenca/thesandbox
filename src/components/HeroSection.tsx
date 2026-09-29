import Image from "next/image";
import Link from "next/link";
import { IDEA_COUNT, THEMES } from "@/lib/ideas";

const STATS = [
  { val: String(IDEA_COUNT), label: "Starter ideas" },
  { val: String(THEMES.length), label: "Themes" },
  { val: "0", label: "Experience needed" },
  { val: "90 min", label: "Per session" },
];

export default function HeroSection() {
  return (
    <section className="px-8 lg:px-12 pt-8 md:pt-16 pb-12 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 100% at 90% 50%, rgba(28, 197, 202, 0.05), transparent 70%)",
        }}
      />
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-24">
        {/* Small on phones so the heading and "Join the club" stay on the first screen */}
        <Image
          src="/assets/logo/sandbox_logo.png"
          alt="The Sandbox"
          width={320}
          height={320}
          loading="eager"
          fetchPriority="high"
          className="rounded-xl opacity-90 flex-shrink-0 w-24 h-24 self-start md:w-80 md:h-80 md:self-auto"
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
              href="/#ideas"
              className="border border-navy/20 text-navy text-[14px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-colors hover:border-teal hover:text-teal"
            >
              See project ideas
            </Link>
          </div>
          {/* 2×2 grid until there's room for one row; dividers only in the row layout */}
          <dl className="grid grid-cols-2 gap-x-7 gap-y-4 xl:flex mb-10">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`xl:pr-7 xl:border-r border-navy/10 ${i === STATS.length - 1 ? "xl:border-0 xl:pr-0" : ""}`}
              >
                <dt className="font-serif text-[28px] text-teal-dark leading-none">
                  {stat.val}
                </dt>
                <dd className="text-[12px] text-muted/60 mt-1 font-mono tracking-[0.04em]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
