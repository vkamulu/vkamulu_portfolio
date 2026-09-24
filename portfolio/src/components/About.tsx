import { Code2, Cpu, Database, Network } from "lucide-react";
import React from "react";
import { about, achievements, education } from "../data";

const cards = [
  {
    icon: Cpu,
    title: "Generative AI",
    text: "LLM applications, intelligent workflows and agentic systems."
  },
  {
    icon: Code2,
    title: "Backend",
    text: "API-driven backend systems with Python and clean architecture."
  },
  {
    icon: Database,
    title: "Data",
    text: "Retrieval systems, data pipelines and knowledge workflows."
  },
  {
    icon: Network,
    title: "Systems",
    text: "Thinking about scalability, reliability and system design."
  }
];

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="section-eyebrow">01 / ABOUT</p>

          <h2>
            Engineering first.
            <br />
            AI where it adds value.
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-copy">
            <p>{about.description}</p>

            <p>
              My interest sits at the intersection of
              software engineering and artificial intelligence:
              designing systems that are robust enough for
              production while still taking advantage of what
              modern AI can do.
            </p>

            <div className="highlight-list">
              {about.highlights.map((item) => (
                <div key={item} className="highlight-item">
                  <span className="highlight-dot" />
                  {item}
                </div>
              ))}
            </div>

            <div className="resume-details">
              <div>
                <p className="small-label">EDUCATION</p>
                <h3>{education.institution}</h3>
                <p>{education.degree} · {education.result}</p>
                <span>{education.period}</span>
              </div>

              <div>
                <p className="small-label">ACHIEVEMENTS</p>
                <ul>
                  {achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="about-cards">
            {cards.map((card) => {
              const Icon = card.icon;

              return (
                <div className="about-card" key={card.title}>
                  <div className="about-card-icon">
                    <Icon size={21} />
                  </div>

                  <h3>{card.title}</h3>

                  <p>{card.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;