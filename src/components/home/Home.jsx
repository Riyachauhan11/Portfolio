import React from "react";
import HeaderSocials from "./HeaderSocials";
import "./home.css";
import Me from "../../assets/avatar-1.svg";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Riya Chauhan</h1>
        <span className="home__education">
          A Final Year Student pursuing B.Tech in CSE
        </span>

        <HeaderSocials />

        <a
          href="https://drive.google.com/file/d/1k5Fzm98ol-cQH7EqRIm3FhEsBZBNwXL0/view?usp=sharing"
          className="btn"
        >
          Resume
        </a>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  );
};

export default Home;
