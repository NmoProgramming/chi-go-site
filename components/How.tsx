import { Reveal } from "./Reveal";

const steps = [
  { n: "1", title: "Set your point", text: "Mark pickup and destination on the map." },
  { n: "2", title: "Choose the car", text: "Pick the class that fits this trip." },
  { n: "3", title: "Confirm", text: "The nearest verified driver accepts and heads to you." },
  { n: "4", title: "Follow the trip", text: "Track it until you arrive, in every city we cover." },
];

export function How() {
  return (
    <Reveal id="how" className="band how">
      <div className="skyline" aria-hidden="true" />
      <div className="field field-how" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="wrap how-grid">
        <div id="coverage" className="city-block rise">
          <h2>With you in every city</h2>
          <p>Damascus, Aleppo, Homs, and Latakia.</p>
        </div>
        <div>
          <header className="band-head rise d2">
            <h2>How Chi-Go works</h2>
            <p>Four steps from the pin to the curb.</p>
          </header>
          <ol className="steps">
            <i className="step-light" aria-hidden="true" />
            {steps.map((step, index) => (
              <li key={step.n} className={`rise d${index + 2}`}>
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Reveal>
  );
}
