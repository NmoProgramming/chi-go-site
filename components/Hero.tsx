"use client";

import { FormEvent, useState } from "react";
import { HeroCar } from "./Cars";

type Service = "ride" | "delivery" | "hourly";

const services: { id: Service; label: string; button: string }[] = [
  { id: "ride", label: "Book a car", button: "Book the car now" },
  { id: "delivery", label: "Deliver an order", button: "Request delivery" },
  { id: "hourly", label: "Rent by the hour", button: "Start hourly hire" },
];

const vehicles = ["Standard", "Luxury", "SUV", "Family van"];

export function Hero() {
  const [service, setService] = useState<Service>("ride");
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [vehicle, setVehicle] = useState(vehicles[0]);
  const [error, setError] = useState("");
  const [ready, setReady] = useState(false);

  const current = services.find((item) => item.id === service) ?? services[0];
  const secondLabel = service === "hourly" ? "Duration" : service === "delivery" ? "Drop-off" : "Destination";
  const secondPlaceholder =
    service === "hourly" ? "How many hours?" : service === "delivery" ? "Where should it be delivered?" : "Where are you going?";
  const firstPlaceholder =
    service === "delivery" ? "Pickup point for the order" : "Set your current location";

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (!pickup.trim() || !dropoff.trim()) {
      setError("Add a pickup and a destination to prepare the request.");
      setReady(false);
      return;
    }
    setError("");
    setReady(true);
  }

  return (
    <section id="home" className="hero is-in">
      <div className="bokeh" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="beams" aria-hidden="true">
        <i />
      </div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className="rise">
            Your car is always closer.
            <span>Book it fast and safely.</span>
          </h1>
          <p className="lede rise d2">
            Chi-Go runs a smart fleet across Syrian cities. Daily trips that take less effort,
            and feel more comfortable.
          </p>
          <ul className="pills rise d3">
            <li>Professional drivers</li>
            <li>Fast arrival</li>
            <li>High safety</li>
          </ul>
        </div>
        <form id="book" className="book rise d2" onSubmit={onSubmit}>
          <div className="tabs" role="tablist" aria-label="Service">
            {services.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={service === item.id}
                className={service === item.id ? "is-on" : undefined}
                onClick={() => {
                  setService(item.id);
                  setReady(false);
                  setError("");
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          {ready ? (
            <div className="ready">
              <p className="ready-kicker">Ready for the app</p>
              <h2>{current.label}</h2>
              <p>
                {pickup} → {dropoff}
              </p>
              <p>{vehicle}</p>
              <a className="btn-silver" href="#apps">
                Continue in the apps
              </a>
              <button type="button" className="text-btn" onClick={() => setReady(false)}>
                Edit request
              </button>
            </div>
          ) : (
            <>
              <label className="field">
                <span>Pickup</span>
                <input
                  value={pickup}
                  onChange={(event) => setPickup(event.target.value)}
                  placeholder={firstPlaceholder}
                  autoComplete="off"
                />
              </label>
              <label className="field">
                <span>{secondLabel}</span>
                <input
                  value={dropoff}
                  onChange={(event) => setDropoff(event.target.value)}
                  placeholder={secondPlaceholder}
                  autoComplete="off"
                />
              </label>
              <label className="field">
                <span>Vehicle</span>
                <select value={vehicle} onChange={(event) => setVehicle(event.target.value)}>
                  {vehicles.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              {error ? <p className="form-error">{error}</p> : null}
              <button className="btn-silver" type="submit">
                {current.button}
              </button>
            </>
          )}
        </form>
      </div>
      <div className="hero-stage" aria-hidden="true">
        <HeroCar />
        <div className="device">
          <div className="device-screen">
            <div className="map-ui">
              <strong>Damascus</strong>
              <em>8 min away</em>
              <i className="route-glow" />
            </div>
            <div className="driver-card">
              <b>Your driver</b>
              <span>4.9 · {vehicle}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
