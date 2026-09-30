"use client";

import { useEffect, useState } from "react";
import { Mark } from "./Mark";

const links = [
  { href: "#home", label: "Home" },
  { href: "#book", label: "Services" },
  { href: "#features", label: "Features" },
  { href: "#fleet", label: "Rates" },
  { href: "#coverage", label: "Coverage" },
  { href: "#about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={solid || open ? "site-header is-solid" : "site-header"}>
      <div className="wrap header-bar">
        <a className="brand" href="#home">
          <Mark />
          <span>Chi-Go</span>
        </a>
        <nav id="site-nav" className={open ? "nav open" : "nav"} aria-label="Page">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-end">
          <a className="book-now" href="#book" onClick={() => setOpen(false)}>
            Book now
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <i />
            <i />
          </button>
        </div>
      </div>
    </header>
  );
}
