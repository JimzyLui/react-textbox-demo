import React from "react";
import stringifyEvent from "../fx/printing.js";

const Checkbox_simple = props => {
  const { id, label, checked } = props;
  const handleChange = e => {
    console.log(`${e.target.getAttribute("id")}: ${e.target.checked}`);
    // console.log(`Target: ${JSON.stringify(e.target, null, " ")}`);
  };
  return (
    <div id="idCheckbox" className="checkbox">
      <input
        id={id}
        type="checkbox"
        defaultChecked={checked}
        onChange={handleChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox_simple;
