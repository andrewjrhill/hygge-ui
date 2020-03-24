import React from "react";
import "./Button.css";

const Button = props => {
  const { color, children, disabled, isLink, hrefLink } = props;

  if (isLink === true) {
    return (
      <a href={hrefLink} className={color}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={color} disabled={disabled}>
        {children}
      </button>
    );
  }
};

export default Button;
