import React from "react";
import "./dashboard.scss";
import WeatherWidget from "components/WeatherWidget/WeatherWidget";
import GreetingWidget from "../../components/GreetingWidget/GreetingWidget";
import BestRestaurantWrapper from "../../components/RestaurantCards/BestRestaurantWrapper/BestRestaurantWrapper";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <section className="dashboard__header">
        <GreetingWidget />
        <WeatherWidget />
      </section>
      <section className="dashboard__reservations">
        <h2 className="dashboard__heading">Reservations</h2>
        <BestRestaurantWrapper />
      </section>
      <section className="dashboard__newsFeed">
        <h2 className="dashboard__heading">News and Stories</h2>
      </section>
    </div>
  );
};

export default Dashboard;
