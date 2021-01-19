import React from "react";
import "./content.scss";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../../../../pages/Dashboard/Dashboard";
import Reservations from "../../../../pages/ReservationsPage/Reservations";
import EatOut from "../../../../pages/EatOut/EatOut";
import CategoryRestaurants from "../../../../pages/CategoryRestaurants/CategoryRestaurants";
import RestaurantPage from "../../../../pages/RestaurantPage/RestaurantPage";
import Layout from "../../../../components/mainLayout/Layout";
import propTypes from "prop-types";

const Content = ({ path }) => {
  return (
    <content className="content">
      <Switch>
        <Route exact path="/dashboard" render={() => <Dashboard />} />
        <Route exact path="/" render={() => <Layout />} />
        <Route exact path="/dashboard/reservations">
          {path !== "/dashboard/reservations" ? (
            <Redirect to="/dashboard/reservations/devices" />
          ) : null}
        </Route>
        <Route
          exact
          path="/dashboard/reservations/:itemPlural"
          render={() => <Reservations />}
        />
        <Route exact path="/dashboard/eat-out" render={() => <EatOut />} />
        <Route
          exact
          path="/dashboard/eat-out/:category"
          render={() => <CategoryRestaurants />}
        />
        <Route
          exact
          path="/dashboard/eat-out//:restaurant"
          render={() => <RestaurantPage />}
        />
      </Switch>
    </content>
  );
};

export default Content;

Content.propTypes = {
  path: propTypes.string,
};
