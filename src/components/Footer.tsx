import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-deep px-8 lg:px-12 py-6 flex items-center justify-between gap-4 flex-wrap border-t border-white/[0.06]">
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
    </footer>
  );
}
