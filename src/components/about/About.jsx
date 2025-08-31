import React from "react";
import "./about.css";
import Avatar2 from "../../assets/avatar-2.svg";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Avatar2} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I'm <strong>Riya Chauhan</strong>, a final-year Computer Science &
              Engineering student at Sharda University.
            </p>
            <p className="about__description">
              My journey has centered on web development, with a growing
              interest in generative AI and its integration into different
              projects I’ve worked on.
            </p>
            <p className="about__description">
              I’ve had the opportunity to work as a researcher at IIT, where I
              gained valuable insights into VLSI. Alongside this, I co-authored
              and published two patents through collaborative research with my
              university.
            </p>
            <p className="about__description">
              Beyond research, I’ve contributed to open source, successfully
              merging numerous PRs and collaborating with developers across the
              country. I’m always open to new opportunities, challenges, and
              impactful projects. Feel free to connect with me.
            </p>

            <div className="about__details">
              <ul className="about__list">
                <li className="about__item">
                  <i className="fas fa-angle-right"></i>
                  <strong>Email: </strong>
                  <a href="mailto:riyacn112@gmail.com">riyacn112@gmail.com</a>
                </li>
                <li className="about__item">
                  <i className="fas fa-angle-right"></i>
                  <strong>Languages: </strong>
                  <span>English & Hindi</span>
                </li>
                <li className="about__item">
                  <i className="fas fa-angle-right"></i>
                  <strong>Location: </strong>
                  <span>Greater Noida, India</span>
                </li>
                <li className="about__item">
                  <i className="fas fa-angle-right"></i>
                  <strong>CGPA: </strong>
                  <span>9.2/10</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
