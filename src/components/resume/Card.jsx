import React from "react";

const Card = (props) => {
  return (
    <div className="timeline__item" style={{ "--i": props.index }}>
      <i className={props.icon}></i>
      <span className="timeline__date">{props.year}</span>
      <h3 className="timeline__title">{props.title}</h3>
      <p className="timeline__text">{props.desc}</p>

      {props.subtitle && <p className="timeline__subtitle">{props.subtitle}</p>}

      <ul className="timeline__points">
        {props.points &&
          props.points.map((point, index) => (
            <li key={index} className="timeline__point">
              {point}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Card;
