import React from "react";
import { RestaurantIntroCard } from "../RestaurantIntroCard/RestaurantIntroCard";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./best-restaurant-wrapper.scss";
import { Ratings } from "../../Rating/maxRatings";

const BestRestaurantWrapper = () => {
  return (
    <div className="best-restaurant-wrapper">
      <RestaurantIntroCard></RestaurantIntroCard>
      <RestaurantCard
        image={Ratings.numberOneRating()[5]}
        checkins={Ratings.numberOneRating()[0]}
        rating={Ratings.numberOneRating()[1]}
      ></RestaurantCard>
      <RestaurantCard
        image={Ratings.numberTwoRating()[5]}
        checkins={Ratings.numberTwoRating()[0]}
        rating={Ratings.numberTwoRating()[1]}
      ></RestaurantCard>
    </div>
  );
};

export default BestRestaurantWrapper;
