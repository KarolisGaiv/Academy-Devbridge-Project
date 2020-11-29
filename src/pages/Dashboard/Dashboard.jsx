import React from "react";
import "./dashboard.scss";
import WeatherWidget from "components/WeatherWidget/WeatherWidget";
import GreetingWidget from "../../components/GreetingWidget/GreetingWidget";
import ItemCard from "../../components/ItemCard/ItemCard";
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
          <ItemCard
            category="Devices"
            icon="Phone"
            totalNumber={reservationsData.devices.length}
            keyword={"reserved"}
          />
          <ItemCard
            category="Books"
            icon="Book"
            totalNumber={reservationsData.books.length}
            keyword={"reserved"}
          />
          <ItemCard
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
