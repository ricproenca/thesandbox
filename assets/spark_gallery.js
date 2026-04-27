const PROJECTS = [
  // ── NEWCOMER ──────────────────────────────────────────────
  {
    id: 101,
    cat: "tools",
    level: "newcomer",
    emoji: "👋",
    color: "#16a34a",
    bg: "#e8f8ef",
    title: "Hello, World — but make it yours",
    short: "Your very first program. Three lines. One win. Then you own it.",
    desc: "Open Python, type three lines, run it. The computer says something back. That moment — the computer doing what YOU told it — is the whole point. Once it works, change it. Make it greet your name, your friends, your dog.",
    hooks: ["print()", "Variables", "Running code", "First win"],
    tech: {
      primary: ["Python"],
      secondary: ["Trinket.io (no install)"],
      alts: [],
    },
    questions: [
      "What would you want the computer to say to you when you open it every morning?",
      "What if it said something different depending on what time of day it was?",
      "Could you make it ask for your name and then greet you personally?",
    ],
  },
  {
    id: 102,
    cat: "games",
    level: "newcomer",
    emoji: "🎲",
    color: "#16a34a",
    bg: "#e8f8ef",
    title: "Number Guessing Game",
    short:
      "The computer picks a number. You guess it. It tells you if you're hot or cold.",
    desc: "The computer picks a random number between 1 and 100. You type guesses. It tells you 'too high', 'too low', or 'you got it!' Count how many guesses it takes. This is a full, working game — and you'll build it in one session.",
    hooks: ["Random numbers", "While loops", "If/else", "User input"],
    tech: { primary: ["Python"], secondary: ["Trinket.io / IDLE"], alts: [] },
    questions: [
      "What if it tracked your best score across multiple rounds?",
      "Could you make it harder by giving fewer hints — just 'warm' or 'cold' instead of 'higher/lower'?",
      "What if two players took turns guessing against each other?",
    ],
  },
  {
    id: 103,
    cat: "web",
    level: "newcomer",
    emoji: "🎨",
    color: "#16a34a",
    bg: "#e8f8ef",
    title: "My First Webpage",
    short:
      "A real webpage — your name, a photo, something you love. In a browser. Today.",
    desc: "Open a text file, type some HTML, open it in a browser. Your name appears on screen. Add a picture, change the colour, write something about yourself. No frameworks, no tools — just you and a text editor making something real.",
    hooks: ["HTML tags", "CSS colour", "Text editor", "Browser"],
    tech: {
      primary: ["HTML", "CSS"],
      secondary: ["Any text editor"],
      alts: [],
    },
    questions: [
      "If you could make a page about anything — any topic, any hobby — what would it be?",
      "What colour would your page be, and what font would feel like you?",
      "What's one thing about yourself you'd want a stranger to know?",
    ],
  },
  {
    id: 104,
    cat: "tools",
    level: "newcomer",
    emoji: "🧮",
    color: "#16a34a",
    bg: "#e8f8ef",
    title: "Personal Calculator",
    short: "Build a calculator that solves problems you actually have.",
    desc: "Not a generic calculator. Build one that solves something specific to you — a BMI calculator, a grade average tool, a currency converter for your last holiday. You ask the user for numbers, do the maths, print the answer.",
    hooks: ["Input", "Arithmetic", "Variables", "print()"],
    tech: {
      primary: ["Python"],
      secondary: ["Trinket.io / IDLE"],
      alts: [{ primary: ["JavaScript"], secondary: ["Browser console"] }],
    },
    questions: [
      "What calculation do you do on your phone all the time that you could automate?",
      "What if it showed the working-out as well as the answer?",
      "Could you make it handle wrong input gracefully — like if someone types a word instead of a number?",
    ],
  },
  {
    id: 105,
    cat: "games",
    level: "newcomer",
    emoji: "✂️",
    color: "#16a34a",
    bg: "#e8f8ef",
    title: "Rock Paper Scissors",
    short:
      "Play against the computer. It never cheats — you can read the code to prove it.",
    desc: "The computer randomly picks rock, paper, or scissors. You type yours. The program figures out who won. It's the first time you'll write code that makes a decision — and the first time you'll feel like the program is alive.",
    hooks: ["Random choice", "If/elif/else", "Comparison", "Loops"],
    tech: {
      primary: ["Python"],
      secondary: ["Trinket.io / IDLE"],
      alts: [
        { primary: ["JavaScript"], secondary: ["Browser console / HTML"] },
      ],
    },
    questions: [
      "What if it kept score across 10 rounds — who wins the series?",
      "Could you add a fourth option — like 'lizard' or 'dynamite'?",
      "What if the computer could cheat sometimes, and you had to find the bug?",
    ],
  },
  {
    id: 106,
    cat: "games",
    level: "newcomer",
    emoji: "🌀",
    color: "#16a34a",
    bg: "#e8f8ef",
    title: "Turtle Spirals",
    short:
      "Draw hypnotic patterns with ten lines of code. The computer becomes a pen.",
    desc: "Python's turtle library lets you control a virtual drawing pen. Tell it to move forward, turn a little, move forward again — and watch spirals, stars, and geometric patterns appear on screen. It's the most visual first project there is, and it teaches loops through something you can actually see happening.",
    hooks: ["turtle library", "Loops", "Angles", "Drawing"],
    tech: {
      primary: ["Python"],
      secondary: ["turtle (built-in, no install)"],
      alts: [],
    },
    questions: [
      "What shape would you want to draw first — a spiral, a star, a flower, a maze?",
      "What if you changed the colour of the line every few steps — could you make a rainbow spiral?",
      "Could you make the pattern respond to keyboard input so you control the shape as it draws?",
    ],
  },
  {
    id: 107,
    cat: "games",
    level: "newcomer",
    emoji: "⭕",
    color: "#16a34a",
    bg: "#e8f8ef",
    title: "Tic-Tac-Toe",
    short:
      "Build noughts and crosses — then make the computer play against you.",
    desc: "Two players take turns marking X or O on a 3x3 grid. You handle user input, check for a winner after every move, and print the board between turns. Once it works, try adding a simple AI opponent that blocks your winning moves.",
    hooks: ["2D lists", "Win conditions", "User input", "Game logic"],
    tech: {
      primary: ["Python"],
      secondary: ["IDLE / Trinket"],
      alts: [
        { primary: ["JavaScript", "HTML", "CSS"], secondary: ["Browser"] },
      ],
    },
    questions: [
      "How do you check all eight winning combinations — rows, columns, and both diagonals?",
      "What if the computer played back — could you teach it to at least never lose?",
      "Could you extend it to a 4x4 grid, or a version where you need four in a row?",
    ],
  },
  {
    id: 108,
    cat: "games",
    level: "newcomer",
    emoji: "🪢",
    color: "#16a34a",
    bg: "#e8f8ef",
    title: "Hangman",
    short: "Guess the word letter by letter before the hangman is complete.",
    desc: "Pick a random word from a list, let the player guess letters one at a time, track wrong guesses, and reveal the hidden word with blanks filling in as they guess correctly. Great for learning string manipulation and lists.",
    hooks: ["Strings", "Lists", "Random", "Game state"],
    tech: { primary: ["Python"], secondary: ["IDLE / Trinket"], alts: [] },
    questions: [
      "How would you store your word list — typed in code, loaded from a file, or fetched from an API?",
      "What if you showed a drawing that gets more complete with each wrong guess?",
      "Could you add categories — animals, countries, films — and let the player choose a theme?",
    ],
  },
  // ── BEGINNER ──────────────────────────────────────────────
  {
    id: 1,
    cat: "web",
    level: "beginner",
    emoji: "🌦️",
    color: "#6bb5ff",
    bg: "#e8f3f8",
    title: "Weather Dashboard",
    short: "Fetch live weather for any city and display it beautifully.",
    desc: "Connect to a free weather API, let the user type any city, and display temperature, conditions, and a 5-day forecast. Style it so it feels like a real app.",
    hooks: ["APIs", "JSON", "CSS design", "User input"],
    tech: {
      primary: ["JavaScript", "HTML", "CSS"],
      secondary: ["OpenWeatherMap API"],
      alts: [
        { primary: ["Python"], secondary: ["Flask", "OpenWeatherMap API"] },
      ],
    },
    questions: [
      "What city would you check first — and would you show it differently at night vs daytime?",
      "What if it warned you before bad weather hit your school?",
      "Could it show weather for multiple cities at once — like a travel dashboard?",
    ],
  },
  {
    id: 2,
    cat: "games",
    level: "beginner",
    emoji: "🐍",
    color: "#6bffe0",
    bg: "#e6faf9",
    title: "Snake Game",
    short: "Build the classic game from scratch. Then make it yours.",
    desc: "Recreate Snake using Python's turtle library or JavaScript canvas. Once it works, add something that makes it uniquely yours — obstacles, a two-player mode, a dark theme, sound effects.",
    hooks: [
      "Game loops",
      "Keyboard events",
      "Collision detection",
      "Score tracking",
    ],
    tech: {
      primary: ["Python"],
      secondary: ["turtle / pygame"],
      alts: [{ primary: ["JavaScript"], secondary: ["HTML Canvas"] }],
    },
    questions: [
      "What would make your version of Snake different from every other Snake game?",
      "What if the snake got faster the longer it got — how would that change the difficulty curve?",
      "Could you add a leaderboard that saves high scores?",
    ],
  },
  {
    id: 201,
    cat: "games",
    level: "beginner",
    emoji: "🏓",
    color: "#6bffe0",
    bg: "#e6faf9",
    title: "Pong",
    short: "Two paddles. One ball. Build the game that started it all.",
    desc: "Each player controls a paddle to hit a ball back and forth. You'll handle keyboard input for two players simultaneously, detect collisions between the ball and paddles, and implement basic physics — speed and angle. It's a complete two-player game in under 100 lines.",
    hooks: [
      "Pygame",
      "Collision detection",
      "Two-player input",
      "Basic physics",
    ],
    tech: { primary: ["Python"], secondary: ["pygame"], alts: [] },
    questions: [
      "What should happen when the ball hits the edge of the paddle — should the angle change based on where it hits?",
      "Could you add a score display and a win condition — first to 10 points wins?",
      "What if the ball got faster every time it was hit — how would that change the game?",
    ],
  },
  {
    id: 202,
    cat: "games",
    level: "beginner",
    emoji: "💣",
    color: "#ff6bca",
    bg: "#2a0d20",
    title: "PhotoBomb",
    short: "Bomb photos with stickers as fast and accurately as you can.",
    desc: "An interactive game where you drop stickers onto photos as quickly and accurately as possible. You'll work with images, detect where the player clicks, score based on accuracy and speed, and build a satisfying loop of challenge and reward.",
    hooks: ["pygame", "Mouse events", "Image handling", "Scoring"],
    tech: { primary: ["Python"], secondary: ["pygame"], alts: [] },
    questions: [
      "What stickers would you use — and would different stickers score differently?",
      "How do you make the targets harder to hit as the game progresses — smaller, faster, or more of them?",
      "Could you add a timer and a leaderboard so players can compete for the highest score?",
    ],
  },
  {
    id: 6,
    cat: "tools",
    level: "beginner",
    emoji: "✅",
    color: "#6bffe0",
    bg: "#e6faf9",
    title: "Personal Productivity App",
    short: "Build the todo app you actually want to use.",
    desc: "Not another generic todo list. Build the task manager that solves your actual problem — maybe it has priorities, deadlines, subjects, or a focus mode that hides everything but today's tasks. Make it for you.",
    hooks: ["File storage", "GUI / Web UI", "Data persistence", "UX thinking"],
    tech: {
      primary: ["Python"],
      secondary: ["tkinter", "JSON"],
      alts: [
        { primary: ["JavaScript", "HTML", "CSS"], secondary: ["localStorage"] },
        { primary: ["Python"], secondary: ["Flask"] },
      ],
    },
    questions: [
      "What does your ideal task manager look like — what does every other one get wrong?",
      "What if it sent you a summary of what you need to do each morning?",
      "Could it track how long tasks actually take versus how long you thought they'd take?",
    ],
  },
  {
    id: 10,
    cat: "web",
    level: "beginner",
    emoji: "🔗",
    color: "#6bb5ff",
    bg: "#e8f3f8",
    title: "Personal Portfolio Site",
    short: "Build your own corner of the internet. Make it unforgettable.",
    desc: "Not a template. Your own HTML, CSS, and a little JavaScript. A place that shows who you are, what you've built, and what you care about. This becomes the first thing you send to universities.",
    hooks: [
      "HTML / CSS",
      "Responsive design",
      "Personal branding",
      "Deployment",
    ],
    tech: {
      primary: ["HTML", "CSS", "JavaScript"],
      secondary: ["GitHub Pages"],
      alts: [],
    },
    questions: [
      "If someone landed on your site for 10 seconds, what's the one thing you'd want them to remember?",
      "What would make your portfolio look nothing like every other student's portfolio?",
      "Could you add a dark mode toggle or an animated element that makes it feel alive?",
    ],
  },
  {
    id: 12,
    cat: "data",
    level: "beginner",
    emoji: "📈",
    color: "#6bffe0",
    bg: "#e6faf9",
    title: "Spotify Stats Dashboard",
    short:
      "Visualise your own listening habits — what does your music say about you?",
    desc: "Connect to the Spotify API with your own account. Pull your top artists, tracks, listening time by hour, genre breakdowns. Build visualisations that reveal patterns you never noticed.",
    hooks: ["OAuth", "REST APIs", "Data viz", "Personal data"],
    tech: {
      primary: ["Python"],
      secondary: ["Spotify API", "matplotlib"],
      alts: [
        { primary: ["JavaScript"], secondary: ["Spotify API", "Chart.js"] },
      ],
    },
    questions: [
      "What pattern in your listening habits do you think would surprise you most?",
      "What time of day do you think you listen most — and does it match your mood?",
      "Could you compare your stats with a friend's and find what you have in common?",
    ],
  },
  {
    id: 13,
    cat: "games",
    level: "beginner",
    emoji: "🃏",
    color: "#ff6bca",
    bg: "#2a0d20",
    title: "Flashcard Quiz App",
    short: "Build a quiz app for any subject — then use it to revise.",
    desc: "Load questions from a text file or type them in. The program picks questions randomly, checks your answer, tracks your score, and tells you which ones you got wrong. Build it once, use it for every exam.",
    hooks: ["File reading", "Lists", "Random", "Score tracking"],
    tech: {
      primary: ["Python"],
      secondary: ["JSON / text files", "IDLE"],
      alts: [
        { primary: ["JavaScript", "HTML", "CSS"], secondary: ["localStorage"] },
      ],
    },
    questions: [
      "Which subject would you build this for first — and what would make it actually useful for revision?",
      "What if it showed you wrong answers more often than correct ones?",
      "Could you export your results to see how you've improved over time?",
    ],
  },
  {
    id: 14,
    cat: "tools",
    level: "beginner",
    emoji: "💬",
    color: "#ffb86b",
    bg: "#fff7ed",
    title: "Chatbot for Your School Club",
    short:
      "A simple chatbot that answers questions about something you care about.",
    desc: "Build a rule-based chatbot that answers questions about a topic you know well — your favourite game, your school club, a subject you love. No AI needed: just smart if/else logic and a good set of responses.",
    hooks: ["String matching", "Dictionaries", "User input", "Logic flow"],
    tech: {
      primary: ["Python"],
      secondary: ["Dictionary / JSON"],
      alts: [
        { primary: ["JavaScript", "HTML"], secondary: ["JSON responses"] },
      ],
    },
    questions: [
      "What topic do you know well enough that you could write the answers yourself?",
      "What are the five questions people always ask about it?",
      "What should it say when it doesn't understand a question?",
    ],
  },
  // ── INTERMEDIATE ──────────────────────────────────────────
  {
    id: 3,
    cat: "ai",
    level: "intermediate",
    emoji: "🤖",
    color: "#b06bff",
    bg: "#f0ebff",
    title: "AI Study Buddy",
    short: "A chatbot that quizzes you on any subject you upload.",
    desc: "Upload your notes or a textbook chapter. The app reads it and generates quiz questions, explains concepts, and tests your knowledge. Uses an AI API behind the scenes.",
    hooks: ["LLM APIs", "File handling", "Prompt engineering", "UI design"],
    tech: {
      primary: ["Python"],
      secondary: ["Claude API / OpenAI API", "Flask"],
      alts: [
        {
          primary: ["JavaScript", "HTML", "CSS"],
          secondary: ["Claude API / OpenAI API"],
        },
      ],
    },
    questions: [
      "What subject would you build this for first — and what kind of questions would actually help you revise?",
      "What if it tracked which topics you kept getting wrong and focused on those?",
      "Could it generate flashcards as well as questions?",
    ],
  },
  {
    id: 4,
    cat: "data",
    level: "intermediate",
    emoji: "📊",
    color: "#ffb86b",
    bg: "#fff7ed",
    title: "School Timetable Analyser",
    short: "Turn a messy CSV timetable into a visual, searchable tool.",
    desc: "Take a real data file — a timetable, a results spreadsheet, a survey export — and build a tool that makes it beautiful and useful. Filter by teacher, room, class. Show patterns nobody noticed before.",
    hooks: ["CSV parsing", "Data visualisation", "pandas", "Filtering"],
    tech: {
      primary: ["Python"],
      secondary: ["pandas", "matplotlib / Plotly", "CSV files"],
      alts: [],
    },
    questions: [
      "What data does your school have that nobody's actually visualised properly?",
      "What pattern in the data would surprise teachers if they saw it?",
      "Could it detect timetable clashes automatically?",
    ],
  },
  {
    id: 5,
    cat: "hardware",
    level: "intermediate",
    emoji: "🚦",
    color: "#ff6b6b",
    bg: "#fef2f2",
    title: "Smart Traffic Light",
    short: "A real working traffic light on a breadboard, with logic.",
    desc: "Wire up LEDs to a Raspberry Pi or Arduino to simulate a traffic light sequence. Then make it smart — add a button for pedestrians, a sensor that changes the timing, or a display showing the countdown.",
    hooks: ["GPIO pins", "Physical circuits", "Timing logic", "Sensors"],
    tech: {
      primary: ["Python"],
      secondary: ["Raspberry Pi", "GPIO library"],
      alts: [],
    },
    questions: [
      "What would make your traffic light smarter than a normal one — what data would it use?",
      "Could you add a pedestrian button that actually changes the timing?",
      "What if multiple traffic lights had to coordinate with each other?",
    ],
  },
  {
    id: 7,
    cat: "web",
    level: "intermediate",
    emoji: "🎵",
    color: "#ff6bca",
    bg: "#2a0d20",
    title: "Music Visualiser",
    short: "Make music you can see — shapes that react to sound in real time.",
    desc: "Use the Web Audio API to analyse music and drive animations on a canvas. Bars, particles, waves, circles — the visuals should feel like the music. Connect it to the microphone or a file upload.",
    hooks: [
      "Web Audio API",
      "Canvas animation",
      "Frequency analysis",
      "Real-time",
    ],
    tech: {
      primary: ["JavaScript"],
      secondary: ["Web Audio API", "HTML Canvas", "CSS"],
      alts: [],
    },
    questions: [
      "What would your visualiser look like for a slow song versus a fast one — should they feel completely different?",
      "What if it reacted to the bass differently from the treble?",
      "Could users change the visual style — bars, waves, particles — with a click?",
    ],
  },
  {
    id: 15,
    cat: "web",
    level: "intermediate",
    emoji: "📰",
    color: "#6bb5ff",
    bg: "#e8f3f8",
    title: "News Aggregator",
    short:
      "Pull headlines from multiple sources and build your own front page.",
    desc: "Use news APIs to fetch headlines by topic, filter out sources you don't trust, and display them in a clean feed. Add a search bar, topic filters, and a save for later feature. Build the news experience you actually want.",
    hooks: ["REST APIs", "JSON parsing", "DOM manipulation", "localStorage"],
    tech: {
      primary: ["JavaScript", "HTML", "CSS"],
      secondary: ["NewsAPI", "localStorage"],
      alts: [
        { primary: ["Python"], secondary: ["Flask", "NewsAPI", "SQLite"] },
      ],
    },
    questions: [
      "What topics would your ideal news feed cover — and what would it block?",
      "What if it showed you the same story from three different sources side by side?",
      "Could it alert you when a topic you care about breaks as a story?",
    ],
  },
  {
    id: 16,
    cat: "hardware",
    level: "intermediate",
    emoji: "🌡️",
    color: "#ff6b6b",
    bg: "#fef2f2",
    title: "Room Environment Monitor",
    short:
      "Track temperature, humidity, and light in your room. Log it. Graph it.",
    desc: "Connect sensors to a Raspberry Pi or Arduino. Log readings to a file every few minutes. Build a live dashboard that shows current conditions and plots how they've changed over time. Your bedroom becomes a data source.",
    hooks: ["Sensors", "Data logging", "Time series", "Live dashboard"],
    tech: {
      primary: ["Python"],
      secondary: ["Raspberry Pi", "DHT22 sensor", "matplotlib"],
      alts: [],
    },
    questions: [
      "What would you actually want to know about your environment — temperature, noise, light levels?",
      "What time of day is your room coldest — and does it match when you feel least productive?",
      "Could it send you an alert when conditions are outside a comfortable range?",
    ],
  },
  {
    id: 17,
    cat: "tools",
    level: "intermediate",
    emoji: "📝",
    color: "#6bffe0",
    bg: "#e6faf9",
    title: "Markdown Note-Taking App",
    short:
      "A distraction-free writing app that renders Markdown live as you type.",
    desc: "Build a two-pane editor: you write Markdown on the left, it renders as formatted HTML on the right in real time. Add tags, search, and file saving. It becomes the writing tool you actually use.",
    hooks: ["Markdown parsing", "Real-time rendering", "File system", "Search"],
    tech: {
      primary: ["JavaScript", "HTML", "CSS"],
      secondary: ["marked.js", "File API"],
      alts: [
        { primary: ["Python"], secondary: ["tkinter", "markdown library"] },
      ],
    },
    questions: [
      "What does your ideal note-taking app do that Notion and Google Docs get wrong?",
      "What if it automatically linked notes that mentioned the same topic?",
      "Could it export a polished PDF of any note with one click?",
    ],
  },
  {
    id: 18,
    cat: "data",
    level: "intermediate",
    emoji: "🏃",
    color: "#ffb86b",
    bg: "#fff7ed",
    title: "Personal Fitness Tracker",
    short:
      "Log your own data. See your own patterns. Build the dashboard you want.",
    desc: "Log workouts, runs, or any activity you track. Store it in a local file or database. Build charts that show distance over time, personal bests, rest day frequency. Your data, your analysis, your insights.",
    hooks: ["Data entry", "SQLite / CSV", "Charts", "Date handling"],
    tech: {
      primary: ["Python"],
      secondary: ["SQLite", "matplotlib / Plotly", "tkinter"],
      alts: [
        {
          primary: ["JavaScript", "HTML", "CSS"],
          secondary: ["Chart.js", "localStorage"],
        },
      ],
    },
    questions: [
      "What do you actually track — steps, sleep, workouts, something else?",
      "What pattern in your data do you think would surprise you?",
      "Could it predict when you're likely to skip a workout based on past patterns?",
    ],
  },
  {
    id: 301,
    cat: "games",
    level: "intermediate",
    emoji: "👾",
    color: "#b06bff",
    bg: "#f0ebff",
    title: "Space Invaders",
    short:
      "Recreate the arcade classic — sprites, waves of enemies, and escalating chaos.",
    desc: "Build a scrolling shooter where waves of alien sprites descend towards your ship. You'll handle sprite animation, bullet collision with multiple objects, enemy movement patterns, and escalating difficulty as levels progress. A complete lesson in managing many game objects simultaneously.",
    hooks: [
      "Sprite groups",
      "Collision detection",
      "Animation",
      "Game difficulty",
    ],
    tech: { primary: ["Python"], secondary: ["pygame"], alts: [] },
    questions: [
      "How do you make the enemies move — do they all shift together, or does each one move independently?",
      "What happens when an enemy reaches the bottom — is that an instant loss, or does it cost a life?",
      "Could you add power-ups that drop from destroyed enemies, like a spread shot or a shield?",
    ],
  },
  {
    id: 302,
    cat: "games",
    level: "intermediate",
    emoji: "🧱",
    color: "#ffb86b",
    bg: "#fff7ed",
    title: "Tetris",
    short:
      "Recreate the most iconic puzzle game ever made — and understand why it's tricky.",
    desc: "Build Tetris from scratch using pygame. The challenge is grid-based piece movement, rotation logic, line clearing, and the falling speed increasing over time. Every piece of classic Tetris logic is a real computer science problem — representing shapes as matrices, rotating them, and detecting when rows are complete.",
    hooks: ["Grid systems", "Piece rotation", "Matrix logic", "Game loop"],
    tech: { primary: ["Python"], secondary: ["pygame"], alts: [] },
    questions: [
      "How do you represent a Tetris piece — a list of coordinates, a 2D matrix, or something else?",
      "What does rotation actually mean mathematically — how do you rotate a matrix 90 degrees?",
      "Could you add a ghost piece that shows where the current piece will land?",
    ],
  },
  {
    id: 303,
    cat: "games",
    level: "intermediate",
    emoji: "🏀",
    color: "#ff6b6b",
    bg: "#fef2f2",
    title: "Hoops — Basketball on Other Planets",
    short:
      "Shoot hoops on the Moon, Mars, and Jupiter. Physics changes everything.",
    desc: "A basketball shooting game where the gravitational constant changes depending on which celestial body you are on. The Moon means long, floaty arcs. Jupiter means the ball drops fast and hard. You will implement projectile motion, angle and power controls, and watch how physics shapes gameplay.",
    hooks: ["Projectile motion", "pygame", "Math / physics", "Game design"],
    tech: {
      primary: ["Python"],
      secondary: ["pygame", "math library"],
      alts: [],
    },
    questions: [
      "How does gravity affect the trajectory equation — what changes when you halve or double it?",
      "Could you let players aim with the mouse and set power with a click-hold mechanic?",
      "What if the basket moved, or the court had obstacles that the ball had to avoid?",
    ],
  },
  {
    id: 304,
    cat: "games",
    level: "intermediate",
    emoji: "🔢",
    color: "#6bb5ff",
    bg: "#e8f3f8",
    title: "Sudoku Solver",
    short:
      "Build a program that can solve any Sudoku — then visualise it solving step by step.",
    desc: "Implement a backtracking algorithm that fills in a Sudoku grid by trying values, detecting conflicts, and backtracking when stuck. The interesting part is not just making it work — it is visualising the solver as it runs, so you can watch it think. Then try to make it faster with constraint propagation.",
    hooks: ["Backtracking", "Recursion", "2D grids", "Algorithm visualisation"],
    tech: { primary: ["Python"], secondary: ["pygame", "numpy"], alts: [] },
    questions: [
      "What is backtracking — can you explain it without using the word recursion?",
      "How do you check if placing a number is valid — rows, columns, and 3x3 boxes all at once?",
      "Could you load a Sudoku from an image using OCR, then solve and display it?",
    ],
  },
  // ── ADVANCED ──────────────────────────────────────────────
  {
    id: 8,
    cat: "ai",
    level: "advanced",
    emoji: "🧠",
    color: "#b06bff",
    bg: "#f0ebff",
    title: "Image Classifier",
    short: "Train a model to recognise something only you would think of.",
    desc: "Use a pre-trained model and fine-tune it on your own dataset. Classify hand gestures, types of food in the canteen, your own drawings. The interesting part is not the model — it's the problem you choose to solve.",
    hooks: [
      "Machine learning",
      "Transfer learning",
      "Python",
      "Data collection",
    ],
    tech: {
      primary: ["Python"],
      secondary: ["TensorFlow / PyTorch", "OpenCV", "Teachable Machine"],
      alts: [],
    },
    questions: [
      "What would you actually want a computer to be able to recognise — what problem does that solve?",
      "Where would you get training data — and how many photos do you think you'd need?",
      "What would a wrong answer look like, and how bad would that be?",
    ],
  },
  {
    id: 9,
    cat: "games",
    level: "advanced",
    emoji: "🗺️",
    color: "#ffb86b",
    bg: "#fff7ed",
    title: "Procedural Map Generator",
    short: "Generate infinite unique worlds with code.",
    desc: "Use algorithms to generate terrain, dungeons, or city layouts. Implement noise functions, cellular automata, or L-systems. Every run produces a unique map. Build the display, the generator, and the rules that make it feel alive.",
    hooks: ["Algorithms", "Randomness", "Grid systems", "Visualisation"],
    tech: {
      primary: ["Python"],
      secondary: ["pygame", "noise library"],
      alts: [
        {
          primary: ["JavaScript"],
          secondary: ["HTML Canvas", "simplex-noise"],
        },
      ],
    },
    questions: [
      "What kind of world would your generator make — a fantasy map, a city, a dungeon, a planet?",
      "What's the one rule that would make your world feel believable rather than random?",
      "Could you add a seed so players can share their favourite maps?",
    ],
  },
  {
    id: 11,
    cat: "tools",
    level: "advanced",
    emoji: "🔐",
    color: "#ff6b6b",
    bg: "#fef2f2",
    title: "Password Manager",
    short: "Build secure credential storage — and understand why it's hard.",
    desc: "Design and build a local password manager. Implement encryption, a master password, and a clean interface. The challenge is doing it properly — understanding what makes it secure and what would make it vulnerable.",
    hooks: ["Cryptography", "Hashing", "File encryption", "Security thinking"],
    tech: {
      primary: ["Python"],
      secondary: ["cryptography library", "SQLite", "tkinter"],
      alts: [],
    },
    questions: [
      "What's the difference between encrypting a password and hashing it — and which does a password manager actually need?",
      "What happens if someone gets the file your manager saves — what would they be able to see?",
      "Could it generate strong passwords as well as store them?",
    ],
  },
  {
    id: 19,
    cat: "web",
    level: "advanced",
    emoji: "🤝",
    color: "#6bb5ff",
    bg: "#e8f3f8",
    title: "Real-Time Collaborative Tool",
    short:
      "Two people editing the same thing at the same time. Harder than it sounds.",
    desc: "Build a shared whiteboard, collaborative text editor, or multiplayer quiz using WebSockets. The hard part is keeping both clients in sync when they change things simultaneously. You'll understand why Google Docs is impressive.",
    hooks: ["WebSockets", "Node.js", "Conflict resolution", "State sync"],
    tech: {
      primary: ["JavaScript"],
      secondary: ["Node.js", "Socket.io", "HTML Canvas"],
      alts: [
        {
          primary: ["Python"],
          secondary: ["Flask-SocketIO", "JavaScript frontend"],
        },
      ],
    },
    questions: [
      "What would you build that's genuinely more useful with two people than one?",
      "What happens when both users edit the same thing at the exact same millisecond?",
      "Could you show each user's cursor so they can see where the other person is?",
    ],
  },
  {
    id: 20,
    cat: "ai",
    level: "advanced",
    emoji: "🗣️",
    color: "#b06bff",
    bg: "#f0ebff",
    title: "Voice-Controlled Assistant",
    short:
      "Talk to your computer. It does things. Build the pipeline yourself.",
    desc: "Connect speech recognition to a command processor to an action layer. Say open my notes, set a timer, what is the weather. Build the whole pipeline: audio input to text to intent to action to response. Understand every step.",
    hooks: ["Speech recognition", "NLP / intent parsing", "APIs", "Audio"],
    tech: {
      primary: ["Python"],
      secondary: ["SpeechRecognition", "pyttsx3", "APIs"],
      alts: [],
    },
    questions: [
      "What three things would you tell your assistant to do the most?",
      "How do you handle a command it does not understand — and how does it recover gracefully?",
      "Could it learn new commands you teach it during a conversation?",
    ],
  },
  {
    id: 21,
    cat: "data",
    level: "advanced",
    emoji: "📡",
    color: "#ffb86b",
    bg: "#fff7ed",
    title: "Live Data Pipeline",
    short: "Collect, clean, store, and visualise streaming data — end to end.",
    desc: "Build a pipeline that pulls data from a live source — social media, financial APIs, IoT sensors — cleans it, stores it in a database, and surfaces it in a live dashboard. This is how real data engineering works.",
    hooks: ["APIs", "Data cleaning", "SQLite / PostgreSQL", "Streaming"],
    tech: {
      primary: ["Python"],
      secondary: ["requests / websockets", "SQLite", "Plotly Dash"],
      alts: [],
    },
    questions: [
      "What data source would produce the most interesting live stream for you?",
      "What does dirty data look like in your chosen source — and how do you handle it?",
      "What insight would you want the dashboard to surface that the raw data hides?",
    ],
  },
  {
    id: 22,
    cat: "hardware",
    level: "advanced",
    emoji: "🤖",
    color: "#ff6b6b",
    bg: "#fef2f2",
    title: "Line-Following Robot",
    short: "Build a robot that navigates by itself using sensors and logic.",
    desc: "Wire up IR sensors to detect a line on the floor. Write the control logic to keep the robot on track. Then make it smarter — handle corners, junctions, and obstacles. You're writing firmware, not just scripts.",
    hooks: ["Motor control", "IR sensors", "PID control", "Real-time logic"],
    tech: {
      primary: ["Python"],
      secondary: ["Arduino IDE", "IR sensors", "Motor driver"],
      alts: [],
    },
    questions: [
      "What's the hardest part of keeping the robot on the line — sharp corners, speed, or signal noise?",
      "How do you make the steering smooth instead of just left/right toggling?",
      "Could it map the route it took and replay it from memory?",
    ],
  },
  {
    id: 23,
    cat: "tools",
    level: "advanced",
    emoji: "⚙️",
    color: "#6bffe0",
    bg: "#e6faf9",
    title: "Personal API",
    short:
      "Build your own REST API that other apps — and your own projects — can query.",
    desc: "Design and deploy a REST API for something you care about: your own habit data, a private wiki, a personal finance tracker. Build the endpoints, the auth, the data models. Then consume it from a frontend you also build.",
    hooks: ["REST design", "Authentication", "Database", "Deployment"],
    tech: {
      primary: ["Python"],
      secondary: ["Flask / FastAPI", "SQLite", "JWT auth"],
      alts: [
        {
          primary: ["JavaScript"],
          secondary: ["Node.js / Express", "SQLite", "JWT auth"],
        },
      ],
    },
    questions: [
      "What data about your own life would be useful to query programmatically?",
      "What does good API design look like — what makes an endpoint obvious to use?",
      "Could another one of your projects consume this API as a data source?",
    ],
  },
  {
    id: 401,
    cat: "games",
    level: "advanced",
    emoji: "🌿",
    color: "#ffb86b",
    bg: "#fff7ed",
    title: "Maze Generator",
    short:
      "Build an algorithm that creates a perfect, solvable maze from a blank grid.",
    desc: "Use recursive backtracking to carve passages through a grid, guaranteeing exactly one path between any two points. Every run produces a unique maze. Visualise the generation process in real time with pygame — watch the algorithm explore, backtrack, and branch.",
    hooks: [
      "Recursive backtracking",
      "Grid graphs",
      "Algorithm visualisation",
      "pygame",
    ],
    tech: { primary: ["Python"], secondary: ["pygame"], alts: [] },
    questions: [
      "What does recursive backtracking mean in terms of the grid — what does it look like when the algorithm gets stuck?",
      "How do you guarantee the maze is solvable — what property does recursive backtracking preserve?",
      "Could you implement a second algorithm like Prim's or Wilson's and compare the visual patterns they produce?",
    ],
  },
  {
    id: 402,
    cat: "games",
    level: "advanced",
    emoji: "🧭",
    color: "#6bffe0",
    bg: "#e6faf9",
    title: "Maze Solver",
    short: "Implement pathfinding algorithms and watch them find the exit.",
    desc: "Given a maze, implement BFS, DFS, and A* to find a path from start to finish. Visualise all three running on the same maze and compare how they explore — BFS fans out in all directions, DFS dives deep, A* makes smart choices based on distance estimates. This is the core of GPS navigation and game AI.",
    hooks: ["BFS / DFS", "A* algorithm", "Heuristics", "Algorithm comparison"],
    tech: { primary: ["Python"], secondary: ["pygame"], alts: [] },
    questions: [
      "Why does BFS always find the shortest path but DFS might not — can you explain the difference?",
      "What is the heuristic in A* — how does it estimate distance to the goal, and why does that matter?",
      "Could you build a visualiser that runs all three algorithms side by side on the same maze simultaneously?",
    ],
  },
  // ── ACADEMIC ──────────────────────────────────────────────
  {
    id: 501,
    cat: "academic",
    level: "beginner",
    emoji: "🐍",
    color: "#ffb74d",
    bg: "#fffbeb",
    title: "Python Certification",
    short: "Earn a recognised Python Institute certificate — PCEP or PCAP.",
    desc: "The Python Institute offers internationally recognised certifications: PCEP (entry level) and PCAP (associate level). Work through the syllabus systematically — data types, control flow, functions, modules, exceptions, OOP basics — and sit the exam with a real certificate at the end.",
    hooks: ["Certification", "Python syntax", "Structured study", "Exam prep"],
    tech: {
      primary: ["Python"],
      secondary: ["Python Institute PCEP / PCAP", "pythoninstitute.org"],
      alts: [],
    },
    questions: [
      "Which level makes sense to start at — PCEP if you are newer, PCAP if you already have Python basics?",
      "What topics in the syllabus do you feel least confident about — that is where to start?",
      "Could you build a small project alongside the study to apply each concept as you learn it?",
    ],
  },
  {
    id: 502,
    cat: "academic",
    level: "beginner",
    emoji: "🌐",
    color: "#ffb74d",
    bg: "#fffbeb",
    title: "JavaScript Certification",
    short:
      "Earn a recognised JS Institute certificate in web development and JavaScript.",
    desc: "The OpenEDG JS Institute offers certifications covering JavaScript essentials and web development. Work through the curriculum — DOM manipulation, events, functions, asynchronous JS, and modern ES6+ syntax — and sit a proctored exam for a credential you can put on a university application.",
    hooks: ["Certification", "JavaScript", "Web development", "Exam prep"],
    tech: {
      primary: ["JavaScript"],
      secondary: ["OpenEDG JS Institute", "HTML", "CSS"],
      alts: [],
    },
    questions: [
      "Have you already built something in JavaScript — if yes, which cert level are you aiming for?",
      "What part of the curriculum is newest to you — async, DOM, or ES6 syntax?",
      "Could you rebuild one of your own projects using only the techniques in the syllabus, to make sure you really own them?",
    ],
  },
  {
    id: 503,
    cat: "academic",
    level: "intermediate",
    emoji: "🧬",
    color: "#ffb74d",
    bg: "#fffbeb",
    title: "Object-Oriented Programming in Python",
    short:
      "Master classes, objects, inheritance, and the principles that make large programs manageable.",
    desc: "OOP is the jump from writing scripts to designing systems. Learn to model real-world problems with classes and objects, understand encapsulation, inheritance, and polymorphism, and apply them to a project of your own. This is the concept that unlocks every advanced Python project in the gallery.",
    hooks: ["Classes", "Inheritance", "Encapsulation", "Design patterns"],
    tech: { primary: ["Python"], secondary: ["IDLE / VS Code"], alts: [] },
    questions: [
      "What is the difference between a class and an object — can you explain it without using a car as the example?",
      "Which project in the gallery could you rebuild using OOP — and what would your classes be?",
      "What does inheritance actually buy you — when would you use it, and when would it be overkill?",
    ],
  },
  {
    id: 504,
    cat: "academic",
    level: "intermediate",
    emoji: "⚙️",
    color: "#ffb74d",
    bg: "#fffbeb",
    title: "Algorithms in Python",
    short:
      "Sorting, searching, recursion, complexity — the thinking that makes you a real programmer.",
    desc: "Learn to write, analyse, and compare algorithms. Cover sorting algorithms (bubble, merge, quicksort), searching, recursion, and Big O notation. Then apply them to real problems. This is the foundation of technical interviews, competitive programming, and every non-trivial project you will ever build.",
    hooks: ["Sorting", "Recursion", "Big O notation", "Problem solving"],
    tech: { primary: ["Python"], secondary: ["IDLE / VS Code"], alts: [] },
    questions: [
      "Can you explain why quicksort is faster than bubble sort on average — what is Big O actually measuring?",
      "Write a recursive function to calculate Fibonacci — then explain the call stack when it runs?",
      "Which algorithm concept do you find hardest to visualise — could you draw it on paper before you code it?",
    ],
  },
  {
    id: 505,
    cat: "academic",
    level: "advanced",
    emoji: "🏆",
    color: "#ffb74d",
    bg: "#fffbeb",
    title: "Luxembourg Informatics Olympiad",
    short:
      "Compete nationally. Solve hard algorithmic problems under time pressure. Represent your school.",
    desc: "The Luxembourg Informatics Olympiad (OIL) is the national competitive programming competition. Problems require deep algorithmic thinking — graph algorithms, dynamic programming, combinatorics, and mathematical reasoning — all implemented efficiently under exam conditions. Preparation is intense but the skills transfer to everything else you will ever build.",
    hooks: [
      "Competitive programming",
      "Graph algorithms",
      "Dynamic programming",
      "Problem solving",
    ],
    tech: {
      primary: ["Python"],
      secondary: ["OIL portal", "portal.education.lu/infosolympiad"],
      alts: [],
    },
    questions: [
      "Have you solved any past OIL problems — which one stopped you, and why?",
      "What is dynamic programming — can you describe the idea without writing any code first?",
      "Could you set yourself a practice schedule: one problem per week, timed, with a written debrief afterwards?",
    ],
  },
];

