import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-deep">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12 py-6 flex items-center justify-between gap-4 flex-wrap border-t border-white/[0.06]">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/assets/logo.png"
            alt="The Sandbox"
            width={28}
            height={28}
            className="rounded-sm"
          />
          <div>
            <div className="text-sm font-semibold text-white/60">The Sandbox</div>
            <div className="text-[11px] text-white/[0.28] mt-[1px]">
              Lycée | International School Michel Lucius &middot; Luxembourg
            </div>
          </div>
        </Link>
        <div className="text-[11px] text-white/20 font-mono">
          Academic Year 2025/26
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12 pb-6 flex items-start gap-3">
        <span className="text-lg flex-shrink-0">🤖</span>
        <div className="text-[13px] text-white/40 leading-[1.6]">
          <strong className="text-white/60">Built with AI, supervised by a human.</strong> This website
          was designed and developed using AI tools under the supervision of a
          CS teacher &mdash; a real example of how The Sandbox approaches
          technology: use it well, understand what it produces, and take
          responsibility for the result.
        </div>
      </div>
    </footer>
  );
}
