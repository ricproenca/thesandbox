// Decorative hero illustration in the style of the posters: a glowing ring,
// isometric cubes and circuit traces. Purely visual, so it's hidden from screen readers.

type CubeProps = {
  x: number;
  y: number;
  size: number;
  colors: [top: string, left: string, right: string];
  className?: string;
};

function Cube({ x, y, size: s, colors: [top, left, right], className }: CubeProps) {
  const w = s * 0.866;
  const h = s / 2;
  return (
    // Position on the outer group; the inner one is free for the CSS float animation
    // (a CSS transform would otherwise replace the translate attribute).
    <g transform={`translate(${x} ${y})`}>
      <g className={className}>
        <polygon points={`0,${-s} ${w},${-h} 0,0 ${-w},${-h}`} fill={top} />
        <polygon points={`${-w},${-h} 0,0 0,${s} ${-w},${h}`} fill={left} />
        <polygon points={`${w},${-h} 0,0 0,${s} ${w},${h}`} fill={right} />
      </g>
    </g>
  );
}

function WireCube({ x, y, size: s }: { x: number; y: number; size: number }) {
  const w = s * 0.866;
  const h = s / 2;
  return (
    <g transform={`translate(${x} ${y})`} fill="none" stroke="#1cc5ca" strokeOpacity="0.55" strokeWidth="1.5" strokeLinejoin="round">
      <polygon points={`0,${-s} ${w},${-h} ${w},${h} 0,${s} ${-w},${h} ${-w},${-h}`} />
      <path d={`M${-w},${-h} L0,0 L${w},${-h} M0,0 L0,${s}`} />
    </g>
  );
}

const TEAL: CubeProps["colors"] = ["#7eeef0", "#1cc5ca", "#1285a4"];
const ORANGE: CubeProps["colors"] = ["#ffc08f", "#f77924", "#b9540f"];

export default function HeroArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 520 520" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="hero-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1cc5ca" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#1cc5ca" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#1cc5ca" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="260" cy="260" r="250" fill="url(#hero-glow)" />
      <circle cx="260" cy="260" r="170" fill="none" stroke="#1cc5ca" strokeOpacity="0.6" strokeWidth="2" />
      <circle cx="260" cy="260" r="215" fill="none" stroke="#1cc5ca" strokeOpacity="0.18" strokeWidth="1.5" strokeDasharray="4 10" />

      {/* circuit traces */}
      <g fill="none" stroke="#1cc5ca" strokeOpacity="0.35" strokeWidth="1.5">
        <path d="M40 150 H120 L150 180 H190" />
        <path d="M470 330 H410 L380 360 H340" />
        <path d="M90 420 L130 380 H190" />
        <path d="M430 90 L400 120 H350" />
      </g>
      <g fill="#1cc5ca" fillOpacity="0.7">
        <circle cx="40" cy="150" r="4" />
        <circle cx="470" cy="330" r="4" />
        <circle cx="90" cy="420" r="4" />
        <circle cx="430" cy="90" r="4" />
      </g>

      {/* code glyphs, as on the posters */}
      <g fontFamily="var(--font-dm-mono), monospace" fontSize="22" fill="#1cc5ca" fillOpacity="0.45">
        <text x="70" y="250">{"</>"}</text>
        <text x="410" y="215">{"{ }"}</text>
        <text x="395" y="455" fill="#f77924" fillOpacity="0.6">{"<>"}</text>
      </g>

      <WireCube x={395} y={395} size={34} />
      <WireCube x={150} y={115} size={22} />

      <Cube x={262} y={250} size={92} colors={TEAL} className="hero-float" />
      <Cube x={372} y={168} size={44} colors={ORANGE} className="hero-float hero-float-delay-1" />
      <Cube x={150} y={345} size={34} colors={TEAL} className="hero-float hero-float-delay-2" />
      <Cube x={185} y={180} size={18} colors={ORANGE} className="hero-float hero-float-delay-1" />
    </svg>
  );
}
