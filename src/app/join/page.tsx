import Image from "next/image";
import Icon from "@/components/Icon";
import { PRACTICAL_ITEMS, REGISTER_URL } from "@/lib/practical";

export default function JoinPage() {
  return (
    <main
      id="main-content"
      className="max-w-[1200px] mx-auto px-8 lg:px-12 py-14 md:py-20 grid md:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start"
    >
      <div>
        <span className="font-mono text-[12px] font-medium tracking-[0.15em] uppercase text-teal-ink mb-3 block">
          Join the club
        </span>
        <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-normal text-navy leading-[1.05] mb-4">
          What will you
          <br />
          <em className="text-orange italic">build?</em>
        </h1>
        <p className="text-[16px] text-muted leading-[1.7] max-w-[520px] mb-8">
          Fill out the form to secure your spot, or feel free to just show up and
          join us on the day.
        </p>
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange text-white text-[15px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 mb-12"
        >
          Register Now &rarr;
        </a>
        <ul className="border-t border-border max-w-[560px]">
          {PRACTICAL_ITEMS.map((item) => (
            <li key={item.label} className="flex items-start gap-4 py-4 border-b border-border">
              <span className="w-10 h-10 rounded-[10px] bg-teal/10 text-teal-ink flex items-center justify-center">
                <Icon name={item.icon} />
              </span>
              <div>
                <div className="font-mono text-[12px] tracking-[0.1em] uppercase text-muted mb-0.5">
                  {item.label}
                </div>
                <div className="font-semibold text-[16px] text-navy">{item.val}</div>
                <div className="text-[14px] text-muted">{item.sub}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Image
        src="/assets/posters/sandbox_poster_3.png"
        alt="The Sandbox poster: build your own projects, no curriculum, no experience needed, KS3 to A Level"
        width={848}
        height={1264}
        sizes="(max-width: 768px) 100vw, 380px"
        className="w-full max-w-[380px] h-auto rounded-[14px] shadow-[0_20px_50px_rgba(13,45,62,0.25)] md:sticky md:top-24"
      />
    </main>
  );
}
