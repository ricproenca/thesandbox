export default function BrandHero() {
  return (
    <div className="bg-navy px-8 lg:px-12 pt-16 pb-16 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 100% at 90% 50%, rgba(28, 197, 202, 0.05), transparent 70%)",
        }}
      />
      <div className="max-w-[1200px] mx-auto text-center">
        <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
          &middot; Brand &amp; Media &middot;
        </span>
        <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-normal text-white leading-[1.05] mb-4">
          Everything you need to
          <br />
          <em className="text-orange italic">represent.</em>
        </h1>
        <p className="text-[16px] text-white/55 leading-[1.7] max-w-[520px] mx-auto">
          Download logos, posters, wallpapers, and infographics.
          <br />
          Use them for presentations, projects, or personal work.
        </p>
      </div>
    </div>
  );
}
