export type Category = "games" | "web" | "ai" | "data" | "hardware" | "tools";
export type Level = "newcomer" | "beginner" | "intermediate" | "advanced";

export interface Project {
  id: number;
  featured: boolean;
  emoji: string;
  bg: string;
  cat: Category;
  level: Level;
  title: string;
  student: string;
  term: string;
  year: string;
  tech: { primary: string[]; secondary: string[] };
  techLabel: string;
  desc: string;
  highlights: string[];
}

export const CAT_COLORS: Record<Category, { tag: string; text: string }> = {
  games: { tag: "rgba(28,197,202,0.12)", text: "#0e9da3" },
  web: { tag: "rgba(18,133,164,0.12)", text: "#1285a4" },
  ai: { tag: "rgba(109,40,217,0.1)", text: "#6d28d9" },
  data: { tag: "rgba(247,121,36,0.12)", text: "#d4620f" },
  hardware: { tag: "rgba(220,38,38,0.1)", text: "#b91c1c" },
  tools: { tag: "rgba(5,150,105,0.1)", text: "#047857" },
};

export const LEVEL_COLORS: Record<Level, string> = {
  newcomer: "#16a34a",
  beginner: "#1285a4",
  intermediate: "#b45309",
  advanced: "#6d28d9",
};

const SVG_PATTERNS: Record<Category, (color: string) => string> = {
  games: (c) =>
    `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%"><circle cx="320" cy="40" r="80" fill="${c}" opacity="0.08"/><circle cx="80" cy="160" r="50" fill="${c}" opacity="0.05"/><circle cx="350" cy="160" r="35" fill="none" stroke="${c}" stroke-width="0.5" opacity="0.12"/></svg>`,
  web: (c) =>
    `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%"><line x1="0" y1="100" x2="400" y2="100" stroke="${c}" stroke-width="0.5" opacity="0.1"/><line x1="200" y1="0" x2="200" y2="200" stroke="${c}" stroke-width="0.5" opacity="0.1"/><circle cx="200" cy="100" r="70" fill="none" stroke="${c}" stroke-width="0.5" opacity="0.08"/></svg>`,
  ai: (c) =>
    `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%">${Array.from({ length: 6 }, (_, i) => `<circle cx="${50 + i * 60}" cy="70" r="4" fill="${c}" opacity="0.12"/><circle cx="${50 + i * 60}" cy="130" r="4" fill="${c}" opacity="0.09"/><line x1="${50 + i * 60}" y1="74" x2="${50 + (i + 1) * 60}" y2="126" stroke="${c}" stroke-width="0.5" opacity="0.08"/>`).join("")}</svg>`,
  data: (c) =>
    `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%"><rect x="30" y="130" width="40" height="70" fill="${c}" opacity="0.1" rx="2"/><rect x="100" y="90" width="40" height="110" fill="${c}" opacity="0.08" rx="2"/><rect x="170" y="60" width="40" height="140" fill="${c}" opacity="0.1" rx="2"/><rect x="240" y="100" width="40" height="100" fill="${c}" opacity="0.08" rx="2"/><rect x="310" y="40" width="40" height="160" fill="${c}" opacity="0.1" rx="2"/></svg>`,
  hardware: (c) =>
    `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%"><rect x="120" y="50" width="160" height="100" fill="none" stroke="${c}" stroke-width="0.5" opacity="0.15" rx="4"/><line x1="120" y1="100" x2="40" y2="100" stroke="${c}" stroke-width="1" opacity="0.1"/><line x1="280" y1="100" x2="360" y2="100" stroke="${c}" stroke-width="1" opacity="0.1"/><circle cx="200" cy="100" r="24" fill="${c}" opacity="0.06"/><circle cx="200" cy="100" r="10" fill="${c}" opacity="0.1"/></svg>`,
  tools: (c) =>
    `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%"><line x1="80" y1="20" x2="80" y2="180" stroke="${c}" stroke-width="0.5" opacity="0.1"/><line x1="160" y1="20" x2="160" y2="180" stroke="${c}" stroke-width="0.5" opacity="0.07"/><line x1="240" y1="20" x2="240" y2="180" stroke="${c}" stroke-width="0.5" opacity="0.1"/><line x1="20" y1="70" x2="380" y2="70" stroke="${c}" stroke-width="0.5" opacity="0.07"/><line x1="20" y1="130" x2="380" y2="130" stroke="${c}" stroke-width="0.5" opacity="0.1"/></svg>`,
};

