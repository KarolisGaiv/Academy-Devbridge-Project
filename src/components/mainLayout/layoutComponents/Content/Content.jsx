import React from "react";
import "./content.scss";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../../../../pages/Dashboard/Dashboard";
import Reservations from "../../../../pages/ReservationsPage/Reservations";
import EatOut from "../../../../pages/EatOut/EatOut";
import CategoryRestaurants from "../../../../pages/CategoryRestaurants/CategoryRestaurants";
import RestaurantPage from "../../../../pages/RestaurantPage/RestaurantPage";
import BookReservations from "../../../../pages/BookReservations/BookReservations";

const Content = () => {
  return (
    <content className="content">
      <Switch>
        <Route exact path="/" render={() => <Dashboard />} />
        <Route exact path="/reservations" render={() => <Reservations />} />
        <Route
          exact
          path="/reservations/Books"
          render={() => <BookReservations />}
        />
        <Route exact path="/eat-out" render={() => <EatOut />} />
        <Route
          exact
          path="/eat-out/:category"
          render={() => <CategoryRestaurants />}
        />
        <Route
          exact
          path="/eat-out//:restaurant"
          render={() => <RestaurantPage />}
        />
      </Switch>
    </content>
  );
};

export default Content;
