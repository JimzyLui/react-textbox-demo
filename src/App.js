import React, { useState } from "react";
import "./style.css";

import Textbox from "./components/Textbox";
import TextboxDefinitionForm from "./components/TextboxDefinitionForm";

export default function App() {
  const txtTextboxDemo = {
    id: "idTextbox",
    label: "Name",
    classList: "required",
    placeholderText: "value",
    toolTips: "Enter Data inside textbox"
  };
  const [controlProps, setControlProps] = useState({ ...txtTextboxDemo });
  return (
    <div>
      <h3>React Controls Demo</h3>
      <p>(using StackBlitz)</p>
      <hr />
      <TextboxDefinitionForm />
      <Textbox {...controlProps} />
    </div>
  );
}
