import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  {
    icon: "🎮",
    tag: "Games",
    name: "Games",
    examples: "Snake, Tetris, Pong, Space Invaders, Maze Solver, Sudoku Solver, Hoops, PhotoBomb",
    langs: ["Python", "JavaScript"],
    cat: "cat-games",
  },
  {
    icon: "🌐",
    tag: "Web",
    name: "Web",
    examples: "Portfolio site, Weather dashboard, Music visualiser, News aggregator, Real-time tools",
    langs: ["HTML", "CSS", "JavaScript"],
    cat: "cat-web",
  },
  {
    icon: "🤖",
    tag: "AI",
    name: "AI",
    examples: "AI study buddy, Image classifier, Voice assistant, AI-powered chatbot",
    langs: ["Python", "JavaScript"],
    cat: "cat-ai",
  },
  {
    icon: "📊",
    tag: "Data",
    name: "Data",
    examples: "Spotify stats, Fitness tracker, Live data pipeline, Timetable analyser",
    langs: ["Python", "JavaScript"],
    cat: "cat-data",
  },
  {
    icon: "⚙️",
    tag: "Hardware",
    name: "Hardware",
    examples: "Smart traffic light, Room environment monitor, Line-following robot",
    langs: ["Python"],
    cat: "cat-hardware",
  },
  {
    icon: "🛠️",
    tag: "Tools",
    name: "Tools",
    examples: "Password manager, Markdown editor, Personal API, Productivity app",
    langs: ["Python", "JavaScript"],
    cat: "cat-tools",
  },
];

const TIMELINE_STEPS = [
  { num: "1", time: "0–10 min", title: "Stand-up circle", desc: "What I'm building, what I did, what I'll do today. Thirty seconds each." },
  { num: "2", time: "10–80 min", title: "Build time", desc: "Work independently. Guide circulates. Rule: never touch their keyboard." },
  { num: "3", time: "80–95 min", title: "Spark session", desc: "Lost? Open the gallery together. One question: what made you want to click?" },
  { num: "4", time: "95–105 min", title: "Commit check", desc: '"By next session I will have ___." One sentence. One demonstrable thing.' },
  { num: "5", time: "105–120 min", title: "Show and tell", desc: "One student shares their screen — working or broken. Questions from the group only." },
];

const PILLARS = [
  { icon: "🎯", title: "Your project, your choice", desc: "No one tells you what to build. You pick something that genuinely interests you — games, AI, hardware, the web." },
  { icon: "⚡", title: "Your pace, your level", desc: "Complete beginner or experienced coder — everyone works at their own level. No one waits for anyone else." },
  { icon: "🏆", title: "Real outcomes", desc: "A portfolio project. Something you can show, explain, and talk about in a university interview." },
  { icon: "🎓", title: "Certifications & Olympiad", desc: "Sit the Python or JS Institute certification. Compete in the Luxembourg Informatics Olympiad. Real credentials.", badge: "Academic track" },
];

