// Hand-drawn objects, one per story.
// Flat gouache fills, one warm-brown ink line, a shared "rough" filter
// (defined in <Defs />) that wobbles every edge so nothing looks machine-cut.

import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const ink = {
  stroke: "var(--ink)",
  strokeWidth: 2.6,
  strokeLinejoin: "round" as const,
  strokeLinecap: "round" as const,
};
const thin = { ...ink, strokeWidth: 1.6 };

export function Defs() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
      <defs>
        <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="2.4" />
        </filter>
      </defs>
    </svg>
  );
}

function Steam({ d = [0, 1, 2], x = 100, y = 30, spread = 22 }: { d?: number[]; x?: number; y?: number; spread?: number }) {
  return (
    <g className="steam" fill="none" stroke="var(--steam)" strokeWidth="5" strokeLinecap="round">
      {d.map((i) => (
        <path
          key={i}
          style={{ animationDelay: `${i * 0.45}s` }}
          d={`M${x + (i - 1) * spread} ${y + 40} c -10 -10 10 -18 0 -28 s 10 -18 0 -28`}
        />
      ))}
    </g>
  );
}

export function Gaiwan(p: P) {
  return (
    <svg viewBox="0 0 220 220" {...p}>
      <g filter="url(#rough)">
        {/* saucer */}
        <circle cx="110" cy="118" r="94" fill="var(--porcelain)" {...ink} />
        <circle cx="110" cy="118" r="80" fill="none" stroke="var(--cobalt-brush)" strokeWidth="2" strokeDasharray="3 9" />
        {/* cup */}
        <circle cx="110" cy="118" r="64" fill="#fbfcf8" {...ink} />
        <circle cx="110" cy="118" r="52" fill="var(--liquor)" {...thin} />
        <ellipse cx="96" cy="104" rx="20" ry="10" fill="#f2c56d" opacity="0.7" />
        {/* a leaf unfurling in the cup */}
        <path d="M118 128 q 18 -4 22 10 q -16 8 -22 -10z" fill="#7d8a3a" {...thin} />
        {/* lid, pushed aside to let the tea breathe */}
        <g transform="translate(26 -16) rotate(-14 110 118)">
          <ellipse cx="110" cy="118" rx="58" ry="56" fill="var(--porcelain-lid)" {...ink} />
          <path d="M70 108 q 12 -20 30 -8 M120 82 q 22 -2 26 18 M140 140 q -8 18 -30 16 M78 140 q -6 -8 2 -14" fill="none" stroke="var(--cobalt-brush)" strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="92" cy="94" r="4" fill="var(--cobalt-brush)" />
          <circle cx="132" cy="150" r="3" fill="var(--cobalt-brush)" />
          <circle cx="110" cy="118" r="17" fill="#fbfcf8" {...ink} />
          <circle cx="110" cy="118" r="8" fill="var(--porcelain-lid)" {...thin} />
        </g>
      </g>
      <Steam x={92} y={60} spread={16} />
    </svg>
  );
}

