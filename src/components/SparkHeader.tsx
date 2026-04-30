export default function SparkHeader() {
  return (
    <header className="bg-navy px-8 lg:px-12 pt-10 pb-8 relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 100% at 90% 50%, rgba(28, 197, 202, 0.05), transparent 70%)",
        }}
      />
      <div className="max-w-[1200px] mx-auto">
        <div className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3">
          &middot; Project Spark Gallery &middot;
        </div>
        <h1 className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-normal text-white leading-[1.1] mb-3">
          What do you want to <em className="text-orange italic">build?</em>
        </h1>
        <p className="text-[0.9rem] text-white/60 max-w-[480px] leading-[1.6]">
          Browse real projects. Click anything that makes you curious.
          Don&apos;t look for the &quot;right&quot; one &mdash; look for the
          one you can&apos;t stop thinking about.
        </p>
      </div>
    </header>
  );
}
