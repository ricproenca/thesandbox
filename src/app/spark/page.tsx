export default function SparkPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-8 lg:px-12 py-20">
      <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
        Project ideas
      </span>
      <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-normal text-navy leading-[1.05] mb-4">
        Project Spark
        <br />
        <em className="text-orange italic">Gallery.</em>
      </h1>
      <p className="text-[16px] text-muted leading-[1.7] max-w-[520px] mb-9">
        Browse all projects in the Spark Gallery. Filter by topic, level, and
        language. Don&apos;t look for the right one &mdash; look for the one
        you can&apos;t stop thinking about.
      </p>
      <p className="text-muted text-sm">Coming soon.</p>
    </main>
  );
}
