import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Carousel from "components/Carousel/Carousel";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import data from "../../db.json";
import "./eat-out.scss";

const EatOut = () => {
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
    <div className="eat-out">
      <Breadcrumbs />
      <section className="eat-out__discover-restaurants">
        <h2 className="eat-out__heading">Hungry? Find the best place!</h2>
        <Carousel />
      </section>
      <div className="eat-out__categories-section">
        <h2 className="eat-out__heading eat-out__heading--small">Categories</h2>
        <div className="eat-out__restaurant-categories">
          {data.restaurants.categories.sort().map((item) => (
            <CategoryCard
              category={item}
              keyword="places"
              icon={item}
              totalNumber={countOccurences(existingCategories, item)}
              key={item}
              iconStyle="outside"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EatOut;
