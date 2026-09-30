import { Mark } from "./Mark";
import { Reveal } from "./Reveal";

export function Download() {
  return (
    <Reveal id="apps" className="band download">
      <div className="columns-bg" aria-hidden="true" />
      <div className="wrap download-grid">
        <div id="about" className="rise">
          <h2>Get the Chi-Go apps</h2>
          <p className="lede">
            The rider app is for the person who books. The delivery app is for the person
            carrying the order. Same fleet, two jobs, one trip record.
          </p>
          <a
            className="rider-qr"
            href="https://drive.google.com/file/d/1sE-oGgCfo-2koPWa20D_PdMqyq2Bu06-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/chigo-rider-qr.svg" alt="" />
            <span>
              <small>Scan to download</small>
              <strong>Chi-Go Rider</strong>
              Download the rider app
            </span>
          </a>
          <ul className="app-points">
            <li>Manage the trip</li>
            <li>Live tracking</li>
            <li>Book in seconds</li>
            <li>Delivery and rides in one fleet</li>
          </ul>
        </div>
        <div className="phones" aria-hidden="true">
          <div className="device device-logo">
            <div className="device-screen splash">
              <Mark size={72} />
              <strong>Chi-Go</strong>
              <span>Rider</span>
            </div>
          </div>
          <div className="device device-map">
            <div className="device-screen">
              <div className="map-ui">
                <strong>Order on the way</strong>
                <em>Delivery</em>
                <i className="route-glow" />
              </div>
              <div className="driver-card">
                <b>Track the handoff</b>
                <span>Pickup to drop-off</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
