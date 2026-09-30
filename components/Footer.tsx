import { Mark } from "./Mark";

const links = [
  { href: "#about", label: "About" },
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#fleet", label: "Vehicles" },
  { href: "#coverage", label: "Coverage" },
  { href: "#book", label: "Book" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-bar">
        <a className="brand" href="#home">
          <Mark />
          <span>Chi-Go</span>
        </a>
        <nav aria-label="Footer">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <small>© {new Date().getFullYear()} Chi-Go</small>
      </div>
      <div className="wrap footer-end">
        <a className="powered" href="https://nmo.business" target="_blank" rel="noopener noreferrer">
          <span>Powered by</span>
          <img src="/nmo-logo.webp" alt="NMO" />
        </a>
      </div>
    </footer>
  );
}
