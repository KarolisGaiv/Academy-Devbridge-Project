import React from "react";
import { RestaurantIntroCard } from "../RestaurantIntroCard/RestaurantIntroCard";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./best-restaurant-wrapper.scss";
import database from "../../../db.json";

const BestRestaurantWrapper = () => {
  const restaurant = database.restaurants.restaurantList;
  let i = Math.floor(Math.random() * Math.floor(restaurant.length));
  let j = Math.floor(Math.random() * Math.floor(restaurant.length));

  return (
    <div className="best-restaurant-wrapper">
      <RestaurantIntroCard></RestaurantIntroCard>
      <RestaurantCard image={restaurant[i].image}></RestaurantCard>
      <RestaurantCard image={restaurant[j].image}></RestaurantCard>
    </div>
  );
};

export default BestRestaurantWrapper;
