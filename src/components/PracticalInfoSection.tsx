import Section from "./Section";
import Banner from "./Banner";

const PRACTICAL_ITEMS = [
  { icon: "📅", label: "When", val: "Schedule to be announced", sub: "Weekly sessions starting in October. Dates and times coming soon." },
  { icon: "📍", label: "Where", val: "Location to be announced", sub: "Room assignment pending — Check back soon!" },
  { icon: "👥", label: "Who", val: "KS3 to A Level", sub: "All experience levels. No selection process." },
  { icon: "💻", label: "What to bring", val: "Nothing", sub: "School computers provided. Bring your own device if you prefer." },
];

export default function PracticalInfoSection() {
  return (
    <Section>
      <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
        Practical info
      </span>
      <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-normal text-navy leading-[1.1] mb-10">
        Everything you need to know
        <br />
        before you <em className="text-orange italic">show up.</em>
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5 mb-10">
        {PRACTICAL_ITEMS.map((item) => (
          <div
            key={item.label}
            className="border-[1.5px] border-border rounded-[14px] p-6 flex items-start gap-4"
          >
            <span className="text-[24px] flex-shrink-0">{item.icon}</span>
            <div>
              <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted mb-1">
                {item.label}
              </div>
              <div className="font-serif text-[18px] text-navy mb-1">
                {item.val}
              </div>
              <div className="text-[13px] text-muted">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
      <Banner
        title="Fill out the form to secure your spot"
        description="Or feel free to just show up and join us on the day."
        buttonText="Register Now →"
        buttonHref="https://forms.cloud.microsoft/e/20XRHrbVef"
      />
    </Section>
  );
}
