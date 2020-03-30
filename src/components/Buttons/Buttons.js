import React from "react";
import "./Buttons.css";

const Button = props => {
  const { color, children, disabled, isLink, hrefLink, size } = props;

  if (isLink === true) {
    return (
      <a href={hrefLink} className={color}>
        {children}
      </a>
    );
  } else {
    return (
      <button
        // className={classNames(color, size)} third-party imported className library another option instead of template literal example below. NB to import.
        className={`${color} ${size}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
};

export default Button;
