import React, { Component } from "react";

import InputField from "components/InputField/InputField";
import { Validators } from "components/InputField/inputValidators";

export default class InputPassword extends Component {
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
          label="password"
          value={pass}
          type="password"
          placeholder="At least 8 characters, one letter, one number"
          validators={[
            { check: Validators.password, message: "PASSWORD IS NOT VALID" },
          ]}
          onChange={this.handleChange("pass")}
        />
        <InputField
          label="repeat password"
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
