import React from "react";
import "./Textbox.styles";

// import styled from "styled-components";
// const TextboxStyles = styled``;

const Textbox = props => {
  const {
    id,
    label,
    placeholderText,
    toolTip,
    defaultValue,
    classList,
    alertText,
    required,
    setRenderedValue
  } = props;
  console.log(`Textbox props: ${JSON.stringify(props, null, 2)}`);
  let newclassList = `${classList} ${required ? "required" : ""}`;
  const handleChange = e => {
    setRenderedValue(e.target.value);
  };
  return (
    <div className={newclassList}>
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
          // className={classList}
          onChange={handleChange}
        />
      </span>
      <span className="alertText">{alertText}</span>
    </div>
  );
};

export default Textbox;
