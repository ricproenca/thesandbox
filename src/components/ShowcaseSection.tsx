import Link from "next/link";
import Section from "./Section";
import Banner from "./Banner";

export default function ShowcaseSection() {
  return (
    <Section variant="bg">
      <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
        Built by students
      </span>
      <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-normal text-navy leading-[1.1] mb-4">
        Real projects.
        <br />
        <em className="text-orange italic">Real students.</em>
      </h2>
      <p className="text-[16px] text-muted leading-[1.7] max-w-[520px] mb-10">
        Everything here was built during a Sandbox session. No templates. No
        shortcuts.
      </p>
      <div className="border-[1.5px] border-border rounded-[14px] p-10 text-center max-w-[480px] mx-auto mb-8 bg-white">
        <span className="text-[48px] mb-4 block">🚀</span>
        <h3 className="font-serif text-[22px] text-navy mb-2">
          First projects coming soon
        </h3>
        <p className="text-[14px] text-muted leading-[1.6] mb-4">
          The Sandbox launches next academic year 2026/2027. Watch this
          space — projects will go live the moment students start building.
        </p>
        <Link
          href="/showcase"
          className="font-mono text-[12px] text-teal-dark tracking-[0.06em] uppercase border border-teal-dark/30 px-4 py-2 rounded-full inline-block"
        >
          &middot; Showcase &middot;
        </Link>
      </div>
      <Banner
        title="End-of-year Showcase"
        description={
          <>
            <span className="font-mono text-[10px] font-semibold tracking-[0.08em] uppercase bg-orange/12 border border-orange/30 text-orange px-[10px] py-[3px] rounded-full mb-2 inline-block">
              Annual event
            </span>
            <br />
            Every student presents what they built. Open to the whole school
            community.
          </>
        }
        buttonText="Register interest →"
        buttonHref="#"
        buttonDisabled
      />
    </Section>
  );
}
