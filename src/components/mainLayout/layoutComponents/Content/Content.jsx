import React from "react";
import "./content.scss";
import { Route } from "react-router-dom";
import Dashboard from "../../../../pages/Dashboard/Dashboard";
import Reservations from "../../../../pages/Reservations";
import EatOut from "../../../../pages/EatOut/EatOut";
import CategoryRestaurants from "../../../../pages/CategoryRestaurants/CategoryRestaurants";

const Content = () => {
  return (
    <content className="content">
      <Route exact path="/" render={() => <Dashboard />} />
      <Route exact path="/reservations" render={() => <Reservations />} />
      <Route exact path="/eat-out" render={() => <EatOut />} />
      <Route
        exact
        path="/eat-out/:category"
        render={() => <CategoryRestaurants />}
      />
    </content>
  );
};

export default Content;
