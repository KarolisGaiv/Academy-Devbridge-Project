import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./features/getStarted/components/MainNavigation/Dashboard";
import Reservations from "./features/getStarted/components/MainNavigation/Reservations";
import EatOut from "./features/getStarted/components/MainNavigation/EatOut";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route path="/reservations" component={Reservations} />
        <Route path="/eat-out" component={EatOut} />
      </Router>
    </div>
  );
};

export default App;
