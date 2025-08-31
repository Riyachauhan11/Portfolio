import React from "react";
import { ReactComponent as ItchIoIcon } from "../../assets/itch-io.svg";
import { ReactComponent as LeetCodeIcon } from "../../assets/leetcode.svg";
const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.linkedin.com/in/riya-chauhan-6b0872272/"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/Riyachauhan11"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href="https://leetcode.com/u/Riyachauhan11/"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LeetCodeIcon className="icon leet" />
      </a>
      <a
        href="https://riyaaaaaa.itch.io/"
        className="home__social-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ItchIoIcon className="icon itch" />
      </a>
    </div>
  );
};

export default HeaderSocials;
