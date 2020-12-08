import React from "react";
import { RestaurantIntroCard } from "../RestaurantIntroCard/RestaurantIntroCard";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import "./best-restaurant-wrapper.scss";
import { Ratings } from "../../Rating/maxRatings";

const BestRestaurantWrapper = () => {
  return (
    <div className="best-restaurants">
      <div className="restaurant-intro-card__wrapper">
        <RestaurantIntroCard />
      </div>
      <div className="restaurant-card__wrapper">
        <RestaurantCard
          image={Ratings.numberOneImage()}
          checkins={Ratings.numberOneCheckIns()}
          rating={Ratings.numberOneRating()}
          categories={Ratings.numberOneCategories()}
          title={Ratings.numberOneTitle()}
          hours={Ratings.numberOneHours()}
        ></RestaurantCard>
        <RestaurantCard
          image={Ratings.numberTwoImage()}
          checkins={Ratings.numberTwoCheckIns()}
          rating={Ratings.numberTwoRating()}
          categories={Ratings.numberTwoCategories()}
          title={Ratings.numberTwoTitle()}
          hours={Ratings.numberTwoHours()}
        ></RestaurantCard>
      </div>
    </div>
  );
};

export default BestRestaurantWrapper;
