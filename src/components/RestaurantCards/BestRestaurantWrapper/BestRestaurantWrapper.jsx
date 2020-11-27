import React from "react";
import { RestaurantIntroCard } from "../RestaurantIntroCard/RestaurantIntroCard";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./best-restaurant-wrapper.scss";
import database from "../../../db.json";

const BestRestaurantWrapper = () => {
  const restaurants = database.restaurants.restaurantList;
  let i = Math.floor(Math.random() * Math.floor(restaurants.length));
  let j = Math.floor(Math.random() * Math.floor(restaurants.length));

  return (
    <div className="best-restaurant-wrapper">
      <RestaurantIntroCard></RestaurantIntroCard>
      <RestaurantCard image={restaurants[i].image}></RestaurantCard>
      <RestaurantCard image={restaurants[j].image}></RestaurantCard>
    </div>
  );
};

export default BestRestaurantWrapper;
