import React, { Component } from "react";

import InputField from "components/InputField/input-field.jsx";
import { Validators } from "components/InputField/validator.js";

export default class App extends Component {
  state = {
    text: "",
    password: "",
    number: "",
    email: "",
    country: "",
    message: "",
    acceptance: false,
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  handleClick = (event) => {
    event.preventDefault();
    alert("Button Clicked");
  };

  handleDropdown = (country) => {
    this.setState({ country });
  };

  handleCheckbox = (acceptance) => {
    this.setState({ acceptance });
  };

  render() {
    const { fname, lname, pass, rpass, email } = this.state;

    return (
      <div className="container">
        <InputField
          label="FIRST NAME"
          value={fname}
          type="text"
          placeholder="Placeholder"
          validators={[
            { check: Validators.required, message: "THIS FIELD IS REQUIRED" },
          ]}
          onChange={this.handleChange("fname")}
        />
        <InputField
          label="LAST NAME"
          value={lname}
          type="text"
          placeholder="Placeholder"
          validators={[
            { check: Validators.required, message: "THIS FIELD IS REQUIRED" },
          ]}
          onChange={this.handleChange("lname")}
        />
        <InputField
          label="PASSWORD"
          value={pass}
          type="password"
          placeholder="Placeholder"
          validators={[
            { check: Validators.required, message: "THIS FIELD IS REQUIRED" },
          ]}
          onChange={this.handleChange("pass")}
        />
        <InputField
          label="REPEAT PASSWORD"
          value={rpass}
          type="password"
          placeholder="Placeholder"
          validators={[
            { check: Validators.required, message: "THIS FIELD IS REQUIRED" },
          ]}
          onChange={this.handleChange("rpass")}
        />
        <InputField
          label="EMAIL"
          value={email}
          type="text"
          placeholder="Placeholder"
          validators={[
            { check: Validators.required, message: "THIS FIELD IS REQUIRED" },
          ]}
          onChange={this.handleChange("email")}
        />
      </div>
    );
  }
}
