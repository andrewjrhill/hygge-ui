import React, { useState } from "react";
import "./Checkbox.css";
import "../Button/Button.css";

const Checkbox = () => {
  const [checked, setChecked] = useState("");

  const handleChangeInput = event => {
    setChecked(event.target.value);
  };

  return (
    <input
      className="basicCheckboxStyle"
      type="checkbox"
      value={checked}
      onChange={handleChangeInput}
    />
  );
};
export default Checkbox;
