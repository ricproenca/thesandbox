import Icon from "./Icon";
import Section from "./Section";

const FAQ = [
  {
    q: "Is it graded or compulsory?",
    a: (
      <>
        No. The Sandbox is a voluntary, co-curricular activity with no academic
        grade or formal assessment. Students are free to join, take a break, or
        leave at any time.
      </>
    ),
  },
  {
    q: "Do we need to buy anything?",
    a: (
      <>
        No. All software used in the club is free, browser-based, or
        school-licensed. Where personal devices (Arduino, Raspberry Pi, etc.)
        are brought in voluntarily, the school accepts no liability for loss or
        damage.
      </>
    ),
  },
  {
    q: "Can students use AI?",
    a: (
      <>
        Yes, as a professional learning aid under the club&apos;s explicit
        policy:{" "}
        <strong className="text-navy font-semibold">
          you may use AI on any project — if you can explain the output.
        </strong>{" "}
        Students are taught to verify, question, and understand AI-generated
        code rather than treat it as an answer.
      </>
    ),
  },
  {
    q: "Who sees my child's work?",
    a: (
      <>
        The end-of-year showcase is open to all students and families. Work is
        displayed only with the student&apos;s explicit consent. No personal
        data from student projects is stored, shared, or published by the
        school without parental consent where required.
      </>
    ),
  },
];

export default function DisclaimerSection() {
  return (
    <Section>
      <div className="max-w-[760px]">
        <span className="font-mono text-[12px] font-medium tracking-[0.15em] uppercase text-teal-ink mb-3 block">
          For students &amp; parents
        </span>
        <h2 className="font-serif text-[clamp(24px,3vw,32px)] font-normal text-navy leading-[1.1] mb-6 text-balance">
          Good to know.
        </h2>
        <div className="border-t border-border">
          {FAQ.map((item) => (
            <details key={item.q} className="group border-b border-border">
              <summary className="flex items-center justify-between gap-4 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[16px] font-semibold text-navy hover:text-teal-ink">
                {item.q}
                <Icon
                  name="chevron"
                  className="text-muted transition-transform group-open:rotate-180 motion-reduce:transition-none"
                />
              </summary>
              <p className="text-[15px] text-navy/75 leading-[1.7] pb-5 max-w-[68ch]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
        <p className="text-[15px] text-muted mt-5">
          Another question?{" "}
          <a
            href="mailto:ricardo.duarteproenca@education.lu"
            className="text-teal-ink font-semibold no-underline hover:underline"
          >
            Contact us
          </a>
        </p>
      </div>
    </Section>
  );
}
