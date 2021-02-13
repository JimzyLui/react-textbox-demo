import React from "react";
import stringifyEvent from "../fx/printing.js";

const Checkbox_simple = props => {
  const { id, name, label, checked, setControlProps, controlProps } = props;
  const handleChange = e => {
    // console.log(`${e.target.getAttribute("id")}: ${e.target.checked}`);
    // console.log(`Target: ${JSON.stringify(e.target, null, " ")}`);
    const { name, checked } = e.target;
    console.log(`${name}: ${checked}`);
    setControlProps({ ...controlProps, [name]: checked });
  };
  return (
    <div id="idCheckbox" className="checkbox">
      <input
        id={id}
        name={name}
        type="checkbox"
        defaultChecked={checked}
        onChange={handleChange}
      />
      <label>{label}</label>
    </div>
  );
};

export default Checkbox_simple;