export function NoodleBowl(p: P) {
  const noodles = Array.from({ length: 9 }, (_, i) => i);
  return (
    <svg viewBox="0 0 260 230" {...p}>
      <g filter="url(#rough)">
        {/* chopsticks resting across */}
        <rect x="20" y="40" width="230" height="9" rx="4" fill="var(--wood)" transform="rotate(16 130 44)" {...thin} />
        <rect x="24" y="54" width="226" height="9" rx="4" fill="var(--wood-light)" transform="rotate(19 130 58)" {...thin} />
        <circle cx="120" cy="125" r="96" fill="#fbfcf8" {...ink} />
        {/* rim pattern */}
        <circle cx="120" cy="125" r="88" fill="none" stroke="var(--cobalt-brush)" strokeWidth="6" strokeDasharray="10 7" />
        <circle cx="120" cy="125" r="76" fill="var(--broth)" {...ink} />
        {noodles.map((i) => (
          <path
            key={i}
            d={`M${62 + i * 2} ${92 + i * 9} q 18 -14 36 0 t 36 0 t 36 0`}
            fill="none"
            stroke="var(--noodle)"
            strokeWidth="5"
            strokeLinecap="round"
          />
        ))}
        {/* egg */}
        <ellipse cx="150" cy="104" rx="24" ry="19" fill="#fffaf0" {...thin} />
        <circle cx="152" cy="106" r="11" fill="#f0a72a" />
        {/* fishcake */}
        <circle cx="88" cy="150" r="16" fill="#fff6f3" {...thin} />
        <path d="M80 150 q 8 -10 12 -2 q 4 8 -6 6" fill="none" stroke="#e78ba0" strokeWidth="3" strokeLinecap="round" />
        {/* greens */}
        <path d="M124 160 q 20 -18 34 4 q -18 14 -34 -4z" fill="var(--leaf)" {...thin} />
        <path d="M104 92 q 4 -20 22 -14 q -4 18 -22 14z" fill="var(--leaf)" {...thin} />
        <circle cx="150" cy="150" r="3" fill="var(--leaf)" />
        <circle cx="96" cy="118" r="2.5" fill="var(--leaf)" />
        {/* porcelain spoon */}
        <g transform="rotate(-28 210 180)">
          <ellipse cx="200" cy="182" rx="22" ry="15" fill="#fbfcf8" {...ink} />
          <rect x="216" y="177" width="36" height="10" rx="5" fill="#fbfcf8" {...ink} />
        </g>
      </g>
      <Steam x={118} y={66} spread={24} />
    </svg>
  );
}

export function Turtle(p: P) {
  return (
    <svg viewBox="0 0 220 220" {...p}>
      <g filter="url(#rough)">
        {/* legs + head + tail */}
        <ellipse cx="58" cy="66" rx="20" ry="15" fill="var(--jade-light)" transform="rotate(-40 58 66)" {...ink} />
        <ellipse cx="162" cy="66" rx="20" ry="15" fill="var(--jade-light)" transform="rotate(40 162 66)" {...ink} />
        <ellipse cx="58" cy="158" rx="20" ry="15" fill="var(--jade-light)" transform="rotate(40 58 158)" {...ink} />
        <ellipse cx="162" cy="158" rx="20" ry="15" fill="var(--jade-light)" transform="rotate(-40 162 158)" {...ink} />
        <path d="M104 190 l 6 18 l 6 -18z" fill="var(--jade-light)" {...thin} />
        <ellipse cx="110" cy="30" rx="22" ry="24" fill="var(--jade-light)" {...ink} />
        <circle cx="101" cy="24" r="3.2" fill="var(--ink)" />
        <circle cx="119" cy="24" r="3.2" fill="var(--ink)" />
        <path d="M104 36 q 6 5 12 0" fill="none" {...thin} />
        {/* shell */}
        <ellipse cx="110" cy="112" rx="72" ry="80" fill="var(--jade)" {...ink} />
        <path d="M110 70 l 24 14 v 28 l -24 14 l -24 -14 v -28z" fill="var(--jade-dark)" {...thin} />
        <path d="M86 84 l -30 -8 M134 84 l 30 -8 M86 112 l -34 10 M134 112 l 34 10 M110 126 v 40 M110 70 v -28" fill="none" {...thin} />
        <path d="M58 140 q 52 40 104 0" fill="none" {...thin} />
        {/* coin slot */}
        <rect x="96" y="92" width="28" height="7" rx="3.5" fill="var(--ink)" />
      </g>
      {/* coins beside, slightly out of the rough filter so the edge reads crisp */}
      <g filter="url(#rough)">
        <circle cx="190" cy="196" r="13" fill="var(--coin)" {...thin} />
        <circle cx="190" cy="196" r="7" fill="none" stroke="#b07d1a" strokeWidth="1.5" />
        <circle cx="168" cy="206" r="11" fill="var(--coin)" {...thin} />
      </g>
    </svg>
  );
}

