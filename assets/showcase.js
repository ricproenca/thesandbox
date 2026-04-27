const PROJECTS = [
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

const CAT_COLORS = {
  games: { tag: "rgba(28,197,202,0.12)", text: "#0e9da3" },
  web: { tag: "rgba(18,133,164,0.12)", text: "#1285a4" },
  ai: { tag: "rgba(109,40,217,0.1)", text: "#6d28d9" },
  data: { tag: "rgba(247,121,36,0.12)", text: "#d4620f" },
  hardware: { tag: "rgba(220,38,38,0.1)", text: "#b91c1c" },
  tools: { tag: "rgba(5,150,105,0.1)", text: "#047857" },
};

const LEVEL_COLORS = {
  newcomer: "#16a34a",
  beginner: "#1285a4",
  intermediate: "#b45309",
  advanced: "#6d28d9",
};

function makeSVGBg(cat, color) {
  const patterns = {
    games: `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%"><circle cx="320" cy="40" r="80" fill="${color}" opacity="0.08"/><circle cx="80" cy="160" r="50" fill="${color}" opacity="0.05"/><circle cx="350" cy="160" r="35" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.12"/></svg>`,
    web: `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%"><line x1="0" y1="100" x2="400" y2="100" stroke="${color}" stroke-width="0.5" opacity="0.1"/><line x1="200" y1="0" x2="200" y2="200" stroke="${color}" stroke-width="0.5" opacity="0.1"/><circle cx="200" cy="100" r="70" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.08"/></svg>`,
    ai: `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%">${Array.from({ length: 6 }, (_, i) => `<circle cx="${50 + i * 60}" cy="70" r="4" fill="${color}" opacity="0.12"/><circle cx="${50 + i * 60}" cy="130" r="4" fill="${color}" opacity="0.09"/><line x1="${50 + i * 60}" y1="74" x2="${50 + (i + 1) * 60}" y2="126" stroke="${color}" stroke-width="0.5" opacity="0.08"/>`).join("")}</svg>`,
    data: `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%"><rect x="30" y="130" width="40" height="70" fill="${color}" opacity="0.1" rx="2"/><rect x="100" y="90" width="40" height="110" fill="${color}" opacity="0.08" rx="2"/><rect x="170" y="60" width="40" height="140" fill="${color}" opacity="0.1" rx="2"/><rect x="240" y="100" width="40" height="100" fill="${color}" opacity="0.08" rx="2"/><rect x="310" y="40" width="40" height="160" fill="${color}" opacity="0.1" rx="2"/></svg>`,
    hardware: `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%"><rect x="120" y="50" width="160" height="100" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.15" rx="4"/><line x1="120" y1="100" x2="40" y2="100" stroke="${color}" stroke-width="1" opacity="0.1"/><line x1="280" y1="100" x2="360" y2="100" stroke="${color}" stroke-width="1" opacity="0.1"/><circle cx="200" cy="100" r="24" fill="${color}" opacity="0.06"/><circle cx="200" cy="100" r="10" fill="${color}" opacity="0.1"/></svg>`,
    tools: `<svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" style="position:absolute;inset:0;width:100%;height:100%"><line x1="80" y1="20" x2="80" y2="180" stroke="${color}" stroke-width="0.5" opacity="0.1"/><line x1="160" y1="20" x2="160" y2="180" stroke="${color}" stroke-width="0.5" opacity="0.07"/><line x1="240" y1="20" x2="240" y2="180" stroke="${color}" stroke-width="0.5" opacity="0.1"/><line x1="20" y1="70" x2="380" y2="70" stroke="${color}" stroke-width="0.5" opacity="0.07"/><line x1="20" y1="130" x2="380" y2="130" stroke="${color}" stroke-width="0.5" opacity="0.1"/></svg>`,
  };
  return patterns[cat] || "";
}

function renderCard(p, delay) {
  const cc = CAT_COLORS[p.cat];
  const lc = LEVEL_COLORS[p.level];
  const featured = p.featured ? "featured" : "";
  return `
  <div class="project-card ${featured}" data-id="${p.id}" data-cat="cat-${p.cat}" data-level="level-${p.level}" style="animation-delay:${delay}s">
    <div class="card-thumb" style="background:${p.bg}">
      ${makeSVGBg(p.cat, cc.text)}
      <div class="card-thumb-emoji">${p.emoji}</div>
      <div class="card-thumb-tech">${p.techLabel}</div>
    </div>
    <div class="card-body">
      ${p.featured ? `<span class="featured-badge">⭐ Featured project</span>` : ""}
      <div class="card-meta">
        <span class="card-cat" style="background:${cc.tag};color:${cc.text}">${p.cat}</span>
        <span class="card-level"><span class="level-dot" style="background:${lc}"></span>${p.level}</span>
      </div>
      <div class="card-title">${p.title}</div>
      <div class="card-student">${p.student}</div>
      <div class="card-desc">${p.desc.substring(0, 120)}…</div>
      <div class="card-tags">
        ${p.tech.primary.map((t) => `<span class="card-tag-pill" style="background:rgba(18,133,164,.08);border-color:rgba(18,133,164,.25);color:#1285a4">${t}</span>`).join("")}
        ${p.tech.secondary.map((t) => `<span class="card-tag-pill">${t}</span>`).join("")}
      </div>
    </div>
  </div>`;
}

function renderProjects(filter) {
  const container = document.getElementById("projects-container");
  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter(
          (p) => `cat-${p.cat}` === filter || `level-${p.level}` === filter,
        );

  // Group by year
  const byYear = {};
  filtered.forEach((p) => {
    if (!byYear[p.year]) byYear[p.year] = [];
    byYear[p.year].push(p);
  });

  let html = "";
  Object.entries(byYear)
    .sort((a, b) => b[0].localeCompare(a[0]))
    .forEach(([year, projects]) => {
      html += `<div class="year-section">
      <div class="year-divider">
        <div class="year-label">Year ${year}</div>
        <div class="year-line"></div>
      </div>
      <div class="projects-grid">
        ${projects.map((p, i) => renderCard(p, i * 0.06)).join("")}
      </div>
    </div>`;
    });

  if (!html) {
    html = `<div style="text-align:center;padding:64px 24px;color:var(--muted);font-size:15px">No projects match that filter yet.</div>`;
  }

  container.innerHTML = html;

  // Update stats
  const unique_students = new Set(PROJECTS.map((p) => p.student)).size;
  const unique_cats = new Set(PROJECTS.map((p) => p.cat)).size;
  animateCount("stat-projects", PROJECTS.length);
  animateCount("stat-students", unique_students);
  animateCount("stat-categories", unique_cats);

  // Attach click handlers
  container.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = parseInt(card.dataset.id);
      openModal(PROJECTS.find((p) => p.id === id));
    });
  });
}

