import Link from "next/link";

type BannerProps = {
  title: string;
  description: React.ReactNode;
  buttonText: React.ReactNode;
  buttonHref: string;
  buttonDisabled?: boolean;
  className?: string;
};

export default function Banner({
  title,
  description,
  buttonText,
  buttonHref,
  buttonDisabled,
  className = "",
}: BannerProps) {
  return (
    <div className={`bg-navy rounded-[12px] px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center sm:justify-between gap-6 text-center sm:text-left ${className}`}>
      <div>
        <div className="font-serif text-[22px] font-normal text-white mb-1">
          {title}
        </div>
        <div className="text-[13px] text-white/45 leading-[1.6]">
          {description}
        </div>
      </div>
      {buttonDisabled ? (
        <span className="text-white/25 text-[14px] font-bold px-6 py-3 rounded-[8px] border border-white/10 flex-shrink-0 cursor-not-allowed">
          {buttonText}
        </span>
      ) : (
        <Link
          href={buttonHref}
          className="bg-orange text-white text-[14px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 flex-shrink-0"
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}