export function Sketchbook(p: P) {
  return (
    <svg viewBox="0 0 260 210" {...p}>
      <g filter="url(#rough)">
        <rect x="14" y="20" width="220" height="176" rx="6" fill="var(--kraft)" {...ink} />
        <rect x="22" y="26" width="208" height="164" rx="3" fill="#fdfbf5" {...thin} />
        {/* spiral */}
        {Array.from({ length: 13 }, (_, i) => (
          <ellipse key={i} cx={34 + i * 15.5} cy="22" rx="4" ry="8" fill="none" {...thin} />
        ))}
        {/* wireframe of a website, in pencil */}
        <g stroke="var(--pencil)" strokeWidth="1.8" fill="none" strokeLinecap="round">
          <rect x="38" y="44" width="176" height="18" rx="2" />
          <path d="M44 53 h 30 M150 53 h 12 M168 53 h 12 M186 53 h 20" />
          <rect x="38" y="70" width="104" height="60" rx="2" />
          <path d="M38 70 l 104 60 M142 70 l -104 60" opacity="0.6" />
          <path d="M152 76 h 58 M152 86 h 50 M152 96 h 56 M152 106 h 30" />
          <rect x="152" y="114" width="40" height="14" rx="7" />
          <rect x="38" y="140" width="52" height="38" rx="2" />
          <rect x="100" y="140" width="52" height="38" rx="2" />
          <rect x="162" y="140" width="52" height="38" rx="2" />
          <path d="M178 186 q 10 -6 20 0" />
        </g>
        <path d="M150 112 q 30 -26 56 -8" fill="none" stroke="var(--note-blue)" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 5" />
      </g>
      {/* pencil */}
      <g filter="url(#rough)" transform="rotate(-24 200 170)">
        <rect x="120" y="160" width="120" height="14" fill="var(--pencil-yellow)" {...thin} />
        <path d="M120 160 l -22 7 l 22 7z" fill="#f4d7a8" {...thin} />
        <path d="M98 167 l 7 -2.2 v 4.4z" fill="var(--ink)" />
        <rect x="240" y="160" width="10" height="14" fill="#c9c9c9" {...thin} />
        <rect x="250" y="160" width="12" height="14" rx="3" fill="#ef9fa8" {...thin} />
      </g>
    </svg>
  );
}

export function Lanyard(p: P) {
  return (
    <svg viewBox="0 0 220 240" {...p}>
      <g filter="url(#rough)">
        <path d="M110 120 C 40 110 10 40 60 14 C 100 -4 170 0 186 40 C 200 80 160 116 110 120" fill="none" stroke="var(--teal)" strokeWidth="13" strokeLinecap="round" />
        <path d="M110 120 C 40 110 10 40 60 14 C 100 -4 170 0 186 40 C 200 80 160 116 110 120" fill="none" stroke="#e8f4f2" strokeWidth="1.4" strokeDasharray="4 8" />
        <rect x="100" y="112" width="20" height="22" rx="4" fill="#c7cdd1" {...thin} />
        <rect x="58" y="132" width="104" height="100" rx="9" fill="#fdfdfb" {...ink} />
        <rect x="58" y="132" width="104" height="24" rx="9" fill="var(--teal)" {...thin} />
        <rect x="98" y="138" width="24" height="5" rx="2.5" fill="#fdfdfb" />
        {/* portrait placeholder */}
        <rect x="70" y="166" width="34" height="40" rx="4" fill="#e3e8ea" {...thin} />
        <circle cx="87" cy="180" r="8" fill="#b9c3c8" />
        <path d="M74 206 q 13 -18 26 0" fill="#b9c3c8" />
        <path d="M112 172 h 38 M112 182 h 30 M112 192 h 34" stroke="var(--pencil)" strokeWidth="3" strokeLinecap="round" />
        <rect x="70" y="214" width="80" height="8" rx="2" fill="none" stroke="var(--pencil)" strokeWidth="1.4" />
        <path d="M74 214 v 8 M78 214 v 8 M84 214 v 8 M87 214 v 8 M94 214 v 8 M100 214 v 8 M103 214 v 8 M110 214 v 8 M118 214 v 8 M121 214 v 8 M128 214 v 8 M136 214 v 8 M140 214 v 8 M146 214 v 8" stroke="var(--pencil)" strokeWidth="1.4" />
      </g>
    </svg>
  );
}

