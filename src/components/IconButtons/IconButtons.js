import React from "react";
import classNames from "classnames";
import "./IconButtons.css";
import "../Buttons/Buttons.css";

const IconButton = props => {
  const { color, children, disabled } = props;

  return (
    <button className={classNames(color, "iconButton")} disabled={disabled}>
      {children}
    </button>
  );
};

export default IconButton;
