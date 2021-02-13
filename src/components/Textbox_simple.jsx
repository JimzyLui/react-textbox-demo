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
    alertText
  } = props;
  console.log(props);

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
        />
      </span>
      <span className="alertText">{alertText}</span>
    </div>
  );
};

export default Textbox_simple;
