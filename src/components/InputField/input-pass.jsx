import React, { Component } from "react";

import InputField from "components/InputField/input-field.jsx";
import { Validators } from "components/InputField/validator.js";

export default class InputPass extends Component {
  state = {
    text: "",
    password: "",
    message: "",
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { pass, rpass } = this.state;

    return (
      <div className="container">
        <InputField
          label="PASSWORD"
          value={pass}
          type="password"
          placeholder="At least 8 characters, one letter, one number"
          validators={[
            { check: Validators.password, message: "PASSWORD IS NOT VALID" },
          ]}
          onChange={this.handleChange("pass")}
        />
        <InputField
          label="REPEAT PASSWORD"
          value={rpass}
          type="password"
          placeholder="At least 8 characters, one letter, one number"
          validators={[
            { check: Validators.password, message: "PASSWORD IS NOT VALID" },
          ]}
          onChange={this.handleChange("rpass")}
        />
      </div>
    );
  }
}