export function Napkin(p: P) {
  return (
    <svg viewBox="0 0 230 210" {...p}>
      <g filter="url(#rough)">
        <path d="M10 14 L 220 8 L 224 200 L 8 204 Z" fill="var(--napkin)" {...thin} />
        <path d="M20 22 L 210 18 L 214 192 L 18 194 Z" fill="none" stroke="#d8d0c0" strokeWidth="1.4" strokeDasharray="2 4" />
        {/* kopi ring */}
        <circle cx="172" cy="150" r="30" fill="none" stroke="var(--kopi-stain)" strokeWidth="5" opacity="0.5" />
        <circle cx="172" cy="150" r="27" fill="none" stroke="var(--kopi-stain)" strokeWidth="1.5" opacity="0.35" />
        <g stroke="var(--pencil)" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M30 42 l 52 -2 l 2 34 l -54 2z" />
          <path d="M88 108 l 58 -2 l 2 34 l -60 2z" />
          <path d="M150 42 l 58 -1 l 1 34 l -59 2z" />
          <path d="M60 80 q 6 26 26 38 m -10 2 l 10 -2 l -2 -10" />
          <path d="M148 124 q 22 -16 30 -46 m -10 6 l 10 -6 l 4 10" />
        </g>
      </g>
      <g fontFamily="var(--font-hand)" fill="var(--pencil)" fontSize="19" textAnchor="middle">
        <text x="56" y="64">S3</text>
        <text x="118" y="130" fontSize="16">Databricks</text>
        <text x="179" y="64" fontSize="16">Tableau</text>
        <text x="72" y="178" fontSize="17" transform="rotate(-3 72 178)">no more copy-paste!</text>
      </g>
    </svg>
  );
}

