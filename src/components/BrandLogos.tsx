import Image from "next/image";
import Section from "./Section";

const LOGOS = [
  { src: "/assets/logo/sandbox_logo.png", label: "Default (Light)" },
  { src: "/assets/logo/sandbox_logo_black.png", label: "Black" },
  { src: "/assets/logo/sandbox_logo_minimal.png", label: "Minimal" },
  { src: "/assets/logo/sandbox_logo_minimal_nobg.png", label: "Minimal (No BG)" },
];

const QR = { src: "/assets/others/sandbox_qr_code.png", label: "QR Code" };

export default function BrandLogos() {
  return (
    <Section>
      <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
        Logos
      </span>
      <h2 className="font-serif text-[clamp(24px,3vw,32px)] font-normal text-navy leading-[1.1] mb-2">
        Choose the right version.
      </h2>
      <p className="text-[15px] text-muted leading-[1.6] max-w-[480px] mb-8">
        PNG format. Use the default for light backgrounds, black for white, and minimal for clean layouts.
      </p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5 mb-8">
        {LOGOS.map((logo) => (
          <div
            key={logo.label}
            className="border-[1.5px] border-border rounded-[14px] p-6 flex flex-col items-center bg-white"
          >
            <div className="flex items-center justify-center h-[120px] mb-4">
              <Image
                src={logo.src}
                alt={logo.label}
                width={160}
                height={160}
                className="object-contain"
              />
            </div>
            <div className="text-[14px] text-navy font-semibold text-center mb-3 mt-4">
              {logo.label}
            </div>
            <a
              href={logo.src}
              download
              className="text-[13px] font-bold text-teal-dark no-underline border border-teal-dark/30 px-4 py-2 rounded-sm hover:bg-teal-dark hover:text-white transition-colors"
              aria-label={`Download ${logo.label} logo`}
            >
              &darr; Download
            </a>
          </div>
        ))}
      </div>
      <div className="border-[1.5px] border-border rounded-[14px] p-6 flex flex-col items-center bg-white max-w-[280px]">
        <div className="flex items-center justify-center h-[160px] mb-4">
          <Image
            src={QR.src}
            alt={QR.label}
            width={160}
            height={160}
            className="object-contain"
          />
        </div>
        <div className="text-[14px] text-navy font-semibold text-center mb-3 mt-4">
          {QR.label}
        </div>
        <a
          href={QR.src}
          download
          className="text-[13px] font-bold text-teal-dark no-underline border border-teal-dark/30 px-4 py-2 rounded-sm hover:bg-teal-dark hover:text-white transition-colors"
          aria-label={`Download ${QR.label}`}
        >
          &darr; Download
        </a>
      </div>
    </Section>
  );
}
