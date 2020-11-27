import React from "react";
import "./dashboard.scss";
import WeatherWidget from "components/WeatherWidget/WeatherWidget";
import GreetingWidget from "../../components/GreetingWidget/GreetingWidget";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <section className="dashboard__header">
        <GreetingWidget />
        <WeatherWidget />
      </section>
    </div>
  );
};

export default Dashboard;
