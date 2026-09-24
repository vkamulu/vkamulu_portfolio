import {
  ArrowUpRight,
  Github,
  Sparkles
} from "lucide-react";
import React from "react";
import { projects } from "../data";

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-heading projects-heading">
          <div>
            <p className="section-eyebrow">03 / PROJECTS</p>

            <h2>
              Things I've
              <br />
              been building.
            </h2>
          </div>

          <p className="section-side-text">
            A selection of projects exploring AI,
            backend engineering and intelligent systems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.title}
            >
              <div className="project-top">
                <span className="project-number">
                  0{index + 1}
                </span>

                <div className="project-icons">
                  {project.featured && (
                    <Sparkles size={18} />
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-footer">
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View
                    <ArrowUpRight size={17} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;