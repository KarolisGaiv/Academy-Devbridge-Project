import React, { Component } from "react";

import InputField from "components/InputField/input-field.jsx";
import { Validators } from "components/InputField/validator.js";

export default class InputName extends Component {
  state = {
    text: "",
    message: "",
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { fname, lname } = this.state;

    return (
      <div className="container">
        <InputField
          label="FIRST NAME"
          value={fname}
          type="text"
          placeholder="e.g. John"
          validators={[
            { check: Validators.required, message: "THIS FIELD IS REQUIRED" },
          ]}
          onChange={this.handleChange("fname")}
        />
        <InputField
          label="LAST NAME"
          value={lname}
          type="text"
          placeholder="e.g. Smith"
          validators={[
            { check: Validators.required, message: "THIS FIELD IS REQUIRED" },
          ]}
          onChange={this.handleChange("lname")}
        />
      </div>
    );
  }
}
