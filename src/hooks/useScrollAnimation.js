import { useEffect } from "react";

const useScrollAnimation = (
  selector = ".section__title, .event__card, .timeline__item"
) => {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only add animate if it hasn't been added yet
            if (!entry.target.classList.contains("animate")) {
              entry.target.classList.add("animate");
            }

            // Unobserve once animated
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
};

export default useScrollAnimation;
