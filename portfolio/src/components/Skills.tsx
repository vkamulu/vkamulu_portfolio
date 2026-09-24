import { Brain, Code2, Server, Wrench } from "lucide-react";
import React from "react";
import { skills } from "../data";

const groups = [
  { key: "languages", title: "Languages", icon: Code2 },
  { key: "ai", title: "AI & Machine Learning", icon: Brain },
  { key: "backend", title: "Backend & Systems", icon: Server },
  { key: "tools", title: "Tools", icon: Wrench }
] as const;

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="section-eyebrow">04 / SKILLS</p>

          <h2>
            Tools for building
            <br />
            useful systems.
          </h2>
        </div>

        <div className="skills-grid">
          {groups.map((group) => {
            const Icon = group.icon;

            return (
              <article className="skill-group" key={group.key}>
                <div className="skill-header">
                  <div className="skill-icon">
                    <Icon size={19} />
                  </div>

                  <h3>{group.title}</h3>
                </div>

                <div className="skill-items">
                  {skills[group.key].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
