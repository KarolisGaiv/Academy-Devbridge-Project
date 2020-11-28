import React from "react";
import "./dashboard.scss";
import WeatherWidget from "components/WeatherWidget/WeatherWidget";
import GreetingWidget from "../../components/GreetingWidget/GreetingWidget";
import ItemCard from "../../components/ItemCard/ItemCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <section className="dashboard__header">
        <GreetingWidget />
        <WeatherWidget />
      </section>
      <section className="dashboard__reservations-wrapper">
        <span className="dashboard__section-title">Reservations</span>
        <div className="dashboard__reservations-cards">
          <ItemCard name="Devices" icon="Phone" />
          <ItemCard name="Books" icon="Book" />
          <ItemCard name="Meeting rooms" icon="Door" />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
