import React from "react";
import "./dashboard.scss";
import WeatherWidget from "components/WeatherWidget/WeatherWidget";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="dashboard__header">
        <WeatherWidget />
      </div>
    </main>
  );
};

export default Dashboard;
