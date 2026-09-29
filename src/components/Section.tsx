type SectionProps = {
  children: React.ReactNode;
  variant?: "white" | "bg" | "navy";
  className?: string;
  id?: string;
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
  id,
}: SectionProps) {
  return (
    <section id={id} className={`${bgMap[variant]} px-8 lg:px-12 py-16 scroll-mt-16 ${className}`}>
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
}
