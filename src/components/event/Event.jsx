import React from "react";
import "./event.css";
import Image1 from "../../assets/img1.png";
import Image2 from "../../assets/img2.png";
import Image3 from "../../assets/img3.png";

import useScrollAnimation from "../../hooks/useScrollAnimation";
const Event = () => {
  useScrollAnimation(".event__card");

  return (
    <section className="event container section" id="events">
      <h2 className="section__title">Events & Achievements</h2>

      <div className="event__container grid">
        <div className="event__card">
          <div className="event__thumb">
            <a href="https://www.linkedin.com/posts/riya-chauhan-6b0872272_googlegirlhackathon2025-google-ai-activity-7314899665185865729-TjaN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKxCGQBr5zlUsHKNRWO3VCDJyHyD8DpqdM">
              <span className="event__category">Hackathon</span>
            </a>
            <a href="https://www.linkedin.com/posts/riya-chauhan-6b0872272_googlegirlhackathon2025-google-ai-activity-7314899665185865729-TjaN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKxCGQBr5zlUsHKNRWO3VCDJyHyD8DpqdM">
              <img src={Image1} alt="" className="event__img" />
            </a>
          </div>
          <div className="event__details">
            <h3 className="event__title">
              Google Girl Hackathon 2025 - Finalist
            </h3>
            <div className="event__meta">
              <span>
                Selected as one of 76 finalists from over 58,000 registrations
                in Google’s hackathon for women.
              </span>
            </div>
          </div>
        </div>
        <div className="event__card">
          <div className="event__thumb">
            <a href="https://www.linkedin.com/posts/riya-chauhan-6b0872272_girlscriptsummerofcode-gssoc-opensource-activity-7262436329983000576-DaFC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKxCGQBr5zlUsHKNRWO3VCDJyHyD8DpqdM">
              <span className="event__category">Open Source</span>
            </a>
            <a href="https://www.linkedin.com/posts/riya-chauhan-6b0872272_girlscriptsummerofcode-gssoc-opensource-activity-7262436329983000576-DaFC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKxCGQBr5zlUsHKNRWO3VCDJyHyD8DpqdM">
              <img src={Image2} alt="" className="event__img" />
            </a>
          </div>
          <div className="event__details">
            <h3 className="event__title">
              GSSOC Extd Open Source program - 22nd Place
            </h3>
            <div className="event__meta">
              <span>
                Successfully merged 94 PRs across multiple projects as a
                contributor in GSSOC Extd, a program organized by GirlScript
                Foundation.
              </span>
            </div>
          </div>
        </div>
        <div className="event__card">
          <div className="event__thumb">
            <a href="https://www.linkedin.com/posts/riya-chauhan-6b0872272_technokrats4-codingcompetition-shardauniversity-activity-7240024040801812481-3bHR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKxCGQBr5zlUsHKNRWO3VCDJyHyD8DpqdM">
              <span className="event__category">Coding Contest</span>
            </a>
            <a href="https://www.linkedin.com/posts/riya-chauhan-6b0872272_technokrats4-codingcompetition-shardauniversity-activity-7240024040801812481-3bHR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEKxCGQBr5zlUsHKNRWO3VCDJyHyD8DpqdM">
              <img src={Image3} alt="" className="event__img" />
            </a>
          </div>
          <div className="event__details">
            <h3 className="event__title">
              Technokrats 4.0 Coding Competition - 1st Place
            </h3>
            <div className="event__meta">
              <span>
                Outperformed 150+ participants in Technokrats 4.0, a competitive
                coding event organized by Sharda University.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