export default function HomePage() {
  return (
    <main id="main-content">
      {/* HERO */}
      <section className="px-8 lg:px-12 pt-16 pb-12 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 100% at 90% 50%, rgba(28, 197, 202, 0.05), transparent 70%)",
          }}
        />
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-24">
          <Image
            src="/assets/logo/sandbox_logo.png"
            alt="The Sandbox"
            width={320}
            height={320}
            className="rounded-xl opacity-90 flex-shrink-0"
          />
          <div>
            <h1 className="font-serif text-[clamp(32px,5vw,52px)] font-normal text-navy leading-[1.05] mb-4">
              What will you
              <br />
              <em className="text-orange italic">build?</em>
            </h1>
            <p className="text-[16px] text-muted leading-[1.7] max-w-[520px] mb-6">
              An after-school club where you choose your own project, work at your
              own pace, and leave with something real.
            </p>
            <div className="inline-flex items-center gap-2 font-mono text-[12px] text-teal/80 mb-8">
              <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
              After-school &middot; KS3 to A Level
            </div>
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://forms.cloud.microsoft/e/20XRHrbVef"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange text-white text-[14px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-[transform,opacity] hover:-translate-y-px hover:opacity-90"
              >
                Join the club
              </a>
              <Link
                href="/spark"
                className="border border-navy/20 text-navy text-[14px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-colors hover:border-teal hover:text-teal"
              >
                Project Spark
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-7 gap-y-3 mb-10">
              {[
                { val: "44+", label: "Project ideas" },
                { val: "6", label: "Topics" },
                { val: "4", label: "Skill levels" },
                { val: "3", label: "Languages" },
                { val: "2h", label: "Per session" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`pr-7 border-r border-navy/10 ${i === 4 ? "border-0 pr-0" : ""}`}
                >
                  <div className="font-serif text-[28px] text-teal-dark leading-none">
                    {stat.val}
                  </div>
                  <div className="text-[11px] text-muted/60 mt-1 font-mono tracking-[0.04em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-white px-8 lg:px-12 py-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
            What is The Sandbox?
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-normal text-navy leading-[1.1] mb-4">
            A place where things
            <br />
            get <em className="text-orange italic">made.</em>
          </h2>
          <p className="text-[16px] text-muted leading-[1.7] max-w-[520px] mb-10">
            No fixed curriculum. No pressure. No experience needed. You come in,
            pick a project that excites you, and build it — with a guide nearby
            when you get stuck.
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 mb-12">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className={`border-[1.5px] border-border rounded-[14px] p-6 relative ${
                  p.badge ? "bg-navy border-navy" : "bg-white"
                }`}
              >
                {p.badge && (
                  <span className="absolute top-4 right-4 font-mono text-[10px] font-semibold tracking-[0.08em] uppercase bg-orange/12 border border-orange/30 text-orange px-[10px] py-[3px] rounded-full">
                    {p.badge}
                  </span>
                )}
                <span className="text-[32px] mb-3 block">{p.icon}</span>
                <h3
                  className={`font-semibold text-[16px] mb-2 ${p.badge ? "text-white" : "text-navy"}`}
                >
                  {p.title}
                </h3>
                <p
                  className={`text-[14px] leading-[1.6] ${p.badge ? "text-white/50" : "text-muted"}`}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="border-l-2 border-teal pl-6 max-w-[640px]">
            <p className="text-[16px] text-navy leading-[1.7] italic">
              Students come in, work on their own projects, and leave having
              built something real. No fixed curriculum. No pressure. Just a
              space, a guide, and the freedom to create.
            </p>
            <div className="text-[13px] text-muted mt-2 font-mono">
              — The Sandbox, Academic Year 2025/26
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-bg px-8 lg:px-12 py-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
            What can you build?
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-normal text-navy leading-[1.1] mb-4">
            Pick something that makes
            <br />
            you <em className="text-orange italic">curious.</em>
          </h2>
          <p className="text-[16px] text-muted leading-[1.7] max-w-[560px] mb-10">
            <strong>Project Spark</strong> has 44+ real project ideas across 6
            categories. Every level welcome — from a first Python program to a
            line-following robot.
          </p>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-5 mb-10">
            {CATEGORIES.map((c) => (
              <Link
                key={c.tag}
                href={`/spark?cat=${c.cat}`}
                className="border-[1.5px] border-border rounded-[14px] overflow-hidden no-underline bg-white transition-[border-color,transform,box-shadow] duration-200 hover:border-teal hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(13,45,62,0.08)] group"
              >
                <div className="flex items-center gap-3 px-5 py-3 bg-bg border-b border-border">
                  <span className="text-[24px]">{c.icon}</span>
                  <span className="font-mono text-[11px] font-semibold tracking-[0.06em] uppercase bg-white border border-border px-[10px] py-[3px] rounded-sm">
                    {c.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-[18px] font-normal text-navy mb-2">
                    {c.name}
                  </h3>
                  <p className="text-[13px] text-muted leading-[1.6] mb-3">
                    {c.examples}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {c.langs.map((l) => (
                      <span
                        key={l}
                        className="font-mono text-[11px] bg-teal-dark/8 border border-teal-dark/25 text-teal-dark px-[0.5rem] py-[0.2rem] rounded-sm"
                      >
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="bg-navy rounded-[12px] px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center sm:justify-between gap-6 text-center sm:text-left">
            <div>
              <div className="font-serif text-[22px] font-normal text-white mb-1">
                Browse all projects in the Spark Gallery
              </div>
              <p className="text-[13px] text-white/45 leading-[1.6]">
                Filter by topic, level, and language.
                <br />
                Don&apos;t look for the right one — look for the one you
                can&apos;t stop thinking about.
              </p>
            </div>
            <Link
              href="/spark"
              className="bg-orange text-white text-[14px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 flex-shrink-0"
            >
              Open the gallery &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white px-8 lg:px-12 py-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
            How it works
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-normal text-navy leading-[1.1] mb-4">
            Every session follows
            <br />
            the same <em className="text-orange italic">rhythm.</em>
          </h2>
          <p className="text-[16px] text-muted leading-[1.7] max-w-[520px] mb-10">
            Two hours. Five moments. No lectures, no homework, no grades — just
            structured time to build.
          </p>
          <div className="relative mb-10">
            <div className="absolute left-4 top-8 bottom-8 w-px bg-border" />
            <div className="space-y-8">
              {TIMELINE_STEPS.map((step) => (
                <div key={step.num} className="relative pl-12">
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-navy text-white font-mono text-[13px] font-bold flex items-center justify-center z-10">
                    {step.num}
                  </div>
                  <div className="font-mono text-[11px] text-teal mb-1">
                    {step.time}
                  </div>
                  <h3 className="font-serif text-[18px] text-navy mb-1">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-muted leading-[1.6]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            <div className="border-[1.5px] border-border rounded-[14px] p-6">
              <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted mb-1">
                When &amp; where
              </div>
              <div className="font-serif text-[20px] text-navy mb-1">
                Weekly &middot; 2 hours
              </div>
              <div className="text-[13px] text-muted">
                Same room, same time each week. School computers provided.
              </div>
            </div>
            <div className="border-[1.5px] border-border rounded-[14px] p-6">
              <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted mb-1">
                Who can join
              </div>
              <div className="font-serif text-[20px] text-navy mb-1">
                KS3 to A Level
              </div>
              <div className="text-[13px] text-muted">
                No experience needed. Newcomers as welcome as advanced students.
              </div>
            </div>
            <div className="border-[1.5px] border-border rounded-[14px] p-6 bg-navy border-navy">
              <div className="font-mono text-[10px] tracking-[0.1em] uppercase text-teal mb-1">
                The AI rule
              </div>
              <div className="font-serif text-[20px] text-white mb-1">
                Use it — if you can explain every line.
              </div>
              <div className="text-[13px] text-white/50">
                AI is a professional tool here. Not a shortcut.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE PREVIEW */}
      <section className="bg-bg px-8 lg:px-12 py-16">
        <div className="max-w-[1200px] mx-auto">
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
          <div className="bg-navy rounded-[12px] px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center sm:justify-between gap-6 text-center sm:text-left">
            <div>
              <span className="font-mono text-[10px] font-semibold tracking-[0.08em] uppercase bg-orange/12 border border-orange/30 text-orange px-[10px] py-[3px] rounded-full mb-2 inline-block">
                Annual event
              </span>
              <h3 className="font-serif text-[20px] text-white mb-1">
                End-of-year Showcase
              </h3>
              <p className="text-[13px] text-white/45">
                Every student presents what they built. Open to the whole school
                community.
              </p>
            </div>
            <span className="text-white/25 text-[14px] font-bold px-6 py-3 rounded-[8px] border border-white/10 flex-shrink-0 cursor-not-allowed">
              Register interest &rarr;
            </span>
          </div>
        </div>
      </section>

      {/* PRACTICAL INFO */}
      <section className="bg-white px-8 lg:px-12 py-16">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
            Practical info
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-normal text-navy leading-[1.1] mb-10">
            Everything you need to know
            <br />
            before you <em className="text-orange italic">show up.</em>
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5 mb-10">
            {[
              { icon: "📅", label: "When", val: "Schedule to be announced", sub: "Weekly sessions starting in October. Dates and times coming soon." },
              { icon: "📍", label: "Where", val: "Location to be announced", sub: "Room assignment pending — Check back soon!" },
              { icon: "👥", label: "Who", val: "KS3 to A Level", sub: "All experience levels. No selection process." },
              { icon: "💻", label: "What to bring", val: "Nothing", sub: "School computers provided. Bring your own device if you prefer." },
            ].map((item) => (
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
          <div className="bg-navy rounded-[12px] px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center sm:justify-between gap-6 text-center sm:text-left">
            <div>
              <div className="font-serif text-[22px] text-white mb-1">
                Fill out the form to secure your spot
              </div>
              <p className="text-[13px] text-white/45">
                Or feel free to just show up and join us on the day.
              </p>
            </div>
            <a
              href="https://forms.cloud.microsoft/e/20XRHrbVef"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange text-white text-[14px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 flex-shrink-0"
            >
              Register Now &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="bg-white px-8 lg:px-12 py-16">
        <div className="max-w-[1200px] mx-auto">
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
        </div>
      </section>

      {/* AI TRANSPARENCY */}
      <section className="bg-bg px-8 lg:px-12 py-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-navy rounded-[12px] px-6 sm:px-10 py-6 flex items-center gap-5 border border-white/[0.08]">
            <span className="text-2xl flex-shrink-0">🤖</span>
            <div className="text-[14px] text-white/60 leading-[1.65]">
              <strong className="text-white/80 font-semibold">Built with AI, supervised by a human.</strong> This website
              was designed and developed using AI tools under the supervision of a
              CS teacher &mdash; a real example of how The Sandbox approaches
              technology: use it well, understand what it produces, and take
              responsibility for the result.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy px-8 lg:px-12 py-16 text-center">
        <div className="max-w-[640px] mx-auto">
          <span className="font-mono text-[11px] font-medium tracking-[0.15em] uppercase text-teal mb-3 block">
            Ready to build something?
          </span>
          <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-normal text-white leading-[1.1] mb-4">
            What will you
            <br />
            <em className="text-orange italic">build?</em>
          </h2>
          <p className="text-[16px] text-white/55 leading-[1.7] mb-8">
            No experience needed. No homework. No pressure. Just show up with an
            idea — or let us help you find one.
          </p>
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            <a
              href="https://forms.cloud.microsoft/e/20XRHrbVef"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange text-white text-[14px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-[transform,opacity] hover:-translate-y-px hover:opacity-90"
            >
              Join the club &rarr;
            </a>
            <Link
              href="/spark"
              className="border border-white/20 text-white text-[14px] font-bold px-6 py-3 rounded-[8px] no-underline inline-flex items-center gap-1.5 transition-colors hover:border-teal hover:text-teal"
            >
              Browse projects first
            </Link>
          </div>
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              "No experience needed",
              "No homework",
              "KS3 to A Level",
            ].map((item) => (
              <span
                key={item}
                className="font-mono text-[12px] text-white/50 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
