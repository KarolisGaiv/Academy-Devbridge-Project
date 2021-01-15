import React from "react";
import { Redirect } from "react-router-dom";
import FormContainer from "../FormContainer/FormContainer";
import InputField from "../../InputField/InputField";
import { Validators } from "../../InputField/inputValidators";
import "./login-form.scss";

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      text: "",
      message: "",
      redirect: false,
      isLoaded: false,
      userEmail: [],
      userPassword: [],
      submitFail: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    if (
      !Validators.email(this.state.email) &&
      !Validators.password(this.state.pass) &&
      this.state.email === this.state.userEmail &&
      this.state.pass === this.state.userPassword
    ) {
      this.setState({
        redirect: true,
      });
    } else {
      this.setState({
        redirect: "error",
        submitFail: true,
      });
    }
  };

  componentDidMount() {
    fetch("http://localhost:3008/userData")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            userEmail: result.userEmail,
            userPassword: result.userPassword,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <FormContainer
        legend="Login"
        sublegend="Welcome back! Login, please"
        buttonText="login"
        smallText="Don&rsquo;t have an account?"
        path="/register"
        linkText="Sign up"
        submit={this.submit}
      >
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
          submitFail={this.state.submitFail}
          submitFailMessage="email doesn't match with the password"
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
      </FormContainer>
    );
  }
}
