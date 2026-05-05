export default function AiTransparencySection() {
  return (
    <div className="px-8 lg:px-12 py-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-zinc-100 rounded-[12px] px-6 sm:px-10 py-5 flex items-center gap-5 border border-zinc-200">
          <span className="text-2xl flex-shrink-0">🤖</span>
          <div className="text-[14px] text-navy/70 leading-[1.65]">
            <strong className="text-navy font-semibold">Built with AI, supervised by a human.</strong> This website
            was designed and developed using AI tools under the supervision of a
            CS teacher &mdash; a real example of how The Sandbox approaches
            technology: use it well, understand what it produces, and take
            responsibility for the result.
          </div>
        </div>
      </div>
    </div>
  );
}
