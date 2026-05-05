import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  disabled?: boolean;
  className?: string;
};

const variants = {
  primary: "bg-orange text-white no-underline transition-[transform,opacity] hover:-translate-y-px hover:opacity-90",
  secondary: "border border-white/20 text-white no-underline transition-colors hover:border-teal hover:text-teal",
  ghost: "border border-navy/20 text-navy no-underline transition-colors hover:border-teal hover:text-teal",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external,
  disabled,
  className = "",
}: ButtonProps) {
  const base = "text-[14px] font-bold px-6 py-3 rounded-[8px] inline-flex items-center gap-1.5";

  if (disabled) {
    return (
      <span className={`${base} ${className} text-white/25 border border-white/10 flex-shrink-0 cursor-not-allowed`}>
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
