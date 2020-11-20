import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Register } from "./Register";
import { Login } from "./Login";
// import Dashboard from "./Dashboard";
// import EatOut from "./EatOut";
// import Reservations from "./Reservations";

const LoginRegisterNavigation = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      {/* <Route path="/dashbord" component={Dashboard} />
      <Route path="/eat-out" component={EatOut} />
      <Route path="/reservations" component={Reservations} /> */}
    </Router>
  );
};

export default LoginRegisterNavigation;
