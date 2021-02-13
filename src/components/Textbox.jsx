import React from "react";
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
  return (
    <>
      <span>
        <label>{label}: </label>
      </span>
      <span>
        <input
          type="text"
          id={id}
          placeholder={placeholderText}
          title={toolTip}
          defaultValue={defaultValue}
          classList={classList}
        />
      </span>
      <span className="alertText">{alertText}</span>
    </>
  );
};

export default Textbox;
