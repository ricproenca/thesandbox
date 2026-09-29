import { PRACTICAL_ITEMS, REGISTER_URL } from "@/lib/practical";
import Icon from "./Icon";
import Section from "./Section";
import Banner from "./Banner";

export default function PracticalInfoSection() {
  return (
    <Section variant="bg">
      <span className="font-mono text-[12px] font-medium tracking-[0.15em] uppercase text-teal-ink mb-3 block">
        Practical info
      </span>
      <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-normal text-navy leading-[1.1] mb-10 text-balance">
        Everything you need to know before you show up.
      </h2>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5 mb-10">
        {PRACTICAL_ITEMS.map((item) => (
          <div
            key={item.label}
            className="border-[1.5px] border-border rounded-[14px] bg-white p-6 flex items-start gap-4"
          >
            <span className="w-10 h-10 rounded-[10px] bg-teal/10 text-teal-ink flex items-center justify-center">
              <Icon name={item.icon} />
            </span>
            <div>
              <div className="font-mono text-[12px] tracking-[0.1em] uppercase text-muted mb-1">
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
      <p className="flex items-start gap-3 text-[15px] text-navy leading-[1.6] mb-10">
        <Icon name="trophy" className="text-orange mt-[2px]" />
        <span>
          <strong className="font-semibold">End-of-year Showcase.</strong>{" "}
          <span className="text-muted">
            Every student presents what they built, and families are welcome.
          </span>
        </span>
      </p>
      <Banner
        title="Fill out the form to secure your spot"
        description="Or feel free to just show up and join us on the day."
        buttonText="Register Now →"
        buttonHref={REGISTER_URL}
      />
    </Section>
  );
}