const COLORS = {
  web: { tag: "rgba(18,133,164,0.1)", text: "#1285a4" },
  data: { tag: "rgba(247,121,36,0.1)", text: "#d4620f" },
  games: { tag: "rgba(28,197,202,0.1)", text: "#0e9da3" },
  ai: { tag: "rgba(109,40,217,0.1)", text: "#6d28d9" },
  hardware: { tag: "rgba(220,38,38,0.1)", text: "#b91c1c" },
  tools: { tag: "rgba(5,150,105,0.1)", text: "#047857" },
  academic: { tag: "rgba(180,83,9,0.1)", text: "#b45309" },
};

const LEVEL_COLORS = {
  newcomer: "#16a34a",
  beginner: "#1285a4",
  intermediate: "#b45309",
  advanced: "#6d28d9",
};

const LANG_MAP = {
  python: "Python",
  javascript: "JavaScript",
  html: "HTML",
  "no-code": null,
};

let activeCat = "all";
let activeLevel = "all";
let activeLang = "all";

function projectMatchesLang(p, lang) {
  if (lang === "all") return true;
  if (lang === "no-code") {
    const allLangs = [
      p.tech.primary,
      ...(p.tech.alts || []).map((a) => a.primary),
    ]
      .flat()
      .map((t) => t.toLowerCase());
    return !allLangs.some((l) =>
      ["python", "javascript", "html", "css"].includes(l),
    );
  }
  const keyword = LANG_MAP[lang].toLowerCase();
  const allPrimary = [
    p.tech.primary,
    ...(p.tech.alts || []).map((a) => a.primary),
  ]
    .flat()
    .map((t) => t.toLowerCase());
  return allPrimary.some((l) => l.includes(keyword));
}

