import { Reveal } from "./Reveal";

function Glyph({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={d} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const features = [
  {
    title: "Fair fares",
    text: "One clear price for the trip. No hidden fees added after you confirm.",
    icon: "M12 3.5 14.2 9h5.3l-4.3 3.2 1.6 5.3L12 14.8 7.2 17.5 8.8 12.2 4.5 9h5.3L12 3.5z",
  },
  {
    title: "Fast arrival",
    text: "The request goes to the nearest available driver, not to a queue you cannot see.",
    icon: "M13 3 5 13h6l-1 8 9-12h-6l0-6z",
  },
  {
    title: "Safer rides",
    text: "Drivers are verified before they take a trip, and the journey stays on the map.",
    icon: "M12 3.5 19 6.2v5.4c0 4.2-2.8 7-7 8.9-4.2-1.9-7-4.7-7-8.9V6.2L12 3.5z",
  },
  {
    title: "Support in the app",
    text: "Help sits inside the trip, around the clock, tied to the ride itself.",
    icon: "M4 13a8 8 0 0 1 16 0M4 13v4a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2zm16 0v4a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2zM18 19a3 3 0 0 1-3 2h-2",
  },
];

export function Features() {
  return (
    <Reveal id="features" className="band">
      <div className="wrap">
        <header className="band-head center rise">
          <h2>What you get with Chi-Go</h2>
          <p>More than a car on the way. A trip you can follow from request to arrival.</p>
        </header>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <article key={feature.title} className={`feature rise d${index + 2}`}>
              <span className="beam" aria-hidden="true" />
              <i className="glyph">
                <Glyph d={feature.icon} />
              </i>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
