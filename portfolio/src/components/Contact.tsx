import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail
} from "lucide-react";
import React from "react";
import { profile } from "../data";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow" />

      <div className="container contact-container">
        <p className="section-eyebrow">05 / CONTACT</p>

        <h2>
          Let's build
          <br />
          something interesting.
        </h2>

        <p className="contact-description">
          I'm interested in backend engineering,
          Generative AI, agentic systems and challenging
          software problems.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="contact-email"
        >
          <Mail size={20} />
          {profile.email}
          <ArrowUpRight size={19} />
        </a>

        <p className="contact-phone">{profile.phone}</p>

        <div className="contact-links">
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={19} />
              GitHub
            </a>
          )}

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={19} />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;