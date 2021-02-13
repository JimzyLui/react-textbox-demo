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
    alertText
  } = props;
  console.log(`Textbox props: ${JSON.stringify(props, null, 2)}`);

  return (
    <div className={classList}>
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
        />
      </span>
      <span className="alertText">{alertText}</span>
    </div>
  );
};

export default Textbox;
