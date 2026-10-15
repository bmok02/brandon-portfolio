"use client";

import { useEffect, useState, type ReactNode } from "react";

// The places I have lived and learned in, drawn flat and bright, sitting
// behind the page. Visitors can switch between them; the choice is remembered
// in this browser only.

type SceneId = "singapore" | "cambodia" | "boulder";

const scenes: { id: SceneId; label: string }[] = [
  { id: "singapore", label: "Singapore" },
  { id: "cambodia", label: "Phnom Penh" },
  { id: "boulder", label: "Boulder" },
];

const KEY = "scenery";

export function Scenery() {
  const [scene, setScene] = useState<SceneId>("singapore");

  useEffect(() => {
    try {
      const fromUrl = new URLSearchParams(window.location.search).get("scene");
      const saved = fromUrl ?? window.localStorage.getItem(KEY);
      if (saved === "singapore" || saved === "cambodia" || saved === "boulder") {
        // restore the visitor's last choice after hydration
        queueMicrotask(() => setScene(saved));
      }
    } catch {
      /* storage blocked: keep the default */
    }
  }, []);

  const choose = (id: SceneId) => {
    setScene(id);
    try {
      window.localStorage.setItem(KEY, id);
    } catch {
      /* ignore */
    }
  };

  return (
    <>
      <div className="scenery" aria-hidden="true">
        <Singapore active={scene === "singapore"} />
        <Cambodia active={scene === "cambodia"} />
        <Boulder active={scene === "boulder"} />
      </div>
      <div className="scene-switch" role="group" aria-labelledby="scene-switch-label">
        <p id="scene-switch-label" className="scene-switch__label">
          places that shaped me
        </p>
        <div className="scene-switch__stamps">
          {scenes.map((s) => (
            <button
              key={s.id}
              type="button"
              className={`stamp stamp--${s.id}`}
              aria-pressed={scene === s.id}
              onClick={() => choose(s.id)}
            >
              <StampIcon id={s.id} />
              <span>{s.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

function StampIcon({ id }: { id: SceneId }) {
  return (
    <svg className="stamp__icon" viewBox="0 0 40 32" aria-hidden="true" focusable="false">
      {id === "singapore" && (
        <g fill="currentColor">
          <rect x="7" y="12" width="6" height="18" rx="1" />
          <rect x="17" y="11" width="6" height="19" rx="1" />
          <rect x="27" y="12" width="6" height="18" rx="1" />
          <path d="M3 9 Q20 5 38 8 L38 11 Q20 8.5 3 12 Z" />
        </g>
      )}
      {id === "cambodia" && (
        <g fill="currentColor">
          <path d="M20 2 C16 8 13 14 13 22 L27 22 C27 14 24 8 20 2 Z" />
          <path d="M9 10 C7 14 6 17 6 22 L13 22 C13 17 11 14 9 10 Z" />
          <path d="M31 10 C29 14 27 17 27 22 L34 22 C34 17 33 14 31 10 Z" />
          <rect x="3" y="22" width="34" height="6" rx="1" />
        </g>
      )}
      {id === "boulder" && (
        <g fill="currentColor">
          <path d="M2 30 L12 6 L16 7 L21 30 Z" />
          <path d="M14 30 L24 2 L29 3 L34 30 Z" opacity="0.8" />
          <path d="M26 30 L33 12 L36 13 L39 30 Z" opacity="0.6" />
        </g>
      )}
    </svg>
  );
}

function Frame({ id, active, children }: { id: SceneId; active: boolean; children: ReactNode }) {
  return (
    <svg className={`scene scene--${id}`} data-active={active} viewBox="0 0 1600 560" preserveAspectRatio="xMidYMax slice" focusable="false">
      <rect width="1600" height="560" fill="var(--sc-sky)" />
      <circle className="sun" cx="1500" cy="300" r="56" fill="var(--sc-sun)" />
      <g className="cloud cloud--a" fill="var(--sc-cloud)">
        <path d="M200 120 q20 -36 60 -22 q22 -30 62 -6 q40 -2 38 28 z" />
      </g>
      <g className="cloud cloud--b" fill="var(--sc-cloud)">
        <path d="M900 80 q16 -28 48 -18 q18 -24 50 -4 q32 0 30 22 z" />
      </g>
      {children}
    </svg>
  );
}

function Birds() {
  return (
    <g className="birds" fill="none" stroke="var(--sc-bird)" strokeWidth="3" strokeLinecap="round">
      <path d="M0 0 q8 -8 16 0 q8 -8 16 0" />
      <path d="M44 -16 q6 -6 12 0 q6 -6 12 0" />
      <path d="M30 22 q6 -6 12 0 q6 -6 12 0" />
    </g>
  );
}

/* ───────────── Singapore: Marina Bay ───────────── */
function Singapore({ active }: { active: boolean }) {
  const towers = [
    [60, 230, 70, 0], [140, 180, 60, 1], [210, 260, 50, 0], [270, 150, 64, 1], [340, 210, 48, 0], [400, 130, 70, 1],
    [480, 190, 56, 0], [1090, 200, 52, 1], [1150, 160, 60, 0], [1220, 240, 46, 1], [1280, 180, 58, 0],
    [1350, 260, 50, 1], [1410, 150, 62, 0], [1480, 220, 54, 1], [1540, 190, 60, 0],
  ];
  return (
    <Frame id="singapore" active={active}>
      <g>
        {towers.map(([x, h, w, t], i) => (
          <g key={i}>
            <rect x={x} y={470 - h} width={w} height={h} rx="3" fill={t ? "var(--sc-far)" : "var(--sc-far2)"} />
            <path d={`M${x + 10} ${490 - h} v${h - 40} M${x + w / 2} ${490 - h} v${h - 40} M${x + w - 10} ${490 - h} v${h - 40}`} stroke="var(--sc-window)" strokeWidth="3" strokeDasharray="6 10" />
          </g>
        ))}
      </g>
      {/* Singapore Flyer, slowly turning */}
      <g transform="translate(640 330)">
        <path d="M-22 140 L0 0 L22 140" fill="none" stroke="var(--sc-mid)" strokeWidth="7" />
        <g className="spin">
          <circle r="112" fill="none" stroke="var(--sc-mid)" strokeWidth="6" />
          <path d="M0 -112 V112 M-112 0 H112 M-79 -79 L79 79 M79 -79 L-79 79" stroke="var(--sc-mid)" strokeWidth="2.5" />
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i / 12) * Math.PI * 2;
            return <circle key={i} cx={(Math.cos(a) * 112).toFixed(1)} cy={(Math.sin(a) * 112).toFixed(1)} r="8" fill="var(--sc-pop)" />;
          })}
        </g>
      </g>
      {/* Marina Bay Sands */}
      <g fill="var(--sc-mbs)">
        <path d="M790 470 L800 250 L842 250 L840 470 Z" />
        <path d="M872 470 L880 244 L922 244 L920 470 Z" />
        <path d="M954 470 L962 252 L1004 252 L1002 470 Z" />
        <path d="M766 238 Q 892 216 1028 230 L1030 250 Q 892 238 768 258 Z" />
      </g>
      <path d="M1028 230 L1050 236 L1030 250" fill="var(--sc-mbs)" />
      {/* Supertrees */}
      <g>
        {[[250, 320], [300, 280], [355, 330], [1060, 300]].map(([x, top], i) => (
          <g key={i} className="sway" style={{ animationDelay: `${i * 0.6}s` }}>
            <path d={`M${x - 8} 490 L${x - 4} ${top + 24} L${x + 4} ${top + 24} L${x + 8} 490 Z`} fill="var(--sc-tree)" />
            <path d={`M${x - 40} ${top} Q ${x} ${top + 36} ${x + 40} ${top} Q ${x} ${top + 14} ${x - 40} ${top} Z`} fill="var(--sc-pop)" />
          </g>
        ))}
      </g>
      {/* the bay */}
      <rect y="470" width="1600" height="90" fill="var(--sc-water)" />
      <g className="shimmer" stroke="var(--sc-cloud)" strokeWidth="4" strokeLinecap="round" opacity="0.7">
        <path d="M150 505 h80 M520 525 h60 M860 500 h120 M1200 530 h90 M1430 510 h70" />
      </g>
      <g className="boat">
        <path d="M0 0 h70 l-12 16 h-46 z" fill="var(--sc-boat)" />
        <path d="M30 0 v-36 l26 30 z" fill="#fff" />
      </g>
    </Frame>
  );
}

/* ───────────── Cambodia: Angkor Wat at golden hour ───────────── */
function prang(cx: number, base: number, h: number, w: number) {
  const top = base - h;
  return `M${cx - w / 2} ${base}
    C ${cx - w / 2} ${base - h * 0.45}, ${cx - w * 0.38} ${top + h * 0.28}, ${cx - w * 0.12} ${top + h * 0.1}
    L ${cx} ${top}
    L ${cx + w * 0.12} ${top + h * 0.1}
    C ${cx + w * 0.38} ${top + h * 0.28}, ${cx + w / 2} ${base - h * 0.45}, ${cx + w / 2} ${base} Z`;
}

function palm(x: number, base: number, h: number) {
  const top = base - h;
  const fronds = Array.from({ length: 9 }, (_, i) => {
    const a = Math.PI + (i / 8) * Math.PI;
    return `M${x} ${top} Q${(x + Math.cos(a) * 30).toFixed(1)} ${(top + Math.sin(a) * 30 - 10).toFixed(1)} ${(x + Math.cos(a) * 58).toFixed(1)} ${(top + Math.sin(a) * 38 + 14).toFixed(1)}`;
  }).join(" ");
  return { trunk: `M${x - 4} ${base} Q${x + 8} ${base - h / 2} ${x - 2} ${top} L${x + 3} ${top} Q${x + 12} ${base - h / 2} ${x + 4} ${base} Z`, fronds, top };
}

function Cambodia({ active }: { active: boolean }) {
  const palms = [[110, 490, 260], [210, 490, 200], [1340, 490, 240], [1440, 490, 290], [1530, 490, 200]];
  return (
    <Frame id="cambodia" active={active}>
      <rect y="430" width="1600" height="60" fill="var(--sc-far)" />
      <g fill="var(--sc-mid)">
        <path d={prang(800, 400, 250, 110)} />
        <path d={prang(670, 412, 180, 84)} />
        <path d={prang(930, 412, 180, 84)} />
        <path d={prang(565, 425, 125, 64)} />
        <path d={prang(1035, 425, 125, 64)} />
        <rect x="480" y="400" width="640" height="46" />
        <rect x="430" y="436" width="740" height="24" />
      </g>
      <g stroke="var(--sc-shade)" strokeWidth="4">
        <path d="M500 418 h600 M460 448 h680" />
      </g>
      <g fill="var(--sc-shade)">
        {[540, 600, 660, 720, 880, 940, 1000, 1060].map((x) => (
          <rect key={x} x={x} y="424" width="14" height="22" rx="7" />
        ))}
      </g>
      {palms.map(([x, base, h], i) => {
        const p = palm(x, base, h);
        return (
          <g key={i} className="sway" style={{ animationDelay: `${i * 0.5}s` }}>
            <path d={p.trunk} fill="var(--sc-trunk)" />
            <path d={p.fronds} stroke="var(--sc-tree)" strokeWidth="10" strokeLinecap="round" fill="none" />
          </g>
        );
      })}
      {/* the moat, with the temple's reflection */}
      <rect y="460" width="1600" height="100" fill="var(--sc-water)" />
      <g fill="var(--sc-mid)" opacity="0.32" transform="translate(0 920) scale(1 -1)">
        <path d={prang(800, 460, 150, 110)} />
        <path d={prang(670, 460, 110, 84)} />
        <path d={prang(930, 460, 110, 84)} />
      </g>
      <g className="shimmer" stroke="var(--sc-sun)" strokeWidth="4" strokeLinecap="round" opacity="0.8">
        <path d="M1240 495 h70 M1280 515 h50 M1220 535 h90 M300 510 h80 M700 540 h60" />
      </g>
      <g className="fly">
        <Birds />
      </g>
    </Frame>
  );
}

/* ───────────── Boulder: the Flatirons ───────────── */
function pines(y: number, from: number, to: number, step: number, h: number, seed: number) {
  const out: string[] = [];
  let x = from;
  let i = seed;
  while (x < to) {
    const th = h + ((i * 53) % 17) - 8;
    const tw = th * 0.42;
    out.push(`M${x} ${y} L${x + tw / 2} ${y - th} L${x + tw} ${y} Z`);
    x += step + (((i * 37) % 11) - 5);
    i++;
  }
  return out.join(" ");
}

function Boulder({ active }: { active: boolean }) {
  return (
    <Frame id="boulder" active={active}>
      <path
        d="M0 380 L120 300 L230 340 L340 270 L450 320 L560 250 L1050 250 L1160 310 L1270 260 L1380 320 L1490 270 L1600 310 L1600 560 L0 560 Z"
        fill="var(--sc-far)"
      />
      <path d="M340 270 L370 290 L355 292 Z M560 250 L590 268 L572 270 Z M1270 260 L1296 278 L1280 280 Z" fill="#fff" opacity="0.85" />
      <g fill="var(--sc-mid)">
        <path d="M540 470 L680 140 L730 152 L790 470 Z" />
        <path d="M730 470 L885 90 L945 106 L1010 470 Z" />
        <path d="M960 470 L1090 190 L1140 202 L1190 470 Z" />
      </g>
      <g fill="var(--sc-shade)">
        <path d="M680 140 L730 152 L790 470 L748 470 Z" />
        <path d="M885 90 L945 106 L1010 470 L964 470 Z" />
        <path d="M1090 190 L1140 202 L1190 470 L1152 470 Z" />
      </g>
      <g stroke="var(--sc-shade)" strokeWidth="4" strokeLinecap="round" opacity="0.6">
        <path d="M610 400 L690 220 M800 420 L890 190 M1020 420 L1095 260" />
      </g>
      <path d="M0 470 Q 400 430 800 465 T 1600 455 L1600 560 L0 560 Z" fill="var(--sc-hill)" />
      <path d={pines(505, -20, 1620, 26, 84, 3)} fill="var(--sc-tree)" />
      <rect y="500" width="1600" height="60" fill="var(--sc-water)" />
      {/* hot-air balloon drifting over the Front Range */}
      <g className="balloon">
        <path d="M0 0 c-34 0 -40 -50 0 -62 c40 12 34 62 0 62 z" fill="var(--sc-pop)" />
        <path d="M0 -62 c-14 14 -14 48 0 62 c14 -14 14 -48 0 -62 z" fill="var(--sc-sun)" />
        <path d="M-8 2 l2 14 h12 l2 -14" fill="none" stroke="var(--sc-trunk)" strokeWidth="2" />
        <rect x="-8" y="14" width="16" height="10" rx="2" fill="var(--sc-trunk)" />
      </g>
      <g className="fly">
        <Birds />
      </g>
    </Frame>
  );
}