export function Notebook(p: P) {
  return (
    <svg viewBox="0 0 270 230" {...p}>
      <defs>
        <pattern id="krama" width="22" height="22" patternUnits="userSpaceOnUse">
          <rect width="22" height="22" fill="#f4f0e6" />
          <rect width="11" height="22" fill="var(--krama)" opacity="0.55" />
          <rect width="22" height="11" fill="var(--krama)" opacity="0.55" />
        </pattern>
      </defs>
      <g filter="url(#rough)">
        {/* krama scarf corner */}
        <path d="M0 150 Q 60 120 130 150 L 150 230 L 0 230 Z" fill="url(#krama)" {...thin} />
        <path d="M14 222 l -6 8 M30 222 l -4 8 M46 224 l -2 6" stroke="var(--krama)" strokeWidth="2" />
        {/* riel note tucked in */}
        <g transform="rotate(-12 170 60)">
          <rect x="96" y="22" width="150" height="70" rx="3" fill="var(--riel)" {...thin} />
          <rect x="104" y="30" width="134" height="54" rx="2" fill="none" stroke="#f4ecdf" strokeWidth="1.4" />
          <ellipse cx="200" cy="57" rx="18" ry="20" fill="#cdbad6" {...thin} />
          <path d="M120 44 l 10 -8 l 10 8 v 22 h -20z" fill="#cdbad6" {...thin} />
          <text x="118" y="80" fontFamily="var(--font-display)" fontWeight="800" fontSize="13" fill="#f6efe5">100</text>
        </g>
        {/* notebook */}
        <rect x="70" y="56" width="164" height="150" rx="10" fill="var(--navy)" {...ink} />
        <rect x="214" y="56" width="10" height="150" fill="#18233f" />
        <rect x="70" y="56" width="20" height="150" rx="6" fill="#1b2a4c" />
        <rect x="112" y="100" width="88" height="30" rx="3" fill="#f3efe4" {...thin} />
        <path d="M120 112 h 50 M120 121 h 34" stroke="var(--pencil)" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M86 210 q 20 18 50 10" fill="none" stroke="#e46f4d" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function Letters(p: P) {
  return (
    <svg viewBox="0 0 250 210" {...p}>
      <g filter="url(#rough)">
        <g transform="rotate(-9 125 105)">
          <rect x="34" y="40" width="190" height="122" rx="4" fill="#e9dcc4" {...ink} />
        </g>
        <g transform="rotate(6 125 105)">
          <rect x="26" y="48" width="190" height="122" rx="4" fill="#f1e7d4" {...ink} />
        </g>
        <g transform="rotate(-2 125 105)">
          <rect x="30" y="44" width="192" height="124" rx="4" fill="#faf5ea" {...ink} />
          <path d="M30 44 l 96 66 l 96 -66" fill="none" stroke="#d9cbb0" strokeWidth="2" />
          {/* stamp */}
          <rect x="172" y="56" width="38" height="44" fill="#fff" stroke="var(--ink)" strokeWidth="1.4" strokeDasharray="3 2" />
          <rect x="177" y="61" width="28" height="34" fill="var(--stamp-ochre)" />
          <circle cx="191" cy="74" r="7" fill="#f6d67b" />
          <path d="M177 95 q 14 -16 28 0" fill="var(--jade)" />
          {/* postmark */}
          <circle cx="160" cy="98" r="18" fill="none" stroke="var(--pencil)" strokeWidth="1.4" opacity="0.7" />
          <path d="M146 92 q 14 -6 28 0 M146 104 q 14 -6 28 0" fill="none" stroke="var(--pencil)" strokeWidth="1.2" opacity="0.7" />
        </g>
        {/* string */}
        <path d="M118 30 q 6 76 -4 160 M16 112 q 110 -10 230 6" fill="none" stroke="#b2884f" strokeWidth="2.6" />
        <path d="M110 108 q -16 -16 -2 -18 q 12 0 8 14 q 18 -12 20 0 q 0 10 -18 4" fill="none" stroke="#b2884f" strokeWidth="2.4" />
      </g>
      <g fontFamily="var(--font-hand)" fill="var(--note-blue)" fontSize="18" transform="rotate(-2 125 105)">
        <text x="48" y="142">to Dream School</text>
        <text x="48" y="160" fontSize="15">Bangalore, India</text>
      </g>
    </svg>
  );
}

export function Arrow({ dir = "right", ...p }: P & { dir?: "left" | "right" }) {
  return (
    <svg viewBox="0 0 34 18" width="1.4em" height="0.75em" aria-hidden="true" focusable="false" style={{ transform: dir === "left" ? "scaleX(-1)" : undefined }} {...p}>
      <path d="M2 10 C 10 7, 20 11, 30 9 M22 3 C 25 6, 28 8, 31 9 C 28 11, 25 13, 23 16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneWireframe(p: P) {
  return (
    <svg viewBox="0 0 160 220" {...p}>
      <g filter="url(#rough)">
        <rect x="30" y="10" width="100" height="200" rx="16" fill="#fbfaf6" {...ink} />
        <rect x="64" y="18" width="32" height="6" rx="3" fill="var(--ink)" />
        <g stroke="var(--pencil)" strokeWidth="1.8" fill="none" strokeLinecap="round">
          <rect x="42" y="36" width="76" height="16" rx="8" />
          <rect x="42" y="62" width="76" height="40" rx="6" />
          <circle cx="56" cy="76" r="7" />
          <path d="M68 74 h 38 M68 84 h 26 M48 94 h 18 M70 94 h 18" />
          <rect x="42" y="110" width="76" height="40" rx="6" />
          <circle cx="56" cy="124" r="7" />
          <path d="M68 122 h 38 M68 132 h 30 M48 142 h 18 M70 142 h 18" />
        </g>
        <rect x="42" y="160" width="76" height="18" rx="9" fill="var(--note-blue)" />
        <path d="M60 169 h 40" stroke="#fbfaf6" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M54 194 h 52" stroke="var(--pencil)" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function FilmStrip(p: P) {
  return (
    <svg viewBox="0 0 240 170" {...p}>
      <g filter="url(#rough)" transform="rotate(-8 120 85)">
        <rect x="10" y="40" width="220" height="90" rx="4" fill="#2d2a33" {...ink} />
        {Array.from({ length: 10 }, (_, i) => (
          <g key={i}>
            <rect x={20 + i * 21} y="47" width="10" height="8" rx="1.5" fill="#f3efe6" />
            <rect x={20 + i * 21} y="115" width="10" height="8" rx="1.5" fill="#f3efe6" />
          </g>
        ))}
        <rect x="22" y="62" width="58" height="46" rx="2" fill="#f2c56d" />
        <rect x="91" y="62" width="58" height="46" rx="2" fill="#a9cde6" />
        <rect x="160" y="62" width="58" height="46" rx="2" fill="#e8a3a0" />
        <path d="M30 100 l 12 -16 l 10 10 l 8 -6 l 12 12 z" fill="#5c9440" />
        <circle cx="120" cy="82" r="10" fill="#f6efe2" />
        <path d="M110 104 q 10 -14 20 0" fill="#f6efe2" />
        <path d="M168 100 q 21 -26 42 0" fill="none" stroke="#7b3a55" strokeWidth="3" />
      </g>
    </svg>
  );
}

export function FiveStones(p: P) {
  const bags = [
    { x: 60, y: 70, c: "#d9534f", r: -10 },
    { x: 118, y: 52, c: "#f2c230", r: 8 },
    { x: 168, y: 86, c: "#3c9876", r: -4 },
    { x: 92, y: 128, c: "#2b4f9e", r: 12 },
    { x: 150, y: 140, c: "#8d6aa6", r: -14 },
  ];
  return (
    <svg viewBox="0 0 230 190" {...p}>
      {bags.map((b, i) => (
        <g key={i} filter="url(#rough)" transform={`rotate(${b.r} ${b.x} ${b.y})`}>
          <path
            d={`M${b.x - 20} ${b.y + 4} L${b.x} ${b.y - 20} L${b.x + 20} ${b.y + 4} L${b.x} ${b.y + 20} Z`}
            fill={b.c}
            {...ink}
            strokeLinejoin="round"
          />
          <path d={`M${b.x - 20} ${b.y + 4} L${b.x + 20} ${b.y + 4} M${b.x} ${b.y - 20} L${b.x} ${b.y + 20}`} stroke="rgba(255,255,255,0.45)" strokeWidth="1.4" strokeDasharray="2 3" />
          <circle cx={b.x - 4} cy={b.y - 4} r="2" fill="rgba(255,255,255,0.6)" />
        </g>
      ))}
    </svg>
  );
}

export function FlatironsPostcard(p: P) {
  return (
    <svg viewBox="0 0 240 190" {...p}>
      <g filter="url(#rough)" transform="rotate(-6 120 95)">
        <rect x="14" y="24" width="212" height="148" rx="4" fill="#fbfaf4" {...ink} />
        <rect x="24" y="34" width="132" height="128" fill="#a9d7f2" />
        <circle cx="128" cy="62" r="11" fill="#f8d36a" />
        <path d="M24 162 L24 132 L52 82 L68 104 L86 66 L104 98 L118 80 L156 124 L156 162 Z" fill="#d9673f" />
        <path d="M52 82 L60 162 M86 66 L90 162 M118 80 L122 162" stroke="#a9472a" strokeWidth="2" />
        <path d="M24 162 L24 144 Q 90 128 156 146 L156 162 Z" fill="#3f7a4f" />
        <rect x="24" y="34" width="132" height="128" fill="none" {...thin} />
        <rect x="174" y="40" width="38" height="44" fill="#fff" stroke="var(--ink)" strokeWidth="1.4" strokeDasharray="3 2" />
        <rect x="179" y="45" width="28" height="34" fill="#cfb87c" />
        <text x="193" y="67" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="800" fontSize="13" fill="#1b1b1a">CU</text>
        <path d="M170 104 h44 M170 120 h40 M170 136 h44" stroke="var(--pencil)" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  );
}
