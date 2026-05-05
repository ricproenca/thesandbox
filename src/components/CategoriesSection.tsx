import Link from "next/link";
import { CATEGORIES } from "@/lib/categories";
import Section from "./Section";
import Banner from "./Banner";

export default function CategoriesSection() {
  return (
    <Section variant="bg">
      <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
        What can you build?
      </span>
      <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-normal text-navy leading-[1.1] mb-4">
        Pick something that makes
        <br />
        you <em className="text-orange italic">curious.</em>
      </h2>
      <p className="text-[16px] text-muted leading-[1.7] max-w-[560px] mb-10">
        <strong>Project Spark</strong> has 44+ real project ideas across 6
        categories. Every level welcome — from a first Python program to a
        line-following robot.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5 mb-10">
        {CATEGORIES.map((c) => (
          <Link
            key={c.tag}
            href={`/spark?cat=${c.cat}`}
            className="border-[1.5px] border-border rounded-[14px] overflow-hidden no-underline bg-white transition-[border-color,transform,box-shadow] duration-200 hover:border-teal hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(13,45,62,0.08)] group"
          >
            <div className="flex items-center gap-3 px-5 py-3 bg-bg border-b border-border">
              <span className="text-[24px]">{c.icon}</span>
              <span className="font-mono text-[11px] font-semibold tracking-[0.06em] uppercase bg-white border border-border px-[10px] py-[3px] rounded-sm">
                {c.tag}
              </span>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-[18px] font-normal text-navy mb-2">
                {c.name}
              </h3>
              <p className="text-[13px] text-muted leading-[1.6] mb-3">
                {c.examples}
              </p>
              <div className="flex flex-wrap gap-2">
                {c.langs.map((l) => (
                  <span
                    key={l}
                    className="font-mono text-[11px] bg-teal-dark/8 border border-teal-dark/25 text-teal-dark px-[0.5rem] py-[0.2rem] rounded-sm"
                  >
                    {l}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Banner
        title="Browse all projects in the Spark Gallery"
        description={
          <>
            Filter by topic, level, and language.
            <br />
            Don&apos;t look for the right one — look for the one you
            can&apos;t stop thinking about.
          </>
        }
        buttonText="Open the gallery →"
        buttonHref="/spark"
      />
    </Section>
  );
}
