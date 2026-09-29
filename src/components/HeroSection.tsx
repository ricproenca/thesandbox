import Link from "next/link";
import { IDEA_COUNT, THEMES } from "@/lib/ideas";
import { REGISTER_URL } from "@/lib/practical";
import HeroArt from "./HeroArt";

const STATS = [
  { val: String(IDEA_COUNT), label: "Starter ideas" },
  { val: String(THEMES.length), label: "Themes" },
  { val: "0", label: "Experience needed" },
  { val: "90 min", label: "Per session" },
];

export default function HeroSection() {
  return (
    <section className="bg-navy px-8 lg:px-12 pt-10 md:pt-16 pb-14 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 80% at 80% 45%, rgba(28, 197, 202, 0.14), transparent 70%)",
        }}
      />
      <div className="relative max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center gap-10 lg:gap-16">
        <div className="md:flex-1">
          <h1 className="font-serif text-[clamp(36px,5.5vw,60px)] font-normal text-white leading-[1.02] mb-5">
            What will you
            <br />
            <em className="text-orange italic">build?</em>
          </h1>
          <p className="text-[17px] text-white/70 leading-[1.7] max-w-[500px] mb-6">
            An after-school club where you choose your own project, work at your
            own pace, and leave with something real.
          </p>
          <div className="inline-flex items-center gap-2 font-mono text-[12px] text-teal mb-8">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse motion-reduce:animate-none" />
            After-school &middot; KS3 to A Level
          </div>
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange text-white text-[15px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-[transform,opacity] hover:-translate-y-px hover:opacity-90"
            >
              Join the club
            </a>
            <Link
              href="/#ideas"
              className="border border-white/25 text-white text-[15px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-colors hover:border-teal hover:text-teal"
            >
              See project ideas
            </Link>
          </div>
          {/* 2×2 grid until there's room for one row; dividers only in the row layout */}
          <dl className="grid grid-cols-2 gap-x-7 gap-y-4 xl:flex">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={i < STATS.length - 1 ? "xl:pr-7 xl:border-r border-white/15" : ""}
              >
                <dt className="font-serif text-[28px] text-teal leading-none">
                  {stat.val}
                </dt>
                <dd className="text-[12px] text-white/55 mt-1 font-mono tracking-[0.04em]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <HeroArt className="hidden md:block w-[340px] lg:w-[460px] flex-shrink-0" />
      </div>
    </section>
  );
}
