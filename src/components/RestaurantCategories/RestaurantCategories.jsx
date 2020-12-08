import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import data from "../../db.json";
import "./restaurant-categories.scss";

const RestaurantCategories = () => {
  // loop through all restaurants and push their categories into one array
  const existingCategories = data.restaurants.restaurantList
    .map((i) => i.categories)
    .flat();

  //loop through provided array to count number of times element appears
  const countOccurences = (array, value) => {
    return array.reduce((accumulator, element) => {
      return value === element ? accumulator + 1 : accumulator;
    }, 0);
  };

  return (
    <div className="restaurant-categories">
      {data.restaurants.categories.sort().map((item) => (
        <CategoryCard
          category={item}
          keyword="places"
          icon={item}
          totalNumber={countOccurences(existingCategories, item)}
          key={item}
          iconsOutside={true}
        />
      ))}
    </div>
  );
};

export default RestaurantCategories;
