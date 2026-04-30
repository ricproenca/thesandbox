export default function JoinPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-8 lg:px-12 py-20">
      <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
        Join the club
      </span>
      <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-normal text-navy leading-[1.05] mb-4">
        What will you
        <br />
        <em className="text-orange italic">build?</em>
      </h1>
      <p className="text-[16px] text-muted leading-[1.7] max-w-[520px] mb-9">
        Fill out the form to secure your spot, or feel free to just show up and
        join us on the day.
      </p>
      <a
        href="https://forms.cloud.microsoft/e/20XRHrbVef"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange text-white text-[14px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-[transform,opacity] hover:-translate-y-px hover:opacity-90"
      >
        Register Now &rarr;
      </a>
    </main>
  );
}
