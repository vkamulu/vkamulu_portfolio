import { BriefcaseBusiness, MapPin } from "lucide-react";

import { experience } from "../data";
import React from "react";
function Experience() {
  return (
    <section className="section section-muted" id="experience">
      <div className="container">
        <div className="section-heading">
          <p className="section-eyebrow">02 / EXPERIENCE</p>

          <h2>
            Where I've
            <br />
            been building.
          </h2>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article
              className="experience-card"
              key={`${item.company}-${item.role}`}
            >
              <div className="experience-top">
                <div>
                  <div className="experience-company">
                    <BriefcaseBusiness size={18} />
                    {item.company}
                  </div>

                  <h3>{item.role}</h3>
                </div>

                <div className="experience-meta">
                  <span>{item.period}</span>

                  <span className="experience-location">
                    <MapPin size={15} />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="experience-description">
                {item.description}
              </p>

              <div className="experience-content">
                <div>
                  <p className="small-label">KEY WORK</p>

                  <ul className="achievement-list">
                    {item.achievements.map((achievement) => (
                      <li key={achievement}>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="small-label">TECHNOLOGIES</p>

                  <div className="tag-list">
                    {item.technologies.map((technology) => (
                      <span className="tag" key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;