function renderTechPills(tech) {
  let html = `<div class="card-tech">`;
  tech.primary.forEach((t) => {
    html += `<span class="tech-pill primary">${t}</span>`;
  });
  if (tech.alts && tech.alts.length > 0) {
    tech.alts.forEach((alt) => {
      html += `<span class="tech-or">or</span>`;
      alt.primary.forEach((t) => {
        html += `<span class="tech-pill primary">${t}</span>`;
      });
    });
  }
  if (tech.secondary && tech.secondary.length > 0) {
    tech.secondary.forEach((t) => {
      html += `<span class="tech-pill secondary">${t}</span>`;
    });
  }
  html += `</div>`;
  return html;
}

function renderModalTech(tech) {
  let html = ``;
  html += `<div style="display:flex;flex-wrap:wrap;gap:0.35rem;align-items:center;width:100%;margin-bottom:0.35rem;">`;
  tech.primary.forEach((t) => {
    html += `<span class="stack-pill" style="background:rgba(232,255,107,0.08);border-color:rgba(232,255,107,0.25);color:var(--accent)">${t}</span>`;
  });
  tech.secondary.forEach((t) => {
    html += `<span class="stack-pill">${t}</span>`;
  });
  html += `</div>`;
  if (tech.alts && tech.alts.length > 0) {
    tech.alts.forEach((alt) => {
      html += `<div style="display:flex;flex-wrap:wrap;gap:0.35rem;align-items:center;width:100%;margin-bottom:0.35rem;">
        <span style="font-family:'DM Mono',monospace;font-size:9px;color:var(--muted);letter-spacing:0.06em;text-transform:uppercase;">or</span>`;
      alt.primary.forEach((t) => {
        html += `<span class="stack-pill" style="background:rgba(232,255,107,0.08);border-color:rgba(232,255,107,0.25);color:var(--accent)">${t}</span>`;
      });
      if (alt.secondary)
        alt.secondary.forEach((t) => {
          html += `<span class="stack-pill">${t}</span>`;
        });
      html += `</div>`;
    });
  }
  return html;
}

