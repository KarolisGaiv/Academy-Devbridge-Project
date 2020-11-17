import React from "react";
import "./login-form.scss";
import "./form.scss";
import { Button } from "../Button/Button";
import { Redirect } from "react-router-dom";
import InputField from "../InputField/InputField";
import { Validators } from "../InputField/inputValidators";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
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

    if (
      !Validators.email(this.state.email) &&
      !Validators.password(this.state.pass)
    ) {
      this.setState({
        redirect: true,
      });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/register" />;
    }
    return (
      <form className="form-container" onSubmit={this.handleSubmit}>
        <h2 className="form-container__legend">Login</h2>
        <p className="form-container__sublegend">Welcome back! Login, please</p>
        <div className="form-container__form-grid">
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
        </div>
        <footer className="form-container__footer">
          <Button className="button button--enabled">Login</Button>
          <small className="form-container__footer-text">
            Don&rsquo;t have an account?
            <a className="form-container__sign-link" href="/register">
              Sign up
            </a>
          </small>
        </footer>
      </form>
    );
  }
}
