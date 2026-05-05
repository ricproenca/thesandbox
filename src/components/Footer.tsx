import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12 py-6 flex items-center justify-between gap-4 flex-wrap border-t border-navy/10">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image
            src="/assets/logo/sandbox_logo.png"
            alt="The Sandbox"
            width={48}
            height={48}
            className="rounded-sm"
          />
          <div>
            <div className="text-sm font-bold text-navy">The Sandbox</div>
            <div className="text-[11px] text-navy/80 font-medium mt-[1px]">
              Lycée | International School Michel Lucius &middot; Luxembourg
            </div>
          </div>
        </Link>
        <div className="text-[11px] text-muted/60 font-mono">
          Academic Year 2025/26
        </div>
      </div>
    </footer>
  );
}
