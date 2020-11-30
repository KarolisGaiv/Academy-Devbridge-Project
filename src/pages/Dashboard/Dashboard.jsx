import React from "react";
import "./dashboard.scss";
import WeatherWidget from "components/WeatherWidget/WeatherWidget";
import GreetingWidget from "../../components/GreetingWidget/GreetingWidget";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import database from "../../db.json";

const Dashboard = () => {
  const reservationsData = database.userData.reservations;

  return (
    <div className="dashboard">
      <section className="dashboard__header">
        <GreetingWidget />
        <WeatherWidget />
      </section>
      <section className="dashboard__reservations-wrapper">
        <span className="dashboard__section-title">Reservations</span>
        <div className="dashboard__reservations-cards">
          <CategoryCard
            category="Devices"
            icon="Phone"
            totalNumber={reservationsData.devices.length}
            keyword={"reserved"}
          />
          <CategoryCard
            category="Books"
            icon="Book"
            totalNumber={reservationsData.books.length}
            keyword={"reserved"}
          />
          <CategoryCard
            category="Meeting rooms"
            icon="Door"
            totalNumber={reservationsData.meetingRooms.length}
            keyword={"reserved"}
          />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
