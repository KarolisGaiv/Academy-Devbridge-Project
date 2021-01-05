import React from "react";
import { RegistrationForm } from "components/Form/RegistrationForm/RegistrationForm.jsx";
import { Route, Switch } from "react-router-dom";
import { FormWrapper } from "../components/Form/FormWrapper/FormWrapper.jsx";
import { LoginForm } from "../components/Form/LoginForm/LoginForm";

export function Login() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <FormWrapper>
            <LoginForm />
          </FormWrapper>
        )}
      />
      <Route
        exact
        path="/register"
        render={() => (
          <FormWrapper>
            <RegistrationForm />
          </FormWrapper>
        )}
      />
    </Switch>
  );
}
