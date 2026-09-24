import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin
} from "lucide-react";
import React from "react";
import { profile } from "../data";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" />

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="status-dot" />
          Available for interesting opportunities
        </div>

        <p className="hero-label">
          SOFTWARE ENGINEER / GENAI / BACKEND
        </p>

        <h1>
          Building software
          <br />
          <span className="gradient-text">
            that thinks.
          </span>
        </h1>

        <p className="hero-description">
          {profile.tagline}
        </p>

        <div className="hero-actions">
          <a href="#projects" className="primary-button">
            View my work
            <ArrowUpRight size={18} />
          </a>

          <a href="#contact" className="secondary-button">
            Contact me
          </a>
        </div>

        <div className="social-links">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          )}

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          )}

          {(profile.github || profile.linkedin) && <span className="social-divider" />}

          <span className="location-text">
            {profile.location}
          </span>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
        <ArrowDown size={16} />
      </a>
    </section>
  );
}

export default Hero;