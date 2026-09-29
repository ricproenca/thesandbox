import Image from "next/image";
import Link from "next/link";

const FOOTER_LINK =
  "inline-flex items-center gap-2 px-3 py-2.5 rounded-[8px] text-[14px] font-medium text-navy/70 no-underline transition-colors hover:text-teal-dark hover:bg-teal/10";

const ICON_PROPS = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

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
            <div className="text-[12px] text-navy/80 font-medium mt-[1px]">
              <a href="https://lml.lu" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-teal-dark no-underline transition-colors">Lycée | International School Michel Lucius &middot; Luxembourg</a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 -mx-3">
          <Link href="/brand" className={FOOTER_LINK}>
            <svg {...ICON_PROPS} aria-hidden="true">
              <path d="M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.7 8.7a2.4 2.4 0 0 0 3.4 0l6.6-6.6a2.4 2.4 0 0 0 0-3.4z" />
              <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
            </svg>
            Brand kit
          </Link>
          <a href="mailto:ricardo.duarteproenca@education.lu" className={FOOTER_LINK}>
            <svg {...ICON_PROPS} aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