function renderCards() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  const filtered = PROJECTS.filter(
    (p) =>
      (activeCat === "all" || p.cat === activeCat) &&
      (activeLevel === "all" || p.level === activeLevel) &&
      projectMatchesLang(p, activeLang),
  );
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty">No projects match that filter.<br>Try a different combination.</div>`;
    return;
  }
  filtered.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.animationDelay = `${i * 0.04}s`;
    const catColor = COLORS[p.cat];
    const levelColor = LEVEL_COLORS[p.level];
    card.innerHTML = `
      <div class="card-visual" style="background:${p.bg};">
        ${makeVisual(p)}
        <div class="card-emoji">${p.emoji}</div>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-tag" style="background:${catColor.tag};color:${catColor.text}">${p.cat}</span>
          <span class="card-level"><span class="level-dot" style="background:${levelColor}"></span>${p.level}</span>
        </div>
        <h2>${p.title}</h2>
        <p>${p.short}</p>
        <div class="card-hooks">${p.hooks.map((h) => `<span class="hook">${h}</span>`).join("")}</div>
        ${renderTechPills(p.tech)}
      </div>`;
    card.addEventListener("click", () => openModal(p));
    grid.appendChild(card);
  });
}

function makeVisual(p) {
  const patterns = {
    web: `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><circle cx="240" cy="30" r="60" fill="${p.color}" opacity="0.08"/><circle cx="60" cy="130" r="40" fill="${p.color}" opacity="0.05"/><line x1="0" y1="80" x2="300" y2="80" stroke="${p.color}" stroke-width="0.5" opacity="0.1"/><line x1="150" y1="0" x2="150" y2="160" stroke="${p.color}" stroke-width="0.5" opacity="0.1"/></svg>`,
    data: `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect x="20" y="100" width="30" height="60" fill="${p.color}" opacity="0.12" rx="2"/><rect x="70" y="70" width="30" height="90" fill="${p.color}" opacity="0.1" rx="2"/><rect x="120" y="50" width="30" height="110" fill="${p.color}" opacity="0.08" rx="2"/><rect x="170" y="80" width="30" height="80" fill="${p.color}" opacity="0.1" rx="2"/><rect x="220" y="40" width="30" height="120" fill="${p.color}" opacity="0.12" rx="2"/></svg>`,
    games: `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect x="10" y="10" width="20" height="20" fill="${p.color}" opacity="0.1" rx="2"/><rect x="40" y="10" width="20" height="20" fill="${p.color}" opacity="0.06" rx="2"/><rect x="70" y="40" width="20" height="20" fill="${p.color}" opacity="0.1" rx="2"/><rect x="100" y="10" width="20" height="20" fill="${p.color}" opacity="0.08" rx="2"/><circle cx="220" cy="80" r="50" fill="none" stroke="${p.color}" stroke-width="0.5" opacity="0.12"/><circle cx="220" cy="80" r="30" fill="none" stroke="${p.color}" stroke-width="0.5" opacity="0.08"/></svg>`,
    ai: `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice">${Array.from({ length: 8 }, (_, i) => `<circle cx="${30 + i * 35}" cy="50" r="4" fill="${p.color}" opacity="${0.05 + i * 0.02}"/><circle cx="${30 + i * 35}" cy="110" r="4" fill="${p.color}" opacity="${0.05 + i * 0.015}"/><line x1="${30 + i * 35}" y1="54" x2="${30 + ((i + 1) % 8) * 35}" y2="106" stroke="${p.color}" stroke-width="0.5" opacity="0.08"/>`).join("")}</svg>`,
    hardware: `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><rect x="80" y="40" width="140" height="80" fill="none" stroke="${p.color}" stroke-width="0.5" opacity="0.15" rx="4"/><line x1="80" y1="80" x2="20" y2="80" stroke="${p.color}" stroke-width="1" opacity="0.1"/><line x1="220" y1="80" x2="280" y2="80" stroke="${p.color}" stroke-width="1" opacity="0.1"/><circle cx="150" cy="80" r="20" fill="${p.color}" opacity="0.06"/><circle cx="150" cy="80" r="8" fill="${p.color}" opacity="0.1"/></svg>`,
    academic: `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><circle cx="150" cy="80" r="55" fill="none" stroke="${p.color}" stroke-width="0.5" opacity="0.15"/><circle cx="150" cy="80" r="35" fill="none" stroke="${p.color}" stroke-width="0.5" opacity="0.1"/><circle cx="150" cy="80" r="15" fill="${p.color}" opacity="0.08"/><line x1="150" y1="25" x2="150" y2="55" stroke="${p.color}" stroke-width="0.5" opacity="0.12"/><line x1="150" y1="105" x2="150" y2="135" stroke="${p.color}" stroke-width="0.5" opacity="0.12"/><line x1="95" y1="80" x2="125" y2="80" stroke="${p.color}" stroke-width="0.5" opacity="0.12"/><line x1="175" y1="80" x2="205" y2="80" stroke="${p.color}" stroke-width="0.5" opacity="0.12"/></svg>`,
    tools: `<svg viewBox="0 0 300 160" preserveAspectRatio="xMidYMid slice"><line x1="40" y1="20" x2="40" y2="140" stroke="${p.color}" stroke-width="0.5" opacity="0.1"/><line x1="80" y1="20" x2="80" y2="140" stroke="${p.color}" stroke-width="0.5" opacity="0.07"/><line x1="120" y1="20" x2="120" y2="140" stroke="${p.color}" stroke-width="0.5" opacity="0.1"/><line x1="20" y1="50" x2="280" y2="50" stroke="${p.color}" stroke-width="0.5" opacity="0.07"/><line x1="20" y1="90" x2="280" y2="90" stroke="${p.color}" stroke-width="0.5" opacity="0.1"/></svg>`,
  };
  return patterns[p.cat] || "";
}

