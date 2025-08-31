import React, { useEffect, useState } from "react";
import "./projects.css";
import Menu from "./Menu";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Fullstack");

  const [items, setItems] = useState(
    Menu.filter((elem) => elem.category === activeCategory)
  );

  const filterItem = (categoryItem) => {
    if (categoryItem === activeCategory) return;

    const updatedItems = Menu.filter(
      (currentElem) => currentElem.category === categoryItem
    );
    setItems(updatedItems);
    setActiveCategory(categoryItem);
  };

  useEffect(() => {
    const cards = document.querySelectorAll(".work__card");

    cards.forEach((card, index) => {
      card.classList.remove("animate");
      setTimeout(() => {
        card.classList.add("animate");
      }, index * 100);
    });
  }, [items]);

  return (
    <section className="work container section" id="projects">
      <h2 className="section__title">Projects</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => filterItem("Fullstack")}>
          Fullstack
        </span>
        <span className="work__item" onClick={() => filterItem("AI")}>
          AI/ML
        </span>
        <span className="work__item" onClick={() => filterItem("Game")}>
          Games
        </span>
        <span
          className="work__item"
          onClick={() => filterItem("Published Patent")}
        >
          Published Patents
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem) => {
          const { id, image, title, category, link, ytlink } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img
                  src={image}
                  alt=""
                  className={`work__img ${id}-img`}
                  onLoad={(e) => e.currentTarget.classList.add("loaded")}
                  loading="lazy"
                />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <div className="work__bottom">
                <p className="work__description">{elem.description}</p>
                <div className="work__tech">
                  {elem.tech.map((t, index) => (
                    <span key={index} className="tech__tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="work__links">
                  <a
                    href={link}
                    className="work__button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-link work__button-icon"></i>
                  </a>

                  {category === "Fullstack" && ytlink && (
                    <a
                      href={ytlink}
                      className="work__button"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
