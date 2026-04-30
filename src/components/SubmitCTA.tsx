export default function SubmitCTA() {
  return (
    <div className="bg-navy rounded-[12px] px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center gap-6 mt-5 text-center sm:text-left">
      <div>
        <div className="font-serif text-[22px] font-normal text-white mb-1">
          Got a project to show?
        </div>
        <div className="text-[13px] text-white/45">
          Built something during a Sandbox session? Tell your teacher &mdash; it
          might appear here.
        </div>
      </div>
      <a
        href="https://forms.cloud.microsoft/e/20XRHrbVef"
        className="bg-orange text-white text-[14px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-[transform,opacity] duration-150 hover:-translate-y-px hover:opacity-90 border-none cursor-pointer whitespace-nowrap flex-shrink-0"
      >
        Get involved &rarr;
      </a>
    </div>
  );
}
