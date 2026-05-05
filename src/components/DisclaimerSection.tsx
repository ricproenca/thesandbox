import Section from "./Section";

export default function DisclaimerSection() {
  return (
    <Section>
      <div className="border-l-4 border-teal bg-teal/5 rounded-r-[14px] p-8 flex items-start gap-6">
        <span className="text-[36px] flex-shrink-0">📋</span>
        <div>
          <h3 className="font-serif text-[22px] text-navy mb-1">
            A note for students &amp; parents
          </h3>
          <p className="text-[14px] text-navy/70 mb-6">
            Please read — important information about how the club works.
          </p>
          <div className="text-[15px] text-navy/75 leading-[1.75] space-y-4">
            <p>
              The Sandbox is a voluntary, co-curricular activity.
              Participation is entirely optional and carries no academic
              grade or formal assessment. Students are free to join, take a
              break, or leave at any time.
            </p>
            <p>
              All software used in the club is free, browser-based, or
              school-licensed. Students are never required to purchase tools,
              subscriptions, or hardware. Where personal devices (Arduino,
              Raspberry Pi, etc.) are brought in voluntarily, the school
              accepts no liability for loss or damage.
            </p>
            <p>
              AI tools are used as professional learning aids under the club&apos;s explicit
              policy:{" "}
              <strong className="text-navy font-semibold">
                you may use AI on any project — if you can explain the output.
              </strong>{" "}
              Students are taught to verify, question, and understand
              AI-generated code rather than treat it as an answer.
            </p>
            <p>
              The end-of-year showcase is open to all students and families.
              Work displayed is shared with the student&apos;s explicit
              consent. No personal data from student projects is stored,
              shared, or published by the school without parental consent
              where required.
            </p>
            <p>
              Questions?{" "}
              <a
                href="mailto:ricardo.duarteproenca@education.lu"
                className="text-teal-dark font-semibold no-underline hover:underline"
              >
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
