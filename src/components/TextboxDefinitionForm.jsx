import React from "react";
import Textbox_simple from "./Textbox_simple";
import Checkbox_simple from "./Checkbox_simple";
import "./TextboxDefinitionForm.styles";

const TextboxDefinitionForm = ({ controlProps, setControlProps }) => {
  const classList = "control";
  console.log(`-->controlProps: ${JSON.stringify(controlProps, null, 2)}`);

  const handleChange = e => {
    preventDefault();
    // console.log(e);
    // console.log(${e.target.name}: ${e.target.value});
    const id = e.target.id;
    switch (id) {
      case "idTextbox":
        console.log(`-->${id}: ${e.target.value}`);
        break;
      case "idCheckbox":
        console.log(`-->${id}: ${e.target.checked}`);
        break;
      default:
        break;
    }
  };
  return (
    <div id="idTextboxDefinitionForm" classList={classList}>
      <h5>Textbox Settings</h5>
      <form id={"idForm"}>
        <Textbox_simple
          id={"idID"}
          label={"id"}
          defaultValue={controlProps.id}
          onChange={handleChange}
          controlProps={controlProps}
          setControlProps={setControlProps}
        />
        <Textbox_simple
          id={"idLabel"}
          label={"Label"}
          defaultValue={controlProps.label}
          onChange={handleChange}
          controlProps={controlProps}
          setControlProps={setControlProps}
        />
        <Textbox_simple
          id={"idToolTip"}
          label={"ToolTip"}
          defaultValue={controlProps.toolTip}
          onChange={handleChange}
          controlProps={controlProps}
          setControlProps={setControlProps}
        />
        <Textbox_simple
          id={"idPlaceholderText"}
          label={"PlaceholderText"}
          defaultValue={controlProps.placeholderText}
          onChange={handleChange}
          controlProps={controlProps}
          setControlProps={setControlProps}
        />
        <Textbox_simple
          id={"idDefaultValue"}
          label={"Default Value"}
          defaultValue={controlProps.defaultValue}
          onChange={handleChange}
          controlProps={controlProps}
          setControlProps={setControlProps}
        />
        <Textbox_simple
          id={"idAlertText"}
          label={"AlertText"}
          defaultValue={controlProps.alertText}
          toolTip={"Leave empty if no value"}
          onChange={handleChange}
          controlProps={controlProps}
          setControlProps={setControlProps}
        />
        <Checkbox_simple
          id="idCheckbox"
          label="Required?"
          checked
          onChange={handleChange}
          controlProps={controlProps}
          setControlProps={setControlProps}
        />
        <Textbox_simple
          id={"idClassList"}
          label={"ClassList"}
          defaultValue={controlProps.classList}
          onChange={handleChange}
          controlProps={controlProps}
          setControlProps={setControlProps}
        />
      </form>
    </div>
  );
};

export default TextboxDefinitionForm;
