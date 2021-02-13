import React from "react";
import "./Textbox.styles";

// import styled from "styled-components";
// const TextboxStyles = styled``;

const Textbox_simple = props => {
  const {
    id,
    name,
    label,
    placeholderText,
    toolTip,
    defaultValue,
    classList,
    alertText,
    controlProps,
    setControlProps
  } = props;

  const handleChange = e => {
    // e.preventDefault();
    const { name, value } = e.target;
    console.log(`${name}: ${value}`);
    setControlProps({ ...controlProps, [name]: value });
  };

  return (
    <div classList={classList}>
      <span>
        <label>{label || "empty"}: </label>
      </span>
      <span>
        <input
          type="text"
          id={id || "idTextbox"}
          name={name || id}
          placeholder={placeholderText}
          title={toolTip}
          defaultValue={defaultValue}
          classList={classList}
          onChange={handleChange}
          // onBlur={handleChange}
        />
      </span>
      <span className="alertText">{alertText}</span>
    </div>
  );
};

export default Textbox_simple;
