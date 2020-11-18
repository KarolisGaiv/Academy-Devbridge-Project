import WeatherWidget from "components/WeatherWidget/WeatherWidget";
import React from "react";

const Dashboard = () => {
  return (
    <main>
      <h1 style={{ margin: "auto", textAlign: "center" }}>Dashboard</h1>
      <WeatherWidget />
    </main>
  );
};

export default Dashboard;
