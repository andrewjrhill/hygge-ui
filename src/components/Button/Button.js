import React from "react";
import "./Button.css";

const Button = props => {
  const {
    color,
    children,
    disabled,
    isLink,
    hrefLink,
    size,
    iconLabelBtn,
    textButton
  } = props;

  if (isLink === true) {
    return (
      <a href={hrefLink} className={`${color} ${textButton}`}>
        {children}
      </a>
    );
  } else {
    return (
      <button
        // className={classNames(color, size)} third-party imported className library another option instead of template literal example below. NB to import.
        className={`${color} ${size} ${textButton} ${iconLabelBtn}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
};

export default Button;
