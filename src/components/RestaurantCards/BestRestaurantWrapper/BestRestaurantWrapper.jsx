import React from "react";
import { RestaurantIntroCard } from "../RestaurantIntroCard/RestaurantIntroCard";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import "./best-restaurant-wrapper.scss";

export class BestRestaurantWrapper extends React.Component {
  render() {
    return (
      <div className="best-restaurant-wrapper">
        <RestaurantIntroCard></RestaurantIntroCard>
        <RestaurantCard></RestaurantCard>
        <RestaurantCard></RestaurantCard>
      </div>
    );
  }
}
