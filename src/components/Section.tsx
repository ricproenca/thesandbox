type SectionProps = {
  children: React.ReactNode;
  variant?: "white" | "bg" | "navy";
  className?: string;
};

const bgMap = {
  white: "bg-white",
  bg: "bg-bg",
  navy: "bg-navy",
};

export default function Section({
  children,
  variant = "white",
  className = "",
}: SectionProps) {
  return (
    <section className={`${bgMap[variant]} px-8 lg:px-12 py-16 ${className}`}>
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
}
