export type Level = "First project" | "Some experience" | "Stretch goal";

export interface Idea {
  icon: string;
  title: string;
  hook: string;
  level: Level;
  tools: string;
}

export interface Theme {
  icon: string;
  name: string;
  ideas: Idea[];
}

export const THEMES: Theme[] = [
  {
    icon: "🎮",
    name: "Games",
    ideas: [
      {
        icon: "🐍",
        title: "Snake, but you break the rules",
        hook: "Start with classic Snake, then add portals, power-ups and a second player until it's a game nobody has played before.",
        level: "First project",
        tools: "Python",
      },
      {
        icon: "📱",
        title: "A party game your class can join",
        hook: "Build a quiz or drawing game that everyone plays from their own phone, like your own version of Kahoot.",
        level: "Stretch goal",
        tools: "JavaScript",
      },
    ],
  },
  {
    icon: "📲",
    name: "Real apps",
    ideas: [
      {
        icon: "🎒",
        title: "The app your school is missing",
        hook: "A timetable that tells you where to go next and which homework is due tomorrow, designed by someone who actually uses it.",
        level: "Some experience",
        tools: "Web",
      },
      {
        icon: "💸",
        title: "Where did my money go?",
        hook: "Track your pocket money, set a savings goal and watch a chart show you how close you are to buying that thing.",
        level: "First project",
        tools: "Python",
      },
    ],
  },
  {
    icon: "🏠",
    name: "Smart home",
    ideas: [
      {
        icon: "🪴",
        title: "A plant that asks for water",
        hook: "Wire a soil sensor to a micro:bit or Raspberry Pi so your plant sends you a message before it dies.",
        level: "Some experience",
        tools: "Hardware",
      },
      {
        icon: "🚨",
        title: "A keep-out alarm for your room",
        hook: "A motion sensor on your door that flashes, beeps and logs exactly who came in and when.",
        level: "First project",
        tools: "Hardware",
      },
    ],
  },
  {
    icon: "🤖",
    name: "AI",
    ideas: [
      {
        icon: "✊",
        title: "Rock-paper-scissors against your webcam",
        hook: "Train a model to recognise your hand gestures, then build a game where the computer tries to beat you.",
        level: "Some experience",
        tools: "No code to start",
      },
      {
        icon: "🧠",
        title: "A study buddy that quizzes you",
        hook: "Paste in your revision notes and get a chatbot that turns them into questions and tells you what you keep getting wrong.",
        level: "Stretch goal",
        tools: "Python",
      },
    ],
  },
  {
    icon: "🎨",
    name: "Music & creative",
    ideas: [
      {
        icon: "🎵",
        title: "Make your favourite song visible",
        hook: "Build a visualiser that turns the beat into shapes and colours that pulse on screen as the music plays.",
        level: "Some experience",
        tools: "JavaScript",
      },
      {
        icon: "🌐",
        title: "Your own website, live on the internet",
        hook: "Design a personal site for your art, music or projects and publish it at a real address you can share.",
        level: "First project",
        tools: "Web",
      },
    ],
  },
  {
    icon: "📊",
    name: "Data & sport",
    ideas: [
      {
        icon: "🎧",
        title: "Your own Spotify Wrapped",
        hook: "Download your listening history and find out what Spotify never tells you, like your top song at 2am.",
        level: "Some experience",
        tools: "Python",
      },
      {
        icon: "⚽",
        title: "Settle the argument with data",
        hook: "Who really is the best player? Pull real match stats and build the charts that prove you right.",
        level: "Some experience",
        tools: "Python",
      },
    ],
  },
];

export const IDEA_COUNT = THEMES.reduce((n, t) => n + t.ideas.length, 0);
