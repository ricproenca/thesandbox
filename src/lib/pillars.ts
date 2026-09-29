import type { IconName } from "@/components/Icon";

export const PILLARS: { icon: IconName; title: string; desc: string; badge?: string }[] = [
  {
    icon: "target",
    title: "Your project, your choice",
    desc: "You pick something that genuinely interests you: games, AI, hardware, the web.",
  },
  {
    icon: "zap",
    title: "Your pace, your level",
    desc: "Complete beginner or experienced coder — everyone works at their own level. No one waits for anyone else.",
  },
  {
    icon: "trophy",
    title: "Real outcomes",
    desc: "A portfolio project. Something you can show, explain, and talk about in a university interview.",
  },
  {
    icon: "graduation",
    title: "Certifications & Olympiad",
    desc: "Sit the Python or JS Institute certification. Compete in the Luxembourg Informatics Olympiad. Real credentials.",
    badge: "Academic track",
  },
];
