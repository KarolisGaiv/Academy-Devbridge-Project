import React from "react";
import "./registration-form.scss";
import "../form.scss";
import { Redirect } from "react-router-dom";
import { Button } from "../../Button/Button";
import InputField from "../../InputField/InputField";
import { Validators } from "../../InputField/inputValidators";

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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      redirect: true,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

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
      <form className="form-container" onSubmit={this.handleSubmit}>
        <h2 className="form-container__legend">Register</h2>
        <p className="form-container__sublegend">
          Let&rsquo;s get you on board
        </p>
        <div className="form-container__form-grid">
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
              { check: Validators.password, message: "password is not valid" },
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
        </div>
        <footer className="form-container__footer">
          <Button className="button button--enabled">Register</Button>
          <small className="form-container__footer-text">
            Already have an account?
            <a className="form-container__sign-link" href="/login">
              Sign in
            </a>
          </small>
        </footer>
      </form>
    );
  }
}
