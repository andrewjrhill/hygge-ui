import React, { useState } from "react";
import "./Textfield.css";

const Textfield = props => {
  const { id, HUIFilledTextfield, HUIOutlinedTextfield, SelectForm } = props;
  const [selectCurrency, setSelectCurrency] = useState({ value: "" });

  const handleChange = e => {
    setSelectCurrency({ value: e.target.value });
  };

  const handleSubmit = e => {
    alert(selectCurrency.value);
    e.preventDefault();
  };

  if (SelectForm === true) {
    return (
      <div className="wrap">
        <div className="selectTextfield">
          <form onSubmit={handleSubmit}>
            <select
              class="select-text"
              required
              value={selectCurrency.value}
              onChange={handleChange}
            >
              <option value="" disabled selected></option>
              <option value="dollar">$</option>
              <option value="pound">£</option>
              <option value="euro">€</option>
              <option value="krone">kr</option>
            </select>
            <span class="select-highlight"></span>
            <span class="select-bar"></span>
            <label class="select-label">Select</label>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <form>
        <label className={`${HUIFilledTextfield} ${HUIOutlinedTextfield}`}>
          <input type="text" placeholder=" " id={id}></input>
          <span>{id}</span>
        </label>
      </form>
    );
  }
};

export default Textfield;
