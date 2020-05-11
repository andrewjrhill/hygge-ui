import React, { useState } from "react";
import "./Textfield.css";

function UseTextfield() {
  const [selectInput, setSelectInput] = useState({ value: "grapefruit" });

  const handleSelectChange = e => {
    setSelectInput({ value: e.target.value });
  };

  const handleSelectSubmit = e => {
    alert("Your favorite flavor is: " + selectInput.value);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSelectSubmit}>
      <label>Pick your favorite fruit:</label>
      <select
        className="Select"
        value={selectInput.value}
        onChange={handleSelectChange}
      >
        <option value="grapefruit">Grapefruit</option>
        <option value="strawberry">Strawberry</option>
        <option value="watermellon">Watermellon</option>
        <option value="mango">Mango</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default UseTextfield;