export function makeSVGBg(cat: Category, color: string) {
  return SVG_PATTERNS[cat]?.(color) || "";
}

export const FILTERS = {
  categories: [
    { label: "All", value: "all" },
    { label: "Games", value: "cat-games" },
    { label: "Web", value: "cat-web" },
    { label: "AI", value: "cat-ai" },
    { label: "Data", value: "cat-data" },
    { label: "Hardware", value: "cat-hardware" },
    { label: "Tools", value: "cat-tools" },
  ],
  levels: [
    { label: "Newcomer", value: "level-newcomer" },
    { label: "Beginner", value: "level-beginner" },
    { label: "Intermediate", value: "level-intermediate" },
    { label: "Advanced", value: "level-advanced" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    featured: true,
    emoji: "🐍",
    bg: "#e6faf9",
    cat: "games",
    level: "beginner",
    title: "Snake Evolved",
    student: "Alex M. · Year 9",
    term: "Term 1",
    year: "2025/26",
    tech: { primary: ["Python", "pygame"], secondary: [] },
    techLabel: "Python · pygame",
    desc: "Started with a basic Snake clone and kept going. By session four the game had a two-player mode, procedurally generated obstacles, and a high-score board that persists between games using JSON. The two-player input handling — both players on the same keyboard simultaneously — took two full sessions to get right.",
    highlights: [
      "Two-player mode on the same keyboard — simultaneous input without conflicts",
      "Procedurally generated wall obstacles that change every round",
      "Persistent high-score board saved to a JSON file between sessions",
    ],
  },
  {
    id: 2,
    featured: false,
    emoji: "🌦️",
    bg: "#e8f3f8",
    cat: "web",
    level: "beginner",
    title: "Weather Dashboard",
    student: "Sara K. · Year 10",
    term: "Term 1",
    year: "2025/26",
    tech: {
      primary: ["JavaScript", "HTML", "CSS"],
      secondary: ["OpenWeatherMap API"],
    },
    techLabel: "JavaScript · API",
    desc: "Connected to the OpenWeatherMap API to pull live weather for any city. Added a 5-day forecast, a dark/light mode toggle that remembers your preference, and an animated weather icon that changes based on conditions. The API rate-limiting debugging took a whole session but taught her more about async JavaScript than any exercise would have.",
    highlights: [
      "Dark/light mode toggle with localStorage persistence",
      "Animated weather icons that respond to live conditions",
      "5-day forecast with hourly breakdown on click",
    ],
  },
  {
    id: 3,
    featured: false,
    emoji: "🤖",
    bg: "#f0ebff",
    cat: "ai",
    level: "intermediate",
    title: "AI Study Buddy",
    student: "Tom R. · Year 12",
    term: "Term 1",
    year: "2025/26",
    tech: {
      primary: ["Python", "Flask"],
      secondary: ["Claude API", "HTML", "CSS"],
    },
    techLabel: "Python · Claude API",
    desc: "Built for his own A Level Biology revision. Upload any notes as a PDF, the app reads them and generates quiz questions at different difficulty levels. It tracks which topics you keep getting wrong and automatically focuses future questions on your weak areas. Tom used this to revise for his actual mock exam.",
    highlights: [
      "PDF upload and text extraction — works on any subject",
      "Three difficulty levels: recall, application, and analysis",
      "Weak-topic tracking: wrong answers appear more frequently",
    ],
  },
  {
    id: 4,
    featured: false,
    emoji: "🎵",
    bg: "#fff0f8",
    cat: "web",
    level: "intermediate",
    title: "Music Visualiser",
    student: "Léa D. · Year 11",
    term: "Term 2",
    year: "2025/26",
    tech: { primary: ["JavaScript"], secondary: ["Web Audio API", "Canvas"] },
    techLabel: "JavaScript · Web Audio API",
    desc: "Uses the Web Audio API to analyse the frequency content of any music file or microphone input in real time. Three visual modes: bar chart, particle system, and waveform. The particle system was the hardest — each particle's velocity is tied to a specific frequency band, so bass hits make the lower particles explode outward.",
    highlights: [
      "Three switchable visual modes — bars, particles, waveform",
      "Works with both file upload and live microphone input",
      "Particles mapped to specific frequency bands, not just overall volume",
    ],
  },
  {
    id: 5,
    featured: false,
    emoji: "📊",
    bg: "#fff7ed",
    cat: "data",
    level: "intermediate",
    title: "Spotify Stats",
    student: "Noa V. · Year 10",
    term: "Term 2",
    year: "2025/26",
    tech: {
      primary: ["Python"],
      secondary: ["Spotify API", "matplotlib", "Flask"],
    },
    techLabel: "Python · Spotify API",
    desc: "Connected to his own Spotify account via the API and built a dashboard showing listening patterns over the past year. Top artists by month, most-played tracks at different times of day, genre distribution. The discovery: he listens to completely different music before school versus after school — a pattern he had no idea existed.",
    highlights: [
      "OAuth flow implemented from scratch — no wrapper libraries",
      "Time-of-day analysis revealing different listening personalities",
      "Genre evolution chart showing taste change month by month",
    ],
  },
  {
    id: 6,
    featured: false,
    emoji: "🚦",
    bg: "#fef2f2",
    cat: "hardware",
    level: "intermediate",
    title: "Smart Traffic Light",
    student: "Mia T. · Year 9",
    term: "Term 2",
    year: "2025/26",
    tech: {
      primary: ["Python"],
      secondary: ["Raspberry Pi", "GPIO", "Ultrasonic sensor"],
    },
    techLabel: "Python · Raspberry Pi",
    desc: "A real working traffic light on a breadboard, wired to a Raspberry Pi. Started with the basic sequence, then added a pedestrian button that interrupts the cycle, then added an ultrasonic sensor that detects how many cars are waiting and adjusts the green light duration accordingly. The adaptive timing was her own idea.",
    highlights: [
      "Pedestrian button with proper interrupt handling — no busy-waiting",
      "Ultrasonic sensor measuring queue length to adapt green phase duration",
      "Debouncing implemented after discovering the hardware noise problem",
    ],
  },
  {
    id: 7,
    featured: false,
    emoji: "🧱",
    bg: "#fff7ed",
    cat: "games",
    level: "intermediate",
    title: "Tetris",
    student: "Emil S. · Year 11",
    term: "Term 1",
    year: "2025/26",
    tech: { primary: ["Python", "pygame"], secondary: [] },
    techLabel: "Python · pygame",
    desc: "Full Tetris from scratch. The rotation logic alone — representing each piece as a matrix and rotating it correctly while checking wall and floor collisions — took three sessions. Then he added a ghost piece, a next-piece preview, escalating speed, and a proper scoring system with level multipliers. Clean code, well-commented.",
    highlights: [
      "Piece rotation using matrix transformation, not hardcoded positions",
      "Ghost piece showing where the current piece will land",
      "Escalating speed with level multipliers on line-clear scoring",
    ],
  },
  {
    id: 8,
    featured: false,
    emoji: "🔐",
    bg: "#ecfdf5",
    cat: "tools",
    level: "advanced",
    title: "Password Manager",
    student: "Yuki A. · Year 13",
    term: "Term 1",
    year: "2025/26",
    tech: {
      primary: ["Python"],
      secondary: ["cryptography lib", "SQLite", "tkinter"],
    },
    techLabel: "Python · cryptography",
    desc: "A local password manager with a master password, AES-256 encryption for stored credentials, and a Tkinter GUI. The challenge was understanding the difference between hashing the master password (bcrypt) versus encrypting stored passwords (AES), and why you need both. She wrote a one-page explanation of the cryptography as part of her project documentation.",
    highlights: [
      "Master password hashed with bcrypt — never stored in plaintext",
      "Stored credentials encrypted with AES-256 using the derived key",
      "Strong password generator with configurable length and character sets",
    ],
  },
];
