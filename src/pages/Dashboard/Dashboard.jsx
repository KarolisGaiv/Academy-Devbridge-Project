import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import WeatherWidget from "components/WeatherWidget/WeatherWidget";
import GreetingWidget from "../../components/GreetingWidget/GreetingWidget";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import BestRestaurantWrapper from "../../components/RestaurantCards/BestRestaurantWrapper/BestRestaurantWrapper";
import NewsFeed from "../../components/NewsFeedCard/NewsFeed";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(url);
      const data = await response.json();
      const reservationsData = data.reservations;
      setData(reservationsData);
      setLoading(false);
    }

    fetchMyAPI();
  }, [url]);

  return { data, loading };
};

const Dashboard = () => {
  const { data, loading } = useFetch("http://localhost:3008/userData");

  return loading ? (
    <div>...loading</div>
  ) : (
    <div className="dashboard">
      <section className="dashboard__header">
        <GreetingWidget />
        <WeatherWidget />
      </section>
      <section className="dashboard__reservations">
        <h2 className="dashboard__heading">Reservations</h2>
        <div className="dashboard__reservations-cards">
          <CategoryCard
            category="devices"
            icon="Phone"
            totalNumber={data.devices.length}
            keyword={"reserved"}
            directTo="dashboard/reservations"
          />
          <CategoryCard
            category="books"
            icon="Book"
            totalNumber={data.books.length}
            keyword={"reserved"}
            directTo="dashboard/reservations"
          />
          <CategoryCard
            category="meeting Rooms"
            icon="Door"
            totalNumber={data.meetingRooms.length}
            keyword={"reserved"}
            directTo="dashboard/reservations"
          />
        </div>
        <BestRestaurantWrapper />
      </section>
      <section className="dashboard__newsFeed">
        <h2 className="dashboard__heading">News and Stories</h2>
        <NewsFeed />
      </section>
    </div>
  );
};

export default Dashboard;
