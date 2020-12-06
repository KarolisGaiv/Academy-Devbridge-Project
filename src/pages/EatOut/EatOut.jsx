import React from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import data from "../../db.json";
import "./eat-out.scss";

const EatOut = () => {
  // loop through all restaurant and push their categories into one array
  const test = data.restaurants.restaurantList.map((i) => i.categories).flat();

  //loop through provided array to count number of times element appears
  const countOccurences = (array, value) => {
    return array.reduce((accumulator, element) => {
      return value === element ? accumulator + 1 : accumulator;
    }, 0);
  };

  return (
    <main className="dashboard">
      <Breadcrumbs />
      <div className="dashboard__top">Placeholder for top widget</div>
      <div className="dashboard__categories-wrapper">
        {data.restaurants.categories.sort().map((item) => (
          <CategoryCard
            category={item}
            keyword="places"
            icon={item}
            totalNumber={countOccurences(test, item)}
            key={item}
            iconStyle="--outside"
          />
        ))}
      </div>
    </main>
  );
};

export default EatOut;
