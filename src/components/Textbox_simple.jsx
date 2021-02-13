import React from "react";
import "./Textbox.styles";

// import styled from "styled-components";
// const TextboxStyles = styled``;

const Textbox_simple = props => {
  const {
    id,
    label,
    placeholderText,
    toolTip,
    defaultValue,
    classList,
    alertText,
    controlProps,
    setControlProps
  } = props;
  // console.log(props);
  // console.log(`controlProps: ${JSON.stringify(controlProps, null, 2)}`);
  const handleChange = e => {
    e.preventDefault();
    console.log(`${id}: ${e.target.value}`);
    setControlProps({ ...controlProps, id: e.target.value });
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
          placeholder={placeholderText}
          title={toolTip}
          defaultValue={defaultValue}
          classList={classList}
          onChange={handleChange}
        />
      </span>
      <span className="alertText">{alertText}</span>
    </div>
  );
};

export default Textbox_simple;
