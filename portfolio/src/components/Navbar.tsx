import { Terminal } from "lucide-react";
import React from "react";
const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" className="logo">
          <span className="logo-icon">
            <Terminal size={18} />
          </span>

          <span>VK</span>
        </a>

        <nav className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;