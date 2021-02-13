import React from "react";
import "./style.css";

import Textbox from "./components/Textbox";

export default function App() {
  const txtTextboxDemo = {
    id: "idTextbox",
    label: "Name"
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Textbox {...txtTextboxDemo} />
    </div>
  );
}
