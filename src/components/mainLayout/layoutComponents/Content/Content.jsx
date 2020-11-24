import React from "react";
import "./content.scss";

import { Route } from "react-router-dom";
import Dashboard from "../../../../pages/Dashboard";
import Reservations from "../../../../pages/Reservations";
import EatOut from "../../../../pages/EatOut";

const Content = () => {
  return (
    <content className="content">
      <Route exact path="/" render={() => <Dashboard />} />
      <Route path="/reservations" render={() => <Reservations />} />
      <Route path="/eat-out" render={() => <EatOut />} />
    </content>
  );
};

export default Content;
