import Icon from "./Icon";

export default function AiTransparencySection() {
  return (
    <div className="bg-white px-8 lg:px-12 pb-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-surface2 rounded-[12px] px-6 sm:px-8 py-5 flex items-start gap-4 border border-border">
          <Icon name="bot" size={22} className="text-teal-ink mt-[2px]" />
          <p className="text-[14px] text-navy/70 leading-[1.65]">
            <strong className="text-navy font-semibold">Built with AI, supervised by a human.</strong>{" "}
            This website was designed and developed using AI tools under the
            supervision of a CS teacher — a real example of how The Sandbox
            approaches technology: use it well, understand what it produces,
            and take responsibility for the result.
          </p>
        </div>
      </div>
    </div>
  );
}
