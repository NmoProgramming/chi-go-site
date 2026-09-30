"use client";

import { useRef } from "react";
import { CarArt } from "./Cars";

const fleet = [
  {
    tone: "silver" as const,
    title: "Standard",
    text: "Everyday city trips at one clear fare.",
    score: "4.8",
  },
  {
    tone: "black" as const,
    title: "Luxury",
    text: "A quieter cabin when the trip matters.",
    score: "4.9",
  },
  {
    tone: "suv" as const,
    title: "SUV",
    text: "More room for longer distances and extra bags.",
    score: "4.9",
  },
  {
    tone: "van" as const,
    title: "Family van",
    text: "For groups, families, and a plan with more than two seats.",
    score: "4.8",
  },
];

export function Fleet() {
  const scroller = useRef<HTMLDivElement>(null);

  function showNext() {
    const node = scroller.current;
    if (!node) return;
    const max = node.scrollWidth - node.clientWidth;
    if (node.scrollLeft >= max - 12) node.scrollTo({ left: 0, behavior: "smooth" });
    else node.scrollBy({ left: 300, behavior: "smooth" });
  }

  return (
    <section id="fleet" className="band fleet">
      <div className="wrap">
        <header className="band-head center">
          <h2>Choose what fits</h2>
          <p>A set of vehicles for different trips. The fare you confirm is the fare you pay.</p>
        </header>
        <div className="fleet-row">
          <button type="button" className="fleet-next" onClick={showNext}>
            <span className="sr-only">Show more vehicles</span>
            <i />
          </button>
          <div className="fleet-scroller" ref={scroller}>
            {fleet.map((car) => (
              <article key={car.title} className="vehicle">
                <div className="vehicle-art">
                  <CarArt tone={car.tone} />
                  <span className="score">{car.score}</span>
                </div>
                <h3>{car.title}</h3>
                <p>{car.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
