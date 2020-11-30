import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Register } from "./Register";
import { Login } from "./Login";

const LoginRegisterNavigation = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  );
};

export default LoginRegisterNavigation;
