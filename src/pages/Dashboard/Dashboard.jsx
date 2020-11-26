import React from "react";
import "./dashboard.scss";
import WeatherWidget from "components/WeatherWidget/WeatherWidget";
import GreetingWidget from "../../components/GreetingWidget/GreetingWidget";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="dashboard__header">
        <GreetingWidget />
        <WeatherWidget />
      </div>
    </main>
  );
};

export default Dashboard;
