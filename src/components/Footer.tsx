import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

const FOOTER_LINK =
  "inline-flex items-center gap-2 px-3 py-2.5 rounded-[8px] text-[14px] font-medium text-navy/70 no-underline transition-colors hover:text-teal-ink hover:bg-teal/10";

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
              <a href="https://lml.lu" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-teal-ink no-underline transition-colors">Lycée | International School Michel Lucius &middot; Luxembourg</a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 -mx-3">
          <Link href="/brand" className={FOOTER_LINK}>
            <Icon name="tag" size={16} />
            Brand kit
          </Link>
          <a href="mailto:ricardo.duarteproenca@education.lu" className={FOOTER_LINK}>
            <Icon name="mail" size={16} />
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
