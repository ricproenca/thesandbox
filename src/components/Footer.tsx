import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12 py-6 flex items-center justify-between gap-4 flex-wrap border-t border-navy/10">
        <div className="flex items-center gap-2.5">
          <Link href="/" className="no-underline">
            <Image
              src="/assets/logo/sandbox_logo.png"
              alt="The Sandbox"
              width={48}
              height={48}
              className="rounded-sm"
            />
          </Link>
          <div>
            <div className="text-sm font-bold text-navy">The Sandbox</div>
            <div className="text-[11px] text-navy/80 font-medium mt-[1px]">
              <a href="https://lml.lu" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-teal-dark no-underline transition-colors">Lycée | International School Michel Lucius &middot; Luxembourg</a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/brand" className="group relative text-[2.75rem] text-navy/70 no-underline transition-colors hover:text-teal leading-none" aria-label="Brand">
            🏷️
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[11px] font-medium text-navy bg-bg border border-navy/10 rounded px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Brand
            </span>
          </Link>
          <a href="mailto:ricardo.duarteproenca@education.lu" target="_blank" rel="noopener noreferrer" className="group relative text-[2.75rem] text-navy/70 no-underline transition-colors hover:text-teal leading-none" aria-label="Contact">
            📬
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[11px] font-medium text-navy bg-bg border border-navy/10 rounded px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              Contact
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