function animateCount(id, target) {
  const el = document.getElementById(id);
  let current = 0;
  const step = Math.ceil(target / 20);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(timer);
  }, 40);
}

function openModal(p) {
  const cc = CAT_COLORS[p.cat];
  const lc = LEVEL_COLORS[p.level];
  document.getElementById("modal-thumb").style.background = p.bg;
  document.getElementById("modal-thumb").innerHTML = `
    <button class="modal-close" id="modal-close">✕</button>
    ${makeSVGBg(p.cat, cc.text)}
    <div class="modal-thumb-emoji">${p.emoji}</div>`;
  document.getElementById("modal-eyebrow").textContent =
    `${p.cat} · ${p.level} · ${p.term} ${p.year}`;
  document.getElementById("modal-eyebrow").style.color = cc.text;
  document.getElementById("modal-title").textContent = p.title;
  document.getElementById("modal-student").textContent = p.student;
  document.getElementById("modal-desc").textContent = p.desc;
  document.getElementById("modal-highlights").innerHTML = p.highlights
    .map((h) => `<li>${h}</li>`)
    .join("");
  document.getElementById("modal-stack").innerHTML = [
    ...p.tech.primary.map((t) => `<span class="stack-pill">${t}</span>`),
    ...p.tech.secondary.map(
      (t) => `<span class="stack-pill secondary">${t}</span>`,
    ),
  ].join("");
  document.getElementById("modal-overlay").classList.add("open");
  document.getElementById("modal-close").addEventListener("click", closeModal);
  document.getElementById("modal-overlay").addEventListener("click", (e) => {
    if (e.target === document.getElementById("modal-overlay")) closeModal();
  });
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

document.querySelectorAll(".f-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".f-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

renderProjects("all");
