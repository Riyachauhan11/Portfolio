import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { FaSun, FaMoon } from "react-icons/fa";

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [toggle, showMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, [setActive]);

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <nav className="nav">
          <div className="nav__menu">
            <div className="nav__list">
              <ul>
                <li className="nav__item">
                  <div className="theme-toggle top">
                    <button onClick={() => setDarkMode(!darkMode)}>
                      {darkMode ? (
                        <FaSun size={22} color="#fff" />
                      ) : (
                        <FaMoon size={22} />
                      )}
                    </button>
                  </div>
                </li>
                <li className="nav__item">
                  <a
                    href="#home"
                    className={
                      active === "home" ? "nav__link active" : "nav__link"
                    }
                  >
                    <i className="icon-home"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#about"
                    className={
                      active === "about" ? "nav__link active" : "nav__link"
                    }
                  >
                    <i className="icon-user-following"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#education"
                    className={
                      active === "education" ? "nav__link active" : "nav__link"
                    }
                  >
                    <i className="icon-graduation"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#projects"
                    className={
                      active === "projects" ? "nav__link active" : "nav__link"
                    }
                  >
                    <i className="icon-layers"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#events"
                    className={
                      active === "events" ? "nav__link active" : "nav__link"
                    }
                  >
                    <i className="icon-globe"></i>
                  </a>
                </li>
                <li className="nav__item">
                  <a
                    href="#contact"
                    className={
                      active === "contact" ? "nav__link active" : "nav__link"
                    }
                  >
                    <i className="icon-bubble"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">
            © {new Date().getFullYear()} <b>Riya Chauhan</b>
          </span>
        </div>
      </aside>

      <div
        className={
          toggle
            ? "nav__toggle nav__toggle-open fixed bottom-4 right-4"
            : "nav__toggle fixed bottom-4 right-4"
        }
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
