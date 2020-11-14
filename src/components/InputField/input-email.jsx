import React, { Component } from "react";

import InputField from "components/InputField/input-field.jsx";
import { Validators } from "components/InputField/validator.js";

export default class InputEmail extends Component {
  state = {
    text: "",
    email: "",
    message: "",
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { email } = this.state;

    return (
      <div className="container">
        <InputField
          label="EMAIL"
          value={email}
          type="email"
          placeholder="Valid email address"
          validators={[
            { check: Validators.email, message: "EMAIL IS NOT VALID" },
          ]}
          onChange={this.handleChange("email")}
        />
      </div>
    );
  }
}