function openModal(p) {
  const overlay = document.getElementById("modal-overlay");
  const catColor = COLORS[p.cat];

  document.getElementById("modal-visual").style.background = p.bg;
  document.getElementById("modal-visual").innerHTML = `
    <button class="modal-close" id="modal-close">✕</button>
    ${makeVisual(p)}
    <div class="modal-visual-emoji">${p.emoji}</div>`;

  document.getElementById("modal-cat-label").textContent =
    `${p.cat} · ${p.level}`;
  document.getElementById("modal-cat-label").style.color = catColor.text;
  document.getElementById("modal-title").textContent = p.title;
  document.getElementById("modal-desc").textContent = p.desc;

  const ql = document.getElementById("modal-questions");
  ql.innerHTML = p.questions.map((q) => `<li>${q}</li>`).join("");

  const stackWrap = document.getElementById("modal-stack");
  stackWrap.innerHTML = renderModalTech(p.tech);

  overlay.classList.add("open");
  document.getElementById("modal-close").addEventListener("click", closeModal);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCat = btn.dataset.cat;
    renderCards();
  });
});

document.querySelectorAll(".level-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".level-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeLevel = btn.dataset.level;
    renderCards();
  });
});

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".lang-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeLang = btn.dataset.lang;
    renderCards();
  });
});

renderCards();
