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
    toolTip: "Enter Data inside textbox",
    defaultValue: "",
    alertText: "* alert!   alert!"
  };
  const [controlProps, setControlProps] = useState({ ...txtTextboxDemo });
  return (
    <div>
      <h3>React Controls Demo</h3>

      <hr />
      <TextboxDefinitionForm
        controlProps={controlProps}
        setControlProps={setControlProps}
      />
      <Textbox {...controlProps} />
    </div>
  );
}
