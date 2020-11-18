import React from "react";
import { Redirect } from "react-router-dom";
import FormContainer from "../FormContainer/FormContainer";
import InputField from "../../InputField/InputField";
import { Validators } from "../../InputField/inputValidators";
import "../../Form/RegistrationForm/registration-form.scss";

export class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      rpass: "",
      text: "",
      message: "",
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    if (
      !Validators.name(this.state.fname) &&
      !Validators.name(this.state.lname) &&
      !Validators.email(this.state.email) &&
      !Validators.password(this.state.pass) &&
      !Validators.passwordmatch(this.state.rpass)
    ) {
      this.setState({
        redirect: true,
      });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <FormContainer
        legend="Register"
        sublegend="Let&rsquo;s get you on board"
        buttonText="register"
        smallText="Already have an account?"
        path="/login"
        link="Sign in"
        submit={this.submit}
        elements={
          <React.Fragment>
            <InputField
              label="first name"
              value={this.state.fname}
              type="text"
              placeholder="e.g. Mike, Mike-Wilhelm"
              validators={[
                { check: Validators.name, message: "this field is required" },
              ]}
              required={true}
              onChange={this.handleChange("fname")}
            />
            <InputField
              label="last name"
              value={this.state.lname}
              type="text"
              placeholder="e.g. Caprio, DiCaprio"
              validators={[
                { check: Validators.name, message: "this field is required" },
              ]}
              required={true}
              onChange={this.handleChange("lname")}
            />
            <InputField
              label="email"
              value={this.state.email}
              type="email"
              placeholder="Valid email address"
              validators={[
                { check: Validators.email, message: "email is not valid" },
              ]}
              required={true}
              onChange={this.handleChange("email")}
            />
            <InputField
              label="password"
              value={this.state.pass}
              type="password"
              placeholder="At least 8 characters"
              validators={[
                {
                  check: Validators.password,
                  message: "password is not valid",
                },
              ]}
              required={true}
              onChange={this.handleChange("pass")}
            />
            <InputField
              label="repeat password"
              value={this.state.rpass}
              type="password"
              placeholder="At least 8 characters"
              validators={[
                {
                  check: Validators.passwordmatch,
                  message: "passwords do not match",
                },
              ]}
              required={true}
              onChange={this.handleChange("rpass")}
            />
          </React.Fragment>
        }
      />
    );
  }
}
