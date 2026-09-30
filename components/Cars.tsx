type Tone = "silver" | "black" | "suv" | "van";

const paint: Record<Tone, { body: string; glass: string; trim: string }> = {
  silver: { body: "#e7e7ea", glass: "#8ea0b5", trim: "#bfc3ca" },
  black: { body: "#16181d", glass: "#6d7c8e", trim: "#3a3e46" },
  suv: { body: "#f2f2f4", glass: "#8ea0b5", trim: "#c8ccd2" },
  van: { body: "#1a1c22", glass: "#667588", trim: "#3c4048" },
};

export function CarArt({ tone }: { tone: Tone }) {
  const color = paint[tone];
  const tall = tone === "suv" || tone === "van";

  return (
    <svg className="car-art" viewBox="0 0 360 160" aria-hidden="true">
      <ellipse cx="180" cy="142" rx="130" ry="10" fill="rgba(0,0,0,0.45)" />
      {tall ? (
        <path
          d="M48 112h250c10 0 16 8 16 16v10H40v-8c0-10 4-18 8-18z"
          fill={color.body}
        />
      ) : null}
      <path
        d={
          tall
            ? "M62 112 92 62h150l34 50H62z"
            : "M46 118c8-2 22-22 40-30l48-28c10-6 24-8 48-8h62c16 0 28 6 40 20l22 28H46z"
        }
        fill={color.body}
        stroke={color.trim}
      />
      <path
        d={tall ? "M100 66h120l22 40H92L100 66z" : "M138 58h78c8 0 16 4 22 14l10 20H128l10-34z"}
        fill={color.glass}
        opacity="0.9"
      />
      <circle cx={tall ? 108 : 104} cy="124" r="18" fill="#111" />
      <circle cx={tall ? 108 : 104} cy="124" r="8" fill="#c8c8c8" />
      <circle cx={tall ? 250 : 256} cy="124" r="18" fill="#111" />
      <circle cx={tall ? 250 : 256} cy="124" r="8" fill="#c8c8c8" />
      <path d="M52 104h18" stroke="#f4f1e4" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function HeroCar() {
  return (
    <svg className="hero-car-svg" viewBox="0 0 820 250" aria-hidden="true">
      <ellipse cx="390" cy="214" rx="280" ry="16" fill="rgba(0,0,0,0.55)" />
      <path
        d="M120 168c18-4 40-36 62-46l70-40c16-8 34-12 70-12h120c28 0 48 8 66 28l48 58h168c18 6 28 18 30 32H96c2-8 8-16 24-20z"
        fill="#12141a"
        stroke="#2c313b"
      />
      <path d="M250 78h150c14 0 28 6 38 20l22 36H230l20-56z" fill="#243040" />
      <path d="M268 92h70l8 28h-90l12-28z" fill="#8fb4d4" opacity="0.35" />
      <path d="M150 150h46" stroke="#fff6df" strokeWidth="4" strokeLinecap="round" />
      <path d="M620 156h28" stroke="#ffd2a8" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <circle cx="230" cy="186" r="28" fill="#0a0a0a" />
      <circle cx="230" cy="186" r="12" fill="#d9d9d9" />
      <circle cx="230" cy="186" r="4" fill="#222" />
      <circle cx="560" cy="186" r="28" fill="#0a0a0a" />
      <circle cx="560" cy="186" r="12" fill="#d9d9d9" />
      <circle cx="560" cy="186" r="4" fill="#222" />
      <text x="330" y="150" fill="#f2f2f2" fontSize="18" fontFamily="sans-serif">
        Chi-Go
      </text>
    </svg>
  );
}
