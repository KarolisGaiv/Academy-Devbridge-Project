import React, { Component } from "react";

import InputField from "components/InputField/input-field.jsx";
import { Validators } from "components/InputField/validator.js";

export default class App extends Component {
  state = {
    text: "",
    password: "",
    email: "",
    message: "",
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { fname, lname, pass, rpass, email } = this.state;

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
