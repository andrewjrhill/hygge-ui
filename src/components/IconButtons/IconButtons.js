import React from "react";
import "./IconButtons.css";
import "../Buttons/Buttons.css";

const IconButton = props => {
  const { color, children, disabled, size } = props;

  return (
    <button className={`${color} ${size} iconButton`} disabled={disabled}>
      {children}
    </button>
  );
};

export default IconButton;
