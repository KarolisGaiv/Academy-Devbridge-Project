import React from "react";
import "./dashboard.scss";
import WeatherWidget from "components/WeatherWidget/WeatherWidget";
import GreetingWidget from "../../components/GreetingWidget/GreetingWidget";
import NewsFeed from "../../components/NewsFeedCard/NewsFeed";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <section className="dashboard__header">
        <GreetingWidget />
        <WeatherWidget />
      </section>
      <section className="dashboard__newsFeed">
        <h2 className="dashboard__headline">News and Stories</h2>
        <NewsFeed />
      </section>
    </div>
  );
};

export default Dashboard;
