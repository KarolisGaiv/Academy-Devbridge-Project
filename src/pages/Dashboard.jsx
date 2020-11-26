import React from "react";
import GreetingWidget from "../components/GreetingWidget/GreetingWidget";

const Dashboard = () => {
  return (
    <main className="content__header">
      <GreetingWidget />
      <div>Placeholder for weather widget</div>
    </main>
  );
};

export default Dashboard;
