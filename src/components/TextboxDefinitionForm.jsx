import React from "react";
import Textbox_simple from "./Textbox_simple";
import "./TextboxDefinitionForm.styles";

const TextboxDefinitionForm = () => {
  const classList = "control";
  const handleChange = e => {
    console.log(e);
    // console.log(${e.target.name}: ${e.target.value});
  };
  return (
    <div id="idTextboxDefinitionForm" classList={classList}>
      <h5>Textbox Settings</h5>
      <form id={"idForm"}>
        <Textbox_simple id={""} label={"id"} onChange={e => handleChange} />
      </form>
    </div>
  );
};

export default TextboxDefinitionForm;
