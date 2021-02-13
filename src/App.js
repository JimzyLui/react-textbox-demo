import React, { useState } from "react";
import "./style.css";

import Textbox from "./components/Textbox";
import TextboxDefinitionForm from "./components/TextboxDefinitionForm";

export default function App() {
  const txtTextboxDemo = {
    id: "idTextbox",
    label: "Name",
    classList: "",
    placeholderText: "value",
    toolTip: "Enter Data inside textbox",
    defaultValue: "",
    alertText: "* alert!   alert!",
    required: false
  };
  const [controlProps, setControlProps] = useState({ ...txtTextboxDemo });
  const [renderedValue, setRenderedValue] = useState("");
  return (
    <div>
      <h3>React Controls Demo</h3>
      <hr />
      <TextboxDefinitionForm
        controlProps={controlProps}
        setControlProps={setControlProps}
      />
      <br />
      <label>Rendered Control:</label>
      <br />
      <Textbox {...controlProps} setRenderedValue={setRenderedValue} />
      <br />
      <label>Inside Application:</label>
      <br />
      <code>
        <label>{controlProps.label}: </label>
        <span>{renderedValue}</span>
      </code>
    </div>
  );
}
