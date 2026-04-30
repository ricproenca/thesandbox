import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-navy sticky top-0 z-10 flex items-center justify-between px-8 lg:px-12 h-16 border-b border-white/[0.07]">
      <Link href="/" className="flex items-center gap-2.5 no-underline">
        <Image
          src="/assets/logo.png"
          alt="The Sandbox"
          width={36}
          height={36}
          className="rounded-md"
        />
        <div>
          <div className="text-sm font-bold text-white">The Sandbox</div>
          <div className="text-[10px] text-white/40 tracking-[0.08em] uppercase mt-[1px]">
            Showcase
          </div>
        </div>
      </Link>
      <a
        href="https://thesandboxclub.netlify.app"
        className="font-mono text-[12px] text-white/50 no-underline tracking-[0.04em] transition-colors hover:text-teal"
      >
        &larr; Back to website
      </a>
    </nav>
  );
}
