import React from "react";
import Data from "./Data";
import Card from "./Card";
import "./resume.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Resume = () => {
  useScrollAnimation(".section__title, .timeline__item");

  return (
    <section className="resume container section" id="education">
      <h2 className="section__title">Education & Internships</h2>

      <div className="resume__container grid">
        {/* Education Section */}
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <Card
                  key={id}
                  index={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                  subtitle={val.subtitle}
                  points={val.points}
                />
              );
            }
            return null;
          })}
        </div>

        {/* Internships/experience Section */}
        <div className="timeline grid">
          {Data.map((val, id) => {
            if (val.category === "experience") {
              return (
                <Card
                  key={id}
                  index={id}
                  icon={val.icon}
                  title={val.title}
                  year={val.year}
                  desc={val.desc}
                  subtitle={val.subtitle}
                  points={val.points}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default Resume;
